/* ==========================================================================
   Seneca 3D Integration - js/views/teacher-home.js
    The admin overview: a read-only snapshot of the course + the Import/Export
    panel + links into the editors (Course, Lessons, and the Phase 3b lookups -
    Glossary, Projects, Research, Reference) with live per-collection counts.

   Render model: build an HTML string, set it into #view, then wire the
   import/export buttons through admin-ui.wireForm (which understands
   data-export / data-export-all / data-import / data-import-file).
   ========================================================================== */

import AdminData from '../admin/admin-data.js';
import { esc, formatDate, pad, projectChip } from './shared.js';
import Markdown from '../core/markdown.js';
import { wireForm, toast } from '../admin/admin-ui.js';

function stat(label, value, cls) {
  return '<div class="stat' + (cls ? ' ' + cls : '') + '"><span class="stat__num">' + value + '</span><span class="stat__label">' + esc(label) + '</span></div>';
}

function buildHtml(course, lessons, online, counts) {
  counts = counts || {};
  const rules = Array.isArray(course.houseRules) ? course.houseRules : [];
  const projects = Array.isArray(course.projects) ? course.projects : [];
  const weeks = Array.isArray(course.weeks) ? course.weeks : [];
  const dirty = AdminData.dirty();

  const projRows = projects.map(function (p) {
    const d = (p && p.delivery) || {};
    return '<li class="homeproj">' +
      '<span class="homeproj__name">' + esc(p && p.name) + '</span>' +
      '<span class="muted">' + esc((p && p.weeksLabel) || (p && p.weeks ? p.weeks.map(pad).join('-') : '')) + '</span>' +
      '<span class="homeproj__go">delivers wk ' + esc(d && d.week != null ? pad(d.week) : '-') + '</span>' +
    '</li>';
  }).join('');

  const editors = [
    { href: '#/admin/course', label: 'Course', note: 'one object: identity, house rules, 3 projects, 14 weeks' },
    { href: '#/admin/lessons', label: 'Lessons', note: (lessons || []).length + ' lessons, each with the six beats + further reading' },
    { href: '#/admin/glossary', label: 'Glossary', note: (counts.glossary || 0) + ' terms, unique per category + anchor' },
    { href: '#/admin/projects', label: 'Projects', note: (counts.projects || 0) + ' deliverables: brief, rubric, checkpoints, guardrails' },
    { href: '#/admin/research', label: 'Research', note: (counts.research || 0) + ' reports: summary, body, tags, sources' },
    { href: '#/admin/reference', label: 'Reference', note: (counts.reference || 0) + ' pages: covers, applies-to, body' },
    { href: '#/admin/shortcuts', label: 'Shortcuts', note: (counts.shortcuts || 0) + ' shortcuts across 7 fixed categories' },
    { href: '#/admin/artistic-checklist', label: 'Artistic Checklist', note: (counts['artistic-checklist'] || 0) + ' check items across 7 fixed categories' },
    { href: '#/admin/design-principles', label: 'Principles & elements', note: (counts['design-principles'] || 0) + ' building blocks across 2 groups' },
  ].map(function (e) {
    return '<a class="edlink" href="' + esc(e.href) + '">' +
      '<span class="edlink__label">' + esc(e.label) + '</span>' +
      '<span class="edlink__note">' + esc(e.note) + '</span>' +
      '<span class="edlink__go">\u2192</span>' +
    '</a>';
  }).join('');

  const collOpts = AdminData.COLLECTIONS.map(function (n) {
    return '<option value="' + esc(n) + '">' + esc(n) + '</option>';
  }).join('');

  return (
    '<section class="admin-home" aria-labelledby="admin-home-title">' +
      '<header class="admin-home__head">' +
        '<h1 id="admin-home-title" class="anim-rise" style="--i:0">Teacher console</h1>' +
        '<p class="muted anim-rise" style="--i:1">Edit the course and its lessons. Save writes to <code>site/data/*.json</code> and regenerates <code>data.js</code>; Export/Import work even offline.</p>' +
        '<div class="admin-home__status anim-rise" style="--i:1">' +
          (online
            ? '<span class="chip chip--ok">server online &mdash; saving enabled</span>'
            : '<span class="chip chip--warn">offline (file://) &mdash; use Export to capture edits</span>') +
          (dirty.length ? '<span class="chip chip--accent">' + dirty.length + ' unsaved</span>' : '<span class="chip">no unsaved changes</span>') +
        '</div>' +
      '</header>' +

      '<section class="admin-home__card anim-rise" style="--i:1" aria-label="Course overview">' +
        '<h2 class="card__title">' + esc(course.title || 'Course') + '</h2>' +
        '<div class="grid grid--stats">' +
          stat('lessons', (lessons || []).length, 'stat--accent') +
          stat('weeks', weeks.length, '') +
          stat('projects', projects.length, '') +
          stat('house rules', rules.length, '') +
        '</div>' +
        (course.oneIdea ? '<div class="md home-oneidea">' + Markdown.render(course.oneIdea) + '</div>' : '') +
        (rules.length ? '<ul class="homerules">' + rules.map(function (r) { return '<li>' + esc(r) + '</li>'; }).join('') + '</ul>' : '') +
        '<h3 class="home-sub">Deliverables</h3>' +
        '<ul class="homeprojlist">' + (projRows || '<li class="muted">No projects defined.</li>') + '</ul>' +
        (course.studyWeek && course.studyWeek.label ? '<p class="muted mt-3">' + esc(course.studyWeek.label) + ': ' + esc(formatDate(course.studyWeek.start)) + ' \u2013 ' + esc(formatDate(course.studyWeek.end)) + (course.studyWeek.noGate ? ' (no gate)' : '') + '.</p>' : '') +
      '</section>' +

      '<section class="admin-home__card anim-rise" style="--i:2" aria-label="Editors">' +
        '<h2 class="card__title">Editors</h2>' +
        '<div class="edgrid">' + editors + '</div>' +
      '</section>' +

      '<section class="admin-home__card anim-rise" style="--i:3" aria-label="Import and export">' +
        '<h2 class="card__title">Import &amp; Export</h2>' +
        '<p class="muted">Export downloads JSON (works offline). Import pastes or uploads JSON into one collection, then Save (online) or Export (offline) to persist.</p>' +
        '<div class="io-actions">' +
          '<button class="btn btn--primary" type="button" data-export-all>Export all (bundle)</button>' +
          AdminData.COLLECTIONS.map(function (n) { return '<button class="btn btn--ghost" type="button" data-export="' + esc(n) + '">Export ' + esc(n) + '</button>'; }).join('') +
        '</div>' +
        '<div class="io-import">' +
          '<label class="field__label" for="import-target">Import into</label>' +
          '<select id="import-target" class="input input--select">' + collOpts + '</select>' +
          '<label class="field__label" for="import-text">Paste JSON</label>' +
          '<textarea id="import-text" class="input" rows="4" spellcheck="false" placeholder="{ ... } or [ ... ]"></textarea>' +
          '<div class="io-import__row">' +
            '<button class="btn btn--primary" type="button" data-import>Import pasted</button>' +
            '<label class="btn btn--ghost" data-import-file>Import from file<input type="file" accept="application/json,.json" hidden></label>' +
          '</div>' +
        '</div>' +
      '</section>' +
    '</section>'
  );
}

function updateStatus() {
  if (typeof window !== 'undefined' && window.__adminStatus) window.__adminStatus();
}

export function renderHome(params, query) {
  const course = AdminData.get('course') || {};
  const lessons = AdminData.get('lessons') || [];
  const online = AdminData.isServerOnline();
  const counts = {
    glossary: (AdminData.get('glossary') || []).length,
    projects: (AdminData.get('projects') || []).length,
    research: (AdminData.get('research') || []).length,
    reference: (AdminData.get('reference') || []).length,
    shortcuts: (AdminData.get('shortcuts') || []).length,
    'artistic-checklist': (AdminData.get('artistic-checklist') || []).length,
    'design-principles': (AdminData.get('design-principles') || []).length,
  };
  const view = (typeof document !== 'undefined') ? document.getElementById('view') : null;
  if (view) {
    view.innerHTML = buildHtml(course, lessons, online, counts);
    wireForm(view, {
      getRecord: function () { return {}; },
      reRender: function () { renderHome(); },
      onChange: updateStatus,
    });
  }
  return null;
}

export default { renderHome };
