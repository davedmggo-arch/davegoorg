/* ==========================================================================
   Seneca 3D Integration - js/views/teacher-glossary.js
   Glossary editor: a bounded-window index (120 rows, not 1,175) with live
   search (debounced), category chips, a live count, Show more, and per-row
   Edit/Delete; plus a per-term schema form. The hard part is the index never
   rendering all rows at once, mirroring the student glossary perf pattern.

   Uniqueness: a term is keyed by (category, anchor). The edit view carries a
   live conflict indicator under the anchor field, and the Save click is gated:
   if another term already uses that (category, anchor) pair the save is
   rejected with a clear message, otherwise it falls through to the standard
   wireForm save (POST /api/data/glossary).
   ========================================================================== */

import AdminData from '../admin/admin-data.js';
import Router from '../core/router.js';
import { esc, notFound } from './shared.js';
import { renderForm, saveBar, wireForm, wireOnce, toast } from '../admin/admin-ui.js';
import { confirmDialog } from '../admin/admin-ui.js';

const GL_WINDOW = 120;  // initial visible terms (bounded first paint)
const GL_STEP = 150;    // how many more "Show more" reveals
const DEBOUNCE = 150;   // ms before a keystroke re-paints

const GL_SCHEMA = [
  { key: 'category', label: 'Category', type: 'text', hint: 'e.g. Anatomy, Figure Drawing.' },
  { key: 'term', label: 'Term', type: 'text', hint: 'The display term, e.g. Active / passive rule.' },
  { key: 'anchor', label: 'Anchor', type: 'text', hint: 'Part of the term id. Must be unique within its category.' },
  { key: 'definition', label: 'Definition', type: 'markdown', hint: 'Full definition, verbatim markdown.' },
  { key: 'source', label: 'Source', type: 'csv', itemType: 'text', hint: 'comma-separated, e.g. Figure Drawing, Ch 04' },
  { key: 'chapter', label: 'Chapter', type: 'csv', itemType: 'text', hint: 'comma-separated, e.g. Ch 04' },
  { key: 'order', label: 'Order', type: 'number' },
];

const BLANK_TERM = { id: '', category: '', term: '', anchor: '', definition: '', source: '', chapter: '', order: null };

function updateStatus() {
  if (typeof window !== 'undefined' && window.__adminStatus) window.__adminStatus();
}

/* ---- pure helpers (no DOM; unit-testable) -------------------------------- */

function fmtCount(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

function allCategories(list) {
  const seen = [];
  for (const r of list || []) {
    const c = r.category || 'Uncategorised';
    if (seen.indexOf(c) === -1) seen.push(c);
  }
  return seen.sort(function (a, b) { return a.localeCompare(b); });
}

function countCat(list, cat) {
  let n = 0;
  for (const r of list || []) if ((r.category || 'Uncategorised') === cat) n++;
  return n;
}

function matches(r, q, cat) {
  const rc = r.category || 'Uncategorised';
  if (cat !== 'all' && rc !== cat) return false;
  if (!q) return true;
  const hay = ((r.term || '') + ' ' + (r.definition || '') + ' ' + rc).toLowerCase();
  return hay.indexOf(q) !== -1;
}

function filter(list, q, cat) { return (list || []).filter(function (r) { return matches(r, q, cat); }); }

function groupWindowed(subset) {
  const groups = [];
  const idx = {};
  for (const r of subset) {
    const c = r.category || 'Uncategorised';
    if (idx[c] === undefined) { idx[c] = groups.length; groups.push({ cat: c, rows: [] }); }
    groups[idx[c]].rows.push(r);
  }
  return groups;
}

function rowHtml(r) {
  const def = r.definition || '';
  const short = def.length > 120 ? def.slice(0, 120).replace(/\s+\S*$/, '') + '...' : def;
  return (
    '<li class="tgl-row">' +
      '<a class="tgl-row__term" href="#/admin/glossary/' + esc(r.id) + '">' + esc(r.term) + '</a>' +
      '<span class="tgl-row__def">' + esc(short) + '</span>' +
      '<button class="tgl-row__del" type="button" data-tgl-del="' + esc(r.id) + '">Delete</button>' +
    '</li>'
  );
}

function resultsHtml(records, q, cat, windowed) {
  const filtered = filter(records, q, cat);
  const total = filtered.length;
  const show = Math.min(windowed, total);
  const groups = groupWindowed(filtered.slice(0, show));

  let html = '';
  for (const g of groups) {
    html +=
      '<section class="tgl-group">' +
        '<h2 class="tgl-group__h">' + esc(g.cat) + ' <span class="tgl-group__n">' + g.rows.length + '</span></h2>' +
        '<ul class="tgl-list">' + g.rows.map(rowHtml).join('') + '</ul>' +
      '</section>';
  }
  if (html === '') return '<p class="tgl-empty muted">No terms match. Try another word or category.</p>';
  if (total > show) {
    html += '<p class="tgl-more"><button type="button" class="btn btn--ghost" id="tgl-showmore">' +
      'Show more (' + fmtCount(total - show) + ' remaining)</button></p>';
  }
  return html;
}

function countText(records, q, cat) {
  const total = filter(records, q, cat).length;
  return fmtCount(total) + (total === 1 ? ' term' : ' terms');
}

/* ---- Index --------------------------------------------------------------- */

let records = [];
let activeCat = 'all';
let term = '';
let windowed = GL_WINDOW;
let debTimer = null;
let wired = false;

export function renderGlossaryIndex(params, query) {
  records = AdminData.get('glossary') || [];
  activeCat = 'all';
  term = '';
  windowed = GL_WINDOW;

  const cats = allCategories(records);
  const chips = [
    '<button type="button" class="tgl-chip is-on" data-cat="all" aria-pressed="true">' +
      'All <span class="tgl-chip__n">' + fmtCount(records.length) + '</span></button>'
  ].concat(cats.map(function (c) {
    return '<button type="button" class="tgl-chip" data-cat="' + esc(c) + '" aria-pressed="false">' +
      esc(c) + ' <span class="tgl-chip__n">' + fmtCount(countCat(records, c)) + '</span></button>';
  })).join('');

  const html = (
    '<section class="admin-edit tgl" aria-labelledby="tgl-h">' +
      '<header class="admin-edit__head">' +
        '<h1 id="tgl-h" class="anim-rise" style="--i:0">Glossary</h1>' +
        '<p class="muted anim-rise" style="--i:1">' + fmtCount(records.length) + ' terms. Search, filter by category, then open a term to edit. New terms are unique per (category, anchor).</p>' +
        '<div class="admin-edit__toolbar anim-rise" style="--i:1">' +
          '<button class="btn btn--primary" type="button" data-add-term>+ Add term</button>' +
          '<button class="btn btn--ghost" type="button" data-export="glossary">Export glossary</button>' +
        '</div>' +
      '</header>' +
      '<div class="tgl-tools anim-rise" style="--i:1">' +
        '<label class="sr-only" for="tgl-search">Search terms</label>' +
        '<input id="tgl-search" class="search" type="search" autocomplete="off" placeholder="Search ' + fmtCount(records.length) + ' terms..." />' +
        '<span id="tgl-count" class="tgl-count" role="status" aria-live="polite">' + countText(records, '', 'all') + '</span>' +
      '</div>' +
      '<div class="tgl-chips anim-rise" style="--i:1" role="group" aria-label="Filter by category">' + chips + '</div>' +
      '<div id="tgl-results" class="tgl-results">' + resultsHtml(records, '', 'all', GL_WINDOW) + '</div>' +
      saveBar('glossary', '#/admin', 'Back to dashboard') +
    '</section>'
  );

  const view = (typeof document !== 'undefined') ? document.getElementById('view') : null;
  if (view) {
    view.innerHTML = html;
    wireForm(view, { name: 'glossary', getRecord: function () { return {}; }, reRender: function () { renderGlossaryIndex(); }, onChange: updateStatus });
    if (!wired) { wireIndex(); wired = true; }
  }
  return null;
}

function paint() {
  if (typeof document === 'undefined') return;
  const results = document.getElementById('tgl-results');
  if (results) results.innerHTML = resultsHtml(records, term.trim().toLowerCase(), activeCat, windowed);
  const countEl = document.getElementById('tgl-count');
  if (countEl) countEl.textContent = countText(records, term.trim().toLowerCase(), activeCat);
  const chips = document.querySelectorAll('.tgl-chip');
  chips.forEach(function (ch) {
    const on = ch.getAttribute('data-cat') === activeCat;
    ch.setAttribute('aria-pressed', on ? 'true' : 'false');
    ch.classList.toggle('is-on', on);
  });
}

function wireIndex() {
  if (typeof window === 'undefined' || !window.addEventListener) return;
  window.addEventListener('input', function (e) {
    const t = e && e.target;
    if (!t || t.id !== 'tgl-search') return;
    term = t.value || '';
    windowed = GL_WINDOW;
    if (debTimer) clearTimeout(debTimer);
    debTimer = setTimeout(paint, DEBOUNCE);
  });
  window.addEventListener('click', function (e) {
    const t = e && e.target;
    if (!t || !t.closest) return;
    if (t.closest('.tgl-chip')) {
      activeCat = (t.closest('.tgl-chip').getAttribute('data-cat')) || 'all';
      windowed = GL_WINDOW;
      paint();
      return;
    }
    if (t.id === 'tgl-showmore') { windowed += GL_STEP; paint(); return; }
    if (t.closest('[data-tgl-del]')) {
      e.preventDefault();
      const id = t.closest('[data-tgl-del]').getAttribute('data-tgl-del');
      confirmDialog('Delete term "' + id + '"?', { title: 'Delete term?', danger: true, okLabel: 'Delete' })
        .then(function (ok) {
          if (!ok) return;
          const list = AdminData.get('glossary') || [];
          const idx = list.findIndex(function (r) { return r.id === id; });
          if (idx >= 0) list.splice(idx, 1);
          renderGlossaryIndex();
          toast('Deleted ' + id + '.', 'info');
        });
      return;
    }
    if (t.closest('[data-add-term]')) {
      e.preventDefault();
      const list = AdminData.get('glossary') || [];
      const blank = JSON.parse(JSON.stringify(BLANK_TERM));
      blank.id = nextTermId(list, 'new', '');
      blank.term = 'New term';
      blank.order = list.length + 1;
      list.push(blank);
      Router.go('#/admin/glossary/' + blank.id);
    }
  });
}

/* ---- Uniqueness: (category, anchor) -------------------------------------- */

function norm(s) { return String(s == null ? '' : s).trim().toLowerCase(); }

function findConflict(list, selfId) {
  const rec = (list || []).find(function (r) { return r.id === selfId; });
  if (!rec) return null;
  const c = norm(rec.category);
  const a = norm(rec.anchor);
  for (const r of list || []) {
    if (r.id === selfId) continue;
    if (norm(r.category) === c && norm(r.anchor) === a) return r;
  }
  return null;
}

function nextTermId(list, category, anchor) {
  const slug = function (s) { return norm(s).replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''); };
  const base = (slug(category) || 'term') + '-' + (slug(anchor) || 'new');
  const used = new Set(list.map(function (r) { return r.id; }));
  let id = base;
  let i = 2;
  while (used.has(id)) { id = base + '-' + (i++); }
  return id;
}

/* ---- Edit one term ------------------------------------------------------- */

export function renderGlossaryEdit(params, query) {
  const id = params && params.id;
  const view = (typeof document !== 'undefined') ? document.getElementById('view') : null;
  if (!view) return null;

  const list = AdminData.get('glossary') || [];
  const rec = list.find(function (r) { return r.id === id; });
  if (!rec) { view.innerHTML = notFound('Glossary term', 'id ' + id); return null; }

  const html = (
    '<section class="admin-edit" aria-labelledby="tgl-edit-title">' +
      '<header class="admin-edit__head">' +
        '<h1 id="tgl-edit-title" class="anim-rise" style="--i:0">Glossary &middot; ' + esc(rec.term || rec.id) + '</h1>' +
        '<p class="muted anim-rise" style="--i:1">' + esc(rec.category || 'Uncategorised') + ' &middot; ' + esc(rec.id) + '</p>' +
      '</header>' +
      '<div class="admin-edit__body anim-rise" style="--i:1">' +
        renderForm(GL_SCHEMA, rec, null, null) +
        '<div class="tgl-conflict" id="tgl-conflict" role="status" aria-live="polite"></div>' +
      '</div>' +
      saveBar('glossary', '#/admin/glossary', 'Back to glossary') +
    '</section>'
  );

  view.innerHTML = html;

  // Save-gate: registered in the capture phase BEFORE wireForm, so on a save
  // click it runs first. If (category, anchor) collides with another term we
  // block the event (stopImmediatePropagation) and wireForm's saveOne never
  // runs; otherwise we let it fall through to the standard save.
  wireOnce(view, 'savegate', { click: { fn: function (e) {
    const t = e.target;
    if (!t || !t.closest) return;
    const saveBtn = t.closest('[data-save="glossary"]');
    if (!saveBtn) return;
    const conflict = findConflict(AdminData.get('glossary') || [], id);
    const ind = document.getElementById('tgl-conflict');
    if (conflict) {
      e.preventDefault();
      e.stopImmediatePropagation();
      if (ind) {
        ind.textContent = 'Conflict: "' + conflict.term + '" already uses category "' + conflict.category + '" with anchor "' + conflict.anchor + '". Change the anchor or the category.';
        ind.className = 'tgl-conflict is-bad';
      }
      toast('Duplicate (category, anchor): ' + conflict.term + '.', 'bad');
      return;
    }
    if (ind) { ind.textContent = ''; ind.className = 'tgl-conflict'; }
  }, capture: true } });

  // Live conflict indicator under the form (visual only; the hard gate is on save).
  wireOnce(view, 'conflict', { input: { fn: function (e) {
    const t = e.target;
    if (!t || t.id !== 'f-anchor') return;
    const cur = (AdminData.get('glossary') || []).find(function (r) { return r.id === id; });
    if (!cur) return;
    const c = norm(cur.category);
    const a = norm(cur.anchor);
    let clash = null;
    for (const r of (AdminData.get('glossary') || [])) {
      if (r.id === id) continue;
      if (norm(r.category) === c && norm(r.anchor) === a) { clash = r; break; }
    }
    const ind = document.getElementById('tgl-conflict');
    if (!ind) return;
    if (clash) { ind.textContent = 'Heads up: "' + clash.term + '" already uses this (category, anchor).'; ind.className = 'tgl-conflict is-warn'; }
    else { ind.textContent = ''; ind.className = 'tgl-conflict'; }
  }, capture: true } });

  wireForm(view, {
    name: 'glossary',
    schema: GL_SCHEMA,
    getRecord: function () { return (AdminData.get('glossary') || []).find(function (r) { return r.id === id; }); },
    reRender: function () { renderGlossaryEdit(params); },
    onChange: updateStatus,
  });
  return null;
}

// norm / findConflict / nextTermId are exported (pure, no DOM) so the
// (category, anchor) reject/accept decision can be unit-checked in the harnesses.
export default { renderGlossaryIndex, renderGlossaryEdit, GL_SCHEMA, norm, findConflict, nextTermId };