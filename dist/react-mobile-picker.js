import ze, { createContext as Oe, useMemo as F, useReducer as Pr, useCallback as A, useContext as Se, useState as de, useEffect as Pe, useRef as ve } from "react";
var Ce = { exports: {} }, te = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Cr() {
  if (Je)
    return te;
  Je = 1;
  var g = ze, l = Symbol.for("react.element"), o = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, f = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(R, p, x) {
    var h, C = {}, _ = null, S = null;
    x !== void 0 && (_ = "" + x), p.key !== void 0 && (_ = "" + p.key), p.ref !== void 0 && (S = p.ref);
    for (h in p)
      m.call(p, h) && !u.hasOwnProperty(h) && (C[h] = p[h]);
    if (R && R.defaultProps)
      for (h in p = R.defaultProps, p)
        C[h] === void 0 && (C[h] = p[h]);
    return { $$typeof: l, type: R, key: _, ref: S, props: C, _owner: f.current };
  }
  return te.Fragment = o, te.jsx = E, te.jsxs = E, te;
}
var ne = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Or() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && function() {
    var g = ze, l = Symbol.for("react.element"), o = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), R = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), k = Symbol.iterator, M = "@@iterator";
    function V(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = k && e[k] || e[M];
      return typeof r == "function" ? r : null;
    }
    var P = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        $("error", e, t);
      }
    }
    function $(e, r, t) {
      {
        var n = P.ReactDebugCurrentFrame, c = n.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var v = t.map(function(s) {
          return String(s);
        });
        v.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var J = !1, N = !1, q = !1, ae = !1, z = !1, L;
    L = Symbol.for("react.module.reference");
    function pe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === m || e === u || z || e === f || e === x || e === h || ae || e === S || J || N || q || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === C || e.$$typeof === E || e.$$typeof === R || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === L || e.getModuleId !== void 0));
    }
    function K(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
    }
    function oe(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case m:
          return "Fragment";
        case o:
          return "Portal";
        case u:
          return "Profiler";
        case f:
          return "StrictMode";
        case x:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case R:
            var r = e;
            return oe(r) + ".Consumer";
          case E:
            var t = e;
            return oe(t._context) + ".Provider";
          case p:
            return K(e, e.render, "ForwardRef");
          case C:
            var n = e.displayName || null;
            return n !== null ? n : j(e.type) || "Memo";
          case _: {
            var c = e, v = c._payload, s = c._init;
            try {
              return j(s(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, Y = 0, X, G, Z, ie, se, a, T;
    function Q() {
    }
    Q.__reactDisabledLog = !0;
    function Xe() {
      {
        if (Y === 0) {
          X = console.log, G = console.info, Z = console.warn, ie = console.error, se = console.group, a = console.groupCollapsed, T = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Q,
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
    function Ze() {
      {
        if (Y--, Y === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: X
            }),
            info: D({}, e, {
              value: G
            }),
            warn: D({}, e, {
              value: Z
            }),
            error: D({}, e, {
              value: ie
            }),
            group: D({}, e, {
              value: se
            }),
            groupCollapsed: D({}, e, {
              value: a
            }),
            groupEnd: D({}, e, {
              value: T
            })
          });
        }
        Y < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var he = P.ReactCurrentDispatcher, ge;
    function ue(e, r, t) {
      {
        if (ge === void 0)
          try {
            throw Error();
          } catch (c) {
            var n = c.stack.trim().match(/\n( *(at )?)/);
            ge = n && n[1] || "";
          }
        return `
` + ge + e;
      }
    }
    var me = !1, ce;
    {
      var Qe = typeof WeakMap == "function" ? WeakMap : Map;
      ce = new Qe();
    }
    function Ie(e, r) {
      if (!e || me)
        return "";
      {
        var t = ce.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      me = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = he.current, he.current = null, Xe();
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
            } catch (w) {
              n = w;
            }
            Reflect.construct(e, [], s);
          } else {
            try {
              s.call();
            } catch (w) {
              n = w;
            }
            e.call(s.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            n = w;
          }
          e();
        }
      } catch (w) {
        if (w && n && typeof w.stack == "string") {
          for (var i = w.stack.split(`
`), O = n.stack.split(`
`), y = i.length - 1, b = O.length - 1; y >= 1 && b >= 0 && i[y] !== O[b]; )
            b--;
          for (; y >= 1 && b >= 0; y--, b--)
            if (i[y] !== O[b]) {
              if (y !== 1 || b !== 1)
                do
                  if (y--, b--, b < 0 || i[y] !== O[b]) {
                    var I = `
` + i[y].replace(" at new ", " at ");
                    return e.displayName && I.includes("<anonymous>") && (I = I.replace("<anonymous>", e.displayName)), typeof e == "function" && ce.set(e, I), I;
                  }
                while (y >= 1 && b >= 0);
              break;
            }
        }
      } finally {
        me = !1, he.current = v, Ze(), Error.prepareStackTrace = c;
      }
      var B = e ? e.displayName || e.name : "", U = B ? ue(B) : "";
      return typeof e == "function" && ce.set(e, U), U;
    }
    function er(e, r, t) {
      return Ie(e, !1);
    }
    function rr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function le(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ie(e, rr(e));
      if (typeof e == "string")
        return ue(e);
      switch (e) {
        case x:
          return ue("Suspense");
        case h:
          return ue("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return er(e.render);
          case C:
            return le(e.type, r, t);
          case _: {
            var n = e, c = n._payload, v = n._init;
            try {
              return le(v(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ee = Object.prototype.hasOwnProperty, Ae = {}, Fe = P.ReactDebugCurrentFrame;
    function fe(e) {
      if (e) {
        var r = e._owner, t = le(e.type, e._source, r ? r.type : null);
        Fe.setExtraStackFrame(t);
      } else
        Fe.setExtraStackFrame(null);
    }
    function tr(e, r, t, n, c) {
      {
        var v = Function.call.bind(ee);
        for (var s in e)
          if (v(e, s)) {
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
            i && !(i instanceof Error) && (fe(c), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, s, typeof i), fe(null)), i instanceof Error && !(i.message in Ae) && (Ae[i.message] = !0, fe(c), d("Failed %s type: %s", t, i.message), fe(null));
          }
      }
    }
    var nr = Array.isArray;
    function Ee(e) {
      return nr(e);
    }
    function ar(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function or(e) {
      try {
        return Ne(e), !1;
      } catch {
        return !0;
      }
    }
    function Ne(e) {
      return "" + e;
    }
    function Me(e) {
      if (or(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(e)), Ne(e);
    }
    var re = P.ReactCurrentOwner, ir = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, $e, ye;
    ye = {};
    function sr(e) {
      if (ee.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ur(e) {
      if (ee.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function cr(e, r) {
      if (typeof e.ref == "string" && re.current && r && re.current.stateNode !== r) {
        var t = j(re.current.type);
        ye[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(re.current.type), e.ref), ye[t] = !0);
      }
    }
    function lr(e, r) {
      {
        var t = function() {
          We || (We = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function fr(e, r) {
      {
        var t = function() {
          $e || ($e = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var dr = function(e, r, t, n, c, v, s) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: s,
        // Record the component responsible for creating this element.
        _owner: v
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
    function vr(e, r, t, n, c) {
      {
        var v, s = {}, i = null, O = null;
        t !== void 0 && (Me(t), i = "" + t), ur(r) && (Me(r.key), i = "" + r.key), sr(r) && (O = r.ref, cr(r, c));
        for (v in r)
          ee.call(r, v) && !ir.hasOwnProperty(v) && (s[v] = r[v]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (v in y)
            s[v] === void 0 && (s[v] = y[v]);
        }
        if (i || O) {
          var b = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          i && lr(s, b), O && fr(s, b);
        }
        return dr(e, i, O, c, n, re.current, s);
      }
    }
    var be = P.ReactCurrentOwner, Ye = P.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var r = e._owner, t = le(e.type, e._source, r ? r.type : null);
        Ye.setExtraStackFrame(t);
      } else
        Ye.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function _e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
    }
    function Le() {
      {
        if (be.current) {
          var e = j(be.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function pr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ue = {};
    function hr(e) {
      {
        var r = Le();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ve(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = hr(r);
        if (Ue[t])
          return;
        Ue[t] = !0;
        var n = "";
        e && e._owner && e._owner !== be.current && (n = " It was passed a child from " + j(e._owner.type) + "."), H(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), H(null);
      }
    }
    function Ge(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Ee(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            _e(n) && Ve(n, r);
          }
        else if (_e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = V(e);
          if (typeof c == "function" && c !== e.entries)
            for (var v = c.call(e), s; !(s = v.next()).done; )
              _e(s.value) && Ve(s.value, r);
        }
      }
    }
    function gr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === C))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = j(r);
          tr(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Re) {
          Re = !0;
          var c = j(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            H(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), H(null);
            break;
          }
        }
        e.ref !== null && (H(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), H(null));
      }
    }
    var He = {};
    function Be(e, r, t, n, c, v) {
      {
        var s = pe(e);
        if (!s) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = pr(c);
          O ? i += O : i += Le();
          var y;
          e === null ? y = "null" : Ee(e) ? y = "array" : e !== void 0 && e.$$typeof === l ? (y = "<" + (j(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, i);
        }
        var b = vr(e, r, t, c, v);
        if (b == null)
          return b;
        if (s) {
          var I = r.children;
          if (I !== void 0)
            if (n)
              if (Ee(I)) {
                for (var B = 0; B < I.length; B++)
                  Ge(I[B], e);
                Object.freeze && Object.freeze(I);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ge(I, e);
        }
        if (ee.call(r, "key")) {
          var U = j(e), w = Object.keys(r).filter(function(Tr) {
            return Tr !== "key";
          }), Te = w.length > 0 ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!He[U + Te]) {
            var _r = w.length > 0 ? "{" + w.join(": ..., ") + ": ...}" : "{}";
            d(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Te, U, _r, U), He[U + Te] = !0;
          }
        }
        return e === m ? mr(b) : gr(b), b;
      }
    }
    function Er(e, r, t) {
      return Be(e, r, t, !0);
    }
    function yr(e, r, t) {
      return Be(e, r, t, !1);
    }
    var br = yr, Rr = Er;
    ne.Fragment = m, ne.jsx = br, ne.jsxs = Rr;
  }()), ne;
}
process.env.NODE_ENV === "production" ? Ce.exports = Cr() : Ce.exports = Or();
var W = Ce.exports;
const Sr = 216, kr = 36, wr = "off", ke = Oe(null);
ke.displayName = "PickerDataContext";
function we(g) {
  const l = Se(ke);
  if (l === null) {
    const o = new Error(
      `<${g} /> is missing a parent <Picker /> component.`
    );
    throw Error.captureStackTrace && Error.captureStackTrace(o, we), o;
  }
  return l;
}
const xe = Oe(null);
xe.displayName = "PickerActionsContext";
function je(g) {
  const l = Se(xe);
  if (l === null) {
    const o = new Error(
      `<${g} /> is missing a parent <Picker /> component.`
    );
    throw Error.captureStackTrace && Error.captureStackTrace(o, je), o;
  }
  return l;
}
function xr(g, l = (o) => o) {
  return g.slice().sort((o, m) => {
    const f = l(o), u = l(m);
    if (f === null || u === null)
      return 0;
    const E = f.compareDocumentPosition(u);
    return E & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : E & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  });
}
function jr(g, l) {
  switch (l.type) {
    case "REGISTER_OPTION": {
      const { key: o, option: m } = l;
      let f = [...g[o] || [], m];
      return f = xr(f, (u) => u.element.current), {
        ...g,
        [o]: f
      };
    }
    case "UNREGISTER_OPTION": {
      const { key: o, option: m } = l;
      return {
        ...g,
        [o]: (g[o] || []).filter((f) => f !== m)
      };
    }
    default:
      throw Error(`Unknown action: ${l.type}`);
  }
}
function Dr(g) {
  const {
    style: l,
    children: o,
    value: m,
    onChange: f,
    height: u = Sr,
    itemHeight: E = kr,
    wheelMode: R = wr,
    ...p
  } = g, x = F(
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
  ), h = F(
    () => ({
      height: `${u}px`,
      position: "relative",
      display: "flex",
      justifyContent: "center",
      overflow: "hidden",
      maskImage: "linear-gradient(to top, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent)",
      WebkitMaskImage: "linear-gradient(to top, transparent, transparent 5%, white 20%, white 80%, transparent 95%, transparent)"
    }),
    [u]
  ), [C, _] = Pr(jr, {}), S = F(
    () => ({ height: u, itemHeight: E, wheelMode: R, value: m, optionGroups: C }),
    [u, E, m, C, R]
  ), k = A(
    (P, d) => {
      if (m[P] === d)
        return !1;
      const $ = { ...m, [P]: d };
      return f($, P), !0;
    },
    [f, m]
  ), M = A((P, d) => (_({ type: "REGISTER_OPTION", key: P, option: d }), () => _({ type: "UNREGISTER_OPTION", key: P, option: d })), []), V = F(
    () => ({ registerOption: M, change: k }),
    [M, k]
  );
  return /* @__PURE__ */ W.jsxs(
    "div",
    {
      className: "picker-container",
      style: {
        ...h,
        ...l
      },
      ...p,
      children: [
        /* @__PURE__ */ W.jsx(xe.Provider, { value: V, children: /* @__PURE__ */ W.jsx(ke.Provider, { value: S, children: o }) }),
        /* @__PURE__ */ W.jsxs("div", { style: x, children: [
          /* @__PURE__ */ W.jsx(
            "div",
            {
              className: "picker-highlight-line",
              style: {
                position: "absolute",
                top: 0,
                bottom: "auto",
                left: 0,
                right: "auto",
                transform: "scaleY(0.5)"
              }
            }
          ),
          /* @__PURE__ */ W.jsx(
            "div",
            {
              className: "picker-highlight-line",
              style: {
                position: "absolute",
                top: "auto",
                bottom: 0,
                left: 0,
                right: "auto",
                transform: "scaleY(0.5)"
              }
            }
          )
        ] })
      ]
    }
  );
}
const De = Oe(null);
De.displayName = "PickerColumnDataContext";
function Ke(g) {
  const l = Se(De);
  if (l === null) {
    const o = new Error(`<${g} /> is missing a parent <Picker.Column /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o, Ke), o;
  }
  return l;
}
function Ir({
  style: g,
  children: l,
  name: o,
  ...m
}) {
  const { height: f, itemHeight: u, wheelMode: E, value: R, optionGroups: p } = we("Picker.Column"), x = F(
    () => R[o],
    [R, o]
  ), h = F(
    () => p[o] || [],
    [o, p]
  ), C = F(
    () => {
      let a = h.findIndex((T) => T.value === x);
      return a < 0 && (a = 0), a;
    },
    [h, x]
  ), _ = F(
    () => f / 2 - u * h.length + u / 2,
    [f, u, h]
  ), S = F(
    () => f / 2 - u / 2,
    [f, u]
  ), [k, M] = de(0);
  Pe(() => {
    M(f / 2 - u / 2 - C * u);
  }, [f, u, C]);
  const V = je("Picker.Column"), P = ve(k);
  P.current = k;
  const d = A(() => {
    let a = 0;
    const T = P.current;
    T >= S ? a = 0 : T <= _ ? a = h.length - 1 : a = -Math.round((T - S) / u), V.change(o, h[a].value) || M(f / 2 - u / 2 - a * u);
  }, [V, f, u, o, S, _, h]), [$, J] = de(0), [N, q] = de(!1), [ae, z] = de(0), L = A((a) => {
    a < _ ? a = _ - Math.pow(_ - a, 0.8) : a > S && (a = S + Math.pow(a - S, 0.8)), M(a);
  }, [S, _]), pe = A((a) => {
    z(a.targetTouches[0].pageY), J(k);
  }, [k]), K = A((a) => {
    a.cancelable && a.preventDefault(), N || q(!0);
    const T = $ + a.targetTouches[0].pageY - ae;
    L(T);
  }, [N, $, ae, L]), oe = A(() => {
    N && (q(!1), z(0), J(0), d());
  }, [d, N]), j = A(() => {
    N && (q(!1), z(0), M($), J(0));
  }, [N, $]), D = ve(null), Y = A((a) => {
    if (a.deltaY === 0)
      return;
    let T = a.deltaY * 0.1;
    Math.abs(T) < u && (T = u * Math.sign(T)), E === "normal" && (T = -T);
    const Q = k + T;
    L(Q);
  }, [u, k, L, E]), X = A(() => {
    d();
  }, [d]), G = A((a) => {
    E !== "off" && (a.cancelable && a.preventDefault(), Y(a), D.current && clearTimeout(D.current), D.current = setTimeout(() => {
      X();
    }, 200));
  }, [X, Y, D, E]), Z = ve(null);
  Pe(() => {
    const a = Z.current;
    return a && (a.addEventListener("touchmove", K, { passive: !1 }), a.addEventListener("wheel", G, { passive: !1 })), () => {
      a && (a.removeEventListener("touchmove", K), a.removeEventListener("wheel", G));
    };
  }, [K, G]);
  const ie = F(
    () => ({
      flex: "1 1 0%",
      maxHeight: "100%",
      transitionProperty: "transform",
      transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
      transitionDuration: N ? "0ms" : "300ms",
      transform: `translate3d(0, ${k}px, 0)`
    }),
    [k, N]
  ), se = F(
    () => ({ key: o }),
    [o]
  );
  return /* @__PURE__ */ W.jsx(
    "div",
    {
      style: {
        ...ie,
        ...g
      },
      ref: Z,
      onTouchStart: pe,
      onTouchEnd: oe,
      onTouchCancel: j,
      ...m,
      children: /* @__PURE__ */ W.jsx(De.Provider, { value: se, children: l })
    }
  );
}
function Ar(g) {
  return typeof g == "function";
}
function Fr({
  style: g,
  children: l,
  value: o,
  ...m
}) {
  const f = ve(null), { itemHeight: u, value: E } = we("Picker.Item"), R = je("Picker.Item"), { key: p } = Ke("Picker.Item");
  Pe(
    () => R.registerOption(p, { value: o, element: f }),
    [p, R, o]
  );
  const x = F(
    () => ({
      height: `${u}px`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }),
    [u]
  ), h = A(() => {
    R.change(p, o);
  }, [R, p, o]);
  return /* @__PURE__ */ W.jsx(
    "div",
    {
      style: {
        ...x,
        ...g
      },
      ref: f,
      onClick: h,
      ...m,
      children: Ar(l) ? l({ selected: E[p] === o }) : l
    }
  );
}
const Mr = Object.assign(Dr, {
  Column: Ir,
  Item: Fr
});
export {
  Mr as default
};
