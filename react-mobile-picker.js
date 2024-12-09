import qe, { createContext as Pe, useMemo as I, useReducer as br, useCallback as D, useContext as Ce, useState as fe, useEffect as _e, useRef as de } from "react";
var Te = { exports: {} }, ee = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Rr() {
  if (He)
    return ee;
  He = 1;
  var m = qe, l = Symbol.for("react.element"), o = Symbol.for("react.fragment"), g = Object.prototype.hasOwnProperty, f = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(R, v, w) {
    var h, C = {}, _ = null, x = null;
    w !== void 0 && (_ = "" + w), v.key !== void 0 && (_ = "" + v.key), v.ref !== void 0 && (x = v.ref);
    for (h in v)
      g.call(v, h) && !u.hasOwnProperty(h) && (C[h] = v[h]);
    if (R && R.defaultProps)
      for (h in v = R.defaultProps, v)
        C[h] === void 0 && (C[h] = v[h]);
    return { $$typeof: l, type: R, key: _, ref: x, props: C, _owner: f.current };
  }
  return ee.Fragment = o, ee.jsx = E, ee.jsxs = E, ee;
}
var re = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function _r() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var m = qe, l = Symbol.for("react.element"), o = Symbol.for("react.portal"), g = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), R = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), x = Symbol.for("react.offscreen"), S = Symbol.iterator, N = "@@iterator";
    function U(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = S && e[S] || e[N];
      return typeof r == "function" ? r : null;
    }
    var P = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        W("error", e, t);
      }
    }
    function W(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, c = n.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var d = t.map(function(s) {
          return String(s);
        });
        d.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, d);
      }
    }
    var B = !1, F = !1, q = !1, te = !1, z = !1, L;
    L = Symbol.for("react.module.reference");
    function ve(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === g || e === u || z || e === f || e === w || e === h || te || e === x || B || F || q || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === C || e.$$typeof === E || e.$$typeof === R || e.$$typeof === v || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === L || e.getModuleId !== void 0));
    }
    function J(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function A(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case g:
          return "Fragment";
        case o:
          return "Portal";
        case u:
          return "Profiler";
        case f:
          return "StrictMode";
        case w:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return ne(r) + ".Consumer";
          case E:
            var t = e;
            return ne(t._context) + ".Provider";
          case v:
            return J(e, e.render, "ForwardRef");
          case C:
            var n = e.displayName || null;
            return n !== null ? n : A(e.type) || "Memo";
          case _: {
            var c = e, d = c._payload, s = c._init;
            try {
              return A(s(d));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var k = Object.assign, Y = 0, K, V, X, ae, oe, a, T;
    function Z() {
    }
    Z.__reactDisabledLog = !0;
    function Je() {
      {
        if (Y === 0) {
          K = console.log, V = console.info, X = console.warn, ae = console.error, oe = console.group, a = console.groupCollapsed, T = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Z,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Y++;
      }
    }
    function Ke() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: k({}, e, {
              value: K
            }),
            info: k({}, e, {
              value: V
            }),
            warn: k({}, e, {
              value: X
            }),
            error: k({}, e, {
              value: ae
            }),
            group: k({}, e, {
              value: oe
            }),
            groupCollapsed: k({}, e, {
              value: a
            }),
            groupEnd: k({}, e, {
              value: T
            })
          });
        }
        Y < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pe = P.ReactCurrentDispatcher, he;
    function ie(e, r, t) {
      {
        if (he === void 0)
          try {
            throw Error();
          } catch (c) {
            var n = c.stack.trim().match(/\n( *(at )?)/);
            he = n && n[1] || "";
          }
        return `
` + he + e;
      }
    }
    var me = !1, se;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      se = new Xe();
    }
    function je(e, r) {
      if (!e || me)
        return "";
      {
        var t = se.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      me = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var d;
      d = pe.current, pe.current = null, Je();
      try {
        if (r) {
          var s = function() {
            throw Error();
          };
          if (Object.defineProperty(s.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(s, []);
            } catch (M) {
              n = M;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (M) {
              n = M;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (M) {
            n = M;
          }
          e();
        }
      } catch (M) {
        if (M && n && typeof M.stack == "string") {
          for (var i = M.stack.split(`
`), O = n.stack.split(`
`), y = i.length - 1, b = O.length - 1; y >= 1 && b >= 0 && i[y] !== O[b]; )
            b--;
          for (; y >= 1 && b >= 0; y--, b--)
            if (i[y] !== O[b]) {
              if (y !== 1 || b !== 1)
                do
                  if (y--, b--, b < 0 || i[y] !== O[b]) {
                    var j = `
` + i[y].replace(" at new ", " at ");
                    return e.displayName && j.includes("<anonymous>") && (j = j.replace("<anonymous>", e.displayName)), typeof e == "function" && se.set(e, j), j;
                  }
                while (y >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        me = !1, pe.current = d, Ke(), Error.prepareStackTrace = c;
      }
      var H = e ? e.displayName || e.name : "", Ge = H ? ie(H) : "";
      return typeof e == "function" && se.set(e, Ge), Ge;
    }
    function Ze(e, r, t) {
      return je(e, !1);
    }
    function Qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ue(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return je(e, Qe(e));
      if (typeof e == "string")
        return ie(e);
      switch (e) {
        case w:
          return ie("Suspense");
        case h:
          return ie("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            return Ze(e.render);
          case C:
            return ue(e.type, r, t);
          case _: {
            var n = e, c = n._payload, d = n._init;
            try {
              return ue(d(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ce = Object.prototype.hasOwnProperty, De = {}, Ie = P.ReactDebugCurrentFrame;
    function le(e) {
      if (e) {
        var r = e._owner, t = ue(e.type, e._source, r ? r.type : null);
        Ie.setExtraStackFrame(t);
      } else
        Ie.setExtraStackFrame(null);
    }
    function er(e, r, t, n, c) {
      {
        var d = Function.call.bind(ce);
        for (var s in e)
          if (d(e, s)) {
            var i = void 0;
            try {
              if (typeof e[s] != "function") {
                var O = Error((n || "React class") + ": " + t + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              i = e[s](r, s, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              i = y;
            }
            i && !(i instanceof Error) && (le(c), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, s, typeof i), le(null)), i instanceof Error && !(i.message in De) && (De[i.message] = !0, le(c), p("Failed %s type: %s", t, i.message), le(null));
          }
      }
    }
    var rr = Array.isArray;
    function ge(e) {
      return rr(e);
    }
    function tr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function nr(e) {
      try {
        return Ae(e), !1;
      } catch {
        return !0;
      }
    }
    function Ae(e) {
      return "" + e;
    }
    function Fe(e) {
      if (nr(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tr(e)), Ae(e);
    }
    var Q = P.ReactCurrentOwner, ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ne, Me, Ee;
    Ee = {};
    function or(e) {
      if (ce.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ir(e) {
      if (ce.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function sr(e, r) {
      if (typeof e.ref == "string" && Q.current && r && Q.current.stateNode !== r) {
        var t = A(Q.current.type);
        Ee[t] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(Q.current.type), e.ref), Ee[t] = !0);
      }
    }
    function ur(e, r) {
      {
        var t = function() {
          Ne || (Ne = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function cr(e, r) {
      {
        var t = function() {
          Me || (Me = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var lr = function(e, r, t, n, c, d, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: d
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function fr(e, r, t, n, c) {
      {
        var d, s = {}, i = null, O = null;
        t !== void 0 && (Fe(t), i = "" + t), ir(r) && (Fe(r.key), i = "" + r.key), or(r) && (O = r.ref, sr(r, c));
        for (d in r)
          ce.call(r, d) && !ar.hasOwnProperty(d) && (s[d] = r[d]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (d in y)
            s[d] === void 0 && (s[d] = y[d]);
        }
        if (i || O) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && ur(s, b), O && cr(s, b);
        }
        return lr(e, i, O, c, n, Q.current, s);
      }
    }
    var ye = P.ReactCurrentOwner, $e = P.ReactDebugCurrentFrame;
    function G(e) {
      if (e) {
        var r = e._owner, t = ue(e.type, e._source, r ? r.type : null);
        $e.setExtraStackFrame(t);
      } else
        $e.setExtraStackFrame(null);
    }
    var be;
    be = !1;
    function Re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function We() {
      {
        if (ye.current) {
          var e = A(ye.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function dr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ye = {};
    function vr(e) {
      {
        var r = We();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Le(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = vr(r);
        if (Ye[t])
          return;
        Ye[t] = !0;
        var n = "";
        e && e._owner && e._owner !== ye.current && (n = " It was passed a child from " + A(e._owner.type) + "."), G(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), G(null);
      }
    }
    function Ue(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ge(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            Re(n) && Le(n, r);
          }
        else if (Re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = U(e);
          if (typeof c == "function" && c !== e.entries)
            for (var d = c.call(e), s; !(s = d.next()).done; )
              Re(s.value) && Le(s.value, r);
        }
      }
    }
    function pr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === v || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === C))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = A(r);
          er(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !be) {
          be = !0;
          var c = A(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function hr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            G(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), G(null);
            break;
          }
        }
        e.ref !== null && (G(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), G(null));
      }
    }
    function Ve(e, r, t, n, c, d) {
      {
        var s = ve(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = dr(c);
          O ? i += O : i += We();
          var y;
          e === null ? y = "null" : ge(e) ? y = "array" : e !== void 0 && e.$$typeof === l ? (y = "<" + (A(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, i);
        }
        var b = fr(e, r, t, c, d);
        if (b == null)
          return b;
        if (s) {
          var j = r.children;
          if (j !== void 0)
            if (n)
              if (ge(j)) {
                for (var H = 0; H < j.length; H++)
                  Ue(j[H], e);
                Object.freeze && Object.freeze(j);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ue(j, e);
        }
        return e === g ? hr(b) : pr(b), b;
      }
    }
    function mr(e, r, t) {
      return Ve(e, r, t, !0);
    }
    function gr(e, r, t) {
      return Ve(e, r, t, !1);
    }
    var Er = gr, yr = mr;
    re.Fragment = g, re.jsx = Er, re.jsxs = yr;
  }()), re;
}
process.env.NODE_ENV === "production" ? Te.exports = Rr() : Te.exports = _r();
var $ = Te.exports;
const Tr = 216, Pr = 36, Cr = "off", Oe = Pe(null);
Oe.displayName = "PickerDataContext";
function xe(m) {
  const l = Ce(Oe);
  if (l === null) {
    const o = new Error(
      `<${m} /> is missing a parent <Picker /> component.`
    );
    throw Error.captureStackTrace && Error.captureStackTrace(o, xe), o;
  }
  return l;
}
const Se = Pe(null);
Se.displayName = "PickerActionsContext";
function we(m) {
  const l = Ce(Se);
  if (l === null) {
    const o = new Error(
      `<${m} /> is missing a parent <Picker /> component.`
    );
    throw Error.captureStackTrace && Error.captureStackTrace(o, we), o;
  }
  return l;
}
function Or(m, l = (o) => o) {
  return m.slice().sort((o, g) => {
    const f = l(o), u = l(g);
    if (f === null || u === null)
      return 0;
    const E = f.compareDocumentPosition(u);
    return E & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : E & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function xr(m, l) {
  switch (l.type) {
    case "REGISTER_OPTION": {
      const { key: o, option: g } = l;
      let f = [...m[o] || [], g];
      return f = Or(f, (u) => u.element.current), {
        ...m,
        [o]: f
      };
    }
    case "UNREGISTER_OPTION": {
      const { key: o, option: g } = l;
      return {
        ...m,
        [o]: (m[o] || []).filter((f) => f !== g)
      };
    }
    default:
      throw Error(`Unknown action: ${l.type}`);
  }
}
function Sr(m) {
  const {
    style: l,
    children: o,
    value: g,
    onChange: f,
    height: u = Tr,
    itemHeight: E = Pr,
    wheelMode: R = Cr,
    ...v
  } = m, w = I(
    () => ({
      height: E,
      marginTop: -(E / 2),
      position: "absolute",
      top: "50%",
      left: 0,
      width: "100%",
      pointerEvents: "none",
      zIndex: 1
    }),
    [E]
  ), h = I(
    () => ({
      height: `${u}px`,
      position: "relative",
      display: "flex",
      justifyContent: "center",
      overflow: "hidden",
      maskImage: "linear-gradient(to top, transparent, transparent 5%, white 15%, white 85%, transparent 95%, transparent)",
      WebkitMaskImage: "linear-gradient(to top, transparent, transparent 5%, white 15%, white 85%, transparent 95%, transparent)"
    }),
    [u]
  ), [C, _] = br(xr, {}), x = I(
    () => ({ height: u, itemHeight: E, wheelMode: R, value: g, optionGroups: C }),
    [u, E, g, C, R]
  ), S = D(
    (P, p) => {
      if (g[P] === p)
        return !1;
      const W = { ...g, [P]: p };
      return f(W, P), !0;
    },
    [f, g]
  ), N = D((P, p) => (_({ type: "REGISTER_OPTION", key: P, option: p }), () => _({ type: "UNREGISTER_OPTION", key: P, option: p })), []), U = I(
    () => ({ registerOption: N, change: S }),
    [N, S]
  );
  return /* @__PURE__ */ $.jsxs(
    "div",
    {
      className: "picker-container",
      style: {
        ...h,
        ...l
      },
      ...v,
      children: [
        /* @__PURE__ */ $.jsx(Se.Provider, { value: U, children: /* @__PURE__ */ $.jsx(Oe.Provider, { value: x, children: o }) }),
        /* @__PURE__ */ $.jsxs("div", { style: w, children: [
          /* @__PURE__ */ $.jsx(
            "div",
            {
              className: "picker-highlight-line",
              style: {
                position: "absolute",
                top: 0,
                bottom: "auto",
                left: 0,
                right: "auto"
              }
            }
          ),
          /* @__PURE__ */ $.jsx(
            "div",
            {
              className: "picker-highlight-line",
              style: {
                position: "absolute",
                top: "auto",
                bottom: 0,
                left: 0,
                right: "auto"
              }
            }
          )
        ] })
      ]
    }
  );
}
const ke = Pe(null);
ke.displayName = "PickerColumnDataContext";
function ze(m) {
  const l = Ce(ke);
  if (l === null) {
    const o = new Error(`<${m} /> is missing a parent <Picker.Column /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, ze), o;
  }
  return l;
}
function wr({
  style: m,
  children: l,
  name: o,
  ...g
}) {
  const { height: f, itemHeight: u, wheelMode: E, value: R, optionGroups: v } = xe("Picker.Column"), w = I(
    () => R[o],
    [R, o]
  ), h = I(
    () => v[o] || [],
    [o, v]
  ), C = I(
    () => {
      let a = h.findIndex((T) => T.value === w);
      return a < 0 && (a = 0), a;
    },
    [h, w]
  ), _ = I(
    () => f / 2 - u * h.length + u / 2,
    [f, u, h]
  ), x = I(
    () => f / 2 - u / 2,
    [f, u]
  ), [S, N] = fe(0);
  _e(() => {
    N(f / 2 - u / 2 - C * u);
  }, [f, u, C]);
  const U = we("Picker.Column"), P = de(S);
  P.current = S;
  const p = D(() => {
    let a = 0;
    const T = P.current;
    T >= x ? a = 0 : T <= _ ? a = h.length - 1 : a = -Math.round((T - x) / u), U.change(o, h[a].value) || N(f / 2 - u / 2 - a * u);
  }, [U, f, u, o, x, _, h]), [W, B] = fe(0), [F, q] = fe(!1), [te, z] = fe(0), L = D((a) => {
    a < _ ? a = _ - Math.pow(_ - a, 0.8) : a > x && (a = x + Math.pow(a - x, 0.8)), N(a);
  }, [x, _]), ve = D((a) => {
    z(a.targetTouches[0].pageY), B(S);
  }, [S]), J = D((a) => {
    a.cancelable && a.preventDefault(), F || q(!0);
    const T = W + a.targetTouches[0].pageY - te;
    L(T);
  }, [F, W, te, L]), ne = D(() => {
    F && (q(!1), z(0), B(0), p());
  }, [p, F]), A = D(() => {
    F && (q(!1), z(0), N(W), B(0));
  }, [F, W]), k = de(null), Y = D((a) => {
    if (a.deltaY === 0)
      return;
    let T = a.deltaY * 0.1;
    Math.abs(T) < u && (T = u * Math.sign(T)), E === "normal" && (T = -T);
    const Z = S + T;
    L(Z);
  }, [u, S, L, E]), K = D(() => {
    p();
  }, [p]), V = D((a) => {
    E !== "off" && (a.cancelable && a.preventDefault(), Y(a), k.current && clearTimeout(k.current), k.current = setTimeout(() => {
      K();
    }, 200));
  }, [K, Y, k, E]), X = de(null);
  _e(() => {
    const a = X.current;
    return a && (a.addEventListener("touchmove", J, { passive: !1 }), a.addEventListener("wheel", V, { passive: !1 })), () => {
      a && (a.removeEventListener("touchmove", J), a.removeEventListener("wheel", V));
    };
  }, [J, V]);
  const ae = I(
    () => ({
      flex: "1 1 0%",
      maxHeight: "100%",
      transitionProperty: "transform",
      transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      transitionDuration: F ? "0ms" : "300ms",
      transform: `translate3d(0, ${S}px, 0)`
    }),
    [S, F]
  ), oe = I(
    () => ({ key: o }),
    [o]
  );
  return /* @__PURE__ */ $.jsx(
    "div",
    {
      style: {
        ...ae,
        ...m
      },
      ref: X,
      onTouchStart: ve,
      onTouchEnd: ne,
      onTouchCancel: A,
      ...g,
      children: /* @__PURE__ */ $.jsx(ke.Provider, { value: oe, children: l })
    }
  );
}
function kr(m) {
  return typeof m == "function";
}
function jr({
  style: m,
  children: l,
  value: o,
  ...g
}) {
  const f = de(null), { itemHeight: u, value: E } = xe("Picker.Item"), R = we("Picker.Item"), { key: v } = ze("Picker.Item");
  _e(
    () => R.registerOption(v, { value: o, element: f }),
    [v, R, o]
  );
  const w = I(
    () => ({
      height: `${u}px`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }),
    [u]
  ), h = D(() => {
    R.change(v, o);
  }, [R, v, o]);
  return /* @__PURE__ */ $.jsx(
    "div",
    {
      style: {
        ...w,
        ...m
      },
      ref: f,
      onClick: h,
      ...g,
      children: kr(l) ? l({ selected: E[v] === o }) : l
    }
  );
}
const Ir = Object.assign(Sr, {
  Column: wr,
  Item: jr
});
export {
  Ir as default
};
