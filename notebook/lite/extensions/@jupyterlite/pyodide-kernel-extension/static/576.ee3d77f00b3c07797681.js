/*! For license information please see 576.ee3d77f00b3c07797681.js.LICENSE.txt */
(() => {
    'use strict';
    var e,
        t,
        r = {
            576: (e, t, r) => {
                const n = Symbol('Comlink.proxy'),
                    a = Symbol('Comlink.endpoint'),
                    o = Symbol('Comlink.releaseProxy'),
                    i = Symbol('Comlink.finalizer'),
                    s = Symbol('Comlink.thrown'),
                    c = e =>
                        ('object' == typeof e && null !== e) ||
                        'function' == typeof e,
                    u = new Map([
                        [
                            'proxy',
                            {
                                canHandle: e => c(e) && e[n],
                                serialize(e) {
                                    const {
                                        port1: t,
                                        port2: r,
                                    } = new MessageChannel();
                                    return l(e, t), [r, [r]];
                                },
                                deserialize: e => (
                                    e.start(), m(e, [], undefined)
                                ),
                            },
                        ],
                        [
                            'throw',
                            {
                                canHandle: e => c(e) && s in e,
                                serialize({ value: e }) {
                                    let t;
                                    return (
                                        (t =
                                            e instanceof Error
                                                ? {
                                                      isError: !0,
                                                      value: {
                                                          message: e.message,
                                                          name: e.name,
                                                          stack: e.stack,
                                                      },
                                                  }
                                                : { isError: !1, value: e }),
                                        [t, []]
                                    );
                                },
                                deserialize(e) {
                                    if (e.isError)
                                        throw Object.assign(
                                            new Error(e.value.message),
                                            e.value
                                        );
                                    throw e.value;
                                },
                            },
                        ],
                    ]);
                function l(e, t = globalThis, r = ['*']) {
                    t.addEventListener('message', function a(o) {
                        if (!o || !o.data) return;
                        if (
                            !(function(e, t) {
                                for (const r of e) {
                                    if (t === r || '*' === r) return !0;
                                    if (r instanceof RegExp && r.test(t))
                                        return !0;
                                }
                                return !1;
                            })(r, o.origin)
                        )
                            return void console.warn(
                                `Invalid origin '${o.origin}' for comlink proxy`
                            );
                        const { id: c, type: u, path: f } = Object.assign(
                                { path: [] },
                                o.data
                            ),
                            g = (o.data.argumentList || []).map(E);
                        let h;
                        try {
                            const t = f.slice(0, -1).reduce((e, t) => e[t], e),
                                r = f.reduce((e, t) => e[t], e);
                            switch (u) {
                                case 'GET':
                                    h = r;
                                    break;
                                case 'SET':
                                    (t[f.slice(-1)[0]] = E(o.data.value)),
                                        (h = !0);
                                    break;
                                case 'APPLY':
                                    h = r.apply(t, g);
                                    break;
                                case 'CONSTRUCT':
                                    h = (function(e) {
                                        return Object.assign(e, { [n]: !0 });
                                    })(new r(...g));
                                    break;
                                case 'ENDPOINT':
                                    {
                                        const {
                                            port1: t,
                                            port2: r,
                                        } = new MessageChannel();
                                        l(e, r),
                                            (h = (function(e, t) {
                                                return y.set(e, t), e;
                                            })(t, [t]));
                                    }
                                    break;
                                case 'RELEASE':
                                    h = void 0;
                                    break;
                                default:
                                    return;
                            }
                        } catch (e) {
                            h = { value: e, [s]: 0 };
                        }
                        Promise.resolve(h)
                            .catch(e => ({ value: e, [s]: 0 }))
                            .then(r => {
                                const [n, o] = b(r);
                                t.postMessage(
                                    Object.assign(Object.assign({}, n), {
                                        id: c,
                                    }),
                                    o
                                ),
                                    'RELEASE' === u &&
                                        (t.removeEventListener('message', a),
                                        p(t),
                                        i in e &&
                                            'function' == typeof e[i] &&
                                            e[i]());
                            })
                            .catch(e => {
                                const [r, n] = b({
                                    value: new TypeError(
                                        'Unserializable return value'
                                    ),
                                    [s]: 0,
                                });
                                t.postMessage(
                                    Object.assign(Object.assign({}, r), {
                                        id: c,
                                    }),
                                    n
                                );
                            });
                    }),
                        t.start && t.start();
                }
                function p(e) {
                    (function(e) {
                        return 'MessagePort' === e.constructor.name;
                    })(e) && e.close();
                }
                function f(e) {
                    if (e)
                        throw new Error(
                            'Proxy has been released and is not useable'
                        );
                }
                function g(e) {
                    return w(e, { type: 'RELEASE' }).then(() => {
                        p(e);
                    });
                }
                const h = new WeakMap(),
                    d =
                        'FinalizationRegistry' in globalThis &&
                        new FinalizationRegistry(e => {
                            const t = (h.get(e) || 0) - 1;
                            h.set(e, t), 0 === t && g(e);
                        });
                function m(e, t = [], r = function() {}) {
                    let n = !1;
                    const i = new Proxy(r, {
                        get(r, a) {
                            if ((f(n), a === o))
                                return () => {
                                    !(function(e) {
                                        d && d.unregister(e);
                                    })(i),
                                        g(e),
                                        (n = !0);
                                };
                            if ('then' === a) {
                                if (0 === t.length) return { then: () => i };
                                const r = w(e, {
                                    type: 'GET',
                                    path: t.map(e => e.toString()),
                                }).then(E);
                                return r.then.bind(r);
                            }
                            return m(e, [...t, a]);
                        },
                        set(r, a, o) {
                            f(n);
                            const [i, s] = b(o);
                            return w(
                                e,
                                {
                                    type: 'SET',
                                    path: [...t, a].map(e => e.toString()),
                                    value: i,
                                },
                                s
                            ).then(E);
                        },
                        apply(r, o, i) {
                            f(n);
                            const s = t[t.length - 1];
                            if (s === a)
                                return w(e, { type: 'ENDPOINT' }).then(E);
                            if ('bind' === s) return m(e, t.slice(0, -1));
                            const [c, u] = v(i);
                            return w(
                                e,
                                {
                                    type: 'APPLY',
                                    path: t.map(e => e.toString()),
                                    argumentList: c,
                                },
                                u
                            ).then(E);
                        },
                        construct(r, a) {
                            f(n);
                            const [o, i] = v(a);
                            return w(
                                e,
                                {
                                    type: 'CONSTRUCT',
                                    path: t.map(e => e.toString()),
                                    argumentList: o,
                                },
                                i
                            ).then(E);
                        },
                    });
                    return (
                        (function(e, t) {
                            const r = (h.get(t) || 0) + 1;
                            h.set(t, r), d && d.register(e, t, e);
                        })(i, e),
                        i
                    );
                }
                function v(e) {
                    const t = e.map(b);
                    return [
                        t.map(e => e[0]),
                        ((r = t.map(e => e[1])),
                        Array.prototype.concat.apply([], r)),
                    ];
                    var r;
                }
                const y = new WeakMap();
                function b(e) {
                    for (const [t, r] of u)
                        if (r.canHandle(e)) {
                            const [n, a] = r.serialize(e);
                            return [{ type: 'HANDLER', name: t, value: n }, a];
                        }
                    return [{ type: 'RAW', value: e }, y.get(e) || []];
                }
                function E(e) {
                    switch (e.type) {
                        case 'HANDLER':
                            return u.get(e.name).deserialize(e.value);
                        case 'RAW':
                            return e.value;
                    }
                }
                function w(e, t, r) {
                    return new Promise(n => {
                        const a = new Array(4)
                            .fill(0)
                            .map(() =>
                                Math.floor(
                                    Math.random() * Number.MAX_SAFE_INTEGER
                                ).toString(16)
                            )
                            .join('-');
                        e.addEventListener('message', function t(r) {
                            r.data &&
                                r.data.id &&
                                r.data.id === a &&
                                (e.removeEventListener('message', t),
                                n(r.data));
                        }),
                            e.start && e.start(),
                            e.postMessage(Object.assign({ id: a }, t), r);
                    });
                }
                l(new (r(128).E)());
            },
        },
        n = {};
    function a(e) {
        var t = n[e];
        if (void 0 !== t) return t.exports;
        var o = (n[e] = { exports: {} });
        return r[e](o, o.exports, a), o.exports;
    }
    (a.m = r),
        (a.c = n),
        (a.x = () => {
            var e = a.O(void 0, [128], () => a(576));
            return a.O(e);
        }),
        (a.amdO = {}),
        (e = []),
        (a.O = (t, r, n, o) => {
            if (!r) {
                var i = 1 / 0;
                for (l = 0; l < e.length; l++) {
                    for (var [r, n, o] = e[l], s = !0, c = 0; c < r.length; c++)
                        (!1 & o || i >= o) &&
                        Object.keys(a.O).every(e => a.O[e](r[c]))
                            ? r.splice(c--, 1)
                            : ((s = !1), o < i && (i = o));
                    if (s) {
                        e.splice(l--, 1);
                        var u = n();
                        void 0 !== u && (t = u);
                    }
                }
                return t;
            }
            o = o || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > o; l--)
                e[l] = e[l - 1];
            e[l] = [r, n, o];
        }),
        (a.d = (e, t) => {
            for (var r in t)
                a.o(t, r) &&
                    !a.o(e, r) &&
                    Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
        (a.f = {}),
        (a.e = e =>
            Promise.all(
                Object.keys(a.f).reduce((t, r) => (a.f[r](e, t), t), [])
            )),
        (a.u = e => e + '.fd6a7bd994d997285906.js?v=fd6a7bd994d997285906'),
        (a.g = (function() {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (() => {
            a.S = {};
            var e = {},
                t = {};
            a.I = (r, n) => {
                n || (n = []);
                var o = t[r];
                if ((o || (o = t[r] = {}), !(n.indexOf(o) >= 0))) {
                    if ((n.push(o), e[r])) return e[r];
                    a.o(a.S, r) || (a.S[r] = {}), a.S[r];
                    var i = [];
                    return (e[r] = i.length
                        ? Promise.all(i).then(() => (e[r] = 1))
                        : 1);
                }
            };
        })(),
        (() => {
            var e;
            a.g.importScripts && (e = a.g.location + '');
            var t = a.g.document;
            if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
                var r = t.getElementsByTagName('script');
                if (r.length)
                    for (var n = r.length - 1; n > -1 && !e; ) e = r[n--].src;
            }
            if (!e)
                throw new Error(
                    'Automatic publicPath is not supported in this browser'
                );
            (e = e
                .replace(/#.*$/, '')
                .replace(/\?.*$/, '')
                .replace(/\/[^\/]+$/, '/')),
                (a.p = e);
        })(),
        (() => {
            var e = { 576: 1 };
            a.f.i = (t, r) => {
                e[t] || importScripts(a.p + a.u(t));
            };
            var t = (self.webpackChunk_jupyterlite_pyodide_kernel_extension =
                    self.webpackChunk_jupyterlite_pyodide_kernel_extension ||
                    []),
                r = t.push.bind(t);
            t.push = t => {
                var [n, o, i] = t;
                for (var s in o) a.o(o, s) && (a.m[s] = o[s]);
                for (i && i(a); n.length; ) e[n.pop()] = 1;
                r(t);
            };
        })(),
        (t = a.x),
        (a.x = () => a.e(128).then(t)),
        a.x();
})();
//# sourceMappingURL=576.ee3d77f00b3c07797681.js.map?v=ee3d77f00b3c07797681
