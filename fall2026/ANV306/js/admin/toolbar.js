/* ==========================================================================
   Seneca 3D Integration - js/admin/toolbar.js
   A shared markdown "RTF" toolbar for the teacher's markdown textareas.

   The toolbar INSERTS MARKDOWN SYNTAX (not HTML) so the stored content stays
   verbatim markdown and still renders through the existing escape-first
   Markdown.render. It manipulates the textarea's value + selection, so the
   existing save/serialize pipeline (admin-ui wireForm) is untouched.

   Behaviour per button (6, keyboard-focusable <button type=button> elements):
     Bold    **text**   - wraps a selection, or inserts ** and places the
     Italic  *text*        caret between the markers when nothing is selected.
     Code    `text`
     Link    [text](url)  - wraps the selection as the label, caret lands on
                             the "url" so it can be typed.
     Heading ## (current line) - prepends "## " to the caret's line (toggles).
     List    -  (current line) - prepends "- " to the caret's line (toggles).

   Only the textarea's selectionStart/selectionEnd/setSelectionRange are used;
   the rest of the content is preserved exactly.

   Wiring: this module is a pure presentational + behaviour helper (markup via
   toolbarHtml(), behaviour via applyTool()). The CLICK is handled by the single
   delegated click handler in admin-ui.wireForm (it keeps the persistent #view to
   exactly ONE click listener; see wire.js + verify-wireform-leak.mjs). Zero
   runtime deps; no external library.
   ========================================================================== */
export const TOOLS = [
  { key: 'bold',    label: 'Bold' },
  { key: 'italic',  label: 'Italic' },
  { key: 'heading', label: 'Heading' },
  { key: 'list',    label: 'Bullet list' },
  { key: 'link',    label: 'Link' },
  { key: 'code',    label: 'Code' },
];

/* ---- Toolbar markup (rendered once per markdown field, above the textarea) -- */
export function toolbarHtml() {
  const btns = TOOLS.map(function (t) {
    return '<button class="md-toolbar__btn" type="button" data-mdtool="' + t.key + '"' +
      ' aria-label="' + t.label + '">' + t.label + '</button>';
  }).join('');
  return '<div class="md-toolbar" role="toolbar" aria-label="Text formatting">' + btns + '</div>';
}

/* ---- Apply one tool to a textarea (selection-aware, content-preserving) ---- */
export function applyTool(key, ta) {
  if (!ta || ta.tagName !== 'TEXTAREA') return;
  const val = ta.value;
  let start = ta.selectionStart;
  let end = ta.selectionEnd;
  if (start == null || start < 0) start = 0;
  if (end == null || end < start) end = start;
  if (start > val.length) start = val.length;
  if (end > val.length) end = val.length;
  const sel = val.slice(start, end);

  let next = val;
  let selStart = start;
  let selEnd = end;

  if (key === 'heading' || key === 'list') {
    const marker = (key === 'heading') ? '## ' : '- ';
    const lineStart = val.lastIndexOf('\n', start - 1) + 1;
    const already = val.slice(lineStart, lineStart + marker.length) === marker;
    if (already) {
      next = val.slice(0, lineStart) + val.slice(lineStart + marker.length);
      const delta = marker.length;
      selStart = (start > lineStart) ? start - delta : lineStart;
      selEnd = (end > lineStart) ? end - delta : lineStart;
    } else {
      next = val.slice(0, lineStart) + marker + val.slice(lineStart);
      selStart = start + marker.length;
      selEnd = end + marker.length;
    }
    if (selStart < lineStart) selStart = lineStart;
    if (selEnd < lineStart) selEnd = lineStart;
  } else if (key === 'link') {
    const label = sel || 'link text';
    const frag = '[' + label + '](url)';
    next = val.slice(0, start) + frag + val.slice(end);
    // Land on the "url" token so typing fills it in.
    const urlStart = start + label.length + 3; // '[' + label + ']('
    selStart = urlStart;
    selEnd = urlStart + 3;
  } else {
    const before = (key === 'bold') ? '**' : (key === 'code') ? '`' : '*';
    const after = before;
    if (sel) {
      next = val.slice(0, start) + before + sel + after + val.slice(end);
      selStart = start + before.length;
      selEnd = selStart + sel.length;
    } else {
      next = val.slice(0, start) + before + after + val.slice(end);
      selStart = start + before.length;
      selEnd = selStart;
    }
  }

  ta.value = next;
  try { ta.focus(); } catch (e) { /* SSR / harness: no focus */ }
  try { ta.setSelectionRange(selStart, selEnd); } catch (e) { /* non-textarea guard */ }
  // Route through the existing input pipeline (preview + record write).
  if (typeof ta.dispatchEvent === 'function') {
    try { ta.dispatchEvent(new Event('input', { bubbles: true })); } catch (e) { /* harness */ }
  }
}

const Toolbar = { TOOLS, toolbarHtml, applyTool };
export default Toolbar;
export { Toolbar };
