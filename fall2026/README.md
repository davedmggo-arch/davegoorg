# 3D Integration in Visual Development - teaching site

A vanilla HTML/CSS/JS teaching site for Seneca's "3D Integration in Visual
Development" (Fall 2026, Semester 3). Zero runtime dependencies: no framework,
no bundler, no CDN, no npm packages, no SQL. It ships as two separate, read-
friendly pages over one shared data model:

- **Student app** - `index.html` (read-only course + local progress/XP).
- **Teacher console** - `teacher.html` (schema-driven editors + save/import/export).

See `../Knowledge_Base/Decisions/build-plan.md` for the full plan and decisions.

## What's here

```
site/
  index.html              # student app entry - boots core, seeds state, routes
  teacher.html            # teacher admin entry (loads js/admin.js, links admin.css)
  server.js               # zero-dep local server (static + data write API; regenerates data.js on save)
  css/
    tokens.css            # design tokens (color, type, spacing, shape, motion)
    base.css              # reset, layout primitives, nav, buttons, cards
    motion.css            # keyframes + entrance/transition utils (reduced-motion safe)
    views.css             # Phase 2a view styles (dashboard + lesson) + shared .md/.chip
    lookup.css            # Phase 2b lookup styles (glossary, research, projects, reference)
    admin.css             # Phase 3a admin surface (form engine, lists, savebar, dialog, toasts)
  js/
    core/
      router.js           # tiny hash router (file://-safe, pushState-free)
      data-loader.js      # fetch JSON, else file:// fallback to data/data.js
       markdown.js         # tiny, safe markdown -> HTML (escapes raw HTML)
       state.js            # reactive store (localStorage) + progress/XP
       progress-metrics.js # derived streak days + badges from local progress (Round 1)
       media.js            # shared student media renderer + focus-trapped lightbox (Round 1)
    views/
      shared.js           # view helpers (esc, chips, cards, splitCsv, safeHref, notFound)
       dashboard.js        # compact home: hero, ONE progress card, Last/This/Next week, Projects dropdown, roadmap
       lesson.js           # 6-beat lesson + guided subsections + per-beat media, buffer/delivery variants, nav
      glossary.js         # 1,175-term search/chip filter (bounded window) + term detail
       research.js         # research reports list + detail (safe Sources links, optional media)
       projects.js         # project index + brief/rubric/checkpoints/guardrails detail (+ optional media)
       reference.js        # two-section reference (Blender-Related + Books) list + detail (+ media)
      teacher-home.js     # admin overview: stats, one-idea, editors grid, import/export
      teacher-course.js   # schema-driven Course editor (COURSE_SCHEMA)
      teacher-lessons.js  # schema-driven Lessons index + editor (LESSON_SCHEMA), add/delete
      teacher-glossary.js # schema-driven Glossary index + editor, add/delete
      teacher-projects.js # schema-driven Projects index + editor, add/delete
      teacher-research.js # schema-driven Research index + editor, add/delete
      teacher-reference.js# schema-driven Reference index + editor, add/delete
     admin/
       admin-data.js       # in-memory store; save (POST) / export (Blob) / import (confirm)
       admin-ui.js         # schema-driven form engine + toast / confirmDialog / saveBar
       wire.js             # wireForm: delegated input/change/click on the persistent #view (no re-wire leak)
       toolbar.js          # markdown "RTF" toolbar (Bold/Italic/Heading/List/Link/Code) - inserts markdown
       media-editor.js     # teacher Before/After media editor (emits the student media contract)
    app.js                # student entry: boot, seed state, register routes, XP toasts
    admin.js              # admin entry: boot, register /admin routes, Router.start()
  data/
    course.json lessons.json projects.json research.json
    reference.json glossary.json progress.json
    data.js               # GENERATED file:// bootstrap (window.__SENECA_DATA)
  tools/                  # zero-dep Node seed/migration + data.js generator
  README.md
```

## Round 1 features

Round 1 adds six authorable surfaces on top of the shipped site. Every one is
**additive**: a record that carries none of the new fields renders byte-for-byte
the same as before (the shipped seed is the clean default), and all of it is
vanilla HTML/CSS/JS with zero runtime deps.

- **Media + lightbox** - a record can carry a `media` block
  (`{ before: [], after: [] }`), each a list of `MediaItem`s. `js/core/media.js`
  renders clickable thumbnails (image / video file / watch-link / placeholder),
  sanitises every URL to `http/https` only (anything else is inert), and opens a
  focus-trapped, keyboard-operable lightbox (Esc to close, arrows for previous /
  next) with a per-item caption. Used on lessons (per beat), projects, research,
  and Reference pages - including Books.
- **Guided-making subsections** - a lesson's guided-making beat can carry
  `guidedSections[]` (each `{ title, body, media? }`), rendered as ordered
  sub-steps under the verbatim `beats.guidedMaking`. `js/views/lesson.js`.
- **Two-section Reference** - `reference.json` records carry a `section`:
  `blender` (the 7 seed "Blender-Related" cheatsheets) or `books`
  (teacher-authored: `author`, `url`, `media`). `js/views/reference.js` groups
  them into two labeled sections and hides any that is empty.
- **Compact dashboard** - `#/` is now a focused course home: hero, ONE overall
  progress card (weeks read, streak days, badges, Continue CTA), a Last /
  This / Next week navigator, a keyboard-operable Projects dropdown, and the
  14-week roadmap at the end. The three quick-link cards were removed.
- **Teacher markdown "RTF" toolbar** - every markdown textarea in the teacher
  console gets a 6-button toolbar (Bold, Italic, Heading, Bullet list, Link,
  Code). It inserts **markdown syntax** (not HTML) and is selection-aware, so
  stored content stays verbatim and renders through the same escape-first
  pipeline. `js/admin/toolbar.js`.
- **Darker, higher-contrast input surface** - the markdown source editor
  (`.md-src`) and inputs now use a dark, theme-aware, high-contrast surface and
  text instead of the browser default, so the teacher's writing reads clearly.
   `css/admin.css`.

## Round 2 features

Round 2 sharpens the teacher console and makes the Reference surface fully
teacher-defined. Every change is **additive and non-destructive**: with the
default data the site renders exactly as before, the save payloads are
unchanged, and the canonical `site/data/*.json` seed is byte-unchanged. All of
it stays vanilla HTML/CSS/JS with zero runtime deps.

- **Teacher header nav** - the four editors (Glossary, Reference, Projects,
  Research) are now linked in the top nav (`teacher.html`), so they no longer
  live only in the dashboard grid. They reuse the existing dashboard-grid routes
  and labels plus the existing nav styling, so keyboard focus and active-link
  highlighting already apply.
- **Reference reorder** - each Reference index row (`teacher-reference.js`)
  gains `Up` / `Down` move buttons (aria-labelled; first/last guarded). Moving
  an entry swaps it with its neighbour and renumbers the whole list to a dense
  `order` 1..N, so only the `order` field mutates and every other field stays
  byte-faithful through save.
- **Custom reference sections** - the teacher can now create, rename, reorder,
  and remove named reference sections and assign any entry to any of them. The
  student Reference page (`reference.js`) groups and labels the entries by the
  teacher's sections, in the teacher's order. The shared model and sections
  manager live in `js/views/reference-sections.js`. This is **non-destructive**:
  with the default data (7 `section:"blender"` entries and no
  `course.referenceSections`) it renders exactly as before - the
  "Blender-Related" block populated and the "Books" block showing its empty
  note. The section list is the optional, teacher-authored
  `course.referenceSections:[{id,label,order}]` field, which is **absent in the
  seed**.
- **Collapsible Course page** - the long Course scroll is condensed
  (`js/views/teacher-course.js` + new `js/admin/fieldsets.js`, styled by
  `css/fieldsets.css`): Projects (per item), Weeks (per item), and the
  week-buffer fields fold into accessible native `<details>/<summary>`
  dropdowns (keyboard-operable and reduced-motion safe), while Identity and
  House rules stay open. It is **purely presentational** - the save payload is
  the in-memory course record, never the DOM, so it is byte-identical whether
   sections are open or closed.
- **Save gate (P1 fix)** - `server.js` is the Save gate for the teacher
   console. Its reference `section` rule was changed from the `blender`|`books`
   **enum to required + any string** (line 54) so it matches the client's
   free-string field: a custom-section entry now saves 200 + round-trips (the
   real-server `work/verify-round2-r23-contract.mjs` proves this, 16/0), while
   malformed input still 400s. Note: custom-section entries render with the
   **blender** card style (a design choice, not a bug).

Constraints held through Round 2: zero runtime deps, no emoji, every
hand-written file under 400 lines, non-destructive to the seed, and the
canonical `site/data/*.json` byte-unchanged. Run it the same way as the core
build - double-click `run-teaching-site.bat` for the student at `:8025/` and
the teacher at `/teacher`.

## Run it

### 1. One click (Windows) - recommended
Double-click `run-teaching-site.bat`. It starts the local server on **port
8025** in a tagged, minimized window and opens `http://localhost:8025` in
Chrome (falls back to your default browser). Close the window - or press
Enter - to stop it; the tagged server is killed, so no orphan `node` process
is left behind.

### 2. Node server, any port
    node site/server.js                 # serves site/ at http://localhost:8000
    node site/server.js --port 8025     # or any port (or PORT=8025 node site/server.js)
Node's built-in `http` module only. Besides the static files it exposes a
tiny file-backed write API for the teacher console:
    GET  /api/data/<name>               read a collection
    POST /api/data/<name>               write it back (rewrites site/data/<name>.json)
A successful `POST` also **regenerates `site/data/data.js`** from the seed
JSON, so a later `file://` open sees your edits.

**Loopback-only.** `server.js` binds explicitly to **`127.0.0.1`**, so the
static files and the teacher data API are reachable only on the local machine
- never on shared networks. `http://localhost:<port>` still works (localhost
resolves to loopback); use `--port`/`PORT` to change the port.

### 3. From disk (`file://`, no server)
Open `site/index.html` (or `site/teacher.html`) directly in **Firefox** (or
any browser that permits ES modules from disk). Same-origin `fetch()` is
blocked under `file://`, so `core/data-loader.js` falls back to the generated
`data/data.js` (`window.__SENECA_DATA`). No server, no tooling - but see the
save/import/export caveat below: **saving to disk requires a server**.

## Student vs. teacher

Two separate entries, two separate routers, one shared data model. There is no
"mode toggle" - they are distinct pages that read/write the same `data/*.json`.

- **Student (`index.html`)** - reads the course content (read-only) and tracks
  *local* progress in `localStorage` (see "Data model"). Marking a lesson
  *read* or *reflected* awards XP (a toast fires) and updates the Dashboard
  without a reload.
- **Teacher (`teacher.html`)** - edits the same collections through
  schema-driven forms, with a save / import / export panel.

### Student routes (`index.html`)

| Route | View |
|-------|------|
| `#/` and `#/dashboard` | Compact dashboard (hero, ONE overall progress card, Last/This/Next week, Projects dropdown, 14-week roadmap) |
| `#/lessons` | Lesson list |
| `#/lessons/:id` | Lesson (6 beats, buffer + delivery variants, actions, prev/next) |
| `#/glossary` | Glossary index: search + category chips + live count, grouped, bounded window |
| `#/glossary/:id` | One term: category, definition (markdown), source/chapter list |
| `#/research` | Research reports index (7 cards, newest first) |
| `#/research/:id` | Research report: summary, tags, full body, safe Sources links |
| `#/projects` | Project index (3 cards, fuller names, world/weeks/delivery) |
| `#/projects/:id` | Project brief: prompt, brief, rubric, deliverables, checkpoints, guardrails |
| `#/reference` | Reference index (7 cards, covers + for[] chips) |
| `#/reference/:id` | Reference page: covers, for[], full body |
| `#/teacher` | Pointer to the teacher console (a separate page: `teacher.html`) |
| unknown | falls back to the Dashboard default |

### Teacher routes (`teacher.html`)

| Route | View |
|-------|------|
| `#/admin` (default) | Overview: stats, one-idea, house rules, deliverables, editors grid, import/export panel |
| `#/admin/course` | Course editor (schema-driven form: scalars, weeks, house rules, projects list) |
| `#/admin/lessons` | Lessons index (add new / delete, jump to edit) |
| `#/admin/lessons/:id` | Lesson editor (6 markdown beats, further-reading list) |
| `#/admin/glossary` | Glossary index: bounded window + search + category chips + live count |
| `#/admin/glossary/:id` | Glossary term editor (category, term, anchor, definition, source); (category, anchor) duplicate guard |
| `#/admin/projects` | Projects index (add new / delete) |
| `#/admin/projects/:id` | Project editor (name, weeks, delivery, prompt/brief/rubric, deliverables, guardrails, checkpoints) |
| `#/admin/research` | Research index (reports, newest first; add new / delete) |
| `#/admin/research/:id` | Research report editor (summary + body, tags, sources) |
| `#/admin/reference` | Reference index (pages; add new / delete) |
| `#/admin/reference/:id` | Reference page editor (covers, for[], body, source) |

## Save / import / export

See `js/admin/admin-data.js`. Edits mutate an in-memory store; a Save persists.

- **In-memory store** - `AdminData.init()` loads all collections into a store
  (same-origin `fetch` over http, or `window.__SENECA_DATA` under `file://`).
- **Save** - `POST /api/data/<name>` to disk. **Only enabled online**
  (http/https). The server also regenerates `data/data.js`. Under `file://` the
  button is disabled and the UI routes you to Export instead.
- **Export** - always available (works under `file://`). Downloads a collection
  (or all seven) as a JSON file via a Blob URL, so you can carry edits to
  another machine or paste them back with Import.
- **Import** - always available. Paste or upload a JSON file for a collection;
  a **confirm dialog** gates the destructive overwrite.
- Destructive actions (delete a lesson, import-overwrite) are confirm-gated.

## Data model

Seven JSON collections under `site/data/` are the **single source of truth**.
The content collections are **verbatim markdown stored in JSON** - the app
never re-flowed or rewrites the prose; the tiny `core/markdown.js` renders it
and escapes any raw HTML.

| Collection | Contents |
|------------|----------|
| `course.json`    | one object - identity, house rules, the 3 projects, the 14 weeks |
| `lessons.json`   | 14 lessons - each with the six beats (markdown) + a further-reading list; Round 1 optional: per-beat `media` + `guidedSections` |
| `projects.json`  | 3 deliverables - brief, rubric, checkpoints, guardrails; Round 1 optional: `media` |
| `research.json`  | 7 reports - summary, full body, tags, sources; Round 1 optional: `media` |
| `reference.json` | 7 cheat-sheet pages - covers, "for" list, body; `section` = `blender` (seed default) or `books` (teacher-authored: `author`, `url`, `media`) |
| `glossary.json`  | 1,175 terms - category, term, anchor, definition, source |
| `progress.json`  | the XP/progress model (per-lesson read, per-reflect, checkpoints) |

`progress.json` is only a **seed**: on first boot `core/state.js` copies it
once into `localStorage` (`seneca.*`) and all student progress lives locally
after that. `data.js` is **generated** (see Tools) - do not edit it by hand.

## Tools

Zero-dependency Node scripts under `site/tools/` (Node's own `fs`/`path` only):

- `node site/tools/migrate-all.js`
  Rebuilds every `site/data/*.json` seed from the **source markdown**, in
  dependency order, and regenerates `data.js`. This is the canonical way to
  (re)generate the seed after changing the source content.

  **Safety guard (Round 1).** Before it writes anything, `migrate-all.js`
  (and `generate-data-js.js`) check the *current* seed for teacher-authored
   content the source markdown does not have - non-empty lesson `media`,
   non-empty lesson `guidedSections`, or a reference Books record
   (`section: "books"`, `author`, or a book `url`). If any is found it
   **refuses to run** (exit 1) and
  prints an "Export first" message, because rebuilding from the source `.md`
  would drop that content. **Export** your console content first
  (teacher.html -> Export, then Import after migrating). To override and wipe
  it anyway, pass `--force`: `node site/tools/migrate-all.js --force`. A clean
  seed (reference `section: "blender"`, no media/sections/books) is unaffected.
  See `tools/lib/safety-guard.js`.
- `node site/tools/generate-data-js.js`
  Rebuilds just the `file://` bootstrap `site/data/data.js` from the current
  JSON collections (also run automatically by the server after every Save).
- `node site/tools/verify-seed.js`
  Sanity-checks the regenerated seeds (verbatim/shape assertions).

## Content is the source of truth

The words in the course are yours. The app renders the markdown verbatim and
never invents or rewrites lesson prose; the teacher console edits the exact
JSON that ships. If a rendered page and a JSON file ever disagree, the JSON -
and the source markdown behind it - is authoritative.

## Verify

- `node site/tools/migrate-all.js` - rebuild the seed (clean, all seeds valid).
- `node site/tools/verify-seed.js` - verbatim/shape checks (124 assertions).
- `node work/verify-glossary.mjs` - glossary model (302 assertions).
- `node work/verify-glossary-uniqueness.mjs` - no duplicate (category, anchor) pairs (10 assertions).
- `node work/verify-wireform-leak.mjs` - the admin `wireForm` keeps the persistent
  `#view` to exactly ONE delegated click listener (no re-wire leak; 10 assertions).
- `node work/verify-phase2a.mjs` - student dashboard + lesson under a DOM-free
  mock: routes, XP awards, media queries, reduced-motion guards, no-emoji and
  no-runtime-dep invariants (78 assertions).
- `node work/verify-phase2a-media.mjs` - the lesson media lightbox: thumbnails,
  URL sanitizer, caption + prev/next, inert `javascript:`/`data:` (94 assertions).
- `node work/verify-phase2b.mjs` - the four lookup views against the real JSON:
  bounded initial paint, debounced filter, category chips, 8 routes, safe
  markdown (64 assertions).
- `node work/verify-phase2b-media.mjs` - media wired into the lookup views
  (projects/research/reference), render-when-absent identical (99 assertions).
- `node work/verify-phase3a-admin.mjs` - the teacher console: `file://` boot
  no-op, offline/online save, export/import valid JSON (117 assertions).
- `node work/verify-phase3-media.mjs` - teacher Before/After media editor +
  Guided-Making subsections round-trip (93 assertions).
- `node work/verify-phase4-reference.mjs` - two-section Reference render, `order`
  preserved, empty section hidden, Books link-out safe (93 assertions).
- `node work/verify-phase5-dashboard.mjs` - compact dashboard: progress card,
  Last/This/Next week resolution, Projects dropdown, no quick-links (87 assertions).
- `node work/verify-phase6-rtf-toolbar.mjs` - the markdown RTF toolbar: each button
  inserts the right markdown at the cursor, content preserved (50 assertions).
- `node work/roundtrip-test.mjs` - live POST round-trip: edit a beat, Save, and
  assert both `lessons.json` and `data.js` are updated (6 assertions).

Round 1 safety + integrity proofs (author to a copy; the canonical seed is
byte-unchanged, SHA-256 verified before/after):
- `node work/proof-guard-detect.cjs` - the re-migration guard detects the new
  authorable fields (`media`, `guidedSections`, book `section:"books"`) and
  ignores clean records (12 assertions).
- `node work/proof-guard-e2e.cjs` - author media + a guided-section + a Book, then
  `migrate-all` REFUSES without `--force` (seed byte-unchanged) and REPLACES with
  `--force`; restore is byte-identical (13 assertions).
- `node work/proof-module-graph.cjs` - every `import` specifier in `site/js/**`
  resolves to a real file; both entry pages boot clean (0 missing).

Round 2 harnesses (full Round 2 suite is **1524 passed / 0 failed**):
- `node work/verify-round2-r21.mjs` - teacher header nav + reference reorder
  (Up/Down, `order` renumbered dense 1..N; 7 blender entries byte-faithful).
- `node work/verify-round2-r22.mjs` - collapsible Course: `fieldsets.js` exists
  (< 400 lines), `admin-ui.js` stays 395, no Course field lost, both entries boot.
- `node work/verify-round2-r23.mjs` - custom reference sections: fallback
  derivation, card-style rule, non-destructive (seed has no `referenceSections`).
- `node work/verify-round2-r23-contract.mjs` - **real-server** P1 contract: a
  custom-section entry saves 200 + round-trips; malformed → 400 (16/0, port 8033).
- `node work/verify-p21-schema.mjs` - Case D updated to the any-string `section`
  contract (34/0).

Both entries boot and render their home view under `file://` with no console
errors (covered by the Phase 2a and 3a harnesses).

## Constraints honoured

- Vanilla HTML/CSS/JS only; no framework, no bundler, no CDN; zero runtime deps.
- Server binds to `127.0.0.1` (loopback only); the data API is off shared networks.
- Relative paths throughout (works under `file://`).
- `prefers-reduced-motion` collapses all animation.
- Hand-written code files under 400 lines (the generated `data/*.json` +
  `data.js` are the verbatim content and exempt); lowercase-hyphenated names;
  no emoji anywhere.
