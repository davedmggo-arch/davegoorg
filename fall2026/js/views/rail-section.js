/* ==========================================================================
   Seneca 3D Integration - js/views/rail-section.js
   Shared scaffolding for the persistent student rail's collapsible sections
   (round 2.7). The rail container (`#shortcuts-rail`) now hosts TWO sections:
   the Blender shortcuts section (`sc`) and the artistic-checklist section
   (`ac`). This module owns the shared parts so the two sections never drift:

     buildSection({ idPrefix, title, categories, list, rowHtml, extraControls })
       -> an HTML string for one `.sc-section` (id `<idPrefix>-section`) with the
          same `.sc-rail__*` scaffolding the shortcuts rail already uses:
          a toggle (aria-expanded / aria-controls -> `<idPrefix>-panel`), a
          labelled sr-only search (`#<idPrefix>-search`), a `.sc-rail__groups`
          list of per-category `.sc-rail__group` blocks, a no-match line, and an
          `extraControls` slot (used for the checklist "Clear" + mannequin link).
          `rowHtml(r, c)` is the per-view row hook: shortcuts -> a jump button;
          the checklist -> a cross-off checkbox. All dynamic text via esc().

     wireSection(section, { onRow, filter })
       -> wires one section: toggle open/close, Escape closes + returns focus,
          live search (show/hide groups + a no-match line), and an optional
          delegated row-click handler (`onRow(row, e, section)`; the shortcuts
          section uses it to jump, the checklist leaves it undefined and drives
          its rows from a native checkbox change instead).

   The row INTERACTION is intentionally NOT forced here - each view supplies its
   own `onRow` (or none). Search + toggle + Escape are the shared behaviour.
   ========================================================================== */

import { esc } from './shared.js';

/* Insert `html` as NEW children of `rail` WITHOUT wiping existing children
   (so the shortcuts + checklist sections coexist in one rail). Uses only
   createElement / innerHTML / appendChild / firstChild - all present in the
   verify harness' mock DOM (which has no insertAdjacentHTML) and every browser.
   Returns nothing; the caller re-queries its own section by id to wire it. */
export function appendHtml(rail, html) {
  if (!rail || !html) return;
  const holder = document.createElement('div');
  holder.innerHTML = html;
  while (holder.firstChild) rail.appendChild(holder.firstChild);
}

/* Rows for one category or sub-category, sorted by the dense `order` field.
   Matches on `category === slug` (top-level) OR `subCategory === slug` (nested). */
function rowsFor(list, slug) {
  return (list || [])
    .filter(function (r) {
      return r && (r.category === slug || r.subCategory === slug);
    })
    .sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
}

/* Build inner rows HTML for a single leaf category. */
function groupInner(rows, c, rowHtml) {
  if (!rows.length) return '';
  return rows.map(function (r) { return rowHtml(r, c); }).join('');
}

/* Derive sub-groups from items in the full list that have a matching `category`
   AND a `subCategory` tag. The tag value becomes the child slug.
   The label is derived by title-casing the slug (replacing hyphens with spaces).
   Returns an array of `{ slug, label }` objects, or empty array if no tags found. */
function deriveSubGroups(list, parentSlug) {
  if (!list || !list.length || !parentSlug) return [];
  const tagSet = new Set();
  list.forEach(function (r) {
    if (r && r.category === parentSlug && r.subCategory && typeof r.subCategory === 'string') {
      tagSet.add(r.subCategory);
    }
  });
  if (!tagSet.size) return [];
  /* Build child descriptors from unique tags, preserving first-seen order. */
  const seen = new Set();
  const children = [];
  list.forEach(function (r) {
    if (r && r.category === parentSlug) {
      var tag = r.subCategory;
      if (tag && !seen.has(tag)) {
        seen.add(tag);
        children.push({ slug: tag, label: tag.replace(/-/g, ' ').replace(/\b\w/g, function (m) { return m.toUpperCase(); }) });
      }
    }
  });
  return children;
}

/* Rows for a parent group: items whose `category` matches but that have NO
   `subCategory` (those belong in a child group instead). */
function parentRowsFor(list, slug) {
  return (list || [])
    .filter(function (r) {
      return r && r.category === slug && !r.subCategory;
    })
    .sort(function (a, b) { return (a.order || 0) - (b.order || 0); });
}

/* Build one `<li.sc-rail__group>` — leaf category or parent with nested sub-groups. */
function buildOneGroup(c, list, rowHtml) {
  /* If `c.children` exists, `c` is a parent group. Render nested sub-groups. */
  var children = null;
  if (c.children && c.children.length) {
    children = c.children;
  } else {
    /* No explicit children: try to auto-derive sub-groups from item `subCategory` tags. */
    children = deriveSubGroups(list, c.slug);
  }
  if (children && children.length) {
    const nested = children.map(function (child) {
      const childRows = rowsFor(list, child.slug);
      if (!childRows.length) return '';
      return (
        '<details class="sc-rail__sub-group" data-cat="' + esc(child.slug) + '">' +
          '<summary class="sc-rail__sub-h">' + esc(child.label) + '</summary>' +
          '<div class="sc-rail__sub-body">' +
            groupInner(childRows, child, rowHtml) +
          '</div>' +
        '</details>'
      );
    }).join('');
    /* Parent rows: items with matching category but NO subCategory (uncategorized). */
    const parentRows = parentRowsFor(list, c.slug);
    var inner = nested;
    if (parentRows.length) {
      inner = groupInner(parentRows, c, rowHtml) + nested;
    }
    if (!inner) return '';
    return (
      '<li class="sc-rail__group sc-rail__group--parent" data-cat="' + esc(c.slug) + '">' +
        '<span class="sc-rail__group-h">' + esc(c.label) + '</span>' +
        (parentRows.length ? groupInner(parentRows, c, rowHtml) : '') +
        '<div class="sc-rail__nested">' + nested + '</div>' +
      '</li>'
    );
  }
  /* Leaf category: render rows directly. */
  const rows = rowsFor(list, c.slug);
  if (!rows.length) return '';
  return (
    '<li class="sc-rail__group" data-cat="' + esc(c.slug) + '">' +
      '<span class="sc-rail__group-h">' + esc(c.label) + '</span>' +
      groupInner(rows, c, rowHtml) +
    '</li>'
  );
}

/* One section of the rail. `idPrefix` is 'sc' or 'ac'. */
export function buildSection(cfg) {
  const idPrefix = cfg.idPrefix;
  const title = cfg.title;
  const categories = cfg.categories || [];
  const list = cfg.list || [];
  const rowHtml = cfg.rowHtml;
  const extraControls = cfg.extraControls || '';

  const groups = categories.map(function (c) {
    return buildOneGroup(c, list, rowHtml);
  }).join('');

  return (
    '<div class="sc-section" id="' + idPrefix + '-section">' +
      '<button type="button" class="sc-rail__toggle" aria-expanded="false" aria-controls="' + idPrefix + '-panel">' +
        '<span class="sc-rail__title">' + esc(title) + '</span>' +
        '<span class="sc-rail__chev" aria-hidden="true">&#8250;</span>' +
      '</button>' +
      '<div class="sc-rail__panel" id="' + idPrefix + '-panel">' +
        '<label class="sc-rail__sr" for="' + idPrefix + '-search">Filter ' + esc(title) + '</label>' +
        '<input class="sc-rail__search" id="' + idPrefix + '-search" type="search" ' +
          'placeholder="Filter ' + esc(title).toLowerCase() + '" aria-label="Filter ' + esc(title) + '" autocomplete="off" />' +
        '<nav class="sc-rail__nav" aria-label="' + esc(title) + ' categories">' +
          '<ul class="sc-rail__groups">' + (groups || '<li class="sc-rail__empty">Nothing here yet.</li>') + '</ul>' +
          '<p class="sc-rail__nomatch" hidden>Nothing matches your filter.</p>' +
        '</nav>' +
        (extraControls ? '<div class="sc-rail__extra">' + extraControls + '</div>' : '') +
      '</div>' +
    '</div>'
  );
}

/* Show/hide groups by matching each row's visible text against the query.
   Handles both flat groups and nested sub-groups (details/summary). */
function filterSection(section, q) {
  const query = String(q || '').toLowerCase().trim();
  const groups = section.querySelectorAll('.sc-rail__group');
  let anyVisible = false;
  groups.forEach(function (g) {
    const rows = g.querySelectorAll('.sc-rail__row');
    let gVisible = false;
    rows.forEach(function (row) {
      const hay = (row.textContent || '').toLowerCase();
      const match = !query || hay.indexOf(query) !== -1;
      row.hidden = !match;
      if (match) gVisible = true;
    });
    /* Auto-open nested sub-groups that contain matching rows. */
    if (query) {
      g.querySelectorAll('.sc-rail__sub-group').forEach(function (sub) {
        const subRows = sub.querySelectorAll('.sc-rail__row');
        let subHasMatch = false;
        subRows.forEach(function (row) {
          if (!row.hidden) subHasMatch = true;
        });
        if (subHasMatch) sub.setAttribute('open', '');
        else sub.removeAttribute('open');
        sub.hidden = !subHasMatch;
      });
    } else {
      g.querySelectorAll('.sc-rail__sub-group').forEach(function (sub) {
        sub.hidden = false;
      });
    }
    g.hidden = !gVisible;
    if (gVisible) anyVisible = true;
  });
  const empty = section.querySelector('.sc-rail__empty');
  if (empty) empty.hidden = true;
  const nomatch = section.querySelector('.sc-rail__nomatch');
  if (nomatch) nomatch.hidden = anyVisible;
}

/* Close a section (used after a shortcut jump, and by Escape).
   Also collapses any auto-opened nested sub-groups. */
export function closeSection(section) {
  if (!section) return;
  section.classList.remove('is-open');
  const t = section.querySelector('.sc-rail__toggle');
  if (t) t.setAttribute('aria-expanded', 'false');
  section.querySelectorAll('.sc-rail__sub-group').forEach(function (sub) {
    sub.removeAttribute('open');
  });
}

/* Wire one section: toggle, Escape, live search, optional row-click handler. */
export function wireSection(section, opts) {
  if (!section || section.getAttribute('data-wired') === 'true') return;
  section.setAttribute('data-wired', 'true');
  const o = opts || {};
  const toggle = section.querySelector('.sc-rail__toggle');
  const search = section.querySelector('.sc-rail__search');

  function setOpen(open) {
    section.classList.toggle('is-open', open);
    if (toggle) toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (open && search && search.focus) search.focus();
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      setOpen(!section.classList.contains('is-open'));
    });
  }

  if (search) {
    search.addEventListener('input', function () { filterSection(section, search.value); });
  }

  // Escape closes an open section and returns focus to its toggle.
  section.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && section.classList.contains('is-open')) {
      setOpen(false);
      if (toggle && toggle.focus) toggle.focus();
    }
  });

  // Optional delegated row click (shortcuts jump). The checklist leaves `onRow`
  // undefined and drives its rows from a native checkbox `change` instead.
  if (typeof o.onRow === 'function') {
    section.addEventListener('click', function (e) {
      const t = e.target;
      const row = t && t.closest ? t.closest('.sc-rail__row') : null;
      if (row) o.onRow(row, e, section);
    });
  }
}

export default { buildSection, wireSection, closeSection, filterSection, rowsFor, appendHtml };
