/* ==========================================================================
   Seneca 3D Integration - views/lesson.js
   One lesson (#/lessons/:id). Pure string builder over lessons.json + the
   student's LOCAL progress (State). Beats are rendered through the safe
   Markdown.render. Student actions (mark read / reflect) are wired by
   app.js via event delegation on [data-action].
   ========================================================================== */

import Markdown from '../core/markdown.js';
import { mediaList } from '../core/media.js';
import { esc, formatDate, pad, projectChip } from './shared.js';
import State from '../core/state.js';

const BEATS = [
  ['retrievalHook', '01', "Today's Brief", 'A quick, low-stakes recap of last time, so the new idea has somewhere to land.'],
  ['oneNewConcept', '02', 'Class Details', 'The one idea everything this week is built on.'],
  ['guidedMaking', '03', "Today's Assignment", 'We make it together, step by step, in class.'],
  ['check', '04', 'Quick Check-In', 'A chance to show what is landing, and to fix anything that is not yet.'],
  ['reflect', '05', 'Checklist', 'Three honest lines, before you head out.'],
  ['revisit', '06', "What's Next", 'How this week fits into the weeks that follow.'],
];

/* Render a Grading Note card when the lesson data contains a gradingNote
   field (sourced from ## Grading Note sections in the lesson markdown).
   Appears right after the lesson header as a distinct, visible card. */
function gradingNote(lesson) {
  if (!lesson.gradingNote) return '';
  return (
    '<div class="grading-note anim-rise" style="--i:3" role="note">' +
      '<h2 class="grading-note__title">Grading Note</h2>' +
      '<div class="grading-note__body md">' + emphasizeDemo(Markdown.render(lesson.gradingNote)) + '</div>' +
    '</div>'
  );
}

function header(lesson, progress) {
  const kicker = 'Week ' + pad(lesson.week) + ' - ' + esc(formatDate(lesson.date));
  const wp = (progress.weeks || {})[lesson.id];
  const checkpoint = lesson.checkpoint
    ? lesson.checkpointIsDelivery
      ? '<div class="delivery anim-rise" style="--i:2" role="note">' +
          '<span class="delivery__flag">This is a delivery</span>' +
          '<p class="delivery__sub">' + esc(lesson.checkpoint) + ' - it counts. Bring the file, the evidence, and the thinking.</p>' +
        '</div>'
      : '<div class="checkpoint anim-rise" style="--i:2">' +
          '<span class="checkpoint__label">Checkpoint</span>' +
          '<span class="chip chip--accent">' + esc(lesson.checkpoint) + '</span>' +
          (wp && wp.checkpointStatus ? '<span class="chip">status: ' + esc(wp.checkpointStatus) + '</span>' : '') +
        '</div>'
    : '<div class="checkpoint checkpoint--none anim-rise" style="--i:2">' +
        '<span class="checkpoint__label">This week</span><span class="chip">no gate</span>' +
      '</div>';

  return (
    '<header class="lesson__head">' +
      '<p class="lesson__kicker anim-rise" style="--i:0">' + kicker + ' ' + projectChip(lesson.project) + '</p>' +
      '<h1 class="anim-rise" style="--i:1">' + esc(lesson.title) + '</h1>' +
      (lesson.oneConcept ? '<p class="lesson__concept anim-rise" style="--i:2">' + esc(lesson.oneConcept) + '</p>' : '') +
      checkpoint +
    '</header>'
  );
}

/* Top-level lesson media (before/after). Styled as Further Reading cards.
   The lesson data may carry a `media` block ({before:[],after:[]});
   before renders above the body, after below it.
   Absent/empty -> '' so the page is byte-identical to the pre-media seed. */
function lessonMedia(lesson) {
  const before = (lesson && lesson.media && lesson.media.before) || [];
  const after = (lesson && lesson.media && lesson.media.after) || [];
  if (!before.length && !after.length) return '';
  const gid = 'lesson-' + ((lesson && lesson.id) || 'x');
  return {
    before: before.length ? mediaList(before, gid, 0) : '',
    after: after.length ? mediaList(after, gid, before.length) : '',
  };
}

function beatMedia(media, prefix) {
  if (!media) return { before: '', after: '' };
  const before = media.before || [];
  const after = media.after || [];
  if (!before.length && !after.length) return { before: '', after: '' };
  const gid = 'g-' + prefix;
  return {
    before: mediaList(before, gid, 0),
    after: mediaList(after, gid, before.length),
  };
}

/* Post-process rendered beat HTML: make the STANDALONE "Today's Demo" label
   line stand out (it is the live in-class build). markdown.js escapes the
   apostrophe up-front, so a bare line renders as its own <p>Today&#39;s Demo</p>.
   Wrap ONLY that standalone paragraph (handoff 086 sec 5 / delta 4); other
   <strong> inside beat bodies are untouched. Pure string transform. */
function emphasizeDemo(html) {
  if (!html) return html;
  return String(html).replace(/<p>\s*(Today.{0,6}s Demo)\s*<\/p>/g, '<p class="today-demo"><strong>$1</strong></p>');
}

function beat(key, num, label, hint, md, before, after) {
  if (!md && !before && !after) return ''; // skip beats with no body AND no media
  return (
    '<section class="beat anim-rise" style="--i:' + (numIndex(num)) + '" aria-labelledby="beat-' + key + '">' +
      '<header class="beat__head">' +
        '<span class="beat__num" aria-hidden="true">' + num + '</span>' +
        '<div><h2 id="beat-' + key + '">' + esc(label) + '</h2>' +
        (hint ? '<p class="beat__hint">' + esc(hint) + '</p>' : '') + '</div>' +
      '</header>' +
      (before ? '<div class="beat__media">' + before + '</div>' : '') +
      (md ? '<div class="beat__body md">' + emphasizeDemo(Markdown.render(md)) + '</div>' : '') +
      (after ? '<div class="beat__media">' + after + '</div>' : '') +
    '</section>'
  );
}

// Guided-Making subsections (additive; rendered under the guidedMaking beat).
function guidedSectionHtml(sec, i) {
  const body = (sec.body && String(sec.body).trim() !== '') ? emphasizeDemo(Markdown.render(sec.body)) : '';
  const mb = (sec.media && sec.media.before) || [];
  const ma = (sec.media && sec.media.after) || [];
  const gid = 'gs' + i;
  const before = mb.length ? mediaList(mb, gid, 0) : '';
  const after = ma.length ? mediaList(ma, gid, mb.length) : '';
  return (
    '<section class="gs anim-rise" style="--i:2" aria-labelledby="gs-' + i + '">' +
      (before ? '<div class="gs__media">' + before + '</div>' : '') +
      (sec.title ? '<h3 class="gs__title" id="gs-' + i + '">' + esc(sec.title) + '</h3>' : '') +
      (body ? '<div class="gs__body md">' + body + '</div>' : '') +
      (after ? '<div class="gs__media">' + after + '</div>' : '') +
    '</section>'
  );
}

function guidedSectionsHtml(sections) {
  if (!Array.isArray(sections) || !sections.length) return '';
  return '<div class="gs-wrap">' + sections.map(guidedSectionHtml).join('') + '</div>';
}

function numIndex(num) {
  const i = parseInt(num, 10) - 1;
  return i > 0 ? i : 1;
}

function buffer(lesson) {
  return (
    '<section class="beat beat--buffer anim-rise" style="--i:1" role="note">' +
      '<header class="beat__head">' +
        '<span class="beat__num" aria-hidden="true">&#9711;</span>' +
        '<div><h2>Study Week - buffer</h2><p class="beat__hint">No gate, no deliverable. Use it where you need it.</p></div>' +
      '</header>' +
      '<div class="beat__body">' +
        (lesson.note ? '<p>' + esc(lesson.note) + '</p>' : '') +
        '<p class="muted">This is the term\u2019s breathing space. Catch up, iterate on the project you are on, or rest. Nothing is graded here.</p>' +
      '</div>' +
    '</section>'
  );
}

function furtherReading(lesson) {
  const items = lesson.furtherReading || [];
  if (!items.length) return '';
  const cards = items.map((b) =>
    '<article class="reading-card">' +
      '<p class="reading-card__book">' + esc(b.book || '') + '</p>' +
      (b.author ? '<p class="muted">' + esc(b.author) + '</p>' : '') +
      (b.chapter ? '<p class="reading-card__chapter">' + esc(b.chapter) + '</p>' : '') +
      (b.note ? '<p class="reading-card__note">' + esc(b.note) + '</p>' : '') +
    '</article>'
  ).join('');
  return (
    '<section class="further" aria-label="Further reading">' +
      '<h2 class="anim-rise" style="--i:6">Further reading</h2>' +
      '<p class="muted anim-rise" style="--i:6">The books the lesson points at - named so you can find the exact chapter.</p>' +
      '<div class="grid grid--read">' + cards + '</div>' +
    '</section>'
  );
}

function actions(lesson, progress) {
  const wp = (progress.weeks || {})[lesson.id] || {};

  const readCls = 'btn btn--primary action' + (wp.read ? ' is-done' : '');
  const readBtn =
    '<button type="button" class="' + readCls + '" data-action="mark-read" data-lesson="' + esc(lesson.id) + '"' +
    ' aria-pressed="' + (wp.read ? 'true' : 'false') + '">' +
    '<span class="action__label">' + (wp.read ? 'Marked as read' : 'Mark as read') + '</span>' +
    '</button>';
  const reflectBtn =
    '<button type="button" class="btn action" data-action="reflect" data-lesson="' + esc(lesson.id) + '"' +
    ' aria-pressed="' + (wp.reflected ? 'true' : 'false') + '">' +
    '<span class="action__label">' + (wp.reflected ? 'Reflection logged' : 'Reflect') + '</span>' +
    '</button>';

  return (
    '<section class="actions anim-rise" style="--i:7" aria-label="Your actions this week">' +
      '<h2 class="actions__title">Log this week</h2>' +
      '<p class="muted">Saved to this device only. The dashboard and the roadmap update when you come back.</p>' +
      '<div class="actions__row">' + readBtn + reflectBtn + '</div>' +
    '</section>'
  );
}

function nav(lesson, lessons) {
  const arr = (lessons || []).slice().sort((a, b) => (a.order || 0) - (b.order || 0));
  const i = arr.findIndex((l) => l.id === lesson.id);
  if (i === -1) return '';
  const prev = i > 0 ? arr[i - 1] : null;
  const next = i < arr.length - 1 ? arr[i + 1] : null;
  const cell = (l, dir) =>
    '<a class="btn lesson__navlink" href="#/lessons/' + esc(l.id) + '">' +
      '<span class="lesson__navdir">' + (dir === 'prev' ? '\u2190 Week ' : 'Week ') + pad(l.week) + (dir === 'prev' ? '' : ' \u2192') + '</span>' +
      '<span class="lesson__navtitle">' + esc(l.title) + '</span>' +
    '</a>';
  return (
    '<nav class="lesson__nav" aria-label="Previous and next lesson">' +
      (prev ? cell(prev, 'prev') : '<span></span>') +
      (next ? cell(next, 'next') : '<span></span>') +
    '</nav>'
  );
}

export function render(lesson, lessons) {
  if (!lesson || !lesson.id) {
    return (
      '<section class="empty anim-fade" role="note">' +
        '<div class="empty__title">Lesson not found</div>' +
        '<p class="empty__hint">That week is not in the seed. Head back to the roadmap.</p>' +
        '<p class="mt-4"><a class="btn btn--primary" href="#/">Back to the dashboard</a></p>' +
      '</section>'
    );
  }
  const progress = State.progress.get() || { weeks: {}, xp: {} };
  const lm = lessonMedia(lesson);

  const beatEls = BEATS.map((b) => {
    const key = b[0];
    const md = lesson.beats ? lesson.beats[key] : '';
    const bm = lesson.beatMedia && lesson.beatMedia[key] ? lesson.beatMedia[key].media : null;
    const m = beatMedia(bm, key);
    let out = beat(key, b[1], b[2], b[3], md, m.before, m.after);
    if (key === 'guidedMaking') {
      const gs = lesson.guidedSections ? guidedSectionsHtml(lesson.guidedSections) : '';
      if (gs) out = (out || '') + gs;
    }
    return out;
  });
  const beats = beatEls.filter(Boolean).join('');
  const isBuffer = beats === '' && (lesson.note || lesson.id === 'wk-08');

  return (
    '<article class="lesson">' +
      header(lesson, progress) +
      gradingNote(lesson) +
      (lm.before ? '<div class="lesson__media reading-card anim-rise" style="--i:3">' + lm.before + '</div>' : '') +
      (isBuffer ? buffer(lesson) : beats) +
      (lm.after ? '<div class="lesson__media reading-card anim-rise" style="--i:7">' + lm.after + '</div>' : '') +
      furtherReading(lesson) +
      (isBuffer ? '' : actions(lesson, progress)) +
      nav(lesson, lessons) +
    '</article>'
  );
}

export default { render };
