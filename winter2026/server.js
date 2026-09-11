/* ==========================================================================
   site/server.js
   Zero-dependency local server for the Seneca 3D Integration site.

   One command:      node site/server.js
   Serves:           http://localhost:8000  (PORT or --port to override)

   What it does:
     (a) Serves the `site/` directory over http so same-origin fetch() of the
         JSON seed files works (GET / -> index.html, /data/*.json, /js, /css).
     (b) Exposes a tiny write API so teacher edits land on the real files:
             GET  /api/data/:name   -> site/data/<name>.json
             POST /api/data/:name  -> rewrites site/data/<name>.json on disk
         This is a FILE SERVER, not a database: Node's built-in `http` module
         only - no packages, no SQL, no ORM (see persistence-decision.md).

    Security: paths are resolved and confined to `site/`; traversal is rejected.
    The server binds to 127.0.0.1 (loopback) so it is not reachable on shared
    networks; http://localhost:<port> still works for the local client.
    ========================================================================== */
'use strict';

const http = require('http');
const fs = require('fs');
const path = require('path');

const SITE_DIR = __dirname; // this file lives in site/
const DATA_DIR = path.join(SITE_DIR, 'data');

// --dry-run flag: accept POST for validation but NEVER write to disk.
// Used by test harnesses so schema validation can be verified without
// touching live seed data. Enabled via `node server.js --dry-run`.
const DRY_RUN = process.argv.includes('--dry-run');

// Bind to loopback only, so the teacher console + data API are never reachable
// on shared networks. (localhost still resolves to 127.0.0.1 for the client.)
const HOST = '127.0.0.1';

const ALLOWED = new Set([
  'course', 'lessons', 'glossary', 'research', 'progress', 'projects', 'reference',
  'shortcuts', 'checklist', 'artistic-checklist', 'design-principles',
]);

// Light per-collection schema (P2-1 hardening): the top-level SHAPE the body
// must have, plus the REQUIRED record keys and their expected primitive type.
// This is deliberately a required-keys table, NOT a full schema engine - just
// enough to reject a malformed/buggy save before it lands on the teacher's seed
// file. `shape` is 'array' (a list of records) or 'object' (a single object).
// `required` maps a key to one of 'string' | 'number' | 'boolean' | 'object'
// | 'array'. `enum` constrains a string key to a fixed value set.
// NOTE: `progress` is a single OBJECT (see site/data/progress.json + admin-data.js
// line 173), matching the real data shape - it is validated as an object, not an
// array (the Round 1 spec's list-of-names mislabelled it; we follow the data).
const SCHEMA = {
  course:    { shape: 'object', required: { title: 'string', weeks: 'array' } },
  lessons:   { shape: 'array',  required: { id: 'string', beats: 'object' } },
  glossary:  { shape: 'array',  required: { id: 'string', category: 'string', anchor: 'string' } },
  projects:  { shape: 'array',  required: { id: 'string' } },
  research:  { shape: 'array',  required: { id: 'string' } },
  reference: { shape: 'array',  required: { id: 'string', section: 'string' } },
  shortcuts: { shape: 'array',  required: { id: 'string', category: 'string', key: 'string', label: 'string' }, optional: { image: ['string', 'array'] } },
  checklist: { shape: 'array', required: { id: 'string', category: 'string', text: 'string' }, optional: { environment: 'string', image: ['string', 'array'] } },
  'artistic-checklist': { shape: 'array', required: { id: 'string', category: 'string', text: 'string' }, optional: { image: ['string', 'array'] } },
  'design-principles': { shape: 'array', required: { id: 'string', category: 'string', text: 'string' }, optional: { image: ['string', 'array'] } },
  progress:  { shape: 'object', required: { weeks: 'object' } },
};

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/markdown; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8',
};

function contentType(file) {
  return MIME[path.extname(file).toLowerCase()] || 'application/octet-stream';
}

function send(res, status, body, headers) {
  res.writeHead(status, Object.assign({ 'Content-Length': Buffer.byteLength(body) }, headers));
  res.end(body);
}

function sendJson(res, status, obj) {
  send(res, status, JSON.stringify(obj, null, 2) + '\n', { 'Content-Type': 'application/json; charset=utf-8' });
}

// Confine a request path to SITE_DIR; return the absolute file path or null.
function safeFile(urlPath) {
  const decoded = decodeURIComponent(urlPath.split('?')[0]);
  const rel = decoded === '/' ? 'index.html' : decoded.replace(/^\//, '');
  const abs = path.resolve(SITE_DIR, rel);
  if (abs !== SITE_DIR && !abs.startsWith(SITE_DIR + path.sep)) return null;
  return abs;
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', (c) => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')));
    req.on('error', reject);
  });
}

// --- Light per-collection validation (P2-1) ----------------------------------
// Coarse type probe: 'array' for arrays, else null-safe typeof (objects read as
// 'object'). Enough to check required keys against their declared primitive type.
function typeOf(v) {
  if (Array.isArray(v)) return 'array';
  if (v === null) return 'null';
  return typeof v; // 'object' | 'string' | 'number' | 'boolean' | 'undefined' | ...
}

// Check a single record (or the top-level object) against the required-keys table.
// Returns an error string, or null when the record is well-shaped.
// `optional` keys are validated only if present; absent is always valid.
function checkRecord(name, idx, rec, spec) {
  const where = idx === null ? name : (name + '[' + idx + ']');
  if (rec === null || typeof rec !== 'object' || Array.isArray(rec)) {
    return where + ' must be an object (got ' + (rec === null ? 'null' : Array.isArray(rec) ? 'array' : typeof rec) + ')';
  }
  for (const key of Object.keys(spec.required)) {
    const want = spec.required[key];
    if (!(key in rec)) {
      return where + ' is missing required key "' + key + '" (expected a ' + want + ')';
    }
    const got = typeOf(rec[key]);
    if (got !== want) {
      return where + ' key "' + key + '" must be a ' + want + ' (got ' + got + ')';
    }
    const allowed = spec.enum && spec.enum[key];
    if (allowed && want === 'string' && allowed.indexOf(rec[key]) === -1) {
      return where + ' key "' + key + '" must be one of {' + allowed.join(', ') + '} (got ' + JSON.stringify(rec[key]) + ')';
    }
  }
  /* Optional fields: validated only if present. `spec.optional` maps key ->
     array of accepted type strings, e.g. { image: ['string', 'array'] }. */
  if (spec.optional) {
    for (const key of Object.keys(spec.optional)) {
      if (!(key in rec)) continue;
      const got = typeOf(rec[key]);
      if (spec.optional[key].indexOf(got) === -1) {
        return where + ' optional key "' + key + '" must be one of {' + spec.optional[key].join(', ') + '} (got ' + got + ')';
      }
    }
  }
  return null;
}

// Validate a whole collection body. Returns an error string, or null when valid.
function validateCollection(name, data) {
  const spec = SCHEMA[name];
  if (!spec) return 'no schema defined for collection "' + name + '"';
  const gotTop = data === null ? 'null' : Array.isArray(data) ? 'array' : typeof data;
  if (spec.shape === 'array') {
    if (!Array.isArray(data)) return 'expected a top-level ARRAY of records (got ' + gotTop + ')';
    for (let i = 0; i < data.length; i++) {
      const err = checkRecord(name, i, data[i], spec);
      if (err) return err;
    }
    return null;
  }
  if (data === null || typeof data !== 'object' || Array.isArray(data)) {
    return 'expected a top-level OBJECT (got ' + gotTop + ')';
  }
  return checkRecord(name, null, data, spec);
}

async function handleApi(req, res, urlPath, method) {
  const m = urlPath.match(/^\/api\/data\/([a-z0-9_-]+)\/?$/);
  if (!m) {
    sendJson(res, 404, { error: 'not found', hint: 'use /api/data/<name>' });
    return;
  }
  const name = m[1];
  if (!ALLOWED.has(name)) {
    sendJson(res, 400, { error: 'unknown collection', name, allowed: [...ALLOWED] });
    return;
  }
  const file = path.join(DATA_DIR, `${name}.json`);

  if (method === 'GET') {
    if (!fs.existsSync(file)) {
      sendJson(res, 404, { error: 'no such collection', name });
      return;
    }
    const raw = fs.readFileSync(file, 'utf8');
    JSON.parse(raw); // validate before returning
    send(res, 200, raw, { 'Content-Type': 'application/json; charset=utf-8' });
    return;
  }

  if (method === 'POST') {
    const raw = await readBody(req);
    let parsed;
    try { parsed = JSON.parse(raw); } catch (e) { sendJson(res, 400, { error: 'invalid JSON', detail: e.message }); return; }

    // P2-1: light per-collection schema check BEFORE writing. A malformed body
    // (wrong top-level shape, or a record missing a required key / wrong type)
    // is rejected with a 400 + a clear message and NEVER lands on the seed file.
    const vErr = validateCollection(name, parsed);
    if (vErr) {
      sendJson(res, 400, { error: 'schema validation failed', name, detail: vErr, required: SCHEMA[name] && SCHEMA[name].required });
      return;
    }

    const pretty = JSON.stringify(parsed, null, 2) + '\n';

    /* --dry-run: validate schema only, never write to disk. */
    if (DRY_RUN) {
      sendJson(res, 200, { ok: true, name, dryRun: true, bytes: Buffer.byteLength(pretty) });
      return;
    }

    fs.mkdirSync(DATA_DIR, { recursive: true });
    fs.writeFileSync(file, pretty, 'utf8');
    JSON.parse(fs.readFileSync(file, 'utf8')); // confirm the rewrite re-parses

    // Keep the file:// bootstrap (data/data.js) in sync with what we just
    // wrote. This is the whole point of saving over http: the teacher's edits
    // must survive a later double-click open. Never fatal - a save that landed
    // on disk must not be reported as failed if the mirror step hiccups.
    let regenerated = false;
    let regenError = null;
    try {
      require(path.join(SITE_DIR, 'tools', 'generate-data-js.js')).run();
      regenerated = true;
    } catch (e) { regenError = e.message; }

    sendJson(res, 200, { ok: true, name, bytes: Buffer.byteLength(pretty), regenerated, regenError });
    return;
  }

  sendJson(res, 405, { error: 'method not allowed', method });
}

function handleStatic(res, file) {
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
    send(res, 404, '404 - not found', { 'Content-Type': 'text/plain; charset=utf-8' });
    return;
  }
  const raw = fs.readFileSync(file);
  send(res, 200, raw, {
    'Content-Type': contentType(file),
    'Cache-Control': 'no-cache, must-revalidate',
  });
}

async function handle(req, res) {
  const urlPath = (req.url || '/').split('?')[0];
  if (urlPath.startsWith('/api/')) {
    await handleApi(req, res, urlPath, req.method);
    return;
  }
  const file = safeFile(req.url || '/');
  if (!file) {
    send(res, 403, '403 - forbidden', { 'Content-Type': 'text/plain; charset=utf-8' });
    return;
  }
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) {
    handleStatic(res, path.join(file, 'index.html'));
    return;
  }
  handleStatic(res, file);
}

function portFromArgv() {
  const i = process.argv.indexOf('--port');
  if (i !== -1 && process.argv[i + 1]) return Number(process.argv[i + 1]);
  if (process.env.PORT) return Number(process.env.PORT);
  return 8000;
}

function start() {
  const port = portFromArgv();
  const server = http.createServer((req, res) => {
    handle(req, res).catch((err) => {
      try { sendJson(res, 500, { error: err.message }); } catch (_) { /* ignore */ }
    });
  });
  server.listen(port, HOST, () => {
    console.log('Seneca 3D Integration site');
    console.log('  site root: ' + SITE_DIR);
    console.log('  data dir:  ' + DATA_DIR);
    console.log('  bind:      ' + HOST + ' (loopback only)');
    console.log('  http://localhost:' + port);
    console.log('  api:       GET/POST /api/data/<name>  (' + [...ALLOWED].join(', ') + ')');
  });
}

if (require.main === module) {
  start();
}

module.exports = { handle, safeFile };

