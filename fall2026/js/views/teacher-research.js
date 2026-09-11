/* ==========================================================================
   Seneca 3D Integration - js/views/teacher-research.js
   Research editor: an index (list of reports, newest first) + a per-report
   schema form. Summary and body are markdown with live preview; tags is a
   typed text list; sources is a plain text list of URLs (rendered safely by
   the student view). Deletion is confirm-gated.
   ========================================================================== */

import AdminData from '../admin/admin-data.js';
import Router from '../core/router.js';
import { esc, notFound, formatDate } from './shared.js';
import { renderForm, saveBar, wireForm, wireOnce, toast, confirmDialog } from '../admin/admin-ui.js';

const RESEARCH_SCHEMA = [
  { key: 'id', label: 'ID', type: 'text' },
  { key: 'title', label: 'Title', type: 'text' },
  { key: 'date', label: 'Date', type: 'date' },
  { key: 'handoffVersion', label: 'Handoff version', type: 'text', hint: 'e.g. 011' },
  { key: 'scope', label: 'Scope', type: 'text' },
  { key: 'summary', label: 'Summary', type: 'markdown', hint: 'Short summary, verbatim markdown.' },
  { key: 'body', label: 'Body', type: 'markdown', hint: 'Full report body, verbatim markdown.' },
  { key: 'media', type: 'media', label: 'Before / After media', hint: 'Optional media shown with this report.' },
  { key: 'status', label: 'Status', type: 'text', hint: 'e.g. approved / draft' },
  {
    key: 'tags', label: 'Tags', type: 'csv', itemType: 'text',
    hint: 'comma-separated, e.g. 3d, blender, unity, fallback',
  },
  {
    key: 'sources', label: 'Sources', type: 'list', addLabel: 'source', scalar: 'text',
    hint: 'Each entry is a URL (or label). The student view renders these as safe links.',
  },
  { key: 'source', label: 'Source file', type: 'text', hint: 'Handoff file this was built from.' },
  { key: 'order', label: 'Order', type: 'number' },
];

const BLANK_REPORT = {
  id: '', title: '', date: '', handoffVersion: '', scope: '',
  summary: '', body: '', media: { before: [], after: [] }, status: 'draft', tags: [], sources: [], source: '', order: null,
};

function updateStatus() {
  if (typeof window !== 'undefined' && window.__adminStatus) window.__adminStatus();
}

function nextResearchId(list) {
  const used = new Set(list.map(function (r) { return r.id; }));
  const base = 'research-' + (list.length + 1);
  let id = base;
  let i = 1;
  while (used.has(id)) { id = base + '-' + (i++); }
  return id;
}

/* ---- Index --------------------------------------------------------------- */

export function renderResearchIndex(params, query) {
  const list = (AdminData.get('research') || []).slice().sort(function (a, b) {
    const da = a.date || '', db = b.date || '';
    if (da === db) return (a.order || 0) - (b.order || 0);
    return da < db ? 1 : -1;
  });
  const rows = list.map(function (r, i) {
    const tags = Array.isArray(r.tags) ? r.tags.length : 0;
    const sources = Array.isArray(r.sources) ? r.sources.length : 0;
    return (
      '<li class="listrow anim-rise" style="--i:' + (i + 1) + '">' +
        '<div class="listrow__main">' +
          '<a class="listrow__title" href="#/admin/research/' + esc(r.id) + '">' + esc(r.title || r.id) + '</a>' +
          '<span class="muted">' + esc(r.id) + (r.date ? ' &middot; ' + esc(formatDate(r.date)) : '') + (r.scope ? ' &middot; ' + esc(r.scope) : '') + ' &middot; ' + tags + ' tags, ' + sources + ' sources</span>' +
        '</div>' +
        '<div class="listrow__actions">' +
          '<a class="btn btn--ghost" href="#/admin/research/' + esc(r.id) + '">Edit</a>' +
          '<button class="btn btn--ghost" type="button" data-del="' + esc(r.id) + '">Delete</button>' +
        '</div>' +
      '</li>'
    );
  }).join('');

  const html = (
    '<section class="admin-edit" aria-labelledby="research-title">' +
      '<header class="admin-edit__head">' +
        '<h1 id="research-title" class="anim-rise" style="--i:0">Research</h1>' +
        '<p class="muted anim-rise" style="--i:1">Reports the course is grounded in. Edit one, add one, or delete one. Edits are in-memory until you Save (server) or Export (always).</p>' +
        '<div class="admin-edit__toolbar anim-rise" style="--i:1">' +
          '<button class="btn btn--primary" type="button" data-add-research>+ Add report</button>' +
          '<button class="btn btn--ghost" type="button" data-export="research">Export research</button>' +
        '</div>' +
      '</header>' +
      '<ol class="list">' + (rows || '<li class="list__empty">No research reports yet.</li>') + '</ol>' +
      saveBar('research', '#/admin', 'Back to dashboard') +
    '</section>'
  );

  const view = (typeof document !== 'undefined') ? document.getElementById('view') : null;
  if (view) {
    view.innerHTML = html;
    wireForm(view, { name: 'research', getRecord: function () { return {}; }, reRender: function () { renderResearchIndex(); }, onChange: updateStatus });
    wireOnce(view, 'index', { click: function (e) {
      const t = e.target;
      if (!t || !t.closest) return;
      const addBtn = t.closest('[data-add-research]');
      if (addBtn) {
        e.preventDefault();
        const list = AdminData.get('research') || [];
        const blank = JSON.parse(JSON.stringify(BLANK_REPORT));
        blank.id = nextResearchId(list);
        blank.title = 'New research report';
        blank.date = new Date().toISOString().slice(0, 10);
        blank.order = list.length + 1;
        list.push(blank);
        Router.go('#/admin/research/' + blank.id);
        return;
      }
      const delBtn = t.closest('[data-del]');
      if (delBtn) {
        e.preventDefault();
        const id = delBtn.getAttribute('data-del');
        confirmDialog('Delete research report "' + id + '"?', { title: 'Delete report?', danger: true, okLabel: 'Delete' })
          .then(function (ok) {
            if (!ok) return;
            const list = AdminData.get('research') || [];
            const idx = list.findIndex(function (r) { return r.id === id; });
            if (idx >= 0) list.splice(idx, 1);
            renderResearchIndex();
            toast('Deleted ' + id + '.', 'info');
          });
      }
    } });
  }
  return null;
}

/* ---- Edit one report ----------------------------------------------------- */

export function renderResearchEdit(params, query) {
  const id = params && params.id;
  const view = (typeof document !== 'undefined') ? document.getElementById('view') : null;
  if (!view) return null;

  const list = AdminData.get('research') || [];
  const rec = list.find(function (r) { return r.id === id; });
  if (!rec) { view.innerHTML = notFound('Research report', 'id ' + id); return null; }

  const html = (
    '<section class="admin-edit" aria-labelledby="research-edit-title">' +
      '<header class="admin-edit__head">' +
        '<h1 id="research-edit-title" class="anim-rise" style="--i:0">Research &middot; ' + esc(rec.id) + '</h1>' +
        '<p class="muted anim-rise" style="--i:1">' + esc(rec.title || '') + (rec.date ? ' &middot; ' + esc(formatDate(rec.date)) : '') + '</p>' +
      '</header>' +
      '<div class="admin-edit__body anim-rise" style="--i:1">' +
        renderForm(RESEARCH_SCHEMA, rec, null, null) +
      '</div>' +
      saveBar('research', '#/admin/research', 'Back to research') +
    '</section>'
  );

  view.innerHTML = html;
  wireForm(view, {
    name: 'research',
    schema: RESEARCH_SCHEMA,
    getRecord: function () { return list.find(function (r) { return r.id === id; }); },
    reRender: function () { renderResearchEdit(params); },
    onChange: updateStatus,
  });
  return null;
}

export default { renderResearchIndex, renderResearchEdit, RESEARCH_SCHEMA };