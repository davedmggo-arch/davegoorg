/* ==========================================================================
   Seneca 3D Integration - js/views/teacher-lessons.js
   Lessons editor: an index (list of 14 + Add / Edit / Delete) and a per-lesson
   form. The six beats are markdown fields with live preview; furtherReading is
   a typed list editor. Everything is schema-driven (LESSON_SCHEMA) so Phase 3b
   can extend it.

   Deleting a lesson is destructive -> confirm-gated. Adding one synthesises a
   blank record with a fresh id and routes straight into the editor.
   ========================================================================== */

import AdminData from '../admin/admin-data.js';
import Router from '../core/router.js';
import { esc, pad, notFound } from './shared.js';
import { renderForm, saveBar, wireForm, wireOnce, toast, confirmDialog } from '../admin/admin-ui.js';

// The six beats, in teaching order (matches the student lesson view).
const BEATS = [
  ['retrievalHook', "Today's Brief", 'Warm-up / recall. No new idea - just the last idea, in voice.'],
  ['oneNewConcept', 'Class Details', 'The single new idea, explained the way you would say it.'],
  ['guidedMaking', "Today's Assignment", 'The one thing they build this session, step by step.'],
  ['check', 'Quick Check-In', 'The gate / pass question for this week.'],
  ['reflect', 'Checklist', 'The three-lines self-assessment prompt.'],
  ['revisit', "What's Next", 'How this connects forward - next week, the muscle reused.'],
];

const LESSON_SCHEMA = [
  { key: 'id', label: 'ID', type: 'text', hint: 'e.g. wk-05' },
  { key: 'week', label: 'Week', type: 'number' },
  { key: 'date', label: 'Date', type: 'date' },
  { key: 'project', label: 'Project', type: 'text', placeholder: 'a / b / c / blank for a free week' },
  { key: 'title', label: 'Title', type: 'text' },
  { key: 'oneConcept', label: 'One concept', type: 'text', hint: 'The one-line spine for this lesson.' },
  { key: 'checkpoint', label: 'Checkpoint', type: 'text', placeholder: 'e.g. A1 / Delivery A / blank' },
  { key: 'checkpointIsDelivery', label: 'Checkpoint is a delivery', type: 'bool' },
  { key: 'source', label: 'Source file', type: 'text' },
  { key: 'order', label: 'Order', type: 'number' },
].concat(
  BEATS.reduce(function (acc, b) {
    acc.push({ key: 'beats.' + b[0], label: b[1], type: 'markdown', hint: b[2] });
    acc.push({ key: 'beatMedia.' + b[0] + '.media', type: 'media', label: b[1] + ' media', hint: 'Before / After media for this beat.' });
    return acc;
  }, [])
).concat([
  {
    key: 'guidedSections', label: 'Guided-making subsections', type: 'list', addLabel: 'subsection',
    blank: { title: '', body: '', media: { before: [], after: [] } },
    item: [
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'body', label: 'Body', type: 'markdown' },
      { key: 'media', type: 'media', label: 'Media' },
    ],
  },
  {
    key: 'furtherReading', label: 'Further reading', type: 'list', addLabel: 'book',
    blank: { book: '', author: '', chapter: '', note: '' },
    item: [
      { key: 'book', label: 'Book', type: 'text' },
      { key: 'author', label: 'Author', type: 'text' },
      { key: 'chapter', label: 'Chapter', type: 'text' },
      { key: 'note', label: 'Note', type: 'markdown' },
    ],
  },
  { key: 'media', type: 'media', label: 'Before / After media', hint: 'Optional media shown with this lesson.' },
]);

function updateStatus() {
  if (typeof window !== 'undefined' && window.__adminStatus) window.__adminStatus();
}

function nextLessonId(lessons) {
  let max = 0;
  for (let i = 0; i < lessons.length; i++) {
    const n = parseInt(String(lessons[i].id).replace(/\D/g, ''), 10);
    if (!isNaN(n) && n > max) max = n;
  }
  const wk = max + 1;
  const ids = new Set(lessons.map(function (l) { return l.id; }));
  let id = 'wk-' + pad(wk);
  let i = 1;
  while (ids.has(id)) { id = 'wk-' + pad(wk) + '-' + (i++); }
  return { id: id, week: wk };
}

/* ---- Index --------------------------------------------------------------- */

export function renderLessonsIndex(params, query) {
  const lessons = AdminData.get('lessons') || [];
  const rows = lessons.map(function (l, i) {
    return (
      '<li class="listrow anim-rise" style="--i:' + (i + 1) + '">' +
        '<div class="listrow__main">' +
          '<a class="listrow__title" href="#/admin/lessons/' + esc(l.id) + '">' + esc(l.title || l.id) + '</a>' +
          '<span class="muted">wk ' + esc(l.week != null ? pad(l.week) : '\u2014') + ' &middot; ' + esc(l.id) + ' &middot; ' + (l.project ? ('project ' + esc(l.project)) : 'free week') + (l.checkpoint ? ' &middot; ' + esc(l.checkpoint) : '') + '</span>' +
        '</div>' +
        '<div class="listrow__actions">' +
          '<a class="btn btn--ghost" href="#/admin/lessons/' + esc(l.id) + '">Edit</a>' +
          '<button class="btn btn--ghost" type="button" data-del="' + esc(l.id) + '">Delete</button>' +
        '</div>' +
      '</li>'
    );
  }).join('');

  const html = (
    '<section class="admin-edit" aria-labelledby="lessons-title">' +
      '<header class="admin-edit__head">' +
        '<h1 id="lessons-title" class="anim-rise" style="--i:0">Lessons</h1>' +
        '<p class="muted anim-rise" style="--i:1">14 weeks. Edit a lesson, add one, or delete one. Edits are in-memory until you Save (server) or Export (always).</p>' +
        '<div class="admin-edit__toolbar anim-rise" style="--i:1">' +
          '<button class="btn btn--primary" type="button" data-add-lesson>+ Add lesson</button>' +
          '<button class="btn btn--ghost" type="button" data-export="lessons">Export lessons</button>' +
        '</div>' +
      '</header>' +
      '<ol class="list">' + (rows || '<li class="list__empty">No lessons yet.</li>') + '</ol>' +
      saveBar('lessons', '#/admin', 'Back to dashboard') +
    '</section>'
  );

  const view = (typeof document !== 'undefined') ? document.getElementById('view') : null;
  if (view) {
    view.innerHTML = html;
    wireForm(view, { name: 'lessons', getRecord: function () { return {}; }, reRender: function () { renderLessonsIndex(); }, onChange: updateStatus });
    wireOnce(view, 'index', { click: function (e) {
      const t = e.target;
      if (!t || !t.closest) return;
      const addBtn = t.closest('[data-add-lesson]');
      if (addBtn) {
        e.preventDefault();
        const list = AdminData.get('lessons') || [];
        const idInfo = nextLessonId(list);
        const blank = {
          id: idInfo.id, week: idInfo.week, date: '', project: '', title: 'New lesson',
          oneConcept: '', checkpoint: '', checkpointIsDelivery: false, source: '',
          beats: { retrievalHook: '', oneNewConcept: '', guidedMaking: '', check: '', reflect: '', revisit: '' },
          furtherReading: [], media: { before: [], after: [] }, order: list.length + 1,
        };
        list.push(blank);
        Router.go('#/admin/lessons/' + idInfo.id);
        return;
      }
      const delBtn = t.closest('[data-del]');
      if (delBtn) {
        e.preventDefault();
        const id = delBtn.getAttribute('data-del');
        confirmDialog('Delete lesson "' + id + '"? This removes it from the in-memory store. Save (or Export) to make it permanent.', { title: 'Delete lesson?', danger: true, okLabel: 'Delete' })
          .then(function (ok) {
            if (!ok) return;
            const list = AdminData.get('lessons') || [];
            const idx = list.findIndex(function (l) { return l.id === id; });
            if (idx >= 0) list.splice(idx, 1);
            renderLessonsIndex();
            toast('Deleted ' + id + '.', 'info');
          });
      }
    } });
  }
  return null;
}

/* ---- Edit one lesson ----------------------------------------------------- */

export function renderLessonEdit(params, query) {
  const id = params && params.id;
  const view = (typeof document !== 'undefined') ? document.getElementById('view') : null;
  if (!view) return null;

  const lessons = AdminData.get('lessons') || [];
  const rec = lessons.find(function (l) { return l.id === id; });
  if (!rec) { view.innerHTML = notFound('Lesson', 'id ' + id); return null; }

  const html = (
    '<section class="admin-edit" aria-labelledby="lesson-edit-title">' +
      '<header class="admin-edit__head">' +
        '<h1 id="lesson-edit-title" class="anim-rise" style="--i:0">Lesson &middot; ' + esc(rec.id) + '</h1>' +
        '<p class="muted anim-rise" style="--i:1">' + esc(rec.title) + (rec.checkpoint ? ' &middot; checkpoint ' + esc(rec.checkpoint) : '') + '</p>' +
      '</header>' +
      '<div class="admin-edit__body anim-rise" style="--i:1">' +
        renderForm(LESSON_SCHEMA, rec, null, null) +
      '</div>' +
      saveBar('lessons', '#/admin/lessons', 'Back to lessons') +
    '</section>'
  );

  view.innerHTML = html;
  wireForm(view, {
    name: 'lessons',
    schema: LESSON_SCHEMA,
    getRecord: function () { return lessons.find(function (l) { return l.id === id; }); },
    reRender: function () { renderLessonEdit(params); },
    onChange: updateStatus,
  });
  return null;
}

export default { renderLessonsIndex, renderLessonEdit, LESSON_SCHEMA };
