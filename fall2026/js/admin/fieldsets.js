// site/js/admin/fieldsets.js
// Round 2 / R2-2: a presentational collapsible primitive for the long-scroll
// teacher Course page. It wraps an already-rendered block of field HTML in a
// native <details>/<summary> disclosure so the teacher can fold a section.
//
// Design guarantees (from Handoffs/coder-round2-r22_048.md + round2-build-plan.md):
//   - PURE PRESENTATION: it never reads or writes field data. The save payload is
//     always built from the in-memory record (AdminData.get), not the DOM, so
//     open/closed state can never change which fields exist, their names, or
//     their values. Collapsing is a no-op for the payload by construction.
//   - ACCESSIBLE: native <details>/<summary> gives a focusable, keyboard- and
//     screen-reader-operable disclosure widget by default (no role=button needed;
//     that would be redundant). The chevron affordance is CSS-drawn (no emoji).
//   - MOTION-SAFE: the only transition is a chevron rotation, and it is disabled
//     under prefers-reduced-motion (see fieldsets.css).
//   - STATE: a module-level store remembers each section's explicit open/closed
//     choice so the state survives a re-render (e.g. after Add/Remove a row).
//
// Exports: collapsible(), wireFieldsets(), and the state store (for tests).

// Explicit user choices: id -> true (open) | false (closed). Sections not present
// here fall back to their defaultOpen value at render time.
const explicit = new Map();

// ---- small string helpers (escape-first; no raw interpolation of data) -------
function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// Turn a title into a stable, unique id fragment (keeps the id predictable so
// persistence + a11y labelled references line up across re-renders).
function slug(s) {
  return String(s == null ? '' : s)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 40) || 'section';
}

// Resolve a section's current open state: explicit choice wins, else default.
export function isOpen(id, defaultOpen) {
  return explicit.has(id) ? explicit.get(id) : !!defaultOpen;
}

// Record an explicit open/closed choice for a section (driven by the toggle
// event in wireFieldsets, or callable directly for tests).
export function setSection(id, open) {
  explicit.set(id, !!open);
}

// Test/harness hook: clear all remembered choices.
export function resetState() {
  explicit.clear();
}

// ===========================================================================
// collapsible(title, innerHtml, opts)
//   Returns a <details> HTML string that wraps innerHtml.
//   opts: { id, defaultOpen, cls }
//     id          stable section id (defaults to a slug of the title)
//     defaultOpen open on first render unless the user has chosen otherwise
//     cls         extra class hook (e.g. 'fs--item' for per-row disclosure)
// ===========================================================================
export function collapsible(title, innerHtml, opts) {
  const o = opts || {};
  const id = o.id || ('fs-' + slug(title));
  const bodyId = id + '-body';
  const open = isOpen(id, o.defaultOpen);
  const cls = 'fieldset' + (o.cls ? ' ' + o.cls : '');

  return '<details class="' + esc(cls) + '" id="' + esc(id) + '" data-fs-id="' + esc(id) + '"' + (open ? ' open' : '') + '>'
    + '<summary class="fieldset__sum"><span class="fieldset__title">' + esc(title) + '</span></summary>'
    + '<div class="fieldset__body" id="' + esc(bodyId) + '" role="region" aria-label="' + esc(title) + '">' + String(innerHtml) + '</div>'
    + '</details>';
}

// ===========================================================================
// wireFieldsets(root)
//   Attaches a `toggle` listener to every <details data-fs-id> under root so the
//   user's open/closed choice is remembered and survives re-renders.
//   Idempotent (guarded by a WeakSet) so re-wiring the same element is safe.
// ===========================================================================
const wired = new WeakSet();
export function wireFieldsets(root) {
  if (!root || typeof root.querySelectorAll !== 'function') return;
  const nodes = root.querySelectorAll('details[data-fs-id]');
  if (!nodes) return;
  for (let i = 0; i < nodes.length; i++) {
    const d = nodes[i];
    if (wired.has(d)) continue;
    wired.add(d);
    if (typeof d.addEventListener !== 'function') continue;
    d.addEventListener('toggle', function () {
      const id = d.getAttribute ? d.getAttribute('data-fs-id') : null;
      if (id) setSection(id, d.open === true);
    });
  }
}

export const _internal = { esc, slug };
