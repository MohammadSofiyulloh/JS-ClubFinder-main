(() => {
  var e = {
      286: (e) => {
        'use strict';
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = e(t);
                return t[2] ? '@media '.concat(t[2], ' {').concat(n, '}') : n;
              }).join('');
            }),
            (t.i = function (e, n, r) {
              'string' == typeof e && (e = [[null, e, '']]);
              var o = {};
              if (r)
                for (var i = 0; i < this.length; i++) {
                  var a = this[i][0];
                  null != a && (o[a] = !0);
                }
              for (var s = 0; s < e.length; s++) {
                var l = [].concat(e[s]);
                (r && o[l[0]]) || (n && (l[2] ? (l[2] = ''.concat(n, ' and ').concat(l[2])) : (l[2] = n)), t.push(l));
              }
            }),
            t
          );
        };
      },
      39: (e, t, n) => {
        function r(e) {
          return (
            (r =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                  }),
            r(e)
          );
        }
        var o = (function (e) {
          'use strict';
          var t,
            n = Object.prototype,
            o = n.hasOwnProperty,
            i = 'function' == typeof Symbol ? Symbol : {},
            a = i.iterator || '@@iterator',
            s = i.asyncIterator || '@@asyncIterator',
            l = i.toStringTag || '@@toStringTag';
          function u(e, t, n) {
            return Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }), e[t];
          }
          try {
            u({}, '');
          } catch (e) {
            u = function (e, t, n) {
              return (e[t] = n);
            };
          }
          function c(e, t, n, r) {
            var o = t && t.prototype instanceof m ? t : m,
              i = Object.create(o.prototype),
              a = new F(r || []);
            return (
              (i._invoke = (function (e, t, n) {
                var r = f;
                return function (o, i) {
                  if (r === p) throw new Error('Generator is already running');
                  if (r === b) {
                    if ('throw' === o) throw i;
                    return k();
                  }
                  for (n.method = o, n.arg = i; ; ) {
                    var a = n.delegate;
                    if (a) {
                      var s = L(a, n);
                      if (s) {
                        if (s === y) continue;
                        return s;
                      }
                    }
                    if ('next' === n.method) n.sent = n._sent = n.arg;
                    else if ('throw' === n.method) {
                      if (r === f) throw ((r = b), n.arg);
                      n.dispatchException(n.arg);
                    } else 'return' === n.method && n.abrupt('return', n.arg);
                    r = p;
                    var l = h(e, t, n);
                    if ('normal' === l.type) {
                      if (((r = n.done ? b : d), l.arg === y)) continue;
                      return { value: l.arg, done: n.done };
                    }
                    'throw' === l.type && ((r = b), (n.method = 'throw'), (n.arg = l.arg));
                  }
                };
              })(e, n, a)),
              i
            );
          }
          function h(e, t, n) {
            try {
              return { type: 'normal', arg: e.call(t, n) };
            } catch (e) {
              return { type: 'throw', arg: e };
            }
          }
          e.wrap = c;
          var f = 'suspendedStart',
            d = 'suspendedYield',
            p = 'executing',
            b = 'completed',
            y = {};
          function m() {}
          function g() {}
          function v() {}
          var w = {};
          u(w, a, function () {
            return this;
          });
          var E = Object.getPrototypeOf,
            x = E && E(E(P([])));
          x && x !== n && o.call(x, a) && (w = x);
          var T = (v.prototype = m.prototype = Object.create(w));
          function C(e) {
            ['next', 'throw', 'return'].forEach(function (t) {
              u(e, t, function (e) {
                return this._invoke(t, e);
              });
            });
          }
          function O(e, t) {
            function n(i, a, s, l) {
              var u = h(e[i], e, a);
              if ('throw' !== u.type) {
                var c = u.arg,
                  f = c.value;
                return f && 'object' === r(f) && o.call(f, '__await')
                  ? t.resolve(f.__await).then(
                      function (e) {
                        n('next', e, s, l);
                      },
                      function (e) {
                        n('throw', e, s, l);
                      }
                    )
                  : t.resolve(f).then(
                      function (e) {
                        (c.value = e), s(c);
                      },
                      function (e) {
                        return n('throw', e, s, l);
                      }
                    );
              }
              l(u.arg);
            }
            var i;
            this._invoke = function (e, r) {
              function o() {
                return new t(function (t, o) {
                  n(e, r, t, o);
                });
              }
              return (i = i ? i.then(o, o) : o());
            };
          }
          function L(e, n) {
            var r = e.iterator[n.method];
            if (r === t) {
              if (((n.delegate = null), 'throw' === n.method)) {
                if (e.iterator.return && ((n.method = 'return'), (n.arg = t), L(e, n), 'throw' === n.method)) return y;
                (n.method = 'throw'), (n.arg = new TypeError("The iterator does not provide a 'throw' method"));
              }
              return y;
            }
            var o = h(r, e.iterator, n.arg);
            if ('throw' === o.type) return (n.method = 'throw'), (n.arg = o.arg), (n.delegate = null), y;
            var i = o.arg;
            return i
              ? i.done
                ? ((n[e.resultName] = i.value), (n.next = e.nextLoc), 'return' !== n.method && ((n.method = 'next'), (n.arg = t)), (n.delegate = null), y)
                : i
              : ((n.method = 'throw'), (n.arg = new TypeError('iterator result is not an object')), (n.delegate = null), y);
          }
          function j(e) {
            var t = { tryLoc: e[0] };
            1 in e && (t.catchLoc = e[1]), 2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])), this.tryEntries.push(t);
          }
          function S(e) {
            var t = e.completion || {};
            (t.type = 'normal'), delete t.arg, (e.completion = t);
          }
          function F(e) {
            (this.tryEntries = [{ tryLoc: 'root' }]), e.forEach(j, this), this.reset(!0);
          }
          function P(e) {
            if (e) {
              var n = e[a];
              if (n) return n.call(e);
              if ('function' == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var r = -1,
                  i = function n() {
                    for (; ++r < e.length; ) if (o.call(e, r)) return (n.value = e[r]), (n.done = !1), n;
                    return (n.value = t), (n.done = !0), n;
                  };
                return (i.next = i);
              }
            }
            return { next: k };
          }
          function k() {
            return { value: t, done: !0 };
          }
          return (
            (g.prototype = v),
            u(T, 'constructor', v),
            u(v, 'constructor', g),
            (g.displayName = u(v, l, 'GeneratorFunction')),
            (e.isGeneratorFunction = function (e) {
              var t = 'function' == typeof e && e.constructor;
              return !!t && (t === g || 'GeneratorFunction' === (t.displayName || t.name));
            }),
            (e.mark = function (e) {
              return Object.setPrototypeOf ? Object.setPrototypeOf(e, v) : ((e.__proto__ = v), u(e, l, 'GeneratorFunction')), (e.prototype = Object.create(T)), e;
            }),
            (e.awrap = function (e) {
              return { __await: e };
            }),
            C(O.prototype),
            u(O.prototype, s, function () {
              return this;
            }),
            (e.AsyncIterator = O),
            (e.async = function (t, n, r, o, i) {
              void 0 === i && (i = Promise);
              var a = new O(c(t, n, r, o), i);
              return e.isGeneratorFunction(n)
                ? a
                : a.next().then(function (e) {
                    return e.done ? e.value : a.next();
                  });
            }),
            C(T),
            u(T, l, 'Generator'),
            u(T, a, function () {
              return this;
            }),
            u(T, 'toString', function () {
              return '[object Generator]';
            }),
            (e.keys = function (e) {
              var t = [];
              for (var n in e) t.push(n);
              return (
                t.reverse(),
                function n() {
                  for (; t.length; ) {
                    var r = t.pop();
                    if (r in e) return (n.value = r), (n.done = !1), n;
                  }
                  return (n.done = !0), n;
                }
              );
            }),
            (e.values = P),
            (F.prototype = {
              constructor: F,
              reset: function (e) {
                if (((this.prev = 0), (this.next = 0), (this.sent = this._sent = t), (this.done = !1), (this.delegate = null), (this.method = 'next'), (this.arg = t), this.tryEntries.forEach(S), !e))
                  for (var n in this) 't' === n.charAt(0) && o.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t);
              },
              stop: function () {
                this.done = !0;
                var e = this.tryEntries[0].completion;
                if ('throw' === e.type) throw e.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;
                function r(r, o) {
                  return (s.type = 'throw'), (s.arg = e), (n.next = r), o && ((n.method = 'next'), (n.arg = t)), !!o;
                }
                for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                  var a = this.tryEntries[i],
                    s = a.completion;
                  if ('root' === a.tryLoc) return r('end');
                  if (a.tryLoc <= this.prev) {
                    var l = o.call(a, 'catchLoc'),
                      u = o.call(a, 'finallyLoc');
                    if (l && u) {
                      if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                      if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                    } else if (l) {
                      if (this.prev < a.catchLoc) return r(a.catchLoc, !0);
                    } else {
                      if (!u) throw new Error('try statement without catch or finally');
                      if (this.prev < a.finallyLoc) return r(a.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (e, t) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var r = this.tryEntries[n];
                  if (r.tryLoc <= this.prev && o.call(r, 'finallyLoc') && this.prev < r.finallyLoc) {
                    var i = r;
                    break;
                  }
                }
                i && ('break' === e || 'continue' === e) && i.tryLoc <= t && t <= i.finallyLoc && (i = null);
                var a = i ? i.completion : {};
                return (a.type = e), (a.arg = t), i ? ((this.method = 'next'), (this.next = i.finallyLoc), y) : this.complete(a);
              },
              complete: function (e, t) {
                if ('throw' === e.type) throw e.arg;
                return (
                  'break' === e.type || 'continue' === e.type ? (this.next = e.arg) : 'return' === e.type ? ((this.rval = this.arg = e.arg), (this.method = 'return'), (this.next = 'end')) : 'normal' === e.type && t && (this.next = t), y
                );
              },
              finish: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), S(n), y;
                }
              },
              catch: function (e) {
                for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                  var n = this.tryEntries[t];
                  if (n.tryLoc === e) {
                    var r = n.completion;
                    if ('throw' === r.type) {
                      var o = r.arg;
                      S(n);
                    }
                    return o;
                  }
                }
                throw new Error('illegal catch attempt');
              },
              delegateYield: function (e, n, r) {
                return (this.delegate = { iterator: P(e), resultName: n, nextLoc: r }), 'next' === this.method && (this.arg = t), y;
              },
            }),
            e
          );
        })('object' === r((e = n.nmd(e))) ? e.exports : {});
        try {
          regeneratorRuntime = o;
        } catch (e) {
          'object' === ('undefined' == typeof globalThis ? 'undefined' : r(globalThis)) ? (globalThis.regeneratorRuntime = o) : Function('r', 'regeneratorRuntime = r')(o);
        }
      },
      705: () => {
        function e(t) {
          return (
            (e =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                  }),
            e(t)
          );
        }
        function t(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        function n(t, n) {
          if (n && ('object' === e(n) || 'function' == typeof n)) return n;
          if (void 0 !== n) throw new TypeError('Derived constructors may only return object or undefined');
          return (function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
          })(t);
        }
        function r(e) {
          var t = 'function' == typeof Map ? new Map() : void 0;
          return (
            (r = function (e) {
              if (null === e || ((n = e), -1 === Function.toString.call(n).indexOf('[native code]'))) return e;
              var n;
              if ('function' != typeof e) throw new TypeError('Super expression must either be null or a function');
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r);
              }
              function r() {
                return o(e, arguments, s(this).constructor);
              }
              return (r.prototype = Object.create(e.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), a(r, e);
            }),
            r(e)
          );
        }
        function o(e, t, n) {
          return (
            (o = i()
              ? Reflect.construct
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var o = new (Function.bind.apply(e, r))();
                  return n && a(o, n.prototype), o;
                }),
            o.apply(null, arguments)
          );
        }
        function i() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        }
        function a(e, t) {
          return (
            (a =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            a(e, t)
          );
        }
        function s(e) {
          return (
            (s = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            s(e)
          );
        }
        var l = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, 'prototype', { writable: !1 }), t && a(e, t);
          })(h, e);
          var r,
            o,
            l,
            u,
            c =
              ((r = h),
              (o = i()),
              function () {
                var e,
                  t = s(r);
                if (o) {
                  var i = s(this).constructor;
                  e = Reflect.construct(t, arguments, i);
                } else e = t.apply(this, arguments);
                return n(this, e);
              });
          function h() {
            var e;
            return (
              (function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
              })(this, h),
              ((e = c.call(this)).shadowDOM = e.attachShadow({ mode: 'open' })),
              e
            );
          }
          return (
            (l = h),
            (u = [
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: 'render',
                value: function () {
                  this.shadowDOM.innerHTML =
                    '\n       <style>\n           * {\n               margin: 0;\n               padding: 0;\n               box-sizing: border-box;\n           }\n           :host {\n               display: block;\n               width: 100%;\n               background-color: cornflowerblue;\n               color: white;\n               box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n           }\n           h2 {\n               padding: 16px;\n           }\n       </style>\n       <h2>Club Finder</h2>';
                },
              },
            ]) && t(l.prototype, u),
            Object.defineProperty(l, 'prototype', { writable: !1 }),
            h
          );
        })(r(HTMLElement));
        customElements.define('app-bar', l);
      },
      312: () => {
        function e(t) {
          return (
            (e =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                  }),
            e(t)
          );
        }
        function t(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        function n(t, n) {
          if (n && ('object' === e(n) || 'function' == typeof n)) return n;
          if (void 0 !== n) throw new TypeError('Derived constructors may only return object or undefined');
          return (function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
          })(t);
        }
        function r(e) {
          var t = 'function' == typeof Map ? new Map() : void 0;
          return (
            (r = function (e) {
              if (null === e || ((n = e), -1 === Function.toString.call(n).indexOf('[native code]'))) return e;
              var n;
              if ('function' != typeof e) throw new TypeError('Super expression must either be null or a function');
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r);
              }
              function r() {
                return o(e, arguments, s(this).constructor);
              }
              return (r.prototype = Object.create(e.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), a(r, e);
            }),
            r(e)
          );
        }
        function o(e, t, n) {
          return (
            (o = i()
              ? Reflect.construct
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var o = new (Function.bind.apply(e, r))();
                  return n && a(o, n.prototype), o;
                }),
            o.apply(null, arguments)
          );
        }
        function i() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        }
        function a(e, t) {
          return (
            (a =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            a(e, t)
          );
        }
        function s(e) {
          return (
            (s = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            s(e)
          );
        }
        var l = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, 'prototype', { writable: !1 }), t && a(e, t);
          })(h, e);
          var r,
            o,
            l,
            u,
            c =
              ((r = h),
              (o = i()),
              function () {
                var e,
                  t = s(r);
                if (o) {
                  var i = s(this).constructor;
                  e = Reflect.construct(t, arguments, i);
                } else e = t.apply(this, arguments);
                return n(this, e);
              });
          function h() {
            var e;
            return (
              (function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
              })(this, h),
              ((e = c.call(this)).shadowDOM = e.attachShadow({ mode: 'open' })),
              e
            );
          }
          return (
            (l = h),
            (u = [
              {
                key: 'club',
                set: function (e) {
                  (this._club = e), this.render();
                },
              },
              {
                key: 'render',
                value: function () {
                  this.shadowDOM.innerHTML =
                    '\n           <style>\n              * {\n                   margin: 0;\n                   padding: 0;\n                   box-sizing: border-box;\n               }\n               :host {\n                   display: block;\n                   margin-bottom: 18px;\n                   box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n                   border-radius: 10px;\n                   overflow: hidden;\n               }\n              \n               .fan-art-club {\n                   width: 100%;\n                   max-height: 300px;\n                   object-fit: cover;\n                   object-position: center;\n               }\n              \n               .club-info {\n                   padding: 24px;\n               }\n              \n               .club-info > h2 {\n                   font-weight: lighter;\n               }\n              \n               .club-info > p {\n                   margin-top: 10px;\n                   overflow: hidden;\n                   text-overflow: ellipsis;\n                   display: -webkit-box;\n                   -webkit-box-orient: vertical;\n                   -webkit-line-clamp: 10; /* number of lines to show */\n               }\n           </style>\n           <img class="fan-art-club" src="'
                      .concat(this._club.fanArt, '" alt="Fan Art">\n           <div class="club-info">\n               <h2>')
                      .concat(this._club.name, '</h2>\n               <p>')
                      .concat(this._club.description, '</p>\n           </div>');
                },
              },
            ]) && t(l.prototype, u),
            Object.defineProperty(l, 'prototype', { writable: !1 }),
            h
          );
        })(r(HTMLElement));
        customElements.define('club-item', l);
      },
      998: () => {
        function e(t) {
          return (
            (e =
              'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
                ? function (e) {
                    return typeof e;
                  }
                : function (e) {
                    return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                  }),
            e(t)
          );
        }
        function t(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
          }
        }
        function n(t, n) {
          if (n && ('object' === e(n) || 'function' == typeof n)) return n;
          if (void 0 !== n) throw new TypeError('Derived constructors may only return object or undefined');
          return (function (e) {
            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e;
          })(t);
        }
        function r(e) {
          var t = 'function' == typeof Map ? new Map() : void 0;
          return (
            (r = function (e) {
              if (null === e || ((n = e), -1 === Function.toString.call(n).indexOf('[native code]'))) return e;
              var n;
              if ('function' != typeof e) throw new TypeError('Super expression must either be null or a function');
              if (void 0 !== t) {
                if (t.has(e)) return t.get(e);
                t.set(e, r);
              }
              function r() {
                return o(e, arguments, s(this).constructor);
              }
              return (r.prototype = Object.create(e.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), a(r, e);
            }),
            r(e)
          );
        }
        function o(e, t, n) {
          return (
            (o = i()
              ? Reflect.construct
              : function (e, t, n) {
                  var r = [null];
                  r.push.apply(r, t);
                  var o = new (Function.bind.apply(e, r))();
                  return n && a(o, n.prototype), o;
                }),
            o.apply(null, arguments)
          );
        }
        function i() {
          if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ('function' == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
          } catch (e) {
            return !1;
          }
        }
        function a(e, t) {
          return (
            (a =
              Object.setPrototypeOf ||
              function (e, t) {
                return (e.__proto__ = t), e;
              }),
            a(e, t)
          );
        }
        function s(e) {
          return (
            (s = Object.setPrototypeOf
              ? Object.getPrototypeOf
              : function (e) {
                  return e.__proto__ || Object.getPrototypeOf(e);
                }),
            s(e)
          );
        }
        var l = (function (e) {
          !(function (e, t) {
            if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
            (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, 'prototype', { writable: !1 }), t && a(e, t);
          })(h, e);
          var r,
            o,
            l,
            u,
            c =
              ((r = h),
              (o = i()),
              function () {
                var e,
                  t = s(r);
                if (o) {
                  var i = s(this).constructor;
                  e = Reflect.construct(t, arguments, i);
                } else e = t.apply(this, arguments);
                return n(this, e);
              });
          function h() {
            var e;
            return (
              (function (e, t) {
                if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
              })(this, h),
              ((e = c.call(this)).shadowDOM = e.attachShadow({ mode: 'open' })),
              e
            );
          }
          return (
            (l = h),
            (u = [
              {
                key: 'connectedCallback',
                value: function () {
                  this.render();
                },
              },
              {
                key: 'clickEvent',
                set: function (e) {
                  (this._clickEvent = e), this.render();
                },
              },
              {
                key: 'value',
                get: function () {
                  return this.shadowDOM.querySelector('#searchElement').value;
                },
              },
              {
                key: 'render',
                value: function () {
                  (this.shadowDOM.innerHTML =
                    '\n       <style>\n       .search-container {\n           max-width: 800px;\n           box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n           padding: 16px;\n           border-radius: 5px;\n           display: flex;\n           position: sticky;\n           top: 10px;\n           background-color: white;\n       }\n      \n       .search-container > input {\n           width: 75%;\n           padding: 16px;\n           border: 0;\n           border-bottom: 1px solid cornflowerblue;\n           font-weight: bold;\n       }\n      \n       .search-container > input:focus {\n           outline: 0;\n           border-bottom: 2px solid cornflowerblue;\n       }\n      \n       .search-container > input:focus::placeholder {\n           font-weight: bold;\n       }\n      \n       .search-container >  input::placeholder {\n           color: cornflowerblue;\n           font-weight: normal;\n       }\n      \n       .search-container > button {\n           width: 23%;\n           cursor: pointer;\n           margin-left: auto;\n           padding: 16px;\n           background-color: cornflowerblue;\n           color: white;\n           border: 0;\n           text-transform: uppercase;\n       }\n      \n       @media screen and (max-width: 550px){\n           .search-container {\n               flex-direction: column;\n               position: static;\n           }\n      \n           .search-container > input {\n               width: 100%;\n               margin-bottom: 12px;\n           }\n      \n           .search-container > button {\n               width: 100%;\n           }\n       }\n       </style>\n       <div id="search-container" class="search-container">\n           <input placeholder="Search football club" id="searchElement" type="search">\n           <button id="searchButtonElement" type="submit">Search</button>\n       </div>\n       '),
                    this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
                },
              },
            ]) && t(l.prototype, u),
            Object.defineProperty(l, 'prototype', { writable: !1 }),
            h
          );
        })(r(HTMLElement));
        customElements.define('search-bar', l);
      },
      890: (e, t, n) => {
        'use strict';
        n.d(t, { Z: () => i });
        var r = n(286),
          o = n.n(r)()(function (e) {
            return e[1];
          });
        o.push([
          e.id,
          '* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  font-family: sans-serif;\r\n}\r\n\r\nmain {\r\n  width: 90%;\r\n  max-width: 800px;\r\n  margin: 32px auto;\r\n}\r\n\r\nclub-list {\r\n  display: block;\r\n  margin-top: 32px;\r\n  width: 100%;\r\n  padding: 16px;\r\n}\r\n',
          '',
        ]);
        const i = o;
      },
      379: (e, t, n) => {
        'use strict';
        var r,
          o = (function () {
            var e = {};
            return function (t) {
              if (void 0 === e[t]) {
                var n = document.querySelector(t);
                if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement)
                  try {
                    n = n.contentDocument.head;
                  } catch (e) {
                    n = null;
                  }
                e[t] = n;
              }
              return e[t];
            };
          })(),
          i = [];
        function a(e) {
          for (var t = -1, n = 0; n < i.length; n++)
            if (i[n].identifier === e) {
              t = n;
              break;
            }
          return t;
        }
        function s(e, t) {
          for (var n = {}, r = [], o = 0; o < e.length; o++) {
            var s = e[o],
              l = t.base ? s[0] + t.base : s[0],
              u = n[l] || 0,
              c = ''.concat(l, ' ').concat(u);
            n[l] = u + 1;
            var h = a(c),
              f = { css: s[1], media: s[2], sourceMap: s[3] };
            -1 !== h ? (i[h].references++, i[h].updater(f)) : i.push({ identifier: c, updater: b(f, t), references: 1 }), r.push(c);
          }
          return r;
        }
        function l(e) {
          var t = document.createElement('style'),
            r = e.attributes || {};
          if (void 0 === r.nonce) {
            var i = n.nc;
            i && (r.nonce = i);
          }
          if (
            (Object.keys(r).forEach(function (e) {
              t.setAttribute(e, r[e]);
            }),
            'function' == typeof e.insert)
          )
            e.insert(t);
          else {
            var a = o(e.insert || 'head');
            if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
            a.appendChild(t);
          }
          return t;
        }
        var u,
          c =
            ((u = []),
            function (e, t) {
              return (u[e] = t), u.filter(Boolean).join('\n');
            });
        function h(e, t, n, r) {
          var o = n ? '' : r.media ? '@media '.concat(r.media, ' {').concat(r.css, '}') : r.css;
          if (e.styleSheet) e.styleSheet.cssText = c(t, o);
          else {
            var i = document.createTextNode(o),
              a = e.childNodes;
            a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
          }
        }
        function f(e, t, n) {
          var r = n.css,
            o = n.media,
            i = n.sourceMap;
          if (
            (o ? e.setAttribute('media', o) : e.removeAttribute('media'),
            i && 'undefined' != typeof btoa && (r += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), ' */')),
            e.styleSheet)
          )
            e.styleSheet.cssText = r;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(r));
          }
        }
        var d = null,
          p = 0;
        function b(e, t) {
          var n, r, o;
          if (t.singleton) {
            var i = p++;
            (n = d || (d = l(t))), (r = h.bind(null, n, i, !1)), (o = h.bind(null, n, i, !0));
          } else
            (n = l(t)),
              (r = f.bind(null, n, t)),
              (o = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(n);
              });
          return (
            r(e),
            function (t) {
              if (t) {
                if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                r((e = t));
              } else o();
            }
          );
        }
        e.exports = function (e, t) {
          (t = t || {}).singleton || 'boolean' == typeof t.singleton || (t.singleton = (void 0 === r && (r = Boolean(window && document && document.all && !window.atob)), r));
          var n = s((e = e || []), t);
          return function (e) {
            if (((e = e || []), '[object Array]' === Object.prototype.toString.call(e))) {
              for (var r = 0; r < n.length; r++) {
                var o = a(n[r]);
                i[o].references--;
              }
              for (var l = s(e, t), u = 0; u < n.length; u++) {
                var c = a(n[u]);
                0 === i[c].references && (i[c].updater(), i.splice(c, 1));
              }
              n = l;
            }
          };
        };
      },
    },
    t = {};
  function n(r) {
    var o = t[r];
    if (void 0 !== o) return o.exports;
    var i = (t[r] = { id: r, loaded: !1, exports: {} });
    return e[r](i, i.exports, n), (i.loaded = !0), i.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (() => {
      'use strict';
      n(39);
      var e = n(379),
        t = n.n(e),
        r = n(890);
      function o(e) {
        return (
          (o =
            'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
              ? function (e) {
                  return typeof e;
                }
              : function (e) {
                  return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                }),
          o(e)
        );
      }
      function i(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }
      function a(e, t) {
        if (t && ('object' === o(t) || 'function' == typeof t)) return t;
        if (void 0 !== t) throw new TypeError('Derived constructors may only return object or undefined');
        return (function (e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e;
        })(e);
      }
      function s(e) {
        var t = 'function' == typeof Map ? new Map() : void 0;
        return (
          (s = function (e) {
            if (null === e || ((n = e), -1 === Function.toString.call(n).indexOf('[native code]'))) return e;
            var n;
            if ('function' != typeof e) throw new TypeError('Super expression must either be null or a function');
            if (void 0 !== t) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            function r() {
              return l(e, arguments, h(this).constructor);
            }
            return (r.prototype = Object.create(e.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } })), c(r, e);
          }),
          s(e)
        );
      }
      function l(e, t, n) {
        return (
          (l = u()
            ? Reflect.construct
            : function (e, t, n) {
                var r = [null];
                r.push.apply(r, t);
                var o = new (Function.bind.apply(e, r))();
                return n && c(o, n.prototype), o;
              }),
          l.apply(null, arguments)
        );
      }
      function u() {
        if ('undefined' == typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ('function' == typeof Proxy) return !0;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0;
        } catch (e) {
          return !1;
        }
      }
      function c(e, t) {
        return (
          (c =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          c(e, t)
        );
      }
      function h(e) {
        return (
          (h = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          h(e)
        );
      }
      t()(r.Z, { insert: 'head', singleton: !1 }), r.Z.locals, n(705), n(312);
      var f = (function (e) {
        !(function (e, t) {
          if ('function' != typeof t && null !== t) throw new TypeError('Super expression must either be null or a function');
          (e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), Object.defineProperty(e, 'prototype', { writable: !1 }), t && c(e, t);
        })(l, e);
        var t,
          n,
          r,
          o,
          s =
            ((t = l),
            (n = u()),
            function () {
              var e,
                r = h(t);
              if (n) {
                var o = h(this).constructor;
                e = Reflect.construct(r, arguments, o);
              } else e = r.apply(this, arguments);
              return a(this, e);
            });
        function l() {
          var e;
          return (
            (function (e, t) {
              if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
            })(this, l),
            ((e = s.call(this)).shadowDOM = e.attachShadow({ mode: 'open' })),
            e
          );
        }
        return (
          (r = l),
          (o = [
            {
              key: 'clubs',
              set: function (e) {
                (this._clubs = e), this.render();
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this;
                (this.shadowDOM.innerHTML = ''),
                  this._clubs.forEach(function (t) {
                    var n = document.createElement('club-item');
                    (n.club = t), e.shadowDOM.appendChild(n);
                  });
              },
            },
            {
              key: 'renderError',
              value: function (e) {
                (this.shadowDOM.innerHTML =
                  '\n        <style>\n             .placeholder {\n                   font-weight: lighter;\n                   color: rgba(0,0,0,0.5);\n                   -webkit-user-select: none;\n                   -moz-user-select: none;\n                   -ms-user-select: none;\n                   user-select: none;\n               }\n           </style>'),
                  (this.shadowDOM.innerHTML += '<h2 class="placeholder">'.concat(e, '</h2>'));
              },
            },
          ]) && i(r.prototype, o),
          Object.defineProperty(r, 'prototype', { writable: !1 }),
          l
        );
      })(s(HTMLElement));
      customElements.define('club-list', f), n(998);
      const d = [
        {
          name: 'Arsenal',
          stadium: 'Emirates Stadium',
          fanArt: 'https://www.thesportsdb.com/images/media/team/fanart/xyusxr1419347566.jpg',
          description:
            "Arsenal Football Club is a professional football club based in Holloway, London which currently plays in the Premier League, the highest level of English football. One of the most successful clubs in English football, they have won 13 First Division and Premier League titles and a joint record 11 FA Cups. Arsenal's success has been particularly consistent: the club has accumulated the second most points in English top-flight football, hold the ongoing record for the longest uninterrupted period in the top flight, and would be placed first in an aggregated league of the entire 20th century. Arsenal is the second side to complete an English top-flight season unbeaten (in the 2003–04 season), playing almost twice as many matches as the previous invincibles Preston North End in the 1888–89 season. Arsenal was founded in 1886 in Woolwich and in 1893 became the first club from the south of England to join the Football League. In 1913, they moved north across the city to Arsenal Stadium in Highbury. In the 1930s, they won five League Championship titles and two FA Cups. After a lean period in the post-war years they won the League and FA Cup Double, in the 1970–71 season, and in the 1990s and first decade of the 21st century, won two more Doubles and reached the 2006 UEFA Champions League Final. Since neighbouring Tottenham Hotspur, the two clubs have had a fierce rivalry, the North London derby. Arsenal have one of the highest incomes and largest fanbases in the world. The club was named the fifth most valuable association football club in the world, valued at £1.3 billion in 2014.",
        },
        {
          name: 'Aston Villa',
          stadium: 'Villa Park',
          fanArt: 'https://www.thesportsdb.com/images/media/team/fanart/trxryx1421747670.jpg',
          description:
            'Aston Villa Football Club (/ˈæstən ˈvɪllə/; also known as Villa, The Villa, The Villans, The Lions) are a professional football club based in Witton, Birmingham, who play in the Premier League, the highest level of English football. Founded in 1874, they have played at their current home ground, Villa Park, since 1897. Aston Villa were founder members of The Football League in 1888. They were also founder members of the Premier League in 1992, and have remained there ever since. The club were floated by the previous owner and chairman Doug Ellis, but in 2006 full control was acquired by American businessman Randy Lerner. Lerner announced on 12 May 2014 that he is selling the club. Aston Villa are among the oldest and the most successful football clubs in the history of English football. Villa won the 1981–82 European Cup, and are thus one of five English clubs to win what is now the UEFA Champions League. They have the fourth highest total of major honours won by an English club, having won the First Division Championship seven times (most recently in the 1980–81 season), the FA Cup seven times (last won in 1957), the Football League Cup five times (last won in 1996) and the UEFA Super Cup in 1982. The club have also produced more England national team players than any other side, currently having produced 72. They have a fierce local rivalry with Birmingham City. The Second City derby between Aston Villa and Birmingham City has been played since 1879. The club\'s traditional kit colours are claret shirts with sky blue sleeves, white shorts and sky blue socks. Their traditional badge is of a rampant gold lion on a light blue background with the club\'s motto "Prepared" underneath; a modified version of this was adopted in 2007.',
        },
        {
          name: 'Bournemouth',
          stadium: 'Dean Court',
          fanArt: 'https://www.thesportsdb.com/images/media/team/fanart/wvuypx1469485789.jpg',
          description:
            "A.F.C. Bournemouth is a football club playing in the Championship, the second tier in the English football league system. The club plays at Dean Court in Kings Park, Boscombe, Bournemouth, Dorset and have been in existence since 1899. Nicknamed The Cherries, the team traditionally played in red shirts with white sleeves until 1971, when the strip was changed to red and black stripes, similar to that of A.C. Milan. A predominantly red shirt was chosen for the 2004–05 and 2005–06 seasons before announcing a return to the stripes for the 2006–07 season due to fan demand. After narrowly avoiding relegation from the Football League in the 2008–09 season, Bournemouth were promoted to League One at the end of the 2009–10. After making the League One play-off semi-finals in 2010–11 and achieving a mid-table finish in 2011–12, Bournemouth won promotion to the Championship at the end of the 2012–13 season, putting them in the second tier of the league for only the second time in their history. Although the exact date of the club's foundation is not known, there is proof that it was formed in the autumn of 1899 out of the remains of the older Boscombe St. John's Lads’ Institute F.C. The club was originally known as Boscombe F.C.. The first President was Mr. J.C. Nutt. In their first season 1889–90 Boscombe F.C. competed in the Bournemouth and District Junior League. They also played in the Hants Junior Cup. During the first two seasons they played on a football pitch in Castlemain Avenue, Pokesdown. From their third season the team played on a pitch in King's Park. In the season of 1905–06 Boscombe F.C. graduated to senior amateur football. In 1910 the club was granted a long lease upon some wasteland next to Kings Park, as the clubs football ground, by their president Mr. J.E. Cooper-Dean. With their own ground, named Dean Court after the benefactor, the club continued to thrive and dominated the local football scene. Also in 1910 the club signed their first professional football player B. Penton. Around about this time the club obtained their nickname 'The Cherries'. Foremost there are two tales on how the club gained this pet name. First, because of the cherry-red striped shirts that the team played in and, perhaps more plausible, because Dean Court was built adjacent to the Cooper-Dean estate, which encompassed numerous cherry orchards. For the first time during the season of 1913–14 the club competed in the F.A. Cup. The clubs progress was halted in 1914 with the outbreak of the war and Boscombe F.C. returned to the Hampshire league. In 1920 the Third Division was formed and Boscombe were promoted to the Southern League, with moderate success.",
        },
        {
          name: 'Brighton',
          stadium: 'Falmer Stadium',
          fanArt: 'https://www.thesportsdb.com/images/media/team/fanart/bk2b6j1504211012.jpg',
          description:
            'Brighton and Hove Albion Football Club /ˈbraɪtən ən ˈhoʊv/ is an English football club based in the coastal city of Brighton & Hove, East Sussex. It is often referred to just as Brighton. They currently play in the Football League Championship, the second tier of the English football league system. The team is nicknamed the "Seagulls" or "Albion". The team has historically played in blue and white stripes, though this changed to all white briefly in the 1970s and again to plain blue during the club\'s most successful spell in the 1980s. Crystal Palace is considered the club\'s main rival, although the grounds are 40 miles apart. Founded in 1901, Brighton played their early professional football in the Southern League before being elected to the Football League in 1920. The club enjoyed greatest prominence between 1979 and 1983 when they played in the First Division and reached the 1983 FA Cup Final, losing to Manchester United after a replay. They were relegated from the top division in the same season. Mismanagement brought Brighton close to relegation from the Football League to the Conference which they narrowly avoided in 1997 and 1998. A boardroom takeover saved Brighton from liquidation, and following successive promotions they returned to the second tier of English football in 2002 and have played in the second and third tiers ever since.',
        },
        {
          name: 'Chelsea',
          stadium: 'Stamford Bridge',
          fanArt: 'https://www.thesportsdb.com/images/media/team/fanart/rppwtt1424447399.jpg',
          description:
            "helsea Football Club /ˈtʃɛlsiː/ are a professional football club based in Fulham, London, who play in the Premier League, the highest level of English football. Founded in 1905, the club have spent most of their history in the top tier of English football. The club's home ground is the 41,837-seat Stamford Bridge stadium, where they have played since their establishment.\\r\\n\\r\\nChelsea had their first major success in 1955, winning the league championship, and won various cup competitions during the 1960s, 1970s, 1990s and 2000s. The club have enjoyed their greatest period of success in the past two decades, winning 15 major trophies since 1997. Domestically, Chelsea have won four league titles, seven FA Cups, four League Cups and four FA Community Shields, while in continental competitions they have won two UEFA Cup Winners' Cups, one UEFA Super Cup, one UEFA Europa League and one UEFA Champions League. Chelsea are the only London club to win the UEFA Champions League, and one of four clubs, and the only British club, to have won all three main UEFA club competitions.\\r\\n\\r\\nChelsea's regular kit colours are royal blue shirts and shorts with white socks. The club's crest has been changed several times in attempts to re-brand the club and modernise its image. The current crest, featuring a ceremonial lion rampant regardant holding a staff, is a modification of the one introduced in the early 1950s. The club have sustained the fifth highest average all-time attendance in English football. Their average home gate for the 2012–13 season was 41,462, the sixth highest in the Premier League. Since July 2003, Chelsea have been owned by Russian billionaire Roman Abramovich. In April 2013 they were ranked by Forbes Magazine as the seventh most valuable football club in the world, at £588 million ($901 million), an increase of 18% from the previous year.",
        },
        {
          name: 'Crystal Palace',
          staidum: 'Selhurst Park',
          fanArt: 'https://www.thesportsdb.com/images/media/team/fanart/svsvqv1424367005.jpg',
          description:
            'Crystal Palace Football Club is an English professional football club based in South Norwood, London. They currently play in the highest level in English football, the Premier League. Since 1964, the club have mostly played in the top two leagues of English football. The club was founded in 1905 at the site of the famous Crystal Palace Exhibition building by the owners of the FA Cup Final stadium, who wanted their own team to play at the historic venue. Palace applied to be elected to The Football League, but this was rejected and they instead joined the Southern Football League Second Division, playing home games at The Crystal Palace, inspiration for the club\'s initial nickname, \\"The Glaziers\\". Palace won the Division and promotion in their first season, and played in the Southern League First Division for the next fifteen years.\\r\\n\\r\\nIn 1920 the Southern League Division One formed the Football League Third Division. Palace won the division and gained promotion to the Second Division, where they spent four seasons before suffering relegation to the Third Division South. In 1958 a league re-organisation saw Palace become founder members of Division Four. Over the next eleven years the club moved from the lowest rung of English Football to the highest, reaching the First Division in 1969, and staying in the top division for four seasons before suffering successive relegations. In 1973 the club modernised its image, changing the nickname from The Glaziers to \\"The Eagles\\" and ending the 68-year association with claret and blue by introducing the red-and-blue vertical stripes now associated with the club. The club stabilised itself in the top two divisions with promotions in 1977 and 1979, the latter saw the club crowned as Division Two Champions. The period between 1989–91 was a successful time for the club. They reached an FA Cup Final in 1990, won the Full Members Cup in 1991, and achieved third place in the top division in the 1990–1991 season. Palace became founder members of the Premier League in 1992, but were relegated the same season, despite achieving 49 points which is still a Premier League record for a relegated club. The club then achieved promotion back to the Premier League three times in 1994, 1997 and 2004, but each time suffered relegation at the end of the following season. Palace entered administration in both 2000 and 2010, and are now owned by a consortium of four. The club were promoted back to the Premier League with a 1–0 win over Watford in the Football League play-offs in May 2013.\\r\\n\\r\\nCrystal Palace initially played their games in the grounds of The Crystal Palace, but the First World War saw them forced to move out, and they enjoyed a number of seasons at both the Herne Hill Velodrome and The Nest. Since 1924, Palace have played their home games at Selhurst Park. Their home colours are red and blue vertical stripes, though prior to 1973 they wore claret and pale blue after the fashion of Aston Villa. They have a fierce rivalry with M23 neighbours Brighton & Hove Albion, with whom they have contested the M23 derby 98 times and also enjoy a strong rivalry with fellow South London team Millwall. The club\'s kit is currently made by Macron, and the shirt sponsor is Neteller. The club captain is Mile Jedinak and the current player of the year is Julian Speroni. Edmund Goodman is the club\'s longest serving manager, and Jim Cannon has made the most appearances for the club. Peter Simpson is the club\'s top scorer for both one season and overall, netting 54 and 165 respectively. The highest transfer fee received has been for Wilfried Zaha from Manchester United in January 2013.',
        },
        {
          name: 'Everton',
          stadium: 'Goodison Park',
          fanArt: 'https://www.thesportsdb.com/images/media/team/fanart/yyuypw1420393451.jpg',
          description:
            "Everton Football Club /ˈɛvərtən/ are an English professional football club based in Liverpool, and currently playing in the Premier League. The club have competed in the top division for a record 110 seasons (missing only four seasons, in the second tier) and have won the League Championship nine times.\\r\\n\\r\\nFormed in 1878, Everton were founding members of The Football League in 1888 and won their first league championship two seasons later. Following four league titles and two FA Cup wins, Everton experienced a lull in the immediate post World War Two period until a revival in the 1960s which saw the club win two league championships and an FA Cup. The mid-1980s represented their most recent period of sustained success, with two League Championship successes, an FA Cup, and the 1985 European Cup Winners' Cup. The club's most recent major trophy was the 1995 FA Cup. The club's supporters are known as Evertonians.\\r\\n\\r\\nEverton have a rivalry with neighbours Liverpool and the two sides contest the Merseyside derby. The club have been based at Goodison Park since 1892, after moving from Anfield after a row over its rent.\\r\\n\\r\\nThe club's home colours are royal blue shirts and white shorts. Everton player Dixie Dean scored a record 60 league goals in the 1927–28 season.",
        },
      ];
      function p(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
        }
      }
      const b = (function () {
        function e() {
          !(function (e, t) {
            if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
          })(this, e);
        }
        var t, n;
        return (
          (t = e),
          (n = [
            {
              key: 'searchClub',
              value: function (e) {
                return new Promise(function (t, n) {
                  var r = d.filter(function (t) {
                    return t.name.toUpperCase().includes(e.toUpperCase());
                  });
                  r.length ? t(r) : n(''.concat(e, ' is not found'));
                });
              },
            },
          ]),
          null && p(t.prototype, null),
          n && p(t, n),
          Object.defineProperty(t, 'prototype', { writable: !1 }),
          e
        );
      })();
      function y(e, t, n, r, o, i, a) {
        try {
          var s = e[i](a),
            l = s.value;
        } catch (e) {
          return void n(e);
        }
        s.done ? t(l) : Promise.resolve(l).then(r, o);
      }
      document.addEventListener('DOMContentLoaded', function () {
        var e = document.querySelector('search-bar'),
          t = document.querySelector('club-list'),
          n = (function () {
            var t,
              n =
                ((t = regeneratorRuntime.mark(function t() {
                  var n;
                  return regeneratorRuntime.wrap(
                    function (t) {
                      for (;;)
                        switch ((t.prev = t.next)) {
                          case 0:
                            return (t.prev = 0), (t.next = 3), b.searchClub(e.value);
                          case 3:
                            (n = t.sent), r(n), (t.next = 10);
                            break;
                          case 7:
                            (t.prev = 7), (t.t0 = t.catch(0)), o(t.t0);
                          case 10:
                          case 'end':
                            return t.stop();
                        }
                    },
                    t,
                    null,
                    [[0, 7]]
                  );
                })),
                function () {
                  var e = this,
                    n = arguments;
                  return new Promise(function (r, o) {
                    var i = t.apply(e, n);
                    function a(e) {
                      y(i, r, o, a, s, 'next', e);
                    }
                    function s(e) {
                      y(i, r, o, a, s, 'throw', e);
                    }
                    a(void 0);
                  });
                });
            return function () {
              return n.apply(this, arguments);
            };
          })(),
          r = function (e) {
            t.clubs = e;
          },
          o = function (e) {
            t.renderError(e);
          };
        e.clickEvent = n;
      });
    })();
})();
