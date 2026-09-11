/* ==========================================================================
   Seneca 3D Integration - js/views/shortcuts.js
   The student "Blender shortcuts" surface (handoff 081). A new, data-driven
   `shortcuts` collection (flat array like `glossary`) rendered two ways:

      1. `mountRail(list)` - the persistent rail's SHORTCUTS section, built with
         the shared rail framework (rail-section.js) and mounted ONCE at boot
         into `#shortcuts-rail`. It sits beside the Checklist section (rail
         reorg); both are independent open/close.
      2. `render(list)`    - the full `#/shortcuts` page: all 7 categories,
         grouped and ordered.

   The 7 fixed categories are a SINGLE component constant (CATEGORIES) shared
   by the student + teacher views so the labels / order never drift. Rows carry
   the category slug; the constant supplies the label. No shortcut rows are
   hard-coded here - they come from the collection.

   a11y / XSS: every dynamic string (key, label, category label) is rendered
   through esc() from shared.js. The toggle carries aria-expanded +
   aria-controls; the search input is labelled; all targets are >= 44px; and
   collapse/expand is an instant state change under prefers-reduced-motion.
   ========================================================================== */

import { esc } from './shared.js';
import { buildSection, wireSection, closeSection, appendHtml } from './rail-section.js';
import { triggerHtml } from '../core/rail-lightbox.js';

/* The 7 fixed categories (slug -> label), in render order. ONE constant. */
export const CATEGORIES = [
  { slug: 'create', label: 'Creating objects' },
  { slug: 'hard-surface', label: 'Hard-surface manipulation' },
  { slug: 'materials', label: 'Creating materials' },
  { slug: 'collections', label: 'Collections' },
  { slug: 'cameras', label: 'Cameras' },
  { slug: 'lights', label: 'Lights' },
  { slug: 'render', label: 'Rendering' },
  { slug: 'submission-checklist', label: 'Submission checklist' },
];

const BY_SLUG = Object.create(null);
CATEGORIES.forEach(function (c) { BY_SLUG[c.slug] = c.label; });

/* Resolve a category label (fall back to the raw slug so nothing is hidden). */
function labelFor(slug) { return BY_SLUG[slug] || (slug || 'Other'); }

/* ---- Page (full #/shortcuts reference) ---------------------------------- */

function pageRow(r) {
  return (
    '<li class="sc-row">' +
      '<span class="sc-row__key"><kbd>' + esc(r.key) + '</kbd></span>' +
      '<span class="sc-row__label">' + esc(r.label) + '</span>' +
    '</li>'
  );
}

function rowsFor(list, slug) {
  return (list || [])
    .filter(function (r) { return r && r.category === slug; })
    .sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
}

function categoryBlock(c, list) {
  const rows = rowsFor(list, c.slug);
  if (!rows.length) return '';
  return (
    '<section class="sc-cat" id="sc-cat-' + esc(c.slug) + '" tabindex="-1">' +
      '<h2 class="sc-cat__h">' + esc(c.label) + ' <span class="sc-cat__n" aria-hidden="true">' + rows.length + '</span></h2>' +
      '<ul class="sc-cat__list">' + rows.map(pageRow).join('') + '</ul>' +
    '</section>'
  );
}

export function render(list) {
  const total = (list || []).length;
  const blocks = CATEGORIES.map(function (c) { return categoryBlock(c, list); }).join('');
  return (
    '<section class="lookup sc-page" aria-labelledby="sc-h">' +
      '<h1 id="sc-h" class="anim-rise" style="--i:0">Blender shortcuts</h1>' +
      '<p class="muted anim-rise" style="--i:0">' +
        'The seven action categories, on hand. Find the key, grab the action, get back to the block. ' +
        total + ' shortcuts across ' + CATEGORIES.length + ' categories.</p>' +
      '<div class="sc-page__cats">' + (blocks || '<p class="muted">No shortcuts have been added yet.</p>') + '</div>' +
    '</section>'
  );
}

/* ---- Rail (shortcuts section) ------------------------------------------- */

/* Row hook for the shared section: shortcuts get jump buttons; submission-
   checklist items (empty key) render as plain informational rows so they are
   visible and not confused with navigable shortcuts. */
function jumpRow(r, c) {
  const hasKey = r && r.key && String(r.key).trim() !== '';
  const trig = hasKey ? triggerHtml(r) : '';
  if (hasKey) {
    return (
      '<button type="button" class="sc-rail__row' + (trig ? ' rail-lb' : '') + '" data-cat="' + esc(c.slug) + '" data-id="' + esc(r.id) + '" ' +
        'aria-label="' + esc(c.label) + ': ' + esc(r.label) + '">' +
        '<span class="sc-rail__key">' + esc(r.key) + '</span>' +
        '<span class="sc-rail__label">' + esc(r.label) + '</span>' +
        trig +
      '</button>'
    );
  }
  /* Checklist item: no key -> plain readable row, same CSS styling. */
  return (
    '<div class="sc-rail__row" data-cat="' + esc(c.slug) + '" data-id="' + esc(r.id) + '" ' +
      'role="listitem" aria-label="' + esc(c.label) + ': ' + esc(r.label) + '">' +
      '<span class="sc-rail__label">' + esc(r.label) + '</span>' +
    '</div>'
  );
}

/* Jump to a category on the #/shortcuts page (navigate, then scroll + focus). */
function jumpToCat(slug) {
  if (typeof location === 'undefined') return;
  const on = (location.hash || '').indexOf('#/shortcuts') === 0;
  if (!on) location.hash = '#/shortcuts';
  const go = function () {
    const el = document.getElementById('sc-cat-' + slug);
    if (el) { el.scrollIntoView({ block: 'start' }); if (el.focus) el.focus({ preventScroll: true }); }
  };
  if (typeof setTimeout === 'function') setTimeout(go, on ? 0 : 80); else go();
}

/* Mount the shortcuts section ONCE into #shortcuts-rail (round 2.7: it now
   coexists with the artistic-checklist section + the mannequin link). */
export function mountRail(list) {
  if (typeof document === 'undefined') return;
  const rail = document.getElementById('shortcuts-rail');
  if (!rail) return;
  const prev = rail.querySelector('#sc-section');
  if (prev && prev.remove) prev.remove();
  appendHtml(rail, buildSection({
    idPrefix: 'sc',
    title: 'Shortcuts',
    categories: CATEGORIES,
    list: list,
    rowHtml: jumpRow,
  }));
  const section = rail.querySelector('#sc-section');
  wireSection(section, {
    onRow: function (row, e, sec) {
      const cat = row.getAttribute('data-cat');
      /* Checklist rows (divs, no key) should not trigger navigation. */
      if (cat && row.tagName === 'BUTTON') jumpToCat(cat);
      if (row.tagName === 'BUTTON') closeSection(sec);
    },
  });
}

export default { CATEGORIES, render, mountRail, labelFor };
