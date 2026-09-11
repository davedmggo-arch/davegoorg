/* ==========================================================================
   views/projects.js - Phase 2b student Projects views (list + detail).

   3 projects. Per the locked decision we render the FULLER projects.json names
   everywhere (e.g. "Project A - Environment / World Study"). Real record shape:
   id, name, world, weeks, deliveryWeek, deliveryDate, prompt, brief, rubric,
   guardrails[{tool,does,fallback}], deliverables[md], checkpoints[{id,week,
   name,body}], source, order. The list is a stacked list of cards; the detail
   renders every long-form field through the safe Markdown.render. Read-only -
   no writes to shared data.

   Round 3.11 overhaul:
   - Detail sections rendered as collapsible <details> accordions.
   - Duplicate content removed (brief already contains deliverables/checkpoints
     as narrative; structured lists remain for quick scanning).
   - Brief split on H2 headings, each section gets its own accordion.
   ========================================================================== */
import Markdown from '../core/markdown.js';
import { mediaList } from '../core/media.js';
import { esc, formatDate, notFound } from './shared.js';

// Round 1 media (2b): the record may carry a `media` block
// ({before:[],after:[]}); before renders above the body, after below it.
// Absent/empty -> both '' so the page is byte-identical to the pre-media seed.
function mediaFor(rec) {
  const before = (rec && rec.media && rec.media.before) || [];
  const after = (rec && rec.media && rec.media.after) || [];
  const gid = 'project-' + ((rec && rec.id) || 'x'); // unique per project
  return {
    before: before.length ? mediaList(before, gid, 0) : '',
    after: after.length ? mediaList(after, gid, before.length) : '',
  };
}

function weeksLabel(weeks) {
  const w = (weeks || []).slice().sort(function (a, b) { return a - b; });
  if (!w.length) return '';
  return 'Wk ' + w.join(', ');
}

function deliveryLabel(rec) {
  if (rec.deliveryDate) return 'Deliver Wk ' + (rec.deliveryWeek || '') + ' - ' + formatDate(rec.deliveryDate);
  if (rec.deliveryWeek) return 'Deliver Wk ' + rec.deliveryWeek;
  return '';
}

function mdBlock(md) {
  return '<div class="md">' + Markdown.render(md || '') + '</div>';
}

/* ---- Brief section split (same logic as before) -------------------------
   Splits a brief's markdown on H2 headings into distinct sections.
   Returns [{title, body}, ...]. If no H2 found, returns a single card with
   the full brief as body and a generic title. */
function splitBrief(md) {
  if (!md) return [];
  var lines = md.split('\n');
  var sections = [];
  var current = null;
  for (var i = 0; i < lines.length; i++) {
    var m = lines[i].match(/^##\s+(.+)$/);
    if (m) {
      if (current) sections.push({ title: current.title, body: current.body.join('\n') });
      current = { title: m[1].trim(), body: [] };
    } else if (current) {
      current.body.push(lines[i]);
    }
  }
  if (current) {
    var lastBody = current.body.join('\n').trim();
    if (lastBody) sections.push({ title: current.title, body: lastBody });
  }
  if (sections.length === 0) sections.push({ title: 'Project Brief', body: md });
  return sections;
}

/* ---- Accordion helper ---------------------------------------------------
   Renders a <details> accordion block. `open` controls default state.
   The brief hero section opens by default so the page doesn't feel empty. */
function accordion(id, title, body, open) {
  const summaryId = id + '-summary';
  const panelId = id + '-panel';
  const openAttr = open ? ' open' : '';
  return (
    '<details class="proj-accordion anim-rise' + openAttr + '" id="' + id + '">' +
      '<summary class="proj-accordion__summary" aria-expanded="' + (open ? 'true' : 'false') + '" id="' + summaryId + '">' +
        '<span class="proj-accordion__title">' + esc(title) + '</span>' +
        '<span class="proj-accordion__chev" aria-hidden="true">&#9654;</span>' +
      '</summary>' +
      '<div class="proj-accordion__panel" role="region" aria-labelledby="' + summaryId + '" id="' + panelId + '">' +
        body +
      '</div>' +
    '</details>'
  );
}

/* ---- List view (unchanged) ---------------------------------------------- */
export function render(list) {
  const items = (list || []).slice().sort(function (a, b) { return (a.order || 0) - (b.order || 0); });

  const cards = items.map(function (r, i) {
    const del = deliveryLabel(r);
    return (
      '<article class="card pcard anim-rise" style="--i:' + (i + 1) + '" aria-label="' + esc(r.name) + '">' +
        '<div class="pcard__top">' +
          '<h2 class="pcard__name">' + esc(r.name) + '</h2>' +
          '<span class="chip chip--accent">' + (del || 'ongoing') + '</span>' +
        '</div>' +
        '<p class="pcard__meta">' +
          (r.world ? esc(r.world) + ' &middot; ' : '') +
          (weeksLabel(r.weeks) || 'whole term') +
        '</p>' +
        '<a class="btn btn--ghost pcard__link" href="#/projects/' + esc(r.id) + '">View the brief</a>' +
      '</article>'
    );
  }).join('');

  return (
    '<section class="lookup" aria-labelledby="p-h">' +
      '<h1 id="p-h" class="anim-rise" style="--i:0">Projects</h1>' +
      '<p class="muted anim-rise" style="--i:0">' +
        'The three graded builds this term. The thinking is the grade, not the render.</p>' +
      '<div class="plist">' + cards + '</div>' +
    '</section>'
  );
}

/* ---- Detail view (overhauled with accordions, deduplicated) -------------- */
export function renderDetail(rec, list) {
  if (!rec || !rec.id) return notFound('Project', 'That project is not in the seed.');

  const del = deliveryLabel(rec);
  const deliverables = rec.deliverables || [];
  const checkpoints = rec.checkpoints || [];
  const guardrails = rec.guardrails || [];
  const m = mediaFor(rec);

  var html = '<article class="detail">' +
    '<p class="detail__kicker anim-rise" style="--i:0">' +
      (weeksLabel(rec.weeks) || 'Whole term') + ' &middot; ' + (del || 'ongoing') +
    '</p>' +
    '<h1 class="anim-rise" style="--i:1">' + esc(rec.name) + '</h1>' +
    (rec.world ? '<p class="detail__lead anim-rise" style="--i:1">' + esc(rec.world) + '</p>' : '');

  if (m.before) html += '<div class="detail__media">' + m.before + '</div>';

  /* ---- Accordion wrapper for all collapsible sections ------------------ */
  html += '<div class="proj-accordions">';

  /* Brief sections (split on H2): each becomes an accordion.
     Skip sections whose content is covered by the structured accordions
     (checkpoints, deliverables, rubric) or that are empty placeholders. */
  var skipTitles = ['grading rubric', 'deliverables', 'checkpoints', 'links and resources'];
  if (rec.brief) {
    var briefSections = splitBrief(rec.brief);
    for (var bi = 0; bi < briefSections.length; bi++) {
      var sec = briefSections[bi];
      var skip = skipTitles.some(function (t) { return sec.title.toLowerCase().indexOf(t) !== -1; });
      if (!skip) {
        var body = mdBlock(sec.body);
        html += accordion('brief-' + bi, sec.title, body, bi === 0);
      }
    }
  } else if (rec.prompt) {
    /* Legacy prompt field (backward compat). */
    html += accordion('brief-0', 'Project Brief', mdBlock(rec.prompt), true);
  }

  /* Rubric: always render the full rubric accordion from the structured data.
     The brief's "Grading Rubric" H2 section is now skipped above (it only
     contained a short reference paragraph, not the full rubric content). */
  if (rec.rubric) {
    html += accordion('rubric', 'Grading Rubric', mdBlock(rec.rubric), false);
  }

  /* Checkpoints: rendered from structured data (brief section skipped above). */
  if (checkpoints.length) {
    var cpHtml = '<ul class="proj-cp-list">' +
      checkpoints.map(function (c) {
        return '<li class="proj-cp-item">' +
          '<strong>' + esc(c.name || c.id) + '</strong> ' +
          '<span class="chip">Wk ' + (c.week != null ? c.week : '-') + '</span><br />' +
          Markdown.render(c.body || '') +
        '</li>';
      }).join('') +
    '</ul>';
    html += accordion('checkpoints', 'Checkpoints', cpHtml, false);
  }

  /* Deliverables: quick-scanning list from structured data (brief section skipped above). */
  if (deliverables.length) {
    var delHtml = '<ul class="proj-del-list">' +
      deliverables.map(function (d) { return '<li>' + Markdown.render(d) + '</li>'; }).join('') +
    '</ul>' +
    '<p class="muted" style="margin-top:var(--sp-2);font-size:var(--fs-sm)">' +
      'Not required: animation, texture-baking, or a game-ready asset.</p>' +
    '';
    html += accordion('deliverables', 'Deliverables', delHtml, false);
  }

  /* Guardrails (tools + fallbacks). */
  if (guardrails.length) {
    var grHtml = '<ul class="proj-gr-list">' +
      guardrails.map(function (g) {
        return '<li class="proj-gr-item">' +
          '<strong>' + esc(g.tool || '') + '</strong> - ' + Markdown.render(g.does || '') +
          (g.fallback ? ' <span class="detail__fallback">Fallback: ' + Markdown.render(g.fallback) + '</span>' : '') +
        '</li>';
      }).join('') +
    '</ul>';
    html += accordion('guardrails', 'Guardrails', grHtml, false);
  }

  html += '</div>'; /* end .proj-accordions */

  if (m.after) html += '<div class="detail__media">' + m.after + '</div>';

  html += '<p class="detail__back anim-rise" style="--i:6">' +
    '<a class="btn btn--ghost" href="#/projects">\u2190 Back to projects</a></p>' +
    '</article>';

  return html;
}

export default { render, renderDetail };
