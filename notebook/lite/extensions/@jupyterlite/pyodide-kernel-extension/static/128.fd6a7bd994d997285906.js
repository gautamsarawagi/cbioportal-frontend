(self.webpackChunk_jupyterlite_pyodide_kernel_extension =
    self.webpackChunk_jupyterlite_pyodide_kernel_extension || []).push([
    [128],
    {
        664: t => {
            var e,
                i,
                a = (t.exports = {});
            function n() {
                throw new Error('setTimeout has not been defined');
            }
            function o() {
                throw new Error('clearTimeout has not been defined');
            }
            function r(t) {
                if (e === setTimeout) return setTimeout(t, 0);
                if ((e === n || !e) && setTimeout)
                    return (e = setTimeout), setTimeout(t, 0);
                try {
                    return e(t, 0);
                } catch (i) {
                    try {
                        return e.call(null, t, 0);
                    } catch (i) {
                        return e.call(this, t, 0);
                    }
                }
            }
            !(function() {
                try {
                    e = 'function' == typeof setTimeout ? setTimeout : n;
                } catch (t) {
                    e = n;
                }
                try {
                    i = 'function' == typeof clearTimeout ? clearTimeout : o;
                } catch (t) {
                    i = o;
                }
            })();
            var l,
                p = [],
                s = !1,
                c = -1;
            function d() {
                s &&
                    l &&
                    ((s = !1),
                    l.length ? (p = l.concat(p)) : (c = -1),
                    p.length && m());
            }
            function m() {
                if (!s) {
                    var t = r(d);
                    s = !0;
                    for (var e = p.length; e; ) {
                        for (l = p, p = []; ++c < e; ) l && l[c].run();
                        (c = -1), (e = p.length);
                    }
                    (l = null),
                        (s = !1),
                        (function(t) {
                            if (i === clearTimeout) return clearTimeout(t);
                            if ((i === o || !i) && clearTimeout)
                                return (i = clearTimeout), clearTimeout(t);
                            try {
                                return i(t);
                            } catch (e) {
                                try {
                                    return i.call(null, t);
                                } catch (e) {
                                    return i.call(this, t);
                                }
                            }
                        })(t);
                }
            }
            function u(t, e) {
                (this.fun = t), (this.array = e);
            }
            function f() {}
            (a.nextTick = function(t) {
                var e = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var i = 1; i < arguments.length; i++)
                        e[i - 1] = arguments[i];
                p.push(new u(t, e)), 1 !== p.length || s || r(m);
            }),
                (u.prototype.run = function() {
                    this.fun.apply(null, this.array);
                }),
                (a.title = 'browser'),
                (a.browser = !0),
                (a.env = {}),
                (a.argv = []),
                (a.version = ''),
                (a.versions = {}),
                (a.on = f),
                (a.addListener = f),
                (a.once = f),
                (a.off = f),
                (a.removeListener = f),
                (a.removeAllListeners = f),
                (a.emit = f),
                (a.prependListener = f),
                (a.prependOnceListener = f),
                (a.listeners = function(t) {
                    return [];
                }),
                (a.binding = function(t) {
                    throw new Error('process.binding is not supported');
                }),
                (a.cwd = function() {
                    return '/';
                }),
                (a.chdir = function(t) {
                    throw new Error('process.chdir is not supported');
                }),
                (a.umask = function() {
                    return 0;
                });
        },
        128: (
            __unused_webpack_module,
            __webpack_exports__,
            __webpack_require__
        ) => {
            'use strict';
            __webpack_require__.d(__webpack_exports__, { E: () => Yt });
            var process = __webpack_require__(664),
                ni = Object.create,
                Me = Object.defineProperty,
                ai = Object.getOwnPropertyDescriptor,
                oi = Object.getOwnPropertyNames,
                si = Object.getPrototypeOf,
                ri = Object.prototype.hasOwnProperty,
                ce = (t, e) => () => (t && (e = t((t = 0))), e),
                F = (t, e) => () => (
                    e || t((e = { exports: {} }).exports, e), e.exports
                ),
                li = (t, e) => {
                    for (var i in e) Me(t, i, { get: e[i], enumerable: !0 });
                },
                ci = (t, e, i, a) => {
                    if ((e && 'object' == typeof e) || 'function' == typeof e)
                        for (let n of oi(e))
                            !ri.call(t, n) &&
                                n !== i &&
                                Me(t, n, {
                                    get: () => e[n],
                                    enumerable: !(a = ai(e, n)) || a.enumerable,
                                });
                    return t;
                },
                se = (t, e, i) => (
                    (i = null != t ? ni(si(t)) : {}),
                    ci(
                        !e && t && t.__esModule
                            ? i
                            : Me(i, 'default', { value: t, enumerable: !0 }),
                        t
                    )
                ),
                Ye = F((t, e) => {
                    var i, a;
                    (i = t),
                        (a = function(t) {
                            function e(t, e) {
                                let i = 0;
                                for (let a of t)
                                    if (!1 === e(a, i++)) return !1;
                                return !0;
                            }
                            var i;
                            (t.ArrayExt = void 0),
                                (function(t) {
                                    function e(t, e, i = 0, a = -1) {
                                        let n,
                                            o = t.length;
                                        if (0 === o) return -1;
                                        (i =
                                            i < 0
                                                ? Math.max(0, i + o)
                                                : Math.min(i, o - 1)),
                                            (n =
                                                (a =
                                                    a < 0
                                                        ? Math.max(0, a + o)
                                                        : Math.min(a, o - 1)) <
                                                i
                                                    ? a + 1 + (o - i)
                                                    : a - i + 1);
                                        for (let a = 0; a < n; ++a) {
                                            let n = (i + a) % o;
                                            if (t[n] === e) return n;
                                        }
                                        return -1;
                                    }
                                    function i(t, e, i = -1, a = 0) {
                                        let n,
                                            o = t.length;
                                        if (0 === o) return -1;
                                        n =
                                            (i =
                                                i < 0
                                                    ? Math.max(0, i + o)
                                                    : Math.min(i, o - 1)) <
                                            (a =
                                                a < 0
                                                    ? Math.max(0, a + o)
                                                    : Math.min(a, o - 1))
                                                ? i + 1 + (o - a)
                                                : i - a + 1;
                                        for (let a = 0; a < n; ++a) {
                                            let n = (i - a + o) % o;
                                            if (t[n] === e) return n;
                                        }
                                        return -1;
                                    }
                                    function a(t, e, i = 0, a = -1) {
                                        let n,
                                            o = t.length;
                                        if (0 === o) return -1;
                                        (i =
                                            i < 0
                                                ? Math.max(0, i + o)
                                                : Math.min(i, o - 1)),
                                            (n =
                                                (a =
                                                    a < 0
                                                        ? Math.max(0, a + o)
                                                        : Math.min(a, o - 1)) <
                                                i
                                                    ? a + 1 + (o - i)
                                                    : a - i + 1);
                                        for (let a = 0; a < n; ++a) {
                                            let n = (i + a) % o;
                                            if (e(t[n], n)) return n;
                                        }
                                        return -1;
                                    }
                                    function n(t, e, i = -1, a = 0) {
                                        let n,
                                            o = t.length;
                                        if (0 === o) return -1;
                                        n =
                                            (i =
                                                i < 0
                                                    ? Math.max(0, i + o)
                                                    : Math.min(i, o - 1)) <
                                            (a =
                                                a < 0
                                                    ? Math.max(0, a + o)
                                                    : Math.min(a, o - 1))
                                                ? i + 1 + (o - a)
                                                : i - a + 1;
                                        for (let a = 0; a < n; ++a) {
                                            let n = (i - a + o) % o;
                                            if (e(t[n], n)) return n;
                                        }
                                        return -1;
                                    }
                                    function o(t, e = 0, i = -1) {
                                        let a = t.length;
                                        if (!(a <= 1))
                                            for (
                                                e =
                                                    e < 0
                                                        ? Math.max(0, e + a)
                                                        : Math.min(e, a - 1),
                                                    i =
                                                        i < 0
                                                            ? Math.max(0, i + a)
                                                            : Math.min(
                                                                  i,
                                                                  a - 1
                                                              );
                                                e < i;

                                            ) {
                                                let a = t[e],
                                                    n = t[i];
                                                (t[e++] = n), (t[i--] = a);
                                            }
                                    }
                                    function r(t, e) {
                                        let i = t.length;
                                        if (
                                            (e < 0 && (e += i), e < 0 || e >= i)
                                        )
                                            return;
                                        let a = t[e];
                                        for (let a = e + 1; a < i; ++a)
                                            t[a - 1] = t[a];
                                        return (t.length = i - 1), a;
                                    }
                                    (t.firstIndexOf = e),
                                        (t.lastIndexOf = i),
                                        (t.findFirstIndex = a),
                                        (t.findLastIndex = n),
                                        (t.findFirstValue = function(
                                            t,
                                            e,
                                            i = 0,
                                            n = -1
                                        ) {
                                            let o = a(t, e, i, n);
                                            return -1 !== o ? t[o] : void 0;
                                        }),
                                        (t.findLastValue = function(
                                            t,
                                            e,
                                            i = -1,
                                            a = 0
                                        ) {
                                            let o = n(t, e, i, a);
                                            return -1 !== o ? t[o] : void 0;
                                        }),
                                        (t.lowerBound = function(
                                            t,
                                            e,
                                            i,
                                            a = 0,
                                            n = -1
                                        ) {
                                            let o = t.length;
                                            if (0 === o) return 0;
                                            let r = (a =
                                                    a < 0
                                                        ? Math.max(0, a + o)
                                                        : Math.min(a, o - 1)),
                                                l =
                                                    (n =
                                                        n < 0
                                                            ? Math.max(0, n + o)
                                                            : Math.min(
                                                                  n,
                                                                  o - 1
                                                              )) -
                                                    a +
                                                    1;
                                            for (; l > 0; ) {
                                                let a = l >> 1,
                                                    n = r + a;
                                                i(t[n], e) < 0
                                                    ? ((r = n + 1),
                                                      (l -= a + 1))
                                                    : (l = a);
                                            }
                                            return r;
                                        }),
                                        (t.upperBound = function(
                                            t,
                                            e,
                                            i,
                                            a = 0,
                                            n = -1
                                        ) {
                                            let o = t.length;
                                            if (0 === o) return 0;
                                            let r = (a =
                                                    a < 0
                                                        ? Math.max(0, a + o)
                                                        : Math.min(a, o - 1)),
                                                l =
                                                    (n =
                                                        n < 0
                                                            ? Math.max(0, n + o)
                                                            : Math.min(
                                                                  n,
                                                                  o - 1
                                                              )) -
                                                    a +
                                                    1;
                                            for (; l > 0; ) {
                                                let a = l >> 1,
                                                    n = r + a;
                                                i(t[n], e) > 0
                                                    ? (l = a)
                                                    : ((r = n + 1),
                                                      (l -= a + 1));
                                            }
                                            return r;
                                        }),
                                        (t.shallowEqual = function(t, e, i) {
                                            if (t === e) return !0;
                                            if (t.length !== e.length)
                                                return !1;
                                            for (
                                                let a = 0, n = t.length;
                                                a < n;
                                                ++a
                                            )
                                                if (
                                                    i
                                                        ? !i(t[a], e[a])
                                                        : t[a] !== e[a]
                                                )
                                                    return !1;
                                            return !0;
                                        }),
                                        (t.slice = function(t, e = {}) {
                                            let {
                                                start: i,
                                                stop: a,
                                                step: n,
                                            } = e;
                                            if (
                                                (void 0 === n && (n = 1),
                                                0 === n)
                                            )
                                                throw new Error(
                                                    'Slice `step` cannot be zero.'
                                                );
                                            let o,
                                                r = t.length;
                                            void 0 === i
                                                ? (i = n < 0 ? r - 1 : 0)
                                                : i < 0
                                                ? (i = Math.max(
                                                      i + r,
                                                      n < 0 ? -1 : 0
                                                  ))
                                                : i >= r &&
                                                  (i = n < 0 ? r - 1 : r),
                                                void 0 === a
                                                    ? (a = n < 0 ? -1 : r)
                                                    : a < 0
                                                    ? (a = Math.max(
                                                          a + r,
                                                          n < 0 ? -1 : 0
                                                      ))
                                                    : a >= r &&
                                                      (a = n < 0 ? r - 1 : r),
                                                (o =
                                                    (n < 0 && a >= i) ||
                                                    (n > 0 && i >= a)
                                                        ? 0
                                                        : n < 0
                                                        ? Math.floor(
                                                              (a - i + 1) / n +
                                                                  1
                                                          )
                                                        : Math.floor(
                                                              (a - i - 1) / n +
                                                                  1
                                                          ));
                                            let l = [];
                                            for (let e = 0; e < o; ++e)
                                                l[e] = t[i + e * n];
                                            return l;
                                        }),
                                        (t.move = function(t, e, i) {
                                            let a = t.length;
                                            if (
                                                a <= 1 ||
                                                (e =
                                                    e < 0
                                                        ? Math.max(0, e + a)
                                                        : Math.min(
                                                              e,
                                                              a - 1
                                                          )) ===
                                                    (i =
                                                        i < 0
                                                            ? Math.max(0, i + a)
                                                            : Math.min(
                                                                  i,
                                                                  a - 1
                                                              ))
                                            )
                                                return;
                                            let n = t[e],
                                                o = e < i ? 1 : -1;
                                            for (let a = e; a !== i; a += o)
                                                t[a] = t[a + o];
                                            t[i] = n;
                                        }),
                                        (t.reverse = o),
                                        (t.rotate = function(
                                            t,
                                            e,
                                            i = 0,
                                            a = -1
                                        ) {
                                            let n = t.length;
                                            if (
                                                n <= 1 ||
                                                (i =
                                                    i < 0
                                                        ? Math.max(0, i + n)
                                                        : Math.min(i, n - 1)) >=
                                                    (a =
                                                        a < 0
                                                            ? Math.max(0, a + n)
                                                            : Math.min(
                                                                  a,
                                                                  n - 1
                                                              ))
                                            )
                                                return;
                                            let r = a - i + 1;
                                            if (
                                                (e > 0
                                                    ? (e %= r)
                                                    : e < 0 &&
                                                      (e = ((e % r) + r) % r),
                                                0 === e)
                                            )
                                                return;
                                            let l = i + e;
                                            o(t, i, l - 1),
                                                o(t, l, a),
                                                o(t, i, a);
                                        }),
                                        (t.fill = function(
                                            t,
                                            e,
                                            i = 0,
                                            a = -1
                                        ) {
                                            let n,
                                                o = t.length;
                                            if (0 !== o) {
                                                (i =
                                                    i < 0
                                                        ? Math.max(0, i + o)
                                                        : Math.min(i, o - 1)),
                                                    (n =
                                                        (a =
                                                            a < 0
                                                                ? Math.max(
                                                                      0,
                                                                      a + o
                                                                  )
                                                                : Math.min(
                                                                      a,
                                                                      o - 1
                                                                  )) < i
                                                            ? a + 1 + (o - i)
                                                            : a - i + 1);
                                                for (let a = 0; a < n; ++a)
                                                    t[(i + a) % o] = e;
                                            }
                                        }),
                                        (t.insert = function(t, e, i) {
                                            let a = t.length;
                                            e =
                                                e < 0
                                                    ? Math.max(0, e + a)
                                                    : Math.min(e, a);
                                            for (let i = a; i > e; --i)
                                                t[i] = t[i - 1];
                                            t[e] = i;
                                        }),
                                        (t.removeAt = r),
                                        (t.removeFirstOf = function(
                                            t,
                                            i,
                                            a = 0,
                                            n = -1
                                        ) {
                                            let o = e(t, i, a, n);
                                            return -1 !== o && r(t, o), o;
                                        }),
                                        (t.removeLastOf = function(
                                            t,
                                            e,
                                            a = -1,
                                            n = 0
                                        ) {
                                            let o = i(t, e, a, n);
                                            return -1 !== o && r(t, o), o;
                                        }),
                                        (t.removeAllOf = function(
                                            t,
                                            e,
                                            i = 0,
                                            a = -1
                                        ) {
                                            let n = t.length;
                                            if (0 === n) return 0;
                                            (i =
                                                i < 0
                                                    ? Math.max(0, i + n)
                                                    : Math.min(i, n - 1)),
                                                (a =
                                                    a < 0
                                                        ? Math.max(0, a + n)
                                                        : Math.min(a, n - 1));
                                            let o = 0;
                                            for (let r = 0; r < n; ++r)
                                                (i <= a &&
                                                    r >= i &&
                                                    r <= a &&
                                                    t[r] === e) ||
                                                (a < i &&
                                                    (r <= a || r >= i) &&
                                                    t[r] === e)
                                                    ? o++
                                                    : o > 0 &&
                                                      (t[r - o] = t[r]);
                                            return (
                                                o > 0 && (t.length = n - o), o
                                            );
                                        }),
                                        (t.removeFirstWhere = function(
                                            t,
                                            e,
                                            i = 0,
                                            n = -1
                                        ) {
                                            let o,
                                                l = a(t, e, i, n);
                                            return (
                                                -1 !== l && (o = r(t, l)),
                                                { index: l, value: o }
                                            );
                                        }),
                                        (t.removeLastWhere = function(
                                            t,
                                            e,
                                            i = -1,
                                            a = 0
                                        ) {
                                            let o,
                                                l = n(t, e, i, a);
                                            return (
                                                -1 !== l && (o = r(t, l)),
                                                { index: l, value: o }
                                            );
                                        }),
                                        (t.removeAllWhere = function(
                                            t,
                                            e,
                                            i = 0,
                                            a = -1
                                        ) {
                                            let n = t.length;
                                            if (0 === n) return 0;
                                            (i =
                                                i < 0
                                                    ? Math.max(0, i + n)
                                                    : Math.min(i, n - 1)),
                                                (a =
                                                    a < 0
                                                        ? Math.max(0, a + n)
                                                        : Math.min(a, n - 1));
                                            let o = 0;
                                            for (let r = 0; r < n; ++r)
                                                (i <= a &&
                                                    r >= i &&
                                                    r <= a &&
                                                    e(t[r], r)) ||
                                                (a < i &&
                                                    (r <= a || r >= i) &&
                                                    e(t[r], r))
                                                    ? o++
                                                    : o > 0 &&
                                                      (t[r - o] = t[r]);
                                            return (
                                                o > 0 && (t.length = n - o), o
                                            );
                                        });
                                })(t.ArrayExt || (t.ArrayExt = {})),
                                ((i || (i = {})).rangeLength = function(
                                    t,
                                    e,
                                    i
                                ) {
                                    return 0 === i
                                        ? 1 / 0
                                        : (t > e && i > 0) || (t < e && i < 0)
                                        ? 0
                                        : Math.ceil((e - t) / i);
                                }),
                                (t.StringExt = void 0),
                                (function(t) {
                                    function e(t, e, i = 0) {
                                        let a = new Array(e.length);
                                        for (
                                            let n = 0, o = i, r = e.length;
                                            n < r;
                                            ++n, ++o
                                        ) {
                                            if (
                                                ((o = t.indexOf(e[n], o)),
                                                -1 === o)
                                            )
                                                return null;
                                            a[n] = o;
                                        }
                                        return a;
                                    }
                                    (t.findIndices = e),
                                        (t.matchSumOfSquares = function(
                                            t,
                                            i,
                                            a = 0
                                        ) {
                                            let n = e(t, i, a);
                                            if (!n) return null;
                                            let o = 0;
                                            for (
                                                let t = 0, e = n.length;
                                                t < e;
                                                ++t
                                            ) {
                                                let e = n[t] - a;
                                                o += e * e;
                                            }
                                            return { score: o, indices: n };
                                        }),
                                        (t.matchSumOfDeltas = function(
                                            t,
                                            i,
                                            a = 0
                                        ) {
                                            let n = e(t, i, a);
                                            if (!n) return null;
                                            let o = 0,
                                                r = a - 1;
                                            for (
                                                let t = 0, e = n.length;
                                                t < e;
                                                ++t
                                            ) {
                                                let e = n[t];
                                                (o += e - r - 1), (r = e);
                                            }
                                            return { score: o, indices: n };
                                        }),
                                        (t.highlight = function(t, e, i) {
                                            let a = [],
                                                n = 0,
                                                o = 0,
                                                r = e.length;
                                            for (; n < r; ) {
                                                let l = e[n],
                                                    p = e[n];
                                                for (
                                                    ;
                                                    ++n < r && e[n] === p + 1;

                                                )
                                                    p++;
                                                o < l && a.push(t.slice(o, l)),
                                                    l < p + 1 &&
                                                        a.push(
                                                            i(t.slice(l, p + 1))
                                                        ),
                                                    (o = p + 1);
                                            }
                                            return (
                                                o < t.length &&
                                                    a.push(t.slice(o)),
                                                a
                                            );
                                        }),
                                        (t.cmp = function(t, e) {
                                            return t < e ? -1 : t > e ? 1 : 0;
                                        });
                                })(t.StringExt || (t.StringExt = {})),
                                (t.chain = function*(...t) {
                                    for (let e of t) yield* e;
                                }),
                                (t.each = function(t, e) {
                                    let i = 0;
                                    for (let a of t)
                                        if (!1 === e(a, i++)) return;
                                }),
                                (t.empty = function*() {}),
                                (t.enumerate = function*(t, e = 0) {
                                    for (let i of t) yield [e++, i];
                                }),
                                (t.every = e),
                                (t.filter = function*(t, e) {
                                    let i = 0;
                                    for (let a of t) e(a, i++) && (yield a);
                                }),
                                (t.find = function(t, e) {
                                    let i = 0;
                                    for (let a of t) if (e(a, i++)) return a;
                                }),
                                (t.findIndex = function(t, e) {
                                    let i = 0;
                                    for (let a of t)
                                        if (e(a, i++)) return i - 1;
                                    return -1;
                                }),
                                (t.map = function*(t, e) {
                                    let i = 0;
                                    for (let a of t) yield e(a, i++);
                                }),
                                (t.max = function(t, e) {
                                    let i;
                                    for (let a of t)
                                        void 0 !== i
                                            ? e(a, i) > 0 && (i = a)
                                            : (i = a);
                                    return i;
                                }),
                                (t.min = function(t, e) {
                                    let i;
                                    for (let a of t)
                                        void 0 !== i
                                            ? e(a, i) < 0 && (i = a)
                                            : (i = a);
                                    return i;
                                }),
                                (t.minmax = function(t, e) {
                                    let i,
                                        a,
                                        n = !0;
                                    for (let o of t)
                                        n
                                            ? ((i = o), (a = o), (n = !1))
                                            : e(o, i) < 0
                                            ? (i = o)
                                            : e(o, a) > 0 && (a = o);
                                    return n ? void 0 : [i, a];
                                }),
                                (t.once = function*(t) {
                                    yield t;
                                }),
                                (t.range = function*(t, e, a) {
                                    void 0 === e
                                        ? ((e = t), (t = 0), (a = 1))
                                        : void 0 === a && (a = 1);
                                    let n = i.rangeLength(t, e, a);
                                    for (let e = 0; e < n; e++) yield t + a * e;
                                }),
                                (t.reduce = function(t, e, i) {
                                    let a = t[Symbol.iterator](),
                                        n = 0,
                                        o = a.next();
                                    if (o.done && void 0 === i)
                                        throw new TypeError(
                                            'Reduce of empty iterable with no initial value.'
                                        );
                                    if (o.done) return i;
                                    let r,
                                        l,
                                        p = a.next();
                                    if (p.done && void 0 === i) return o.value;
                                    if (p.done) return e(i, o.value, n++);
                                    for (
                                        r = e(
                                            void 0 === i
                                                ? o.value
                                                : e(i, o.value, n++),
                                            p.value,
                                            n++
                                        );
                                        !(l = a.next()).done;

                                    )
                                        r = e(r, l.value, n++);
                                    return r;
                                }),
                                (t.repeat = function*(t, e) {
                                    for (; 0 < e--; ) yield t;
                                }),
                                (t.retro = function*(t) {
                                    if ('function' == typeof t.retro)
                                        yield* t.retro();
                                    else
                                        for (let e = t.length - 1; e > -1; e--)
                                            yield t[e];
                                }),
                                (t.some = function(t, e) {
                                    let i = 0;
                                    for (let a of t) if (e(a, i++)) return !0;
                                    return !1;
                                }),
                                (t.stride = function*(t, e) {
                                    let i = 0;
                                    for (let a of t) i++ % e == 0 && (yield a);
                                }),
                                (t.take = function*(t, e) {
                                    if (e < 1) return;
                                    let i,
                                        a = t[Symbol.iterator]();
                                    for (; 0 < e-- && !(i = a.next()).done; )
                                        yield i.value;
                                }),
                                (t.toArray = function(t) {
                                    return Array.from(t);
                                }),
                                (t.toObject = function(t) {
                                    let e = {};
                                    for (let [i, a] of t) e[i] = a;
                                    return e;
                                }),
                                (t.topologicSort = function(t) {
                                    let e = [],
                                        i = new Set(),
                                        a = new Map();
                                    for (let e of t) n(e);
                                    for (let [t] of a) o(t);
                                    return e;
                                    function n(t) {
                                        let [e, i] = t,
                                            n = a.get(i);
                                        n ? n.push(e) : a.set(i, [e]);
                                    }
                                    function o(t) {
                                        if (i.has(t)) return;
                                        i.add(t);
                                        let n = a.get(t);
                                        if (n) for (let t of n) o(t);
                                        e.push(t);
                                    }
                                }),
                                (t.zip = function*(...t) {
                                    let i = t.map(t => t[Symbol.iterator]()),
                                        a = i.map(t => t.next());
                                    for (
                                        ;
                                        e(a, t => !t.done);
                                        a = i.map(t => t.next())
                                    )
                                        yield a.map(t => t.value);
                                });
                        }),
                        'object' == typeof t && void 0 !== e
                            ? a(t)
                            : 'function' == typeof define &&
                              __webpack_require__.amdO
                            ? define(['exports'], a)
                            : a(
                                  ((i =
                                      'undefined' != typeof globalThis
                                          ? globalThis
                                          : i || self).lumino_algorithm = {})
                              );
                }),
                pe = F((t, e) => {
                    var i, a;
                    (i = t),
                        (a = function(t) {
                            function e(t) {
                                let e = 0;
                                for (let i = 0, a = t.length; i < a; ++i)
                                    i % 4 == 0 &&
                                        (e =
                                            (4294967295 * Math.random()) >>> 0),
                                        (t[i] = 255 & e),
                                        (e >>>= 8);
                            }
                            (t.JSONExt = void 0),
                                (function(t) {
                                    function e(t) {
                                        return (
                                            null === t ||
                                            'boolean' == typeof t ||
                                            'number' == typeof t ||
                                            'string' == typeof t
                                        );
                                    }
                                    function i(t) {
                                        return Array.isArray(t);
                                    }
                                    (t.emptyObject = Object.freeze({})),
                                        (t.emptyArray = Object.freeze([])),
                                        (t.isPrimitive = e),
                                        (t.isArray = i),
                                        (t.isObject = function(t) {
                                            return !e(t) && !i(t);
                                        }),
                                        (t.deepEqual = function t(a, n) {
                                            if (a === n) return !0;
                                            if (e(a) || e(n)) return !1;
                                            let o = i(a),
                                                r = i(n);
                                            return (
                                                o === r &&
                                                (o && r
                                                    ? (function(e, i) {
                                                          if (e === i)
                                                              return !0;
                                                          if (
                                                              e.length !==
                                                              i.length
                                                          )
                                                              return !1;
                                                          for (
                                                              let a = 0,
                                                                  n = e.length;
                                                              a < n;
                                                              ++a
                                                          )
                                                              if (
                                                                  !t(e[a], i[a])
                                                              )
                                                                  return !1;
                                                          return !0;
                                                      })(a, n)
                                                    : (function(e, i) {
                                                          if (e === i)
                                                              return !0;
                                                          for (let t in e)
                                                              if (
                                                                  void 0 !==
                                                                      e[t] &&
                                                                  !(t in i)
                                                              )
                                                                  return !1;
                                                          for (let t in i)
                                                              if (
                                                                  void 0 !==
                                                                      i[t] &&
                                                                  !(t in e)
                                                              )
                                                                  return !1;
                                                          for (let a in e) {
                                                              let n = e[a],
                                                                  o = i[a];
                                                              if (
                                                                  !(
                                                                      (void 0 ===
                                                                          n &&
                                                                          void 0 ===
                                                                              o) ||
                                                                      (void 0 !==
                                                                          n &&
                                                                          void 0 !==
                                                                              o &&
                                                                          t(
                                                                              n,
                                                                              o
                                                                          ))
                                                                  )
                                                              )
                                                                  return !1;
                                                          }
                                                          return !0;
                                                      })(a, n))
                                            );
                                        }),
                                        (t.deepCopy = function t(a) {
                                            return e(a)
                                                ? a
                                                : i(a)
                                                ? (function(e) {
                                                      let i = new Array(
                                                          e.length
                                                      );
                                                      for (
                                                          let a = 0,
                                                              n = e.length;
                                                          a < n;
                                                          ++a
                                                      )
                                                          i[a] = t(e[a]);
                                                      return i;
                                                  })(a)
                                                : (function(e) {
                                                      let i = {};
                                                      for (let a in e) {
                                                          let n = e[a];
                                                          void 0 !== n &&
                                                              (i[a] = t(n));
                                                      }
                                                      return i;
                                                  })(a);
                                        });
                                })(t.JSONExt || (t.JSONExt = {})),
                                (t.Random = void 0),
                                ((
                                    t.Random || (t.Random = {})
                                ).getRandomValues = (() => {
                                    let t =
                                        ('undefined' != typeof window &&
                                            (window.crypto ||
                                                window.msCrypto)) ||
                                        null;
                                    return t &&
                                        'function' == typeof t.getRandomValues
                                        ? function(e) {
                                              return t.getRandomValues(e);
                                          }
                                        : e;
                                })()),
                                (t.UUID = void 0),
                                ((t.UUID || (t.UUID = {})).uuid4 = (function(
                                    t
                                ) {
                                    let e = new Uint8Array(16),
                                        i = new Array(256);
                                    for (let t = 0; t < 16; ++t)
                                        i[t] = '0' + t.toString(16);
                                    for (let t = 16; t < 256; ++t)
                                        i[t] = t.toString(16);
                                    return function() {
                                        return (
                                            t(e),
                                            (e[6] = 64 | (15 & e[6])),
                                            (e[8] = 128 | (63 & e[8])),
                                            i[e[0]] +
                                                i[e[1]] +
                                                i[e[2]] +
                                                i[e[3]] +
                                                '-' +
                                                i[e[4]] +
                                                i[e[5]] +
                                                '-' +
                                                i[e[6]] +
                                                i[e[7]] +
                                                '-' +
                                                i[e[8]] +
                                                i[e[9]] +
                                                '-' +
                                                i[e[10]] +
                                                i[e[11]] +
                                                i[e[12]] +
                                                i[e[13]] +
                                                i[e[14]] +
                                                i[e[15]]
                                        );
                                    };
                                })(t.Random.getRandomValues)),
                                (t.MimeData = class {
                                    constructor() {
                                        (this._types = []), (this._values = []);
                                    }
                                    types() {
                                        return this._types.slice();
                                    }
                                    hasData(t) {
                                        return -1 !== this._types.indexOf(t);
                                    }
                                    getData(t) {
                                        let e = this._types.indexOf(t);
                                        return -1 !== e
                                            ? this._values[e]
                                            : void 0;
                                    }
                                    setData(t, e) {
                                        this.clearData(t),
                                            this._types.push(t),
                                            this._values.push(e);
                                    }
                                    clearData(t) {
                                        let e = this._types.indexOf(t);
                                        -1 !== e &&
                                            (this._types.splice(e, 1),
                                            this._values.splice(e, 1));
                                    }
                                    clear() {
                                        (this._types.length = 0),
                                            (this._values.length = 0);
                                    }
                                }),
                                (t.PromiseDelegate = class {
                                    constructor() {
                                        this.promise = new Promise((t, e) => {
                                            (this._resolve = t),
                                                (this._reject = e);
                                        });
                                    }
                                    resolve(t) {
                                        (0, this._resolve)(t);
                                    }
                                    reject(t) {
                                        (0, this._reject)(t);
                                    }
                                }),
                                (t.Token = class {
                                    constructor(t, e) {
                                        (this.name = t),
                                            (this.description =
                                                null != e ? e : ''),
                                            (this._tokenStructuralPropertyT = null);
                                    }
                                });
                        }),
                        'object' == typeof t && void 0 !== e
                            ? a(t)
                            : 'function' == typeof define &&
                              __webpack_require__.amdO
                            ? define(['exports'], a)
                            : a(
                                  ((i =
                                      'undefined' != typeof globalThis
                                          ? globalThis
                                          : i || self).lumino_coreutils = {})
                              );
                }),
                Xe = F((t, e) => {
                    var i, a;
                    (i = t),
                        (a = function(t, e, i) {
                            class a {
                                constructor(t) {
                                    this.sender = t;
                                }
                                connect(t, e) {
                                    return o.connect(this, t, e);
                                }
                                disconnect(t, e) {
                                    return o.disconnect(this, t, e);
                                }
                                emit(t) {
                                    o.emit(this, t);
                                }
                            }
                            var n, o;
                            ((n = a || (a = {})).disconnectBetween = function(
                                t,
                                e
                            ) {
                                o.disconnectBetween(t, e);
                            }),
                                (n.disconnectSender = function(t) {
                                    o.disconnectSender(t);
                                }),
                                (n.disconnectReceiver = function(t) {
                                    o.disconnectReceiver(t);
                                }),
                                (n.disconnectAll = function(t) {
                                    o.disconnectAll(t);
                                }),
                                (n.clearData = function(t) {
                                    o.disconnectAll(t);
                                }),
                                (n.getExceptionHandler = function() {
                                    return o.exceptionHandler;
                                }),
                                (n.setExceptionHandler = function(t) {
                                    let e = o.exceptionHandler;
                                    return (o.exceptionHandler = t), e;
                                });
                            class r extends a {
                                constructor() {
                                    super(...arguments),
                                        (this._pending = new i.PromiseDelegate());
                                }
                                async *[Symbol.asyncIterator]() {
                                    let t = this._pending;
                                    for (;;)
                                        try {
                                            let {
                                                args: e,
                                                next: i,
                                            } = await t.promise;
                                            (t = i), yield e;
                                        } catch {
                                            return;
                                        }
                                }
                                emit(t) {
                                    let e = this._pending,
                                        a = (this._pending = new i.PromiseDelegate());
                                    e.resolve({ args: t, next: a }),
                                        super.emit(t);
                                }
                                stop() {
                                    this._pending.promise.catch(() => {}),
                                        this._pending.reject('stop'),
                                        (this._pending = new i.PromiseDelegate());
                                }
                            }
                            (function(t) {
                                function i(t) {
                                    let e = n.get(t);
                                    if (e && 0 !== e.length) {
                                        for (let t of e) {
                                            if (!t.signal) continue;
                                            let e = t.thisArg || t.slot;
                                            (t.signal = null), c(o.get(e));
                                        }
                                        c(e);
                                    }
                                }
                                function a(t) {
                                    let e = o.get(t);
                                    if (e && 0 !== e.length) {
                                        for (let t of e) {
                                            if (!t.signal) continue;
                                            let e = t.signal.sender;
                                            (t.signal = null), c(n.get(e));
                                        }
                                        c(e);
                                    }
                                }
                                (t.exceptionHandler = t => {
                                    console.error(t);
                                }),
                                    (t.connect = function(t, e, i) {
                                        i = i || void 0;
                                        let a = n.get(t.sender);
                                        if (
                                            (a ||
                                                ((a = []), n.set(t.sender, a)),
                                            p(a, t, e, i))
                                        )
                                            return !1;
                                        let r = i || e,
                                            l = o.get(r);
                                        l || ((l = []), o.set(r, l));
                                        let s = {
                                            signal: t,
                                            slot: e,
                                            thisArg: i,
                                        };
                                        return a.push(s), l.push(s), !0;
                                    }),
                                    (t.disconnect = function(t, e, i) {
                                        i = i || void 0;
                                        let a = n.get(t.sender);
                                        if (!a || 0 === a.length) return !1;
                                        let r = p(a, t, e, i);
                                        if (!r) return !1;
                                        let l = i || e,
                                            s = o.get(l);
                                        return (
                                            (r.signal = null), c(a), c(s), !0
                                        );
                                    }),
                                    (t.disconnectBetween = function(t, e) {
                                        let i = n.get(t);
                                        if (!i || 0 === i.length) return;
                                        let a = o.get(e);
                                        if (a && 0 !== a.length) {
                                            for (let e of a)
                                                e.signal &&
                                                    e.signal.sender === t &&
                                                    (e.signal = null);
                                            c(i), c(a);
                                        }
                                    }),
                                    (t.disconnectSender = i),
                                    (t.disconnectReceiver = a),
                                    (t.disconnectAll = function(t) {
                                        i(t), a(t);
                                    }),
                                    (t.emit = function(t, e) {
                                        let i = n.get(t.sender);
                                        if (i && 0 !== i.length)
                                            for (
                                                let a = 0, n = i.length;
                                                a < n;
                                                ++a
                                            ) {
                                                let n = i[a];
                                                n.signal === t && s(n, e);
                                            }
                                    });
                                let n = new WeakMap(),
                                    o = new WeakMap(),
                                    r = new Set(),
                                    l =
                                        'function' ==
                                        typeof requestAnimationFrame
                                            ? requestAnimationFrame
                                            : setImmediate;
                                function p(t, i, a, n) {
                                    return e.find(
                                        t,
                                        t =>
                                            t.signal === i &&
                                            t.slot === a &&
                                            t.thisArg === n
                                    );
                                }
                                function s(e, i) {
                                    let { signal: a, slot: n, thisArg: o } = e;
                                    try {
                                        n.call(o, a.sender, i);
                                    } catch (e) {
                                        t.exceptionHandler(e);
                                    }
                                }
                                function c(t) {
                                    0 === r.size && l(d), r.add(t);
                                }
                                function d() {
                                    r.forEach(m), r.clear();
                                }
                                function m(t) {
                                    e.ArrayExt.removeAllWhere(t, u);
                                }
                                function u(t) {
                                    return null === t.signal;
                                }
                            })(o || (o = {})),
                                (t.Signal = a),
                                (t.Stream = r);
                        }),
                        'object' == typeof t && void 0 !== e
                            ? a(t, Ye(), pe())
                            : 'function' == typeof define &&
                              __webpack_require__.amdO
                            ? define([
                                  'exports',
                                  '@lumino/algorithm',
                                  '@lumino/coreutils',
                              ], a)
                            : a(
                                  ((i =
                                      'undefined' != typeof globalThis
                                          ? globalThis
                                          : i || self).lumino_signaling = {}),
                                  i.lumino_algorithm,
                                  i.lumino_coreutils
                              );
                }),
                et = F(t => {
                    Object.defineProperty(t, '__esModule', { value: !0 }),
                        (t.ActivityMonitor = void 0);
                    var e = Xe();
                    t.ActivityMonitor = class {
                        constructor(t) {
                            (this._timer = -1),
                                (this._timeout = -1),
                                (this._isDisposed = !1),
                                (this._activityStopped = new e.Signal(this)),
                                t.signal.connect(this._onSignalFired, this),
                                (this._timeout = t.timeout || 1e3);
                        }
                        get activityStopped() {
                            return this._activityStopped;
                        }
                        get timeout() {
                            return this._timeout;
                        }
                        set timeout(t) {
                            this._timeout = t;
                        }
                        get isDisposed() {
                            return this._isDisposed;
                        }
                        dispose() {
                            this._isDisposed ||
                                ((this._isDisposed = !0),
                                e.Signal.clearData(this));
                        }
                        _onSignalFired(t, e) {
                            clearTimeout(this._timer),
                                (this._sender = t),
                                (this._args = e),
                                (this._timer = setTimeout(() => {
                                    this._activityStopped.emit({
                                        sender: this._sender,
                                        args: this._args,
                                    });
                                }, this._timeout));
                        }
                    };
                }),
                it = F(t => {
                    Object.defineProperty(t, '__esModule', { value: !0 });
                }),
                nt = F(t => {
                    Object.defineProperty(t, '__esModule', { value: !0 }),
                        (t.MarkdownCodeBlocks = void 0),
                        (function(t) {
                            t.CODE_BLOCK_MARKER = '```';
                            let e = [
                                '.markdown',
                                '.mdown',
                                '.mkdn',
                                '.md',
                                '.mkd',
                                '.mdwn',
                                '.mdtxt',
                                '.mdtext',
                                '.text',
                                '.txt',
                                '.Rmd',
                            ];
                            class i {
                                constructor(t) {
                                    (this.startLine = t),
                                        (this.code = ''),
                                        (this.endLine = -1);
                                }
                            }
                            (t.MarkdownCodeBlock = i),
                                (t.isMarkdown = function(t) {
                                    return e.indexOf(t) > -1;
                                }),
                                (t.findMarkdownCodeBlocks = function(e) {
                                    if (!e || '' === e) return [];
                                    let a = e.split('\n'),
                                        n = [],
                                        o = null;
                                    for (let e = 0; e < a.length; e++) {
                                        let r = a[e],
                                            l =
                                                0 ===
                                                r.indexOf(t.CODE_BLOCK_MARKER),
                                            p = null != o;
                                        if (l || p)
                                            if (p)
                                                o &&
                                                    (l
                                                        ? ((o.endLine = e - 1),
                                                          n.push(o),
                                                          (o = null))
                                                        : (o.code += r + '\n'));
                                            else {
                                                o = new i(e);
                                                let a = r.indexOf(
                                                        t.CODE_BLOCK_MARKER
                                                    ),
                                                    l = r.lastIndexOf(
                                                        t.CODE_BLOCK_MARKER
                                                    );
                                                a !== l &&
                                                    ((o.code = r.substring(
                                                        a +
                                                            t.CODE_BLOCK_MARKER
                                                                .length,
                                                        l
                                                    )),
                                                    (o.endLine = e),
                                                    n.push(o),
                                                    (o = null));
                                            }
                                    }
                                    return n;
                                });
                        })(t.MarkdownCodeBlocks || (t.MarkdownCodeBlocks = {}));
                }),
                rt = F((t, e) => {
                    function i(t) {
                        return (
                            !(
                                'number' != typeof t &&
                                !/^0x[0-9a-f]+$/i.test(t)
                            ) ||
                            /^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(e[-+]?\d+)?$/.test(t)
                        );
                    }
                    function a(t, e) {
                        return (
                            ('constructor' === e &&
                                'function' == typeof t[e]) ||
                            '__proto__' === e
                        );
                    }
                    e.exports = function(t, e) {
                        e || (e = {});
                        var n = { bools: {}, strings: {}, unknownFn: null };
                        'function' == typeof e.unknown &&
                            (n.unknownFn = e.unknown),
                            'boolean' == typeof e.boolean && e.boolean
                                ? (n.allBools = !0)
                                : []
                                      .concat(e.boolean)
                                      .filter(Boolean)
                                      .forEach(function(t) {
                                          n.bools[t] = !0;
                                      });
                        var o = {};
                        function r(t) {
                            return o[t].some(function(t) {
                                return n.bools[t];
                            });
                        }
                        Object.keys(e.alias || {}).forEach(function(t) {
                            (o[t] = [].concat(e.alias[t])),
                                o[t].forEach(function(e) {
                                    o[e] = [t].concat(
                                        o[t].filter(function(t) {
                                            return e !== t;
                                        })
                                    );
                                });
                        }),
                            []
                                .concat(e.string)
                                .filter(Boolean)
                                .forEach(function(t) {
                                    (n.strings[t] = !0),
                                        o[t] &&
                                            []
                                                .concat(o[t])
                                                .forEach(function(t) {
                                                    n.strings[t] = !0;
                                                });
                                });
                        var l = e.default || {},
                            p = { _: [] };
                        function s(t, e, i) {
                            for (var o = t, r = 0; r < e.length - 1; r++) {
                                var l = e[r];
                                if (a(o, l)) return;
                                void 0 === o[l] && (o[l] = {}),
                                    (o[l] === Object.prototype ||
                                        o[l] === Number.prototype ||
                                        o[l] === String.prototype) &&
                                        (o[l] = {}),
                                    o[l] === Array.prototype && (o[l] = []),
                                    (o = o[l]);
                            }
                            var p = e[e.length - 1];
                            a(o, p) ||
                                ((o === Object.prototype ||
                                    o === Number.prototype ||
                                    o === String.prototype) &&
                                    (o = {}),
                                o === Array.prototype && (o = []),
                                void 0 === o[p] ||
                                n.bools[p] ||
                                'boolean' == typeof o[p]
                                    ? (o[p] = i)
                                    : Array.isArray(o[p])
                                    ? o[p].push(i)
                                    : (o[p] = [o[p], i]));
                        }
                        function c(t, e, a) {
                            if (
                                !a ||
                                !n.unknownFn ||
                                (function(t, e) {
                                    return (
                                        (n.allBools && /^--[^=]+$/.test(e)) ||
                                        n.strings[t] ||
                                        n.bools[t] ||
                                        o[t]
                                    );
                                })(t, a) ||
                                !1 !== n.unknownFn(a)
                            ) {
                                var r = !n.strings[t] && i(e) ? Number(e) : e;
                                s(p, t.split('.'), r),
                                    (o[t] || []).forEach(function(t) {
                                        s(p, t.split('.'), r);
                                    });
                            }
                        }
                        Object.keys(n.bools).forEach(function(t) {
                            c(t, void 0 !== l[t] && l[t]);
                        });
                        var d = [];
                        -1 !== t.indexOf('--') &&
                            ((d = t.slice(t.indexOf('--') + 1)),
                            (t = t.slice(0, t.indexOf('--'))));
                        for (var m = 0; m < t.length; m++) {
                            var u,
                                f,
                                h = t[m];
                            if (/^--.+=/.test(h)) {
                                var v = h.match(/^--([^=]+)=([\s\S]*)$/);
                                u = v[1];
                                var x = v[2];
                                n.bools[u] && (x = 'false' !== x), c(u, x, h);
                            } else if (/^--no-.+/.test(h))
                                c((u = h.match(/^--no-(.+)/)[1]), !1, h);
                            else if (/^--.+/.test(h))
                                (u = h.match(/^--(.+)/)[1]),
                                    void 0 === (f = t[m + 1]) ||
                                    /^(-|--)[^-]/.test(f) ||
                                    n.bools[u] ||
                                    n.allBools ||
                                    (o[u] && r(u))
                                        ? /^(true|false)$/.test(f)
                                            ? (c(u, 'true' === f, h), (m += 1))
                                            : c(u, !n.strings[u] || '', h)
                                        : (c(u, f, h), (m += 1));
                            else if (/^-[^-]+/.test(h)) {
                                for (
                                    var g = h.slice(1, -1).split(''),
                                        b = !1,
                                        w = 0;
                                    w < g.length;
                                    w++
                                )
                                    if ('-' !== (f = h.slice(w + 2))) {
                                        if (
                                            /[A-Za-z]/.test(g[w]) &&
                                            '=' === f[0]
                                        ) {
                                            c(g[w], f.slice(1), h), (b = !0);
                                            break;
                                        }
                                        if (
                                            /[A-Za-z]/.test(g[w]) &&
                                            /-?\d+(\.\d*)?(e-?\d+)?$/.test(f)
                                        ) {
                                            c(g[w], f, h), (b = !0);
                                            break;
                                        }
                                        if (g[w + 1] && g[w + 1].match(/\W/)) {
                                            c(g[w], h.slice(w + 2), h),
                                                (b = !0);
                                            break;
                                        }
                                        c(g[w], !n.strings[g[w]] || '', h);
                                    } else c(g[w], f, h);
                                (u = h.slice(-1)[0]),
                                    !b &&
                                        '-' !== u &&
                                        (!t[m + 1] ||
                                        /^(-|--)[^-]/.test(t[m + 1]) ||
                                        n.bools[u] ||
                                        (o[u] && r(u))
                                            ? t[m + 1] &&
                                              /^(true|false)$/.test(t[m + 1])
                                                ? (c(u, 'true' === t[m + 1], h),
                                                  (m += 1))
                                                : c(u, !n.strings[u] || '', h)
                                            : (c(u, t[m + 1], h), (m += 1)));
                            } else if (
                                ((!n.unknownFn || !1 !== n.unknownFn(h)) &&
                                    p._.push(
                                        n.strings._ || !i(h) ? h : Number(h)
                                    ),
                                e.stopEarly)
                            ) {
                                p._.push.apply(p._, t.slice(m + 1));
                                break;
                            }
                        }
                        return (
                            Object.keys(l).forEach(function(t) {
                                (function(t, e) {
                                    var i = t;
                                    return (
                                        e.slice(0, -1).forEach(function(t) {
                                            i = i[t] || {};
                                        }),
                                        e[e.length - 1] in i
                                    );
                                })(p, t.split('.')) ||
                                    (s(p, t.split('.'), l[t]),
                                    (o[t] || []).forEach(function(e) {
                                        s(p, e.split('.'), l[t]);
                                    }));
                            }),
                            e['--']
                                ? (p['--'] = d.slice())
                                : d.forEach(function(t) {
                                      p._.push(t);
                                  }),
                            p
                        );
                    };
                }),
                ke = F((t, e) => {
                    function i(t) {
                        if ('string' != typeof t)
                            throw new TypeError(
                                'Path must be a string. Received ' +
                                    JSON.stringify(t)
                            );
                    }
                    function a(t, e) {
                        for (
                            var i, a = '', n = 0, o = -1, r = 0, l = 0;
                            l <= t.length;
                            ++l
                        ) {
                            if (l < t.length) i = t.charCodeAt(l);
                            else {
                                if (47 === i) break;
                                i = 47;
                            }
                            if (47 === i) {
                                if (o !== l - 1 && 1 !== r)
                                    if (o !== l - 1 && 2 === r) {
                                        if (
                                            a.length < 2 ||
                                            2 !== n ||
                                            46 !== a.charCodeAt(a.length - 1) ||
                                            46 !== a.charCodeAt(a.length - 2)
                                        )
                                            if (a.length > 2) {
                                                var p = a.lastIndexOf('/');
                                                if (p !== a.length - 1) {
                                                    -1 === p
                                                        ? ((a = ''), (n = 0))
                                                        : (n =
                                                              (a = a.slice(
                                                                  0,
                                                                  p
                                                              )).length -
                                                              1 -
                                                              a.lastIndexOf(
                                                                  '/'
                                                              )),
                                                        (o = l),
                                                        (r = 0);
                                                    continue;
                                                }
                                            } else if (
                                                2 === a.length ||
                                                1 === a.length
                                            ) {
                                                (a = ''),
                                                    (n = 0),
                                                    (o = l),
                                                    (r = 0);
                                                continue;
                                            }
                                        e &&
                                            (a.length > 0
                                                ? (a += '/..')
                                                : (a = '..'),
                                            (n = 2));
                                    } else
                                        a.length > 0
                                            ? (a += '/' + t.slice(o + 1, l))
                                            : (a = t.slice(o + 1, l)),
                                            (n = l - o - 1);
                                (o = l), (r = 0);
                            } else 46 === i && -1 !== r ? ++r : (r = -1);
                        }
                        return a;
                    }
                    var n = {
                        resolve: function() {
                            for (
                                var t, e = '', n = !1, o = arguments.length - 1;
                                o >= -1 && !n;
                                o--
                            ) {
                                var r;
                                o >= 0
                                    ? (r = arguments[o])
                                    : (void 0 === t && (t = process.cwd()),
                                      (r = t)),
                                    i(r),
                                    0 !== r.length &&
                                        ((e = r + '/' + e),
                                        (n = 47 === r.charCodeAt(0)));
                            }
                            return (
                                (e = a(e, !n)),
                                n
                                    ? e.length > 0
                                        ? '/' + e
                                        : '/'
                                    : e.length > 0
                                    ? e
                                    : '.'
                            );
                        },
                        normalize: function(t) {
                            if ((i(t), 0 === t.length)) return '.';
                            var e = 47 === t.charCodeAt(0),
                                n = 47 === t.charCodeAt(t.length - 1);
                            return (
                                0 === (t = a(t, !e)).length && !e && (t = '.'),
                                t.length > 0 && n && (t += '/'),
                                e ? '/' + t : t
                            );
                        },
                        isAbsolute: function(t) {
                            return i(t), t.length > 0 && 47 === t.charCodeAt(0);
                        },
                        join: function() {
                            if (0 === arguments.length) return '.';
                            for (var t, e = 0; e < arguments.length; ++e) {
                                var a = arguments[e];
                                i(a),
                                    a.length > 0 &&
                                        (void 0 === t
                                            ? (t = a)
                                            : (t += '/' + a));
                            }
                            return void 0 === t ? '.' : n.normalize(t);
                        },
                        relative: function(t, e) {
                            if (
                                (i(t),
                                i(e),
                                t === e ||
                                    (t = n.resolve(t)) === (e = n.resolve(e)))
                            )
                                return '';
                            for (
                                var a = 1;
                                a < t.length && 47 === t.charCodeAt(a);
                                ++a
                            );
                            for (
                                var o = t.length, r = o - a, l = 1;
                                l < e.length && 47 === e.charCodeAt(l);
                                ++l
                            );
                            for (
                                var p = e.length - l,
                                    s = r < p ? r : p,
                                    c = -1,
                                    d = 0;
                                d <= s;
                                ++d
                            ) {
                                if (d === s) {
                                    if (p > s) {
                                        if (47 === e.charCodeAt(l + d))
                                            return e.slice(l + d + 1);
                                        if (0 === d) return e.slice(l + d);
                                    } else
                                        r > s &&
                                            (47 === t.charCodeAt(a + d)
                                                ? (c = d)
                                                : 0 === d && (c = 0));
                                    break;
                                }
                                var m = t.charCodeAt(a + d);
                                if (m !== e.charCodeAt(l + d)) break;
                                47 === m && (c = d);
                            }
                            var u = '';
                            for (d = a + c + 1; d <= o; ++d)
                                (d === o || 47 === t.charCodeAt(d)) &&
                                    (0 === u.length
                                        ? (u += '..')
                                        : (u += '/..'));
                            return u.length > 0
                                ? u + e.slice(l + c)
                                : ((l += c),
                                  47 === e.charCodeAt(l) && ++l,
                                  e.slice(l));
                        },
                        _makeLong: function(t) {
                            return t;
                        },
                        dirname: function(t) {
                            if ((i(t), 0 === t.length)) return '.';
                            for (
                                var e = t.charCodeAt(0),
                                    a = 47 === e,
                                    n = -1,
                                    o = !0,
                                    r = t.length - 1;
                                r >= 1;
                                --r
                            )
                                if (47 === (e = t.charCodeAt(r))) {
                                    if (!o) {
                                        n = r;
                                        break;
                                    }
                                } else o = !1;
                            return -1 === n
                                ? a
                                    ? '/'
                                    : '.'
                                : a && 1 === n
                                ? '//'
                                : t.slice(0, n);
                        },
                        basename: function(t, e) {
                            if (void 0 !== e && 'string' != typeof e)
                                throw new TypeError(
                                    '"ext" argument must be a string'
                                );
                            i(t);
                            var a,
                                n = 0,
                                o = -1,
                                r = !0;
                            if (
                                void 0 !== e &&
                                e.length > 0 &&
                                e.length <= t.length
                            ) {
                                if (e.length === t.length && e === t) return '';
                                var l = e.length - 1,
                                    p = -1;
                                for (a = t.length - 1; a >= 0; --a) {
                                    var s = t.charCodeAt(a);
                                    if (47 === s) {
                                        if (!r) {
                                            n = a + 1;
                                            break;
                                        }
                                    } else
                                        -1 === p && ((r = !1), (p = a + 1)),
                                            l >= 0 &&
                                                (s === e.charCodeAt(l)
                                                    ? -1 == --l && (o = a)
                                                    : ((l = -1), (o = p)));
                                }
                                return (
                                    n === o
                                        ? (o = p)
                                        : -1 === o && (o = t.length),
                                    t.slice(n, o)
                                );
                            }
                            for (a = t.length - 1; a >= 0; --a)
                                if (47 === t.charCodeAt(a)) {
                                    if (!r) {
                                        n = a + 1;
                                        break;
                                    }
                                } else -1 === o && ((r = !1), (o = a + 1));
                            return -1 === o ? '' : t.slice(n, o);
                        },
                        extname: function(t) {
                            i(t);
                            for (
                                var e = -1,
                                    a = 0,
                                    n = -1,
                                    o = !0,
                                    r = 0,
                                    l = t.length - 1;
                                l >= 0;
                                --l
                            ) {
                                var p = t.charCodeAt(l);
                                if (47 !== p)
                                    -1 === n && ((o = !1), (n = l + 1)),
                                        46 === p
                                            ? -1 === e
                                                ? (e = l)
                                                : 1 !== r && (r = 1)
                                            : -1 !== e && (r = -1);
                                else if (!o) {
                                    a = l + 1;
                                    break;
                                }
                            }
                            return -1 === e ||
                                -1 === n ||
                                0 === r ||
                                (1 === r && e === n - 1 && e === a + 1)
                                ? ''
                                : t.slice(e, n);
                        },
                        format: function(t) {
                            if (null === t || 'object' != typeof t)
                                throw new TypeError(
                                    'The "pathObject" argument must be of type Object. Received type ' +
                                        typeof t
                                );
                            return (function(t, e) {
                                var i = e.dir || e.root,
                                    a =
                                        e.base ||
                                        (e.name || '') + (e.ext || '');
                                return i
                                    ? i === e.root
                                        ? i + a
                                        : i + '/' + a
                                    : a;
                            })(0, t);
                        },
                        parse: function(t) {
                            i(t);
                            var e = {
                                root: '',
                                dir: '',
                                base: '',
                                ext: '',
                                name: '',
                            };
                            if (0 === t.length) return e;
                            var a,
                                n = t.charCodeAt(0),
                                o = 47 === n;
                            o ? ((e.root = '/'), (a = 1)) : (a = 0);
                            for (
                                var r = -1,
                                    l = 0,
                                    p = -1,
                                    s = !0,
                                    c = t.length - 1,
                                    d = 0;
                                c >= a;
                                --c
                            )
                                if (47 !== (n = t.charCodeAt(c)))
                                    -1 === p && ((s = !1), (p = c + 1)),
                                        46 === n
                                            ? -1 === r
                                                ? (r = c)
                                                : 1 !== d && (d = 1)
                                            : -1 !== r && (d = -1);
                                else if (!s) {
                                    l = c + 1;
                                    break;
                                }
                            return (
                                -1 === r ||
                                -1 === p ||
                                0 === d ||
                                (1 === d && r === p - 1 && r === l + 1)
                                    ? -1 !== p &&
                                      (e.base = e.name =
                                          0 === l && o
                                              ? t.slice(1, p)
                                              : t.slice(l, p))
                                    : (0 === l && o
                                          ? ((e.name = t.slice(1, r)),
                                            (e.base = t.slice(1, p)))
                                          : ((e.name = t.slice(l, r)),
                                            (e.base = t.slice(l, p))),
                                      (e.ext = t.slice(r, p))),
                                l > 0
                                    ? (e.dir = t.slice(0, l - 1))
                                    : o && (e.dir = '/'),
                                e
                            );
                        },
                        sep: '/',
                        delimiter: ':',
                        win32: null,
                        posix: null,
                    };
                    (n.posix = n), (e.exports = n);
                }),
                dt = F((t, e) => {
                    e.exports = function(t, e) {
                        if (((e = e.split(':')[0]), !(t = +t))) return !1;
                        switch (e) {
                            case 'http':
                            case 'ws':
                                return 80 !== t;
                            case 'https':
                            case 'wss':
                                return 443 !== t;
                            case 'ftp':
                                return 21 !== t;
                            case 'gopher':
                                return 70 !== t;
                            case 'file':
                                return !1;
                        }
                        return 0 !== t;
                    };
                }),
                ut = F(t => {
                    var e = Object.prototype.hasOwnProperty;
                    function i(t) {
                        try {
                            return decodeURIComponent(t.replace(/\+/g, ' '));
                        } catch {
                            return null;
                        }
                    }
                    function a(t) {
                        try {
                            return encodeURIComponent(t);
                        } catch {
                            return null;
                        }
                    }
                    (t.stringify = function(t, i) {
                        i = i || '';
                        var n,
                            o,
                            r = [];
                        for (o in ('string' != typeof i && (i = '?'), t))
                            if (e.call(t, o)) {
                                if (
                                    (!(n = t[o]) &&
                                        (null == n || isNaN(n)) &&
                                        (n = ''),
                                    (o = a(o)),
                                    (n = a(n)),
                                    null === o || null === n)
                                )
                                    continue;
                                r.push(o + '=' + n);
                            }
                        return r.length ? i + r.join('&') : '';
                    }),
                        (t.parse = function(t) {
                            for (
                                var e, a = /([^=?#&]+)=?([^&]*)/g, n = {};
                                (e = a.exec(t));

                            ) {
                                var o = i(e[1]),
                                    r = i(e[2]);
                                null === o ||
                                    null === r ||
                                    o in n ||
                                    (n[o] = r);
                            }
                            return n;
                        });
                }),
                _t = F((t, e) => {
                    var i = dt(),
                        a = ut(),
                        n = /^[\x00-\x20\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]+/,
                        o = /[\n\r\t]/g,
                        r = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                        l = /:\d+$/,
                        p = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                        s = /^[a-zA-Z]:/;
                    function c(t) {
                        return (t || '').toString().replace(n, '');
                    }
                    var d = [
                            ['#', 'hash'],
                            ['?', 'query'],
                            function(t, e) {
                                return f(e.protocol)
                                    ? t.replace(/\\/g, '/')
                                    : t;
                            },
                            ['/', 'pathname'],
                            ['@', 'auth', 1],
                            [NaN, 'host', void 0, 1, 1],
                            [/:(\d*)$/, 'port', void 0, 1],
                            [NaN, 'hostname', void 0, 1, 1],
                        ],
                        m = { hash: 1, query: 1 };
                    function u(t) {
                        var e,
                            i =
                                ('undefined' != typeof window
                                    ? window
                                    : void 0 !== __webpack_require__.g
                                    ? __webpack_require__.g
                                    : 'undefined' != typeof self
                                    ? self
                                    : {}
                                ).location || {},
                            a = {},
                            n = typeof (t = t || i);
                        if ('blob:' === t.protocol)
                            a = new v(unescape(t.pathname), {});
                        else if ('string' === n)
                            for (e in ((a = new v(t, {})), m)) delete a[e];
                        else if ('object' === n) {
                            for (e in t) e in m || (a[e] = t[e]);
                            void 0 === a.slashes &&
                                (a.slashes = r.test(t.href));
                        }
                        return a;
                    }
                    function f(t) {
                        return (
                            'file:' === t ||
                            'ftp:' === t ||
                            'http:' === t ||
                            'https:' === t ||
                            'ws:' === t ||
                            'wss:' === t
                        );
                    }
                    function h(t, e) {
                        (t = (t = c(t)).replace(o, '')), (e = e || {});
                        var i,
                            a = p.exec(t),
                            n = a[1] ? a[1].toLowerCase() : '',
                            r = !!a[2],
                            l = !!a[3],
                            s = 0;
                        return (
                            r
                                ? l
                                    ? ((i = a[2] + a[3] + a[4]),
                                      (s = a[2].length + a[3].length))
                                    : ((i = a[2] + a[4]), (s = a[2].length))
                                : l
                                ? ((i = a[3] + a[4]), (s = a[3].length))
                                : (i = a[4]),
                            'file:' === n
                                ? s >= 2 && (i = i.slice(2))
                                : f(n)
                                ? (i = a[4])
                                : n
                                ? r && (i = i.slice(2))
                                : s >= 2 && f(e.protocol) && (i = a[4]),
                            {
                                protocol: n,
                                slashes: r || f(n),
                                slashesCount: s,
                                rest: i,
                            }
                        );
                    }
                    function v(t, e, n) {
                        if (
                            ((t = (t = c(t)).replace(o, '')),
                            !(this instanceof v))
                        )
                            return new v(t, e, n);
                        var r,
                            l,
                            p,
                            m,
                            x,
                            g,
                            b = d.slice(),
                            w = typeof e,
                            y = this,
                            _ = 0;
                        for (
                            'object' !== w &&
                                'string' !== w &&
                                ((n = e), (e = null)),
                                n && 'function' != typeof n && (n = a.parse),
                                r =
                                    !(l = h(t || '', (e = u(e)))).protocol &&
                                    !l.slashes,
                                y.slashes = l.slashes || (r && e.slashes),
                                y.protocol = l.protocol || e.protocol || '',
                                t = l.rest,
                                (('file:' === l.protocol &&
                                    (2 !== l.slashesCount || s.test(t))) ||
                                    (!l.slashes &&
                                        (l.protocol ||
                                            l.slashesCount < 2 ||
                                            !f(y.protocol)))) &&
                                    (b[3] = [/(.*)/, 'pathname']);
                            _ < b.length;
                            _++
                        )
                            'function' != typeof (m = b[_])
                                ? ((p = m[0]),
                                  (g = m[1]),
                                  p != p
                                      ? (y[g] = t)
                                      : 'string' == typeof p
                                      ? ~(x =
                                            '@' === p
                                                ? t.lastIndexOf(p)
                                                : t.indexOf(p)) &&
                                        ('number' == typeof m[2]
                                            ? ((y[g] = t.slice(0, x)),
                                              (t = t.slice(x + m[2])))
                                            : ((y[g] = t.slice(x)),
                                              (t = t.slice(0, x))))
                                      : (x = p.exec(t)) &&
                                        ((y[g] = x[1]),
                                        (t = t.slice(0, x.index))),
                                  (y[g] = y[g] || (r && m[3] && e[g]) || ''),
                                  m[4] && (y[g] = y[g].toLowerCase()))
                                : (t = m(t, y));
                        n && (y.query = n(y.query)),
                            r &&
                                e.slashes &&
                                '/' !== y.pathname.charAt(0) &&
                                ('' !== y.pathname || '' !== e.pathname) &&
                                (y.pathname = (function(t, e) {
                                    if ('' === t) return e;
                                    for (
                                        var i = (e || '/')
                                                .split('/')
                                                .slice(0, -1)
                                                .concat(t.split('/')),
                                            a = i.length,
                                            n = i[a - 1],
                                            o = !1,
                                            r = 0;
                                        a--;

                                    )
                                        '.' === i[a]
                                            ? i.splice(a, 1)
                                            : '..' === i[a]
                                            ? (i.splice(a, 1), r++)
                                            : r &&
                                              (0 === a && (o = !0),
                                              i.splice(a, 1),
                                              r--);
                                    return (
                                        o && i.unshift(''),
                                        ('.' === n || '..' === n) && i.push(''),
                                        i.join('/')
                                    );
                                })(y.pathname, e.pathname)),
                            '/' !== y.pathname.charAt(0) &&
                                f(y.protocol) &&
                                (y.pathname = '/' + y.pathname),
                            i(y.port, y.protocol) ||
                                ((y.host = y.hostname), (y.port = '')),
                            (y.username = y.password = ''),
                            y.auth &&
                                (~(x = y.auth.indexOf(':'))
                                    ? ((y.username = y.auth.slice(0, x)),
                                      (y.username = encodeURIComponent(
                                          decodeURIComponent(y.username)
                                      )),
                                      (y.password = y.auth.slice(x + 1)),
                                      (y.password = encodeURIComponent(
                                          decodeURIComponent(y.password)
                                      )))
                                    : (y.username = encodeURIComponent(
                                          decodeURIComponent(y.auth)
                                      )),
                                (y.auth = y.password
                                    ? y.username + ':' + y.password
                                    : y.username)),
                            (y.origin =
                                'file:' !== y.protocol &&
                                f(y.protocol) &&
                                y.host
                                    ? y.protocol + '//' + y.host
                                    : 'null'),
                            (y.href = y.toString());
                    }
                    (v.prototype = {
                        set: function(t, e, n) {
                            var o = this;
                            switch (t) {
                                case 'query':
                                    'string' == typeof e &&
                                        e.length &&
                                        (e = (n || a.parse)(e)),
                                        (o[t] = e);
                                    break;
                                case 'port':
                                    (o[t] = e),
                                        i(e, o.protocol)
                                            ? e &&
                                              (o.host = o.hostname + ':' + e)
                                            : ((o.host = o.hostname),
                                              (o[t] = ''));
                                    break;
                                case 'hostname':
                                    (o[t] = e),
                                        o.port && (e += ':' + o.port),
                                        (o.host = e);
                                    break;
                                case 'host':
                                    (o[t] = e),
                                        l.test(e)
                                            ? ((e = e.split(':')),
                                              (o.port = e.pop()),
                                              (o.hostname = e.join(':')))
                                            : ((o.hostname = e), (o.port = ''));
                                    break;
                                case 'protocol':
                                    (o.protocol = e.toLowerCase()),
                                        (o.slashes = !n);
                                    break;
                                case 'pathname':
                                case 'hash':
                                    if (e) {
                                        var r = 'pathname' === t ? '/' : '#';
                                        o[t] = e.charAt(0) !== r ? r + e : e;
                                    } else o[t] = e;
                                    break;
                                case 'username':
                                case 'password':
                                    o[t] = encodeURIComponent(e);
                                    break;
                                case 'auth':
                                    var p = e.indexOf(':');
                                    ~p
                                        ? ((o.username = e.slice(0, p)),
                                          (o.username = encodeURIComponent(
                                              decodeURIComponent(o.username)
                                          )),
                                          (o.password = e.slice(p + 1)),
                                          (o.password = encodeURIComponent(
                                              decodeURIComponent(o.password)
                                          )))
                                        : (o.username = encodeURIComponent(
                                              decodeURIComponent(e)
                                          ));
                            }
                            for (var s = 0; s < d.length; s++) {
                                var c = d[s];
                                c[4] && (o[c[1]] = o[c[1]].toLowerCase());
                            }
                            return (
                                (o.auth = o.password
                                    ? o.username + ':' + o.password
                                    : o.username),
                                (o.origin =
                                    'file:' !== o.protocol &&
                                    f(o.protocol) &&
                                    o.host
                                        ? o.protocol + '//' + o.host
                                        : 'null'),
                                (o.href = o.toString()),
                                o
                            );
                        },
                        toString: function(t) {
                            (!t || 'function' != typeof t) && (t = a.stringify);
                            var e,
                                i = this,
                                n = i.host,
                                o = i.protocol;
                            o && ':' !== o.charAt(o.length - 1) && (o += ':');
                            var r =
                                o +
                                ((i.protocol && i.slashes) || f(i.protocol)
                                    ? '//'
                                    : '');
                            return (
                                i.username
                                    ? ((r += i.username),
                                      i.password && (r += ':' + i.password),
                                      (r += '@'))
                                    : i.password
                                    ? ((r += ':' + i.password), (r += '@'))
                                    : 'file:' !== i.protocol &&
                                      f(i.protocol) &&
                                      !n &&
                                      '/' !== i.pathname &&
                                      (r += '@'),
                                (':' === n[n.length - 1] ||
                                    (l.test(i.hostname) && !i.port)) &&
                                    (n += ':'),
                                (r += n + i.pathname),
                                (e =
                                    'object' == typeof i.query
                                        ? t(i.query)
                                        : i.query) &&
                                    (r += '?' !== e.charAt(0) ? '?' + e : e),
                                i.hash && (r += i.hash),
                                r
                            );
                        },
                    }),
                        (v.extractProtocol = h),
                        (v.location = u),
                        (v.trimLeft = c),
                        (v.qs = a),
                        (e.exports = v);
                }),
                Ne = F(t => {
                    var e =
                        (t && t.__importDefault) ||
                        function(t) {
                            return t && t.__esModule ? t : { default: t };
                        };
                    Object.defineProperty(t, '__esModule', { value: !0 }),
                        (t.URLExt = void 0);
                    var i = ke(),
                        a = e(_t());
                    !(function(t) {
                        function e(t) {
                            if ('undefined' != typeof document && document) {
                                let e = document.createElement('a');
                                return (e.href = t), e;
                            }
                            return (0, a.default)(t);
                        }
                        function n(...t) {
                            let e = (0, a.default)(t[0], {}),
                                n = '' === e.protocol && e.slashes;
                            n && (e = (0, a.default)(t[0], 'https:' + t[0]));
                            let o = `${n ? '' : e.protocol}${
                                    e.slashes ? '//' : ''
                                }${e.auth}${e.auth ? '@' : ''}${e.host}`,
                                r = i.posix.join(
                                    `${o && '/' !== e.pathname[0] ? '/' : ''}${
                                        e.pathname
                                    }`,
                                    ...t.slice(1)
                                );
                            return `${o}${'.' === r ? '' : r}`;
                        }
                        (t.parse = e),
                            (t.getHostName = function(t) {
                                return (0, a.default)(t).hostname;
                            }),
                            (t.normalize = function(t) {
                                return t && e(t).toString();
                            }),
                            (t.join = n),
                            (t.encodeParts = function(t) {
                                return n(
                                    ...t.split('/').map(encodeURIComponent)
                                );
                            }),
                            (t.objectToQueryString = function(t) {
                                let e = Object.keys(t).filter(
                                    t => t.length > 0
                                );
                                return e.length
                                    ? '?' +
                                          e
                                              .map(e => {
                                                  let i = encodeURIComponent(
                                                      String(t[e])
                                                  );
                                                  return e + (i ? '=' + i : '');
                                              })
                                              .join('&')
                                    : '';
                            }),
                            (t.queryStringToObject = function(t) {
                                return t
                                    .replace(/^\?/, '')
                                    .split('&')
                                    .reduce((t, e) => {
                                        let [i, a] = e.split('=');
                                        return (
                                            i.length > 0 &&
                                                (t[i] = decodeURIComponent(
                                                    a || ''
                                                )),
                                            t
                                        );
                                    }, {});
                            }),
                            (t.isLocal = function(t) {
                                let { protocol: i } = e(t);
                                return (
                                    (!i || 0 !== t.toLowerCase().indexOf(i)) &&
                                    0 !== t.indexOf('/')
                                );
                            });
                    })(t.URLExt || (t.URLExt = {}));
                }),
                kt = F((exports, module) => {
                    var __importDefault =
                        (exports && exports.__importDefault) ||
                        function(t) {
                            return t && t.__esModule ? t : { default: t };
                        };
                    Object.defineProperty(exports, '__esModule', { value: !0 }),
                        (exports.PageConfig = void 0);
                    var coreutils_1 = pe(),
                        minimist_1 = __importDefault(rt()),
                        url_1 = Ne(),
                        PageConfig;
                    (function(PageConfig) {
                        function getOption(name) {
                            if (configData)
                                return configData[name] || getBodyData(name);
                            configData = Object.create(null);
                            let found = !1;
                            if ('undefined' != typeof document && document) {
                                let t = document.getElementById(
                                    'jupyter-config-data'
                                );
                                t &&
                                    ((configData = JSON.parse(
                                        t.textContent || ''
                                    )),
                                    (found = !0));
                            }
                            if (!found && void 0 !== process && process.argv)
                                try {
                                    let cli = (0, minimist_1.default)(
                                            process.argv.slice(2)
                                        ),
                                        path = ke(),
                                        fullPath = '';
                                    'jupyter-config-data' in cli
                                        ? (fullPath = path.resolve(
                                              cli['jupyter-config-data']
                                          ))
                                        : 'JUPYTER_CONFIG_DATA' in
                                              process.env &&
                                          (fullPath = path.resolve(
                                              process.env.JUPYTER_CONFIG_DATA
                                          )),
                                        fullPath &&
                                            (configData = eval('require')(
                                                fullPath
                                            ));
                                } catch (t) {
                                    console.error(t);
                                }
                            if (coreutils_1.JSONExt.isObject(configData))
                                for (let t in configData)
                                    'string' != typeof configData[t] &&
                                        (configData[t] = JSON.stringify(
                                            configData[t]
                                        ));
                            else configData = Object.create(null);
                            return configData[name] || getBodyData(name);
                        }
                        function setOption(t, e) {
                            let i = getOption(t);
                            return (configData[t] = e), i;
                        }
                        function getBaseUrl() {
                            return url_1.URLExt.normalize(
                                getOption('baseUrl') || '/'
                            );
                        }
                        function getTreeUrl() {
                            return url_1.URLExt.join(
                                getBaseUrl(),
                                getOption('treeUrl')
                            );
                        }
                        function getShareUrl() {
                            return url_1.URLExt.normalize(
                                getOption('shareUrl') || getBaseUrl()
                            );
                        }
                        function getTreeShareUrl() {
                            return url_1.URLExt.normalize(
                                url_1.URLExt.join(
                                    getShareUrl(),
                                    getOption('treeUrl')
                                )
                            );
                        }
                        function getUrl(t) {
                            var e, i, a, n;
                            let o = t.toShare ? getShareUrl() : getBaseUrl(),
                                r =
                                    null !== (e = t.mode) && void 0 !== e
                                        ? e
                                        : getOption('mode'),
                                l =
                                    null !== (i = t.workspace) && void 0 !== i
                                        ? i
                                        : getOption('workspace'),
                                p = 'single-document' === r ? 'doc' : 'lab';
                            (o = url_1.URLExt.join(o, p)),
                                l !== PageConfig.defaultWorkspace &&
                                    (o = url_1.URLExt.join(
                                        o,
                                        'workspaces',
                                        encodeURIComponent(
                                            null !==
                                                (a = getOption('workspace')) &&
                                                void 0 !== a
                                                ? a
                                                : PageConfig.defaultWorkspace
                                        )
                                    ));
                            let s =
                                null !== (n = t.treePath) && void 0 !== n
                                    ? n
                                    : getOption('treePath');
                            return (
                                s &&
                                    (o = url_1.URLExt.join(
                                        o,
                                        'tree',
                                        url_1.URLExt.encodeParts(s)
                                    )),
                                o
                            );
                        }
                        function getWsUrl(t) {
                            let e = getOption('wsUrl');
                            if (!e) {
                                if (
                                    0 !==
                                    (t = t
                                        ? url_1.URLExt.normalize(t)
                                        : getBaseUrl()).indexOf('http')
                                )
                                    return '';
                                e = 'ws' + t.slice(4);
                            }
                            return url_1.URLExt.normalize(e);
                        }
                        function getNBConvertURL({
                            path: t,
                            format: e,
                            download: i,
                        }) {
                            let a = url_1.URLExt.encodeParts(t),
                                n = url_1.URLExt.join(
                                    getBaseUrl(),
                                    'nbconvert',
                                    e,
                                    a
                                );
                            return i ? n + '?download=true' : n;
                        }
                        function getToken() {
                            return (
                                getOption('token') ||
                                getBodyData('jupyterApiToken')
                            );
                        }
                        function getNotebookVersion() {
                            let t = getOption('notebookVersion');
                            return '' === t ? [0, 0, 0] : JSON.parse(t);
                        }
                        (PageConfig.getOption = getOption),
                            (PageConfig.setOption = setOption),
                            (PageConfig.getBaseUrl = getBaseUrl),
                            (PageConfig.getTreeUrl = getTreeUrl),
                            (PageConfig.getShareUrl = getShareUrl),
                            (PageConfig.getTreeShareUrl = getTreeShareUrl),
                            (PageConfig.getUrl = getUrl),
                            (PageConfig.defaultWorkspace = 'default'),
                            (PageConfig.getWsUrl = getWsUrl),
                            (PageConfig.getNBConvertURL = getNBConvertURL),
                            (PageConfig.getToken = getToken),
                            (PageConfig.getNotebookVersion = getNotebookVersion);
                        let configData = null,
                            Extension;
                        function getBodyData(t) {
                            if (
                                'undefined' == typeof document ||
                                !document.body
                            )
                                return '';
                            let e = document.body.dataset[t];
                            return void 0 === e ? '' : decodeURIComponent(e);
                        }
                        !(function(t) {
                            function e(t) {
                                try {
                                    let e = getOption(t);
                                    if (e) return JSON.parse(e);
                                } catch (e) {
                                    console.warn(`Unable to parse ${t}.`, e);
                                }
                                return [];
                            }
                            (t.deferred = e('deferredExtensions')),
                                (t.disabled = e('disabledExtensions')),
                                (t.isDeferred = function(e) {
                                    let i = e.indexOf(':'),
                                        a = '';
                                    return (
                                        -1 !== i && (a = e.slice(0, i)),
                                        t.deferred.some(
                                            t => t === e || (a && t === a)
                                        )
                                    );
                                }),
                                (t.isDisabled = function(e) {
                                    let i = e.indexOf(':'),
                                        a = '';
                                    return (
                                        -1 !== i && (a = e.slice(0, i)),
                                        t.disabled.some(
                                            t => t === e || (a && t === a)
                                        )
                                    );
                                });
                        })(
                            (Extension =
                                PageConfig.Extension ||
                                (PageConfig.Extension = {}))
                        );
                    })(
                        (PageConfig =
                            exports.PageConfig || (exports.PageConfig = {}))
                    );
                }),
                jt = F(t => {
                    Object.defineProperty(t, '__esModule', { value: !0 }),
                        (t.PathExt = void 0);
                    var e = ke();
                    !(function(t) {
                        function i(t) {
                            return 0 === t.indexOf('/') && (t = t.slice(1)), t;
                        }
                        (t.join = function(...t) {
                            let a = e.posix.join(...t);
                            return '.' === a ? '' : i(a);
                        }),
                            (t.basename = function(t, i) {
                                return e.posix.basename(t, i);
                            }),
                            (t.dirname = function(t) {
                                let a = i(e.posix.dirname(t));
                                return '.' === a ? '' : a;
                            }),
                            (t.extname = function(t) {
                                return e.posix.extname(t);
                            }),
                            (t.normalize = function(t) {
                                return '' === t ? '' : i(e.posix.normalize(t));
                            }),
                            (t.resolve = function(...t) {
                                return i(e.posix.resolve(...t));
                            }),
                            (t.relative = function(t, a) {
                                return i(e.posix.relative(t, a));
                            }),
                            (t.normalizeExtension = function(t) {
                                return (
                                    t.length > 0 &&
                                        0 !== t.indexOf('.') &&
                                        (t = `.${t}`),
                                    t
                                );
                            }),
                            (t.removeSlash = i);
                    })(t.PathExt || (t.PathExt = {}));
                }),
                Ct = F(t => {
                    Object.defineProperty(t, '__esModule', { value: !0 }),
                        (t.signalToPromise = void 0);
                    var e = pe();
                    t.signalToPromise = function(t, i) {
                        let a = new e.PromiseDelegate();
                        function n() {
                            t.disconnect(o);
                        }
                        function o(t, e) {
                            n(), a.resolve([t, e]);
                        }
                        return (
                            t.connect(o),
                            (null != i ? i : 0) > 0 &&
                                setTimeout(() => {
                                    n(),
                                        a.reject(
                                            `Signal not emitted within ${i} ms.`
                                        );
                                }, i),
                            a.promise
                        );
                    };
                }),
                Ot = F(t => {
                    var e;
                    Object.defineProperty(t, '__esModule', { value: !0 }),
                        (t.Text = void 0),
                        ((e =
                            t.Text ||
                            (t.Text = {})).jsIndexToCharIndex = function(t, e) {
                            return t;
                        }),
                        (e.charIndexToJsIndex = function(t, e) {
                            return t;
                        }),
                        (e.camelCase = function(t, e = !1) {
                            return t.replace(/^(\w)|[\s-_:]+(\w)/g, function(
                                t,
                                i,
                                a
                            ) {
                                return a
                                    ? a.toUpperCase()
                                    : e
                                    ? i.toUpperCase()
                                    : i.toLowerCase();
                            });
                        }),
                        (e.titleCase = function(t) {
                            return (t || '')
                                .toLowerCase()
                                .split(' ')
                                .map(
                                    t => t.charAt(0).toUpperCase() + t.slice(1)
                                )
                                .join(' ');
                        });
                }),
                Pt = F(t => {
                    Object.defineProperty(t, '__esModule', { value: !0 }),
                        (t.Time = void 0);
                    var e,
                        i = [
                            { name: 'years', milliseconds: 31536e6 },
                            { name: 'months', milliseconds: 2592e6 },
                            { name: 'days', milliseconds: 864e5 },
                            { name: 'hours', milliseconds: 36e5 },
                            { name: 'minutes', milliseconds: 6e4 },
                            { name: 'seconds', milliseconds: 1e3 },
                        ];
                    ((e = t.Time || (t.Time = {})).formatHuman = function(t) {
                        let e = document.documentElement.lang || 'en',
                            a = new Intl.RelativeTimeFormat(e, {
                                numeric: 'auto',
                            }),
                            n = new Date(t).getTime() - Date.now();
                        for (let t of i) {
                            let e = Math.ceil(n / t.milliseconds);
                            if (0 !== e) return a.format(e, t.name);
                        }
                        return a.format(0, 'seconds');
                    }),
                        (e.format = function(t) {
                            let e = document.documentElement.lang || 'en';
                            return new Intl.DateTimeFormat(e, {
                                dateStyle: 'short',
                                timeStyle: 'short',
                            }).format(new Date(t));
                        });
                }),
                xe = F(t => {
                    var e =
                            (t && t.__createBinding) ||
                            (Object.create
                                ? function(t, e, i, a) {
                                      void 0 === a && (a = i);
                                      var n = Object.getOwnPropertyDescriptor(
                                          e,
                                          i
                                      );
                                      (!n ||
                                          ('get' in n
                                              ? !e.__esModule
                                              : n.writable ||
                                                n.configurable)) &&
                                          (n = {
                                              enumerable: !0,
                                              get: function() {
                                                  return e[i];
                                              },
                                          }),
                                          Object.defineProperty(t, a, n);
                                  }
                                : function(t, e, i, a) {
                                      void 0 === a && (a = i), (t[a] = e[i]);
                                  }),
                        i =
                            (t && t.__exportStar) ||
                            function(t, i) {
                                for (var a in t)
                                    'default' !== a &&
                                        !Object.prototype.hasOwnProperty.call(
                                            i,
                                            a
                                        ) &&
                                        e(i, t, a);
                            };
                    Object.defineProperty(t, '__esModule', { value: !0 }),
                        i(et(), t),
                        i(it(), t),
                        i(nt(), t),
                        i(kt(), t),
                        i(jt(), t),
                        i(Ct(), t),
                        i(Ot(), t),
                        i(Pt(), t),
                        i(Ne(), t);
                }),
                zt = F((t, e) => {
                    function i() {
                        (this._types = Object.create(null)),
                            (this._extensions = Object.create(null));
                        for (let t = 0; t < arguments.length; t++)
                            this.define(arguments[t]);
                        (this.define = this.define.bind(this)),
                            (this.getType = this.getType.bind(this)),
                            (this.getExtension = this.getExtension.bind(this));
                    }
                    (i.prototype.define = function(t, e) {
                        for (let i in t) {
                            let a = t[i].map(function(t) {
                                return t.toLowerCase();
                            });
                            i = i.toLowerCase();
                            for (let t = 0; t < a.length; t++) {
                                let n = a[t];
                                if ('*' !== n[0]) {
                                    if (!e && n in this._types)
                                        throw new Error(
                                            'Attempt to change mapping for "' +
                                                n +
                                                '" extension from "' +
                                                this._types[n] +
                                                '" to "' +
                                                i +
                                                '". Pass `force=true` to allow this, otherwise remove "' +
                                                n +
                                                '" from the list of extensions for "' +
                                                i +
                                                '".'
                                        );
                                    this._types[n] = i;
                                }
                            }
                            if (e || !this._extensions[i]) {
                                let t = a[0];
                                this._extensions[i] =
                                    '*' !== t[0] ? t : t.substr(1);
                            }
                        }
                    }),
                        (i.prototype.getType = function(t) {
                            let e = (t = String(t))
                                    .replace(/^.*[/\\]/, '')
                                    .toLowerCase(),
                                i = e.replace(/^.*\./, '').toLowerCase(),
                                a = e.length < t.length;
                            return (
                                ((i.length < e.length - 1 || !a) &&
                                    this._types[i]) ||
                                null
                            );
                        }),
                        (i.prototype.getExtension = function(t) {
                            return (
                                ((t = /^\s*([^;\s]*)/.test(t) && RegExp.$1) &&
                                    this._extensions[t.toLowerCase()]) ||
                                null
                            );
                        }),
                        (e.exports = i);
                }),
                Et = F((t, e) => {
                    e.exports = {
                        'application/andrew-inset': ['ez'],
                        'application/applixware': ['aw'],
                        'application/atom+xml': ['atom'],
                        'application/atomcat+xml': ['atomcat'],
                        'application/atomdeleted+xml': ['atomdeleted'],
                        'application/atomsvc+xml': ['atomsvc'],
                        'application/atsc-dwd+xml': ['dwd'],
                        'application/atsc-held+xml': ['held'],
                        'application/atsc-rsat+xml': ['rsat'],
                        'application/bdoc': ['bdoc'],
                        'application/calendar+xml': ['xcs'],
                        'application/ccxml+xml': ['ccxml'],
                        'application/cdfx+xml': ['cdfx'],
                        'application/cdmi-capability': ['cdmia'],
                        'application/cdmi-container': ['cdmic'],
                        'application/cdmi-domain': ['cdmid'],
                        'application/cdmi-object': ['cdmio'],
                        'application/cdmi-queue': ['cdmiq'],
                        'application/cu-seeme': ['cu'],
                        'application/dash+xml': ['mpd'],
                        'application/davmount+xml': ['davmount'],
                        'application/docbook+xml': ['dbk'],
                        'application/dssc+der': ['dssc'],
                        'application/dssc+xml': ['xdssc'],
                        'application/ecmascript': ['es', 'ecma'],
                        'application/emma+xml': ['emma'],
                        'application/emotionml+xml': ['emotionml'],
                        'application/epub+zip': ['epub'],
                        'application/exi': ['exi'],
                        'application/express': ['exp'],
                        'application/fdt+xml': ['fdt'],
                        'application/font-tdpfr': ['pfr'],
                        'application/geo+json': ['geojson'],
                        'application/gml+xml': ['gml'],
                        'application/gpx+xml': ['gpx'],
                        'application/gxf': ['gxf'],
                        'application/gzip': ['gz'],
                        'application/hjson': ['hjson'],
                        'application/hyperstudio': ['stk'],
                        'application/inkml+xml': ['ink', 'inkml'],
                        'application/ipfix': ['ipfix'],
                        'application/its+xml': ['its'],
                        'application/java-archive': ['jar', 'war', 'ear'],
                        'application/java-serialized-object': ['ser'],
                        'application/java-vm': ['class'],
                        'application/javascript': ['js', 'mjs'],
                        'application/json': ['json', 'map'],
                        'application/json5': ['json5'],
                        'application/jsonml+json': ['jsonml'],
                        'application/ld+json': ['jsonld'],
                        'application/lgr+xml': ['lgr'],
                        'application/lost+xml': ['lostxml'],
                        'application/mac-binhex40': ['hqx'],
                        'application/mac-compactpro': ['cpt'],
                        'application/mads+xml': ['mads'],
                        'application/manifest+json': ['webmanifest'],
                        'application/marc': ['mrc'],
                        'application/marcxml+xml': ['mrcx'],
                        'application/mathematica': ['ma', 'nb', 'mb'],
                        'application/mathml+xml': ['mathml'],
                        'application/mbox': ['mbox'],
                        'application/mediaservercontrol+xml': ['mscml'],
                        'application/metalink+xml': ['metalink'],
                        'application/metalink4+xml': ['meta4'],
                        'application/mets+xml': ['mets'],
                        'application/mmt-aei+xml': ['maei'],
                        'application/mmt-usd+xml': ['musd'],
                        'application/mods+xml': ['mods'],
                        'application/mp21': ['m21', 'mp21'],
                        'application/mp4': ['mp4s', 'm4p'],
                        'application/msword': ['doc', 'dot'],
                        'application/mxf': ['mxf'],
                        'application/n-quads': ['nq'],
                        'application/n-triples': ['nt'],
                        'application/node': ['cjs'],
                        'application/octet-stream': [
                            'bin',
                            'dms',
                            'lrf',
                            'mar',
                            'so',
                            'dist',
                            'distz',
                            'pkg',
                            'bpk',
                            'dump',
                            'elc',
                            'deploy',
                            'exe',
                            'dll',
                            'deb',
                            'dmg',
                            'iso',
                            'img',
                            'msi',
                            'msp',
                            'msm',
                            'buffer',
                        ],
                        'application/oda': ['oda'],
                        'application/oebps-package+xml': ['opf'],
                        'application/ogg': ['ogx'],
                        'application/omdoc+xml': ['omdoc'],
                        'application/onenote': [
                            'onetoc',
                            'onetoc2',
                            'onetmp',
                            'onepkg',
                        ],
                        'application/oxps': ['oxps'],
                        'application/p2p-overlay+xml': ['relo'],
                        'application/patch-ops-error+xml': ['xer'],
                        'application/pdf': ['pdf'],
                        'application/pgp-encrypted': ['pgp'],
                        'application/pgp-signature': ['asc', 'sig'],
                        'application/pics-rules': ['prf'],
                        'application/pkcs10': ['p10'],
                        'application/pkcs7-mime': ['p7m', 'p7c'],
                        'application/pkcs7-signature': ['p7s'],
                        'application/pkcs8': ['p8'],
                        'application/pkix-attr-cert': ['ac'],
                        'application/pkix-cert': ['cer'],
                        'application/pkix-crl': ['crl'],
                        'application/pkix-pkipath': ['pkipath'],
                        'application/pkixcmp': ['pki'],
                        'application/pls+xml': ['pls'],
                        'application/postscript': ['ai', 'eps', 'ps'],
                        'application/provenance+xml': ['provx'],
                        'application/pskc+xml': ['pskcxml'],
                        'application/raml+yaml': ['raml'],
                        'application/rdf+xml': ['rdf', 'owl'],
                        'application/reginfo+xml': ['rif'],
                        'application/relax-ng-compact-syntax': ['rnc'],
                        'application/resource-lists+xml': ['rl'],
                        'application/resource-lists-diff+xml': ['rld'],
                        'application/rls-services+xml': ['rs'],
                        'application/route-apd+xml': ['rapd'],
                        'application/route-s-tsid+xml': ['sls'],
                        'application/route-usd+xml': ['rusd'],
                        'application/rpki-ghostbusters': ['gbr'],
                        'application/rpki-manifest': ['mft'],
                        'application/rpki-roa': ['roa'],
                        'application/rsd+xml': ['rsd'],
                        'application/rss+xml': ['rss'],
                        'application/rtf': ['rtf'],
                        'application/sbml+xml': ['sbml'],
                        'application/scvp-cv-request': ['scq'],
                        'application/scvp-cv-response': ['scs'],
                        'application/scvp-vp-request': ['spq'],
                        'application/scvp-vp-response': ['spp'],
                        'application/sdp': ['sdp'],
                        'application/senml+xml': ['senmlx'],
                        'application/sensml+xml': ['sensmlx'],
                        'application/set-payment-initiation': ['setpay'],
                        'application/set-registration-initiation': ['setreg'],
                        'application/shf+xml': ['shf'],
                        'application/sieve': ['siv', 'sieve'],
                        'application/smil+xml': ['smi', 'smil'],
                        'application/sparql-query': ['rq'],
                        'application/sparql-results+xml': ['srx'],
                        'application/srgs': ['gram'],
                        'application/srgs+xml': ['grxml'],
                        'application/sru+xml': ['sru'],
                        'application/ssdl+xml': ['ssdl'],
                        'application/ssml+xml': ['ssml'],
                        'application/swid+xml': ['swidtag'],
                        'application/tei+xml': ['tei', 'teicorpus'],
                        'application/thraud+xml': ['tfi'],
                        'application/timestamped-data': ['tsd'],
                        'application/toml': ['toml'],
                        'application/trig': ['trig'],
                        'application/ttml+xml': ['ttml'],
                        'application/ubjson': ['ubj'],
                        'application/urc-ressheet+xml': ['rsheet'],
                        'application/urc-targetdesc+xml': ['td'],
                        'application/voicexml+xml': ['vxml'],
                        'application/wasm': ['wasm'],
                        'application/widget': ['wgt'],
                        'application/winhlp': ['hlp'],
                        'application/wsdl+xml': ['wsdl'],
                        'application/wspolicy+xml': ['wspolicy'],
                        'application/xaml+xml': ['xaml'],
                        'application/xcap-att+xml': ['xav'],
                        'application/xcap-caps+xml': ['xca'],
                        'application/xcap-diff+xml': ['xdf'],
                        'application/xcap-el+xml': ['xel'],
                        'application/xcap-ns+xml': ['xns'],
                        'application/xenc+xml': ['xenc'],
                        'application/xhtml+xml': ['xhtml', 'xht'],
                        'application/xliff+xml': ['xlf'],
                        'application/xml': ['xml', 'xsl', 'xsd', 'rng'],
                        'application/xml-dtd': ['dtd'],
                        'application/xop+xml': ['xop'],
                        'application/xproc+xml': ['xpl'],
                        'application/xslt+xml': ['*xsl', 'xslt'],
                        'application/xspf+xml': ['xspf'],
                        'application/xv+xml': ['mxml', 'xhvml', 'xvml', 'xvm'],
                        'application/yang': ['yang'],
                        'application/yin+xml': ['yin'],
                        'application/zip': ['zip'],
                        'audio/3gpp': ['*3gpp'],
                        'audio/adpcm': ['adp'],
                        'audio/amr': ['amr'],
                        'audio/basic': ['au', 'snd'],
                        'audio/midi': ['mid', 'midi', 'kar', 'rmi'],
                        'audio/mobile-xmf': ['mxmf'],
                        'audio/mp3': ['*mp3'],
                        'audio/mp4': ['m4a', 'mp4a'],
                        'audio/mpeg': [
                            'mpga',
                            'mp2',
                            'mp2a',
                            'mp3',
                            'm2a',
                            'm3a',
                        ],
                        'audio/ogg': ['oga', 'ogg', 'spx', 'opus'],
                        'audio/s3m': ['s3m'],
                        'audio/silk': ['sil'],
                        'audio/wav': ['wav'],
                        'audio/wave': ['*wav'],
                        'audio/webm': ['weba'],
                        'audio/xm': ['xm'],
                        'font/collection': ['ttc'],
                        'font/otf': ['otf'],
                        'font/ttf': ['ttf'],
                        'font/woff': ['woff'],
                        'font/woff2': ['woff2'],
                        'image/aces': ['exr'],
                        'image/apng': ['apng'],
                        'image/avif': ['avif'],
                        'image/bmp': ['bmp'],
                        'image/cgm': ['cgm'],
                        'image/dicom-rle': ['drle'],
                        'image/emf': ['emf'],
                        'image/fits': ['fits'],
                        'image/g3fax': ['g3'],
                        'image/gif': ['gif'],
                        'image/heic': ['heic'],
                        'image/heic-sequence': ['heics'],
                        'image/heif': ['heif'],
                        'image/heif-sequence': ['heifs'],
                        'image/hej2k': ['hej2'],
                        'image/hsj2': ['hsj2'],
                        'image/ief': ['ief'],
                        'image/jls': ['jls'],
                        'image/jp2': ['jp2', 'jpg2'],
                        'image/jpeg': ['jpeg', 'jpg', 'jpe'],
                        'image/jph': ['jph'],
                        'image/jphc': ['jhc'],
                        'image/jpm': ['jpm'],
                        'image/jpx': ['jpx', 'jpf'],
                        'image/jxr': ['jxr'],
                        'image/jxra': ['jxra'],
                        'image/jxrs': ['jxrs'],
                        'image/jxs': ['jxs'],
                        'image/jxsc': ['jxsc'],
                        'image/jxsi': ['jxsi'],
                        'image/jxss': ['jxss'],
                        'image/ktx': ['ktx'],
                        'image/ktx2': ['ktx2'],
                        'image/png': ['png'],
                        'image/sgi': ['sgi'],
                        'image/svg+xml': ['svg', 'svgz'],
                        'image/t38': ['t38'],
                        'image/tiff': ['tif', 'tiff'],
                        'image/tiff-fx': ['tfx'],
                        'image/webp': ['webp'],
                        'image/wmf': ['wmf'],
                        'message/disposition-notification': [
                            'disposition-notification',
                        ],
                        'message/global': ['u8msg'],
                        'message/global-delivery-status': ['u8dsn'],
                        'message/global-disposition-notification': ['u8mdn'],
                        'message/global-headers': ['u8hdr'],
                        'message/rfc822': ['eml', 'mime'],
                        'model/3mf': ['3mf'],
                        'model/gltf+json': ['gltf'],
                        'model/gltf-binary': ['glb'],
                        'model/iges': ['igs', 'iges'],
                        'model/mesh': ['msh', 'mesh', 'silo'],
                        'model/mtl': ['mtl'],
                        'model/obj': ['obj'],
                        'model/step+xml': ['stpx'],
                        'model/step+zip': ['stpz'],
                        'model/step-xml+zip': ['stpxz'],
                        'model/stl': ['stl'],
                        'model/vrml': ['wrl', 'vrml'],
                        'model/x3d+binary': ['*x3db', 'x3dbz'],
                        'model/x3d+fastinfoset': ['x3db'],
                        'model/x3d+vrml': ['*x3dv', 'x3dvz'],
                        'model/x3d+xml': ['x3d', 'x3dz'],
                        'model/x3d-vrml': ['x3dv'],
                        'text/cache-manifest': ['appcache', 'manifest'],
                        'text/calendar': ['ics', 'ifb'],
                        'text/coffeescript': ['coffee', 'litcoffee'],
                        'text/css': ['css'],
                        'text/csv': ['csv'],
                        'text/html': ['html', 'htm', 'shtml'],
                        'text/jade': ['jade'],
                        'text/jsx': ['jsx'],
                        'text/less': ['less'],
                        'text/markdown': ['markdown', 'md'],
                        'text/mathml': ['mml'],
                        'text/mdx': ['mdx'],
                        'text/n3': ['n3'],
                        'text/plain': [
                            'txt',
                            'text',
                            'conf',
                            'def',
                            'list',
                            'log',
                            'in',
                            'ini',
                        ],
                        'text/richtext': ['rtx'],
                        'text/rtf': ['*rtf'],
                        'text/sgml': ['sgml', 'sgm'],
                        'text/shex': ['shex'],
                        'text/slim': ['slim', 'slm'],
                        'text/spdx': ['spdx'],
                        'text/stylus': ['stylus', 'styl'],
                        'text/tab-separated-values': ['tsv'],
                        'text/troff': ['t', 'tr', 'roff', 'man', 'me', 'ms'],
                        'text/turtle': ['ttl'],
                        'text/uri-list': ['uri', 'uris', 'urls'],
                        'text/vcard': ['vcard'],
                        'text/vtt': ['vtt'],
                        'text/xml': ['*xml'],
                        'text/yaml': ['yaml', 'yml'],
                        'video/3gpp': ['3gp', '3gpp'],
                        'video/3gpp2': ['3g2'],
                        'video/h261': ['h261'],
                        'video/h263': ['h263'],
                        'video/h264': ['h264'],
                        'video/iso.segment': ['m4s'],
                        'video/jpeg': ['jpgv'],
                        'video/jpm': ['*jpm', 'jpgm'],
                        'video/mj2': ['mj2', 'mjp2'],
                        'video/mp2t': ['ts'],
                        'video/mp4': ['mp4', 'mp4v', 'mpg4'],
                        'video/mpeg': ['mpeg', 'mpg', 'mpe', 'm1v', 'm2v'],
                        'video/ogg': ['ogv'],
                        'video/quicktime': ['qt', 'mov'],
                        'video/webm': ['webm'],
                    };
                }),
                Dt = F((t, e) => {
                    e.exports = {
                        'application/prs.cww': ['cww'],
                        'application/vnd.1000minds.decision-model+xml': ['1km'],
                        'application/vnd.3gpp.pic-bw-large': ['plb'],
                        'application/vnd.3gpp.pic-bw-small': ['psb'],
                        'application/vnd.3gpp.pic-bw-var': ['pvb'],
                        'application/vnd.3gpp2.tcap': ['tcap'],
                        'application/vnd.3m.post-it-notes': ['pwn'],
                        'application/vnd.accpac.simply.aso': ['aso'],
                        'application/vnd.accpac.simply.imp': ['imp'],
                        'application/vnd.acucobol': ['acu'],
                        'application/vnd.acucorp': ['atc', 'acutc'],
                        'application/vnd.adobe.air-application-installer-package+zip': [
                            'air',
                        ],
                        'application/vnd.adobe.formscentral.fcdt': ['fcdt'],
                        'application/vnd.adobe.fxp': ['fxp', 'fxpl'],
                        'application/vnd.adobe.xdp+xml': ['xdp'],
                        'application/vnd.adobe.xfdf': ['xfdf'],
                        'application/vnd.ahead.space': ['ahead'],
                        'application/vnd.airzip.filesecure.azf': ['azf'],
                        'application/vnd.airzip.filesecure.azs': ['azs'],
                        'application/vnd.amazon.ebook': ['azw'],
                        'application/vnd.americandynamics.acc': ['acc'],
                        'application/vnd.amiga.ami': ['ami'],
                        'application/vnd.android.package-archive': ['apk'],
                        'application/vnd.anser-web-certificate-issue-initiation': [
                            'cii',
                        ],
                        'application/vnd.anser-web-funds-transfer-initiation': [
                            'fti',
                        ],
                        'application/vnd.antix.game-component': ['atx'],
                        'application/vnd.apple.installer+xml': ['mpkg'],
                        'application/vnd.apple.keynote': ['key'],
                        'application/vnd.apple.mpegurl': ['m3u8'],
                        'application/vnd.apple.numbers': ['numbers'],
                        'application/vnd.apple.pages': ['pages'],
                        'application/vnd.apple.pkpass': ['pkpass'],
                        'application/vnd.aristanetworks.swi': ['swi'],
                        'application/vnd.astraea-software.iota': ['iota'],
                        'application/vnd.audiograph': ['aep'],
                        'application/vnd.balsamiq.bmml+xml': ['bmml'],
                        'application/vnd.blueice.multipass': ['mpm'],
                        'application/vnd.bmi': ['bmi'],
                        'application/vnd.businessobjects': ['rep'],
                        'application/vnd.chemdraw+xml': ['cdxml'],
                        'application/vnd.chipnuts.karaoke-mmd': ['mmd'],
                        'application/vnd.cinderella': ['cdy'],
                        'application/vnd.citationstyles.style+xml': ['csl'],
                        'application/vnd.claymore': ['cla'],
                        'application/vnd.cloanto.rp9': ['rp9'],
                        'application/vnd.clonk.c4group': [
                            'c4g',
                            'c4d',
                            'c4f',
                            'c4p',
                            'c4u',
                        ],
                        'application/vnd.cluetrust.cartomobile-config': [
                            'c11amc',
                        ],
                        'application/vnd.cluetrust.cartomobile-config-pkg': [
                            'c11amz',
                        ],
                        'application/vnd.commonspace': ['csp'],
                        'application/vnd.contact.cmsg': ['cdbcmsg'],
                        'application/vnd.cosmocaller': ['cmc'],
                        'application/vnd.crick.clicker': ['clkx'],
                        'application/vnd.crick.clicker.keyboard': ['clkk'],
                        'application/vnd.crick.clicker.palette': ['clkp'],
                        'application/vnd.crick.clicker.template': ['clkt'],
                        'application/vnd.crick.clicker.wordbank': ['clkw'],
                        'application/vnd.criticaltools.wbs+xml': ['wbs'],
                        'application/vnd.ctc-posml': ['pml'],
                        'application/vnd.cups-ppd': ['ppd'],
                        'application/vnd.curl.car': ['car'],
                        'application/vnd.curl.pcurl': ['pcurl'],
                        'application/vnd.dart': ['dart'],
                        'application/vnd.data-vision.rdz': ['rdz'],
                        'application/vnd.dbf': ['dbf'],
                        'application/vnd.dece.data': [
                            'uvf',
                            'uvvf',
                            'uvd',
                            'uvvd',
                        ],
                        'application/vnd.dece.ttml+xml': ['uvt', 'uvvt'],
                        'application/vnd.dece.unspecified': ['uvx', 'uvvx'],
                        'application/vnd.dece.zip': ['uvz', 'uvvz'],
                        'application/vnd.denovo.fcselayout-link': ['fe_launch'],
                        'application/vnd.dna': ['dna'],
                        'application/vnd.dolby.mlp': ['mlp'],
                        'application/vnd.dpgraph': ['dpg'],
                        'application/vnd.dreamfactory': ['dfac'],
                        'application/vnd.ds-keypoint': ['kpxx'],
                        'application/vnd.dvb.ait': ['ait'],
                        'application/vnd.dvb.service': ['svc'],
                        'application/vnd.dynageo': ['geo'],
                        'application/vnd.ecowin.chart': ['mag'],
                        'application/vnd.enliven': ['nml'],
                        'application/vnd.epson.esf': ['esf'],
                        'application/vnd.epson.msf': ['msf'],
                        'application/vnd.epson.quickanime': ['qam'],
                        'application/vnd.epson.salt': ['slt'],
                        'application/vnd.epson.ssf': ['ssf'],
                        'application/vnd.eszigno3+xml': ['es3', 'et3'],
                        'application/vnd.ezpix-album': ['ez2'],
                        'application/vnd.ezpix-package': ['ez3'],
                        'application/vnd.fdf': ['fdf'],
                        'application/vnd.fdsn.mseed': ['mseed'],
                        'application/vnd.fdsn.seed': ['seed', 'dataless'],
                        'application/vnd.flographit': ['gph'],
                        'application/vnd.fluxtime.clip': ['ftc'],
                        'application/vnd.framemaker': [
                            'fm',
                            'frame',
                            'maker',
                            'book',
                        ],
                        'application/vnd.frogans.fnc': ['fnc'],
                        'application/vnd.frogans.ltf': ['ltf'],
                        'application/vnd.fsc.weblaunch': ['fsc'],
                        'application/vnd.fujitsu.oasys': ['oas'],
                        'application/vnd.fujitsu.oasys2': ['oa2'],
                        'application/vnd.fujitsu.oasys3': ['oa3'],
                        'application/vnd.fujitsu.oasysgp': ['fg5'],
                        'application/vnd.fujitsu.oasysprs': ['bh2'],
                        'application/vnd.fujixerox.ddd': ['ddd'],
                        'application/vnd.fujixerox.docuworks': ['xdw'],
                        'application/vnd.fujixerox.docuworks.binder': ['xbd'],
                        'application/vnd.fuzzysheet': ['fzs'],
                        'application/vnd.genomatix.tuxedo': ['txd'],
                        'application/vnd.geogebra.file': ['ggb'],
                        'application/vnd.geogebra.tool': ['ggt'],
                        'application/vnd.geometry-explorer': ['gex', 'gre'],
                        'application/vnd.geonext': ['gxt'],
                        'application/vnd.geoplan': ['g2w'],
                        'application/vnd.geospace': ['g3w'],
                        'application/vnd.gmx': ['gmx'],
                        'application/vnd.google-apps.document': ['gdoc'],
                        'application/vnd.google-apps.presentation': ['gslides'],
                        'application/vnd.google-apps.spreadsheet': ['gsheet'],
                        'application/vnd.google-earth.kml+xml': ['kml'],
                        'application/vnd.google-earth.kmz': ['kmz'],
                        'application/vnd.grafeq': ['gqf', 'gqs'],
                        'application/vnd.groove-account': ['gac'],
                        'application/vnd.groove-help': ['ghf'],
                        'application/vnd.groove-identity-message': ['gim'],
                        'application/vnd.groove-injector': ['grv'],
                        'application/vnd.groove-tool-message': ['gtm'],
                        'application/vnd.groove-tool-template': ['tpl'],
                        'application/vnd.groove-vcard': ['vcg'],
                        'application/vnd.hal+xml': ['hal'],
                        'application/vnd.handheld-entertainment+xml': ['zmm'],
                        'application/vnd.hbci': ['hbci'],
                        'application/vnd.hhe.lesson-player': ['les'],
                        'application/vnd.hp-hpgl': ['hpgl'],
                        'application/vnd.hp-hpid': ['hpid'],
                        'application/vnd.hp-hps': ['hps'],
                        'application/vnd.hp-jlyt': ['jlt'],
                        'application/vnd.hp-pcl': ['pcl'],
                        'application/vnd.hp-pclxl': ['pclxl'],
                        'application/vnd.hydrostatix.sof-data': ['sfd-hdstx'],
                        'application/vnd.ibm.minipay': ['mpy'],
                        'application/vnd.ibm.modcap': [
                            'afp',
                            'listafp',
                            'list3820',
                        ],
                        'application/vnd.ibm.rights-management': ['irm'],
                        'application/vnd.ibm.secure-container': ['sc'],
                        'application/vnd.iccprofile': ['icc', 'icm'],
                        'application/vnd.igloader': ['igl'],
                        'application/vnd.immervision-ivp': ['ivp'],
                        'application/vnd.immervision-ivu': ['ivu'],
                        'application/vnd.insors.igm': ['igm'],
                        'application/vnd.intercon.formnet': ['xpw', 'xpx'],
                        'application/vnd.intergeo': ['i2g'],
                        'application/vnd.intu.qbo': ['qbo'],
                        'application/vnd.intu.qfx': ['qfx'],
                        'application/vnd.ipunplugged.rcprofile': ['rcprofile'],
                        'application/vnd.irepository.package+xml': ['irp'],
                        'application/vnd.is-xpr': ['xpr'],
                        'application/vnd.isac.fcs': ['fcs'],
                        'application/vnd.jam': ['jam'],
                        'application/vnd.jcp.javame.midlet-rms': ['rms'],
                        'application/vnd.jisp': ['jisp'],
                        'application/vnd.joost.joda-archive': ['joda'],
                        'application/vnd.kahootz': ['ktz', 'ktr'],
                        'application/vnd.kde.karbon': ['karbon'],
                        'application/vnd.kde.kchart': ['chrt'],
                        'application/vnd.kde.kformula': ['kfo'],
                        'application/vnd.kde.kivio': ['flw'],
                        'application/vnd.kde.kontour': ['kon'],
                        'application/vnd.kde.kpresenter': ['kpr', 'kpt'],
                        'application/vnd.kde.kspread': ['ksp'],
                        'application/vnd.kde.kword': ['kwd', 'kwt'],
                        'application/vnd.kenameaapp': ['htke'],
                        'application/vnd.kidspiration': ['kia'],
                        'application/vnd.kinar': ['kne', 'knp'],
                        'application/vnd.koan': ['skp', 'skd', 'skt', 'skm'],
                        'application/vnd.kodak-descriptor': ['sse'],
                        'application/vnd.las.las+xml': ['lasxml'],
                        'application/vnd.llamagraphics.life-balance.desktop': [
                            'lbd',
                        ],
                        'application/vnd.llamagraphics.life-balance.exchange+xml': [
                            'lbe',
                        ],
                        'application/vnd.lotus-1-2-3': ['123'],
                        'application/vnd.lotus-approach': ['apr'],
                        'application/vnd.lotus-freelance': ['pre'],
                        'application/vnd.lotus-notes': ['nsf'],
                        'application/vnd.lotus-organizer': ['org'],
                        'application/vnd.lotus-screencam': ['scm'],
                        'application/vnd.lotus-wordpro': ['lwp'],
                        'application/vnd.macports.portpkg': ['portpkg'],
                        'application/vnd.mapbox-vector-tile': ['mvt'],
                        'application/vnd.mcd': ['mcd'],
                        'application/vnd.medcalcdata': ['mc1'],
                        'application/vnd.mediastation.cdkey': ['cdkey'],
                        'application/vnd.mfer': ['mwf'],
                        'application/vnd.mfmp': ['mfm'],
                        'application/vnd.micrografx.flo': ['flo'],
                        'application/vnd.micrografx.igx': ['igx'],
                        'application/vnd.mif': ['mif'],
                        'application/vnd.mobius.daf': ['daf'],
                        'application/vnd.mobius.dis': ['dis'],
                        'application/vnd.mobius.mbk': ['mbk'],
                        'application/vnd.mobius.mqy': ['mqy'],
                        'application/vnd.mobius.msl': ['msl'],
                        'application/vnd.mobius.plc': ['plc'],
                        'application/vnd.mobius.txf': ['txf'],
                        'application/vnd.mophun.application': ['mpn'],
                        'application/vnd.mophun.certificate': ['mpc'],
                        'application/vnd.mozilla.xul+xml': ['xul'],
                        'application/vnd.ms-artgalry': ['cil'],
                        'application/vnd.ms-cab-compressed': ['cab'],
                        'application/vnd.ms-excel': [
                            'xls',
                            'xlm',
                            'xla',
                            'xlc',
                            'xlt',
                            'xlw',
                        ],
                        'application/vnd.ms-excel.addin.macroenabled.12': [
                            'xlam',
                        ],
                        'application/vnd.ms-excel.sheet.binary.macroenabled.12': [
                            'xlsb',
                        ],
                        'application/vnd.ms-excel.sheet.macroenabled.12': [
                            'xlsm',
                        ],
                        'application/vnd.ms-excel.template.macroenabled.12': [
                            'xltm',
                        ],
                        'application/vnd.ms-fontobject': ['eot'],
                        'application/vnd.ms-htmlhelp': ['chm'],
                        'application/vnd.ms-ims': ['ims'],
                        'application/vnd.ms-lrm': ['lrm'],
                        'application/vnd.ms-officetheme': ['thmx'],
                        'application/vnd.ms-outlook': ['msg'],
                        'application/vnd.ms-pki.seccat': ['cat'],
                        'application/vnd.ms-pki.stl': ['*stl'],
                        'application/vnd.ms-powerpoint': ['ppt', 'pps', 'pot'],
                        'application/vnd.ms-powerpoint.addin.macroenabled.12': [
                            'ppam',
                        ],
                        'application/vnd.ms-powerpoint.presentation.macroenabled.12': [
                            'pptm',
                        ],
                        'application/vnd.ms-powerpoint.slide.macroenabled.12': [
                            'sldm',
                        ],
                        'application/vnd.ms-powerpoint.slideshow.macroenabled.12': [
                            'ppsm',
                        ],
                        'application/vnd.ms-powerpoint.template.macroenabled.12': [
                            'potm',
                        ],
                        'application/vnd.ms-project': ['mpp', 'mpt'],
                        'application/vnd.ms-word.document.macroenabled.12': [
                            'docm',
                        ],
                        'application/vnd.ms-word.template.macroenabled.12': [
                            'dotm',
                        ],
                        'application/vnd.ms-works': [
                            'wps',
                            'wks',
                            'wcm',
                            'wdb',
                        ],
                        'application/vnd.ms-wpl': ['wpl'],
                        'application/vnd.ms-xpsdocument': ['xps'],
                        'application/vnd.mseq': ['mseq'],
                        'application/vnd.musician': ['mus'],
                        'application/vnd.muvee.style': ['msty'],
                        'application/vnd.mynfc': ['taglet'],
                        'application/vnd.neurolanguage.nlu': ['nlu'],
                        'application/vnd.nitf': ['ntf', 'nitf'],
                        'application/vnd.noblenet-directory': ['nnd'],
                        'application/vnd.noblenet-sealer': ['nns'],
                        'application/vnd.noblenet-web': ['nnw'],
                        'application/vnd.nokia.n-gage.ac+xml': ['*ac'],
                        'application/vnd.nokia.n-gage.data': ['ngdat'],
                        'application/vnd.nokia.n-gage.symbian.install': [
                            'n-gage',
                        ],
                        'application/vnd.nokia.radio-preset': ['rpst'],
                        'application/vnd.nokia.radio-presets': ['rpss'],
                        'application/vnd.novadigm.edm': ['edm'],
                        'application/vnd.novadigm.edx': ['edx'],
                        'application/vnd.novadigm.ext': ['ext'],
                        'application/vnd.oasis.opendocument.chart': ['odc'],
                        'application/vnd.oasis.opendocument.chart-template': [
                            'otc',
                        ],
                        'application/vnd.oasis.opendocument.database': ['odb'],
                        'application/vnd.oasis.opendocument.formula': ['odf'],
                        'application/vnd.oasis.opendocument.formula-template': [
                            'odft',
                        ],
                        'application/vnd.oasis.opendocument.graphics': ['odg'],
                        'application/vnd.oasis.opendocument.graphics-template': [
                            'otg',
                        ],
                        'application/vnd.oasis.opendocument.image': ['odi'],
                        'application/vnd.oasis.opendocument.image-template': [
                            'oti',
                        ],
                        'application/vnd.oasis.opendocument.presentation': [
                            'odp',
                        ],
                        'application/vnd.oasis.opendocument.presentation-template': [
                            'otp',
                        ],
                        'application/vnd.oasis.opendocument.spreadsheet': [
                            'ods',
                        ],
                        'application/vnd.oasis.opendocument.spreadsheet-template': [
                            'ots',
                        ],
                        'application/vnd.oasis.opendocument.text': ['odt'],
                        'application/vnd.oasis.opendocument.text-master': [
                            'odm',
                        ],
                        'application/vnd.oasis.opendocument.text-template': [
                            'ott',
                        ],
                        'application/vnd.oasis.opendocument.text-web': ['oth'],
                        'application/vnd.olpc-sugar': ['xo'],
                        'application/vnd.oma.dd2+xml': ['dd2'],
                        'application/vnd.openblox.game+xml': ['obgx'],
                        'application/vnd.openofficeorg.extension': ['oxt'],
                        'application/vnd.openstreetmap.data+xml': ['osm'],
                        'application/vnd.openxmlformats-officedocument.presentationml.presentation': [
                            'pptx',
                        ],
                        'application/vnd.openxmlformats-officedocument.presentationml.slide': [
                            'sldx',
                        ],
                        'application/vnd.openxmlformats-officedocument.presentationml.slideshow': [
                            'ppsx',
                        ],
                        'application/vnd.openxmlformats-officedocument.presentationml.template': [
                            'potx',
                        ],
                        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': [
                            'xlsx',
                        ],
                        'application/vnd.openxmlformats-officedocument.spreadsheetml.template': [
                            'xltx',
                        ],
                        'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [
                            'docx',
                        ],
                        'application/vnd.openxmlformats-officedocument.wordprocessingml.template': [
                            'dotx',
                        ],
                        'application/vnd.osgeo.mapguide.package': ['mgp'],
                        'application/vnd.osgi.dp': ['dp'],
                        'application/vnd.osgi.subsystem': ['esa'],
                        'application/vnd.palm': ['pdb', 'pqa', 'oprc'],
                        'application/vnd.pawaafile': ['paw'],
                        'application/vnd.pg.format': ['str'],
                        'application/vnd.pg.osasli': ['ei6'],
                        'application/vnd.picsel': ['efif'],
                        'application/vnd.pmi.widget': ['wg'],
                        'application/vnd.pocketlearn': ['plf'],
                        'application/vnd.powerbuilder6': ['pbd'],
                        'application/vnd.previewsystems.box': ['box'],
                        'application/vnd.proteus.magazine': ['mgz'],
                        'application/vnd.publishare-delta-tree': ['qps'],
                        'application/vnd.pvi.ptid1': ['ptid'],
                        'application/vnd.quark.quarkxpress': [
                            'qxd',
                            'qxt',
                            'qwd',
                            'qwt',
                            'qxl',
                            'qxb',
                        ],
                        'application/vnd.rar': ['rar'],
                        'application/vnd.realvnc.bed': ['bed'],
                        'application/vnd.recordare.musicxml': ['mxl'],
                        'application/vnd.recordare.musicxml+xml': ['musicxml'],
                        'application/vnd.rig.cryptonote': ['cryptonote'],
                        'application/vnd.rim.cod': ['cod'],
                        'application/vnd.rn-realmedia': ['rm'],
                        'application/vnd.rn-realmedia-vbr': ['rmvb'],
                        'application/vnd.route66.link66+xml': ['link66'],
                        'application/vnd.sailingtracker.track': ['st'],
                        'application/vnd.seemail': ['see'],
                        'application/vnd.sema': ['sema'],
                        'application/vnd.semd': ['semd'],
                        'application/vnd.semf': ['semf'],
                        'application/vnd.shana.informed.formdata': ['ifm'],
                        'application/vnd.shana.informed.formtemplate': ['itp'],
                        'application/vnd.shana.informed.interchange': ['iif'],
                        'application/vnd.shana.informed.package': ['ipk'],
                        'application/vnd.simtech-mindmapper': ['twd', 'twds'],
                        'application/vnd.smaf': ['mmf'],
                        'application/vnd.smart.teacher': ['teacher'],
                        'application/vnd.software602.filler.form+xml': ['fo'],
                        'application/vnd.solent.sdkm+xml': ['sdkm', 'sdkd'],
                        'application/vnd.spotfire.dxp': ['dxp'],
                        'application/vnd.spotfire.sfs': ['sfs'],
                        'application/vnd.stardivision.calc': ['sdc'],
                        'application/vnd.stardivision.draw': ['sda'],
                        'application/vnd.stardivision.impress': ['sdd'],
                        'application/vnd.stardivision.math': ['smf'],
                        'application/vnd.stardivision.writer': ['sdw', 'vor'],
                        'application/vnd.stardivision.writer-global': ['sgl'],
                        'application/vnd.stepmania.package': ['smzip'],
                        'application/vnd.stepmania.stepchart': ['sm'],
                        'application/vnd.sun.wadl+xml': ['wadl'],
                        'application/vnd.sun.xml.calc': ['sxc'],
                        'application/vnd.sun.xml.calc.template': ['stc'],
                        'application/vnd.sun.xml.draw': ['sxd'],
                        'application/vnd.sun.xml.draw.template': ['std'],
                        'application/vnd.sun.xml.impress': ['sxi'],
                        'application/vnd.sun.xml.impress.template': ['sti'],
                        'application/vnd.sun.xml.math': ['sxm'],
                        'application/vnd.sun.xml.writer': ['sxw'],
                        'application/vnd.sun.xml.writer.global': ['sxg'],
                        'application/vnd.sun.xml.writer.template': ['stw'],
                        'application/vnd.sus-calendar': ['sus', 'susp'],
                        'application/vnd.svd': ['svd'],
                        'application/vnd.symbian.install': ['sis', 'sisx'],
                        'application/vnd.syncml+xml': ['xsm'],
                        'application/vnd.syncml.dm+wbxml': ['bdm'],
                        'application/vnd.syncml.dm+xml': ['xdm'],
                        'application/vnd.syncml.dmddf+xml': ['ddf'],
                        'application/vnd.tao.intent-module-archive': ['tao'],
                        'application/vnd.tcpdump.pcap': ['pcap', 'cap', 'dmp'],
                        'application/vnd.tmobile-livetv': ['tmo'],
                        'application/vnd.trid.tpt': ['tpt'],
                        'application/vnd.triscape.mxs': ['mxs'],
                        'application/vnd.trueapp': ['tra'],
                        'application/vnd.ufdl': ['ufd', 'ufdl'],
                        'application/vnd.uiq.theme': ['utz'],
                        'application/vnd.umajin': ['umj'],
                        'application/vnd.unity': ['unityweb'],
                        'application/vnd.uoml+xml': ['uoml'],
                        'application/vnd.vcx': ['vcx'],
                        'application/vnd.visio': ['vsd', 'vst', 'vss', 'vsw'],
                        'application/vnd.visionary': ['vis'],
                        'application/vnd.vsf': ['vsf'],
                        'application/vnd.wap.wbxml': ['wbxml'],
                        'application/vnd.wap.wmlc': ['wmlc'],
                        'application/vnd.wap.wmlscriptc': ['wmlsc'],
                        'application/vnd.webturbo': ['wtb'],
                        'application/vnd.wolfram.player': ['nbp'],
                        'application/vnd.wordperfect': ['wpd'],
                        'application/vnd.wqd': ['wqd'],
                        'application/vnd.wt.stf': ['stf'],
                        'application/vnd.xara': ['xar'],
                        'application/vnd.xfdl': ['xfdl'],
                        'application/vnd.yamaha.hv-dic': ['hvd'],
                        'application/vnd.yamaha.hv-script': ['hvs'],
                        'application/vnd.yamaha.hv-voice': ['hvp'],
                        'application/vnd.yamaha.openscoreformat': ['osf'],
                        'application/vnd.yamaha.openscoreformat.osfpvg+xml': [
                            'osfpvg',
                        ],
                        'application/vnd.yamaha.smaf-audio': ['saf'],
                        'application/vnd.yamaha.smaf-phrase': ['spf'],
                        'application/vnd.yellowriver-custom-menu': ['cmp'],
                        'application/vnd.zul': ['zir', 'zirz'],
                        'application/vnd.zzazz.deck+xml': ['zaz'],
                        'application/x-7z-compressed': ['7z'],
                        'application/x-abiword': ['abw'],
                        'application/x-ace-compressed': ['ace'],
                        'application/x-apple-diskimage': ['*dmg'],
                        'application/x-arj': ['arj'],
                        'application/x-authorware-bin': [
                            'aab',
                            'x32',
                            'u32',
                            'vox',
                        ],
                        'application/x-authorware-map': ['aam'],
                        'application/x-authorware-seg': ['aas'],
                        'application/x-bcpio': ['bcpio'],
                        'application/x-bdoc': ['*bdoc'],
                        'application/x-bittorrent': ['torrent'],
                        'application/x-blorb': ['blb', 'blorb'],
                        'application/x-bzip': ['bz'],
                        'application/x-bzip2': ['bz2', 'boz'],
                        'application/x-cbr': [
                            'cbr',
                            'cba',
                            'cbt',
                            'cbz',
                            'cb7',
                        ],
                        'application/x-cdlink': ['vcd'],
                        'application/x-cfs-compressed': ['cfs'],
                        'application/x-chat': ['chat'],
                        'application/x-chess-pgn': ['pgn'],
                        'application/x-chrome-extension': ['crx'],
                        'application/x-cocoa': ['cco'],
                        'application/x-conference': ['nsc'],
                        'application/x-cpio': ['cpio'],
                        'application/x-csh': ['csh'],
                        'application/x-debian-package': ['*deb', 'udeb'],
                        'application/x-dgc-compressed': ['dgc'],
                        'application/x-director': [
                            'dir',
                            'dcr',
                            'dxr',
                            'cst',
                            'cct',
                            'cxt',
                            'w3d',
                            'fgd',
                            'swa',
                        ],
                        'application/x-doom': ['wad'],
                        'application/x-dtbncx+xml': ['ncx'],
                        'application/x-dtbook+xml': ['dtb'],
                        'application/x-dtbresource+xml': ['res'],
                        'application/x-dvi': ['dvi'],
                        'application/x-envoy': ['evy'],
                        'application/x-eva': ['eva'],
                        'application/x-font-bdf': ['bdf'],
                        'application/x-font-ghostscript': ['gsf'],
                        'application/x-font-linux-psf': ['psf'],
                        'application/x-font-pcf': ['pcf'],
                        'application/x-font-snf': ['snf'],
                        'application/x-font-type1': [
                            'pfa',
                            'pfb',
                            'pfm',
                            'afm',
                        ],
                        'application/x-freearc': ['arc'],
                        'application/x-futuresplash': ['spl'],
                        'application/x-gca-compressed': ['gca'],
                        'application/x-glulx': ['ulx'],
                        'application/x-gnumeric': ['gnumeric'],
                        'application/x-gramps-xml': ['gramps'],
                        'application/x-gtar': ['gtar'],
                        'application/x-hdf': ['hdf'],
                        'application/x-httpd-php': ['php'],
                        'application/x-install-instructions': ['install'],
                        'application/x-iso9660-image': ['*iso'],
                        'application/x-iwork-keynote-sffkey': ['*key'],
                        'application/x-iwork-numbers-sffnumbers': ['*numbers'],
                        'application/x-iwork-pages-sffpages': ['*pages'],
                        'application/x-java-archive-diff': ['jardiff'],
                        'application/x-java-jnlp-file': ['jnlp'],
                        'application/x-keepass2': ['kdbx'],
                        'application/x-latex': ['latex'],
                        'application/x-lua-bytecode': ['luac'],
                        'application/x-lzh-compressed': ['lzh', 'lha'],
                        'application/x-makeself': ['run'],
                        'application/x-mie': ['mie'],
                        'application/x-mobipocket-ebook': ['prc', 'mobi'],
                        'application/x-ms-application': ['application'],
                        'application/x-ms-shortcut': ['lnk'],
                        'application/x-ms-wmd': ['wmd'],
                        'application/x-ms-wmz': ['wmz'],
                        'application/x-ms-xbap': ['xbap'],
                        'application/x-msaccess': ['mdb'],
                        'application/x-msbinder': ['obd'],
                        'application/x-mscardfile': ['crd'],
                        'application/x-msclip': ['clp'],
                        'application/x-msdos-program': ['*exe'],
                        'application/x-msdownload': [
                            '*exe',
                            '*dll',
                            'com',
                            'bat',
                            '*msi',
                        ],
                        'application/x-msmediaview': ['mvb', 'm13', 'm14'],
                        'application/x-msmetafile': [
                            '*wmf',
                            '*wmz',
                            '*emf',
                            'emz',
                        ],
                        'application/x-msmoney': ['mny'],
                        'application/x-mspublisher': ['pub'],
                        'application/x-msschedule': ['scd'],
                        'application/x-msterminal': ['trm'],
                        'application/x-mswrite': ['wri'],
                        'application/x-netcdf': ['nc', 'cdf'],
                        'application/x-ns-proxy-autoconfig': ['pac'],
                        'application/x-nzb': ['nzb'],
                        'application/x-perl': ['pl', 'pm'],
                        'application/x-pilot': ['*prc', '*pdb'],
                        'application/x-pkcs12': ['p12', 'pfx'],
                        'application/x-pkcs7-certificates': ['p7b', 'spc'],
                        'application/x-pkcs7-certreqresp': ['p7r'],
                        'application/x-rar-compressed': ['*rar'],
                        'application/x-redhat-package-manager': ['rpm'],
                        'application/x-research-info-systems': ['ris'],
                        'application/x-sea': ['sea'],
                        'application/x-sh': ['sh'],
                        'application/x-shar': ['shar'],
                        'application/x-shockwave-flash': ['swf'],
                        'application/x-silverlight-app': ['xap'],
                        'application/x-sql': ['sql'],
                        'application/x-stuffit': ['sit'],
                        'application/x-stuffitx': ['sitx'],
                        'application/x-subrip': ['srt'],
                        'application/x-sv4cpio': ['sv4cpio'],
                        'application/x-sv4crc': ['sv4crc'],
                        'application/x-t3vm-image': ['t3'],
                        'application/x-tads': ['gam'],
                        'application/x-tar': ['tar'],
                        'application/x-tcl': ['tcl', 'tk'],
                        'application/x-tex': ['tex'],
                        'application/x-tex-tfm': ['tfm'],
                        'application/x-texinfo': ['texinfo', 'texi'],
                        'application/x-tgif': ['*obj'],
                        'application/x-ustar': ['ustar'],
                        'application/x-virtualbox-hdd': ['hdd'],
                        'application/x-virtualbox-ova': ['ova'],
                        'application/x-virtualbox-ovf': ['ovf'],
                        'application/x-virtualbox-vbox': ['vbox'],
                        'application/x-virtualbox-vbox-extpack': [
                            'vbox-extpack',
                        ],
                        'application/x-virtualbox-vdi': ['vdi'],
                        'application/x-virtualbox-vhd': ['vhd'],
                        'application/x-virtualbox-vmdk': ['vmdk'],
                        'application/x-wais-source': ['src'],
                        'application/x-web-app-manifest+json': ['webapp'],
                        'application/x-x509-ca-cert': ['der', 'crt', 'pem'],
                        'application/x-xfig': ['fig'],
                        'application/x-xliff+xml': ['*xlf'],
                        'application/x-xpinstall': ['xpi'],
                        'application/x-xz': ['xz'],
                        'application/x-zmachine': [
                            'z1',
                            'z2',
                            'z3',
                            'z4',
                            'z5',
                            'z6',
                            'z7',
                            'z8',
                        ],
                        'audio/vnd.dece.audio': ['uva', 'uvva'],
                        'audio/vnd.digital-winds': ['eol'],
                        'audio/vnd.dra': ['dra'],
                        'audio/vnd.dts': ['dts'],
                        'audio/vnd.dts.hd': ['dtshd'],
                        'audio/vnd.lucent.voice': ['lvp'],
                        'audio/vnd.ms-playready.media.pya': ['pya'],
                        'audio/vnd.nuera.ecelp4800': ['ecelp4800'],
                        'audio/vnd.nuera.ecelp7470': ['ecelp7470'],
                        'audio/vnd.nuera.ecelp9600': ['ecelp9600'],
                        'audio/vnd.rip': ['rip'],
                        'audio/x-aac': ['aac'],
                        'audio/x-aiff': ['aif', 'aiff', 'aifc'],
                        'audio/x-caf': ['caf'],
                        'audio/x-flac': ['flac'],
                        'audio/x-m4a': ['*m4a'],
                        'audio/x-matroska': ['mka'],
                        'audio/x-mpegurl': ['m3u'],
                        'audio/x-ms-wax': ['wax'],
                        'audio/x-ms-wma': ['wma'],
                        'audio/x-pn-realaudio': ['ram', 'ra'],
                        'audio/x-pn-realaudio-plugin': ['rmp'],
                        'audio/x-realaudio': ['*ra'],
                        'audio/x-wav': ['*wav'],
                        'chemical/x-cdx': ['cdx'],
                        'chemical/x-cif': ['cif'],
                        'chemical/x-cmdf': ['cmdf'],
                        'chemical/x-cml': ['cml'],
                        'chemical/x-csml': ['csml'],
                        'chemical/x-xyz': ['xyz'],
                        'image/prs.btif': ['btif'],
                        'image/prs.pti': ['pti'],
                        'image/vnd.adobe.photoshop': ['psd'],
                        'image/vnd.airzip.accelerator.azv': ['azv'],
                        'image/vnd.dece.graphic': [
                            'uvi',
                            'uvvi',
                            'uvg',
                            'uvvg',
                        ],
                        'image/vnd.djvu': ['djvu', 'djv'],
                        'image/vnd.dvb.subtitle': ['*sub'],
                        'image/vnd.dwg': ['dwg'],
                        'image/vnd.dxf': ['dxf'],
                        'image/vnd.fastbidsheet': ['fbs'],
                        'image/vnd.fpx': ['fpx'],
                        'image/vnd.fst': ['fst'],
                        'image/vnd.fujixerox.edmics-mmr': ['mmr'],
                        'image/vnd.fujixerox.edmics-rlc': ['rlc'],
                        'image/vnd.microsoft.icon': ['ico'],
                        'image/vnd.ms-dds': ['dds'],
                        'image/vnd.ms-modi': ['mdi'],
                        'image/vnd.ms-photo': ['wdp'],
                        'image/vnd.net-fpx': ['npx'],
                        'image/vnd.pco.b16': ['b16'],
                        'image/vnd.tencent.tap': ['tap'],
                        'image/vnd.valve.source.texture': ['vtf'],
                        'image/vnd.wap.wbmp': ['wbmp'],
                        'image/vnd.xiff': ['xif'],
                        'image/vnd.zbrush.pcx': ['pcx'],
                        'image/x-3ds': ['3ds'],
                        'image/x-cmu-raster': ['ras'],
                        'image/x-cmx': ['cmx'],
                        'image/x-freehand': ['fh', 'fhc', 'fh4', 'fh5', 'fh7'],
                        'image/x-icon': ['*ico'],
                        'image/x-jng': ['jng'],
                        'image/x-mrsid-image': ['sid'],
                        'image/x-ms-bmp': ['*bmp'],
                        'image/x-pcx': ['*pcx'],
                        'image/x-pict': ['pic', 'pct'],
                        'image/x-portable-anymap': ['pnm'],
                        'image/x-portable-bitmap': ['pbm'],
                        'image/x-portable-graymap': ['pgm'],
                        'image/x-portable-pixmap': ['ppm'],
                        'image/x-rgb': ['rgb'],
                        'image/x-tga': ['tga'],
                        'image/x-xbitmap': ['xbm'],
                        'image/x-xpixmap': ['xpm'],
                        'image/x-xwindowdump': ['xwd'],
                        'message/vnd.wfa.wsc': ['wsc'],
                        'model/vnd.collada+xml': ['dae'],
                        'model/vnd.dwf': ['dwf'],
                        'model/vnd.gdl': ['gdl'],
                        'model/vnd.gtw': ['gtw'],
                        'model/vnd.mts': ['mts'],
                        'model/vnd.opengex': ['ogex'],
                        'model/vnd.parasolid.transmit.binary': ['x_b'],
                        'model/vnd.parasolid.transmit.text': ['x_t'],
                        'model/vnd.sap.vds': ['vds'],
                        'model/vnd.usdz+zip': ['usdz'],
                        'model/vnd.valve.source.compiled-map': ['bsp'],
                        'model/vnd.vtu': ['vtu'],
                        'text/prs.lines.tag': ['dsc'],
                        'text/vnd.curl': ['curl'],
                        'text/vnd.curl.dcurl': ['dcurl'],
                        'text/vnd.curl.mcurl': ['mcurl'],
                        'text/vnd.curl.scurl': ['scurl'],
                        'text/vnd.dvb.subtitle': ['sub'],
                        'text/vnd.fly': ['fly'],
                        'text/vnd.fmi.flexstor': ['flx'],
                        'text/vnd.graphviz': ['gv'],
                        'text/vnd.in3d.3dml': ['3dml'],
                        'text/vnd.in3d.spot': ['spot'],
                        'text/vnd.sun.j2me.app-descriptor': ['jad'],
                        'text/vnd.wap.wml': ['wml'],
                        'text/vnd.wap.wmlscript': ['wmls'],
                        'text/x-asm': ['s', 'asm'],
                        'text/x-c': ['c', 'cc', 'cxx', 'cpp', 'h', 'hh', 'dic'],
                        'text/x-component': ['htc'],
                        'text/x-fortran': ['f', 'for', 'f77', 'f90'],
                        'text/x-handlebars-template': ['hbs'],
                        'text/x-java-source': ['java'],
                        'text/x-lua': ['lua'],
                        'text/x-markdown': ['mkd'],
                        'text/x-nfo': ['nfo'],
                        'text/x-opml': ['opml'],
                        'text/x-org': ['*org'],
                        'text/x-pascal': ['p', 'pas'],
                        'text/x-processing': ['pde'],
                        'text/x-sass': ['sass'],
                        'text/x-scss': ['scss'],
                        'text/x-setext': ['etx'],
                        'text/x-sfv': ['sfv'],
                        'text/x-suse-ymp': ['ymp'],
                        'text/x-uuencode': ['uu'],
                        'text/x-vcalendar': ['vcs'],
                        'text/x-vcard': ['vcf'],
                        'video/vnd.dece.hd': ['uvh', 'uvvh'],
                        'video/vnd.dece.mobile': ['uvm', 'uvvm'],
                        'video/vnd.dece.pd': ['uvp', 'uvvp'],
                        'video/vnd.dece.sd': ['uvs', 'uvvs'],
                        'video/vnd.dece.video': ['uvv', 'uvvv'],
                        'video/vnd.dvb.file': ['dvb'],
                        'video/vnd.fvt': ['fvt'],
                        'video/vnd.mpegurl': ['mxu', 'm4u'],
                        'video/vnd.ms-playready.media.pyv': ['pyv'],
                        'video/vnd.uvvu.mp4': ['uvu', 'uvvu'],
                        'video/vnd.vivo': ['viv'],
                        'video/x-f4v': ['f4v'],
                        'video/x-fli': ['fli'],
                        'video/x-flv': ['flv'],
                        'video/x-m4v': ['m4v'],
                        'video/x-matroska': ['mkv', 'mk3d', 'mks'],
                        'video/x-mng': ['mng'],
                        'video/x-ms-asf': ['asf', 'asx'],
                        'video/x-ms-vob': ['vob'],
                        'video/x-ms-wm': ['wm'],
                        'video/x-ms-wmv': ['wmv'],
                        'video/x-ms-wmx': ['wmx'],
                        'video/x-ms-wvx': ['wvx'],
                        'video/x-msvideo': ['avi'],
                        'video/x-sgi-movie': ['movie'],
                        'video/x-smv': ['smv'],
                        'x-conference/x-cooltalk': ['ice'],
                    };
                }),
                Tt = F((t, e) => {
                    var i = zt();
                    e.exports = new i(Et(), Dt());
                }),
                At,
                qt,
                Le,
                Ti,
                Y,
                ne,
                Ai,
                Fe = ce(() => {
                    var t;
                    (At = se(xe())),
                        (qt = se(Tt())),
                        (Le = se(pe())),
                        (Ti = new Le.Token('@jupyterlite/contents:IContents')),
                        ((t = Y || (Y = {})).JSON = 'application/json'),
                        (t.PLAIN_TEXT = 'text/plain'),
                        (t.OCTET_STREAM = 'octet/stream'),
                        (function(t) {
                            let e = JSON.parse(
                                At.PageConfig.getOption('fileTypes') || '{}'
                            );
                            (t.getType = function(t, i = null) {
                                t = t.toLowerCase();
                                for (let i of Object.values(e))
                                    for (let e of i.extensions || [])
                                        if (
                                            e === t &&
                                            i.mimeTypes &&
                                            i.mimeTypes.length
                                        )
                                            return i.mimeTypes[0];
                                return (
                                    qt.default.getType(t) || i || Y.OCTET_STREAM
                                );
                            }),
                                (t.hasFormat = function(t, i) {
                                    t = t.toLowerCase();
                                    for (let a of Object.values(e))
                                        if (a.fileFormat === i)
                                            for (let e of a.extensions || [])
                                                if (e === t) return !0;
                                    return !1;
                                });
                        })(ne || (ne = {})),
                        (Ai = new Le.Token(
                            '@jupyterlite/contents:IBroadcastChannelWrapper'
                        ));
                }),
                oe,
                X,
                Lt,
                Ut,
                Nt,
                Be,
                Se,
                Ft = ce(() => {
                    (oe = se(xe())),
                        (X = se(xe())),
                        Fe(),
                        (Lt = se(pe())),
                        (Ut = 'JupyterLite Storage'),
                        (Nt = 5),
                        (Be = class {
                            constructor(t) {
                                (this.reduceBytesToString = (t, e) =>
                                    t + String.fromCharCode(e)),
                                    (this._serverContents = new Map()),
                                    (this._storageName = Ut),
                                    (this._storageDrivers = null),
                                    (this._localforage = t.localforage),
                                    (this._storageName = t.storageName || Ut),
                                    (this._storageDrivers =
                                        t.storageDrivers || null),
                                    (this._ready = new Lt.PromiseDelegate());
                            }
                            async initialize() {
                                await this.initStorage(),
                                    this._ready.resolve(void 0);
                            }
                            async initStorage() {
                                (this._storage = this.createDefaultStorage()),
                                    (this._counters = this.createDefaultCounters()),
                                    (this._checkpoints = this.createDefaultCheckpoints());
                            }
                            get ready() {
                                return this._ready.promise;
                            }
                            get storage() {
                                return this.ready.then(() => this._storage);
                            }
                            get counters() {
                                return this.ready.then(() => this._counters);
                            }
                            get checkpoints() {
                                return this.ready.then(() => this._checkpoints);
                            }
                            get defaultStorageOptions() {
                                let t =
                                    this._storageDrivers &&
                                    this._storageDrivers.length
                                        ? this._storageDrivers
                                        : null;
                                return {
                                    version: 1,
                                    name: this._storageName,
                                    ...(t ? { driver: t } : {}),
                                };
                            }
                            createDefaultStorage() {
                                return this._localforage.createInstance({
                                    description:
                                        'Offline Storage for Notebooks and Files',
                                    storeName: 'files',
                                    ...this.defaultStorageOptions,
                                });
                            }
                            createDefaultCounters() {
                                return this._localforage.createInstance({
                                    description:
                                        'Store the current file suffix counters',
                                    storeName: 'counters',
                                    ...this.defaultStorageOptions,
                                });
                            }
                            createDefaultCheckpoints() {
                                return this._localforage.createInstance({
                                    description:
                                        'Offline Storage for Checkpoints',
                                    storeName: 'checkpoints',
                                    ...this.defaultStorageOptions,
                                });
                            }
                            async newUntitled(t) {
                                var e, i, a;
                                let n,
                                    o =
                                        null !==
                                            (e = null == t ? void 0 : t.path) &&
                                        void 0 !== e
                                            ? e
                                            : '',
                                    r =
                                        null !==
                                            (i = null == t ? void 0 : t.type) &&
                                        void 0 !== i
                                            ? i
                                            : 'notebook',
                                    l = new Date().toISOString(),
                                    p = X.PathExt.dirname(o),
                                    s = X.PathExt.basename(o),
                                    c = X.PathExt.extname(o),
                                    d = await this.get(p),
                                    m = '';
                                switch (
                                    (o && !c && d
                                        ? ((p = `${o}/`), (m = ''))
                                        : p && s
                                        ? ((p = `${p}/`), (m = s))
                                        : ((p = ''), (m = o)),
                                    r)
                                ) {
                                    case 'directory':
                                        (m = `Untitled Folder${(await this._incrementCounter(
                                            'directory'
                                        )) || ''}`),
                                            (n = {
                                                name: m,
                                                path: `${p}${m}`,
                                                last_modified: l,
                                                created: l,
                                                format: 'json',
                                                mimetype: '',
                                                content: null,
                                                size: 0,
                                                writable: !0,
                                                type: 'directory',
                                            });
                                        break;
                                    case 'notebook': {
                                        let t = await this._incrementCounter(
                                            'notebook'
                                        );
                                        (m = m || `Untitled${t || ''}.ipynb`),
                                            (n = {
                                                name: m,
                                                path: `${p}${m}`,
                                                last_modified: l,
                                                created: l,
                                                format: 'json',
                                                mimetype: Y.JSON,
                                                content: Se.EMPTY_NB,
                                                size: JSON.stringify(
                                                    Se.EMPTY_NB
                                                ).length,
                                                writable: !0,
                                                type: 'notebook',
                                            });
                                        break;
                                    }
                                    default: {
                                        let e,
                                            i =
                                                null !==
                                                    (a =
                                                        null == t
                                                            ? void 0
                                                            : t.ext) &&
                                                void 0 !== a
                                                    ? a
                                                    : '.txt',
                                            o = await this._incrementCounter(
                                                'file'
                                            ),
                                            r = ne.getType(i) || Y.OCTET_STREAM;
                                        (e =
                                            ne.hasFormat(i, 'text') ||
                                            -1 !== r.indexOf('text')
                                                ? 'text'
                                                : -1 !== i.indexOf('json') ||
                                                  -1 !== i.indexOf('ipynb')
                                                ? 'json'
                                                : 'base64'),
                                            (m = m || `untitled${o || ''}${i}`),
                                            (n = {
                                                name: m,
                                                path: `${p}${m}`,
                                                last_modified: l,
                                                created: l,
                                                format: e,
                                                mimetype: r,
                                                content: '',
                                                size: 0,
                                                writable: !0,
                                                type: 'file',
                                            });
                                        break;
                                    }
                                }
                                let u = n.path;
                                return (
                                    await (await this.storage).setItem(u, n), n
                                );
                            }
                            async copy(t, e) {
                                let i = X.PathExt.basename(t);
                                for (
                                    e = '' === e ? '' : `${e.slice(1)}/`;
                                    await this.get(`${e}${i}`, { content: !0 });

                                ) {
                                    let t = X.PathExt.extname(i);
                                    i = `${i.replace(t, '')} (copy)${t}`;
                                }
                                let a = `${e}${i}`,
                                    n = await this.get(t, { content: !0 });
                                if (!n)
                                    throw Error(
                                        `Could not find file with path ${t}`
                                    );
                                return (
                                    (n = { ...n, name: i, path: a }),
                                    await (await this.storage).setItem(a, n),
                                    n
                                );
                            }
                            async get(t, e) {
                                if (
                                    '' ===
                                    (t = decodeURIComponent(
                                        t.replace(/^\//, '')
                                    ))
                                )
                                    return await this._getFolder(t);
                                let i = await this.storage,
                                    a = await i.getItem(t),
                                    n = await this._getServerContents(t, e),
                                    o = a || n;
                                if (!o) return null;
                                if (null == e || !e.content)
                                    return { size: 0, ...o, content: null };
                                if ('directory' === o.type) {
                                    let e = new Map();
                                    await i.iterate((i, a) => {
                                        a === `${t}/${i.name}` &&
                                            e.set(i.name, i);
                                    });
                                    let a = n
                                        ? n.content
                                        : Array.from(
                                              (
                                                  await this._getServerDirectory(
                                                      t
                                                  )
                                              ).values()
                                          );
                                    for (let t of a)
                                        e.has(t.name) || e.set(t.name, t);
                                    let r = [...e.values()];
                                    return {
                                        name: X.PathExt.basename(t),
                                        path: t,
                                        last_modified: o.last_modified,
                                        created: o.created,
                                        format: 'json',
                                        mimetype: Y.JSON,
                                        content: r,
                                        size: 0,
                                        writable: !0,
                                        type: 'directory',
                                    };
                                }
                                return o;
                            }
                            async rename(t, e) {
                                let i = decodeURIComponent(t),
                                    a = await this.get(i, { content: !0 });
                                if (!a)
                                    throw Error(
                                        `Could not find file with path ${i}`
                                    );
                                let n = new Date().toISOString(),
                                    o = X.PathExt.basename(e),
                                    r = {
                                        ...a,
                                        name: o,
                                        path: e,
                                        last_modified: n,
                                    },
                                    l = await this.storage;
                                if (
                                    (await l.setItem(e, r),
                                    await l.removeItem(i),
                                    await (await this.checkpoints).removeItem(
                                        i
                                    ),
                                    'directory' === a.type)
                                ) {
                                    let i;
                                    for (i of a.content)
                                        await this.rename(
                                            oe.URLExt.join(t, i.name),
                                            oe.URLExt.join(e, i.name)
                                        );
                                }
                                return r;
                            }
                            async save(t, e = {}) {
                                var i;
                                t = decodeURIComponent(t);
                                let a = X.PathExt.extname(
                                        null !== (i = e.name) && void 0 !== i
                                            ? i
                                            : ''
                                    ),
                                    n = e.chunk,
                                    o = !!n && (n > 1 || -1 === n),
                                    r = await this.get(t, { content: o });
                                if (
                                    (r ||
                                        (r = await this.newUntitled({
                                            path: t,
                                            ext: a,
                                            type: 'file',
                                        })),
                                    !r)
                                )
                                    return null;
                                let l = r.content,
                                    p = new Date().toISOString();
                                if (
                                    ((r = { ...r, ...e, last_modified: p }),
                                    e.content && 'base64' === e.format)
                                ) {
                                    let t = !n || -1 === n;
                                    if ('.ipynb' === a) {
                                        let i = this._handleChunk(
                                            e.content,
                                            l,
                                            o
                                        );
                                        r = {
                                            ...r,
                                            content: t ? JSON.parse(i) : i,
                                            format: 'json',
                                            type: 'notebook',
                                            size: i.length,
                                        };
                                    } else if (ne.hasFormat(a, 'json')) {
                                        let i = this._handleChunk(
                                            e.content,
                                            l,
                                            o
                                        );
                                        r = {
                                            ...r,
                                            content: t ? JSON.parse(i) : i,
                                            format: 'json',
                                            type: 'file',
                                            size: i.length,
                                        };
                                    } else if (ne.hasFormat(a, 'text')) {
                                        let t = this._handleChunk(
                                            e.content,
                                            l,
                                            o
                                        );
                                        r = {
                                            ...r,
                                            content: t,
                                            format: 'text',
                                            type: 'file',
                                            size: t.length,
                                        };
                                    } else {
                                        let t = e.content;
                                        r = {
                                            ...r,
                                            content: t,
                                            size: atob(t).length,
                                        };
                                    }
                                }
                                return (
                                    await (await this.storage).setItem(t, r), r
                                );
                            }
                            async delete(t) {
                                let e = `${(t = decodeURIComponent(t))}/`,
                                    i = (
                                        await (await this.storage).keys()
                                    ).filter(i => i === t || i.startsWith(e));
                                await Promise.all(i.map(this.forgetPath, this));
                            }
                            async forgetPath(t) {
                                await Promise.all([
                                    (await this.storage).removeItem(t),
                                    (await this.checkpoints).removeItem(t),
                                ]);
                            }
                            async createCheckpoint(t) {
                                var e;
                                let i = await this.checkpoints;
                                t = decodeURIComponent(t);
                                let a = await this.get(t, { content: !0 });
                                if (!a)
                                    throw Error(
                                        `Could not find file with path ${t}`
                                    );
                                let n = (null !== (e = await i.getItem(t)) &&
                                void 0 !== e
                                    ? e
                                    : []
                                ).filter(Boolean);
                                return (
                                    n.push(a),
                                    n.length > Nt && n.splice(0, n.length - Nt),
                                    await i.setItem(t, n),
                                    {
                                        id: '' + (n.length - 1),
                                        last_modified: a.last_modified,
                                    }
                                );
                            }
                            async listCheckpoints(t) {
                                return (
                                    (await (await this.checkpoints).getItem(
                                        t
                                    )) || []
                                )
                                    .filter(Boolean)
                                    .map(this.normalizeCheckpoint, this);
                            }
                            normalizeCheckpoint(t, e) {
                                return {
                                    id: e.toString(),
                                    last_modified: t.last_modified,
                                };
                            }
                            async restoreCheckpoint(t, e) {
                                t = decodeURIComponent(t);
                                let i = ((await (
                                    await this.checkpoints
                                ).getItem(t)) || [])[parseInt(e)];
                                await (await this.storage).setItem(t, i);
                            }
                            async deleteCheckpoint(t, e) {
                                t = decodeURIComponent(t);
                                let i =
                                        (await (await this.checkpoints).getItem(
                                            t
                                        )) || [],
                                    a = parseInt(e);
                                i.splice(a, 1),
                                    await (await this.checkpoints).setItem(
                                        t,
                                        i
                                    );
                            }
                            _handleChunk(t, e, i) {
                                let a = decodeURIComponent(escape(atob(t)));
                                return i ? e + a : a;
                            }
                            async _getFolder(t) {
                                let e = new Map();
                                await (await this.storage).iterate((t, i) => {
                                    i.includes('/') || e.set(t.path, t);
                                });
                                for (let i of (
                                    await this._getServerDirectory(t)
                                ).values())
                                    e.has(i.path) || e.set(i.path, i);
                                return t && 0 === e.size
                                    ? null
                                    : {
                                          name: '',
                                          path: t,
                                          last_modified: new Date(
                                              0
                                          ).toISOString(),
                                          created: new Date(0).toISOString(),
                                          format: 'json',
                                          mimetype: Y.JSON,
                                          content: Array.from(e.values()),
                                          size: 0,
                                          writable: !0,
                                          type: 'directory',
                                      };
                            }
                            async _getServerContents(t, e) {
                                let i = X.PathExt.basename(t),
                                    a = (
                                        await this._getServerDirectory(
                                            oe.URLExt.join(t, '..')
                                        )
                                    ).get(i);
                                if (!a) return null;
                                if (
                                    ((a = a || {
                                        name: i,
                                        path: t,
                                        last_modified: new Date(
                                            0
                                        ).toISOString(),
                                        created: new Date(0).toISOString(),
                                        format: 'text',
                                        mimetype: Y.PLAIN_TEXT,
                                        type: 'file',
                                        writable: !0,
                                        size: 0,
                                        content: '',
                                    }),
                                    null != e && e.content)
                                )
                                    if ('directory' === a.type) {
                                        let e = await this._getServerDirectory(
                                            t
                                        );
                                        a = {
                                            ...a,
                                            content: Array.from(e.values()),
                                        };
                                    } else {
                                        let e = oe.URLExt.join(
                                                oe.PageConfig.getBaseUrl(),
                                                'files',
                                                t
                                            ),
                                            n = await fetch(e);
                                        if (!n.ok) return null;
                                        let o =
                                                a.mimetype ||
                                                n.headers.get('Content-Type'),
                                            r = X.PathExt.extname(i);
                                        if (
                                            'notebook' === a.type ||
                                            ne.hasFormat(r, 'json') ||
                                            -1 !==
                                                (null == o
                                                    ? void 0
                                                    : o.indexOf('json')) ||
                                            t.match(/\.(ipynb|[^/]*json[^/]*)$/)
                                        ) {
                                            let t = await n.text();
                                            a = {
                                                ...a,
                                                content: JSON.parse(t),
                                                format: 'json',
                                                mimetype: a.mimetype || Y.JSON,
                                                size: t.length,
                                            };
                                        } else if (
                                            ne.hasFormat(r, 'text') ||
                                            -1 !== o.indexOf('text')
                                        ) {
                                            let t = await n.text();
                                            a = {
                                                ...a,
                                                content: t,
                                                format: 'text',
                                                mimetype: o || Y.PLAIN_TEXT,
                                                size: t.length,
                                            };
                                        } else {
                                            let t = await n.arrayBuffer(),
                                                e = new Uint8Array(t);
                                            a = {
                                                ...a,
                                                content: btoa(
                                                    e.reduce(
                                                        this
                                                            .reduceBytesToString,
                                                        ''
                                                    )
                                                ),
                                                format: 'base64',
                                                mimetype: o || Y.OCTET_STREAM,
                                                size: e.length,
                                            };
                                        }
                                    }
                                return a;
                            }
                            async _getServerDirectory(t) {
                                let e =
                                    this._serverContents.get(t) || new Map();
                                if (!this._serverContents.has(t)) {
                                    let i = oe.URLExt.join(
                                        oe.PageConfig.getBaseUrl(),
                                        'api/contents',
                                        t,
                                        'all.json'
                                    );
                                    try {
                                        let t = await fetch(i),
                                            a = JSON.parse(await t.text());
                                        for (let t of a.content)
                                            e.set(t.name, t);
                                    } catch (t) {
                                        console.warn(
                                            `don't worry, about ${t}... nothing's broken. If there had been a\n          file at ${i}, you might see some more files.`
                                        );
                                    }
                                    this._serverContents.set(t, e);
                                }
                                return e;
                            }
                            async _incrementCounter(t) {
                                var e;
                                let i = await this.counters,
                                    a =
                                        (null !== (e = await i.getItem(t)) &&
                                        void 0 !== e
                                            ? e
                                            : -1) + 1;
                                return await i.setItem(t, a), a;
                            }
                        }),
                        ((Se || (Se = {})).EMPTY_NB = {
                            metadata: { orig_nbformat: 4 },
                            nbformat_minor: 4,
                            nbformat: 4,
                            cells: [],
                        });
                }),
                ze,
                Bt,
                qi,
                Ui,
                $t = ce(() => {
                    (ze = 16895), (Bt = 33206), (qi = 1), (Ui = 2);
                }),
                Wt,
                He,
                De,
                Ni,
                Li,
                Ht,
                Re,
                Ee,
                Ie,
                $e,
                We = ce(() => {
                    (Wt = ':'),
                        (He = '/api/drive.v1'),
                        (De = 4096),
                        (Ni = new TextEncoder()),
                        (Li = new TextDecoder('utf-8')),
                        (Ht = {
                            0: !1,
                            1: !0,
                            2: !0,
                            64: !0,
                            65: !0,
                            66: !0,
                            129: !0,
                            193: !0,
                            514: !0,
                            577: !0,
                            578: !0,
                            705: !0,
                            706: !0,
                            1024: !0,
                            1025: !0,
                            1026: !0,
                            1089: !0,
                            1090: !0,
                            1153: !0,
                            1154: !0,
                            1217: !0,
                            1218: !0,
                            4096: !0,
                            4098: !0,
                        }),
                        (Re = class {
                            constructor(t) {
                                this.fs = t;
                            }
                            open(t) {
                                let e = this.fs.realPath(t.node);
                                this.fs.FS.isFile(t.node.mode) &&
                                    (t.file = this.fs.API.get(e));
                            }
                            close(t) {
                                if (!this.fs.FS.isFile(t.node.mode) || !t.file)
                                    return;
                                let e = this.fs.realPath(t.node),
                                    i = t.flags,
                                    a =
                                        'string' == typeof i
                                            ? parseInt(i, 10)
                                            : i;
                                a &= 8191;
                                let n = !0;
                                a in Ht && (n = Ht[a]),
                                    n && this.fs.API.put(e, t.file),
                                    (t.file = void 0);
                            }
                            read(t, e, i, a, n) {
                                if (
                                    a <= 0 ||
                                    void 0 === t.file ||
                                    n >= (t.file.data.length || 0)
                                )
                                    return 0;
                                let o = Math.min(t.file.data.length - n, a);
                                return (
                                    e.set(t.file.data.subarray(n, n + o), i), o
                                );
                            }
                            write(t, e, i, a, n) {
                                var o;
                                if (a <= 0 || void 0 === t.file) return 0;
                                if (
                                    ((t.node.timestamp = Date.now()),
                                    n + a >
                                        ((null === (o = t.file) || void 0 === o
                                            ? void 0
                                            : o.data.length) || 0))
                                ) {
                                    let e = t.file.data
                                        ? t.file.data
                                        : new Uint8Array();
                                    (t.file.data = new Uint8Array(n + a)),
                                        t.file.data.set(e);
                                }
                                return (
                                    t.file.data.set(e.subarray(i, i + a), n), a
                                );
                            }
                            llseek(t, e, i) {
                                let a = e;
                                if (1 === i) a += t.position;
                                else if (
                                    2 === i &&
                                    this.fs.FS.isFile(t.node.mode)
                                ) {
                                    if (void 0 === t.file)
                                        throw new this.fs.FS.ErrnoError(
                                            this.fs.ERRNO_CODES.EPERM
                                        );
                                    a += t.file.data.length;
                                }
                                if (a < 0)
                                    throw new this.fs.FS.ErrnoError(
                                        this.fs.ERRNO_CODES.EINVAL
                                    );
                                return a;
                            }
                        }),
                        (Ee = class {
                            constructor(t) {
                                this.fs = t;
                            }
                            getattr(t) {
                                return {
                                    ...this.fs.API.getattr(this.fs.realPath(t)),
                                    mode: t.mode,
                                    ino: t.id,
                                };
                            }
                            setattr(t, e) {
                                for (let [i, a] of Object.entries(e))
                                    switch (i) {
                                        case 'mode':
                                            t.mode = a;
                                            break;
                                        case 'timestamp':
                                            t.timestamp = a;
                                            break;
                                        default:
                                            console.warn(
                                                'setattr',
                                                i,
                                                'of',
                                                a,
                                                'on',
                                                t,
                                                'not yet implemented'
                                            );
                                    }
                            }
                            lookup(t, e) {
                                let i = this.fs.PATH.join2(
                                        this.fs.realPath(t),
                                        e
                                    ),
                                    a = this.fs.API.lookup(i);
                                if (!a.ok)
                                    throw this.fs.FS.genericErrors[
                                        this.fs.ERRNO_CODES.ENOENT
                                    ];
                                return this.fs.createNode(t, e, a.mode, 0);
                            }
                            mknod(t, e, i, a) {
                                let n = this.fs.PATH.join2(
                                    this.fs.realPath(t),
                                    e
                                );
                                return (
                                    this.fs.API.mknod(n, i),
                                    this.fs.createNode(t, e, i, a)
                                );
                            }
                            rename(t, e, i) {
                                this.fs.API.rename(
                                    t.parent
                                        ? this.fs.PATH.join2(
                                              this.fs.realPath(t.parent),
                                              t.name
                                          )
                                        : t.name,
                                    this.fs.PATH.join2(this.fs.realPath(e), i)
                                ),
                                    (t.name = i),
                                    (t.parent = e);
                            }
                            unlink(t, e) {
                                this.fs.API.rmdir(
                                    this.fs.PATH.join2(this.fs.realPath(t), e)
                                );
                            }
                            rmdir(t, e) {
                                this.fs.API.rmdir(
                                    this.fs.PATH.join2(this.fs.realPath(t), e)
                                );
                            }
                            readdir(t) {
                                return this.fs.API.readdir(this.fs.realPath(t));
                            }
                            symlink(t, e, i) {
                                throw new this.fs.FS.ErrnoError(
                                    this.fs.ERRNO_CODES.EPERM
                                );
                            }
                            readlink(t) {
                                throw new this.fs.FS.ErrnoError(
                                    this.fs.ERRNO_CODES.EPERM
                                );
                            }
                        }),
                        (Ie = class {
                            constructor(t, e, i, a, n) {
                                (this._baseUrl = t),
                                    (this._driveName = e),
                                    (this._mountpoint = i),
                                    (this.FS = a),
                                    (this.ERRNO_CODES = n);
                            }
                            request(t) {
                                let e = new XMLHttpRequest();
                                e.open('POST', encodeURI(this.endpoint), !1);
                                try {
                                    e.send(JSON.stringify(t));
                                } catch (t) {
                                    console.error(t);
                                }
                                if (e.status >= 400)
                                    throw new this.FS.ErrnoError(
                                        this.ERRNO_CODES.EINVAL
                                    );
                                return JSON.parse(e.responseText);
                            }
                            lookup(t) {
                                return this.request({
                                    method: 'lookup',
                                    path: this.normalizePath(t),
                                });
                            }
                            getmode(t) {
                                return Number.parseInt(
                                    this.request({
                                        method: 'getmode',
                                        path: this.normalizePath(t),
                                    })
                                );
                            }
                            mknod(t, e) {
                                return this.request({
                                    method: 'mknod',
                                    path: this.normalizePath(t),
                                    data: { mode: e },
                                });
                            }
                            rename(t, e) {
                                return this.request({
                                    method: 'rename',
                                    path: this.normalizePath(t),
                                    data: { newPath: this.normalizePath(e) },
                                });
                            }
                            readdir(t) {
                                let e = this.request({
                                    method: 'readdir',
                                    path: this.normalizePath(t),
                                });
                                return e.push('.'), e.push('..'), e;
                            }
                            rmdir(t) {
                                return this.request({
                                    method: 'rmdir',
                                    path: this.normalizePath(t),
                                });
                            }
                            get(t) {
                                let e = this.request({
                                        method: 'get',
                                        path: this.normalizePath(t),
                                    }),
                                    i = e.content,
                                    a = e.format;
                                switch (a) {
                                    case 'json':
                                    case 'text':
                                        return {
                                            data: Ni.encode(i),
                                            format: a,
                                        };
                                    case 'base64': {
                                        let t = atob(i),
                                            e = t.length,
                                            n = new Uint8Array(e);
                                        for (let i = 0; i < e; i++)
                                            n[i] = t.charCodeAt(i);
                                        return { data: n, format: a };
                                    }
                                    default:
                                        throw new this.FS.ErrnoError(
                                            this.ERRNO_CODES.ENOENT
                                        );
                                }
                            }
                            put(t, e) {
                                switch (e.format) {
                                    case 'json':
                                    case 'text':
                                        return this.request({
                                            method: 'put',
                                            path: this.normalizePath(t),
                                            data: {
                                                format: e.format,
                                                data: Li.decode(e.data),
                                            },
                                        });
                                    case 'base64': {
                                        let i = '';
                                        for (
                                            let t = 0;
                                            t < e.data.byteLength;
                                            t++
                                        )
                                            i += String.fromCharCode(e.data[t]);
                                        return this.request({
                                            method: 'put',
                                            path: this.normalizePath(t),
                                            data: {
                                                format: e.format,
                                                data: btoa(i),
                                            },
                                        });
                                    }
                                }
                            }
                            getattr(t) {
                                let e = this.request({
                                    method: 'getattr',
                                    path: this.normalizePath(t),
                                });
                                return (
                                    (e.atime = new Date(e.atime)),
                                    (e.mtime = new Date(e.mtime)),
                                    (e.ctime = new Date(e.ctime)),
                                    (e.size = e.size || 0),
                                    e
                                );
                            }
                            normalizePath(t) {
                                return (
                                    t.startsWith(this._mountpoint) &&
                                        (t = t.slice(this._mountpoint.length)),
                                    this._driveName &&
                                        (t = `${this._driveName}${Wt}${t}`),
                                    t
                                );
                            }
                            get endpoint() {
                                return `${this._baseUrl}api/drive`;
                            }
                        }),
                        ($e = class {
                            constructor(t) {
                                (this.FS = t.FS),
                                    (this.PATH = t.PATH),
                                    (this.ERRNO_CODES = t.ERRNO_CODES),
                                    (this.API = new Ie(
                                        t.baseUrl,
                                        t.driveName,
                                        t.mountpoint,
                                        this.FS,
                                        this.ERRNO_CODES
                                    )),
                                    (this.driveName = t.driveName),
                                    (this.node_ops = new Ee(this)),
                                    (this.stream_ops = new Re(this));
                            }
                            mount(t) {
                                return this.createNode(
                                    null,
                                    t.mountpoint,
                                    16895,
                                    0
                                );
                            }
                            createNode(t, e, i, a) {
                                let n = this.FS;
                                if (!n.isDir(i) && !n.isFile(i))
                                    throw new n.ErrnoError(
                                        this.ERRNO_CODES.EINVAL
                                    );
                                let o = n.createNode(t, e, i, a);
                                return (
                                    (o.node_ops = this.node_ops),
                                    (o.stream_ops = this.stream_ops),
                                    o
                                );
                            }
                            getMode(t) {
                                return this.API.getmode(t);
                            }
                            realPath(t) {
                                let e = [],
                                    i = t;
                                for (e.push(i.name); i.parent !== i; )
                                    (i = i.parent), e.push(i.name);
                                return (
                                    e.reverse(), this.PATH.join.apply(null, e)
                                );
                            }
                        });
                }),
                Ke,
                Je,
                Kt = ce(() => {
                    (Ke = se(xe())),
                        We(),
                        (Je = class {
                            constructor(t) {
                                (this.isDisposed = !1),
                                    (this._onMessage = async t => {
                                        if (!this._channel) return;
                                        let { _contents: e } = this,
                                            i = t.data,
                                            a = null == i ? void 0 : i.path;
                                        if (
                                            'broadcast.ts' !==
                                            (null == i ? void 0 : i.receiver)
                                        )
                                            return;
                                        let n,
                                            o = null;
                                        switch (null == i ? void 0 : i.method) {
                                            case 'readdir':
                                                (n = await e.get(a, {
                                                    content: !0,
                                                })),
                                                    (o = []),
                                                    'directory' === n.type &&
                                                        n.content &&
                                                        (o = n.content.map(
                                                            t => t.name
                                                        ));
                                                break;
                                            case 'rmdir':
                                                await e.delete(a);
                                                break;
                                            case 'rename':
                                                await e.rename(
                                                    a,
                                                    i.data.newPath
                                                );
                                                break;
                                            case 'getmode':
                                                (n = await e.get(a)),
                                                    (o =
                                                        'directory' === n.type
                                                            ? 16895
                                                            : 33206);
                                                break;
                                            case 'lookup':
                                                try {
                                                    (n = await e.get(a)),
                                                        (o = {
                                                            ok: !0,
                                                            mode:
                                                                'directory' ===
                                                                n.type
                                                                    ? 16895
                                                                    : 33206,
                                                        });
                                                } catch {
                                                    o = { ok: !1 };
                                                }
                                                break;
                                            case 'mknod':
                                                (n = await e.newUntitled({
                                                    path: Ke.PathExt.dirname(a),
                                                    type:
                                                        16895 ===
                                                        Number.parseInt(
                                                            i.data.mode
                                                        )
                                                            ? 'directory'
                                                            : 'file',
                                                    ext: Ke.PathExt.extname(a),
                                                })),
                                                    await e.rename(n.path, a);
                                                break;
                                            case 'getattr': {
                                                n = await e.get(a);
                                                let t = new Date(
                                                    0
                                                ).toISOString();
                                                o = {
                                                    dev: 1,
                                                    nlink: 1,
                                                    uid: 0,
                                                    gid: 0,
                                                    rdev: 0,
                                                    size: n.size || 0,
                                                    blksize: De,
                                                    blocks: Math.ceil(
                                                        n.size || 0 / De
                                                    ),
                                                    atime: n.last_modified || t,
                                                    mtime: n.last_modified || t,
                                                    ctime: n.created || t,
                                                    timestamp: 0,
                                                };
                                                break;
                                            }
                                            case 'get':
                                                if (
                                                    ((n = await e.get(a, {
                                                        content: !0,
                                                    })),
                                                    'directory' === n.type)
                                                )
                                                    break;
                                                o = {
                                                    content:
                                                        'json' === n.format
                                                            ? JSON.stringify(
                                                                  n.content
                                                              )
                                                            : n.content,
                                                    format: n.format,
                                                };
                                                break;
                                            case 'put':
                                                await e.save(a, {
                                                    content:
                                                        'json' === i.data.format
                                                            ? JSON.parse(
                                                                  i.data.data
                                                              )
                                                            : i.data.data,
                                                    type: 'file',
                                                    format: i.data.format,
                                                });
                                                break;
                                            default:
                                                o = null;
                                        }
                                        this._channel.postMessage(o);
                                    }),
                                    (this._channel = null),
                                    (this._enabled = !1),
                                    (this._contents = t.contents);
                            }
                            get enabled() {
                                return this._enabled;
                            }
                            enable() {
                                this._channel
                                    ? console.warn(
                                          'BroadcastChannel already created and enabled'
                                      )
                                    : ((this._channel = new BroadcastChannel(
                                          He
                                      )),
                                      this._channel.addEventListener(
                                          'message',
                                          this._onMessage
                                      ),
                                      (this._enabled = !0));
                            }
                            disable() {
                                this._channel &&
                                    (this._channel.removeEventListener(
                                        'message',
                                        this._onMessage
                                    ),
                                    (this._channel = null)),
                                    (this._enabled = !1);
                            }
                            dispose() {
                                this.isDisposed ||
                                    (this.disable(), (this.isDisposed = !0));
                            }
                        });
                }),
                Jt = {};
            li(Jt, {
                BLOCK_SIZE: () => De,
                BroadcastChannelWrapper: () => Je,
                Contents: () => Be,
                ContentsAPI: () => Ie,
                DIR_MODE: () => ze,
                DRIVE_API_PATH: () => He,
                DRIVE_SEPARATOR: () => Wt,
                DriveFS: () => $e,
                DriveFSEmscriptenNodeOps: () => Ee,
                DriveFSEmscriptenStreamOps: () => Re,
                FILE: () => ne,
                FILE_MODE: () => Bt,
                IBroadcastChannelWrapper: () => Ai,
                IContents: () => Ti,
                MIME: () => Y,
                SEEK_CUR: () => qi,
                SEEK_END: () => Ui,
            });
            var Vt = ce(() => {
                    Ft(), We(), Fe(), Kt(), $t();
                }),
                Yt = class {
                    constructor() {
                        (this._options = null),
                            (this._initializer = null),
                            (this._pyodide = null),
                            (this._localPath = ''),
                            (this._driveName = ''),
                            (this._driveFS = null),
                            (this._initialized = new Promise((t, e) => {
                                this._initializer = { resolve: t, reject: e };
                            }));
                    }
                    async initialize(t) {
                        var e;
                        if (((this._options = t), t.location.includes(':'))) {
                            let e = t.location.split(':');
                            (this._driveName = e[0]), (this._localPath = e[1]);
                        } else
                            (this._driveName = ''),
                                (this._localPath = t.location);
                        await this.initRuntime(t),
                            await this.initFilesystem(t),
                            await this.initPackageManager(t),
                            await this.initKernel(t),
                            await this.initGlobals(t),
                            null == (e = this._initializer) || e.resolve();
                    }
                    async initRuntime(t) {
                        let e,
                            { pyodideUrl: i, indexUrl: a } = t;
                        i.endsWith('.mjs')
                            ? (e = (await __webpack_require__(476)(i))
                                  .loadPyodide)
                            : (importScripts(i), (e = self.loadPyodide)),
                            (this._pyodide = await e({ indexURL: a }));
                    }
                    async initPackageManager(t) {
                        if (!this._options) throw new Error('Uninitialized');
                        let {
                            pipliteWheelUrl: e,
                            disablePyPIFallback: i,
                            pipliteUrls: a,
                        } = this._options;
                        await this._pyodide.loadPackage(['micropip']),
                            await this._pyodide.runPythonAsync(
                                `\n      import micropip\n      await micropip.install('${e}', keep_going=True)\n      import piplite.piplite\n      piplite.piplite._PIPLITE_DISABLE_PYPI = ${
                                    i ? 'True' : 'False'
                                }\n      piplite.piplite._PIPLITE_URLS = ${JSON.stringify(
                                    a
                                )}\n    `
                            );
                    }
                    async initKernel(t) {
                        await this._pyodide.runPythonAsync(
                            "\n      await piplite.install(['ssl'], keep_going=True);\n      await piplite.install(['sqlite3'], keep_going=True);\n      await piplite.install(['ipykernel'], keep_going=True);\n      await piplite.install(['comm'], keep_going=True);\n      await piplite.install(['pyodide_kernel'], keep_going=True);\n      await piplite.install(['ipython'], keep_going=True);\n      import pyodide_kernel\n    "
                        ),
                            t.mountDrive &&
                                this._localPath &&
                                (await this._pyodide.runPythonAsync(
                                    `\n        import os;\n        os.chdir("${this._localPath}");\n      `
                                ));
                    }
                    async initGlobals(t) {
                        let { globals: e } = this._pyodide;
                        (this._kernel = e
                            .get('pyodide_kernel')
                            .kernel_instance.copy()),
                            (this._stdout_stream = e
                                .get('pyodide_kernel')
                                .stdout_stream.copy()),
                            (this._stderr_stream = e
                                .get('pyodide_kernel')
                                .stderr_stream.copy()),
                            (this._interpreter = this._kernel.interpreter.copy()),
                            (this._interpreter.send_comm = this.sendComm.bind(
                                this
                            ));
                    }
                    async initFilesystem(t) {
                        if (t.mountDrive) {
                            let e = '/drive',
                                {
                                    FS: i,
                                    PATH: a,
                                    ERRNO_CODES: n,
                                } = this._pyodide,
                                { baseUrl: o } = t,
                                { DriveFS: r } = await Promise.resolve().then(
                                    () => (Vt(), Jt)
                                ),
                                l = new r({
                                    FS: i,
                                    PATH: a,
                                    ERRNO_CODES: n,
                                    baseUrl: o,
                                    driveName: this._driveName,
                                    mountpoint: e,
                                });
                            i.mkdir(e),
                                i.mount(l, {}, e),
                                i.chdir(e),
                                (this._driveFS = l);
                        }
                    }
                    mapToObject(t) {
                        let e = t instanceof Array ? [] : {};
                        return (
                            t.forEach((t, i) => {
                                e[i] =
                                    t instanceof Map || t instanceof Array
                                        ? this.mapToObject(t)
                                        : t;
                            }),
                            e
                        );
                    }
                    formatResult(t) {
                        if (!(t instanceof this._pyodide.ffi.PyProxy)) return t;
                        let e = t.toJs();
                        return this.mapToObject(e);
                    }
                    async setup(t) {
                        await this._initialized,
                            (this._kernel._parent_header = this._pyodide.toPy(
                                t
                            ));
                    }
                    async execute(t, e) {
                        await this.setup(e);
                        let i = (t, e) => {
                            let i = {
                                name: this.formatResult(t),
                                text: this.formatResult(e),
                            };
                            postMessage({
                                parentHeader: this.formatResult(
                                    this._kernel._parent_header
                                ).header,
                                bundle: i,
                                type: 'stream',
                            });
                        };
                        (this._stdout_stream.publish_stream_callback = i),
                            (this._stderr_stream.publish_stream_callback = i),
                            (this._interpreter.display_pub.clear_output_callback = t => {
                                let e = { wait: this.formatResult(t) };
                                postMessage({
                                    parentHeader: this.formatResult(
                                        this._kernel._parent_header
                                    ).header,
                                    bundle: e,
                                    type: 'clear_output',
                                });
                            }),
                            (this._interpreter.display_pub.display_data_callback = (
                                t,
                                e,
                                i
                            ) => {
                                let a = {
                                    data: this.formatResult(t),
                                    metadata: this.formatResult(e),
                                    transient: this.formatResult(i),
                                };
                                postMessage({
                                    parentHeader: this.formatResult(
                                        this._kernel._parent_header
                                    ).header,
                                    bundle: a,
                                    type: 'display_data',
                                });
                            }),
                            (this._interpreter.display_pub.update_display_data_callback = (
                                t,
                                e,
                                i
                            ) => {
                                let a = {
                                    data: this.formatResult(t),
                                    metadata: this.formatResult(e),
                                    transient: this.formatResult(i),
                                };
                                postMessage({
                                    parentHeader: this.formatResult(
                                        this._kernel._parent_header
                                    ).header,
                                    bundle: a,
                                    type: 'update_display_data',
                                });
                            }),
                            (this._interpreter.displayhook.publish_execution_result = (
                                t,
                                e,
                                i
                            ) => {
                                let a = {
                                    execution_count: t,
                                    data: this.formatResult(e),
                                    metadata: this.formatResult(i),
                                };
                                postMessage({
                                    parentHeader: this.formatResult(
                                        this._kernel._parent_header
                                    ).header,
                                    bundle: a,
                                    type: 'execute_result',
                                });
                            }),
                            (this._interpreter.input = this.input.bind(this)),
                            (this._interpreter.getpass = this.getpass.bind(
                                this
                            ));
                        let a = await this._kernel.run(t.code),
                            n = this.formatResult(a);
                        return (
                            'error' === n.status &&
                                ((t, e, i) => {
                                    let a = {
                                        ename: t,
                                        evalue: e,
                                        traceback: i,
                                    };
                                    postMessage({
                                        parentHeader: this.formatResult(
                                            this._kernel._parent_header
                                        ).header,
                                        bundle: a,
                                        type: 'execute_error',
                                    });
                                })(n.ename, n.evalue, n.traceback),
                            n
                        );
                    }
                    async complete(t, e) {
                        await this.setup(e);
                        let i = this._kernel.complete(t.code, t.cursor_pos);
                        return this.formatResult(i);
                    }
                    async inspect(t, e) {
                        await this.setup(e);
                        let i = this._kernel.inspect(
                            t.code,
                            t.cursor_pos,
                            t.detail_level
                        );
                        return this.formatResult(i);
                    }
                    async isComplete(t, e) {
                        await this.setup(e);
                        let i = this._kernel.is_complete(t.code);
                        return this.formatResult(i);
                    }
                    async commInfo(t, e) {
                        await this.setup(e);
                        let i = this._kernel.comm_info(t.target_name);
                        return { comms: this.formatResult(i), status: 'ok' };
                    }
                    async commOpen(t, e) {
                        await this.setup(e);
                        let i = this._kernel.comm_manager.comm_open(
                            this._pyodide.toPy(null),
                            this._pyodide.toPy(null),
                            this._pyodide.toPy(t)
                        );
                        return this.formatResult(i);
                    }
                    async commMsg(t, e) {
                        await this.setup(e);
                        let i = this._kernel.comm_manager.comm_msg(
                            this._pyodide.toPy(null),
                            this._pyodide.toPy(null),
                            this._pyodide.toPy(t)
                        );
                        return this.formatResult(i);
                    }
                    async commClose(t, e) {
                        await this.setup(e);
                        let i = this._kernel.comm_manager.comm_close(
                            this._pyodide.toPy(null),
                            this._pyodide.toPy(null),
                            this._pyodide.toPy(t)
                        );
                        return this.formatResult(i);
                    }
                    async inputReply(t, e) {
                        await this.setup(e), this._resolveInputReply(t);
                    }
                    async sendInputRequest(t, e) {
                        let i = { prompt: t, password: e };
                        postMessage({
                            type: 'input_request',
                            parentHeader: this.formatResult(
                                this._kernel._parent_header
                            ).header,
                            content: i,
                        });
                    }
                    async getpass(t) {
                        return (
                            (t = void 0 === t ? '' : t),
                            await this.sendInputRequest(t, !0),
                            (
                                await new Promise(t => {
                                    this._resolveInputReply = t;
                                })
                            ).value
                        );
                    }
                    async input(t) {
                        return (
                            (t = void 0 === t ? '' : t),
                            await this.sendInputRequest(t, !1),
                            (
                                await new Promise(t => {
                                    this._resolveInputReply = t;
                                })
                            ).value
                        );
                    }
                    async sendComm(t, e, i, a, n) {
                        postMessage({
                            type: t,
                            content: this.formatResult(e),
                            metadata: this.formatResult(i),
                            ident: this.formatResult(a),
                            buffers: this.formatResult(n),
                            parentHeader: this.formatResult(
                                this._kernel._parent_header
                            ).header,
                        });
                    }
                };
        },
        476: t => {
            function e(t) {
                return Promise.resolve().then(() => {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw ((e.code = 'MODULE_NOT_FOUND'), e);
                });
            }
            (e.keys = () => []), (e.resolve = e), (e.id = 476), (t.exports = e);
        },
    },
]);
//# sourceMappingURL=128.fd6a7bd994d997285906.js.map?v=fd6a7bd994d997285906
