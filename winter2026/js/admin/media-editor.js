/* ==========================================================================
   Seneca 3D Integration - js/admin/media-editor.js
   The ONE reusable teacher-side Before/After media editor (Round 1, Phase 3).

   Emits EXACTLY the student contract (see core/media.js):
     media = { before: MediaItem[], after: MediaItem[] }
     MediaItem = { url, type, caption, thumb? }   (type REQUIRED: "image"|"video")

   Contract / design notes
   - Author-side validation mirrors core/media.js safeMediaUrl(): http:/https:
     only, and it rejects raw " < > ` and control characters. A rejected url is
     NOT stored (stored as '') and an inline error is surfaced.
   - type is auto-detected from the url extension (default "image") but always
     editable and ALWAYS emitted (the contract requires it).
   - renderMedia(descriptor, obj, writePath):
       * display values are read RELATIVE TO obj  ->  getAt(obj, descriptor.key)
         (works for a top-level record AND for a nested list item, where obj is
         the item itself and descriptor.key is e.g. "media"), so re-render pre-
         fills correctly regardless of nesting depth;
       * every data-m* write attribute uses `writePath`, the path RELATIVE TO THE
         TOP-LEVEL record, so all store mutation goes through ctx.getRecord() with
         a path that resolves from the root.
   - The DOM-free data helpers below are the single source of store mutation; the
     thin DOM wiring just calls them. This keeps the editor testable in Node and
     immune to the admin's persistent #view listener accumulation: we attach to a
     fresh per-render [data-media-root] container (never #view) with an idempotency
     guard, so repeated re-renders never stack handlers.
   - No circular imports: this module is self-contained (esc + path helpers are
     local, so it does NOT import admin-ui.js).
   ========================================================================== */

const VIDEO_EXT = /\.(mp4|webm|ogg|m4v|mov)$/i;

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

/* ---- Author-side validation (mirrors core/media.js) --------------------- */

// Returns the cleaned url, or '' when it is not a safe http(s) link.
export function safeUrl(url) {
  const s = String(url == null ? '' : url).trim();
  if (!/^https?:\/\//i.test(s)) return '';
  if (/[\"<>`]/.test(s)) return '';
  if (/[\u0000-\u001f\u007f]/.test(s)) return '';
  return s;
}

// Auto-detect type from the url extension; undetectable -> "image".
export function detectType(url) {
  const s = String(url == null ? '' : url).trim().split('?')[0].split('#')[0];
  if (VIDEO_EXT.test(s)) return 'video';
  return 'image';
}

export function blankItem() { return { url: '', type: 'image', caption: '' }; }

/* ---- Local path helpers (avoid a circular import with admin-ui.js) ------ */

export function getAt(obj, path) {
  const parts = String(path).split('.');
  let cur = obj;
  for (let i = 0; i < parts.length; i++) { if (cur == null) return undefined; cur = cur[parts[i]]; }
  return cur;
}

export function setAt(obj, path, value) {
  const parts = String(path).split('.');
  let cur = obj;
  for (let i = 0; i < parts.length - 1; i++) {
    const key = parts[i];
    const isArr = /^\d+$/.test(parts[i + 1]);
    if (cur[key] == null || typeof cur[key] !== 'object') cur[key] = isArr ? [] : {};
    cur = cur[key];
  }
  cur[parts[parts.length - 1]] = value;
}

/* ---- DOM-free data ops (single source of store mutation; rec = top-level) */

function ensureList(rec, listPath) {
  const a = getAt(rec, listPath);
  const arr = Array.isArray(a) ? a : [];
  setAt(rec, listPath, arr);
  return arr;
}

export function addItem(rec, listPath) {
  const arr = ensureList(rec, listPath);
  const it = blankItem();
  arr.push(it);
  return it;
}

export function removeItem(rec, listPath, idx) {
  const arr = ensureList(rec, listPath);
  arr.splice(Number(idx), 1);
}

export function setField(rec, itemPath, field, value) {
  setAt(rec, itemPath + '.' + field, (value == null) ? '' : value);
}

// url: validate, store clean or '' when rejected, return { valid, stored }.
export function applyUrl(rec, itemPath, raw) {
  const clean = safeUrl(raw);
  const valid = (clean !== '');
  setAt(rec, itemPath + '.url', clean);
  return { valid: valid, stored: clean };
}

// type: normalise to image|video (always emitted).
export function applyType(rec, itemPath, t) {
  const type = (t === 'video') ? 'video' : 'image';
  setAt(rec, itemPath + '.type', type);
  return type;
}

/* ---- Render (pure string builder; reads relative to obj) ---------------- */

function itemHtml(base, which, idx, writePath) {
  const arr = (base && Array.isArray(base[which])) ? base[which] : [];
  const it = arr[idx] || {};
  const url = (it.url == null ? '' : it.url);
  const type = (it.type === 'video') ? 'video' : 'image';
  const caption = (it.caption == null ? '' : it.caption);
  const thumb = (it.thumb == null ? '' : it.thumb);
  const itemPath = writePath + '.' + which + '.' + idx;
  return (
    '<li class="alist__item media__item" data-midx="' + idx + '">' +
      '<div class="alist__head">' +
        '<span class="alist__title">item ' + (idx + 1) + '</span>' +
        '<button class="alist__rm" type="button" data-mrm="' + esc(writePath + '.' + which) + '" data-idx="' + idx + '" aria-label="Remove item ' + (idx + 1) + '">Remove</button>' +
      '</div>' +
      '<div class="alist__body media__grid">' +
        '<label class="media__field"><span>URL</span>' +
          '<input class="input" type="text" data-mfield="url" data-mitem="' + esc(itemPath) + '" value="' + esc(url) + '" placeholder="https://... (image or video)"></label>' +
        '<label class="media__field media__field--type"><span>Type</span>' +
          '<select class="input input--select" data-mfield="type" data-mitem="' + esc(itemPath) + '">' +
            '<option value="image"' + (type === 'image' ? ' selected' : '') + '>image</option>' +
            '<option value="video"' + (type === 'video' ? ' selected' : '') + '>video</option>' +
          '</select></label>' +
        '<label class="media__field"><span>Caption</span>' +
          '<input class="input" type="text" data-mfield="caption" data-mitem="' + esc(itemPath) + '" value="' + esc(caption) + '" placeholder="optional caption"></label>' +
        '<label class="media__field"><span>Thumb (optional)</span>' +
          '<input class="input" type="text" data-mfield="thumb" data-mitem="' + esc(itemPath) + '" value="' + esc(thumb) + '" placeholder="poster / preview image"></label>' +
        '<div class="field__err media__err" data-merr="' + esc(itemPath) + '"></div>' +
      '</div>' +
    '</li>'
  );
}

function panelHtml(base, which, writePath) {
  const listPath = writePath + '.' + which;
  const arr = (base && Array.isArray(base[which])) ? base[which] : [];
  let lis = '';
  for (let i = 0; i < arr.length; i++) lis += itemHtml(base, which, i, writePath);
  const title = (which === 'before') ? 'Before' : 'After';
  return (
    '<div class="media__panel media__panel--' + which + '">' +
      '<div class="field__labelrow">' +
        '<span class="field__label">' + title + '</span>' +
        '<button class="alist__add" type="button" data-madd="' + esc(listPath) + '">+ add ' + (which === 'before' ? 'before' : 'after') + '</button>' +
      '</div>' +
      '<ol class="alist">' + (lis || '<li class="alist__empty">None yet.</li>') + '</ol>' +
    '</div>'
  );
}

export function renderMedia(descriptor, obj, writePath) {
  const relKey = (descriptor && descriptor.key) ? descriptor.key : 'media';
  const base = getAt(obj, relKey); // the { before: [], after: [] } object (or undefined)
  const label = (descriptor && descriptor.label) ? descriptor.label : 'Before / After media';
  return (
    '<div class="field field--media">' +
      '<div class="field__labelrow"><label class="field__label">' + esc(label) + '</label></div>' +
      '<div class="media" data-media-root data-mbase="' + esc(writePath) + '">' +
        panelHtml(base, 'before', writePath) +
        panelHtml(base, 'after', writePath) +
      '</div>' +
      '<div class="field__hint">type is auto-detected from the url, always editable, always saved. use http/https links.</div>' +
    '</div>'
  );
}

/* ---- Thin DOM wiring (fresh container per render -> no accumulation) ----- */

function findErr(el) {
  const root = el.closest ? el.closest('[data-media-root]') : null;
  if (!root || !root.querySelector) return null;
  const key = el.getAttribute ? el.getAttribute('data-mitem') : '';
  return root.querySelector('[data-merr="' + key + '"]');
}

function showErr(el, msg) {
  const err = findErr(el);
  if (err) { err.textContent = msg || ''; err.classList.toggle('is-on', !!msg); }
}

function onField(e, ctx) {
  const el = e.target;
  if (!el || !el.getAttribute) return;
  const field = el.getAttribute('data-mfield');
  const itemPath = el.getAttribute('data-mitem');
  if (!field || !itemPath) return;
  const rec = ctx.getRecord();
  if (field === 'url') {
    const res = applyUrl(rec, itemPath, el.value);
    applyType(rec, itemPath, detectType(el.value));
    showErr(el, res.valid ? '' : 'use an http/https image or video link');
  } else if (field === 'type') {
    applyType(rec, itemPath, el.value);
    showErr(el, '');
  } else if (field === 'caption') {
    setField(rec, itemPath, 'caption', el.value);
  } else if (field === 'thumb') {
    setField(rec, itemPath, 'thumb', safeUrl(el.value));
  } else {
    return;
  }
  if (ctx.onChange) ctx.onChange();
}

function onStructural(e, ctx) {
  const t = e.target;
  if (!t || !t.closest) return;
  const add = t.closest('[data-madd]');
  if (add) {
    e.preventDefault();
    addItem(ctx.getRecord(), add.getAttribute('data-madd'));
    if (ctx.reRender) ctx.reRender();
    if (ctx.onChange) ctx.onChange();
    return;
  }
  const rm = t.closest('[data-mrm]');
  if (rm) {
    e.preventDefault();
    removeItem(ctx.getRecord(), rm.getAttribute('data-mrm'), rm.getAttribute('data-idx'));
    if (ctx.reRender) ctx.reRender();
    if (ctx.onChange) ctx.onChange();
  }
}

export function wire(root, ctx) {
  if (!root || !root.querySelectorAll) return;
  const nodes = root.querySelectorAll('[data-media-root]');
  const arr = Array.prototype.slice.call(nodes);
  for (let i = 0; i < arr.length; i++) {
    const c = arr[i];
    if (c.__mediaWired) continue; // idempotent guard (fresh node per render anyway)
    c.__mediaWired = true;
    c.addEventListener('input', function (ev) { onField(ev, ctx); });
    c.addEventListener('change', function (ev) {
      const tg = ev.target;
      if (tg && tg.getAttribute && tg.getAttribute('data-mfield') === 'type') onField(ev, ctx);
    });
    c.addEventListener('click', function (ev) { onStructural(ev, ctx); });
  }
}

const Media = {
  safeUrl: safeUrl,
  detectType: detectType,
  blankItem: blankItem,
  getAt: getAt,
  setAt: setAt,
  addItem: addItem,
  removeItem: removeItem,
  setField: setField,
  applyUrl: applyUrl,
  applyType: applyType,
  renderMedia: renderMedia,
  wire: wire,
};

export default Media;
export { Media };
