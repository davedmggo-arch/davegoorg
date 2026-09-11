/* ==========================================================================
   tools/migrate-course.js
   Builds site/data/course.json from:
     - lessons/semester-3/README.md          (project arc table: weeks + delivery)
     - research/fall-2026-seneca-dates-and-terminology.md  (calendar: dates)
     - lessons/semester-3/lessons/wk-*.md    (titles, checkpoints, projects)
   Prose-bearing course fields (oneIdea, threeLines, houseRules, gradingTilt)
   come verbatim from the JSON data model (Knowledge_Base/Decisions/data-model.md),
   which is the authoritative spec for course identity strings.
   ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');
const L = require('./lib/migrate-lib.js');

const LESSONS_DIR = path.join(L.projectRoot, 'lessons/semester-3/lessons');
const README = path.join(L.projectRoot, 'lessons/semester-3/README.md');
const DATES = path.join(L.projectRoot, 'research/fall-2026-seneca-dates-and-terminology.md');

const MONTHS = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
  jul: 7, aug: 8, sep: 9, sept: 9, oct: 10, nov: 11, dec: 12,
};

function iso(year, month, day) {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

// "Friday, Sept 11" -> "2026-09-11" (term year 2026 for this course)
function dateFromMetaLine(md) {
  const m = md.match(/\*Friday,\s+([A-Za-z]+)\s+(\d{1,2})/);
  if (!m) return null;
  const month = MONTHS[m[1].toLowerCase().slice(0, 3)] || MONTHS[m[1].toLowerCase()];
  if (!month) return null;
  return iso(2026, month, Number(m[2]));
}

// Research week table: "| 8 | Oct 26 - 30 | Fri Oct 30 | ..." -> { start, end, friday }
// Handles: end day with no month ("Oct 26 - 30", "Dec 14 - 16"), and a
// parenthesized Friday ("(Dec 18)") which means there is no Friday that week.
function researchWeekRow(md, wk) {
  const m = md.match(new RegExp(`^\\|\\s*${wk}\\s*\\|([^|]+)\\|([^|]+)\\|`, 'm'));
  if (!m) return null;
  const range = m[1].trim();
  const friday = m[2].trim();
  const startM = range.match(/([A-Za-z]+)\s+(\d{1,2})/);
  if (!startM) return null;
  const startMonth = MONTHS[startM[1].toLowerCase().slice(0, 3)];
  const out = { start: iso(2026, startMonth, Number(startM[2])) };
  const endM = range.match(/-\s*(?:([A-Za-z]+)\s+)?(\d{1,2})\s*$/);
  if (endM) {
    const endMonth = endM[1] ? MONTHS[endM[1].toLowerCase().slice(0, 3)] : startMonth;
    out.end = iso(2026, endMonth, Number(endM[2]));
  }
  const paren = /\(.*\)/.test(friday); // "(Dec 18)" => no actual Friday
  const friM = friday.match(/([A-Za-z]+)\s+(\d{1,2})/);
  if (!paren && friM) out.friday = iso(2026, MONTHS[friM[1].toLowerCase().slice(0, 3)], Number(friM[2]));
  return out;
}

function lessonFiles() {
  return fs.readdirSync(LESSONS_DIR)
    .filter((f) => /^wk-\d{2}.*\.md$/.test(f))
    .sort();
}

function h1Of(md) {
  const m = md.match(/^#\s+(.*)$/m);
  return m ? m[1].trim() : '';
}

// "Week 2 - Project A: block the place (Checkpoint A1)" -> { title, project, checkpoint }
function parseLessonMeta(md) {
  const h1 = h1Of(md);
  let title = h1.replace(/^Week\s+\d+\s*[-\u2014]\s*/, '').trim();
  title = title.replace(/\s*\((?:Checkpoint|Delivery)\s+[^)]*\)\s*$/, '').trim();
  const projectM = h1.match(/Project\s+([ABC])/);
  const project = projectM ? projectM[1].toLowerCase() : null;
  let checkpoint = null;
  const sec4 = L.sectionByHeading(md, /^4\.\s/);
  if (sec4) {
    const cp = sec4.title.match(/\b([ABC]\d|Delivery\s+[ABC])\b/);
    if (cp) checkpoint = cp[1];
  }
  return { title, project, checkpoint };
}

// README arc table: "| **A - Environment / world study** | ... | Wk 2 to 4 | Wk 4 (Oct 2) |"
function parseArcTable(md) {
  const rows = L.tableRows(L.sectionByHeading(md, /The arc at a glance/).body);
  const out = {};
  for (const r of rows) {
    const letterM = r[0].match(/\*\*([ABC])\s*\u2014\s*([^*]+?)\*\*/);
    if (!letterM) continue;
    const letter = letterM[1].toLowerCase();
    const name = letterM[2].trim();
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
      name,
      weeks,
      deliveryWeek: deliveryM ? Number(deliveryM[1]) : null,
      deliveryDate: dateM ? iso(2026, MONTHS[dateM[1].toLowerCase().slice(0, 3)], Number(dateM[2])) : null,
      crit: /midterm/.test(r[3]) ? 'midterm' : /final/.test(r[3]) ? 'final' : null,
    };
  }
  return out;
}

function run() {
  const readmeMd = L.readMd(README);
  const datesMd = L.readMd(DATES);

  // 13-week spine: one entry per lesson file, plus the Wk 8 Study Week buffer.
  const weeks = [];
  const rawFiles = lessonFiles();

  // Deduplicate: if a week has multiple files (e.g. canonical + alternate),
  // keep only the first alphabetically (canonical variant).
  const seenWk = new Set();
  const files = [];
  for (const f of rawFiles) {
    const wk = f.match(/^wk-(\d{2})/)[1];
    if (!seenWk.has(wk)) { seenWk.add(wk); files.push(f); }
  }

  let insertBuffer = true;
  for (const f of files) {
    const wk = Number(f.match(/^wk-(\d{2})/)[1]);
    const md = L.readMd(path.join(LESSONS_DIR, f));
    const meta = parseLessonMeta(md);
    const date = dateFromMetaLine(md);
    L.assert(date, `could not parse date from ${f}`);
    if (insertBuffer && wk > 8) {
      // Wk 8 = Study Week (no lesson file in source). Date from the research
      // week table (row 8: "Oct 26 - 30", Friday Oct 30).
      const row8 = researchWeekRow(datesMd, 8) || { friday: '2026-10-30' };
      weeks.push({
        week: 8,
        date: row8.friday,
        project: null,
        title: 'Study Week (buffer)',
        checkpoint: null,
        lessonId: 'wk-08',
        noGate: true,
      });
      insertBuffer = false;
    }
    weeks.push({
      week: wk,
      date,
      project: meta.project,
      title: meta.title,
      checkpoint: meta.checkpoint,
      lessonId: `wk-${String(wk).padStart(2, '0')}`,
    });
  }
  L.assert(weeks.length === 15, `expected 15 week spine entries, got ${weeks.length}`);

  // Projects (A/B/C) from the README arc table.
  const arc = parseArcTable(readmeMd);
  L.assert(arc.a && arc.b && arc.c, 'arc table parse failed for a/b/c');
  const projects = ['a', 'b', 'c'].map((letter, i) => ({
    id: letter,
    name: arc[letter].name,
    weeks: arc[letter].weeks,
    weeksLabel: arc[letter].weeks.length ? `Wk ${arc[letter].weeks.join(', ')}` : '',
    delivery: {
      week: arc[letter].deliveryWeek,
      date: arc[letter].deliveryDate,
      ...(arc[letter].crit ? { crit: arc[letter].crit } : {}),
    },
    project: letter,
    order: i + 1,
  }));

  // Study / partial / grace buffers from the research calendar.
  const study = researchWeekRow(datesMd, 8) || {};
  const partial = researchWeekRow(datesMd, 15) || {};

  const course = {
    id: 'seneca-3d-integration-fall-2026',
    title: '3D Integration in Visual Development',
    institution: 'Seneca College',
    semester: 'Fall 2026, Semester 3',
    classDay: 'Fridays, 3-hour classes',
    termStart: weeks[0].date,
    termEnd: weeks[weeks.length - 1].date,
    studyWeek: {
      start: study.start || '2026-10-26',
      end: study.end || study.friday || '2026-10-30',
      label: 'Study Week',
      noGate: true,
    },
    partialWeek: {
      start: partial.start || '2026-12-14',
      end: partial.end || partial.friday || '2026-12-16',
      label: 'Partial week',
    },
    graceWeek: { week: 13, label: 'Grace week (Dec 4)', noGate: true },
    oneIdea: '3D makes a good idea fast, not a weak idea good.',
    gradingTilt: '~60% thinking (design thinking + iteration evidence) / ~40% render',
    threeLines: 'The design is the goal, 3D is the accelerator, and the process is the grade.',
    houseRules: [
      'Blender 5.x all term; EEVEE daily, Cycles-class for hero passes only',
      'Grease Pencil not taught; 2D-over-3D is a paintover in your own app',
      'Tools are available, never a hard dependency; every tool has a manual fallback',
      'The grade is the thinking, not the render',
    ],
    projects,
    weeks,
  };

  const out = L.emitJson('site/data/course.json', course);
  return { file: out, weeks: weeks.length, projects: projects.length };
}

if (require.main === module) {
  const r = run();
  console.log(`[migrate-course] ${r.file} (weeks=${r.weeks}, projects=${r.projects})`);
}

module.exports = { run };
