/* ==========================================================================
   Seneca 3D Integration - core/router.js
   A tiny hash router. pushState-free and file://-safe (hashes need no server).

   Public API:
     Router.route(pattern, handler, opts)  register a route
     Router.go(path)                       navigate (sets location.hash)
     Router.start()                        wire up + render initial route
     Router.getParams()                    params of the current route
     Router.getQuery()                     query object of the current route

   - pattern may contain ":param" segments, e.g. "/lessons/:id".
   - a route registered with { default: true } is the fallback for unknown
     routes (e.g. "#/" and any unrecognised path land on the dashboard).
   - "#/?q=..." and "/glossary?q=..." are both parsed into the query object.
   - a handler may return an HTML string (rendered into #view) or return null
     and render into #view itself.
   ========================================================================== */

const routes = [];
let state = { path: '', query: {}, params: {} };

function normalizePath(raw) {
  let p = (raw == null ? '' : String(raw)).replace(/^#/, '');
  if (p === '' ) p = '/';
  if (!p.startsWith('/')) p = '/' + p;
  return p;
}

function parseHash() {
  const raw = location.hash || '';
  const qIdx = raw.indexOf('?');
  const pathPart = (qIdx === -1 ? raw : raw.slice(0, qIdx)).replace(/^#/, '');
  const queryPart = qIdx === -1 ? '' : raw.slice(qIdx + 1);

  const query = {};
  try {
    new URLSearchParams(queryPart).forEach((v, k) => { query[k] = v; });
  } catch (_) { /* ignore malformed query strings */ }

  return { path: normalizePath(pathPart), query };
}

function matchPattern(pattern, path) {
  const pSegs = pattern.replace(/^\//, '').split('/').filter(Boolean);
  const sSegs = path.replace(/^\//, '').split('/').filter(Boolean);
  if (pSegs.length !== sSegs.length) return null;

  const params = {};
  for (let i = 0; i < pSegs.length; i++) {
    const p = pSegs[i];
    const s = sSegs[i];
    if (p.charAt(0) === ':') {
      try { params[p.slice(1)] = decodeURIComponent(s); }
      catch (_) { params[p.slice(1)] = s; }
    } else if (p !== s) {
      return null;
    }
  }
  return params;
}

function resolve(path) {
  // First, a concrete match in registration order.
  for (let i = 0; i < routes.length; i++) {
    const params = matchPattern(routes[i].pattern, path);
    if (params) return { handler: routes[i].handler, params };
  }
  // Otherwise fall back to the flagged default (or the very first route).
  const def = routes.find((r) => r.isDefault) || routes[0];
  if (def) return { handler: def.handler, params: {} };
  return null;
}

function render() {
  const { path, query } = parseHash();
  const view = document.getElementById('view');
  const found = resolve(path);

  if (found) {
    state = { path, query, params: found.params };
    let out = null;
    try {
      out = found.handler(found.params, query);
    } catch (err) {
      if (view) {
        view.textContent = '';
        const node = document.createElement('div');
        node.className = 'empty';
        node.innerHTML =
          '<div class="empty__title">View error</div>' +
          '<p class="empty__hint">' + String(err && err.message ? err.message : err) + '</p>';
        view.appendChild(node);
      }
      console.error('[router] view handler threw:', err);
      return;
    }
    if (view && typeof out === 'string') {
      view.innerHTML = out;
    }
  } else {
    state = { path, query, params: {} };
    if (view) {
      view.innerHTML =
        '<div class="empty">' +
        '<div class="empty__title">Nothing here yet</div>' +
        '<p class="empty__hint">No routes are registered.</p>' +
        '</div>';
    }
  }

  // Let nav + effects react to navigation.
  window.dispatchEvent(new CustomEvent('route:change', { detail: { path, query, params: state.params } }));
}

const Router = {
  route(pattern, handler, opts) {
    const o = opts || {};
    routes.push({
      pattern: normalizePath(pattern),
      handler,
      isDefault: !!o.default,
    });
    return Router;
  },

  go(path) {
    const target = '#' + normalizePath(path);
    if (location.hash === target) {
      render(); // re-render on explicit re-nav (e.g. same route, new intent)
    } else {
      location.hash = target;
    }
  },

  start() {
    window.addEventListener('hashchange', render);
    render();
    return Router;
  },

  getParams() { return state.params; },
  getQuery() { return state.query; },
  getPath() { return state.path; },
  _routes: routes,
  _render: render,
};

export default Router;
export { Router };
