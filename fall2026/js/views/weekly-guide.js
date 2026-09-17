/* ==========================================================================
   Seneca 3D Integration - js/views/weekly-guide.js
   The "Weekly Guide" rail section: a collapsible sidebar section that renders
   lesson-specific teaching guides from weekly-guides.json.

   When a lesson (e.g. wk-01) is active, this module fetches its guide data,
   renders nested accordions for each topic section, and provides a lightbox
   for hotkey reference images.

   Data source: `weekly-guides.json` keyed by week id.
   Rendered using the shared rail framework (rail-section.js).
   ========================================================================== */

import { esc } from './shared.js';
import { buildSection, wireSection, appendHtml } from './rail-section.js';

/* ---- Pure helpers -------------------------------------------------------- */

/* Render one step as a list item. */
function stepLi(step, idx) {
  return '<li class="wg-step" data-step="' + idx + '">' + esc(step) + '</li>';
}

/* Render one hotkey row with a .kbd pill for the key and a thumbnail
   image (clickable for lightbox) when imageUrl is present. */
function hotkeyRow(h, sectionId) {
  var imgHtml = '';
  if (h.imageUrl && h.imageUrl.trim()) {
    imgHtml = (
      '<div class="wg-thumb" data-lg-img="' + esc(h.imageUrl) + '" ' +
        'data-lg-cap="' + esc(h.description || '') + '" tabindex="0" ' +
        'aria-label="View image: ' + esc(h.description || '') + '">' +
        '<div class="wg-thumb__frame">' +
          '<img class="wg-thumb__img" src="' + esc(h.imageUrl) + '" alt="' + esc(h.description || '') + '" loading="lazy" />' +
        '</div>' +
        '<span class="wg-thumb__cap">' + esc(h.description || '') + '</span>' +
      '</div>'
    );
  }
  return (
    '<div class="wg-hotkey sc-rail__row" data-hk-id="' + esc(sectionId) + '-' + (h.key || '') + '">' +
      '<kbd class="wg-kbd">' + esc(h.key) + '</kbd>' +
      '<span class="wg-hotkey__action">' + esc(h.action || '') + '</span>' +
      (h.description ? '<span class="wg-hotkey__desc">' + esc(h.description) + '</span>' : '') +
      imgHtml +
    '</div>'
  );
}

/* Render one section as a <details> accordion inside a rail group. */
function sectionBlock(sec) {
  var stepsHtml = sec.steps && sec.steps.length ? '<ol class="wg-steps">' + sec.steps.map(stepLi).join('') + '</ol>' : '';
  var hotkeysHtml = sec.hotkeys && sec.hotkeys.length ? '<div class="wg-hotkeys">' + sec.hotkeys.map(function (h) { return hotkeyRow(h, sec.id); }).join('') + '</div>' : '';
  var expectHtml = sec.expectations ? '<blockquote class="wg-expect">' + esc(sec.expectations) + '</blockquote>' : '';
  return (
    '<details class="wg-section sc-rail__group" data-sec="' + esc(sec.id) + '">' +
      '<summary class="wg-section__summary">' + esc(sec.title) + '</summary>' +
      '<div class="wg-section__panel">' +
        (sec.description ? '<p class="wg-lead">' + esc(sec.description) + '</p>' : '') +
        stepsHtml +
        hotkeysHtml +
        expectHtml +
      '</div>' +
    '</details>'
  );
}

/* Render the Naming Conventions block as a collapsible section. */
function namingConventionsBlock(nc) {
  if (!nc) return '';
  var prefixRows = nc.blenderPrefixes && nc.blenderPrefixes.length
    ? nc.blenderPrefixes.map(function (p) {
        return '<div class="wg-nc__row"><code class="wg-nc__code">' + esc(p.prefix) + '</code><span class="wg-nc__desc">' + esc(p.meaning) + '</span></div>';
      }).join('')
    : '';
  return (
    '<details class="wg-section wg-section--nc sc-rail__group" data-sec="naming-conventions">' +
      '<summary class="wg-section__summary">Naming Conventions</summary>' +
      '<div class="wg-section__panel">' +
        '<div class="wg-nc">' +
          (nc.renderExtension ? '<p class="wg-nc__rule"><strong>Render format:</strong> ' + esc(nc.renderExtension) + '</p>' : '') +
          (nc.fileFormat ? '<p class="wg-nc__rule"><strong>File name:</strong> <code class="wg-nc__code">' + esc(nc.fileFormat) + '</code></p>' : '') +
          (prefixRows ? '<div class="wg-nc__prefixes">' + prefixRows + '</div>' : '') +
        '</div>' +
      '</div>' +
    '</details>'
  );
}

/* ---- Rail (weekly guide section) ---------------------------------------- */

/* Mount the Weekly Guide section into #shortcuts-rail. It sits beside the
   existing Shortcuts, Checklist, and Downloads sections. */
export function mountRail(guideData) {
  if (typeof document === 'undefined') return;
  const rail = document.getElementById('shortcuts-rail');
  if (!rail) return;

  if (!guideData) {
    appendHtml(rail, buildSection({
      idPrefix: 'wg',
      title: 'Weekly Guide',
      categories: [],
      list: [],
      rowHtml: function () { return ''; },
    }));
    const section = rail.querySelector('#wg-section');
    wireSection(section, {});
    return;
  }

  const sections = guideData.sections || [];
  const title = guideData.title || 'Weekly Guide';

  /* Wrap section blocks inside a single rail group so the rail toggle/search
      still work around it. We bypass buildSection and build a custom HTML block
      that uses the same sc-rail scaffolding. */
  const sectionsHtml = sections.map(function (s) { return sectionBlock(s); }).join('');
  const ncHtml = namingConventionsBlock(guideData.namingConventions || null);

  const html = (
    '<div class="sc-section" id="wg-section">' +
      '<button type="button" class="sc-rail__toggle" aria-expanded="false" aria-controls="wg-panel">' +
        '<span class="sc-rail__title">' + esc(title) + '</span>' +
        '<span class="sc-rail__chev" aria-hidden="true">&#8250;</span>' +
      '</button>' +
      '<div class="sc-rail__panel" id="wg-panel">' +
        '<label class="sc-rail__sr" for="wg-search">Filter Weekly Guide</label>' +
        '<input class="sc-rail__search" id="wg-search" type="search" ' +
          'placeholder="Filter weekly guide" aria-label="Filter Weekly Guide" autocomplete="off" />' +
        '<nav class="sc-rail__nav" aria-label="Guide sections">' +
          (sectionsHtml || '<li class="sc-rail__empty">No guide for this week.</li>') +
          ncHtml +
          '<p class="sc-rail__nomatch" hidden>Nothing matches your filter.</p>' +
        '</nav>' +
      '</div>' +
    '</div>'
  );

  appendHtml(rail, html);
  const section = rail.querySelector('#wg-section');
  wireSection(section, {});

  /* Wire lightbox delegation for thumbnail clicks. */
  if (section) {
    section.addEventListener('click', function (e) {
      const thumb = e.target.closest ? e.target.closest('.wg-thumb') : null;
      if (!thumb) return;
      openLightbox(thumb.dataset.lgImg, thumb.dataset.lgCap || '');
    });
    /* Keyboard accessibility: Enter/Space on thumbnail opens lightbox. */
    section.addEventListener('keydown', function (e) {
      const thumb = e.target.closest ? e.target.closest('.wg-thumb') : null;
      if (!thumb || (e.key !== 'Enter' && e.key !== ' ')) return;
      e.preventDefault();
      openLightbox(thumb.dataset.lgImg, thumb.dataset.lgCap || '');
    });
  }
}

/* ---- Lightbox -----------------------------------------------------------
   Simple lightbox modal. Reuses the .lb CSS classes already defined in
   views.css. Closes on Escape, backdrop click, or close button. */

function openLightbox(imgUrl, caption) {
  if (!imgUrl) return;
  /* Remove any existing lightbox first. */
  removeLightbox();

  const overlay = document.createElement('div');
  overlay.className = 'lb';
  overlay.setAttribute('role', 'dialog');
  overlay.setAttribute('aria-modal', 'true');
  overlay.setAttribute('aria-label', 'Image preview');

  overlay.innerHTML =
    '<div class="lb__backdrop"></div>' +
    '<div class="lb__panel">' +
      '<div class="lb__media">' +
        '<img class="lb-media__img" src="' + esc(imgUrl) + '" alt="' + esc(caption) + '" />' +
      '</div>' +
      (caption ? '<p class="lb__cap">' + esc(caption) + '</p>' : '') +
      '<div class="lb__nav">' +
        '<button type="button" class="btn lb__close" aria-label="Close">Close</button>' +
      '</div>' +
    '</div>';

  document.body.appendChild(overlay);

  /* Close on backdrop click. */
  overlay.querySelector('.lb__backdrop').addEventListener('click', removeLightbox);
  overlay.querySelector('.lb__close').addEventListener('click', removeLightbox);

  /* Close on Escape. */
  const onKey = function (e) {
    if (e.key === 'Escape') {
      removeLightbox();
      document.removeEventListener('keydown', onKey);
    }
  };
  document.addEventListener('keydown', onKey);

  /* Focus the close button. */
  const closeBtn = overlay.querySelector('.lb__close');
  if (closeBtn && closeBtn.focus) closeBtn.focus();
}

function removeLightbox() {
  const existing = document.querySelector('.lb');
  if (existing && existing.remove) existing.remove();
}

/* Wire the lightbox click/keydown delegation for .wg-thumb elements
   inside the given section. Call this after replacing section.innerHTML so
   thumbnail lightboxes continue to work across route changes. */
export function wireGuideLightbox(section) {
  if (!section) return;
  section.addEventListener('click', function (e) {
    var thumb = e.target && e.target.closest ? e.target.closest('.wg-thumb') : null;
    if (!thumb) return;
    openLightbox(thumb.dataset.lgImg, thumb.dataset.lgCap || '');
  });
  section.addEventListener('keydown', function (e) {
    var thumb = e.target && e.target.closest ? e.target.closest('.wg-thumb') : null;
    if (!thumb || (e.key !== 'Enter' && e.key !== ' ')) return;
    e.preventDefault();
    openLightbox(thumb.dataset.lgImg, thumb.dataset.lgCap || '');
  });
}

/* ---- Public API -------------------------------------------------------- */

/* Fetch guide data for the given week id from weekly-guides.json.
   Returns a promise resolving to the guide object or null. */
export async function fetchGuide(weekId) {
  // 1) fetch (http / static host) — relative to the document base so it works
  //    in any subdirectory deployment (e.g. davego.org/fall2026/).
  if (typeof fetch === 'function' && typeof location !== 'undefined' && location.protocol !== 'file:') {
    try {
      const resp = await fetch('./data/weekly-guides.json', { cache: 'no-store' });
      if (resp.ok) {
        const all = await resp.json();
        return all[weekId] || null;
      }
    } catch { /* fall through to the bootstrap below */ }
  // 2) file:// / fetch failure — fall back to the injected bootstrap.
  const boot = (typeof window !== 'undefined' && window.__SENECA_DATA) || null;
  if (boot && Object.prototype.hasOwnProperty.call(boot, 'weekly-guides')) {
    return boot['weekly-guides'][weekId] || null;
  }
  return null;
}

export default { mountRail, fetchGuide, wireGuideLightbox };
