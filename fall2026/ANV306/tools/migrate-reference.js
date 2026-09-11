/* ==========================================================================
   tools/migrate-reference.js
   Builds site/data/reference.json (7 records) from:
     - lessons/semester-3/reference/README.md   (Contents table: title / covers / for / order)
     - lessons/semester-3/reference/ref-*.md     (verbatim page body)

   `title` and `covers` come from the README Contents table (the display labels);
   `for` is the "Most useful for" column split on commas; `body` is the page
   markdown VERBATIM (byte-for-byte) with only the leading H1 line removed.
   `order` is the position of the row in the Contents table (1..7).
   ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');
const L = require('./lib/migrate-lib.js');

const DIR = path.join(L.projectRoot, 'lessons/semester-3/reference');
const README = path.join(DIR, 'README.md');

// Strip the leading H1 line (and the blank line after it); keep the rest verbatim.
function minusH1(md) {
  const lines = md.split('\n');
  if (!/^#\s/.test(lines[0])) return md;
  let i = 1;
  while (i < lines.length && lines[i].trim() === '') i++;
  return lines.slice(i).join('\n').replace(/\s+$/, '');
}

// Split the "Most useful for" cell into a list. Rows like
// "A (Wk 2 blockout), B (Wk 5 to 7 subject)" split on top-level commas.
function splitFor(cell) {
  return String(cell)
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function run() {
  const readmeMd = L.readMd(README);
  const sec = L.sectionByHeading(readmeMd, /^Contents$/);
  L.assert(sec, 'README: could not find "## Contents" section');
  const rows = L.tableRows(sec.body);
  L.assert(rows.length === 7, `expected 7 reference rows, got ${rows.length}`);

  const files = fs.readdirSync(DIR).filter((f) => /^ref-.*\.md$/.test(f));
  const filesByName = new Map(files.map((f) => [f, f]));

  const out = [];
  rows.forEach((r, i) => {
    // Column 1: [Title](ref-....md)
    const link = r[0].match(/\[([^\]]+)\]\(([^)]+)\)/);
    L.assert(link, `reference row ${i + 1}: no link found: ${r[0]}`);
    const title = link[1].trim();
    const file = link[2].replace(/^\./, ''); // relative to the reference dir
    L.assert(filesByName.has(file), `reference row ${i + 1}: file not found on disk: ${file}`);

    const id = file.replace(/\.md$/, ''); // e.g. "ref-lighting"
    const body = minusH1(L.readMd(path.join(DIR, file)));

    out.push({
      id,
      title,
      section: 'blender', // Round 1: deterministic default ("blender" | "books"); books are teacher-authored later
      covers: String(r[1] || '').trim(),
      for: splitFor(r[2] || ''),
      body,
      source: `lessons/semester-3/reference/${file}`,
      order: i + 1,
    });
  });

  for (const rec of out) {
    L.assert(rec.body, `reference ${rec.id}: empty body`);
    L.assert(rec.section === 'blender', `reference ${rec.id}: section must be "blender" in the seed, got ${rec.section}`);
  }

  const file = L.emitJson('site/data/reference.json', out);
  return { file, total: out.length };
}

if (require.main === module) {
  const r = run();
  console.log(`[migrate-reference] ${r.file} (records=${r.total})`);
}

module.exports = { run };
