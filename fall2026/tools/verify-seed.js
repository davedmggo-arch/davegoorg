/* ==========================================================================
   tools/verify-seed.js  (verification helper, not part of the migration run)
   Byte-for-byte verbatim + shape checks for the 7 seed collections.
   ========================================================================== */
'use strict';
const fs = require('fs');
const path = require('path');
const L = require('./lib/migrate-lib.js');

const R = L.projectRoot;
const rd = (p) => L.readMd(p);
const minusH1 = (md) => {
  const l = md.split('\n');
  if (!/^#\s/.test(l[0])) return md;
  let i = 1;
  while (i < l.length && l[i].trim() === '') i++;
  return l.slice(i).join('\n').replace(/\s+$/, '');
};

let pass = 0, fail = 0;
const ok = (c, msg) => { if (c) pass++; else { fail++; console.log('FAIL: ' + msg); } };

// lessons
const lessons = JSON.parse(rd(path.join(R, 'site/data/lessons.json')));
let lessonChecks = 0;
for (const l of lessons) {
  if (!l.source) continue;
  const src = rd(path.join(R, l.source));
  for (const k of ['retrievalHook', 'oneNewConcept', 'guidedMaking', 'check', 'reflect', 'revisit']) {
    const b = l.beats[k];
    if (!b) continue;
    ok(src.includes(b), `lesson ${l.id} beat ${k} not verbatim`);
    lessonChecks++;
  }
}
console.log(`lessons: ${lessons.length} records, ${lessonChecks} beat substrings checked`);

// projects
const projects = JSON.parse(rd(path.join(R, 'site/data/projects.json')));
for (const p of projects) {
  const b = rd(path.join(R, p.source.brief));
  const r = rd(path.join(R, p.source.rubric));
  ok(p.brief === minusH1(b), `project ${p.id} brief not exact-minusH1`);
  ok(p.rubric === minusH1(r), `project ${p.id} rubric not exact-minusH1`);
  ok(p.prompt ? b.includes(p.prompt) : true, `project ${p.id} prompt not verbatim`);
  ok(p.checkpoints.length >= 2, `project ${p.id} checkpoints<2`);
}
console.log(`projects: ${projects.length} records`);

// reference
const refs = JSON.parse(rd(path.join(R, 'site/data/reference.json')));
for (const r of refs) {
  const src = rd(path.join(R, r.source));
  ok(r.body === minusH1(src), `ref ${r.id} body not exact-minusH1`);
  ok(r.covers && r.for.length && r.order, `ref ${r.id} covers/for/order missing`);
}
console.log(`reference: ${refs.length} records`);

// research
const res = JSON.parse(rd(path.join(R, 'site/data/research.json')));
for (const r of res) {
  const src = rd(path.join(R, r.source));
  ok(r.body === minusH1(src), `research ${r.id} body not exact-minusH1`);
}
console.log(`research: ${res.length} records`);

// glossary: independent recomputation of the source data-row total
const gdir = path.join(R, 'Knowledge_Base/glossary');
let srcRows = 0;
for (const f of fs.readdirSync(gdir).filter((x) => x.endsWith('.md'))) {
  const md = rd(path.join(gdir, f));
  const all = [];
  for (const raw of md.split('\n')) {
    const line = raw.trim();
    if (!line.startsWith('|')) continue;
    all.push(line.split('|').slice(1, -1).map((c) => c.trim()));
  }
  const isSep = (r) => r.length > 0 && r.every((c) => /^:?-{2,}:?$/.test(c));
  for (let i = 0; i < all.length; i++) {
    if (isSep(all[i])) continue;
    if (i + 1 < all.length && isSep(all[i + 1])) continue;
    srcRows++;
  }
}
const gloss = JSON.parse(rd(path.join(R, 'site/data/glossary.json')));
ok(gloss.length === srcRows, `glossary count ${gloss.length} != source ${srcRows}`);
ok(gloss.every((t) => t.id && t.term && t.anchor && t.category && t.definition), 'glossary: a row missing a required field');
const ids = new Set(gloss.map((t) => t.id));
ok(ids.size === gloss.length, 'glossary ids not unique');
console.log(`glossary: ${gloss.length} terms, source rows=${srcRows}`);

// progress
const prog = JSON.parse(rd(path.join(R, 'site/data/progress.json')));
ok(Object.keys(prog.weeks).length === lessons.length, `progress weeks ${Object.keys(prog.weeks).length} != lessons ${lessons.length}`);
ok(Object.keys(prog.projects).length === 3, 'progress projects!=3');
console.log(`progress: ${Object.keys(prog.weeks).length} weeks, ${Object.keys(prog.projects).length} projects`);

// data.js bootstrap present + parseable
const dataJs = rd(path.join(R, 'site/data/data.js'));
ok(/window\.__SENECA_DATA\s*=/.test(dataJs), 'data.js: __SENECA_DATA assignment missing');
for (const name of ['course', 'lessons', 'glossary', 'research', 'progress', 'projects', 'reference', 'shortcuts', 'checklist', 'artistic-checklist', 'design-principles', 'downloads']) {
  ok(new RegExp('^\\s*[\"\']?' + name + '[\"\']?:\\s', 'm').test(dataJs), `data.js: key ${name} missing`);
}
console.log('data.js: bootstrap assignment + 12 keys present');

console.log(`\nVERBATIM/SHAPE CHECKS: pass=${pass} fail=${fail}`);
process.exit(fail ? 1 : 0);
