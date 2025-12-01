(async () => {
  (function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const Y of document.querySelectorAll('link[rel="modulepreload"]')) o(Y);
    new MutationObserver((Y) => {
      for (const L of Y) if (L.type === "childList") for (const ul of L.addedNodes) ul.tagName === "LINK" && ul.rel === "modulepreload" && o(ul);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function O(Y) {
      const L = {};
      return Y.integrity && (L.integrity = Y.integrity), Y.referrerPolicy && (L.referrerPolicy = Y.referrerPolicy), Y.crossOrigin === "use-credentials" ? L.credentials = "include" : Y.crossOrigin === "anonymous" ? L.credentials = "omit" : L.credentials = "same-origin", L;
    }
    function o(Y) {
      if (Y.ep) return;
      Y.ep = true;
      const L = O(Y);
      fetch(Y.href, L);
    }
  })();
  var ri = {
    exports: {}
  }, Ae = {};
  var Ud;
  function hv() {
    if (Ud) return Ae;
    Ud = 1;
    var m = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
    function O(o, Y, L) {
      var ul = null;
      if (L !== void 0 && (ul = "" + L), Y.key !== void 0 && (ul = "" + Y.key), "key" in Y) {
        L = {};
        for (var _l in Y) _l !== "key" && (L[_l] = Y[_l]);
      } else L = Y;
      return Y = L.ref, {
        $$typeof: m,
        type: o,
        key: ul,
        ref: Y !== void 0 ? Y : null,
        props: L
      };
    }
    return Ae.Fragment = r, Ae.jsx = O, Ae.jsxs = O, Ae;
  }
  var Nd;
  function gv() {
    return Nd || (Nd = 1, ri.exports = hv()), ri.exports;
  }
  var B = gv(), bi = {
    exports: {}
  }, G = {};
  var Rd;
  function rv() {
    if (Rd) return G;
    Rd = 1;
    var m = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), O = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), Y = Symbol.for("react.profiler"), L = Symbol.for("react.consumer"), ul = Symbol.for("react.context"), _l = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), C = Symbol.for("react.activity"), fl = Symbol.iterator;
    function Ql(y) {
      return y === null || typeof y != "object" ? null : (y = fl && y[fl] || y["@@iterator"], typeof y == "function" ? y : null);
    }
    var Z = {
      isMounted: function() {
        return false;
      },
      enqueueForceUpdate: function() {
      },
      enqueueReplaceState: function() {
      },
      enqueueSetState: function() {
      }
    }, w = Object.assign, Zl = {};
    function Nl(y, E, M) {
      this.props = y, this.context = E, this.refs = Zl, this.updater = M || Z;
    }
    Nl.prototype.isReactComponent = {}, Nl.prototype.setState = function(y, E) {
      if (typeof y != "object" && typeof y != "function" && y != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, y, E, "setState");
    }, Nl.prototype.forceUpdate = function(y) {
      this.updater.enqueueForceUpdate(this, y, "forceUpdate");
    };
    function pt() {
    }
    pt.prototype = Nl.prototype;
    function Rl(y, E, M) {
      this.props = y, this.context = E, this.refs = Zl, this.updater = M || Z;
    }
    var Kl = Rl.prototype = new pt();
    Kl.constructor = Rl, w(Kl, Nl.prototype), Kl.isPureReactComponent = true;
    var dt = Array.isArray;
    function xl() {
    }
    var k = {
      H: null,
      A: null,
      T: null,
      S: null
    }, Jl = Object.prototype.hasOwnProperty;
    function Mt(y, E, M) {
      var U = M.ref;
      return {
        $$typeof: m,
        type: y,
        key: E,
        ref: U !== void 0 ? U : null,
        props: M
      };
    }
    function Ja(y, E) {
      return Mt(y.type, E, y.props);
    }
    function Dt(y) {
      return typeof y == "object" && y !== null && y.$$typeof === m;
    }
    function wl(y) {
      var E = {
        "=": "=0",
        ":": "=2"
      };
      return "$" + y.replace(/[=:]/g, function(M) {
        return E[M];
      });
    }
    var Oa = /\/+/g;
    function qt(y, E) {
      return typeof y == "object" && y !== null && y.key != null ? wl("" + y.key) : E.toString(36);
    }
    function Tt(y) {
      switch (y.status) {
        case "fulfilled":
          return y.value;
        case "rejected":
          throw y.reason;
        default:
          switch (typeof y.status == "string" ? y.then(xl, xl) : (y.status = "pending", y.then(function(E) {
            y.status === "pending" && (y.status = "fulfilled", y.value = E);
          }, function(E) {
            y.status === "pending" && (y.status = "rejected", y.reason = E);
          })), y.status) {
            case "fulfilled":
              return y.value;
            case "rejected":
              throw y.reason;
          }
      }
      throw y;
    }
    function _(y, E, M, U, x) {
      var V = typeof y;
      (V === "undefined" || V === "boolean") && (y = null);
      var al = false;
      if (y === null) al = true;
      else switch (V) {
        case "bigint":
        case "string":
        case "number":
          al = true;
          break;
        case "object":
          switch (y.$$typeof) {
            case m:
            case r:
              al = true;
              break;
            case F:
              return al = y._init, _(al(y._payload), E, M, U, x);
          }
      }
      if (al) return x = x(y), al = U === "" ? "." + qt(y, 0) : U, dt(x) ? (M = "", al != null && (M = al.replace(Oa, "$&/") + "/"), _(x, E, M, "", function(Ru) {
        return Ru;
      })) : x != null && (Dt(x) && (x = Ja(x, M + (x.key == null || y && y.key === x.key ? "" : ("" + x.key).replace(Oa, "$&/") + "/") + al)), E.push(x)), 1;
      al = 0;
      var Ll = U === "" ? "." : U + ":";
      if (dt(y)) for (var zl = 0; zl < y.length; zl++) U = y[zl], V = Ll + qt(U, zl), al += _(U, E, M, V, x);
      else if (zl = Ql(y), typeof zl == "function") for (y = zl.call(y), zl = 0; !(U = y.next()).done; ) U = U.value, V = Ll + qt(U, zl++), al += _(U, E, M, V, x);
      else if (V === "object") {
        if (typeof y.then == "function") return _(Tt(y), E, M, U, x);
        throw E = String(y), Error("Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead.");
      }
      return al;
    }
    function p(y, E, M) {
      if (y == null) return y;
      var U = [], x = 0;
      return _(y, U, "", "", function(V) {
        return E.call(M, V, x++);
      }), U;
    }
    function j(y) {
      if (y._status === -1) {
        var E = y._result;
        E = E(), E.then(function(M) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = M);
        }, function(M) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = M);
        }), y._status === -1 && (y._status = 0, y._result = E);
      }
      if (y._status === 1) return y._result.default;
      throw y._result;
    }
    var cl = typeof reportError == "function" ? reportError : function(y) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var E = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
          error: y
        });
        if (!window.dispatchEvent(E)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", y);
        return;
      }
      console.error(y);
    }, dl = {
      map: p,
      forEach: function(y, E, M) {
        p(y, function() {
          E.apply(this, arguments);
        }, M);
      },
      count: function(y) {
        var E = 0;
        return p(y, function() {
          E++;
        }), E;
      },
      toArray: function(y) {
        return p(y, function(E) {
          return E;
        }) || [];
      },
      only: function(y) {
        if (!Dt(y)) throw Error("React.Children.only expected to receive a single React element child.");
        return y;
      }
    };
    return G.Activity = C, G.Children = dl, G.Component = Nl, G.Fragment = O, G.Profiler = Y, G.PureComponent = Rl, G.StrictMode = o, G.Suspense = R, G.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, G.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function(y) {
        return k.H.useMemoCache(y);
      }
    }, G.cache = function(y) {
      return function() {
        return y.apply(null, arguments);
      };
    }, G.cacheSignal = function() {
      return null;
    }, G.cloneElement = function(y, E, M) {
      if (y == null) throw Error("The argument must be a React element, but you passed " + y + ".");
      var U = w({}, y.props), x = y.key;
      if (E != null) for (V in E.key !== void 0 && (x = "" + E.key), E) !Jl.call(E, V) || V === "key" || V === "__self" || V === "__source" || V === "ref" && E.ref === void 0 || (U[V] = E[V]);
      var V = arguments.length - 2;
      if (V === 1) U.children = M;
      else if (1 < V) {
        for (var al = Array(V), Ll = 0; Ll < V; Ll++) al[Ll] = arguments[Ll + 2];
        U.children = al;
      }
      return Mt(y.type, x, U);
    }, G.createContext = function(y) {
      return y = {
        $$typeof: ul,
        _currentValue: y,
        _currentValue2: y,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      }, y.Provider = y, y.Consumer = {
        $$typeof: L,
        _context: y
      }, y;
    }, G.createElement = function(y, E, M) {
      var U, x = {}, V = null;
      if (E != null) for (U in E.key !== void 0 && (V = "" + E.key), E) Jl.call(E, U) && U !== "key" && U !== "__self" && U !== "__source" && (x[U] = E[U]);
      var al = arguments.length - 2;
      if (al === 1) x.children = M;
      else if (1 < al) {
        for (var Ll = Array(al), zl = 0; zl < al; zl++) Ll[zl] = arguments[zl + 2];
        x.children = Ll;
      }
      if (y && y.defaultProps) for (U in al = y.defaultProps, al) x[U] === void 0 && (x[U] = al[U]);
      return Mt(y, V, x);
    }, G.createRef = function() {
      return {
        current: null
      };
    }, G.forwardRef = function(y) {
      return {
        $$typeof: _l,
        render: y
      };
    }, G.isValidElement = Dt, G.lazy = function(y) {
      return {
        $$typeof: F,
        _payload: {
          _status: -1,
          _result: y
        },
        _init: j
      };
    }, G.memo = function(y, E) {
      return {
        $$typeof: A,
        type: y,
        compare: E === void 0 ? null : E
      };
    }, G.startTransition = function(y) {
      var E = k.T, M = {};
      k.T = M;
      try {
        var U = y(), x = k.S;
        x !== null && x(M, U), typeof U == "object" && U !== null && typeof U.then == "function" && U.then(xl, cl);
      } catch (V) {
        cl(V);
      } finally {
        E !== null && M.types !== null && (E.types = M.types), k.T = E;
      }
    }, G.unstable_useCacheRefresh = function() {
      return k.H.useCacheRefresh();
    }, G.use = function(y) {
      return k.H.use(y);
    }, G.useActionState = function(y, E, M) {
      return k.H.useActionState(y, E, M);
    }, G.useCallback = function(y, E) {
      return k.H.useCallback(y, E);
    }, G.useContext = function(y) {
      return k.H.useContext(y);
    }, G.useDebugValue = function() {
    }, G.useDeferredValue = function(y, E) {
      return k.H.useDeferredValue(y, E);
    }, G.useEffect = function(y, E) {
      return k.H.useEffect(y, E);
    }, G.useEffectEvent = function(y) {
      return k.H.useEffectEvent(y);
    }, G.useId = function() {
      return k.H.useId();
    }, G.useImperativeHandle = function(y, E, M) {
      return k.H.useImperativeHandle(y, E, M);
    }, G.useInsertionEffect = function(y, E) {
      return k.H.useInsertionEffect(y, E);
    }, G.useLayoutEffect = function(y, E) {
      return k.H.useLayoutEffect(y, E);
    }, G.useMemo = function(y, E) {
      return k.H.useMemo(y, E);
    }, G.useOptimistic = function(y, E) {
      return k.H.useOptimistic(y, E);
    }, G.useReducer = function(y, E, M) {
      return k.H.useReducer(y, E, M);
    }, G.useRef = function(y) {
      return k.H.useRef(y);
    }, G.useState = function(y) {
      return k.H.useState(y);
    }, G.useSyncExternalStore = function(y, E, M) {
      return k.H.useSyncExternalStore(y, E, M);
    }, G.useTransition = function() {
      return k.H.useTransition();
    }, G.version = "19.2.0", G;
  }
  var Hd;
  function Mi() {
    return Hd || (Hd = 1, bi.exports = rv()), bi.exports;
  }
  var It = Mi(), Si = {
    exports: {}
  }, Oe = {}, _i = {
    exports: {}
  }, zi = {};
  var qd;
  function bv() {
    return qd || (qd = 1, (function(m) {
      function r(_, p) {
        var j = _.length;
        _.push(p);
        l: for (; 0 < j; ) {
          var cl = j - 1 >>> 1, dl = _[cl];
          if (0 < Y(dl, p)) _[cl] = p, _[j] = dl, j = cl;
          else break l;
        }
      }
      function O(_) {
        return _.length === 0 ? null : _[0];
      }
      function o(_) {
        if (_.length === 0) return null;
        var p = _[0], j = _.pop();
        if (j !== p) {
          _[0] = j;
          l: for (var cl = 0, dl = _.length, y = dl >>> 1; cl < y; ) {
            var E = 2 * (cl + 1) - 1, M = _[E], U = E + 1, x = _[U];
            if (0 > Y(M, j)) U < dl && 0 > Y(x, M) ? (_[cl] = x, _[U] = j, cl = U) : (_[cl] = M, _[E] = j, cl = E);
            else if (U < dl && 0 > Y(x, j)) _[cl] = x, _[U] = j, cl = U;
            else break l;
          }
        }
        return p;
      }
      function Y(_, p) {
        var j = _.sortIndex - p.sortIndex;
        return j !== 0 ? j : _.id - p.id;
      }
      if (m.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
        var L = performance;
        m.unstable_now = function() {
          return L.now();
        };
      } else {
        var ul = Date, _l = ul.now();
        m.unstable_now = function() {
          return ul.now() - _l;
        };
      }
      var R = [], A = [], F = 1, C = null, fl = 3, Ql = false, Z = false, w = false, Zl = false, Nl = typeof setTimeout == "function" ? setTimeout : null, pt = typeof clearTimeout == "function" ? clearTimeout : null, Rl = typeof setImmediate < "u" ? setImmediate : null;
      function Kl(_) {
        for (var p = O(A); p !== null; ) {
          if (p.callback === null) o(A);
          else if (p.startTime <= _) o(A), p.sortIndex = p.expirationTime, r(R, p);
          else break;
          p = O(A);
        }
      }
      function dt(_) {
        if (w = false, Kl(_), !Z) if (O(R) !== null) Z = true, xl || (xl = true, wl());
        else {
          var p = O(A);
          p !== null && Tt(dt, p.startTime - _);
        }
      }
      var xl = false, k = -1, Jl = 5, Mt = -1;
      function Ja() {
        return Zl ? true : !(m.unstable_now() - Mt < Jl);
      }
      function Dt() {
        if (Zl = false, xl) {
          var _ = m.unstable_now();
          Mt = _;
          var p = true;
          try {
            l: {
              Z = false, w && (w = false, pt(k), k = -1), Ql = true;
              var j = fl;
              try {
                t: {
                  for (Kl(_), C = O(R); C !== null && !(C.expirationTime > _ && Ja()); ) {
                    var cl = C.callback;
                    if (typeof cl == "function") {
                      C.callback = null, fl = C.priorityLevel;
                      var dl = cl(C.expirationTime <= _);
                      if (_ = m.unstable_now(), typeof dl == "function") {
                        C.callback = dl, Kl(_), p = true;
                        break t;
                      }
                      C === O(R) && o(R), Kl(_);
                    } else o(R);
                    C = O(R);
                  }
                  if (C !== null) p = true;
                  else {
                    var y = O(A);
                    y !== null && Tt(dt, y.startTime - _), p = false;
                  }
                }
                break l;
              } finally {
                C = null, fl = j, Ql = false;
              }
              p = void 0;
            }
          } finally {
            p ? wl() : xl = false;
          }
        }
      }
      var wl;
      if (typeof Rl == "function") wl = function() {
        Rl(Dt);
      };
      else if (typeof MessageChannel < "u") {
        var Oa = new MessageChannel(), qt = Oa.port2;
        Oa.port1.onmessage = Dt, wl = function() {
          qt.postMessage(null);
        };
      } else wl = function() {
        Nl(Dt, 0);
      };
      function Tt(_, p) {
        k = Nl(function() {
          _(m.unstable_now());
        }, p);
      }
      m.unstable_IdlePriority = 5, m.unstable_ImmediatePriority = 1, m.unstable_LowPriority = 4, m.unstable_NormalPriority = 3, m.unstable_Profiling = null, m.unstable_UserBlockingPriority = 2, m.unstable_cancelCallback = function(_) {
        _.callback = null;
      }, m.unstable_forceFrameRate = function(_) {
        0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Jl = 0 < _ ? Math.floor(1e3 / _) : 5;
      }, m.unstable_getCurrentPriorityLevel = function() {
        return fl;
      }, m.unstable_next = function(_) {
        switch (fl) {
          case 1:
          case 2:
          case 3:
            var p = 3;
            break;
          default:
            p = fl;
        }
        var j = fl;
        fl = p;
        try {
          return _();
        } finally {
          fl = j;
        }
      }, m.unstable_requestPaint = function() {
        Zl = true;
      }, m.unstable_runWithPriority = function(_, p) {
        switch (_) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            _ = 3;
        }
        var j = fl;
        fl = _;
        try {
          return p();
        } finally {
          fl = j;
        }
      }, m.unstable_scheduleCallback = function(_, p, j) {
        var cl = m.unstable_now();
        switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? cl + j : cl) : j = cl, _) {
          case 1:
            var dl = -1;
            break;
          case 2:
            dl = 250;
            break;
          case 5:
            dl = 1073741823;
            break;
          case 4:
            dl = 1e4;
            break;
          default:
            dl = 5e3;
        }
        return dl = j + dl, _ = {
          id: F++,
          callback: p,
          priorityLevel: _,
          startTime: j,
          expirationTime: dl,
          sortIndex: -1
        }, j > cl ? (_.sortIndex = j, r(A, _), O(R) === null && _ === O(A) && (w ? (pt(k), k = -1) : w = true, Tt(dt, j - cl))) : (_.sortIndex = dl, r(R, _), Z || Ql || (Z = true, xl || (xl = true, wl()))), _;
      }, m.unstable_shouldYield = Ja, m.unstable_wrapCallback = function(_) {
        var p = fl;
        return function() {
          var j = fl;
          fl = p;
          try {
            return _.apply(this, arguments);
          } finally {
            fl = j;
          }
        };
      };
    })(zi)), zi;
  }
  var Cd;
  function Sv() {
    return Cd || (Cd = 1, _i.exports = bv()), _i.exports;
  }
  var Ti = {
    exports: {}
  }, Xl = {};
  var jd;
  function _v() {
    if (jd) return Xl;
    jd = 1;
    var m = Mi();
    function r(R) {
      var A = "https://react.dev/errors/" + R;
      if (1 < arguments.length) {
        A += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var F = 2; F < arguments.length; F++) A += "&args[]=" + encodeURIComponent(arguments[F]);
      }
      return "Minified React error #" + R + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function O() {
    }
    var o = {
      d: {
        f: O,
        r: function() {
          throw Error(r(522));
        },
        D: O,
        C: O,
        L: O,
        m: O,
        X: O,
        S: O,
        M: O
      },
      p: 0,
      findDOMNode: null
    }, Y = Symbol.for("react.portal");
    function L(R, A, F) {
      var C = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
      return {
        $$typeof: Y,
        key: C == null ? null : "" + C,
        children: R,
        containerInfo: A,
        implementation: F
      };
    }
    var ul = m.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
    function _l(R, A) {
      if (R === "font") return "";
      if (typeof A == "string") return A === "use-credentials" ? A : "";
    }
    return Xl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Xl.createPortal = function(R, A) {
      var F = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11) throw Error(r(299));
      return L(R, A, null, F);
    }, Xl.flushSync = function(R) {
      var A = ul.T, F = o.p;
      try {
        if (ul.T = null, o.p = 2, R) return R();
      } finally {
        ul.T = A, o.p = F, o.d.f();
      }
    }, Xl.preconnect = function(R, A) {
      typeof R == "string" && (A ? (A = A.crossOrigin, A = typeof A == "string" ? A === "use-credentials" ? A : "" : void 0) : A = null, o.d.C(R, A));
    }, Xl.prefetchDNS = function(R) {
      typeof R == "string" && o.d.D(R);
    }, Xl.preinit = function(R, A) {
      if (typeof R == "string" && A && typeof A.as == "string") {
        var F = A.as, C = _l(F, A.crossOrigin), fl = typeof A.integrity == "string" ? A.integrity : void 0, Ql = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
        F === "style" ? o.d.S(R, typeof A.precedence == "string" ? A.precedence : void 0, {
          crossOrigin: C,
          integrity: fl,
          fetchPriority: Ql
        }) : F === "script" && o.d.X(R, {
          crossOrigin: C,
          integrity: fl,
          fetchPriority: Ql,
          nonce: typeof A.nonce == "string" ? A.nonce : void 0
        });
      }
    }, Xl.preinitModule = function(R, A) {
      if (typeof R == "string") if (typeof A == "object" && A !== null) {
        if (A.as == null || A.as === "script") {
          var F = _l(A.as, A.crossOrigin);
          o.d.M(R, {
            crossOrigin: F,
            integrity: typeof A.integrity == "string" ? A.integrity : void 0,
            nonce: typeof A.nonce == "string" ? A.nonce : void 0
          });
        }
      } else A == null && o.d.M(R);
    }, Xl.preload = function(R, A) {
      if (typeof R == "string" && typeof A == "object" && A !== null && typeof A.as == "string") {
        var F = A.as, C = _l(F, A.crossOrigin);
        o.d.L(R, F, {
          crossOrigin: C,
          integrity: typeof A.integrity == "string" ? A.integrity : void 0,
          nonce: typeof A.nonce == "string" ? A.nonce : void 0,
          type: typeof A.type == "string" ? A.type : void 0,
          fetchPriority: typeof A.fetchPriority == "string" ? A.fetchPriority : void 0,
          referrerPolicy: typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0,
          imageSrcSet: typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0,
          imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0,
          media: typeof A.media == "string" ? A.media : void 0
        });
      }
    }, Xl.preloadModule = function(R, A) {
      if (typeof R == "string") if (A) {
        var F = _l(A.as, A.crossOrigin);
        o.d.m(R, {
          as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
          crossOrigin: F,
          integrity: typeof A.integrity == "string" ? A.integrity : void 0
        });
      } else o.d.m(R);
    }, Xl.requestFormReset = function(R) {
      o.d.r(R);
    }, Xl.unstable_batchedUpdates = function(R, A) {
      return R(A);
    }, Xl.useFormState = function(R, A, F) {
      return ul.H.useFormState(R, A, F);
    }, Xl.useFormStatus = function() {
      return ul.H.useHostTransitionStatus();
    }, Xl.version = "19.2.0", Xl;
  }
  var Bd;
  function zv() {
    if (Bd) return Ti.exports;
    Bd = 1;
    function m() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
      } catch (r) {
        console.error(r);
      }
    }
    return m(), Ti.exports = _v(), Ti.exports;
  }
  var Yd;
  function Tv() {
    if (Yd) return Oe;
    Yd = 1;
    var m = Sv(), r = Mi(), O = zv();
    function o(l) {
      var t = "https://react.dev/errors/" + l;
      if (1 < arguments.length) {
        t += "?args[]=" + encodeURIComponent(arguments[1]);
        for (var a = 2; a < arguments.length; a++) t += "&args[]=" + encodeURIComponent(arguments[a]);
      }
      return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
    }
    function Y(l) {
      return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
    }
    function L(l) {
      var t = l, a = l;
      if (l.alternate) for (; t.return; ) t = t.return;
      else {
        l = t;
        do
          t = l, (t.flags & 4098) !== 0 && (a = t.return), l = t.return;
        while (l);
      }
      return t.tag === 3 ? a : null;
    }
    function ul(l) {
      if (l.tag === 13) {
        var t = l.memoizedState;
        if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function _l(l) {
      if (l.tag === 31) {
        var t = l.memoizedState;
        if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
      }
      return null;
    }
    function R(l) {
      if (L(l) !== l) throw Error(o(188));
    }
    function A(l) {
      var t = l.alternate;
      if (!t) {
        if (t = L(l), t === null) throw Error(o(188));
        return t !== l ? null : l;
      }
      for (var a = l, u = t; ; ) {
        var e = a.return;
        if (e === null) break;
        var n = e.alternate;
        if (n === null) {
          if (u = e.return, u !== null) {
            a = u;
            continue;
          }
          break;
        }
        if (e.child === n.child) {
          for (n = e.child; n; ) {
            if (n === a) return R(e), l;
            if (n === u) return R(e), t;
            n = n.sibling;
          }
          throw Error(o(188));
        }
        if (a.return !== u.return) a = e, u = n;
        else {
          for (var f = false, c = e.child; c; ) {
            if (c === a) {
              f = true, a = e, u = n;
              break;
            }
            if (c === u) {
              f = true, u = e, a = n;
              break;
            }
            c = c.sibling;
          }
          if (!f) {
            for (c = n.child; c; ) {
              if (c === a) {
                f = true, a = n, u = e;
                break;
              }
              if (c === u) {
                f = true, u = n, a = e;
                break;
              }
              c = c.sibling;
            }
            if (!f) throw Error(o(189));
          }
        }
        if (a.alternate !== u) throw Error(o(190));
      }
      if (a.tag !== 3) throw Error(o(188));
      return a.stateNode.current === a ? l : t;
    }
    function F(l) {
      var t = l.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return l;
      for (l = l.child; l !== null; ) {
        if (t = F(l), t !== null) return t;
        l = l.sibling;
      }
      return null;
    }
    var C = Object.assign, fl = Symbol.for("react.element"), Ql = Symbol.for("react.transitional.element"), Z = Symbol.for("react.portal"), w = Symbol.for("react.fragment"), Zl = Symbol.for("react.strict_mode"), Nl = Symbol.for("react.profiler"), pt = Symbol.for("react.consumer"), Rl = Symbol.for("react.context"), Kl = Symbol.for("react.forward_ref"), dt = Symbol.for("react.suspense"), xl = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), Jl = Symbol.for("react.lazy"), Mt = Symbol.for("react.activity"), Ja = Symbol.for("react.memo_cache_sentinel"), Dt = Symbol.iterator;
    function wl(l) {
      return l === null || typeof l != "object" ? null : (l = Dt && l[Dt] || l["@@iterator"], typeof l == "function" ? l : null);
    }
    var Oa = Symbol.for("react.client.reference");
    function qt(l) {
      if (l == null) return null;
      if (typeof l == "function") return l.$$typeof === Oa ? null : l.displayName || l.name || null;
      if (typeof l == "string") return l;
      switch (l) {
        case w:
          return "Fragment";
        case Nl:
          return "Profiler";
        case Zl:
          return "StrictMode";
        case dt:
          return "Suspense";
        case xl:
          return "SuspenseList";
        case Mt:
          return "Activity";
      }
      if (typeof l == "object") switch (l.$$typeof) {
        case Z:
          return "Portal";
        case Rl:
          return l.displayName || "Context";
        case pt:
          return (l._context.displayName || "Context") + ".Consumer";
        case Kl:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case k:
          return t = l.displayName || null, t !== null ? t : qt(l.type) || "Memo";
        case Jl:
          t = l._payload, l = l._init;
          try {
            return qt(l(t));
          } catch {
          }
      }
      return null;
    }
    var Tt = Array.isArray, _ = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, p = O.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = {
      pending: false,
      data: null,
      method: null,
      action: null
    }, cl = [], dl = -1;
    function y(l) {
      return {
        current: l
      };
    }
    function E(l) {
      0 > dl || (l.current = cl[dl], cl[dl] = null, dl--);
    }
    function M(l, t) {
      dl++, cl[dl] = l.current, l.current = t;
    }
    var U = y(null), x = y(null), V = y(null), al = y(null);
    function Ll(l, t) {
      switch (M(V, t), M(x, l), M(U, null), t.nodeType) {
        case 9:
        case 11:
          l = (l = t.documentElement) && (l = l.namespaceURI) ? Iy(l) : 0;
          break;
        default:
          if (l = t.tagName, t = t.namespaceURI) t = Iy(t), l = Py(t, l);
          else switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
      }
      E(U), M(U, l);
    }
    function zl() {
      E(U), E(x), E(V);
    }
    function Ru(l) {
      l.memoizedState !== null && M(al, l);
      var t = U.current, a = Py(t, l.type);
      t !== a && (M(x, l), M(U, a));
    }
    function Re(l) {
      x.current === l && (E(U), E(x)), al.current === l && (E(al), _e._currentValue = j);
    }
    var In, Di;
    function pa(l) {
      if (In === void 0) try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        In = t && t[1] || "", Di = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
      return `
` + In + l + Di;
    }
    var Pn = false;
    function lf(l, t) {
      if (!l || Pn) return "";
      Pn = true;
      var a = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      try {
        var u = {
          DetermineComponentFrameRoot: function() {
            try {
              if (t) {
                var T = function() {
                  throw Error();
                };
                if (Object.defineProperty(T.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(T, []);
                  } catch (b) {
                    var g = b;
                  }
                  Reflect.construct(l, [], T);
                } else {
                  try {
                    T.call();
                  } catch (b) {
                    g = b;
                  }
                  l.call(T.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (b) {
                  g = b;
                }
                (T = l()) && typeof T.catch == "function" && T.catch(function() {
                });
              }
            } catch (b) {
              if (b && g && typeof b.stack == "string") return [
                b.stack,
                g.stack
              ];
            }
            return [
              null,
              null
            ];
          }
        };
        u.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var e = Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot, "name");
        e && e.configurable && Object.defineProperty(u.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot"
        });
        var n = u.DetermineComponentFrameRoot(), f = n[0], c = n[1];
        if (f && c) {
          var i = f.split(`
`), h = c.split(`
`);
          for (e = u = 0; u < i.length && !i[u].includes("DetermineComponentFrameRoot"); ) u++;
          for (; e < h.length && !h[e].includes("DetermineComponentFrameRoot"); ) e++;
          if (u === i.length || e === h.length) for (u = i.length - 1, e = h.length - 1; 1 <= u && 0 <= e && i[u] !== h[e]; ) e--;
          for (; 1 <= u && 0 <= e; u--, e--) if (i[u] !== h[e]) {
            if (u !== 1 || e !== 1) do
              if (u--, e--, 0 > e || i[u] !== h[e]) {
                var S = `
` + i[u].replace(" at new ", " at ");
                return l.displayName && S.includes("<anonymous>") && (S = S.replace("<anonymous>", l.displayName)), S;
              }
            while (1 <= u && 0 <= e);
            break;
          }
        }
      } finally {
        Pn = false, Error.prepareStackTrace = a;
      }
      return (a = l ? l.displayName || l.name : "") ? pa(a) : "";
    }
    function Kd(l, t) {
      switch (l.tag) {
        case 26:
        case 27:
        case 5:
          return pa(l.type);
        case 16:
          return pa("Lazy");
        case 13:
          return l.child !== t && t !== null ? pa("Suspense Fallback") : pa("Suspense");
        case 19:
          return pa("SuspenseList");
        case 0:
        case 15:
          return lf(l.type, false);
        case 11:
          return lf(l.type.render, false);
        case 1:
          return lf(l.type, true);
        case 31:
          return pa("Activity");
        default:
          return "";
      }
    }
    function Ui(l) {
      try {
        var t = "", a = null;
        do
          t += Kd(l, a), a = l, l = l.return;
        while (l);
        return t;
      } catch (u) {
        return `
Error generating stack: ` + u.message + `
` + u.stack;
      }
    }
    var tf = Object.prototype.hasOwnProperty, af = m.unstable_scheduleCallback, uf = m.unstable_cancelCallback, Jd = m.unstable_shouldYield, wd = m.unstable_requestPaint, tt = m.unstable_now, Wd = m.unstable_getCurrentPriorityLevel, Ni = m.unstable_ImmediatePriority, Ri = m.unstable_UserBlockingPriority, He = m.unstable_NormalPriority, $d = m.unstable_LowPriority, Hi = m.unstable_IdlePriority, Fd = m.log, kd = m.unstable_setDisableYieldValue, Hu = null, at = null;
    function la(l) {
      if (typeof Fd == "function" && kd(l), at && typeof at.setStrictMode == "function") try {
        at.setStrictMode(Hu, l);
      } catch {
      }
    }
    var ut = Math.clz32 ? Math.clz32 : lo, Id = Math.log, Pd = Math.LN2;
    function lo(l) {
      return l >>>= 0, l === 0 ? 32 : 31 - (Id(l) / Pd | 0) | 0;
    }
    var qe = 256, Ce = 262144, je = 4194304;
    function Ma(l) {
      var t = l & 42;
      if (t !== 0) return t;
      switch (l & -l) {
        case 1:
          return 1;
        case 2:
          return 2;
        case 4:
          return 4;
        case 8:
          return 8;
        case 16:
          return 16;
        case 32:
          return 32;
        case 64:
          return 64;
        case 128:
          return 128;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
          return l & 261888;
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return l & 3932160;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return l & 62914560;
        case 67108864:
          return 67108864;
        case 134217728:
          return 134217728;
        case 268435456:
          return 268435456;
        case 536870912:
          return 536870912;
        case 1073741824:
          return 0;
        default:
          return l;
      }
    }
    function Be(l, t, a) {
      var u = l.pendingLanes;
      if (u === 0) return 0;
      var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
      l = l.warmLanes;
      var c = u & 134217727;
      return c !== 0 ? (u = c & ~n, u !== 0 ? e = Ma(u) : (f &= c, f !== 0 ? e = Ma(f) : a || (a = c & ~l, a !== 0 && (e = Ma(a))))) : (c = u & ~n, c !== 0 ? e = Ma(c) : f !== 0 ? e = Ma(f) : a || (a = u & ~l, a !== 0 && (e = Ma(a)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : e;
    }
    function qu(l, t) {
      return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
    }
    function to(l, t) {
      switch (l) {
        case 1:
        case 2:
        case 4:
        case 8:
        case 64:
          return t + 250;
        case 16:
        case 32:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          return -1;
        case 67108864:
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
          return -1;
        default:
          return -1;
      }
    }
    function qi() {
      var l = je;
      return je <<= 1, (je & 62914560) === 0 && (je = 4194304), l;
    }
    function ef(l) {
      for (var t = [], a = 0; 31 > a; a++) t.push(l);
      return t;
    }
    function Cu(l, t) {
      l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
    }
    function ao(l, t, a, u, e, n) {
      var f = l.pendingLanes;
      l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
      var c = l.entanglements, i = l.expirationTimes, h = l.hiddenUpdates;
      for (a = f & ~a; 0 < a; ) {
        var S = 31 - ut(a), T = 1 << S;
        c[S] = 0, i[S] = -1;
        var g = h[S];
        if (g !== null) for (h[S] = null, S = 0; S < g.length; S++) {
          var b = g[S];
          b !== null && (b.lane &= -536870913);
        }
        a &= ~T;
      }
      u !== 0 && Ci(l, u, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
    }
    function Ci(l, t, a) {
      l.pendingLanes |= t, l.suspendedLanes &= ~t;
      var u = 31 - ut(t);
      l.entangledLanes |= t, l.entanglements[u] = l.entanglements[u] | 1073741824 | a & 261930;
    }
    function ji(l, t) {
      var a = l.entangledLanes |= t;
      for (l = l.entanglements; a; ) {
        var u = 31 - ut(a), e = 1 << u;
        e & t | l[u] & t && (l[u] |= t), a &= ~e;
      }
    }
    function Bi(l, t) {
      var a = t & -t;
      return a = (a & 42) !== 0 ? 1 : nf(a), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a;
    }
    function nf(l) {
      switch (l) {
        case 2:
          l = 1;
          break;
        case 8:
          l = 4;
          break;
        case 32:
          l = 16;
          break;
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
          l = 128;
          break;
        case 268435456:
          l = 134217728;
          break;
        default:
          l = 0;
      }
      return l;
    }
    function ff(l) {
      return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
    }
    function Yi() {
      var l = p.p;
      return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Td(l.type));
    }
    function Gi(l, t) {
      var a = p.p;
      try {
        return p.p = l, t();
      } finally {
        p.p = a;
      }
    }
    var ta = Math.random().toString(36).slice(2), Cl = "__reactFiber$" + ta, Wl = "__reactProps$" + ta, wa = "__reactContainer$" + ta, cf = "__reactEvents$" + ta, uo = "__reactListeners$" + ta, eo = "__reactHandles$" + ta, xi = "__reactResources$" + ta, ju = "__reactMarker$" + ta;
    function sf(l) {
      delete l[Cl], delete l[Wl], delete l[cf], delete l[uo], delete l[eo];
    }
    function Wa(l) {
      var t = l[Cl];
      if (t) return t;
      for (var a = l.parentNode; a; ) {
        if (t = a[wa] || a[Cl]) {
          if (a = t.alternate, t.child !== null || a !== null && a.child !== null) for (l = fd(l); l !== null; ) {
            if (a = l[Cl]) return a;
            l = fd(l);
          }
          return t;
        }
        l = a, a = l.parentNode;
      }
      return null;
    }
    function $a(l) {
      if (l = l[Cl] || l[wa]) {
        var t = l.tag;
        if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return l;
      }
      return null;
    }
    function Bu(l) {
      var t = l.tag;
      if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
      throw Error(o(33));
    }
    function Fa(l) {
      var t = l[xi];
      return t || (t = l[xi] = {
        hoistableStyles: /* @__PURE__ */ new Map(),
        hoistableScripts: /* @__PURE__ */ new Map()
      }), t;
    }
    function Hl(l) {
      l[ju] = true;
    }
    var Xi = /* @__PURE__ */ new Set(), Qi = {};
    function Da(l, t) {
      ka(l, t), ka(l + "Capture", t);
    }
    function ka(l, t) {
      for (Qi[l] = t, l = 0; l < t.length; l++) Xi.add(t[l]);
    }
    var no = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), Zi = {}, Li = {};
    function fo(l) {
      return tf.call(Li, l) ? true : tf.call(Zi, l) ? false : no.test(l) ? Li[l] = true : (Zi[l] = true, false);
    }
    function Ye(l, t, a) {
      if (fo(t)) if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var u = t.toLowerCase().slice(0, 5);
            if (u !== "data-" && u !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
    }
    function Ge(l, t, a) {
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            l.removeAttribute(t);
            return;
        }
        l.setAttribute(t, "" + a);
      }
    }
    function Ct(l, t, a, u) {
      if (u === null) l.removeAttribute(a);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
          case "boolean":
            l.removeAttribute(a);
            return;
        }
        l.setAttributeNS(t, a, "" + u);
      }
    }
    function ot(l) {
      switch (typeof l) {
        case "bigint":
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return l;
        case "object":
          return l;
        default:
          return "";
      }
    }
    function Vi(l) {
      var t = l.type;
      return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function co(l, t, a) {
      var u = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
      if (!l.hasOwnProperty(t) && typeof u < "u" && typeof u.get == "function" && typeof u.set == "function") {
        var e = u.get, n = u.set;
        return Object.defineProperty(l, t, {
          configurable: true,
          get: function() {
            return e.call(this);
          },
          set: function(f) {
            a = "" + f, n.call(this, f);
          }
        }), Object.defineProperty(l, t, {
          enumerable: u.enumerable
        }), {
          getValue: function() {
            return a;
          },
          setValue: function(f) {
            a = "" + f;
          },
          stopTracking: function() {
            l._valueTracker = null, delete l[t];
          }
        };
      }
    }
    function yf(l) {
      if (!l._valueTracker) {
        var t = Vi(l) ? "checked" : "value";
        l._valueTracker = co(l, t, "" + l[t]);
      }
    }
    function Ki(l) {
      if (!l) return false;
      var t = l._valueTracker;
      if (!t) return true;
      var a = t.getValue(), u = "";
      return l && (u = Vi(l) ? l.checked ? "true" : "false" : l.value), l = u, l !== a ? (t.setValue(l), true) : false;
    }
    function xe(l) {
      if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
      try {
        return l.activeElement || l.body;
      } catch {
        return l.body;
      }
    }
    var io = /[\n"\\]/g;
    function mt(l) {
      return l.replace(io, function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      });
    }
    function df(l, t, a, u, e, n, f, c) {
      l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ot(t)) : l.value !== "" + ot(t) && (l.value = "" + ot(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? of(l, f, ot(t)) : a != null ? of(l, f, ot(a)) : u != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + ot(c) : l.removeAttribute("name");
    }
    function Ji(l, t, a, u, e, n, f, c) {
      if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
        if (!(n !== "submit" && n !== "reset" || t != null)) {
          yf(l);
          return;
        }
        a = a != null ? "" + ot(a) : "", t = t != null ? "" + ot(t) : a, c || t === l.value || (l.value = t), l.defaultValue = t;
      }
      u = u ?? e, u = typeof u != "function" && typeof u != "symbol" && !!u, l.checked = c ? l.checked : !!u, l.defaultChecked = !!u, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), yf(l);
    }
    function of(l, t, a) {
      t === "number" && xe(l.ownerDocument) === l || l.defaultValue === "" + a || (l.defaultValue = "" + a);
    }
    function Ia(l, t, a, u) {
      if (l = l.options, t) {
        t = {};
        for (var e = 0; e < a.length; e++) t["$" + a[e]] = true;
        for (a = 0; a < l.length; a++) e = t.hasOwnProperty("$" + l[a].value), l[a].selected !== e && (l[a].selected = e), e && u && (l[a].defaultSelected = true);
      } else {
        for (a = "" + ot(a), t = null, e = 0; e < l.length; e++) {
          if (l[e].value === a) {
            l[e].selected = true, u && (l[e].defaultSelected = true);
            return;
          }
          t !== null || l[e].disabled || (t = l[e]);
        }
        t !== null && (t.selected = true);
      }
    }
    function wi(l, t, a) {
      if (t != null && (t = "" + ot(t), t !== l.value && (l.value = t), a == null)) {
        l.defaultValue !== t && (l.defaultValue = t);
        return;
      }
      l.defaultValue = a != null ? "" + ot(a) : "";
    }
    function Wi(l, t, a, u) {
      if (t == null) {
        if (u != null) {
          if (a != null) throw Error(o(92));
          if (Tt(u)) {
            if (1 < u.length) throw Error(o(93));
            u = u[0];
          }
          a = u;
        }
        a == null && (a = ""), t = a;
      }
      a = ot(t), l.defaultValue = a, u = l.textContent, u === a && u !== "" && u !== null && (l.value = u), yf(l);
    }
    function Pa(l, t) {
      if (t) {
        var a = l.firstChild;
        if (a && a === l.lastChild && a.nodeType === 3) {
          a.nodeValue = t;
          return;
        }
      }
      l.textContent = t;
    }
    var so = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
    function $i(l, t, a) {
      var u = t.indexOf("--") === 0;
      a == null || typeof a == "boolean" || a === "" ? u ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : u ? l.setProperty(t, a) : typeof a != "number" || a === 0 || so.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
    }
    function Fi(l, t, a) {
      if (t != null && typeof t != "object") throw Error(o(62));
      if (l = l.style, a != null) {
        for (var u in a) !a.hasOwnProperty(u) || t != null && t.hasOwnProperty(u) || (u.indexOf("--") === 0 ? l.setProperty(u, "") : u === "float" ? l.cssFloat = "" : l[u] = "");
        for (var e in t) u = t[e], t.hasOwnProperty(e) && a[e] !== u && $i(l, e, u);
      } else for (var n in t) t.hasOwnProperty(n) && $i(l, n, t[n]);
    }
    function mf(l) {
      if (l.indexOf("-") === -1) return false;
      switch (l) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return false;
        default:
          return true;
      }
    }
    var yo = /* @__PURE__ */ new Map([
      [
        "acceptCharset",
        "accept-charset"
      ],
      [
        "htmlFor",
        "for"
      ],
      [
        "httpEquiv",
        "http-equiv"
      ],
      [
        "crossOrigin",
        "crossorigin"
      ],
      [
        "accentHeight",
        "accent-height"
      ],
      [
        "alignmentBaseline",
        "alignment-baseline"
      ],
      [
        "arabicForm",
        "arabic-form"
      ],
      [
        "baselineShift",
        "baseline-shift"
      ],
      [
        "capHeight",
        "cap-height"
      ],
      [
        "clipPath",
        "clip-path"
      ],
      [
        "clipRule",
        "clip-rule"
      ],
      [
        "colorInterpolation",
        "color-interpolation"
      ],
      [
        "colorInterpolationFilters",
        "color-interpolation-filters"
      ],
      [
        "colorProfile",
        "color-profile"
      ],
      [
        "colorRendering",
        "color-rendering"
      ],
      [
        "dominantBaseline",
        "dominant-baseline"
      ],
      [
        "enableBackground",
        "enable-background"
      ],
      [
        "fillOpacity",
        "fill-opacity"
      ],
      [
        "fillRule",
        "fill-rule"
      ],
      [
        "floodColor",
        "flood-color"
      ],
      [
        "floodOpacity",
        "flood-opacity"
      ],
      [
        "fontFamily",
        "font-family"
      ],
      [
        "fontSize",
        "font-size"
      ],
      [
        "fontSizeAdjust",
        "font-size-adjust"
      ],
      [
        "fontStretch",
        "font-stretch"
      ],
      [
        "fontStyle",
        "font-style"
      ],
      [
        "fontVariant",
        "font-variant"
      ],
      [
        "fontWeight",
        "font-weight"
      ],
      [
        "glyphName",
        "glyph-name"
      ],
      [
        "glyphOrientationHorizontal",
        "glyph-orientation-horizontal"
      ],
      [
        "glyphOrientationVertical",
        "glyph-orientation-vertical"
      ],
      [
        "horizAdvX",
        "horiz-adv-x"
      ],
      [
        "horizOriginX",
        "horiz-origin-x"
      ],
      [
        "imageRendering",
        "image-rendering"
      ],
      [
        "letterSpacing",
        "letter-spacing"
      ],
      [
        "lightingColor",
        "lighting-color"
      ],
      [
        "markerEnd",
        "marker-end"
      ],
      [
        "markerMid",
        "marker-mid"
      ],
      [
        "markerStart",
        "marker-start"
      ],
      [
        "overlinePosition",
        "overline-position"
      ],
      [
        "overlineThickness",
        "overline-thickness"
      ],
      [
        "paintOrder",
        "paint-order"
      ],
      [
        "panose-1",
        "panose-1"
      ],
      [
        "pointerEvents",
        "pointer-events"
      ],
      [
        "renderingIntent",
        "rendering-intent"
      ],
      [
        "shapeRendering",
        "shape-rendering"
      ],
      [
        "stopColor",
        "stop-color"
      ],
      [
        "stopOpacity",
        "stop-opacity"
      ],
      [
        "strikethroughPosition",
        "strikethrough-position"
      ],
      [
        "strikethroughThickness",
        "strikethrough-thickness"
      ],
      [
        "strokeDasharray",
        "stroke-dasharray"
      ],
      [
        "strokeDashoffset",
        "stroke-dashoffset"
      ],
      [
        "strokeLinecap",
        "stroke-linecap"
      ],
      [
        "strokeLinejoin",
        "stroke-linejoin"
      ],
      [
        "strokeMiterlimit",
        "stroke-miterlimit"
      ],
      [
        "strokeOpacity",
        "stroke-opacity"
      ],
      [
        "strokeWidth",
        "stroke-width"
      ],
      [
        "textAnchor",
        "text-anchor"
      ],
      [
        "textDecoration",
        "text-decoration"
      ],
      [
        "textRendering",
        "text-rendering"
      ],
      [
        "transformOrigin",
        "transform-origin"
      ],
      [
        "underlinePosition",
        "underline-position"
      ],
      [
        "underlineThickness",
        "underline-thickness"
      ],
      [
        "unicodeBidi",
        "unicode-bidi"
      ],
      [
        "unicodeRange",
        "unicode-range"
      ],
      [
        "unitsPerEm",
        "units-per-em"
      ],
      [
        "vAlphabetic",
        "v-alphabetic"
      ],
      [
        "vHanging",
        "v-hanging"
      ],
      [
        "vIdeographic",
        "v-ideographic"
      ],
      [
        "vMathematical",
        "v-mathematical"
      ],
      [
        "vectorEffect",
        "vector-effect"
      ],
      [
        "vertAdvY",
        "vert-adv-y"
      ],
      [
        "vertOriginX",
        "vert-origin-x"
      ],
      [
        "vertOriginY",
        "vert-origin-y"
      ],
      [
        "wordSpacing",
        "word-spacing"
      ],
      [
        "writingMode",
        "writing-mode"
      ],
      [
        "xmlnsXlink",
        "xmlns:xlink"
      ],
      [
        "xHeight",
        "x-height"
      ]
    ]), oo = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
    function Xe(l) {
      return oo.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
    }
    function jt() {
    }
    var vf = null;
    function hf(l) {
      return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
    }
    var lu = null, tu = null;
    function ki(l) {
      var t = $a(l);
      if (t && (l = t.stateNode)) {
        var a = l[Wl] || null;
        l: switch (l = t.stateNode, t.type) {
          case "input":
            if (df(l, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name), t = a.name, a.type === "radio" && t != null) {
              for (a = l; a.parentNode; ) a = a.parentNode;
              for (a = a.querySelectorAll('input[name="' + mt("" + t) + '"][type="radio"]'), t = 0; t < a.length; t++) {
                var u = a[t];
                if (u !== l && u.form === l.form) {
                  var e = u[Wl] || null;
                  if (!e) throw Error(o(90));
                  df(u, e.value, e.defaultValue, e.defaultValue, e.checked, e.defaultChecked, e.type, e.name);
                }
              }
              for (t = 0; t < a.length; t++) u = a[t], u.form === l.form && Ki(u);
            }
            break l;
          case "textarea":
            wi(l, a.value, a.defaultValue);
            break l;
          case "select":
            t = a.value, t != null && Ia(l, !!a.multiple, t, false);
        }
      }
    }
    var gf = false;
    function Ii(l, t, a) {
      if (gf) return l(t, a);
      gf = true;
      try {
        var u = l(t);
        return u;
      } finally {
        if (gf = false, (lu !== null || tu !== null) && (Dn(), lu && (t = lu, l = tu, tu = lu = null, ki(t), l))) for (t = 0; t < l.length; t++) ki(l[t]);
      }
    }
    function Yu(l, t) {
      var a = l.stateNode;
      if (a === null) return null;
      var u = a[Wl] || null;
      if (u === null) return null;
      a = u[t];
      l: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (u = !u.disabled) || (l = l.type, u = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !u;
          break l;
        default:
          l = false;
      }
      if (l) return null;
      if (a && typeof a != "function") throw Error(o(231, t, typeof a));
      return a;
    }
    var Bt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), rf = false;
    if (Bt) try {
      var Gu = {};
      Object.defineProperty(Gu, "passive", {
        get: function() {
          rf = true;
        }
      }), window.addEventListener("test", Gu, Gu), window.removeEventListener("test", Gu, Gu);
    } catch {
      rf = false;
    }
    var aa = null, bf = null, Qe = null;
    function Pi() {
      if (Qe) return Qe;
      var l, t = bf, a = t.length, u, e = "value" in aa ? aa.value : aa.textContent, n = e.length;
      for (l = 0; l < a && t[l] === e[l]; l++) ;
      var f = a - l;
      for (u = 1; u <= f && t[a - u] === e[n - u]; u++) ;
      return Qe = e.slice(l, 1 < u ? 1 - u : void 0);
    }
    function Ze(l) {
      var t = l.keyCode;
      return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
    }
    function Le() {
      return true;
    }
    function ls() {
      return false;
    }
    function $l(l) {
      function t(a, u, e, n, f) {
        this._reactName = a, this._targetInst = e, this.type = u, this.nativeEvent = n, this.target = f, this.currentTarget = null;
        for (var c in l) l.hasOwnProperty(c) && (a = l[c], this[c] = a ? a(n) : n[c]);
        return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === false) ? Le : ls, this.isPropagationStopped = ls, this;
      }
      return C(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = true;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = false), this.isDefaultPrevented = Le);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = true), this.isPropagationStopped = Le);
        },
        persist: function() {
        },
        isPersistent: Le
      }), t;
    }
    var Ua = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, Ve = $l(Ua), xu = C({}, Ua, {
      view: 0,
      detail: 0
    }), mo = $l(xu), Sf, _f, Xu, Ke = C({}, xu, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Tf,
      button: 0,
      buttons: 0,
      relatedTarget: function(l) {
        return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
      },
      movementX: function(l) {
        return "movementX" in l ? l.movementX : (l !== Xu && (Xu && l.type === "mousemove" ? (Sf = l.screenX - Xu.screenX, _f = l.screenY - Xu.screenY) : _f = Sf = 0, Xu = l), Sf);
      },
      movementY: function(l) {
        return "movementY" in l ? l.movementY : _f;
      }
    }), ts = $l(Ke), vo = C({}, Ke, {
      dataTransfer: 0
    }), ho = $l(vo), go = C({}, xu, {
      relatedTarget: 0
    }), zf = $l(go), ro = C({}, Ua, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), bo = $l(ro), So = C({}, Ua, {
      clipboardData: function(l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      }
    }), _o = $l(So), zo = C({}, Ua, {
      data: 0
    }), as = $l(zo), To = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Eo = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    }, Ao = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Oo(l) {
      var t = this.nativeEvent;
      return t.getModifierState ? t.getModifierState(l) : (l = Ao[l]) ? !!t[l] : false;
    }
    function Tf() {
      return Oo;
    }
    var po = C({}, xu, {
      key: function(l) {
        if (l.key) {
          var t = To[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress" ? (l = Ze(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Eo[l.keyCode] || "Unidentified" : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Tf,
      charCode: function(l) {
        return l.type === "keypress" ? Ze(l) : 0;
      },
      keyCode: function(l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function(l) {
        return l.type === "keypress" ? Ze(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      }
    }), Mo = $l(po), Do = C({}, Ke, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), us = $l(Do), Uo = C({}, xu, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Tf
    }), No = $l(Uo), Ro = C({}, Ua, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Ho = $l(Ro), qo = C({}, Ke, {
      deltaX: function(l) {
        return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
      },
      deltaY: function(l) {
        return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Co = $l(qo), jo = C({}, Ua, {
      newState: 0,
      oldState: 0
    }), Bo = $l(jo), Yo = [
      9,
      13,
      27,
      32
    ], Ef = Bt && "CompositionEvent" in window, Qu = null;
    Bt && "documentMode" in document && (Qu = document.documentMode);
    var Go = Bt && "TextEvent" in window && !Qu, es = Bt && (!Ef || Qu && 8 < Qu && 11 >= Qu), ns = " ", fs = false;
    function cs(l, t) {
      switch (l) {
        case "keyup":
          return Yo.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
          return true;
        default:
          return false;
      }
    }
    function is(l) {
      return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
    }
    var au = false;
    function xo(l, t) {
      switch (l) {
        case "compositionend":
          return is(t);
        case "keypress":
          return t.which !== 32 ? null : (fs = true, ns);
        case "textInput":
          return l = t.data, l === ns && fs ? null : l;
        default:
          return null;
      }
    }
    function Xo(l, t) {
      if (au) return l === "compositionend" || !Ef && cs(l, t) ? (l = Pi(), Qe = bf = aa = null, au = false, l) : null;
      switch (l) {
        case "paste":
          return null;
        case "keypress":
          if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length) return t.char;
            if (t.which) return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return es && t.locale !== "ko" ? null : t.data;
        default:
          return null;
      }
    }
    var Qo = {
      color: true,
      date: true,
      datetime: true,
      "datetime-local": true,
      email: true,
      month: true,
      number: true,
      password: true,
      range: true,
      search: true,
      tel: true,
      text: true,
      time: true,
      url: true,
      week: true
    };
    function ss(l) {
      var t = l && l.nodeName && l.nodeName.toLowerCase();
      return t === "input" ? !!Qo[l.type] : t === "textarea";
    }
    function ys(l, t, a, u) {
      lu ? tu ? tu.push(u) : tu = [
        u
      ] : lu = u, t = jn(t, "onChange"), 0 < t.length && (a = new Ve("onChange", "change", null, a, u), l.push({
        event: a,
        listeners: t
      }));
    }
    var Zu = null, Lu = null;
    function Zo(l) {
      Jy(l, 0);
    }
    function Je(l) {
      var t = Bu(l);
      if (Ki(t)) return l;
    }
    function ds(l, t) {
      if (l === "change") return t;
    }
    var os = false;
    if (Bt) {
      var Af;
      if (Bt) {
        var Of = "oninput" in document;
        if (!Of) {
          var ms = document.createElement("div");
          ms.setAttribute("oninput", "return;"), Of = typeof ms.oninput == "function";
        }
        Af = Of;
      } else Af = false;
      os = Af && (!document.documentMode || 9 < document.documentMode);
    }
    function vs() {
      Zu && (Zu.detachEvent("onpropertychange", hs), Lu = Zu = null);
    }
    function hs(l) {
      if (l.propertyName === "value" && Je(Lu)) {
        var t = [];
        ys(t, Lu, l, hf(l)), Ii(Zo, t);
      }
    }
    function Lo(l, t, a) {
      l === "focusin" ? (vs(), Zu = t, Lu = a, Zu.attachEvent("onpropertychange", hs)) : l === "focusout" && vs();
    }
    function Vo(l) {
      if (l === "selectionchange" || l === "keyup" || l === "keydown") return Je(Lu);
    }
    function Ko(l, t) {
      if (l === "click") return Je(t);
    }
    function Jo(l, t) {
      if (l === "input" || l === "change") return Je(t);
    }
    function wo(l, t) {
      return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
    }
    var et = typeof Object.is == "function" ? Object.is : wo;
    function Vu(l, t) {
      if (et(l, t)) return true;
      if (typeof l != "object" || l === null || typeof t != "object" || t === null) return false;
      var a = Object.keys(l), u = Object.keys(t);
      if (a.length !== u.length) return false;
      for (u = 0; u < a.length; u++) {
        var e = a[u];
        if (!tf.call(t, e) || !et(l[e], t[e])) return false;
      }
      return true;
    }
    function gs(l) {
      for (; l && l.firstChild; ) l = l.firstChild;
      return l;
    }
    function rs(l, t) {
      var a = gs(l);
      l = 0;
      for (var u; a; ) {
        if (a.nodeType === 3) {
          if (u = l + a.textContent.length, l <= t && u >= t) return {
            node: a,
            offset: t - l
          };
          l = u;
        }
        l: {
          for (; a; ) {
            if (a.nextSibling) {
              a = a.nextSibling;
              break l;
            }
            a = a.parentNode;
          }
          a = void 0;
        }
        a = gs(a);
      }
    }
    function bs(l, t) {
      return l && t ? l === t ? true : l && l.nodeType === 3 ? false : t && t.nodeType === 3 ? bs(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : false : false;
    }
    function Ss(l) {
      l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
      for (var t = xe(l.document); t instanceof l.HTMLIFrameElement; ) {
        try {
          var a = typeof t.contentWindow.location.href == "string";
        } catch {
          a = false;
        }
        if (a) l = t.contentWindow;
        else break;
        t = xe(l.document);
      }
      return t;
    }
    function pf(l) {
      var t = l && l.nodeName && l.nodeName.toLowerCase();
      return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
    }
    var Wo = Bt && "documentMode" in document && 11 >= document.documentMode, uu = null, Mf = null, Ku = null, Df = false;
    function _s(l, t, a) {
      var u = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
      Df || uu == null || uu !== xe(u) || (u = uu, "selectionStart" in u && pf(u) ? u = {
        start: u.selectionStart,
        end: u.selectionEnd
      } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = {
        anchorNode: u.anchorNode,
        anchorOffset: u.anchorOffset,
        focusNode: u.focusNode,
        focusOffset: u.focusOffset
      }), Ku && Vu(Ku, u) || (Ku = u, u = jn(Mf, "onSelect"), 0 < u.length && (t = new Ve("onSelect", "select", null, t, a), l.push({
        event: t,
        listeners: u
      }), t.target = uu)));
    }
    function Na(l, t) {
      var a = {};
      return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
    }
    var eu = {
      animationend: Na("Animation", "AnimationEnd"),
      animationiteration: Na("Animation", "AnimationIteration"),
      animationstart: Na("Animation", "AnimationStart"),
      transitionrun: Na("Transition", "TransitionRun"),
      transitionstart: Na("Transition", "TransitionStart"),
      transitioncancel: Na("Transition", "TransitionCancel"),
      transitionend: Na("Transition", "TransitionEnd")
    }, Uf = {}, zs = {};
    Bt && (zs = document.createElement("div").style, "AnimationEvent" in window || (delete eu.animationend.animation, delete eu.animationiteration.animation, delete eu.animationstart.animation), "TransitionEvent" in window || delete eu.transitionend.transition);
    function Ra(l) {
      if (Uf[l]) return Uf[l];
      if (!eu[l]) return l;
      var t = eu[l], a;
      for (a in t) if (t.hasOwnProperty(a) && a in zs) return Uf[l] = t[a];
      return l;
    }
    var Ts = Ra("animationend"), Es = Ra("animationiteration"), As = Ra("animationstart"), $o = Ra("transitionrun"), Fo = Ra("transitionstart"), ko = Ra("transitioncancel"), Os = Ra("transitionend"), ps = /* @__PURE__ */ new Map(), Nf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
    Nf.push("scrollEnd");
    function Et(l, t) {
      ps.set(l, t), Da(t, [
        l
      ]);
    }
    var we = typeof reportError == "function" ? reportError : function(l) {
      if (typeof window == "object" && typeof window.ErrorEvent == "function") {
        var t = new window.ErrorEvent("error", {
          bubbles: true,
          cancelable: true,
          message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
          error: l
        });
        if (!window.dispatchEvent(t)) return;
      } else if (typeof process == "object" && typeof process.emit == "function") {
        process.emit("uncaughtException", l);
        return;
      }
      console.error(l);
    }, vt = [], nu = 0, Rf = 0;
    function We() {
      for (var l = nu, t = Rf = nu = 0; t < l; ) {
        var a = vt[t];
        vt[t++] = null;
        var u = vt[t];
        vt[t++] = null;
        var e = vt[t];
        vt[t++] = null;
        var n = vt[t];
        if (vt[t++] = null, u !== null && e !== null) {
          var f = u.pending;
          f === null ? e.next = e : (e.next = f.next, f.next = e), u.pending = e;
        }
        n !== 0 && Ms(a, e, n);
      }
    }
    function $e(l, t, a, u) {
      vt[nu++] = l, vt[nu++] = t, vt[nu++] = a, vt[nu++] = u, Rf |= u, l.lanes |= u, l = l.alternate, l !== null && (l.lanes |= u);
    }
    function Hf(l, t, a, u) {
      return $e(l, t, a, u), Fe(l);
    }
    function Ha(l, t) {
      return $e(l, null, null, t), Fe(l);
    }
    function Ms(l, t, a) {
      l.lanes |= a;
      var u = l.alternate;
      u !== null && (u.lanes |= a);
      for (var e = false, n = l.return; n !== null; ) n.childLanes |= a, u = n.alternate, u !== null && (u.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = true)), l = n, n = n.return;
      return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - ut(a), l = n.hiddenUpdates, u = l[e], u === null ? l[e] = [
        t
      ] : u.push(t), t.lane = a | 536870912), n) : null;
    }
    function Fe(l) {
      if (50 < me) throw me = 0, Qc = null, Error(o(185));
      for (var t = l.return; t !== null; ) l = t, t = l.return;
      return l.tag === 3 ? l.stateNode : null;
    }
    var fu = {};
    function Io(l, t, a, u) {
      this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
    }
    function nt(l, t, a, u) {
      return new Io(l, t, a, u);
    }
    function qf(l) {
      return l = l.prototype, !(!l || !l.isReactComponent);
    }
    function Yt(l, t) {
      var a = l.alternate;
      return a === null ? (a = nt(l.tag, t, l.key, l.mode), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 65011712, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
    }
    function Ds(l, t) {
      l.flags &= 65011714;
      var a = l.alternate;
      return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      }), l;
    }
    function ke(l, t, a, u, e, n) {
      var f = 0;
      if (u = l, typeof l == "function") qf(l) && (f = 1);
      else if (typeof l == "string") f = uv(l, a, U.current) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
      else l: switch (l) {
        case Mt:
          return l = nt(31, a, t, e), l.elementType = Mt, l.lanes = n, l;
        case w:
          return qa(a.children, e, n, t);
        case Zl:
          f = 8, e |= 24;
          break;
        case Nl:
          return l = nt(12, a, t, e | 2), l.elementType = Nl, l.lanes = n, l;
        case dt:
          return l = nt(13, a, t, e), l.elementType = dt, l.lanes = n, l;
        case xl:
          return l = nt(19, a, t, e), l.elementType = xl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null) switch (l.$$typeof) {
            case Rl:
              f = 10;
              break l;
            case pt:
              f = 9;
              break l;
            case Kl:
              f = 11;
              break l;
            case k:
              f = 14;
              break l;
            case Jl:
              f = 16, u = null;
              break l;
          }
          f = 29, a = Error(o(130, l === null ? "null" : typeof l, "")), u = null;
      }
      return t = nt(f, a, t, e), t.elementType = l, t.type = u, t.lanes = n, t;
    }
    function qa(l, t, a, u) {
      return l = nt(7, l, u, t), l.lanes = a, l;
    }
    function Cf(l, t, a) {
      return l = nt(6, l, null, t), l.lanes = a, l;
    }
    function Us(l) {
      var t = nt(18, null, null, 0);
      return t.stateNode = l, t;
    }
    function jf(l, t, a) {
      return t = nt(4, l.children !== null ? l.children : [], l.key, t), t.lanes = a, t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation
      }, t;
    }
    var Ns = /* @__PURE__ */ new WeakMap();
    function ht(l, t) {
      if (typeof l == "object" && l !== null) {
        var a = Ns.get(l);
        return a !== void 0 ? a : (t = {
          value: l,
          source: t,
          stack: Ui(t)
        }, Ns.set(l, t), t);
      }
      return {
        value: l,
        source: t,
        stack: Ui(t)
      };
    }
    var cu = [], iu = 0, Ie = null, Ju = 0, gt = [], rt = 0, ua = null, Ut = 1, Nt = "";
    function Gt(l, t) {
      cu[iu++] = Ju, cu[iu++] = Ie, Ie = l, Ju = t;
    }
    function Rs(l, t, a) {
      gt[rt++] = Ut, gt[rt++] = Nt, gt[rt++] = ua, ua = l;
      var u = Ut;
      l = Nt;
      var e = 32 - ut(u) - 1;
      u &= ~(1 << e), a += 1;
      var n = 32 - ut(t) + e;
      if (30 < n) {
        var f = e - e % 5;
        n = (u & (1 << f) - 1).toString(32), u >>= f, e -= f, Ut = 1 << 32 - ut(t) + e | a << e | u, Nt = n + l;
      } else Ut = 1 << n | a << e | u, Nt = l;
    }
    function Bf(l) {
      l.return !== null && (Gt(l, 1), Rs(l, 1, 0));
    }
    function Yf(l) {
      for (; l === Ie; ) Ie = cu[--iu], cu[iu] = null, Ju = cu[--iu], cu[iu] = null;
      for (; l === ua; ) ua = gt[--rt], gt[rt] = null, Nt = gt[--rt], gt[rt] = null, Ut = gt[--rt], gt[rt] = null;
    }
    function Hs(l, t) {
      gt[rt++] = Ut, gt[rt++] = Nt, gt[rt++] = ua, Ut = t.id, Nt = t.overflow, ua = l;
    }
    var jl = null, vl = null, I = false, ea = null, bt = false, Gf = Error(o(519));
    function na(l) {
      var t = Error(o(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
      throw wu(ht(t, l)), Gf;
    }
    function qs(l) {
      var t = l.stateNode, a = l.type, u = l.memoizedProps;
      switch (t[Cl] = l, t[Wl] = u, a) {
        case "dialog":
          J("cancel", t), J("close", t);
          break;
        case "iframe":
        case "object":
        case "embed":
          J("load", t);
          break;
        case "video":
        case "audio":
          for (a = 0; a < he.length; a++) J(he[a], t);
          break;
        case "source":
          J("error", t);
          break;
        case "img":
        case "image":
        case "link":
          J("error", t), J("load", t);
          break;
        case "details":
          J("toggle", t);
          break;
        case "input":
          J("invalid", t), Ji(t, u.value, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name, true);
          break;
        case "select":
          J("invalid", t);
          break;
        case "textarea":
          J("invalid", t), Wi(t, u.value, u.defaultValue, u.children);
      }
      a = u.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || u.suppressHydrationWarning === true || Fy(t.textContent, a) ? (u.popover != null && (J("beforetoggle", t), J("toggle", t)), u.onScroll != null && J("scroll", t), u.onScrollEnd != null && J("scrollend", t), u.onClick != null && (t.onclick = jt), t = true) : t = false, t || na(l, true);
    }
    function Cs(l) {
      for (jl = l.return; jl; ) switch (jl.tag) {
        case 5:
        case 31:
        case 13:
          bt = false;
          return;
        case 27:
        case 3:
          bt = true;
          return;
        default:
          jl = jl.return;
      }
    }
    function su(l) {
      if (l !== jl) return false;
      if (!I) return Cs(l), I = true, false;
      var t = l.tag, a;
      if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || ai(l.type, l.memoizedProps)), a = !a), a && vl && na(l), Cs(l), t === 13) {
        if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
        vl = nd(l);
      } else if (t === 31) {
        if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(317));
        vl = nd(l);
      } else t === 27 ? (t = vl, Sa(l.type) ? (l = ci, ci = null, vl = l) : vl = t) : vl = jl ? _t(l.stateNode.nextSibling) : null;
      return true;
    }
    function Ca() {
      vl = jl = null, I = false;
    }
    function xf() {
      var l = ea;
      return l !== null && (Pl === null ? Pl = l : Pl.push.apply(Pl, l), ea = null), l;
    }
    function wu(l) {
      ea === null ? ea = [
        l
      ] : ea.push(l);
    }
    var Xf = y(null), ja = null, xt = null;
    function fa(l, t, a) {
      M(Xf, t._currentValue), t._currentValue = a;
    }
    function Xt(l) {
      l._currentValue = Xf.current, E(Xf);
    }
    function Qf(l, t, a) {
      for (; l !== null; ) {
        var u = l.alternate;
        if ((l.childLanes & t) !== t ? (l.childLanes |= t, u !== null && (u.childLanes |= t)) : u !== null && (u.childLanes & t) !== t && (u.childLanes |= t), l === a) break;
        l = l.return;
      }
    }
    function Zf(l, t, a, u) {
      var e = l.child;
      for (e !== null && (e.return = l); e !== null; ) {
        var n = e.dependencies;
        if (n !== null) {
          var f = e.child;
          n = n.firstContext;
          l: for (; n !== null; ) {
            var c = n;
            n = e;
            for (var i = 0; i < t.length; i++) if (c.context === t[i]) {
              n.lanes |= a, c = n.alternate, c !== null && (c.lanes |= a), Qf(n.return, a, l), u || (f = null);
              break l;
            }
            n = c.next;
          }
        } else if (e.tag === 18) {
          if (f = e.return, f === null) throw Error(o(341));
          f.lanes |= a, n = f.alternate, n !== null && (n.lanes |= a), Qf(f, a, l), f = null;
        } else f = e.child;
        if (f !== null) f.return = e;
        else for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
        e = f;
      }
    }
    function yu(l, t, a, u) {
      l = null;
      for (var e = t, n = false; e !== null; ) {
        if (!n) {
          if ((e.flags & 524288) !== 0) n = true;
          else if ((e.flags & 262144) !== 0) break;
        }
        if (e.tag === 10) {
          var f = e.alternate;
          if (f === null) throw Error(o(387));
          if (f = f.memoizedProps, f !== null) {
            var c = e.type;
            et(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [
              c
            ]);
          }
        } else if (e === al.current) {
          if (f = e.alternate, f === null) throw Error(o(387));
          f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(_e) : l = [
            _e
          ]);
        }
        e = e.return;
      }
      l !== null && Zf(t, l, a, u), t.flags |= 262144;
    }
    function Pe(l) {
      for (l = l.firstContext; l !== null; ) {
        if (!et(l.context._currentValue, l.memoizedValue)) return true;
        l = l.next;
      }
      return false;
    }
    function Ba(l) {
      ja = l, xt = null, l = l.dependencies, l !== null && (l.firstContext = null);
    }
    function Bl(l) {
      return js(ja, l);
    }
    function ln(l, t) {
      return ja === null && Ba(l), js(l, t);
    }
    function js(l, t) {
      var a = t._currentValue;
      if (t = {
        context: t,
        memoizedValue: a,
        next: null
      }, xt === null) {
        if (l === null) throw Error(o(308));
        xt = t, l.dependencies = {
          lanes: 0,
          firstContext: t
        }, l.flags |= 524288;
      } else xt = xt.next = t;
      return a;
    }
    var Po = typeof AbortController < "u" ? AbortController : function() {
      var l = [], t = this.signal = {
        aborted: false,
        addEventListener: function(a, u) {
          l.push(u);
        }
      };
      this.abort = function() {
        t.aborted = true, l.forEach(function(a) {
          return a();
        });
      };
    }, lm = m.unstable_scheduleCallback, tm = m.unstable_NormalPriority, Ol = {
      $$typeof: Rl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
    function Lf() {
      return {
        controller: new Po(),
        data: /* @__PURE__ */ new Map(),
        refCount: 0
      };
    }
    function Wu(l) {
      l.refCount--, l.refCount === 0 && lm(tm, function() {
        l.controller.abort();
      });
    }
    var $u = null, Vf = 0, du = 0, ou = null;
    function am(l, t) {
      if ($u === null) {
        var a = $u = [];
        Vf = 0, du = wc(), ou = {
          status: "pending",
          value: void 0,
          then: function(u) {
            a.push(u);
          }
        };
      }
      return Vf++, t.then(Bs, Bs), t;
    }
    function Bs() {
      if (--Vf === 0 && $u !== null) {
        ou !== null && (ou.status = "fulfilled");
        var l = $u;
        $u = null, du = 0, ou = null;
        for (var t = 0; t < l.length; t++) (0, l[t])();
      }
    }
    function um(l, t) {
      var a = [], u = {
        status: "pending",
        value: null,
        reason: null,
        then: function(e) {
          a.push(e);
        }
      };
      return l.then(function() {
        u.status = "fulfilled", u.value = t;
        for (var e = 0; e < a.length; e++) (0, a[e])(t);
      }, function(e) {
        for (u.status = "rejected", u.reason = e, e = 0; e < a.length; e++) (0, a[e])(void 0);
      }), u;
    }
    var Ys = _.S;
    _.S = function(l, t) {
      _y = tt(), typeof t == "object" && t !== null && typeof t.then == "function" && am(l, t), Ys !== null && Ys(l, t);
    };
    var Ya = y(null);
    function Kf() {
      var l = Ya.current;
      return l !== null ? l : ol.pooledCache;
    }
    function tn(l, t) {
      t === null ? M(Ya, Ya.current) : M(Ya, t.pool);
    }
    function Gs() {
      var l = Kf();
      return l === null ? null : {
        parent: Ol._currentValue,
        pool: l
      };
    }
    var mu = Error(o(460)), Jf = Error(o(474)), an = Error(o(542)), un = {
      then: function() {
      }
    };
    function xs(l) {
      return l = l.status, l === "fulfilled" || l === "rejected";
    }
    function Xs(l, t, a) {
      switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(jt, jt), t = a), t.status) {
        case "fulfilled":
          return t.value;
        case "rejected":
          throw l = t.reason, Zs(l), l;
        default:
          if (typeof t.status == "string") t.then(jt, jt);
          else {
            if (l = ol, l !== null && 100 < l.shellSuspendCounter) throw Error(o(482));
            l = t, l.status = "pending", l.then(function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = u;
              }
            }, function(u) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = u;
              }
            });
          }
          switch (t.status) {
            case "fulfilled":
              return t.value;
            case "rejected":
              throw l = t.reason, Zs(l), l;
          }
          throw xa = t, mu;
      }
    }
    function Ga(l) {
      try {
        var t = l._init;
        return t(l._payload);
      } catch (a) {
        throw a !== null && typeof a == "object" && typeof a.then == "function" ? (xa = a, mu) : a;
      }
    }
    var xa = null;
    function Qs() {
      if (xa === null) throw Error(o(459));
      var l = xa;
      return xa = null, l;
    }
    function Zs(l) {
      if (l === mu || l === an) throw Error(o(483));
    }
    var vu = null, Fu = 0;
    function en(l) {
      var t = Fu;
      return Fu += 1, vu === null && (vu = []), Xs(vu, l, t);
    }
    function ku(l, t) {
      t = t.props.ref, l.ref = t !== void 0 ? t : null;
    }
    function nn(l, t) {
      throw t.$$typeof === fl ? Error(o(525)) : (l = Object.prototype.toString.call(t), Error(o(31, l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l)));
    }
    function Ls(l) {
      function t(d, s) {
        if (l) {
          var v = d.deletions;
          v === null ? (d.deletions = [
            s
          ], d.flags |= 16) : v.push(s);
        }
      }
      function a(d, s) {
        if (!l) return null;
        for (; s !== null; ) t(d, s), s = s.sibling;
        return null;
      }
      function u(d) {
        for (var s = /* @__PURE__ */ new Map(); d !== null; ) d.key !== null ? s.set(d.key, d) : s.set(d.index, d), d = d.sibling;
        return s;
      }
      function e(d, s) {
        return d = Yt(d, s), d.index = 0, d.sibling = null, d;
      }
      function n(d, s, v) {
        return d.index = v, l ? (v = d.alternate, v !== null ? (v = v.index, v < s ? (d.flags |= 67108866, s) : v) : (d.flags |= 67108866, s)) : (d.flags |= 1048576, s);
      }
      function f(d) {
        return l && d.alternate === null && (d.flags |= 67108866), d;
      }
      function c(d, s, v, z) {
        return s === null || s.tag !== 6 ? (s = Cf(v, d.mode, z), s.return = d, s) : (s = e(s, v), s.return = d, s);
      }
      function i(d, s, v, z) {
        var H = v.type;
        return H === w ? S(d, s, v.props.children, z, v.key) : s !== null && (s.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Jl && Ga(H) === s.type) ? (s = e(s, v.props), ku(s, v), s.return = d, s) : (s = ke(v.type, v.key, v.props, null, d.mode, z), ku(s, v), s.return = d, s);
      }
      function h(d, s, v, z) {
        return s === null || s.tag !== 4 || s.stateNode.containerInfo !== v.containerInfo || s.stateNode.implementation !== v.implementation ? (s = jf(v, d.mode, z), s.return = d, s) : (s = e(s, v.children || []), s.return = d, s);
      }
      function S(d, s, v, z, H) {
        return s === null || s.tag !== 7 ? (s = qa(v, d.mode, z, H), s.return = d, s) : (s = e(s, v), s.return = d, s);
      }
      function T(d, s, v) {
        if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint") return s = Cf("" + s, d.mode, v), s.return = d, s;
        if (typeof s == "object" && s !== null) {
          switch (s.$$typeof) {
            case Ql:
              return v = ke(s.type, s.key, s.props, null, d.mode, v), ku(v, s), v.return = d, v;
            case Z:
              return s = jf(s, d.mode, v), s.return = d, s;
            case Jl:
              return s = Ga(s), T(d, s, v);
          }
          if (Tt(s) || wl(s)) return s = qa(s, d.mode, v, null), s.return = d, s;
          if (typeof s.then == "function") return T(d, en(s), v);
          if (s.$$typeof === Rl) return T(d, ln(d, s), v);
          nn(d, s);
        }
        return null;
      }
      function g(d, s, v, z) {
        var H = s !== null ? s.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint") return H !== null ? null : c(d, s, "" + v, z);
        if (typeof v == "object" && v !== null) {
          switch (v.$$typeof) {
            case Ql:
              return v.key === H ? i(d, s, v, z) : null;
            case Z:
              return v.key === H ? h(d, s, v, z) : null;
            case Jl:
              return v = Ga(v), g(d, s, v, z);
          }
          if (Tt(v) || wl(v)) return H !== null ? null : S(d, s, v, z, null);
          if (typeof v.then == "function") return g(d, s, en(v), z);
          if (v.$$typeof === Rl) return g(d, s, ln(d, v), z);
          nn(d, v);
        }
        return null;
      }
      function b(d, s, v, z, H) {
        if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint") return d = d.get(v) || null, c(s, d, "" + z, H);
        if (typeof z == "object" && z !== null) {
          switch (z.$$typeof) {
            case Ql:
              return d = d.get(z.key === null ? v : z.key) || null, i(s, d, z, H);
            case Z:
              return d = d.get(z.key === null ? v : z.key) || null, h(s, d, z, H);
            case Jl:
              return z = Ga(z), b(d, s, v, z, H);
          }
          if (Tt(z) || wl(z)) return d = d.get(v) || null, S(s, d, z, H, null);
          if (typeof z.then == "function") return b(d, s, v, en(z), H);
          if (z.$$typeof === Rl) return b(d, s, v, ln(s, z), H);
          nn(s, z);
        }
        return null;
      }
      function D(d, s, v, z) {
        for (var H = null, P = null, N = s, Q = s = 0, $ = null; N !== null && Q < v.length; Q++) {
          N.index > Q ? ($ = N, N = null) : $ = N.sibling;
          var ll = g(d, N, v[Q], z);
          if (ll === null) {
            N === null && (N = $);
            break;
          }
          l && N && ll.alternate === null && t(d, N), s = n(ll, s, Q), P === null ? H = ll : P.sibling = ll, P = ll, N = $;
        }
        if (Q === v.length) return a(d, N), I && Gt(d, Q), H;
        if (N === null) {
          for (; Q < v.length; Q++) N = T(d, v[Q], z), N !== null && (s = n(N, s, Q), P === null ? H = N : P.sibling = N, P = N);
          return I && Gt(d, Q), H;
        }
        for (N = u(N); Q < v.length; Q++) $ = b(N, d, Q, v[Q], z), $ !== null && (l && $.alternate !== null && N.delete($.key === null ? Q : $.key), s = n($, s, Q), P === null ? H = $ : P.sibling = $, P = $);
        return l && N.forEach(function(Aa) {
          return t(d, Aa);
        }), I && Gt(d, Q), H;
      }
      function q(d, s, v, z) {
        if (v == null) throw Error(o(151));
        for (var H = null, P = null, N = s, Q = s = 0, $ = null, ll = v.next(); N !== null && !ll.done; Q++, ll = v.next()) {
          N.index > Q ? ($ = N, N = null) : $ = N.sibling;
          var Aa = g(d, N, ll.value, z);
          if (Aa === null) {
            N === null && (N = $);
            break;
          }
          l && N && Aa.alternate === null && t(d, N), s = n(Aa, s, Q), P === null ? H = Aa : P.sibling = Aa, P = Aa, N = $;
        }
        if (ll.done) return a(d, N), I && Gt(d, Q), H;
        if (N === null) {
          for (; !ll.done; Q++, ll = v.next()) ll = T(d, ll.value, z), ll !== null && (s = n(ll, s, Q), P === null ? H = ll : P.sibling = ll, P = ll);
          return I && Gt(d, Q), H;
        }
        for (N = u(N); !ll.done; Q++, ll = v.next()) ll = b(N, d, Q, ll.value, z), ll !== null && (l && ll.alternate !== null && N.delete(ll.key === null ? Q : ll.key), s = n(ll, s, Q), P === null ? H = ll : P.sibling = ll, P = ll);
        return l && N.forEach(function(vv) {
          return t(d, vv);
        }), I && Gt(d, Q), H;
      }
      function yl(d, s, v, z) {
        if (typeof v == "object" && v !== null && v.type === w && v.key === null && (v = v.props.children), typeof v == "object" && v !== null) {
          switch (v.$$typeof) {
            case Ql:
              l: {
                for (var H = v.key; s !== null; ) {
                  if (s.key === H) {
                    if (H = v.type, H === w) {
                      if (s.tag === 7) {
                        a(d, s.sibling), z = e(s, v.props.children), z.return = d, d = z;
                        break l;
                      }
                    } else if (s.elementType === H || typeof H == "object" && H !== null && H.$$typeof === Jl && Ga(H) === s.type) {
                      a(d, s.sibling), z = e(s, v.props), ku(z, v), z.return = d, d = z;
                      break l;
                    }
                    a(d, s);
                    break;
                  } else t(d, s);
                  s = s.sibling;
                }
                v.type === w ? (z = qa(v.props.children, d.mode, z, v.key), z.return = d, d = z) : (z = ke(v.type, v.key, v.props, null, d.mode, z), ku(z, v), z.return = d, d = z);
              }
              return f(d);
            case Z:
              l: {
                for (H = v.key; s !== null; ) {
                  if (s.key === H) if (s.tag === 4 && s.stateNode.containerInfo === v.containerInfo && s.stateNode.implementation === v.implementation) {
                    a(d, s.sibling), z = e(s, v.children || []), z.return = d, d = z;
                    break l;
                  } else {
                    a(d, s);
                    break;
                  }
                  else t(d, s);
                  s = s.sibling;
                }
                z = jf(v, d.mode, z), z.return = d, d = z;
              }
              return f(d);
            case Jl:
              return v = Ga(v), yl(d, s, v, z);
          }
          if (Tt(v)) return D(d, s, v, z);
          if (wl(v)) {
            if (H = wl(v), typeof H != "function") throw Error(o(150));
            return v = H.call(v), q(d, s, v, z);
          }
          if (typeof v.then == "function") return yl(d, s, en(v), z);
          if (v.$$typeof === Rl) return yl(d, s, ln(d, v), z);
          nn(d, v);
        }
        return typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint" ? (v = "" + v, s !== null && s.tag === 6 ? (a(d, s.sibling), z = e(s, v), z.return = d, d = z) : (a(d, s), z = Cf(v, d.mode, z), z.return = d, d = z), f(d)) : a(d, s);
      }
      return function(d, s, v, z) {
        try {
          Fu = 0;
          var H = yl(d, s, v, z);
          return vu = null, H;
        } catch (N) {
          if (N === mu || N === an) throw N;
          var P = nt(29, N, null, d.mode);
          return P.lanes = z, P.return = d, P;
        } finally {
        }
      };
    }
    var Xa = Ls(true), Vs = Ls(false), ca = false;
    function wf(l) {
      l.updateQueue = {
        baseState: l.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          lanes: 0,
          hiddenCallbacks: null
        },
        callbacks: null
      };
    }
    function Wf(l, t) {
      l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
        baseState: l.baseState,
        firstBaseUpdate: l.firstBaseUpdate,
        lastBaseUpdate: l.lastBaseUpdate,
        shared: l.shared,
        callbacks: null
      });
    }
    function ia(l) {
      return {
        lane: l,
        tag: 0,
        payload: null,
        callback: null,
        next: null
      };
    }
    function sa(l, t, a) {
      var u = l.updateQueue;
      if (u === null) return null;
      if (u = u.shared, (tl & 2) !== 0) {
        var e = u.pending;
        return e === null ? t.next = t : (t.next = e.next, e.next = t), u.pending = t, t = Fe(l), Ms(l, null, a), t;
      }
      return $e(l, u, t, a), Fe(l);
    }
    function Iu(l, t, a) {
      if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
        var u = t.lanes;
        u &= l.pendingLanes, a |= u, t.lanes = a, ji(l, a);
      }
    }
    function $f(l, t) {
      var a = l.updateQueue, u = l.alternate;
      if (u !== null && (u = u.updateQueue, a === u)) {
        var e = null, n = null;
        if (a = a.firstBaseUpdate, a !== null) {
          do {
            var f = {
              lane: a.lane,
              tag: a.tag,
              payload: a.payload,
              callback: null,
              next: null
            };
            n === null ? e = n = f : n = n.next = f, a = a.next;
          } while (a !== null);
          n === null ? e = n = t : n = n.next = t;
        } else e = n = t;
        a = {
          baseState: u.baseState,
          firstBaseUpdate: e,
          lastBaseUpdate: n,
          shared: u.shared,
          callbacks: u.callbacks
        }, l.updateQueue = a;
        return;
      }
      l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
    }
    var Ff = false;
    function Pu() {
      if (Ff) {
        var l = ou;
        if (l !== null) throw l;
      }
    }
    function le(l, t, a, u) {
      Ff = false;
      var e = l.updateQueue;
      ca = false;
      var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
      if (c !== null) {
        e.shared.pending = null;
        var i = c, h = i.next;
        i.next = null, f === null ? n = h : f.next = h, f = i;
        var S = l.alternate;
        S !== null && (S = S.updateQueue, c = S.lastBaseUpdate, c !== f && (c === null ? S.firstBaseUpdate = h : c.next = h, S.lastBaseUpdate = i));
      }
      if (n !== null) {
        var T = e.baseState;
        f = 0, S = h = i = null, c = n;
        do {
          var g = c.lane & -536870913, b = g !== c.lane;
          if (b ? (W & g) === g : (u & g) === g) {
            g !== 0 && g === du && (Ff = true), S !== null && (S = S.next = {
              lane: 0,
              tag: c.tag,
              payload: c.payload,
              callback: null,
              next: null
            });
            l: {
              var D = l, q = c;
              g = t;
              var yl = a;
              switch (q.tag) {
                case 1:
                  if (D = q.payload, typeof D == "function") {
                    T = D.call(yl, T, g);
                    break l;
                  }
                  T = D;
                  break l;
                case 3:
                  D.flags = D.flags & -65537 | 128;
                case 0:
                  if (D = q.payload, g = typeof D == "function" ? D.call(yl, T, g) : D, g == null) break l;
                  T = C({}, T, g);
                  break l;
                case 2:
                  ca = true;
              }
            }
            g = c.callback, g !== null && (l.flags |= 64, b && (l.flags |= 8192), b = e.callbacks, b === null ? e.callbacks = [
              g
            ] : b.push(g));
          } else b = {
            lane: g,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, S === null ? (h = S = b, i = T) : S = S.next = b, f |= g;
          if (c = c.next, c === null) {
            if (c = e.shared.pending, c === null) break;
            b = c, c = b.next, b.next = null, e.lastBaseUpdate = b, e.shared.pending = null;
          }
        } while (true);
        S === null && (i = T), e.baseState = i, e.firstBaseUpdate = h, e.lastBaseUpdate = S, n === null && (e.shared.lanes = 0), va |= f, l.lanes = f, l.memoizedState = T;
      }
    }
    function Ks(l, t) {
      if (typeof l != "function") throw Error(o(191, l));
      l.call(t);
    }
    function Js(l, t) {
      var a = l.callbacks;
      if (a !== null) for (l.callbacks = null, l = 0; l < a.length; l++) Ks(a[l], t);
    }
    var hu = y(null), fn = y(0);
    function ws(l, t) {
      l = $t, M(fn, l), M(hu, t), $t = l | t.baseLanes;
    }
    function kf() {
      M(fn, $t), M(hu, hu.current);
    }
    function If() {
      $t = fn.current, E(hu), E(fn);
    }
    var ft = y(null), St = null;
    function ya(l) {
      var t = l.alternate;
      M(Tl, Tl.current & 1), M(ft, l), St === null && (t === null || hu.current !== null || t.memoizedState !== null) && (St = l);
    }
    function Pf(l) {
      M(Tl, Tl.current), M(ft, l), St === null && (St = l);
    }
    function Ws(l) {
      l.tag === 22 ? (M(Tl, Tl.current), M(ft, l), St === null && (St = l)) : da();
    }
    function da() {
      M(Tl, Tl.current), M(ft, ft.current);
    }
    function ct(l) {
      E(ft), St === l && (St = null), E(Tl);
    }
    var Tl = y(0);
    function cn(l) {
      for (var t = l; t !== null; ) {
        if (t.tag === 13) {
          var a = t.memoizedState;
          if (a !== null && (a = a.dehydrated, a === null || ni(a) || fi(a))) return t;
        } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
          if ((t.flags & 128) !== 0) return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Qt = 0, X = null, il = null, pl = null, sn = false, gu = false, Qa = false, yn = 0, te = 0, ru = null, em = 0;
    function bl() {
      throw Error(o(321));
    }
    function lc(l, t) {
      if (t === null) return false;
      for (var a = 0; a < t.length && a < l.length; a++) if (!et(l[a], t[a])) return false;
      return true;
    }
    function tc(l, t, a, u, e, n) {
      return Qt = n, X = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, _.H = l === null || l.memoizedState === null ? R0 : gc, Qa = false, n = a(u, e), Qa = false, gu && (n = Fs(t, a, u, e)), $s(l), n;
    }
    function $s(l) {
      _.H = ee;
      var t = il !== null && il.next !== null;
      if (Qt = 0, pl = il = X = null, sn = false, te = 0, ru = null, t) throw Error(o(300));
      l === null || Ml || (l = l.dependencies, l !== null && Pe(l) && (Ml = true));
    }
    function Fs(l, t, a, u) {
      X = l;
      var e = 0;
      do {
        if (gu && (ru = null), te = 0, gu = false, 25 <= e) throw Error(o(301));
        if (e += 1, pl = il = null, l.updateQueue != null) {
          var n = l.updateQueue;
          n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
        }
        _.H = H0, n = t(a, u);
      } while (gu);
      return n;
    }
    function nm() {
      var l = _.H, t = l.useState()[0];
      return t = typeof t.then == "function" ? ae(t) : t, l = l.useState()[0], (il !== null ? il.memoizedState : null) !== l && (X.flags |= 1024), t;
    }
    function ac() {
      var l = yn !== 0;
      return yn = 0, l;
    }
    function uc(l, t, a) {
      t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
    }
    function ec(l) {
      if (sn) {
        for (l = l.memoizedState; l !== null; ) {
          var t = l.queue;
          t !== null && (t.pending = null), l = l.next;
        }
        sn = false;
      }
      Qt = 0, pl = il = X = null, gu = false, te = yn = 0, ru = null;
    }
    function Vl() {
      var l = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return pl === null ? X.memoizedState = pl = l : pl = pl.next = l, pl;
    }
    function El() {
      if (il === null) {
        var l = X.alternate;
        l = l !== null ? l.memoizedState : null;
      } else l = il.next;
      var t = pl === null ? X.memoizedState : pl.next;
      if (t !== null) pl = t, il = l;
      else {
        if (l === null) throw X.alternate === null ? Error(o(467)) : Error(o(310));
        il = l, l = {
          memoizedState: il.memoizedState,
          baseState: il.baseState,
          baseQueue: il.baseQueue,
          queue: il.queue,
          next: null
        }, pl === null ? X.memoizedState = pl = l : pl = pl.next = l;
      }
      return pl;
    }
    function dn() {
      return {
        lastEffect: null,
        events: null,
        stores: null,
        memoCache: null
      };
    }
    function ae(l) {
      var t = te;
      return te += 1, ru === null && (ru = []), l = Xs(ru, l, t), t = X, (pl === null ? t.memoizedState : pl.next) === null && (t = t.alternate, _.H = t === null || t.memoizedState === null ? R0 : gc), l;
    }
    function on(l) {
      if (l !== null && typeof l == "object") {
        if (typeof l.then == "function") return ae(l);
        if (l.$$typeof === Rl) return Bl(l);
      }
      throw Error(o(438, String(l)));
    }
    function nc(l) {
      var t = null, a = X.updateQueue;
      if (a !== null && (t = a.memoCache), t == null) {
        var u = X.alternate;
        u !== null && (u = u.updateQueue, u !== null && (u = u.memoCache, u != null && (t = {
          data: u.data.map(function(e) {
            return e.slice();
          }),
          index: 0
        })));
      }
      if (t == null && (t = {
        data: [],
        index: 0
      }), a === null && (a = dn(), X.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0) for (a = t.data[t.index] = Array(l), u = 0; u < l; u++) a[u] = Ja;
      return t.index++, a;
    }
    function Zt(l, t) {
      return typeof t == "function" ? t(l) : t;
    }
    function mn(l) {
      var t = El();
      return fc(t, il, l);
    }
    function fc(l, t, a) {
      var u = l.queue;
      if (u === null) throw Error(o(311));
      u.lastRenderedReducer = a;
      var e = l.baseQueue, n = u.pending;
      if (n !== null) {
        if (e !== null) {
          var f = e.next;
          e.next = n.next, n.next = f;
        }
        t.baseQueue = e = n, u.pending = null;
      }
      if (n = l.baseState, e === null) l.memoizedState = n;
      else {
        t = e.next;
        var c = f = null, i = null, h = t, S = false;
        do {
          var T = h.lane & -536870913;
          if (T !== h.lane ? (W & T) === T : (Qt & T) === T) {
            var g = h.revertLane;
            if (g === 0) i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null
            }), T === du && (S = true);
            else if ((Qt & g) === g) {
              h = h.next, g === du && (S = true);
              continue;
            } else T = {
              lane: 0,
              revertLane: h.revertLane,
              gesture: null,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null
            }, i === null ? (c = i = T, f = n) : i = i.next = T, X.lanes |= g, va |= g;
            T = h.action, Qa && a(n, T), n = h.hasEagerState ? h.eagerState : a(n, T);
          } else g = {
            lane: T,
            revertLane: h.revertLane,
            gesture: h.gesture,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null
          }, i === null ? (c = i = g, f = n) : i = i.next = g, X.lanes |= T, va |= T;
          h = h.next;
        } while (h !== null && h !== t);
        if (i === null ? f = n : i.next = c, !et(n, l.memoizedState) && (Ml = true, S && (a = ou, a !== null))) throw a;
        l.memoizedState = n, l.baseState = f, l.baseQueue = i, u.lastRenderedState = n;
      }
      return e === null && (u.lanes = 0), [
        l.memoizedState,
        u.dispatch
      ];
    }
    function cc(l) {
      var t = El(), a = t.queue;
      if (a === null) throw Error(o(311));
      a.lastRenderedReducer = l;
      var u = a.dispatch, e = a.pending, n = t.memoizedState;
      if (e !== null) {
        a.pending = null;
        var f = e = e.next;
        do
          n = l(n, f.action), f = f.next;
        while (f !== e);
        et(n, t.memoizedState) || (Ml = true), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
      }
      return [
        n,
        u
      ];
    }
    function ks(l, t, a) {
      var u = X, e = El(), n = I;
      if (n) {
        if (a === void 0) throw Error(o(407));
        a = a();
      } else a = t();
      var f = !et((il || e).memoizedState, a);
      if (f && (e.memoizedState = a, Ml = true), e = e.queue, yc(l0.bind(null, u, e, l), [
        l
      ]), e.getSnapshot !== t || f || pl !== null && pl.memoizedState.tag & 1) {
        if (u.flags |= 2048, bu(9, {
          destroy: void 0
        }, Ps.bind(null, u, e, a, t), null), ol === null) throw Error(o(349));
        n || (Qt & 127) !== 0 || Is(u, t, a);
      }
      return a;
    }
    function Is(l, t, a) {
      l.flags |= 16384, l = {
        getSnapshot: t,
        value: a
      }, t = X.updateQueue, t === null ? (t = dn(), X.updateQueue = t, t.stores = [
        l
      ]) : (a = t.stores, a === null ? t.stores = [
        l
      ] : a.push(l));
    }
    function Ps(l, t, a, u) {
      t.value = a, t.getSnapshot = u, t0(t) && a0(l);
    }
    function l0(l, t, a) {
      return a(function() {
        t0(t) && a0(l);
      });
    }
    function t0(l) {
      var t = l.getSnapshot;
      l = l.value;
      try {
        var a = t();
        return !et(l, a);
      } catch {
        return true;
      }
    }
    function a0(l) {
      var t = Ha(l, 2);
      t !== null && lt(t, l, 2);
    }
    function ic(l) {
      var t = Vl();
      if (typeof l == "function") {
        var a = l;
        if (l = a(), Qa) {
          la(true);
          try {
            a();
          } finally {
            la(false);
          }
        }
      }
      return t.memoizedState = t.baseState = l, t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zt,
        lastRenderedState: l
      }, t;
    }
    function u0(l, t, a, u) {
      return l.baseState = a, fc(l, il, typeof u == "function" ? u : Zt);
    }
    function fm(l, t, a, u, e) {
      if (gn(l)) throw Error(o(485));
      if (l = t.action, l !== null) {
        var n = {
          payload: e,
          action: l,
          next: null,
          isTransition: true,
          status: "pending",
          value: null,
          reason: null,
          listeners: [],
          then: function(f) {
            n.listeners.push(f);
          }
        };
        _.T !== null ? a(true) : n.isTransition = false, u(n), a = t.pending, a === null ? (n.next = t.pending = n, e0(t, n)) : (n.next = a.next, t.pending = a.next = n);
      }
    }
    function e0(l, t) {
      var a = t.action, u = t.payload, e = l.state;
      if (t.isTransition) {
        var n = _.T, f = {};
        _.T = f;
        try {
          var c = a(e, u), i = _.S;
          i !== null && i(f, c), n0(l, t, c);
        } catch (h) {
          sc(l, t, h);
        } finally {
          n !== null && f.types !== null && (n.types = f.types), _.T = n;
        }
      } else try {
        n = a(e, u), n0(l, t, n);
      } catch (h) {
        sc(l, t, h);
      }
    }
    function n0(l, t, a) {
      a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(u) {
        f0(l, t, u);
      }, function(u) {
        return sc(l, t, u);
      }) : f0(l, t, a);
    }
    function f0(l, t, a) {
      t.status = "fulfilled", t.value = a, c0(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, e0(l, a)));
    }
    function sc(l, t, a) {
      var u = l.pending;
      if (l.pending = null, u !== null) {
        u = u.next;
        do
          t.status = "rejected", t.reason = a, c0(t), t = t.next;
        while (t !== u);
      }
      l.action = null;
    }
    function c0(l) {
      l = l.listeners;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
    function i0(l, t) {
      return t;
    }
    function s0(l, t) {
      if (I) {
        var a = ol.formState;
        if (a !== null) {
          l: {
            var u = X;
            if (I) {
              if (vl) {
                t: {
                  for (var e = vl, n = bt; e.nodeType !== 8; ) {
                    if (!n) {
                      e = null;
                      break t;
                    }
                    if (e = _t(e.nextSibling), e === null) {
                      e = null;
                      break t;
                    }
                  }
                  n = e.data, e = n === "F!" || n === "F" ? e : null;
                }
                if (e) {
                  vl = _t(e.nextSibling), u = e.data === "F!";
                  break l;
                }
              }
              na(u);
            }
            u = false;
          }
          u && (t = a[0]);
        }
      }
      return a = Vl(), a.memoizedState = a.baseState = t, u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: i0,
        lastRenderedState: t
      }, a.queue = u, a = D0.bind(null, X, u), u.dispatch = a, u = ic(false), n = hc.bind(null, X, false, u.queue), u = Vl(), e = {
        state: t,
        dispatch: null,
        action: l,
        pending: null
      }, u.queue = e, a = fm.bind(null, X, e, n, a), e.dispatch = a, u.memoizedState = l, [
        t,
        a,
        false
      ];
    }
    function y0(l) {
      var t = El();
      return d0(t, il, l);
    }
    function d0(l, t, a) {
      if (t = fc(l, t, i0)[0], l = mn(Zt)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
        var u = ae(t);
      } catch (f) {
        throw f === mu ? an : f;
      }
      else u = t;
      t = El();
      var e = t.queue, n = e.dispatch;
      return a !== t.memoizedState && (X.flags |= 2048, bu(9, {
        destroy: void 0
      }, cm.bind(null, e, a), null)), [
        u,
        n,
        l
      ];
    }
    function cm(l, t) {
      l.action = t;
    }
    function o0(l) {
      var t = El(), a = il;
      if (a !== null) return d0(t, a, l);
      El(), t = t.memoizedState, a = El();
      var u = a.queue.dispatch;
      return a.memoizedState = l, [
        t,
        u,
        false
      ];
    }
    function bu(l, t, a, u) {
      return l = {
        tag: l,
        create: a,
        deps: u,
        inst: t,
        next: null
      }, t = X.updateQueue, t === null && (t = dn(), X.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (u = a.next, a.next = l, l.next = u, t.lastEffect = l), l;
    }
    function m0() {
      return El().memoizedState;
    }
    function vn(l, t, a, u) {
      var e = Vl();
      X.flags |= l, e.memoizedState = bu(1 | t, {
        destroy: void 0
      }, a, u === void 0 ? null : u);
    }
    function hn(l, t, a, u) {
      var e = El();
      u = u === void 0 ? null : u;
      var n = e.memoizedState.inst;
      il !== null && u !== null && lc(u, il.memoizedState.deps) ? e.memoizedState = bu(t, n, a, u) : (X.flags |= l, e.memoizedState = bu(1 | t, n, a, u));
    }
    function v0(l, t) {
      vn(8390656, 8, l, t);
    }
    function yc(l, t) {
      hn(2048, 8, l, t);
    }
    function im(l) {
      X.flags |= 4;
      var t = X.updateQueue;
      if (t === null) t = dn(), X.updateQueue = t, t.events = [
        l
      ];
      else {
        var a = t.events;
        a === null ? t.events = [
          l
        ] : a.push(l);
      }
    }
    function h0(l) {
      var t = El().memoizedState;
      return im({
        ref: t,
        nextImpl: l
      }), function() {
        if ((tl & 2) !== 0) throw Error(o(440));
        return t.impl.apply(void 0, arguments);
      };
    }
    function g0(l, t) {
      return hn(4, 2, l, t);
    }
    function r0(l, t) {
      return hn(4, 4, l, t);
    }
    function b0(l, t) {
      if (typeof t == "function") {
        l = l();
        var a = t(l);
        return function() {
          typeof a == "function" ? a() : t(null);
        };
      }
      if (t != null) return l = l(), t.current = l, function() {
        t.current = null;
      };
    }
    function S0(l, t, a) {
      a = a != null ? a.concat([
        l
      ]) : null, hn(4, 4, b0.bind(null, t, l), a);
    }
    function dc() {
    }
    function _0(l, t) {
      var a = El();
      t = t === void 0 ? null : t;
      var u = a.memoizedState;
      return t !== null && lc(t, u[1]) ? u[0] : (a.memoizedState = [
        l,
        t
      ], l);
    }
    function z0(l, t) {
      var a = El();
      t = t === void 0 ? null : t;
      var u = a.memoizedState;
      if (t !== null && lc(t, u[1])) return u[0];
      if (u = l(), Qa) {
        la(true);
        try {
          l();
        } finally {
          la(false);
        }
      }
      return a.memoizedState = [
        u,
        t
      ], u;
    }
    function oc(l, t, a) {
      return a === void 0 || (Qt & 1073741824) !== 0 && (W & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = Ty(), X.lanes |= l, va |= l, a);
    }
    function T0(l, t, a, u) {
      return et(a, t) ? a : hu.current !== null ? (l = oc(l, a, u), et(l, t) || (Ml = true), l) : (Qt & 42) === 0 || (Qt & 1073741824) !== 0 && (W & 261930) === 0 ? (Ml = true, l.memoizedState = a) : (l = Ty(), X.lanes |= l, va |= l, t);
    }
    function E0(l, t, a, u, e) {
      var n = p.p;
      p.p = n !== 0 && 8 > n ? n : 8;
      var f = _.T, c = {};
      _.T = c, hc(l, false, t, a);
      try {
        var i = e(), h = _.S;
        if (h !== null && h(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
          var S = um(i, u);
          ue(l, t, S, yt(l));
        } else ue(l, t, u, yt(l));
      } catch (T) {
        ue(l, t, {
          then: function() {
          },
          status: "rejected",
          reason: T
        }, yt());
      } finally {
        p.p = n, f !== null && c.types !== null && (f.types = c.types), _.T = f;
      }
    }
    function sm() {
    }
    function mc(l, t, a, u) {
      if (l.tag !== 5) throw Error(o(476));
      var e = A0(l).queue;
      E0(l, e, t, j, a === null ? sm : function() {
        return O0(l), a(u);
      });
    }
    function A0(l) {
      var t = l.memoizedState;
      if (t !== null) return t;
      t = {
        memoizedState: j,
        baseState: j,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Zt,
          lastRenderedState: j
        },
        next: null
      };
      var a = {};
      return t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Zt,
          lastRenderedState: a
        },
        next: null
      }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
    }
    function O0(l) {
      var t = A0(l);
      t.next === null && (t = l.alternate.memoizedState), ue(l, t.next.queue, {}, yt());
    }
    function vc() {
      return Bl(_e);
    }
    function p0() {
      return El().memoizedState;
    }
    function M0() {
      return El().memoizedState;
    }
    function ym(l) {
      for (var t = l.return; t !== null; ) {
        switch (t.tag) {
          case 24:
          case 3:
            var a = yt();
            l = ia(a);
            var u = sa(t, l, a);
            u !== null && (lt(u, t, a), Iu(u, t, a)), t = {
              cache: Lf()
            }, l.payload = t;
            return;
        }
        t = t.return;
      }
    }
    function dm(l, t, a) {
      var u = yt();
      a = {
        lane: u,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, gn(l) ? U0(t, a) : (a = Hf(l, t, a, u), a !== null && (lt(a, l, u), N0(a, t, u)));
    }
    function D0(l, t, a) {
      var u = yt();
      ue(l, t, a, u);
    }
    function ue(l, t, a, u) {
      var e = {
        lane: u,
        revertLane: 0,
        gesture: null,
        action: a,
        hasEagerState: false,
        eagerState: null,
        next: null
      };
      if (gn(l)) U0(t, e);
      else {
        var n = l.alternate;
        if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null)) try {
          var f = t.lastRenderedState, c = n(f, a);
          if (e.hasEagerState = true, e.eagerState = c, et(c, f)) return $e(l, t, e, 0), ol === null && We(), false;
        } catch {
        } finally {
        }
        if (a = Hf(l, t, e, u), a !== null) return lt(a, l, u), N0(a, t, u), true;
      }
      return false;
    }
    function hc(l, t, a, u) {
      if (u = {
        lane: 2,
        revertLane: wc(),
        gesture: null,
        action: u,
        hasEagerState: false,
        eagerState: null,
        next: null
      }, gn(l)) {
        if (t) throw Error(o(479));
      } else t = Hf(l, a, u, 2), t !== null && lt(t, l, 2);
    }
    function gn(l) {
      var t = l.alternate;
      return l === X || t !== null && t === X;
    }
    function U0(l, t) {
      gu = sn = true;
      var a = l.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
    }
    function N0(l, t, a) {
      if ((a & 4194048) !== 0) {
        var u = t.lanes;
        u &= l.pendingLanes, a |= u, t.lanes = a, ji(l, a);
      }
    }
    var ee = {
      readContext: Bl,
      use: on,
      useCallback: bl,
      useContext: bl,
      useEffect: bl,
      useImperativeHandle: bl,
      useLayoutEffect: bl,
      useInsertionEffect: bl,
      useMemo: bl,
      useReducer: bl,
      useRef: bl,
      useState: bl,
      useDebugValue: bl,
      useDeferredValue: bl,
      useTransition: bl,
      useSyncExternalStore: bl,
      useId: bl,
      useHostTransitionStatus: bl,
      useFormState: bl,
      useActionState: bl,
      useOptimistic: bl,
      useMemoCache: bl,
      useCacheRefresh: bl
    };
    ee.useEffectEvent = bl;
    var R0 = {
      readContext: Bl,
      use: on,
      useCallback: function(l, t) {
        return Vl().memoizedState = [
          l,
          t === void 0 ? null : t
        ], l;
      },
      useContext: Bl,
      useEffect: v0,
      useImperativeHandle: function(l, t, a) {
        a = a != null ? a.concat([
          l
        ]) : null, vn(4194308, 4, b0.bind(null, t, l), a);
      },
      useLayoutEffect: function(l, t) {
        return vn(4194308, 4, l, t);
      },
      useInsertionEffect: function(l, t) {
        vn(4, 2, l, t);
      },
      useMemo: function(l, t) {
        var a = Vl();
        t = t === void 0 ? null : t;
        var u = l();
        if (Qa) {
          la(true);
          try {
            l();
          } finally {
            la(false);
          }
        }
        return a.memoizedState = [
          u,
          t
        ], u;
      },
      useReducer: function(l, t, a) {
        var u = Vl();
        if (a !== void 0) {
          var e = a(t);
          if (Qa) {
            la(true);
            try {
              a(t);
            } finally {
              la(false);
            }
          }
        } else e = t;
        return u.memoizedState = u.baseState = e, l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: l,
          lastRenderedState: e
        }, u.queue = l, l = l.dispatch = dm.bind(null, X, l), [
          u.memoizedState,
          l
        ];
      },
      useRef: function(l) {
        var t = Vl();
        return l = {
          current: l
        }, t.memoizedState = l;
      },
      useState: function(l) {
        l = ic(l);
        var t = l.queue, a = D0.bind(null, X, t);
        return t.dispatch = a, [
          l.memoizedState,
          a
        ];
      },
      useDebugValue: dc,
      useDeferredValue: function(l, t) {
        var a = Vl();
        return oc(a, l, t);
      },
      useTransition: function() {
        var l = ic(false);
        return l = E0.bind(null, X, l.queue, true, false), Vl().memoizedState = l, [
          false,
          l
        ];
      },
      useSyncExternalStore: function(l, t, a) {
        var u = X, e = Vl();
        if (I) {
          if (a === void 0) throw Error(o(407));
          a = a();
        } else {
          if (a = t(), ol === null) throw Error(o(349));
          (W & 127) !== 0 || Is(u, t, a);
        }
        e.memoizedState = a;
        var n = {
          value: a,
          getSnapshot: t
        };
        return e.queue = n, v0(l0.bind(null, u, n, l), [
          l
        ]), u.flags |= 2048, bu(9, {
          destroy: void 0
        }, Ps.bind(null, u, n, a, t), null), a;
      },
      useId: function() {
        var l = Vl(), t = ol.identifierPrefix;
        if (I) {
          var a = Nt, u = Ut;
          a = (u & ~(1 << 32 - ut(u) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = yn++, 0 < a && (t += "H" + a.toString(32)), t += "_";
        } else a = em++, t = "_" + t + "r_" + a.toString(32) + "_";
        return l.memoizedState = t;
      },
      useHostTransitionStatus: vc,
      useFormState: s0,
      useActionState: s0,
      useOptimistic: function(l) {
        var t = Vl();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return t.queue = a, t = hc.bind(null, X, true, a), a.dispatch = t, [
          l,
          t
        ];
      },
      useMemoCache: nc,
      useCacheRefresh: function() {
        return Vl().memoizedState = ym.bind(null, X);
      },
      useEffectEvent: function(l) {
        var t = Vl(), a = {
          impl: l
        };
        return t.memoizedState = a, function() {
          if ((tl & 2) !== 0) throw Error(o(440));
          return a.impl.apply(void 0, arguments);
        };
      }
    }, gc = {
      readContext: Bl,
      use: on,
      useCallback: _0,
      useContext: Bl,
      useEffect: yc,
      useImperativeHandle: S0,
      useInsertionEffect: g0,
      useLayoutEffect: r0,
      useMemo: z0,
      useReducer: mn,
      useRef: m0,
      useState: function() {
        return mn(Zt);
      },
      useDebugValue: dc,
      useDeferredValue: function(l, t) {
        var a = El();
        return T0(a, il.memoizedState, l, t);
      },
      useTransition: function() {
        var l = mn(Zt)[0], t = El().memoizedState;
        return [
          typeof l == "boolean" ? l : ae(l),
          t
        ];
      },
      useSyncExternalStore: ks,
      useId: p0,
      useHostTransitionStatus: vc,
      useFormState: y0,
      useActionState: y0,
      useOptimistic: function(l, t) {
        var a = El();
        return u0(a, il, l, t);
      },
      useMemoCache: nc,
      useCacheRefresh: M0
    };
    gc.useEffectEvent = h0;
    var H0 = {
      readContext: Bl,
      use: on,
      useCallback: _0,
      useContext: Bl,
      useEffect: yc,
      useImperativeHandle: S0,
      useInsertionEffect: g0,
      useLayoutEffect: r0,
      useMemo: z0,
      useReducer: cc,
      useRef: m0,
      useState: function() {
        return cc(Zt);
      },
      useDebugValue: dc,
      useDeferredValue: function(l, t) {
        var a = El();
        return il === null ? oc(a, l, t) : T0(a, il.memoizedState, l, t);
      },
      useTransition: function() {
        var l = cc(Zt)[0], t = El().memoizedState;
        return [
          typeof l == "boolean" ? l : ae(l),
          t
        ];
      },
      useSyncExternalStore: ks,
      useId: p0,
      useHostTransitionStatus: vc,
      useFormState: o0,
      useActionState: o0,
      useOptimistic: function(l, t) {
        var a = El();
        return il !== null ? u0(a, il, l, t) : (a.baseState = l, [
          l,
          a.queue.dispatch
        ]);
      },
      useMemoCache: nc,
      useCacheRefresh: M0
    };
    H0.useEffectEvent = h0;
    function rc(l, t, a, u) {
      t = l.memoizedState, a = a(u, t), a = a == null ? t : C({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
    }
    var bc = {
      enqueueSetState: function(l, t, a) {
        l = l._reactInternals;
        var u = yt(), e = ia(u);
        e.payload = t, a != null && (e.callback = a), t = sa(l, e, u), t !== null && (lt(t, l, u), Iu(t, l, u));
      },
      enqueueReplaceState: function(l, t, a) {
        l = l._reactInternals;
        var u = yt(), e = ia(u);
        e.tag = 1, e.payload = t, a != null && (e.callback = a), t = sa(l, e, u), t !== null && (lt(t, l, u), Iu(t, l, u));
      },
      enqueueForceUpdate: function(l, t) {
        l = l._reactInternals;
        var a = yt(), u = ia(a);
        u.tag = 2, t != null && (u.callback = t), t = sa(l, u, a), t !== null && (lt(t, l, a), Iu(t, l, a));
      }
    };
    function q0(l, t, a, u, e, n, f) {
      return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(u, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Vu(a, u) || !Vu(e, n) : true;
    }
    function C0(l, t, a, u) {
      l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, u), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, u), t.state !== l && bc.enqueueReplaceState(t, t.state, null);
    }
    function Za(l, t) {
      var a = t;
      if ("ref" in t) {
        a = {};
        for (var u in t) u !== "ref" && (a[u] = t[u]);
      }
      if (l = l.defaultProps) {
        a === t && (a = C({}, a));
        for (var e in l) a[e] === void 0 && (a[e] = l[e]);
      }
      return a;
    }
    function j0(l) {
      we(l);
    }
    function B0(l) {
      console.error(l);
    }
    function Y0(l) {
      we(l);
    }
    function rn(l, t) {
      try {
        var a = l.onUncaughtError;
        a(t.value, {
          componentStack: t.stack
        });
      } catch (u) {
        setTimeout(function() {
          throw u;
        });
      }
    }
    function G0(l, t, a) {
      try {
        var u = l.onCaughtError;
        u(a.value, {
          componentStack: a.stack,
          errorBoundary: t.tag === 1 ? t.stateNode : null
        });
      } catch (e) {
        setTimeout(function() {
          throw e;
        });
      }
    }
    function Sc(l, t, a) {
      return a = ia(a), a.tag = 3, a.payload = {
        element: null
      }, a.callback = function() {
        rn(l, t);
      }, a;
    }
    function x0(l) {
      return l = ia(l), l.tag = 3, l;
    }
    function X0(l, t, a, u) {
      var e = a.type.getDerivedStateFromError;
      if (typeof e == "function") {
        var n = u.value;
        l.payload = function() {
          return e(n);
        }, l.callback = function() {
          G0(t, a, u);
        };
      }
      var f = a.stateNode;
      f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
        G0(t, a, u), typeof e != "function" && (ha === null ? ha = /* @__PURE__ */ new Set([
          this
        ]) : ha.add(this));
        var c = u.stack;
        this.componentDidCatch(u.value, {
          componentStack: c !== null ? c : ""
        });
      });
    }
    function om(l, t, a, u, e) {
      if (a.flags |= 32768, u !== null && typeof u == "object" && typeof u.then == "function") {
        if (t = a.alternate, t !== null && yu(t, a, e, true), a = ft.current, a !== null) {
          switch (a.tag) {
            case 31:
            case 13:
              return St === null ? Un() : a.alternate === null && Sl === 0 && (Sl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = e, u === un ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([
                u
              ]) : t.add(u), Vc(l, u, e)), false;
            case 22:
              return a.flags |= 65536, u === un ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
                transitions: null,
                markerInstances: null,
                retryQueue: /* @__PURE__ */ new Set([
                  u
                ])
              }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([
                u
              ]) : a.add(u)), Vc(l, u, e)), false;
          }
          throw Error(o(435, a.tag));
        }
        return Vc(l, u, e), Un(), false;
      }
      if (I) return t = ft.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, u !== Gf && (l = Error(o(422), {
        cause: u
      }), wu(ht(l, a)))) : (u !== Gf && (t = Error(o(423), {
        cause: u
      }), wu(ht(t, a))), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, u = ht(u, a), e = Sc(l.stateNode, u, e), $f(l, e), Sl !== 4 && (Sl = 2)), false;
      var n = Error(o(520), {
        cause: u
      });
      if (n = ht(n, a), oe === null ? oe = [
        n
      ] : oe.push(n), Sl !== 4 && (Sl = 2), t === null) return true;
      u = ht(u, a), a = t;
      do {
        switch (a.tag) {
          case 3:
            return a.flags |= 65536, l = e & -e, a.lanes |= l, l = Sc(a.stateNode, u, l), $f(a, l), false;
          case 1:
            if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (ha === null || !ha.has(n)))) return a.flags |= 65536, e &= -e, a.lanes |= e, e = x0(e), X0(e, l, a, u), $f(a, e), false;
        }
        a = a.return;
      } while (a !== null);
      return false;
    }
    var _c = Error(o(461)), Ml = false;
    function Yl(l, t, a, u) {
      t.child = l === null ? Vs(t, null, a, u) : Xa(t, l.child, a, u);
    }
    function Q0(l, t, a, u, e) {
      a = a.render;
      var n = t.ref;
      if ("ref" in u) {
        var f = {};
        for (var c in u) c !== "ref" && (f[c] = u[c]);
      } else f = u;
      return Ba(t), u = tc(l, t, a, f, n, e), c = ac(), l !== null && !Ml ? (uc(l, t, e), Lt(l, t, e)) : (I && c && Bf(t), t.flags |= 1, Yl(l, t, u, e), t.child);
    }
    function Z0(l, t, a, u, e) {
      if (l === null) {
        var n = a.type;
        return typeof n == "function" && !qf(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, L0(l, t, n, u, e)) : (l = ke(a.type, null, u, t, t.mode, e), l.ref = t.ref, l.return = t, t.child = l);
      }
      if (n = l.child, !Dc(l, e)) {
        var f = n.memoizedProps;
        if (a = a.compare, a = a !== null ? a : Vu, a(f, u) && l.ref === t.ref) return Lt(l, t, e);
      }
      return t.flags |= 1, l = Yt(n, u), l.ref = t.ref, l.return = t, t.child = l;
    }
    function L0(l, t, a, u, e) {
      if (l !== null) {
        var n = l.memoizedProps;
        if (Vu(n, u) && l.ref === t.ref) if (Ml = false, t.pendingProps = u = n, Dc(l, e)) (l.flags & 131072) !== 0 && (Ml = true);
        else return t.lanes = l.lanes, Lt(l, t, e);
      }
      return zc(l, t, a, u, e);
    }
    function V0(l, t, a, u) {
      var e = u.children, n = l !== null ? l.memoizedState : null;
      if (l === null && t.stateNode === null && (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), u.mode === "hidden") {
        if ((t.flags & 128) !== 0) {
          if (n = n !== null ? n.baseLanes | a : a, l !== null) {
            for (u = t.child = l.child, e = 0; u !== null; ) e = e | u.lanes | u.childLanes, u = u.sibling;
            u = e & ~n;
          } else u = 0, t.child = null;
          return K0(l, t, n, a, u);
        }
        if ((a & 536870912) !== 0) t.memoizedState = {
          baseLanes: 0,
          cachePool: null
        }, l !== null && tn(t, n !== null ? n.cachePool : null), n !== null ? ws(t, n) : kf(), Ws(t);
        else return u = t.lanes = 536870912, K0(l, t, n !== null ? n.baseLanes | a : a, a, u);
      } else n !== null ? (tn(t, n.cachePool), ws(t, n), da(), t.memoizedState = null) : (l !== null && tn(t, null), kf(), da());
      return Yl(l, t, e, a), t.child;
    }
    function ne(l, t) {
      return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      }), t.sibling;
    }
    function K0(l, t, a, u, e) {
      var n = Kf();
      return n = n === null ? null : {
        parent: Ol._currentValue,
        pool: n
      }, t.memoizedState = {
        baseLanes: a,
        cachePool: n
      }, l !== null && tn(t, null), kf(), Ws(t), l !== null && yu(l, t, u, true), t.childLanes = e, null;
    }
    function bn(l, t) {
      return t = _n({
        mode: t.mode,
        children: t.children
      }, l.mode), t.ref = l.ref, l.child = t, t.return = l, t;
    }
    function J0(l, t, a) {
      return Xa(t, l.child, null, a), l = bn(t, t.pendingProps), l.flags |= 2, ct(t), t.memoizedState = null, l;
    }
    function mm(l, t, a) {
      var u = t.pendingProps, e = (t.flags & 128) !== 0;
      if (t.flags &= -129, l === null) {
        if (I) {
          if (u.mode === "hidden") return l = bn(t, u), t.lanes = 536870912, ne(null, l);
          if (Pf(t), (l = vl) ? (l = ed(l, bt), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
            dehydrated: l,
            treeContext: ua !== null ? {
              id: Ut,
              overflow: Nt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, a = Us(l), a.return = t, t.child = a, jl = t, vl = null)) : l = null, l === null) throw na(t);
          return t.lanes = 536870912, null;
        }
        return bn(t, u);
      }
      var n = l.memoizedState;
      if (n !== null) {
        var f = n.dehydrated;
        if (Pf(t), e) if (t.flags & 256) t.flags &= -257, t = J0(l, t, a);
        else if (t.memoizedState !== null) t.child = l.child, t.flags |= 128, t = null;
        else throw Error(o(558));
        else if (Ml || yu(l, t, a, false), e = (a & l.childLanes) !== 0, Ml || e) {
          if (u = ol, u !== null && (f = Bi(u, a), f !== 0 && f !== n.retryLane)) throw n.retryLane = f, Ha(l, f), lt(u, l, f), _c;
          Un(), t = J0(l, t, a);
        } else l = n.treeContext, vl = _t(f.nextSibling), jl = t, I = true, ea = null, bt = false, l !== null && Hs(t, l), t = bn(t, u), t.flags |= 4096;
        return t;
      }
      return l = Yt(l.child, {
        mode: u.mode,
        children: u.children
      }), l.ref = t.ref, t.child = l, l.return = t, l;
    }
    function Sn(l, t) {
      var a = t.ref;
      if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
      else {
        if (typeof a != "function" && typeof a != "object") throw Error(o(284));
        (l === null || l.ref !== a) && (t.flags |= 4194816);
      }
    }
    function zc(l, t, a, u, e) {
      return Ba(t), a = tc(l, t, a, u, void 0, e), u = ac(), l !== null && !Ml ? (uc(l, t, e), Lt(l, t, e)) : (I && u && Bf(t), t.flags |= 1, Yl(l, t, a, e), t.child);
    }
    function w0(l, t, a, u, e, n) {
      return Ba(t), t.updateQueue = null, a = Fs(t, u, a, e), $s(l), u = ac(), l !== null && !Ml ? (uc(l, t, n), Lt(l, t, n)) : (I && u && Bf(t), t.flags |= 1, Yl(l, t, a, n), t.child);
    }
    function W0(l, t, a, u, e) {
      if (Ba(t), t.stateNode === null) {
        var n = fu, f = a.contextType;
        typeof f == "object" && f !== null && (n = Bl(f)), n = new a(u, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = bc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = u, n.state = t.memoizedState, n.refs = {}, wf(t), f = a.contextType, n.context = typeof f == "object" && f !== null ? Bl(f) : fu, n.state = t.memoizedState, f = a.getDerivedStateFromProps, typeof f == "function" && (rc(t, a, f, u), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && bc.enqueueReplaceState(n, n.state, null), le(t, u, n, e), Pu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = true;
      } else if (l === null) {
        n = t.stateNode;
        var c = t.memoizedProps, i = Za(a, c);
        n.props = i;
        var h = n.context, S = a.contextType;
        f = fu, typeof S == "object" && S !== null && (f = Bl(S));
        var T = a.getDerivedStateFromProps;
        S = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, S || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || h !== f) && C0(t, n, u, f), ca = false;
        var g = t.memoizedState;
        n.state = g, le(t, u, n, e), Pu(), h = t.memoizedState, c || g !== h || ca ? (typeof T == "function" && (rc(t, a, T, u), h = t.memoizedState), (i = ca || q0(t, a, i, u, g, h, f)) ? (S || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = u, t.memoizedState = h), n.props = u, n.state = h, n.context = f, u = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), u = false);
      } else {
        n = t.stateNode, Wf(l, t), f = t.memoizedProps, S = Za(a, f), n.props = S, T = t.pendingProps, g = n.context, h = a.contextType, i = fu, typeof h == "object" && h !== null && (i = Bl(h)), c = a.getDerivedStateFromProps, (h = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== T || g !== i) && C0(t, n, u, i), ca = false, g = t.memoizedState, n.state = g, le(t, u, n, e), Pu();
        var b = t.memoizedState;
        f !== T || g !== b || ca || l !== null && l.dependencies !== null && Pe(l.dependencies) ? (typeof c == "function" && (rc(t, a, c, u), b = t.memoizedState), (S = ca || q0(t, a, S, u, g, b, i) || l !== null && l.dependencies !== null && Pe(l.dependencies)) ? (h || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(u, b, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(u, b, i)), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), t.memoizedProps = u, t.memoizedState = b), n.props = u, n.state = b, n.context = i, u = S) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && g === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && g === l.memoizedState || (t.flags |= 1024), u = false);
      }
      return n = u, Sn(l, t), u = (t.flags & 128) !== 0, n || u ? (n = t.stateNode, a = u && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && u ? (t.child = Xa(t, l.child, null, e), t.child = Xa(t, null, a, e)) : Yl(l, t, a, e), t.memoizedState = n.state, l = t.child) : l = Lt(l, t, e), l;
    }
    function $0(l, t, a, u) {
      return Ca(), t.flags |= 256, Yl(l, t, a, u), t.child;
    }
    var Tc = {
      dehydrated: null,
      treeContext: null,
      retryLane: 0,
      hydrationErrors: null
    };
    function Ec(l) {
      return {
        baseLanes: l,
        cachePool: Gs()
      };
    }
    function Ac(l, t, a) {
      return l = l !== null ? l.childLanes & ~a : 0, t && (l |= st), l;
    }
    function F0(l, t, a) {
      var u = t.pendingProps, e = false, n = (t.flags & 128) !== 0, f;
      if ((f = n) || (f = l !== null && l.memoizedState === null ? false : (Tl.current & 2) !== 0), f && (e = true, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
        if (I) {
          if (e ? ya(t) : da(), (l = vl) ? (l = ed(l, bt), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
            dehydrated: l,
            treeContext: ua !== null ? {
              id: Ut,
              overflow: Nt
            } : null,
            retryLane: 536870912,
            hydrationErrors: null
          }, a = Us(l), a.return = t, t.child = a, jl = t, vl = null)) : l = null, l === null) throw na(t);
          return fi(l) ? t.lanes = 32 : t.lanes = 536870912, null;
        }
        var c = u.children;
        return u = u.fallback, e ? (da(), e = t.mode, c = _n({
          mode: "hidden",
          children: c
        }, e), u = qa(u, e, a, null), c.return = t, u.return = t, c.sibling = u, t.child = c, u = t.child, u.memoizedState = Ec(a), u.childLanes = Ac(l, f, a), t.memoizedState = Tc, ne(null, u)) : (ya(t), Oc(t, c));
      }
      var i = l.memoizedState;
      if (i !== null && (c = i.dehydrated, c !== null)) {
        if (n) t.flags & 256 ? (ya(t), t.flags &= -257, t = pc(l, t, a)) : t.memoizedState !== null ? (da(), t.child = l.child, t.flags |= 128, t = null) : (da(), c = u.fallback, e = t.mode, u = _n({
          mode: "visible",
          children: u.children
        }, e), c = qa(c, e, a, null), c.flags |= 2, u.return = t, c.return = t, u.sibling = c, t.child = u, Xa(t, l.child, null, a), u = t.child, u.memoizedState = Ec(a), u.childLanes = Ac(l, f, a), t.memoizedState = Tc, t = ne(null, u));
        else if (ya(t), fi(c)) {
          if (f = c.nextSibling && c.nextSibling.dataset, f) var h = f.dgst;
          f = h, u = Error(o(419)), u.stack = "", u.digest = f, wu({
            value: u,
            source: null,
            stack: null
          }), t = pc(l, t, a);
        } else if (Ml || yu(l, t, a, false), f = (a & l.childLanes) !== 0, Ml || f) {
          if (f = ol, f !== null && (u = Bi(f, a), u !== 0 && u !== i.retryLane)) throw i.retryLane = u, Ha(l, u), lt(f, l, u), _c;
          ni(c) || Un(), t = pc(l, t, a);
        } else ni(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, vl = _t(c.nextSibling), jl = t, I = true, ea = null, bt = false, l !== null && Hs(t, l), t = Oc(t, u.children), t.flags |= 4096);
        return t;
      }
      return e ? (da(), c = u.fallback, e = t.mode, i = l.child, h = i.sibling, u = Yt(i, {
        mode: "hidden",
        children: u.children
      }), u.subtreeFlags = i.subtreeFlags & 65011712, h !== null ? c = Yt(h, c) : (c = qa(c, e, a, null), c.flags |= 2), c.return = t, u.return = t, u.sibling = c, t.child = u, ne(null, u), u = t.child, c = l.child.memoizedState, c === null ? c = Ec(a) : (e = c.cachePool, e !== null ? (i = Ol._currentValue, e = e.parent !== i ? {
        parent: i,
        pool: i
      } : e) : e = Gs(), c = {
        baseLanes: c.baseLanes | a,
        cachePool: e
      }), u.memoizedState = c, u.childLanes = Ac(l, f, a), t.memoizedState = Tc, ne(l.child, u)) : (ya(t), a = l.child, l = a.sibling, a = Yt(a, {
        mode: "visible",
        children: u.children
      }), a.return = t, a.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [
        l
      ], t.flags |= 16) : f.push(l)), t.child = a, t.memoizedState = null, a);
    }
    function Oc(l, t) {
      return t = _n({
        mode: "visible",
        children: t
      }, l.mode), t.return = l, l.child = t;
    }
    function _n(l, t) {
      return l = nt(22, l, null, t), l.lanes = 0, l;
    }
    function pc(l, t, a) {
      return Xa(t, l.child, null, a), l = Oc(t, t.pendingProps.children), l.flags |= 2, t.memoizedState = null, l;
    }
    function k0(l, t, a) {
      l.lanes |= t;
      var u = l.alternate;
      u !== null && (u.lanes |= t), Qf(l.return, t, a);
    }
    function Mc(l, t, a, u, e, n) {
      var f = l.memoizedState;
      f === null ? l.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: u,
        tail: a,
        tailMode: e,
        treeForkCount: n
      } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = u, f.tail = a, f.tailMode = e, f.treeForkCount = n);
    }
    function I0(l, t, a) {
      var u = t.pendingProps, e = u.revealOrder, n = u.tail;
      u = u.children;
      var f = Tl.current, c = (f & 2) !== 0;
      if (c ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, M(Tl, f), Yl(l, t, u, a), u = I ? Ju : 0, !c && l !== null && (l.flags & 128) !== 0) l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && k0(l, a, t);
        else if (l.tag === 19) k0(l, a, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
      switch (e) {
        case "forwards":
          for (a = t.child, e = null; a !== null; ) l = a.alternate, l !== null && cn(l) === null && (e = a), a = a.sibling;
          a = e, a === null ? (e = t.child, t.child = null) : (e = a.sibling, a.sibling = null), Mc(t, false, e, a, n, u);
          break;
        case "backwards":
        case "unstable_legacy-backwards":
          for (a = null, e = t.child, t.child = null; e !== null; ) {
            if (l = e.alternate, l !== null && cn(l) === null) {
              t.child = e;
              break;
            }
            l = e.sibling, e.sibling = a, a = e, e = l;
          }
          Mc(t, true, a, null, n, u);
          break;
        case "together":
          Mc(t, false, null, null, void 0, u);
          break;
        default:
          t.memoizedState = null;
      }
      return t.child;
    }
    function Lt(l, t, a) {
      if (l !== null && (t.dependencies = l.dependencies), va |= t.lanes, (a & t.childLanes) === 0) if (l !== null) {
        if (yu(l, t, a, false), (a & t.childLanes) === 0) return null;
      } else return null;
      if (l !== null && t.child !== l.child) throw Error(o(153));
      if (t.child !== null) {
        for (l = t.child, a = Yt(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; ) l = l.sibling, a = a.sibling = Yt(l, l.pendingProps), a.return = t;
        a.sibling = null;
      }
      return t.child;
    }
    function Dc(l, t) {
      return (l.lanes & t) !== 0 ? true : (l = l.dependencies, !!(l !== null && Pe(l)));
    }
    function vm(l, t, a) {
      switch (t.tag) {
        case 3:
          Ll(t, t.stateNode.containerInfo), fa(t, Ol, l.memoizedState.cache), Ca();
          break;
        case 27:
        case 5:
          Ru(t);
          break;
        case 4:
          Ll(t, t.stateNode.containerInfo);
          break;
        case 10:
          fa(t, t.type, t.memoizedProps.value);
          break;
        case 31:
          if (t.memoizedState !== null) return t.flags |= 128, Pf(t), null;
          break;
        case 13:
          var u = t.memoizedState;
          if (u !== null) return u.dehydrated !== null ? (ya(t), t.flags |= 128, null) : (a & t.child.childLanes) !== 0 ? F0(l, t, a) : (ya(t), l = Lt(l, t, a), l !== null ? l.sibling : null);
          ya(t);
          break;
        case 19:
          var e = (l.flags & 128) !== 0;
          if (u = (a & t.childLanes) !== 0, u || (yu(l, t, a, false), u = (a & t.childLanes) !== 0), e) {
            if (u) return I0(l, t, a);
            t.flags |= 128;
          }
          if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), M(Tl, Tl.current), u) break;
          return null;
        case 22:
          return t.lanes = 0, V0(l, t, a, t.pendingProps);
        case 24:
          fa(t, Ol, l.memoizedState.cache);
      }
      return Lt(l, t, a);
    }
    function P0(l, t, a) {
      if (l !== null) if (l.memoizedProps !== t.pendingProps) Ml = true;
      else {
        if (!Dc(l, a) && (t.flags & 128) === 0) return Ml = false, vm(l, t, a);
        Ml = (l.flags & 131072) !== 0;
      }
      else Ml = false, I && (t.flags & 1048576) !== 0 && Rs(t, Ju, t.index);
      switch (t.lanes = 0, t.tag) {
        case 16:
          l: {
            var u = t.pendingProps;
            if (l = Ga(t.elementType), t.type = l, typeof l == "function") qf(l) ? (u = Za(l, u), t.tag = 1, t = W0(null, t, l, u, a)) : (t.tag = 0, t = zc(null, t, l, u, a));
            else {
              if (l != null) {
                var e = l.$$typeof;
                if (e === Kl) {
                  t.tag = 11, t = Q0(null, t, l, u, a);
                  break l;
                } else if (e === k) {
                  t.tag = 14, t = Z0(null, t, l, u, a);
                  break l;
                }
              }
              throw t = qt(l) || l, Error(o(306, t, ""));
            }
          }
          return t;
        case 0:
          return zc(l, t, t.type, t.pendingProps, a);
        case 1:
          return u = t.type, e = Za(u, t.pendingProps), W0(l, t, u, e, a);
        case 3:
          l: {
            if (Ll(t, t.stateNode.containerInfo), l === null) throw Error(o(387));
            u = t.pendingProps;
            var n = t.memoizedState;
            e = n.element, Wf(l, t), le(t, u, null, a);
            var f = t.memoizedState;
            if (u = f.cache, fa(t, Ol, u), u !== n.cache && Zf(t, [
              Ol
            ], a, true), Pu(), u = f.element, n.isDehydrated) if (n = {
              element: u,
              isDehydrated: false,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = $0(l, t, u, a);
              break l;
            } else if (u !== e) {
              e = ht(Error(o(424)), t), wu(e), t = $0(l, t, u, a);
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (vl = _t(l.firstChild), jl = t, I = true, ea = null, bt = true, a = Vs(t, null, u, a), t.child = a; a; ) a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
            else {
              if (Ca(), u === e) {
                t = Lt(l, t, a);
                break l;
              }
              Yl(l, t, u, a);
            }
            t = t.child;
          }
          return t;
        case 26:
          return Sn(l, t), l === null ? (a = yd(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : I || (a = t.type, l = t.pendingProps, u = Bn(V.current).createElement(a), u[Cl] = t, u[Wl] = l, Gl(u, a, l), Hl(u), t.stateNode = u) : t.memoizedState = yd(t.type, l.memoizedProps, t.pendingProps, l.memoizedState), null;
        case 27:
          return Ru(t), l === null && I && (u = t.stateNode = cd(t.type, t.pendingProps, V.current), jl = t, bt = true, e = vl, Sa(t.type) ? (ci = e, vl = _t(u.firstChild)) : vl = e), Yl(l, t, t.pendingProps.children, a), Sn(l, t), l === null && (t.flags |= 4194304), t.child;
        case 5:
          return l === null && I && ((e = u = vl) && (u = Vm(u, t.type, t.pendingProps, bt), u !== null ? (t.stateNode = u, jl = t, vl = _t(u.firstChild), bt = false, e = true) : e = false), e || na(t)), Ru(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, u = n.children, ai(e, n) ? u = null : f !== null && ai(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = tc(l, t, nm, null, null, a), _e._currentValue = e), Sn(l, t), Yl(l, t, u, a), t.child;
        case 6:
          return l === null && I && ((l = a = vl) && (a = Km(a, t.pendingProps, bt), a !== null ? (t.stateNode = a, jl = t, vl = null, l = true) : l = false), l || na(t)), null;
        case 13:
          return F0(l, t, a);
        case 4:
          return Ll(t, t.stateNode.containerInfo), u = t.pendingProps, l === null ? t.child = Xa(t, null, u, a) : Yl(l, t, u, a), t.child;
        case 11:
          return Q0(l, t, t.type, t.pendingProps, a);
        case 7:
          return Yl(l, t, t.pendingProps, a), t.child;
        case 8:
          return Yl(l, t, t.pendingProps.children, a), t.child;
        case 12:
          return Yl(l, t, t.pendingProps.children, a), t.child;
        case 10:
          return u = t.pendingProps, fa(t, t.type, u.value), Yl(l, t, u.children, a), t.child;
        case 9:
          return e = t.type._context, u = t.pendingProps.children, Ba(t), e = Bl(e), u = u(e), t.flags |= 1, Yl(l, t, u, a), t.child;
        case 14:
          return Z0(l, t, t.type, t.pendingProps, a);
        case 15:
          return L0(l, t, t.type, t.pendingProps, a);
        case 19:
          return I0(l, t, a);
        case 31:
          return mm(l, t, a);
        case 22:
          return V0(l, t, a, t.pendingProps);
        case 24:
          return Ba(t), u = Bl(Ol), l === null ? (e = Kf(), e === null && (e = ol, n = Lf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= a), e = n), t.memoizedState = {
            parent: u,
            cache: e
          }, wf(t), fa(t, Ol, e)) : ((l.lanes & a) !== 0 && (Wf(l, t), le(t, null, null, a), Pu()), e = l.memoizedState, n = t.memoizedState, e.parent !== u ? (e = {
            parent: u,
            cache: u
          }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), fa(t, Ol, u)) : (u = n.cache, fa(t, Ol, u), u !== e.cache && Zf(t, [
            Ol
          ], a, true))), Yl(l, t, t.pendingProps.children, a), t.child;
        case 29:
          throw t.pendingProps;
      }
      throw Error(o(156, t.tag));
    }
    function Vt(l) {
      l.flags |= 4;
    }
    function Uc(l, t, a, u, e) {
      if ((t = (l.mode & 32) !== 0) && (t = false), t) {
        if (l.flags |= 16777216, (e & 335544128) === e) if (l.stateNode.complete) l.flags |= 8192;
        else if (py()) l.flags |= 8192;
        else throw xa = un, Jf;
      } else l.flags &= -16777217;
    }
    function ly(l, t) {
      if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) l.flags &= -16777217;
      else if (l.flags |= 16777216, !hd(t)) if (py()) l.flags |= 8192;
      else throw xa = un, Jf;
    }
    function zn(l, t) {
      t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? qi() : 536870912, l.lanes |= t, Tu |= t);
    }
    function fe(l, t) {
      if (!I) switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; ) t.alternate !== null && (a = t), t = t.sibling;
          a === null ? l.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = l.tail;
          for (var u = null; a !== null; ) a.alternate !== null && (u = a), a = a.sibling;
          u === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : u.sibling = null;
      }
    }
    function hl(l) {
      var t = l.alternate !== null && l.alternate.child === l.child, a = 0, u = 0;
      if (t) for (var e = l.child; e !== null; ) a |= e.lanes | e.childLanes, u |= e.subtreeFlags & 65011712, u |= e.flags & 65011712, e.return = l, e = e.sibling;
      else for (e = l.child; e !== null; ) a |= e.lanes | e.childLanes, u |= e.subtreeFlags, u |= e.flags, e.return = l, e = e.sibling;
      return l.subtreeFlags |= u, l.childLanes = a, t;
    }
    function hm(l, t, a) {
      var u = t.pendingProps;
      switch (Yf(t), t.tag) {
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return hl(t), null;
        case 1:
          return hl(t), null;
        case 3:
          return a = t.stateNode, u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Xt(Ol), zl(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (su(t) ? Vt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, xf())), hl(t), null;
        case 26:
          var e = t.type, n = t.memoizedState;
          return l === null ? (Vt(t), n !== null ? (hl(t), ly(t, n)) : (hl(t), Uc(t, e, null, u, a))) : n ? n !== l.memoizedState ? (Vt(t), hl(t), ly(t, n)) : (hl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== u && Vt(t), hl(t), Uc(t, e, l, u, a)), null;
        case 27:
          if (Re(t), a = V.current, e = t.type, l !== null && t.stateNode != null) l.memoizedProps !== u && Vt(t);
          else {
            if (!u) {
              if (t.stateNode === null) throw Error(o(166));
              return hl(t), null;
            }
            l = U.current, su(t) ? qs(t) : (l = cd(e, u, a), t.stateNode = l, Vt(t));
          }
          return hl(t), null;
        case 5:
          if (Re(t), e = t.type, l !== null && t.stateNode != null) l.memoizedProps !== u && Vt(t);
          else {
            if (!u) {
              if (t.stateNode === null) throw Error(o(166));
              return hl(t), null;
            }
            if (n = U.current, su(t)) qs(t);
            else {
              var f = Bn(V.current);
              switch (n) {
                case 1:
                  n = f.createElementNS("http://www.w3.org/2000/svg", e);
                  break;
                case 2:
                  n = f.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                  break;
                default:
                  switch (e) {
                    case "svg":
                      n = f.createElementNS("http://www.w3.org/2000/svg", e);
                      break;
                    case "math":
                      n = f.createElementNS("http://www.w3.org/1998/Math/MathML", e);
                      break;
                    case "script":
                      n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild);
                      break;
                    case "select":
                      n = typeof u.is == "string" ? f.createElement("select", {
                        is: u.is
                      }) : f.createElement("select"), u.multiple ? n.multiple = true : u.size && (n.size = u.size);
                      break;
                    default:
                      n = typeof u.is == "string" ? f.createElement(e, {
                        is: u.is
                      }) : f.createElement(e);
                  }
              }
              n[Cl] = t, n[Wl] = u;
              l: for (f = t.child; f !== null; ) {
                if (f.tag === 5 || f.tag === 6) n.appendChild(f.stateNode);
                else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                  f.child.return = f, f = f.child;
                  continue;
                }
                if (f === t) break l;
                for (; f.sibling === null; ) {
                  if (f.return === null || f.return === t) break l;
                  f = f.return;
                }
                f.sibling.return = f.return, f = f.sibling;
              }
              t.stateNode = n;
              l: switch (Gl(n, e, u), e) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break l;
                case "img":
                  u = true;
                  break l;
                default:
                  u = false;
              }
              u && Vt(t);
            }
          }
          return hl(t), Uc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a), null;
        case 6:
          if (l && t.stateNode != null) l.memoizedProps !== u && Vt(t);
          else {
            if (typeof u != "string" && t.stateNode === null) throw Error(o(166));
            if (l = V.current, su(t)) {
              if (l = t.stateNode, a = t.memoizedProps, u = null, e = jl, e !== null) switch (e.tag) {
                case 27:
                case 5:
                  u = e.memoizedProps;
              }
              l[Cl] = t, l = !!(l.nodeValue === a || u !== null && u.suppressHydrationWarning === true || Fy(l.nodeValue, a)), l || na(t, true);
            } else l = Bn(l).createTextNode(u), l[Cl] = t, t.stateNode = l;
          }
          return hl(t), null;
        case 31:
          if (a = t.memoizedState, l === null || l.memoizedState !== null) {
            if (u = su(t), a !== null) {
              if (l === null) {
                if (!u) throw Error(o(318));
                if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(o(557));
                l[Cl] = t;
              } else Ca(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              hl(t), l = false;
            } else a = xf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = true;
            if (!l) return t.flags & 256 ? (ct(t), t) : (ct(t), null);
            if ((t.flags & 128) !== 0) throw Error(o(558));
          }
          return hl(t), null;
        case 13:
          if (u = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
            if (e = su(t), u !== null && u.dehydrated !== null) {
              if (l === null) {
                if (!e) throw Error(o(318));
                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
                e[Cl] = t;
              } else Ca(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
              hl(t), e = false;
            } else e = xf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = true;
            if (!e) return t.flags & 256 ? (ct(t), t) : (ct(t), null);
          }
          return ct(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = u !== null, l = l !== null && l.memoizedState !== null, a && (u = t.child, e = null, u.alternate !== null && u.alternate.memoizedState !== null && u.alternate.memoizedState.cachePool !== null && (e = u.alternate.memoizedState.cachePool.pool), n = null, u.memoizedState !== null && u.memoizedState.cachePool !== null && (n = u.memoizedState.cachePool.pool), n !== e && (u.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), zn(t, t.updateQueue), hl(t), null);
        case 4:
          return zl(), l === null && kc(t.stateNode.containerInfo), hl(t), null;
        case 10:
          return Xt(t.type), hl(t), null;
        case 19:
          if (E(Tl), u = t.memoizedState, u === null) return hl(t), null;
          if (e = (t.flags & 128) !== 0, n = u.rendering, n === null) if (e) fe(u, false);
          else {
            if (Sl !== 0 || l !== null && (l.flags & 128) !== 0) for (l = t.child; l !== null; ) {
              if (n = cn(l), n !== null) {
                for (t.flags |= 128, fe(u, false), l = n.updateQueue, t.updateQueue = l, zn(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; ) Ds(a, l), a = a.sibling;
                return M(Tl, Tl.current & 1 | 2), I && Gt(t, u.treeForkCount), t.child;
              }
              l = l.sibling;
            }
            u.tail !== null && tt() > pn && (t.flags |= 128, e = true, fe(u, false), t.lanes = 4194304);
          }
          else {
            if (!e) if (l = cn(n), l !== null) {
              if (t.flags |= 128, e = true, l = l.updateQueue, t.updateQueue = l, zn(t, l), fe(u, true), u.tail === null && u.tailMode === "hidden" && !n.alternate && !I) return hl(t), null;
            } else 2 * tt() - u.renderingStartTime > pn && a !== 536870912 && (t.flags |= 128, e = true, fe(u, false), t.lanes = 4194304);
            u.isBackwards ? (n.sibling = t.child, t.child = n) : (l = u.last, l !== null ? l.sibling = n : t.child = n, u.last = n);
          }
          return u.tail !== null ? (l = u.tail, u.rendering = l, u.tail = l.sibling, u.renderingStartTime = tt(), l.sibling = null, a = Tl.current, M(Tl, e ? a & 1 | 2 : a & 1), I && Gt(t, u.treeForkCount), l) : (hl(t), null);
        case 22:
        case 23:
          return ct(t), If(), u = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== u && (t.flags |= 8192) : u && (t.flags |= 8192), u ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (hl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : hl(t), a = t.updateQueue, a !== null && zn(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), u = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (u = t.memoizedState.cachePool.pool), u !== a && (t.flags |= 2048), l !== null && E(Ya), null;
        case 24:
          return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Xt(Ol), hl(t), null;
        case 25:
          return null;
        case 30:
          return null;
      }
      throw Error(o(156, t.tag));
    }
    function gm(l, t) {
      switch (Yf(t), t.tag) {
        case 1:
          return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 3:
          return Xt(Ol), zl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
        case 26:
        case 27:
        case 5:
          return Re(t), null;
        case 31:
          if (t.memoizedState !== null) {
            if (ct(t), t.alternate === null) throw Error(o(340));
            Ca();
          }
          return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 13:
          if (ct(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
            if (t.alternate === null) throw Error(o(340));
            Ca();
          }
          return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 19:
          return E(Tl), null;
        case 4:
          return zl(), null;
        case 10:
          return Xt(t.type), null;
        case 22:
        case 23:
          return ct(t), If(), l !== null && E(Ya), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
        case 24:
          return Xt(Ol), null;
        case 25:
          return null;
        default:
          return null;
      }
    }
    function ty(l, t) {
      switch (Yf(t), t.tag) {
        case 3:
          Xt(Ol), zl();
          break;
        case 26:
        case 27:
        case 5:
          Re(t);
          break;
        case 4:
          zl();
          break;
        case 31:
          t.memoizedState !== null && ct(t);
          break;
        case 13:
          ct(t);
          break;
        case 19:
          E(Tl);
          break;
        case 10:
          Xt(t.type);
          break;
        case 22:
        case 23:
          ct(t), If(), l !== null && E(Ya);
          break;
        case 24:
          Xt(Ol);
      }
    }
    function ce(l, t) {
      try {
        var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
        if (u !== null) {
          var e = u.next;
          a = e;
          do {
            if ((a.tag & l) === l) {
              u = void 0;
              var n = a.create, f = a.inst;
              u = n(), f.destroy = u;
            }
            a = a.next;
          } while (a !== e);
        }
      } catch (c) {
        nl(t, t.return, c);
      }
    }
    function oa(l, t, a) {
      try {
        var u = t.updateQueue, e = u !== null ? u.lastEffect : null;
        if (e !== null) {
          var n = e.next;
          u = n;
          do {
            if ((u.tag & l) === l) {
              var f = u.inst, c = f.destroy;
              if (c !== void 0) {
                f.destroy = void 0, e = t;
                var i = a, h = c;
                try {
                  h();
                } catch (S) {
                  nl(e, i, S);
                }
              }
            }
            u = u.next;
          } while (u !== n);
        }
      } catch (S) {
        nl(t, t.return, S);
      }
    }
    function ay(l) {
      var t = l.updateQueue;
      if (t !== null) {
        var a = l.stateNode;
        try {
          Js(t, a);
        } catch (u) {
          nl(l, l.return, u);
        }
      }
    }
    function uy(l, t, a) {
      a.props = Za(l.type, l.memoizedProps), a.state = l.memoizedState;
      try {
        a.componentWillUnmount();
      } catch (u) {
        nl(l, t, u);
      }
    }
    function ie(l, t) {
      try {
        var a = l.ref;
        if (a !== null) {
          switch (l.tag) {
            case 26:
            case 27:
            case 5:
              var u = l.stateNode;
              break;
            case 30:
              u = l.stateNode;
              break;
            default:
              u = l.stateNode;
          }
          typeof a == "function" ? l.refCleanup = a(u) : a.current = u;
        }
      } catch (e) {
        nl(l, t, e);
      }
    }
    function Rt(l, t) {
      var a = l.ref, u = l.refCleanup;
      if (a !== null) if (typeof u == "function") try {
        u();
      } catch (e) {
        nl(l, t, e);
      } finally {
        l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
      }
      else if (typeof a == "function") try {
        a(null);
      } catch (e) {
        nl(l, t, e);
      }
      else a.current = null;
    }
    function ey(l) {
      var t = l.type, a = l.memoizedProps, u = l.stateNode;
      try {
        l: switch (t) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            a.autoFocus && u.focus();
            break l;
          case "img":
            a.src ? u.src = a.src : a.srcSet && (u.srcset = a.srcSet);
        }
      } catch (e) {
        nl(l, l.return, e);
      }
    }
    function Nc(l, t, a) {
      try {
        var u = l.stateNode;
        Gm(u, l.type, a, t), u[Wl] = t;
      } catch (e) {
        nl(l, l.return, e);
      }
    }
    function ny(l) {
      return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Sa(l.type) || l.tag === 4;
    }
    function Rc(l) {
      l: for (; ; ) {
        for (; l.sibling === null; ) {
          if (l.return === null || ny(l.return)) return null;
          l = l.return;
        }
        for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
          if (l.tag === 27 && Sa(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
          l.child.return = l, l = l.child;
        }
        if (!(l.flags & 2)) return l.stateNode;
      }
    }
    function Hc(l, t, a) {
      var u = l.tag;
      if (u === 5 || u === 6) l = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(l, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(l), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = jt));
      else if (u !== 4 && (u === 27 && Sa(l.type) && (a = l.stateNode, t = null), l = l.child, l !== null)) for (Hc(l, t, a), l = l.sibling; l !== null; ) Hc(l, t, a), l = l.sibling;
    }
    function Tn(l, t, a) {
      var u = l.tag;
      if (u === 5 || u === 6) l = l.stateNode, t ? a.insertBefore(l, t) : a.appendChild(l);
      else if (u !== 4 && (u === 27 && Sa(l.type) && (a = l.stateNode), l = l.child, l !== null)) for (Tn(l, t, a), l = l.sibling; l !== null; ) Tn(l, t, a), l = l.sibling;
    }
    function fy(l) {
      var t = l.stateNode, a = l.memoizedProps;
      try {
        for (var u = l.type, e = t.attributes; e.length; ) t.removeAttributeNode(e[0]);
        Gl(t, u, a), t[Cl] = l, t[Wl] = a;
      } catch (n) {
        nl(l, l.return, n);
      }
    }
    var Kt = false, Dl = false, qc = false, cy = typeof WeakSet == "function" ? WeakSet : Set, ql = null;
    function rm(l, t) {
      if (l = l.containerInfo, li = Ln, l = Ss(l), pf(l)) {
        if ("selectionStart" in l) var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
        else l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var e = u.anchorOffset, n = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, n.nodeType;
            } catch {
              a = null;
              break l;
            }
            var f = 0, c = -1, i = -1, h = 0, S = 0, T = l, g = null;
            t: for (; ; ) {
              for (var b; T !== a || e !== 0 && T.nodeType !== 3 || (c = f + e), T !== n || u !== 0 && T.nodeType !== 3 || (i = f + u), T.nodeType === 3 && (f += T.nodeValue.length), (b = T.firstChild) !== null; ) g = T, T = b;
              for (; ; ) {
                if (T === l) break t;
                if (g === a && ++h === e && (c = f), g === n && ++S === u && (i = f), (b = T.nextSibling) !== null) break;
                T = g, g = T.parentNode;
              }
              T = b;
            }
            a = c === -1 || i === -1 ? null : {
              start: c,
              end: i
            };
          } else a = null;
        }
        a = a || {
          start: 0,
          end: 0
        };
      } else a = null;
      for (ti = {
        focusedElem: l,
        selectionRange: a
      }, Ln = false, ql = t; ql !== null; ) if (t = ql, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null) l.return = t, ql = l;
      else for (; ql !== null; ) {
        switch (t = ql, n = t.alternate, l = t.flags, t.tag) {
          case 0:
            if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null)) for (a = 0; a < l.length; a++) e = l[a], e.ref.impl = e.nextImpl;
            break;
          case 11:
          case 15:
            break;
          case 1:
            if ((l & 1024) !== 0 && n !== null) {
              l = void 0, a = t, e = n.memoizedProps, n = n.memoizedState, u = a.stateNode;
              try {
                var D = Za(a.type, e);
                l = u.getSnapshotBeforeUpdate(D, n), u.__reactInternalSnapshotBeforeUpdate = l;
              } catch (q) {
                nl(a, a.return, q);
              }
            }
            break;
          case 3:
            if ((l & 1024) !== 0) {
              if (l = t.stateNode.containerInfo, a = l.nodeType, a === 9) ei(l);
              else if (a === 1) switch (l.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  ei(l);
                  break;
                default:
                  l.textContent = "";
              }
            }
            break;
          case 5:
          case 26:
          case 27:
          case 6:
          case 4:
          case 17:
            break;
          default:
            if ((l & 1024) !== 0) throw Error(o(163));
        }
        if (l = t.sibling, l !== null) {
          l.return = t.return, ql = l;
          break;
        }
        ql = t.return;
      }
    }
    function iy(l, t, a) {
      var u = a.flags;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          wt(l, a), u & 4 && ce(5, a);
          break;
        case 1:
          if (wt(l, a), u & 4) if (l = a.stateNode, t === null) try {
            l.componentDidMount();
          } catch (f) {
            nl(a, a.return, f);
          }
          else {
            var e = Za(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(e, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              nl(a, a.return, f);
            }
          }
          u & 64 && ay(a), u & 512 && ie(a, a.return);
          break;
        case 3:
          if (wt(l, a), u & 64 && (l = a.updateQueue, l !== null)) {
            if (t = null, a.child !== null) switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
            try {
              Js(l, t);
            } catch (f) {
              nl(a, a.return, f);
            }
          }
          break;
        case 27:
          t === null && u & 4 && fy(a);
        case 26:
        case 5:
          wt(l, a), t === null && u & 4 && ey(a), u & 512 && ie(a, a.return);
          break;
        case 12:
          wt(l, a);
          break;
        case 31:
          wt(l, a), u & 4 && dy(l, a);
          break;
        case 13:
          wt(l, a), u & 4 && oy(l, a), u & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = pm.bind(null, a), Jm(l, a))));
          break;
        case 22:
          if (u = a.memoizedState !== null || Kt, !u) {
            t = t !== null && t.memoizedState !== null || Dl, e = Kt;
            var n = Dl;
            Kt = u, (Dl = t) && !n ? Wt(l, a, (a.subtreeFlags & 8772) !== 0) : wt(l, a), Kt = e, Dl = n;
          }
          break;
        case 30:
          break;
        default:
          wt(l, a);
      }
    }
    function sy(l) {
      var t = l.alternate;
      t !== null && (l.alternate = null, sy(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && sf(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
    }
    var gl = null, Fl = false;
    function Jt(l, t, a) {
      for (a = a.child; a !== null; ) yy(l, t, a), a = a.sibling;
    }
    function yy(l, t, a) {
      if (at && typeof at.onCommitFiberUnmount == "function") try {
        at.onCommitFiberUnmount(Hu, a);
      } catch {
      }
      switch (a.tag) {
        case 26:
          Dl || Rt(a, t), Jt(l, t, a), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
          break;
        case 27:
          Dl || Rt(a, t);
          var u = gl, e = Fl;
          Sa(a.type) && (gl = a.stateNode, Fl = false), Jt(l, t, a), re(a.stateNode), gl = u, Fl = e;
          break;
        case 5:
          Dl || Rt(a, t);
        case 6:
          if (u = gl, e = Fl, gl = null, Jt(l, t, a), gl = u, Fl = e, gl !== null) if (Fl) try {
            (gl.nodeType === 9 ? gl.body : gl.nodeName === "HTML" ? gl.ownerDocument.body : gl).removeChild(a.stateNode);
          } catch (n) {
            nl(a, t, n);
          }
          else try {
            gl.removeChild(a.stateNode);
          } catch (n) {
            nl(a, t, n);
          }
          break;
        case 18:
          gl !== null && (Fl ? (l = gl, ad(l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, a.stateNode), Nu(l)) : ad(gl, a.stateNode));
          break;
        case 4:
          u = gl, e = Fl, gl = a.stateNode.containerInfo, Fl = true, Jt(l, t, a), gl = u, Fl = e;
          break;
        case 0:
        case 11:
        case 14:
        case 15:
          oa(2, a, t), Dl || oa(4, a, t), Jt(l, t, a);
          break;
        case 1:
          Dl || (Rt(a, t), u = a.stateNode, typeof u.componentWillUnmount == "function" && uy(a, t, u)), Jt(l, t, a);
          break;
        case 21:
          Jt(l, t, a);
          break;
        case 22:
          Dl = (u = Dl) || a.memoizedState !== null, Jt(l, t, a), Dl = u;
          break;
        default:
          Jt(l, t, a);
      }
    }
    function dy(l, t) {
      if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
        l = l.dehydrated;
        try {
          Nu(l);
        } catch (a) {
          nl(t, t.return, a);
        }
      }
    }
    function oy(l, t) {
      if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null)))) try {
        Nu(l);
      } catch (a) {
        nl(t, t.return, a);
      }
    }
    function bm(l) {
      switch (l.tag) {
        case 31:
        case 13:
        case 19:
          var t = l.stateNode;
          return t === null && (t = l.stateNode = new cy()), t;
        case 22:
          return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new cy()), t;
        default:
          throw Error(o(435, l.tag));
      }
    }
    function En(l, t) {
      var a = bm(l);
      t.forEach(function(u) {
        if (!a.has(u)) {
          a.add(u);
          var e = Mm.bind(null, l, u);
          u.then(e, e);
        }
      });
    }
    function kl(l, t) {
      var a = t.deletions;
      if (a !== null) for (var u = 0; u < a.length; u++) {
        var e = a[u], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (Sa(c.type)) {
                gl = c.stateNode, Fl = false;
                break l;
              }
              break;
            case 5:
              gl = c.stateNode, Fl = false;
              break l;
            case 3:
            case 4:
              gl = c.stateNode.containerInfo, Fl = true;
              break l;
          }
          c = c.return;
        }
        if (gl === null) throw Error(o(160));
        yy(n, f, e), gl = null, Fl = false, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
      if (t.subtreeFlags & 13886) for (t = t.child; t !== null; ) my(t, l), t = t.sibling;
    }
    var At = null;
    function my(l, t) {
      var a = l.alternate, u = l.flags;
      switch (l.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          kl(t, l), Il(l), u & 4 && (oa(3, l, l.return), ce(3, l), oa(5, l, l.return));
          break;
        case 1:
          kl(t, l), Il(l), u & 512 && (Dl || a === null || Rt(a, a.return)), u & 64 && Kt && (l = l.updateQueue, l !== null && (u = l.callbacks, u !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? u : a.concat(u))));
          break;
        case 26:
          var e = At;
          if (kl(t, l), Il(l), u & 512 && (Dl || a === null || Rt(a, a.return)), u & 4) {
            var n = a !== null ? a.memoizedState : null;
            if (u = l.memoizedState, a === null) if (u === null) if (l.stateNode === null) {
              l: {
                u = l.type, a = l.memoizedProps, e = e.ownerDocument || e;
                t: switch (u) {
                  case "title":
                    n = e.getElementsByTagName("title")[0], (!n || n[ju] || n[Cl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(u), e.head.insertBefore(n, e.querySelector("head > title"))), Gl(n, u, a), n[Cl] = l, Hl(n), u = n;
                    break l;
                  case "link":
                    var f = md("link", "href", e).get(u + (a.href || ""));
                    if (f) {
                      for (var c = 0; c < f.length; c++) if (n = f[c], n.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                        f.splice(c, 1);
                        break t;
                      }
                    }
                    n = e.createElement(u), Gl(n, u, a), e.head.appendChild(n);
                    break;
                  case "meta":
                    if (f = md("meta", "content", e).get(u + (a.content || ""))) {
                      for (c = 0; c < f.length; c++) if (n = f[c], n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                        f.splice(c, 1);
                        break t;
                      }
                    }
                    n = e.createElement(u), Gl(n, u, a), e.head.appendChild(n);
                    break;
                  default:
                    throw Error(o(468, u));
                }
                n[Cl] = l, Hl(n), u = n;
              }
              l.stateNode = u;
            } else vd(e, l.type, l.stateNode);
            else l.stateNode = od(e, u, l.memoizedProps);
            else n !== u ? (n === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : n.count--, u === null ? vd(e, l.type, l.stateNode) : od(e, u, l.memoizedProps)) : u === null && l.stateNode !== null && Nc(l, l.memoizedProps, a.memoizedProps);
          }
          break;
        case 27:
          kl(t, l), Il(l), u & 512 && (Dl || a === null || Rt(a, a.return)), a !== null && u & 4 && Nc(l, l.memoizedProps, a.memoizedProps);
          break;
        case 5:
          if (kl(t, l), Il(l), u & 512 && (Dl || a === null || Rt(a, a.return)), l.flags & 32) {
            e = l.stateNode;
            try {
              Pa(e, "");
            } catch (D) {
              nl(l, l.return, D);
            }
          }
          u & 4 && l.stateNode != null && (e = l.memoizedProps, Nc(l, e, a !== null ? a.memoizedProps : e)), u & 1024 && (qc = true);
          break;
        case 6:
          if (kl(t, l), Il(l), u & 4) {
            if (l.stateNode === null) throw Error(o(162));
            u = l.memoizedProps, a = l.stateNode;
            try {
              a.nodeValue = u;
            } catch (D) {
              nl(l, l.return, D);
            }
          }
          break;
        case 3:
          if (xn = null, e = At, At = Yn(t.containerInfo), kl(t, l), At = e, Il(l), u & 4 && a !== null && a.memoizedState.isDehydrated) try {
            Nu(t.containerInfo);
          } catch (D) {
            nl(l, l.return, D);
          }
          qc && (qc = false, vy(l));
          break;
        case 4:
          u = At, At = Yn(l.stateNode.containerInfo), kl(t, l), Il(l), At = u;
          break;
        case 12:
          kl(t, l), Il(l);
          break;
        case 31:
          kl(t, l), Il(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, En(l, u)));
          break;
        case 13:
          kl(t, l), Il(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (On = tt()), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, En(l, u)));
          break;
        case 22:
          e = l.memoizedState !== null;
          var i = a !== null && a.memoizedState !== null, h = Kt, S = Dl;
          if (Kt = h || e, Dl = S || i, kl(t, l), Dl = S, Kt = h, Il(l), u & 8192) l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (a === null || i || Kt || Dl || La(l)), a = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                i = a = t;
                try {
                  if (n = i.stateNode, e) f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var T = i.memoizedProps.style, g = T != null && T.hasOwnProperty("display") ? T.display : null;
                    c.style.display = g == null || typeof g == "boolean" ? "" : ("" + g).trim();
                  }
                } catch (D) {
                  nl(i, i.return, D);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (D) {
                  nl(i, i.return, D);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                i = t;
                try {
                  var b = i.stateNode;
                  e ? ud(b, true) : ud(i.stateNode, false);
                } catch (D) {
                  nl(i, i.return, D);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              a === t && (a = null), t = t.return;
            }
            a === t && (a = null), t.sibling.return = t.return, t = t.sibling;
          }
          u & 4 && (u = l.updateQueue, u !== null && (a = u.retryQueue, a !== null && (u.retryQueue = null, En(l, a))));
          break;
        case 19:
          kl(t, l), Il(l), u & 4 && (u = l.updateQueue, u !== null && (l.updateQueue = null, En(l, u)));
          break;
        case 30:
          break;
        case 21:
          break;
        default:
          kl(t, l), Il(l);
      }
    }
    function Il(l) {
      var t = l.flags;
      if (t & 2) {
        try {
          for (var a, u = l.return; u !== null; ) {
            if (ny(u)) {
              a = u;
              break;
            }
            u = u.return;
          }
          if (a == null) throw Error(o(160));
          switch (a.tag) {
            case 27:
              var e = a.stateNode, n = Rc(l);
              Tn(l, n, e);
              break;
            case 5:
              var f = a.stateNode;
              a.flags & 32 && (Pa(f, ""), a.flags &= -33);
              var c = Rc(l);
              Tn(l, c, f);
              break;
            case 3:
            case 4:
              var i = a.stateNode.containerInfo, h = Rc(l);
              Hc(l, h, i);
              break;
            default:
              throw Error(o(161));
          }
        } catch (S) {
          nl(l, l.return, S);
        }
        l.flags &= -3;
      }
      t & 4096 && (l.flags &= -4097);
    }
    function vy(l) {
      if (l.subtreeFlags & 1024) for (l = l.child; l !== null; ) {
        var t = l;
        vy(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
    }
    function wt(l, t) {
      if (t.subtreeFlags & 8772) for (t = t.child; t !== null; ) iy(l, t.alternate, t), t = t.sibling;
    }
    function La(l) {
      for (l = l.child; l !== null; ) {
        var t = l;
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            oa(4, t, t.return), La(t);
            break;
          case 1:
            Rt(t, t.return);
            var a = t.stateNode;
            typeof a.componentWillUnmount == "function" && uy(t, t.return, a), La(t);
            break;
          case 27:
            re(t.stateNode);
          case 26:
          case 5:
            Rt(t, t.return), La(t);
            break;
          case 22:
            t.memoizedState === null && La(t);
            break;
          case 30:
            La(t);
            break;
          default:
            La(t);
        }
        l = l.sibling;
      }
    }
    function Wt(l, t, a) {
      for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
        var u = t.alternate, e = l, n = t, f = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            Wt(e, n, a), ce(4, n);
            break;
          case 1:
            if (Wt(e, n, a), u = n, e = u.stateNode, typeof e.componentDidMount == "function") try {
              e.componentDidMount();
            } catch (h) {
              nl(u, u.return, h);
            }
            if (u = n, e = u.updateQueue, e !== null) {
              var c = u.stateNode;
              try {
                var i = e.shared.hiddenCallbacks;
                if (i !== null) for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++) Ks(i[e], c);
              } catch (h) {
                nl(u, u.return, h);
              }
            }
            a && f & 64 && ay(n), ie(n, n.return);
            break;
          case 27:
            fy(n);
          case 26:
          case 5:
            Wt(e, n, a), a && u === null && f & 4 && ey(n), ie(n, n.return);
            break;
          case 12:
            Wt(e, n, a);
            break;
          case 31:
            Wt(e, n, a), a && f & 4 && dy(e, n);
            break;
          case 13:
            Wt(e, n, a), a && f & 4 && oy(e, n);
            break;
          case 22:
            n.memoizedState === null && Wt(e, n, a), ie(n, n.return);
            break;
          case 30:
            break;
          default:
            Wt(e, n, a);
        }
        t = t.sibling;
      }
    }
    function Cc(l, t) {
      var a = null;
      l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Wu(a));
    }
    function jc(l, t) {
      l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Wu(l));
    }
    function Ot(l, t, a, u) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) hy(l, t, a, u), t = t.sibling;
    }
    function hy(l, t, a, u) {
      var e = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Ot(l, t, a, u), e & 2048 && ce(9, t);
          break;
        case 1:
          Ot(l, t, a, u);
          break;
        case 3:
          Ot(l, t, a, u), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Wu(l)));
          break;
        case 12:
          if (e & 2048) {
            Ot(l, t, a, u), l = t.stateNode;
            try {
              var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
              typeof c == "function" && c(f, t.alternate === null ? "mount" : "update", l.passiveEffectDuration, -0);
            } catch (i) {
              nl(t, t.return, i);
            }
          } else Ot(l, t, a, u);
          break;
        case 31:
          Ot(l, t, a, u);
          break;
        case 13:
          Ot(l, t, a, u);
          break;
        case 23:
          break;
        case 22:
          n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Ot(l, t, a, u) : se(l, t) : n._visibility & 2 ? Ot(l, t, a, u) : (n._visibility |= 2, Su(l, t, a, u, (t.subtreeFlags & 10256) !== 0 || false)), e & 2048 && Cc(f, t);
          break;
        case 24:
          Ot(l, t, a, u), e & 2048 && jc(t.alternate, t);
          break;
        default:
          Ot(l, t, a, u);
      }
    }
    function Su(l, t, a, u, e) {
      for (e = e && ((t.subtreeFlags & 10256) !== 0 || false), t = t.child; t !== null; ) {
        var n = l, f = t, c = a, i = u, h = f.flags;
        switch (f.tag) {
          case 0:
          case 11:
          case 15:
            Su(n, f, c, i, e), ce(8, f);
            break;
          case 23:
            break;
          case 22:
            var S = f.stateNode;
            f.memoizedState !== null ? S._visibility & 2 ? Su(n, f, c, i, e) : se(n, f) : (S._visibility |= 2, Su(n, f, c, i, e)), e && h & 2048 && Cc(f.alternate, f);
            break;
          case 24:
            Su(n, f, c, i, e), e && h & 2048 && jc(f.alternate, f);
            break;
          default:
            Su(n, f, c, i, e);
        }
        t = t.sibling;
      }
    }
    function se(l, t) {
      if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) {
        var a = l, u = t, e = u.flags;
        switch (u.tag) {
          case 22:
            se(a, u), e & 2048 && Cc(u.alternate, u);
            break;
          case 24:
            se(a, u), e & 2048 && jc(u.alternate, u);
            break;
          default:
            se(a, u);
        }
        t = t.sibling;
      }
    }
    var ye = 8192;
    function _u(l, t, a) {
      if (l.subtreeFlags & ye) for (l = l.child; l !== null; ) gy(l, t, a), l = l.sibling;
    }
    function gy(l, t, a) {
      switch (l.tag) {
        case 26:
          _u(l, t, a), l.flags & ye && l.memoizedState !== null && ev(a, At, l.memoizedState, l.memoizedProps);
          break;
        case 5:
          _u(l, t, a);
          break;
        case 3:
        case 4:
          var u = At;
          At = Yn(l.stateNode.containerInfo), _u(l, t, a), At = u;
          break;
        case 22:
          l.memoizedState === null && (u = l.alternate, u !== null && u.memoizedState !== null ? (u = ye, ye = 16777216, _u(l, t, a), ye = u) : _u(l, t, a));
          break;
        default:
          _u(l, t, a);
      }
    }
    function ry(l) {
      var t = l.alternate;
      if (t !== null && (l = t.child, l !== null)) {
        t.child = null;
        do
          t = l.sibling, l.sibling = null, l = t;
        while (l !== null);
      }
    }
    function de(l) {
      var t = l.deletions;
      if ((l.flags & 16) !== 0) {
        if (t !== null) for (var a = 0; a < t.length; a++) {
          var u = t[a];
          ql = u, Sy(u, l);
        }
        ry(l);
      }
      if (l.subtreeFlags & 10256) for (l = l.child; l !== null; ) by(l), l = l.sibling;
    }
    function by(l) {
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          de(l), l.flags & 2048 && oa(9, l, l.return);
          break;
        case 3:
          de(l);
          break;
        case 12:
          de(l);
          break;
        case 22:
          var t = l.stateNode;
          l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, An(l)) : de(l);
          break;
        default:
          de(l);
      }
    }
    function An(l) {
      var t = l.deletions;
      if ((l.flags & 16) !== 0) {
        if (t !== null) for (var a = 0; a < t.length; a++) {
          var u = t[a];
          ql = u, Sy(u, l);
        }
        ry(l);
      }
      for (l = l.child; l !== null; ) {
        switch (t = l, t.tag) {
          case 0:
          case 11:
          case 15:
            oa(8, t, t.return), An(t);
            break;
          case 22:
            a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, An(t));
            break;
          default:
            An(t);
        }
        l = l.sibling;
      }
    }
    function Sy(l, t) {
      for (; ql !== null; ) {
        var a = ql;
        switch (a.tag) {
          case 0:
          case 11:
          case 15:
            oa(8, a, t);
            break;
          case 23:
          case 22:
            if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
              var u = a.memoizedState.cachePool.pool;
              u != null && u.refCount++;
            }
            break;
          case 24:
            Wu(a.memoizedState.cache);
        }
        if (u = a.child, u !== null) u.return = a, ql = u;
        else l: for (a = l; ql !== null; ) {
          u = ql;
          var e = u.sibling, n = u.return;
          if (sy(u), u === a) {
            ql = null;
            break l;
          }
          if (e !== null) {
            e.return = n, ql = e;
            break l;
          }
          ql = n;
        }
      }
    }
    var Sm = {
      getCacheForType: function(l) {
        var t = Bl(Ol), a = t.data.get(l);
        return a === void 0 && (a = l(), t.data.set(l, a)), a;
      },
      cacheSignal: function() {
        return Bl(Ol).controller.signal;
      }
    }, _m = typeof WeakMap == "function" ? WeakMap : Map, tl = 0, ol = null, K = null, W = 0, el = 0, it = null, ma = false, zu = false, Bc = false, $t = 0, Sl = 0, va = 0, Va = 0, Yc = 0, st = 0, Tu = 0, oe = null, Pl = null, Gc = false, On = 0, _y = 0, pn = 1 / 0, Mn = null, ha = null, Ul = 0, ga = null, Eu = null, Ft = 0, xc = 0, Xc = null, zy = null, me = 0, Qc = null;
    function yt() {
      return (tl & 2) !== 0 && W !== 0 ? W & -W : _.T !== null ? wc() : Yi();
    }
    function Ty() {
      if (st === 0) if ((W & 536870912) === 0 || I) {
        var l = Ce;
        Ce <<= 1, (Ce & 3932160) === 0 && (Ce = 262144), st = l;
      } else st = 536870912;
      return l = ft.current, l !== null && (l.flags |= 32), st;
    }
    function lt(l, t, a) {
      (l === ol && (el === 2 || el === 9) || l.cancelPendingCommit !== null) && (Au(l, 0), ra(l, W, st, false)), Cu(l, a), ((tl & 2) === 0 || l !== ol) && (l === ol && ((tl & 2) === 0 && (Va |= a), Sl === 4 && ra(l, W, st, false)), Ht(l));
    }
    function Ey(l, t, a) {
      if ((tl & 6) !== 0) throw Error(o(327));
      var u = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || qu(l, t), e = u ? Em(l, t) : Lc(l, t, true), n = u;
      do {
        if (e === 0) {
          zu && !u && ra(l, t, 0, false);
          break;
        } else {
          if (a = l.current.alternate, n && !zm(a)) {
            e = Lc(l, t, false), n = false;
            continue;
          }
          if (e === 2) {
            if (n = t, l.errorRecoveryDisabledLanes & n) var f = 0;
            else f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
            if (f !== 0) {
              t = f;
              l: {
                var c = l;
                e = oe;
                var i = c.current.memoizedState.isDehydrated;
                if (i && (Au(c, f).flags |= 256), f = Lc(c, f, false), f !== 2) {
                  if (Bc && !i) {
                    c.errorRecoveryDisabledLanes |= n, Va |= n, e = 4;
                    break l;
                  }
                  n = Pl, Pl = e, n !== null && (Pl === null ? Pl = n : Pl.push.apply(Pl, n));
                }
                e = f;
              }
              if (n = false, e !== 2) continue;
            }
          }
          if (e === 1) {
            Au(l, 0), ra(l, t, 0, true);
            break;
          }
          l: {
            switch (u = l, n = e, n) {
              case 0:
              case 1:
                throw Error(o(345));
              case 4:
                if ((t & 4194048) !== t) break;
              case 6:
                ra(u, t, st, !ma);
                break l;
              case 2:
                Pl = null;
                break;
              case 3:
              case 5:
                break;
              default:
                throw Error(o(329));
            }
            if ((t & 62914560) === t && (e = On + 300 - tt(), 10 < e)) {
              if (ra(u, t, st, !ma), Be(u, 0, true) !== 0) break l;
              Ft = t, u.timeoutHandle = ld(Ay.bind(null, u, a, Pl, Mn, Gc, t, st, Va, Tu, ma, n, "Throttled", -0, 0), e);
              break l;
            }
            Ay(u, a, Pl, Mn, Gc, t, st, Va, Tu, ma, n, null, -0, 0);
          }
        }
        break;
      } while (true);
      Ht(l);
    }
    function Ay(l, t, a, u, e, n, f, c, i, h, S, T, g, b) {
      if (l.timeoutHandle = -1, T = t.subtreeFlags, T & 8192 || (T & 16785408) === 16785408) {
        T = {
          stylesheets: null,
          count: 0,
          imgCount: 0,
          imgBytes: 0,
          suspenseyImages: [],
          waitingForImages: true,
          waitingForViewTransition: false,
          unsuspend: jt
        }, gy(t, n, T);
        var D = (n & 62914560) === n ? On - tt() : (n & 4194048) === n ? _y - tt() : 0;
        if (D = nv(T, D), D !== null) {
          Ft = n, l.cancelPendingCommit = D(Hy.bind(null, l, t, n, a, u, e, f, c, i, S, T, null, g, b)), ra(l, n, f, !h);
          return;
        }
      }
      Hy(l, t, n, a, u, e, f, c, i);
    }
    function zm(l) {
      for (var t = l; ; ) {
        var a = t.tag;
        if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null))) for (var u = 0; u < a.length; u++) {
          var e = a[u], n = e.getSnapshot;
          e = e.value;
          try {
            if (!et(n(), e)) return false;
          } catch {
            return false;
          }
        }
        if (a = t.child, t.subtreeFlags & 16384 && a !== null) a.return = t, t = a;
        else {
          if (t === l) break;
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === l) return true;
            t = t.return;
          }
          t.sibling.return = t.return, t = t.sibling;
        }
      }
      return true;
    }
    function ra(l, t, a, u) {
      t &= ~Yc, t &= ~Va, l.suspendedLanes |= t, l.pingedLanes &= ~t, u && (l.warmLanes |= t), u = l.expirationTimes;
      for (var e = t; 0 < e; ) {
        var n = 31 - ut(e), f = 1 << n;
        u[n] = -1, e &= ~f;
      }
      a !== 0 && Ci(l, a, t);
    }
    function Dn() {
      return (tl & 6) === 0 ? (ve(0), false) : true;
    }
    function Zc() {
      if (K !== null) {
        if (el === 0) var l = K.return;
        else l = K, xt = ja = null, ec(l), vu = null, Fu = 0, l = K;
        for (; l !== null; ) ty(l.alternate, l), l = l.return;
        K = null;
      }
    }
    function Au(l, t) {
      var a = l.timeoutHandle;
      a !== -1 && (l.timeoutHandle = -1, Qm(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), Ft = 0, Zc(), ol = l, K = a = Yt(l.current, null), W = t, el = 0, it = null, ma = false, zu = qu(l, t), Bc = false, Tu = st = Yc = Va = va = Sl = 0, Pl = oe = null, Gc = false, (t & 8) !== 0 && (t |= t & 32);
      var u = l.entangledLanes;
      if (u !== 0) for (l = l.entanglements, u &= t; 0 < u; ) {
        var e = 31 - ut(u), n = 1 << e;
        t |= l[e], u &= ~n;
      }
      return $t = t, We(), a;
    }
    function Oy(l, t) {
      X = null, _.H = ee, t === mu || t === an ? (t = Qs(), el = 3) : t === Jf ? (t = Qs(), el = 4) : el = t === _c ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, it = t, K === null && (Sl = 1, rn(l, ht(t, l.current)));
    }
    function py() {
      var l = ft.current;
      return l === null ? true : (W & 4194048) === W ? St === null : (W & 62914560) === W || (W & 536870912) !== 0 ? l === St : false;
    }
    function My() {
      var l = _.H;
      return _.H = ee, l === null ? ee : l;
    }
    function Dy() {
      var l = _.A;
      return _.A = Sm, l;
    }
    function Un() {
      Sl = 4, ma || (W & 4194048) !== W && ft.current !== null || (zu = true), (va & 134217727) === 0 && (Va & 134217727) === 0 || ol === null || ra(ol, W, st, false);
    }
    function Lc(l, t, a) {
      var u = tl;
      tl |= 2;
      var e = My(), n = Dy();
      (ol !== l || W !== t) && (Mn = null, Au(l, t)), t = false;
      var f = Sl;
      l: do
        try {
          if (el !== 0 && K !== null) {
            var c = K, i = it;
            switch (el) {
              case 8:
                Zc(), f = 6;
                break l;
              case 3:
              case 2:
              case 9:
              case 6:
                ft.current === null && (t = true);
                var h = el;
                if (el = 0, it = null, Ou(l, c, i, h), a && zu) {
                  f = 0;
                  break l;
                }
                break;
              default:
                h = el, el = 0, it = null, Ou(l, c, i, h);
            }
          }
          Tm(), f = Sl;
          break;
        } catch (S) {
          Oy(l, S);
        }
      while (true);
      return t && l.shellSuspendCounter++, xt = ja = null, tl = u, _.H = e, _.A = n, K === null && (ol = null, W = 0, We()), f;
    }
    function Tm() {
      for (; K !== null; ) Uy(K);
    }
    function Em(l, t) {
      var a = tl;
      tl |= 2;
      var u = My(), e = Dy();
      ol !== l || W !== t ? (Mn = null, pn = tt() + 500, Au(l, t)) : zu = qu(l, t);
      l: do
        try {
          if (el !== 0 && K !== null) {
            t = K;
            var n = it;
            t: switch (el) {
              case 1:
                el = 0, it = null, Ou(l, t, n, 1);
                break;
              case 2:
              case 9:
                if (xs(n)) {
                  el = 0, it = null, Ny(t);
                  break;
                }
                t = function() {
                  el !== 2 && el !== 9 || ol !== l || (el = 7), Ht(l);
                }, n.then(t, t);
                break l;
              case 3:
                el = 7;
                break l;
              case 4:
                el = 5;
                break l;
              case 7:
                xs(n) ? (el = 0, it = null, Ny(t)) : (el = 0, it = null, Ou(l, t, n, 7));
                break;
              case 5:
                var f = null;
                switch (K.tag) {
                  case 26:
                    f = K.memoizedState;
                  case 5:
                  case 27:
                    var c = K;
                    if (f ? hd(f) : c.stateNode.complete) {
                      el = 0, it = null;
                      var i = c.sibling;
                      if (i !== null) K = i;
                      else {
                        var h = c.return;
                        h !== null ? (K = h, Nn(h)) : K = null;
                      }
                      break t;
                    }
                }
                el = 0, it = null, Ou(l, t, n, 5);
                break;
              case 6:
                el = 0, it = null, Ou(l, t, n, 6);
                break;
              case 8:
                Zc(), Sl = 6;
                break l;
              default:
                throw Error(o(462));
            }
          }
          Am();
          break;
        } catch (S) {
          Oy(l, S);
        }
      while (true);
      return xt = ja = null, _.H = u, _.A = e, tl = a, K !== null ? 0 : (ol = null, W = 0, We(), Sl);
    }
    function Am() {
      for (; K !== null && !Jd(); ) Uy(K);
    }
    function Uy(l) {
      var t = P0(l.alternate, l, $t);
      l.memoizedProps = l.pendingProps, t === null ? Nn(l) : K = t;
    }
    function Ny(l) {
      var t = l, a = t.alternate;
      switch (t.tag) {
        case 15:
        case 0:
          t = w0(a, t, t.pendingProps, t.type, void 0, W);
          break;
        case 11:
          t = w0(a, t, t.pendingProps, t.type.render, t.ref, W);
          break;
        case 5:
          ec(t);
        default:
          ty(a, t), t = K = Ds(t, $t), t = P0(a, t, $t);
      }
      l.memoizedProps = l.pendingProps, t === null ? Nn(l) : K = t;
    }
    function Ou(l, t, a, u) {
      xt = ja = null, ec(t), vu = null, Fu = 0;
      var e = t.return;
      try {
        if (om(l, e, t, a, W)) {
          Sl = 1, rn(l, ht(a, l.current)), K = null;
          return;
        }
      } catch (n) {
        if (e !== null) throw K = e, n;
        Sl = 1, rn(l, ht(a, l.current)), K = null;
        return;
      }
      t.flags & 32768 ? (I || u === 1 ? l = true : zu || (W & 536870912) !== 0 ? l = false : (ma = l = true, (u === 2 || u === 9 || u === 3 || u === 6) && (u = ft.current, u !== null && u.tag === 13 && (u.flags |= 16384))), Ry(t, l)) : Nn(t);
    }
    function Nn(l) {
      var t = l;
      do {
        if ((t.flags & 32768) !== 0) {
          Ry(t, ma);
          return;
        }
        l = t.return;
        var a = hm(t.alternate, t, $t);
        if (a !== null) {
          K = a;
          return;
        }
        if (t = t.sibling, t !== null) {
          K = t;
          return;
        }
        K = t = l;
      } while (t !== null);
      Sl === 0 && (Sl = 5);
    }
    function Ry(l, t) {
      do {
        var a = gm(l.alternate, l);
        if (a !== null) {
          a.flags &= 32767, K = a;
          return;
        }
        if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
          K = l;
          return;
        }
        K = l = a;
      } while (l !== null);
      Sl = 6, K = null;
    }
    function Hy(l, t, a, u, e, n, f, c, i) {
      l.cancelPendingCommit = null;
      do
        Rn();
      while (Ul !== 0);
      if ((tl & 6) !== 0) throw Error(o(327));
      if (t !== null) {
        if (t === l.current) throw Error(o(177));
        if (n = t.lanes | t.childLanes, n |= Rf, ao(l, a, n, f, c, i), l === ol && (K = ol = null, W = 0), Eu = t, ga = l, Ft = a, xc = n, Xc = e, zy = u, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Dm(He, function() {
          return Yy(), null;
        })) : (l.callbackNode = null, l.callbackPriority = 0), u = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || u) {
          u = _.T, _.T = null, e = p.p, p.p = 2, f = tl, tl |= 4;
          try {
            rm(l, t, a);
          } finally {
            tl = f, p.p = e, _.T = u;
          }
        }
        Ul = 1, qy(), Cy(), jy();
      }
    }
    function qy() {
      if (Ul === 1) {
        Ul = 0;
        var l = ga, t = Eu, a = (t.flags & 13878) !== 0;
        if ((t.subtreeFlags & 13878) !== 0 || a) {
          a = _.T, _.T = null;
          var u = p.p;
          p.p = 2;
          var e = tl;
          tl |= 4;
          try {
            my(t, l);
            var n = ti, f = Ss(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
            if (f !== c && c && c.ownerDocument && bs(c.ownerDocument.documentElement, c)) {
              if (i !== null && pf(c)) {
                var h = i.start, S = i.end;
                if (S === void 0 && (S = h), "selectionStart" in c) c.selectionStart = h, c.selectionEnd = Math.min(S, c.value.length);
                else {
                  var T = c.ownerDocument || document, g = T && T.defaultView || window;
                  if (g.getSelection) {
                    var b = g.getSelection(), D = c.textContent.length, q = Math.min(i.start, D), yl = i.end === void 0 ? q : Math.min(i.end, D);
                    !b.extend && q > yl && (f = yl, yl = q, q = f);
                    var d = rs(c, q), s = rs(c, yl);
                    if (d && s && (b.rangeCount !== 1 || b.anchorNode !== d.node || b.anchorOffset !== d.offset || b.focusNode !== s.node || b.focusOffset !== s.offset)) {
                      var v = T.createRange();
                      v.setStart(d.node, d.offset), b.removeAllRanges(), q > yl ? (b.addRange(v), b.extend(s.node, s.offset)) : (v.setEnd(s.node, s.offset), b.addRange(v));
                    }
                  }
                }
              }
              for (T = [], b = c; b = b.parentNode; ) b.nodeType === 1 && T.push({
                element: b,
                left: b.scrollLeft,
                top: b.scrollTop
              });
              for (typeof c.focus == "function" && c.focus(), c = 0; c < T.length; c++) {
                var z = T[c];
                z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
              }
            }
            Ln = !!li, ti = li = null;
          } finally {
            tl = e, p.p = u, _.T = a;
          }
        }
        l.current = t, Ul = 2;
      }
    }
    function Cy() {
      if (Ul === 2) {
        Ul = 0;
        var l = ga, t = Eu, a = (t.flags & 8772) !== 0;
        if ((t.subtreeFlags & 8772) !== 0 || a) {
          a = _.T, _.T = null;
          var u = p.p;
          p.p = 2;
          var e = tl;
          tl |= 4;
          try {
            iy(l, t.alternate, t);
          } finally {
            tl = e, p.p = u, _.T = a;
          }
        }
        Ul = 3;
      }
    }
    function jy() {
      if (Ul === 4 || Ul === 3) {
        Ul = 0, wd();
        var l = ga, t = Eu, a = Ft, u = zy;
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Ul = 5 : (Ul = 0, Eu = ga = null, By(l, l.pendingLanes));
        var e = l.pendingLanes;
        if (e === 0 && (ha = null), ff(a), t = t.stateNode, at && typeof at.onCommitFiberRoot == "function") try {
          at.onCommitFiberRoot(Hu, t, void 0, (t.current.flags & 128) === 128);
        } catch {
        }
        if (u !== null) {
          t = _.T, e = p.p, p.p = 2, _.T = null;
          try {
            for (var n = l.onRecoverableError, f = 0; f < u.length; f++) {
              var c = u[f];
              n(c.value, {
                componentStack: c.stack
              });
            }
          } finally {
            _.T = t, p.p = e;
          }
        }
        (Ft & 3) !== 0 && Rn(), Ht(l), e = l.pendingLanes, (a & 261930) !== 0 && (e & 42) !== 0 ? l === Qc ? me++ : (me = 0, Qc = l) : me = 0, ve(0);
      }
    }
    function By(l, t) {
      (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Wu(t)));
    }
    function Rn() {
      return qy(), Cy(), jy(), Yy();
    }
    function Yy() {
      if (Ul !== 5) return false;
      var l = ga, t = xc;
      xc = 0;
      var a = ff(Ft), u = _.T, e = p.p;
      try {
        p.p = 32 > a ? 32 : a, _.T = null, a = Xc, Xc = null;
        var n = ga, f = Ft;
        if (Ul = 0, Eu = ga = null, Ft = 0, (tl & 6) !== 0) throw Error(o(331));
        var c = tl;
        if (tl |= 4, by(n.current), hy(n, n.current, f, a), tl = c, ve(0, false), at && typeof at.onPostCommitFiberRoot == "function") try {
          at.onPostCommitFiberRoot(Hu, n);
        } catch {
        }
        return true;
      } finally {
        p.p = e, _.T = u, By(l, t);
      }
    }
    function Gy(l, t, a) {
      t = ht(a, t), t = Sc(l.stateNode, t, 2), l = sa(l, t, 2), l !== null && (Cu(l, 2), Ht(l));
    }
    function nl(l, t, a) {
      if (l.tag === 3) Gy(l, l, a);
      else for (; t !== null; ) {
        if (t.tag === 3) {
          Gy(t, l, a);
          break;
        } else if (t.tag === 1) {
          var u = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (ha === null || !ha.has(u))) {
            l = ht(a, l), a = x0(2), u = sa(t, a, 2), u !== null && (X0(a, u, t, l), Cu(u, 2), Ht(u));
            break;
          }
        }
        t = t.return;
      }
    }
    function Vc(l, t, a) {
      var u = l.pingCache;
      if (u === null) {
        u = l.pingCache = new _m();
        var e = /* @__PURE__ */ new Set();
        u.set(t, e);
      } else e = u.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), u.set(t, e));
      e.has(a) || (Bc = true, e.add(a), l = Om.bind(null, l, t, a), t.then(l, l));
    }
    function Om(l, t, a) {
      var u = l.pingCache;
      u !== null && u.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, ol === l && (W & a) === a && (Sl === 4 || Sl === 3 && (W & 62914560) === W && 300 > tt() - On ? (tl & 2) === 0 && Au(l, 0) : Yc |= a, Tu === W && (Tu = 0)), Ht(l);
    }
    function xy(l, t) {
      t === 0 && (t = qi()), l = Ha(l, t), l !== null && (Cu(l, t), Ht(l));
    }
    function pm(l) {
      var t = l.memoizedState, a = 0;
      t !== null && (a = t.retryLane), xy(l, a);
    }
    function Mm(l, t) {
      var a = 0;
      switch (l.tag) {
        case 31:
        case 13:
          var u = l.stateNode, e = l.memoizedState;
          e !== null && (a = e.retryLane);
          break;
        case 19:
          u = l.stateNode;
          break;
        case 22:
          u = l.stateNode._retryCache;
          break;
        default:
          throw Error(o(314));
      }
      u !== null && u.delete(t), xy(l, a);
    }
    function Dm(l, t) {
      return af(l, t);
    }
    var Hn = null, pu = null, Kc = false, qn = false, Jc = false, ba = 0;
    function Ht(l) {
      l !== pu && l.next === null && (pu === null ? Hn = pu = l : pu = pu.next = l), qn = true, Kc || (Kc = true, Nm());
    }
    function ve(l, t) {
      if (!Jc && qn) {
        Jc = true;
        do
          for (var a = false, u = Hn; u !== null; ) {
            if (l !== 0) {
              var e = u.pendingLanes;
              if (e === 0) var n = 0;
              else {
                var f = u.suspendedLanes, c = u.pingedLanes;
                n = (1 << 31 - ut(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
              }
              n !== 0 && (a = true, Ly(u, n));
            } else n = W, n = Be(u, u === ol ? n : 0, u.cancelPendingCommit !== null || u.timeoutHandle !== -1), (n & 3) === 0 || qu(u, n) || (a = true, Ly(u, n));
            u = u.next;
          }
        while (a);
        Jc = false;
      }
    }
    function Um() {
      Xy();
    }
    function Xy() {
      qn = Kc = false;
      var l = 0;
      ba !== 0 && Xm() && (l = ba);
      for (var t = tt(), a = null, u = Hn; u !== null; ) {
        var e = u.next, n = Qy(u, t);
        n === 0 ? (u.next = null, a === null ? Hn = e : a.next = e, e === null && (pu = a)) : (a = u, (l !== 0 || (n & 3) !== 0) && (qn = true)), u = e;
      }
      Ul !== 0 && Ul !== 5 || ve(l), ba !== 0 && (ba = 0);
    }
    function Qy(l, t) {
      for (var a = l.suspendedLanes, u = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
        var f = 31 - ut(n), c = 1 << f, i = e[f];
        i === -1 ? ((c & a) === 0 || (c & u) !== 0) && (e[f] = to(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
      }
      if (t = ol, a = W, a = Be(l, l === t ? a : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u = l.callbackNode, a === 0 || l === t && (el === 2 || el === 9) || l.cancelPendingCommit !== null) return u !== null && u !== null && uf(u), l.callbackNode = null, l.callbackPriority = 0;
      if ((a & 3) === 0 || qu(l, a)) {
        if (t = a & -a, t === l.callbackPriority) return t;
        switch (u !== null && uf(u), ff(a)) {
          case 2:
          case 8:
            a = Ri;
            break;
          case 32:
            a = He;
            break;
          case 268435456:
            a = Hi;
            break;
          default:
            a = He;
        }
        return u = Zy.bind(null, l), a = af(a, u), l.callbackPriority = t, l.callbackNode = a, t;
      }
      return u !== null && u !== null && uf(u), l.callbackPriority = 2, l.callbackNode = null, 2;
    }
    function Zy(l, t) {
      if (Ul !== 0 && Ul !== 5) return l.callbackNode = null, l.callbackPriority = 0, null;
      var a = l.callbackNode;
      if (Rn() && l.callbackNode !== a) return null;
      var u = W;
      return u = Be(l, l === ol ? u : 0, l.cancelPendingCommit !== null || l.timeoutHandle !== -1), u === 0 ? null : (Ey(l, u, t), Qy(l, tt()), l.callbackNode != null && l.callbackNode === a ? Zy.bind(null, l) : null);
    }
    function Ly(l, t) {
      if (Rn()) return null;
      Ey(l, t, true);
    }
    function Nm() {
      Zm(function() {
        (tl & 6) !== 0 ? af(Ni, Um) : Xy();
      });
    }
    function wc() {
      if (ba === 0) {
        var l = du;
        l === 0 && (l = qe, qe <<= 1, (qe & 261888) === 0 && (qe = 256)), ba = l;
      }
      return ba;
    }
    function Vy(l) {
      return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Xe("" + l);
    }
    function Ky(l, t) {
      var a = t.ownerDocument.createElement("input");
      return a.name = t.name, a.value = t.value, l.id && a.setAttribute("form", l.id), t.parentNode.insertBefore(a, t), l = new FormData(l), a.parentNode.removeChild(a), l;
    }
    function Rm(l, t, a, u, e) {
      if (t === "submit" && a && a.stateNode === e) {
        var n = Vy((e[Wl] || null).action), f = u.submitter;
        f && (t = (t = f[Wl] || null) ? Vy(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
        var c = new Ve("action", "action", null, u, e);
        l.push({
          event: c,
          listeners: [
            {
              instance: null,
              listener: function() {
                if (u.defaultPrevented) {
                  if (ba !== 0) {
                    var i = f ? Ky(e, f) : new FormData(e);
                    mc(a, {
                      pending: true,
                      data: i,
                      method: e.method,
                      action: n
                    }, null, i);
                  }
                } else typeof n == "function" && (c.preventDefault(), i = f ? Ky(e, f) : new FormData(e), mc(a, {
                  pending: true,
                  data: i,
                  method: e.method,
                  action: n
                }, n, i));
              },
              currentTarget: e
            }
          ]
        });
      }
    }
    for (var Wc = 0; Wc < Nf.length; Wc++) {
      var $c = Nf[Wc], Hm = $c.toLowerCase(), qm = $c[0].toUpperCase() + $c.slice(1);
      Et(Hm, "on" + qm);
    }
    Et(Ts, "onAnimationEnd"), Et(Es, "onAnimationIteration"), Et(As, "onAnimationStart"), Et("dblclick", "onDoubleClick"), Et("focusin", "onFocus"), Et("focusout", "onBlur"), Et($o, "onTransitionRun"), Et(Fo, "onTransitionStart"), Et(ko, "onTransitionCancel"), Et(Os, "onTransitionEnd"), ka("onMouseEnter", [
      "mouseout",
      "mouseover"
    ]), ka("onMouseLeave", [
      "mouseout",
      "mouseover"
    ]), ka("onPointerEnter", [
      "pointerout",
      "pointerover"
    ]), ka("onPointerLeave", [
      "pointerout",
      "pointerover"
    ]), Da("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Da("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Da("onBeforeInput", [
      "compositionend",
      "keypress",
      "textInput",
      "paste"
    ]), Da("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Da("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Da("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
    var he = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Cm = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(he));
    function Jy(l, t) {
      t = (t & 4) !== 0;
      for (var a = 0; a < l.length; a++) {
        var u = l[a], e = u.event;
        u = u.listeners;
        l: {
          var n = void 0;
          if (t) for (var f = u.length - 1; 0 <= f; f--) {
            var c = u[f], i = c.instance, h = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped()) break l;
            n = c, e.currentTarget = h;
            try {
              n(e);
            } catch (S) {
              we(S);
            }
            e.currentTarget = null, n = i;
          }
          else for (f = 0; f < u.length; f++) {
            if (c = u[f], i = c.instance, h = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped()) break l;
            n = c, e.currentTarget = h;
            try {
              n(e);
            } catch (S) {
              we(S);
            }
            e.currentTarget = null, n = i;
          }
        }
      }
    }
    function J(l, t) {
      var a = t[cf];
      a === void 0 && (a = t[cf] = /* @__PURE__ */ new Set());
      var u = l + "__bubble";
      a.has(u) || (wy(t, l, 2, false), a.add(u));
    }
    function Fc(l, t, a) {
      var u = 0;
      t && (u |= 4), wy(a, l, u, t);
    }
    var Cn = "_reactListening" + Math.random().toString(36).slice(2);
    function kc(l) {
      if (!l[Cn]) {
        l[Cn] = true, Xi.forEach(function(a) {
          a !== "selectionchange" && (Cm.has(a) || Fc(a, false, l), Fc(a, true, l));
        });
        var t = l.nodeType === 9 ? l : l.ownerDocument;
        t === null || t[Cn] || (t[Cn] = true, Fc("selectionchange", false, t));
      }
    }
    function wy(l, t, a, u) {
      switch (Td(t)) {
        case 2:
          var e = iv;
          break;
        case 8:
          e = sv;
          break;
        default:
          e = oi;
      }
      a = e.bind(null, t, a, l), e = void 0, !rf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = true), u ? e !== void 0 ? l.addEventListener(t, a, {
        capture: true,
        passive: e
      }) : l.addEventListener(t, a, true) : e !== void 0 ? l.addEventListener(t, a, {
        passive: e
      }) : l.addEventListener(t, a, false);
    }
    function Ic(l, t, a, u, e) {
      var n = u;
      if ((t & 1) === 0 && (t & 2) === 0 && u !== null) l: for (; ; ) {
        if (u === null) return;
        var f = u.tag;
        if (f === 3 || f === 4) {
          var c = u.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4) for (f = u.return; f !== null; ) {
            var i = f.tag;
            if ((i === 3 || i === 4) && f.stateNode.containerInfo === e) return;
            f = f.return;
          }
          for (; c !== null; ) {
            if (f = Wa(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              u = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        u = u.return;
      }
      Ii(function() {
        var h = n, S = hf(a), T = [];
        l: {
          var g = ps.get(l);
          if (g !== void 0) {
            var b = Ve, D = l;
            switch (l) {
              case "keypress":
                if (Ze(a) === 0) break l;
              case "keydown":
              case "keyup":
                b = Mo;
                break;
              case "focusin":
                D = "focus", b = zf;
                break;
              case "focusout":
                D = "blur", b = zf;
                break;
              case "beforeblur":
              case "afterblur":
                b = zf;
                break;
              case "click":
                if (a.button === 2) break l;
              case "auxclick":
              case "dblclick":
              case "mousedown":
              case "mousemove":
              case "mouseup":
              case "mouseout":
              case "mouseover":
              case "contextmenu":
                b = ts;
                break;
              case "drag":
              case "dragend":
              case "dragenter":
              case "dragexit":
              case "dragleave":
              case "dragover":
              case "dragstart":
              case "drop":
                b = ho;
                break;
              case "touchcancel":
              case "touchend":
              case "touchmove":
              case "touchstart":
                b = No;
                break;
              case Ts:
              case Es:
              case As:
                b = bo;
                break;
              case Os:
                b = Ho;
                break;
              case "scroll":
              case "scrollend":
                b = mo;
                break;
              case "wheel":
                b = Co;
                break;
              case "copy":
              case "cut":
              case "paste":
                b = _o;
                break;
              case "gotpointercapture":
              case "lostpointercapture":
              case "pointercancel":
              case "pointerdown":
              case "pointermove":
              case "pointerout":
              case "pointerover":
              case "pointerup":
                b = us;
                break;
              case "toggle":
              case "beforetoggle":
                b = Bo;
            }
            var q = (t & 4) !== 0, yl = !q && (l === "scroll" || l === "scrollend"), d = q ? g !== null ? g + "Capture" : null : g;
            q = [];
            for (var s = h, v; s !== null; ) {
              var z = s;
              if (v = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || v === null || d === null || (z = Yu(s, d), z != null && q.push(ge(s, z, v))), yl) break;
              s = s.return;
            }
            0 < q.length && (g = new b(g, D, null, a, S), T.push({
              event: g,
              listeners: q
            }));
          }
        }
        if ((t & 7) === 0) {
          l: {
            if (g = l === "mouseover" || l === "pointerover", b = l === "mouseout" || l === "pointerout", g && a !== vf && (D = a.relatedTarget || a.fromElement) && (Wa(D) || D[wa])) break l;
            if ((b || g) && (g = S.window === S ? S : (g = S.ownerDocument) ? g.defaultView || g.parentWindow : window, b ? (D = a.relatedTarget || a.toElement, b = h, D = D ? Wa(D) : null, D !== null && (yl = L(D), q = D.tag, D !== yl || q !== 5 && q !== 27 && q !== 6) && (D = null)) : (b = null, D = h), b !== D)) {
              if (q = ts, z = "onMouseLeave", d = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (q = us, z = "onPointerLeave", d = "onPointerEnter", s = "pointer"), yl = b == null ? g : Bu(b), v = D == null ? g : Bu(D), g = new q(z, s + "leave", b, a, S), g.target = yl, g.relatedTarget = v, z = null, Wa(S) === h && (q = new q(d, s + "enter", D, a, S), q.target = v, q.relatedTarget = yl, z = q), yl = z, b && D) t: {
                for (q = jm, d = b, s = D, v = 0, z = d; z; z = q(z)) v++;
                z = 0;
                for (var H = s; H; H = q(H)) z++;
                for (; 0 < v - z; ) d = q(d), v--;
                for (; 0 < z - v; ) s = q(s), z--;
                for (; v--; ) {
                  if (d === s || s !== null && d === s.alternate) {
                    q = d;
                    break t;
                  }
                  d = q(d), s = q(s);
                }
                q = null;
              }
              else q = null;
              b !== null && Wy(T, g, b, q, false), D !== null && yl !== null && Wy(T, yl, D, q, true);
            }
          }
          l: {
            if (g = h ? Bu(h) : window, b = g.nodeName && g.nodeName.toLowerCase(), b === "select" || b === "input" && g.type === "file") var P = ds;
            else if (ss(g)) if (os) P = Jo;
            else {
              P = Vo;
              var N = Lo;
            }
            else b = g.nodeName, !b || b.toLowerCase() !== "input" || g.type !== "checkbox" && g.type !== "radio" ? h && mf(h.elementType) && (P = ds) : P = Ko;
            if (P && (P = P(l, h))) {
              ys(T, P, a, S);
              break l;
            }
            N && N(l, g, h), l === "focusout" && h && g.type === "number" && h.memoizedProps.value != null && of(g, "number", g.value);
          }
          switch (N = h ? Bu(h) : window, l) {
            case "focusin":
              (ss(N) || N.contentEditable === "true") && (uu = N, Mf = h, Ku = null);
              break;
            case "focusout":
              Ku = Mf = uu = null;
              break;
            case "mousedown":
              Df = true;
              break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
              Df = false, _s(T, a, S);
              break;
            case "selectionchange":
              if (Wo) break;
            case "keydown":
            case "keyup":
              _s(T, a, S);
          }
          var Q;
          if (Ef) l: {
            switch (l) {
              case "compositionstart":
                var $ = "onCompositionStart";
                break l;
              case "compositionend":
                $ = "onCompositionEnd";
                break l;
              case "compositionupdate":
                $ = "onCompositionUpdate";
                break l;
            }
            $ = void 0;
          }
          else au ? cs(l, a) && ($ = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && ($ = "onCompositionStart");
          $ && (es && a.locale !== "ko" && (au || $ !== "onCompositionStart" ? $ === "onCompositionEnd" && au && (Q = Pi()) : (aa = S, bf = "value" in aa ? aa.value : aa.textContent, au = true)), N = jn(h, $), 0 < N.length && ($ = new as($, l, null, a, S), T.push({
            event: $,
            listeners: N
          }), Q ? $.data = Q : (Q = is(a), Q !== null && ($.data = Q)))), (Q = Go ? xo(l, a) : Xo(l, a)) && ($ = jn(h, "onBeforeInput"), 0 < $.length && (N = new as("onBeforeInput", "beforeinput", null, a, S), T.push({
            event: N,
            listeners: $
          }), N.data = Q)), Rm(T, l, h, a, S);
        }
        Jy(T, t);
      });
    }
    function ge(l, t, a) {
      return {
        instance: l,
        listener: t,
        currentTarget: a
      };
    }
    function jn(l, t) {
      for (var a = t + "Capture", u = []; l !== null; ) {
        var e = l, n = e.stateNode;
        if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Yu(l, a), e != null && u.unshift(ge(l, e, n)), e = Yu(l, t), e != null && u.push(ge(l, e, n))), l.tag === 3) return u;
        l = l.return;
      }
      return [];
    }
    function jm(l) {
      if (l === null) return null;
      do
        l = l.return;
      while (l && l.tag !== 5 && l.tag !== 27);
      return l || null;
    }
    function Wy(l, t, a, u, e) {
      for (var n = t._reactName, f = []; a !== null && a !== u; ) {
        var c = a, i = c.alternate, h = c.stateNode;
        if (c = c.tag, i !== null && i === u) break;
        c !== 5 && c !== 26 && c !== 27 || h === null || (i = h, e ? (h = Yu(a, n), h != null && f.unshift(ge(a, h, i))) : e || (h = Yu(a, n), h != null && f.push(ge(a, h, i)))), a = a.return;
      }
      f.length !== 0 && l.push({
        event: t,
        listeners: f
      });
    }
    var Bm = /\r\n?/g, Ym = /\u0000|\uFFFD/g;
    function $y(l) {
      return (typeof l == "string" ? l : "" + l).replace(Bm, `
`).replace(Ym, "");
    }
    function Fy(l, t) {
      return t = $y(t), $y(l) === t;
    }
    function sl(l, t, a, u, e, n) {
      switch (a) {
        case "children":
          typeof u == "string" ? t === "body" || t === "textarea" && u === "" || Pa(l, u) : (typeof u == "number" || typeof u == "bigint") && t !== "body" && Pa(l, "" + u);
          break;
        case "className":
          Ge(l, "class", u);
          break;
        case "tabIndex":
          Ge(l, "tabindex", u);
          break;
        case "dir":
        case "role":
        case "viewBox":
        case "width":
        case "height":
          Ge(l, a, u);
          break;
        case "style":
          Fi(l, u, n);
          break;
        case "data":
          if (t !== "object") {
            Ge(l, "data", u);
            break;
          }
        case "src":
        case "href":
          if (u === "" && (t !== "a" || a !== "href")) {
            l.removeAttribute(a);
            break;
          }
          if (u == null || typeof u == "function" || typeof u == "symbol" || typeof u == "boolean") {
            l.removeAttribute(a);
            break;
          }
          u = Xe("" + u), l.setAttribute(a, u);
          break;
        case "action":
        case "formAction":
          if (typeof u == "function") {
            l.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
            break;
          } else typeof n == "function" && (a === "formAction" ? (t !== "input" && sl(l, t, "name", e.name, e, null), sl(l, t, "formEncType", e.formEncType, e, null), sl(l, t, "formMethod", e.formMethod, e, null), sl(l, t, "formTarget", e.formTarget, e, null)) : (sl(l, t, "encType", e.encType, e, null), sl(l, t, "method", e.method, e, null), sl(l, t, "target", e.target, e, null)));
          if (u == null || typeof u == "symbol" || typeof u == "boolean") {
            l.removeAttribute(a);
            break;
          }
          u = Xe("" + u), l.setAttribute(a, u);
          break;
        case "onClick":
          u != null && (l.onclick = jt);
          break;
        case "onScroll":
          u != null && J("scroll", l);
          break;
        case "onScrollEnd":
          u != null && J("scrollend", l);
          break;
        case "dangerouslySetInnerHTML":
          if (u != null) {
            if (typeof u != "object" || !("__html" in u)) throw Error(o(61));
            if (a = u.__html, a != null) {
              if (e.children != null) throw Error(o(60));
              l.innerHTML = a;
            }
          }
          break;
        case "multiple":
          l.multiple = u && typeof u != "function" && typeof u != "symbol";
          break;
        case "muted":
          l.muted = u && typeof u != "function" && typeof u != "symbol";
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "ref":
          break;
        case "autoFocus":
          break;
        case "xlinkHref":
          if (u == null || typeof u == "function" || typeof u == "boolean" || typeof u == "symbol") {
            l.removeAttribute("xlink:href");
            break;
          }
          a = Xe("" + u), l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
          break;
        case "contentEditable":
        case "spellCheck":
        case "draggable":
        case "value":
        case "autoReverse":
        case "externalResourcesRequired":
        case "focusable":
        case "preserveAlpha":
          u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "" + u) : l.removeAttribute(a);
          break;
        case "inert":
        case "allowFullScreen":
        case "async":
        case "autoPlay":
        case "controls":
        case "default":
        case "defer":
        case "disabled":
        case "disablePictureInPicture":
        case "disableRemotePlayback":
        case "formNoValidate":
        case "hidden":
        case "loop":
        case "noModule":
        case "noValidate":
        case "open":
        case "playsInline":
        case "readOnly":
        case "required":
        case "reversed":
        case "scoped":
        case "seamless":
        case "itemScope":
          u && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
          break;
        case "capture":
        case "download":
          u === true ? l.setAttribute(a, "") : u !== false && u != null && typeof u != "function" && typeof u != "symbol" ? l.setAttribute(a, u) : l.removeAttribute(a);
          break;
        case "cols":
        case "rows":
        case "size":
        case "span":
          u != null && typeof u != "function" && typeof u != "symbol" && !isNaN(u) && 1 <= u ? l.setAttribute(a, u) : l.removeAttribute(a);
          break;
        case "rowSpan":
        case "start":
          u == null || typeof u == "function" || typeof u == "symbol" || isNaN(u) ? l.removeAttribute(a) : l.setAttribute(a, u);
          break;
        case "popover":
          J("beforetoggle", l), J("toggle", l), Ye(l, "popover", u);
          break;
        case "xlinkActuate":
          Ct(l, "http://www.w3.org/1999/xlink", "xlink:actuate", u);
          break;
        case "xlinkArcrole":
          Ct(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", u);
          break;
        case "xlinkRole":
          Ct(l, "http://www.w3.org/1999/xlink", "xlink:role", u);
          break;
        case "xlinkShow":
          Ct(l, "http://www.w3.org/1999/xlink", "xlink:show", u);
          break;
        case "xlinkTitle":
          Ct(l, "http://www.w3.org/1999/xlink", "xlink:title", u);
          break;
        case "xlinkType":
          Ct(l, "http://www.w3.org/1999/xlink", "xlink:type", u);
          break;
        case "xmlBase":
          Ct(l, "http://www.w3.org/XML/1998/namespace", "xml:base", u);
          break;
        case "xmlLang":
          Ct(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", u);
          break;
        case "xmlSpace":
          Ct(l, "http://www.w3.org/XML/1998/namespace", "xml:space", u);
          break;
        case "is":
          Ye(l, "is", u);
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = yo.get(a) || a, Ye(l, a, u));
      }
    }
    function Pc(l, t, a, u, e, n) {
      switch (a) {
        case "style":
          Fi(l, u, n);
          break;
        case "dangerouslySetInnerHTML":
          if (u != null) {
            if (typeof u != "object" || !("__html" in u)) throw Error(o(61));
            if (a = u.__html, a != null) {
              if (e.children != null) throw Error(o(60));
              l.innerHTML = a;
            }
          }
          break;
        case "children":
          typeof u == "string" ? Pa(l, u) : (typeof u == "number" || typeof u == "bigint") && Pa(l, "" + u);
          break;
        case "onScroll":
          u != null && J("scroll", l);
          break;
        case "onScrollEnd":
          u != null && J("scrollend", l);
          break;
        case "onClick":
          u != null && (l.onclick = jt);
          break;
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
        case "innerHTML":
        case "ref":
          break;
        case "innerText":
        case "textContent":
          break;
        default:
          if (!Qi.hasOwnProperty(a)) l: {
            if (a[0] === "o" && a[1] === "n" && (e = a.endsWith("Capture"), t = a.slice(2, e ? a.length - 7 : void 0), n = l[Wl] || null, n = n != null ? n[a] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof u == "function")) {
              typeof n != "function" && n !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(t, u, e);
              break l;
            }
            a in l ? l[a] = u : u === true ? l.setAttribute(a, "") : Ye(l, a, u);
          }
      }
    }
    function Gl(l, t, a) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "img":
          J("error", l), J("load", l);
          var u = false, e = false, n;
          for (n in a) if (a.hasOwnProperty(n)) {
            var f = a[n];
            if (f != null) switch (n) {
              case "src":
                u = true;
                break;
              case "srcSet":
                e = true;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                sl(l, t, n, f, a, null);
            }
          }
          e && sl(l, t, "srcSet", a.srcSet, a, null), u && sl(l, t, "src", a.src, a, null);
          return;
        case "input":
          J("invalid", l);
          var c = n = f = e = null, i = null, h = null;
          for (u in a) if (a.hasOwnProperty(u)) {
            var S = a[u];
            if (S != null) switch (u) {
              case "name":
                e = S;
                break;
              case "type":
                f = S;
                break;
              case "checked":
                i = S;
                break;
              case "defaultChecked":
                h = S;
                break;
              case "value":
                n = S;
                break;
              case "defaultValue":
                c = S;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null) throw Error(o(137, t));
                break;
              default:
                sl(l, t, u, S, a, null);
            }
          }
          Ji(l, n, c, i, h, f, e, false);
          return;
        case "select":
          J("invalid", l), u = f = n = null;
          for (e in a) if (a.hasOwnProperty(e) && (c = a[e], c != null)) switch (e) {
            case "value":
              n = c;
              break;
            case "defaultValue":
              f = c;
              break;
            case "multiple":
              u = c;
            default:
              sl(l, t, e, c, a, null);
          }
          t = n, a = f, l.multiple = !!u, t != null ? Ia(l, !!u, t, false) : a != null && Ia(l, !!u, a, true);
          return;
        case "textarea":
          J("invalid", l), n = e = u = null;
          for (f in a) if (a.hasOwnProperty(f) && (c = a[f], c != null)) switch (f) {
            case "value":
              u = c;
              break;
            case "defaultValue":
              e = c;
              break;
            case "children":
              n = c;
              break;
            case "dangerouslySetInnerHTML":
              if (c != null) throw Error(o(91));
              break;
            default:
              sl(l, t, f, c, a, null);
          }
          Wi(l, u, e, n);
          return;
        case "option":
          for (i in a) if (a.hasOwnProperty(i) && (u = a[i], u != null)) switch (i) {
            case "selected":
              l.selected = u && typeof u != "function" && typeof u != "symbol";
              break;
            default:
              sl(l, t, i, u, a, null);
          }
          return;
        case "dialog":
          J("beforetoggle", l), J("toggle", l), J("cancel", l), J("close", l);
          break;
        case "iframe":
        case "object":
          J("load", l);
          break;
        case "video":
        case "audio":
          for (u = 0; u < he.length; u++) J(he[u], l);
          break;
        case "image":
          J("error", l), J("load", l);
          break;
        case "details":
          J("toggle", l);
          break;
        case "embed":
        case "source":
        case "link":
          J("error", l), J("load", l);
        case "area":
        case "base":
        case "br":
        case "col":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "track":
        case "wbr":
        case "menuitem":
          for (h in a) if (a.hasOwnProperty(h) && (u = a[h], u != null)) switch (h) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(o(137, t));
            default:
              sl(l, t, h, u, a, null);
          }
          return;
        default:
          if (mf(t)) {
            for (S in a) a.hasOwnProperty(S) && (u = a[S], u !== void 0 && Pc(l, t, S, u, a, void 0));
            return;
          }
      }
      for (c in a) a.hasOwnProperty(c) && (u = a[c], u != null && sl(l, t, c, u, a, null));
    }
    function Gm(l, t, a, u) {
      switch (t) {
        case "div":
        case "span":
        case "svg":
        case "path":
        case "a":
        case "g":
        case "p":
        case "li":
          break;
        case "input":
          var e = null, n = null, f = null, c = null, i = null, h = null, S = null;
          for (b in a) {
            var T = a[b];
            if (a.hasOwnProperty(b) && T != null) switch (b) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = T;
              default:
                u.hasOwnProperty(b) || sl(l, t, b, null, u, T);
            }
          }
          for (var g in u) {
            var b = u[g];
            if (T = a[g], u.hasOwnProperty(g) && (b != null || T != null)) switch (g) {
              case "type":
                n = b;
                break;
              case "name":
                e = b;
                break;
              case "checked":
                h = b;
                break;
              case "defaultChecked":
                S = b;
                break;
              case "value":
                f = b;
                break;
              case "defaultValue":
                c = b;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null) throw Error(o(137, t));
                break;
              default:
                b !== T && sl(l, t, g, b, u, T);
            }
          }
          df(l, f, c, i, h, S, n, e);
          return;
        case "select":
          b = f = c = g = null;
          for (n in a) if (i = a[n], a.hasOwnProperty(n) && i != null) switch (n) {
            case "value":
              break;
            case "multiple":
              b = i;
            default:
              u.hasOwnProperty(n) || sl(l, t, n, null, u, i);
          }
          for (e in u) if (n = u[e], i = a[e], u.hasOwnProperty(e) && (n != null || i != null)) switch (e) {
            case "value":
              g = n;
              break;
            case "defaultValue":
              c = n;
              break;
            case "multiple":
              f = n;
            default:
              n !== i && sl(l, t, e, n, u, i);
          }
          t = c, a = f, u = b, g != null ? Ia(l, !!a, g, false) : !!u != !!a && (t != null ? Ia(l, !!a, t, true) : Ia(l, !!a, a ? [] : "", false));
          return;
        case "textarea":
          b = g = null;
          for (c in a) if (e = a[c], a.hasOwnProperty(c) && e != null && !u.hasOwnProperty(c)) switch (c) {
            case "value":
              break;
            case "children":
              break;
            default:
              sl(l, t, c, null, u, e);
          }
          for (f in u) if (e = u[f], n = a[f], u.hasOwnProperty(f) && (e != null || n != null)) switch (f) {
            case "value":
              g = e;
              break;
            case "defaultValue":
              b = e;
              break;
            case "children":
              break;
            case "dangerouslySetInnerHTML":
              if (e != null) throw Error(o(91));
              break;
            default:
              e !== n && sl(l, t, f, e, u, n);
          }
          wi(l, g, b);
          return;
        case "option":
          for (var D in a) if (g = a[D], a.hasOwnProperty(D) && g != null && !u.hasOwnProperty(D)) switch (D) {
            case "selected":
              l.selected = false;
              break;
            default:
              sl(l, t, D, null, u, g);
          }
          for (i in u) if (g = u[i], b = a[i], u.hasOwnProperty(i) && g !== b && (g != null || b != null)) switch (i) {
            case "selected":
              l.selected = g && typeof g != "function" && typeof g != "symbol";
              break;
            default:
              sl(l, t, i, g, u, b);
          }
          return;
        case "img":
        case "link":
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "keygen":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
        case "menuitem":
          for (var q in a) g = a[q], a.hasOwnProperty(q) && g != null && !u.hasOwnProperty(q) && sl(l, t, q, null, u, g);
          for (h in u) if (g = u[h], b = a[h], u.hasOwnProperty(h) && g !== b && (g != null || b != null)) switch (h) {
            case "children":
            case "dangerouslySetInnerHTML":
              if (g != null) throw Error(o(137, t));
              break;
            default:
              sl(l, t, h, g, u, b);
          }
          return;
        default:
          if (mf(t)) {
            for (var yl in a) g = a[yl], a.hasOwnProperty(yl) && g !== void 0 && !u.hasOwnProperty(yl) && Pc(l, t, yl, void 0, u, g);
            for (S in u) g = u[S], b = a[S], !u.hasOwnProperty(S) || g === b || g === void 0 && b === void 0 || Pc(l, t, S, g, u, b);
            return;
          }
      }
      for (var d in a) g = a[d], a.hasOwnProperty(d) && g != null && !u.hasOwnProperty(d) && sl(l, t, d, null, u, g);
      for (T in u) g = u[T], b = a[T], !u.hasOwnProperty(T) || g === b || g == null && b == null || sl(l, t, T, g, u, b);
    }
    function ky(l) {
      switch (l) {
        case "css":
        case "script":
        case "font":
        case "img":
        case "image":
        case "input":
        case "link":
          return true;
        default:
          return false;
      }
    }
    function xm() {
      if (typeof performance.getEntriesByType == "function") {
        for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), u = 0; u < a.length; u++) {
          var e = a[u], n = e.transferSize, f = e.initiatorType, c = e.duration;
          if (n && c && ky(f)) {
            for (f = 0, c = e.responseEnd, u += 1; u < a.length; u++) {
              var i = a[u], h = i.startTime;
              if (h > c) break;
              var S = i.transferSize, T = i.initiatorType;
              S && ky(T) && (i = i.responseEnd, f += S * (i < c ? 1 : (c - h) / (i - h)));
            }
            if (--u, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
          }
        }
        if (0 < l) return t / l / 1e6;
      }
      return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
    }
    var li = null, ti = null;
    function Bn(l) {
      return l.nodeType === 9 ? l : l.ownerDocument;
    }
    function Iy(l) {
      switch (l) {
        case "http://www.w3.org/2000/svg":
          return 1;
        case "http://www.w3.org/1998/Math/MathML":
          return 2;
        default:
          return 0;
      }
    }
    function Py(l, t) {
      if (l === 0) switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
      return l === 1 && t === "foreignObject" ? 0 : l;
    }
    function ai(l, t) {
      return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    var ui = null;
    function Xm() {
      var l = window.event;
      return l && l.type === "popstate" ? l === ui ? false : (ui = l, true) : (ui = null, false);
    }
    var ld = typeof setTimeout == "function" ? setTimeout : void 0, Qm = typeof clearTimeout == "function" ? clearTimeout : void 0, td = typeof Promise == "function" ? Promise : void 0, Zm = typeof queueMicrotask == "function" ? queueMicrotask : typeof td < "u" ? function(l) {
      return td.resolve(null).then(l).catch(Lm);
    } : ld;
    function Lm(l) {
      setTimeout(function() {
        throw l;
      });
    }
    function Sa(l) {
      return l === "head";
    }
    function ad(l, t) {
      var a = t, u = 0;
      do {
        var e = a.nextSibling;
        if (l.removeChild(a), e && e.nodeType === 8) if (a = e.data, a === "/$" || a === "/&") {
          if (u === 0) {
            l.removeChild(e), Nu(t);
            return;
          }
          u--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&") u++;
        else if (a === "html") re(l.ownerDocument.documentElement);
        else if (a === "head") {
          a = l.ownerDocument.head, re(a);
          for (var n = a.firstChild; n; ) {
            var f = n.nextSibling, c = n.nodeName;
            n[ju] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n), n = f;
          }
        } else a === "body" && re(l.ownerDocument.body);
        a = e;
      } while (a);
      Nu(t);
    }
    function ud(l, t) {
      var a = l;
      l = 0;
      do {
        var u = a.nextSibling;
        if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), u && u.nodeType === 8) if (a = u.data, a === "/$") {
          if (l === 0) break;
          l--;
        } else a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
        a = u;
      } while (a);
    }
    function ei(l) {
      var t = l.firstChild;
      for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
        var a = t;
        switch (t = t.nextSibling, a.nodeName) {
          case "HTML":
          case "HEAD":
          case "BODY":
            ei(a), sf(a);
            continue;
          case "SCRIPT":
          case "STYLE":
            continue;
          case "LINK":
            if (a.rel.toLowerCase() === "stylesheet") continue;
        }
        l.removeChild(a);
      }
    }
    function Vm(l, t, a, u) {
      for (; l.nodeType === 1; ) {
        var e = a;
        if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
          if (!u && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
        } else if (u) {
          if (!l[ju]) switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence")) break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title)) break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop")) break;
              return l;
            default:
              return l;
          }
        } else if (t === "input" && l.type === "hidden") {
          var n = e.name == null ? null : "" + e.name;
          if (e.type === "hidden" && l.getAttribute("name") === n) return l;
        } else return l;
        if (l = _t(l.nextSibling), l === null) break;
      }
      return null;
    }
    function Km(l, t, a) {
      if (t === "") return null;
      for (; l.nodeType !== 3; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = _t(l.nextSibling), l === null)) return null;
      return l;
    }
    function ed(l, t) {
      for (; l.nodeType !== 8; ) if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = _t(l.nextSibling), l === null)) return null;
      return l;
    }
    function ni(l) {
      return l.data === "$?" || l.data === "$~";
    }
    function fi(l) {
      return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
    }
    function Jm(l, t) {
      var a = l.ownerDocument;
      if (l.data === "$~") l._reactRetry = t;
      else if (l.data !== "$?" || a.readyState !== "loading") t();
      else {
        var u = function() {
          t(), a.removeEventListener("DOMContentLoaded", u);
        };
        a.addEventListener("DOMContentLoaded", u), l._reactRetry = u;
      }
    }
    function _t(l) {
      for (; l != null; l = l.nextSibling) {
        var t = l.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
          if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
          if (t === "/$" || t === "/&") return null;
        }
      }
      return l;
    }
    var ci = null;
    function nd(l) {
      l = l.nextSibling;
      for (var t = 0; l; ) {
        if (l.nodeType === 8) {
          var a = l.data;
          if (a === "/$" || a === "/&") {
            if (t === 0) return _t(l.nextSibling);
            t--;
          } else a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
        }
        l = l.nextSibling;
      }
      return null;
    }
    function fd(l) {
      l = l.previousSibling;
      for (var t = 0; l; ) {
        if (l.nodeType === 8) {
          var a = l.data;
          if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
            if (t === 0) return l;
            t--;
          } else a !== "/$" && a !== "/&" || t++;
        }
        l = l.previousSibling;
      }
      return null;
    }
    function cd(l, t, a) {
      switch (t = Bn(a), l) {
        case "html":
          if (l = t.documentElement, !l) throw Error(o(452));
          return l;
        case "head":
          if (l = t.head, !l) throw Error(o(453));
          return l;
        case "body":
          if (l = t.body, !l) throw Error(o(454));
          return l;
        default:
          throw Error(o(451));
      }
    }
    function re(l) {
      for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
      sf(l);
    }
    var zt = /* @__PURE__ */ new Map(), id = /* @__PURE__ */ new Set();
    function Yn(l) {
      return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
    }
    var kt = p.d;
    p.d = {
      f: wm,
      r: Wm,
      D: $m,
      C: Fm,
      L: km,
      m: Im,
      X: lv,
      S: Pm,
      M: tv
    };
    function wm() {
      var l = kt.f(), t = Dn();
      return l || t;
    }
    function Wm(l) {
      var t = $a(l);
      t !== null && t.tag === 5 && t.type === "form" ? O0(t) : kt.r(l);
    }
    var Mu = typeof document > "u" ? null : document;
    function sd(l, t, a) {
      var u = Mu;
      if (u && typeof t == "string" && t) {
        var e = mt(t);
        e = 'link[rel="' + l + '"][href="' + e + '"]', typeof a == "string" && (e += '[crossorigin="' + a + '"]'), id.has(e) || (id.add(e), l = {
          rel: l,
          crossOrigin: a,
          href: t
        }, u.querySelector(e) === null && (t = u.createElement("link"), Gl(t, "link", l), Hl(t), u.head.appendChild(t)));
      }
    }
    function $m(l) {
      kt.D(l), sd("dns-prefetch", l, null);
    }
    function Fm(l, t) {
      kt.C(l, t), sd("preconnect", l, t);
    }
    function km(l, t, a) {
      kt.L(l, t, a);
      var u = Mu;
      if (u && l && t) {
        var e = 'link[rel="preload"][as="' + mt(t) + '"]';
        t === "image" && a && a.imageSrcSet ? (e += '[imagesrcset="' + mt(a.imageSrcSet) + '"]', typeof a.imageSizes == "string" && (e += '[imagesizes="' + mt(a.imageSizes) + '"]')) : e += '[href="' + mt(l) + '"]';
        var n = e;
        switch (t) {
          case "style":
            n = Du(l);
            break;
          case "script":
            n = Uu(l);
        }
        zt.has(n) || (l = C({
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t
        }, a), zt.set(n, l), u.querySelector(e) !== null || t === "style" && u.querySelector(be(n)) || t === "script" && u.querySelector(Se(n)) || (t = u.createElement("link"), Gl(t, "link", l), Hl(t), u.head.appendChild(t)));
      }
    }
    function Im(l, t) {
      kt.m(l, t);
      var a = Mu;
      if (a && l) {
        var u = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + mt(u) + '"][href="' + mt(l) + '"]', n = e;
        switch (u) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            n = Uu(l);
        }
        if (!zt.has(n) && (l = C({
          rel: "modulepreload",
          href: l
        }, t), zt.set(n, l), a.querySelector(e) === null)) {
          switch (u) {
            case "audioworklet":
            case "paintworklet":
            case "serviceworker":
            case "sharedworker":
            case "worker":
            case "script":
              if (a.querySelector(Se(n))) return;
          }
          u = a.createElement("link"), Gl(u, "link", l), Hl(u), a.head.appendChild(u);
        }
      }
    }
    function Pm(l, t, a) {
      kt.S(l, t, a);
      var u = Mu;
      if (u && l) {
        var e = Fa(u).hoistableStyles, n = Du(l);
        t = t || "default";
        var f = e.get(n);
        if (!f) {
          var c = {
            loading: 0,
            preload: null
          };
          if (f = u.querySelector(be(n))) c.loading = 5;
          else {
            l = C({
              rel: "stylesheet",
              href: l,
              "data-precedence": t
            }, a), (a = zt.get(n)) && ii(l, a);
            var i = f = u.createElement("link");
            Hl(i), Gl(i, "link", l), i._p = new Promise(function(h, S) {
              i.onload = h, i.onerror = S;
            }), i.addEventListener("load", function() {
              c.loading |= 1;
            }), i.addEventListener("error", function() {
              c.loading |= 2;
            }), c.loading |= 4, Gn(f, t, u);
          }
          f = {
            type: "stylesheet",
            instance: f,
            count: 1,
            state: c
          }, e.set(n, f);
        }
      }
    }
    function lv(l, t) {
      kt.X(l, t);
      var a = Mu;
      if (a && l) {
        var u = Fa(a).hoistableScripts, e = Uu(l), n = u.get(e);
        n || (n = a.querySelector(Se(e)), n || (l = C({
          src: l,
          async: true
        }, t), (t = zt.get(e)) && si(l, t), n = a.createElement("script"), Hl(n), Gl(n, "link", l), a.head.appendChild(n)), n = {
          type: "script",
          instance: n,
          count: 1,
          state: null
        }, u.set(e, n));
      }
    }
    function tv(l, t) {
      kt.M(l, t);
      var a = Mu;
      if (a && l) {
        var u = Fa(a).hoistableScripts, e = Uu(l), n = u.get(e);
        n || (n = a.querySelector(Se(e)), n || (l = C({
          src: l,
          async: true,
          type: "module"
        }, t), (t = zt.get(e)) && si(l, t), n = a.createElement("script"), Hl(n), Gl(n, "link", l), a.head.appendChild(n)), n = {
          type: "script",
          instance: n,
          count: 1,
          state: null
        }, u.set(e, n));
      }
    }
    function yd(l, t, a, u) {
      var e = (e = V.current) ? Yn(e) : null;
      if (!e) throw Error(o(446));
      switch (l) {
        case "meta":
        case "title":
          return null;
        case "style":
          return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Du(a.href), a = Fa(e).hoistableStyles, u = a.get(t), u || (u = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          }, a.set(t, u)), u) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        case "link":
          if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
            l = Du(a.href);
            var n = Fa(e).hoistableStyles, f = n.get(l);
            if (f || (e = e.ownerDocument || e, f = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            }, n.set(l, f), (n = e.querySelector(be(l))) && !n._p && (f.instance = n, f.state.loading = 5), zt.has(l) || (a = {
              rel: "preload",
              as: "style",
              href: a.href,
              crossOrigin: a.crossOrigin,
              integrity: a.integrity,
              media: a.media,
              hrefLang: a.hrefLang,
              referrerPolicy: a.referrerPolicy
            }, zt.set(l, a), n || av(e, l, a, f.state))), t && u === null) throw Error(o(528, ""));
            return f;
          }
          if (t && u !== null) throw Error(o(529, ""));
          return null;
        case "script":
          return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Uu(a), a = Fa(e).hoistableScripts, u = a.get(t), u || (u = {
            type: "script",
            instance: null,
            count: 0,
            state: null
          }, a.set(t, u)), u) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
        default:
          throw Error(o(444, l));
      }
    }
    function Du(l) {
      return 'href="' + mt(l) + '"';
    }
    function be(l) {
      return 'link[rel="stylesheet"][' + l + "]";
    }
    function dd(l) {
      return C({}, l, {
        "data-precedence": l.precedence,
        precedence: null
      });
    }
    function av(l, t, a, u) {
      l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? u.loading = 1 : (t = l.createElement("link"), u.preload = t, t.addEventListener("load", function() {
        return u.loading |= 1;
      }), t.addEventListener("error", function() {
        return u.loading |= 2;
      }), Gl(t, "link", a), Hl(t), l.head.appendChild(t));
    }
    function Uu(l) {
      return '[src="' + mt(l) + '"]';
    }
    function Se(l) {
      return "script[async]" + l;
    }
    function od(l, t, a) {
      if (t.count++, t.instance === null) switch (t.type) {
        case "style":
          var u = l.querySelector('style[data-href~="' + mt(a.href) + '"]');
          if (u) return t.instance = u, Hl(u), u;
          var e = C({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return u = (l.ownerDocument || l).createElement("style"), Hl(u), Gl(u, "style", e), Gn(u, a.precedence, l), t.instance = u;
        case "stylesheet":
          e = Du(a.href);
          var n = l.querySelector(be(e));
          if (n) return t.state.loading |= 4, t.instance = n, Hl(n), n;
          u = dd(a), (e = zt.get(e)) && ii(u, e), n = (l.ownerDocument || l).createElement("link"), Hl(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Gl(n, "link", u), t.state.loading |= 4, Gn(n, a.precedence, l), t.instance = n;
        case "script":
          return n = Uu(a.src), (e = l.querySelector(Se(n))) ? (t.instance = e, Hl(e), e) : (u = a, (e = zt.get(n)) && (u = C({}, a), si(u, e)), l = l.ownerDocument || l, e = l.createElement("script"), Hl(e), Gl(e, "link", u), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
      else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (u = t.instance, t.state.loading |= 4, Gn(u, a.precedence, l));
      return t.instance;
    }
    function Gn(l, t, a) {
      for (var u = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), e = u.length ? u[u.length - 1] : null, n = e, f = 0; f < u.length; f++) {
        var c = u[f];
        if (c.dataset.precedence === t) n = c;
        else if (n !== e) break;
      }
      n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
    }
    function ii(l, t) {
      l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
    }
    function si(l, t) {
      l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
    }
    var xn = null;
    function md(l, t, a) {
      if (xn === null) {
        var u = /* @__PURE__ */ new Map(), e = xn = /* @__PURE__ */ new Map();
        e.set(a, u);
      } else e = xn, u = e.get(a), u || (u = /* @__PURE__ */ new Map(), e.set(a, u));
      if (u.has(l)) return u;
      for (u.set(l, null), a = a.getElementsByTagName(l), e = 0; e < a.length; e++) {
        var n = a[e];
        if (!(n[ju] || n[Cl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
          var f = n.getAttribute(t) || "";
          f = l + f;
          var c = u.get(f);
          c ? c.push(n) : u.set(f, [
            n
          ]);
        }
      }
      return u;
    }
    function vd(l, t, a) {
      l = l.ownerDocument || l, l.head.insertBefore(a, t === "title" ? l.querySelector("head > title") : null);
    }
    function uv(l, t, a) {
      if (a === 1 || t.itemProp != null) return false;
      switch (l) {
        case "meta":
        case "title":
          return true;
        case "style":
          if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
          return true;
        case "link":
          if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
          switch (t.rel) {
            case "stylesheet":
              return l = t.disabled, typeof t.precedence == "string" && l == null;
            default:
              return true;
          }
        case "script":
          if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return true;
      }
      return false;
    }
    function hd(l) {
      return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
    }
    function ev(l, t, a, u) {
      if (a.type === "stylesheet" && (typeof u.media != "string" || matchMedia(u.media).matches !== false) && (a.state.loading & 4) === 0) {
        if (a.instance === null) {
          var e = Du(u.href), n = t.querySelector(be(e));
          if (n) {
            t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Xn.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = n, Hl(n);
            return;
          }
          n = t.ownerDocument || t, u = dd(u), (e = zt.get(e)) && ii(u, e), n = n.createElement("link"), Hl(n);
          var f = n;
          f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Gl(n, "link", u), a.instance = n;
        }
        l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = Xn.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
      }
    }
    var yi = 0;
    function nv(l, t) {
      return l.stylesheets && l.count === 0 && Zn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
        var u = setTimeout(function() {
          if (l.stylesheets && Zn(l, l.stylesheets), l.unsuspend) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        }, 6e4 + t);
        0 < l.imgBytes && yi === 0 && (yi = 62500 * xm());
        var e = setTimeout(function() {
          if (l.waitingForImages = false, l.count === 0 && (l.stylesheets && Zn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        }, (l.imgBytes > yi ? 50 : 800) + t);
        return l.unsuspend = a, function() {
          l.unsuspend = null, clearTimeout(u), clearTimeout(e);
        };
      } : null;
    }
    function Xn() {
      if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
        if (this.stylesheets) Zn(this, this.stylesheets);
        else if (this.unsuspend) {
          var l = this.unsuspend;
          this.unsuspend = null, l();
        }
      }
    }
    var Qn = null;
    function Zn(l, t) {
      l.stylesheets = null, l.unsuspend !== null && (l.count++, Qn = /* @__PURE__ */ new Map(), t.forEach(fv, l), Qn = null, Xn.call(l));
    }
    function fv(l, t) {
      if (!(t.state.loading & 4)) {
        var a = Qn.get(l);
        if (a) var u = a.get(null);
        else {
          a = /* @__PURE__ */ new Map(), Qn.set(l, a);
          for (var e = l.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < e.length; n++) {
            var f = e[n];
            (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (a.set(f.dataset.precedence, f), u = f);
          }
          u && a.set(null, u);
        }
        e = t.instance, f = e.getAttribute("data-precedence"), n = a.get(f) || u, n === u && a.set(null, e), a.set(f, e), this.count++, u = Xn.bind(this), e.addEventListener("load", u), e.addEventListener("error", u), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
      }
    }
    var _e = {
      $$typeof: Rl,
      Provider: null,
      Consumer: null,
      _currentValue: j,
      _currentValue2: j,
      _threadCount: 0
    };
    function cv(l, t, a, u, e, n, f, c, i) {
      this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ef(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ef(0), this.hiddenUpdates = ef(null), this.identifierPrefix = u, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = /* @__PURE__ */ new Map();
    }
    function gd(l, t, a, u, e, n, f, c, i, h, S, T) {
      return l = new cv(l, t, a, f, i, h, S, T, c), t = 1, n === true && (t |= 24), n = nt(3, null, null, t), l.current = n, n.stateNode = l, t = Lf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
        element: u,
        isDehydrated: a,
        cache: t
      }, wf(n), l;
    }
    function rd(l) {
      return l ? (l = fu, l) : fu;
    }
    function bd(l, t, a, u, e, n) {
      e = rd(e), u.context === null ? u.context = e : u.pendingContext = e, u = ia(t), u.payload = {
        element: a
      }, n = n === void 0 ? null : n, n !== null && (u.callback = n), a = sa(l, u, t), a !== null && (lt(a, l, t), Iu(a, l, t));
    }
    function Sd(l, t) {
      if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
        var a = l.retryLane;
        l.retryLane = a !== 0 && a < t ? a : t;
      }
    }
    function di(l, t) {
      Sd(l, t), (l = l.alternate) && Sd(l, t);
    }
    function _d(l) {
      if (l.tag === 13 || l.tag === 31) {
        var t = Ha(l, 67108864);
        t !== null && lt(t, l, 67108864), di(l, 67108864);
      }
    }
    function zd(l) {
      if (l.tag === 13 || l.tag === 31) {
        var t = yt();
        t = nf(t);
        var a = Ha(l, t);
        a !== null && lt(a, l, t), di(l, t);
      }
    }
    var Ln = true;
    function iv(l, t, a, u) {
      var e = _.T;
      _.T = null;
      var n = p.p;
      try {
        p.p = 2, oi(l, t, a, u);
      } finally {
        p.p = n, _.T = e;
      }
    }
    function sv(l, t, a, u) {
      var e = _.T;
      _.T = null;
      var n = p.p;
      try {
        p.p = 8, oi(l, t, a, u);
      } finally {
        p.p = n, _.T = e;
      }
    }
    function oi(l, t, a, u) {
      if (Ln) {
        var e = mi(u);
        if (e === null) Ic(l, t, u, Vn, a), Ed(l, u);
        else if (dv(e, l, t, a, u)) u.stopPropagation();
        else if (Ed(l, u), t & 4 && -1 < yv.indexOf(l)) {
          for (; e !== null; ) {
            var n = $a(e);
            if (n !== null) switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = Ma(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - ut(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    Ht(n), (tl & 6) === 0 && (pn = tt() + 500, ve(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Ha(n, 2), c !== null && lt(c, n, 2), Dn(), di(n, 2);
            }
            if (n = mi(u), n === null && Ic(l, t, u, Vn, a), n === e) break;
            e = n;
          }
          e !== null && u.stopPropagation();
        } else Ic(l, t, u, null, a);
      }
    }
    function mi(l) {
      return l = hf(l), vi(l);
    }
    var Vn = null;
    function vi(l) {
      if (Vn = null, l = Wa(l), l !== null) {
        var t = L(l);
        if (t === null) l = null;
        else {
          var a = t.tag;
          if (a === 13) {
            if (l = ul(t), l !== null) return l;
            l = null;
          } else if (a === 31) {
            if (l = _l(t), l !== null) return l;
            l = null;
          } else if (a === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            l = null;
          } else t !== l && (l = null);
        }
      }
      return Vn = l, null;
    }
    function Td(l) {
      switch (l) {
        case "beforetoggle":
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "toggle":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return 2;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return 8;
        case "message":
          switch (Wd()) {
            case Ni:
              return 2;
            case Ri:
              return 8;
            case He:
            case $d:
              return 32;
            case Hi:
              return 268435456;
            default:
              return 32;
          }
        default:
          return 32;
      }
    }
    var hi = false, _a = null, za = null, Ta = null, ze = /* @__PURE__ */ new Map(), Te = /* @__PURE__ */ new Map(), Ea = [], yv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
    function Ed(l, t) {
      switch (l) {
        case "focusin":
        case "focusout":
          _a = null;
          break;
        case "dragenter":
        case "dragleave":
          za = null;
          break;
        case "mouseover":
        case "mouseout":
          Ta = null;
          break;
        case "pointerover":
        case "pointerout":
          ze.delete(t.pointerId);
          break;
        case "gotpointercapture":
        case "lostpointercapture":
          Te.delete(t.pointerId);
      }
    }
    function Ee(l, t, a, u, e, n) {
      return l === null || l.nativeEvent !== n ? (l = {
        blockedOn: t,
        domEventName: a,
        eventSystemFlags: u,
        nativeEvent: n,
        targetContainers: [
          e
        ]
      }, t !== null && (t = $a(t), t !== null && _d(t)), l) : (l.eventSystemFlags |= u, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
    }
    function dv(l, t, a, u, e) {
      switch (t) {
        case "focusin":
          return _a = Ee(_a, l, t, a, u, e), true;
        case "dragenter":
          return za = Ee(za, l, t, a, u, e), true;
        case "mouseover":
          return Ta = Ee(Ta, l, t, a, u, e), true;
        case "pointerover":
          var n = e.pointerId;
          return ze.set(n, Ee(ze.get(n) || null, l, t, a, u, e)), true;
        case "gotpointercapture":
          return n = e.pointerId, Te.set(n, Ee(Te.get(n) || null, l, t, a, u, e)), true;
      }
      return false;
    }
    function Ad(l) {
      var t = Wa(l.target);
      if (t !== null) {
        var a = L(t);
        if (a !== null) {
          if (t = a.tag, t === 13) {
            if (t = ul(a), t !== null) {
              l.blockedOn = t, Gi(l.priority, function() {
                zd(a);
              });
              return;
            }
          } else if (t === 31) {
            if (t = _l(a), t !== null) {
              l.blockedOn = t, Gi(l.priority, function() {
                zd(a);
              });
              return;
            }
          } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
            l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
            return;
          }
        }
      }
      l.blockedOn = null;
    }
    function Kn(l) {
      if (l.blockedOn !== null) return false;
      for (var t = l.targetContainers; 0 < t.length; ) {
        var a = mi(l.nativeEvent);
        if (a === null) {
          a = l.nativeEvent;
          var u = new a.constructor(a.type, a);
          vf = u, a.target.dispatchEvent(u), vf = null;
        } else return t = $a(a), t !== null && _d(t), l.blockedOn = a, false;
        t.shift();
      }
      return true;
    }
    function Od(l, t, a) {
      Kn(l) && a.delete(t);
    }
    function ov() {
      hi = false, _a !== null && Kn(_a) && (_a = null), za !== null && Kn(za) && (za = null), Ta !== null && Kn(Ta) && (Ta = null), ze.forEach(Od), Te.forEach(Od);
    }
    function Jn(l, t) {
      l.blockedOn === t && (l.blockedOn = null, hi || (hi = true, m.unstable_scheduleCallback(m.unstable_NormalPriority, ov)));
    }
    var wn = null;
    function pd(l) {
      wn !== l && (wn = l, m.unstable_scheduleCallback(m.unstable_NormalPriority, function() {
        wn === l && (wn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t], u = l[t + 1], e = l[t + 2];
          if (typeof u != "function") {
            if (vi(u || a) === null) continue;
            break;
          }
          var n = $a(a);
          n !== null && (l.splice(t, 3), t -= 3, mc(n, {
            pending: true,
            data: e,
            method: a.method,
            action: u
          }, u, e));
        }
      }));
    }
    function Nu(l) {
      function t(i) {
        return Jn(i, l);
      }
      _a !== null && Jn(_a, l), za !== null && Jn(za, l), Ta !== null && Jn(Ta, l), ze.forEach(t), Te.forEach(t);
      for (var a = 0; a < Ea.length; a++) {
        var u = Ea[a];
        u.blockedOn === l && (u.blockedOn = null);
      }
      for (; 0 < Ea.length && (a = Ea[0], a.blockedOn === null); ) Ad(a), a.blockedOn === null && Ea.shift();
      if (a = (l.ownerDocument || l).$$reactFormReplay, a != null) for (u = 0; u < a.length; u += 3) {
        var e = a[u], n = a[u + 1], f = e[Wl] || null;
        if (typeof n == "function") f || pd(a);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Wl] || null) c = f.formAction;
            else if (vi(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? a[u + 1] = c : (a.splice(u, 3), u -= 3), pd(a);
        }
      }
    }
    function Md() {
      function l(n) {
        n.canIntercept && n.info === "react-transition" && n.intercept({
          handler: function() {
            return new Promise(function(f) {
              return e = f;
            });
          },
          focusReset: "manual",
          scroll: "manual"
        });
      }
      function t() {
        e !== null && (e(), e = null), u || setTimeout(a, 20);
      }
      function a() {
        if (!u && !navigation.transition) {
          var n = navigation.currentEntry;
          n && n.url != null && navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace"
          });
        }
      }
      if (typeof navigation == "object") {
        var u = false, e = null;
        return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
          u = true, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
        };
      }
    }
    function gi(l) {
      this._internalRoot = l;
    }
    Wn.prototype.render = gi.prototype.render = function(l) {
      var t = this._internalRoot;
      if (t === null) throw Error(o(409));
      var a = t.current, u = yt();
      bd(a, u, l, t, null, null);
    }, Wn.prototype.unmount = gi.prototype.unmount = function() {
      var l = this._internalRoot;
      if (l !== null) {
        this._internalRoot = null;
        var t = l.containerInfo;
        bd(l.current, 2, null, l, null, null), Dn(), t[wa] = null;
      }
    };
    function Wn(l) {
      this._internalRoot = l;
    }
    Wn.prototype.unstable_scheduleHydration = function(l) {
      if (l) {
        var t = Yi();
        l = {
          blockedOn: null,
          target: l,
          priority: t
        };
        for (var a = 0; a < Ea.length && t !== 0 && t < Ea[a].priority; a++) ;
        Ea.splice(a, 0, l), a === 0 && Ad(l);
      }
    };
    var Dd = r.version;
    if (Dd !== "19.2.0") throw Error(o(527, Dd, "19.2.0"));
    p.findDOMNode = function(l) {
      var t = l._reactInternals;
      if (t === void 0) throw typeof l.render == "function" ? Error(o(188)) : (l = Object.keys(l).join(","), Error(o(268, l)));
      return l = A(t), l = l !== null ? F(l) : null, l = l === null ? null : l.stateNode, l;
    };
    var mv = {
      bundleType: 0,
      version: "19.2.0",
      rendererPackageName: "react-dom",
      currentDispatcherRef: _,
      reconcilerVersion: "19.2.0"
    };
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
      var $n = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (!$n.isDisabled && $n.supportsFiber) try {
        Hu = $n.inject(mv), at = $n;
      } catch {
      }
    }
    return Oe.createRoot = function(l, t) {
      if (!Y(l)) throw Error(o(299));
      var a = false, u = "", e = j0, n = B0, f = Y0;
      return t != null && (t.unstable_strictMode === true && (a = true), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = gd(l, 1, false, null, null, a, u, null, e, n, f, Md), l[wa] = t.current, kc(l), new gi(t);
    }, Oe.hydrateRoot = function(l, t, a) {
      if (!Y(l)) throw Error(o(299));
      var u = false, e = "", n = j0, f = B0, c = Y0, i = null;
      return a != null && (a.unstable_strictMode === true && (u = true), a.identifierPrefix !== void 0 && (e = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (f = a.onCaughtError), a.onRecoverableError !== void 0 && (c = a.onRecoverableError), a.formState !== void 0 && (i = a.formState)), t = gd(l, 1, true, t, a ?? null, u, e, i, n, f, c, Md), t.context = rd(null), a = t.current, u = yt(), u = nf(u), e = ia(u), e.callback = null, sa(a, e, u), a = u, t.current.lanes = a, Cu(t, a), Ht(t), l[wa] = t.current, kc(l), new Wn(t);
    }, Oe.version = "19.2.0", Oe;
  }
  var Gd;
  function Ev() {
    if (Gd) return Si.exports;
    Gd = 1;
    function m() {
      if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(m);
      } catch (r) {
        console.error(r);
      }
    }
    return m(), Si.exports = Tv(), Si.exports;
  }
  var Av = Ev();
  let ml;
  function Al(m) {
    Ne === Pt.length && Pt.push(Pt.length + 1);
    const r = Ne;
    return Ne = Pt[r], Pt[r] = m, r;
  }
  function Ov(m) {
    m < 132 || (Pt[m] = Ne, Ne = m);
  }
  function pv(m, r) {
    return m = m >>> 0, Mv().subarray(m / 4, m / 4 + r);
  }
  function xd(m, r) {
    return m = m >>> 0, Ld().subarray(m / 1, m / 1 + r);
  }
  let Ka = null;
  function Xd() {
    return (Ka === null || Ka.buffer.detached === true || Ka.buffer.detached === void 0 && Ka.buffer !== ml.memory.buffer) && (Ka = new DataView(ml.memory.buffer)), Ka;
  }
  function Ei(m, r) {
    return m = m >>> 0, Uv(m, r);
  }
  let Me = null;
  function Mv() {
    return (Me === null || Me.byteLength === 0) && (Me = new Uint32Array(ml.memory.buffer)), Me;
  }
  let De = null;
  function Ld() {
    return (De === null || De.byteLength === 0) && (De = new Uint8Array(ml.memory.buffer)), De;
  }
  function rl(m) {
    return Pt[m];
  }
  function pe(m, r) {
    try {
      return m.apply(this, r);
    } catch (O) {
      ml.__wbindgen_export(Al(O));
    }
  }
  let Pt = new Array(128).fill(void 0);
  Pt.push(void 0, null, true, false);
  let Ne = Pt.length;
  function Fn(m) {
    return m == null;
  }
  function Ue(m) {
    const r = rl(m);
    return Ov(m), r;
  }
  let kn = new TextDecoder("utf-8", {
    ignoreBOM: true,
    fatal: true
  });
  kn.decode();
  const Dv = 2146435072;
  let Ai = 0;
  function Uv(m, r) {
    return Ai += r, Ai >= Dv && (kn = new TextDecoder("utf-8", {
      ignoreBOM: true,
      fatal: true
    }), kn.decode(), Ai = r), kn.decode(Ld().subarray(m, m + r));
  }
  const Nv = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((m) => ml.__wbg_game_free(m >>> 0, 1)), Qd = typeof FinalizationRegistry > "u" ? {
    register: () => {
    },
    unregister: () => {
    }
  } : new FinalizationRegistry((m) => ml.__wbg_gamecatalog_free(m >>> 0, 1));
  class Zd {
    __destroy_into_raw() {
      const r = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Nv.unregister(this), r;
    }
    free() {
      const r = this.__destroy_into_raw();
      ml.__wbg_game_free(r, 0);
    }
    get id() {
      return ml.__wbg_get_game_id(this.__wbg_ptr) >>> 0;
    }
    set id(r) {
      ml.__wbg_set_game_id(this.__wbg_ptr, r);
    }
    get price() {
      return ml.__wbg_get_game_price(this.__wbg_ptr) >>> 0;
    }
    set price(r) {
      ml.__wbg_set_game_price(this.__wbg_ptr, r);
    }
    get rating() {
      return ml.__wbg_get_game_rating(this.__wbg_ptr);
    }
    set rating(r) {
      ml.__wbg_set_game_rating(this.__wbg_ptr, r);
    }
    get year() {
      return ml.__wbg_get_game_year(this.__wbg_ptr);
    }
    set year(r) {
      ml.__wbg_set_game_year(this.__wbg_ptr, r);
    }
  }
  Symbol.dispose && (Zd.prototype[Symbol.dispose] = Zd.prototype.free);
  class pi {
    __destroy_into_raw() {
      const r = this.__wbg_ptr;
      return this.__wbg_ptr = 0, Qd.unregister(this), r;
    }
    free() {
      const r = this.__destroy_into_raw();
      ml.__wbg_gamecatalog_free(r, 0);
    }
    get_game_by_index(r) {
      const O = ml.gamecatalog_get_game_by_index(this.__wbg_ptr, r);
      return Ue(O);
    }
    constructor(r) {
      const O = ml.gamecatalog_new(r);
      return this.__wbg_ptr = O >>> 0, Qd.register(this, this.__wbg_ptr, this), this;
    }
    filter(r, O, o) {
      try {
        const _l = ml.__wbindgen_add_to_stack_pointer(-16);
        ml.gamecatalog_filter(_l, this.__wbg_ptr, r, O, o);
        var Y = Xd().getInt32(_l + 0, true), L = Xd().getInt32(_l + 4, true), ul = pv(Y, L).slice();
        return ml.__wbindgen_export2(Y, L * 4, 4), ul;
      } finally {
        ml.__wbindgen_add_to_stack_pointer(16);
      }
    }
  }
  Symbol.dispose && (pi.prototype[Symbol.dispose] = pi.prototype.free);
  const Rv = /* @__PURE__ */ new Set([
    "basic",
    "cors",
    "default"
  ]);
  async function Hv(m, r) {
    if (typeof Response == "function" && m instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function") try {
        return await WebAssembly.instantiateStreaming(m, r);
      } catch (o) {
        if (m.ok && Rv.has(m.type) && m.headers.get("Content-Type") !== "application/wasm") console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", o);
        else throw o;
      }
      const O = await m.arrayBuffer();
      return await WebAssembly.instantiate(O, r);
    } else {
      const O = await WebAssembly.instantiate(m, r);
      return O instanceof WebAssembly.Instance ? {
        instance: O,
        module: m
      } : O;
    }
  }
  function qv() {
    const m = {};
    return m.wbg = {}, m.wbg.__wbg___wbindgen_is_function_8d400b8b1af978cd = function(r) {
      return typeof rl(r) == "function";
    }, m.wbg.__wbg___wbindgen_is_object_ce774f3490692386 = function(r) {
      const O = rl(r);
      return typeof O == "object" && O !== null;
    }, m.wbg.__wbg___wbindgen_is_string_704ef9c8fc131030 = function(r) {
      return typeof rl(r) == "string";
    }, m.wbg.__wbg___wbindgen_is_undefined_f6b95eab589e0269 = function(r) {
      return rl(r) === void 0;
    }, m.wbg.__wbg___wbindgen_throw_dd24417ed36fc46e = function(r, O) {
      throw new Error(Ei(r, O));
    }, m.wbg.__wbg_call_3020136f7a2d6e44 = function() {
      return pe(function(r, O, o) {
        const Y = rl(r).call(rl(O), rl(o));
        return Al(Y);
      }, arguments);
    }, m.wbg.__wbg_call_abb4ff46ce38be40 = function() {
      return pe(function(r, O) {
        const o = rl(r).call(rl(O));
        return Al(o);
      }, arguments);
    }, m.wbg.__wbg_crypto_574e78ad8b13b65f = function(r) {
      const O = rl(r).crypto;
      return Al(O);
    }, m.wbg.__wbg_getRandomValues_b8f5dbd5f3995a9e = function() {
      return pe(function(r, O) {
        rl(r).getRandomValues(rl(O));
      }, arguments);
    }, m.wbg.__wbg_length_22ac23eaec9d8053 = function(r) {
      return rl(r).length;
    }, m.wbg.__wbg_msCrypto_a61aeb35a24c1329 = function(r) {
      const O = rl(r).msCrypto;
      return Al(O);
    }, m.wbg.__wbg_new_1ba21ce319a06297 = function() {
      const r = new Object();
      return Al(r);
    }, m.wbg.__wbg_new_no_args_cb138f77cf6151ee = function(r, O) {
      const o = new Function(Ei(r, O));
      return Al(o);
    }, m.wbg.__wbg_new_with_length_aa5eaf41d35235e5 = function(r) {
      const O = new Uint8Array(r >>> 0);
      return Al(O);
    }, m.wbg.__wbg_node_905d3e251edff8a2 = function(r) {
      const O = rl(r).node;
      return Al(O);
    }, m.wbg.__wbg_process_dc0fbacc7c1c06f7 = function(r) {
      const O = rl(r).process;
      return Al(O);
    }, m.wbg.__wbg_prototypesetcall_dfe9b766cdc1f1fd = function(r, O, o) {
      Uint8Array.prototype.set.call(xd(r, O), rl(o));
    }, m.wbg.__wbg_randomFillSync_ac0988aba3254290 = function() {
      return pe(function(r, O) {
        rl(r).randomFillSync(Ue(O));
      }, arguments);
    }, m.wbg.__wbg_require_60cc747a6bc5215a = function() {
      return pe(function() {
        const r = module.require;
        return Al(r);
      }, arguments);
    }, m.wbg.__wbg_set_3f1d0b984ed272ed = function(r, O, o) {
      rl(r)[Ue(O)] = Ue(o);
    }, m.wbg.__wbg_static_accessor_GLOBAL_769e6b65d6557335 = function() {
      const r = typeof global > "u" ? null : global;
      return Fn(r) ? 0 : Al(r);
    }, m.wbg.__wbg_static_accessor_GLOBAL_THIS_60cf02db4de8e1c1 = function() {
      const r = typeof globalThis > "u" ? null : globalThis;
      return Fn(r) ? 0 : Al(r);
    }, m.wbg.__wbg_static_accessor_SELF_08f5a74c69739274 = function() {
      const r = typeof self > "u" ? null : self;
      return Fn(r) ? 0 : Al(r);
    }, m.wbg.__wbg_static_accessor_WINDOW_a8924b26aa92d024 = function() {
      const r = typeof window > "u" ? null : window;
      return Fn(r) ? 0 : Al(r);
    }, m.wbg.__wbg_subarray_845f2f5bce7d061a = function(r, O, o) {
      const Y = rl(r).subarray(O >>> 0, o >>> 0);
      return Al(Y);
    }, m.wbg.__wbg_versions_c01dfd4722a88165 = function(r) {
      const O = rl(r).versions;
      return Al(O);
    }, m.wbg.__wbindgen_cast_2241b6af4c4b2941 = function(r, O) {
      const o = Ei(r, O);
      return Al(o);
    }, m.wbg.__wbindgen_cast_cb9088102bce6b30 = function(r, O) {
      const o = xd(r, O);
      return Al(o);
    }, m.wbg.__wbindgen_cast_d6cd19b81560fd6e = function(r) {
      return Al(r);
    }, m.wbg.__wbindgen_object_clone_ref = function(r) {
      const O = rl(r);
      return Al(O);
    }, m.wbg.__wbindgen_object_drop_ref = function(r) {
      Ue(r);
    }, m;
  }
  function Cv(m, r) {
    return ml = m.exports, Vd.__wbindgen_wasm_module = r, Ka = null, Me = null, De = null, ml;
  }
  async function Vd(m) {
    if (ml !== void 0) return ml;
    typeof m < "u" && (Object.getPrototypeOf(m) === Object.prototype ? { module_or_path: m } = m : console.warn("using deprecated parameters for the initialization function; pass a single object instead")), typeof m > "u" && (m = new URL("/game-catalog/assets/game_filter_core_bg-CqBFFO1x.wasm", import.meta.url));
    const r = qv();
    (typeof m == "string" || typeof Request == "function" && m instanceof Request || typeof URL == "function" && m instanceof URL) && (m = fetch(m));
    const { instance: O, module: o } = await Hv(await m, r);
    return Cv(O, o);
  }
  const Oi = [
    "Action",
    "RPG",
    "Strategy",
    "Adventure",
    "Simulation"
  ];
  await Vd();
  function jv() {
    const [m, r] = It.useState(null), [O, o] = It.useState([]), [Y, L] = It.useState([]), [ul, _l] = It.useState(6e3), [R, A] = It.useState(50), [F, C] = It.useState(new Array(Oi.length).fill(false));
    It.useEffect(() => {
      const Z = new pi(1e5);
      r(Z);
      const w = Z.filter(6e3, 0, 0);
      o(w);
    }, []);
    const fl = (Z, w, Zl) => {
      if (!m) return;
      let Nl = 0;
      Zl.forEach((dt, xl) => {
        dt && (Nl |= 1 << xl);
      });
      const pt = performance.now(), Rl = m.filter(Z, w, Nl), Kl = performance.now();
      console.log(`Filter time: ${(Kl - pt).toFixed(2)}ms`), o(Rl);
    }, Ql = (Z) => {
      const w = [
        ...F
      ];
      w[Z] = !w[Z], C(w), fl(ul, R, w);
    };
    return It.useEffect(() => {
      if (!m || O.length === 0) {
        L([]);
        return;
      }
      const Z = O.subarray(0, 50), w = [];
      for (let Zl = 0; Zl < Z.length; Zl++) {
        const Nl = m.get_game_by_index(Z[Zl]);
        w.push(Nl);
      }
      L(w);
    }, [
      O,
      m
    ]), B.jsxs("div", {
      className: "app",
      children: [
        B.jsx("header", {
          className: "global-header",
          children: B.jsxs("div", {
            className: "header-content",
            children: [
              B.jsxs("div", {
                className: "logo",
                children: [
                  B.jsxs("svg", {
                    width: "40",
                    height: "40",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    style: {
                      marginRight: "10px"
                    },
                    children: [
                      B.jsx("path", {
                        d: "M12 2L2 7L12 12L22 7L12 2Z",
                        stroke: "#66c0f4",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      B.jsx("path", {
                        d: "M2 17L12 22L22 17",
                        stroke: "#66c0f4",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      }),
                      B.jsx("path", {
                        d: "M2 12L12 17L22 12",
                        stroke: "#66c0f4",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })
                    ]
                  }),
                  "Ayre ",
                  B.jsx("span", {
                    children: "STORE"
                  })
                ]
              }),
              B.jsxs("nav", {
                className: "nav-menu",
                children: [
                  B.jsx("a", {
                    href: "#",
                    className: "nav-item active",
                    children: "STORE"
                  }),
                  B.jsx("a", {
                    href: "#",
                    className: "nav-item",
                    children: "LIBRARY"
                  }),
                  B.jsx("a", {
                    href: "#",
                    className: "nav-item",
                    children: "COMMUNITY"
                  }),
                  B.jsx("a", {
                    href: "#",
                    className: "nav-item",
                    children: "SUPPORT"
                  })
                ]
              }),
              B.jsxs("div", {
                className: "header-search",
                children: [
                  B.jsx("input", {
                    type: "text",
                    placeholder: "search..."
                  }),
                  B.jsx("span", {
                    style: {
                      color: "#66c0f4"
                    },
                    children: "\u{1F50D}"
                  })
                ]
              })
            ]
          })
        }),
        B.jsxs("div", {
          className: "main-container",
          children: [
            B.jsxs("aside", {
              className: "sidebar",
              children: [
                B.jsxs("div", {
                  className: "filter-box",
                  children: [
                    B.jsx("span", {
                      className: "filter-header",
                      children: "Price"
                    }),
                    B.jsxs("span", {
                      className: "filter-value",
                      children: [
                        "Up to: ",
                        ul === 6e3 ? "Any" : `$${(ul / 100).toFixed(2)}`
                      ]
                    }),
                    B.jsx("input", {
                      type: "range",
                      min: "0",
                      max: "6000",
                      step: "100",
                      value: ul,
                      onChange: (Z) => {
                        const w = Number(Z.target.value);
                        _l(w), fl(w, R, F);
                      }
                    })
                  ]
                }),
                B.jsxs("div", {
                  className: "filter-box",
                  children: [
                    B.jsx("span", {
                      className: "filter-header",
                      children: "Review Score"
                    }),
                    B.jsxs("span", {
                      className: "filter-value",
                      children: [
                        "Above: ",
                        R,
                        "%"
                      ]
                    }),
                    B.jsx("input", {
                      type: "range",
                      min: "0",
                      max: "100",
                      value: R,
                      onChange: (Z) => {
                        const w = Number(Z.target.value);
                        A(w), fl(ul, w, F);
                      }
                    })
                  ]
                }),
                B.jsxs("div", {
                  className: "filter-box",
                  children: [
                    B.jsx("span", {
                      className: "filter-header",
                      children: "Genres"
                    }),
                    B.jsx("div", {
                      style: {
                        marginTop: "15px"
                      },
                      children: Oi.map((Z, w) => B.jsxs("label", {
                        className: "checkbox-row",
                        children: [
                          B.jsx("input", {
                            type: "checkbox",
                            checked: F[w],
                            onChange: () => Ql(w)
                          }),
                          Z
                        ]
                      }, Z))
                    })
                  ]
                })
              ]
            }),
            B.jsxs("main", {
              className: "content",
              children: [
                B.jsxs("div", {
                  className: "status-bar",
                  children: [
                    B.jsx("span", {
                      children: "Search Results"
                    }),
                    B.jsxs("span", {
                      children: [
                        "Found: ",
                        B.jsx("strong", {
                          children: O.length.toLocaleString()
                        }),
                        " titles"
                      ]
                    })
                  ]
                }),
                B.jsx("div", {
                  className: "game-list",
                  children: Y.map((Z) => B.jsxs("div", {
                    className: "game-row",
                    children: [
                      B.jsx("img", {
                        className: "game-poster",
                        src: `https://picsum.photos/seed/${Z.id}/180/75`,
                        alt: "cover"
                      }),
                      B.jsxs("div", {
                        className: "game-details",
                        children: [
                          B.jsxs("div", {
                            className: "game-title",
                            children: [
                              "Game Project #",
                              Z.id
                            ]
                          }),
                          B.jsxs("div", {
                            className: "game-meta",
                            children: [
                              Oi[Z.category],
                              " \u2022 Windows \u2022 VR Supported"
                            ]
                          })
                        ]
                      }),
                      B.jsxs("div", {
                        className: "game-stats",
                        children: [
                          B.jsxs("div", {
                            className: "rating",
                            children: [
                              Z.rating,
                              "% Very Positive"
                            ]
                          }),
                          B.jsxs("div", {
                            className: "price",
                            children: [
                              "$",
                              (Z.price / 100).toFixed(2)
                            ]
                          })
                        ]
                      })
                    ]
                  }, Z.id))
                })
              ]
            })
          ]
        })
      ]
    });
  }
  Av.createRoot(document.getElementById("root")).render(B.jsx(It.StrictMode, {
    children: B.jsx(jv, {})
  }));
})();
