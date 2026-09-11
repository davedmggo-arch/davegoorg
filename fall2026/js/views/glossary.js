/* ==========================================================================
   views/glossary.js - Phase 2b student Glossary views (list + detail).

   The glossary is the hard one: 1,175 rows. We never render all of them at
   once. The list view bakes a bounded "window" of the filtered subset (the
   first GL_WINDOW rows, grouped by category) plus a "Show more" affordance
   that grows it in GL_STEP chunks, and a live count. Live search (debounced)
   and category chips re-filter and re-paint only the results region, so first
   paint stays fast on a phone and the search box keeps focus while typing.

   Routing: the list is #/glossary; each row links to #/glossary/:id using the
   record's unique `id` (category-slug-anchor). All content is read-only.
   ========================================================================== */
import Markdown from '../core/markdown.js';
import { esc, splitCsv, notFound } from './shared.js';

const GL_WINDOW = 120;   // initial visible terms (bounded first paint)
const GL_STEP = 150;     // how many more a "Show more" click reveals
const DEBOUNCE = 150;    // ms before a keystroke re-paints

// Module-scoped view state. Reset on every fresh list render() so that
// navigating away and back always starts from a clean, unfiltered window.
let records = [];
let activeCat = 'all';
let term = '';
let windowed = GL_WINDOW;
let debTimer = null;

/* ---- pure helpers (no DOM; unit-testable) -------------------------------- */

function fmtCount(n) {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

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

function filter(list, q, cat) {
  return (list || []).filter(function (r) { return matches(r, q, cat); });
}

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
  const short = def.length > 150 ? def.slice(0, 150).replace(/\s+\S*$/, '') + '...' : def;
  return (
    '<li class="gl-row">' +
      '<a class="gl-row__term" href="#/glossary/' + esc(r.id) + '">' + esc(r.term) + '</a>' +
      '<span class="gl-row__def">' + esc(short) + '</span>' +
    '</li>'
  );
}

// The HTML for the currently-filtered + windowed results region (bounded).
function resultsHtml() {
  const q = term.trim().toLowerCase();
  const filtered = filter(records, q, activeCat);
  const total = filtered.length;
  const show = Math.min(windowed, total);
  const groups = groupWindowed(filtered.slice(0, show));

  let html = '';
  for (const g of groups) {
    html +=
      '<section class="gl-group">' +
        '<h2 class="gl-group__h">' + esc(g.cat) +
          ' <span class="gl-group__n">' + g.rows.length + '</span></h2>' +
        '<ul class="gl-list">' + g.rows.map(rowHtml).join('') + '</ul>' +
      '</section>';
  }

  if (html === '') {
    return '<p class="gl-empty muted">No terms match. Try another word or category.</p>';
  }
  if (total > show) {
    html += '<p class="gl-more">' +
      '<button type="button" class="btn btn--ghost" id="gl-showmore">' +
      'Show more (' + fmtCount(total - show) + ' remaining)</button></p>';
  }
  return html;
}

function countText() {
  const total = filter(records, term.trim().toLowerCase(), activeCat).length;
  return fmtCount(total) + (total === 1 ? ' term' : ' terms');
}

/* ---- DOM paint (idempotent; re-paints the results region only) ----------- */

function paint() {
  if (typeof document === 'undefined' || !document.getElementById) return;
  const results = document.getElementById('gl-results');
  if (results) results.innerHTML = resultsHtml();
  const countEl = document.getElementById('gl-count');
  if (countEl) countEl.textContent = countText();
  if (document.querySelectorAll) {
    document.querySelectorAll('.gl-chip').forEach(function (ch) {
      const on = ch.getAttribute && ch.getAttribute('data-cat') === activeCat;
      if (ch.setAttribute) ch.setAttribute('aria-pressed', on ? 'true' : 'false');
      if (ch.classList && ch.classList.toggle) ch.classList.toggle('is-on', on);
    });
  }
}

/* ---- view render (pure string builders; no DOM writes) ------------------- */

export function render(list) {
  records = (list && list.length) ? list : [];
  activeCat = 'all';
  term = '';
  windowed = GL_WINDOW;

  const cats = allCategories(records);
  const chips = [
    '<button type="button" class="gl-chip is-on" data-cat="all" aria-pressed="true">' +
      'All <span class="gl-chip__n">' + fmtCount(records.length) + '</span></button>'
  ].concat(cats.map(function (c) {
    return '<button type="button" class="gl-chip" data-cat="' + esc(c) + '" aria-pressed="false">' +
      esc(c) + ' <span class="gl-chip__n">' + fmtCount(countCat(records, c)) + '</span></button>';
  })).join('');

  return (
    '<section class="lookup gl" aria-labelledby="gl-h">' +
      '<h1 id="gl-h" class="anim-rise" style="--i:0">Glossary</h1>' +
      '<p class="muted anim-rise" style="--i:0">' +
        'The full term sheet for the course. Search by term or definition, or filter by category.</p>' +
      '<div class="gl-tools anim-rise" style="--i:1">' +
        '<label class="sr-only" for="gl-search">Search terms</label>' +
        '<input id="gl-search" class="search" type="search" autocomplete="off" ' +
          'placeholder="Search ' + fmtCount(records.length) + ' terms..." />' +
        '<span id="gl-count" class="gl-count" role="status" aria-live="polite">' + countText() + '</span>' +
      '</div>' +
      '<div class="gl-chips anim-rise" style="--i:1" role="group" aria-label="Filter by category">' +
        chips +
      '</div>' +
      '<div id="gl-results" class="gl-results">' + resultsHtml() + '</div>' +
    '</section>'
  );
}

export function renderDetail(rec, list) {
  if (!rec || !rec.id) return notFound('Glossary term', 'That term is not in the sheet.');

  const sources = splitCsv(rec.source);
  const chapters = splitCsv(rec.chapter);
  const li = function (t) { return '<li>' + esc(t) + '</li>'; };

  let html =
    '<article class="detail">' +
      '<p class="detail__kicker anim-rise" style="--i:0">' + esc(rec.category || 'Glossary') + '</p>' +
      '<h1 class="anim-rise" style="--i:1">' + esc(rec.term) + '</h1>' +
      '<div class="detail__def md anim-rise" style="--i:2">' + Markdown.render(rec.definition || '') + '</div>';

  if (sources.length) {
    html += '<section class="detail__meta anim-rise" style="--i:3"><h2>Source</h2>' +
      '<ul>' + sources.map(li).join('') + '</ul></section>';
  }
  if (chapters.length) {
    html += '<section class="detail__meta anim-rise" style="--i:3"><h2>Chapter</h2>' +
      '<ul>' + chapters.map(li).join('') + '</ul></section>';
  }

  html +=
    '<p class="detail__back anim-rise" style="--i:4">' +
      '<a class="btn btn--ghost" href="#/glossary">&#8592; Back to the glossary</a></p>' +
    '</article>';

  return html;
}

/* ---- delegated wiring (registered once; survives route re-renders) ------- */

function wire() {
  if (typeof window === 'undefined' || !window.addEventListener) return;

  window.addEventListener('input', function (e) {
    const t = e && e.target;
    if (!t || t.id !== 'gl-search') return;
    term = t.value || '';
    windowed = GL_WINDOW;
    if (debTimer) clearTimeout(debTimer);
    debTimer = setTimeout(paint, DEBOUNCE);
  });

  window.addEventListener('click', function (e) {
    const t = e && e.target;
    if (!t || !t.closest) return;
    const chip = t.closest('.gl-chip');
    if (chip) {
      activeCat = (chip.getAttribute && chip.getAttribute('data-cat')) || 'all';
      const box = document.getElementById ? document.getElementById('gl-search') : null;
      term = box ? (box.value || '') : '';
      windowed = GL_WINDOW;
      paint();
      return;
    }
    if (t.id === 'gl-showmore') {
      windowed += GL_STEP;
      paint();
    }
  });

  // Re-paint if the list is (re)mounted; render() already bakes the first
  // window, so this is a no-op the first time and a safe refresh after that.
  window.addEventListener('route:change', function () {
    if (document.getElementById && document.getElementById('gl-results')) paint();
  });
}

wire();

export default { render, renderDetail };
