/* ==========================================================================
   Seneca 3D Integration - core/rail-lightbox.js
   Thin wrapper that reuses media.js openLightbox() for sidebar rail rows.

   Responsibilities:
     - Normalize an `image` field (string or array of strings) into a list
       compatible with openLightbox().
     - openFromRail(items, index, triggerEl) -> controller | null
     - Provide a normalizeImageField() helper for the 3 sidebar collections.
     - Keyboard-accessible (Escape to close, arrow keys to navigate).
     - Respects prefers-reduced-motion (handled by media.js / lb CSS).
     - a11y: aria-*, role="dialog", focus trap, click-outside-to-close.

   API (exported):
     normalizeImageField(value)   -> array of { url, caption } | []
     openFromRail(items, index, triggerEl)
     hasImages(value)             -> boolean

   Reuses media.js entirely. Does NOT build a new lightbox.
   ========================================================================== */

import Markdown from './markdown.js';
import { openLightbox, safeMediaUrl } from './media.js';

/* Convert an `image` field value into an openLightbox-compatible list.
   Accepts:
     - undefined / null -> []
     - a single string  -> [{ url, caption: '' }]
     - an array of strings -> [{ url, caption: '' }, ...]
     - an array of objects with `url` (and optional `caption`) -> as-is
   Returns empty array when nothing is present. */
export function normalizeImageField(value) {
  if (value == null) return [];

  /* Single string URL */
  if (typeof value === 'string') {
    const u = safeMediaUrl(value);
    return u ? [{ url: u, caption: '' }] : [];
  }

  /* Array of strings or objects */
  if (Array.isArray(value)) {
    const out = [];
    for (let i = 0; i < value.length; i++) {
      const v = value[i];
      if (typeof v === 'string') {
        const u = safeMediaUrl(v);
        if (u) out.push({ url: u, caption: '' });
      } else if (v && typeof v === 'object') {
        const u = safeMediaUrl(v.url);
        if (u) out.push({ url: u, caption: String(v.caption || ''), type: v.type || 'image' });
      }
    }
    return out;
  }

  return [];
}

/* True when the value carries at least one valid image URL. */
export function hasImages(value) {
  return normalizeImageField(value).length > 0;
}

/* Render the inline lightbox trigger for a rail row that has image(s).
   Returns '' when the row carries no usable image, so image-less rows are
   byte-identical to before (no trigger, no layout shift). The full normalized
   image list is stashed (escaped) in data-lb so the delegated handler can
   re-open it without re-reading the store. Kept as a <span role=button> so it
   nests safely inside a <button> (shortcuts) or a <label> (checklist) row.
   The delegated handler (wireRailLightbox) is what actually opens the viewer. */
export function triggerHtml(item) {
  const items = normalizeImageField(item && item.image);
  if (!items.length) return '';
  const esc = Markdown.escapeHtml;
  const label = (item && item.text) ? String(item.text) : 'image';
  // items[i].url is already safeMediaUrl-sanitized by normalizeImageField, so it
  // is safe to place in a src attribute (re-escaped for the attribute context).
  const src = items[0] && items[0].url;
  const thumb = src
    ? '<img class="rail-lb-thumb" src="' + esc(src) + '" alt="" />'
    : '<span class="rail-lb-thumb" aria-hidden="true">&#9635;</span>';
  return (
    '<span class="rail-lb-trigger" role="button" tabindex="0" aria-label="' + esc(label) + '" ' +
      'data-lb="' + esc(JSON.stringify(items)) + '" data-idx="0">' + thumb + '</span>'
  );
}

/* One-time, document-level CAPTURE-phase click + keydown handler. Capture runs
   before the section's bubble-phase onRow, so stopPropagation here prevents a
   shortcut jump / a checklist toggle from also firing when the trigger is used.
   Idempotent: safe to call on every boot. */
let wired = false;
export function wireRailLightbox() {
  if (wired || typeof document === 'undefined' || !document.addEventListener) return;
  wired = true;
  function open(e, el) {
    let items = [];
    try { items = JSON.parse(el.getAttribute('data-lb') || '[]'); } catch (_) { items = []; }
    if (!Array.isArray(items) || !items.length) return;
    const idx = parseInt(el.getAttribute('data-idx') || '0', 10) || 0;
    openFromRail(items, idx, el);
  }
  document.addEventListener('click', function (e) {
    const el = e.target && e.target.closest ? e.target.closest('.rail-lb-trigger') : null;
    if (!el) return;
    e.preventDefault();
    e.stopPropagation();
    open(e, el);
  }, true);
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const el = e.target && e.target.closest ? e.target.closest('.rail-lb-trigger') : null;
    if (!el) return;
    e.preventDefault();
    e.stopPropagation();
    open(e, el);
  }, true);
}

/* Open the lightbox from a rail row.
   items  = array of { url, caption?, type? } (already normalized)
   index  = starting image index
   triggerEl = the button/element that triggered the open (for focus restore)
   Returns the lightbox controller, or null when nothing to show. */
export function openFromRail(items, index, triggerEl) {
  if (!Array.isArray(items) || !items.length) return null;
  const idx = Math.max(0, Math.min(parseInt(index, 10) || 0, items.length - 1));
  return openLightbox(items, idx, { restoreEl: triggerEl });
}

const RailLightbox = {
  normalizeImageField: normalizeImageField,
  openFromRail: openFromRail,
  hasImages: hasImages,
  triggerHtml: triggerHtml,
  wireRailLightbox: wireRailLightbox,
};

export default RailLightbox;
export { RailLightbox };

if (typeof window !== 'undefined') window.RailLightbox = RailLightbox;
