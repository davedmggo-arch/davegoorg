/* ==========================================================================
   views/reference.js - Phase 2b student Reference views (list + detail).

   7 quick-reference cheatsheets (navigation, modeling, lighting, materials,
   camera, rendering, file hygiene). Real record shape: id, title, covers,
   for[labels], body (markdown), source, order. The list is a responsive grid
   of cards (title, what it covers, the "for" labels). The detail shows the
   covers line, the "for" chips, and the markdown cheatsheet body (safe
   Markdown.render). Read-only - no writes to shared data.

    Phase 4: the list is split into labeled sections - "Blender-Related"
    (section !== "books") and "Books" (section === "books", teacher-authored).
    Book cards show the title (link out when a safe url is present), the author,
    a cover thumbnail (shared lightbox), and an optional markdown note. Empty
    sections show a subtle note - nothing is fabricated.

    Round 2 / R2-3: `render(list, course)` now iterates the resolved section
    list from views/reference-sections.js (teacher-defined order + labels via
    course.referenceSections, with a seeded fallback when absent). The `course`
    argument is optional; omitting it yields the exact legacy two-section output.
    ========================================================================== */
import Markdown from '../core/markdown.js';
import { mediaList } from '../core/media.js';
import { esc, notFound } from './shared.js';
import { resolveSections } from './reference-sections.js';

// Round 1 media (2b): `media` block on the record; before -> above the body,
// after -> below it. Absent/empty -> '' (page byte-identical to pre-media seed).
function mediaFor(rec) {
  const before = (rec && rec.media && rec.media.before) || [];
  const after = (rec && rec.media && rec.media.after) || [];
  const gid = 'reference-' + ((rec && rec.id) || 'x'); // unique per entry
  return {
    before: before.length ? mediaList(before, gid, 0) : '',
    after: after.length ? mediaList(after, gid, before.length) : '',
  };
}

function forChips(labels) {
  return (labels || []).map(function (t) { return '<span class="chip">' + esc(t) + '</span>'; }).join('');
}

/* ---- Phase 4: two-section list (Blender-Related + Books) ------------------ */

// A book title links out only when `url` is a safe http(s) link (same
// hardening rules as core/media.js). Anything else renders as plain text.
function safeLink(url) {
  const s = String(url == null ? '' : url).trim();
  if (!/^https?:\/\//i.test(s)) return '';
  if (/[\"<>`]/.test(s)) return '';
  if (/[\u0000-\u001f\u007f]/.test(s)) return '';
  return s;
}

function blenderCard(r, i) {
  return (
    '<article class="card xcard anim-rise" style="--i:' + (i + 1) + '" aria-label="' + esc(r.title) + '">' +
      '<h2 class="xcard__title">' + esc(r.title) + '</h2>' +
      (r.covers ? '<p class="xcard__note">' + esc(r.covers) + '</p>' : '') +
      (r.for && r.for.length ? '<div class="xcard__tags">' + forChips(r.for) + '</div>' : '') +
      '<a class="btn btn--ghost xcard__link" href="#/reference/' + esc(r.id) + '">Open cheatsheet</a>' +
    '</article>'
  );
}

function bookCard(r, i) {
  const link = safeLink(r.url);
  const title = link
    ? '<a href="' + esc(link) + '" target="_blank" rel="noopener noreferrer">' + esc(r.title) + '</a>'
    : esc(r.title);
  const before = (r.media && r.media.before) || [];
  const after = (r.media && r.media.after) || [];
  const gid = 'reference-' + (r.id || 'x'); // unique per entry (light-box group)
  return (
    '<article class="card xcard xcard--book anim-rise" style="--i:' + (i + 1) + '" aria-label="' + esc(r.title) + '">' +
      '<h2 class="xcard__title">' + title + '</h2>' +
      (r.author ? '<p class="xcard__author">by ' + esc(r.author) + '</p>' : '') +
      (before.length ? '<div class="xcard__media">' + mediaList(before, gid, 0) + '</div>' : '') +
      (r.body ? '<div class="xcard__note xcard__note--body md">' + Markdown.render(r.body) + '</div>' : '') +
      (after.length ? '<div class="xcard__media">' + mediaList(after, gid, before.length) + '</div>' : '') +
    '</article>'
  );
}

function sectionBlock(label, emptyText, items, cardFn) {
  const inner = items.length
    ? '<div class="grid grid--xcard">' + items.map(cardFn).join('') + '</div>'
    : '<p class="refsec__empty">' + emptyText + '</p>';
  return '<h2 class="refsec__h">' + esc(label) + '</h2>' + inner;
}

// Section id -> display empty-text. The two seeded ids keep their exact legacy
// strings (byte-stable for the canonical seed); any teacher-created section
// falls back to "No <Label> yet.". An entry with an empty/missing `section`
// is treated as blender-related so it is never hidden (non-destructive).
function emptyTextFor(id, label) {
  if (id === 'blender') return 'No Blender reference pages yet.';
  if (id === 'books') return 'No books yet.';
  return 'No ' + label + ' yet.';
}

function secOf(r) {
  return (r && r.section) ? r.section : 'blender';
}

export function render(list, course) {
  const items = (list || []).slice().sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
  const secs = resolveSections(course, items);
  const blocks = secs.map(function (s) {
    const inSec = items.filter(function (r) { return secOf(r) === s.id; });
    const cardFn = (s.id === 'books') ? bookCard : blenderCard;
    return sectionBlock(s.label, emptyTextFor(s.id, s.label), inSec, cardFn);
  }).join('');

  return (
    '<section class="lookup" aria-labelledby="x-h">' +
      '<h1 id="x-h" class="anim-rise" style="--i:0">Reference</h1>' +
      '<p class="muted anim-rise" style="--i:0">' +
        'Quick cheatsheets to keep beside your viewport - ' + items.length + ' pages.</p>' +
      blocks +
    '</section>'
  );
}

export function renderDetail(rec, list) {
  if (!rec || !rec.id) return notFound('Reference page', 'That cheatsheet is not in the seed.');

  let html =
    '<article class="detail">' +
      '<p class="detail__kicker anim-rise" style="--i:0">Reference</p>' +
      '<h1 class="anim-rise" style="--i:1">' + esc(rec.title) + '</h1>' +
      (rec.covers ? '<p class="detail__lead anim-rise" style="--i:1">' + esc(rec.covers) + '</p>' : '');

  if (rec.for && rec.for.length) {
    html += '<div class="detail__tags anim-rise" style="--i:1">' + forChips(rec.for) + '</div>';
  }

  const m = mediaFor(rec);
  if (m.before) html += '<div class="detail__media">' + m.before + '</div>';

  html += '<div class="detail__body md anim-rise" style="--i:2">' + Markdown.render(rec.body || '') + '</div>';

  if (m.after) html += '<div class="detail__media">' + m.after + '</div>';

  html += '<p class="detail__back anim-rise" style="--i:3">' +
    '<a class="btn btn--ghost" href="#/reference">&#8592; Back to reference</a></p>' +
    '</article>';

  return html;
}

export default { render, renderDetail };
