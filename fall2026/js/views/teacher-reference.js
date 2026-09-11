/* ==========================================================================
   Seneca 3D Integration - js/views/teacher-reference.js
   Reference editor: an index (list of reference pages) + a per-page schema
   form. "Covers" is a text summary, "for" is a typed text list (the project /
   lesson it applies to), and the body is markdown with live preview. Deletion
   is confirm-gated.

    Phase 4: every entry carries a `section` ("blender" = Blender-Related, or
    "books" = Books). Books add `author` + `url` (both optional) and reuse the
    existing body + before/after media. "+ Add book" creates a blank Books entry
    with exactly the same add/edit/save pipeline as Blender entries.

    Round 2 / R2-3: the `section` select is now driven by the live section list
    (views/reference-sections.js) so a teacher can create, rename, reorder and
    remove custom sections on the index, then assign any entry to any of them.
    Removal is blocked while a section still holds reference entries.
    ========================================================================== */

import AdminData from '../admin/admin-data.js';
import Router from '../core/router.js';
import { esc, notFound } from './shared.js';
import { renderForm, saveBar, wireForm, wireOnce, toast, confirmDialog } from '../admin/admin-ui.js';
import { sectionsPanel, wireSections, sectionOptions } from './reference-sections.js';

const REFERENCE_SCHEMA = [
  { key: 'id', label: 'ID', type: 'text' },
  { key: 'title', label: 'Title', type: 'text' },
  {
    key: 'section', label: 'Section', type: 'select',
    options: [
      { value: 'blender', label: 'Blender-Related' },
      { value: 'books', label: 'Books' },
    ],
    hint: 'Which student Reference section this entry appears in.',
  },
  { key: 'author', label: 'Author', type: 'text', hint: 'Optional - the book author.' },
  { key: 'url', label: 'Link (url)', type: 'text', hint: 'Optional http/https link the book title opens (books).' },
  { key: 'covers', label: 'Covers', type: 'text', hint: 'One-line description of the page.' },
  {
    key: 'for', label: 'Applies to', type: 'csv', itemType: 'text',
    hint: 'comma-separated, e.g. B, wk 4-7, checkpoint, delivery',
  },
  { key: 'body', label: 'Body', type: 'markdown', hint: 'Full reference content, verbatim markdown.' },
  { key: 'media', type: 'media', label: 'Before / After media', hint: 'Optional media shown with this page.' },
  { key: 'source', label: 'Source', type: 'text', hint: 'Where this content came from.' },
  { key: 'order', label: 'Order', type: 'number' },
];

const BLANK_REF = {
  id: '', title: '', section: 'blender', author: '', url: '', covers: '', for: [], body: '', media: { before: [], after: [] }, source: '', order: null,
};

function updateStatus() {
  if (typeof window !== 'undefined' && window.__adminStatus) window.__adminStatus();
}

function nextReferenceId(list) {
  const used = new Set(list.map(function (r) { return r.id; }));
  const base = 'ref-' + (list.length + 1);
  let id = base;
  let i = 1;
  while (used.has(id)) { id = base + '-' + (i++); }
  return id;
}

/* Build the per-record schema with a dynamic `section` select: the options come
   from the live section list (teacher-defined order/labels via course.
   referenceSections, or the seeded blender+books fallback). Every other field
   is the shared REFERENCE_SCHEMA, so add/edit/save behave exactly as before. */
function referenceSchema(rec) {
  const course = AdminData.get('course');
  const list = AdminData.get('reference') || [];
  const opts = sectionOptions(course, list, rec && rec.section).map(function (o) {
    return { value: o.id, label: o.label };
  });
  return REFERENCE_SCHEMA.map(function (f) {
    if (f.key === 'section') return Object.assign({}, f, { options: opts });
    return f;
  });
}

/* Keep the persisted `order` dense 1..N (no gaps / stale values). Only the
    `order` field is touched - every other field is left exactly as-is. */
function renumberOrder(list) {
  list.forEach(function (r, i) { r.order = i + 1; });
  return list;
}

/* Move one entry up/down in the in-memory array (guarded: top can't move up,
   last can't move down), then renumber to a clean 1..N and re-render. */
function moveReference(dir, id) {
  const list = AdminData.get('reference') || [];
  const idx = list.findIndex(function (r) { return r.id === id; });
  if (idx < 0) return false;
  const j = (dir === 'up') ? idx - 1 : idx + 1;
  if (j < 0 || j >= list.length) return false;
  const tmp = list[idx];
  list[idx] = list[j];
  list[j] = tmp;
  renumberOrder(list);
  renderReferenceIndex();
  updateStatus();
  return true;
}

/* ---- Index --------------------------------------------------------------- */

export function renderReferenceIndex(params, query) {
  const list = AdminData.get('reference') || [];
  const rows = list.map(function (r, i) {
    const forList = Array.isArray(r['for']) ? r['for'] : [];
    return (
      '<li class="listrow anim-rise" style="--i:' + (i + 1) + '">' +
        '<div class="listrow__main">' +
          '<a class="listrow__title" href="#/admin/reference/' + esc(r.id) + '">' + esc(r.title || r.id) + '</a>' +
          '<span class="muted">' + esc(r.id) + (r.covers ? ' &middot; ' + esc(r.covers) : '') + (forList.length ? ' &middot; for: ' + esc(forList.join(', ')) : '') + '</span>' +
        '</div>' +
        '<div class="listrow__actions">' +
          '<button class="btn btn--ghost listrow__mv" type="button" data-mv="up" data-id="' + esc(r.id) + '" aria-label="Move up: ' + esc(r.title || r.id) + '"' + (i === 0 ? ' disabled' : '') + '>Up</button>' +
          '<button class="btn btn--ghost listrow__mv" type="button" data-mv="down" data-id="' + esc(r.id) + '" aria-label="Move down: ' + esc(r.title || r.id) + '"' + (i === list.length - 1 ? ' disabled' : '') + '>Down</button>' +
          '<a class="btn btn--ghost" href="#/admin/reference/' + esc(r.id) + '">Edit</a>' +
          '<button class="btn btn--ghost" type="button" data-del="' + esc(r.id) + '">Delete</button>' +
        '</div>' +
      '</li>'
    );
  }).join('');

  const html = (
    '<section class="admin-edit" aria-labelledby="reference-title">' +
      '<header class="admin-edit__head">' +
        '<h1 id="reference-title" class="anim-rise" style="--i:0">Reference</h1>' +
        '<p class="muted anim-rise" style="--i:1">Blender reference pages and book picks students keep beside their viewport. Edit one, add a page or a book, or delete one. Edits are in-memory until you Save (server) or Export (always).</p>' +
        '<div class="admin-edit__toolbar anim-rise" style="--i:1">' +
          '<button class="btn btn--primary" type="button" data-add-reference>+ Add reference</button>' +
          '<button class="btn btn--ghost" type="button" data-add-book>+ Add book</button>' +
          '<button class="btn btn--ghost" type="button" data-export="reference">Export reference</button>' +
        '</div>' +
      '</header>' +
      sectionsPanel(AdminData.get('course'), list) +
      '<ol class="list">' + (rows || '<li class="list__empty">No reference pages yet.</li>') + '</ol>' +
      saveBar('reference', '#/admin', 'Back to dashboard') +
    '</section>'
  );

  const view = (typeof document !== 'undefined') ? document.getElementById('view') : null;
  if (view) {
    view.innerHTML = html;
    wireForm(view, { name: 'reference', getRecord: function () { return {}; }, reRender: function () { renderReferenceIndex(); }, onChange: updateStatus });
    wireOnce(view, 'index', { click: function (e) {
      const t = e.target;
      if (!t || !t.closest) return;
      const addBtn = t.closest('[data-add-reference]');
      if (addBtn) {
        e.preventDefault();
        const list = AdminData.get('reference') || [];
        const blank = JSON.parse(JSON.stringify(BLANK_REF));
        blank.id = nextReferenceId(list);
        blank.title = 'New reference page';
        blank.order = list.length + 1;
        list.push(blank);
        Router.go('#/admin/reference/' + blank.id);
        return;
      }
      const addBook = t.closest('[data-add-book]');
      if (addBook) {
        e.preventDefault();
        const list = AdminData.get('reference') || [];
        const blank = JSON.parse(JSON.stringify(BLANK_REF));
        blank.id = nextReferenceId(list);
        blank.title = 'New book';
        blank.section = 'books';
        blank.order = list.length + 1;
        list.push(blank);
        Router.go('#/admin/reference/' + blank.id);
        return;
      }
      const mvBtn = t.closest('[data-mv]');
      if (mvBtn) {
        e.preventDefault();
        moveReference(mvBtn.getAttribute('data-mv'), mvBtn.getAttribute('data-id'));
        return;
      }
      const delBtn = t.closest('[data-del]');
      if (delBtn) {
        e.preventDefault();
        const id = delBtn.getAttribute('data-del');
        confirmDialog('Delete reference page "' + id + '"?', { title: 'Delete reference?', danger: true, okLabel: 'Delete' })
          .then(function (ok) {
            if (!ok) return;
            const list = AdminData.get('reference') || [];
            const idx = list.findIndex(function (r) { return r.id === id; });
            if (idx >= 0) list.splice(idx, 1);
            renderReferenceIndex();
            toast('Deleted ' + id + '.', 'info');
          });
      }
    } });
    wireSections(view, AdminData.get('course'), list, function () { renderReferenceIndex(); updateStatus(); }, toast);
  }
  return null;
}

/* ---- Edit one reference page --------------------------------------------- */

export function renderReferenceEdit(params, query) {
  const id = params && params.id;
  const view = (typeof document !== 'undefined') ? document.getElementById('view') : null;
  if (!view) return null;

  const list = AdminData.get('reference') || [];
  const rec = list.find(function (r) { return r.id === id; });
  if (!rec) { view.innerHTML = notFound('Reference page', 'id ' + id); return null; }

  // A missing/empty section defaults to the seeded blender-related section; any
  // non-empty value (including a teacher-created id) is preserved (R2-3).
  if (!rec.section) rec.section = 'blender';

  const schema = referenceSchema(rec);
  const html = (
    '<section class="admin-edit" aria-labelledby="reference-edit-title">' +
      '<header class="admin-edit__head">' +
        '<h1 id="reference-edit-title" class="anim-rise" style="--i:0">Reference &middot; ' + esc(rec.id) + '</h1>' +
        '<p class="muted anim-rise" style="--i:1">' + esc(rec.title || '') + (rec.covers ? ' &middot; ' + esc(rec.covers) : '') + '</p>' +
      '</header>' +
      '<div class="admin-edit__body anim-rise" style="--i:1">' +
        renderForm(schema, rec, null, null) +
      '</div>' +
      saveBar('reference', '#/admin/reference', 'Back to reference') +
    '</section>'
  );

  view.innerHTML = html;
  wireForm(view, {
    name: 'reference',
    schema: schema,
    getRecord: function () { return list.find(function (r) { return r.id === id; }); },
    reRender: function () { renderReferenceEdit(params); },
    onChange: updateStatus,
  });
  return null;
}

export default { renderReferenceIndex, renderReferenceEdit, REFERENCE_SCHEMA };