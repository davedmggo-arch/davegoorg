/* ==========================================================================
   views/research.js - Phase 2b student Research views (list + detail).

   7 reports. List is a responsive grid of cards (title, date, status, tags,
   truncated summary, Read link). Detail renders title/date/status, summary,
   tags, the full markdown body (Markdown.render, safe), and a Sources list of
   safe <a> links. All content is read-only - no writes to shared data.
   ========================================================================== */
import Markdown from '../core/markdown.js';
import { mediaList } from '../core/media.js';
import { esc, formatDate, splitCsv, safeHref, notFound } from './shared.js';

// Round 1 media (2b): `media` block on the record; before -> above the body,
// after -> below it. Absent/empty -> '' (page byte-identical to pre-media seed).
function mediaFor(rec) {
  const before = (rec && rec.media && rec.media.before) || [];
  const after = (rec && rec.media && rec.media.after) || [];
  const gid = 'research-' + ((rec && rec.id) || 'x'); // unique per report
  return {
    before: before.length ? mediaList(before, gid, 0) : '',
    after: after.length ? mediaList(after, gid, before.length) : '',
  };
}

function tagChips(tags) {
  return (tags || []).map(function (t) { return '<span class="chip">' + esc(t) + '</span>'; }).join('');
}

function summaryText(s, max) {
  const t = String(s || '').replace(/\s+/g, ' ').trim();
  if (!t) return '';
  return t.length > max ? t.slice(0, max).replace(/\s+\S*$/, '') + '...' : t;
}

function sortByDateDesc(a, b) {
  const da = a.date || '', db = b.date || '';
  if (da === db) return (a.order || 0) - (b.order || 0);
  return da < db ? 1 : -1;
}

export function render(list) {
  const items = (list || []).slice().sort(sortByDateDesc);

  const cards = items.map(function (r, i) {
    const summary = summaryText(r.summary, 160);
    return (
      '<article class="card rcard anim-rise" style="--i:' + (i + 1) + '" aria-label="' + esc(r.title) + '">' +
        '<div class="rcard__top">' +
          '<h2 class="rcard__title">' + esc(r.title) + '</h2>' +
          '<span class="chip chip--accent">' + (r.date ? esc(formatDate(r.date)) : 'undated') + '</span>' +
        '</div>' +
        (r.status ? '<div class="rcard__status"><span class="chip">' + esc(r.status) + '</span></div>' : '') +
        '<div class="rcard__tags">' + tagChips(r.tags) + '</div>' +
        (summary ? '<p class="rcard__sum">' + esc(summary) + '</p>' : '') +
        '<a class="btn btn--ghost rcard__link" href="#/research/' + esc(r.id) + '">Read</a>' +
      '</article>'
    );
  }).join('');

  return (
    '<section class="lookup" aria-labelledby="r-h">' +
      '<h1 id="r-h" class="anim-rise" style="--i:0">Research</h1>' +
      '<p class="muted anim-rise" style="--i:0">' +
        'The reading behind the course - ' + items.length + ' reports, newest first.</p>' +
      '<div class="grid grid--rcard">' + cards + '</div>' +
    '</section>'
  );
}

export function renderDetail(rec, list) {
  if (!rec || !rec.id) return notFound('Research report', 'That report is not in the seed.');

  const sources = rec.sources || [];

  const m = mediaFor(rec);

  let html =
    '<article class="detail">' +
      '<p class="detail__kicker anim-rise" style="--i:0">' +
        (rec.date ? esc(formatDate(rec.date)) : 'undated') +
        (rec.status ? ' &middot; ' + esc(rec.status) : '') +
      '</p>' +
      '<h1 class="anim-rise" style="--i:1">' + esc(rec.title) + '</h1>' +
      (rec.summary ? '<p class="detail__lead anim-rise" style="--i:1">' + Markdown.render(rec.summary) + '</p>' : '') +
      (rec.tags && rec.tags.length ? '<div class="detail__tags anim-rise" style="--i:2">' + tagChips(rec.tags) + '</div>' : '');

  if (m.before) html += '<div class="detail__media">' + m.before + '</div>';

  html += '<div class="detail__body md anim-rise" style="--i:2">' + Markdown.render(rec.body || '') + '</div>';

  if (m.after) html += '<div class="detail__media">' + m.after + '</div>';

  if (sources.length) {
    html +=
      '<section class="detail__sources anim-rise" style="--i:3"><h2>Sources</h2><ul>' +
        sources.map(function (s) {
          return '<li><a href="' + safeHref(s) + '" rel="noopener" target="_blank">' + esc(s) + '</a></li>';
        }).join('') +
      '</ul></section>';
  }

  html +=
    '<p class="detail__back anim-rise" style="--i:4">' +
      '<a class="btn btn--ghost" href="#/research">&#8592; Back to research</a></p>' +
    '</article>';

  return html;
}

export default { render, renderDetail };
