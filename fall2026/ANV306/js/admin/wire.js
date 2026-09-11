/* ==========================================================================
   Seneca 3D Integration - js/admin/wire.js
   Idempotent event wiring on a PERSISTENT node.

   The admin's #view is never replaced, so a naive addEventListener on every
   re-render would stack handlers (one extra per render). wireOnce stores the
   (type, fn, capture) triples it added under node[key] and removes them before
   re-adding, so any number of passes yields exactly ONE handler per
   (type, capture). `key` lets independent concerns (form vs an index's
   add/delete handler vs a capture save-gate) coexist on the same node without
   clobbering each other. `handlers` maps event type -> fn, or { fn, capture }
   for a capture-phase listener.
   ========================================================================== */

export function wireOnce(root, key, handlers) {
  if (!root || !root.addEventListener) return;
  const bag = (root.__senecaWire = root.__senecaWire || {});
  const prev = bag[key] || [];
  for (let i = 0; i < prev.length; i++) root.removeEventListener(prev[i].type, prev[i].fn, prev[i].capture);
  bag[key] = [];
  for (const t in handlers) {
    const v = handlers[t];
    const fn = (v && typeof v === 'object' && 'fn' in v) ? v.fn : v;
    const capture = !!(v && typeof v === 'object' && v.capture);
    root.addEventListener(t, fn, capture);
    bag[key].push({ type: t, fn: fn, capture: capture });
  }
}

export default { wireOnce };
