/* ==========================================================================
   Seneca 3D Integration - js/admin/admin-data.js
   The teacher admin DATA STORE: an in-memory, editable copy of the seven
   JSON collections, plus the save / export / import actions.

   Model (see Knowledge_Base/Decisions/persistence-decision.md):
     - Content is the single source of truth. The admin loads all collections
       from Data.all() into an in-memory `current` map and edits THAT.
     - Save-to-disk = POST /api/data/<name> (requires the node server).
       A successful POST also regenerates site/data/data.js server-side, so the
       file:// bootstrap stays in sync (see site/server.js).
     - Export is ALWAYS available (client-side JSON download) - the file://
       escape hatch that never needs a server.
     - Import is ALWAYS available (paste / upload JSON), confirm-gated in the UI.
     - Under file://, save is NOT faked: isServerOnline() is false and the UI
       routes the teacher to Export instead.

   Public API:
     AdminData.init()            load all collections (await once at boot)
     AdminData.get(name)         current in-memory value for a collection
     AdminData.all()             { course, lessons, ... }
     AdminData.set(name, value)  replace a collection in the store
     AdminData.changed(name)     has this collection drifted from what was loaded
     AdminData.dirty()           [names] of collections with unsaved edits
     AdminData.reset(name)       revert one collection to its loaded value
     AdminData.isServerOnline()  true over http(s), false under file://
     AdminData.saveOne(name)     POST one collection (server required)
     AdminData.saveAll()         POST every changed collection
     AdminData.exportOne(name)   trigger a JSON download of one collection
     AdminData.exportAll()       trigger a JSON download of the whole bundle
     AdminData.importOne(name, parsed)   set the store from parsed JSON
     AdminData.importAll(bundle)         set every present collection
     AdminData.COLLECTIONS       the known collection names
   ========================================================================== */

import Data, { COLLECTIONS } from '../core/data-loader.js';

const ALLOWED = new Set(COLLECTIONS);

// `current` is the editable in-memory store. `original` is the snapshot of
// what was last loaded / last saved, used to compute the unsaved-changes set.
const current = Object.create(null);
const original = Object.create(null);

function clone(value) {
  return (value === undefined) ? null : JSON.parse(JSON.stringify(value));
}

function isServerOnline() {
  const proto = (typeof location !== 'undefined') ? location.protocol : '';
  return proto === 'http:' || proto === 'https:';
}

function changed(name) {
  if (!ALLOWED.has(name)) return false;
  if (current[name] === undefined) return false;
  return JSON.stringify(current[name]) !== JSON.stringify(original[name]);
}

function dirty() {
  const out = [];
  for (const name of COLLECTIONS) {
    if (current[name] !== undefined && changed(name)) out.push(name);
  }
  return out;
}

// ---- Client-side export (works over file:// and http) ---------------------

function download(filename, text) {
  const blob = new Blob([text], { type: 'application/json; charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.rel = 'noopener';
  document.body.appendChild(a);
  a.click();
  if (a.parentNode) a.parentNode.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportOne(name) {
  if (!ALLOWED.has(name)) throw new Error('unknown collection: ' + name);
  if (current[name] === undefined) throw new Error('no value for: ' + name);
  const text = JSON.stringify(current[name], null, 2) + '\n';
  download(name + '.json', text);
  return { name, bytes: text.length };
}

function exportAll() {
  const bundle = {};
  for (const name of COLLECTIONS) {
    if (current[name] !== undefined) bundle[name] = current[name];
  }
  const text = JSON.stringify(bundle, null, 2) + '\n';
  download('seneca-data-bundle.json', text);
  return { collections: Object.keys(bundle).length, bytes: text.length };
}

// ---- Import (store-level; the confirm gate lives in the UI) ---------------

function importOne(name, parsed) {
  if (!ALLOWED.has(name)) throw new Error('unknown collection: ' + name);
  current[name] = clone(parsed);
  return { name };
}

function importAll(bundle) {
  const names = [];
  for (const name of COLLECTIONS) {
    if (bundle && Object.prototype.hasOwnProperty.call(bundle, name)) {
      current[name] = clone(bundle[name]);
      names.push(name);
    }
  }
  return { collections: names };
}

// ---- Save to disk (server required) ---------------------------------------

async function postCollection(name, value) {
  const payload = JSON.stringify(value, null, 2) + '\n';
  const res = await fetch('/api/data/' + name, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: payload,
  });
  if (!res.ok) {
    let detail = '';
    try { detail = (await res.json()).error || res.statusText; } catch (_) { detail = res.statusText; }
    throw new Error('save failed: ' + name + ' (' + res.status + ' ' + detail + ')');
  }
  const meta = await res.json().catch(() => ({}));
  return Object.assign({ name, bytes: payload.length }, meta);
}

async function saveOne(name) {
  if (!ALLOWED.has(name)) throw new Error('unknown collection: ' + name);
  if (current[name] === undefined) throw new Error('no value for: ' + name);
  if (!isServerOnline()) {
    throw new Error('offline: save needs the node server (run: node site/server.js). Use Export instead.');
  }
  const meta = await postCollection(name, current[name]);
  original[name] = clone(current[name]); // a clean save clears the "changed" flag
  return meta;
}

async function saveAll() {
  const targets = dirty();
  if (targets.length === 0) return { saved: [], skipped: [], note: 'no unsaved changes' };
  if (!isServerOnline()) {
    throw new Error('offline: save needs the node server. Export the bundle to capture your edits.');
  }
  const saved = [];
  const skipped = [];
  for (const name of targets) {
    try {
      const meta = await postCollection(name, current[name]);
      original[name] = clone(current[name]);
      saved.push(name);
    } catch (err) {
      skipped.push({ name, error: err.message });
    }
  }
  return { saved, skipped };
}

const AdminData = {
  async init() {
    const all = await Data.all();
    for (const name of COLLECTIONS) {
      const value = (all && all[name] !== undefined) ? all[name] : (name === 'course' || name === 'progress' ? {} : []);
      current[name] = clone(value);
      original[name] = clone(value);
    }
    return AdminData.all();
  },

  get(name) { return current[name]; },

  all() {
    const out = {};
    for (const name of COLLECTIONS) out[name] = current[name];
    return out;
  },

  set(name, value) {
    if (!ALLOWED.has(name)) throw new Error('unknown collection: ' + name);
    current[name] = clone(value);
    return current[name];
  },

  changed,
  dirty,
  reset(name) {
    if (!ALLOWED.has(name)) return;
    current[name] = clone(original[name]);
  },

  isServerOnline,
  saveOne,
  saveAll,
  exportOne,
  exportAll,
  importOne,
  importAll,
  COLLECTIONS,
};

export default AdminData;
export { AdminData };

if (typeof window !== 'undefined') window.AdminData = AdminData;
