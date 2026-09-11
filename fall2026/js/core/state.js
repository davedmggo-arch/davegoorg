/* ==========================================================================
   Seneca 3D Integration - core/state.js
   A tiny reactive store persisted to localStorage under a namespaced key
   ("seneca.<name>"). It backs progress.json-style student state (mark read,
   reflect, checkpoint) and the XP value.

   Public API:
     State.get(name, fallback)
     State.set(name, value)
     State.subscribe(name, fn) -> unsubscribe
     State.progress.markRead(lessonId)
     State.progress.reflect(lessonId)
     State.progress.setCheckpoint(lessonId, status)
     State.progress.get()
     State.xp.get()          -> total XP (number)
     State.xp.add(points)    -> awards XP and emits an 'xp:toast' event
     State.reset()

   Persistence is best-effort: if localStorage is unavailable (private mode,
   some file:// contexts), the store still works in-memory for the session.
   ========================================================================== */

const NS = 'seneca';

function key(name) { return NS + '.' + name; }

function storage() {
  try { return (typeof localStorage !== 'undefined') ? localStorage : null; }
  catch (_) { return null; }
}

function read(name, fallback) {
  const ls = storage();
  if (!ls) return fallback;
  let raw = null;
  try { raw = ls.getItem(key(name)); } catch (_) { return fallback; }
  if (raw == null) return fallback;
  try { return JSON.parse(raw); }
  catch (_) { return fallback; }
}

const listeners = new Map(); // name -> Set<fn>

function emit(name, value) {
  const set = listeners.get(name);
  if (!set) return;
  for (const fn of set) {
    try { fn(value, name); }
    catch (err) { if (typeof console !== 'undefined') console.error('[state] listener threw:', err); }
  }
}

function fire(detail) {
  if (typeof window === 'undefined' || typeof window.CustomEvent !== 'function') return;
  window.dispatchEvent(new CustomEvent('xp:toast', { detail }));
}

const State = {
  get(name, fallback) {
    const v = read(name, undefined);
    return v === undefined ? (fallback !== undefined ? fallback : null) : v;
  },

  set(name, value) {
    const ls = storage();
    if (ls) {
      try { ls.setItem(key(name), JSON.stringify(value)); }
      catch (err) { if (typeof console !== 'undefined') console.warn('[state] persist failed:', err.message); }
    }
    emit(name, value);
    return value;
  },

  subscribe(name, fn) {
    if (!listeners.has(name)) listeners.set(name, new Set());
    listeners.get(name).add(fn);
    return function unsubscribe() {
      const set = listeners.get(name);
      if (set) set.delete(fn);
    };
  },

  _listeners: listeners,
  _key: key,
  _read: read,
  _storage: storage,
};

/* ==========================================================================
   Progress + XP helpers (operate on the 'progress' store)
   ========================================================================== */

const XP_DEFAULTS = { total: 0, perCheckpoint: 250, perReflect: 25, perLessonRead: 10 };

function getProgress() {
  const base = State.get('progress', {}) || {};
  return {
    student: base.student || { name: '', id: '' },
    xp: Object.assign({}, XP_DEFAULTS, base.xp || {}),
    weeks: base.weeks || {},
    projects: base.projects || {},
    daysRead: Array.isArray(base.daysRead) ? base.daysRead.slice() : [],
    updatedAt: base.updatedAt || new Date().toISOString(),
  };
}

function setProgress(p) {
  p.updatedAt = new Date().toISOString();
  return State.set('progress', p);
}

function week(id) {
  return { read: false, reflected: false, checkpointStatus: 'pending', note: '' };
}

// Local calendar day as "YYYY-MM-DD" in the device time zone (no UTC drift).
function localDay(date) {
  const d = date instanceof Date ? date : new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

// Record today as a day-with-a-read (idempotent). Purely additive: it never
// touches XP or the existing award logic, only tracks streak-relevant days.
function recordReadDay(p) {
  if (!Array.isArray(p.daysRead)) p.daysRead = [];
  const today = localDay(new Date());
  if (p.daysRead.indexOf(today) === -1) p.daysRead.push(today);
}

// Apply a mutation that may award XP; persists once, then emits a toast if
// anything was gained.
function applyAction(mutate) {
  const p = getProgress();
  let gained = 0;
  mutate(p, function add(amount) { gained += (Number(amount) || 0); });
  if (gained > 0) p.xp.total = (p.xp.total || 0) + gained;
  setProgress(p);
  if (gained > 0) fire({ points: gained, total: p.xp.total, reason: 'action' });
  return { gained: gained, total: p.xp.total };
}

function markRead(id) {
  return applyAction(function (p, add) {
    const w = p.weeks[id] || week(id);
    if (!w.read) { w.read = true; add(p.xp.perLessonRead); recordReadDay(p); }
    p.weeks[id] = w;
  });
}

function reflect(id) {
  return applyAction(function (p, add) {
    const w = p.weeks[id] || week(id);
    if (!w.reflected) { w.reflected = true; add(p.xp.perReflect); }
    p.weeks[id] = w;
  });
}

function setCheckpoint(id, status) {
  return applyAction(function (p, add) {
    const w = p.weeks[id] || week(id);
    const prev = w.checkpointStatus;
    w.checkpointStatus = status;
    if (prev !== 'passed' && status === 'passed') add(p.xp.perCheckpoint);
    p.weeks[id] = w;
  });
}

function addXp(points) {
  const p = getProgress();
  const delta = Number(points) || 0;
  p.xp.total = (p.xp.total || 0) + delta;
  setProgress(p);
  fire({ points: delta, total: p.xp.total, reason: 'xp.add' });
  return { points: delta, total: p.xp.total };
}

State.progress = {
  get: getProgress,
  markRead: markRead,
  reflect: reflect,
  setCheckpoint: setCheckpoint,
};

State.xp = {
  get: function () { return getProgress().xp.total || 0; },
  add: addXp,
};

State.reset = function () {
  return State.set('progress', {
    student: { name: '', id: '' },
    xp: Object.assign({}, XP_DEFAULTS),
    weeks: {},
    projects: {},
    updatedAt: new Date().toISOString(),
  });
};

export default State;
export { State };

if (typeof window !== 'undefined') window.State = State;
