/* ==========================================================================
   Seneca 3D Integration - js/views/teacher-course.js
   Editor for the single `course` object. Fully schema-driven (COURSE_SCHEMA is
   the source of truth; every field is rendered by admin-ui.js's renderForm).

   Round 2 / R2-2: the long flat form is now COLLAPSIBLE. The fields are grouped
   into sections - Identity & setup (open), House rules (open), Week buffers
   (closed), and the two long lists Projects / Weeks which use a PER-ITEM
   disclosure (each row folds individually, closed by default) so the teacher
   opens only the project / week they are editing. Open/closed state is
   remembered across re-renders (e.g. after Add / Remove a row) via fieldsets.js.

   R2-2 is PURELY PRESENTATIONAL. The field HTML is byte-for-byte what renderForm
   produced before (same keys, same root-relative data-paths, same values), only
   wrapped in <details>/<summary>. The save payload is always built from the
   in-memory record (AdminData.get('course')) - never the DOM - so open/closed
   state can never change which fields exist, their names, or their values.
   See work/verify-round2-r22.mjs for the invariance + a11y proof.

   Field types used: text, number, date, bool, markdown, csv (typed), and `list`
   (add/remove) with a nested item schema. Dotted keys (e.g. `delivery.week`,
   `studyWeek.start`) make nested objects first-class.

   SaveBar: Save to disk (server) / Export JSON (always) / Revert (confirm-gated).
   ========================================================================== */

import AdminData from '../admin/admin-data.js';
import { renderForm, getAtPath, saveBar, wireForm } from '../admin/admin-ui.js';
import { esc } from './shared.js';
import { collapsible, wireFieldsets, setSection } from '../admin/fieldsets.js';

const COURSE_SCHEMA = [
  { key: 'id', label: 'Course ID', type: 'text' },
  { key: 'title', label: 'Title', type: 'text' },
  { key: 'oneIdea', label: 'One idea', type: 'markdown', hint: 'Markdown. This is the spine of the whole course.' },
  { key: 'dashboard.tagline', label: 'Dashboard - hero tagline (optional)', type: 'text', hint: 'One line under the hero idea on the student dashboard. Leave blank to hide it.' },
  { key: 'dashboard.projectsLabel', label: 'Dashboard - projects label (optional)', type: 'text', hint: 'Label above the projects dropdown. Defaults to "Projects".' },
  { key: 'threeLines', label: 'Three lines', type: 'text' },
  { key: 'gradingTilt', label: 'Grading tilt', type: 'text' },
  { key: 'institution', label: 'Institution', type: 'text' },
  { key: 'semester', label: 'Semester', type: 'text' },
  { key: 'classDay', label: 'Class day', type: 'text' },
  { key: 'termStart', label: 'Term start', type: 'date' },
  { key: 'termEnd', label: 'Term end', type: 'date' },

  { key: 'studyWeek.label', label: 'Study Week - label', type: 'text' },
  { key: 'studyWeek.start', label: 'Study Week - start', type: 'date' },
  { key: 'studyWeek.end', label: 'Study Week - end', type: 'date' },
  { key: 'studyWeek.noGate', label: 'Study Week - no gate (buffer)', type: 'bool' },
  { key: 'partialWeek.label', label: 'Partial week - label', type: 'text' },
  { key: 'partialWeek.start', label: 'Partial week - start', type: 'date' },
  { key: 'partialWeek.end', label: 'Partial week - end', type: 'date' },
  { key: 'graceWeek.week', label: 'Grace week - number', type: 'number' },
  { key: 'graceWeek.label', label: 'Grace week - label', type: 'text' },
  { key: 'graceWeek.noGate', label: 'Grace week - no gate', type: 'bool' },

  { key: 'houseRules', label: 'House rules', type: 'list', scalar: 'text', addLabel: 'house rule' },

  {
    key: 'projects', label: 'Projects (3)', type: 'list', addLabel: 'project',
    blank: { id: '', name: '', weeks: [], weeksLabel: '', project: '', order: null, delivery: { week: null, date: null, crit: '' } },
    item: [
      { key: 'id', label: 'ID', type: 'text' },
      { key: 'name', label: 'Name', type: 'text' },
      { key: 'project', label: 'Project key', type: 'text' },
      { key: 'order', label: 'Order', type: 'number' },
      { key: 'weeks', label: 'Weeks', type: 'csv', itemType: 'number', hint: 'comma-separated week numbers' },
      { key: 'weeksLabel', label: 'Weeks label', type: 'text' },
      { key: 'delivery.week', label: 'Delivery - week', type: 'number' },
      { key: 'delivery.date', label: 'Delivery - date', type: 'date' },
      { key: 'delivery.crit', label: 'Delivery - crit', type: 'text', hint: 'e.g. midterm, final (blank if none)' },
    ],
  },

  {
    key: 'weeks', label: 'Weeks (14)', type: 'list', addLabel: 'week',
    blank: { week: null, date: '', project: '', title: '', checkpoint: '', lessonId: '', noGate: false },
    item: [
      { key: 'week', label: 'Week', type: 'number' },
      { key: 'date', label: 'Date', type: 'date' },
      { key: 'project', label: 'Project', type: 'text', placeholder: 'a / b / c / blank for a free week' },
      { key: 'title', label: 'Title', type: 'text' },
      { key: 'checkpoint', label: 'Checkpoint', type: 'text', placeholder: 'e.g. A1 / Delivery A / blank' },
      { key: 'lessonId', label: 'Lesson id', type: 'text', placeholder: 'wk-01' },
      { key: 'noGate', label: 'No gate (buffer)', type: 'bool' },
    ],
  },
];

// ---- R2-2 grouping ---------------------------------------------------------
// Which schema keys live in each collapsible section + the section's default
// open state (per Handoff 048): Identity + House rules EXPANDED; Week buffers
// CLOSED; Projects / Weeks rendered as per-item disclosures, closed by default.
const IDENTITY_KEYS = ['id', 'title', 'oneIdea', 'dashboard.tagline', 'dashboard.projectsLabel', 'threeLines', 'gradingTilt', 'institution', 'semester', 'classDay', 'termStart', 'termEnd'];
const BUFFER_KEYS = ['studyWeek.label', 'studyWeek.start', 'studyWeek.end', 'studyWeek.noGate', 'partialWeek.label', 'partialWeek.start', 'partialWeek.end', 'graceWeek.week', 'graceWeek.label', 'graceWeek.noGate'];

function pick(schema, keys) { return schema.filter((f) => keys.indexOf(f.key) >= 0); }
function byKey(schema, key) { return schema.find((f) => f.key === key); }

// A short, stable label for a list row used as its disclosure title.
function rowLabel(row, i) {
  if (row && (row.name || row.title || row.id)) return String(row.name || row.title || row.id);
  return 'Item ' + (i + 1);
}

// Render one list (projects / weeks) with a PER-ITEM collapsible per row, closed
// by default. The label + "Add" button + row markup mirror admin-ui.js's
// renderList() (same data-add / data-rm / data-idx / data-blank), and each row's
// inner fields are rendered by renderForm() - so the field HTML (keys, data-
// paths, values) is identical to the flat form and no field rendering is
// re-implemented. Only the row-level disclosure is composed here.
function renderPerItemCollapsibleList(record, descriptor) {
  const path = descriptor.key;
  const list = getAtPath(record, path);
  const arr = Array.isArray(list) ? list : [];
  const addLabel = descriptor.addLabel || ('Add ' + (descriptor.label || 'item').replace(/\s+/g, ' ').toLowerCase());

  const items = arr.map(function (row, i) {
    const body = renderForm(descriptor.item, row, null, path + '.' + i);
    const removeBtn = '<button class="alist__rm" type="button" data-rm="' + esc(path) + '" data-idx="' + i + '" aria-label="Remove item ' + (i + 1) + '">Remove</button>';
    return collapsible(rowLabel(row, i), body + '<div class="alist__foot">' + removeBtn + '</div>', { id: 'fs-' + path + '-' + i, defaultOpen: false, cls: 'fs--item' });
  }).join('');

  return (
    '<div class="field field--list field--peritem">' +
      '<div class="field__labelrow"><label class="field__label">' + esc(descriptor.label || 'List') + '</label>' +
      '<button class="alist__add" type="button" data-add="' + esc(path) + '" data-blank="1">+ ' + esc(addLabel) + '</button></div>' +
      '<div class="alist alist--peritem">' + (items || '<div class="alist__empty">None yet.</div>') + '</div>' +
    '</div>'
  );
}

function updateStatus() {
  if (typeof window !== 'undefined' && window.__adminStatus) window.__adminStatus();
}

// ===========================================================================
// The view: render the whole course as grouped collapsibles, wire the form
// (input->record binding, Add/Remove, save bar), and remember disclosure state.
// ===========================================================================
export function renderCourse(params, query) {
  const view = (typeof document !== 'undefined') ? document.getElementById('view') : null;
  if (!view) return null;
  const record = AdminData.get('course') || {};
  const schema = COURSE_SCHEMA;

  const identity = collapsible('Identity & setup', renderForm(pick(schema, IDENTITY_KEYS), record), { id: 'fs-course-identity', defaultOpen: true, cls: 'fs--section' });
  const house = collapsible('House rules', renderForm([byKey(schema, 'houseRules')], record), { id: 'fs-course-house-rules', defaultOpen: true, cls: 'fs--section' });
  const buffers = collapsible('Week buffers (study / partial / grace)', renderForm(pick(schema, BUFFER_KEYS), record), { id: 'fs-course-week-buffers', defaultOpen: false, cls: 'fs--section' });
  const projects = renderPerItemCollapsibleList(record, byKey(schema, 'projects'));
  const weeks = renderPerItemCollapsibleList(record, byKey(schema, 'weeks'));

  const html = (
    '<section class="admin-edit" aria-labelledby="course-edit-title">' +
      '<header class="admin-edit__head">' +
        '<h1 id="course-edit-title" class="anim-rise" style="--i:0">Course</h1>' +
        '<p class="muted anim-rise" style="--i:1">One object. Fold a section to focus on what you are editing - your open / closed choices are remembered. Edits are in-memory until you Save (server) or Export (always).</p>' +
      '</header>' +
      '<div class="admin-edit__body anim-rise" style="--i:1">' +
        '<div class="fieldset-stack">' + identity + house + buffers + projects + weeks + '</div>' +
      '</div>' +
      saveBar('course', '#/admin', 'Back to dashboard') +
    '</section>'
  );

  view.innerHTML = html;
  wireForm(view, {
    name: 'course',
    schema: schema,
    getRecord: function () { return AdminData.get('course'); },
    reRender: function () { renderCourse(); },
    onChange: updateStatus,
  });
  wireFieldsets(view);
  return null;
}

// Test / harness hook: force every known section to a given open state so the
// invariance proof can compare the all-open vs all-closed renders.
function setAll(open) {
  const record = AdminData.get('course') || {};
  setSection('fs-course-identity', open);
  setSection('fs-course-house-rules', open);
  setSection('fs-course-week-buffers', open);
  const projects = getAtPath(record, 'projects') || [];
  const weeks = getAtPath(record, 'weeks') || [];
  for (let i = 0; i < projects.length; i++) setSection('fs-projects-' + i, open);
  for (let i = 0; i < weeks.length; i++) setSection('fs-weeks-' + i, open);
}

export default { renderCourse, setAll, COURSE_SCHEMA };
