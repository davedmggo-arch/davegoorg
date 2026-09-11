/* ==========================================================================
   tools/lib/migrate-lib.js
   Shared helpers for the zero-dep migration scripts (site/tools/migrate-*.js).
   CommonJS. Node built-ins only (fs, path). No npm packages, no SQL.

   Public API:
     readMd(p)                 read a file as utf8
     assert(cond, msg)         throw with context if cond is falsy
     slugify(s)                "House of Wisdom" -> "house-of-wisdom"
     splitByHeading(md, lvl)   [{level, title, body}] split at headings <= lvl
     sectionByHeading(md, rx, lvl)  first matching section or null
     tableRows(body)           markdown table rows as arrays of trimmed cells
     emitJson(file, obj)       pretty 2-space JSON + trailing newline, mkdir -p
     projectRoot               absolute path of the repo root
   ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');

// Repo root = three levels up from site/tools/lib
const projectRoot = path.resolve(__dirname, '..', '..', '..');

function readMd(p) {
  // Strip a leading UTF-8 BOM (EF BB BF) if present, so line-anchored regexes
  // (e.g. ^#) still match the first line of BOM-prefixed source files.
  return fs.readFileSync(p, 'utf8').replace(/^\uFEFF/, '');
}

function assert(cond, msg) {
  if (!cond) throw new Error('migrate-lib assert: ' + msg);
}

function slugify(s) {
  return String(s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Split markdown into sections at heading lines whose level is <= `level`.
 * Returns an array of { level, title, body }.
 * - The text before the first qualifying heading is a preamble section with
 *   level 0 and title ''.
 * - `body` is the raw text after the heading line and before the next
 *   qualifying heading, with leading blank lines and trailing whitespace
 *   trimmed. Internal bytes are untouched (verbatim).
 * - Headings deeper than `level` (e.g. ### under a ## split) stay in body.
 */
function splitByHeading(md, level) {
  const lines = md.split('\n');
  const sections = [];
  let cur = { level: 0, title: '', body: [] };

  for (const line of lines) {
    const m = line.match(/^(#{1,6})\s+(.*)$/);
    if (m && m[1].length <= level) {
      sections.push({ level: cur.level, title: cur.title, body: cur.body.join('\n') });
      cur = { level: m[1].length, title: m[2].trim(), body: [] };
    } else {
      cur.body.push(line);
    }
  }
  sections.push({ level: cur.level, title: cur.title, body: cur.body.join('\n') });

  // trim leading blank lines + trailing whitespace of each body, verbatim inside
  return sections.map((s) => ({
    level: s.level,
    title: s.title,
    body: s.body.replace(/^\n+/, '').replace(/\s+$/, ''),
  }));
}

/**
 * First section (split at `level`, default 2) whose title matches `titleRegex`.
 * Returns { level, title, body } or null.
 */
function sectionByHeading(md, titleRegex, level) {
  const lvl = level == null ? 2 : level;
  const sections = splitByHeading(md, lvl);
  for (const s of sections) {
    if (s.level > 0 && titleRegex.test(s.title)) return s;
  }
  return null;
}

/**
 * Parse a markdown table out of a section body.
 * Returns an array of rows; each row is an array of trimmed cell strings.
 * The header row and the |---| separator row are dropped.
 * Cells keep their markdown (**bold**, `code`) intact - callers decide.
 */
function tableRows(body) {
  const all = [];
  for (const raw of String(body).split('\n')) {
    const line = raw.trim();
    if (!line.startsWith('|')) continue;
    all.push(line.split('|').slice(1, -1).map((c) => c.trim()));
  }
  const isSep = (r) => r.length > 0 && r.every((c) => /^:?-{2,}:?$/.test(c));
  const rows = [];
  for (let i = 0; i < all.length; i++) {
    if (isSep(all[i])) continue;               // separator row
    if (i + 1 < all.length && isSep(all[i + 1])) continue; // header row (a row whose next row is the separator)
    rows.push(all[i]);
  }
  return rows;
}

/**
 * Write JSON deterministically: 2-space indent, trailing newline, mkdir -p.
 * Paths may be absolute or relative to the project root.
 */
function emitJson(filePath, obj) {
  const abs = path.isAbsolute(filePath) ? filePath : path.join(projectRoot, filePath);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, JSON.stringify(obj, null, 2) + '\n', 'utf8');
  return abs;
}

module.exports = {
  projectRoot,
  readMd,
  assert,
  slugify,
  splitByHeading,
  sectionByHeading,
  tableRows,
  emitJson,
};
