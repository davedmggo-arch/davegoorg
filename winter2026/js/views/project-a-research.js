/* ==========================================================================
   Seneca 3D Integration - js/views/project-a-research.js
   The "Project A Research" rail section: a collapsible sidebar section that
   renders external reference links from Wikimedia Commons, grouped by the
   three Project A themes with sub-groups for specific environments:
     - Nordic Fjords and Forests (10th-12th C)
     - East Asian Mountain Temples (8th-10th C)
     - Sahel Crossroads (13th-15th C)

   Links open in a new tab with safe URL validation (https only).
   Rendered using the shared rail framework (rail-section.js).
   ========================================================================== */

import { esc } from './shared.js';
import { buildSection, wireSection, appendHtml } from './rail-section.js';

/* The three Project A theme categories (slug -> label), in render order. */
const CATEGORIES = [
  { slug: 'nordic-fjords', label: 'Nordic Fjords and Forests' },
  { slug: 'east-asian-temples', label: 'East Asian Mountain Temples' },
  { slug: 'sahel-crossroads', label: 'Sahel Crossroads' },
];

/* ---- External link data -------------------------------------------------- */

/* All external links, grouped by theme and environment. URLs are validated
   at build time (https only, no javascript:). */
var EXTERNAL_LINKS = [
  /* Nordic Fjords and Forests (10th-12th C) */
  {
    id: 'nordic-longhouse-interiors',
    category: 'nordic-fjords',
    subCategory: 'longhouse-interiors',
    title: 'Longhouse Hearth',
    summary: 'Lofotr Viking Museum reference images',
    url: 'https://commons.wikimedia.org/wiki/Category:Longhouse_at_Lofotr_Vikingmuseum',
    order: 1,
  },
  {
    id: 'nordic-viking-reconstructions',
    category: 'nordic-fjords',
    subCategory: 'viking-reconstructions',
    title: 'Coastal Fishing Hut',
    summary: 'Reconstructed Viking buildings for structural reference',
    url: 'https://commons.wikimedia.org/wiki/Category:Fishing_huts',
    order: 2,
  },
  {
    id: 'nordic-stave-churches',
    category: 'nordic-fjords',
    subCategory: 'stave-churches',
    title: 'Mountain Hermit Cell',
    summary: 'Norwegian stave church architecture',
    url: 'https://commons.wikimedia.org/wiki/Category:Stave_churches',
    order: 3,
  },
  /* East Asian Mountain Temples (8th-10th C) */
  {
    id: 'asian-tea-house-interiors',
    category: 'east-asian-temples',
    subCategory: 'tea-house-interiors',
    title: 'Kyoto Tea House Interior',
    summary: 'Chashitsu tea room interiors',
    url: 'https://commons.wikimedia.org/wiki/Category:Chashitsu_interiors',
    order: 1,
  },
  {
    id: 'asian-mountain-temple',
    category: 'east-asian-temples',
    subCategory: 'mountain-temple',
    title: 'Rice Terrace Rest House',
    summary: 'Hoo-ro-ji temple complex reference images',
    url: 'https://commons.wikimedia.org/wiki/Category:Banaue_Rice_Terraces',
    order: 2,
  },
  {
    id: 'asian-rice-terraces',
    category: 'east-asian-temples',
    subCategory: 'rice-terraces',
    title: 'Floating Market Stall',
    summary: 'Banaue Rice Terraces landscape reference',
    url: 'https://commons.wikimedia.org/wiki/Category:Floating_markets',
    order: 3,
  },
  /* Sahel Crossroads (13th-15th C) */
  {
    id: 'sahel-mud-brick',
    category: 'sahel-crossroads',
    subCategory: 'mud-brick-architecture',
    title: 'Granary Compound Interior',
    summary: 'Great Mosque of Djenn reference images',
    url: 'https://commons.wikimedia.org/wiki/Category:Great_Mosque_of_Djenn%C3%A9',
    order: 1,
  },
  {
    id: 'sahel-architecture',
    category: 'sahel-crossroads',
    subCategory: 'sahel-architecture',
    title: 'Cliffside Library',
    summary: 'Sudano-Sahelian architectural styles',
    url: 'https://commons.wikimedia.org/wiki/Category:Buildings_in_Timbuktu',
    order: 2,
  },
  {
    id: 'sahel-timbuktu',
    category: 'sahel-crossroads',
    subCategory: 'timbuktu-sites',
    title: 'Savanna Lookout',
    summary: 'Historic Timbuktu site reference images',
    url: 'https://commons.wikimedia.org/wiki/Category:Historic_Centre_of_Agadez',
    order: 3,
  },
];

/* ---- Pure helpers -------------------------------------------------------- */

/* Validate a URL is safe for use as an external link. Only https is allowed;
   javascript: and data: URIs are rejected. Returns true if the URL is safe. */
function isValidExternalUrl(url) {
  if (!url || typeof url !== 'string') return false;
  var lower = url.toLowerCase().trim();
  if (lower.indexOf('javascript:') === 0) return false;
  if (lower.indexOf('data:') === 0) return false;
  if (lower.indexOf('file:') === 0) return false;
  if (lower.indexOf('http:') === 0) return false;
  return lower.indexOf('https://') === 0;
}

/* Rail row hook: an external reference link that opens in a new tab. */
function researchRow(r) {
  var safeUrl = isValidExternalUrl(r.url) ? esc(r.url) : '#';
  return (
    '<a href="' + safeUrl + '" class="sc-rail__row pr-row pr-row--link" target="_blank" rel="noopener noreferrer" ' +
      'aria-label="External reference: ' + esc(r.title) + '" ' +
      'data-pr-id="' + esc(r.id) + '">' +
      '<span class="pr-row__title">' + esc(r.title) + '</span>' +
      (r.summary ? '<span class="pr-row__summary">' + esc(r.summary) + '</span>' : '') +
    '</a>'
  );
}

/* ---- Rail (Project A Research section) ---------------------------------- */

/* Mount the Project A Research section ONCE into #shortcuts-rail.
   The `researchList` parameter is kept for backward compatibility but is no
   longer used; external link data is embedded in this module. */
export function mountRail() {
  if (typeof document === 'undefined') return;
  var rail = document.getElementById('shortcuts-rail');
  if (!rail) return;

  /* Remove any existing Project A Research section before mounting. */
  var prev = rail.querySelector('#pr-section');
  if (prev && prev.remove) prev.remove();

  appendHtml(rail, buildSection({
    idPrefix: 'pr',
    title: 'Project A Research',
    categories: CATEGORIES,
    list: EXTERNAL_LINKS,
    rowHtml: researchRow,
  }));

  /* No onRow handler needed: links are native <a> elements with target="_blank". */
  var section = rail.querySelector('#pr-section');
  wireSection(section, {});
}

export default { CATEGORIES, mountRail, EXTERNAL_LINKS };
