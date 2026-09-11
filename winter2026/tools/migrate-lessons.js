/* ==========================================================================
   tools/migrate-lessons.js
   Builds site/data/lessons.json from lessons/semester-3/lessons/wk-*.md.

   Six-beat mapping (by heading NUMBER, which is stable across files):
     ## 1. Retrieval hook   -> beats.retrievalHook
     ## 2. The one new idea -> beats.oneNewConcept
     ## 3. Guided making    -> beats.guidedMaking
     ## 4. Check / Checkpoint / Delivery / No checkpoint -> beats.check
     ## 5. Reflect          -> beats.reflect
     ## 6. Revisit          -> beats.revisit

   Beat bodies are copied VERBATIM (byte-for-byte) from the source markdown:
   the raw text after the heading line up to the next numbered heading, with
   only leading blank lines / trailing whitespace trimmed. No paraphrase.

   Wk 8 (Study Week) has no lesson file in the source: it gets a minimal
   record with a note, empty beats, checkpoint null.
   ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');
const L = require('./lib/migrate-lib.js');

const DIR = path.join(L.projectRoot, 'lessons/semester-3/lessons');

const MONTHS = {
  jan: 1, feb: 2, mar: 3, apr: 4, may: 5, jun: 6,
  jul: 7, aug: 8, sep: 9, sept: 9, oct: 10, nov: 11, dec: 12,
};

function iso(year, month, day) {
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
}

// "*Friday, Sept 11 - no project yet - 3-hour class*" -> "2026-09-11"
function dateFromMetaLine(md) {
  const m = md.match(/\*Friday,\s+([A-Za-z]+)\s+(\d{1,2})/);
  if (!m) return null;
  const key = m[1].toLowerCase().slice(0, 3);
  const month = MONTHS[key] || MONTHS[m[1].toLowerCase()];
  if (!month) return null;
  return iso(2026, month, Number(m[2]));
}

function h1Of(md) {
  const m = md.match(/^#\s+(.*)$/m);
  return m ? m[1].trim() : '';
}

function titleFromH1(h1) {
  return h1
    .replace(/^Week\s+\d+\s*[-\u2014]\s*/, '')
    .replace(/\s*\((?:Checkpoint|Delivery)\s+[^)]*\)\s*$/,'')
    .trim();
}

// Bold "The idea: ..." line inside the beat-2 body -> plain concept text.
// Primary: the explicit "The idea:" spine (used by every other week).
// Fallback: a bare bold hook on the first line (wk-01, "The idea:" removed).
function oneConceptFrom(beat2Body) {
  const body = String(beat2Body);
  const stripIdea = (s) => s.replace(/^The idea\b[^:]*:?\s*/i, '').trim();
  const idea = body.match(/\*\*The idea[\s\S]*?\*\*/);
  if (idea) {
    const text = stripIdea(idea[0].replace(/^\*\*|\*\*$/g, ''));
    return text || null;
  }
  const firstLine = body.split('\n').find((l) => l.trim().startsWith('**'));
  if (firstLine) {
    const m = firstLine.trim().match(/^\*\*([^*\n]+)\*\*$/);
    if (m) {
      const text = stripIdea(m[1]);
      return text || null;
    }
  }
  return null;
}

// Parse a "> **Aside (further reading):** *Book* by Author, ..." block into
// { book, author, chapter?, note? }. Best-effort; every block is captured.
function parseAside(line) {
  const m = line.match(/>\s*\*\*Aside \(further reading\):\*\*\s*([\s\S]+)$/);
  if (!m) return null;
  let rest = m[1].trim();

  const bookM = rest.match(/^\*([^*]+)\*/);
  const book = bookM ? bookM[1].trim() : null;
  if (bookM) rest = rest.slice(bookM[0].length).trim();

  let author = null;
  const byM = rest.match(/^by\s+([^,]+),?/);
  if (byM) {
    author = byM[1].trim();
    rest = rest.slice(byM[0].length).replace(/^\s*,?\s*/, '').trim();
  }

  let chapter = null;
  const chM = rest.match(/\*\*?(Chapter\s+\d+(?:\s*,\s*"[^"]*")?)/);
  if (chM) {
    chapter = chM[1].replace(/^Chapter\s+(\d+)/, 'Chapter $1').trim();
    chapter = chapter.replace(/[\*"]+$/g, '').trim();
  }

  // note = first sentence of whatever remains after the chapter mention
  let noteSrc = chM ? rest.slice(chM.index + chM[0].length) : rest;
  noteSrc = noteSrc.replace(/^[\s,]+/, '').trim();
  const sentM = noteSrc.match(/^(.+?)(?:\.\s|$)/);
  const note = sentM ? sentM[1].trim() : (noteSrc || null);

  const out = {};
  if (book) out.book = book;
  if (author) out.author = author;
  if (chapter) out.chapter = chapter;
  if (note) out.note = note;
  return out;
}

function furtherReadingFromBody(body) {
  const out = [];
  for (const line of String(body).split('\n')) {
    const parsed = parseAside(line);
    if (parsed) out.push(parsed);
  }
  return out;
}

function buildLesson(file) {
  const full = path.join(DIR, file);
  const md = L.readMd(full);
  const wk = Number(file.match(/^wk-(\d{2})/)[1]);
  const h1 = h1Of(md);

  // Beats by numbered heading (1..6). Deeper headings (###) stay in the body.
  const sections = L.splitByHeading(md, 2).filter((s) => s.level === 2);
  const byNumber = {};
  for (const s of sections) {
    const n = s.title.match(/^\d+/);
    if (n) byNumber[Number(n[0])] = s;
  }
  L.assert(byNumber[1] && byNumber[2] && byNumber[3] && byNumber[4] && byNumber[5] && byNumber[6],
    `${file}: expected six numbered ## sections`);

  const beats = {
    retrievalHook: byNumber[1].body,
    oneNewConcept: byNumber[2].body,
    guidedMaking: byNumber[3].body,
    check: byNumber[4].body,
    reflect: byNumber[5].body,
    revisit: byNumber[6].body,
  };

  // Checkpoint from the beat-4 heading ("Checkpoint - A1 (Wk 2)" / "Delivery A (Wk 4)").
  let checkpoint = null;
  const cp = byNumber[4].title.match(/\b([ABC]\d|Delivery\s+[ABC])\b/);
  if (cp) checkpoint = cp[1];
  const checkpointIsDelivery = checkpoint != null && /^Delivery/.test(checkpoint);

  // Project from the H1 ("Project A: ..."); fall back to the *Friday, ... -
  // Project A ... * meta line (some weeks name the project there, not in the
  // H1). We test ONLY the meta line for the fallback so a "Project A" mention
  // buried in the body of an orientation week cannot false-positive it.
  const projectM = h1.match(/Project\s+([ABC])/);
  const metaLine = (md.match(/\*Friday[^\n]*/) || [''])[0];
  const metaProjectM = metaLine.match(/Project\s+([ABC])/);
  const project = (projectM || metaProjectM) ? (projectM || metaProjectM)[1].toLowerCase() : null;

  const date = dateFromMetaLine(md);
  L.assert(date, `${file}: could not parse the *Friday, ... * date line`);

  const furtherReading = furtherReadingFromBody(
    beats.oneNewConcept + '\n' + beats.guidedMaking + '\n' + beats.check + '\n' + beats.revisit
  );

  return {
    id: `wk-${String(wk).padStart(2, '0')}`,
    week: wk,
    date,
    project,
    title: titleFromH1(h1),
    oneConcept: oneConceptFrom(beats.oneNewConcept),
    checkpoint,
    checkpointIsDelivery,
    source: `lessons/semester-3/lessons/${file}`,
    beats,
    furtherReading,
    order: wk,
  };
}

function studyWeekRecord() {
  return {
    id: 'wk-08',
    week: 8,
    date: '2026-10-30', // Friday of Seneca Study Week (Oct 26-30), per research calendar
    project: null,
    title: 'Study Week (buffer)',
    oneConcept: null,
    checkpoint: null,
    checkpointIsDelivery: false,
    note: 'Study Week (Oct 26-30). No lesson file in the source; buffer week with no gate.',
    source: null,
    beats: {
      retrievalHook: '',
      oneNewConcept: '',
      guidedMaking: '',
      check: '',
      reflect: '',
      revisit: '',
    },
    furtherReading: [],
    order: 8,
  };
}

function run() {
  const files = fs.readdirSync(DIR)
    .filter((f) => /^wk-\d{2}.*\.md$/.test(f))
    .sort();

  // Deduplicate: if a week has multiple files (e.g. canonical + alternate),
  // keep only the first alphabetically (canonical variant).
  const seen = new Set();
  const deduped = [];
  for (const f of files) {
    const wk = f.match(/^wk-(\d{2})/)[1];
    if (!seen.has(wk)) { seen.add(wk); deduped.push(f); }
  }

  // Only inject a synthetic study-week buffer if no wk-08 file exists in source.
  const hasWk08 = deduped.some((f) => f.match(/^wk-(08)/));

  const lessons = [];
  let bufferInserted = false;
  for (const f of deduped) {
    const wk = Number(f.match(/^wk-(\d{2})/)[1]);
    if (!hasWk08 && !bufferInserted && wk > 8) {
      lessons.push(studyWeekRecord());
      bufferInserted = true;
    }
    lessons.push(buildLesson(f));
  }
  if (!hasWk08) {
    L.assert(bufferInserted, 'wk-08 study-week buffer was not inserted');
  }

  const out = L.emitJson('site/data/lessons.json', lessons);
  const withContent = lessons.filter((l) => l.beats.oneNewConcept).length;
  return { file: out, total: lessons.length, withContent };
}

if (require.main === module) {
  const r = run();
  console.log(`[migrate-lessons] ${r.file} (records=${r.total}, with content=${r.withContent})`);
}

module.exports = { run };
