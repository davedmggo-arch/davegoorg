/* ==========================================================================
   Seneca 3D Integration - core/data-loader.js
   Loads the seven JSON collections. Strategy (see persistence-decision.md):

     1. Try fetch('./data/<name>.json')  - works over http:// and any static
        host (same-origin).
     2. On failure (e.g. file:// CORS block, or a missing file), fall back to
        window.__SENECA_DATA (injected by data/data.js).
     3. If still missing, return a clean empty value and log a warning so the
        app can boot before any data exists.

   Public API:
     Data.get(name)   -> Promise<value>
     Data.all()       -> Promise<{ course, lessons, ... }>
     Data.invalidate(name)  drop the in-memory cache entry
     Data.collections  the known collection names
   ========================================================================== */

export const COLLECTIONS = [
  'course',
  'lessons',
  'glossary',
  'research',
  'progress',
  'projects',
  'reference',
  'shortcuts',
  'checklist',
  'artistic-checklist',
  'design-principles',
];

const cache = Object.create(null);

// Collections that are objects vs. arrays. Used to return a sensible empty
// value so consumers never hit "undefined is not iterable".
function emptyFor(name) {
  return (name === 'course' || name === 'progress') ? {} : [];
}

function bootstrap() {
  return (typeof window !== 'undefined' && window.__SENECA_DATA) || null;
}

function isFileProtocol() {
  return typeof location !== 'undefined' && location.protocol === 'file:';
}

async function load(name) {
  if (cache[name] !== undefined) return cache[name];

  // 1) fetch (http / static host). Under file:// same-origin fetch is blocked
  //    by CORS, so we skip it and go straight to the bootstrap to keep the
  //    console clean.
  if (typeof fetch === 'function' && !isFileProtocol()) {
    try {
      const res = await fetch('./data/' + name + '.json', { cache: 'no-store' });
      if (!res.ok) throw new Error('HTTP ' + res.status);
      const json = await res.json();
      cache[name] = json;
      return json;
    } catch (err) {
      // fall through to the bootstrap / empty fallback below
      console.warn('[data-loader] fetch("./data/' + name + '.json") failed:', err.message || err);
    }
  }

  // 2) file:// bootstrap
  const boot = bootstrap();
  if (boot && Object.prototype.hasOwnProperty.call(boot, name)) {
    cache[name] = boot[name];
    return boot[name];
  }

  // 3) clean empty value (does not throw)
  cache[name] = emptyFor(name);
  return cache[name];
}

const Data = {
  get: load,

  async all() {
    const out = {};
    await Promise.all(COLLECTIONS.map(async (name) => {
      out[name] = await load(name);
    }));
    return out;
  },

  invalidate(name) {
    if (name) delete cache[name];
    else for (const k in cache) delete cache[k];
  },

  collections: COLLECTIONS,
  _cache: cache,
};

export default Data;
export { Data };
