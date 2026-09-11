/* ==========================================================================
   tools/migrate-progress.js
   Builds site/data/progress.json from the generated lessons.json + projects.json.

   progress.json is a single object that drives the XP/progress bar and the
   dashboard. It is seeded with an empty student and ALL weeks + projects
   present in their initial (not-started) state, so the data model validation
   "progress.json seeds with empty student and all weeks present" holds, and it
   stays in sync with the lesson/project checkpoints automatically.

   It is not prose-bearing (no markdown to preserve) - it is derived state.
   ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');
const L = require('./lib/migrate-lib.js');

const DATA_DIR = path.join(L.projectRoot, 'site/data');

function readJson(name) {
  const file = path.join(DATA_DIR, `${name}.json`);
  L.assert(fs.existsSync(file), `missing ${name}.json - run migrate-lessons/projects first`);
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function run() {
  const lessons = readJson('lessons');
  const projects = readJson('projects');

  const weeks = {};
  for (const l of lessons) {
    const noGate = l.checkpoint == null;
    weeks[l.id] = {
      read: false,
      reflected: false,
      checkpointStatus: noGate ? 'n/a' : 'pending',
      note: '',
    };
  }

  const proj = {};
  for (const p of projects) {
    const checkpointStatus = {};
    for (const cp of (p.checkpoints || [])) {
      checkpointStatus[cp.id] = 'pending';
    }
    proj[p.id] = {
      status: 'not-started',
      checkpointStatus,
      delivered: false,
    };
  }

  // Deterministic seed timestamp: the seed is a canonical "empty student" state,
  // not a real edit, so a fixed epoch keeps the emitted progress.json (and the
  // regenerated data.js) byte-identical across repeated migrations. The real
  // "last updated" time is stamped by state.js on the first student action.
  const SEED_EPOCH = '2026-01-01T00:00:00.000Z';

  const progress = {
    student: { name: '', id: '' },
    xp: { total: 0, perCheckpoint: 250, perReflect: 25, perLessonRead: 10 },
    weeks,
    projects: proj,
    updatedAt: SEED_EPOCH,
  };

  L.assert(Object.keys(weeks).length === lessons.length, 'progress weeks count mismatch');
  const out = L.emitJson('site/data/progress.json', progress);
  return { file: out, weeks: Object.keys(weeks).length, projects: Object.keys(proj).length };
}

if (require.main === module) {
  const r = run();
  console.log(`[migrate-progress] ${r.file} (weeks=${r.weeks}, projects=${r.projects})`);
}

module.exports = { run };


