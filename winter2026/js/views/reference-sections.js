/* ==========================================================================
   Seneca 3D Integration - views/reference-sections.js  (Round 2 / R2-3)

   Shared, pure model for the REFERENCE sections (Blender-Related, Books, and
   any teacher-created custom section). Consumed by BOTH the student renderer
   (views/reference.js) and the teacher editor (views/teacher-reference.js),
   so the two never drift.

   Data model (see Knowledge_Base/Decisions/data-model.md):
     reference.*.section   -> a FREE STRING id (e.g. "blender", "books").
     course.referenceSections -> OPTIONAL array [{ id, label, order: 1..N }].
       - ABSENT  -> fallback: seeded "blender" then "books", then any other
                    distinct section ids found in the entries (first-seen).
       - PRESENT -> render exactly this list in `order`, then defensively
                    append any entry whose section id is not in the list so no
                    entry is ever hidden.

   The mutations below operate on the LIVE `course` object (the exact object
   AdminData.get('course') hands you) and on the live `referenceList` array.
   They never touch the canonical site/data/*.json; persistence is the caller's
   job (the caller re-renders, then the admin save bar calls saveOne('course')).
   ========================================================================== */

import { esc } from './shared.js';
import { wireOnce } from '../admin/wire.js';

/* --------------------------------------------------------------------------
   Small text helpers (also reused by the teacher editor)
   -------------------------------------------------------------------------- */

// "blender" -> "Blender"; "my-section" -> "My Section"; "html5" -> "Html5".
// Simple, deterministic, safe for any label.
export function titleCase(text) {
  const s = String(text == null ? '' : text).trim();
  if (!s) return '';
  return s
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .split(' ')
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

// "My Section" -> "my-section"; "Blender 3D" -> "blender-3d".
// Used as a suggested stable id for a new section (teacher can still rename).
export function slugify(text) {
  const s = String(text == null ? '' : text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return s || 'section';
}

/* --------------------------------------------------------------------------
   Resolution: what sections exist, in what order, with what labels.
   -------------------------------------------------------------------------- */

// Returns an array of { id, label } in render order. `course` and
// `referenceList` may both be null/undefined (defensive for a bare render).
export function resolveSections(course, referenceList) {
  const list = Array.isArray(referenceList) ? referenceList : [];
  const out = [];
  const seen = Object.create(null);
  const push = (id, label) => {
    if (!id || seen[id]) return;
    seen[id] = true;
    out.push({ id: id, label: (label && String(label).trim()) || titleCase(id) });
  };

  const cfg = (course && Array.isArray(course.referenceSections)) ? course.referenceSections : null;

  if (cfg) {
    // Teacher-defined: honour order, then label.
    const sorted = cfg
      .filter((s) => s && s.id)
      .slice()
      .sort((a, b) => (Number(a.order) || 0) - (Number(b.order) || 0));
    for (const s of sorted) push(s.id, s.label);
    // Defensive: any entry whose section is not in the config still shows.
    for (const e of list) push(e && e.section, null);
  } else {
    // Fallback (canonical seed): seeded blender, then books, then the rest.
    push('blender', 'Blender-Related');
    push('books', 'Books');
    for (const e of list) push(e && e.section, null);
  }

  return out;
}

// Options for the editor's <select> (id/label pairs), always including the
// entry's current value so a saved entry is never orphaned from its own list.
export function sectionOptions(course, referenceList, currentValue) {
  const opts = resolveSections(course, referenceList).map((s) => ({ id: s.id, label: s.label }));
  if (currentValue && !opts.some((o) => o.id === currentValue)) {
    opts.push({ id: currentValue, label: titleCase(currentValue) });
  }
  return opts;
}

// How many reference entries currently use section `id`.
export function countInSection(referenceList, id) {
  if (!id) return 0;
  const list = Array.isArray(referenceList) ? referenceList : [];
  let n = 0;
  for (const e of list) if (e && e.section === id) n++;
  return n;
}

/* --------------------------------------------------------------------------
   Mutations (operate on the live `course` object + `referenceList`).
   Each returns { ok: boolean, ... } so the UI can toast / re-render cleanly.
   None of these ever drop a reference entry.
   -------------------------------------------------------------------------- */

// Ensure the course has a referenceSections array and return it. When the
// course has none yet (e.g. the canonical seed), materialize the CURRENT
// resolved sections (fallback: blender, books, then any other entry section)
// into an explicit array so the first rename/move/remove acts on what the panel
// already shows. Non-destructive: it only makes explicit what is already rendered.
function ensureSectionsArray(course, referenceList) {
  if (!course) return null;
  if (!Array.isArray(course.referenceSections)) {
    course.referenceSections = resolveSections(course, referenceList).map(function (s, i) {
      return { id: s.id, label: s.label, order: i + 1 };
    });
  }
  return course.referenceSections;
}

function renumber(arr) {
  for (let i = 0; i < arr.length; i++) arr[i].order = i + 1;
}

function findSection(arr, id) {
  return arr.find((s) => s && s.id === id) || null;
}

export function createSection(course, referenceList, rawId, rawLabel) {
  const arr = ensureSectionsArray(course, referenceList);
  if (!arr) return { ok: false, reason: 'no-course' };
  const id = slugify(rawId);
  const label = String(rawLabel == null ? '' : rawLabel).trim() || titleCase(id);
  if (findSection(arr, id)) return { ok: false, reason: 'id-exists', id };
  arr.push({ id, label, order: arr.length + 1 });
  renumber(arr);
  return { ok: true, id, label };
}

export function renameSection(course, referenceList, id, rawLabel) {
  const arr = ensureSectionsArray(course, referenceList);
  if (!arr) return { ok: false, reason: 'no-course' };
  const s = findSection(arr, id);
  if (!s) return { ok: false, reason: 'not-found' };
  s.label = String(rawLabel == null ? '' : rawLabel).trim() || titleCase(id);
  return { ok: true, id, label: s.label };
}

export function moveSection(course, referenceList, id, dir) {
  const arr = ensureSectionsArray(course, referenceList);
  if (!arr) return { ok: false, reason: 'no-course' };
  const i = arr.findIndex((s) => s && s.id === id);
  const j = (dir === 'up') ? i - 1 : i + 1;
  if (i < 0 || j < 0 || j >= arr.length) return { ok: false, reason: 'edge' };
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
  renumber(arr);
  return { ok: true };
}

// Removal is guarded: a section that still has reference entries cannot be
// removed (moving the entries to another section is the safe path). This is
// the non-destructive guarantee R2-3 requires.
export function removeSection(course, referenceList, id) {
  const arr = ensureSectionsArray(course, referenceList);
  if (!arr) return { ok: false, reason: 'no-course' };
  const i = arr.findIndex((s) => s && s.id === id);
  if (i < 0) return { ok: false, reason: 'not-found' };
  const inUse = countInSection(referenceList, id);
  if (inUse > 0) return { ok: false, reason: 'in-use', count: inUse };
  arr.splice(i, 1);
  renumber(arr);
  return { ok: true, id };
}

/* --------------------------------------------------------------------------
   Teacher UI: a compact, bounded sections manager (create / rename / reorder
   / remove). Rendered by views/teacher-reference.js into the reference index.
   The panel is self-contained and re-rendered on every mutation.
   -------------------------------------------------------------------------- */

export function sectionsPanel(course, referenceList) {
  const secs = resolveSections(course, referenceList);
  const rows = secs.map(function (s) {
    const n = countInSection(referenceList, s.id);
    const canRemove = n === 0;
    const removeTitle = canRemove
      ? 'Remove "' + s.id + '"'
      : 'Remove blocked: ' + n + ' reference ' + (n === 1 ? 'entry uses' : 'entries use') + ' this section';
    return '<li class="seclist__row" data-secrow="' + esc(s.id) + '">'
      + '<span class="seclist__order" aria-hidden="true">' + (secs.indexOf(s) + 1) + '</span>'
      + '<input class="input input--seclabel" type="text" value="' + esc(s.label) + '" data-secid="' + esc(s.id) + '" data-seclabel="1" aria-label="Rename section ' + esc(s.id) + '" spellcheck="false" />'
      + '<span class="seclist__count" title="' + n + ' reference ' + (n === 1 ? 'entry' : 'entries') + '">' + n + '</span>'
      + '<span class="seclist__actions">'
      + '<button class="btn btn--ghost seclist__mv" type="button" data-secmv="up" data-secid="' + esc(s.id) + '" aria-label="Move ' + esc(s.id) + ' up">Up</button>'
      + '<button class="btn btn--ghost seclist__mv" type="button" data-secmv="down" data-secid="' + esc(s.id) + '" aria-label="Move ' + esc(s.id) + ' down">Down</button>'
      + '<button class="btn btn--ghost btn--danger seclist__rm" type="button" data-secrm="1" data-secid="' + esc(s.id) + '" title="' + esc(removeTitle) + '" aria-label="Remove section ' + esc(s.id) + '"' + (canRemove ? '' : ' disabled') + '>Remove</button>'
      + '</span>'
      + '</li>';
  }).join('');

  return '<section class="seclist card" aria-labelledby="seclist-h">'
    + '<div class="seclist__head" id="seclist-h">'
    + '<h3 class="card__title">Reference sections</h3>'
    + '<p class="seclist__hint">Order and labels are shown to students in the reference book. Add a section, rename it, and use it for new reference entries.</p>'
    + '</div>'
    + '<ol class="seclist__list">' + rows + '</ol>'
    + '<div class="seclist__add">'
    + '<div class="seclist__addrow">'
    + '<input class="input" type="text" data-secaddid="1" placeholder="id (e.g. materials)" aria-label="New section id" spellcheck="false" />'
    + '<input class="input" type="text" data-secaddlabel="1" placeholder="Label (e.g. Materials)" aria-label="New section label" />'
    + '<button class="btn btn--primary seclist__addbtn" type="button" data-secadd="1" aria-label="Add section">Add section</button>'
    + '</div>'
    + '<p class="seclist__note">Removing a section that still holds reference entries is blocked &mdash; move those entries first.</p>'
    + '</div>'
    + '</section>';
}

// Wire the panel's interactions. `onMutated` is called after every successful
// (or rejected) mutation so the host can re-render the index and refresh the
// save bar. `toast` is an optional (msg, level) fn.
export function wireSections(root, course, referenceList, onMutated, toast) {
  if (!root || typeof root.addEventListener !== 'function') return;
  const notify = (msg, level) => { if (typeof toast === 'function') { try { toast(msg, level); } catch (err) { /* ignore */ } } };
  const after = () => { if (typeof onMutated === 'function') { try { onMutated(); } catch (err) { /* ignore */ } } };

  function onClick(e) {
    const t = e && e.target;
    if (!t || typeof t.closest !== 'function') return;

    const mv = t.closest('[data-secmv]');
    if (mv) {
      e.preventDefault();
      const id = mv.getAttribute ? mv.getAttribute('data-secid') : '';
      const dir = mv.getAttribute ? mv.getAttribute('data-secmv') : 'down';
      const res = moveSection(course, referenceList, id, dir);
      if (!res.ok) notify('Cannot move that section.', 'warn');
      after();
      return;
    }

    const rm = t.closest('[data-secrm]');
    if (rm) {
      e.preventDefault();
      const id = rm.getAttribute ? rm.getAttribute('data-secid') : '';
      const res = removeSection(course, referenceList, id);
      if (!res.ok) {
        if (res.reason === 'in-use') {
          notify('Cannot remove ' + id + ': ' + res.count + ' reference ' + (res.count === 1 ? 'entry uses' : 'entries use') + ' it. Move them first.', 'warn');
        } else {
          notify('Section not found.', 'warn');
        }
      } else {
        notify('Removed section ' + id + '.', 'info');
      }
      after();
      return;
    }

    const add = t.closest('[data-secadd]');
    if (add) {
      e.preventDefault();
      const idInp = root.querySelector ? root.querySelector('[data-secaddid]') : null;
      const lblInp = root.querySelector ? root.querySelector('[data-secaddlabel]') : null;
      const res = createSection(course, referenceList, idInp ? idInp.value : '', lblInp ? lblInp.value : '');
      if (!res.ok) {
        notify(res.reason === 'id-exists' ? 'A section with that id already exists.' : 'Give the new section a label.', 'warn');
        return;
      }
      notify('Added section ' + res.id + '.', 'ok');
      after();
    }
  }

  function onChange(e) {
    const t = e && e.target;
    if (!t || typeof t.closest !== 'function') return;
    const inp = t.closest('[data-seclabel]');
    if (inp && inp.value !== undefined) {
      const id = inp.getAttribute ? inp.getAttribute('data-secid') : '';
      renameSection(course, referenceList, id, inp.value);
      after();
    }
  }

  // Idempotent re-wiring of the persistent #view (replaces, never stacks - wire.js).
  wireOnce(root, 'reference-seclist', { click: onClick, change: onChange });
}

export default {
  titleCase,
  slugify,
  resolveSections,
  sectionOptions,
  countInSection,
  createSection,
  renameSection,
  moveSection,
  removeSection,
  sectionsPanel,
  wireSections,
};
