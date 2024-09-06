var H = Object.defineProperty;
var V = (t, e, n) => e in t ? H(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var _ = (t, e, n) => V(t, typeof e != "symbol" ? e + "" : e, n);
function g() {
}
function R(t) {
  return t();
}
function j() {
  return /* @__PURE__ */ Object.create(null);
}
function b(t) {
  t.forEach(R);
}
function U(t) {
  return typeof t == "function";
}
function W(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function q(t) {
  return Object.keys(t).length === 0;
}
function m(t, e, n) {
  t.insertBefore(e, n || null);
}
function a(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function k(t) {
  return document.createElement(t);
}
function z(t) {
  return document.createTextNode(t);
}
function O() {
  return z(" ");
}
function $(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function D(t) {
  return Array.from(t.childNodes);
}
let v;
function p(t) {
  v = t;
}
const d = [], A = [];
let h = [];
const B = [], F = /* @__PURE__ */ Promise.resolve();
let w = !1;
function G() {
  w || (w = !0, F.then(I));
}
function C(t) {
  h.push(t);
}
const x = /* @__PURE__ */ new Set();
let f = 0;
function I() {
  if (f !== 0)
    return;
  const t = v;
  do {
    try {
      for (; f < d.length; ) {
        const e = d[f];
        f++, p(e), J(e.$$);
      }
    } catch (e) {
      throw d.length = 0, f = 0, e;
    }
    for (p(null), d.length = 0, f = 0; A.length; ) A.pop()();
    for (let e = 0; e < h.length; e += 1) {
      const n = h[e];
      x.has(n) || (x.add(n), n());
    }
    h.length = 0;
  } while (d.length);
  for (; B.length; )
    B.pop()();
  w = !1, x.clear(), p(t);
}
function J(t) {
  if (t.fragment !== null) {
    t.update(), b(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(C);
  }
}
function K(t) {
  const e = [], n = [];
  h.forEach((i) => t.indexOf(i) === -1 ? e.push(i) : n.push(i)), n.forEach((i) => i()), h = e;
}
const Q = /* @__PURE__ */ new Set();
function X(t, e) {
  t && t.i && (Q.delete(t), t.i(e));
}
function Y(t, e, n) {
  const { fragment: i, after_update: c } = t.$$;
  i && i.m(e, n), C(() => {
    const o = t.$$.on_mount.map(R).filter(U);
    t.$$.on_destroy ? t.$$.on_destroy.push(...o) : b(o), t.$$.on_mount = [];
  }), c.forEach(C);
}
function Z(t, e) {
  const n = t.$$;
  n.fragment !== null && (K(n.after_update), b(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function tt(t, e) {
  t.$$.dirty[0] === -1 && (d.push(t), G(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function et(t, e, n, i, c, o, s = null, l = [-1]) {
  const y = v;
  p(t);
  const r = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: o,
    update: g,
    not_equal: c,
    bound: j(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (y ? y.$$.context : [])),
    // everything else
    callbacks: j(),
    dirty: l,
    skip_bound: !1,
    root: e.target || y.$$.root
  };
  s && s(r.root);
  let E = !1;
  if (r.ctx = n ? n(t, e.props || {}, (u, S, ...P) => {
    const N = P.length ? P[0] : S;
    return r.ctx && c(r.ctx[u], r.ctx[u] = N) && (!r.skip_bound && r.bound[u] && r.bound[u](N), E && tt(t, u)), S;
  }) : [], r.update(), E = !0, b(r.before_update), r.fragment = i ? i(r.ctx) : !1, e.target) {
    if (e.hydrate) {
      const u = D(e.target);
      r.fragment && r.fragment.l(u), u.forEach(a);
    } else
      r.fragment && r.fragment.c();
    e.intro && X(t.$$.fragment), Y(t, e.target, e.anchor), I();
  }
  p(y);
}
class nt {
  constructor() {
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    _(this, "$$");
    /**
     * ### PRIVATE API
     *
     * Do not use, may change at any time
     *
     * @type {any}
     */
    _(this, "$$set");
  }
  /** @returns {void} */
  $destroy() {
    Z(this, 1), this.$destroy = g;
  }
  /**
   * @template {Extract<keyof Events, string>} K
   * @param {K} type
   * @param {((e: Events[K]) => void) | null | undefined} callback
   * @returns {() => void}
   */
  $on(e, n) {
    if (!U(n))
      return g;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const c = i.indexOf(n);
      c !== -1 && i.splice(c, 1);
    };
  }
  /**
   * @param {Partial<Props>} props
   * @returns {void}
   */
  $set(e) {
    this.$$set && !q(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
const it = "4";
typeof window < "u" && (window.__svelte || (window.__svelte = { v: /* @__PURE__ */ new Set() })).v.add(it);
const M = "oscd-didactic-bassoon", T = "0.0.1";
function L(t) {
  let e;
  return {
    c() {
      e = k("h2"), e.textContent = "Welcome to oscd-didactic-bassoon";
    },
    m(n, i) {
      m(n, e, i);
    },
    d(n) {
      n && a(e);
    }
  };
}
function ot(t) {
  let e, n, i, c, o = (
    /*doc*/
    t[0] && L()
  );
  return {
    c() {
      o && o.c(), e = O(), n = k("input"), i = O(), c = k("input"), $(n, "type", "hidden"), $(n, "name", "package-name"), n.value = M, $(c, "type", "hidden"), $(c, "name", "package-version"), c.value = T;
    },
    m(s, l) {
      o && o.m(s, l), m(s, e, l), m(s, n, l), m(s, i, l), m(s, c, l);
    },
    p(s, [l]) {
      /*doc*/
      s[0] ? o || (o = L(), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null);
    },
    i: g,
    o: g,
    d(s) {
      s && (a(e), a(n), a(i), a(c)), o && o.d(s);
    }
  };
}
function ct(t, e, n) {
  let { doc: i } = e, { editCount: c } = e;
  return t.$$set = (o) => {
    "doc" in o && n(0, i = o.doc), "editCount" in o && n(1, c = o.editCount);
  }, [i, c];
}
class rt extends nt {
  constructor(e) {
    super(), et(this, e, ct, ot, W, { doc: 0, editCount: 1 });
  }
}
class ft extends HTMLElement {
  constructor() {
    super(...arguments);
    _(this, "plugin");
    _(this, "_doc");
  }
  connectedCallback() {
    var i;
    this.attachShadow({ mode: "open" }), this.plugin = new rt({
      target: this.shadowRoot,
      props: {
        doc: this._doc,
        editCount: -1
      }
    });
    const n = st();
    (i = this.shadowRoot) == null || i.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this.plugin && this.plugin.$set({ doc: n });
  }
  set editCount(n) {
    this.plugin && this.plugin.$set({ editCount: n });
  }
}
function st() {
  const t = `${M}-v${T}-style`, e = lt(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function lt() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  ft as default
};
