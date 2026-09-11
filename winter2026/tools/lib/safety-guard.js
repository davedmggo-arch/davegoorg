/* ==========================================================================
   tools/lib/safety-guard.js
   Re-migration SAFETY GUARD (Round 1, locked decision).

   migrate-all.js rebuilds every site/data/*.json seed FROM THE SOURCE .md.
   The source markdown has none of the Round 1 teacher-authored content
   (media, lesson guidedSections, reference Books), so re-migrating a seed
   that already carries that content would silently DROP it. This guard
   detects teacher-authored content in the CURRENT seed and, unless --force is
   passed, refuses to run and tells the teacher to Export first.

   Zero deps: Node fs/path only. No side effects other than process.exit(1) on
   a refusal. A CLEAN seed (only the deterministic reference section: "blender",
   no media / guidedSections / Books) yields no findings, so the guard never
   fires and the byte-idempotency proof stays clean.
   ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');
const L = require('./migrate-lib.js');

const DATA_DIR = path.join(L.projectRoot, 'site/data');

// Collections scanned for teacher-authored markers (all seven, so nothing is
// missed regardless of which surface the teacher authored on).
const COLLECTIONS = ['course', 'lessons', 'glossary', 'research', 'progress', 'projects', 'reference'];

function load(name) {
  const file = path.join(DATA_DIR, `${name}.json`);
  if (!fs.existsSync(file)) return null;
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (err) {
    return null; // a broken seed is not a teacher-content finding; let migrate re-derive it
  }
}

// True if a `media` object has a non-empty before or after slot.
function mediaHasContent(media) {
  if (!media || typeof media !== 'object' || Array.isArray(media)) return false;
  const b = media.before, a = media.after;
  return (Array.isArray(b) && b.length > 0) || (Array.isArray(a) && a.length > 0);
}

// Depth-first scan for teacher-authored markers: a `media` block with a
// non-empty before/after slot, or a non-empty `guidedSections` array.
function scanNode(node, p, findings) {
  if (node === null || typeof node !== 'object') return;
  if (Array.isArray(node)) {
    for (let i = 0; i < node.length; i++) scanNode(node[i], `${p}[${i}]`, findings);
    return;
  }
  for (const k of Object.keys(node)) {
    const child = `${p ? p + '.' : ''}${k}`;
    if (k === 'media' && mediaHasContent(node[k])) findings.push(`non-empty media.before/after at ${child}`);
    if (k === 'guidedSections' && Array.isArray(node[k]) && node[k].length) findings.push(`non-empty guidedSections at ${child}`);
    scanNode(node[k], child, findings);
  }
}

// Reference-only markers that mean a Books record exists (teacher-authored).
// The clean seed's `section: "blender"` must NOT be a finding, so we test for
// the books value / books-only fields specifically, not for the field's presence.
function referenceBookMarkers(rec, i) {
  const out = [];
  const id = rec && rec.id ? rec.id : `#${i}`;
  if (rec && rec.section === 'books') out.push(`reference ${id}: section "books"`);
  if (rec && typeof rec.author === 'string' && rec.author.trim() !== '') out.push(`reference ${id}: author present`);
  if (rec && typeof rec.relatedTo === 'string' && rec.relatedTo.trim() !== '') out.push(`reference ${id}: relatedTo present`);
  return out;
}

// Returns an array of human-readable findings. Empty array = clean seed.
function detectTeacherContent() {
  const findings = [];
  for (const name of COLLECTIONS) {
    const data = load(name);
    if (data === null) continue;
    const local = [];
    scanNode(data, '', local);
    for (const f of local) findings.push(`${name}: ${f}`);
  }
  const refs = load('reference');
  if (Array.isArray(refs)) {
    refs.forEach((rec, i) => { for (const f of referenceBookMarkers(rec, i)) findings.push(`reference: ${f}`); });
  }
  return findings;
}

// Refuse (and exit) if teacher content is present and --force was not passed.
// `force` short-circuits the refusal (the override path).
function guard(force) {
  const findings = detectTeacherContent();
  if (findings.length === 0) return;
  if (force) return;
  const W = process.stderr.columns || 78;
  const bar = '='.repeat(Math.min(W, 78));
  console.error('');
  console.error(bar);
  console.error('  RE-MIGRATION REFUSED: teacher-authored content detected in the current seed.');
  console.error('');
  console.error('  migrate-all.js rebuilds every seed from the source .md, which has NONE of this');
  console.error('  content, so running it would DROP your teacher-authored media / guidedSections /');
  console.error('  Books. Detected:');
  console.error('');
  for (const f of findings) console.error('    - ' + f);
  console.error('');
  console.error('  BEFORE you re-migrate, EXPORT your console content (teacher.html -> Export),');
  console.error('  then Import it back after migrating. To override the guard and wipe it anyway:');
  console.error('');
  console.error('      node site/tools/migrate-all.js --force');
  console.error('');
  console.error(bar);
  process.exit(1);
}

module.exports = { detectTeacherContent, guard, mediaHasContent, scanNode, referenceBookMarkers };
