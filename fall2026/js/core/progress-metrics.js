/* ==========================================================================
   Seneca 3D Integration - core/progress-metrics.js
   Pure, side-effect-free DERIVED displays computed from the existing local
   progress model (read status + reflects + XP + read days). Nothing here is
   persisted or written anywhere; it only reads the local State so the
   Dashboard can show a day-streak and a small set of badges. The XP numbers
   and the award logic in state.js are untouched - these are displays only.

   Public API:
     streakDays(progress) -> number   (consecutive calendar days with a read)
     badges(progress)     -> Array<{id,name,req,earned}>
     localDay(date)       -> string   ("YYYY-MM-DD", device time zone)
   ========================================================================== */

// Local calendar day as "YYYY-MM-DD" in the device time zone (no UTC drift).
function localDay(date) {
  const d = date instanceof Date ? date : new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}

// Consecutive calendar days (local time) with at least one lesson read, ending
// today or yesterday. A read today counts; a read only yesterday still counts
// as a 1-day streak (the day is not lost until it is fully past). No reads
// yet -> 0. Reads on non-consecutive days reset the run to the tail.
function streakDays(progress) {
  const days = (progress && progress.daysRead) || [];
  const set = {};
  for (const d of days) set[String(d)] = true;
  const has = (k) => set[k] === true;
  let cursor = new Date();
  if (!has(localDay(cursor))) cursor.setDate(cursor.getDate() - 1); // allow a yesterday start
  let n = 0;
  while (has(localDay(cursor))) { n += 1; cursor.setDate(cursor.getDate() - 1); }
  return n;
}

// A small, tasteful set of badges derived from the current local progress.
// `earned` is computed live; `req` is the plain-language requirement shown in
// the chip tooltip for locked badges.
function badges(progress) {
  const weeks = (progress && progress.weeks) || {};
  const ids = Object.keys(weeks);
  let readCount = 0, reflectCount = 0;
  for (const id of ids) {
    const w = weeks[id];
    if (!w) continue;
    if (w.read) readCount += 1;
    if (w.reflected) reflectCount += 1;
  }
  const xp = (progress && progress.xp && progress.xp.total) || 0;
  const streak = streakDays(progress);
  const weekOne = ['wk-01', 'wk-02', 'wk-03'].every(function (id) { return weeks[id] && weeks[id].read; });

  return [
    { id: 'first-steps', name: 'First Steps', req: 'Read your first lesson', earned: readCount >= 1 },
    { id: 'week-one', name: 'Week One', req: 'Weeks 1-3 read', earned: weekOne },
    { id: 'streak-3', name: 'Streak x3', req: 'A 3-day reading streak', earned: streak >= 3 },
    { id: 'scholar', name: 'Scholar', req: 'Log 5 reflections', earned: reflectCount >= 5 },
    { id: 'level-5', name: 'Level 5', req: 'Reach 175 XP', earned: xp >= 175 },
  ];
}

export { streakDays, badges, localDay };
export default { streakDays, badges, localDay };

// Exposed on window so the file:// (non-module) context can also reach it.
if (typeof window !== 'undefined') window.ProgressMetrics = { streakDays, badges, localDay };
