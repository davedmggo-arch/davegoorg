/* ==========================================================================
   tools/migrate-all.js
   Orchestrator: runs every migrator in dependency order and reports counts.

   Order matters: lessons + projects must exist before progress (which is
   derived from them), and all seeds must exist before data.js is generated.

        node tools/migrate-all.js
        node tools/migrate-all.js --force

    SAFETY GUARD: before touching any seed, this checks the CURRENT seed for
    teacher-authored content (media, lesson guidedSections, reference Books). If
    found, it REFUSES to run and prints an "Export first" message, because
    re-migrating from the source .md would drop that content. Pass --force to
    override (wipes the teacher-authored content). See lib/safety-guard.js.
    ========================================================================== */
'use strict';

const path = require('path');
const L = require('./lib/migrate-lib.js');
const SafetyGuard = require('./lib/safety-guard.js');

function log(step, r) {
  const detail = [];
  if (r.file) detail.push(r.file);
  if (r.total != null) detail.push(`total=${r.total}`);
  if (r.weeks != null) detail.push(`weeks=${r.weeks}`);
  if (r.projects != null) detail.push(`projects=${r.projects}`);
  if (r.collections != null) detail.push(`collections=${r.collections}`);
  if (r.withContent != null) detail.push(`with content=${r.withContent}`);
  console.log(`  [ok] ${step.padEnd(20)} ${detail.join('  ')}`);
}

function run(force) {
  // Re-migration SAFETY GUARD (locked decision): refuse to rebuild from source
  // if the current seed carries teacher-authored content, unless --force is set.
  // This runs BEFORE any seed is touched, so a refusal leaves the seed unchanged.
  SafetyGuard.guard(!!force);
  const t0 = Date.now();
  console.log('migrate-all: building seed data\n');

  const steps = [
    ['course', require('./migrate-course.js')],
    ['lessons', require('./migrate-lessons.js')],
    ['glossary', require('./migrate-glossary.js')],
    ['projects', require('./migrate-projects.js')],
    ['reference', require('./migrate-reference.js')],
    ['research', require('./migrate-research.js')],
    ['progress', require('./migrate-progress.js')],
    ['data.js', require('./generate-data-js.js')],
  ];

  const results = {};
  for (const [name, mod] of steps) {
    try {
      const r = mod.run(!!force);
      results[name] = r;
      log(name, r);
    } catch (err) {
      console.error(`\n  [FAIL] ${name}: ${err.message}`);
      throw err;
    }
  }

  const ms = Date.now() - t0;
  const glossary = results.glossary ? results.glossary.total : 0;
  console.log(`\n  done in ${ms}ms - glossary terms=${glossary}, all seeds valid`);
  return results;
}

if (require.main === module) {
  const force = process.argv.includes('--force');
  run(force);
}

module.exports = { run };


