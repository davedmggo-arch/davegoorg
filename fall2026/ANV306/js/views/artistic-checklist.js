/* ==========================================================================
   Seneca 3D Integration - js/views/artistic-checklist.js
   The unified "Checklist" rail (rail-reorg). Replaces the separate
   Artistic Checklist + Design Principles rails with ONE top-level
   `Checklist` section containing nested sub-categories:

      - Submission Checklist    (submission rules)
      - Design Elements         (line, shape, form, value, colour, texture, space)
      - Design Principles       (balance, contrast, emphasis, rhythm, etc.)
      - Artistic Checklist      (silhouette, colour, edges, composition, value,
                                research, organization, environment)
      - Project Checklists      (Project A / B / C)

   Data source: `checklist.json` (unified collection). Rows are
   CROSS-OFF (native checkbox). Design-principle rows also show the
   environment context when present.

   Cross-off state is a module-level `Set` of checked ids. It is NOT written
   to localStorage or the store - it is transient per page load (no
   persistence). `toggle(id)` / `clearAll()` mutate the Set then `refresh()`
   syncs every `[data-ac-id]` checkbox in the rail. All dynamic text via
   esc(); reduced-motion = instant.

   The mannequin download link is defined ONCE here (MANNEQUIN) and appended
   inside the rail section's extra slot, so it survives the rail innerHTML
   build. Swapping the real asset is a one-line change to MANNEQUIN.
   ========================================================================== */

import { esc } from './shared.js';
import { buildSection, wireSection, appendHtml } from './rail-section.js';
import { triggerHtml } from '../core/rail-lightbox.js';

/* Hierarchical categories for the unified Checklist rail.
   Top-level leaf categories: submission, elements, principles.
   Parent groups with nested sub-groups: artistic (8 children), projects (3 children). */
export const CATEGORIES = [
  { slug: 'submission', label: 'Submission Checklist' },
  { slug: 'elements', label: 'Design Elements' },
  { slug: 'principles', label: 'Design Principles' },
  {
    slug: 'artistic',
    label: 'Artistic Checklist',
    children: [
      { slug: 'artistic-silhouette', label: 'Silhouette & shape' },
      { slug: 'artistic-colour', label: 'Colour & palette' },
      { slug: 'artistic-edges', label: 'Edges (soft vs hard)' },
      { slug: 'artistic-composition', label: 'Composition & scale' },
      { slug: 'artistic-value', label: 'Value & light' },
      { slug: 'artistic-research', label: 'Research & reference' },
      { slug: 'artistic-organization', label: 'Folder structure & naming' },
      { slug: 'artistic-environment', label: 'Environment & reference' },
    ],
  },
  {
    slug: 'projects',
    label: 'Project Checklists',
    children: [
      { slug: 'project-a', label: 'Project A Checklist' },
      { slug: 'project-b', label: 'Project B Checklist' },
      { slug: 'project-c', label: 'Project C Checklist' },
    ],
  },
];

/* The swappable mannequin download (placeholder asset until the professor
   supplies the real .blend / .obj - see handoff 086 sec 14). */
export const MANNEQUIN = { href: 'assets/mannequin.blend', label: 'a .blend' };

/* ---- Cross-off state (in-memory only; NOT persisted) -------------------- */

export const checked = new Set();

export function toggle(id) {
  if (!id) return;
  if (checked.has(id)) checked.delete(id); else checked.add(id);
  refresh();
}

export function clearAll() {
  checked.clear();
  refresh();
}

/* Sync the checked state onto every cross-off checkbox (rail + page). */
export function refresh() {
  if (typeof document === 'undefined' || !document.querySelectorAll) return;
  document.querySelectorAll('input[data-ac-id]').forEach(function (el) {
    el.checked = checked.has(el.getAttribute('data-ac-id'));
  });
}

/* ---- Pure helpers -------------------------------------------------------- */

function checkedAttr(id) { return checked.has(id) ? ' checked' : ''; }

/* Rail row hook: a cross-off checkbox (NOT a jump button).
   For design-principle rows that carry an `environment` field, the
   environment context is appended in a muted span so the teacher
   reference survives inside a cross-off surface. */
function checkRow(r, c) {
  const trig = triggerHtml(r);
  const env = r.environment
    ? '<span class="ac-row__env"> — ' + esc(r.environment) + '</span>'
    : '';
  return (
    '<label class="sc-rail__row ac-row ac-row--rail' + (trig ? ' rail-lb' : '') + '" data-ac-id="' + esc(r.id) + '">' +
      '<input type="checkbox" data-ac-id="' + esc(r.id) + '"' + checkedAttr(r.id) + ' aria-label="' + esc(r.text) + '" />' +
      '<span class="ac-row__text">' + esc(r.text) + env + '</span>' +
      trig +
    '</label>'
  );
}

/* ---- Rail (artistic-checklist section) ---------------------------------- */

function extraControls() {
  return (
    '<button type="button" class="ac-clear" data-ac-clear>Clear</button>' +
    '<a class="sc-rail__asset" href="' + esc(MANNEQUIN.href) + '" download>Download the mannequin (' + esc(MANNEQUIN.label) + ')</a>'
  );
}

/* Mount the unified Checklist section ONCE into #shortcuts-rail, beside the
   shortcuts section. Cross-off is driven by native checkbox `change` (wired
   at the document level in app.js); the Clear button is also a document-level
   delegated click. This section only owns toggle / Escape / search. */
export function mountRailSection(list) {
  if (typeof document === 'undefined') return;
  const rail = document.getElementById('shortcuts-rail');
  if (!rail) return;
  const prev = rail.querySelector('#ac-section');
  if (prev && prev.remove) prev.remove();
  appendHtml(rail, buildSection({
    idPrefix: 'ac',
    title: 'Checklist',
    categories: CATEGORIES,
    list: list,
    rowHtml: checkRow,
    extraControls: extraControls(),
  }));
  const section = rail.querySelector('#ac-section');
  wireSection(section, {});
}

export default { CATEGORIES, MANNEQUIN, checked, toggle, clearAll, refresh, mountRailSection };
