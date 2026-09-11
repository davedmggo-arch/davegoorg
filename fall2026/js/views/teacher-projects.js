/* ==========================================================================
   Seneca 3D Integration - js/views/teacher-projects.js
   Projects editor: an index (list of 3 + Add / Edit / Delete) and a per-project
   schema form. Brief / rubric / prompt are markdown with live preview; weeks is
   a typed number list; deliverables a plain text list; guardrails and
   checkpoints are object lists. Everything is schema-driven (PROJECTS_SCHEMA)
   so the seed can be extended without touching the view.

   Deleting a project is destructive -> confirm-gated. Adding one synthesises a
   blank record with a fresh id and routes straight into the editor.
   ========================================================================== */

import AdminData from '../admin/admin-data.js';
import Router from '../core/router.js';
import { esc, notFound } from './shared.js';
import { renderForm, saveBar, wireForm, wireOnce, toast, confirmDialog } from '../admin/admin-ui.js';

const PROJECTS_SCHEMA = [
  { key: 'id', label: 'ID', type: 'text', hint: 'e.g. a / b / c' },
  { key: 'name', label: 'Name', type: 'text' },
  { key: 'world', label: 'World / anchor', type: 'text', hint: 'Blank for a free subject (B / C).' },
  { key: 'weeks', label: 'Weeks', type: 'csv', itemType: 'number', hint: 'comma-separated week numbers' },
  { key: 'deliveryWeek', label: 'Delivery week', type: 'number' },
  { key: 'deliveryDate', label: 'Delivery date', type: 'date' },
  { key: 'prompt', label: 'Prompt', type: 'markdown', hint: 'The prompt section, verbatim markdown.' },
  { key: 'brief', label: 'Brief', type: 'markdown', hint: 'Full brief, verbatim markdown.' },
  { key: 'rubric', label: 'Rubric', type: 'markdown', hint: 'Full rubric, verbatim markdown.' },
  { key: 'media', type: 'media', label: 'Before / After media', hint: 'Optional media shown with this project.' },
  {
    key: 'deliverables', label: 'Deliverables', type: 'list', addLabel: 'deliverable', scalar: 'text',
  },
  {
    key: 'guardrails', label: 'Guardrails (tools + fallbacks)', type: 'list', addLabel: 'tool',
    blank: { tool: '', does: '', fallback: '' },
    item: [
      { key: 'tool', label: 'Tool', type: 'text' },
      { key: 'does', label: 'What it does', type: 'text' },
      { key: 'fallback', label: 'Manual fallback', type: 'text' },
    ],
  },
  {
    key: 'checkpoints', label: 'Checkpoints', type: 'list', addLabel: 'checkpoint',
    blank: { id: '', week: null, name: '', body: '' },
    item: [
      { key: 'id', label: 'ID', type: 'text', placeholder: 'e.g. A1 / Delivery A' },
      { key: 'week', label: 'Week', type: 'number' },
      { key: 'name', label: 'Name', type: 'text' },
      { key: 'body', label: 'Body', type: 'markdown' },
    ],
  },
  { key: 'source.brief', label: 'Source - brief file', type: 'text' },
  { key: 'source.rubric', label: 'Source - rubric file', type: 'text' },
  { key: 'order', label: 'Order', type: 'number' },
];

const BLANK_PROJECT = {
  id: '', name: '', world: '', weeks: [], deliveryWeek: null, deliveryDate: '',
  prompt: '', brief: '', rubric: '', media: { before: [], after: [] }, deliverables: [], guardrails: [], checkpoints: [],
  source: { brief: '', rubric: '' }, order: null,
};

function updateStatus() {
  if (typeof window !== 'undefined' && window.__adminStatus) window.__adminStatus();
}

function nextProjectId(list) {
  const used = new Set(list.map(function (p) { return p.id; }));
  const base = 'p' + (list.length + 1);
  let id = base;
  let i = 1;
  while (used.has(id)) { id = base + '-' + (i++); }
  return id;
}

/* ---- Index --------------------------------------------------------------- */

export function renderProjectsIndex(params, query) {
  const projects = AdminData.get('projects') || [];
  const rows = projects.map(function (p, i) {
    const weeks = Array.isArray(p.weeks) ? p.weeks.join(', ') : '';
    return (
      '<li class="listrow anim-rise" style="--i:' + (i + 1) + '">' +
        '<div class="listrow__main">' +
          '<a class="listrow__title" href="#/admin/projects/' + esc(p.id) + '">' + esc(p.name || p.id) + '</a>' +
          '<span class="muted">' + esc(p.id) + (p.world ? ' &middot; ' + esc(p.world) : '') + (weeks ? ' &middot; wk ' + esc(weeks) : '') + (p.deliveryWeek != null ? ' &middot; delivers wk ' + esc(p.deliveryWeek) : '') + '</span>' +
        '</div>' +
        '<div class="listrow__actions">' +
          '<a class="btn btn--ghost" href="#/admin/projects/' + esc(p.id) + '">Edit</a>' +
          '<button class="btn btn--ghost" type="button" data-del="' + esc(p.id) + '">Delete</button>' +
        '</div>' +
      '</li>'
    );
  }).join('');

  const html = (
    '<section class="admin-edit" aria-labelledby="projects-title">' +
      '<header class="admin-edit__head">' +
        '<h1 id="projects-title" class="anim-rise" style="--i:0">Projects</h1>' +
        '<p class="muted anim-rise" style="--i:1">Three deliverables. Edit one, add one, or delete one. Edits are in-memory until you Save (server) or Export (always).</p>' +
        '<div class="admin-edit__toolbar anim-rise" style="--i:1">' +
          '<button class="btn btn--primary" type="button" data-add-project>+ Add project</button>' +
          '<button class="btn btn--ghost" type="button" data-export="projects">Export projects</button>' +
        '</div>' +
      '</header>' +
      '<ol class="list">' + (rows || '<li class="list__empty">No projects yet.</li>') + '</ol>' +
      saveBar('projects', '#/admin', 'Back to dashboard') +
    '</section>'
  );

  const view = (typeof document !== 'undefined') ? document.getElementById('view') : null;
  if (view) {
    view.innerHTML = html;
    wireForm(view, { name: 'projects', getRecord: function () { return {}; }, reRender: function () { renderProjectsIndex(); }, onChange: updateStatus });
    wireOnce(view, 'index', { click: function (e) {
      const t = e.target;
      if (!t || !t.closest) return;
      const addBtn = t.closest('[data-add-project]');
      if (addBtn) {
        e.preventDefault();
        const list = AdminData.get('projects') || [];
        const blank = JSON.parse(JSON.stringify(BLANK_PROJECT));
        blank.id = nextProjectId(list);
        blank.name = 'New project';
        blank.order = list.length + 1;
        list.push(blank);
        Router.go('#/admin/projects/' + blank.id);
        return;
      }
      const delBtn = t.closest('[data-del]');
      if (delBtn) {
        e.preventDefault();
        const id = delBtn.getAttribute('data-del');
        confirmDialog('Delete project "' + id + '"? This removes it from the in-memory store. Save (or Export) to make it permanent.', { title: 'Delete project?', danger: true, okLabel: 'Delete' })
          .then(function (ok) {
            if (!ok) return;
            const list = AdminData.get('projects') || [];
            const idx = list.findIndex(function (p) { return p.id === id; });
            if (idx >= 0) list.splice(idx, 1);
            renderProjectsIndex();
            toast('Deleted ' + id + '.', 'info');
          });
      }
    } });
  }
  return null;
}

/* ---- Edit one project ---------------------------------------------------- */

export function renderProjectEdit(params, query) {
  const id = params && params.id;
  const view = (typeof document !== 'undefined') ? document.getElementById('view') : null;
  if (!view) return null;

  const projects = AdminData.get('projects') || [];
  const rec = projects.find(function (p) { return p.id === id; });
  if (!rec) { view.innerHTML = notFound('Project', 'id ' + id); return null; }

  const html = (
    '<section class="admin-edit" aria-labelledby="project-edit-title">' +
      '<header class="admin-edit__head">' +
        '<h1 id="project-edit-title" class="anim-rise" style="--i:0">Project &middot; ' + esc(rec.id) + '</h1>' +
        '<p class="muted anim-rise" style="--i:1">' + esc(rec.name || '') + (rec.world ? ' &middot; ' + esc(rec.world) : '') + '</p>' +
      '</header>' +
      '<div class="admin-edit__body anim-rise" style="--i:1">' +
        renderForm(PROJECTS_SCHEMA, rec, null, null) +
      '</div>' +
      saveBar('projects', '#/admin/projects', 'Back to projects') +
    '</section>'
  );

  view.innerHTML = html;
  wireForm(view, {
    name: 'projects',
    schema: PROJECTS_SCHEMA,
    getRecord: function () { return projects.find(function (p) { return p.id === id; }); },
    reRender: function () { renderProjectEdit(params); },
    onChange: updateStatus,
  });
  return null;
}

export default { renderProjectsIndex, renderProjectEdit, PROJECTS_SCHEMA };