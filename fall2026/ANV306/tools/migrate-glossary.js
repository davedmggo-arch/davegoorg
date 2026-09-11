/* ==========================================================================
   tools/migrate-glossary.js
   Builds site/data/glossary.json from Knowledge_Base/glossary/*.md (27 files).

   Every glossary file is a single 5-column markdown table:
     | Term | Anchor | Definition | Source | Chapter |
   Each row becomes one flat term record with the file's category attached.

   - category: the file's H1 topic ("Glossary: X (note)" -> "X",
     "Game Development (Blender + Godot)" -> "Game Development")
   - anchor: the `#anchor` cell, leading # stripped
   - id: <category-slug>-<anchor> (deduplicated, stable)
   - term / definition / source / chapter: the row's cells (term/anchor are
     de-marked; definition is kept as written)
   ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');
const L = require('./lib/migrate-lib.js');

const DIR = path.join(L.projectRoot, 'Knowledge_Base/glossary');

// "# Glossary: Animation (principles, pipeline, production)" -> "Animation"
// "# Game Development (Blender + Godot)" -> "Game Development"
function categoryFromH1(md) {
  const m = md.match(/^#\s+(.*)$/m);
  if (!m) return null;
  let t = m[1].trim();
  t = t.replace(/^Glossary:\s*/, '');
  t = t.replace(/\s*\([^)]*\)\s*$/, '').trim();
  return t || null;
}

function deMark(cell) {
  return String(cell).replace(/^\*+|\*+$/g, '').replace(/^`+|`+$/g, '').trim();
}

function run() {
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.md')).sort();
  L.assert(files.length === 27, `expected 27 glossary files, got ${files.length}`);

  const terms = [];
  const usedIds = new Set();
  let perFileCounts = [];

  for (const f of files) {
    const md = L.readMd(path.join(DIR, f));
    const category = categoryFromH1(md);
    L.assert(category, `${f}: could not derive category from H1`);
    const catSlug = L.slugify(category);

    const rows = L.tableRows(md);
    L.assert(rows.length > 0, `${f}: no table rows found`);
    perFileCounts.push({ file: f, category, rows: rows.length });

    for (const r of rows) {
      L.assert(r.length >= 4, `${f}: expected >=4 cells, got ${r.length}: ${r.join(' | ')}`);
      const term = deMark(r[0]);
      const anchor = deMark(r[1]).replace(/^#/, '').trim();
      const definition = String(r[2]).trim();
      const source = String(r[3]).trim();
      const chapter = r.length >= 5 ? String(r[4]).trim() : '';

      L.assert(term && anchor && definition, `${f}: row missing term/anchor/definition: ${r.join(' | ')}`);

      let id = `${catSlug}-${anchor}`;
      let n = 2;
      while (usedIds.has(id)) id = `${catSlug}-${anchor}-${n++}`;
      usedIds.add(id);

      const rec = {
        id,
        term,
        anchor,
        category,
        definition,
        source,
      };
      if (chapter) rec.chapter = chapter;
      terms.push(rec);
    }
  }

  // Stable order: file sort order, then row order (already the case).
  terms.forEach((t, i) => { t.order = i + 1; });

  const out = L.emitJson('site/data/glossary.json', terms);
  return { file: out, total: terms.length, files: perFileCounts.length, perFile: perFileCounts };
}

if (require.main === module) {
  const r = run();
  console.log(`[migrate-glossary] ${r.file} (terms=${r.total}, files=${r.files})`);
  for (const p of r.perFile) console.log(`  ${p.file.padEnd(44)} ${String(p.rows).padStart(4)}  (${p.category})`);
}

module.exports = { run };
