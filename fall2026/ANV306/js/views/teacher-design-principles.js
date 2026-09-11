/* ==========================================================================
   Seneca 3D Integration - js/views/teacher-design-principles.js
   The TEACHER editor for the `design-principles` collection (round 2.8, 090).
   Mirrors teacher-artistic-checklist.js exactly (search + group-chip index +
   per-row schema form + save-gate), with ONE extra field: `environment`
   (the one-line environment-design note).

     - renderPrinciplesIndex  search + group-chip index of ALL rows (the 2
       fixed groups, ordered), with per-row Edit / Delete, an Add button, and
       the standard saveBar.
     - renderPrinciplesEdit   a per-row schema form (id / category / text /
       environment / order) with a Save-gate that rejects an empty text.

   The 2 groups come from the SAME component constant (CATEGORIES) the student
   view uses, so the select options and labels can never drift. `order` is kept
   dense (1..N): any add/delete re-densifies the list. All output goes through
   esc(). Reuses the existing admin + tgl-* CSS classes.
   ========================================================================== */

import AdminData from '../admin/admin-data.js';
import Router from '../core/router.js';
import { esc, notFound } from './shared.js';
import { renderForm, saveBar, wireForm, wireOnce, toast, confirmDialog } from '../admin/admin-ui.js';
import { CATEGORIES } from './design-principles.js';

const NAME = 'design-principles';

/* The per-row schema. `category` is a select bound to the 2 fixed slugs.
   `environment` is the extra one-line environment note. */
const SCHEMA = [
  { key: 'id', label: 'Item id', type: 'text', hint: 'Stable identifier, e.g. dp-01. Must be unique.' },
  { key: 'category', label: 'Group', type: 'select', options: CATEGORIES.map(function (c) { return { value: c.slug, label: c.label }; }) },
  { key: 'text', label: 'Definition', type: 'text', hint: 'The full definition, e.g. "Line: the edge and path...".' },
  { key: 'environment', label: 'Environment note', type: 'text', hint: 'One line: how this lands in an environment.' },
  { key: 'order', label: 'Order', type: 'number', hint: 'Display position (kept dense, 1..N).' },
];

const BLANK_ROW = { id: '', category: 'elements', text: '', environment: '', order: null };

function labelFor(slug) {
  const c = CATEGORIES.find(function (x) { return x.slug === slug; });
  return c ? c.label : (slug || 'Other');
}

function updateStatus() {
  if (typeof window !== 'undefined' && window.__adminStatus) window.__adminStatus();
}

/* ---- pure helpers (no DOM; unit-testable) -------------------------------- */

function norm(s) { return String(s == null ? '' : s).trim().toLowerCase(); }

function redensify(list) {
  const arr = list || [];
  const sorted = arr.slice().sort(function (a, b) {
    const ao = (a && a.order) || 0;
    const bo = (b && b.order) || 0;
    if (ao !== bo) return ao - bo;
    return String(a && a.id).localeCompare(String(b && b.id));
  });
  sorted.forEach(function (r, i) { if (r) r.order = i + 1; });
  return arr;
}

function nextId(list) {
  const used = new Set((list || []).map(function (r) { return r.id; }));
  let i = (list || []).length + 1;
  let id = 'dp-' + String(i).padStart(2, '0');
  while (used.has(id)) { i += 1; id = 'dp-' + String(i).padStart(2, '0'); }
  return id;
}

function matches(r, q, cat) {
  if (cat !== 'all' && (r.category || 'Other') !== cat) return false;
  if (!q) return true;
  const hay = ((r.text || '') + ' ' + labelFor(r.category)).toLowerCase();
  return hay.indexOf(q) !== -1;
}

function filter(list, q, cat) { return (list || []).filter(function (r) { return matches(r, q, cat); }); }

function countCat(list, cat) { return (list || []).filter(function (r) { return (r.category || 'Other') === cat; }).length; }

function rowHtml(r) {
  const name = String(r.text || '').match(/^([A-Za-z][A-Za-z-]*)(?=\s*[:.])/);
  const short = name ? name[1] : (r.text ? String(r.text).slice(0, 34) : r.id);
  return (
    '<li class="tgl-row">' +
      '<a class="tgl-row__term" href="#/admin/design-principles/' + esc(r.id) + '">' + esc(short) + '</a>' +
      '<span class="tgl-row__def">' + esc(labelFor(r.category)) + '</span>' +
      '<span class="tgl-row__order" style="font-family:var(--font-mono);font-size:var(--fs-xs);color:var(--muted)">#' + esc(r.order) + '</span>' +
      '<button class="tgl-row__del" type="button" data-dpdel="' + esc(r.id) + '">Delete</button>' +
    '</li>'
  );
}

function resultsHtml(records, q, cat) {
  const filtered = filter(records, q, cat);
  if (!filtered.length) return '<p class="tgl-empty muted">No items match. Try another word or group.</p>';
  let html = '';
  CATEGORIES.forEach(function (c) {
    const rows = filtered.filter(function (r) { return (r.category || 'Other') === c.slug; });
    if (!rows.length) return;
    html +=
      '<section class="tgl-group">' +
        '<h2 class="tgl-group__h">' + esc(c.label) + ' <span class="tgl-group__n">' + rows.length + '</span></h2>' +
        '<ul class="tgl-list">' + rows.map(rowHtml).join('') + '</ul>' +
      '</section>';
  });
  if (html === '') {
    html = '<section class="tgl-group"><h2 class="tgl-group__h">Other <span class="tgl-group__n">' + filtered.length + '</span></h2>' +
      '<ul class="tgl-list">' + filtered.map(rowHtml).join('') + '</ul></section>';
  }
  return html;
}

function countText(records, q, cat) {
  const total = filter(records, q, cat).length;
  return total + (total === 1 ? ' item' : ' items');
}

/* ---- Index ---------------------------------------------------------------- */

let records = [];
let activeCat = 'all';
let term = '';
let debTimer = null;
let wired = false;

export function renderPrinciplesIndex() {
  records = AdminData.get(NAME) || [];
  activeCat = 'all';
  term = '';

  const chips =
    '<button type="button" class="tgl-chip is-on" data-cat="all" aria-pressed="true">' +
      'All <span class="tgl-chip__n">' + records.length + '</span></button>' +
    CATEGORIES.map(function (c) {
      return '<button type="button" class="tgl-chip" data-cat="' + esc(c.slug) + '" aria-pressed="false">' +
        esc(c.label) + ' <span class="tgl-chip__n">' + countCat(records, c.slug) + '</span></button>';
    }).join('');

  const html = (
    '<section class="admin-edit tgl" aria-labelledby="dp-h">' +
      '<header class="admin-edit__head">' +
        '<h1 id="dp-h" class="anim-rise" style="--i:0">Principles &amp; elements of design</h1>' +
        '<p class="muted anim-rise" style="--i:1">' + records.length + ' items across ' + CATEGORIES.length + ' fixed groups. Search, filter, then open a row to edit. Add / Delete keeps the order dense (1..' + records.length + ').</p>' +
        '<div class="admin-edit__toolbar anim-rise" style="--i:1">' +
          '<button class="btn btn--primary" type="button" data-dpadd>+ Add item</button>' +
          '<button class="btn btn--ghost" type="button" data-export="' + esc(NAME) + '">Export design principles</button>' +
        '</div>' +
      '</header>' +
      '<div class="tgl-tools anim-rise" style="--i:1">' +
        '<label class="sr-only" for="dp-search">Search design principles</label>' +
        '<input id="dp-search" class="search" type="search" autocomplete="off" placeholder="Search ' + records.length + ' items..." />' +
        '<span id="dp-count" class="tgl-count" role="status" aria-live="polite">' + countText(records, '', 'all') + '</span>' +
      '</div>' +
      '<div class="tgl-chips anim-rise" style="--i:1" role="group" aria-label="Filter by group">' + chips + '</div>' +
      '<div id="dp-results" class="tgl-results">' + resultsHtml(records, '', 'all') + '</div>' +
      saveBar(NAME, '#/admin', 'Back to dashboard') +
    '</section>'
  );

  const view = (typeof document !== 'undefined') ? document.getElementById('view') : null;
  if (view) {
    view.innerHTML = html;
    wireForm(view, { name: NAME, getRecord: function () { return {}; }, reRender: function () { renderPrinciplesIndex(); }, onChange: updateStatus });
    if (!wired) { wireIndex(); wired = true; }
  }
  return null;
}

function paint() {
  if (typeof document === 'undefined') return;
  const q = term.trim().toLowerCase();
  const results = document.getElementById('dp-results');
  if (results) results.innerHTML = resultsHtml(records, q, activeCat);
  const countEl = document.getElementById('dp-count');
  if (countEl) countEl.textContent = countText(records, q, activeCat);
  document.querySelectorAll('.tgl-chip').forEach(function (ch) {
    const on = ch.getAttribute('data-cat') === activeCat;
    ch.setAttribute('aria-pressed', on ? 'true' : 'false');
    ch.classList.toggle('is-on', on);
  });
}

function wireIndex() {
  if (typeof window === 'undefined' || !window.addEventListener) return;
  window.addEventListener('input', function (e) {
    const t = e && e.target;
    if (!t || t.id !== 'dp-search') return;
    term = t.value || '';
    if (debTimer) clearTimeout(debTimer);
    debTimer = setTimeout(paint, 150);
  });
  window.addEventListener('click', function (e) {
    const t = e && e.target;
    if (!t || !t.closest) return;

    if (t.closest('.tgl-chip')) {
      activeCat = (t.closest('.tgl-chip').getAttribute('data-cat')) || 'all';
      paint();
      return;
    }

    if (t.closest('[data-dpadd]')) {
      e.preventDefault();
      const list = AdminData.get(NAME) || [];
      const blank = JSON.parse(JSON.stringify(BLANK_ROW));
      blank.id = nextId(list);
      blank.text = 'New design principle';
      blank.order = (list.length ? Math.max.apply(null, list.map(function (r) { return r.order || 0; })) : 0) + 1;
      list.push(blank);
      redensify(list);
      Router.go('#/admin/design-principles/' + blank.id);
      return;
    }

    if (t.closest('[data-dpdel]')) {
      e.preventDefault();
      const id = t.closest('[data-dpdel]').getAttribute('data-dpdel');
      confirmDialog('Delete this design principle ("' + id + '")?', { title: 'Delete item?', danger: true, okLabel: 'Delete' })
        .then(function (ok) {
          if (!ok) return;
          const list = AdminData.get(NAME) || [];
          const idx = list.findIndex(function (r) { return r.id === id; });
          if (idx >= 0) list.splice(idx, 1);
          redensify(list);
          renderPrinciplesIndex();
          toast('Deleted ' + id + '.', 'info');
        });
    }
  });
}

/* ---- Save-gate: reject an empty text ------------------------------------- */

function findRow(list, id) { return (list || []).find(function (r) { return r.id === id; }); }

function invalidFields(rec) {
  const bad = [];
  if (!norm(rec && rec.text)) bad.push('text');
  if (!norm(rec && rec.id)) bad.push('id');
  return bad;
}

/* ---- Edit one row --------------------------------------------------------- */

export function renderPrinciplesEdit(params) {
  const id = params && params.id;
  const view = (typeof document !== 'undefined') ? document.getElementById('view') : null;
  if (!view) return null;

  const rec = findRow(AdminData.get(NAME) || [], id);
  if (!rec) { view.innerHTML = notFound('Design principle', 'id ' + id); return null; }

  const html = (
    '<section class="admin-edit" aria-labelledby="dp-edit-title">' +
      '<header class="admin-edit__head">' +
        '<h1 id="dp-edit-title" class="anim-rise" style="--i:0">Design principle &middot; ' + esc(rec.text || rec.id) + '</h1>' +
        '<p class="muted anim-rise" style="--i:1">' + esc(labelFor(rec.category)) + ' &middot; ' + esc(rec.id) + '</p>' +
      '</header>' +
      '<div class="admin-edit__body anim-rise" style="--i:1">' +
        renderForm(SCHEMA, rec, null, null) +
        '<div class="tgl-conflict" id="dp-conflict" role="status" aria-live="polite"></div>' +
      '</div>' +
      saveBar(NAME, '#/admin/design-principles', 'Back to design principles') +
    '</section>'
  );

  view.innerHTML = html;

  wireOnce(view, 'savegate', { click: { fn: function (e) {
    const t = e.target;
    if (!t || !t.closest) return;
    if (!t.closest('[data-save="' + NAME + '"]')) return;
    const cur = findRow(AdminData.get(NAME) || [], id);
    const bad = invalidFields(cur);
    const ind = document.getElementById('dp-conflict');
    if (bad.length) {
      e.preventDefault();
      e.stopImmediatePropagation();
      if (ind) { ind.textContent = 'Cannot save: fill in ' + bad.join(' and ') + '.'; ind.className = 'tgl-conflict is-bad'; }
      toast('Fill in ' + bad.join(' and ') + ' before saving.', 'bad');
      return;
    }
    if (ind) { ind.textContent = ''; ind.className = 'tgl-conflict'; }
  }, capture: true } });

  wireForm(view, {
    name: NAME,
    schema: SCHEMA,
    getRecord: function () { return findRow(AdminData.get(NAME) || [], id); },
    reRender: function () { renderPrinciplesEdit(params); },
    onChange: updateStatus,
  });
  return null;
}

export default { renderPrinciplesIndex, renderPrinciplesEdit, SCHEMA, redensify, nextId, invalidFields };