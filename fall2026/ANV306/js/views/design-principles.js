/* ==========================================================================
   Seneca 3D Integration - js/views/design-principles.js
   The student "Principles & Elements of Design" reference (round 2.9, 102).
   A data-driven `design-principles` collection (flat array like `shortcuts`)
   rendered as a SINGLE surface:

     `mountRail(list)` - the persistent rail's DESIGN-PRINCIPLES section (the
       3rd dropdown), built with the shared rail framework (rail-section.js)
       and mounted ONCE at boot into `#shortcuts-rail`. Each row is INLINE and
       READ-ONLY: the item's full definition (`text`) plus its one-line
       environment note (`environment`). There is NO jump-to-page - the whole
       reference now lives in the sidebar.

   Round 2.9 (102): the separate #/design-principles page + its route + nav
   link were REMOVED (the reference is fully in the rail now). The teacher
   editor (#/admin/design-principles) and the `design-principles` collection
   are unchanged. Each row may optionally carry an `image` field; when present
   an inline lightbox trigger renders beside the text (core/rail-lightbox.js).

   The 2 fixed categories are a SINGLE component constant (CATEGORIES) shared
   by the student + teacher views so the labels / order never drift. Rows come
   from the collection (none are hard-coded). All dynamic text via esc();
   prefers-reduced-motion = instant (see css/design-principles.css).
   ========================================================================== */

import { esc } from './shared.js';
import { buildSection, wireSection, appendHtml } from './rail-section.js';
import { triggerHtml } from '../core/rail-lightbox.js';

/* The 2 fixed categories (slug -> label), in render order. ONE constant -
   the teacher view imports this, so the labels / order never drift. */
export const CATEGORIES = [
  { slug: 'elements', label: 'Elements of Design' },
  { slug: 'principles', label: 'Principles of Design' },
];

const BY_SLUG = Object.create(null);
CATEGORIES.forEach(function (c) { BY_SLUG[c.slug] = c.label; });

/* Resolve a category label (fall back to the raw slug so nothing is hidden). */
export function labelFor(slug) { return BY_SLUG[slug] || (slug || 'Other'); }

/* ---- Rail (3rd dropdown: design-principles section, fully inline) -------- */

/* One inline, read-only row: the item's definition + its one-line environment
   note. Carries the shared `sc-rail__row` class so the section's live search
   sees it (the search matches the combined definition + environment text).
   A row with an `image` field also carries an inline lightbox trigger. */
function inlineRow(r, c) {
  const env = String(r.environment || '');
  const trig = triggerHtml(r);
  return (
    '<div class="sc-rail__row dp-rail__row' + (trig ? ' rail-lb' : '') + '" data-cat="' + esc(c.slug) + '" data-id="' + esc(r.id) + '">' +
      '<span class="dp-rail__text">' +
        '<span class="dp-rail__def">' + esc(r.text) + '</span>' +
        (env ? '<span class="dp-rail__env">' + esc(env) + '</span>' : '') +
      '</span>' +
      trig +
    '</div>'
  );
}

/* Mount the design-principles section ONCE into #shortcuts-rail, beside the
   shortcuts + artistic-checklist sections (all three coexist). The reference
   is fully inline now - no jump, no separate page - so there is no `onRow`
   (the rows are read-only text, not buttons). */
export function mountRail(list) {
  if (typeof document === 'undefined') return;
  const rail = document.getElementById('shortcuts-rail');
  if (!rail) return;
  const prev = rail.querySelector('#dp-section');
  if (prev && prev.remove) prev.remove();
  appendHtml(rail, buildSection({
    idPrefix: 'dp',
    title: 'Design Principles',
    categories: CATEGORIES,
    list: list,
    rowHtml: inlineRow,
  }));
  const section = rail.querySelector('#dp-section');
  wireSection(section, {});
}

export default { CATEGORIES, labelFor, mountRail };
