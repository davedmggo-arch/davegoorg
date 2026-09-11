/* ==========================================================================
   tools/migrate-research.js
   Builds site/data/research.json (7 records) from research/*.md.

   Each record:
     id              slug of the file name (stable anchor)
     title           H1 text minus the "Research Report: "/"Research Brief: " prefix
     date            the "**Date:**" meta value (ISO) or null
     handoffVersion  the "**Handoff [Version]:**" meta token (e.g. "001") or null
     scope           the "**Research Scope:**" / "**Purpose:**" line or null
     summary         the "## Executive Summary" section body, or ""
     body            the file markdown VERBATIM with only the leading H1 removed
     status          "confirmed" if every "## Status" item is [x], else null
     sources         unique https URLs found in the file (deduped, in order)
     tags            best-effort: content type + significant title words
     order           1..7 (directory sort order)
   ========================================================================== */
'use strict';

const fs = require('fs');
const path = require('path');
const L = require('./lib/migrate-lib.js');

const DIR = path.join(L.projectRoot, 'research');

function minusH1(md) {
  const lines = md.split('\n');
  if (!/^#\s/.test(lines[0])) return md;
  let i = 1;
  while (i < lines.length && lines[i].trim() === '') i++;
  return lines.slice(i).join('\n').replace(/\s+$/, '');
}

// Value of a "- **Label:** value" meta line (first match).
function meta(md, label) {
  const m = md.match(new RegExp(`\\*\\*${label}:\\*\\*\\s*(.+)$`, 'm'));
  return m ? m[1].trim() : null;
}

function titleFromH1(md) {
  const m = md.match(/^#\s+(.*)$/m);
  if (!m) return null;
  return m[1].trim()
    .replace(/^Research Report:\s*/, '')
    .replace(/^Research Brief:\s*/, '')
    .trim();
}

function summary(md) {
  const sec = L.sectionByHeading(md, /^Executive Summary$/);
  return sec ? sec.body : '';
}

function statusOf(md) {
  const sec = L.sectionByHeading(md, /^Status$/);
  if (!sec) return null;
  const items = sec.body.split('\n').filter((l) => /^\s*-\s*\[[ xX]\]/.test(l));
  if (items.length === 0) return null;
  const allChecked = items.every((l) => /\[[xX]\]/.test(l));
  return allChecked ? 'confirmed' : 'in-progress';
}

function sources(md) {
  const seen = new Set();
  const out = [];
  const re = /https:\/\/[^\s)\]>]+/g;
  let m;
  while ((m = re.exec(md)) !== null) {
    const url = m[0].replace(/[.,;:!?]+$/, '');
    if (!seen.has(url)) {
      seen.add(url);
      out.push(url);
    }
  }
  return out;
}

const STOP = new Set(['the', 'a', 'an', 'of', 'for', 'and', 'or', 'in', 'on', 'with', 'to', 'is', 'at', 'by', 'from', 'as']);
function tagsFor(file, title) {
  let type = 'research';
  if (/prompt-details/.test(file)) type = 'prompt-details';
  else if (/prompt-bank/.test(file)) type = 'prompt-bank';
  else if (/modern-teaching/.test(file)) type = 'teaching-techniques';
  else if (/seneca-dates/.test(file)) type = 'calendar';
  else if (/3d-integration-research/.test(file)) type = 'research-report';

  const words = String(title).toLowerCase()
    .replace(/[^a-z0-9\s-]/g, ' ')
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOP.has(w));
  const extra = words.slice(0, 3);
  return [type, ...extra];
}

function run() {
  const files = fs.readdirSync(DIR).filter((f) => f.endsWith('.md')).sort();
  L.assert(files.length === 7, `expected 7 research files, got ${files.length}: ${files.join(', ')}`);

  const out = [];
  files.forEach((f, i) => {
    const md = L.readMd(path.join(DIR, f));
    const title = titleFromH1(md);
    L.assert(title, `${f}: no H1 / title found`);

    const handoff = meta(md, 'Handoff Version') || meta(md, 'Handoff') || null;

    out.push({
      id: L.slugify(f.replace(/\.md$/, '')),
      title,
      date: meta(md, 'Date'),
      handoffVersion: handoff ? handoff.match(/\S+/)[0] : null,
      scope: meta(md, 'Research Scope') || meta(md, 'Purpose') || null,
      summary: summary(md),
      body: minusH1(md),
      status: statusOf(md),
      sources: sources(md),
      tags: tagsFor(f, title),
      source: `research/${f}`,
      order: i + 1,
    });
  });

  for (const r of out) L.assert(r.body, `research ${r.id}: empty body`);
  const file = L.emitJson('site/data/research.json', out);
  return { file, total: out.length };
}

if (require.main === module) {
  const r = run();
  console.log(`[migrate-research] ${r.file} (records=${r.total})`);
}

module.exports = { run };
