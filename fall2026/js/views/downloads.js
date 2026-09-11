/* ==========================================================================
   Seneca 3D Integration - js/views/downloads.js
   The "Downloads" rail section: a top-level collapsible section outside of
   Checklist, holding temp links for the Mannequin and Skybox Blender files.
   Easy to update in Teacher Mode via the downloads.json seed.

   Data source: `downloads.json` (flat array).
   Rendered as clickable link rows using the shared rail framework
   (rail-section.js). Each row is an anchor tag styled as a rail row.
   ========================================================================== */

import { esc } from './shared.js';
import { buildSection, wireSection, appendHtml } from './rail-section.js';

/* The downloads category is a single flat group; no sub-categories needed. */
const CATEGORIES = [{ slug: 'blender-files', label: 'Blender Files' }];

/* ---- Pure helpers -------------------------------------------------------- */

/* Rail row hook: a download link rendered as an anchor styled like a rail row. */
function downloadRow(r, c) {
  return (
    '<a class="sc-rail__row dl-row" href="' + esc(r.url) + '" ' +
      'data-dl-id="' + esc(r.id) + '" ' +
      'aria-label="Download ' + esc(r.title) + '">' +
      '<span class="dl-row__title">' + esc(r.title) + '</span>' +
      '<span class="dl-row__desc">' + esc(r.description) + '</span>' +
    '</a>'
  );
}

/* ---- Rail (downloads section) ------------------------------------------- */

/* Mount the Downloads section ONCE into #shortcuts-rail. It sits beside the
   existing Shortcuts and Checklist sections. */
export function mountRail(list) {
  if (typeof document === 'undefined') return;
  const rail = document.getElementById('shortcuts-rail');
  if (!rail) return;
  const prev = rail.querySelector('#dl-section');
  if (prev && prev.remove) prev.remove();
  appendHtml(rail, buildSection({
    idPrefix: 'dl',
    title: 'Downloads',
    categories: CATEGORIES,
    list: list.map(function (item) {
      return Object.assign({ category: 'blender-files' }, item);
    }),
    rowHtml: downloadRow,
  }));
  const section = rail.querySelector('#dl-section');
  wireSection(section, {});
}

export default { CATEGORIES, mountRail };
