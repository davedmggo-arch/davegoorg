/* ==========================================================================
   Seneca 3D Integration - views/dashboard.js
   The course home (#/ and #/dashboard). Pure string builder: it reads the
   shared data passed in by app.js plus the student's LOCAL progress from
   State (localStorage). Every dynamic string is escaped.

   Phase 4 (Round 2.10): hero (grading summary replaces old tilt bar) + ONE
   overall progress indicator + 3-button Week nav (Last / This / Next).
   Lessons and Projects selectors moved to the shared header bar.
   ========================================================================== */

import { esc, pad } from './shared.js';
import State from '../core/state.js';

/* tiltSegments removed (2.10+): the old 60/40 think/render bar no longer applies.
   Grading is now project-weighted (env 30%, prop 30%, narrative 40%) with a
   50/50 checkpoint/final split per project. The hero card shows this via text.
*/

// Coerce a week date (Date | ISO string | null) to a Date, or null if unusable.
function toDate(d) {
  if (d instanceof Date) return isNaN(d.getTime()) ? null : d;
  if (typeof d === 'string' && d) {
    const t = new Date(d);
    return isNaN(t.getTime()) ? null : t;
  }
  return null;
}

// Robust Last / This / Next mapping from course.weeks[].date relative to today.
// "This week" = the dated week whose date is CLOSEST to today (exact tie -> the
// earlier week). Before week 1 -> This=week 1, Last disabled; after the last
// week -> This=last, Next disabled. Last/Next are the adjacent weeks in
// course.weeks order. A node is {lessonId, week, title, disabled}; disabled is
// true when there is no adjacent week (button stays visible, aria-disabled).
export function weekNav(weeks, today) {
  const list = Array.isArray(weeks) ? weeks.slice() : [];
  const t = (today instanceof Date && !isNaN(today.getTime())) ? today.getTime() : Date.now();
  let thisIdx = -1, best = Infinity;
  for (let i = 0; i < list.length; i++) {
    const d = toDate(list[i].date);
    if (!d) continue;
    const diff = Math.abs(d.getTime() - t);
    if (diff < best) { best = diff; thisIdx = i; } // strict < keeps the earlier week on a tie
  }
  if (thisIdx === -1) thisIdx = Math.floor(list.length / 2); // no dates: land mid-course
  const at = (i) => (i >= 0 && i < list.length) ? list[i] : null;
  const node = (i) => {
    const w = at(i);
    return { lessonId: w ? w.lessonId : null, week: w ? w.week : null, title: w ? w.title : null, disabled: !w };
  };
  return { last: node(thisIdx - 1), thisWeek: node(thisIdx), next: node(thisIdx + 1) };
}

function hero(course) {
  const kicker = [course.institution, course.semester, course.classDay]
    .filter(Boolean).map(esc).join(' - ');
  const rules = (course.houseRules || []).map((r) =>
    '<li class="rules__item anim-rise" style="--i:5"><span class="rules__tick" aria-hidden="true">&#9656;</span>' + esc(r) + '</li>'
  ).join('');
  // Grading summary card (replaces old tilt bar; 2.10+ project-weighted grading).
  const gradingSummary = course.gradingTilt
    ? '<div class="grading-summary anim-rise" style="--i:3" role="note"><p class="grading-summary__title">How you are graded</p><p class="grading-summary__text">' + esc(course.gradingTilt) + '</p></div>'
    : '';
  // Optional teacher-set tagline under the hero idea (course.dashboard.tagline).
  const tagline = (course.dashboard && course.dashboard.tagline)
    ? '<p class="hero__tagline anim-rise" style="--i:4">' + esc(course.dashboard.tagline) + '</p>' : '';

  return (
    '<header class="hero">' +
      '<p class="hero__kicker anim-rise" style="--i:0">' + kicker + '</p>' +
      '<h1 class="hero__title anim-rise" style="--i:1">' + esc(course.title) + '</h1>' +
      '<p class="hero__idea anim-rise" style="--i:2">' + esc(course.oneIdea) + '</p>' +
      tagline +
      gradingSummary +
      '<p class="hero__lines anim-rise" style="--i:6">' + esc(course.threeLines) + '</p>' +
      '<ul class="rules" aria-label="House rules">' + rules + '</ul>' +
    '</header>'
  );
}

// The ONE overall progress indicator: current week + completion %, plus a
// Continue CTA (all local, this device). Gamification (XP / streak / badges)
// is intentionally NOT rendered here - display-layer removal only.
function progressCard(course, progress, thisWeek) {
  const weeks = course.weeks || [];
  const total = weeks.length;
  const wp = progress.weeks || {};
  let read = 0, reflected = 0, gates = 0, gatesPassed = 0;
  let next = null;
  for (const w of weeks) {
    const row = wp[w.lessonId];
    if (row && row.read) read++;
    if (row && row.reflected) reflected++;
    if (w.checkpoint) {
      gates++;
      if (row && row.checkpointStatus === 'passed') gatesPassed++;
    }
    if (!next && w.lessonId !== 'wk-08' && !(row && row.read)) next = w;
  }
  const pct = total ? Math.round((read / total) * 100) : 0;
  const onWeek = (thisWeek && thisWeek.week) ? ' - on Week ' + pad(thisWeek.week) : '';

  const cta = next
    ? '<a class="btn btn--primary prog__cta" href="#/lessons/' + esc(next.lessonId) + '">Continue - Week ' + pad(next.week) + ': ' + esc(next.title) + '</a>'
    : '<span class="chip chip--ok prog__cta">All ' + total + ' weeks read - pick any week from the Lessons menu</span>';

  return (
    '<section class="card prog anim-rise" style="--i:7" aria-label="Your progress (stored on this device)">' +
      '<div class="prog__row">' +
        '<div>' +
          '<div class="prog__big">' + read + ' of ' + total + ' weeks read (' + pct + '%)' + onWeek + '</div>' +
          '<p class="muted prog__sub">' + reflected + ' reflected - ' + gatesPassed + ' of ' + gates + ' checkpoints passed</p>' +
        '</div>' +
      '</div>' +
      '<p class="prog__note">Your progress is saved in this browser only and does not sync to a server.</p>' +
      '<div class="progress" role="progressbar" aria-valuenow="' + read + '" aria-valuemin="0" aria-valuemax="' + total + '" aria-label="Weeks read">' +
        '<div class="progress__fill" style="width:' + pct + '%"></div>' +
      '</div>' +
      '<div class="prog__cta-row">' + cta + '</div>' +
    '</section>'
  );
}

// Three keyboard-focusable buttons: Last week / This week / Next week.
// Enabled buttons carry data-goto="#/lessons/:id" (a delegated click handler
// in app.js navigates). Out-of-range buttons stay visible but disabled +
// aria-disabled (not clickable, not focusable).
function weekNavButtons(nav) {
  const mk = (label, item) => {
    const disabled = !!item.disabled;
    const to = (!disabled && item.lessonId) ? '#/lessons/' + item.lessonId : '';
    const attrs = disabled
      ? 'disabled aria-disabled="true"'
      : 'data-goto="' + esc(to) + '"';
    return (
      '<button type="button" class="btn wnav__btn anim-rise" style="--i:8" ' + attrs + '>' +
        '<span class="wnav__label">' + esc(label) + '</span>' +
        '<span class="wnav__week">' + (item.week ? 'Week ' + pad(item.week) : '') + '</span>' +
      '</button>'
    );
  };
  return (
    '<nav class="wnav" aria-label="Week navigation">' +
      '<div class="wnav__row">' +
        mk('Last week', nav.last) +
        mk('This week', nav.thisWeek) +
        mk('Next week', nav.next) +
      '</div>' +
    '</nav>'
  );
}

/* lessonsDropdown and projectsDropdown removed (2.10+): these selectors now
   live in the shared header/nav bar (index.html nav-lessons-select and
   nav-projects-select) rather than on the dashboard itself.
*/

export function render(course, projects, today) {
  const c = course || {};
  if (!c.id && !c.title) {
    return '<section class="empty anim-fade"><div class="empty__title">No course data</div>' +
      '<p class="empty__hint">data/course.json did not load. Run the site over http:// or regenerate the seed.</p></section>';
  }
  const progress = State.progress.get() || { weeks: {}, xp: { total: 0 } };
  const nav = weekNav(c.weeks || [], today || new Date());
  return (
    '<div class="dash">' +
      hero(c) +
      progressCard(c, progress, nav.thisWeek) +
      weekNavButtons(nav) +
    '</div>'
  );
}

export default { render, weekNav };
