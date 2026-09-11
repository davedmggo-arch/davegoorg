/* ==========================================================================
   Seneca 3D Integration - js/admin.js
   ES-module entry for the TEACHER admin (Phase 3a). Mirrors the student
   app.js: loads core (Router, Data via AdminData), the admin data store,
   the Course / Lessons editors and the overview, registers the admin routes,
   and boots. Sets window.__SENECA_BOOTED so the file:// guard in teacher.html
   is a guaranteed no-op.

   Routes:
     #/admin               overview + import/export + editor links (default)
     #/admin/course        Course editor (single object)
     #/admin/lessons       Lessons index (list + add/delete)
      #/admin/lessons/:id   Lesson editor (six beats + further reading)
      #/admin/glossary        Glossary index (bounded window) + per-term editor
      #/admin/glossary/:id    One term (markdown definition; unique per cat/anchor)
      #/admin/projects        Projects index (3) + per-project editor
      #/admin/projects/:id    One project (brief / rubric / checkpoints / guardrails)
      #/admin/research        Research index + per-report editor
      #/admin/research/:id    One report (summary / body / tags / sources)
      #/admin/reference       Reference index + per-page editor
      #/admin/reference/:id   One reference page (covers / for[] / body)
    ========================================================================== */

import Router from './core/router.js';
import AdminData from './admin/admin-data.js';
import { esc } from './views/shared.js';
import { renderHome } from './views/teacher-home.js';
import { renderCourse } from './views/teacher-course.js';
import { renderLessonsIndex, renderLessonEdit } from './views/teacher-lessons.js';
import { renderGlossaryIndex, renderGlossaryEdit } from './views/teacher-glossary.js';
import { renderProjectsIndex, renderProjectEdit } from './views/teacher-projects.js';
import { renderResearchIndex, renderResearchEdit } from './views/teacher-research.js';
import { renderReferenceIndex, renderReferenceEdit } from './views/teacher-reference.js';
import { renderShortcutsIndex, renderShortcutsEdit } from './views/teacher-shortcuts.js';
import { renderArtisticIndex, renderArtisticEdit } from './views/teacher-artistic-checklist.js';
import { renderPrinciplesIndex, renderPrinciplesEdit } from './views/teacher-design-principles.js';

// Set the moment the module loads (before any await), so the file:// guard in
// teacher.html can never false-positive in a working path.
if (typeof window !== 'undefined') window.__SENECA_BOOTED = true;

/* ---- Top-bar status (driven by the store's online/dirty state) ----------- */

function updateStatus() {
  if (typeof document === 'undefined') return;
  const status = document.getElementById('status');
  if (!status) return;
  const online = AdminData.isServerOnline();
  const dirty = AdminData.dirty();
  status.textContent = (online ? 'online' : 'offline') + (dirty.length ? (' \u00b7 ' + dirty.length + ' unsaved') : '');
  status.className = 'topbar__status ' + (online ? 'is-online' : 'is-offline') + (dirty.length ? ' is-dirty' : '');
}

function highlightActive() {
  if (typeof document === 'undefined' || !document.querySelectorAll) return;
  const path = Router.getPath() || '/';
  document.querySelectorAll('[data-route]').forEach(function (a) {
    const r = a.getAttribute('data-route');
    let on = path === r;
    if (r === '/admin') on = on || path.indexOf('/admin') === 0;
    if (r === '/admin/lessons') on = on || path.indexOf('/admin/lessons') === 0;
    a.classList.toggle('active', on);
  });
}

/* ---- Boot ---------------------------------------------------------------- */

async function boot() {
  // Load all seven collections into the in-memory store (fetch over http,
  // or the file:// data.js bootstrap; either way AdminData ends up populated).
  await AdminData.init();

  if (typeof window !== 'undefined') {
    window.__adminStatus = updateStatus;
    window.AdminData = window.AdminData || AdminData;
  }

  Router.route('/admin', renderHome, { default: true });
  Router.route('/admin/course', renderCourse);
  Router.route('/admin/lessons', renderLessonsIndex);
  Router.route('/admin/lessons/:id', renderLessonEdit);
  Router.route('/admin/glossary', renderGlossaryIndex);
  Router.route('/admin/glossary/:id', renderGlossaryEdit);
  Router.route('/admin/projects', renderProjectsIndex);
  Router.route('/admin/projects/:id', renderProjectEdit);
  Router.route('/admin/research', renderResearchIndex);
  Router.route('/admin/research/:id', renderResearchEdit);
  Router.route('/admin/reference', renderReferenceIndex);
  Router.route('/admin/reference/:id', renderReferenceEdit);
  Router.route('/admin/shortcuts', renderShortcutsIndex);
  Router.route('/admin/shortcuts/:id', renderShortcutsEdit);
  Router.route('/admin/artistic-checklist', renderArtisticIndex);
  Router.route('/admin/artistic-checklist/:id', renderArtisticEdit);
  Router.route('/admin/design-principles', renderPrinciplesIndex);
  Router.route('/admin/design-principles/:id', renderPrinciplesEdit);

  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('route:change', function () {
      updateStatus();
      highlightActive();
      if (typeof window.scrollTo === 'function') window.scrollTo(0, 0);
    });
  }

  Router.start();
  updateStatus();
  highlightActive();

  if (typeof window !== 'undefined') {
    window.Router = Router;
  }
}

boot().catch(function (err) {
  if (typeof console !== 'undefined') console.error('[admin boot] failed:', err);
  if (typeof document !== 'undefined') {
    const v = document.getElementById && document.getElementById('view');
    if (v) v.innerHTML = '<div class="empty"><div class="empty__title">Boot error</div>' +
      '<p class="empty__hint">' + esc(err && err.message) + '</p></div>';
  }
});

export { boot };
