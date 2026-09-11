/* ==========================================================================
   Seneca 3D Integration - core/media.js
   The ONE reusable student-side media subsystem (Round 1, Phase 2a/2b).

   Responsibilities:
     - Render a `media` block ({before:[],after:[]}) as clickable thumbnails.
     - Open a ZERO-dep, keyboard + focus-trapped, XSS-safe lightbox.
     - Sanitize media URLs (http:/https: only) before they touch any attribute.

   SAFETY MODEL (escape-first, mirrors markdown.js):
     - safeMediaUrl() allows ONLY http:/https:. Everything else (javascript:, data:,
       vbscript:, blank, malformed) is dropped -> a placeholder tile is shown instead
       of a broken/"javascript:" attribute.
     - Captions render through Markdown.render (escaped up-front), never raw innerHTML.
     - Every URL is re-sanitized at the point it is written to src/href/thumbnail.

   API (exported):
     safeMediaUrl(url)               -> string ('' when rejected)
     isVideoFile(url)                -> boolean
     mediaList(items, gid, startIdx) -> html string ('' when empty)
     mediaBlock(media, gid)          -> { before: html, after: html }
     openLightbox(items, index, opts)-> controller | null
     attach(el) / detach()           -> global click delegate (idempotent)

   The lightbox core (openLightbox) is DOM-injectable (opts.dom) so the work/ harness
   can drive prev/next/keyboard/focus-trap/restore in Node without a browser.
   ========================================================================== */

import Markdown from './markdown.js';

const VIDEO_EXT = /\.(mp4|webm|ogg|m4v|mov)$/i;

let seq = 0; // monotonically increasing group id source

// --- URL sanitization -------------------------------------------------------
// Allow ONLY http:/https:. Anything else is dropped (returns '').
export function safeMediaUrl(url) {
  const s = String(url == null ? '' : url).trim();
  // Protocol allow-list (primary gate): http:/https: only.
  if (!/^https?:\/\//i.test(s)) return '';
  // Defense-in-depth (2b): a raw double-quote, angle bracket, backtick, or
  // control character can break out of an HTML attribute / script context even
  // though the scheme is http(s). Reject anything that carries one so a
  // malicious thumb/url cannot inject markup. (escapeHtml still applied at the
  // write site as a second line of defense.)
  if (/[\"<>`]/.test(s)) return '';
  if (/[\u0000-\u001f\u007f]/.test(s)) return '';
  return s;
}

// A "direct video file" we can embed with <video controls>.
export function isVideoFile(url) {
  const s = safeMediaUrl(url);
  if (!s) return false;
  return VIDEO_EXT.test(s.split('?')[0].split('#')[0]);
}

// --- Small DOM helpers (work with a real document OR the harness shim) -------
function clearNode(node) {
  while (node && node.childNodes && node.childNodes.length) {
    node.removeChild(node.childNodes[0]);
  }
}

function captionText(item) {
  return String((item && item.caption) || '').trim();
}

// --- Thumbnail rendering ----------------------------------------------------
// One thumbnail button. Carries its data on data-* attrs so the browser click
// delegate can reconstruct the item set without needing the original objects.
function thumbButton(item, gid, idx) {
  const type = item && item.type === 'video' ? 'video' : 'image';
  const caption = String((item && item.caption) || '');
  const safeUrl = safeMediaUrl(item && item.url);
  const safeThumb = safeMediaUrl(item && item.thumb);
  const imgSrc = safeThumb || safeUrl;
  const label = (type === 'video' ? 'Play video: ' : 'Open image: ') + (caption || 'media ' + (idx + 1));

  let frame;
  if (imgSrc) {
    // escapeHtml on the src value: the allow-list keeps the scheme, but a quote
    // in the URL must not break out of the attribute (attribute-injection XSS).
    frame = '<img class="media-thumb__img" src="' + Markdown.escapeHtml(imgSrc) + '" alt="' + Markdown.escapeHtml(caption) + '" loading="lazy">';
  } else {
    const glyph = type === 'video' ? 'Play' : 'Image';
    frame = '<span class="media-thumb__ph" aria-hidden="true"><span class="media-thumb__glyph">' + glyph + '</span></span>';
  }

  return (
    '<button type="button" class="media-thumb" ' +
      'data-mg="' + gid + '"' +
      ' data-mi="' + idx + '"' +
      ' data-mt="' + type + '"' +
      ' data-mu="' + Markdown.escapeHtml(safeUrl) + '"' +
      ' data-mh="' + Markdown.escapeHtml(safeThumb) + '"' +
      ' data-mc="' + Markdown.escapeHtml(caption) + '"' +
      ' aria-label="' + Markdown.escapeHtml(label) + '">' +
      '<span class="media-thumb__frame">' + frame + '</span>' +
      '<span class="media-thumb__cap">' + (caption ? Markdown.escapeHtml(caption) : 'No caption') + '</span>' +
    '</button>'
  );
}

export function mediaList(items, gid, startIdx) {
  if (!Array.isArray(items) || !items.length) return '';
  const base = startIdx || 0;
  const buttons = items.map(function (it, i) { return thumbButton(it, gid, base + i); }).join('');
  return '<div class="media-grid" role="group" aria-label="Media">' + buttons + '</div>';
}

// Convenience for surfaces that render the whole block in one place (2b).
export function mediaBlock(media, gid) {
  const before = (media && media.before) || [];
  const after = (media && media.after) || [];
  const id = gid || ('g' + (++seq));
  return {
    before: mediaList(before, id, 0),
    after: mediaList(after, id, before.length),
  };
}

// --- Lightbox media node (image / video-file / watch-link / placeholder) ----- 
function renderMediaNode(item, dom) {
  const e = function (tag) { return dom.createElement(tag); };
  const url = safeMediaUrl(item && item.url);
  const caption = captionText(item);
  const isVideo = !!(item && item.type === 'video');

  if (isVideo) {
    if (url && isVideoFile(url)) {
      const v = e('video'); v.className = 'lb-media__video';
      v.setAttribute('controls', ''); v.setAttribute('src', url);
      return v;
    }
    if (url) {
      const a = e('a'); a.className = 'lb-media__watch';
      a.setAttribute('href', url); a.setAttribute('target', '_blank');
      a.setAttribute('rel', 'noopener noreferrer'); a.textContent = 'Watch video';
      return a;
    }
    const d = e('div'); d.className = 'lb-placeholder'; d.textContent = 'Video unavailable';
    return d;
  }

  if (url) {
    const img = e('img'); img.className = 'lb-media__img';
    img.setAttribute('src', url); img.setAttribute('alt', caption);
    return img;
  }
  const p = e('div'); p.className = 'lb-placeholder'; p.textContent = 'Image unavailable';
  return p;
}

// --- Lightbox construction (programmatic DOM -> shim-testable) --------------
function buildLightbox(dom) {
  const e = function (tag) { return dom.createElement(tag); };
  const root = e('div'); root.className = 'lb';
  root.setAttribute('role', 'dialog'); root.setAttribute('aria-modal', 'true');
  root.setAttribute('aria-label', 'Media viewer'); root.tabIndex = -1;

  const backdrop = e('div'); backdrop.className = 'lb__backdrop';
  backdrop.setAttribute('data-lb-close', '');
  root.appendChild(backdrop);

  const panel = e('figure'); panel.className = 'lb__panel';
  const mediaArea = e('div'); mediaArea.className = 'lb__media';
  panel.appendChild(mediaArea);
  const cap = e('figcaption'); cap.className = 'lb__cap md';
  panel.appendChild(cap);

  const nav = e('div'); nav.className = 'lb__nav';
  const prevBtn = e('button'); prevBtn.type = 'button'; prevBtn.className = 'btn lb__prev';
  prevBtn.setAttribute('aria-label', 'Previous image'); prevBtn.textContent = '\u2190 Previous';
  const count = e('span'); count.className = 'lb__count';
  const nextBtn = e('button'); nextBtn.type = 'button'; nextBtn.className = 'btn lb__next';
  nextBtn.setAttribute('aria-label', 'Next image'); nextBtn.textContent = 'Next \u2192';
  nav.appendChild(prevBtn); nav.appendChild(count); nav.appendChild(nextBtn);
  panel.appendChild(nav);

  const closeBtn = e('button'); closeBtn.type = 'button'; closeBtn.className = 'btn lb__close';
  closeBtn.setAttribute('aria-label', 'Close viewer'); closeBtn.textContent = 'Close';
  panel.appendChild(closeBtn);

  const live = e('div'); live.className = 'lb__sr';
  live.setAttribute('aria-live', 'polite'); live.setAttribute('aria-atomic', 'true');

  root.appendChild(panel);
  root.appendChild(live);

  return { root: root, backdrop: backdrop, mediaArea: mediaArea, cap: cap, prevBtn: prevBtn, nextBtn: nextBtn, closeBtn: closeBtn, count: count, live: live };
}

// --- Lightbox controller ----------------------------------------------------
export function openLightbox(items, index, opts) {
  opts = opts || {};
  const dom = opts.dom || (typeof document !== 'undefined' ? document : null);
  if (!dom || !dom.createElement) return null;
  if (!Array.isArray(items) || !items.length) return null;
  index = Math.max(0, Math.min(parseInt(index, 10) || 0, items.length - 1));
  const restoreEl = opts.restoreEl || null;
  const list = items.slice();

  const P = buildLightbox(dom);
  const focusables = [P.closeBtn, P.prevBtn, P.nextBtn];
  let current = index;
  let open = true;
  let onPrev = function () { prev(); };
  let onNext = function () { next(); };

  function renderCurrent() {
    const it = list[current];
    clearNode(P.mediaArea);
    P.mediaArea.appendChild(renderMediaNode(it, dom));
    const capStr = captionText(it);
    P.cap.innerHTML = capStr ? Markdown.render(capStr) : '';
    P.count.textContent = (current + 1) + ' / ' + list.length;
    P.live.textContent = capStr
      ? (capStr + '  (item ' + (current + 1) + ' of ' + list.length + ')')
      : ('Item ' + (current + 1) + ' of ' + list.length);
  }

  function next() { if (!open) return; current = (current + 1) % list.length; renderCurrent(); focusFirst(); }
  function prev() { if (!open) return; current = (current - 1 + list.length) % list.length; renderCurrent(); focusFirst(); }

  function focusFirst() { if (P.closeBtn.focus) P.closeBtn.focus(); }

  function trapTab(evt) {
    if (!focusables.length) { if (evt && evt.preventDefault) evt.preventDefault(); return; }
    const active = dom.activeElement;
    let idx = -1;
    for (let i = 0; i < focusables.length; i++) { if (focusables[i] === active) { idx = i; break; } }
    let target;
    if (evt && evt.shiftKey) target = idx <= 0 ? focusables[focusables.length - 1] : focusables[idx - 1];
    else target = (idx === -1) ? focusables[0] : focusables[(idx + 1) % focusables.length];
    if (evt && evt.preventDefault) evt.preventDefault();
    if (target.focus) target.focus();
  }

  function onKey(evt) {
    const k = evt && evt.key;
    if (k === 'Escape') { close(); return; }
    if (k === 'ArrowRight') { next(); return; }
    if (k === 'ArrowLeft') { prev(); return; }
    if (k === 'Tab') trapTab(evt);
  }

  function onBackdrop(evt) {
    const t = evt && evt.target;
    if (t && t.getAttribute && t.getAttribute('data-lb-close') != null) { close(); return; }
    if (P.backdrop.contains && t && P.backdrop.contains(t)) close();
  }

  P.closeBtn.addEventListener('click', close);
  P.prevBtn.addEventListener('click', onPrev);
  P.nextBtn.addEventListener('click', onNext);
  P.backdrop.addEventListener('click', onBackdrop);

  function close() {
    if (!open) return;
    open = false;
    if (dom.removeEventListener) dom.removeEventListener('keydown', onKey);
    P.closeBtn.removeEventListener('click', close);
    P.prevBtn.removeEventListener('click', onPrev);
    P.nextBtn.removeEventListener('click', onNext);
    P.backdrop.removeEventListener('click', onBackdrop);
    if (P.root.parentNode) P.root.parentNode.removeChild(P.root);
    if (restoreEl && restoreEl.focus) restoreEl.focus();
  }

  // commit
  dom.body.appendChild(P.root);
  dom.addEventListener('keydown', onKey);
  renderCurrent();
  focusFirst();

  const state = {
    items: list,
    root: P.root,
    get index() { return current; },
    get open() { return open; },
  };

  return {
    state: state,
    close: close,
    next: next,
    prev: prev,
    onKey: onKey,
    onBackdrop: onBackdrop,
    dom: dom,
    root: P.root,
    backdrop: P.backdrop,
    mediaArea: P.mediaArea,
    cap: P.cap,
    prevBtn: P.prevBtn,
    nextBtn: P.nextBtn,
    closeBtn: P.closeBtn,
    count: P.count,
    live: P.live,
  };
}

// --- Browser click delegate (idempotent) ------------------------------------
let delegateAttached = false;

function itemFromButton(b) {
  const g = function (k) { return (b.getAttribute && b.getAttribute(k)) || ''; };
  return {
    url: g('data-mu'),
    type: g('data-mt') || 'image',
    caption: g('data-mc'),
    thumb: g('data-mh') || '',
  };
}

function handleClick(evt) {
  const t = evt && evt.target;
  if (!t) return;
  const btn = (t.closest && t.closest('[data-mg]')) || (t.getAttribute && t.getAttribute('data-mg') != null ? t : null);
  if (!btn || !btn.getAttribute) return;
  const gid = btn.getAttribute('data-mg');
  const doc = typeof document !== 'undefined' ? document : null;
  if (!doc || !doc.querySelectorAll) return;
  let group = doc.querySelectorAll('[data-mg="' + gid + '"]');
  group = Array.prototype.slice.call(group);
  if (!group.length) return;
  group.sort(function (a, b) { return (parseInt(a.getAttribute('data-mi'), 10) || 0) - (parseInt(b.getAttribute('data-mi'), 10) || 0); });
  const items = group.map(itemFromButton);
  const startIdx = parseInt(btn.getAttribute('data-mi'), 10) || 0;
  openLightbox(items, startIdx, { restoreEl: btn });
}

export function attach() {
  const doc = typeof document !== 'undefined' ? document : null;
  if (!doc || delegateAttached) return;
  delegateAttached = true;
  doc.addEventListener('click', handleClick);
}

export function detach() {
  const doc = typeof document !== 'undefined' ? document : null;
  if (!doc || !delegateAttached) return;
  doc.removeEventListener('click', handleClick);
  delegateAttached = false;
}

const Media = {
  safeMediaUrl: safeMediaUrl,
  isVideoFile: isVideoFile,
  mediaList: mediaList,
  mediaBlock: mediaBlock,
  openLightbox: openLightbox,
  attach: attach,
  detach: detach,
};
export default Media;
export { Media };

if (typeof window !== 'undefined') window.Media = Media;
