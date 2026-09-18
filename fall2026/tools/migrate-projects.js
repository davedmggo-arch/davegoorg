/* ==========================================================================
   tools/migrate-projects.js
   Builds site/data/projects.json (3 records: A/B/C).

   Sources:
     - lessons/semester-3/briefs/brief-<x>-*.md    (brief prose + prompt + guardrails + deliverables + checkpoints)
     - lessons/semester-3/rubrics/rubric-<x>-*.md  (rubric prose)
     - lessons/semester-3/README.md                (arc table: weeks / deliveryWeek / deliveryDate)

   `brief`, `rubric`, and `prompt` are copied VERBATIM (byte-for-byte) from the
   source markdown; `guardrails`, `deliverables`, and `checkpoints` are
   structured for the progress UI but keep their cell text as written.
   ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');
const L = require('./lib/migrate-lib.js');

const BRIEFS = path.join(L.projectRoot, 'lessons/semester-3/briefs');
const RUBRICS = path.join(L.projectRoot, 'lessons/semester-3/rubrics');
const README = path.join(L.projectRoot, 'lessons/semester-3/README.md');

const MONTHS = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
  jul: 7, aug: 8, sep: 9, sept: 9, oct: 10, nov: 11, dec: 12,
};
function iso(year, month, day) {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

// ---- file discovery ------------------------------------------------------

function findFile(dir, prefix) {
  const hit = fs.readdirSync(dir).filter((f) => f.startsWith(prefix) && f.endsWith('.md')).sort();
  L.assert(hit.length === 1, `expected exactly one ${prefix}*.md in ${dir}, got: ${hit.join(', ') || '(none)'}`);
  return hit[0];
}

// Strip the leading H1 line (and the blank line after it); keep the rest verbatim.
function minusH1(md) {
  const lines = md.split('\n');
  if (!/^#\s/.test(lines[0])) return md;
  let i = 1;
  while (i < lines.length && lines[i].trim() === '') i++;
  return lines.slice(i).join('\n').replace(/\s+$/, '');
}

// Strip a wrapping bold/italic pair or surrounding code ticks from a cell,
// keeping inner markdown. The bold pair is stripped ONLY when it wraps the
// WHOLE cell (matched leading + trailing markers). A leading ** that merely
// opens a bold phrase mid-cell (e.g. "**Three blockouts**, each with...") is
// preserved - the old /^\*+/ strip ate that opening pair and left a dangling
// closing ** in the generated seeds (lesson-demark-leading-bold-strip).
function deMark(cell) {
  let s = String(cell);
  let m = s.match(/^\*\*([\s\S]+)\*\*$/);
  if (m) s = m[1];
  if (s.length > 2 && s.startsWith('*') && s.endsWith('*')) {
    m = s.match(/^\*([\s\S]+)\*$/);
    if (m) s = m[1];
  }
  s = s.replace(/^`+|`+$/g, '').trim();
  return s;
}

// ---- arc table (README) -> weeks / delivery ------------------------------

function parseArc(readmeMd) {
  const sec = L.sectionByHeading(readmeMd, /The arc at a glance/);
  L.assert(sec, 'README: could not find "The arc at a glance" section');
  const rows = L.tableRows(sec.body);
  const out = {};
  for (const r of rows) {
    const m = r[0].match(/\*\*([ABC])\s*\u2014\s*([^*]+?)\*\*/);
    if (!m) continue;
    const letter = m[1].toLowerCase();
    const weeksM = r[2].match(/Wk\s+(\d+)(?:\s+to\s+(\d+))?/);
    const extra = r[2].match(/,\s*(Wk\s+(\d+))/);
    const deliveryM = r[3].match(/Wk\s+(\d+)/);
    const dateM = r[3].match(/\(([A-Za-z]+)\s+(\d{1,2})\)/);
    const weeks = [];
    if (weeksM) {
      const from = Number(weeksM[1]);
      const to = weeksM[2] ? Number(weeksM[2]) : from;
      for (let w = from; w <= to; w++) weeks.push(w);
      if (extra) weeks.push(Number(extra[2]));
    }
    out[letter] = {
      weeks,
      deliveryWeek: deliveryM ? Number(deliveryM[1]) : null,
      deliveryDate: dateM ? iso(2026, MONTHS[dateM[1].toLowerCase().slice(0, 3)], Number(dateM[2])) : null,
    };
  }
  return out;
}

// ---- per-project structured pieces ---------------------------------------

function promptSection(briefMd) {
  const sec = L.sectionByHeading(briefMd, /^The prompt$/);
  if (!sec) return null;  /* New briefs embed prompt inside "Project Brief" heading */
  return sec.body;
}

function guardrails(briefMd) {
  const sec = L.sectionByHeading(briefMd, /Guardrail menu/);
  if (!sec) return [];
  const rows = L.tableRows(sec.body);
  return rows.map((r) => ({
    tool: deMark(r[0]),
    does: String(r[1]).trim(),
    fallback: String(r[2] || '').trim(),
  }));
}

function deliverables(briefMd) {
  const sec = L.sectionByHeading(briefMd, /^Deliverables$/);
  if (!sec) return [];
  const out = [];
  for (const line of sec.body.split('\n')) {
    const m = line.match(/^\s*-\s+(.*)$/);
    if (m) out.push(deMark(m[1]));
  }
  return out;
}

function checkpoints(briefMd, letter) {
  const sec = L.sectionByHeading(briefMd, /^Checkpoints$/);
  if (!sec) return [];
  const subs = L.splitByHeading(sec.body, 3).filter((s) => s.level === 3);
  const out = [];
  for (const s of subs) {
    let id = s.title;
    const idM = s.title.match(/\b([ABC]\d|Delivery)\b/);
    if (idM) {
      id = idM[1];
      if (id === 'Delivery') id = `Delivery ${letter.toUpperCase()}`;
    }
    const nameM = s.title.match(/\u2014\s*(.*?)\s*\(Wk/);
    const name = nameM ? nameM[1].trim() : (idM && id !== s.title ? '' : s.title);
    const weekM = s.title.match(/Wk\s+(\d+)/);
    out.push({
      id,
      week: weekM ? Number(weekM[1]) : null,
      name: name || id,
      body: s.body,
    });
  }
  return out;
}

// ---- world ---------------------------------------------------------------
// Project A is "three environment blockouts, student's choice" (no locked
// shared world); B/C are single-subject (no shared world).
const WORLD = { a: "Student's chosen environment", b: null, c: null };

// ---- build ---------------------------------------------------------------

function buildProject(letter, arc) {
  const briefFile = findFile(BRIEFS, `brief-${letter}-`);
  const rubricFile = findFile(RUBRICS, `rubric-${letter}-`);
  const briefMd = L.readMd(path.join(BRIEFS, briefFile));
  const rubricMd = L.readMd(path.join(RUBRICS, rubricFile));

  const h1 = (briefMd.match(/^#\s+(.*)$/m) || [])[1];
  L.assert(h1, `${briefFile}: no H1 found`);

  const a = arc[letter];
  const rec = {
    id: letter,
    name: h1.trim(),
    world: WORLD[letter],
    weeks: a.weeks,
    deliveryWeek: a.deliveryWeek,
    deliveryDate: a.deliveryDate,
    prompt: promptSection(briefMd),
    brief: minusH1(briefMd),
    rubric: minusH1(rubricMd),
    guardrails: guardrails(briefMd),
    deliverables: deliverables(briefMd),
    checkpoints: checkpoints(briefMd, letter),
    source: {
      brief: `lessons/semester-3/briefs/${briefFile}`,
      rubric: `lessons/semester-3/rubrics/${rubricFile}`,
    },
    order: { a: 1, b: 2, c: 3 }[letter],
  };
  return rec;
}

function run() {
  const arc = parseArc(L.readMd(README));
  L.assert(arc.a && arc.b && arc.c, 'arc table parse failed for a/b/c');
  const projects = ['a', 'b', 'c'].map((letter) => buildProject(letter, arc));
  for (const p of projects) {
    L.assert(p.brief && p.rubric, `project ${p.id}: brief/rubric missing`);
    L.assert(p.checkpoints.length >= 2, `project ${p.id}: expected >=2 checkpoints`);
  }
  const out = L.emitJson('site/data/projects.json', projects);
  return { file: out, total: projects.length };
}

if (require.main === module) {
  const r = run();
  console.log(`[migrate-projects] ${r.file} (records=${r.total})`);
}

module.exports = { run };
