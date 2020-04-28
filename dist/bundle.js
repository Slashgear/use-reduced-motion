!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t(require("react")))
    : "function" == typeof define && define.amd
    ? define("useReduceMotion", ["react"], t)
    : "object" == typeof exports
    ? (exports.useReduceMotion = t(require("react")))
    : (e.useReduceMotion = t(e.react));
})(window, function (e) {
  return (function (e) {
    var t = {};
    function r(n) {
      if (t[n]) return t[n].exports;
      var o = (t[n] = { i: n, l: !1, exports: {} });
      return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
    }
    return (
      (r.m = e),
      (r.c = t),
      (r.d = function (e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
      }),
      (r.r = function (e) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      }),
      (r.t = function (e, t) {
        if ((1 & t && (e = r(e)), 8 & t)) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (
          (r.r(n),
          Object.defineProperty(n, "default", { enumerable: !0, value: e }),
          2 & t && "string" != typeof e)
        )
          for (var o in e)
            r.d(
              n,
              o,
              function (t) {
                return e[t];
              }.bind(null, o)
            );
        return n;
      }),
      (r.n = function (e) {
        var t =
          e && e.__esModule
            ? function () {
                return e.default;
              }
            : function () {
                return e;
              };
        return r.d(t, "a", t), t;
      }),
      (r.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
      }),
      (r.p = ""),
      r((r.s = 1))
    );
  })([
    function (t, r) {
      t.exports = e;
    },
    function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, "useReduceMotion", function () {
          return c;
        });
      var n = r(0);
      function o(e, t) {
        return (
          (function (e) {
            if (Array.isArray(e)) return e;
          })(e) ||
          (function (e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
              return;
            var r = [],
              n = !0,
              o = !1,
              u = void 0;
            try {
              for (
                var i, c = e[Symbol.iterator]();
                !(n = (i = c.next()).done) &&
                (r.push(i.value), !t || r.length !== t);
                n = !0
              );
            } catch (e) {
              (o = !0), (u = e);
            } finally {
              try {
                n || null == c.return || c.return();
              } finally {
                if (o) throw u;
              }
            }
            return r;
          })(e, t) ||
          (function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return u(e, t);
            var r = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === r && e.constructor && (r = e.constructor.name);
            if ("Map" === r || "Set" === r) return Array.from(r);
            if (
              "Arguments" === r ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
            )
              return u(e, t);
          })(e, t) ||
          (function () {
            throw new TypeError(
              "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          })()
        );
      }
      function u(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n;
      }
      var i = window && window.matchMedia("(prefers-reduced-motion: reduce)"),
        c = function () {
          var e = o(Object(n.useState)(!1), 2),
            t = e[0],
            r = e[1],
            u = Object(n.useCallback)(function () {
              r(!!i.matches);
            }, []);
          return (
            Object(n.useEffect)(
              function () {
                return (
                  r(!!i.matches),
                  i.addEventListener("change", u),
                  function () {
                    i.removeEventListener("change", u);
                  }
                );
              },
              [u]
            ),
            t
          );
        };
    },
  ]);
});
