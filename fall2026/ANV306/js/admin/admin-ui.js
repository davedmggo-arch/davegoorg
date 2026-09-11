/* ==========================================================================
   Seneca 3D Integration - js/admin/admin-ui.js
    Schema-driven form engine + small UI primitives for the teacher admin.
    An editor is a `schema` (field descriptors) applied to a record. Types:
    text, number, date, bool, markdown, csv, select, list, media. Dotted keys make
    nested objects first-class; admin-data.js is the source of truth, the DOM a
    projection. wireForm() attaches delegated listeners (input / structural /
    savebar / import / export). Public API: the export default object below.
     ========================================================================== */
import Markdown from '../core/markdown.js';
import AdminData from './admin-data.js';
import Media from './media-editor.js';
import Toolbar from './toolbar.js';
import { wireOnce } from './wire.js'; export { wireOnce };
const esc = Markdown.escapeHtml; // shared escape (markdown.js); Media has its own
/* ---- Path helpers (dotted keys, e.g. "projects.2.delivery.week") -------- */
export function getAtPath(obj, path) {
  const parts = String(path).split('.');
  let cur = obj;
  for (let i = 0; i < parts.length; i++) {
    if (cur == null) return undefined;
    cur = cur[parts[i]];
  }
  return cur;
}
export function setAtPath(obj, path, value) {
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
export function parseValue(el, type) {
  if (el.type === 'checkbox') return el.checked;
  if (type === 'number') { const v = String(el.value).trim(); return v === '' ? null : Number(v); }
  if (type === 'csv') {
    const itemtype = (el.dataset && el.dataset.itemtype) || 'text';
    return String(el.value).split(',').map(function (s) { return s.trim(); }).filter(Boolean)
      .map(function (s) { return itemtype === 'number' ? Number(s) : s; });
  }
  return el.value;
}
function fieldId(path) { return 'f-' + String(path).replace(/[^a-zA-Z0-9]+/g, '-'); }
/* ---- Field rendering ------------------------------------------------------ */
function control(descriptor, value, path) {
  const id = fieldId(path);
  const type = descriptor.type || 'text';
  const val = (value == null) ? '' : value;
  if (type === 'markdown') {
    const preview = (typeof Markdown !== 'undefined') ? Markdown.render(String(val)) : '';
    return (
      Toolbar.toolbarHtml() +
      '<textarea class="md-src" id="' + id + '" data-path="' + esc(path) + '" data-type="markdown" rows="6" spellcheck="false">' +
      esc(String(val)) + '</textarea>' +
      '<div class="md md--preview" aria-hidden="true">' + preview + '</div>'
    );
  }

  if (type === 'csv') {
    const joined = Array.isArray(value) ? value.join(', ') : String(val);
    const itemtype = descriptor.itemType || 'text';
    return '<input class="input" id="' + id + '" type="text" data-path="' + esc(path) + '" data-type="csv" data-itemtype="' + esc(itemtype) + '" ' +
      'value="' + esc(joined) + '" placeholder="comma, separated, values">';
  }

  if (type === 'bool') {
    return (
      '<label class="switch">' +
        '<input class="input" id="' + id + '" type="checkbox" data-path="' + esc(path) + '" data-type="bool"' + (value ? ' checked' : '') + '>' +
        '<span class="switch__track"><span class="switch__dot"></span></span>' +
        '<span class="switch__label">' + esc(value ? 'yes' : 'no') + '</span>' +
      '</label>'
    );
  }

  if (type === 'select') {
    const opts = descriptor.options || [];
    const chosen = String(val);
    const o = opts.map(function (o) {
      return '<option value="' + esc(o.value) + '"' + (String(o.value) === chosen ? ' selected' : '') + '>' + esc(o.label) + '</option>';
    }).join('');
    return '<select class="input input--select" id="' + id + '" data-path="' + esc(path) + '" data-type="select">' + o + '</select>';
  }

  const inputType = (type === 'number') ? 'number' : (type === 'date') ? 'date' : 'text';
  return '<input class="input" id="' + id + '" type="' + inputType + '" data-path="' + esc(path) + '" data-type="' + esc(type) + '" ' +
    'value="' + esc(String(val)) + '"' + (descriptor.placeholder ? ' placeholder="' + esc(descriptor.placeholder) + '"' : '') + '>'; }

export function renderList(descriptor, value, ctx, basePath) {
  const path = basePath ? basePath + '.' + descriptor.key : descriptor.key;
  const list = Array.isArray(value) ? value : [];
  const isObj = descriptor.item && descriptor.item.length > 0;

  let items = '';
  for (let i = 0; i < list.length; i++) {
    const head = isObj
      ? (list[i] && (list[i].name || list[i].title || list[i].id)) ? esc(String(list[i].name || list[i].title || list[i].id)) : ('item ' + (i + 1))
      : esc(String(list[i]));
    let body = '';
    if (isObj) {
      body = renderForm(descriptor.item, list[i], ctx, path + '.' + i);
    } else {
      // control() already sets data-path (path.i) and data-type from the scalar type.
      body = control({ type: descriptor.scalar || 'text' }, list[i], path + '.' + i);
    }
    items += (
      '<li class="alist__item' + (isObj ? ' alist__item--obj' : '') + '" data-idx="' + i + '">' +
        '<div class="alist__head">' +
          '<span class="alist__title">' + head + '</span>' +
          '<button class="alist__rm" type="button" data-rm="' + esc(path) + '" data-idx="' + i + '" aria-label="Remove item ' + (i + 1) + '">Remove</button>' +
        '</div>' +
        '<div class="alist__body">' + body + '</div>' +
      '</li>'
    );
  }

  const addLabel = descriptor.addLabel || ('Add ' + (descriptor.label || 'item').replace(/[\s]+/g, ' ').toLowerCase());
  return (
    '<div class="field field--list">' +
      '<div class="field__labelrow"><label class="field__label">' + esc(descriptor.label || 'List') + '</label>' +
      '<button class="alist__add" type="button" data-add="' + esc(path) + '" data-blank="1">+ ' + esc(addLabel) + '</button></div>' +
      '<ol class="alist">' + (items || '<li class="alist__empty">None yet.</li>') + '</ol>' +
    '</div>'
  );
}

export function renderField(descriptor, obj, ctx, basePath) {
  const path = basePath ? basePath + '.' + descriptor.key : descriptor.key;
  const label = descriptor.label || descriptor.key;

  // Value read relative to obj (top record or a nested list item); data-path stays root-relative for writes.
  const value = getAtPath(obj, descriptor.key);

  if (descriptor.type === 'list') {
    return renderList(descriptor, value, ctx, basePath);
  }

  if (descriptor.type === 'media') {
    return Media.renderMedia(descriptor, obj, path);
  }

  const type = descriptor.type || 'text';
  const hint = descriptor.hint ? '<div class="field__hint">' + esc(descriptor.hint) + '</div>' : '';
  return (
    '<div class="field field--' + esc(type) + '">' +
      '<label class="field__label" for="' + fieldId(path) + '">' + esc(label) + '</label>' +
      '<div class="field__control">' + control(descriptor, value, path) + '</div>' +
      hint +
    '</div>'
  );
}

export function renderForm(schema, obj, ctx, basePath) {
  let html = '';
  for (let i = 0; i < schema.length; i++) {
    html += renderField(schema[i], obj, ctx, basePath);
  }
  return html;
}

/* ---- SaveBar ------------------------------------------------------------- */
export function saveBar(name, backHref, backLabel) {
  const online = AdminData.isServerOnline();
  return (
    '<div class="savebar">' +
      '<div class="savebar__actions">' +
        '<button class="btn btn--primary" type="button" data-save="' + esc(name) + '"' + (online ? '' : ' disabled') + '>Save to disk</button>' +
        '<button class="btn btn--ghost" type="button" data-export="' + esc(name) + '">Export JSON</button>' +
        '<button class="btn btn--ghost" type="button" data-reset="' + esc(name) + '">Revert</button>' +
      '</div>' +
      '<div class="savebar__state">' +
        (online
          ? ''
          : '<span class="chip chip--warn">offline &mdash; save disabled, use Export</span>') +
        '<a class="savebar__back" href="' + esc(backHref || '#/admin') + '">\u2190 ' + esc(backLabel || 'Back to dashboard') + '</a>' +
      '</div>' +
    '</div>'
  );
}

/* ---- Toast --------------------------------------------------------------- */

export function toast(message, kind) {
  kind = kind || 'info';
  let stack = document.getElementById('admin-toast-stack');
  if (!stack) {
    stack = document.createElement('div');
    stack.id = 'admin-toast-stack';
    stack.className = 'toast-stack';
    document.body.appendChild(stack);
  }
  const el = document.createElement('div');
  el.className = 'toast toast--' + esc(kind);
  el.setAttribute('role', 'status');
  el.textContent = message;
  stack.appendChild(el);
  setTimeout(function () { el.classList.add('toast--out'); }, 3000);
  setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 3400);
}

/* ---- Confirm dialog (Promise-based; confirm-gates destructive actions) ---- */

export function confirmDialog(message, opts) {
  opts = opts || {};
  return new Promise(function (resolve) {
    const overlay = document.createElement('div');
    overlay.className = 'dialog';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.innerHTML =
      '<div class="dialog__panel">' +
        '<h2 class="dialog__title">' + esc(opts.title || 'Are you sure?') + '</h2>' +
        '<p class="dialog__msg">' + esc(message) + '</p>' +
        '<div class="dialog__actions">' +
          '<button class="btn btn--ghost" type="button" data-dlg="cancel">Cancel</button>' +
          '<button class="btn ' + (opts.danger ? 'btn--danger' : 'btn--primary') + '" type="button" data-dlg="ok">' + esc(opts.okLabel || 'Confirm') + '</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(overlay);

    let settled = false;
    function close(val) {
      if (settled) return; settled = true;
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      document.removeEventListener('keydown', onKey);
      resolve(val);
    }
    function onKey(e) { if (e.key === 'Escape') close(false); }
    overlay.querySelector('[data-dlg="cancel"]').addEventListener('click', function () { close(false); });
    overlay.querySelector('[data-dlg="ok"]').addEventListener('click', function () { close(true); });
    overlay.addEventListener('click', function (e) { if (e.target === overlay) close(false); });
    document.addEventListener('keydown', onKey);
    const first = overlay.querySelector('button');
    if (first) first.focus();
  });
}

/* ---- Event wiring (delegated; survives the DOM it is attached to) -------- */

export function wireForm(root, ctx) {
  if (!root || !root.addEventListener) return;
  function onInput(e) {
    const el = e.target;
    if (!el || !el.getAttribute) return;
    const path = el.getAttribute('data-path');
    if (!path) return;
    const rec = ctx.getRecord();
    setAtPath(rec, path, parseValue(el, el.getAttribute('data-type') || 'text'));
    if (el.classList.contains('md-src')) {
      const box = el.closest('.field');
      const prev = box ? box.querySelector('.md--preview') : null;
      if (prev) prev.innerHTML = Markdown.render(el.value);
    }
    ctx.onChange && ctx.onChange();
  }
  function doStructural(btn) {
    const rec = ctx.getRecord();
    const schema = ctx.schema;
    if (btn.hasAttribute('data-add')) {
      const path = btn.getAttribute('data-add');
      const parts = String(path).split('.');
      const key = parts[parts.length - 1];
      const desc = schema.find ? schema.find((f) => f.key === key) : null; // first field whose key matches
      const arr = getAtPath(rec, path);
      const list = Array.isArray(arr) ? arr : (arr === undefined ? [] : [arr]);
      list.push(desc && desc.item && desc.item.length ? (desc.blank ? JSON.parse(JSON.stringify(desc.blank)) : {}) : '');
      setAtPath(rec, path, list);
    } else if (btn.hasAttribute('data-rm')) {
      const path = btn.getAttribute('data-rm');
      const idx = Number(btn.getAttribute('data-idx'));
      const arr = getAtPath(rec, path);
      if (Array.isArray(arr)) { arr.splice(idx, 1); setAtPath(rec, path, arr); }
    }
    ctx.reRender();
  }
  function refreshSaveState() {
    if (ctx.name && root.querySelector('[data-save]')) {
      const online = AdminData.isServerOnline();
      root.querySelector('[data-save]').disabled = !online;
    }
    ctx.onChange && ctx.onChange();
  }
  function onClick(e) {
    const t = e.target;
    if (!t || !t.closest) return;

    // Markdown RTF toolbar button - delegated here (keeps #view to ONE click handler; verify-wireform-leak.mjs).
    const mdToolBtn = t.closest('[data-mdtool]');
    if (mdToolBtn) {
      e.preventDefault();
      const box = mdToolBtn.closest('.field');
      const ta = box ? box.querySelector('textarea.md-src') : null;
      if (ta && typeof Toolbar !== 'undefined') Toolbar.applyTool(mdToolBtn.getAttribute('data-mdtool'), ta);
      return;
    }

    if (t.closest('[data-add]') || t.closest('[data-rm]')) {
      const btn = t.closest('[data-add], [data-rm]');
      e.preventDefault();
      doStructural(btn);
      return;
    }

    const saveBtn = t.closest('[data-save]');
    if (saveBtn) {
      e.preventDefault();
      const name = saveBtn.getAttribute('data-save');
      const before = saveBtn.textContent;
      saveBtn.disabled = true; saveBtn.textContent = 'Saving...';
       AdminData.saveOne(name)
         .then(function (meta) {
           const regen = meta && meta.regenerated === true;
           toast('Saved ' + name + ' to disk' + (regen ? ' - data.js regenerated' : '') + '.', 'ok');
           refreshSaveState();
         })
        .catch(function (err) {
          toast(err.message, 'bad');
        })
        .finally(function () { saveBtn.disabled = !AdminData.isServerOnline(); saveBtn.textContent = before; });
      return;
    }

    const exportBtn = t.closest('[data-export]');
    if (exportBtn) {
      e.preventDefault();
      const name = exportBtn.getAttribute('data-export');
      try { const r = AdminData.exportOne(name); toast('Exported ' + name + '.json (' + r.bytes + ' bytes).', 'ok'); }
      catch (err) { toast(err.message, 'bad'); }
      return;
    }

    if (t.closest('[data-export-all]')) {
      e.preventDefault();
      try { const r = AdminData.exportAll(); toast('Exported bundle with ' + r.collections + ' collections.', 'ok'); }
      catch (err) { toast(err.message, 'bad'); }
      return;
    }

    const resetBtn = t.closest('[data-reset]');
    if (resetBtn) {
      e.preventDefault();
      const name = resetBtn.getAttribute('data-reset');
      confirmDialog('Revert all unsaved edits to "' + name + '"? This discards changes in memory (nothing on disk changes).', { title: 'Revert changes?', danger: true, okLabel: 'Revert' })
        .then(function (ok) { if (ok) { AdminData.reset(name); ctx.reRender(); toast('Reverted ' + name + '.', 'info'); } });
      return;
    }

    const importBtn = t.closest('[data-import]');
    if (importBtn) {
      e.preventDefault();
      const target = root.querySelector('#import-target');
      const ta = root.querySelector('#import-text');
      const name = target ? target.value : (importBtn.getAttribute('data-import') || null);
      const text = ta ? ta.value : '';
      if (!name) { toast('Choose a collection to import into.', 'warn'); return; }
      let parsed;
      try { parsed = JSON.parse(text); }
      catch (err) { toast('Import failed: not valid JSON (' + err.message + ').', 'bad'); return; }
      confirmDialog('Import will REPLACE the current in-memory "' + name + '" with the pasted JSON. Continue?', { title: 'Import ' + name + '?', danger: true, okLabel: 'Import' })
        .then(function (ok) { if (ok) { AdminData.importOne(name, parsed); ctx.reRender && ctx.reRender(); toast('Imported into ' + name + '. Save or Export to persist.', 'ok'); } });
      return;
    }

    const fileInput = t.closest('[data-import-file]');
    if (fileInput && t.files && t.files.length) {
      const target = root.querySelector('#import-target');
      const name = target ? target.value : null;
      const reader = new FileReader();
      reader.onload = function () {
        let parsed; try { parsed = JSON.parse(reader.result); } catch (err) { toast('Import failed: not valid JSON.', 'bad'); return; }
        confirmDialog('Import file into "' + name + '"? This replaces the in-memory copy.', { title: 'Import ' + name + '?', danger: true, okLabel: 'Import' })
          .then(function (ok) { if (ok) { AdminData.importOne(name, parsed); ctx.reRender && ctx.reRender(); toast('Imported into ' + name + '.', 'ok'); } });
      };
      reader.readAsText(t.files[0]);
    }
  }

  // Idempotent re-wiring of the persistent #view (replaces, never stacks - see wire.js).
  wireOnce(root, 'form', { input: onInput, change: onInput, click: onClick });

  // Media editor wires its own (fresh-per-render) [data-media-root] subtree - immune to #view accumulation.
  if (typeof Media !== 'undefined') Media.wire(root, ctx);

  refreshSaveState();
}

export default {
  esc, getAtPath, setAtPath, parseValue,
  renderField, renderForm, renderList, saveBar,
  toast, confirmDialog, wireOnce, wireForm, media: Media,
};
