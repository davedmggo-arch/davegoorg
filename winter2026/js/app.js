/* ==========================================================================
   Seneca 3D Integration - app.js
   ES-module entry for the student app. Loads the core (Router, Data,
    Markdown, State), seeds LOCAL student progress from the data/progress.json
    shape, registers the student views (dashboard, lesson, and the Phase 2b
     lookup views: glossary, research, projects, reference), wires the
     mark-read / reflect actions and the dashboard dropdowns, and boots.

   Model: content is READ-ONLY from data.* (shared seed); the student's
   progress lives in localStorage via State and never touches the JSON files.
   ========================================================================== */

import Router from './core/router.js';
import Data from './core/data-loader.js';
import State from './core/state.js';
import Markdown from './core/markdown.js';
import Media from './core/media.js';
import { render as renderDashboard } from './views/dashboard.js';
import { render as renderLesson } from './views/lesson.js';
import { render as renderGlossary, renderDetail as glossaryDetail } from './views/glossary.js';
import { render as renderResearch, renderDetail as researchDetail } from './views/research.js';
import { render as renderProjects, renderDetail as projectsDetail } from './views/projects.js';
import { render as renderReference, renderDetail as referenceDetail } from './views/reference.js';
  import { render as renderShortcuts, mountRail as mountShortcutsRail } from './views/shortcuts.js';
  import { mountRailSection as mountChecklistRail, toggle as toggleCheck, clearAll as clearChecklist } from './views/artistic-checklist.js';
  import { mountRail as mountDownloadsRail } from './views/downloads.js';
  import { mountRail as mountProjectAResearchRail } from './views/project-a-research.js';
  import { mountRail as mountWeeklyGuideRail, fetchGuide, wireGuideLightbox } from './views/weekly-guide.js';
  import { wireSection } from './views/rail-section.js';
  import { wireRailLightbox } from './core/rail-lightbox.js';
import { esc, formatDate, pad } from './views/shared.js';

// Set the moment the module loads (before any await) so the file:// fallback
// guard in index.html is a guaranteed no-op in every working path.
if (typeof window !== 'undefined') window.__SENECA_BOOTED = true;

/* ---- Student actions (delegated; survives view re-renders) -------------- */

function syncActionButtons(lessonId) {
  if (typeof document === 'undefined' || !document.querySelectorAll) return;
  const wp = (State.progress.get().weeks || {})[lessonId] || {};
  document.querySelectorAll('[data-lesson="' + lessonId + '"]').forEach((btn) => {
    const action = btn.getAttribute('data-action');
    const done = action === 'mark-read' ? !!wp.read : !!wp.reflected;
    btn.setAttribute('aria-pressed', done ? 'true' : 'false');
    btn.classList.toggle('is-done', done);
    const label = btn.querySelector('.action__label');
    if (label) label.textContent = done
      ? (action === 'mark-read' ? 'Marked as read' : 'Reflection logged')
      : (action === 'mark-read' ? 'Mark as read' : 'Reflect');
  });
}

function onActionClick(e) {
  const t = e.target;
  const btn = t && t.closest ? t.closest('[data-action]') : null;
  if (!btn) return;
  const action = btn.getAttribute('data-action');
  const id = btn.getAttribute('data-lesson');
  if (!id) return;
  if (action === 'mark-read') State.progress.markRead(id);
  else if (action === 'reflect') State.progress.reflect(id);
  syncActionButtons(id);
}

// Week nav (Last / This / Next): a single delegated click handler navigates to
// the button's data-goto lesson hash. Disabled buttons have no data-goto, so
// they are inert by construction.
function onWeekNavClick(e) {
  const t = e && e.target;
  const btn = t && t.closest ? t.closest('[data-goto]') : null;
  if (!btn) return;
  const to = btn.getAttribute('data-goto');
  if (!to || typeof location === 'undefined') return;
  location.hash = to;
}

// Projects dropdown: a single delegated change handler navigates to the
// selected project's view, then resets the select so a fresh choice re-fires.
function onProjectSelect(e) {
  const sel = e && e.target && e.target.id === 'dash-projects-select' ? e.target : null;
  if (!sel) return;
  const to = sel.value;
  if (!to || typeof location === 'undefined') return;
  location.hash = to;
  sel.value = '';
}

// Lessons dropdown: a single delegated change handler navigates to the
// selected lesson's view, then resets the select so a fresh choice re-fires.
function onLessonSelect(e) {
  const sel = e && e.target && e.target.id === 'dash-lessons-select' ? e.target : null;
  if (!sel) return;
  const to = sel.value;
  if (!to || typeof location === 'undefined') return;
  location.hash = to;
  sel.value = '';
}

// Nav dropdowns (Lessons + Projects in top/bottom header nav): a single
// delegated change handler on [data-nav-select] navigates then resets.
function onNavSelectChange(e) {
  const t = e && e.target;
  if (!t || !t.closest || !t.closest('[data-nav-select]')) return;
  const sel = t.closest('[data-nav-select]');
  const to = sel.value;
  if (!to || typeof location === 'undefined') return;
  location.hash = to;
  sel.value = '';
}

// Round 2.7: Artistic Checklist cross-off (rail + page) + the Clear buttons.
// A native checkbox `change` toggles the id in the module state; a Clear button
// (rail or page) wipes all. Both are delegated at the document level so they
// survive view re-renders. State is in-memory only (no persistence).
function onChecklistChange(e) {
  const t = e && e.target;
  if (!t || t.tagName !== 'INPUT' || t.type !== 'checkbox') return;
  const id = t.getAttribute('data-ac-id');
  if (!id) return;
  toggleCheck(id);
}

function onChecklistClear(e) {
  const t = e && e.target;
  if (!t || !t.closest) return;
  if (t.closest('[data-ac-clear]')) clearChecklist();
}

/* ---- Nav + view helpers -------------------------------------------------- */

function highlightActive() {
  if (typeof document === 'undefined' || !document.querySelectorAll) return;
  const path = Router.getPath() || '/';
  document.querySelectorAll('[data-route]').forEach((a) => {
    const r = a.getAttribute('data-route');
    let on = path === r;
    if (r === '/dashboard') on = on || path === '/';
    if (r === '/lessons') on = on || path.indexOf('/lessons/') === 0;
    a.classList.toggle('active', on);
  });
}

function lessonsIndex(lessons) {
  const rows = (lessons || []).map((l, i) =>
    '<li class="roadmap__node anim-rise" style="--i:' + (i + 1) + '">' +
      '<a class="week" href="#/lessons/' + esc(l.id) + '">' +
        '<span class="week__num" aria-hidden="true">' + pad(l.week) + '</span>' +
        '<span class="week__main"><span class="week__date">' + esc(formatDate(l.date)) + '</span>' +
        '<span class="week__title">' + esc(l.title) + '</span></span>' +
        '<span class="week__go" aria-hidden="true">&#8594;</span>' +
      '</a>' +
    '</li>'
  ).join('');
  return (
    '<section aria-label="All lessons">' +
      '<h1 class="anim-rise" style="--i:0">Lessons</h1>' +
      '<p class="muted anim-rise" style="--i:0">All 14 weeks, in order. Week 08 is the Study Week buffer.</p>' +
      '<ol class="roadmap">' + rows + '</ol>' +
    '</section>'
  );
}

function teacherShell() {
  return (
    '<section class="anim-fade" aria-label="Teacher console">' +
      '<h1 class="anim-rise" style="--i:0">Teacher console</h1>' +
      '<div class="empty anim-rise" style="--i:1" role="note">' +
        '<div class="empty__title">Open the teacher console</div>' +
        '<p class="empty__hint">Edit the course and its lessons, glossary, projects, research and reference, with save / import / export. It is a separate page: teacher.html.</p>' +
        '<p class="mt-4"><a class="btn btn--primary" href="teacher.html">Open teacher.html</a></p>' +
      '</div>' +
    '</section>'
  );
}

/* ---- Weekly guide rail updater ------------------------------------------- */

function updateWeeklyGuideSection(guideData) {
  if (typeof document === 'undefined') return;
  const section = document.getElementById('wg-section');
  if (!section) return;

  if (!guideData) {
    /* Empty shell: show section with no guide content. */
    var title = 'Weekly Guide';
    section.innerHTML =
      '<button type="button" class="sc-rail__toggle" aria-expanded="false" aria-controls="wg-panel">' +
        '<span class="sc-rail__title">' + title + '</span>' +
        '<span class="sc-rail__chev" aria-hidden="true">&#8250;</span>' +
      '</button>' +
      '<div class="sc-rail__panel" id="wg-panel">' +
        '<label class="sc-rail__sr" for="wg-search">Filter Weekly Guide</label>' +
        '<input class="sc-rail__search" id="wg-search" type="search" placeholder="Filter weekly guide" aria-label="Filter Weekly Guide" autocomplete="off" />' +
        '<nav class="sc-rail__nav" aria-label="Guide sections">' +
          '<li class="sc-rail__empty">Open a lesson to see the weekly guide.</li>' +
        '</nav>' +
      '</div>';
  } else {
    /* Populated guide with accordion sections. */
    var sec = guideData.sections || [];
    var stepsHtml, hotkeysHtml, expectHtml, sectionBlock;
    var stepsLi = function(step, idx) {
      return '<li class="wg-step" data-step="' + idx + '">' + step + '</li>';
    };
    var hotkeyRow = function(h, sectionId) {
      var imgHtml = '';
      if (h.imageUrl && h.imageUrl.trim()) {
        imgHtml =
          '<div class="wg-thumb" data-lg-img="' + h.imageUrl + '" ' +
            'data-lg-cap="' + (h.description || '') + '" tabindex="0" ' +
            'aria-label="View image: ' + (h.description || '') + '">' +
            '<div class="wg-thumb__frame">' +
              '<img class="wg-thumb__img" src="' + h.imageUrl + '" alt="' + (h.description || '') + '" loading="lazy" />' +
            '</div>' +
            '<span class="wg-thumb__cap">' + (h.description || '') + '</span>' +
          '</div>';
      }
      return (
        '<div class="wg-hotkey sc-rail__row" data-hk-id="' + sectionId + '-' + (h.key || '') + '">' +
          '<kbd class="wg-kbd">' + h.key + '</kbd>' +
          '<span class="wg-hotkey__action">' + (h.action || '') + '</span>' +
          (h.description ? '<span class="wg-hotkey__desc">' + h.description + '</span>' : '') +
          imgHtml +
        '</div>'
      );
    };
    sectionBlock = function(s) {
      stepsHtml = s.steps && s.steps.length ? '<ol class="wg-steps">' + s.steps.map(function(st, i) { return stepsLi(st, i); }).join('') + '</ol>' : '';
      hotkeysHtml = s.hotkeys && s.hotkeys.length ? '<div class="wg-hotkeys">' + s.hotkeys.map(function(hk) { return hotkeyRow(hk, s.id); }).join('') + '</div>' : '';
      expectHtml = s.expectations ? '<blockquote class="wg-expect">' + s.expectations + '</blockquote>' : '';
      return (
        '<details class="wg-section sc-rail__group" data-sec="' + s.id + '">' +
          '<summary class="wg-section__summary">' + s.title + '</summary>' +
          '<div class="wg-section__panel">' +
            (s.description ? '<p class="wg-lead">' + s.description + '</p>' : '') +
            stepsHtml + hotkeysHtml + expectHtml +
          '</div>' +
        '</details>'
      );
    };
    var sectionsHtml = sec.map(function(s) { return sectionBlock(s); }).join('');
    var nc = guideData.namingConventions || null;
    var ncHtml = '';
    if (nc) {
      var prefixRows = nc.blenderPrefixes && nc.blenderPrefixes.length
        ? nc.blenderPrefixes.map(function(p) {
            return '<div class="wg-nc__row"><code class="wg-nc__code">' + p.prefix + '</code><span class="wg-nc__desc">' + p.meaning + '</span></div>';
          }).join('')
        : '';
      ncHtml =
        '<details class="wg-section wg-section--nc sc-rail__group" data-sec="naming-conventions">' +
          '<summary class="wg-section__summary">Naming Conventions</summary>' +
          '<div class="wg-section__panel">' +
            '<div class="wg-nc">' +
              (nc.renderExtension ? '<p class="wg-nc__rule"><strong>Render format:</strong> ' + nc.renderExtension + '</p>' : '') +
              (nc.fileFormat ? '<p class="wg-nc__rule"><strong>File name:</strong> <code class="wg-nc__code">' + nc.fileFormat + '</code></p>' : '') +
              (prefixRows ? '<div class="wg-nc__prefixes">' + prefixRows + '</div>' : '') +
            '</div>' +
          '</div>' +
        '</details>';
    }
    section.innerHTML =
      '<button type="button" class="sc-rail__toggle" aria-expanded="false" aria-controls="wg-panel">' +
        '<span class="sc-rail__title">' + (guideData.title || 'Weekly Guide') + '</span>' +
        '<span class="sc-rail__chev" aria-hidden="true">&#8250;</span>' +
      '</button>' +
      '<div class="sc-rail__panel" id="wg-panel">' +
        '<label class="sc-rail__sr" for="wg-search">Filter Weekly Guide</label>' +
        '<input class="sc-rail__search" id="wg-search" type="search" placeholder="Filter weekly guide" aria-label="Filter Weekly Guide" autocomplete="off" />' +
        '<nav class="sc-rail__nav" aria-label="Guide sections">' +
          (sectionsHtml || '<li class="sc-rail__empty">No guide for this week.</li>') +
          ncHtml +
          '<p class="sc-rail__nomatch" hidden>Nothing matches your filter.</p>' +
        '</nav>' +
      '</div>';
  }

  /* Re-wire rail-section interactions for the freshly injected DOM.
     Clear the data-wired guard so wireSection does not skip on re-use. */
  section.removeAttribute('data-wired');
  wireSection(section, {});
  wireGuideLightbox(section);
}

/* ---- Boot ---------------------------------------------------------------- */

async function boot() {
  const [course, lessons, projects, research, reference, glossary, shortcuts, checklist, downloads, progressSeed] =
    await Promise.all([
      Data.get('course'),
      Data.get('lessons'),
      Data.get('projects'),
      Data.get('research'),
      Data.get('reference'),
      Data.get('glossary'),
      Data.get('shortcuts'),
      Data.get('checklist'),
      Data.get('downloads'),
      Data.get('progress'),
    ]);

  // Seed LOCAL student progress once, from the data/progress.json shape, only
  // if this device has no saved progress yet. Content stays read-only.
  if (!State.get('progress')) {
    const seed = (progressSeed && typeof progressSeed === 'object') ? progressSeed : {};
    State.set('progress', Object.assign({
      student: { name: '', id: '' },
      xp: { total: 0, perCheckpoint: 250, perReflect: 25, perLessonRead: 10 },
      weeks: {},
      projects: {},
    }, seed));
  }

  const dash = () => renderDashboard(course, projects);
  const lesson = (p) => renderLesson((lessons || []).find((l) => l.id === p.id), lessons);

  // Populate nav dropdowns with loaded lessons/projects data.
  function populateNavSelects() {
    if (typeof document === 'undefined' || !document.querySelectorAll) return;
    const selLessons = document.querySelectorAll('[data-nav-select][data-route="/lessons"]');
    const selProjects = document.querySelectorAll('[data-nav-select][data-route="/projects"]');
    (lessons || []).forEach((l) => {
      selLessons.forEach((sel) => {
        const opt = document.createElement('option');
        opt.value = '#/lessons/' + l.id;
        opt.textContent = 'Week ' + pad(l.week);
        sel.appendChild(opt);
      });
    });
    (projects || []).forEach((p) => {
      selProjects.forEach((sel) => {
        const opt = document.createElement('option');
        opt.value = '#/projects/' + p.id;
        opt.textContent = 'Project ' + p.id.toUpperCase();
        sel.appendChild(opt);
      });
    });
  }

  populateNavSelects();

  Router.route('/', dash, { default: true });
  Router.route('/dashboard', dash);
  Router.route('/lessons', () => lessonsIndex(lessons));
  Router.route('/lessons/:id', lesson);
  Router.route('/teacher', teacherShell);

  // Phase 2b student lookup views (read-only content).
  Router.route('/glossary', () => renderGlossary(glossary));
  Router.route('/glossary/:id', (p) =>
    glossaryDetail((glossary || []).find((r) => r.id === p.id), glossary));
  Router.route('/research', () => renderResearch(research));
  Router.route('/research/:id', (p) =>
    researchDetail((research || []).find((r) => r.id === p.id), research));
  Router.route('/projects', () => renderProjects(projects, course));
  Router.route('/projects/:id', (p) =>
    projectsDetail((projects || []).find((r) => r.id === p.id), projects));
  Router.route('/reference', () => renderReference(reference, course));
  Router.route('/reference/:id', (p) =>
    referenceDetail((reference || []).find((r) => r.id === p.id), reference));

  // Phase 2c: the Blender shortcuts surface (rail is mounted once below).
  Router.route('/shortcuts', () => renderShortcuts(shortcuts));

  // Round 2.9 (102): the Artistic Checklist + Design Principles student pages
  // were removed - both are now fully in the persistent rail (mounted once
  // below). A bookmarked #/artistic-checklist or #/design-principles now falls
  // through to the default (dashboard) route - graceful, no hard 404.

  if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('route:change', () => {
      if (typeof window.scrollTo === 'function') window.scrollTo(0, 0);
    });
    if (typeof document !== 'undefined' && document.addEventListener) {
      document.addEventListener('click', onActionClick);
      document.addEventListener('click', onWeekNavClick);
      document.addEventListener('change', onProjectSelect);
      document.addEventListener('change', onLessonSelect);
      document.addEventListener('change', onNavSelectChange);
      document.addEventListener('change', onChecklistChange);
      document.addEventListener('click', onChecklistClear);
      if (Media && Media.attach) Media.attach();
    }
    window.addEventListener('route:change', highlightActive);

    // Weekly Guide rail: fetch guide data when a lesson route activates.
    window.addEventListener('route:change', async function () {
      var path = Router.getPath();
      if (!path || path.indexOf('/lessons/') !== 0) {
        updateWeeklyGuideSection(null);
        return;
      }
      var weekId = path.split('/')[2];
      try {
        var guide = await fetchGuide(weekId);
        updateWeeklyGuideSection(guide);
      } catch (e) {
        updateWeeklyGuideSection(null);
      }
    });

    // Project A Research rail: mounted once at boot (static content,
    // no per-lesson update needed).
  }

  // Mount the persistent rail sections ONCE (independent of the router):
  // Shortcuts, then the unified Checklist (merged submission + design +
  // artistic + project). Also wire the optional image-lightbox trigger
  // handler once (idempotent; capture-phase so a trigger click does not
  // also fire a shortcut jump or a checklist toggle).
  if (typeof document !== 'undefined') {
    mountShortcutsRail(shortcuts);
    mountChecklistRail(checklist);
    mountDownloadsRail(downloads);
    mountProjectAResearchRail(research);
    mountWeeklyGuideRail(null);
    wireRailLightbox();

    // Sidebar toggle: show/hide the entire rail. Main content stays centered
    // regardless of sidebar state; the rail overlaps on the right when visible.
    var expandBtn = document.getElementById('rail-expand-btn');
    var rail = document.getElementById('shortcuts-rail');
    if (expandBtn && rail) {
      expandBtn.addEventListener('click', function () {
        var collapsed = rail.classList.toggle('is-collapsed');
        expandBtn.classList.toggle('is-rail-collapsed', collapsed);
      });
    }
  }

  Router.start();
  highlightActive();

  if (typeof window !== 'undefined') {
    window.Router = Router;
    window.Data = Data;
    window.State = State;
    window.Markdown = Markdown;
  }
}

boot().catch((err) => {
  if (typeof console !== 'undefined') console.error('[boot] failed:', err);
  if (typeof document !== 'undefined') {
    const v = document.getElementById && document.getElementById('view');
    if (v) v.innerHTML = '<div class="empty"><div class="empty__title">Boot error</div>' +
      '<p class="empty__hint">' + esc(err && err.message) + '</p></div>';
  }
});

export { boot };
