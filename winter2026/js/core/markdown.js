/* ==========================================================================
   Seneca 3D Integration - core/markdown.js
   A TINY, SAFE markdown -> HTML renderer. No external library.

   Scope: headings (#, ##, ###), bold/italic, inline + fenced code, inline
   code, links, unordered/ordered lists, blockquotes, horizontal rules,
   paragraphs, line breaks.

   SAFETY MODEL: the raw markdown is escaped up-front (one pass), and every
   emitted tag is built by this renderer around that escaped text. Raw user
   HTML (e.g. <script>) is therefore turned into entities and can never run.
   We never feed raw markdown into innerHTML unprocessed.
   ========================================================================== */

const ESC_MAP = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

export function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, (c) => ESC_MAP[c]);
}

// Block-level link targets (javascript:/data:/vbscript:) are neutralised.
// The rest are left as-is; they are already HTML-escaped so the attribute is
// safe even if it contains quotes or spaces.
function sanitizeUrl(url) {
  const t = String(url).trim();
  if (/^(javascript|vbscript|data)\s*:/i.test(t)) return '#';
  return t;
}

// Inline formatting. Input MUST already be HTML-escaped.
export function inline(text) {
  // 1) protect inline code spans so their contents stay literal
  const codes = [];
  let s = text.replace(/`([^`\n]+)`/g, (_m, code) => {
    codes.push('<code>' + code + '</code>');
    return '\u0000' + (codes.length - 1) + '\u0000';
  });

  // 2) links: [label](url)
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_m, label, url) => {
    return '<a href="' + sanitizeUrl(url) + '" rel="noopener">' + label + '</a>';
  });

  // 3) bold: **text** or __text__
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  s = s.replace(/__([^_]+)__/g, '<strong>$1</strong>');

  // 4) italic: *text* or _text_ (avoid splitting snake_case identifiers)
  s = s.replace(/\*([^*\n]+)\*/g, '<em>$1</em>');
  s = s.replace(/(^|[^A-Za-z0-9_])_([^_\n]+)_(?=$|[^A-Za-z0-9_])/g, (_m, pre, body) => pre + '<em>' + body + '</em>');

  // 5) restore protected code spans
  s = s.replace(/\u0000(\d+)\u0000/g, (_m, i) => codes[+i]);
  return s;
}

function renderInlineBlock(text) {
  return inline(text.replace(/\n/g, '<br>'));
}

function renderBlocks(src) {
  const lines = src.replace(/\r\n?/g, '\n').split('\n');
  const out = [];
  let i = 0;
  let para = [];
  let olCounter = 0; // continuous ordered-list counter across interruptions

  function flushPara() {
    if (para.length) {
      out.push('<p>' + inline(para.join('<br>')) + '</p>');
      para = [];
    }
  }

  while (i < lines.length) {
    const line = lines[i].trim();

    if (line === '') { flushPara(); i++; continue; }

    // fenced code block
    if (/^```/.test(line)) {
      flushPara();
      i++;
      const buf = [];
      while (i < lines.length && !/^```/.test(lines[i].trim())) {
        buf.push(lines[i]);
        i++;
      }
      i++; // skip closing fence (or run past the end)
      out.push('<pre><code>' + buf.join('\n') + '</code></pre>');
      continue;
    }

    // headings #..###
    const h = line.match(/^(#{1,3})\s+(.*)$/);
    if (h) {
      flushPara();
      const level = h[1].length;
      out.push('<h' + level + '>' + inline(h[2]) + '</h' + level + '>');
      i++;
      continue;
    }

    // horizontal rule
    if (/^(-{3,}|\*{3,}|_{3,})$/.test(line)) {
      flushPara();
      out.push('<hr>');
      i++;
      continue;
    }

    // blockquote. NOTE: the whole source is escaped up-front, so the leading
    // ">" arrives here as "&gt;" - we match the escaped form.
    if (/^&gt;/.test(line)) {
      flushPara();
      const buf = [];
      while (i < lines.length && /^&gt;/.test(lines[i].trim())) {
        buf.push(lines[i].trim().replace(/^&gt;\s?/, ''));
        i++;
      }
      out.push('<blockquote>' + renderInlineBlock(buf.join('\n')) + '</blockquote>');
      continue;
    }

    // unordered list
    if (/^[-*+]\s+/.test(line)) {
      flushPara();
      const items = [];
      while (i < lines.length && /^[-*+]\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^[-*+]\s+/, ''));
        i++;
      }
      out.push('<ul>' + items.map((it) => '<li>' + inline(it) + '</li>').join('') + '</ul>');
      continue;
    }

    // ordered list (continuous numbering across interruptions)
    if (/^\d+\.\s+/.test(line)) {
      flushPara();
      const items = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(/^\d+\.\s+/, ''));
        i++;
      }
      olCounter += items.length;
      out.push('<ol start="' + (olCounter - items.length + 1) + '">' + items.map((it) => '<li>' + inline(it) + '</li>').join('') + '</ol>');
      continue;
    }

    // default: paragraph line
    para.push(line);
    i++;
  }

  flushPara();
  return out.join('\n');
}

export function render(markdown) {
  if (typeof markdown !== 'string') return '';
  if (markdown === '') return '';
  const escaped = escapeHtml(markdown);
  return renderBlocks(escaped);
}

const Markdown = { render, escapeHtml, inline };
export default Markdown;
export { Markdown };

if (typeof window !== 'undefined') window.Markdown = Markdown;
