/* ==========================================================================
   tools/generate-data-js.js
   Builds site/data/data.js, the file:// bootstrap fallback.

   data.js is a plain <script> that assigns `window.__SENECA_DATA` so the site
   works when double-clicked from disk, where same-origin fetch() of the JSON
   files is blocked by the browser's CORS/file rules (see
   Knowledge_Base/Decisions/persistence-decision.md). The data loader tries
   fetch() first and falls back to this object (site/js/core/data-loader.js).

    It is GENERATED from the 7 data/*.json seed files and must never be
    hand-edited. Re-run after any migrate-*.js:  node tools/generate-data-js.js

    SAFETY GUARD: like migrate-all.js, this refuses to run over a seed that
    carries teacher-authored content unless --force is set (Export first).
    ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');
const L = require('./lib/migrate-lib.js');
const SafetyGuard = require('./lib/safety-guard.js');

const DATA_DIR = path.join(L.projectRoot, 'site/data');

// Collection names, in a stable order. These keys must match the names the
// data loader requests (getData(name) -> fetch('data/'+name+'.json')).
const COLLECTIONS = [
  'course',
  'lessons',
  'glossary',
  'research',
  'progress',
  'projects',
  'reference',
  'shortcuts',
  'checklist',
  'artistic-checklist',
  'design-principles',
  'downloads',
  'weekly-guides',
];

function loadCollection(name) {
  const file = path.join(DATA_DIR, `${name}.json`);
  L.assert(fs.existsSync(file), `missing ${name}.json - run the migrate scripts first`);
  const raw = fs.readFileSync(file, 'utf8');
  const parsed = JSON.parse(raw); // throws with context if the seed is invalid
  return { parsed, raw: raw.replace(/\s+$/, '') };
}

function run(force) {
  // SAFETY GUARD (locked decision): refuse to regenerate data.js over a seed
  // that carries teacher-authored content, unless --force is set. (When driven
  // by migrate-all.js the top-level guard already ran; this is the net that
  // also protects standalone `node generate-data-js.js` invocation.)
  SafetyGuard.guard(!!force);
  const parts = COLLECTIONS.map((name) => {
    const { parsed, raw } = loadCollection(name);
    // Re-serialize deterministically (2-space) so the file is stable and diffable.
    const body = JSON.stringify(parsed, null, 2).replace(/\s+$/, '');
    // Quote keys that are not valid JS identifiers (e.g. 'artistic-checklist' has
    // a hyphen) so the object literal stays valid JS; plain keys stay bare.
    const key = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(name) ? name : JSON.stringify(name);
    return `  ${key}: ${body}`;
  });

  const banner = [
    '/* ==========================================================================',
    '   data/data.js - GENERATED file:// bootstrap. DO NOT HAND-EDIT.',
    '',
    '   Regenerate from the seed JSON with:',
    '       node tools/generate-data-js.js',
    '',
    '   Assigns window.__SENECA_DATA, which the data loader falls back to when',
    '   same-origin fetch() of data/*.json is blocked (the file:// / double-click',
    '   case). Keep the keys in sync with getData(name) in js/core/data-loader.js.',
    '   ========================================================================== */',
  ].join('\n');

  const content = `${banner}\n\nwindow.__SENECA_DATA = {\n${parts.join(',\n')}\n};\n`;
  const out = path.join(DATA_DIR, 'data.js');
  fs.writeFileSync(out, content, 'utf8');

  // Sanity: the generated file must be parseable as a JS object assignment.
  const probe = new Function('window', content);
  const scope = {};
  probe(scope);
  for (const name of COLLECTIONS) {
    L.assert(name in scope.__SENECA_DATA, `data.js missing key: ${name}`);
  }

  return { file: out, collections: COLLECTIONS.length };
}

if (require.main === module) {
  const force = process.argv.includes('--force');
  const r = run(force);
  console.log(`[generate-data-js] ${r.file} (collections=${r.collections})`);
}

module.exports = { run };
