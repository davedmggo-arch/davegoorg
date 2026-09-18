/* ==========================================================================
   tools/validate-js-syntax.js  (pre-deploy gate, not part of the site)
   Recursively finds every .js file under the site root and validates that
   each one parses as an ES module WITHOUT executing it.

   Method: copy each .js to a temp .mjs file and run `node --check` on it.
   `node --check` on a .mjs file performs a pure ES-module syntax check
   (import/export allowed) with zero execution. The temp file is deleted
   afterwards.

   Usage:   node tools/validate-js-syntax.js [optional rootDir]
            default rootDir = the folder containing tools/ (the site root)

   Exit:    0 when every file parses clean (prints "ALL JS FILES OK (N files)")
            1 when any file fails (each failure printed with error + line)
   ========================================================================== */
'use strict';
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

// ---------------------------------------------------------------- root dir
const ROOT = path.resolve(process.argv[2] || path.join(__dirname, '..'));

// Directories that are never scanned.
const SKIP_DIRS = new Set(['node_modules', '.git']);
const BACKUPS_DIR = path.join(ROOT, 'data', 'backups');

// Scratch dir for temp .mjs copies (kept inside the project, never /tmp).
// Anchored to __dirname so it stays in the project work/ dir even when an
// alternate rootDir is passed on the command line.
const SCRATCH = path.resolve(__dirname, '..', '..', '..', 'work');
fs.mkdirSync(SCRATCH, { recursive: true });

// ------------------------------------------------------------- collect .js
function collect(dir, out) {
  let entries;
  try {
    entries = fs.readdirSync(dir, { withFileTypes: true });
  } catch (e) {
    return out; // unreadable dir: skip
  }
  for (const ent of entries) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (SKIP_DIRS.has(ent.name)) continue;
      if (full === BACKUPS_DIR) continue;
      collect(full, out);
    } else if (ent.isFile() && ent.name.toLowerCase().endsWith('.js')) {
      if (full.startsWith(BACKUPS_DIR + path.sep)) continue;
      out.push(full);
    }
  }
  return out;
}

// -------------------------------------------------------------- check one
function checkFile(file) {
  let tmp;
  try {
    // Deterministic temp name; overwrite any stale copy from a prior run.
    tmp = path.join(SCRATCH, 'validate-js-syntax-' +
      path.relative(ROOT, file).split(path.sep).join('__') + '.mjs');
    fs.copyFileSync(file, tmp);
    const r = spawnSync(process.execPath, ['--check', tmp], {
      encoding: 'utf8',
      timeout: 30000,
    });
    if (r.error) {
      return { ok: false, error: 'spawn error: ' + r.error.message };
    }
    if (r.status === 0) {
      return { ok: true };
    }
    const errText = (r.stderr || r.stdout || '').trim();
    return { ok: false, error: errText || ('node --check exited ' + r.status) };
  } finally {
    if (tmp) {
      try { fs.unlinkSync(tmp); } catch (e) { /* best effort */ }
    }
  }
}

// ------------------------------------------------------------------ main
const files = collect(ROOT, []).sort();
const failures = [];

for (const file of files) {
  const rel = path.relative(ROOT, file);
  const res = checkFile(file);
  if (res.ok) {
    console.log('PASS  ' + rel);
  } else {
    console.log('FAIL  ' + rel);
    failures.push({ rel, error: res.error });
  }
}

console.log('');
if (failures.length === 0) {
  console.log('ALL JS FILES OK (' + files.length + ' files)');
  process.exit(0);
} else {
  console.log(failures.length + ' of ' + files.length + ' JS FILES FAILED:');
  for (const f of failures) {
    console.log('');
    console.log('  ' + f.rel);
    for (const line of f.error.split('\n')) {
      console.log('    ' + line);
    }
  }
  process.exit(1);
}
