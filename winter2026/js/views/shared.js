/* ==========================================================================
   Seneca 3D Integration - views/shared.js
   Small shared helpers for the student views: escaping, date formatting,
    project/checkpoint chips, week progress lookup, and not-found handling.
   All output is HTML-escaped before interpolation.
   ========================================================================== */

import Markdown from '../core/markdown.js';
import State from '../core/state.js';

export const esc = Markdown.escapeHtml;

const MONTHS = {
  '01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'Jun',
  '07': 'Jul', '08': 'Aug', '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec',
};

// "2026-09-11" -> "Sep 11, 2026" (static month names, no locale surprises).
export function formatDate(iso) {
  const m = String(iso || '').match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!m) return esc(iso || '');
  return MONTHS[m[2]] + ' ' + Number(m[3]) + ', ' + m[1];
}

// Pad a week number: 1 -> "01".
export function pad(n) {
  return String(n).padStart(2, '0');
}

// Project letter chip (A / B / C) or a neutral "free week" chip.
export function projectChip(project) {
  if (!project) return '<span class="chip chip--none">free week</span>';
  const p = esc(String(project));
  return '<span class="chip chip--proj chip--proj-' + p + '">' + p.toUpperCase() + '</span>';
}

// The student's local progress row for one lesson id (null if unseen).
export function weekProgress(lessonId) {
  const p = State.progress.get();
  return (p && p.weeks && p.weeks[lessonId]) || null;
}

// Checkpoint chip for a roadmap node: status-aware.
export function checkpointChip(week, wp) {
  if (!week || !week.checkpoint) {
    if (week && week.noGate) return '<span class="chip chip--buffer">buffer - no gate</span>';
    return '<span class="chip">no gate</span>';
  }
  const status = (wp && wp.checkpointStatus) || 'pending';
  const cls = status === 'passed' ? 'chip--ok' : (status === 'pending' ? '' : 'chip--warn');
  return '<span class="chip ' + cls + '">' + esc(week.checkpoint) + ' - ' + esc(status) + '</span>';
}

// The full state chip row for a roadmap node.
export function weekChips(week, wp) {
  const out = [projectChip(week.project), checkpointChip(week, wp)];
  if (wp) {
    if (wp.read) out.push('<span class="chip chip--ok">read</span>');
    if (wp.reflected) out.push('<span class="chip chip--accent">reflected</span>');
  }
  return out.join('');
}

// Split a comma-separated multi-value field into a clean trimmed list.
export function splitCsv(v) {
  if (!v) return [];
  return String(v).split(',').map(function (s) { return s.trim(); }).filter(Boolean);
}

// Neutralise javascript:/vbscript:/data: link targets for raw <a> elements
// (the markdown renderer already does this for its own links).
export function safeHref(url) {
  const t = String(url || '').trim();
  if (/^(javascript|vbscript|data)\s*:/i.test(t)) return '#';
  return esc(t);
}

// A standard "record not found" surface, reused by the detail views.
export function notFound(label, detail) {
  return (
    '<section class="empty anim-fade" role="note">' +
      '<div class="empty__title">' + esc(label) + ' not found</div>' +
      '<p class="empty__hint">' + esc(detail || 'That record is not in the seed.') + '</p>' +
      '<p class="mt-4"><a class="btn btn--primary" href="#/">Back to the dashboard</a></p>' +
    '</section>'
  );
}

export const escape = esc;
export default { esc: escape, formatDate, pad, projectChip, weekProgress, checkpointChip, weekChips, splitCsv, safeHref, notFound };
