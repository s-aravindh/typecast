(function (e, t) {
    var n, r, i = typeof t, o = e.location, a = e.document, s = a.documentElement, l = e.jQuery, u = e.$, c = {}, p = [], f = "1.10.2", d = p.concat, h = p.push, g = p.slice, m = p.indexOf, y = c.toString, v = c.hasOwnProperty, b = f.trim, x = function (e, t) {
        return new x.fn.init(e, t, r)
    }, w = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = /\S+/g, C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, N = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, k = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, E = /^[\],:{}\s]*$/, S = /(?:^|:|,)(?:\s*\[)+/g, A = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, j = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g, D = /^-ms-/, L = /-([\da-z])/gi, H = function (e, t) {
        return t.toUpperCase()
    }, q = function (e) {
        (a.addEventListener || "load" === e.type || "complete" === a.readyState) && (_(), x.ready())
    }, _ = function () {
        a.addEventListener ? (a.removeEventListener("DOMContentLoaded", q, !1), e.removeEventListener("load", q, !1)) : (a.detachEvent("onreadystatechange", q), e.detachEvent("onload", q))
    };
    x.fn = x.prototype = {jquery: f, constructor: x, init: function (e, n, r) {
        var i, o;
        if (!e)return this;
        if ("string" == typeof e) {
            if (i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : N.exec(e), !i || !i[1] && n)return!n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
            if (i[1]) {
                if (n = n instanceof x ? n[0] : n, x.merge(this, x.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : a, !0)), k.test(i[1]) && x.isPlainObject(n))for (i in n)x.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);
                return this
            }
            if (o = a.getElementById(i[2]), o && o.parentNode) {
                if (o.id !== i[2])return r.find(e);
                this.length = 1, this[0] = o
            }
            return this.context = a, this.selector = e, this
        }
        return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : x.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), x.makeArray(e, this))
    }, selector: "", length: 0, toArray: function () {
        return g.call(this)
    }, get: function (e) {
        return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
    }, pushStack: function (e) {
        var t = x.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
    }, each: function (e, t) {
        return x.each(this, e, t)
    }, ready: function (e) {
        return x.ready.promise().done(e), this
    }, slice: function () {
        return this.pushStack(g.apply(this, arguments))
    }, first: function () {
        return this.eq(0)
    }, last: function () {
        return this.eq(-1)
    }, eq: function (e) {
        var t = this.length, n = +e + (0 > e ? t : 0);
        return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
    }, map: function (e) {
        return this.pushStack(x.map(this, function (t, n) {
            return e.call(t, n, t)
        }))
    }, end: function () {
        return this.prevObject || this.constructor(null)
    }, push: h, sort: [].sort, splice: [].splice}, x.fn.init.prototype = x.fn, x.extend = x.fn.extend = function () {
        var e, n, r, i, o, a, s = arguments[0] || {}, l = 1, u = arguments.length, c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || x.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++)if (null != (o = arguments[l]))for (i in o)e = s[i], r = o[i], s !== r && (c && r && (x.isPlainObject(r) || (n = x.isArray(r))) ? (n ? (n = !1, a = e && x.isArray(e) ? e : []) : a = e && x.isPlainObject(e) ? e : {}, s[i] = x.extend(c, a, r)) : r !== t && (s[i] = r));
        return s
    }, x.extend({expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""), noConflict: function (t) {
        return e.$ === x && (e.$ = u), t && e.jQuery === x && (e.jQuery = l), x
    }, isReady: !1, readyWait: 1, holdReady: function (e) {
        e ? x.readyWait++ : x.ready(!0)
    }, ready: function (e) {
        if (e === !0 ? !--x.readyWait : !x.isReady) {
            if (!a.body)return setTimeout(x.ready);
            x.isReady = !0, e !== !0 && --x.readyWait > 0 || (n.resolveWith(a, [x]), x.fn.trigger && x(a).trigger("ready").off("ready"))
        }
    }, isFunction: function (e) {
        return"function" === x.type(e)
    }, isArray: Array.isArray || function (e) {
        return"array" === x.type(e)
    }, isWindow: function (e) {
        return null != e && e == e.window
    }, isNumeric: function (e) {
        return!isNaN(parseFloat(e)) && isFinite(e)
    }, type: function (e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? c[y.call(e)] || "object" : typeof e
    }, isPlainObject: function (e) {
        var n;
        if (!e || "object" !== x.type(e) || e.nodeType || x.isWindow(e))return!1;
        try {
            if (e.constructor && !v.call(e, "constructor") && !v.call(e.constructor.prototype, "isPrototypeOf"))return!1
        } catch (r) {
            return!1
        }
        if (x.support.ownLast)for (n in e)return v.call(e, n);
        for (n in e);
        return n === t || v.call(e, n)
    }, isEmptyObject: function (e) {
        var t;
        for (t in e)return!1;
        return!0
    }, error: function (e) {
        throw Error(e)
    }, parseHTML: function (e, t, n) {
        if (!e || "string" != typeof e)return null;
        "boolean" == typeof t && (n = t, t = !1), t = t || a;
        var r = k.exec(e), i = !n && [];
        return r ? [t.createElement(r[1])] : (r = x.buildFragment([e], t, i), i && x(i).remove(), x.merge([], r.childNodes))
    }, parseJSON: function (n) {
        return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = x.trim(n), n && E.test(n.replace(A, "@").replace(j, "]").replace(S, ""))) ? Function("return " + n)() : (x.error("Invalid JSON: " + n), t)
    }, parseXML: function (n) {
        var r, i;
        if (!n || "string" != typeof n)return null;
        try {
            e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n))
        } catch (o) {
            r = t
        }
        return r && r.documentElement && !r.getElementsByTagName("parsererror").length || x.error("Invalid XML: " + n), r
    }, noop: function () {
    }, globalEval: function (t) {
        t && x.trim(t) && (e.execScript || function (t) {
            e.eval.call(e, t)
        })(t)
    }, camelCase: function (e) {
        return e.replace(D, "ms-").replace(L, H)
    }, nodeName: function (e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }, each: function (e, t, n) {
        var r, i = 0, o = e.length, a = M(e);
        if (n) {
            if (a) {
                for (; o > i; i++)if (r = t.apply(e[i], n), r === !1)break
            } else for (i in e)if (r = t.apply(e[i], n), r === !1)break
        } else if (a) {
            for (; o > i; i++)if (r = t.call(e[i], i, e[i]), r === !1)break
        } else for (i in e)if (r = t.call(e[i], i, e[i]), r === !1)break;
        return e
    }, trim: b && !b.call("\ufeff\u00a0") ? function (e) {
        return null == e ? "" : b.call(e)
    } : function (e) {
        return null == e ? "" : (e + "").replace(C, "")
    }, makeArray: function (e, t) {
        var n = t || [];
        return null != e && (M(Object(e)) ? x.merge(n, "string" == typeof e ? [e] : e) : h.call(n, e)), n
    }, inArray: function (e, t, n) {
        var r;
        if (t) {
            if (m)return m.call(t, e, n);
            for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)if (n in t && t[n] === e)return n
        }
        return-1
    }, merge: function (e, n) {
        var r = n.length, i = e.length, o = 0;
        if ("number" == typeof r)for (; r > o; o++)e[i++] = n[o]; else while (n[o] !== t)e[i++] = n[o++];
        return e.length = i, e
    }, grep: function (e, t, n) {
        var r, i = [], o = 0, a = e.length;
        for (n = !!n; a > o; o++)r = !!t(e[o], o), n !== r && i.push(e[o]);
        return i
    }, map: function (e, t, n) {
        var r, i = 0, o = e.length, a = M(e), s = [];
        if (a)for (; o > i; i++)r = t(e[i], i, n), null != r && (s[s.length] = r); else for (i in e)r = t(e[i], i, n), null != r && (s[s.length] = r);
        return d.apply([], s)
    }, guid: 1, proxy: function (e, n) {
        var r, i, o;
        return"string" == typeof n && (o = e[n], n = e, e = o), x.isFunction(e) ? (r = g.call(arguments, 2), i = function () {
            return e.apply(n || this, r.concat(g.call(arguments)))
        }, i.guid = e.guid = e.guid || x.guid++, i) : t
    }, access: function (e, n, r, i, o, a, s) {
        var l = 0, u = e.length, c = null == r;
        if ("object" === x.type(r)) {
            o = !0;
            for (l in r)x.access(e, n, l, r[l], !0, a, s)
        } else if (i !== t && (o = !0, x.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
            return c.call(x(e), n)
        })), n))for (; u > l; l++)n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));
        return o ? e : c ? n.call(e) : u ? n(e[0], r) : a
    }, now: function () {
        return(new Date).getTime()
    }, swap: function (e, t, n, r) {
        var i, o, a = {};
        for (o in t)a[o] = e.style[o], e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)e.style[o] = a[o];
        return i
    }}), x.ready.promise = function (t) {
        if (!n)if (n = x.Deferred(), "complete" === a.readyState)setTimeout(x.ready); else if (a.addEventListener)a.addEventListener("DOMContentLoaded", q, !1), e.addEventListener("load", q, !1); else {
            a.attachEvent("onreadystatechange", q), e.attachEvent("onload", q);
            var r = !1;
            try {
                r = null == e.frameElement && a.documentElement
            } catch (i) {
            }
            r && r.doScroll && function o() {
                if (!x.isReady) {
                    try {
                        r.doScroll("left")
                    } catch (e) {
                        return setTimeout(o, 50)
                    }
                    _(), x.ready()
                }
            }()
        }
        return n.promise(t)
    }, x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        c["[object " + t + "]"] = t.toLowerCase()
    });
    function M(e) {
        var t = e.length, n = x.type(e);
        return x.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }

    r = x(a), function (e, t) {
        var n, r, i, o, a, s, l, u, c, p, f, d, h, g, m, y, v, b = "sizzle" + -new Date, w = e.document, T = 0, C = 0, N = st(), k = st(), E = st(), S = !1, A = function (e, t) {
            return e === t ? (S = !0, 0) : 0
        }, j = typeof t, D = 1 << 31, L = {}.hasOwnProperty, H = [], q = H.pop, _ = H.push, M = H.push, O = H.slice, F = H.indexOf || function (e) {
            var t = 0, n = this.length;
            for (; n > t; t++)if (this[t] === e)return t;
            return-1
        }, B = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", P = "[\\x20\\t\\r\\n\\f]", R = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", W = R.replace("w", "w#"), $ = "\\[" + P + "*(" + R + ")" + P + "*(?:([*^$|!~]?=)" + P + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + W + ")|)|)" + P + "*\\]", I = ":(" + R + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + $.replace(3, 8) + ")*)|.*)\\)|)", z = RegExp("^" + P + "+|((?:^|[^\\\\])(?:\\\\.)*)" + P + "+$", "g"), X = RegExp("^" + P + "*," + P + "*"), U = RegExp("^" + P + "*([>+~]|" + P + ")" + P + "*"), V = RegExp(P + "*[+~]"), Y = RegExp("=" + P + "*([^\\]'\"]*)" + P + "*\\]", "g"), J = RegExp(I), G = RegExp("^" + W + "$"), Q = {ID: RegExp("^#(" + R + ")"), CLASS: RegExp("^\\.(" + R + ")"), TAG: RegExp("^(" + R.replace("w", "w*") + ")"), ATTR: RegExp("^" + $), PSEUDO: RegExp("^" + I), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + P + "*(even|odd|(([+-]|)(\\d*)n|)" + P + "*(?:([+-]|)" + P + "*(\\d+)|))" + P + "*\\)|)", "i"), bool: RegExp("^(?:" + B + ")$", "i"), needsContext: RegExp("^" + P + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + P + "*((?:-\\d)?\\d*)" + P + "*\\)|)(?=[^-]|$)", "i")}, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, et = /^(?:input|select|textarea|button)$/i, tt = /^h\d$/i, nt = /'|\\/g, rt = RegExp("\\\\([\\da-f]{1,6}" + P + "?|(" + P + ")|.)", "ig"), it = function (e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r)
        };
        try {
            M.apply(H = O.call(w.childNodes), w.childNodes), H[w.childNodes.length].nodeType
        } catch (ot) {
            M = {apply: H.length ? function (e, t) {
                _.apply(e, O.call(t))
            } : function (e, t) {
                var n = e.length, r = 0;
                while (e[n++] = t[r++]);
                e.length = n - 1
            }}
        }
        function at(e, t, n, i) {
            var o, a, s, l, u, c, d, m, y, x;
            if ((t ? t.ownerDocument || t : w) !== f && p(t), t = t || f, n = n || [], !e || "string" != typeof e)return n;
            if (1 !== (l = t.nodeType) && 9 !== l)return[];
            if (h && !i) {
                if (o = Z.exec(e))if (s = o[1]) {
                    if (9 === l) {
                        if (a = t.getElementById(s), !a || !a.parentNode)return n;
                        if (a.id === s)return n.push(a), n
                    } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(s)) && v(t, a) && a.id === s)return n.push(a), n
                } else {
                    if (o[2])return M.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = o[3]) && r.getElementsByClassName && t.getElementsByClassName)return M.apply(n, t.getElementsByClassName(s)), n
                }
                if (r.qsa && (!g || !g.test(e))) {
                    if (m = d = b, y = t, x = 9 === l && e, 1 === l && "object" !== t.nodeName.toLowerCase()) {
                        c = mt(e), (d = t.getAttribute("id")) ? m = d.replace(nt, "\\$&") : t.setAttribute("id", m), m = "[id='" + m + "'] ", u = c.length;
                        while (u--)c[u] = m + yt(c[u]);
                        y = V.test(e) && t.parentNode || t, x = c.join(",")
                    }
                    if (x)try {
                        return M.apply(n, y.querySelectorAll(x)), n
                    } catch (T) {
                    } finally {
                        d || t.removeAttribute("id")
                    }
                }
            }
            return kt(e.replace(z, "$1"), t, n, i)
        }

        function st() {
            var e = [];

            function t(n, r) {
                return e.push(n += " ") > o.cacheLength && delete t[e.shift()], t[n] = r
            }

            return t
        }

        function lt(e) {
            return e[b] = !0, e
        }

        function ut(e) {
            var t = f.createElement("div");
            try {
                return!!e(t)
            } catch (n) {
                return!1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function ct(e, t) {
            var n = e.split("|"), r = e.length;
            while (r--)o.attrHandle[n[r]] = t
        }

        function pt(e, t) {
            var n = t && e, r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || D) - (~e.sourceIndex || D);
            if (r)return r;
            if (n)while (n = n.nextSibling)if (n === t)return-1;
            return e ? 1 : -1
        }

        function ft(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return"input" === n && t.type === e
            }
        }

        function dt(e) {
            return function (t) {
                var n = t.nodeName.toLowerCase();
                return("input" === n || "button" === n) && t.type === e
            }
        }

        function ht(e) {
            return lt(function (t) {
                return t = +t, lt(function (n, r) {
                    var i, o = e([], n.length, t), a = o.length;
                    while (a--)n[i = o[a]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }

        s = at.isXML = function (e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }, r = at.support = {}, p = at.setDocument = function (e) {
            var n = e ? e.ownerDocument || e : w, i = n.defaultView;
            return n !== f && 9 === n.nodeType && n.documentElement ? (f = n, d = n.documentElement, h = !s(n), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function () {
                p()
            }), r.attributes = ut(function (e) {
                return e.className = "i", !e.getAttribute("className")
            }), r.getElementsByTagName = ut(function (e) {
                return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length
            }), r.getElementsByClassName = ut(function (e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length
            }), r.getById = ut(function (e) {
                return d.appendChild(e).id = b, !n.getElementsByName || !n.getElementsByName(b).length
            }), r.getById ? (o.find.ID = function (e, t) {
                if (typeof t.getElementById !== j && h) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            }, o.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete o.find.ID, o.filter.ID = function (e) {
                var t = e.replace(rt, it);
                return function (e) {
                    var n = typeof e.getAttributeNode !== j && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), o.find.TAG = r.getElementsByTagName ? function (e, n) {
                return typeof n.getElementsByTagName !== j ? n.getElementsByTagName(e) : t
            } : function (e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    while (n = o[i++])1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }, o.find.CLASS = r.getElementsByClassName && function (e, n) {
                return typeof n.getElementsByClassName !== j && h ? n.getElementsByClassName(e) : t
            }, m = [], g = [], (r.qsa = K.test(n.querySelectorAll)) && (ut(function (e) {
                e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || g.push("\\[" + P + "*(?:value|" + B + ")"), e.querySelectorAll(":checked").length || g.push(":checked")
            }), ut(function (e) {
                var t = n.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && g.push("[*^$]=" + P + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
            })), (r.matchesSelector = K.test(y = d.webkitMatchesSelector || d.mozMatchesSelector || d.oMatchesSelector || d.msMatchesSelector)) && ut(function (e) {
                r.disconnectedMatch = y.call(e, "div"), y.call(e, "[s!='']:x"), m.push("!=", I)
            }), g = g.length && RegExp(g.join("|")), m = m.length && RegExp(m.join("|")), v = K.test(d.contains) || d.compareDocumentPosition ? function (e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e, r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            } : function (e, t) {
                if (t)while (t = t.parentNode)if (t === e)return!0;
                return!1
            }, A = d.compareDocumentPosition ? function (e, t) {
                if (e === t)return S = !0, 0;
                var i = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);
                return i ? 1 & i || !r.sortDetached && t.compareDocumentPosition(e) === i ? e === n || v(w, e) ? -1 : t === n || v(w, t) ? 1 : c ? F.call(c, e) - F.call(c, t) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            } : function (e, t) {
                var r, i = 0, o = e.parentNode, a = t.parentNode, s = [e], l = [t];
                if (e === t)return S = !0, 0;
                if (!o || !a)return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : c ? F.call(c, e) - F.call(c, t) : 0;
                if (o === a)return pt(e, t);
                r = e;
                while (r = r.parentNode)s.unshift(r);
                r = t;
                while (r = r.parentNode)l.unshift(r);
                while (s[i] === l[i])i++;
                return i ? pt(s[i], l[i]) : s[i] === w ? -1 : l[i] === w ? 1 : 0
            }, n) : f
        }, at.matches = function (e, t) {
            return at(e, null, null, t)
        }, at.matchesSelector = function (e, t) {
            if ((e.ownerDocument || e) !== f && p(e), t = t.replace(Y, "='$1']"), !(!r.matchesSelector || !h || m && m.test(t) || g && g.test(t)))try {
                var n = y.call(e, t);
                if (n || r.disconnectedMatch || e.document && 11 !== e.document.nodeType)return n
            } catch (i) {
            }
            return at(t, f, null, [e]).length > 0
        }, at.contains = function (e, t) {
            return(e.ownerDocument || e) !== f && p(e), v(e, t)
        }, at.attr = function (e, n) {
            (e.ownerDocument || e) !== f && p(e);
            var i = o.attrHandle[n.toLowerCase()], a = i && L.call(o.attrHandle, n.toLowerCase()) ? i(e, n, !h) : t;
            return a === t ? r.attributes || !h ? e.getAttribute(n) : (a = e.getAttributeNode(n)) && a.specified ? a.value : null : a
        }, at.error = function (e) {
            throw Error("Syntax error, unrecognized expression: " + e)
        }, at.uniqueSort = function (e) {
            var t, n = [], i = 0, o = 0;
            if (S = !r.detectDuplicates, c = !r.sortStable && e.slice(0), e.sort(A), S) {
                while (t = e[o++])t === e[o] && (i = n.push(o));
                while (i--)e.splice(n[i], 1)
            }
            return e
        }, a = at.getText = function (e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)n += a(e)
                } else if (3 === i || 4 === i)return e.nodeValue
            } else for (; t = e[r]; r++)n += a(t);
            return n
        }, o = at.selectors = {cacheLength: 50, createPseudo: lt, match: Q, attrHandle: {}, find: {}, relative: {">": {dir: "parentNode", first: !0}, " ": {dir: "parentNode"}, "+": {dir: "previousSibling", first: !0}, "~": {dir: "previousSibling"}}, preFilter: {ATTR: function (e) {
            return e[1] = e[1].replace(rt, it), e[3] = (e[4] || e[5] || "").replace(rt, it), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
        }, CHILD: function (e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || at.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && at.error(e[0]), e
        }, PSEUDO: function (e) {
            var n, r = !e[5] && e[2];
            return Q.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && J.test(r) && (n = mt(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3))
        }}, filter: {TAG: function (e) {
            var t = e.replace(rt, it).toLowerCase();
            return"*" === e ? function () {
                return!0
            } : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t
            }
        }, CLASS: function (e) {
            var t = N[e + " "];
            return t || (t = RegExp("(^|" + P + ")" + e + "(" + P + "|$)")) && N(e, function (e) {
                return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== j && e.getAttribute("class") || "")
            })
        }, ATTR: function (e, t, n) {
            return function (r) {
                var i = at.attr(r, e);
                return null == i ? "!=" === t : t ? (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t ? i === n || i.slice(0, n.length + 1) === n + "-" : !1) : !0
            }
        }, CHILD: function (e, t, n, r, i) {
            var o = "nth" !== e.slice(0, 3), a = "last" !== e.slice(-4), s = "of-type" === t;
            return 1 === r && 0 === i ? function (e) {
                return!!e.parentNode
            } : function (t, n, l) {
                var u, c, p, f, d, h, g = o !== a ? "nextSibling" : "previousSibling", m = t.parentNode, y = s && t.nodeName.toLowerCase(), v = !l && !s;
                if (m) {
                    if (o) {
                        while (g) {
                            p = t;
                            while (p = p[g])if (s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType)return!1;
                            h = g = "only" === e && !h && "nextSibling"
                        }
                        return!0
                    }
                    if (h = [a ? m.firstChild : m.lastChild], a && v) {
                        c = m[b] || (m[b] = {}), u = c[e] || [], d = u[0] === T && u[1], f = u[0] === T && u[2], p = d && m.childNodes[d];
                        while (p = ++d && p && p[g] || (f = d = 0) || h.pop())if (1 === p.nodeType && ++f && p === t) {
                            c[e] = [T, d, f];
                            break
                        }
                    } else if (v && (u = (t[b] || (t[b] = {}))[e]) && u[0] === T)f = u[1]; else while (p = ++d && p && p[g] || (f = d = 0) || h.pop())if ((s ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) && ++f && (v && ((p[b] || (p[b] = {}))[e] = [T, f]), p === t))break;
                    return f -= i, f === r || 0 === f % r && f / r >= 0
                }
            }
        }, PSEUDO: function (e, t) {
            var n, r = o.pseudos[e] || o.setFilters[e.toLowerCase()] || at.error("unsupported pseudo: " + e);
            return r[b] ? r(t) : r.length > 1 ? (n = [e, e, "", t], o.setFilters.hasOwnProperty(e.toLowerCase()) ? lt(function (e, n) {
                var i, o = r(e, t), a = o.length;
                while (a--)i = F.call(e, o[a]), e[i] = !(n[i] = o[a])
            }) : function (e) {
                return r(e, 0, n)
            }) : r
        }}, pseudos: {not: lt(function (e) {
            var t = [], n = [], r = l(e.replace(z, "$1"));
            return r[b] ? lt(function (e, t, n, i) {
                var o, a = r(e, null, i, []), s = e.length;
                while (s--)(o = a[s]) && (e[s] = !(t[s] = o))
            }) : function (e, i, o) {
                return t[0] = e, r(t, null, o, n), !n.pop()
            }
        }), has: lt(function (e) {
            return function (t) {
                return at(e, t).length > 0
            }
        }), contains: lt(function (e) {
            return function (t) {
                return(t.textContent || t.innerText || a(t)).indexOf(e) > -1
            }
        }), lang: lt(function (e) {
            return G.test(e || "") || at.error("unsupported lang: " + e), e = e.replace(rt, it).toLowerCase(), function (t) {
                var n;
                do if (n = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))return n = n.toLowerCase(), n === e || 0 === n.indexOf(e + "-"); while ((t = t.parentNode) && 1 === t.nodeType);
                return!1
            }
        }), target: function (t) {
            var n = e.location && e.location.hash;
            return n && n.slice(1) === t.id
        }, root: function (e) {
            return e === d
        }, focus: function (e) {
            return e === f.activeElement && (!f.hasFocus || f.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
        }, enabled: function (e) {
            return e.disabled === !1
        }, disabled: function (e) {
            return e.disabled === !0
        }, checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return"input" === t && !!e.checked || "option" === t && !!e.selected
        }, selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, e.selected === !0
        }, empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType)return!1;
            return!0
        }, parent: function (e) {
            return!o.pseudos.empty(e)
        }, header: function (e) {
            return tt.test(e.nodeName)
        }, input: function (e) {
            return et.test(e.nodeName)
        }, button: function (e) {
            var t = e.nodeName.toLowerCase();
            return"input" === t && "button" === e.type || "button" === t
        }, text: function (e) {
            var t;
            return"input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
        }, first: ht(function () {
            return[0]
        }), last: ht(function (e, t) {
            return[t - 1]
        }), eq: ht(function (e, t, n) {
            return[0 > n ? n + t : n]
        }), even: ht(function (e, t) {
            var n = 0;
            for (; t > n; n += 2)e.push(n);
            return e
        }), odd: ht(function (e, t) {
            var n = 1;
            for (; t > n; n += 2)e.push(n);
            return e
        }), lt: ht(function (e, t, n) {
            var r = 0 > n ? n + t : n;
            for (; --r >= 0;)e.push(r);
            return e
        }), gt: ht(function (e, t, n) {
            var r = 0 > n ? n + t : n;
            for (; t > ++r;)e.push(r);
            return e
        })}}, o.pseudos.nth = o.pseudos.eq;
        for (n in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})o.pseudos[n] = ft(n);
        for (n in{submit: !0, reset: !0})o.pseudos[n] = dt(n);
        function gt() {
        }

        gt.prototype = o.filters = o.pseudos, o.setFilters = new gt;
        function mt(e, t) {
            var n, r, i, a, s, l, u, c = k[e + " "];
            if (c)return t ? 0 : c.slice(0);
            s = e, l = [], u = o.preFilter;
            while (s) {
                (!n || (r = X.exec(s))) && (r && (s = s.slice(r[0].length) || s), l.push(i = [])), n = !1, (r = U.exec(s)) && (n = r.shift(), i.push({value: n, type: r[0].replace(z, " ")}), s = s.slice(n.length));
                for (a in o.filter)!(r = Q[a].exec(s)) || u[a] && !(r = u[a](r)) || (n = r.shift(), i.push({value: n, type: a, matches: r}), s = s.slice(n.length));
                if (!n)break
            }
            return t ? s.length : s ? at.error(e) : k(e, l).slice(0)
        }

        function yt(e) {
            var t = 0, n = e.length, r = "";
            for (; n > t; t++)r += e[t].value;
            return r
        }

        function vt(e, t, n) {
            var r = t.dir, o = n && "parentNode" === r, a = C++;
            return t.first ? function (t, n, i) {
                while (t = t[r])if (1 === t.nodeType || o)return e(t, n, i)
            } : function (t, n, s) {
                var l, u, c, p = T + " " + a;
                if (s) {
                    while (t = t[r])if ((1 === t.nodeType || o) && e(t, n, s))return!0
                } else while (t = t[r])if (1 === t.nodeType || o)if (c = t[b] || (t[b] = {}), (u = c[r]) && u[0] === p) {
                    if ((l = u[1]) === !0 || l === i)return l === !0
                } else if (u = c[r] = [p], u[1] = e(t, n, s) || i, u[1] === !0)return!0
            }
        }

        function bt(e) {
            return e.length > 1 ? function (t, n, r) {
                var i = e.length;
                while (i--)if (!e[i](t, n, r))return!1;
                return!0
            } : e[0]
        }

        function xt(e, t, n, r, i) {
            var o, a = [], s = 0, l = e.length, u = null != t;
            for (; l > s; s++)(o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));
            return a
        }

        function wt(e, t, n, r, i, o) {
            return r && !r[b] && (r = wt(r)), i && !i[b] && (i = wt(i, o)), lt(function (o, a, s, l) {
                var u, c, p, f = [], d = [], h = a.length, g = o || Nt(t || "*", s.nodeType ? [s] : s, []), m = !e || !o && t ? g : xt(g, f, e, s, l), y = n ? i || (o ? e : h || r) ? [] : a : m;
                if (n && n(m, y, s, l), r) {
                    u = xt(y, d), r(u, [], s, l), c = u.length;
                    while (c--)(p = u[c]) && (y[d[c]] = !(m[d[c]] = p))
                }
                if (o) {
                    if (i || e) {
                        if (i) {
                            u = [], c = y.length;
                            while (c--)(p = y[c]) && u.push(m[c] = p);
                            i(null, y = [], u, l)
                        }
                        c = y.length;
                        while (c--)(p = y[c]) && (u = i ? F.call(o, p) : f[c]) > -1 && (o[u] = !(a[u] = p))
                    }
                } else y = xt(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : M.apply(a, y)
            })
        }

        function Tt(e) {
            var t, n, r, i = e.length, a = o.relative[e[0].type], s = a || o.relative[" "], l = a ? 1 : 0, c = vt(function (e) {
                return e === t
            }, s, !0), p = vt(function (e) {
                return F.call(t, e) > -1
            }, s, !0), f = [function (e, n, r) {
                return!a && (r || n !== u) || ((t = n).nodeType ? c(e, n, r) : p(e, n, r))
            }];
            for (; i > l; l++)if (n = o.relative[e[l].type])f = [vt(bt(f), n)]; else {
                if (n = o.filter[e[l].type].apply(null, e[l].matches), n[b]) {
                    for (r = ++l; i > r; r++)if (o.relative[e[r].type])break;
                    return wt(l > 1 && bt(f), l > 1 && yt(e.slice(0, l - 1).concat({value: " " === e[l - 2].type ? "*" : ""})).replace(z, "$1"), n, r > l && Tt(e.slice(l, r)), i > r && Tt(e = e.slice(r)), i > r && yt(e))
                }
                f.push(n)
            }
            return bt(f)
        }

        function Ct(e, t) {
            var n = 0, r = t.length > 0, a = e.length > 0, s = function (s, l, c, p, d) {
                var h, g, m, y = [], v = 0, b = "0", x = s && [], w = null != d, C = u, N = s || a && o.find.TAG("*", d && l.parentNode || l), k = T += null == C ? 1 : Math.random() || .1;
                for (w && (u = l !== f && l, i = n); null != (h = N[b]); b++) {
                    if (a && h) {
                        g = 0;
                        while (m = e[g++])if (m(h, l, c)) {
                            p.push(h);
                            break
                        }
                        w && (T = k, i = ++n)
                    }
                    r && ((h = !m && h) && v--, s && x.push(h))
                }
                if (v += b, r && b !== v) {
                    g = 0;
                    while (m = t[g++])m(x, y, l, c);
                    if (s) {
                        if (v > 0)while (b--)x[b] || y[b] || (y[b] = q.call(p));
                        y = xt(y)
                    }
                    M.apply(p, y), w && !s && y.length > 0 && v + t.length > 1 && at.uniqueSort(p)
                }
                return w && (T = k, u = C), x
            };
            return r ? lt(s) : s
        }

        l = at.compile = function (e, t) {
            var n, r = [], i = [], o = E[e + " "];
            if (!o) {
                t || (t = mt(e)), n = t.length;
                while (n--)o = Tt(t[n]), o[b] ? r.push(o) : i.push(o);
                o = E(e, Ct(i, r))
            }
            return o
        };
        function Nt(e, t, n) {
            var r = 0, i = t.length;
            for (; i > r; r++)at(e, t[r], n);
            return n
        }

        function kt(e, t, n, i) {
            var a, s, u, c, p, f = mt(e);
            if (!i && 1 === f.length) {
                if (s = f[0] = f[0].slice(0), s.length > 2 && "ID" === (u = s[0]).type && r.getById && 9 === t.nodeType && h && o.relative[s[1].type]) {
                    if (t = (o.find.ID(u.matches[0].replace(rt, it), t) || [])[0], !t)return n;
                    e = e.slice(s.shift().value.length)
                }
                a = Q.needsContext.test(e) ? 0 : s.length;
                while (a--) {
                    if (u = s[a], o.relative[c = u.type])break;
                    if ((p = o.find[c]) && (i = p(u.matches[0].replace(rt, it), V.test(s[0].type) && t.parentNode || t))) {
                        if (s.splice(a, 1), e = i.length && yt(s), !e)return M.apply(n, i), n;
                        break
                    }
                }
            }
            return l(e, f)(i, t, !h, n, V.test(e)), n
        }

        r.sortStable = b.split("").sort(A).join("") === b, r.detectDuplicates = S, p(), r.sortDetached = ut(function (e) {
            return 1 & e.compareDocumentPosition(f.createElement("div"))
        }), ut(function (e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || ct("type|href|height|width", function (e, n, r) {
            return r ? t : e.getAttribute(n, "type" === n.toLowerCase() ? 1 : 2)
        }), r.attributes && ut(function (e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || ct("value", function (e, n, r) {
            return r || "input" !== e.nodeName.toLowerCase() ? t : e.defaultValue
        }), ut(function (e) {
            return null == e.getAttribute("disabled")
        }) || ct(B, function (e, n, r) {
            var i;
            return r ? t : (i = e.getAttributeNode(n)) && i.specified ? i.value : e[n] === !0 ? n.toLowerCase() : null
        }), x.find = at, x.expr = at.selectors, x.expr[":"] = x.expr.pseudos, x.unique = at.uniqueSort, x.text = at.getText, x.isXMLDoc = at.isXML, x.contains = at.contains
    }(e);
    var O = {};

    function F(e) {
        var t = O[e] = {};
        return x.each(e.match(T) || [], function (e, n) {
            t[n] = !0
        }), t
    }

    x.Callbacks = function (e) {
        e = "string" == typeof e ? O[e] || F(e) : x.extend({}, e);
        var n, r, i, o, a, s, l = [], u = !e.once && [], c = function (t) {
            for (r = e.memory && t, i = !0, a = s || 0, s = 0, o = l.length, n = !0; l && o > a; a++)if (l[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                r = !1;
                break
            }
            n = !1, l && (u ? u.length && c(u.shift()) : r ? l = [] : p.disable())
        }, p = {add: function () {
            if (l) {
                var t = l.length;
                (function i(t) {
                    x.each(t, function (t, n) {
                        var r = x.type(n);
                        "function" === r ? e.unique && p.has(n) || l.push(n) : n && n.length && "string" !== r && i(n)
                    })
                })(arguments), n ? o = l.length : r && (s = t, c(r))
            }
            return this
        }, remove: function () {
            return l && x.each(arguments, function (e, t) {
                var r;
                while ((r = x.inArray(t, l, r)) > -1)l.splice(r, 1), n && (o >= r && o--, a >= r && a--)
            }), this
        }, has: function (e) {
            return e ? x.inArray(e, l) > -1 : !(!l || !l.length)
        }, empty: function () {
            return l = [], o = 0, this
        }, disable: function () {
            return l = u = r = t, this
        }, disabled: function () {
            return!l
        }, lock: function () {
            return u = t, r || p.disable(), this
        }, locked: function () {
            return!u
        }, fireWith: function (e, t) {
            return!l || i && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : c(t)), this
        }, fire: function () {
            return p.fireWith(this, arguments), this
        }, fired: function () {
            return!!i
        }};
        return p
    }, x.extend({Deferred: function (e) {
        var t = [
            ["resolve", "done", x.Callbacks("once memory"), "resolved"],
            ["reject", "fail", x.Callbacks("once memory"), "rejected"],
            ["notify", "progress", x.Callbacks("memory")]
        ], n = "pending", r = {state: function () {
            return n
        }, always: function () {
            return i.done(arguments).fail(arguments), this
        }, then: function () {
            var e = arguments;
            return x.Deferred(function (n) {
                x.each(t, function (t, o) {
                    var a = o[0], s = x.isFunction(e[t]) && e[t];
                    i[o[1]](function () {
                        var e = s && s.apply(this, arguments);
                        e && x.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                    })
                }), e = null
            }).promise()
        }, promise: function (e) {
            return null != e ? x.extend(e, r) : r
        }}, i = {};
        return r.pipe = r.then, x.each(t, function (e, o) {
            var a = o[2], s = o[3];
            r[o[1]] = a.add, s && a.add(function () {
                n = s
            }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
                return i[o[0] + "With"](this === i ? r : this, arguments), this
            }, i[o[0] + "With"] = a.fireWith
        }), r.promise(i), e && e.call(i, i), i
    }, when: function (e) {
        var t = 0, n = g.call(arguments), r = n.length, i = 1 !== r || e && x.isFunction(e.promise) ? r : 0, o = 1 === i ? e : x.Deferred(), a = function (e, t, n) {
            return function (r) {
                t[e] = this, n[e] = arguments.length > 1 ? g.call(arguments) : r, n === s ? o.notifyWith(t, n) : --i || o.resolveWith(t, n)
            }
        }, s, l, u;
        if (r > 1)for (s = Array(r), l = Array(r), u = Array(r); r > t; t++)n[t] && x.isFunction(n[t].promise) ? n[t].promise().done(a(t, u, n)).fail(o.reject).progress(a(t, l, s)) : --i;
        return i || o.resolveWith(u, n), o.promise()
    }}), x.support = function (t) {
        var n, r, o, s, l, u, c, p, f, d = a.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], r = d.getElementsByTagName("a")[0], !r || !r.style || !n.length)return t;
        s = a.createElement("select"), u = s.appendChild(a.createElement("option")), o = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!o.value, t.optSelected = u.selected, t.enctype = !!a.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== a.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, s.disabled = !0, t.optDisabled = !u.disabled;
        try {
            delete d.test
        } catch (h) {
            t.deleteExpando = !1
        }
        o = a.createElement("input"), o.setAttribute("value", ""), t.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), l = a.createDocumentFragment(), l.appendChild(o), t.appendChecked = o.checked, t.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (f in{submit: !0, change: !0, focusin: !0})d.setAttribute(c = "on" + f, "t"), t[f + "Bubbles"] = c in e || d.attributes[c].expando === !1;
        d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (f in x(t))break;
        return t.ownLast = "0" !== f, x(function () {
            var n, r, o, s = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;", l = a.getElementsByTagName("body")[0];
            l && (n = a.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", l.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = d.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", p = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", t.reliableHiddenOffsets = p && 0 === o[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", x.swap(l, null != l.style.zoom ? {zoom: 1} : {}, function () {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {width: "4px"}).width, r = d.appendChild(a.createElement("div")), r.style.cssText = d.style.cssText = s, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== i && (d.innerHTML = "", d.style.cssText = s + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (l.style.zoom = 1)), l.removeChild(n), n = d = o = r = null)
        }), n = s = l = u = r = o = null, t
    }({});
    var B = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, P = /([A-Z])/g;

    function R(e, n, r, i) {
        if (x.acceptData(e)) {
            var o, a, s = x.expando, l = e.nodeType, u = l ? x.cache : e, c = l ? e[s] : e[s] && s;
            if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n)return c || (c = l ? e[s] = p.pop() || x.guid++ : s), u[c] || (u[c] = l ? {} : {toJSON: x.noop}), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = x.extend(u[c], n) : u[c].data = x.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[x.camelCase(n)] = r), "string" == typeof n ? (o = a[n], null == o && (o = a[x.camelCase(n)])) : o = a, o
        }
    }

    function W(e, t, n) {
        if (x.acceptData(e)) {
            var r, i, o = e.nodeType, a = o ? x.cache : e, s = o ? e[x.expando] : x.expando;
            if (a[s]) {
                if (t && (r = n ? a[s] : a[s].data)) {
                    x.isArray(t) ? t = t.concat(x.map(t, x.camelCase)) : t in r ? t = [t] : (t = x.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;
                    while (i--)delete r[t[i]];
                    if (n ? !I(r) : !x.isEmptyObject(r))return
                }
                (n || (delete a[s].data, I(a[s]))) && (o ? x.cleanData([e], !0) : x.support.deleteExpando || a != a.window ? delete a[s] : a[s] = null)
            }
        }
    }

    x.extend({cache: {}, noData: {applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"}, hasData: function (e) {
        return e = e.nodeType ? x.cache[e[x.expando]] : e[x.expando], !!e && !I(e)
    }, data: function (e, t, n) {
        return R(e, t, n)
    }, removeData: function (e, t) {
        return W(e, t)
    }, _data: function (e, t, n) {
        return R(e, t, n, !0)
    }, _removeData: function (e, t) {
        return W(e, t, !0)
    }, acceptData: function (e) {
        if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType)return!1;
        var t = e.nodeName && x.noData[e.nodeName.toLowerCase()];
        return!t || t !== !0 && e.getAttribute("classid") === t
    }}), x.fn.extend({data: function (e, n) {
        var r, i, o = null, a = 0, s = this[0];
        if (e === t) {
            if (this.length && (o = x.data(s), 1 === s.nodeType && !x._data(s, "parsedAttrs"))) {
                for (r = s.attributes; r.length > a; a++)i = r[a].name, 0 === i.indexOf("data-") && (i = x.camelCase(i.slice(5)), $(s, i, o[i]));
                x._data(s, "parsedAttrs", !0)
            }
            return o
        }
        return"object" == typeof e ? this.each(function () {
            x.data(this, e)
        }) : arguments.length > 1 ? this.each(function () {
            x.data(this, e, n)
        }) : s ? $(s, e, x.data(s, e)) : null
    }, removeData: function (e) {
        return this.each(function () {
            x.removeData(this, e)
        })
    }});
    function $(e, n, r) {
        if (r === t && 1 === e.nodeType) {
            var i = "data-" + n.replace(P, "-$1").toLowerCase();
            if (r = e.getAttribute(i), "string" == typeof r) {
                try {
                    r = "true" === r ? !0 : "false" === r ? !1 : "null" === r ? null : +r + "" === r ? +r : B.test(r) ? x.parseJSON(r) : r
                } catch (o) {
                }
                x.data(e, n, r)
            } else r = t
        }
        return r
    }

    function I(e) {
        var t;
        for (t in e)if (("data" !== t || !x.isEmptyObject(e[t])) && "toJSON" !== t)return!1;
        return!0
    }

    x.extend({queue: function (e, n, r) {
        var i;
        return e ? (n = (n || "fx") + "queue", i = x._data(e, n), r && (!i || x.isArray(r) ? i = x._data(e, n, x.makeArray(r)) : i.push(r)), i || []) : t
    }, dequeue: function (e, t) {
        t = t || "fx";
        var n = x.queue(e, t), r = n.length, i = n.shift(), o = x._queueHooks(e, t), a = function () {
            x.dequeue(e, t)
        };
        "inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, a, o)), !r && o && o.empty.fire()
    }, _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return x._data(e, n) || x._data(e, n, {empty: x.Callbacks("once memory").add(function () {
            x._removeData(e, t + "queue"), x._removeData(e, n)
        })})
    }}), x.fn.extend({queue: function (e, n) {
        var r = 2;
        return"string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? x.queue(this[0], e) : n === t ? this : this.each(function () {
            var t = x.queue(this, e, n);
            x._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && x.dequeue(this, e)
        })
    }, dequeue: function (e) {
        return this.each(function () {
            x.dequeue(this, e)
        })
    }, delay: function (e, t) {
        return e = x.fx ? x.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
            var r = setTimeout(t, e);
            n.stop = function () {
                clearTimeout(r)
            }
        })
    }, clearQueue: function (e) {
        return this.queue(e || "fx", [])
    }, promise: function (e, n) {
        var r, i = 1, o = x.Deferred(), a = this, s = this.length, l = function () {
            --i || o.resolveWith(a, [a])
        };
        "string" != typeof e && (n = e, e = t), e = e || "fx";
        while (s--)r = x._data(a[s], e + "queueHooks"), r && r.empty && (i++, r.empty.add(l));
        return l(), o.promise(n)
    }});
    var z, X, U = /[\t\r\n\f]/g, V = /\r/g, Y = /^(?:input|select|textarea|button|object)$/i, J = /^(?:a|area)$/i, G = /^(?:checked|selected)$/i, Q = x.support.getSetAttribute, K = x.support.input;
    x.fn.extend({attr: function (e, t) {
        return x.access(this, x.attr, e, t, arguments.length > 1)
    }, removeAttr: function (e) {
        return this.each(function () {
            x.removeAttr(this, e)
        })
    }, prop: function (e, t) {
        return x.access(this, x.prop, e, t, arguments.length > 1)
    }, removeProp: function (e) {
        return e = x.propFix[e] || e, this.each(function () {
            try {
                this[e] = t, delete this[e]
            } catch (n) {
            }
        })
    }, addClass: function (e) {
        var t, n, r, i, o, a = 0, s = this.length, l = "string" == typeof e && e;
        if (x.isFunction(e))return this.each(function (t) {
            x(this).addClass(e.call(this, t, this.className))
        });
        if (l)for (t = (e || "").match(T) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : " ")) {
            o = 0;
            while (i = t[o++])0 > r.indexOf(" " + i + " ") && (r += i + " ");
            n.className = x.trim(r)
        }
        return this
    }, removeClass: function (e) {
        var t, n, r, i, o, a = 0, s = this.length, l = 0 === arguments.length || "string" == typeof e && e;
        if (x.isFunction(e))return this.each(function (t) {
            x(this).removeClass(e.call(this, t, this.className))
        });
        if (l)for (t = (e || "").match(T) || []; s > a; a++)if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(U, " ") : "")) {
            o = 0;
            while (i = t[o++])while (r.indexOf(" " + i + " ") >= 0)r = r.replace(" " + i + " ", " ");
            n.className = e ? x.trim(r) : ""
        }
        return this
    }, toggleClass: function (e, t) {
        var n = typeof e;
        return"boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : x.isFunction(e) ? this.each(function (n) {
            x(this).toggleClass(e.call(this, n, this.className, t), t)
        }) : this.each(function () {
            if ("string" === n) {
                var t, r = 0, o = x(this), a = e.match(T) || [];
                while (t = a[r++])o.hasClass(t) ? o.removeClass(t) : o.addClass(t)
            } else(n === i || "boolean" === n) && (this.className && x._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : x._data(this, "__className__") || "")
        })
    }, hasClass: function (e) {
        var t = " " + e + " ", n = 0, r = this.length;
        for (; r > n; n++)if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(U, " ").indexOf(t) >= 0)return!0;
        return!1
    }, val: function (e) {
        var n, r, i, o = this[0];
        {
            if (arguments.length)return i = x.isFunction(e), this.each(function (n) {
                var o;
                1 === this.nodeType && (o = i ? e.call(this, n, x(this).val()) : e, null == o ? o = "" : "number" == typeof o ? o += "" : x.isArray(o) && (o = x.map(o, function (e) {
                    return null == e ? "" : e + ""
                })), r = x.valHooks[this.type] || x.valHooks[this.nodeName.toLowerCase()], r && "set"in r && r.set(this, o, "value") !== t || (this.value = o))
            });
            if (o)return r = x.valHooks[o.type] || x.valHooks[o.nodeName.toLowerCase()], r && "get"in r && (n = r.get(o, "value")) !== t ? n : (n = o.value, "string" == typeof n ? n.replace(V, "") : null == n ? "" : n)
        }
    }}), x.extend({valHooks: {option: {get: function (e) {
        var t = x.find.attr(e, "value");
        return null != t ? t : e.text
    }}, select: {get: function (e) {
        var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0;
        for (; s > l; l++)if (n = r[l], !(!n.selected && l !== i || (x.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && x.nodeName(n.parentNode, "optgroup"))) {
            if (t = x(n).val(), o)return t;
            a.push(t)
        }
        return a
    }, set: function (e, t) {
        var n, r, i = e.options, o = x.makeArray(t), a = i.length;
        while (a--)r = i[a], (r.selected = x.inArray(x(r).val(), o) >= 0) && (n = !0);
        return n || (e.selectedIndex = -1), o
    }}}, attr: function (e, n, r) {
        var o, a, s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)return typeof e.getAttribute === i ? x.prop(e, n, r) : (1 === s && x.isXMLDoc(e) || (n = n.toLowerCase(), o = x.attrHooks[n] || (x.expr.match.bool.test(n) ? X : z)), r === t ? o && "get"in o && null !== (a = o.get(e, n)) ? a : (a = x.find.attr(e, n), null == a ? t : a) : null !== r ? o && "set"in o && (a = o.set(e, r, n)) !== t ? a : (e.setAttribute(n, r + ""), r) : (x.removeAttr(e, n), t))
    }, removeAttr: function (e, t) {
        var n, r, i = 0, o = t && t.match(T);
        if (o && 1 === e.nodeType)while (n = o[i++])r = x.propFix[n] || n, x.expr.match.bool.test(n) ? K && Q || !G.test(n) ? e[r] = !1 : e[x.camelCase("default-" + n)] = e[r] = !1 : x.attr(e, n, ""), e.removeAttribute(Q ? n : r)
    }, attrHooks: {type: {set: function (e, t) {
        if (!x.support.radioValue && "radio" === t && x.nodeName(e, "input")) {
            var n = e.value;
            return e.setAttribute("type", t), n && (e.value = n), t
        }
    }}}, propFix: {"for": "htmlFor", "class": "className"}, prop: function (e, n, r) {
        var i, o, a, s = e.nodeType;
        if (e && 3 !== s && 8 !== s && 2 !== s)return a = 1 !== s || !x.isXMLDoc(e), a && (n = x.propFix[n] || n, o = x.propHooks[n]), r !== t ? o && "set"in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get"in o && null !== (i = o.get(e, n)) ? i : e[n]
    }, propHooks: {tabIndex: {get: function (e) {
        var t = x.find.attr(e, "tabindex");
        return t ? parseInt(t, 10) : Y.test(e.nodeName) || J.test(e.nodeName) && e.href ? 0 : -1
    }}}}), X = {set: function (e, t, n) {
        return t === !1 ? x.removeAttr(e, n) : K && Q || !G.test(n) ? e.setAttribute(!Q && x.propFix[n] || n, n) : e[x.camelCase("default-" + n)] = e[n] = !0, n
    }}, x.each(x.expr.match.bool.source.match(/\w+/g), function (e, n) {
        var r = x.expr.attrHandle[n] || x.find.attr;
        x.expr.attrHandle[n] = K && Q || !G.test(n) ? function (e, n, i) {
            var o = x.expr.attrHandle[n], a = i ? t : (x.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;
            return x.expr.attrHandle[n] = o, a
        } : function (e, n, r) {
            return r ? t : e[x.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }), K && Q || (x.attrHooks.value = {set: function (e, n, r) {
        return x.nodeName(e, "input") ? (e.defaultValue = n, t) : z && z.set(e, n, r)
    }}), Q || (z = {set: function (e, n, r) {
        var i = e.getAttributeNode(r);
        return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t
    }}, x.expr.attrHandle.id = x.expr.attrHandle.name = x.expr.attrHandle.coords = function (e, n, r) {
        var i;
        return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null
    }, x.valHooks.button = {get: function (e, n) {
        var r = e.getAttributeNode(n);
        return r && r.specified ? r.value : t
    }, set: z.set}, x.attrHooks.contenteditable = {set: function (e, t, n) {
        z.set(e, "" === t ? !1 : t, n)
    }}, x.each(["width", "height"], function (e, n) {
        x.attrHooks[n] = {set: function (e, r) {
            return"" === r ? (e.setAttribute(n, "auto"), r) : t
        }}
    })), x.support.hrefNormalized || x.each(["href", "src"], function (e, t) {
        x.propHooks[t] = {get: function (e) {
            return e.getAttribute(t, 4)
        }}
    }), x.support.style || (x.attrHooks.style = {get: function (e) {
        return e.style.cssText || t
    }, set: function (e, t) {
        return e.style.cssText = t + ""
    }}), x.support.optSelected || (x.propHooks.selected = {get: function (e) {
        var t = e.parentNode;
        return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null
    }}), x.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        x.propFix[this.toLowerCase()] = this
    }), x.support.enctype || (x.propFix.enctype = "encoding"), x.each(["radio", "checkbox"], function () {
        x.valHooks[this] = {set: function (e, n) {
            return x.isArray(n) ? e.checked = x.inArray(x(e).val(), n) >= 0 : t
        }}, x.support.checkOn || (x.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    });
    var Z = /^(?:input|select|textarea)$/i, et = /^key/, tt = /^(?:mouse|contextmenu)|click/, nt = /^(?:focusinfocus|focusoutblur)$/, rt = /^([^.]*)(?:\.(.+)|)$/;

    function it() {
        return!0
    }

    function ot() {
        return!1
    }

    function at() {
        try {
            return a.activeElement
        } catch (e) {
        }
    }

    x.event = {global: {}, add: function (e, n, r, o, a) {
        var s, l, u, c, p, f, d, h, g, m, y, v = x._data(e);
        if (v) {
            r.handler && (c = r, r = c.handler, a = c.selector), r.guid || (r.guid = x.guid++), (l = v.events) || (l = v.events = {}), (f = v.handle) || (f = v.handle = function (e) {
                return typeof x === i || e && x.event.triggered === e.type ? t : x.event.dispatch.apply(f.elem, arguments)
            }, f.elem = e), n = (n || "").match(T) || [""], u = n.length;
            while (u--)s = rt.exec(n[u]) || [], g = y = s[1], m = (s[2] || "").split(".").sort(), g && (p = x.event.special[g] || {}, g = (a ? p.delegateType : p.bindType) || g, p = x.event.special[g] || {}, d = x.extend({type: g, origType: y, data: o, handler: r, guid: r.guid, selector: a, needsContext: a && x.expr.match.needsContext.test(a), namespace: m.join(".")}, c), (h = l[g]) || (h = l[g] = [], h.delegateCount = 0, p.setup && p.setup.call(e, o, m, f) !== !1 || (e.addEventListener ? e.addEventListener(g, f, !1) : e.attachEvent && e.attachEvent("on" + g, f))), p.add && (p.add.call(e, d), d.handler.guid || (d.handler.guid = r.guid)), a ? h.splice(h.delegateCount++, 0, d) : h.push(d), x.event.global[g] = !0);
            e = null
        }
    }, remove: function (e, t, n, r, i) {
        var o, a, s, l, u, c, p, f, d, h, g, m = x.hasData(e) && x._data(e);
        if (m && (c = m.events)) {
            t = (t || "").match(T) || [""], u = t.length;
            while (u--)if (s = rt.exec(t[u]) || [], d = g = s[1], h = (s[2] || "").split(".").sort(), d) {
                p = x.event.special[d] || {}, d = (r ? p.delegateType : p.bindType) || d, f = c[d] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length;
                while (o--)a = f[o], !i && g !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, p.remove && p.remove.call(e, a));
                l && !f.length && (p.teardown && p.teardown.call(e, h, m.handle) !== !1 || x.removeEvent(e, d, m.handle), delete c[d])
            } else for (d in c)x.event.remove(e, d + t[u], n, r, !0);
            x.isEmptyObject(c) && (delete m.handle, x._removeData(e, "events"))
        }
    }, trigger: function (n, r, i, o) {
        var s, l, u, c, p, f, d, h = [i || a], g = v.call(n, "type") ? n.type : n, m = v.call(n, "namespace") ? n.namespace.split(".") : [];
        if (u = f = i = i || a, 3 !== i.nodeType && 8 !== i.nodeType && !nt.test(g + x.event.triggered) && (g.indexOf(".") >= 0 && (m = g.split("."), g = m.shift(), m.sort()), l = 0 > g.indexOf(":") && "on" + g, n = n[x.expando] ? n : new x.Event(g, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : x.makeArray(r, [n]), p = x.event.special[g] || {}, o || !p.trigger || p.trigger.apply(i, r) !== !1)) {
            if (!o && !p.noBubble && !x.isWindow(i)) {
                for (c = p.delegateType || g, nt.test(c + g) || (u = u.parentNode); u; u = u.parentNode)h.push(u), f = u;
                f === (i.ownerDocument || a) && h.push(f.defaultView || f.parentWindow || e)
            }
            d = 0;
            while ((u = h[d++]) && !n.isPropagationStopped())n.type = d > 1 ? c : p.bindType || g, s = (x._data(u, "events") || {})[n.type] && x._data(u, "handle"), s && s.apply(u, r), s = l && u[l], s && x.acceptData(u) && s.apply && s.apply(u, r) === !1 && n.preventDefault();
            if (n.type = g, !o && !n.isDefaultPrevented() && (!p._default || p._default.apply(h.pop(), r) === !1) && x.acceptData(i) && l && i[g] && !x.isWindow(i)) {
                f = i[l], f && (i[l] = null), x.event.triggered = g;
                try {
                    i[g]()
                } catch (y) {
                }
                x.event.triggered = t, f && (i[l] = f)
            }
            return n.result
        }
    }, dispatch: function (e) {
        e = x.event.fix(e);
        var n, r, i, o, a, s = [], l = g.call(arguments), u = (x._data(this, "events") || {})[e.type] || [], c = x.event.special[e.type] || {};
        if (l[0] = e, e.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, e) !== !1) {
            s = x.event.handlers.call(this, e, u), n = 0;
            while ((o = s[n++]) && !e.isPropagationStopped()) {
                e.currentTarget = o.elem, a = 0;
                while ((i = o.handlers[a++]) && !e.isImmediatePropagationStopped())(!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, r = ((x.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l), r !== t && (e.result = r) === !1 && (e.preventDefault(), e.stopPropagation()))
            }
            return c.postDispatch && c.postDispatch.call(this, e), e.result
        }
    }, handlers: function (e, n) {
        var r, i, o, a, s = [], l = n.delegateCount, u = e.target;
        if (l && u.nodeType && (!e.button || "click" !== e.type))for (; u != this; u = u.parentNode || this)if (1 === u.nodeType && (u.disabled !== !0 || "click" !== e.type)) {
            for (o = [], a = 0; l > a; a++)i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? x(r, this).index(u) >= 0 : x.find(r, this, null, [u]).length), o[r] && o.push(i);
            o.length && s.push({elem: u, handlers: o})
        }
        return n.length > l && s.push({elem: this, handlers: n.slice(l)}), s
    }, fix: function (e) {
        if (e[x.expando])return e;
        var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
        s || (this.fixHooks[i] = s = tt.test(i) ? this.mouseHooks : et.test(i) ? this.keyHooks : {}), r = s.props ? this.props.concat(s.props) : this.props, e = new x.Event(o), t = r.length;
        while (t--)n = r[t], e[n] = o[n];
        return e.target || (e.target = o.srcElement || a), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, s.filter ? s.filter(e, o) : e
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: {props: "char charCode key keyCode".split(" "), filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
    }}, mouseHooks: {props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, n) {
        var r, i, o, s = n.button, l = n.fromElement;
        return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || a, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && l && (e.relatedTarget = l === e.target ? n.toElement : l), e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
    }}, special: {load: {noBubble: !0}, focus: {trigger: function () {
        if (this !== at() && this.focus)try {
            return this.focus(), !1
        } catch (e) {
        }
    }, delegateType: "focusin"}, blur: {trigger: function () {
        return this === at() && this.blur ? (this.blur(), !1) : t
    }, delegateType: "focusout"}, click: {trigger: function () {
        return x.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t
    }, _default: function (e) {
        return x.nodeName(e.target, "a")
    }}, beforeunload: {postDispatch: function (e) {
        e.result !== t && (e.originalEvent.returnValue = e.result)
    }}}, simulate: function (e, t, n, r) {
        var i = x.extend(new x.Event, n, {type: e, isSimulated: !0, originalEvent: {}});
        r ? x.event.trigger(i, null, t) : x.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault()
    }}, x.removeEvent = a.removeEventListener ? function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    } : function (e, t, n) {
        var r = "on" + t;
        e.detachEvent && (typeof e[r] === i && (e[r] = null), e.detachEvent(r, n))
    }, x.Event = function (e, n) {
        return this instanceof x.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? it : ot) : this.type = e, n && x.extend(this, n), this.timeStamp = e && e.timeStamp || x.now(), this[x.expando] = !0, t) : new x.Event(e, n)
    }, x.Event.prototype = {isDefaultPrevented: ot, isPropagationStopped: ot, isImmediatePropagationStopped: ot, preventDefault: function () {
        var e = this.originalEvent;
        this.isDefaultPrevented = it, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
    }, stopPropagation: function () {
        var e = this.originalEvent;
        this.isPropagationStopped = it, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
    }, stopImmediatePropagation: function () {
        this.isImmediatePropagationStopped = it, this.stopPropagation()
    }}, x.each({mouseenter: "mouseover", mouseleave: "mouseout"}, function (e, t) {
        x.event.special[e] = {delegateType: t, bindType: t, handle: function (e) {
            var n, r = this, i = e.relatedTarget, o = e.handleObj;
            return(!i || i !== r && !x.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n
        }}
    }), x.support.submitBubbles || (x.event.special.submit = {setup: function () {
        return x.nodeName(this, "form") ? !1 : (x.event.add(this, "click._submit keypress._submit", function (e) {
            var n = e.target, r = x.nodeName(n, "input") || x.nodeName(n, "button") ? n.form : t;
            r && !x._data(r, "submitBubbles") && (x.event.add(r, "submit._submit", function (e) {
                e._submit_bubble = !0
            }), x._data(r, "submitBubbles", !0))
        }), t)
    }, postDispatch: function (e) {
        e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && x.event.simulate("submit", this.parentNode, e, !0))
    }, teardown: function () {
        return x.nodeName(this, "form") ? !1 : (x.event.remove(this, "._submit"), t)
    }}), x.support.changeBubbles || (x.event.special.change = {setup: function () {
        return Z.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (x.event.add(this, "propertychange._change", function (e) {
            "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
        }), x.event.add(this, "click._change", function (e) {
            this._just_changed && !e.isTrigger && (this._just_changed = !1), x.event.simulate("change", this, e, !0)
        })), !1) : (x.event.add(this, "beforeactivate._change", function (e) {
            var t = e.target;
            Z.test(t.nodeName) && !x._data(t, "changeBubbles") && (x.event.add(t, "change._change", function (e) {
                !this.parentNode || e.isSimulated || e.isTrigger || x.event.simulate("change", this.parentNode, e, !0)
            }), x._data(t, "changeBubbles", !0))
        }), t)
    }, handle: function (e) {
        var n = e.target;
        return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t
    }, teardown: function () {
        return x.event.remove(this, "._change"), !Z.test(this.nodeName)
    }}), x.support.focusinBubbles || x.each({focus: "focusin", blur: "focusout"}, function (e, t) {
        var n = 0, r = function (e) {
            x.event.simulate(t, e.target, x.event.fix(e), !0)
        };
        x.event.special[t] = {setup: function () {
            0 === n++ && a.addEventListener(e, r, !0)
        }, teardown: function () {
            0 === --n && a.removeEventListener(e, r, !0)
        }}
    }), x.fn.extend({on: function (e, n, r, i, o) {
        var a, s;
        if ("object" == typeof e) {
            "string" != typeof n && (r = r || n, n = t);
            for (a in e)this.on(a, n, r, e[a], o);
            return this
        }
        if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), i === !1)i = ot; else if (!i)return this;
        return 1 === o && (s = i, i = function (e) {
            return x().off(e), s.apply(this, arguments)
        }, i.guid = s.guid || (s.guid = x.guid++)), this.each(function () {
            x.event.add(this, e, i, r, n)
        })
    }, one: function (e, t, n, r) {
        return this.on(e, t, n, r, 1)
    }, off: function (e, n, r) {
        var i, o;
        if (e && e.preventDefault && e.handleObj)return i = e.handleObj, x(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
        if ("object" == typeof e) {
            for (o in e)this.off(o, n, e[o]);
            return this
        }
        return(n === !1 || "function" == typeof n) && (r = n, n = t), r === !1 && (r = ot), this.each(function () {
            x.event.remove(this, e, r, n)
        })
    }, trigger: function (e, t) {
        return this.each(function () {
            x.event.trigger(e, t, this)
        })
    }, triggerHandler: function (e, n) {
        var r = this[0];
        return r ? x.event.trigger(e, n, r, !0) : t
    }});
    var st = /^.[^:#\[\.,]*$/, lt = /^(?:parents|prev(?:Until|All))/, ut = x.expr.match.needsContext, ct = {children: !0, contents: !0, next: !0, prev: !0};
    x.fn.extend({find: function (e) {
        var t, n = [], r = this, i = r.length;
        if ("string" != typeof e)return this.pushStack(x(e).filter(function () {
            for (t = 0; i > t; t++)if (x.contains(r[t], this))return!0
        }));
        for (t = 0; i > t; t++)x.find(e, r[t], n);
        return n = this.pushStack(i > 1 ? x.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n
    }, has: function (e) {
        var t, n = x(e, this), r = n.length;
        return this.filter(function () {
            for (t = 0; r > t; t++)if (x.contains(this, n[t]))return!0
        })
    }, not: function (e) {
        return this.pushStack(ft(this, e || [], !0))
    }, filter: function (e) {
        return this.pushStack(ft(this, e || [], !1))
    }, is: function (e) {
        return!!ft(this, "string" == typeof e && ut.test(e) ? x(e) : e || [], !1).length
    }, closest: function (e, t) {
        var n, r = 0, i = this.length, o = [], a = ut.test(e) || "string" != typeof e ? x(e, t || this.context) : 0;
        for (; i > r; r++)for (n = this[r]; n && n !== t; n = n.parentNode)if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && x.find.matchesSelector(n, e))) {
            n = o.push(n);
            break
        }
        return this.pushStack(o.length > 1 ? x.unique(o) : o)
    }, index: function (e) {
        return e ? "string" == typeof e ? x.inArray(this[0], x(e)) : x.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    }, add: function (e, t) {
        var n = "string" == typeof e ? x(e, t) : x.makeArray(e && e.nodeType ? [e] : e), r = x.merge(this.get(), n);
        return this.pushStack(x.unique(r))
    }, addBack: function (e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }});
    function pt(e, t) {
        do e = e[t]; while (e && 1 !== e.nodeType);
        return e
    }

    x.each({parent: function (e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
    }, parents: function (e) {
        return x.dir(e, "parentNode")
    }, parentsUntil: function (e, t, n) {
        return x.dir(e, "parentNode", n)
    }, next: function (e) {
        return pt(e, "nextSibling")
    }, prev: function (e) {
        return pt(e, "previousSibling")
    }, nextAll: function (e) {
        return x.dir(e, "nextSibling")
    }, prevAll: function (e) {
        return x.dir(e, "previousSibling")
    }, nextUntil: function (e, t, n) {
        return x.dir(e, "nextSibling", n)
    }, prevUntil: function (e, t, n) {
        return x.dir(e, "previousSibling", n)
    }, siblings: function (e) {
        return x.sibling((e.parentNode || {}).firstChild, e)
    }, children: function (e) {
        return x.sibling(e.firstChild)
    }, contents: function (e) {
        return x.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : x.merge([], e.childNodes)
    }}, function (e, t) {
        x.fn[e] = function (n, r) {
            var i = x.map(this, t, n);
            return"Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = x.filter(r, i)), this.length > 1 && (ct[e] || (i = x.unique(i)), lt.test(e) && (i = i.reverse())), this.pushStack(i)
        }
    }), x.extend({filter: function (e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? x.find.matchesSelector(r, e) ? [r] : [] : x.find.matches(e, x.grep(t, function (e) {
            return 1 === e.nodeType
        }))
    }, dir: function (e, n, r) {
        var i = [], o = e[n];
        while (o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !x(o).is(r)))1 === o.nodeType && i.push(o), o = o[n];
        return i
    }, sibling: function (e, t) {
        var n = [];
        for (; e; e = e.nextSibling)1 === e.nodeType && e !== t && n.push(e);
        return n
    }});
    function ft(e, t, n) {
        if (x.isFunction(t))return x.grep(e, function (e, r) {
            return!!t.call(e, r, e) !== n
        });
        if (t.nodeType)return x.grep(e, function (e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if (st.test(t))return x.filter(t, e, n);
            t = x.filter(t, e)
        }
        return x.grep(e, function (e) {
            return x.inArray(e, t) >= 0 !== n
        })
    }

    function dt(e) {
        var t = ht.split("|"), n = e.createDocumentFragment();
        if (n.createElement)while (t.length)n.createElement(t.pop());
        return n
    }

    var ht = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", gt = / jQuery\d+="(?:null|\d+)"/g, mt = RegExp("<(?:" + ht + ")[\\s/>]", "i"), yt = /^\s+/, vt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, bt = /<([\w:]+)/, xt = /<tbody/i, wt = /<|&#?\w+;/, Tt = /<(?:script|style|link)/i, Ct = /^(?:checkbox|radio)$/i, Nt = /checked\s*(?:[^=]|=\s*.checked.)/i, kt = /^$|\/(?:java|ecma)script/i, Et = /^true\/(.*)/, St = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, At = {option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: x.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]}, jt = dt(a), Dt = jt.appendChild(a.createElement("div"));
    At.optgroup = At.option, At.tbody = At.tfoot = At.colgroup = At.caption = At.thead, At.th = At.td, x.fn.extend({text: function (e) {
        return x.access(this, function (e) {
            return e === t ? x.text(this) : this.empty().append((this[0] && this[0].ownerDocument || a).createTextNode(e))
        }, null, e, arguments.length)
    }, append: function () {
        return this.domManip(arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = Lt(this, e);
                t.appendChild(e)
            }
        })
    }, prepend: function () {
        return this.domManip(arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = Lt(this, e);
                t.insertBefore(e, t.firstChild)
            }
        })
    }, before: function () {
        return this.domManip(arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
        })
    }, after: function () {
        return this.domManip(arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
    }, remove: function (e, t) {
        var n, r = e ? x.filter(e, this) : this, i = 0;
        for (; null != (n = r[i]); i++)t || 1 !== n.nodeType || x.cleanData(Ft(n)), n.parentNode && (t && x.contains(n.ownerDocument, n) && _t(Ft(n, "script")), n.parentNode.removeChild(n));
        return this
    }, empty: function () {
        var e, t = 0;
        for (; null != (e = this[t]); t++) {
            1 === e.nodeType && x.cleanData(Ft(e, !1));
            while (e.firstChild)e.removeChild(e.firstChild);
            e.options && x.nodeName(e, "select") && (e.options.length = 0)
        }
        return this
    }, clone: function (e, t) {
        return e = null == e ? !1 : e, t = null == t ? e : t, this.map(function () {
            return x.clone(this, e, t)
        })
    }, html: function (e) {
        return x.access(this, function (e) {
            var n = this[0] || {}, r = 0, i = this.length;
            if (e === t)return 1 === n.nodeType ? n.innerHTML.replace(gt, "") : t;
            if (!("string" != typeof e || Tt.test(e) || !x.support.htmlSerialize && mt.test(e) || !x.support.leadingWhitespace && yt.test(e) || At[(bt.exec(e) || ["", ""])[1].toLowerCase()])) {
                e = e.replace(vt, "<$1></$2>");
                try {
                    for (; i > r; r++)n = this[r] || {}, 1 === n.nodeType && (x.cleanData(Ft(n, !1)), n.innerHTML = e);
                    n = 0
                } catch (o) {
                }
            }
            n && this.empty().append(e)
        }, null, e, arguments.length)
    }, replaceWith: function () {
        var e = x.map(this, function (e) {
            return[e.nextSibling, e.parentNode]
        }), t = 0;
        return this.domManip(arguments, function (n) {
            var r = e[t++], i = e[t++];
            i && (r && r.parentNode !== i && (r = this.nextSibling), x(this).remove(), i.insertBefore(n, r))
        }, !0), t ? this : this.remove()
    }, detach: function (e) {
        return this.remove(e, !0)
    }, domManip: function (e, t, n) {
        e = d.apply([], e);
        var r, i, o, a, s, l, u = 0, c = this.length, p = this, f = c - 1, h = e[0], g = x.isFunction(h);
        if (g || !(1 >= c || "string" != typeof h || x.support.checkClone) && Nt.test(h))return this.each(function (r) {
            var i = p.eq(r);
            g && (e[0] = h.call(this, r, i.html())), i.domManip(e, t, n)
        });
        if (c && (l = x.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
            for (a = x.map(Ft(l, "script"), Ht), o = a.length; c > u; u++)i = l, u !== f && (i = x.clone(i, !0, !0), o && x.merge(a, Ft(i, "script"))), t.call(this[u], i, u);
            if (o)for (s = a[a.length - 1].ownerDocument, x.map(a, qt), u = 0; o > u; u++)i = a[u], kt.test(i.type || "") && !x._data(i, "globalEval") && x.contains(s, i) && (i.src ? x._evalUrl(i.src) : x.globalEval((i.text || i.textContent || i.innerHTML || "").replace(St, "")));
            l = r = null
        }
        return this
    }});
    function Lt(e, t) {
        return x.nodeName(e, "table") && x.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }

    function Ht(e) {
        return e.type = (null !== x.find.attr(e, "type")) + "/" + e.type, e
    }

    function qt(e) {
        var t = Et.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"), e
    }

    function _t(e, t) {
        var n, r = 0;
        for (; null != (n = e[r]); r++)x._data(n, "globalEval", !t || x._data(t[r], "globalEval"))
    }

    function Mt(e, t) {
        if (1 === t.nodeType && x.hasData(e)) {
            var n, r, i, o = x._data(e), a = x._data(t, o), s = o.events;
            if (s) {
                delete a.handle, a.events = {};
                for (n in s)for (r = 0, i = s[n].length; i > r; r++)x.event.add(t, n, s[n][r])
            }
            a.data && (a.data = x.extend({}, a.data))
        }
    }

    function Ot(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !x.support.noCloneEvent && t[x.expando]) {
                i = x._data(t);
                for (r in i.events)x.removeEvent(t, r, i.handle);
                t.removeAttribute(x.expando)
            }
            "script" === n && t.text !== e.text ? (Ht(t).text = e.text, qt(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), x.support.html5Clone && e.innerHTML && !x.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && Ct.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }

    x.each({appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith"}, function (e, t) {
        x.fn[e] = function (e) {
            var n, r = 0, i = [], o = x(e), a = o.length - 1;
            for (; a >= r; r++)n = r === a ? this : this.clone(!0), x(o[r])[t](n), h.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    function Ft(e, n) {
        var r, o, a = 0, s = typeof e.getElementsByTagName !== i ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== i ? e.querySelectorAll(n || "*") : t;
        if (!s)for (s = [], r = e.childNodes || e; null != (o = r[a]); a++)!n || x.nodeName(o, n) ? s.push(o) : x.merge(s, Ft(o, n));
        return n === t || n && x.nodeName(e, n) ? x.merge([e], s) : s
    }

    function Bt(e) {
        Ct.test(e.type) && (e.defaultChecked = e.checked)
    }

    x.extend({clone: function (e, t, n) {
        var r, i, o, a, s, l = x.contains(e.ownerDocument, e);
        if (x.support.html5Clone || x.isXMLDoc(e) || !mt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (Dt.innerHTML = e.outerHTML, Dt.removeChild(o = Dt.firstChild)), !(x.support.noCloneEvent && x.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || x.isXMLDoc(e)))for (r = Ft(o), s = Ft(e), a = 0; null != (i = s[a]); ++a)r[a] && Ot(i, r[a]);
        if (t)if (n)for (s = s || Ft(e), r = r || Ft(o), a = 0; null != (i = s[a]); a++)Mt(i, r[a]); else Mt(e, o);
        return r = Ft(o, "script"), r.length > 0 && _t(r, !l && Ft(e, "script")), r = s = i = null, o
    }, buildFragment: function (e, t, n, r) {
        var i, o, a, s, l, u, c, p = e.length, f = dt(t), d = [], h = 0;
        for (; p > h; h++)if (o = e[h], o || 0 === o)if ("object" === x.type(o))x.merge(d, o.nodeType ? [o] : o); else if (wt.test(o)) {
            s = s || f.appendChild(t.createElement("div")), l = (bt.exec(o) || ["", ""])[1].toLowerCase(), c = At[l] || At._default, s.innerHTML = c[1] + o.replace(vt, "<$1></$2>") + c[2], i = c[0];
            while (i--)s = s.lastChild;
            if (!x.support.leadingWhitespace && yt.test(o) && d.push(t.createTextNode(yt.exec(o)[0])), !x.support.tbody) {
                o = "table" !== l || xt.test(o) ? "<table>" !== c[1] || xt.test(o) ? 0 : s : s.firstChild, i = o && o.childNodes.length;
                while (i--)x.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u)
            }
            x.merge(d, s.childNodes), s.textContent = "";
            while (s.firstChild)s.removeChild(s.firstChild);
            s = f.lastChild
        } else d.push(t.createTextNode(o));
        s && f.removeChild(s), x.support.appendChecked || x.grep(Ft(d, "input"), Bt), h = 0;
        while (o = d[h++])if ((!r || -1 === x.inArray(o, r)) && (a = x.contains(o.ownerDocument, o), s = Ft(f.appendChild(o), "script"), a && _t(s), n)) {
            i = 0;
            while (o = s[i++])kt.test(o.type || "") && n.push(o)
        }
        return s = null, f
    }, cleanData: function (e, t) {
        var n, r, o, a, s = 0, l = x.expando, u = x.cache, c = x.support.deleteExpando, f = x.event.special;
        for (; null != (n = e[s]); s++)if ((t || x.acceptData(n)) && (o = n[l], a = o && u[o])) {
            if (a.events)for (r in a.events)f[r] ? x.event.remove(n, r) : x.removeEvent(n, r, a.handle);
            u[o] && (delete u[o], c ? delete n[l] : typeof n.removeAttribute !== i ? n.removeAttribute(l) : n[l] = null, p.push(o))
        }
    }, _evalUrl: function (e) {
        return x.ajax({url: e, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }}), x.fn.extend({wrapAll: function (e) {
        if (x.isFunction(e))return this.each(function (t) {
            x(this).wrapAll(e.call(this, t))
        });
        if (this[0]) {
            var t = x(e, this[0].ownerDocument).eq(0).clone(!0);
            this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
                var e = this;
                while (e.firstChild && 1 === e.firstChild.nodeType)e = e.firstChild;
                return e
            }).append(this)
        }
        return this
    }, wrapInner: function (e) {
        return x.isFunction(e) ? this.each(function (t) {
            x(this).wrapInner(e.call(this, t))
        }) : this.each(function () {
            var t = x(this), n = t.contents();
            n.length ? n.wrapAll(e) : t.append(e)
        })
    }, wrap: function (e) {
        var t = x.isFunction(e);
        return this.each(function (n) {
            x(this).wrapAll(t ? e.call(this, n) : e)
        })
    }, unwrap: function () {
        return this.parent().each(function () {
            x.nodeName(this, "body") || x(this).replaceWith(this.childNodes)
        }).end()
    }});
    var Pt, Rt, Wt, $t = /alpha\([^)]*\)/i, It = /opacity\s*=\s*([^)]*)/, zt = /^(top|right|bottom|left)$/, Xt = /^(none|table(?!-c[ea]).+)/, Ut = /^margin/, Vt = RegExp("^(" + w + ")(.*)$", "i"), Yt = RegExp("^(" + w + ")(?!px)[a-z%]+$", "i"), Jt = RegExp("^([+-])=(" + w + ")", "i"), Gt = {BODY: "block"}, Qt = {position: "absolute", visibility: "hidden", display: "block"}, Kt = {letterSpacing: 0, fontWeight: 400}, Zt = ["Top", "Right", "Bottom", "Left"], en = ["Webkit", "O", "Moz", "ms"];

    function tn(e, t) {
        if (t in e)return t;
        var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = en.length;
        while (i--)if (t = en[i] + n, t in e)return t;
        return r
    }

    function nn(e, t) {
        return e = t || e, "none" === x.css(e, "display") || !x.contains(e.ownerDocument, e)
    }

    function rn(e, t) {
        var n, r, i, o = [], a = 0, s = e.length;
        for (; s > a; a++)r = e[a], r.style && (o[a] = x._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && nn(r) && (o[a] = x._data(r, "olddisplay", ln(r.nodeName)))) : o[a] || (i = nn(r), (n && "none" !== n || !i) && x._data(r, "olddisplay", i ? n : x.css(r, "display"))));
        for (a = 0; s > a; a++)r = e[a], r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        return e
    }

    x.fn.extend({css: function (e, n) {
        return x.access(this, function (e, n, r) {
            var i, o, a = {}, s = 0;
            if (x.isArray(n)) {
                for (o = Rt(e), i = n.length; i > s; s++)a[n[s]] = x.css(e, n[s], !1, o);
                return a
            }
            return r !== t ? x.style(e, n, r) : x.css(e, n)
        }, e, n, arguments.length > 1)
    }, show: function () {
        return rn(this, !0)
    }, hide: function () {
        return rn(this)
    }, toggle: function (e) {
        return"boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
            nn(this) ? x(this).show() : x(this).hide()
        })
    }}), x.extend({cssHooks: {opacity: {get: function (e, t) {
        if (t) {
            var n = Wt(e, "opacity");
            return"" === n ? "1" : n
        }
    }}}, cssNumber: {columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0}, cssProps: {"float": x.support.cssFloat ? "cssFloat" : "styleFloat"}, style: function (e, n, r, i) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var o, a, s, l = x.camelCase(n), u = e.style;
            if (n = x.cssProps[l] || (x.cssProps[l] = tn(u, l)), s = x.cssHooks[n] || x.cssHooks[l], r === t)return s && "get"in s && (o = s.get(e, !1, i)) !== t ? o : u[n];
            if (a = typeof r, "string" === a && (o = Jt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(x.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || x.cssNumber[l] || (r += "px"), x.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set"in s && (r = s.set(e, r, i)) === t)))try {
                u[n] = r
            } catch (c) {
            }
        }
    }, css: function (e, n, r, i) {
        var o, a, s, l = x.camelCase(n);
        return n = x.cssProps[l] || (x.cssProps[l] = tn(e.style, l)), s = x.cssHooks[n] || x.cssHooks[l], s && "get"in s && (a = s.get(e, !0, r)), a === t && (a = Wt(e, n, i)), "normal" === a && n in Kt && (a = Kt[n]), "" === r || r ? (o = parseFloat(a), r === !0 || x.isNumeric(o) ? o || 0 : a) : a
    }}), e.getComputedStyle ? (Rt = function (t) {
        return e.getComputedStyle(t, null)
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s.getPropertyValue(n) || s[n] : t, u = e.style;
        return s && ("" !== l || x.contains(e.ownerDocument, e) || (l = x.style(e, n)), Yt.test(l) && Ut.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l
    }) : a.documentElement.currentStyle && (Rt = function (e) {
        return e.currentStyle
    }, Wt = function (e, n, r) {
        var i, o, a, s = r || Rt(e), l = s ? s[n] : t, u = e.style;
        return null == l && u && u[n] && (l = u[n]), Yt.test(l) && !zt.test(n) && (i = u.left, o = e.runtimeStyle, a = o && o.left, a && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l
    });
    function on(e, t, n) {
        var r = Vt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }

    function an(e, t, n, r, i) {
        var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0;
        for (; 4 > o; o += 2)"margin" === n && (a += x.css(e, n + Zt[o], !0, i)), r ? ("content" === n && (a -= x.css(e, "padding" + Zt[o], !0, i)), "margin" !== n && (a -= x.css(e, "border" + Zt[o] + "Width", !0, i))) : (a += x.css(e, "padding" + Zt[o], !0, i), "padding" !== n && (a += x.css(e, "border" + Zt[o] + "Width", !0, i)));
        return a
    }

    function sn(e, t, n) {
        var r = !0, i = "width" === t ? e.offsetWidth : e.offsetHeight, o = Rt(e), a = x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = Wt(e, t, o), (0 > i || null == i) && (i = e.style[t]), Yt.test(i))return i;
            r = a && (x.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0
        }
        return i + an(e, t, n || (a ? "border" : "content"), r, o) + "px"
    }

    function ln(e) {
        var t = a, n = Gt[e];
        return n || (n = un(e, t), "none" !== n && n || (Pt = (Pt || x("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (Pt[0].contentWindow || Pt[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = un(e, t), Pt.detach()), Gt[e] = n), n
    }

    function un(e, t) {
        var n = x(t.createElement(e)).appendTo(t.body), r = x.css(n[0], "display");
        return n.remove(), r
    }

    x.each(["height", "width"], function (e, n) {
        x.cssHooks[n] = {get: function (e, r, i) {
            return r ? 0 === e.offsetWidth && Xt.test(x.css(e, "display")) ? x.swap(e, Qt, function () {
                return sn(e, n, i)
            }) : sn(e, n, i) : t
        }, set: function (e, t, r) {
            var i = r && Rt(e);
            return on(e, t, r ? an(e, n, r, x.support.boxSizing && "border-box" === x.css(e, "boxSizing", !1, i), i) : 0)
        }}
    }), x.support.opacity || (x.cssHooks.opacity = {get: function (e, t) {
        return It.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
    }, set: function (e, t) {
        var n = e.style, r = e.currentStyle, i = x.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "", o = r && r.filter || n.filter || "";
        n.zoom = 1, (t >= 1 || "" === t) && "" === x.trim(o.replace($t, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = $t.test(o) ? o.replace($t, i) : o + " " + i)
    }}), x(function () {
        x.support.reliableMarginRight || (x.cssHooks.marginRight = {get: function (e, n) {
            return n ? x.swap(e, {display: "inline-block"}, Wt, [e, "marginRight"]) : t
        }}), !x.support.pixelPosition && x.fn.position && x.each(["top", "left"], function (e, n) {
            x.cssHooks[n] = {get: function (e, r) {
                return r ? (r = Wt(e, n), Yt.test(r) ? x(e).position()[n] + "px" : r) : t
            }}
        })
    }), x.expr && x.expr.filters && (x.expr.filters.hidden = function (e) {
        return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !x.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || x.css(e, "display"))
    }, x.expr.filters.visible = function (e) {
        return!x.expr.filters.hidden(e)
    }), x.each({margin: "", padding: "", border: "Width"}, function (e, t) {
        x.cssHooks[e + t] = {expand: function (n) {
            var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n];
            for (; 4 > r; r++)i[e + Zt[r] + t] = o[r] || o[r - 2] || o[0];
            return i
        }}, Ut.test(e) || (x.cssHooks[e + t].set = on)
    });
    var cn = /%20/g, pn = /\[\]$/, fn = /\r?\n/g, dn = /^(?:submit|button|image|reset|file)$/i, hn = /^(?:input|select|textarea|keygen)/i;
    x.fn.extend({serialize: function () {
        return x.param(this.serializeArray())
    }, serializeArray: function () {
        return this.map(function () {
            var e = x.prop(this, "elements");
            return e ? x.makeArray(e) : this
        }).filter(function () {
            var e = this.type;
            return this.name && !x(this).is(":disabled") && hn.test(this.nodeName) && !dn.test(e) && (this.checked || !Ct.test(e))
        }).map(function (e, t) {
            var n = x(this).val();
            return null == n ? null : x.isArray(n) ? x.map(n, function (e) {
                return{name: t.name, value: e.replace(fn, "\r\n")}
            }) : {name: t.name, value: n.replace(fn, "\r\n")}
        }).get()
    }}), x.param = function (e, n) {
        var r, i = [], o = function (e, t) {
            t = x.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = x.ajaxSettings && x.ajaxSettings.traditional), x.isArray(e) || e.jquery && !x.isPlainObject(e))x.each(e, function () {
            o(this.name, this.value)
        }); else for (r in e)gn(r, e[r], n, o);
        return i.join("&").replace(cn, "+")
    };
    function gn(e, t, n, r) {
        var i;
        if (x.isArray(t))x.each(t, function (t, i) {
            n || pn.test(e) ? r(e, i) : gn(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r)
        }); else if (n || "object" !== x.type(t))r(e, t); else for (i in t)gn(e + "[" + i + "]", t[i], n, r)
    }

    x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        x.fn[t] = function (e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }), x.fn.extend({hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    }, bind: function (e, t, n) {
        return this.on(e, null, t, n)
    }, unbind: function (e, t) {
        return this.off(e, null, t)
    }, delegate: function (e, t, n, r) {
        return this.on(t, e, n, r)
    }, undelegate: function (e, t, n) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
    }});
    var mn, yn, vn = x.now(), bn = /\?/, xn = /#.*$/, wn = /([?&])_=[^&]*/, Tn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Cn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Nn = /^(?:GET|HEAD)$/, kn = /^\/\//, En = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Sn = x.fn.load, An = {}, jn = {}, Dn = "*/".concat("*");
    try {
        yn = o.href
    } catch (Ln) {
        yn = a.createElement("a"), yn.href = "", yn = yn.href
    }
    mn = En.exec(yn.toLowerCase()) || [];
    function Hn(e) {
        return function (t, n) {
            "string" != typeof t && (n = t, t = "*");
            var r, i = 0, o = t.toLowerCase().match(T) || [];
            if (x.isFunction(n))while (r = o[i++])"+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }

    function qn(e, n, r, i) {
        var o = {}, a = e === jn;

        function s(l) {
            var u;
            return o[l] = !0, x.each(e[l] || [], function (e, l) {
                var c = l(n, r, i);
                return"string" != typeof c || a || o[c] ? a ? !(u = c) : t : (n.dataTypes.unshift(c), s(c), !1)
            }), u
        }

        return s(n.dataTypes[0]) || !o["*"] && s("*")
    }

    function _n(e, n) {
        var r, i, o = x.ajaxSettings.flatOptions || {};
        for (i in n)n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);
        return r && x.extend(!0, e, r), e
    }

    x.fn.load = function (e, n, r) {
        if ("string" != typeof e && Sn)return Sn.apply(this, arguments);
        var i, o, a, s = this, l = e.indexOf(" ");
        return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), x.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && x.ajax({url: e, type: a, dataType: "html", data: n}).done(function (e) {
            o = arguments, s.html(i ? x("<div>").append(x.parseHTML(e)).find(i) : e)
        }).complete(r && function (e, t) {
            s.each(r, o || [e.responseText, t, e])
        }), this
    }, x.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        x.fn[t] = function (e) {
            return this.on(t, e)
        }
    }), x.extend({active: 0, lastModified: {}, etag: {}, ajaxSettings: {url: yn, type: "GET", isLocal: Cn.test(mn[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: {"*": Dn, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript"}, contents: {xml: /xml/, html: /html/, json: /json/}, responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"}, converters: {"* text": String, "text html": !0, "text json": x.parseJSON, "text xml": x.parseXML}, flatOptions: {url: !0, context: !0}}, ajaxSetup: function (e, t) {
        return t ? _n(_n(e, x.ajaxSettings), t) : _n(x.ajaxSettings, e)
    }, ajaxPrefilter: Hn(An), ajaxTransport: Hn(jn), ajax: function (e, n) {
        "object" == typeof e && (n = e, e = t), n = n || {};
        var r, i, o, a, s, l, u, c, p = x.ajaxSetup({}, n), f = p.context || p, d = p.context && (f.nodeType || f.jquery) ? x(f) : x.event, h = x.Deferred(), g = x.Callbacks("once memory"), m = p.statusCode || {}, y = {}, v = {}, b = 0, w = "canceled", C = {readyState: 0, getResponseHeader: function (e) {
            var t;
            if (2 === b) {
                if (!c) {
                    c = {};
                    while (t = Tn.exec(a))c[t[1].toLowerCase()] = t[2]
                }
                t = c[e.toLowerCase()]
            }
            return null == t ? null : t
        }, getAllResponseHeaders: function () {
            return 2 === b ? a : null
        }, setRequestHeader: function (e, t) {
            var n = e.toLowerCase();
            return b || (e = v[n] = v[n] || e, y[e] = t), this
        }, overrideMimeType: function (e) {
            return b || (p.mimeType = e), this
        }, statusCode: function (e) {
            var t;
            if (e)if (2 > b)for (t in e)m[t] = [m[t], e[t]]; else C.always(e[C.status]);
            return this
        }, abort: function (e) {
            var t = e || w;
            return u && u.abort(t), k(0, t), this
        }};
        if (h.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, p.url = ((e || p.url || yn) + "").replace(xn, "").replace(kn, mn[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = x.trim(p.dataType || "*").toLowerCase().match(T) || [""], null == p.crossDomain && (r = En.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === mn[1] && r[2] === mn[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (mn[3] || ("http:" === mn[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = x.param(p.data, p.traditional)), qn(An, p, n, C), 2 === b)return C;
        l = p.global, l && 0 === x.active++ && x.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Nn.test(p.type), o = p.url, p.hasContent || (p.data && (o = p.url += (bn.test(o) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = wn.test(o) ? o.replace(wn, "$1_=" + vn++) : o + (bn.test(o) ? "&" : "?") + "_=" + vn++)), p.ifModified && (x.lastModified[o] && C.setRequestHeader("If-Modified-Since", x.lastModified[o]), x.etag[o] && C.setRequestHeader("If-None-Match", x.etag[o])), (p.data && p.hasContent && p.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", p.contentType), C.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Dn + "; q=0.01" : "") : p.accepts["*"]);
        for (i in p.headers)C.setRequestHeader(i, p.headers[i]);
        if (p.beforeSend && (p.beforeSend.call(f, C, p) === !1 || 2 === b))return C.abort();
        w = "abort";
        for (i in{success: 1, error: 1, complete: 1})C[i](p[i]);
        if (u = qn(jn, p, n, C)) {
            C.readyState = 1, l && d.trigger("ajaxSend", [C, p]), p.async && p.timeout > 0 && (s = setTimeout(function () {
                C.abort("timeout")
            }, p.timeout));
            try {
                b = 1, u.send(y, k)
            } catch (N) {
                if (!(2 > b))throw N;
                k(-1, N)
            }
        } else k(-1, "No Transport");
        function k(e, n, r, i) {
            var c, y, v, w, T, N = n;
            2 !== b && (b = 2, s && clearTimeout(s), u = t, a = i || "", C.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, r && (w = Mn(p, C, r)), w = On(p, w, C, c), c ? (p.ifModified && (T = C.getResponseHeader("Last-Modified"), T && (x.lastModified[o] = T), T = C.getResponseHeader("etag"), T && (x.etag[o] = T)), 204 === e || "HEAD" === p.type ? N = "nocontent" : 304 === e ? N = "notmodified" : (N = w.state, y = w.data, v = w.error, c = !v)) : (v = N, (e || !N) && (N = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || N) + "", c ? h.resolveWith(f, [y, N, C]) : h.rejectWith(f, [C, N, v]), C.statusCode(m), m = t, l && d.trigger(c ? "ajaxSuccess" : "ajaxError", [C, p, c ? y : v]), g.fireWith(f, [C, N]), l && (d.trigger("ajaxComplete", [C, p]), --x.active || x.event.trigger("ajaxStop")))
        }

        return C
    }, getJSON: function (e, t, n) {
        return x.get(e, t, n, "json")
    }, getScript: function (e, n) {
        return x.get(e, t, n, "script")
    }}), x.each(["get", "post"], function (e, n) {
        x[n] = function (e, r, i, o) {
            return x.isFunction(r) && (o = o || i, i = r, r = t), x.ajax({url: e, type: n, dataType: o, data: r, success: i})
        }
    });
    function Mn(e, n, r) {
        var i, o, a, s, l = e.contents, u = e.dataTypes;
        while ("*" === u[0])u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o)for (s in l)if (l[s] && l[s].test(o)) {
            u.unshift(s);
            break
        }
        if (u[0]in r)a = u[0]; else {
            for (s in r) {
                if (!u[0] || e.converters[s + " " + u[0]]) {
                    a = s;
                    break
                }
                i || (i = s)
            }
            a = a || i
        }
        return a ? (a !== u[0] && u.unshift(a), r[a]) : t
    }

    function On(e, t, n, r) {
        var i, o, a, s, l, u = {}, c = e.dataTypes.slice();
        if (c[1])for (a in e.converters)u[a.toLowerCase()] = e.converters[a];
        o = c.shift();
        while (o)if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift())if ("*" === o)o = l; else if ("*" !== l && l !== o) {
            if (a = u[l + " " + o] || u["* " + o], !a)for (i in u)if (s = i.split(" "), s[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                a === !0 ? a = u[i] : u[i] !== !0 && (o = s[0], c.unshift(s[1]));
                break
            }
            if (a !== !0)if (a && e["throws"])t = a(t); else try {
                t = a(t)
            } catch (p) {
                return{state: "parsererror", error: a ? p : "No conversion from " + l + " to " + o}
            }
        }
        return{state: "success", data: t}
    }

    x.ajaxSetup({accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"}, contents: {script: /(?:java|ecma)script/}, converters: {"text script": function (e) {
        return x.globalEval(e), e
    }}}), x.ajaxPrefilter("script", function (e) {
        e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1)
    }), x.ajaxTransport("script", function (e) {
        if (e.crossDomain) {
            var n, r = a.head || x("head")[0] || a.documentElement;
            return{send: function (t, i) {
                n = a.createElement("script"), n.async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
                    (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"))
                }, r.insertBefore(n, r.firstChild)
            }, abort: function () {
                n && n.onload(t, !0)
            }}
        }
    });
    var Fn = [], Bn = /(=)\?(?=&|$)|\?\?/;
    x.ajaxSetup({jsonp: "callback", jsonpCallback: function () {
        var e = Fn.pop() || x.expando + "_" + vn++;
        return this[e] = !0, e
    }}), x.ajaxPrefilter("json jsonp", function (n, r, i) {
        var o, a, s, l = n.jsonp !== !1 && (Bn.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Bn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = x.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Bn, "$1" + o) : n.jsonp !== !1 && (n.url += (bn.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
            return s || x.error(o + " was not called"), s[0]
        }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
            s = arguments
        }, i.always(function () {
            e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Fn.push(o)), s && x.isFunction(a) && a(s[0]), s = a = t
        }), "script") : t
    });
    var Pn, Rn, Wn = 0, $n = e.ActiveXObject && function () {
        var e;
        for (e in Pn)Pn[e](t, !0)
    };

    function In() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {
        }
    }

    function zn() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {
        }
    }

    x.ajaxSettings.xhr = e.ActiveXObject ? function () {
        return!this.isLocal && In() || zn()
    } : In, Rn = x.ajaxSettings.xhr(), x.support.cors = !!Rn && "withCredentials"in Rn, Rn = x.support.ajax = !!Rn, Rn && x.ajaxTransport(function (n) {
        if (!n.crossDomain || x.support.cors) {
            var r;
            return{send: function (i, o) {
                var a, s, l = n.xhr();
                if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields)for (s in n.xhrFields)l[s] = n.xhrFields[s];
                n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");
                try {
                    for (s in i)l.setRequestHeader(s, i[s])
                } catch (u) {
                }
                l.send(n.hasContent && n.data || null), r = function (e, i) {
                    var s, u, c, p;
                    try {
                        if (r && (i || 4 === l.readyState))if (r = t, a && (l.onreadystatechange = x.noop, $n && delete Pn[a]), i)4 !== l.readyState && l.abort(); else {
                            p = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (p.text = l.responseText);
                            try {
                                c = l.statusText
                            } catch (f) {
                                c = ""
                            }
                            s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = p.text ? 200 : 404
                        }
                    } catch (d) {
                        i || o(-1, d)
                    }
                    p && o(s, c, p, u)
                }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Wn, $n && (Pn || (Pn = {}, x(e).unload($n)), Pn[a] = r), l.onreadystatechange = r) : r()
            }, abort: function () {
                r && r(t, !0)
            }}
        }
    });
    var Xn, Un, Vn = /^(?:toggle|show|hide)$/, Yn = RegExp("^(?:([+-])=|)(" + w + ")([a-z%]*)$", "i"), Jn = /queueHooks$/, Gn = [nr], Qn = {"*": [function (e, t) {
        var n = this.createTween(e, t), r = n.cur(), i = Yn.exec(t), o = i && i[3] || (x.cssNumber[e] ? "" : "px"), a = (x.cssNumber[e] || "px" !== o && +r) && Yn.exec(x.css(n.elem, e)), s = 1, l = 20;
        if (a && a[3] !== o) {
            o = o || a[3], i = i || [], a = +r || 1;
            do s = s || ".5", a /= s, x.style(n.elem, e, a + o); while (s !== (s = n.cur() / r) && 1 !== s && --l)
        }
        return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n
    }]};

    function Kn() {
        return setTimeout(function () {
            Xn = t
        }), Xn = x.now()
    }

    function Zn(e, t, n) {
        var r, i = (Qn[t] || []).concat(Qn["*"]), o = 0, a = i.length;
        for (; a > o; o++)if (r = i[o].call(n, t, e))return r
    }

    function er(e, t, n) {
        var r, i, o = 0, a = Gn.length, s = x.Deferred().always(function () {
            delete l.elem
        }), l = function () {
            if (i)return!1;
            var t = Xn || Kn(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, a = 0, l = u.tweens.length;
            for (; l > a; a++)u.tweens[a].run(o);
            return s.notifyWith(e, [u, o, n]), 1 > o && l ? n : (s.resolveWith(e, [u]), !1)
        }, u = s.promise({elem: e, props: x.extend({}, t), opts: x.extend(!0, {specialEasing: {}}, n), originalProperties: t, originalOptions: n, startTime: Xn || Kn(), duration: n.duration, tweens: [], createTween: function (t, n) {
            var r = x.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
            return u.tweens.push(r), r
        }, stop: function (t) {
            var n = 0, r = t ? u.tweens.length : 0;
            if (i)return this;
            for (i = !0; r > n; n++)u.tweens[n].run(1);
            return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this
        }}), c = u.props;
        for (tr(c, u.opts.specialEasing); a > o; o++)if (r = Gn[o].call(u, e, c, u.opts))return r;
        return x.map(c, Zn, u), x.isFunction(u.opts.start) && u.opts.start.call(e, u), x.fx.timer(x.extend(l, {elem: e, anim: u, queue: u.opts.queue})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function tr(e, t) {
        var n, r, i, o, a;
        for (n in e)if (r = x.camelCase(n), i = t[r], o = e[n], x.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), a = x.cssHooks[r], a && "expand"in a) {
            o = a.expand(o), delete e[r];
            for (n in o)n in e || (e[n] = o[n], t[n] = i)
        } else t[r] = i
    }

    x.Animation = x.extend(er, {tweener: function (e, t) {
        x.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
        var n, r = 0, i = e.length;
        for (; i > r; r++)n = e[r], Qn[n] = Qn[n] || [], Qn[n].unshift(t)
    }, prefilter: function (e, t) {
        t ? Gn.unshift(e) : Gn.push(e)
    }});
    function nr(e, t, n) {
        var r, i, o, a, s, l, u = this, c = {}, p = e.style, f = e.nodeType && nn(e), d = x._data(e, "fxshow");
        n.queue || (s = x._queueHooks(e, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
            s.unqueued || l()
        }), s.unqueued++, u.always(function () {
            u.always(function () {
                s.unqueued--, x.queue(e, "fx").length || s.empty.fire()
            })
        })), 1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === x.css(e, "display") && "none" === x.css(e, "float") && (x.support.inlineBlockNeedsLayout && "inline" !== ln(e.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", x.support.shrinkWrapBlocks || u.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        }));
        for (r in t)if (i = t[r], Vn.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show"))continue;
            c[r] = d && d[r] || x.style(e, r)
        }
        if (!x.isEmptyObject(c)) {
            d ? "hidden"in d && (f = d.hidden) : d = x._data(e, "fxshow", {}), o && (d.hidden = !f), f ? x(e).show() : u.done(function () {
                x(e).hide()
            }), u.done(function () {
                var t;
                x._removeData(e, "fxshow");
                for (t in c)x.style(e, t, c[t])
            });
            for (r in c)a = Zn(f ? d[r] : 0, r, u), r in d || (d[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0))
        }
    }

    function rr(e, t, n, r, i) {
        return new rr.prototype.init(e, t, n, r, i)
    }

    x.Tween = rr, rr.prototype = {constructor: rr, init: function (e, t, n, r, i, o) {
        this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (x.cssNumber[n] ? "" : "px")
    }, cur: function () {
        var e = rr.propHooks[this.prop];
        return e && e.get ? e.get(this) : rr.propHooks._default.get(this)
    }, run: function (e) {
        var t, n = rr.propHooks[this.prop];
        return this.pos = t = this.options.duration ? x.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : rr.propHooks._default.set(this), this
    }}, rr.prototype.init.prototype = rr.prototype, rr.propHooks = {_default: {get: function (e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = x.css(e.elem, e.prop, ""), t && "auto" !== t ? t : 0) : e.elem[e.prop]
    }, set: function (e) {
        x.fx.step[e.prop] ? x.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[x.cssProps[e.prop]] || x.cssHooks[e.prop]) ? x.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
    }}}, rr.propHooks.scrollTop = rr.propHooks.scrollLeft = {set: function (e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }}, x.each(["toggle", "show", "hide"], function (e, t) {
        var n = x.fn[t];
        x.fn[t] = function (e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(ir(t, !0), e, r, i)
        }
    }), x.fn.extend({fadeTo: function (e, t, n, r) {
        return this.filter(nn).css("opacity", 0).show().end().animate({opacity: t}, e, n, r)
    }, animate: function (e, t, n, r) {
        var i = x.isEmptyObject(e), o = x.speed(t, n, r), a = function () {
            var t = er(this, x.extend({}, e), o);
            (i || x._data(this, "finish")) && t.stop(!0)
        };
        return a.finish = a, i || o.queue === !1 ? this.each(a) : this.queue(o.queue, a)
    }, stop: function (e, n, r) {
        var i = function (e) {
            var t = e.stop;
            delete e.stop, t(r)
        };
        return"string" != typeof e && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function () {
            var t = !0, n = null != e && e + "queueHooks", o = x.timers, a = x._data(this);
            if (n)a[n] && a[n].stop && i(a[n]); else for (n in a)a[n] && a[n].stop && Jn.test(n) && i(a[n]);
            for (n = o.length; n--;)o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));
            (t || !r) && x.dequeue(this, e)
        })
    }, finish: function (e) {
        return e !== !1 && (e = e || "fx"), this.each(function () {
            var t, n = x._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = x.timers, a = r ? r.length : 0;
            for (n.finish = !0, x.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;)o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
            for (t = 0; a > t; t++)r[t] && r[t].finish && r[t].finish.call(this);
            delete n.finish
        })
    }});
    function ir(e, t) {
        var n, r = {height: e}, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)n = Zt[i], r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    x.each({slideDown: ir("show"), slideUp: ir("hide"), slideToggle: ir("toggle"), fadeIn: {opacity: "show"}, fadeOut: {opacity: "hide"}, fadeToggle: {opacity: "toggle"}}, function (e, t) {
        x.fn[e] = function (e, n, r) {
            return this.animate(t, e, n, r)
        }
    }), x.speed = function (e, t, n) {
        var r = e && "object" == typeof e ? x.extend({}, e) : {complete: n || !n && t || x.isFunction(e) && e, duration: e, easing: n && t || t && !x.isFunction(t) && t};
        return r.duration = x.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in x.fx.speeds ? x.fx.speeds[r.duration] : x.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
            x.isFunction(r.old) && r.old.call(this), r.queue && x.dequeue(this, r.queue)
        }, r
    }, x.easing = {linear: function (e) {
        return e
    }, swing: function (e) {
        return.5 - Math.cos(e * Math.PI) / 2
    }}, x.timers = [], x.fx = rr.prototype.init, x.fx.tick = function () {
        var e, n = x.timers, r = 0;
        for (Xn = x.now(); n.length > r; r++)e = n[r], e() || n[r] !== e || n.splice(r--, 1);
        n.length || x.fx.stop(), Xn = t
    }, x.fx.timer = function (e) {
        e() && x.timers.push(e) && x.fx.start()
    }, x.fx.interval = 13, x.fx.start = function () {
        Un || (Un = setInterval(x.fx.tick, x.fx.interval))
    }, x.fx.stop = function () {
        clearInterval(Un), Un = null
    }, x.fx.speeds = {slow: 600, fast: 200, _default: 400}, x.fx.step = {}, x.expr && x.expr.filters && (x.expr.filters.animated = function (e) {
        return x.grep(x.timers, function (t) {
            return e === t.elem
        }).length
    }), x.fn.offset = function (e) {
        if (arguments.length)return e === t ? this : this.each(function (t) {
            x.offset.setOffset(this, e, t)
        });
        var n, r, o = {top: 0, left: 0}, a = this[0], s = a && a.ownerDocument;
        if (s)return n = s.documentElement, x.contains(n, a) ? (typeof a.getBoundingClientRect !== i && (o = a.getBoundingClientRect()), r = or(s), {top: o.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: o.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)}) : o
    }, x.offset = {setOffset: function (e, t, n) {
        var r = x.css(e, "position");
        "static" === r && (e.style.position = "relative");
        var i = x(e), o = i.offset(), a = x.css(e, "top"), s = x.css(e, "left"), l = ("absolute" === r || "fixed" === r) && x.inArray("auto", [a, s]) > -1, u = {}, c = {}, p, f;
        l ? (c = i.position(), p = c.top, f = c.left) : (p = parseFloat(a) || 0, f = parseFloat(s) || 0), x.isFunction(t) && (t = t.call(e, n, o)), null != t.top && (u.top = t.top - o.top + p), null != t.left && (u.left = t.left - o.left + f), "using"in t ? t.using.call(e, u) : i.css(u)
    }}, x.fn.extend({position: function () {
        if (this[0]) {
            var e, t, n = {top: 0, left: 0}, r = this[0];
            return"fixed" === x.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), x.nodeName(e[0], "html") || (n = e.offset()), n.top += x.css(e[0], "borderTopWidth", !0), n.left += x.css(e[0], "borderLeftWidth", !0)), {top: t.top - n.top - x.css(r, "marginTop", !0), left: t.left - n.left - x.css(r, "marginLeft", !0)}
        }
    }, offsetParent: function () {
        return this.map(function () {
            var e = this.offsetParent || s;
            while (e && !x.nodeName(e, "html") && "static" === x.css(e, "position"))e = e.offsetParent;
            return e || s
        })
    }}), x.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (e, n) {
        var r = /Y/.test(n);
        x.fn[e] = function (i) {
            return x.access(this, function (e, i, o) {
                var a = or(e);
                return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? x(a).scrollLeft() : o, r ? o : x(a).scrollTop()) : e[i] = o, t)
            }, e, i, arguments.length, null)
        }
    });
    function or(e) {
        return x.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }

    x.each({Height: "height", Width: "width"}, function (e, n) {
        x.each({padding: "inner" + e, content: n, "": "outer" + e}, function (r, i) {
            x.fn[i] = function (i, o) {
                var a = arguments.length && (r || "boolean" != typeof i), s = r || (i === !0 || o === !0 ? "margin" : "border");
                return x.access(this, function (n, r, i) {
                    var o;
                    return x.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? x.css(n, r, s) : x.style(n, r, i, s)
                }, n, a ? i : t, a, null)
            }
        })
    }), x.fn.size = function () {
        return this.length
    }, x.fn.andSelf = x.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = x : (e.jQuery = e.$ = x, "function" == typeof define && define.amd && define("jquery", [], function () {
        return x
    }))
})(window);
(function (S, U, s) {
    'use strict';
    function v(b) {
        return function () {
            var a = arguments[0], c, a = "[" + (b ? b + ":" : "") + a + "] http://errors.angularjs.org/1.2.20/" + (b ? b + "/" : "") + a;
            for (c = 1; c < arguments.length; c++)a = a + (1 == c ? "?" : "&") + "p" + (c - 1) + "=" + encodeURIComponent("function" == typeof arguments[c] ? arguments[c].toString().replace(/ \{[\s\S]*$/, "") : "undefined" == typeof arguments[c] ? "undefined" : "string" != typeof arguments[c] ? JSON.stringify(arguments[c]) : arguments[c]);
            return Error(a)
        }
    }

    function db(b) {
        if (null == b || Ea(b))return!1;
        var a = b.length;
        return 1 === b.nodeType && a ? !0 : y(b) || L(b) || 0 === a || "number" === typeof a && 0 < a && a - 1 in b
    }

    function q(b, a, c) {
        var d;
        if (b)if (O(b))for (d in b)"prototype" == d || ("length" == d || "name" == d || b.hasOwnProperty && !b.hasOwnProperty(d)) || a.call(c, b[d], d); else if (b.forEach && b.forEach !== q)b.forEach(a, c); else if (db(b))for (d = 0; d < b.length; d++)a.call(c, b[d], d); else for (d in b)b.hasOwnProperty(d) && a.call(c, b[d], d);
        return b
    }

    function Vb(b) {
        var a = [], c;
        for (c in b)b.hasOwnProperty(c) && a.push(c);
        return a.sort()
    }

    function Tc(b, a, c) {
        for (var d = Vb(b), e = 0; e < d.length; e++)a.call(c, b[d[e]], d[e]);
        return d
    }

    function Wb(b) {
        return function (a, c) {
            b(c, a)
        }
    }

    function eb() {
        for (var b = ja.length, a; b;) {
            b--;
            a = ja[b].charCodeAt(0);
            if (57 == a)return ja[b] = "A", ja.join("");
            if (90 == a)ja[b] = "0"; else return ja[b] = String.fromCharCode(a + 1), ja.join("")
        }
        ja.unshift("0");
        return ja.join("")
    }

    function Xb(b, a) {
        a ? b.$$hashKey = a : delete b.$$hashKey
    }

    function E(b) {
        var a = b.$$hashKey;
        q(arguments, function (a) {
            a !== b && q(a, function (a, c) {
                b[c] = a
            })
        });
        Xb(b, a);
        return b
    }

    function Z(b) {
        return parseInt(b, 10)
    }

    function Yb(b, a) {
        return E(new (E(function () {
        }, {prototype: b})), a)
    }

    function A() {
    }

    function Fa(b) {
        return b
    }

    function $(b) {
        return function () {
            return b
        }
    }

    function F(b) {
        return"undefined" === typeof b
    }

    function B(b) {
        return"undefined" !== typeof b
    }

    function T(b) {
        return null != b && "object" === typeof b
    }

    function y(b) {
        return"string" === typeof b
    }

    function yb(b) {
        return"number" === typeof b
    }

    function Oa(b) {
        return"[object Date]" === xa.call(b)
    }

    function O(b) {
        return"function" === typeof b
    }

    function fb(b) {
        return"[object RegExp]" === xa.call(b)
    }

    function Ea(b) {
        return b && b.document && b.location && b.alert && b.setInterval
    }

    function Uc(b) {
        return!(!b || !(b.nodeName || b.prop && b.attr && b.find))
    }

    function Vc(b, a, c) {
        var d = [];
        q(b, function (b, g, f) {
            d.push(a.call(c, b, g, f))
        });
        return d
    }

    function Pa(b, a) {
        if (b.indexOf)return b.indexOf(a);
        for (var c = 0; c < b.length; c++)if (a === b[c])return c;
        return-1
    }

    function Qa(b, a) {
        var c = Pa(b, a);
        0 <= c && b.splice(c, 1);
        return a
    }

    function Ga(b, a, c, d) {
        if (Ea(b) || b && b.$evalAsync && b.$watch)throw Ra("cpws");
        if (a) {
            if (b === a)throw Ra("cpi");
            c = c || [];
            d = d || [];
            if (T(b)) {
                var e = Pa(c, b);
                if (-1 !== e)return d[e];
                c.push(b);
                d.push(a)
            }
            if (L(b))for (var g = a.length = 0; g < b.length; g++)e = Ga(b[g], null, c, d), T(b[g]) && (c.push(b[g]), d.push(e)), a.push(e); else {
                var f = a.$$hashKey;
                q(a, function (b, c) {
                    delete a[c]
                });
                for (g in b)e = Ga(b[g], null, c, d), T(b[g]) && (c.push(b[g]), d.push(e)), a[g] = e;
                Xb(a, f)
            }
        } else(a = b) && (L(b) ? a = Ga(b, [], c, d) : Oa(b) ? a = new Date(b.getTime()) : fb(b) ? a = RegExp(b.source) : T(b) && (a = Ga(b, {}, c, d)));
        return a
    }

    function ka(b, a) {
        if (L(b)) {
            a = a || [];
            for (var c = 0; c < b.length; c++)a[c] = b[c]
        } else if (T(b))for (c in a = a || {}, b)!gb.call(b, c) || "$" === c.charAt(0) && "$" === c.charAt(1) || (a[c] = b[c]);
        return a || b
    }

    function ya(b, a) {
        if (b === a)return!0;
        if (null === b || null === a)return!1;
        if (b !== b && a !== a)return!0;
        var c = typeof b, d;
        if (c == typeof a && "object" == c)if (L(b)) {
            if (!L(a))return!1;
            if ((c = b.length) == a.length) {
                for (d = 0; d < c; d++)if (!ya(b[d], a[d]))return!1;
                return!0
            }
        } else {
            if (Oa(b))return Oa(a) && b.getTime() == a.getTime();
            if (fb(b) && fb(a))return b.toString() == a.toString();
            if (b && b.$evalAsync && b.$watch || a && a.$evalAsync && a.$watch || Ea(b) || Ea(a) || L(a))return!1;
            c = {};
            for (d in b)if ("$" !== d.charAt(0) && !O(b[d])) {
                if (!ya(b[d], a[d]))return!1;
                c[d] = !0
            }
            for (d in a)if (!c.hasOwnProperty(d) && "$" !== d.charAt(0) && a[d] !== s && !O(a[d]))return!1;
            return!0
        }
        return!1
    }

    function Zb() {
        return U.securityPolicy && U.securityPolicy.isActive || U.querySelector && !(!U.querySelector("[ng-csp]") && !U.querySelector("[data-ng-csp]"))
    }

    function zb(b, a) {
        var c = 2 < arguments.length ? za.call(arguments, 2) : [];
        return!O(a) || a instanceof RegExp ? a : c.length ? function () {
            return arguments.length ? a.apply(b, c.concat(za.call(arguments, 0))) : a.apply(b, c)
        } : function () {
            return arguments.length ? a.apply(b, arguments) : a.call(b)
        }
    }

    function Wc(b, a) {
        var c = a;
        "string" === typeof b && "$" === b.charAt(0) ? c = s : Ea(a) ? c = "$WINDOW" : a && U === a ? c = "$DOCUMENT" : a && (a.$evalAsync && a.$watch) && (c = "$SCOPE");
        return c
    }

    function sa(b, a) {
        return"undefined" === typeof b ? s : JSON.stringify(b, Wc, a ? "  " : null)
    }

    function $b(b) {
        return y(b) ? JSON.parse(b) : b
    }

    function Sa(b) {
        "function" === typeof b ? b = !0 : b && 0 !== b.length ? (b = I("" + b), b = !("f" == b || "0" == b || "false" == b || "no" == b || "n" == b || "[]" == b)) : b = !1;
        return b
    }

    function ga(b) {
        b = x(b).clone();
        try {
            b.empty()
        } catch (a) {
        }
        var c = x("<div>").append(b).html();
        try {
            return 3 === b[0].nodeType ? I(c) : c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/, function (a, b) {
                return"<" + I(b)
            })
        } catch (d) {
            return I(c)
        }
    }

    function ac(b) {
        try {
            return decodeURIComponent(b)
        } catch (a) {
        }
    }

    function bc(b) {
        var a = {}, c, d;
        q((b || "").split("&"), function (b) {
            b && (c = b.split("="), d = ac(c[0]), B(d) && (b = B(c[1]) ? ac(c[1]) : !0, gb.call(a, d) ? L(a[d]) ? a[d].push(b) : a[d] = [a[d], b] : a[d] = b))
        });
        return a
    }

    function Ab(b) {
        var a = [];
        q(b, function (b, d) {
            L(b) ? q(b, function (b) {
                a.push(Aa(d, !0) + (!0 === b ? "" : "=" + Aa(b, !0)))
            }) : a.push(Aa(d, !0) + (!0 === b ? "" : "=" + Aa(b, !0)))
        });
        return a.length ? a.join("&") : ""
    }

    function hb(b) {
        return Aa(b, !0).replace(/%26/gi, "&").replace(/%3D/gi, "=").replace(/%2B/gi, "+")
    }

    function Aa(b, a) {
        return encodeURIComponent(b).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, a ? "%20" : "+")
    }

    function Xc(b, a) {
        function c(a) {
            a && d.push(a)
        }

        var d = [b], e, g, f = ["ng:app", "ng-app", "x-ng-app", "data-ng-app"], k = /\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;
        q(f, function (a) {
            f[a] = !0;
            c(U.getElementById(a));
            a = a.replace(":", "\\:");
            b.querySelectorAll && (q(b.querySelectorAll("." + a), c), q(b.querySelectorAll("." + a + "\\:"), c), q(b.querySelectorAll("[" + a + "]"), c))
        });
        q(d, function (a) {
            if (!e) {
                var b = k.exec(" " + a.className + " ");
                b ? (e = a, g = (b[2] || "").replace(/\s+/g, ",")) : q(a.attributes, function (b) {
                    !e && f[b.name] && (e = a, g = b.value)
                })
            }
        });
        e && a(e, g ? [g] : [])
    }

    function cc(b, a) {
        var c = function () {
            b = x(b);
            if (b.injector()) {
                var c = b[0] === U ? "document" : ga(b);
                throw Ra("btstrpd", c);
            }
            a = a || [];
            a.unshift(["$provide", function (a) {
                a.value("$rootElement", b)
            }]);
            a.unshift("ng");
            c = dc(a);
            c.invoke(["$rootScope", "$rootElement", "$compile", "$injector", "$animate", function (a, b, c, d, e) {
                a.$apply(function () {
                    b.data("$injector", d);
                    c(b)(a)
                })
            }]);
            return c
        }, d = /^NG_DEFER_BOOTSTRAP!/;
        if (S && !d.test(S.name))return c();
        S.name = S.name.replace(d, "");
        Ta.resumeBootstrap = function (b) {
            q(b, function (b) {
                a.push(b)
            });
            c()
        }
    }

    function ib(b, a) {
        a = a || "_";
        return b.replace(Yc, function (b, d) {
            return(d ? a : "") + b.toLowerCase()
        })
    }

    function Bb(b, a, c) {
        if (!b)throw Ra("areq", a || "?", c || "required");
        return b
    }

    function Ua(b, a, c) {
        c && L(b) && (b = b[b.length - 1]);
        Bb(O(b), a, "not a function, got " + (b && "object" === typeof b ? b.constructor.name || "Object" : typeof b));
        return b
    }

    function Ba(b, a) {
        if ("hasOwnProperty" === b)throw Ra("badname", a);
    }

    function ec(b, a, c) {
        if (!a)return b;
        a = a.split(".");
        for (var d, e = b, g = a.length, f = 0; f < g; f++)d = a[f], b && (b = (e = b)[d]);
        return!c && O(b) ? zb(e, b) : b
    }

    function Cb(b) {
        var a = b[0];
        b = b[b.length - 1];
        if (a === b)return x(a);
        var c = [a];
        do {
            a = a.nextSibling;
            if (!a)break;
            c.push(a)
        } while (a !== b);
        return x(c)
    }

    function Zc(b) {
        var a = v("$injector"), c = v("ng");
        b = b.angular || (b.angular = {});
        b.$$minErr = b.$$minErr || v;
        return b.module || (b.module = function () {
            var b = {};
            return function (e, g, f) {
                if ("hasOwnProperty" === e)throw c("badname", "module");
                g && b.hasOwnProperty(e) && (b[e] = null);
                return b[e] || (b[e] = function () {
                    function b(a, d, e) {
                        return function () {
                            c[e || "push"]([a, d, arguments]);
                            return p
                        }
                    }

                    if (!g)throw a("nomod", e);
                    var c = [], d = [], l = b("$injector", "invoke"), p = {_invokeQueue: c, _runBlocks: d, requires: g, name: e, provider: b("$provide", "provider"), factory: b("$provide", "factory"), service: b("$provide", "service"), value: b("$provide", "value"), constant: b("$provide", "constant", "unshift"), animation: b("$animateProvider", "register"), filter: b("$filterProvider", "register"), controller: b("$controllerProvider", "register"), directive: b("$compileProvider", "directive"), config: l, run: function (a) {
                        d.push(a);
                        return this
                    }};
                    f && l(f);
                    return p
                }())
            }
        }())
    }

    function $c(b) {
        E(b, {bootstrap: cc, copy: Ga, extend: E, equals: ya, element: x, forEach: q, injector: dc, noop: A, bind: zb, toJson: sa, fromJson: $b, identity: Fa, isUndefined: F, isDefined: B, isString: y, isFunction: O, isObject: T, isNumber: yb, isElement: Uc, isArray: L, version: ad, isDate: Oa, lowercase: I, uppercase: Ha, callbacks: {counter: 0}, $$minErr: v, $$csp: Zb});
        Va = Zc(S);
        try {
            Va("ngLocale")
        } catch (a) {
            Va("ngLocale", []).provider("$locale", bd)
        }
        Va("ng", ["ngLocale"], ["$provide", function (a) {
            a.provider({$$sanitizeUri: cd});
            a.provider("$compile", fc).directive({a: dd, input: gc, textarea: gc, form: ed, script: fd, select: gd, style: hd, option: id, ngBind: jd, ngBindHtml: kd, ngBindTemplate: ld, ngClass: md, ngClassEven: nd, ngClassOdd: od, ngCloak: pd, ngController: qd, ngForm: rd, ngHide: sd, ngIf: td, ngInclude: ud, ngInit: vd, ngNonBindable: wd, ngPluralize: xd, ngRepeat: yd, ngShow: zd, ngStyle: Ad, ngSwitch: Bd, ngSwitchWhen: Cd, ngSwitchDefault: Dd, ngOptions: Ed, ngTransclude: Fd, ngModel: Gd, ngList: Hd, ngChange: Id, required: hc, ngRequired: hc, ngValue: Jd}).directive({ngInclude: Kd}).directive(Db).directive(ic);
            a.provider({$anchorScroll: Ld, $animate: Md, $browser: Nd, $cacheFactory: Od, $controller: Pd, $document: Qd, $exceptionHandler: Rd, $filter: jc, $interpolate: Sd, $interval: Td, $http: Ud, $httpBackend: Vd, $location: Wd, $log: Xd, $parse: Yd, $rootScope: Zd, $q: $d, $sce: ae, $sceDelegate: be, $sniffer: ce, $templateCache: de, $timeout: ee, $window: fe, $$rAF: ge, $$asyncCallback: he})
        }])
    }

    function Wa(b) {
        return b.replace(ie, function (a, b, d, e) {
            return e ? d.toUpperCase() : d
        }).replace(je, "Moz$1")
    }

    function Eb(b, a, c, d) {
        function e(b) {
            var e = c && b ? [this.filter(b)] : [this], m = a, h, l, p, n, r, t;
            if (!d || null != b)for (; e.length;)for (h = e.shift(), l = 0, p = h.length; l < p; l++)for (n = x(h[l]), m ? n.triggerHandler("$destroy") : m = !m, r = 0, n = (t = n.children()).length; r < n; r++)e.push(Ca(t[r]));
            return g.apply(this, arguments)
        }

        var g = Ca.fn[b], g = g.$original || g;
        e.$original = g;
        Ca.fn[b] = e
    }

    function R(b) {
        if (b instanceof R)return b;
        y(b) && (b = aa(b));
        if (!(this instanceof R)) {
            if (y(b) && "<" != b.charAt(0))throw Fb("nosel");
            return new R(b)
        }
        if (y(b)) {
            var a = b;
            b = U;
            var c;
            if (c = ke.exec(a))b = [b.createElement(c[1])]; else {
                var d = b, e;
                b = d.createDocumentFragment();
                c = [];
                if (Gb.test(a)) {
                    d = b.appendChild(d.createElement("div"));
                    e = (le.exec(a) || ["", ""])[1].toLowerCase();
                    e = ba[e] || ba._default;
                    d.innerHTML = "<div>&#160;</div>" + e[1] + a.replace(me, "<$1></$2>") + e[2];
                    d.removeChild(d.firstChild);
                    for (a = e[0]; a--;)d = d.lastChild;
                    a = 0;
                    for (e = d.childNodes.length; a < e; ++a)c.push(d.childNodes[a]);
                    d = b.firstChild;
                    d.textContent = ""
                } else c.push(d.createTextNode(a));
                b.textContent = "";
                b.innerHTML = "";
                b = c
            }
            Hb(this, b);
            x(U.createDocumentFragment()).append(this)
        } else Hb(this, b)
    }

    function Ib(b) {
        return b.cloneNode(!0)
    }

    function Ia(b) {
        kc(b);
        var a = 0;
        for (b = b.childNodes || []; a < b.length; a++)Ia(b[a])
    }

    function lc(b, a, c, d) {
        if (B(d))throw Fb("offargs");
        var e = la(b, "events");
        la(b, "handle") && (F(a) ? q(e, function (a, c) {
            Xa(b, c, a);
            delete e[c]
        }) : q(a.split(" "), function (a) {
            F(c) ? (Xa(b, a, e[a]), delete e[a]) : Qa(e[a] || [], c)
        }))
    }

    function kc(b, a) {
        var c = b.ng339, d = Ya[c];
        d && (a ? delete Ya[c].data[a] : (d.handle && (d.events.$destroy && d.handle({}, "$destroy"), lc(b)), delete Ya[c], b.ng339 = s))
    }

    function la(b, a, c) {
        var d = b.ng339, d = Ya[d || -1];
        if (B(c))d || (b.ng339 = d = ++ne, d = Ya[d] = {}), d[a] = c; else return d && d[a]
    }

    function mc(b, a, c) {
        var d = la(b, "data"), e = B(c), g = !e && B(a), f = g && !T(a);
        d || f || la(b, "data", d = {});
        if (e)d[a] = c; else if (g) {
            if (f)return d && d[a];
            E(d, a)
        } else return d
    }

    function Jb(b, a) {
        return b.getAttribute ? -1 < (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").indexOf(" " + a + " ") : !1
    }

    function jb(b, a) {
        a && b.setAttribute && q(a.split(" "), function (a) {
            b.setAttribute("class", aa((" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ").replace(" " + aa(a) + " ", " ")))
        })
    }

    function kb(b, a) {
        if (a && b.setAttribute) {
            var c = (" " + (b.getAttribute("class") || "") + " ").replace(/[\n\t]/g, " ");
            q(a.split(" "), function (a) {
                a = aa(a);
                -1 === c.indexOf(" " + a + " ") && (c += a + " ")
            });
            b.setAttribute("class", aa(c))
        }
    }

    function Hb(b, a) {
        if (a) {
            a = a.nodeName || !B(a.length) || Ea(a) ? [a] : a;
            for (var c = 0; c < a.length; c++)b.push(a[c])
        }
    }

    function nc(b, a) {
        return lb(b, "$" + (a || "ngController") + "Controller")
    }

    function lb(b, a, c) {
        b = x(b);
        9 == b[0].nodeType && (b = b.find("html"));
        for (a = L(a) ? a : [a]; b.length;) {
            for (var d = b[0], e = 0, g = a.length; e < g; e++)if ((c = b.data(a[e])) !== s)return c;
            b = x(d.parentNode || 11 === d.nodeType && d.host)
        }
    }

    function oc(b) {
        for (var a = 0, c = b.childNodes; a < c.length; a++)Ia(c[a]);
        for (; b.firstChild;)b.removeChild(b.firstChild)
    }

    function pc(b, a) {
        var c = mb[a.toLowerCase()];
        return c && qc[b.nodeName] && c
    }

    function oe(b, a) {
        var c = function (c, e) {
            c.preventDefault || (c.preventDefault = function () {
                c.returnValue = !1
            });
            c.stopPropagation || (c.stopPropagation = function () {
                c.cancelBubble = !0
            });
            c.target || (c.target = c.srcElement || U);
            if (F(c.defaultPrevented)) {
                var g = c.preventDefault;
                c.preventDefault = function () {
                    c.defaultPrevented = !0;
                    g.call(c)
                };
                c.defaultPrevented = !1
            }
            c.isDefaultPrevented = function () {
                return c.defaultPrevented || !1 === c.returnValue
            };
            var f = ka(a[e || c.type] || []);
            q(f, function (a) {
                a.call(b, c)
            });
            8 >= P ? (c.preventDefault = null, c.stopPropagation = null, c.isDefaultPrevented = null) : (delete c.preventDefault, delete c.stopPropagation, delete c.isDefaultPrevented)
        };
        c.elem = b;
        return c
    }

    function Ja(b, a) {
        var c = typeof b, d;
        "function" == c || "object" == c && null !== b ? "function" == typeof(d = b.$$hashKey) ? d = b.$$hashKey() : d === s && (d = b.$$hashKey = (a || eb)()) : d = b;
        return c + ":" + d
    }

    function Za(b, a) {
        if (a) {
            var c = 0;
            this.nextUid = function () {
                return++c
            }
        }
        q(b, this.put, this)
    }

    function rc(b) {
        var a, c;
        "function" === typeof b ? (a = b.$inject) || (a = [], b.length && (c = b.toString().replace(pe, ""), c = c.match(qe), q(c[1].split(re), function (b) {
            b.replace(se, function (b, c, d) {
                a.push(d)
            })
        })), b.$inject = a) : L(b) ? (c = b.length - 1, Ua(b[c], "fn"), a = b.slice(0, c)) : Ua(b, "fn", !0);
        return a
    }

    function dc(b) {
        function a(a) {
            return function (b, c) {
                if (T(b))q(b, Wb(a)); else return a(b, c)
            }
        }

        function c(a, b) {
            Ba(a, "service");
            if (O(b) || L(b))b = p.instantiate(b);
            if (!b.$get)throw $a("pget", a);
            return l[a + k] = b
        }

        function d(a, b) {
            return c(a, {$get: b})
        }

        function e(a) {
            var b = [], c, d, g, k;
            q(a, function (a) {
                if (!h.get(a)) {
                    h.put(a, !0);
                    try {
                        if (y(a))for (c = Va(a), b = b.concat(e(c.requires)).concat(c._runBlocks), d = c._invokeQueue, g = 0, k = d.length; g < k; g++) {
                            var f = d[g], m = p.get(f[0]);
                            m[f[1]].apply(m, f[2])
                        } else O(a) ? b.push(p.invoke(a)) : L(a) ? b.push(p.invoke(a)) : Ua(a, "module")
                    } catch (l) {
                        throw L(a) && (a = a[a.length - 1]), l.message && (l.stack && -1 == l.stack.indexOf(l.message)) && (l = l.message + "\n" + l.stack), $a("modulerr", a, l.stack || l.message || l);
                    }
                }
            });
            return b
        }

        function g(a, b) {
            function c(d) {
                if (a.hasOwnProperty(d)) {
                    if (a[d] === f)throw $a("cdep", d + " <- " + m.join(" <- "));
                    return a[d]
                }
                try {
                    return m.unshift(d), a[d] = f, a[d] = b(d)
                } catch (e) {
                    throw a[d] === f && delete a[d], e;
                } finally {
                    m.shift()
                }
            }

            function d(a, b, e) {
                var g = [], k = rc(a), f, m, h;
                m = 0;
                for (f = k.length; m < f; m++) {
                    h = k[m];
                    if ("string" !== typeof h)throw $a("itkn", h);
                    g.push(e && e.hasOwnProperty(h) ? e[h] : c(h))
                }
                L(a) && (a = a[f]);
                return a.apply(b, g)
            }

            return{invoke: d, instantiate: function (a, b) {
                var c = function () {
                }, e;
                c.prototype = (L(a) ? a[a.length - 1] : a).prototype;
                c = new c;
                e = d(a, c, b);
                return T(e) || O(e) ? e : c
            }, get: c, annotate: rc, has: function (b) {
                return l.hasOwnProperty(b + k) || a.hasOwnProperty(b)
            }}
        }

        var f = {}, k = "Provider", m = [], h = new Za([], !0), l = {$provide: {provider: a(c), factory: a(d), service: a(function (a, b) {
            return d(a, ["$injector", function (a) {
                return a.instantiate(b)
            }])
        }), value: a(function (a, b) {
            return d(a, $(b))
        }), constant: a(function (a, b) {
            Ba(a, "constant");
            l[a] = b;
            n[a] = b
        }), decorator: function (a, b) {
            var c = p.get(a + k), d = c.$get;
            c.$get = function () {
                var a = r.invoke(d, c);
                return r.invoke(b, null, {$delegate: a})
            }
        }}}, p = l.$injector = g(l, function () {
            throw $a("unpr", m.join(" <- "));
        }), n = {}, r = n.$injector = g(n, function (a) {
            a = p.get(a + k);
            return r.invoke(a.$get, a)
        });
        q(e(b), function (a) {
            r.invoke(a || A)
        });
        return r
    }

    function Ld() {
        var b = !0;
        this.disableAutoScrolling = function () {
            b = !1
        };
        this.$get = ["$window", "$location", "$rootScope", function (a, c, d) {
            function e(a) {
                var b = null;
                q(a, function (a) {
                    b || "a" !== I(a.nodeName) || (b = a)
                });
                return b
            }

            function g() {
                var b = c.hash(), d;
                b ? (d = f.getElementById(b)) ? d.scrollIntoView() : (d = e(f.getElementsByName(b))) ? d.scrollIntoView() : "top" === b && a.scrollTo(0, 0) : a.scrollTo(0, 0)
            }

            var f = a.document;
            b && d.$watch(function () {
                return c.hash()
            }, function () {
                d.$evalAsync(g)
            });
            return g
        }]
    }

    function he() {
        this.$get = ["$$rAF", "$timeout", function (b, a) {
            return b.supported ? function (a) {
                return b(a)
            } : function (b) {
                return a(b, 0, !1)
            }
        }]
    }

    function te(b, a, c, d) {
        function e(a) {
            try {
                a.apply(null, za.call(arguments, 1))
            } finally {
                if (t--, 0 === t)for (; J.length;)try {
                    J.pop()()
                } catch (b) {
                    c.error(b)
                }
            }
        }

        function g(a, b) {
            (function ca() {
                q(w, function (a) {
                    a()
                });
                u = b(ca, a)
            })()
        }

        function f() {
            z = null;
            K != k.url() && (K = k.url(), q(da, function (a) {
                a(k.url())
            }))
        }

        var k = this, m = a[0], h = b.location, l = b.history, p = b.setTimeout, n = b.clearTimeout, r = {};
        k.isMock = !1;
        var t = 0, J = [];
        k.$$completeOutstandingRequest = e;
        k.$$incOutstandingRequestCount = function () {
            t++
        };
        k.notifyWhenNoOutstandingRequests = function (a) {
            q(w, function (a) {
                a()
            });
            0 === t ? a() : J.push(a)
        };
        var w = [], u;
        k.addPollFn = function (a) {
            F(u) && g(100, p);
            w.push(a);
            return a
        };
        var K = h.href, X = a.find("base"), z = null;
        k.url = function (a, c) {
            h !== b.location && (h = b.location);
            l !== b.history && (l = b.history);
            if (a) {
                if (K != a)return K = a, d.history ? c ? l.replaceState(null, "", a) : (l.pushState(null, "", a), X.attr("href", X.attr("href"))) : (z = a, c ? h.replace(a) : h.href = a), k
            } else return z || h.href.replace(/%27/g, "'")
        };
        var da = [], N = !1;
        k.onUrlChange = function (a) {
            if (!N) {
                if (d.history)x(b).on("popstate", f);
                if (d.hashchange)x(b).on("hashchange", f); else k.addPollFn(f);
                N = !0
            }
            da.push(a);
            return a
        };
        k.baseHref = function () {
            var a = X.attr("href");
            return a ? a.replace(/^(https?\:)?\/\/[^\/]*/, "") : ""
        };
        var M = {}, ea = "", C = k.baseHref();
        k.cookies = function (a, b) {
            var d, e, g, k;
            if (a)b === s ? m.cookie = escape(a) + "=;path=" + C + ";expires=Thu, 01 Jan 1970 00:00:00 GMT" : y(b) && (d = (m.cookie = escape(a) + "=" + escape(b) + ";path=" + C).length + 1, 4096 < d && c.warn("Cookie '" + a + "' possibly not set or overflowed because it was too large (" + d + " > 4096 bytes)!")); else {
                if (m.cookie !== ea)for (ea = m.cookie, d = ea.split("; "), M = {}, g = 0; g < d.length; g++)e = d[g], k = e.indexOf("="), 0 < k && (a = unescape(e.substring(0, k)), M[a] === s && (M[a] = unescape(e.substring(k + 1))));
                return M
            }
        };
        k.defer = function (a, b) {
            var c;
            t++;
            c = p(function () {
                delete r[c];
                e(a)
            }, b || 0);
            r[c] = !0;
            return c
        };
        k.defer.cancel = function (a) {
            return r[a] ? (delete r[a], n(a), e(A), !0) : !1
        }
    }

    function Nd() {
        this.$get = ["$window", "$log", "$sniffer", "$document", function (b, a, c, d) {
            return new te(b, d, a, c)
        }]
    }

    function Od() {
        this.$get = function () {
            function b(b, d) {
                function e(a) {
                    a != p && (n ? n == a && (n = a.n) : n = a, g(a.n, a.p), g(a, p), p = a, p.n = null)
                }

                function g(a, b) {
                    a != b && (a && (a.p = b), b && (b.n = a))
                }

                if (b in a)throw v("$cacheFactory")("iid", b);
                var f = 0, k = E({}, d, {id: b}), m = {}, h = d && d.capacity || Number.MAX_VALUE, l = {}, p = null, n = null;
                return a[b] = {put: function (a, b) {
                    if (h < Number.MAX_VALUE) {
                        var c = l[a] || (l[a] = {key: a});
                        e(c)
                    }
                    if (!F(b))return a in m || f++, m[a] = b, f > h && this.remove(n.key), b
                }, get: function (a) {
                    if (h < Number.MAX_VALUE) {
                        var b = l[a];
                        if (!b)return;
                        e(b)
                    }
                    return m[a]
                }, remove: function (a) {
                    if (h < Number.MAX_VALUE) {
                        var b = l[a];
                        if (!b)return;
                        b == p && (p = b.p);
                        b == n && (n = b.n);
                        g(b.n, b.p);
                        delete l[a]
                    }
                    delete m[a];
                    f--
                }, removeAll: function () {
                    m = {};
                    f = 0;
                    l = {};
                    p = n = null
                }, destroy: function () {
                    l = k = m = null;
                    delete a[b]
                }, info: function () {
                    return E({}, k, {size: f})
                }}
            }

            var a = {};
            b.info = function () {
                var b = {};
                q(a, function (a, e) {
                    b[e] = a.info()
                });
                return b
            };
            b.get = function (b) {
                return a[b]
            };
            return b
        }
    }

    function de() {
        this.$get = ["$cacheFactory", function (b) {
            return b("templates")
        }]
    }

    function fc(b, a) {
        var c = {}, d = "Directive", e = /^\s*directive\:\s*([\d\w_\-]+)\s+(.*)$/, g = /(([\d\w_\-]+)(?:\:([^;]+))?;?)/, f = /^(on[a-z]+|formaction)$/;
        this.directive = function m(a, e) {
            Ba(a, "directive");
            y(a) ? (Bb(e, "directiveFactory"), c.hasOwnProperty(a) || (c[a] = [], b.factory(a + d, ["$injector", "$exceptionHandler", function (b, d) {
                var e = [];
                q(c[a], function (c, g) {
                    try {
                        var f = b.invoke(c);
                        O(f) ? f = {compile: $(f)} : !f.compile && f.link && (f.compile = $(f.link));
                        f.priority = f.priority || 0;
                        f.index = g;
                        f.name = f.name || a;
                        f.require = f.require || f.controller && f.name;
                        f.restrict = f.restrict || "A";
                        e.push(f)
                    } catch (m) {
                        d(m)
                    }
                });
                return e
            }])), c[a].push(e)) : q(a, Wb(m));
            return this
        };
        this.aHrefSanitizationWhitelist = function (b) {
            return B(b) ? (a.aHrefSanitizationWhitelist(b), this) : a.aHrefSanitizationWhitelist()
        };
        this.imgSrcSanitizationWhitelist = function (b) {
            return B(b) ? (a.imgSrcSanitizationWhitelist(b), this) : a.imgSrcSanitizationWhitelist()
        };
        this.$get = ["$injector", "$interpolate", "$exceptionHandler", "$http", "$templateCache", "$parse", "$controller", "$rootScope", "$document", "$sce", "$animate", "$$sanitizeUri", function (a, b, l, p, n, r, t, J, w, u, K, X) {
            function z(a, b, c, d, e) {
                a instanceof
                x || (a = x(a));
                q(a, function (b, c) {
                    3 == b.nodeType && b.nodeValue.match(/\S+/) && (a[c] = x(b).wrap("<span></span>").parent()[0])
                });
                var g = N(a, b, a, c, d, e);
                da(a, "ng-scope");
                return function (b, c, d, e) {
                    Bb(b, "scope");
                    var f = c ? Ka.clone.call(a) : a;
                    q(d, function (a, b) {
                        f.data("$" + b + "Controller", a)
                    });
                    d = 0;
                    for (var m = f.length; d < m; d++) {
                        var h = f[d].nodeType;
                        1 !== h && 9 !== h || f.eq(d).data("$scope", b)
                    }
                    c && c(f, b);
                    g && g(b, f, f, e);
                    return f
                }
            }

            function da(a, b) {
                try {
                    a.addClass(b)
                } catch (c) {
                }
            }

            function N(a, b, c, d, e, g) {
                function f(a, c, d, e) {
                    var g, h, l, r, p, n, t;
                    g = c.length;
                    var w = Array(g);
                    for (p = 0; p < g; p++)w[p] = c[p];
                    t = p = 0;
                    for (n = m.length; p < n; t++)h = w[t], c = m[p++], g = m[p++], l = x(h), c ? (c.scope ? (r = a.$new(), l.data("$scope", r)) : r = a, l = c.transcludeOnThisElement ? M(a, c.transclude, e) : !c.templateOnThisElement && e ? e : !e && b ? M(a, b) : null, c(g, r, h, d, l)) : g && g(a, h.childNodes, s, e)
                }

                for (var m = [], h, l, r, p, n = 0; n < a.length; n++)h = new Kb, l = ea(a[n], [], h, 0 === n ? d : s, e), (g = l.length ? H(l, a[n], h, b, c, null, [], [], g) : null) && g.scope && da(x(a[n]), "ng-scope"), h = g && g.terminal || !(r = a[n].childNodes) || !r.length ? null : N(r, g ? (g.transcludeOnThisElement || !g.templateOnThisElement) && g.transclude : b), m.push(g, h), p = p || g || h, g = null;
                return p ? f : null
            }

            function M(a, b, c) {
                return function (d, e, g) {
                    var f = !1;
                    d || (d = a.$new(), f = d.$$transcluded = !0);
                    e = b(d, e, g, c);
                    if (f)e.on("$destroy", function () {
                        d.$destroy()
                    });
                    return e
                }
            }

            function ea(a, b, c, d, f) {
                var h = c.$attr, m;
                switch (a.nodeType) {
                    case 1:
                        ca(b, ma(La(a).toLowerCase()), "E", d, f);
                        for (var l, r, p, n = a.attributes, t = 0, w = n && n.length; t < w; t++) {
                            var J = !1, K = !1;
                            l = n[t];
                            if (!P || 8 <= P || l.specified) {
                                m = l.name;
                                r = aa(l.value);
                                l = ma(m);
                                if (p = V.test(l))m = ib(l.substr(6), "-");
                                var u = l.replace(/(Start|End)$/, "");
                                l === u + "Start" && (J = m, K = m.substr(0, m.length - 5) + "end", m = m.substr(0, m.length - 6));
                                l = ma(m.toLowerCase());
                                h[l] = m;
                                if (p || !c.hasOwnProperty(l))c[l] = r, pc(a, l) && (c[l] = !0);
                                R(a, b, r, l);
                                ca(b, l, "A", d, f, J, K)
                            }
                        }
                        a = a.className;
                        if (y(a) && "" !== a)for (; m = g.exec(a);)l = ma(m[2]), ca(b, l, "C", d, f) && (c[l] = aa(m[3])), a = a.substr(m.index + m[0].length);
                        break;
                    case 3:
                        v(b, a.nodeValue);
                        break;
                    case 8:
                        try {
                            if (m = e.exec(a.nodeValue))l = ma(m[1]), ca(b, l, "M", d, f) && (c[l] = aa(m[2]))
                        } catch (z) {
                        }
                }
                b.sort(F);
                return b
            }

            function C(a, b, c) {
                var d = [], e = 0;
                if (b && a.hasAttribute && a.hasAttribute(b)) {
                    do {
                        if (!a)throw ha("uterdir", b, c);
                        1 == a.nodeType && (a.hasAttribute(b) && e++, a.hasAttribute(c) && e--);
                        d.push(a);
                        a = a.nextSibling
                    } while (0 < e)
                } else d.push(a);
                return x(d)
            }

            function D(a, b, c) {
                return function (d, e, g, f, m) {
                    e = C(e[0], b, c);
                    return a(d, e, g, f, m)
                }
            }

            function H(a, c, d, e, g, f, m, p, n) {
                function w(a, b, c, d) {
                    if (a) {
                        c && (a = D(a, c, d));
                        a.require = G.require;
                        a.directiveName = na;
                        if (M === G || G.$$isolateScope)a = tc(a, {isolateScope: !0});
                        m.push(a)
                    }
                    if (b) {
                        c && (b = D(b, c, d));
                        b.require = G.require;
                        b.directiveName = na;
                        if (M === G || G.$$isolateScope)b = tc(b, {isolateScope: !0});
                        p.push(b)
                    }
                }

                function J(a, b, c, d) {
                    var e, g = "data", f = !1;
                    if (y(b)) {
                        for (; "^" == (e = b.charAt(0)) || "?" == e;)b = b.substr(1), "^" == e && (g = "inheritedData"), f = f || "?" == e;
                        e = null;
                        d && "data" === g && (e = d[b]);
                        e = e || c[g]("$" + b + "Controller");
                        if (!e && !f)throw ha("ctreq", b, a);
                    } else L(b) && (e = [], q(b, function (b) {
                        e.push(J(a, b, c, d))
                    }));
                    return e
                }

                function K(a, e, g, f, n) {
                    function w(a, b) {
                        var c;
                        2 > arguments.length && (b = a, a = s);
                        Da && (c = ea);
                        return n(a, b, c)
                    }

                    var u, Q, z, D, X, C, ea = {}, nb;
                    u = c === g ? d : ka(d, new Kb(x(g), d.$attr));
                    Q = u.$$element;
                    if (M) {
                        var ca = /^\s*([@=&])(\??)\s*(\w*)\s*$/;
                        f = x(g);
                        C = e.$new(!0);
                        !H || H !== M && H !== M.$$originalDirective ? f.data("$isolateScopeNoTemplate", C) : f.data("$isolateScope", C);
                        da(f, "ng-isolate-scope");
                        q(M.scope, function (a, c) {
                            var d = a.match(ca) || [], g = d[3] || c, f = "?" == d[2], d = d[1], m, l, p, n;
                            C.$$isolateBindings[c] = d + g;
                            switch (d) {
                                case"@":
                                    u.$observe(g, function (a) {
                                        C[c] = a
                                    });
                                    u.$$observers[g].$$scope = e;
                                    u[g] && (C[c] = b(u[g])(e));
                                    break;
                                case"=":
                                    if (f && !u[g])break;
                                    l = r(u[g]);
                                    n = l.literal ? ya : function (a, b) {
                                        return a === b
                                    };
                                    p = l.assign || function () {
                                        m = C[c] = l(e);
                                        throw ha("nonassign", u[g], M.name);
                                    };
                                    m = C[c] = l(e);
                                    C.$watch(function () {
                                        var a = l(e);
                                        n(a, C[c]) || (n(a, m) ? p(e, a = C[c]) : C[c] = a);
                                        return m = a
                                    }, null, l.literal);
                                    break;
                                case"&":
                                    l = r(u[g]);
                                    C[c] = function (a) {
                                        return l(e, a)
                                    };
                                    break;
                                default:
                                    throw ha("iscp", M.name, c, a);
                            }
                        })
                    }
                    nb = n && w;
                    N && q(N, function (a) {
                        var b = {$scope: a === M || a.$$isolateScope ? C : e, $element: Q, $attrs: u, $transclude: nb}, c;
                        X = a.controller;
                        "@" == X && (X = u[a.name]);
                        c = t(X, b);
                        ea[a.name] = c;
                        Da || Q.data("$" + a.name + "Controller", c);
                        a.controllerAs && (b.$scope[a.controllerAs] = c)
                    });
                    f = 0;
                    for (z = m.length; f < z; f++)try {
                        D = m[f], D(D.isolateScope ? C : e, Q, u, D.require && J(D.directiveName, D.require, Q, ea), nb)
                    } catch (G) {
                        l(G, ga(Q))
                    }
                    f = e;
                    M && (M.template || null === M.templateUrl) && (f = C);
                    a && a(f, g.childNodes, s, n);
                    for (f = p.length - 1; 0 <= f; f--)try {
                        D = p[f], D(D.isolateScope ? C : e, Q, u, D.require && J(D.directiveName, D.require, Q, ea), nb)
                    } catch (B) {
                        l(B, ga(Q))
                    }
                }

                n = n || {};
                for (var u = -Number.MAX_VALUE, X, N = n.controllerDirectives, M = n.newIsolateScopeDirective, H = n.templateDirective, ca = n.nonTlbTranscludeDirective, F = !1, E = !1, Da = n.hasElementTranscludeDirective, v = d.$$element = x(c), G, na, W, S = e, R, P = 0, oa = a.length; P < oa; P++) {
                    G = a[P];
                    var V = G.$$start, Y = G.$$end;
                    V && (v = C(c, V, Y));
                    W = s;
                    if (u > G.priority)break;
                    if (W = G.scope)X = X || G, G.templateUrl || (I("new/isolated scope", M, G, v), T(W) && (M = G));
                    na = G.name;
                    !G.templateUrl && G.controller && (W = G.controller, N = N || {}, I("'" + na + "' controller", N[na], G, v), N[na] = G);
                    if (W = G.transclude)F = !0, G.$$tlb || (I("transclusion", ca, G, v), ca = G), "element" == W ? (Da = !0, u = G.priority, W = C(c, V, Y), v = d.$$element = x(U.createComment(" " + na + ": " + d[na] + " ")), c = v[0], ob(g, x(za.call(W, 0)), c), S = z(W, e, u, f && f.name, {nonTlbTranscludeDirective: ca})) : (W = x(Ib(c)).contents(), v.empty(), S = z(W, e));
                    if (G.template)if (E = !0, I("template", H, G, v), H = G, W = O(G.template) ? G.template(v, d) : G.template, W = Z(W), G.replace) {
                        f = G;
                        W = Gb.test(W) ? x(aa(W)) : [];
                        c = W[0];
                        if (1 != W.length || 1 !== c.nodeType)throw ha("tplrt", na, "");
                        ob(g, v, c);
                        oa = {$attr: {}};
                        W = ea(c, [], oa);
                        var $ = a.splice(P + 1, a.length - (P + 1));
                        M && sc(W);
                        a = a.concat(W).concat($);
                        B(d, oa);
                        oa = a.length
                    } else v.html(W);
                    if (G.templateUrl)E = !0, I("template", H, G, v), H = G, G.replace && (f = G), K = A(a.splice(P, a.length - P), v, d, g, F && S, m, p, {controllerDirectives: N, newIsolateScopeDirective: M, templateDirective: H, nonTlbTranscludeDirective: ca}), oa = a.length; else if (G.compile)try {
                        R = G.compile(v, d, S), O(R) ? w(null, R, V, Y) : R && w(R.pre, R.post, V, Y)
                    } catch (ba) {
                        l(ba, ga(v))
                    }
                    G.terminal && (K.terminal = !0, u = Math.max(u, G.priority))
                }
                K.scope = X && !0 === X.scope;
                K.transcludeOnThisElement = F;
                K.templateOnThisElement = E;
                K.transclude = S;
                n.hasElementTranscludeDirective = Da;
                return K
            }

            function sc(a) {
                for (var b = 0, c = a.length; b < c; b++)a[b] = Yb(a[b], {$$isolateScope: !0})
            }

            function ca(b, e, g, f, h, r, p) {
                if (e === h)return null;
                h = null;
                if (c.hasOwnProperty(e)) {
                    var n;
                    e = a.get(e + d);
                    for (var t = 0, w = e.length; t < w; t++)try {
                        n = e[t], (f === s || f > n.priority) && -1 != n.restrict.indexOf(g) && (r && (n = Yb(n, {$$start: r, $$end: p})), b.push(n), h = n)
                    } catch (J) {
                        l(J)
                    }
                }
                return h
            }

            function B(a, b) {
                var c = b.$attr, d = a.$attr, e = a.$$element;
                q(a, function (d, e) {
                    "$" != e.charAt(0) && (b[e] && b[e] !== d && (d += ("style" === e ? ";" : " ") + b[e]), a.$set(e, d, !0, c[e]))
                });
                q(b, function (b, g) {
                    "class" == g ? (da(e, b), a["class"] = (a["class"] ? a["class"] + " " : "") + b) : "style" == g ? (e.attr("style", e.attr("style") + ";" + b), a.style = (a.style ? a.style + ";" : "") + b) : "$" == g.charAt(0) || a.hasOwnProperty(g) || (a[g] = b, d[g] = c[g])
                })
            }

            function A(a, b, c, d, e, g, f, m) {
                var h = [], l, r, t = b[0], w = a.shift(), J = E({}, w, {templateUrl: null, transclude: null, replace: null, $$originalDirective: w}), K = O(w.templateUrl) ? w.templateUrl(b, c) : w.templateUrl;
                b.empty();
                p.get(u.getTrustedResourceUrl(K), {cache: n}).success(function (p) {
                    var n, u;
                    p = Z(p);
                    if (w.replace) {
                        p = Gb.test(p) ? x(aa(p)) : [];
                        n = p[0];
                        if (1 != p.length || 1 !== n.nodeType)throw ha("tplrt", w.name, K);
                        p = {$attr: {}};
                        ob(d, b, n);
                        var z = ea(n, [], p);
                        T(w.scope) && sc(z);
                        a = z.concat(a);
                        B(c, p)
                    } else n = t, b.html(p);
                    a.unshift(J);
                    l = H(a, n, c, e, b, w, g, f, m);
                    q(d, function (a, c) {
                        a == n && (d[c] = b[0])
                    });
                    for (r = N(b[0].childNodes, e); h.length;) {
                        p = h.shift();
                        u = h.shift();
                        var D = h.shift(), X = h.shift(), z = b[0];
                        if (u !== t) {
                            var C = u.className;
                            m.hasElementTranscludeDirective && w.replace || (z = Ib(n));
                            ob(D, x(u), z);
                            da(x(z), C)
                        }
                        u = l.transcludeOnThisElement ? M(p, l.transclude, X) : X;
                        l(r, p, z, d, u)
                    }
                    h = null
                }).error(function (a, b, c, d) {
                    throw ha("tpload", d.url);
                });
                return function (a, b, c, d, e) {
                    a = e;
                    h ? (h.push(b), h.push(c), h.push(d), h.push(a)) : (l.transcludeOnThisElement && (a = M(b, l.transclude, e)), l(r, b, c, d, a))
                }
            }

            function F(a, b) {
                var c = b.priority - a.priority;
                return 0 !== c ? c : a.name !== b.name ? a.name < b.name ? -1 : 1 : a.index - b.index
            }

            function I(a, b, c, d) {
                if (b)throw ha("multidir", b.name, c.name, a, ga(d));
            }

            function v(a, c) {
                var d = b(c, !0);
                d && a.push({priority: 0, compile: function (a) {
                    var b = a.parent().length;
                    b && da(a.parent(), "ng-binding");
                    return function (a, c) {
                        var e = c.parent(), g = e.data("$binding") || [];
                        g.push(d);
                        e.data("$binding", g);
                        b || da(e, "ng-binding");
                        a.$watch(d, function (a) {
                            c[0].nodeValue = a
                        })
                    }
                }})
            }

            function S(a, b) {
                if ("srcdoc" == b)return u.HTML;
                var c = La(a);
                if ("xlinkHref" == b || "FORM" == c && "action" == b || "IMG" != c && ("src" == b || "ngSrc" == b))return u.RESOURCE_URL
            }

            function R(a, c, d, e) {
                var g = b(d, !0);
                if (g) {
                    if ("multiple" === e && "SELECT" === La(a))throw ha("selmulti", ga(a));
                    c.push({priority: 100, compile: function () {
                        return{pre: function (c, d, m) {
                            d = m.$$observers || (m.$$observers = {});
                            if (f.test(e))throw ha("nodomevents");
                            if (g = b(m[e], !0, S(a, e)))m[e] = g(c), (d[e] || (d[e] = [])).$$inter = !0, (m.$$observers && m.$$observers[e].$$scope || c).$watch(g, function (a, b) {
                                "class" === e && a != b ? m.$updateClass(a, b) : m.$set(e, a)
                            })
                        }}
                    }})
                }
            }

            function ob(a, b, c) {
                var d = b[0], e = b.length, g = d.parentNode, f, m;
                if (a)for (f = 0, m = a.length; f < m; f++)if (a[f] == d) {
                    a[f++] = c;
                    m = f + e - 1;
                    for (var h = a.length; f < h; f++, m++)m < h ? a[f] = a[m] : delete a[f];
                    a.length -= e - 1;
                    break
                }
                g && g.replaceChild(c, d);
                a = U.createDocumentFragment();
                a.appendChild(d);
                c[x.expando] = d[x.expando];
                d = 1;
                for (e = b.length; d < e; d++)g = b[d], x(g).remove(), a.appendChild(g), delete b[d];
                b[0] = c;
                b.length = 1
            }

            function tc(a, b) {
                return E(function () {
                    return a.apply(null, arguments)
                }, a, b)
            }

            var Kb = function (a, b) {
                this.$$element = a;
                this.$attr = b || {}
            };
            Kb.prototype = {$normalize: ma, $addClass: function (a) {
                a && 0 < a.length && K.addClass(this.$$element, a)
            }, $removeClass: function (a) {
                a && 0 < a.length && K.removeClass(this.$$element, a)
            }, $updateClass: function (a, b) {
                var c = uc(a, b), d = uc(b, a);
                0 === c.length ? K.removeClass(this.$$element, d) : 0 === d.length ? K.addClass(this.$$element, c) : K.setClass(this.$$element, c, d)
            }, $set: function (a, b, c, d) {
                var e = pc(this.$$element[0], a);
                e && (this.$$element.prop(a, b), d = e);
                this[a] = b;
                d ? this.$attr[a] = d : (d = this.$attr[a]) || (this.$attr[a] = d = ib(a, "-"));
                e = La(this.$$element);
                if ("A" === e && "href" === a || "IMG" === e && "src" === a)this[a] = b = X(b, "src" === a);
                !1 !== c && (null === b || b === s ? this.$$element.removeAttr(d) : this.$$element.attr(d, b));
                (c = this.$$observers) && q(c[a], function (a) {
                    try {
                        a(b)
                    } catch (c) {
                        l(c)
                    }
                })
            }, $observe: function (a, b) {
                var c = this, d = c.$$observers || (c.$$observers = {}), e = d[a] || (d[a] = []);
                e.push(b);
                J.$evalAsync(function () {
                    e.$$inter || b(c[a])
                });
                return b
            }};
            var Da = b.startSymbol(), oa = b.endSymbol(), Z = "{{" == Da || "}}" == oa ? Fa : function (a) {
                return a.replace(/\{\{/g, Da).replace(/}}/g, oa)
            }, V = /^ngAttr[A-Z]/;
            return z
        }]
    }

    function ma(b) {
        return Wa(b.replace(ue, ""))
    }

    function uc(b, a) {
        var c = "", d = b.split(/\s+/), e = a.split(/\s+/), g = 0;
        a:for (; g < d.length; g++) {
            for (var f = d[g], k = 0; k < e.length; k++)if (f == e[k])continue a;
            c += (0 < c.length ? " " : "") + f
        }
        return c
    }

    function Pd() {
        var b = {}, a = /^(\S+)(\s+as\s+(\w+))?$/;
        this.register = function (a, d) {
            Ba(a, "controller");
            T(a) ? E(b, a) : b[a] = d
        };
        this.$get = ["$injector", "$window", function (c, d) {
            return function (e, g) {
                var f, k, m;
                y(e) && (f = e.match(a), k = f[1], m = f[3], e = b.hasOwnProperty(k) ? b[k] : ec(g.$scope, k, !0) || ec(d, k, !0), Ua(e, k, !0));
                f = c.instantiate(e, g);
                if (m) {
                    if (!g || "object" !== typeof g.$scope)throw v("$controller")("noscp", k || e.name, m);
                    g.$scope[m] = f
                }
                return f
            }
        }]
    }

    function Qd() {
        this.$get = ["$window", function (b) {
            return x(b.document)
        }]
    }

    function Rd() {
        this.$get = ["$log", function (b) {
            return function (a, c) {
                b.error.apply(b, arguments)
            }
        }]
    }

    function vc(b) {
        var a = {}, c, d, e;
        if (!b)return a;
        q(b.split("\n"), function (b) {
            e = b.indexOf(":");
            c = I(aa(b.substr(0, e)));
            d = aa(b.substr(e + 1));
            c && (a[c] = a[c] ? a[c] + (", " + d) : d)
        });
        return a
    }

    function wc(b) {
        var a = T(b) ? b : s;
        return function (c) {
            a || (a = vc(b));
            return c ? a[I(c)] || null : a
        }
    }

    function xc(b, a, c) {
        if (O(c))return c(b, a);
        q(c, function (c) {
            b = c(b, a)
        });
        return b
    }

    function Ud() {
        var b = /^\s*(\[|\{[^\{])/, a = /[\}\]]\s*$/, c = /^\)\]\}',?\n/, d = {"Content-Type": "application/json;charset=utf-8"}, e = this.defaults = {transformResponse: [function (d) {
            y(d) && (d = d.replace(c, ""), b.test(d) && a.test(d) && (d = $b(d)));
            return d
        }], transformRequest: [function (a) {
            return T(a) && "[object File]" !== xa.call(a) && "[object Blob]" !== xa.call(a) ? sa(a) : a
        }], headers: {common: {Accept: "application/json, text/plain, */*"}, post: ka(d), put: ka(d), patch: ka(d)}, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN"}, g = this.interceptors = [], f = this.responseInterceptors = [];
        this.$get = ["$httpBackend", "$browser", "$cacheFactory", "$rootScope", "$q", "$injector", function (a, b, c, d, p, n) {
            function r(a) {
                function b(a) {
                    var d = E({}, a, {data: xc(a.data, a.headers, c.transformResponse)});
                    return 200 <= a.status && 300 > a.status ? d : p.reject(d)
                }

                var c = {method: "get", transformRequest: e.transformRequest, transformResponse: e.transformResponse}, d = function (a) {
                    var b = e.headers, c = E({}, a.headers), d, g, b = E({}, b.common, b[I(a.method)]);
                    a:for (d in b) {
                        a = I(d);
                        for (g in c)if (I(g) === a)continue a;
                        c[d] = b[d]
                    }
                    (function (a) {
                        var b;
                        q(a, function (c, d) {
                            O(c) && (b = c(), null != b ? a[d] = b : delete a[d])
                        })
                    })(c);
                    return c
                }(a);
                E(c, a);
                c.headers = d;
                c.method = Ha(c.method);
                var g = [function (a) {
                    d = a.headers;
                    var c = xc(a.data, wc(d), a.transformRequest);
                    F(c) && q(d, function (a, b) {
                        "content-type" === I(b) && delete d[b]
                    });
                    F(a.withCredentials) && !F(e.withCredentials) && (a.withCredentials = e.withCredentials);
                    return t(a, c, d).then(b, b)
                }, s], f = p.when(c);
                for (q(u, function (a) {
                    (a.request || a.requestError) && g.unshift(a.request, a.requestError);
                    (a.response || a.responseError) && g.push(a.response, a.responseError)
                }); g.length;) {
                    a = g.shift();
                    var m = g.shift(), f = f.then(a, m)
                }
                f.success = function (a) {
                    f.then(function (b) {
                        a(b.data, b.status, b.headers, c)
                    });
                    return f
                };
                f.error = function (a) {
                    f.then(null, function (b) {
                        a(b.data, b.status, b.headers, c)
                    });
                    return f
                };
                return f
            }

            function t(c, g, f) {
                function h(a, b, c, e) {
                    D && (200 <= a && 300 > a ? D.put(x, [a, b, vc(c), e]) : D.remove(x));
                    n(b, a, c, e);
                    d.$$phase || d.$apply()
                }

                function n(a, b, d, e) {
                    b = Math.max(b, 0);
                    (200 <= b && 300 > b ? u.resolve : u.reject)({data: a, status: b, headers: wc(d), config: c, statusText: e})
                }

                function t() {
                    var a = Pa(r.pendingRequests, c);
                    -1 !== a && r.pendingRequests.splice(a, 1)
                }

                var u = p.defer(), q = u.promise, D, H, x = J(c.url, c.params);
                r.pendingRequests.push(c);
                q.then(t, t);
                (c.cache || e.cache) && (!1 !== c.cache && "GET" == c.method) && (D = T(c.cache) ? c.cache : T(e.cache) ? e.cache : w);
                if (D)if (H = D.get(x), B(H)) {
                    if (H.then)return H.then(t, t), H;
                    L(H) ? n(H[1], H[0], ka(H[2]), H[3]) : n(H, 200, {}, "OK")
                } else D.put(x, q);
                F(H) && ((H = Lb(c.url) ? b.cookies()[c.xsrfCookieName || e.xsrfCookieName] : s) && (f[c.xsrfHeaderName || e.xsrfHeaderName] = H), a(c.method, x, g, h, f, c.timeout, c.withCredentials, c.responseType));
                return q
            }

            function J(a, b) {
                if (!b)return a;
                var c = [];
                Tc(b, function (a, b) {
                    null === a || F(a) || (L(a) || (a = [a]), q(a, function (a) {
                        T(a) && (a = sa(a));
                        c.push(Aa(b) + "=" + Aa(a))
                    }))
                });
                0 < c.length && (a += (-1 == a.indexOf("?") ? "?" : "&") + c.join("&"));
                return a
            }

            var w = c("$http"), u = [];
            q(g, function (a) {
                u.unshift(y(a) ? n.get(a) : n.invoke(a))
            });
            q(f, function (a, b) {
                var c = y(a) ? n.get(a) : n.invoke(a);
                u.splice(b, 0, {response: function (a) {
                    return c(p.when(a))
                }, responseError: function (a) {
                    return c(p.reject(a))
                }})
            });
            r.pendingRequests = [];
            (function (a) {
                q(arguments, function (a) {
                    r[a] = function (b, c) {
                        return r(E(c || {}, {method: a, url: b}))
                    }
                })
            })("get", "delete", "head", "jsonp");
            (function (a) {
                q(arguments, function (a) {
                    r[a] = function (b, c, d) {
                        return r(E(d || {}, {method: a, url: b, data: c}))
                    }
                })
            })("post", "put");
            r.defaults = e;
            return r
        }]
    }

    function ve(b) {
        if (8 >= P && (!b.match(/^(get|post|head|put|delete|options)$/i) || !S.XMLHttpRequest))return new S.ActiveXObject("Microsoft.XMLHTTP");
        if (S.XMLHttpRequest)return new S.XMLHttpRequest;
        throw v("$httpBackend")("noxhr");
    }

    function Vd() {
        this.$get = ["$browser", "$window", "$document", function (b, a, c) {
            return we(b, ve, b.defer, a.angular.callbacks, c[0])
        }]
    }

    function we(b, a, c, d, e) {
        function g(a, b, c) {
            var g = e.createElement("script"), f = null;
            g.type = "text/javascript";
            g.src = a;
            g.async = !0;
            f = function (a) {
                Xa(g, "load", f);
                Xa(g, "error", f);
                e.body.removeChild(g);
                g = null;
                var k = -1, t = "unknown";
                a && ("load" !== a.type || d[b].called || (a = {type: "error"}), t = a.type, k = "error" === a.type ? 404 : 200);
                c && c(k, t)
            };
            pb(g, "load", f);
            pb(g, "error", f);
            8 >= P && (g.onreadystatechange = function () {
                y(g.readyState) && /loaded|complete/.test(g.readyState) && (g.onreadystatechange = null, f({type: "load"}))
            });
            e.body.appendChild(g);
            return f
        }

        var f = -1;
        return function (e, m, h, l, p, n, r, t) {
            function J() {
                u = f;
                X && X();
                z && z.abort()
            }

            function w(a, d, e, g, f) {
                N && c.cancel(N);
                X = z = null;
                0 === d && (d = e ? 200 : "file" == ta(m).protocol ? 404 : 0);
                a(1223 === d ? 204 : d, e, g, f || "");
                b.$$completeOutstandingRequest(A)
            }

            var u;
            b.$$incOutstandingRequestCount();
            m = m || b.url();
            if ("jsonp" == I(e)) {
                var K = "_" + (d.counter++).toString(36);
                d[K] = function (a) {
                    d[K].data = a;
                    d[K].called = !0
                };
                var X = g(m.replace("JSON_CALLBACK", "angular.callbacks." + K), K, function (a, b) {
                    w(l, a, d[K].data, "", b);
                    d[K] = A
                })
            } else {
                var z = a(e);
                z.open(e, m, !0);
                q(p, function (a, b) {
                    B(a) && z.setRequestHeader(b, a)
                });
                z.onreadystatechange = function () {
                    if (z && 4 == z.readyState) {
                        var a = null, b = null, c = "";
                        u !== f && (a = z.getAllResponseHeaders(), b = "response"in z ? z.response : z.responseText);
                        u === f && 10 > P || (c = z.statusText);
                        w(l, u || z.status, b, a, c)
                    }
                };
                r && (z.withCredentials = !0);
                if (t)try {
                    z.responseType = t
                } catch (da) {
                    if ("json" !== t)throw da;
                }
                z.send(h || null)
            }
            if (0 < n)var N = c(J, n); else n && n.then && n.then(J)
        }
    }

    function Sd() {
        var b = "{{", a = "}}";
        this.startSymbol = function (a) {
            return a ? (b = a, this) : b
        };
        this.endSymbol = function (b) {
            return b ? (a = b, this) : a
        };
        this.$get = ["$parse", "$exceptionHandler", "$sce", function (c, d, e) {
            function g(g, h, l) {
                for (var p, n, r = 0, t = [], J = g.length, w = !1, u = []; r < J;)-1 != (p = g.indexOf(b, r)) && -1 != (n = g.indexOf(a, p + f)) ? (r != p && t.push(g.substring(r, p)), t.push(r = c(w = g.substring(p + f, n))), r.exp = w, r = n + k, w = !0) : (r != J && t.push(g.substring(r)), r = J);
                (J = t.length) || (t.push(""), J = 1);
                if (l && 1 < t.length)throw yc("noconcat", g);
                if (!h || w)return u.length = J, r = function (a) {
                    try {
                        for (var b = 0, c = J, f; b < c; b++) {
                            if ("function" == typeof(f = t[b]))if (f = f(a), f = l ? e.getTrusted(l, f) : e.valueOf(f), null == f)f = ""; else switch (typeof f) {
                                case"string":
                                    break;
                                case"number":
                                    f = "" + f;
                                    break;
                                default:
                                    f = sa(f)
                            }
                            u[b] = f
                        }
                        return u.join("")
                    } catch (k) {
                        a = yc("interr", g, k.toString()), d(a)
                    }
                }, r.exp = g, r.parts = t, r
            }

            var f = b.length, k = a.length;
            g.startSymbol = function () {
                return b
            };
            g.endSymbol = function () {
                return a
            };
            return g
        }]
    }

    function Td() {
        this.$get = ["$rootScope", "$window", "$q", function (b, a, c) {
            function d(d, f, k, m) {
                var h = a.setInterval, l = a.clearInterval, p = c.defer(), n = p.promise, r = 0, t = B(m) && !m;
                k = B(k) ? k : 0;
                n.then(null, null, d);
                n.$$intervalId = h(function () {
                    p.notify(r++);
                    0 < k && r >= k && (p.resolve(r), l(n.$$intervalId), delete e[n.$$intervalId]);
                    t || b.$apply()
                }, f);
                e[n.$$intervalId] = p;
                return n
            }

            var e = {};
            d.cancel = function (b) {
                return b && b.$$intervalId in e ? (e[b.$$intervalId].reject("canceled"), a.clearInterval(b.$$intervalId), delete e[b.$$intervalId], !0) : !1
            };
            return d
        }]
    }

    function bd() {
        this.$get = function () {
            return{id: "en-us", NUMBER_FORMATS: {DECIMAL_SEP: ".", GROUP_SEP: ",", PATTERNS: [
                {minInt: 1, minFrac: 0, maxFrac: 3, posPre: "", posSuf: "", negPre: "-", negSuf: "", gSize: 3, lgSize: 3},
                {minInt: 1, minFrac: 2, maxFrac: 2, posPre: "\u00a4", posSuf: "", negPre: "(\u00a4", negSuf: ")", gSize: 3, lgSize: 3}
            ], CURRENCY_SYM: "$"}, DATETIME_FORMATS: {MONTH: "January February March April May June July August September October November December".split(" "), SHORTMONTH: "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "), DAY: "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), SHORTDAY: "Sun Mon Tue Wed Thu Fri Sat".split(" "), AMPMS: ["AM", "PM"], medium: "MMM d, y h:mm:ss a", "short": "M/d/yy h:mm a", fullDate: "EEEE, MMMM d, y", longDate: "MMMM d, y", mediumDate: "MMM d, y", shortDate: "M/d/yy", mediumTime: "h:mm:ss a", shortTime: "h:mm a"}, pluralCat: function (b) {
                return 1 === b ? "one" : "other"
            }}
        }
    }

    function Mb(b) {
        b = b.split("/");
        for (var a = b.length; a--;)b[a] = hb(b[a]);
        return b.join("/")
    }

    function zc(b, a, c) {
        b = ta(b, c);
        a.$$protocol = b.protocol;
        a.$$host = b.hostname;
        a.$$port = Z(b.port) || xe[b.protocol] || null
    }

    function Ac(b, a, c) {
        var d = "/" !== b.charAt(0);
        d && (b = "/" + b);
        b = ta(b, c);
        a.$$path = decodeURIComponent(d && "/" === b.pathname.charAt(0) ? b.pathname.substring(1) : b.pathname);
        a.$$search = bc(b.search);
        a.$$hash = decodeURIComponent(b.hash);
        a.$$path && "/" != a.$$path.charAt(0) && (a.$$path = "/" + a.$$path)
    }

    function pa(b, a) {
        if (0 === a.indexOf(b))return a.substr(b.length)
    }

    function ab(b) {
        var a = b.indexOf("#");
        return-1 == a ? b : b.substr(0, a)
    }

    function Nb(b) {
        return b.substr(0, ab(b).lastIndexOf("/") + 1)
    }

    function Bc(b, a) {
        this.$$html5 = !0;
        a = a || "";
        var c = Nb(b);
        zc(b, this, b);
        this.$$parse = function (a) {
            var e = pa(c, a);
            if (!y(e))throw Ob("ipthprfx", a, c);
            Ac(e, this, b);
            this.$$path || (this.$$path = "/");
            this.$$compose()
        };
        this.$$compose = function () {
            var a = Ab(this.$$search), b = this.$$hash ? "#" + hb(this.$$hash) : "";
            this.$$url = Mb(this.$$path) + (a ? "?" + a : "") + b;
            this.$$absUrl = c + this.$$url.substr(1)
        };
        this.$$rewrite = function (d) {
            var e;
            if ((e = pa(b, d)) !== s)return d = e, (e = pa(a, e)) !== s ? c + (pa("/", e) || e) : b + d;
            if ((e = pa(c, d)) !== s)return c + e;
            if (c == d + "/")return c
        }
    }

    function Pb(b, a) {
        var c = Nb(b);
        zc(b, this, b);
        this.$$parse = function (d) {
            var e = pa(b, d) || pa(c, d), e = "#" == e.charAt(0) ? pa(a, e) : this.$$html5 ? e : "";
            if (!y(e))throw Ob("ihshprfx", d, a);
            Ac(e, this, b);
            d = this.$$path;
            var g = /^\/[A-Z]:(\/.*)/;
            0 === e.indexOf(b) && (e = e.replace(b, ""));
            g.exec(e) || (d = (e = g.exec(d)) ? e[1] : d);
            this.$$path = d;
            this.$$compose()
        };
        this.$$compose = function () {
            var c = Ab(this.$$search), e = this.$$hash ? "#" + hb(this.$$hash) : "";
            this.$$url = Mb(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + (this.$$url ? a + this.$$url : "")
        };
        this.$$rewrite = function (a) {
            if (ab(b) == ab(a))return a
        }
    }

    function Qb(b, a) {
        this.$$html5 = !0;
        Pb.apply(this, arguments);
        var c = Nb(b);
        this.$$rewrite = function (d) {
            var e;
            if (b == ab(d))return d;
            if (e = pa(c, d))return b + a + e;
            if (c === d + "/")return c
        };
        this.$$compose = function () {
            var c = Ab(this.$$search), e = this.$$hash ? "#" + hb(this.$$hash) : "";
            this.$$url = Mb(this.$$path) + (c ? "?" + c : "") + e;
            this.$$absUrl = b + a + this.$$url
        }
    }

    function qb(b) {
        return function () {
            return this[b]
        }
    }

    function Cc(b, a) {
        return function (c) {
            if (F(c))return this[b];
            this[b] = a(c);
            this.$$compose();
            return this
        }
    }

    function Wd() {
        var b = "", a = !1;
        this.hashPrefix = function (a) {
            return B(a) ? (b = a, this) : b
        };
        this.html5Mode = function (b) {
            return B(b) ? (a = b, this) : a
        };
        this.$get = ["$rootScope", "$browser", "$sniffer", "$rootElement", function (c, d, e, g) {
            function f(a) {
                c.$broadcast("$locationChangeSuccess", k.absUrl(), a)
            }

            var k, m, h = d.baseHref(), l = d.url(), p;
            a ? (p = l.substring(0, l.indexOf("/", l.indexOf("//") + 2)) + (h || "/"), m = e.history ? Bc : Qb) : (p = ab(l), m = Pb);
            k = new m(p, "#" + b);
            k.$$parse(k.$$rewrite(l));
            g.on("click", function (a) {
                if (!a.ctrlKey && !a.metaKey && 2 != a.which) {
                    for (var e = x(a.target); "a" !== I(e[0].nodeName);)if (e[0] === g[0] || !(e = e.parent())[0])return;
                    var f = e.prop("href");
                    T(f) && "[object SVGAnimatedString]" === f.toString() && (f = ta(f.animVal).href);
                    if (m === Qb) {
                        var h = e.attr("href") || e.attr("xlink:href");
                        if (0 > h.indexOf("://"))if (f = "#" + b, "/" == h[0])f = p + f + h; else if ("#" == h[0])f = p + f + (k.path() || "/") + h; else {
                            for (var l = k.path().split("/"), h = h.split("/"), n = 0; n < h.length; n++)"." != h[n] && (".." == h[n] ? l.pop() : h[n].length && l.push(h[n]));
                            f = p + f + l.join("/")
                        }
                    }
                    l = k.$$rewrite(f);
                    f && (!e.attr("target") && l && !a.isDefaultPrevented()) && (a.preventDefault(), l != d.url() && (k.$$parse(l), c.$apply(), S.angular["ff-684208-preventDefault"] = !0))
                }
            });
            k.absUrl() != l && d.url(k.absUrl(), !0);
            d.onUrlChange(function (a) {
                k.absUrl() != a && (c.$evalAsync(function () {
                    var b = k.absUrl();
                    k.$$parse(a);
                    c.$broadcast("$locationChangeStart", a, b).defaultPrevented ? (k.$$parse(b), d.url(b)) : f(b)
                }), c.$$phase || c.$digest())
            });
            var n = 0;
            c.$watch(function () {
                var a = d.url(), b = k.$$replace;
                n && a == k.absUrl() || (n++, c.$evalAsync(function () {
                    c.$broadcast("$locationChangeStart", k.absUrl(), a).defaultPrevented ? k.$$parse(a) : (d.url(k.absUrl(), b), f(a))
                }));
                k.$$replace = !1;
                return n
            });
            return k
        }]
    }

    function Xd() {
        var b = !0, a = this;
        this.debugEnabled = function (a) {
            return B(a) ? (b = a, this) : b
        };
        this.$get = ["$window", function (c) {
            function d(a) {
                a instanceof Error && (a.stack ? a = a.message && -1 === a.stack.indexOf(a.message) ? "Error: " + a.message + "\n" + a.stack : a.stack : a.sourceURL && (a = a.message + "\n" + a.sourceURL + ":" + a.line));
                return a
            }

            function e(a) {
                var b = c.console || {}, e = b[a] || b.log || A;
                a = !1;
                try {
                    a = !!e.apply
                } catch (m) {
                }
                return a ? function () {
                    var a = [];
                    q(arguments, function (b) {
                        a.push(d(b))
                    });
                    return e.apply(b, a)
                } : function (a, b) {
                    e(a, null == b ? "" : b)
                }
            }

            return{log: e("log"), info: e("info"), warn: e("warn"), error: e("error"), debug: function () {
                var c = e("debug");
                return function () {
                    b && c.apply(a, arguments)
                }
            }()}
        }]
    }

    function qa(b, a) {
        if ("__defineGetter__" === b || "__defineSetter__" === b || "__lookupGetter__" === b || "__lookupSetter__" === b || "__proto__" === b)throw ia("isecfld", a);
        return b
    }

    function Ma(b, a) {
        if (b) {
            if (b.constructor === b)throw ia("isecfn", a);
            if (b.document && b.location && b.alert && b.setInterval)throw ia("isecwindow", a);
            if (b.children && (b.nodeName || b.prop && b.attr && b.find))throw ia("isecdom", a);
            if (b === Object)throw ia("isecobj", a);
        }
        return b
    }

    function rb(b, a, c, d, e) {
        e = e || {};
        a = a.split(".");
        for (var g, f = 0; 1 < a.length; f++) {
            g = qa(a.shift(), d);
            var k = b[g];
            k || (k = {}, b[g] = k);
            b = k;
            b.then && e.unwrapPromises && (ua(d), "$$v"in b || function (a) {
                a.then(function (b) {
                    a.$$v = b
                })
            }(b), b.$$v === s && (b.$$v = {}), b = b.$$v)
        }
        g = qa(a.shift(), d);
        Ma(b, d);
        Ma(b[g], d);
        return b[g] = c
    }

    function Dc(b, a, c, d, e, g, f) {
        qa(b, g);
        qa(a, g);
        qa(c, g);
        qa(d, g);
        qa(e, g);
        return f.unwrapPromises ? function (f, m) {
            var h = m && m.hasOwnProperty(b) ? m : f, l;
            if (null == h)return h;
            (h = h[b]) && h.then && (ua(g), "$$v"in h || (l = h, l.$$v = s, l.then(function (a) {
                l.$$v = a
            })), h = h.$$v);
            if (!a)return h;
            if (null == h)return s;
            (h = h[a]) && h.then && (ua(g), "$$v"in h || (l = h, l.$$v = s, l.then(function (a) {
                l.$$v = a
            })), h = h.$$v);
            if (!c)return h;
            if (null == h)return s;
            (h = h[c]) && h.then && (ua(g), "$$v"in h || (l = h, l.$$v = s, l.then(function (a) {
                l.$$v = a
            })), h = h.$$v);
            if (!d)return h;
            if (null == h)return s;
            (h = h[d]) && h.then && (ua(g), "$$v"in h || (l = h, l.$$v = s, l.then(function (a) {
                l.$$v = a
            })), h = h.$$v);
            if (!e)return h;
            if (null == h)return s;
            (h = h[e]) && h.then && (ua(g), "$$v"in h || (l = h, l.$$v = s, l.then(function (a) {
                l.$$v = a
            })), h = h.$$v);
            return h
        } : function (g, f) {
            var h = f && f.hasOwnProperty(b) ? f : g;
            if (null == h)return h;
            h = h[b];
            if (!a)return h;
            if (null == h)return s;
            h = h[a];
            if (!c)return h;
            if (null == h)return s;
            h = h[c];
            if (!d)return h;
            if (null == h)return s;
            h = h[d];
            return e ? null == h ? s : h = h[e] : h
        }
    }

    function Ec(b, a, c) {
        if (Rb.hasOwnProperty(b))return Rb[b];
        var d = b.split("."), e = d.length, g;
        if (a.csp)g = 6 > e ? Dc(d[0], d[1], d[2], d[3], d[4], c, a) : function (b, g) {
            var f = 0, k;
            do k = Dc(d[f++], d[f++], d[f++], d[f++], d[f++], c, a)(b, g), g = s, b = k; while (f < e);
            return k
        }; else {
            var f = "var p;\n";
            q(d, function (b, d) {
                qa(b, c);
                f += "if(s == null) return undefined;\ns=" + (d ? "s" : '((k&&k.hasOwnProperty("' + b + '"))?k:s)') + '["' + b + '"];\n' + (a.unwrapPromises ? 'if (s && s.then) {\n pw("' + c.replace(/(["\r\n])/g, "\\$1") + '");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n' : "")
            });
            var f = f + "return s;", k = new Function("s", "k", "pw", f);
            k.toString = $(f);
            g = a.unwrapPromises ? function (a, b) {
                return k(a, b, ua)
            } : k
        }
        "hasOwnProperty" !== b && (Rb[b] = g);
        return g
    }

    function Yd() {
        var b = {}, a = {csp: !1, unwrapPromises: !1, logPromiseWarnings: !0};
        this.unwrapPromises = function (b) {
            return B(b) ? (a.unwrapPromises = !!b, this) : a.unwrapPromises
        };
        this.logPromiseWarnings = function (b) {
            return B(b) ? (a.logPromiseWarnings = b, this) : a.logPromiseWarnings
        };
        this.$get = ["$filter", "$sniffer", "$log", function (c, d, e) {
            a.csp = d.csp;
            ua = function (b) {
                a.logPromiseWarnings && !Fc.hasOwnProperty(b) && (Fc[b] = !0, e.warn("[$parse] Promise found in the expression `" + b + "`. Automatic unwrapping of promises in Angular expressions is deprecated."))
            };
            return function (d) {
                var e;
                switch (typeof d) {
                    case"string":
                        if (b.hasOwnProperty(d))return b[d];
                        e = new Sb(a);
                        e = (new bb(e, c, a)).parse(d);
                        "hasOwnProperty" !== d && (b[d] = e);
                        return e;
                    case"function":
                        return d;
                    default:
                        return A
                }
            }
        }]
    }

    function $d() {
        this.$get = ["$rootScope", "$exceptionHandler", function (b, a) {
            return ye(function (a) {
                b.$evalAsync(a)
            }, a)
        }]
    }

    function ye(b, a) {
        function c(a) {
            return a
        }

        function d(a) {
            return f(a)
        }

        var e = function () {
            var f = [], h, l;
            return l = {resolve: function (a) {
                if (f) {
                    var c = f;
                    f = s;
                    h = g(a);
                    c.length && b(function () {
                        for (var a, b = 0, d = c.length; b < d; b++)a = c[b], h.then(a[0], a[1], a[2])
                    })
                }
            }, reject: function (a) {
                l.resolve(k(a))
            }, notify: function (a) {
                if (f) {
                    var c = f;
                    f.length && b(function () {
                        for (var b, d = 0, e = c.length; d < e; d++)b = c[d], b[2](a)
                    })
                }
            }, promise: {then: function (b, g, k) {
                var l = e(), J = function (d) {
                    try {
                        l.resolve((O(b) ? b : c)(d))
                    } catch (e) {
                        l.reject(e), a(e)
                    }
                }, w = function (b) {
                    try {
                        l.resolve((O(g) ? g : d)(b))
                    } catch (c) {
                        l.reject(c), a(c)
                    }
                }, u = function (b) {
                    try {
                        l.notify((O(k) ? k : c)(b))
                    } catch (d) {
                        a(d)
                    }
                };
                f ? f.push([J, w, u]) : h.then(J, w, u);
                return l.promise
            }, "catch": function (a) {
                return this.then(null, a)
            }, "finally": function (a) {
                function b(a, c) {
                    var d = e();
                    c ? d.resolve(a) : d.reject(a);
                    return d.promise
                }

                function d(e, g) {
                    var f = null;
                    try {
                        f = (a || c)()
                    } catch (k) {
                        return b(k, !1)
                    }
                    return f && O(f.then) ? f.then(function () {
                        return b(e, g)
                    }, function (a) {
                        return b(a, !1)
                    }) : b(e, g)
                }

                return this.then(function (a) {
                    return d(a, !0)
                }, function (a) {
                    return d(a, !1)
                })
            }}}
        }, g = function (a) {
            return a && O(a.then) ? a : {then: function (c) {
                var d = e();
                b(function () {
                    d.resolve(c(a))
                });
                return d.promise
            }}
        }, f = function (a) {
            var b = e();
            b.reject(a);
            return b.promise
        }, k = function (c) {
            return{then: function (g, f) {
                var k = e();
                b(function () {
                    try {
                        k.resolve((O(f) ? f : d)(c))
                    } catch (b) {
                        k.reject(b), a(b)
                    }
                });
                return k.promise
            }}
        };
        return{defer: e, reject: f, when: function (k, h, l, p) {
            var n = e(), r, t = function (b) {
                try {
                    return(O(h) ? h : c)(b)
                } catch (d) {
                    return a(d), f(d)
                }
            }, J = function (b) {
                try {
                    return(O(l) ? l : d)(b)
                } catch (c) {
                    return a(c), f(c)
                }
            }, w = function (b) {
                try {
                    return(O(p) ? p : c)(b)
                } catch (d) {
                    a(d)
                }
            };
            b(function () {
                g(k).then(function (a) {
                    r || (r = !0, n.resolve(g(a).then(t, J, w)))
                }, function (a) {
                    r || (r = !0, n.resolve(J(a)))
                }, function (a) {
                    r || n.notify(w(a))
                })
            });
            return n.promise
        }, all: function (a) {
            var b = e(), c = 0, d = L(a) ? [] : {};
            q(a, function (a, e) {
                c++;
                g(a).then(function (a) {
                    d.hasOwnProperty(e) || (d[e] = a, --c || b.resolve(d))
                }, function (a) {
                    d.hasOwnProperty(e) || b.reject(a)
                })
            });
            0 === c && b.resolve(d);
            return b.promise
        }}
    }

    function ge() {
        this.$get = ["$window", "$timeout", function (b, a) {
            var c = b.requestAnimationFrame || b.webkitRequestAnimationFrame || b.mozRequestAnimationFrame, d = b.cancelAnimationFrame || b.webkitCancelAnimationFrame || b.mozCancelAnimationFrame || b.webkitCancelRequestAnimationFrame, e = !!c, g = e ? function (a) {
                var b = c(a);
                return function () {
                    d(b)
                }
            } : function (b) {
                var c = a(b, 16.66, !1);
                return function () {
                    a.cancel(c)
                }
            };
            g.supported = e;
            return g
        }]
    }

    function Zd() {
        var b = 10, a = v("$rootScope"), c = null;
        this.digestTtl = function (a) {
            arguments.length && (b = a);
            return b
        };
        this.$get = ["$injector", "$exceptionHandler", "$parse", "$browser", function (d, e, g, f) {
            function k() {
                this.$id = eb();
                this.$$phase = this.$parent = this.$$watchers = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = null;
                this["this"] = this.$root = this;
                this.$$destroyed = !1;
                this.$$asyncQueue = [];
                this.$$postDigestQueue = [];
                this.$$listeners = {};
                this.$$listenerCount = {};
                this.$$isolateBindings = {}
            }

            function m(b) {
                if (n.$$phase)throw a("inprog", n.$$phase);
                n.$$phase = b
            }

            function h(a, b) {
                var c = g(a);
                Ua(c, b);
                return c
            }

            function l(a, b, c) {
                do a.$$listenerCount[c] -= b, 0 === a.$$listenerCount[c] && delete a.$$listenerCount[c]; while (a = a.$parent)
            }

            function p() {
            }

            k.prototype = {constructor: k, $new: function (a) {
                a ? (a = new k, a.$root = this.$root, a.$$asyncQueue = this.$$asyncQueue, a.$$postDigestQueue = this.$$postDigestQueue) : (this.$$childScopeClass || (this.$$childScopeClass = function () {
                    this.$$watchers = this.$$nextSibling = this.$$childHead = this.$$childTail = null;
                    this.$$listeners = {};
                    this.$$listenerCount = {};
                    this.$id = eb();
                    this.$$childScopeClass = null
                }, this.$$childScopeClass.prototype = this), a = new this.$$childScopeClass);
                a["this"] = a;
                a.$parent = this;
                a.$$prevSibling = this.$$childTail;
                this.$$childHead ? this.$$childTail = this.$$childTail.$$nextSibling = a : this.$$childHead = this.$$childTail = a;
                return a
            }, $watch: function (a, b, d) {
                var e = h(a, "watch"), g = this.$$watchers, f = {fn: b, last: p, get: e, exp: a, eq: !!d};
                c = null;
                if (!O(b)) {
                    var k = h(b || A, "listener");
                    f.fn = function (a, b, c) {
                        k(c)
                    }
                }
                if ("string" == typeof a && e.constant) {
                    var m = f.fn;
                    f.fn = function (a, b, c) {
                        m.call(this, a, b, c);
                        Qa(g, f)
                    }
                }
                g || (g = this.$$watchers = []);
                g.unshift(f);
                return function () {
                    Qa(g, f);
                    c = null
                }
            }, $watchCollection: function (a, b) {
                var c = this, d, e, f, k = 1 < b.length, h = 0, m = g(a), l = [], n = {}, p = !0, q = 0;
                return this.$watch(function () {
                    d = m(c);
                    var a, b;
                    if (T(d))if (db(d))for (e !== l && (e = l, q = e.length = 0, h++), a = d.length, q !== a && (h++, e.length = q = a), b = 0; b < a; b++)e[b] !== e[b] && d[b] !== d[b] || e[b] === d[b] || (h++, e[b] = d[b]); else {
                        e !== n && (e = n = {}, q = 0, h++);
                        a = 0;
                        for (b in d)d.hasOwnProperty(b) && (a++, e.hasOwnProperty(b) ? e[b] !== d[b] && (h++, e[b] = d[b]) : (q++, e[b] = d[b], h++));
                        if (q > a)for (b in h++, e)e.hasOwnProperty(b) && !d.hasOwnProperty(b) && (q--, delete e[b])
                    } else e !== d && (e = d, h++);
                    return h
                }, function () {
                    p ? (p = !1, b(d, d, c)) : b(d, f, c);
                    if (k)if (T(d))if (db(d)) {
                        f = Array(d.length);
                        for (var a = 0; a < d.length; a++)f[a] = d[a]
                    } else for (a in f = {}, d)gb.call(d, a) && (f[a] = d[a]); else f = d
                })
            }, $digest: function () {
                var d, g, f, k, h = this.$$asyncQueue, l = this.$$postDigestQueue, q, z, s = b, N, M = [], x, C, D;
                m("$digest");
                c = null;
                do {
                    z = !1;
                    for (N = this; h.length;) {
                        try {
                            D = h.shift(), D.scope.$eval(D.expression)
                        } catch (H) {
                            n.$$phase = null, e(H)
                        }
                        c = null
                    }
                    a:do {
                        if (k = N.$$watchers)for (q = k.length; q--;)try {
                            if (d = k[q])if ((g = d.get(N)) !== (f = d.last) && !(d.eq ? ya(g, f) : "number" === typeof g && "number" === typeof f && isNaN(g) && isNaN(f)))z = !0, c = d, d.last = d.eq ? Ga(g, null) : g, d.fn(g, f === p ? g : f, N), 5 > s && (x = 4 - s, M[x] || (M[x] = []), C = O(d.exp) ? "fn: " + (d.exp.name || d.exp.toString()) : d.exp, C += "; newVal: " + sa(g) + "; oldVal: " + sa(f), M[x].push(C)); else if (d === c) {
                                z = !1;
                                break a
                            }
                        } catch (B) {
                            n.$$phase = null, e(B)
                        }
                        if (!(k = N.$$childHead || N !== this && N.$$nextSibling))for (; N !== this && !(k = N.$$nextSibling);)N = N.$parent
                    } while (N = k);
                    if ((z || h.length) && !s--)throw n.$$phase = null, a("infdig", b, sa(M));
                } while (z || h.length);
                for (n.$$phase = null; l.length;)try {
                    l.shift()()
                } catch (v) {
                    e(v)
                }
            }, $destroy: function () {
                if (!this.$$destroyed) {
                    var a = this.$parent;
                    this.$broadcast("$destroy");
                    this.$$destroyed = !0;
                    this !== n && (q(this.$$listenerCount, zb(null, l, this)), a.$$childHead == this && (a.$$childHead = this.$$nextSibling), a.$$childTail == this && (a.$$childTail = this.$$prevSibling), this.$$prevSibling && (this.$$prevSibling.$$nextSibling = this.$$nextSibling), this.$$nextSibling && (this.$$nextSibling.$$prevSibling = this.$$prevSibling), this.$parent = this.$$nextSibling = this.$$prevSibling = this.$$childHead = this.$$childTail = this.$root = null, this.$$listeners = {}, this.$$watchers = this.$$asyncQueue = this.$$postDigestQueue = [], this.$destroy = this.$digest = this.$apply = A, this.$on = this.$watch = function () {
                        return A
                    })
                }
            }, $eval: function (a, b) {
                return g(a)(this, b)
            }, $evalAsync: function (a) {
                n.$$phase || n.$$asyncQueue.length || f.defer(function () {
                    n.$$asyncQueue.length && n.$digest()
                });
                this.$$asyncQueue.push({scope: this, expression: a})
            }, $$postDigest: function (a) {
                this.$$postDigestQueue.push(a)
            }, $apply: function (a) {
                try {
                    return m("$apply"), this.$eval(a)
                } catch (b) {
                    e(b)
                } finally {
                    n.$$phase = null;
                    try {
                        n.$digest()
                    } catch (c) {
                        throw e(c), c;
                    }
                }
            }, $on: function (a, b) {
                var c = this.$$listeners[a];
                c || (this.$$listeners[a] = c = []);
                c.push(b);
                var d = this;
                do d.$$listenerCount[a] || (d.$$listenerCount[a] = 0), d.$$listenerCount[a]++; while (d = d.$parent);
                var e = this;
                return function () {
                    c[Pa(c, b)] = null;
                    l(e, 1, a)
                }
            }, $emit: function (a, b) {
                var c = [], d, g = this, f = !1, k = {name: a, targetScope: g, stopPropagation: function () {
                    f = !0
                }, preventDefault: function () {
                    k.defaultPrevented = !0
                }, defaultPrevented: !1}, h = [k].concat(za.call(arguments, 1)), m, l;
                do {
                    d = g.$$listeners[a] || c;
                    k.currentScope = g;
                    m = 0;
                    for (l = d.length; m < l; m++)if (d[m])try {
                        d[m].apply(null, h)
                    } catch (n) {
                        e(n)
                    } else d.splice(m, 1), m--, l--;
                    if (f)break;
                    g = g.$parent
                } while (g);
                return k
            }, $broadcast: function (a, b) {
                for (var c = this, d = this, g = {name: a, targetScope: this, preventDefault: function () {
                    g.defaultPrevented = !0
                }, defaultPrevented: !1}, f = [g].concat(za.call(arguments, 1)), k, h; c = d;) {
                    g.currentScope = c;
                    d = c.$$listeners[a] || [];
                    k = 0;
                    for (h = d.length; k < h; k++)if (d[k])try {
                        d[k].apply(null, f)
                    } catch (m) {
                        e(m)
                    } else d.splice(k, 1), k--, h--;
                    if (!(d = c.$$listenerCount[a] && c.$$childHead || c !== this && c.$$nextSibling))for (; c !== this && !(d = c.$$nextSibling);)c = c.$parent
                }
                return g
            }};
            var n = new k;
            return n
        }]
    }

    function cd() {
        var b = /^\s*(https?|ftp|mailto|tel|file):/, a = /^\s*(https?|ftp|file):|data:image\//;
        this.aHrefSanitizationWhitelist = function (a) {
            return B(a) ? (b = a, this) : b
        };
        this.imgSrcSanitizationWhitelist = function (b) {
            return B(b) ? (a = b, this) : a
        };
        this.$get = function () {
            return function (c, d) {
                var e = d ? a : b, g;
                if (!P || 8 <= P)if (g = ta(c).href, "" !== g && !g.match(e))return"unsafe:" + g;
                return c
            }
        }
    }

    function ze(b) {
        if ("self" === b)return b;
        if (y(b)) {
            if (-1 < b.indexOf("***"))throw va("iwcard", b);
            b = b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08").replace("\\*\\*", ".*").replace("\\*", "[^:/.?&;]*");
            return RegExp("^" + b + "$")
        }
        if (fb(b))return RegExp("^" + b.source + "$");
        throw va("imatcher");
    }

    function Gc(b) {
        var a = [];
        B(b) && q(b, function (b) {
            a.push(ze(b))
        });
        return a
    }

    function be() {
        this.SCE_CONTEXTS = fa;
        var b = ["self"], a = [];
        this.resourceUrlWhitelist = function (a) {
            arguments.length && (b = Gc(a));
            return b
        };
        this.resourceUrlBlacklist = function (b) {
            arguments.length && (a = Gc(b));
            return a
        };
        this.$get = ["$injector", function (c) {
            function d(a) {
                var b = function (a) {
                    this.$$unwrapTrustedValue = function () {
                        return a
                    }
                };
                a && (b.prototype = new a);
                b.prototype.valueOf = function () {
                    return this.$$unwrapTrustedValue()
                };
                b.prototype.toString = function () {
                    return this.$$unwrapTrustedValue().toString()
                };
                return b
            }

            var e = function (a) {
                throw va("unsafe");
            };
            c.has("$sanitize") && (e = c.get("$sanitize"));
            var g = d(), f = {};
            f[fa.HTML] = d(g);
            f[fa.CSS] = d(g);
            f[fa.URL] = d(g);
            f[fa.JS] = d(g);
            f[fa.RESOURCE_URL] = d(f[fa.URL]);
            return{trustAs: function (a, b) {
                var c = f.hasOwnProperty(a) ? f[a] : null;
                if (!c)throw va("icontext", a, b);
                if (null === b || b === s || "" === b)return b;
                if ("string" !== typeof b)throw va("itype", a);
                return new c(b)
            }, getTrusted: function (c, d) {
                if (null === d || d === s || "" === d)return d;
                var g = f.hasOwnProperty(c) ? f[c] : null;
                if (g && d instanceof
                    g)return d.$$unwrapTrustedValue();
                if (c === fa.RESOURCE_URL) {
                    var g = ta(d.toString()), l, p, n = !1;
                    l = 0;
                    for (p = b.length; l < p; l++)if ("self" === b[l] ? Lb(g) : b[l].exec(g.href)) {
                        n = !0;
                        break
                    }
                    if (n)for (l = 0, p = a.length; l < p; l++)if ("self" === a[l] ? Lb(g) : a[l].exec(g.href)) {
                        n = !1;
                        break
                    }
                    if (n)return d;
                    throw va("insecurl", d.toString());
                }
                if (c === fa.HTML)return e(d);
                throw va("unsafe");
            }, valueOf: function (a) {
                return a instanceof g ? a.$$unwrapTrustedValue() : a
            }}
        }]
    }

    function ae() {
        var b = !0;
        this.enabled = function (a) {
            arguments.length && (b = !!a);
            return b
        };
        this.$get = ["$parse", "$sniffer", "$sceDelegate", function (a, c, d) {
            if (b && c.msie && 8 > c.msieDocumentMode)throw va("iequirks");
            var e = ka(fa);
            e.isEnabled = function () {
                return b
            };
            e.trustAs = d.trustAs;
            e.getTrusted = d.getTrusted;
            e.valueOf = d.valueOf;
            b || (e.trustAs = e.getTrusted = function (a, b) {
                return b
            }, e.valueOf = Fa);
            e.parseAs = function (b, c) {
                var d = a(c);
                return d.literal && d.constant ? d : function (a, c) {
                    return e.getTrusted(b, d(a, c))
                }
            };
            var g = e.parseAs, f = e.getTrusted, k = e.trustAs;
            q(fa, function (a, b) {
                var c = I(b);
                e[Wa("parse_as_" + c)] = function (b) {
                    return g(a, b)
                };
                e[Wa("get_trusted_" + c)] = function (b) {
                    return f(a, b)
                };
                e[Wa("trust_as_" + c)] = function (b) {
                    return k(a, b)
                }
            });
            return e
        }]
    }

    function ce() {
        this.$get = ["$window", "$document", function (b, a) {
            var c = {}, d = Z((/android (\d+)/.exec(I((b.navigator || {}).userAgent)) || [])[1]), e = /Boxee/i.test((b.navigator || {}).userAgent), g = a[0] || {}, f = g.documentMode, k, m = /^(Moz|webkit|O|ms)(?=[A-Z])/, h = g.body && g.body.style, l = !1, p = !1;
            if (h) {
                for (var n in h)if (l = m.exec(n)) {
                    k = l[0];
                    k = k.substr(0, 1).toUpperCase() + k.substr(1);
                    break
                }
                k || (k = "WebkitOpacity"in h && "webkit");
                l = !!("transition"in h || k + "Transition"in h);
                p = !!("animation"in h || k + "Animation"in h);
                !d || l && p || (l = y(g.body.style.webkitTransition), p = y(g.body.style.webkitAnimation))
            }
            return{history: !(!b.history || !b.history.pushState || 4 > d || e), hashchange: "onhashchange"in b && (!f || 7 < f), hasEvent: function (a) {
                if ("input" == a && 9 == P)return!1;
                if (F(c[a])) {
                    var b = g.createElement("div");
                    c[a] = "on" + a in b
                }
                return c[a]
            }, csp: Zb(), vendorPrefix: k, transitions: l, animations: p, android: d, msie: P, msieDocumentMode: f}
        }]
    }

    function ee() {
        this.$get = ["$rootScope", "$browser", "$q", "$exceptionHandler", function (b, a, c, d) {
            function e(e, k, m) {
                var h = c.defer(), l = h.promise, p = B(m) && !m;
                k = a.defer(function () {
                    try {
                        h.resolve(e())
                    } catch (a) {
                        h.reject(a), d(a)
                    } finally {
                        delete g[l.$$timeoutId]
                    }
                    p || b.$apply()
                }, k);
                l.$$timeoutId = k;
                g[k] = h;
                return l
            }

            var g = {};
            e.cancel = function (b) {
                return b && b.$$timeoutId in g ? (g[b.$$timeoutId].reject("canceled"), delete g[b.$$timeoutId], a.defer.cancel(b.$$timeoutId)) : !1
            };
            return e
        }]
    }

    function ta(b, a) {
        var c = b;
        P && (V.setAttribute("href", c), c = V.href);
        V.setAttribute("href", c);
        return{href: V.href, protocol: V.protocol ? V.protocol.replace(/:$/, "") : "", host: V.host, search: V.search ? V.search.replace(/^\?/, "") : "", hash: V.hash ? V.hash.replace(/^#/, "") : "", hostname: V.hostname, port: V.port, pathname: "/" === V.pathname.charAt(0) ? V.pathname : "/" + V.pathname}
    }

    function Lb(b) {
        b = y(b) ? ta(b) : b;
        return b.protocol === Hc.protocol && b.host === Hc.host
    }

    function fe() {
        this.$get = $(S)
    }

    function jc(b) {
        function a(d, e) {
            if (T(d)) {
                var g = {};
                q(d, function (b, c) {
                    g[c] = a(c, b)
                });
                return g
            }
            return b.factory(d + c, e)
        }

        var c = "Filter";
        this.register = a;
        this.$get = ["$injector", function (a) {
            return function (b) {
                return a.get(b + c)
            }
        }];
        a("currency", Ic);
        a("date", Jc);
        a("filter", Ae);
        a("json", Be);
        a("limitTo", Ce);
        a("lowercase", De);
        a("number", Kc);
        a("orderBy", Lc);
        a("uppercase", Ee)
    }

    function Ae() {
        return function (b, a, c) {
            if (!L(b))return b;
            var d = typeof c, e = [];
            e.check = function (a) {
                for (var b = 0; b < e.length; b++)if (!e[b](a))return!1;
                return!0
            };
            "function" !== d && (c = "boolean" === d && c ? function (a, b) {
                return Ta.equals(a, b)
            } : function (a, b) {
                if (a && b && "object" === typeof a && "object" === typeof b) {
                    for (var d in a)if ("$" !== d.charAt(0) && gb.call(a, d) && c(a[d], b[d]))return!0;
                    return!1
                }
                b = ("" + b).toLowerCase();
                return-1 < ("" + a).toLowerCase().indexOf(b)
            });
            var g = function (a, b) {
                if ("string" == typeof b && "!" === b.charAt(0))return!g(a, b.substr(1));
                switch (typeof a) {
                    case"boolean":
                    case"number":
                    case"string":
                        return c(a, b);
                    case"object":
                        switch (typeof b) {
                            case"object":
                                return c(a, b);
                            default:
                                for (var d in a)if ("$" !== d.charAt(0) && g(a[d], b))return!0
                        }
                        return!1;
                    case"array":
                        for (d = 0; d < a.length; d++)if (g(a[d], b))return!0;
                        return!1;
                    default:
                        return!1
                }
            };
            switch (typeof a) {
                case"boolean":
                case"number":
                case"string":
                    a = {$: a};
                case"object":
                    for (var f in a)(function (b) {
                        "undefined" !== typeof a[b] && e.push(function (c) {
                            return g("$" == b ? c : c && c[b], a[b])
                        })
                    })(f);
                    break;
                case"function":
                    e.push(a);
                    break;
                default:
                    return b
            }
            d = [];
            for (f = 0; f < b.length; f++) {
                var k = b[f];
                e.check(k) && d.push(k)
            }
            return d
        }
    }

    function Ic(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d) {
            F(d) && (d = a.CURRENCY_SYM);
            return Mc(b, a.PATTERNS[1], a.GROUP_SEP, a.DECIMAL_SEP, 2).replace(/\u00A4/g, d)
        }
    }

    function Kc(b) {
        var a = b.NUMBER_FORMATS;
        return function (b, d) {
            return Mc(b, a.PATTERNS[0], a.GROUP_SEP, a.DECIMAL_SEP, d)
        }
    }

    function Mc(b, a, c, d, e) {
        if (null == b || !isFinite(b) || T(b))return"";
        var g = 0 > b;
        b = Math.abs(b);
        var f = b + "", k = "", m = [], h = !1;
        if (-1 !== f.indexOf("e")) {
            var l = f.match(/([\d\.]+)e(-?)(\d+)/);
            l && "-" == l[2] && l[3] > e + 1 ? (f = "0", b = 0) : (k = f, h = !0)
        }
        if (h)0 < e && (-1 < b && 1 > b) && (k = b.toFixed(e)); else {
            f = (f.split(Nc)[1] || "").length;
            F(e) && (e = Math.min(Math.max(a.minFrac, f), a.maxFrac));
            b = +(Math.round(+(b.toString() + "e" + e)).toString() + "e" + -e);
            b = ("" + b).split(Nc);
            f = b[0];
            b = b[1] || "";
            var l = 0, p = a.lgSize, n = a.gSize;
            if (f.length >= p + n)for (l = f.length - p, h = 0; h < l; h++)0 === (l - h) % n && 0 !== h && (k += c), k += f.charAt(h);
            for (h = l; h < f.length; h++)0 === (f.length - h) % p && 0 !== h && (k += c), k += f.charAt(h);
            for (; b.length < e;)b += "0";
            e && "0" !== e && (k += d + b.substr(0, e))
        }
        m.push(g ? a.negPre : a.posPre);
        m.push(k);
        m.push(g ? a.negSuf : a.posSuf);
        return m.join("")
    }

    function Tb(b, a, c) {
        var d = "";
        0 > b && (d = "-", b = -b);
        for (b = "" + b; b.length < a;)b = "0" + b;
        c && (b = b.substr(b.length - a));
        return d + b
    }

    function Y(b, a, c, d) {
        c = c || 0;
        return function (e) {
            e = e["get" + b]();
            if (0 < c || e > -c)e += c;
            0 === e && -12 == c && (e = 12);
            return Tb(e, a, d)
        }
    }

    function sb(b, a) {
        return function (c, d) {
            var e = c["get" + b](), g = Ha(a ? "SHORT" + b : b);
            return d[g][e]
        }
    }

    function Jc(b) {
        function a(a) {
            var b;
            if (b = a.match(c)) {
                a = new Date(0);
                var g = 0, f = 0, k = b[8] ? a.setUTCFullYear : a.setFullYear, m = b[8] ? a.setUTCHours : a.setHours;
                b[9] && (g = Z(b[9] + b[10]), f = Z(b[9] + b[11]));
                k.call(a, Z(b[1]), Z(b[2]) - 1, Z(b[3]));
                g = Z(b[4] || 0) - g;
                f = Z(b[5] || 0) - f;
                k = Z(b[6] || 0);
                b = Math.round(1E3 * parseFloat("0." + (b[7] || 0)));
                m.call(a, g, f, k, b)
            }
            return a
        }

        var c = /^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
        return function (c, e) {
            var g = "", f = [], k, m;
            e = e || "mediumDate";
            e = b.DATETIME_FORMATS[e] || e;
            y(c) && (c = Fe.test(c) ? Z(c) : a(c));
            yb(c) && (c = new Date(c));
            if (!Oa(c))return c;
            for (; e;)(m = Ge.exec(e)) ? (f = f.concat(za.call(m, 1)), e = f.pop()) : (f.push(e), e = null);
            q(f, function (a) {
                k = He[a];
                g += k ? k(c, b.DATETIME_FORMATS) : a.replace(/(^'|'$)/g, "").replace(/''/g, "'")
            });
            return g
        }
    }

    function Be() {
        return function (b) {
            return sa(b, !0)
        }
    }

    function Ce() {
        return function (b, a) {
            if (!L(b) && !y(b))return b;
            a = Infinity === Math.abs(Number(a)) ? Number(a) : Z(a);
            if (y(b))return a ? 0 <= a ? b.slice(0, a) : b.slice(a, b.length) : "";
            var c = [], d, e;
            a > b.length ? a = b.length : a < -b.length && (a = -b.length);
            0 < a ? (d = 0, e = a) : (d = b.length + a, e = b.length);
            for (; d < e; d++)c.push(b[d]);
            return c
        }
    }

    function Lc(b) {
        return function (a, c, d) {
            function e(a, b) {
                return Sa(b) ? function (b, c) {
                    return a(c, b)
                } : a
            }

            function g(a, b) {
                var c = typeof a, d = typeof b;
                return c == d ? ("string" == c && (a = a.toLowerCase(), b = b.toLowerCase()), a === b ? 0 : a < b ? -1 : 1) : c < d ? -1 : 1
            }

            if (!L(a) || !c)return a;
            c = L(c) ? c : [c];
            c = Vc(c, function (a) {
                var c = !1, d = a || Fa;
                if (y(a)) {
                    if ("+" == a.charAt(0) || "-" == a.charAt(0))c = "-" == a.charAt(0), a = a.substring(1);
                    d = b(a);
                    if (d.constant) {
                        var f = d();
                        return e(function (a, b) {
                            return g(a[f], b[f])
                        }, c)
                    }
                }
                return e(function (a, b) {
                    return g(d(a), d(b))
                }, c)
            });
            for (var f = [], k = 0; k < a.length; k++)f.push(a[k]);
            return f.sort(e(function (a, b) {
                for (var d = 0; d < c.length; d++) {
                    var e = c[d](a, b);
                    if (0 !== e)return e
                }
                return 0
            }, d))
        }
    }

    function wa(b) {
        O(b) && (b = {link: b});
        b.restrict = b.restrict || "AC";
        return $(b)
    }

    function Oc(b, a, c, d) {
        function e(a, c) {
            c = c ? "-" + ib(c, "-") : "";
            d.removeClass(b, (a ? tb : ub) + c);
            d.addClass(b, (a ? ub : tb) + c)
        }

        var g = this, f = b.parent().controller("form") || vb, k = 0, m = g.$error = {}, h = [];
        g.$name = a.name || a.ngForm;
        g.$dirty = !1;
        g.$pristine = !0;
        g.$valid = !0;
        g.$invalid = !1;
        f.$addControl(g);
        b.addClass(Na);
        e(!0);
        g.$addControl = function (a) {
            Ba(a.$name, "input");
            h.push(a);
            a.$name && (g[a.$name] = a)
        };
        g.$removeControl = function (a) {
            a.$name && g[a.$name] === a && delete g[a.$name];
            q(m, function (b, c) {
                g.$setValidity(c, !0, a)
            });
            Qa(h, a)
        };
        g.$setValidity = function (a, b, c) {
            var d = m[a];
            if (b)d && (Qa(d, c), d.length || (k--, k || (e(b), g.$valid = !0, g.$invalid = !1), m[a] = !1, e(!0, a), f.$setValidity(a, !0, g))); else {
                k || e(b);
                if (d) {
                    if (-1 != Pa(d, c))return
                } else m[a] = d = [], k++, e(!1, a), f.$setValidity(a, !1, g);
                d.push(c);
                g.$valid = !1;
                g.$invalid = !0
            }
        };
        g.$setDirty = function () {
            d.removeClass(b, Na);
            d.addClass(b, wb);
            g.$dirty = !0;
            g.$pristine = !1;
            f.$setDirty()
        };
        g.$setPristine = function () {
            d.removeClass(b, wb);
            d.addClass(b, Na);
            g.$dirty = !1;
            g.$pristine = !0;
            q(h, function (a) {
                a.$setPristine()
            })
        }
    }

    function ra(b, a, c, d) {
        b.$setValidity(a, c);
        return c ? d : s
    }

    function Pc(b, a) {
        var c, d;
        if (a)for (c = 0; c < a.length; ++c)if (d = a[c], b[d])return!0;
        return!1
    }

    function Ie(b, a, c, d, e) {
        T(e) && (b.$$hasNativeValidators = !0, b.$parsers.push(function (g) {
            if (b.$error[a] || Pc(e, d) || !Pc(e, c))return g;
            b.$setValidity(a, !1)
        }))
    }

    function xb(b, a, c, d, e, g) {
        var f = a.prop(Je), k = a[0].placeholder, m = {};
        d.$$validityState = f;
        if (!e.android) {
            var h = !1;
            a.on("compositionstart", function (a) {
                h = !0
            });
            a.on("compositionend", function () {
                h = !1;
                l()
            })
        }
        var l = function (e) {
            if (!h) {
                var g = a.val();
                if (P && "input" === (e || m).type && a[0].placeholder !== k)k = a[0].placeholder; else if (Sa(c.ngTrim || "T") && (g = aa(g)), e = f && d.$$hasNativeValidators, d.$viewValue !== g || "" === g && e)b.$$phase ? d.$setViewValue(g) : b.$apply(function () {
                    d.$setViewValue(g)
                })
            }
        };
        if (e.hasEvent("input"))a.on("input", l); else {
            var p, n = function () {
                p || (p = g.defer(function () {
                    l();
                    p = null
                }))
            };
            a.on("keydown", function (a) {
                a = a.keyCode;
                91 === a || (15 < a && 19 > a || 37 <= a && 40 >= a) || n()
            });
            if (e.hasEvent("paste"))a.on("paste cut", n)
        }
        a.on("change", l);
        d.$render = function () {
            a.val(d.$isEmpty(d.$viewValue) ? "" : d.$viewValue)
        };
        var r = c.ngPattern;
        r && ((e = r.match(/^\/(.*)\/([gim]*)$/)) ? (r = RegExp(e[1], e[2]), e = function (a) {
            return ra(d, "pattern", d.$isEmpty(a) || r.test(a), a)
        }) : e = function (c) {
            var e = b.$eval(r);
            if (!e || !e.test)throw v("ngPattern")("noregexp", r, e, ga(a));
            return ra(d, "pattern", d.$isEmpty(c) || e.test(c), c)
        }, d.$formatters.push(e), d.$parsers.push(e));
        if (c.ngMinlength) {
            var t = Z(c.ngMinlength);
            e = function (a) {
                return ra(d, "minlength", d.$isEmpty(a) || a.length >= t, a)
            };
            d.$parsers.push(e);
            d.$formatters.push(e)
        }
        if (c.ngMaxlength) {
            var q = Z(c.ngMaxlength);
            e = function (a) {
                return ra(d, "maxlength", d.$isEmpty(a) || a.length <= q, a)
            };
            d.$parsers.push(e);
            d.$formatters.push(e)
        }
    }

    function Ub(b, a) {
        b = "ngClass" + b;
        return["$animate", function (c) {
            function d(a, b) {
                var c = [], d = 0;
                a:for (; d < a.length; d++) {
                    for (var e = a[d], l = 0; l < b.length; l++)if (e == b[l])continue a;
                    c.push(e)
                }
                return c
            }

            function e(a) {
                if (!L(a)) {
                    if (y(a))return a.split(" ");
                    if (T(a)) {
                        var b = [];
                        q(a, function (a, c) {
                            a && (b = b.concat(c.split(" ")))
                        });
                        return b
                    }
                }
                return a
            }

            return{restrict: "AC", link: function (g, f, k) {
                function m(a, b) {
                    var c = f.data("$classCounts") || {}, d = [];
                    q(a, function (a) {
                        if (0 < b || c[a])c[a] = (c[a] || 0) + b, c[a] === +(0 < b) && d.push(a)
                    });
                    f.data("$classCounts", c);
                    return d.join(" ")
                }

                function h(b) {
                    if (!0 === a || g.$index % 2 === a) {
                        var h = e(b || []);
                        if (!l) {
                            var r = m(h, 1);
                            k.$addClass(r)
                        } else if (!ya(b, l)) {
                            var q = e(l), r = d(h, q), h = d(q, h), h = m(h, -1), r = m(r, 1);
                            0 === r.length ? c.removeClass(f, h) : 0 === h.length ? c.addClass(f, r) : c.setClass(f, r, h)
                        }
                    }
                    l = ka(b)
                }

                var l;
                g.$watch(k[b], h, !0);
                k.$observe("class", function (a) {
                    h(g.$eval(k[b]))
                });
                "ngClass" !== b && g.$watch("$index", function (c, d) {
                    var f = c & 1;
                    if (f !== (d & 1)) {
                        var h = e(g.$eval(k[b]));
                        f === a ? (f = m(h, 1), k.$addClass(f)) : (f = m(h, -1), k.$removeClass(f))
                    }
                })
            }}
        }]
    }

    var Je = "validity", I = function (b) {
        return y(b) ? b.toLowerCase() : b
    }, gb = Object.prototype.hasOwnProperty, Ha = function (b) {
        return y(b) ? b.toUpperCase() : b
    }, P, x, Ca, za = [].slice, Ke = [].push, xa = Object.prototype.toString, Ra = v("ng"), Ta = S.angular || (S.angular = {}), Va, La, ja = ["0", "0", "0"];
    P = Z((/msie (\d+)/.exec(I(navigator.userAgent)) || [])[1]);
    isNaN(P) && (P = Z((/trident\/.*; rv:(\d+)/.exec(I(navigator.userAgent)) || [])[1]));
    A.$inject = [];
    Fa.$inject = [];
    var L = function () {
        return O(Array.isArray) ? Array.isArray : function (b) {
            return"[object Array]" === xa.call(b)
        }
    }(), aa = function () {
        return String.prototype.trim ? function (b) {
            return y(b) ? b.trim() : b
        } : function (b) {
            return y(b) ? b.replace(/^\s\s*/, "").replace(/\s\s*$/, "") : b
        }
    }();
    La = 9 > P ? function (b) {
        b = b.nodeName ? b : b[0];
        return b.scopeName && "HTML" != b.scopeName ? Ha(b.scopeName + ":" + b.nodeName) : b.nodeName
    } : function (b) {
        return b.nodeName ? b.nodeName : b[0].nodeName
    };
    var Yc = /[A-Z]/g, ad = {full: "1.2.20", major: 1, minor: 2, dot: 20, codeName: "accidental-beautification"};
    R.expando = "ng339";
    var Ya = R.cache = {}, ne = 1, pb = S.document.addEventListener ? function (b, a, c) {
        b.addEventListener(a, c, !1)
    } : function (b, a, c) {
        b.attachEvent("on" + a, c)
    }, Xa = S.document.removeEventListener ? function (b, a, c) {
        b.removeEventListener(a, c, !1)
    } : function (b, a, c) {
        b.detachEvent("on" + a, c)
    };
    R._data = function (b) {
        return this.cache[b[this.expando]] || {}
    };
    var ie = /([\:\-\_]+(.))/g, je = /^moz([A-Z])/, Fb = v("jqLite"), ke = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, Gb = /<|&#?\w+;/, le = /<([\w:]+)/, me = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ba = {option: [1, '<select multiple="multiple">', "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""]};
    ba.optgroup = ba.option;
    ba.tbody = ba.tfoot = ba.colgroup = ba.caption = ba.thead;
    ba.th = ba.td;
    var Ka = R.prototype = {ready: function (b) {
        function a() {
            c || (c = !0, b())
        }

        var c = !1;
        "complete" === U.readyState ? setTimeout(a) : (this.on("DOMContentLoaded", a), R(S).on("load", a))
    }, toString: function () {
        var b = [];
        q(this, function (a) {
            b.push("" + a)
        });
        return"[" + b.join(", ") + "]"
    }, eq: function (b) {
        return 0 <= b ? x(this[b]) : x(this[this.length + b])
    }, length: 0, push: Ke, sort: [].sort, splice: [].splice}, mb = {};
    q("multiple selected checked disabled readOnly required open".split(" "), function (b) {
        mb[I(b)] = b
    });
    var qc = {};
    q("input select option textarea button form details".split(" "), function (b) {
        qc[Ha(b)] = !0
    });
    q({data: mc, inheritedData: lb, scope: function (b) {
        return x(b).data("$scope") || lb(b.parentNode || b, ["$isolateScope", "$scope"])
    }, isolateScope: function (b) {
        return x(b).data("$isolateScope") || x(b).data("$isolateScopeNoTemplate")
    }, controller: nc, injector: function (b) {
        return lb(b, "$injector")
    }, removeAttr: function (b, a) {
        b.removeAttribute(a)
    }, hasClass: Jb, css: function (b, a, c) {
        a = Wa(a);
        if (B(c))b.style[a] = c; else {
            var d;
            8 >= P && (d = b.currentStyle && b.currentStyle[a], "" === d && (d = "auto"));
            d = d || b.style[a];
            8 >= P && (d = "" === d ? s : d);
            return d
        }
    }, attr: function (b, a, c) {
        var d = I(a);
        if (mb[d])if (B(c))c ? (b[a] = !0, b.setAttribute(a, d)) : (b[a] = !1, b.removeAttribute(d)); else return b[a] || (b.attributes.getNamedItem(a) || A).specified ? d : s; else if (B(c))b.setAttribute(a, c); else if (b.getAttribute)return b = b.getAttribute(a, 2), null === b ? s : b
    }, prop: function (b, a, c) {
        if (B(c))b[a] = c; else return b[a]
    }, text: function () {
        function b(b, d) {
            var e = a[b.nodeType];
            if (F(d))return e ? b[e] : "";
            b[e] = d
        }

        var a = [];
        9 > P ? (a[1] = "innerText", a[3] = "nodeValue") : a[1] = a[3] = "textContent";
        b.$dv = "";
        return b
    }(), val: function (b, a) {
        if (F(a)) {
            if ("SELECT" === La(b) && b.multiple) {
                var c = [];
                q(b.options, function (a) {
                    a.selected && c.push(a.value || a.text)
                });
                return 0 === c.length ? null : c
            }
            return b.value
        }
        b.value = a
    }, html: function (b, a) {
        if (F(a))return b.innerHTML;
        for (var c = 0, d = b.childNodes; c < d.length; c++)Ia(d[c]);
        b.innerHTML = a
    }, empty: oc}, function (b, a) {
        R.prototype[a] = function (a, d) {
            var e, g, f = this.length;
            if (b !== oc && (2 == b.length && b !== Jb && b !== nc ? a : d) === s) {
                if (T(a)) {
                    for (e = 0; e < f; e++)if (b === mc)b(this[e], a); else for (g in a)b(this[e], g, a[g]);
                    return this
                }
                e = b.$dv;
                f = e === s ? Math.min(f, 1) : f;
                for (g = 0; g < f; g++) {
                    var k = b(this[g], a, d);
                    e = e ? e + k : k
                }
                return e
            }
            for (e = 0; e < f; e++)b(this[e], a, d);
            return this
        }
    });
    q({removeData: kc, dealoc: Ia, on: function a(c, d, e, g) {
        if (B(g))throw Fb("onargs");
        var f = la(c, "events"), k = la(c, "handle");
        f || la(c, "events", f = {});
        k || la(c, "handle", k = oe(c, f));
        q(d.split(" "), function (d) {
            var g = f[d];
            if (!g) {
                if ("mouseenter" == d || "mouseleave" == d) {
                    var l = U.body.contains || U.body.compareDocumentPosition ? function (a, c) {
                        var d = 9 === a.nodeType ? a.documentElement : a, e = c && c.parentNode;
                        return a === e || !!(e && 1 === e.nodeType && (d.contains ? d.contains(e) : a.compareDocumentPosition && a.compareDocumentPosition(e) & 16))
                    } : function (a, c) {
                        if (c)for (; c = c.parentNode;)if (c === a)return!0;
                        return!1
                    };
                    f[d] = [];
                    a(c, {mouseleave: "mouseout", mouseenter: "mouseover"}[d], function (a) {
                        var c = a.relatedTarget;
                        c && (c === this || l(this, c)) || k(a, d)
                    })
                } else pb(c, d, k), f[d] = [];
                g = f[d]
            }
            g.push(e)
        })
    }, off: lc, one: function (a, c, d) {
        a = x(a);
        a.on(c, function g() {
            a.off(c, d);
            a.off(c, g)
        });
        a.on(c, d)
    }, replaceWith: function (a, c) {
        var d, e = a.parentNode;
        Ia(a);
        q(new R(c), function (c) {
            d ? e.insertBefore(c, d.nextSibling) : e.replaceChild(c, a);
            d = c
        })
    }, children: function (a) {
        var c = [];
        q(a.childNodes, function (a) {
            1 === a.nodeType && c.push(a)
        });
        return c
    }, contents: function (a) {
        return a.contentDocument || a.childNodes || []
    }, append: function (a, c) {
        q(new R(c), function (c) {
            1 !== a.nodeType && 11 !== a.nodeType || a.appendChild(c)
        })
    }, prepend: function (a, c) {
        if (1 === a.nodeType) {
            var d = a.firstChild;
            q(new R(c), function (c) {
                a.insertBefore(c, d)
            })
        }
    }, wrap: function (a, c) {
        c = x(c)[0];
        var d = a.parentNode;
        d && d.replaceChild(c, a);
        c.appendChild(a)
    }, remove: function (a) {
        Ia(a);
        var c = a.parentNode;
        c && c.removeChild(a)
    }, after: function (a, c) {
        var d = a, e = a.parentNode;
        q(new R(c), function (a) {
            e.insertBefore(a, d.nextSibling);
            d = a
        })
    }, addClass: kb, removeClass: jb, toggleClass: function (a, c, d) {
        c && q(c.split(" "), function (c) {
            var g = d;
            F(g) && (g = !Jb(a, c));
            (g ? kb : jb)(a, c)
        })
    }, parent: function (a) {
        return(a = a.parentNode) && 11 !== a.nodeType ? a : null
    }, next: function (a) {
        if (a.nextElementSibling)return a.nextElementSibling;
        for (a = a.nextSibling; null != a && 1 !== a.nodeType;)a = a.nextSibling;
        return a
    }, find: function (a, c) {
        return a.getElementsByTagName ? a.getElementsByTagName(c) : []
    }, clone: Ib, triggerHandler: function (a, c, d) {
        c = (la(a, "events") || {})[c];
        d = d || [];
        var e = [
            {preventDefault: A, stopPropagation: A}
        ];
        q(c, function (c) {
            c.apply(a, e.concat(d))
        })
    }}, function (a, c) {
        R.prototype[c] = function (c, e, g) {
            for (var f, k = 0; k < this.length; k++)F(f) ? (f = a(this[k], c, e, g), B(f) && (f = x(f))) : Hb(f, a(this[k], c, e, g));
            return B(f) ? f : this
        };
        R.prototype.bind = R.prototype.on;
        R.prototype.unbind = R.prototype.off
    });
    Za.prototype = {put: function (a, c) {
        this[Ja(a, this.nextUid)] = c
    }, get: function (a) {
        return this[Ja(a, this.nextUid)]
    }, remove: function (a) {
        var c = this[a = Ja(a, this.nextUid)];
        delete this[a];
        return c
    }};
    var qe = /^function\s*[^\(]*\(\s*([^\)]*)\)/m, re = /,/, se = /^\s*(_?)(\S+?)\1\s*$/, pe = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg, $a = v("$injector"), Le = v("$animate"), Md = ["$provide", function (a) {
        this.$$selectors = {};
        this.register = function (c, d) {
            var e = c + "-animation";
            if (c && "." != c.charAt(0))throw Le("notcsel", c);
            this.$$selectors[c.substr(1)] = e;
            a.factory(e, d)
        };
        this.classNameFilter = function (a) {
            1 === arguments.length && (this.$$classNameFilter = a instanceof RegExp ? a : null);
            return this.$$classNameFilter
        };
        this.$get = ["$timeout", "$$asyncCallback", function (a, d) {
            return{enter: function (a, c, f, k) {
                f ? f.after(a) : (c && c[0] || (c = f.parent()), c.append(a));
                k && d(k)
            }, leave: function (a, c) {
                a.remove();
                c && d(c)
            }, move: function (a, c, d, k) {
                this.enter(a, c, d, k)
            }, addClass: function (a, c, f) {
                c = y(c) ? c : L(c) ? c.join(" ") : "";
                q(a, function (a) {
                    kb(a, c)
                });
                f && d(f)
            }, removeClass: function (a, c, f) {
                c = y(c) ? c : L(c) ? c.join(" ") : "";
                q(a, function (a) {
                    jb(a, c)
                });
                f && d(f)
            }, setClass: function (a, c, f, k) {
                q(a, function (a) {
                    kb(a, c);
                    jb(a, f)
                });
                k && d(k)
            }, enabled: A}
        }]
    }], ha = v("$compile");
    fc.$inject = ["$provide", "$$sanitizeUriProvider"];
    var ue = /^(x[\:\-_]|data[\:\-_])/i, yc = v("$interpolate"), Me = /^([^\?#]*)(\?([^#]*))?(#(.*))?$/, xe = {http: 80, https: 443, ftp: 21}, Ob = v("$location");
    Qb.prototype = Pb.prototype = Bc.prototype = {$$html5: !1, $$replace: !1, absUrl: qb("$$absUrl"), url: function (a, c) {
        if (F(a))return this.$$url;
        var d = Me.exec(a);
        d[1] && this.path(decodeURIComponent(d[1]));
        (d[2] || d[1]) && this.search(d[3] || "");
        this.hash(d[5] || "", c);
        return this
    }, protocol: qb("$$protocol"), host: qb("$$host"), port: qb("$$port"), path: Cc("$$path", function (a) {
        return"/" == a.charAt(0) ? a : "/" + a
    }), search: function (a, c) {
        switch (arguments.length) {
            case 0:
                return this.$$search;
            case 1:
                if (y(a))this.$$search = bc(a); else if (T(a))q(a, function (c, e) {
                    null == c && delete a[e]
                }), this.$$search = a; else throw Ob("isrcharg");
                break;
            default:
                F(c) || null === c ? delete this.$$search[a] : this.$$search[a] = c
        }
        this.$$compose();
        return this
    }, hash: Cc("$$hash", Fa), replace: function () {
        this.$$replace = !0;
        return this
    }};
    var ia = v("$parse"), Fc = {}, ua, Ne = Function.prototype.call, Oe = Function.prototype.apply, Qc = Function.prototype.bind, cb = {"null": function () {
        return null
    }, "true": function () {
        return!0
    }, "false": function () {
        return!1
    }, undefined: A, "+": function (a, c, d, e) {
        d = d(a, c);
        e = e(a, c);
        return B(d) ? B(e) ? d + e : d : B(e) ? e : s
    }, "-": function (a, c, d, e) {
        d = d(a, c);
        e = e(a, c);
        return(B(d) ? d : 0) - (B(e) ? e : 0)
    }, "*": function (a, c, d, e) {
        return d(a, c) * e(a, c)
    }, "/": function (a, c, d, e) {
        return d(a, c) / e(a, c)
    }, "%": function (a, c, d, e) {
        return d(a, c) % e(a, c)
    }, "^": function (a, c, d, e) {
        return d(a, c) ^ e(a, c)
    }, "=": A, "===": function (a, c, d, e) {
        return d(a, c) === e(a, c)
    }, "!==": function (a, c, d, e) {
        return d(a, c) !== e(a, c)
    }, "==": function (a, c, d, e) {
        return d(a, c) == e(a, c)
    }, "!=": function (a, c, d, e) {
        return d(a, c) != e(a, c)
    }, "<": function (a, c, d, e) {
        return d(a, c) < e(a, c)
    }, ">": function (a, c, d, e) {
        return d(a, c) > e(a, c)
    }, "<=": function (a, c, d, e) {
        return d(a, c) <= e(a, c)
    }, ">=": function (a, c, d, e) {
        return d(a, c) >= e(a, c)
    }, "&&": function (a, c, d, e) {
        return d(a, c) && e(a, c)
    }, "||": function (a, c, d, e) {
        return d(a, c) || e(a, c)
    }, "&": function (a, c, d, e) {
        return d(a, c) & e(a, c)
    }, "|": function (a, c, d, e) {
        return e(a, c)(a, c, d(a, c))
    }, "!": function (a, c, d) {
        return!d(a, c)
    }}, Pe = {n: "\n", f: "\f", r: "\r", t: "\t", v: "\v", "'": "'", '"': '"'}, Sb = function (a) {
        this.options = a
    };
    Sb.prototype = {constructor: Sb, lex: function (a) {
        this.text = a;
        this.index = 0;
        this.ch = s;
        this.lastCh = ":";
        for (this.tokens = []; this.index < this.text.length;) {
            this.ch = this.text.charAt(this.index);
            if (this.is("\"'"))this.readString(this.ch); else if (this.isNumber(this.ch) || this.is(".") && this.isNumber(this.peek()))this.readNumber(); else if (this.isIdent(this.ch))this.readIdent(); else if (this.is("(){}[].,;:?"))this.tokens.push({index: this.index, text: this.ch}), this.index++; else if (this.isWhitespace(this.ch)) {
                this.index++;
                continue
            } else {
                a = this.ch + this.peek();
                var c = a + this.peek(2), d = cb[this.ch], e = cb[a], g = cb[c];
                g ? (this.tokens.push({index: this.index, text: c, fn: g}), this.index += 3) : e ? (this.tokens.push({index: this.index, text: a, fn: e}), this.index += 2) : d ? (this.tokens.push({index: this.index, text: this.ch, fn: d}), this.index += 1) : this.throwError("Unexpected next character ", this.index, this.index + 1)
            }
            this.lastCh = this.ch
        }
        return this.tokens
    }, is: function (a) {
        return-1 !== a.indexOf(this.ch)
    }, was: function (a) {
        return-1 !== a.indexOf(this.lastCh)
    }, peek: function (a) {
        a = a || 1;
        return this.index + a < this.text.length ? this.text.charAt(this.index + a) : !1
    }, isNumber: function (a) {
        return"0" <= a && "9" >= a
    }, isWhitespace: function (a) {
        return" " === a || "\r" === a || "\t" === a || "\n" === a || "\v" === a || "\u00a0" === a
    }, isIdent: function (a) {
        return"a" <= a && "z" >= a || "A" <= a && "Z" >= a || "_" === a || "$" === a
    }, isExpOperator: function (a) {
        return"-" === a || "+" === a || this.isNumber(a)
    }, throwError: function (a, c, d) {
        d = d || this.index;
        c = B(c) ? "s " + c + "-" + this.index + " [" + this.text.substring(c, d) + "]" : " " + d;
        throw ia("lexerr", a, c, this.text);
    }, readNumber: function () {
        for (var a = "", c = this.index; this.index < this.text.length;) {
            var d = I(this.text.charAt(this.index));
            if ("." == d || this.isNumber(d))a += d; else {
                var e = this.peek();
                if ("e" == d && this.isExpOperator(e))a += d; else if (this.isExpOperator(d) && e && this.isNumber(e) && "e" == a.charAt(a.length - 1))a += d; else if (!this.isExpOperator(d) || e && this.isNumber(e) || "e" != a.charAt(a.length - 1))break; else this.throwError("Invalid exponent")
            }
            this.index++
        }
        a *= 1;
        this.tokens.push({index: c, text: a, literal: !0, constant: !0, fn: function () {
            return a
        }})
    }, readIdent: function () {
        for (var a = this, c = "", d = this.index, e, g, f, k; this.index < this.text.length;) {
            k = this.text.charAt(this.index);
            if ("." === k || this.isIdent(k) || this.isNumber(k))"." === k && (e = this.index), c += k; else break;
            this.index++
        }
        if (e)for (g = this.index; g < this.text.length;) {
            k = this.text.charAt(g);
            if ("(" === k) {
                f = c.substr(e - d + 1);
                c = c.substr(0, e - d);
                this.index = g;
                break
            }
            if (this.isWhitespace(k))g++; else break
        }
        d = {index: d, text: c};
        if (cb.hasOwnProperty(c))d.fn = cb[c], d.literal = !0, d.constant = !0; else {
            var m = Ec(c, this.options, this.text);
            d.fn = E(function (a, c) {
                return m(a, c)
            }, {assign: function (d, e) {
                return rb(d, c, e, a.text, a.options)
            }})
        }
        this.tokens.push(d);
        f && (this.tokens.push({index: e, text: "."}), this.tokens.push({index: e + 1, text: f}))
    }, readString: function (a) {
        var c = this.index;
        this.index++;
        for (var d = "", e = a, g = !1; this.index < this.text.length;) {
            var f = this.text.charAt(this.index), e = e + f;
            if (g)"u" === f ? (f = this.text.substring(this.index + 1, this.index + 5), f.match(/[\da-f]{4}/i) || this.throwError("Invalid unicode escape [\\u" + f + "]"), this.index += 4, d += String.fromCharCode(parseInt(f, 16))) : d = (g = Pe[f]) ? d + g : d + f, g = !1; else if ("\\" === f)g = !0; else {
                if (f === a) {
                    this.index++;
                    this.tokens.push({index: c, text: e, string: d, literal: !0, constant: !0, fn: function () {
                        return d
                    }});
                    return
                }
                d += f
            }
            this.index++
        }
        this.throwError("Unterminated quote", c)
    }};
    var bb = function (a, c, d) {
        this.lexer = a;
        this.$filter = c;
        this.options = d
    };
    bb.ZERO = E(function () {
        return 0
    }, {constant: !0});
    bb.prototype = {constructor: bb, parse: function (a) {
        this.text = a;
        this.tokens = this.lexer.lex(a);
        a = this.statements();
        0 !== this.tokens.length && this.throwError("is an unexpected token", this.tokens[0]);
        a.literal = !!a.literal;
        a.constant = !!a.constant;
        return a
    }, primary: function () {
        var a;
        if (this.expect("("))a = this.filterChain(), this.consume(")"); else if (this.expect("["))a = this.arrayDeclaration(); else if (this.expect("{"))a = this.object(); else {
            var c = this.expect();
            (a = c.fn) || this.throwError("not a primary expression", c);
            a.literal = !!c.literal;
            a.constant = !!c.constant
        }
        for (var d; c = this.expect("(", "[", ".");)"(" === c.text ? (a = this.functionCall(a, d), d = null) : "[" === c.text ? (d = a, a = this.objectIndex(a)) : "." === c.text ? (d = a, a = this.fieldAccess(a)) : this.throwError("IMPOSSIBLE");
        return a
    }, throwError: function (a, c) {
        throw ia("syntax", c.text, a, c.index + 1, this.text, this.text.substring(c.index));
    }, peekToken: function () {
        if (0 === this.tokens.length)throw ia("ueoe", this.text);
        return this.tokens[0]
    }, peek: function (a, c, d, e) {
        if (0 < this.tokens.length) {
            var g = this.tokens[0], f = g.text;
            if (f === a || f === c || f === d || f === e || !(a || c || d || e))return g
        }
        return!1
    }, expect: function (a, c, d, e) {
        return(a = this.peek(a, c, d, e)) ? (this.tokens.shift(), a) : !1
    }, consume: function (a) {
        this.expect(a) || this.throwError("is unexpected, expecting [" + a + "]", this.peek())
    }, unaryFn: function (a, c) {
        return E(function (d, e) {
            return a(d, e, c)
        }, {constant: c.constant})
    }, ternaryFn: function (a, c, d) {
        return E(function (e, g) {
            return a(e, g) ? c(e, g) : d(e, g)
        }, {constant: a.constant && c.constant && d.constant})
    }, binaryFn: function (a, c, d) {
        return E(function (e, g) {
            return c(e, g, a, d)
        }, {constant: a.constant && d.constant})
    }, statements: function () {
        for (var a = []; ;)if (0 < this.tokens.length && !this.peek("}", ")", ";", "]") && a.push(this.filterChain()), !this.expect(";"))return 1 === a.length ? a[0] : function (c, d) {
            for (var e, g = 0; g < a.length; g++) {
                var f = a[g];
                f && (e = f(c, d))
            }
            return e
        }
    }, filterChain: function () {
        for (var a = this.expression(), c; ;)if (c = this.expect("|"))a = this.binaryFn(a, c.fn, this.filter()); else return a
    }, filter: function () {
        for (var a = this.expect(), c = this.$filter(a.text), d = []; ;)if (a = this.expect(":"))d.push(this.expression()); else {
            var e = function (a, e, k) {
                k = [k];
                for (var m = 0; m < d.length; m++)k.push(d[m](a, e));
                return c.apply(a, k)
            };
            return function () {
                return e
            }
        }
    }, expression: function () {
        return this.assignment()
    }, assignment: function () {
        var a = this.ternary(), c, d;
        return(d = this.expect("=")) ? (a.assign || this.throwError("implies assignment but [" + this.text.substring(0, d.index) + "] can not be assigned to", d), c = this.ternary(), function (d, g) {
            return a.assign(d, c(d, g), g)
        }) : a
    }, ternary: function () {
        var a = this.logicalOR(), c, d;
        if (this.expect("?")) {
            c = this.ternary();
            if (d = this.expect(":"))return this.ternaryFn(a, c, this.ternary());
            this.throwError("expected :", d)
        } else return a
    }, logicalOR: function () {
        for (var a = this.logicalAND(), c; ;)if (c = this.expect("||"))a = this.binaryFn(a, c.fn, this.logicalAND()); else return a
    }, logicalAND: function () {
        var a = this.equality(), c;
        if (c = this.expect("&&"))a = this.binaryFn(a, c.fn, this.logicalAND());
        return a
    }, equality: function () {
        var a = this.relational(), c;
        if (c = this.expect("==", "!=", "===", "!=="))a = this.binaryFn(a, c.fn, this.equality());
        return a
    }, relational: function () {
        var a = this.additive(), c;
        if (c = this.expect("<", ">", "<=", ">="))a = this.binaryFn(a, c.fn, this.relational());
        return a
    }, additive: function () {
        for (var a = this.multiplicative(), c; c = this.expect("+", "-");)a = this.binaryFn(a, c.fn, this.multiplicative());
        return a
    }, multiplicative: function () {
        for (var a = this.unary(), c; c = this.expect("*", "/", "%");)a = this.binaryFn(a, c.fn, this.unary());
        return a
    }, unary: function () {
        var a;
        return this.expect("+") ? this.primary() : (a = this.expect("-")) ? this.binaryFn(bb.ZERO, a.fn, this.unary()) : (a = this.expect("!")) ? this.unaryFn(a.fn, this.unary()) : this.primary()
    }, fieldAccess: function (a) {
        var c = this, d = this.expect().text, e = Ec(d, this.options, this.text);
        return E(function (c, d, k) {
            return e(k || a(c, d))
        }, {assign: function (e, f, k) {
            return rb(a(e, k), d, f, c.text, c.options)
        }})
    }, objectIndex: function (a) {
        var c = this, d = this.expression();
        this.consume("]");
        return E(function (e, g) {
            var f = a(e, g), k = d(e, g), m;
            qa(k, c.text);
            if (!f)return s;
            (f = Ma(f[k], c.text)) && (f.then && c.options.unwrapPromises) && (m = f, "$$v"in f || (m.$$v = s, m.then(function (a) {
                m.$$v = a
            })), f = f.$$v);
            return f
        }, {assign: function (e, g, f) {
            var k = d(e, f);
            return Ma(a(e, f), c.text)[k] = g
        }})
    }, functionCall: function (a, c) {
        var d = [];
        if (")" !== this.peekToken().text) {
            do d.push(this.expression()); while (this.expect(","))
        }
        this.consume(")");
        var e = this;
        return function (g, f) {
            for (var k = [], m = c ? c(g, f) : g, h = 0; h < d.length; h++)k.push(d[h](g, f));
            h = a(g, f, m) || A;
            Ma(m, e.text);
            var l = e.text;
            if (h) {
                if (h.constructor === h)throw ia("isecfn", l);
                if (h === Ne || h === Oe || Qc && h === Qc)throw ia("isecff", l);
            }
            k = h.apply ? h.apply(m, k) : h(k[0], k[1], k[2], k[3], k[4]);
            return Ma(k, e.text)
        }
    }, arrayDeclaration: function () {
        var a = [], c = !0;
        if ("]" !== this.peekToken().text) {
            do {
                if (this.peek("]"))break;
                var d = this.expression();
                a.push(d);
                d.constant || (c = !1)
            } while (this.expect(","))
        }
        this.consume("]");
        return E(function (c, d) {
            for (var f = [], k = 0; k < a.length; k++)f.push(a[k](c, d));
            return f
        }, {literal: !0, constant: c})
    }, object: function () {
        var a = [], c = !0;
        if ("}" !== this.peekToken().text) {
            do {
                if (this.peek("}"))break;
                var d = this.expect(), d = d.string || d.text;
                this.consume(":");
                var e = this.expression();
                a.push({key: d, value: e});
                e.constant || (c = !1)
            } while (this.expect(","))
        }
        this.consume("}");
        return E(function (c, d) {
            for (var e = {}, m = 0; m < a.length; m++) {
                var h = a[m];
                e[h.key] = h.value(c, d)
            }
            return e
        }, {literal: !0, constant: c})
    }};
    var Rb = {}, va = v("$sce"), fa = {HTML: "html", CSS: "css", URL: "url", RESOURCE_URL: "resourceUrl", JS: "js"}, V = U.createElement("a"), Hc = ta(S.location.href, !0);
    jc.$inject = ["$provide"];
    Ic.$inject = ["$locale"];
    Kc.$inject = ["$locale"];
    var Nc = ".", He = {yyyy: Y("FullYear", 4), yy: Y("FullYear", 2, 0, !0), y: Y("FullYear", 1), MMMM: sb("Month"), MMM: sb("Month", !0), MM: Y("Month", 2, 1), M: Y("Month", 1, 1), dd: Y("Date", 2), d: Y("Date", 1), HH: Y("Hours", 2), H: Y("Hours", 1), hh: Y("Hours", 2, -12), h: Y("Hours", 1, -12), mm: Y("Minutes", 2), m: Y("Minutes", 1), ss: Y("Seconds", 2), s: Y("Seconds", 1), sss: Y("Milliseconds", 3), EEEE: sb("Day"), EEE: sb("Day", !0), a: function (a, c) {
        return 12 > a.getHours() ? c.AMPMS[0] : c.AMPMS[1]
    }, Z: function (a) {
        a = -1 * a.getTimezoneOffset();
        return a = (0 <= a ? "+" : "") + (Tb(Math[0 < a ? "floor" : "ceil"](a / 60), 2) + Tb(Math.abs(a % 60), 2))
    }}, Ge = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/, Fe = /^\-?\d+$/;
    Jc.$inject = ["$locale"];
    var De = $(I), Ee = $(Ha);
    Lc.$inject = ["$parse"];
    var dd = $({restrict: "E", compile: function (a, c) {
        8 >= P && (c.href || c.name || c.$set("href", ""), a.append(U.createComment("IE fix")));
        if (!c.href && !c.xlinkHref && !c.name)return function (a, c) {
            var g = "[object SVGAnimatedString]" === xa.call(c.prop("href")) ? "xlink:href" : "href";
            c.on("click", function (a) {
                c.attr(g) || a.preventDefault()
            })
        }
    }}), Db = {};
    q(mb, function (a, c) {
        if ("multiple" != a) {
            var d = ma("ng-" + c);
            Db[d] = function () {
                return{priority: 100, link: function (a, g, f) {
                    a.$watch(f[d], function (a) {
                        f.$set(c, !!a)
                    })
                }}
            }
        }
    });
    q(["src", "srcset", "href"], function (a) {
        var c = ma("ng-" + a);
        Db[c] = function () {
            return{priority: 99, link: function (d, e, g) {
                var f = a, k = a;
                "href" === a && "[object SVGAnimatedString]" === xa.call(e.prop("href")) && (k = "xlinkHref", g.$attr[k] = "xlink:href", f = null);
                g.$observe(c, function (a) {
                    a && (g.$set(k, a), P && f && e.prop(f, g[k]))
                })
            }}
        }
    });
    var vb = {$addControl: A, $removeControl: A, $setValidity: A, $setDirty: A, $setPristine: A};
    Oc.$inject = ["$element", "$attrs", "$scope", "$animate"];
    var Rc = function (a) {
        return["$timeout", function (c) {
            return{name: "form", restrict: a ? "EAC" : "E", controller: Oc, compile: function () {
                return{pre: function (a, e, g, f) {
                    if (!g.action) {
                        var k = function (a) {
                            a.preventDefault ? a.preventDefault() : a.returnValue = !1
                        };
                        pb(e[0], "submit", k);
                        e.on("$destroy", function () {
                            c(function () {
                                Xa(e[0], "submit", k)
                            }, 0, !1)
                        })
                    }
                    var m = e.parent().controller("form"), h = g.name || g.ngForm;
                    h && rb(a, h, f, h);
                    if (m)e.on("$destroy", function () {
                        m.$removeControl(f);
                        h && rb(a, h, s, h);
                        E(f, vb)
                    })
                }}
            }}
        }]
    }, ed = Rc(), rd = Rc(!0), Qe = /^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/, Re = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i, Se = /^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/, Sc = {text: xb, number: function (a, c, d, e, g, f) {
        xb(a, c, d, e, g, f);
        e.$parsers.push(function (a) {
            var c = e.$isEmpty(a);
            if (c || Se.test(a))return e.$setValidity("number", !0), "" === a ? null : c ? a : parseFloat(a);
            e.$setValidity("number", !1);
            return s
        });
        Ie(e, "number", Te, null, e.$$validityState);
        e.$formatters.push(function (a) {
            return e.$isEmpty(a) ? "" : "" + a
        });
        d.min && (a = function (a) {
            var c = parseFloat(d.min);
            return ra(e, "min", e.$isEmpty(a) || a >= c, a)
        }, e.$parsers.push(a), e.$formatters.push(a));
        d.max && (a = function (a) {
            var c = parseFloat(d.max);
            return ra(e, "max", e.$isEmpty(a) || a <= c, a)
        }, e.$parsers.push(a), e.$formatters.push(a));
        e.$formatters.push(function (a) {
            return ra(e, "number", e.$isEmpty(a) || yb(a), a)
        })
    }, url: function (a, c, d, e, g, f) {
        xb(a, c, d, e, g, f);
        a = function (a) {
            return ra(e, "url", e.$isEmpty(a) || Qe.test(a), a)
        };
        e.$formatters.push(a);
        e.$parsers.push(a)
    }, email: function (a, c, d, e, g, f) {
        xb(a, c, d, e, g, f);
        a = function (a) {
            return ra(e, "email", e.$isEmpty(a) || Re.test(a), a)
        };
        e.$formatters.push(a);
        e.$parsers.push(a)
    }, radio: function (a, c, d, e) {
        F(d.name) && c.attr("name", eb());
        c.on("click", function () {
            c[0].checked && a.$apply(function () {
                e.$setViewValue(d.value)
            })
        });
        e.$render = function () {
            c[0].checked = d.value == e.$viewValue
        };
        d.$observe("value", e.$render)
    }, checkbox: function (a, c, d, e) {
        var g = d.ngTrueValue, f = d.ngFalseValue;
        y(g) || (g = !0);
        y(f) || (f = !1);
        c.on("click", function () {
            a.$apply(function () {
                e.$setViewValue(c[0].checked)
            })
        });
        e.$render = function () {
            c[0].checked = e.$viewValue
        };
        e.$isEmpty = function (a) {
            return a !== g
        };
        e.$formatters.push(function (a) {
            return a === g
        });
        e.$parsers.push(function (a) {
            return a ? g : f
        })
    }, hidden: A, button: A, submit: A, reset: A, file: A}, Te = ["badInput"], gc = ["$browser", "$sniffer", function (a, c) {
        return{restrict: "E", require: "?ngModel", link: function (d, e, g, f) {
            f && (Sc[I(g.type)] || Sc.text)(d, e, g, f, c, a)
        }}
    }], ub = "ng-valid", tb = "ng-invalid", Na = "ng-pristine", wb = "ng-dirty", Ue = ["$scope", "$exceptionHandler", "$attrs", "$element", "$parse", "$animate", function (a, c, d, e, g, f) {
        function k(a, c) {
            c = c ? "-" + ib(c, "-") : "";
            f.removeClass(e, (a ? tb : ub) + c);
            f.addClass(e, (a ? ub : tb) + c)
        }

        this.$modelValue = this.$viewValue = Number.NaN;
        this.$parsers = [];
        this.$formatters = [];
        this.$viewChangeListeners = [];
        this.$pristine = !0;
        this.$dirty = !1;
        this.$valid = !0;
        this.$invalid = !1;
        this.$name = d.name;
        var m = g(d.ngModel), h = m.assign;
        if (!h)throw v("ngModel")("nonassign", d.ngModel, ga(e));
        this.$render = A;
        this.$isEmpty = function (a) {
            return F(a) || "" === a || null === a || a !== a
        };
        var l = e.inheritedData("$formController") || vb, p = 0, n = this.$error = {};
        e.addClass(Na);
        k(!0);
        this.$setValidity = function (a, c) {
            n[a] !== !c && (c ? (n[a] && p--, p || (k(!0), this.$valid = !0, this.$invalid = !1)) : (k(!1), this.$invalid = !0, this.$valid = !1, p++), n[a] = !c, k(c, a), l.$setValidity(a, c, this))
        };
        this.$setPristine = function () {
            this.$dirty = !1;
            this.$pristine = !0;
            f.removeClass(e, wb);
            f.addClass(e, Na)
        };
        this.$setViewValue = function (d) {
            this.$viewValue = d;
            this.$pristine && (this.$dirty = !0, this.$pristine = !1, f.removeClass(e, Na), f.addClass(e, wb), l.$setDirty());
            q(this.$parsers, function (a) {
                d = a(d)
            });
            this.$modelValue !== d && (this.$modelValue = d, h(a, d), q(this.$viewChangeListeners, function (a) {
                try {
                    a()
                } catch (d) {
                    c(d)
                }
            }))
        };
        var r = this;
        a.$watch(function () {
            var c = m(a);
            if (r.$modelValue !== c) {
                var d = r.$formatters, e = d.length;
                for (r.$modelValue = c; e--;)c = d[e](c);
                r.$viewValue !== c && (r.$viewValue = c, r.$render())
            }
            return c
        })
    }], Gd = function () {
        return{require: ["ngModel", "^?form"], controller: Ue, link: function (a, c, d, e) {
            var g = e[0], f = e[1] || vb;
            f.$addControl(g);
            a.$on("$destroy", function () {
                f.$removeControl(g)
            })
        }}
    }, Id = $({require: "ngModel", link: function (a, c, d, e) {
        e.$viewChangeListeners.push(function () {
            a.$eval(d.ngChange)
        })
    }}), hc = function () {
        return{require: "?ngModel", link: function (a, c, d, e) {
            if (e) {
                d.required = !0;
                var g = function (a) {
                    if (d.required && e.$isEmpty(a))e.$setValidity("required", !1); else return e.$setValidity("required", !0), a
                };
                e.$formatters.push(g);
                e.$parsers.unshift(g);
                d.$observe("required", function () {
                    g(e.$viewValue)
                })
            }
        }}
    }, Hd = function () {
        return{require: "ngModel", link: function (a, c, d, e) {
            var g = (a = /\/(.*)\//.exec(d.ngList)) && RegExp(a[1]) || d.ngList || ",";
            e.$parsers.push(function (a) {
                if (!F(a)) {
                    var c = [];
                    a && q(a.split(g), function (a) {
                        a && c.push(aa(a))
                    });
                    return c
                }
            });
            e.$formatters.push(function (a) {
                return L(a) ? a.join(", ") : s
            });
            e.$isEmpty = function (a) {
                return!a || !a.length
            }
        }}
    }, Ve = /^(true|false|\d+)$/, Jd = function () {
        return{priority: 100, compile: function (a, c) {
            return Ve.test(c.ngValue) ? function (a, c, g) {
                g.$set("value", a.$eval(g.ngValue))
            } : function (a, c, g) {
                a.$watch(g.ngValue, function (a) {
                    g.$set("value", a)
                })
            }
        }}
    }, jd = wa({compile: function (a) {
        a.addClass("ng-binding");
        return function (a, d, e) {
            d.data("$binding", e.ngBind);
            a.$watch(e.ngBind, function (a) {
                d.text(a == s ? "" : a)
            })
        }
    }}), ld = ["$interpolate", function (a) {
        return function (c, d, e) {
            c = a(d.attr(e.$attr.ngBindTemplate));
            d.addClass("ng-binding").data("$binding", c);
            e.$observe("ngBindTemplate", function (a) {
                d.text(a)
            })
        }
    }], kd = ["$sce", "$parse", function (a, c) {
        return function (d, e, g) {
            e.addClass("ng-binding").data("$binding", g.ngBindHtml);
            var f = c(g.ngBindHtml);
            d.$watch(function () {
                return(f(d) || "").toString()
            }, function (c) {
                e.html(a.getTrustedHtml(f(d)) || "")
            })
        }
    }], md = Ub("", !0), od = Ub("Odd", 0), nd = Ub("Even", 1), pd = wa({compile: function (a, c) {
        c.$set("ngCloak", s);
        a.removeClass("ng-cloak")
    }}), qd = [function () {
        return{scope: !0, controller: "@", priority: 500}
    }], ic = {};
    q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "), function (a) {
        var c = ma("ng-" + a);
        ic[c] = ["$parse", function (d) {
            return{compile: function (e, g) {
                var f = d(g[c]);
                return function (c, d) {
                    d.on(I(a), function (a) {
                        c.$apply(function () {
                            f(c, {$event: a})
                        })
                    })
                }
            }}
        }]
    });
    var td = ["$animate", function (a) {
        return{transclude: "element", priority: 600, terminal: !0, restrict: "A", $$tlb: !0, link: function (c, d, e, g, f) {
            var k, m, h;
            c.$watch(e.ngIf, function (g) {
                Sa(g) ? m || (m = c.$new(), f(m, function (c) {
                    c[c.length++] = U.createComment(" end ngIf: " + e.ngIf + " ");
                    k = {clone: c};
                    a.enter(c, d.parent(), d)
                })) : (h && (h.remove(), h = null), m && (m.$destroy(), m = null), k && (h = Cb(k.clone), a.leave(h, function () {
                    h = null
                }), k = null))
            })
        }}
    }], ud = ["$http", "$templateCache", "$anchorScroll", "$animate", "$sce", function (a, c, d, e, g) {
        return{restrict: "ECA", priority: 400, terminal: !0, transclude: "element", controller: Ta.noop, compile: function (f, k) {
            var m = k.ngInclude || k.src, h = k.onload || "", l = k.autoscroll;
            return function (f, k, q, t, J) {
                var w = 0, u, x, s, z = function () {
                    x && (x.remove(), x = null);
                    u && (u.$destroy(), u = null);
                    s && (e.leave(s, function () {
                        x = null
                    }), x = s, s = null)
                };
                f.$watch(g.parseAsResourceUrl(m), function (g) {
                    var m = function () {
                        !B(l) || l && !f.$eval(l) || d()
                    }, q = ++w;
                    g ? (a.get(g, {cache: c}).success(function (a) {
                        if (q === w) {
                            var c = f.$new();
                            t.template = a;
                            a = J(c, function (a) {
                                z();
                                e.enter(a, null, k, m)
                            });
                            u = c;
                            s = a;
                            u.$emit("$includeContentLoaded");
                            f.$eval(h)
                        }
                    }).error(function () {
                        q === w && z()
                    }), f.$emit("$includeContentRequested")) : (z(), t.template = null)
                })
            }
        }}
    }], Kd = ["$compile", function (a) {
        return{restrict: "ECA", priority: -400, require: "ngInclude", link: function (c, d, e, g) {
            d.html(g.template);
            a(d.contents())(c)
        }}
    }], vd = wa({priority: 450, compile: function () {
        return{pre: function (a, c, d) {
            a.$eval(d.ngInit)
        }}
    }}), wd = wa({terminal: !0, priority: 1E3}), xd = ["$locale", "$interpolate", function (a, c) {
        var d = /{}/g;
        return{restrict: "EA", link: function (e, g, f) {
            var k = f.count, m = f.$attr.when && g.attr(f.$attr.when), h = f.offset || 0, l = e.$eval(m) || {}, p = {}, n = c.startSymbol(), r = c.endSymbol(), t = /^when(Minus)?(.+)$/;
            q(f, function (a, c) {
                t.test(c) && (l[I(c.replace("when", "").replace("Minus", "-"))] = g.attr(f.$attr[c]))
            });
            q(l, function (a, e) {
                p[e] = c(a.replace(d, n + k + "-" + h + r))
            });
            e.$watch(function () {
                var c = parseFloat(e.$eval(k));
                if (isNaN(c))return"";
                c in l || (c = a.pluralCat(c - h));
                return p[c](e, g, !0)
            }, function (a) {
                g.text(a)
            })
        }}
    }], yd = ["$parse", "$animate", function (a, c) {
        var d = v("ngRepeat");
        return{transclude: "element", priority: 1E3, terminal: !0, $$tlb: !0, link: function (e, g, f, k, m) {
            var h = f.ngRepeat, l = h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/), p, n, r, t, s, w, u = {$id: Ja};
            if (!l)throw d("iexp", h);
            f = l[1];
            k = l[2];
            (l = l[3]) ? (p = a(l), n = function (a, c, d) {
                w && (u[w] = a);
                u[s] = c;
                u.$index = d;
                return p(e, u)
            }) : (r = function (a, c) {
                return Ja(c)
            }, t = function (a) {
                return a
            });
            l = f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);
            if (!l)throw d("iidexp", f);
            s = l[3] || l[1];
            w = l[2];
            var B = {};
            e.$watchCollection(k, function (a) {
                var f, k, l = g[0], p, u = {}, C, D, H, v, y, A, F = [];
                if (db(a))y = a, p = n || r; else {
                    p = n || t;
                    y = [];
                    for (H in a)a.hasOwnProperty(H) && "$" != H.charAt(0) && y.push(H);
                    y.sort()
                }
                C = y.length;
                k = F.length = y.length;
                for (f = 0; f < k; f++)if (H = a === y ? f : y[f], v = a[H], v = p(H, v, f), Ba(v, "`track by` id"), B.hasOwnProperty(v))A = B[v], delete B[v], u[v] = A, F[f] = A; else {
                    if (u.hasOwnProperty(v))throw q(F, function (a) {
                        a && a.scope && (B[a.id] = a)
                    }), d("dupes", h, v);
                    F[f] = {id: v};
                    u[v] = !1
                }
                for (H in B)B.hasOwnProperty(H) && (A = B[H], f = Cb(A.clone), c.leave(f), q(f, function (a) {
                    a.$$NG_REMOVED = !0
                }), A.scope.$destroy());
                f = 0;
                for (k = y.length; f < k; f++) {
                    H = a === y ? f : y[f];
                    v = a[H];
                    A = F[f];
                    F[f - 1] && (l = F[f - 1].clone[F[f - 1].clone.length - 1]);
                    if (A.scope) {
                        D = A.scope;
                        p = l;
                        do p = p.nextSibling; while (p && p.$$NG_REMOVED);
                        A.clone[0] != p && c.move(Cb(A.clone), null, x(l));
                        l = A.clone[A.clone.length - 1]
                    } else D = e.$new();
                    D[s] = v;
                    w && (D[w] = H);
                    D.$index = f;
                    D.$first = 0 === f;
                    D.$last = f === C - 1;
                    D.$middle = !(D.$first || D.$last);
                    D.$odd = !(D.$even = 0 === (f & 1));
                    A.scope || m(D, function (a) {
                        a[a.length++] = U.createComment(" end ngRepeat: " + h + " ");
                        c.enter(a, null, x(l));
                        l = a;
                        A.scope = D;
                        A.clone = a;
                        u[A.id] = A
                    })
                }
                B = u
            })
        }}
    }], zd = ["$animate", function (a) {
        return function (c, d, e) {
            c.$watch(e.ngShow, function (c) {
                a[Sa(c) ? "removeClass" : "addClass"](d, "ng-hide")
            })
        }
    }], sd = ["$animate", function (a) {
        return function (c, d, e) {
            c.$watch(e.ngHide, function (c) {
                a[Sa(c) ? "addClass" : "removeClass"](d, "ng-hide")
            })
        }
    }], Ad = wa(function (a, c, d) {
        a.$watch(d.ngStyle, function (a, d) {
            d && a !== d && q(d, function (a, d) {
                c.css(d, "")
            });
            a && c.css(a)
        }, !0)
    }), Bd = ["$animate", function (a) {
        return{restrict: "EA", require: "ngSwitch", controller: ["$scope", function () {
            this.cases = {}
        }], link: function (c, d, e, g) {
            var f = [], k = [], m = [], h = [];
            c.$watch(e.ngSwitch || e.on, function (d) {
                var p, n;
                p = 0;
                for (n = m.length; p < n; ++p)m[p].remove();
                p = m.length = 0;
                for (n = h.length; p < n; ++p) {
                    var r = k[p];
                    h[p].$destroy();
                    m[p] = r;
                    a.leave(r, function () {
                        m.splice(p, 1)
                    })
                }
                k.length = 0;
                h.length = 0;
                if (f = g.cases["!" + d] || g.cases["?"])c.$eval(e.change), q(f, function (d) {
                    var e = c.$new();
                    h.push(e);
                    d.transclude(e, function (c) {
                        var e = d.element;
                        k.push(c);
                        a.enter(c, e.parent(), e)
                    })
                })
            })
        }}
    }], Cd = wa({transclude: "element", priority: 800, require: "^ngSwitch", link: function (a, c, d, e, g) {
        e.cases["!" + d.ngSwitchWhen] = e.cases["!" + d.ngSwitchWhen] || [];
        e.cases["!" + d.ngSwitchWhen].push({transclude: g, element: c})
    }}), Dd = wa({transclude: "element", priority: 800, require: "^ngSwitch", link: function (a, c, d, e, g) {
        e.cases["?"] = e.cases["?"] || [];
        e.cases["?"].push({transclude: g, element: c})
    }}), Fd = wa({link: function (a, c, d, e, g) {
        if (!g)throw v("ngTransclude")("orphan", ga(c));
        g(function (a) {
            c.empty();
            c.append(a)
        })
    }}), fd = ["$templateCache", function (a) {
        return{restrict: "E", terminal: !0, compile: function (c, d) {
            "text/ng-template" == d.type && a.put(d.id, c[0].text)
        }}
    }], We = v("ngOptions"), Ed = $({terminal: !0}), gd = ["$compile", "$parse", function (a, c) {
        var d = /^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/, e = {$setViewValue: A};
        return{restrict: "E", require: ["select", "?ngModel"], controller: ["$element", "$scope", "$attrs", function (a, c, d) {
            var m = this, h = {}, l = e, p;
            m.databound = d.ngModel;
            m.init = function (a, c, d) {
                l = a;
                p = d
            };
            m.addOption = function (c) {
                Ba(c, '"option value"');
                h[c] = !0;
                l.$viewValue == c && (a.val(c), p.parent() && p.remove())
            };
            m.removeOption = function (a) {
                this.hasOption(a) && (delete h[a], l.$viewValue == a && this.renderUnknownOption(a))
            };
            m.renderUnknownOption = function (c) {
                c = "? " + Ja(c) + " ?";
                p.val(c);
                a.prepend(p);
                a.val(c);
                p.prop("selected", !0)
            };
            m.hasOption = function (a) {
                return h.hasOwnProperty(a)
            };
            c.$on("$destroy", function () {
                m.renderUnknownOption = A
            })
        }], link: function (e, f, k, m) {
            function h(a, c, d, e) {
                d.$render = function () {
                    var a = d.$viewValue;
                    e.hasOption(a) ? (y.parent() && y.remove(), c.val(a), "" === a && w.prop("selected", !0)) : F(a) && w ? c.val("") : e.renderUnknownOption(a)
                };
                c.on("change", function () {
                    a.$apply(function () {
                        y.parent() && y.remove();
                        d.$setViewValue(c.val())
                    })
                })
            }

            function l(a, c, d) {
                var e;
                d.$render = function () {
                    var a = new Za(d.$viewValue);
                    q(c.find("option"), function (c) {
                        c.selected = B(a.get(c.value))
                    })
                };
                a.$watch(function () {
                    ya(e, d.$viewValue) || (e = ka(d.$viewValue), d.$render())
                });
                c.on("change", function () {
                    a.$apply(function () {
                        var a = [];
                        q(c.find("option"), function (c) {
                            c.selected && a.push(c.value)
                        });
                        d.$setViewValue(a)
                    })
                })
            }

            function p(e, f, g) {
                function k() {
                    var a = {"": []}, c = [""], d, h, s, t, z;
                    t = g.$modelValue;
                    z = x(e) || [];
                    var D = n ? Vb(z) : z, F, Q, C;
                    Q = {};
                    s = !1;
                    var E, I;
                    if (r)if (w && L(t))for (s = new Za([]), C = 0; C < t.length; C++)Q[m] = t[C], s.put(w(e, Q), t[C]); else s = new Za(t);
                    for (C = 0; F = D.length, C < F; C++) {
                        h = C;
                        if (n) {
                            h = D[C];
                            if ("$" === h.charAt(0))continue;
                            Q[n] = h
                        }
                        Q[m] = z[h];
                        d = p(e, Q) || "";
                        (h = a[d]) || (h = a[d] = [], c.push(d));
                        r ? d = B(s.remove(w ? w(e, Q) : q(e, Q))) : (w ? (d = {}, d[m] = t, d = w(e, d) === w(e, Q)) : d = t === q(e, Q), s = s || d);
                        E = l(e, Q);
                        E = B(E) ? E : "";
                        h.push({id: w ? w(e, Q) : n ? D[C] : C, label: E, selected: d})
                    }
                    r || (v || null === t ? a[""].unshift({id: "", label: "", selected: !s}) : s || a[""].unshift({id: "?", label: "", selected: !0}));
                    Q = 0;
                    for (D = c.length; Q < D; Q++) {
                        d = c[Q];
                        h = a[d];
                        y.length <= Q ? (t = {element: A.clone().attr("label", d), label: h.label}, z = [t], y.push(z), f.append(t.element)) : (z = y[Q], t = z[0], t.label != d && t.element.attr("label", t.label = d));
                        E = null;
                        C = 0;
                        for (F = h.length; C < F; C++)s = h[C], (d = z[C + 1]) ? (E = d.element, d.label !== s.label && E.text(d.label = s.label), d.id !== s.id && E.val(d.id = s.id), d.selected !== s.selected && E.prop("selected", d.selected = s.selected)) : ("" === s.id && v ? I = v : (I = u.clone()).val(s.id).prop("selected", s.selected).text(s.label), z.push({element: I, label: s.label, id: s.id, selected: s.selected}), E ? E.after(I) : t.element.append(I), E = I);
                        for (C++; z.length > C;)z.pop().element.remove()
                    }
                    for (; y.length > Q;)y.pop()[0].element.remove()
                }

                var h;
                if (!(h = t.match(d)))throw We("iexp", t, ga(f));
                var l = c(h[2] || h[1]), m = h[4] || h[6], n = h[5], p = c(h[3] || ""), q = c(h[2] ? h[1] : m), x = c(h[7]), w = h[8] ? c(h[8]) : null, y = [
                    [
                        {element: f, label: ""}
                    ]
                ];
                v && (a(v)(e), v.removeClass("ng-scope"), v.remove());
                f.empty();
                f.on("change", function () {
                    e.$apply(function () {
                        var a, c = x(e) || [], d = {}, h, k, l, p, t, u, v;
                        if (r)for (k = [], p = 0, u = y.length; p < u; p++)for (a = y[p], l = 1, t = a.length; l < t; l++) {
                            if ((h = a[l].element)[0].selected) {
                                h = h.val();
                                n && (d[n] = h);
                                if (w)for (v = 0; v < c.length && (d[m] = c[v], w(e, d) != h); v++); else d[m] = c[h];
                                k.push(q(e, d))
                            }
                        } else {
                            h = f.val();
                            if ("?" == h)k = s; else if ("" === h)k = null; else if (w)for (v = 0; v < c.length; v++) {
                                if (d[m] = c[v], w(e, d) == h) {
                                    k = q(e, d);
                                    break
                                }
                            } else d[m] = c[h], n && (d[n] = h), k = q(e, d);
                            1 < y[0].length && y[0][1].id !== h && (y[0][1].selected = !1)
                        }
                        g.$setViewValue(k)
                    })
                });
                g.$render = k;
                e.$watch(k)
            }

            if (m[1]) {
                var n = m[0];
                m = m[1];
                var r = k.multiple, t = k.ngOptions, v = !1, w, u = x(U.createElement("option")), A = x(U.createElement("optgroup")), y = u.clone();
                k = 0;
                for (var z = f.children(), E = z.length; k < E; k++)if ("" === z[k].value) {
                    w = v = z.eq(k);
                    break
                }
                n.init(m, v, y);
                r && (m.$isEmpty = function (a) {
                    return!a || 0 === a.length
                });
                t ? p(e, f, m) : r ? l(e, f, m) : h(e, f, m, n)
            }
        }}
    }], id = ["$interpolate", function (a) {
        var c = {addOption: A, removeOption: A};
        return{restrict: "E", priority: 100, compile: function (d, e) {
            if (F(e.value)) {
                var g = a(d.text(), !0);
                g || e.$set("value", d.text())
            }
            return function (a, d, e) {
                var h = d.parent(), l = h.data("$selectController") || h.parent().data("$selectController");
                l && l.databound ? d.prop("selected", !1) : l = c;
                g ? a.$watch(g, function (a, c) {
                    e.$set("value", a);
                    a !== c && l.removeOption(c);
                    l.addOption(a)
                }) : l.addOption(e.value);
                d.on("$destroy", function () {
                    l.removeOption(e.value)
                })
            }
        }}
    }], hd = $({restrict: "E", terminal: !0});
    S.angular.bootstrap ? console.log("WARNING: Tried to load angular more than once.") : ((Ca = S.jQuery) && Ca.fn.on ? (x = Ca, E(Ca.fn, {scope: Ka.scope, isolateScope: Ka.isolateScope, controller: Ka.controller, injector: Ka.injector, inheritedData: Ka.inheritedData}), Eb("remove", !0, !0, !1), Eb("empty", !1, !1, !1), Eb("html", !1, !1, !0)) : x = R, Ta.element = x, $c(Ta), x(U).ready(function () {
        Xc(U, cc)
    }))
})(window, document);

(function (F, e, O) {
    'use strict';
    e.module("ngAnimate", ["ng"]).directive("ngAnimateChildren", function () {
        return function (G, s, g) {
            g = g.ngAnimateChildren;
            e.isString(g) && 0 === g.length ? s.data("$$ngAnimateChildren", !0) : G.$watch(g, function (e) {
                s.data("$$ngAnimateChildren", !!e)
            })
        }
    }).factory("$$animateReflow", ["$$rAF", "$document", function (e, s) {
        return function (g) {
            return e(function () {
                g()
            })
        }
    }]).config(["$provide", "$animateProvider", function (G, s) {
        function g(e) {
            for (var g = 0; g < e.length; g++) {
                var l = e[g];
                if (l.nodeType == aa)return l
            }
        }

        function B(l) {
            return e.element(g(l))
        }

        var m = e.noop, u = e.forEach, P = s.$$selectors, aa = 1, l = "$$ngAnimateState", V = "$$ngAnimateChildren", J = "ng-animate", n = {running: !0};
        G.decorator("$animate", ["$delegate", "$injector", "$sniffer", "$rootElement", "$$asyncCallback", "$rootScope", "$document", function (z, F, $, R, E, H, O) {
            function K(a) {
                var b = a.data(l) || {};
                b.running = !0;
                a.data(l, b)
            }

            function L(a) {
                if (a) {
                    var b = [], c = {};
                    a = a.substr(1).split(".");
                    ($.transitions || $.animations) && b.push(F.get(P[""]));
                    for (var d = 0; d < a.length; d++) {
                        var f = a[d], e = P[f];
                        e && !c[f] && (b.push(F.get(e)), c[f] = !0)
                    }
                    return b
                }
            }

            function G(a, b, c) {
                function d(a, b) {
                    var c = a[b], d = a["before" + b.charAt(0).toUpperCase() + b.substr(1)];
                    if (c || d)return"leave" == b && (d = c, c = null), n.push({event: b, fn: c}), h.push({event: b, fn: d}), !0
                }

                function f(b, d, e) {
                    var f = [];
                    u(b, function (a) {
                        a.fn && f.push(a)
                    });
                    var g = 0;
                    u(f, function (b, l) {
                        var C = function () {
                            a:{
                                if (d) {
                                    (d[l] || m)();
                                    if (++g < f.length)break a;
                                    d = null
                                }
                                e()
                            }
                        };
                        switch (b.event) {
                            case"setClass":
                                d.push(b.fn(a, A, k, C));
                                break;
                            case"addClass":
                                d.push(b.fn(a, A || c, C));
                                break;
                            case"removeClass":
                                d.push(b.fn(a, k || c, C));
                                break;
                            default:
                                d.push(b.fn(a, C))
                        }
                    });
                    d && 0 === d.length && e()
                }

                var g = a[0];
                if (g) {
                    var l = "setClass" == b, p = l || "addClass" == b || "removeClass" == b, A, k;
                    e.isArray(c) && (A = c[0], k = c[1], c = A + " " + k);
                    var x = a.attr("class") + " " + c;
                    if (M(x)) {
                        var t = m, w = [], h = [], q = m, y = [], n = [], x = (" " + x).replace(/\s+/g, ".");
                        u(L(x), function (a) {
                            !d(a, b) && l && (d(a, "addClass"), d(a, "removeClass"))
                        });
                        return{node: g, event: b, className: c, isClassBased: p, isSetClassOperation: l, before: function (a) {
                            t = a;
                            f(h, w, function () {
                                t = m;
                                a()
                            })
                        }, after: function (a) {
                            q = a;
                            f(n, y, function () {
                                q = m;
                                a()
                            })
                        }, cancel: function () {
                            w && (u(w, function (a) {
                                (a || m)(!0)
                            }), t(!0));
                            y && (u(y, function (a) {
                                (a || m)(!0)
                            }), q(!0))
                        }}
                    }
                }
            }

            function r(a, b, c, d, f, g, n) {
                function p(d) {
                    var e = "$animate:" + d;
                    q && (q[e] && 0 < q[e].length) && E(function () {
                        c.triggerHandler(e, {event: a, className: b})
                    })
                }

                function A() {
                    p("before")
                }

                function m() {
                    p("after")
                }

                function x() {
                    p("close");
                    n && E(function () {
                        n()
                    })
                }

                function t() {
                    t.hasBeenRun || (t.hasBeenRun = !0, g())
                }

                function w() {
                    if (!w.hasBeenRun) {
                        w.hasBeenRun = !0;
                        var d = c.data(l);
                        d && (h && h.isClassBased ? k(c, b) : (E(function () {
                            var d = c.data(l) || {};
                            r == d.index && k(c, b, a)
                        }), c.data(l, d)));
                        x()
                    }
                }

                var h = G(c, a, b);
                if (h) {
                    b = h.className;
                    var q = e.element._data(h.node), q = q && q.events;
                    d || (d = f ? f.parent() : c.parent());
                    var y = c.data(l) || {};
                    f = y.active || {};
                    var z = y.totalActive || 0, C = y.last, D;
                    h.isClassBased && (D = y.running || y.disabled || C && !C.isClassBased);
                    if (D || N(c, d))t(), A(), m(), w(); else {
                        d = !1;
                        if (0 < z) {
                            D = [];
                            if (h.isClassBased)"setClass" == C.event ? (D.push(C), k(c, b)) : f[b] && (v = f[b], v.event == a ? d = !0 : (D.push(v), k(c, b))); else if ("leave" == a && f["ng-leave"])d = !0; else {
                                for (var v in f)D.push(f[v]), k(c, v);
                                f = {};
                                z = 0
                            }
                            0 < D.length && u(D, function (a) {
                                a.cancel()
                            })
                        }
                        !h.isClassBased || (h.isSetClassOperation || d) || (d = "addClass" == a == c.hasClass(b));
                        if (d)t(), A(), m(), x(); else {
                            if ("leave" == a)c.one("$destroy", function (a) {
                                a = e.element(this);
                                var b = a.data(l);
                                b && (b = b.active["ng-leave"]) && (b.cancel(), k(a, "ng-leave"))
                            });
                            c.addClass(J);
                            var r = Y++;
                            z++;
                            f[b] = h;
                            c.data(l, {last: h, active: f, index: r, totalActive: z});
                            A();
                            h.before(function (d) {
                                var e = c.data(l);
                                d = d || !e || !e.active[b] || h.isClassBased && e.active[b].event != a;
                                t();
                                !0 === d ? w() : (m(), h.after(w))
                            })
                        }
                    }
                } else t(), A(), m(), w()
            }

            function T(a) {
                if (a = g(a))a = e.isFunction(a.getElementsByClassName) ? a.getElementsByClassName(J) : a.querySelectorAll("." + J), u(a, function (a) {
                    a = e.element(a);
                    (a = a.data(l)) && a.active && u(a.active, function (a) {
                        a.cancel()
                    })
                })
            }

            function k(a, b) {
                if (g(a) == g(R))n.disabled || (n.running = !1, n.structural = !1); else if (b) {
                    var c = a.data(l) || {}, d = !0 === b;
                    !d && (c.active && c.active[b]) && (c.totalActive--, delete c.active[b]);
                    if (d || !c.totalActive)a.removeClass(J), a.removeData(l)
                }
            }

            function N(a, b) {
                if (n.disabled)return!0;
                if (g(a) == g(R))return n.running;
                var c, d, f;
                do {
                    if (0 === b.length)break;
                    var m = g(b) == g(R), k = m ? n : b.data(l) || {};
                    if (k.disabled)return!0;
                    m && (f = !0);
                    !1 !== c && (m = b.data(V), e.isDefined(m) && (c = m));
                    d = d || k.running || k.last && !k.last.isClassBased
                } while (b = b.parent());
                return!f || !c && d
            }

            var Y = 0;
            R.data(l, n);
            H.$$postDigest(function () {
                H.$$postDigest(function () {
                    n.running = !1
                })
            });
            var Q = s.classNameFilter(), M = Q ? function (a) {
                return Q.test(a)
            } : function () {
                return!0
            };
            return{enter: function (a, b, c, d) {
                a = e.element(a);
                b = b && e.element(b);
                c = c && e.element(c);
                K(a);
                z.enter(a, b, c);
                H.$$postDigest(function () {
                    a = B(a);
                    r("enter", "ng-enter", a, b, c, m, d)
                })
            }, leave: function (a, b) {
                a = e.element(a);
                T(a);
                K(a);
                H.$$postDigest(function () {
                    r("leave", "ng-leave", B(a), null, null, function () {
                        z.leave(a)
                    }, b)
                })
            }, move: function (a, b, c, d) {
                a = e.element(a);
                b = b && e.element(b);
                c = c && e.element(c);
                T(a);
                K(a);
                z.move(a, b, c);
                H.$$postDigest(function () {
                    a = B(a);
                    r("move", "ng-move", a, b, c, m, d)
                })
            }, addClass: function (a, b, c) {
                a = e.element(a);
                a = B(a);
                r("addClass", b, a, null, null, function () {
                    z.addClass(a, b)
                }, c)
            }, removeClass: function (a, b, c) {
                a = e.element(a);
                a = B(a);
                r("removeClass", b, a, null, null, function () {
                    z.removeClass(a, b)
                }, c)
            }, setClass: function (a, b, c, d) {
                a = e.element(a);
                a = B(a);
                r("setClass", [b, c], a, null, null, function () {
                    z.setClass(a, b, c)
                }, d)
            }, enabled: function (a, b) {
                switch (arguments.length) {
                    case 2:
                        if (a)k(b); else {
                            var c = b.data(l) || {};
                            c.disabled = !0;
                            b.data(l, c)
                        }
                        break;
                    case 1:
                        n.disabled = !a;
                        break;
                    default:
                        a = !n.disabled
                }
                return!!a
            }}
        }]);
        s.register("", ["$window", "$sniffer", "$timeout", "$$animateReflow", function (l, n, s, B) {
            function E(a, U) {
                S && S();
                W.push(U);
                S = B(function () {
                    u(W, function (a) {
                        a()
                    });
                    W = [];
                    S = null;
                    v = {}
                })
            }

            function H(a, U) {
                var b = g(a);
                a = e.element(b);
                Z.push(a);
                b = Date.now() + U;
                b <= da || (s.cancel(ca), da = b, ca = s(function () {
                    G(Z);
                    Z = []
                }, U, !1))
            }

            function G(a) {
                u(a, function (a) {
                    (a = a.data(q)) && (a.closeAnimationFn || m)()
                })
            }

            function K(a, b) {
                var c = b ? v[b] : null;
                if (!c) {
                    var d = 0, e = 0, f = 0, g = 0, m, k, h, q;
                    u(a, function (a) {
                        if (a.nodeType == aa) {
                            a = l.getComputedStyle(a) || {};
                            h = a[I + P];
                            d = Math.max(L(h), d);
                            q = a[I + x];
                            m = a[I + t];
                            e = Math.max(L(m), e);
                            k = a[p + t];
                            g = Math.max(L(k), g);
                            var b = L(a[p + P]);
                            0 < b && (b *= parseInt(a[p + w], 10) || 1);
                            f = Math.max(b, f)
                        }
                    });
                    c = {total: 0, transitionPropertyStyle: q, transitionDurationStyle: h, transitionDelayStyle: m, transitionDelay: e, transitionDuration: d, animationDelayStyle: k, animationDelay: g, animationDuration: f};
                    b && (v[b] = c)
                }
                return c
            }

            function L(a) {
                var b = 0;
                a = e.isString(a) ? a.split(/\s*,\s*/) : [];
                u(a, function (a) {
                    b = Math.max(parseFloat(a) || 0, b)
                });
                return b
            }

            function J(a) {
                var b = a.parent(), c = b.data(h);
                c || (b.data(h, ++ba), c = ba);
                return c + "-" + g(a).getAttribute("class")
            }

            function r(a, b, c, d) {
                var e = J(b), f = e + " " + c, l = v[f] ? ++v[f].total : 0, k = {};
                if (0 < l) {
                    var h = c + "-stagger", k = e + " " + h;
                    (e = !v[k]) && b.addClass(h);
                    k = K(b, k);
                    e && b.removeClass(h)
                }
                d = d || function (a) {
                    return a()
                };
                b.addClass(c);
                var h = b.data(q) || {}, n = d(function () {
                    return K(b, f)
                });
                d = n.transitionDuration;
                e = n.animationDuration;
                if (0 === d && 0 === e)return b.removeClass(c), !1;
                b.data(q, {running: h.running || 0, itemIndex: l, stagger: k, timings: n, closeAnimationFn: m});
                a = 0 < h.running || "setClass" == a;
                0 < d && T(b, c, a);
                0 < e && (0 < k.animationDelay && 0 === k.animationDuration) && (g(b).style[p] = "none 0s");
                return!0
            }

            function T(a, b, c) {
                "ng-enter" != b && ("ng-move" != b && "ng-leave" != b) && c ? a.addClass(y) : g(a).style[I + x] = "none"
            }

            function k(a, b) {
                var c = I + x, d = g(a);
                d.style[c] && 0 < d.style[c].length && (d.style[c] = "");
                a.removeClass(y)
            }

            function N(a) {
                var b = p;
                a = g(a);
                a.style[b] && 0 < a.style[b].length && (a.style[b] = "")
            }

            function Y(a, b, d, e) {
                function k(a) {
                    b.off(x, l);
                    b.removeClass(m);
                    c(b, d);
                    a = g(b);
                    for (var e in s)a.style.removeProperty(s[e])
                }

                function l(a) {
                    a.stopPropagation();
                    var b = a.originalEvent || a;
                    a = b.$manualTimeStamp || b.timeStamp || Date.now();
                    b = parseFloat(b.elapsedTime.toFixed(V));
                    Math.max(a - z, 0) >= y && b >= v && e()
                }

                var h = g(b);
                a = b.data(q);
                if (-1 != h.getAttribute("class").indexOf(d) && a) {
                    var m = "";
                    u(d.split(" "), function (a, b) {
                        m += (0 < b ? " " : "") + a + "-active"
                    });
                    var n = a.stagger, p = a.timings, t = a.itemIndex, v = Math.max(p.transitionDuration, p.animationDuration), w = Math.max(p.transitionDelay, p.animationDelay), y = w * D, z = Date.now(), x = A + " " + X, r = "", s = [];
                    if (0 < p.transitionDuration) {
                        var B = p.transitionPropertyStyle;
                        -1 == B.indexOf("all") && (r += f + "transition-property: " + B + ";", r += f + "transition-duration: " + p.transitionDurationStyle + ";", s.push(f + "transition-property"), s.push(f + "transition-duration"))
                    }
                    0 < t && (0 < n.transitionDelay && 0 === n.transitionDuration && (r += f + "transition-delay: " + Q(p.transitionDelayStyle, n.transitionDelay, t) + "; ", s.push(f + "transition-delay")), 0 < n.animationDelay && 0 === n.animationDuration && (r += f + "animation-delay: " + Q(p.animationDelayStyle, n.animationDelay, t) + "; ", s.push(f + "animation-delay")));
                    0 < s.length && (p = h.getAttribute("style") || "", h.setAttribute("style", p + "; " + r));
                    b.on(x, l);
                    b.addClass(m);
                    a.closeAnimationFn = function () {
                        k();
                        e()
                    };
                    h = (t * (Math.max(n.animationDelay, n.transitionDelay) || 0) + (w + v) * C) * D;
                    a.running++;
                    H(b, h);
                    return k
                }
                e()
            }

            function Q(a, b, c) {
                var d = "";
                u(a.split(","), function (a, e) {
                    d += (0 < e ? "," : "") + (c * b + parseInt(a, 10)) + "s"
                });
                return d
            }

            function M(a, b, d, e) {
                if (r(a, b, d, e))return function (a) {
                    a && c(b, d)
                }
            }

            function a(a, b, d, e) {
                if (b.data(q))return Y(a, b, d, e);
                c(b, d);
                e()
            }

            function b(b, c, d, e) {
                var f = M(b, c, d);
                if (f) {
                    var g = f;
                    E(c, function () {
                        k(c, d);
                        N(c);
                        g = a(b, c, d, e)
                    });
                    return function (a) {
                        (g || m)(a)
                    }
                }
                e()
            }

            function c(a, b) {
                a.removeClass(b);
                var c = a.data(q);
                c && (c.running && c.running--, c.running && 0 !== c.running || a.removeData(q))
            }

            function d(a, b) {
                var c = "";
                a = e.isArray(a) ? a : a.split(/\s+/);
                u(a, function (a, d) {
                    a && 0 < a.length && (c += (0 < d ? " " : "") + a + b)
                });
                return c
            }

            var f = "", I, X, p, A;
            F.ontransitionend === O && F.onwebkittransitionend !== O ? (f = "-webkit-", I = "WebkitTransition", X = "webkitTransitionEnd transitionend") : (I = "transition", X = "transitionend");
            F.onanimationend === O && F.onwebkitanimationend !== O ? (f = "-webkit-", p = "WebkitAnimation", A = "webkitAnimationEnd animationend") : (p = "animation", A = "animationend");
            var P = "Duration", x = "Property", t = "Delay", w = "IterationCount", h = "$$ngAnimateKey", q = "$$ngAnimateCSS3Data", y = "ng-animate-block-transitions", V = 3, C = 1.5, D = 1E3, v = {}, ba = 0, W = [], S, ca = null, da = 0, Z = [];
            return{enter: function (a, c) {
                return b("enter", a, "ng-enter", c)
            }, leave: function (a, c) {
                return b("leave", a, "ng-leave", c)
            }, move: function (a, c) {
                return b("move", a, "ng-move", c)
            }, beforeSetClass: function (a, b, c, e) {
                var f = d(c, "-remove") + " " + d(b, "-add"), g = M("setClass", a, f, function (d) {
                    var e = a.attr("class");
                    a.removeClass(c);
                    a.addClass(b);
                    d = d();
                    a.attr("class", e);
                    return d
                });
                if (g)return E(a, function () {
                    k(a, f);
                    N(a);
                    e()
                }), g;
                e()
            }, beforeAddClass: function (a, b, c) {
                var e = M("addClass", a, d(b, "-add"), function (c) {
                    a.addClass(b);
                    c = c();
                    a.removeClass(b);
                    return c
                });
                if (e)return E(a, function () {
                    k(a, b);
                    N(a);
                    c()
                }), e;
                c()
            }, setClass: function (b, c, e, f) {
                e = d(e, "-remove");
                c = d(c, "-add");
                return a("setClass", b, e + " " + c, f)
            }, addClass: function (b, c, e) {
                return a("addClass", b, d(c, "-add"), e)
            }, beforeRemoveClass: function (a, b, c) {
                var e = M("removeClass", a, d(b, "-remove"), function (c) {
                    var d = a.attr("class");
                    a.removeClass(b);
                    c = c();
                    a.attr("class", d);
                    return c
                });
                if (e)return E(a, function () {
                    k(a, b);
                    N(a);
                    c()
                }), e;
                c()
            }, removeClass: function (b, c, e) {
                return a("removeClass", b, d(c, "-remove"), e)
            }}
        }])
    }])
})(window, window.angular);
"undefined" != typeof module && "undefined" != typeof exports && module.exports === exports && (module.exports = "ui.router"), function (a, b, c) {
    "use strict";
    function d(a, b) {
        return I(new (I(function () {
        }, {prototype: a})), b)
    }

    function e(a) {
        return H(arguments, function (b) {
            b !== a && H(b, function (b, c) {
                a.hasOwnProperty(c) || (a[c] = b)
            })
        }), a
    }

    function f(a, b) {
        var c = [];
        for (var d in a.path) {
            if (a.path[d] !== b.path[d])break;
            c.push(a.path[d])
        }
        return c
    }

    function g(a, b) {
        if (Array.prototype.indexOf)return a.indexOf(b, Number(arguments[2]) || 0);
        var c = a.length >>> 0, d = Number(arguments[2]) || 0;
        for (d = 0 > d ? Math.ceil(d) : Math.floor(d), 0 > d && (d += c); c > d; d++)if (d in a && a[d] === b)return d;
        return-1
    }

    function h(a, b, c, d) {
        var e, h = f(c, d), i = {}, j = [];
        for (var k in h)if (h[k].params && h[k].params.length) {
            e = h[k].params;
            for (var l in e)g(j, e[l]) >= 0 || (j.push(e[l]), i[e[l]] = a[e[l]])
        }
        return I({}, i, b)
    }

    function i(a, b) {
        var c = {};
        return H(a, function (a) {
            var d = b[a];
            c[a] = null != d ? String(d) : null
        }), c
    }

    function j(a, b, c) {
        if (!c) {
            c = [];
            for (var d in a)c.push(d)
        }
        for (var e = 0; e < c.length; e++) {
            var f = c[e];
            if (a[f] != b[f])return!1
        }
        return!0
    }

    function k(a, b) {
        var c = {};
        return H(a, function (a) {
            c[a] = b[a]
        }), c
    }

    function l(a, b) {
        var d = 1, f = 2, g = {}, h = [], i = g, j = I(a.when(g), {$$promises: g, $$values: g});
        this.study = function (g) {
            function k(a, c) {
                if (o[c] !== f) {
                    if (n.push(c), o[c] === d)throw n.splice(0, n.indexOf(c)), new Error("Cyclic dependency: " + n.join(" -> "));
                    if (o[c] = d, E(a))m.push(c, [function () {
                        return b.get(a)
                    }], h); else {
                        var e = b.annotate(a);
                        H(e, function (a) {
                            a !== c && g.hasOwnProperty(a) && k(g[a], a)
                        }), m.push(c, a, e)
                    }
                    n.pop(), o[c] = f
                }
            }

            function l(a) {
                return F(a) && a.then && a.$$promises
            }

            if (!F(g))throw new Error("'invocables' must be an object");
            var m = [], n = [], o = {};
            return H(g, k), g = n = o = null, function (d, f, g) {
                function h() {
                    --s || (t || e(r, f.$$values), p.$$values = r, p.$$promises = !0, o.resolve(r))
                }

                function k(a) {
                    p.$$failure = a, o.reject(a)
                }

                function n(c, e, f) {
                    function i(a) {
                        l.reject(a), k(a)
                    }

                    function j() {
                        if (!C(p.$$failure))try {
                            l.resolve(b.invoke(e, g, r)), l.promise.then(function (a) {
                                r[c] = a, h()
                            }, i)
                        } catch (a) {
                            i(a)
                        }
                    }

                    var l = a.defer(), m = 0;
                    H(f, function (a) {
                        q.hasOwnProperty(a) && !d.hasOwnProperty(a) && (m++, q[a].then(function (b) {
                            r[a] = b, --m || j()
                        }, i))
                    }), m || j(), q[c] = l.promise
                }

                if (l(d) && g === c && (g = f, f = d, d = null), d) {
                    if (!F(d))throw new Error("'locals' must be an object")
                } else d = i;
                if (f) {
                    if (!l(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")
                } else f = j;
                var o = a.defer(), p = o.promise, q = p.$$promises = {}, r = I({}, d), s = 1 + m.length / 3, t = !1;
                if (C(f.$$failure))return k(f.$$failure), p;
                f.$$values ? (t = e(r, f.$$values), h()) : (I(q, f.$$promises), f.then(h, k));
                for (var u = 0, v = m.length; v > u; u += 3)d.hasOwnProperty(m[u]) ? h() : n(m[u], m[u + 1], m[u + 2]);
                return p
            }
        }, this.resolve = function (a, b, c, d) {
            return this.study(a)(b, c, d)
        }
    }

    function m(a, b, c) {
        this.fromConfig = function (a, b, c) {
            return C(a.template) ? this.fromString(a.template, b) : C(a.templateUrl) ? this.fromUrl(a.templateUrl, b) : C(a.templateProvider) ? this.fromProvider(a.templateProvider, b, c) : null
        }, this.fromString = function (a, b) {
            return D(a) ? a(b) : a
        }, this.fromUrl = function (c, d) {
            return D(c) && (c = c(d)), null == c ? null : a.get(c, {cache: b}).then(function (a) {
                return a.data
            })
        }, this.fromProvider = function (a, b, d) {
            return c.invoke(a, null, d || {params: b})
        }
    }

    function n(a) {
        function b(b) {
            if (!/^\w+(-+\w+)*$/.test(b))throw new Error("Invalid parameter name '" + b + "' in pattern '" + a + "'");
            if (f[b])throw new Error("Duplicate parameter name '" + b + "' in pattern '" + a + "'");
            f[b] = !0, j.push(b)
        }

        function c(a) {
            return a.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&")
        }

        var d, e = /([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g, f = {}, g = "^", h = 0, i = this.segments = [], j = this.params = [];
        this.source = a;
        for (var k, l, m; (d = e.exec(a)) && (k = d[2] || d[3], l = d[4] || ("*" == d[1] ? ".*" : "[^/]*"), m = a.substring(h, d.index), !(m.indexOf("?") >= 0));)g += c(m) + "(" + l + ")", b(k), i.push(m), h = e.lastIndex;
        m = a.substring(h);
        var n = m.indexOf("?");
        if (n >= 0) {
            var o = this.sourceSearch = m.substring(n);
            m = m.substring(0, n), this.sourcePath = a.substring(0, h + n), H(o.substring(1).split(/[&?]/), b)
        } else this.sourcePath = a, this.sourceSearch = "";
        g += c(m) + "$", i.push(m), this.regexp = new RegExp(g), this.prefix = i[0]
    }

    function o() {
        this.compile = function (a) {
            return new n(a)
        }, this.isMatcher = function (a) {
            return F(a) && D(a.exec) && D(a.format) && D(a.concat)
        }, this.$get = function () {
            return this
        }
    }

    function p(a) {
        function b(a) {
            var b = /^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);
            return null != b ? b[1].replace(/\\(.)/g, "$1") : ""
        }

        function c(a, b) {
            return a.replace(/\$(\$|\d{1,2})/, function (a, c) {
                return b["$" === c ? 0 : Number(c)]
            })
        }

        function d(a, b, c) {
            if (!c)return!1;
            var d = a.invoke(b, b, {$match: c});
            return C(d) ? d : !0
        }

        var e = [], f = null;
        this.rule = function (a) {
            if (!D(a))throw new Error("'rule' must be a function");
            return e.push(a), this
        }, this.otherwise = function (a) {
            if (E(a)) {
                var b = a;
                a = function () {
                    return b
                }
            } else if (!D(a))throw new Error("'rule' must be a function");
            return f = a, this
        }, this.when = function (e, f) {
            var g, h = E(f);
            if (E(e) && (e = a.compile(e)), !h && !D(f) && !G(f))throw new Error("invalid 'handler' in when()");
            var i = {matcher: function (b, c) {
                return h && (g = a.compile(c), c = ["$match", function (a) {
                    return g.format(a)
                }]), I(function (a, e) {
                    return d(a, c, b.exec(e.path(), e.search()))
                }, {prefix: E(b.prefix) ? b.prefix : ""})
            }, regex: function (a, e) {
                if (a.global || a.sticky)throw new Error("when() RegExp must not be global or sticky");
                return h && (g = e, e = ["$match", function (a) {
                    return c(g, a)
                }]), I(function (b, c) {
                    return d(b, e, a.exec(c.path()))
                }, {prefix: b(a)})
            }}, j = {matcher: a.isMatcher(e), regex: e instanceof RegExp};
            for (var k in j)if (j[k])return this.rule(i[k](e, f));
            throw new Error("invalid 'what' in when()")
        }, this.$get = ["$location", "$rootScope", "$injector", function (a, b, c) {
            function d(b) {
                function d(b) {
                    var d = b(c, a);
                    return d ? (E(d) && a.replace().url(d), !0) : !1
                }

                if (!b || !b.defaultPrevented) {
                    var g, h = e.length;
                    for (g = 0; h > g; g++)if (d(e[g]))return;
                    f && d(f)
                }
            }

            return b.$on("$locationChangeSuccess", d), {sync: function () {
                d()
            }}
        }]
    }

    function q(a, e, f) {
        function g(a) {
            return 0 === a.indexOf(".") || 0 === a.indexOf("^")
        }

        function l(a, b) {
            var d = E(a), e = d ? a : a.name, f = g(e);
            if (f) {
                if (!b)throw new Error("No reference point given for path '" + e + "'");
                for (var h = e.split("."), i = 0, j = h.length, k = b; j > i; i++)if ("" !== h[i] || 0 !== i) {
                    if ("^" !== h[i])break;
                    if (!k.parent)throw new Error("Path '" + e + "' not valid for state '" + b.name + "'");
                    k = k.parent
                } else k = b;
                h = h.slice(i).join("."), e = k.name + (k.name && h ? "." : "") + h
            }
            var l = w[e];
            return!l || !d && (d || l !== a && l.self !== a) ? c : l
        }

        function m(a, b) {
            x[a] || (x[a] = []), x[a].push(b)
        }

        function n(b) {
            b = d(b, {self: b, resolve: b.resolve || {}, toString: function () {
                return this.name
            }});
            var c = b.name;
            if (!E(c) || c.indexOf("@") >= 0)throw new Error("State must have a valid name");
            if (w.hasOwnProperty(c))throw new Error("State '" + c + "'' is already defined");
            var e = -1 !== c.indexOf(".") ? c.substring(0, c.lastIndexOf(".")) : E(b.parent) ? b.parent : "";
            if (e && !w[e])return m(e, b.self);
            for (var f in z)D(z[f]) && (b[f] = z[f](b, z.$delegates[f]));
            if (w[c] = b, !b[y] && b.url && a.when(b.url, ["$match", "$stateParams", function (a, c) {
                v.$current.navigable == b && j(a, c) || v.transitionTo(b, a, {location: !1})
            }]), x[c])for (var g = 0; g < x[c].length; g++)n(x[c][g]);
            return b
        }

        function o(a) {
            return a.indexOf("*") > -1
        }

        function p(a) {
            var b = a.split("."), c = v.$current.name.split(".");
            if ("**" === b[0] && (c = c.slice(c.indexOf(b[1])), c.unshift("**")), "**" === b[b.length - 1] && (c.splice(c.indexOf(b[b.length - 2]) + 1, Number.MAX_VALUE), c.push("**")), b.length != c.length)return!1;
            for (var d = 0, e = b.length; e > d; d++)"*" === b[d] && (c[d] = "*");
            return c.join("") === b.join("")
        }

        function q(a, b) {
            return E(a) && !C(b) ? z[a] : D(b) && E(a) ? (z[a] && !z.$delegates[a] && (z.$delegates[a] = z[a]), z[a] = b, this) : this
        }

        function r(a, b) {
            return F(a) ? b = a : b.name = a, n(b), this
        }

        function s(a, e, g, m, n, q, r, s, x) {
            function z() {
                r.url() !== M && (r.url(M), r.replace())
            }

            function A(a, c, d, f, h) {
                var i = d ? c : k(a.params, c), j = {$stateParams: i};
                h.resolve = n.resolve(a.resolve, j, h.resolve, a);
                var l = [h.resolve.then(function (a) {
                    h.globals = a
                })];
                return f && l.push(f), H(a.views, function (c, d) {
                    var e = c.resolve && c.resolve !== a.resolve ? c.resolve : {};
                    e.$template = [function () {
                        return g.load(d, {view: c, locals: j, params: i, notify: !1}) || ""
                    }], l.push(n.resolve(e, j, h.resolve, a).then(function (f) {
                        if (D(c.controllerProvider) || G(c.controllerProvider)) {
                            var g = b.extend({}, e, j);
                            f.$$controller = m.invoke(c.controllerProvider, null, g)
                        } else f.$$controller = c.controller;
                        f.$$state = a, f.$$controllerAs = c.controllerAs, h[d] = f
                    }))
                }), e.all(l).then(function () {
                    return h
                })
            }

            var B = e.reject(new Error("transition superseded")), F = e.reject(new Error("transition prevented")), K = e.reject(new Error("transition aborted")), L = e.reject(new Error("transition failed")), M = r.url(), N = x.baseHref();
            return u.locals = {resolve: null, globals: {$stateParams: {}}}, v = {params: {}, current: u.self, $current: u, transition: null}, v.reload = function () {
                v.transitionTo(v.current, q, {reload: !0, inherit: !1, notify: !1})
            }, v.go = function (a, b, c) {
                return this.transitionTo(a, b, I({inherit: !0, relative: v.$current}, c))
            }, v.transitionTo = function (b, c, f) {
                c = c || {}, f = I({location: !0, inherit: !1, relative: null, notify: !0, reload: !1, $retry: !1}, f || {});
                var g, k = v.$current, n = v.params, o = k.path, p = l(b, f.relative);
                if (!C(p)) {
                    var s = {to: b, toParams: c, options: f};
                    if (g = a.$broadcast("$stateNotFound", s, k.self, n), g.defaultPrevented)return z(), K;
                    if (g.retry) {
                        if (f.$retry)return z(), L;
                        var w = v.transition = e.when(g.retry);
                        return w.then(function () {
                            return w !== v.transition ? B : (s.options.$retry = !0, v.transitionTo(s.to, s.toParams, s.options))
                        }, function () {
                            return K
                        }), z(), w
                    }
                    if (b = s.to, c = s.toParams, f = s.options, p = l(b, f.relative), !C(p)) {
                        if (f.relative)throw new Error("Could not resolve '" + b + "' from state '" + f.relative + "'");
                        throw new Error("No such state '" + b + "'")
                    }
                }
                if (p[y])throw new Error("Cannot transition to abstract state '" + b + "'");
                f.inherit && (c = h(q, c || {}, v.$current, p)), b = p;
                var x, D, E = b.path, G = u.locals, H = [];
                for (x = 0, D = E[x]; D && D === o[x] && j(c, n, D.ownParams) && !f.reload; x++, D = E[x])G = H[x] = D.locals;
                if (t(b, k, G, f))return b.self.reloadOnSearch !== !1 && z(), v.transition = null, e.when(v.current);
                if (c = i(b.params, c || {}), f.notify && (g = a.$broadcast("$stateChangeStart", b.self, c, k.self, n), g.defaultPrevented))return z(), F;
                for (var N = e.when(G), O = x; O < E.length; O++, D = E[O])G = H[O] = d(G), N = A(D, c, D === b, N, G);
                var P = v.transition = N.then(function () {
                    var d, e, g;
                    if (v.transition !== P)return B;
                    for (d = o.length - 1; d >= x; d--)g = o[d], g.self.onExit && m.invoke(g.self.onExit, g.self, g.locals.globals), g.locals = null;
                    for (d = x; d < E.length; d++)e = E[d], e.locals = H[d], e.self.onEnter && m.invoke(e.self.onEnter, e.self, e.locals.globals);
                    if (v.transition !== P)return B;
                    v.$current = b, v.current = b.self, v.params = c, J(v.params, q), v.transition = null;
                    var h = b.navigable;
                    return f.location && h && (r.url(h.url.format(h.locals.globals.$stateParams)), "replace" === f.location && r.replace()), f.notify && a.$broadcast("$stateChangeSuccess", b.self, c, k.self, n), M = r.url(), v.current
                }, function (d) {
                    return v.transition !== P ? B : (v.transition = null, a.$broadcast("$stateChangeError", b.self, c, k.self, n, d), z(), e.reject(d))
                });
                return P
            }, v.is = function (a, d) {
                var e = l(a);
                return C(e) ? v.$current !== e ? !1 : C(d) && null !== d ? b.equals(q, d) : !0 : c
            }, v.includes = function (a, d) {
                if (E(a) && o(a)) {
                    if (!p(a))return!1;
                    a = v.$current.name
                }
                var e = l(a);
                if (!C(e))return c;
                if (!C(v.$current.includes[e.name]))return!1;
                var f = !0;
                return b.forEach(d, function (a, b) {
                    C(q[b]) && q[b] === a || (f = !1)
                }), f
            }, v.href = function (a, b, c) {
                c = I({lossy: !0, inherit: !1, absolute: !1, relative: v.$current}, c || {});
                var d = l(a, c.relative);
                if (!C(d))return null;
                b = h(q, b || {}, v.$current, d);
                var e = d && c.lossy ? d.navigable : d, g = e && e.url ? e.url.format(i(d.params, b || {})) : null;
                return!f.html5Mode() && g && (g = "#" + f.hashPrefix() + g), "/" !== N && (f.html5Mode() ? g = N.slice(0, -1) + g : c.absolute && (g = N.slice(1) + g)), c.absolute && g && (g = r.protocol() + "://" + r.host() + (80 == r.port() || 443 == r.port() ? "" : ":" + r.port()) + (!f.html5Mode() && g ? "/" : "") + g), g
            }, v.get = function (a, b) {
                if (!C(a)) {
                    var c = [];
                    return H(w, function (a) {
                        c.push(a.self)
                    }), c
                }
                var d = l(a, b);
                return d && d.self ? d.self : null
            }, v
        }

        function t(a, b, c, d) {
            return a !== b || (c !== b.locals || d.reload) && a.self.reloadOnSearch !== !1 ? void 0 : !0
        }

        var u, v, w = {}, x = {}, y = "abstract", z = {parent: function (a) {
            if (C(a.parent) && a.parent)return l(a.parent);
            var b = /^(.+)\.[^.]+$/.exec(a.name);
            return b ? l(b[1]) : u
        }, data: function (a) {
            return a.parent && a.parent.data && (a.data = a.self.data = I({}, a.parent.data, a.data)), a.data
        }, url: function (a) {
            var b = a.url;
            if (E(b))return"^" == b.charAt(0) ? e.compile(b.substring(1)) : (a.parent.navigable || u).url.concat(b);
            if (e.isMatcher(b) || null == b)return b;
            throw new Error("Invalid url '" + b + "' in state '" + a + "'")
        }, navigable: function (a) {
            return a.url ? a : a.parent ? a.parent.navigable : null
        }, params: function (a) {
            if (!a.params)return a.url ? a.url.parameters() : a.parent.params;
            if (!G(a.params))throw new Error("Invalid params in state '" + a + "'");
            if (a.url)throw new Error("Both params and url specicified in state '" + a + "'");
            return a.params
        }, views: function (a) {
            var b = {};
            return H(C(a.views) ? a.views : {"": a}, function (c, d) {
                d.indexOf("@") < 0 && (d += "@" + a.parent.name), b[d] = c
            }), b
        }, ownParams: function (a) {
            if (!a.parent)return a.params;
            var b = {};
            H(a.params, function (a) {
                b[a] = !0
            }), H(a.parent.params, function (c) {
                if (!b[c])throw new Error("Missing required parameter '" + c + "' in state '" + a.name + "'");
                b[c] = !1
            });
            var c = [];
            return H(b, function (a, b) {
                a && c.push(b)
            }), c
        }, path: function (a) {
            return a.parent ? a.parent.path.concat(a) : []
        }, includes: function (a) {
            var b = a.parent ? I({}, a.parent.includes) : {};
            return b[a.name] = !0, b
        }, $delegates: {}};
        u = n({name: "", url: "^", views: null, "abstract": !0}), u.navigable = null, this.decorator = q, this.state = r, this.$get = s, s.$inject = ["$rootScope", "$q", "$view", "$injector", "$resolve", "$stateParams", "$location", "$urlRouter", "$browser"]
    }

    function r() {
        function a(a, b) {
            return{load: function (c, d) {
                var e, f = {template: null, controller: null, view: null, locals: null, notify: !0, async: !0, params: {}};
                return d = I(f, d), d.view && (e = b.fromConfig(d.view, d.params, d.locals)), e && d.notify && a.$broadcast("$viewContentLoading", d), e
            }}
        }

        this.$get = a, a.$inject = ["$rootScope", "$templateFactory"]
    }

    function s() {
        var a = !1;
        this.useAnchorScroll = function () {
            a = !0
        }, this.$get = ["$anchorScroll", "$timeout", function (b, c) {
            return a ? b : function (a) {
                c(function () {
                    a[0].scrollIntoView()
                }, 0, !1)
            }
        }]
    }

    function t(a, c, d) {
        function e() {
            return c.has ? function (a) {
                return c.has(a) ? c.get(a) : null
            } : function (a) {
                try {
                    return c.get(a)
                } catch (b) {
                    return null
                }
            }
        }

        function f(a, b) {
            var c = function () {
                return{enter: function (a, b, c) {
                    b.after(a), c()
                }, leave: function (a, b) {
                    a.remove(), b()
                }}
            };
            if (i)return{enter: function (a, b, c) {
                i.enter(a, null, b, c)
            }, leave: function (a, b) {
                i.leave(a, b)
            }};
            if (h) {
                var d = h && h(b, a);
                return{enter: function (a, b, c) {
                    d.enter(a, null, b), c()
                }, leave: function (a, b) {
                    d.leave(a), b()
                }}
            }
            return c()
        }

        var g = e(), h = g("$animator"), i = g("$animate"), j = {restrict: "ECA", terminal: !0, priority: 400, transclude: "element", compile: function (c, e, g) {
            return function (c, e, h) {
                function i() {
                    k && (k.remove(), k = null), m && (m.$destroy(), m = null), l && (q.leave(l, function () {
                        k = null
                    }), k = l, l = null)
                }

                function j(f) {
                    var h = c.$new(), j = l && l.data("$uiViewName"), k = j && a.$current && a.$current.locals[j];
                    if (f || k !== n) {
                        var r = g(h, function (a) {
                            q.enter(a, e, function () {
                                (b.isDefined(p) && !p || c.$eval(p)) && d(a)
                            }), i()
                        });
                        n = a.$current.locals[r.data("$uiViewName")], l = r, m = h, m.$emit("$viewContentLoaded"), m.$eval(o)
                    }
                }

                var k, l, m, n, o = h.onload || "", p = h.autoscroll, q = f(h, c);
                c.$on("$stateChangeSuccess", function () {
                    j(!1)
                }), c.$on("$viewContentLoading", function () {
                    j(!1)
                }), j(!0)
            }
        }};
        return j
    }

    function u(a, b, c) {
        return{restrict: "ECA", priority: -400, compile: function (d) {
            var e = d.html();
            return function (d, f, g) {
                var h = g.uiView || g.name || "", i = f.inheritedData("$uiView");
                h.indexOf("@") < 0 && (h = h + "@" + (i ? i.state.name : "")), f.data("$uiViewName", h);
                var j = c.$current, k = j && j.locals[h];
                if (k) {
                    f.data("$uiView", {name: h, state: k.$$state}), f.html(k.$template ? k.$template : e);
                    var l = a(f.contents());
                    if (k.$$controller) {
                        k.$scope = d;
                        var m = b(k.$$controller, k);
                        k.$$controllerAs && (d[k.$$controllerAs] = m), f.data("$ngControllerController", m), f.children().data("$ngControllerController", m)
                    }
                    l(d)
                }
            }
        }}
    }

    function v(a) {
        var b = a.replace(/\n/g, " ").match(/^([^(]+?)\s*(\((.*)\))?$/);
        if (!b || 4 !== b.length)throw new Error("Invalid state ref '" + a + "'");
        return{state: b[1], paramExpr: b[3] || null}
    }

    function w(a) {
        var b = a.parent().inheritedData("$uiView");
        return b && b.state && b.state.name ? b.state : void 0
    }

    function x(a, c) {
        var d = ["location", "inherit", "reload"];
        return{restrict: "A", require: "?^uiSrefActive", link: function (e, f, g, h) {
            var i = v(g.uiSref), j = null, k = w(f) || a.$current, l = "FORM" === f[0].nodeName, m = l ? "action" : "href", n = !0, o = {relative: k}, p = e.$eval(g.uiSrefOpts) || {};
            b.forEach(d, function (a) {
                a in p && (o[a] = p[a])
            });
            var q = function (b) {
                if (b && (j = b), n) {
                    var c = a.href(i.state, j, o);
                    return h && h.$$setStateInfo(i.state, j), c ? void(f[0][m] = c) : (n = !1, !1)
                }
            };
            i.paramExpr && (e.$watch(i.paramExpr, function (a) {
                a !== j && q(a)
            }, !0), j = e.$eval(i.paramExpr)), q(), l || f.bind("click", function (b) {
                var d = b.which || b.button;
                d > 1 || b.ctrlKey || b.metaKey || b.shiftKey || f.attr("target") || (c(function () {
                    a.go(i.state, j, o)
                }), b.preventDefault())
            })
        }}
    }

    function y(a, b, c) {
        return{restrict: "A", controller: ["$scope", "$element", "$attrs", function (d, e, f) {
            function g() {
                a.$current.self === i && h() ? e.addClass(l) : e.removeClass(l)
            }

            function h() {
                return!k || j(k, b)
            }

            var i, k, l;
            l = c(f.uiSrefActive || "", !1)(d), this.$$setStateInfo = function (b, c) {
                i = a.get(b, w(e)), k = c, g()
            }, d.$on("$stateChangeSuccess", g)
        }]}
    }

    function z(a) {
        return function (b) {
            return a.is(b)
        }
    }

    function A(a) {
        return function (b) {
            return a.includes(b)
        }
    }

    function B(a, b) {
        function e(a) {
            this.locals = a.locals.globals, this.params = this.locals.$stateParams
        }

        function f() {
            this.locals = null, this.params = null
        }

        function g(c, g) {
            if (null != g.redirectTo) {
                var h, j = g.redirectTo;
                if (E(j))h = j; else {
                    if (!D(j))throw new Error("Invalid 'redirectTo' in when()");
                    h = function (a, b) {
                        return j(a, b.path(), b.search())
                    }
                }
                b.when(c, h)
            } else a.state(d(g, {parent: null, name: "route:" + encodeURIComponent(c), url: c, onEnter: e, onExit: f}));
            return i.push(g), this
        }

        function h(a, b, d) {
            function e(a) {
                return"" !== a.name ? a : c
            }

            var f = {routes: i, params: d, current: c};
            return b.$on("$stateChangeStart", function (a, c, d, f) {
                b.$broadcast("$routeChangeStart", e(c), e(f))
            }), b.$on("$stateChangeSuccess", function (a, c, d, g) {
                f.current = e(c), b.$broadcast("$routeChangeSuccess", e(c), e(g)), J(d, f.params)
            }), b.$on("$stateChangeError", function (a, c, d, f, g, h) {
                b.$broadcast("$routeChangeError", e(c), e(f), h)
            }), f
        }

        var i = [];
        e.$inject = ["$$state"], this.when = g, this.$get = h, h.$inject = ["$state", "$rootScope", "$routeParams"]
    }

    var C = b.isDefined, D = b.isFunction, E = b.isString, F = b.isObject, G = b.isArray, H = b.forEach, I = b.extend, J = b.copy;
    b.module("ui.router.util", ["ng"]), b.module("ui.router.router", ["ui.router.util"]), b.module("ui.router.state", ["ui.router.router", "ui.router.util"]), b.module("ui.router", ["ui.router.state"]), b.module("ui.router.compat", ["ui.router"]), l.$inject = ["$q", "$injector"], b.module("ui.router.util").service("$resolve", l), m.$inject = ["$http", "$templateCache", "$injector"], b.module("ui.router.util").service("$templateFactory", m), n.prototype.concat = function (a) {
        return new n(this.sourcePath + a + this.sourceSearch)
    }, n.prototype.toString = function () {
        return this.source
    }, n.prototype.exec = function (a, b) {
        var c = this.regexp.exec(a);
        if (!c)return null;
        var d, e = this.params, f = e.length, g = this.segments.length - 1, h = {};
        if (g !== c.length - 1)throw new Error("Unbalanced capture group in route '" + this.source + "'");
        for (d = 0; g > d; d++)h[e[d]] = c[d + 1];
        for (; f > d; d++)h[e[d]] = b[e[d]];
        return h
    }, n.prototype.parameters = function () {
        return this.params
    }, n.prototype.format = function (a) {
        var b = this.segments, c = this.params;
        if (!a)return b.join("");
        var d, e, f, g = b.length - 1, h = c.length, i = b[0];
        for (d = 0; g > d; d++)f = a[c[d]], null != f && (i += encodeURIComponent(f)), i += b[d + 1];
        for (; h > d; d++)f = a[c[d]], null != f && (i += (e ? "&" : "?") + c[d] + "=" + encodeURIComponent(f), e = !0);
        return i
    }, b.module("ui.router.util").provider("$urlMatcherFactory", o), p.$inject = ["$urlMatcherFactoryProvider"], b.module("ui.router.router").provider("$urlRouter", p), q.$inject = ["$urlRouterProvider", "$urlMatcherFactoryProvider", "$locationProvider"], b.module("ui.router.state").value("$stateParams", {}).provider("$state", q), r.$inject = [], b.module("ui.router.state").provider("$view", r), b.module("ui.router.state").provider("$uiViewScroll", s), t.$inject = ["$state", "$injector", "$uiViewScroll"], u.$inject = ["$compile", "$controller", "$state"], b.module("ui.router.state").directive("uiView", t), b.module("ui.router.state").directive("uiView", u), x.$inject = ["$state", "$timeout"], y.$inject = ["$state", "$stateParams", "$interpolate"], b.module("ui.router.state").directive("uiSref", x).directive("uiSrefActive", y), z.$inject = ["$state"], A.$inject = ["$state"], b.module("ui.router.state").filter("isState", z).filter("includedByState", A), B.$inject = ["$stateProvider", "$urlRouterProvider"], b.module("ui.router.compat").provider("$route", B).directive("ngView", t)
}(window, window.angular);

'use strict';
angular.module('ui.load', [])
    .service('uiLoad', ['$document', '$q', '$timeout', function ($document, $q, $timeout) {
        var loaded = [];
        var promise = false;
        var deferred = $q.defer();
        this.load = function (srcs) {
            srcs = angular.isArray(srcs) ? srcs : srcs.split(/\s+/);
            var self = this;
            if (!promise) {
                promise = deferred.promise;
            }
            angular.forEach(srcs, function (src) {
                promise = promise.then(function () {
                    return src.indexOf('.css') >= 0 ? self.loadCSS(src) : self.loadScript(src);
                });
            });
            deferred.resolve();
            return promise;
        }
        this.loadScript = function (src) {
            if (loaded[src])return loaded[src].promise;
            var deferred = $q.defer();
            var script = $document[0].createElement('script');
            script.src = src;
            script.onload = function (e) {
                $timeout(function () {
                    deferred.resolve(e);
                });
            };
            script.onerror = function (e) {
                $timeout(function () {
                    deferred.reject(e);
                });
            };
            $document[0].body.appendChild(script);
            loaded[src] = deferred;
            return deferred.promise;
        };
        this.loadCSS = function (href) {
            if (loaded[href])return loaded[href].promise;
            var deferred = $q.defer();
            var style = $document[0].createElement('link');
            style.rel = 'stylesheet';
            style.type = 'text/css';
            style.href = href;
            style.onload = function (e) {
                $timeout(function () {
                    deferred.resolve(e);
                });
            };
            style.onerror = function (e) {
                $timeout(function () {
                    deferred.reject(e);
                });
            };
            $document[0].head.appendChild(style);
            loaded[href] = deferred;
            return deferred.promise;
        };
    }]);
'use strict';
angular.module('ui.jq', ['ui.load']).value('uiJqConfig', {}).directive('uiJq', ['uiJqConfig', 'JQ_CONFIG', 'uiLoad', '$timeout', function uiJqInjectingFunction(uiJqConfig, JQ_CONFIG, uiLoad, $timeout) {
    return{restrict: 'A', compile: function uiJqCompilingFunction(tElm, tAttrs) {
        if (!angular.isFunction(tElm[tAttrs.uiJq]) && !JQ_CONFIG[tAttrs.uiJq]) {
            throw new Error('ui-jq: The "' + tAttrs.uiJq + '" function does not exist');
        }
        var options = uiJqConfig && uiJqConfig[tAttrs.uiJq];
        return function uiJqLinkingFunction(scope, elm, attrs) {
            function getOptions() {
                var linkOptions = [];
                if (attrs.uiOptions) {
                    linkOptions = scope.$eval('[' + attrs.uiOptions + ']');
                    if (angular.isObject(options) && angular.isObject(linkOptions[0])) {
                        linkOptions[0] = angular.extend({}, options, linkOptions[0]);
                    }
                } else if (options) {
                    linkOptions = [options];
                }
                return linkOptions;
            }

            if (attrs.ngModel && elm.is('select,input,textarea')) {
                elm.bind('change', function () {
                    elm.trigger('input');
                });
            }
            function callPlugin() {
                $timeout(function () {
                    elm[attrs.uiJq].apply(elm, getOptions());
                }, 0, false);
            }

            function refresh() {
                if (attrs.uiRefresh) {
                    scope.$watch(attrs.uiRefresh, function () {
                        callPlugin();
                    });
                }
            }

            if (JQ_CONFIG[attrs.uiJq]) {
                uiLoad.load(JQ_CONFIG[attrs.uiJq]).then(function () {
                    callPlugin();
                    refresh();
                }).catch(function () {
                });
            } else {
                callPlugin();
                refresh();
            }
        };
    }};
}]);
'use strict';
angular.module('ui.validate', []).directive('uiValidate', function () {
    return{restrict: 'A', require: 'ngModel', link: function (scope, elm, attrs, ctrl) {
        var validateFn, validators = {}, validateExpr = scope.$eval(attrs.uiValidate);
        if (!validateExpr) {
            return;
        }
        if (angular.isString(validateExpr)) {
            validateExpr = {validator: validateExpr};
        }
        angular.forEach(validateExpr, function (exprssn, key) {
            validateFn = function (valueToValidate) {
                var expression = scope.$eval(exprssn, {'$value': valueToValidate});
                if (angular.isObject(expression) && angular.isFunction(expression.then)) {
                    expression.then(function () {
                        ctrl.$setValidity(key, true);
                    }, function () {
                        ctrl.$setValidity(key, false);
                    });
                    return valueToValidate;
                } else if (expression) {
                    ctrl.$setValidity(key, true);
                    return valueToValidate;
                } else {
                    ctrl.$setValidity(key, false);
                    return valueToValidate;
                }
            };
            validators[key] = validateFn;
            ctrl.$formatters.push(validateFn);
            ctrl.$parsers.push(validateFn);
        });
        function apply_watch(watch) {
            if (angular.isString(watch)) {
                scope.$watch(watch, function () {
                    angular.forEach(validators, function (validatorFn) {
                        validatorFn(ctrl.$modelValue);
                    });
                });
                return;
            }
            if (angular.isArray(watch)) {
                angular.forEach(watch, function (expression) {
                    scope.$watch(expression, function () {
                        angular.forEach(validators, function (validatorFn) {
                            validatorFn(ctrl.$modelValue);
                        });
                    });
                });
                return;
            }
            if (angular.isObject(watch)) {
                angular.forEach(watch, function (expression, validatorKey) {
                    if (angular.isString(expression)) {
                        scope.$watch(expression, function () {
                            validators[validatorKey](ctrl.$modelValue);
                        });
                    }
                    if (angular.isArray(expression)) {
                        angular.forEach(expression, function (intExpression) {
                            scope.$watch(intExpression, function () {
                                validators[validatorKey](ctrl.$modelValue);
                            });
                        });
                    }
                });
            }
        }

        if (attrs.uiValidateWatch) {
            apply_watch(scope.$eval(attrs.uiValidateWatch));
        }
    }};
});

angular.module("ui.bootstrap", ["ui.bootstrap.tpls", "ui.bootstrap.transition", "ui.bootstrap.collapse", "ui.bootstrap.accordion", "ui.bootstrap.alert", "ui.bootstrap.bindHtml", "ui.bootstrap.buttons", "ui.bootstrap.carousel", "ui.bootstrap.dateparser", "ui.bootstrap.position", "ui.bootstrap.datepicker", "ui.bootstrap.dropdown", "ui.bootstrap.modal", "ui.bootstrap.pagination", "ui.bootstrap.tooltip", "ui.bootstrap.popover", "ui.bootstrap.progressbar", "ui.bootstrap.rating", "ui.bootstrap.tabs", "ui.bootstrap.timepicker", "ui.bootstrap.typeahead"]);
angular.module("ui.bootstrap.tpls", ["template/accordion/accordion-group.html", "template/accordion/accordion.html", "template/alert/alert.html", "template/carousel/carousel.html", "template/carousel/slide.html", "template/datepicker/datepicker.html", "template/datepicker/day.html", "template/datepicker/month.html", "template/datepicker/popup.html", "template/datepicker/year.html", "template/modal/backdrop.html", "template/modal/window.html", "template/pagination/pager.html", "template/pagination/pagination.html", "template/tooltip/tooltip-html-unsafe-popup.html", "template/tooltip/tooltip-popup.html", "template/popover/popover.html", "template/progressbar/bar.html", "template/progressbar/progress.html", "template/progressbar/progressbar.html", "template/rating/rating.html", "template/tabs/tab.html", "template/tabs/tabset.html", "template/timepicker/timepicker.html", "template/typeahead/typeahead-match.html", "template/typeahead/typeahead-popup.html"]);
angular.module("ui.bootstrap.transition", []).factory("$transition", ["$q", "$timeout", "$rootScope", function (a, b, c) {
    function d(a) {
        for (var b in a)if (void 0 !== f.style[b])return a[b]
    }

    var e = function (d, f, g) {
        g = g || {};
        var h = a.defer(), i = e[g.animation ? "animationEndEventName" : "transitionEndEventName"], j = function () {
            c.$apply(function () {
                d.unbind(i, j), h.resolve(d)
            })
        };
        return i && d.bind(i, j), b(function () {
            angular.isString(f) ? d.addClass(f) : angular.isFunction(f) ? f(d) : angular.isObject(f) && d.css(f), i || h.resolve(d)
        }), h.promise.cancel = function () {
            i && d.unbind(i, j), h.reject("Transition cancelled")
        }, h.promise
    }, f = document.createElement("trans"), g = {WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend"}, h = {WebkitTransition: "webkitAnimationEnd", MozTransition: "animationend", OTransition: "oAnimationEnd", transition: "animationend"};
    return e.transitionEndEventName = d(g), e.animationEndEventName = d(h), e
}]);
angular.module("ui.bootstrap.collapse", ["ui.bootstrap.transition"]).directive("collapse", ["$transition", function (a) {
    return{link: function (b, c, d) {
        function e(b) {
            function d() {
                j === e && (j = void 0)
            }

            var e = a(c, b);
            return j && j.cancel(), j = e, e.then(d, d), e
        }

        function f() {
            k ? (k = !1, g()) : (c.removeClass("collapse").addClass("collapsing"), e({height: c[0].scrollHeight + "px"}).then(g))
        }

        function g() {
            c.removeClass("collapsing"), c.addClass("collapse in"), c.css({height: "auto"})
        }

        function h() {
            if (k)k = !1, i(), c.css({height: 0}); else {
                c.css({height: c[0].scrollHeight + "px"});
                {
                    c[0].offsetWidth
                }
                c.removeClass("collapse in").addClass("collapsing"), e({height: 0}).then(i)
            }
        }

        function i() {
            c.removeClass("collapsing"), c.addClass("collapse")
        }

        var j, k = !0;
        b.$watch(d.collapse, function (a) {
            a ? h() : f()
        })
    }}
}]);
angular.module("ui.bootstrap.accordion", ["ui.bootstrap.collapse"]).constant("accordionConfig", {closeOthers: !0}).controller("AccordionController", ["$scope", "$attrs", "accordionConfig", function (a, b, c) {
    this.groups = [], this.closeOthers = function (d) {
        var e = angular.isDefined(b.closeOthers) ? a.$eval(b.closeOthers) : c.closeOthers;
        e && angular.forEach(this.groups, function (a) {
            a !== d && (a.isOpen = !1)
        })
    }, this.addGroup = function (a) {
        var b = this;
        this.groups.push(a), a.$on("$destroy", function () {
            b.removeGroup(a)
        })
    }, this.removeGroup = function (a) {
        var b = this.groups.indexOf(a);
        -1 !== b && this.groups.splice(b, 1)
    }
}]).directive("accordion", function () {
    return{restrict: "EA", controller: "AccordionController", transclude: !0, replace: !1, templateUrl: "template/accordion/accordion.html"}
}).directive("accordionGroup", function () {
    return{require: "^accordion", restrict: "EA", transclude: !0, replace: !0, templateUrl: "template/accordion/accordion-group.html", scope: {heading: "@", isOpen: "=?", isDisabled: "=?"}, controller: function () {
        this.setHeading = function (a) {
            this.heading = a
        }
    }, link: function (a, b, c, d) {
        d.addGroup(a), a.$watch("isOpen", function (b) {
            b && d.closeOthers(a)
        }), a.toggleOpen = function () {
            a.isDisabled || (a.isOpen = !a.isOpen)
        }
    }}
}).directive("accordionHeading", function () {
    return{restrict: "EA", transclude: !0, template: "", replace: !0, require: "^accordionGroup", link: function (a, b, c, d, e) {
        d.setHeading(e(a, function () {
        }))
    }}
}).directive("accordionTransclude", function () {
    return{require: "^accordionGroup", link: function (a, b, c, d) {
        a.$watch(function () {
            return d[c.accordionTransclude]
        }, function (a) {
            a && (b.html(""), b.append(a))
        })
    }}
}), angular.module("ui.bootstrap.alert", []).controller("AlertController", ["$scope", "$attrs", function (a, b) {
    a.closeable = "close"in b
}]).directive("alert", function () {
    return{restrict: "EA", controller: "AlertController", templateUrl: "template/alert/alert.html", transclude: !0, replace: !0, scope: {type: "@", close: "&"}}
}), angular.module("ui.bootstrap.bindHtml", []).directive("bindHtmlUnsafe", function () {
    return function (a, b, c) {
        b.addClass("ng-binding").data("$binding", c.bindHtmlUnsafe), a.$watch(c.bindHtmlUnsafe, function (a) {
            b.html(a || "")
        })
    }
}), angular.module("ui.bootstrap.buttons", []).constant("buttonConfig", {activeClass: "active", toggleEvent: "click"}).controller("ButtonsController", ["buttonConfig", function (a) {
    this.activeClass = a.activeClass || "active", this.toggleEvent = a.toggleEvent || "click"
}]).directive("btnRadio", function () {
    return{require: ["btnRadio", "ngModel"], controller: "ButtonsController", link: function (a, b, c, d) {
        var e = d[0], f = d[1];
        f.$render = function () {
            b.toggleClass(e.activeClass, angular.equals(f.$modelValue, a.$eval(c.btnRadio)))
        }, b.bind(e.toggleEvent, function () {
            var d = b.hasClass(e.activeClass);
            (!d || angular.isDefined(c.uncheckable)) && a.$apply(function () {
                f.$setViewValue(d ? null : a.$eval(c.btnRadio)), f.$render()
            })
        })
    }}
}).directive("btnCheckbox", function () {
    return{require: ["btnCheckbox", "ngModel"], controller: "ButtonsController", link: function (a, b, c, d) {
        function e() {
            return g(c.btnCheckboxTrue, !0)
        }

        function f() {
            return g(c.btnCheckboxFalse, !1)
        }

        function g(b, c) {
            var d = a.$eval(b);
            return angular.isDefined(d) ? d : c
        }

        var h = d[0], i = d[1];
        i.$render = function () {
            b.toggleClass(h.activeClass, angular.equals(i.$modelValue, e()))
        }, b.bind(h.toggleEvent, function () {
            a.$apply(function () {
                i.$setViewValue(b.hasClass(h.activeClass) ? f() : e()), i.$render()
            })
        })
    }}
}), angular.module("ui.bootstrap.carousel", ["ui.bootstrap.transition"]).controller("CarouselController", ["$scope", "$timeout", "$transition", function (a, b, c) {
    function d() {
        e();
        var c = +a.interval;
        !isNaN(c) && c >= 0 && (g = b(f, c))
    }

    function e() {
        g && (b.cancel(g), g = null)
    }

    function f() {
        h ? (a.next(), d()) : a.pause()
    }

    var g, h, i = this, j = i.slides = a.slides = [], k = -1;
    i.currentSlide = null;
    var l = !1;
    i.select = a.select = function (e, f) {
        function g() {
            if (!l) {
                if (i.currentSlide && angular.isString(f) && !a.noTransition && e.$element) {
                    e.$element.addClass(f);
                    {
                        e.$element[0].offsetWidth
                    }
                    angular.forEach(j, function (a) {
                        angular.extend(a, {direction: "", entering: !1, leaving: !1, active: !1})
                    }), angular.extend(e, {direction: f, active: !0, entering: !0}), angular.extend(i.currentSlide || {}, {direction: f, leaving: !0}), a.$currentTransition = c(e.$element, {}), function (b, c) {
                        a.$currentTransition.then(function () {
                            h(b, c)
                        }, function () {
                            h(b, c)
                        })
                    }(e, i.currentSlide)
                } else h(e, i.currentSlide);
                i.currentSlide = e, k = m, d()
            }
        }

        function h(b, c) {
            angular.extend(b, {direction: "", active: !0, leaving: !1, entering: !1}), angular.extend(c || {}, {direction: "", active: !1, leaving: !1, entering: !1}), a.$currentTransition = null
        }

        var m = j.indexOf(e);
        void 0 === f && (f = m > k ? "next" : "prev"), e && e !== i.currentSlide && (a.$currentTransition ? (a.$currentTransition.cancel(), b(g)) : g())
    }, a.$on("$destroy", function () {
        l = !0
    }), i.indexOfSlide = function (a) {
        return j.indexOf(a)
    }, a.next = function () {
        var b = (k + 1) % j.length;
        return a.$currentTransition ? void 0 : i.select(j[b], "next")
    }, a.prev = function () {
        var b = 0 > k - 1 ? j.length - 1 : k - 1;
        return a.$currentTransition ? void 0 : i.select(j[b], "prev")
    }, a.isActive = function (a) {
        return i.currentSlide === a
    }, a.$watch("interval", d), a.$on("$destroy", e), a.play = function () {
        h || (h = !0, d())
    }, a.pause = function () {
        a.noPause || (h = !1, e())
    }, i.addSlide = function (b, c) {
        b.$element = c, j.push(b), 1 === j.length || b.active ? (i.select(j[j.length - 1]), 1 == j.length && a.play()) : b.active = !1
    }, i.removeSlide = function (a) {
        var b = j.indexOf(a);
        j.splice(b, 1), j.length > 0 && a.active ? i.select(b >= j.length ? j[b - 1] : j[b]) : k > b && k--
    }
}]).directive("carousel", [function () {
    return{restrict: "EA", transclude: !0, replace: !0, controller: "CarouselController", require: "carousel", templateUrl: "template/carousel/carousel.html", scope: {interval: "=", noTransition: "=", noPause: "="}}
}]).directive("slide", function () {
    return{require: "^carousel", restrict: "EA", transclude: !0, replace: !0, templateUrl: "template/carousel/slide.html", scope: {active: "=?"}, link: function (a, b, c, d) {
        d.addSlide(a, b), a.$on("$destroy", function () {
            d.removeSlide(a)
        }), a.$watch("active", function (b) {
            b && d.select(a)
        })
    }}
}), angular.module("ui.bootstrap.dateparser", []).service("dateParser", ["$locale", "orderByFilter", function (a, b) {
    function c(a, b, c) {
        return 1 === b && c > 28 ? 29 === c && (a % 4 === 0 && a % 100 !== 0 || a % 400 === 0) : 3 === b || 5 === b || 8 === b || 10 === b ? 31 > c : !0
    }

    this.parsers = {};
    var d = {yyyy: {regex: "\\d{4}", apply: function (a) {
        this.year = +a
    }}, yy: {regex: "\\d{2}", apply: function (a) {
        this.year = +a + 2e3
    }}, y: {regex: "\\d{1,4}", apply: function (a) {
        this.year = +a
    }}, MMMM: {regex: a.DATETIME_FORMATS.MONTH.join("|"), apply: function (b) {
        this.month = a.DATETIME_FORMATS.MONTH.indexOf(b)
    }}, MMM: {regex: a.DATETIME_FORMATS.SHORTMONTH.join("|"), apply: function (b) {
        this.month = a.DATETIME_FORMATS.SHORTMONTH.indexOf(b)
    }}, MM: {regex: "0[1-9]|1[0-2]", apply: function (a) {
        this.month = a - 1
    }}, M: {regex: "[1-9]|1[0-2]", apply: function (a) {
        this.month = a - 1
    }}, dd: {regex: "[0-2][0-9]{1}|3[0-1]{1}", apply: function (a) {
        this.date = +a
    }}, d: {regex: "[1-2]?[0-9]{1}|3[0-1]{1}", apply: function (a) {
        this.date = +a
    }}, EEEE: {regex: a.DATETIME_FORMATS.DAY.join("|")}, EEE: {regex: a.DATETIME_FORMATS.SHORTDAY.join("|")}};
    this.createParser = function (a) {
        var c = [], e = a.split("");
        return angular.forEach(d, function (b, d) {
            var f = a.indexOf(d);
            if (f > -1) {
                a = a.split(""), e[f] = "(" + b.regex + ")", a[f] = "$";
                for (var g = f + 1, h = f + d.length; h > g; g++)e[g] = "", a[g] = "$";
                a = a.join(""), c.push({index: f, apply: b.apply})
            }
        }), {regex: new RegExp("^" + e.join("") + "$"), map: b(c, "index")}
    }, this.parse = function (b, d) {
        if (!angular.isString(b))return b;
        d = a.DATETIME_FORMATS[d] || d, this.parsers[d] || (this.parsers[d] = this.createParser(d));
        var e = this.parsers[d], f = e.regex, g = e.map, h = b.match(f);
        if (h && h.length) {
            for (var i, j = {year: 1900, month: 0, date: 1, hours: 0}, k = 1, l = h.length; l > k; k++) {
                var m = g[k - 1];
                m.apply && m.apply.call(j, h[k])
            }
            return c(j.year, j.month, j.date) && (i = new Date(j.year, j.month, j.date, j.hours)), i
        }
    }
}]), angular.module("ui.bootstrap.position", []).factory("$position", ["$document", "$window", function (a, b) {
    function c(a, c) {
        return a.currentStyle ? a.currentStyle[c] : b.getComputedStyle ? b.getComputedStyle(a)[c] : a.style[c]
    }

    function d(a) {
        return"static" === (c(a, "position") || "static")
    }

    var e = function (b) {
        for (var c = a[0], e = b.offsetParent || c; e && e !== c && d(e);)e = e.offsetParent;
        return e || c
    };
    return{position: function (b) {
        var c = this.offset(b), d = {top: 0, left: 0}, f = e(b[0]);
        f != a[0] && (d = this.offset(angular.element(f)), d.top += f.clientTop - f.scrollTop, d.left += f.clientLeft - f.scrollLeft);
        var g = b[0].getBoundingClientRect();
        return{width: g.width || b.prop("offsetWidth"), height: g.height || b.prop("offsetHeight"), top: c.top - d.top, left: c.left - d.left}
    }, offset: function (c) {
        var d = c[0].getBoundingClientRect();
        return{width: d.width || c.prop("offsetWidth"), height: d.height || c.prop("offsetHeight"), top: d.top + (b.pageYOffset || a[0].documentElement.scrollTop), left: d.left + (b.pageXOffset || a[0].documentElement.scrollLeft)}
    }, positionElements: function (a, b, c, d) {
        var e, f, g, h, i = c.split("-"), j = i[0], k = i[1] || "center";
        e = d ? this.offset(a) : this.position(a), f = b.prop("offsetWidth"), g = b.prop("offsetHeight");
        var l = {center: function () {
            return e.left + e.width / 2 - f / 2
        }, left: function () {
            return e.left
        }, right: function () {
            return e.left + e.width
        }}, m = {center: function () {
            return e.top + e.height / 2 - g / 2
        }, top: function () {
            return e.top
        }, bottom: function () {
            return e.top + e.height
        }};
        switch (j) {
            case"right":
                h = {top: m[k](), left: l[j]()};
                break;
            case"left":
                h = {top: m[k](), left: e.left - f};
                break;
            case"bottom":
                h = {top: m[j](), left: l[k]()};
                break;
            default:
                h = {top: e.top - g, left: l[k]()}
        }
        return h
    }}
}]), angular.module("ui.bootstrap.datepicker", ["ui.bootstrap.dateparser", "ui.bootstrap.position"]).constant("datepickerConfig", {formatDay: "dd", formatMonth: "MMMM", formatYear: "yyyy", formatDayHeader: "EEE", formatDayTitle: "MMMM yyyy", formatMonthTitle: "yyyy", datepickerMode: "day", minMode: "day", maxMode: "year", showWeeks: !0, startingDay: 0, yearRange: 20, minDate: null, maxDate: null}).controller("DatepickerController", ["$scope", "$attrs", "$parse", "$interpolate", "$timeout", "$log", "dateFilter", "datepickerConfig", function (a, b, c, d, e, f, g, h) {
    var i = this, j = {$setViewValue: angular.noop};
    this.modes = ["day", "month", "year"], angular.forEach(["formatDay", "formatMonth", "formatYear", "formatDayHeader", "formatDayTitle", "formatMonthTitle", "minMode", "maxMode", "showWeeks", "startingDay", "yearRange"], function (c, e) {
        i[c] = angular.isDefined(b[c]) ? 8 > e ? d(b[c])(a.$parent) : a.$parent.$eval(b[c]) : h[c]
    }), angular.forEach(["minDate", "maxDate"], function (d) {
        b[d] ? a.$parent.$watch(c(b[d]), function (a) {
            i[d] = a ? new Date(a) : null, i.refreshView()
        }) : i[d] = h[d] ? new Date(h[d]) : null
    }), a.datepickerMode = a.datepickerMode || h.datepickerMode, a.uniqueId = "datepicker-" + a.$id + "-" + Math.floor(1e4 * Math.random()), this.activeDate = angular.isDefined(b.initDate) ? a.$parent.$eval(b.initDate) : new Date, a.isActive = function (b) {
        return 0 === i.compare(b.date, i.activeDate) ? (a.activeDateId = b.uid, !0) : !1
    }, this.init = function (a) {
        j = a, j.$render = function () {
            i.render()
        }
    }, this.render = function () {
        if (j.$modelValue) {
            var a = new Date(j.$modelValue), b = !isNaN(a);
            b ? this.activeDate = a : f.error('Datepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.'), j.$setValidity("date", b)
        }
        this.refreshView()
    }, this.refreshView = function () {
        if (this.element) {
            this._refreshView();
            var a = j.$modelValue ? new Date(j.$modelValue) : null;
            j.$setValidity("date-disabled", !a || this.element && !this.isDisabled(a))
        }
    }, this.createDateObject = function (a, b) {
        var c = j.$modelValue ? new Date(j.$modelValue) : null;
        return{date: a, label: g(a, b), selected: c && 0 === this.compare(a, c), disabled: this.isDisabled(a), current: 0 === this.compare(a, new Date)}
    }, this.isDisabled = function (c) {
        return this.minDate && this.compare(c, this.minDate) < 0 || this.maxDate && this.compare(c, this.maxDate) > 0 || b.dateDisabled && a.dateDisabled({date: c, mode: a.datepickerMode})
    }, this.split = function (a, b) {
        for (var c = []; a.length > 0;)c.push(a.splice(0, b));
        return c
    }, a.select = function (b) {
        if (a.datepickerMode === i.minMode) {
            var c = j.$modelValue ? new Date(j.$modelValue) : new Date(0, 0, 0, 0, 0, 0, 0);
            c.setFullYear(b.getFullYear(), b.getMonth(), b.getDate()), j.$setViewValue(c), j.$render()
        } else i.activeDate = b, a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) - 1]
    }, a.move = function (a) {
        var b = i.activeDate.getFullYear() + a * (i.step.years || 0), c = i.activeDate.getMonth() + a * (i.step.months || 0);
        i.activeDate.setFullYear(b, c, 1), i.refreshView()
    }, a.toggleMode = function (b) {
        b = b || 1, a.datepickerMode === i.maxMode && 1 === b || a.datepickerMode === i.minMode && -1 === b || (a.datepickerMode = i.modes[i.modes.indexOf(a.datepickerMode) + b])
    }, a.keys = {13: "enter", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home", 37: "left", 38: "up", 39: "right", 40: "down"};
    var k = function () {
        e(function () {
            i.element[0].focus()
        }, 0, !1)
    };
    a.$on("datepicker.focus", k), a.keydown = function (b) {
        var c = a.keys[b.which];
        if (c && !b.shiftKey && !b.altKey)if (b.preventDefault(), b.stopPropagation(), "enter" === c || "space" === c) {
            if (i.isDisabled(i.activeDate))return;
            a.select(i.activeDate), k()
        } else!b.ctrlKey || "up" !== c && "down" !== c ? (i.handleKeyDown(c, b), i.refreshView()) : (a.toggleMode("up" === c ? 1 : -1), k())
    }
}]).directive("datepicker", function () {
    return{restrict: "EA", replace: !0, templateUrl: "template/datepicker/datepicker.html", scope: {datepickerMode: "=?", dateDisabled: "&"}, require: ["datepicker", "?^ngModel"], controller: "DatepickerController", link: function (a, b, c, d) {
        var e = d[0], f = d[1];
        f && e.init(f)
    }}
}).directive("daypicker", ["dateFilter", function (a) {
    return{restrict: "EA", replace: !0, templateUrl: "template/datepicker/day.html", require: "^datepicker", link: function (b, c, d, e) {
        function f(a, b) {
            return 1 !== b || a % 4 !== 0 || a % 100 === 0 && a % 400 !== 0 ? i[b] : 29
        }

        function g(a, b) {
            var c = new Array(b), d = new Date(a), e = 0;
            for (d.setHours(12); b > e;)c[e++] = new Date(d), d.setDate(d.getDate() + 1);
            return c
        }

        function h(a) {
            var b = new Date(a);
            b.setDate(b.getDate() + 4 - (b.getDay() || 7));
            var c = b.getTime();
            return b.setMonth(0), b.setDate(1), Math.floor(Math.round((c - b) / 864e5) / 7) + 1
        }

        b.showWeeks = e.showWeeks, e.step = {months: 1}, e.element = c;
        var i = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        e._refreshView = function () {
            var c = e.activeDate.getFullYear(), d = e.activeDate.getMonth(), f = new Date(c, d, 1), i = e.startingDay - f.getDay(), j = i > 0 ? 7 - i : -i, k = new Date(f);
            j > 0 && k.setDate(-j + 1);
            for (var l = g(k, 42), m = 0; 42 > m; m++)l[m] = angular.extend(e.createDateObject(l[m], e.formatDay), {secondary: l[m].getMonth() !== d, uid: b.uniqueId + "-" + m});
            b.labels = new Array(7);
            for (var n = 0; 7 > n; n++)b.labels[n] = {abbr: a(l[n].date, e.formatDayHeader), full: a(l[n].date, "EEEE")};
            if (b.title = a(e.activeDate, e.formatDayTitle), b.rows = e.split(l, 7), b.showWeeks) {
                b.weekNumbers = [];
                for (var o = h(b.rows[0][0].date), p = b.rows.length; b.weekNumbers.push(o++) < p;);
            }
        }, e.compare = function (a, b) {
            return new Date(a.getFullYear(), a.getMonth(), a.getDate()) - new Date(b.getFullYear(), b.getMonth(), b.getDate())
        }, e.handleKeyDown = function (a) {
            var b = e.activeDate.getDate();
            if ("left" === a)b -= 1; else if ("up" === a)b -= 7; else if ("right" === a)b += 1; else if ("down" === a)b += 7; else if ("pageup" === a || "pagedown" === a) {
                var c = e.activeDate.getMonth() + ("pageup" === a ? -1 : 1);
                e.activeDate.setMonth(c, 1), b = Math.min(f(e.activeDate.getFullYear(), e.activeDate.getMonth()), b)
            } else"home" === a ? b = 1 : "end" === a && (b = f(e.activeDate.getFullYear(), e.activeDate.getMonth()));
            e.activeDate.setDate(b)
        }, e.refreshView()
    }}
}]).directive("monthpicker", ["dateFilter", function (a) {
    return{restrict: "EA", replace: !0, templateUrl: "template/datepicker/month.html", require: "^datepicker", link: function (b, c, d, e) {
        e.step = {years: 1}, e.element = c, e._refreshView = function () {
            for (var c = new Array(12), d = e.activeDate.getFullYear(), f = 0; 12 > f; f++)c[f] = angular.extend(e.createDateObject(new Date(d, f, 1), e.formatMonth), {uid: b.uniqueId + "-" + f});
            b.title = a(e.activeDate, e.formatMonthTitle), b.rows = e.split(c, 3)
        }, e.compare = function (a, b) {
            return new Date(a.getFullYear(), a.getMonth()) - new Date(b.getFullYear(), b.getMonth())
        }, e.handleKeyDown = function (a) {
            var b = e.activeDate.getMonth();
            if ("left" === a)b -= 1; else if ("up" === a)b -= 3; else if ("right" === a)b += 1; else if ("down" === a)b += 3; else if ("pageup" === a || "pagedown" === a) {
                var c = e.activeDate.getFullYear() + ("pageup" === a ? -1 : 1);
                e.activeDate.setFullYear(c)
            } else"home" === a ? b = 0 : "end" === a && (b = 11);
            e.activeDate.setMonth(b)
        }, e.refreshView()
    }}
}]).directive("yearpicker", ["dateFilter", function () {
    return{restrict: "EA", replace: !0, templateUrl: "template/datepicker/year.html", require: "^datepicker", link: function (a, b, c, d) {
        function e(a) {
            return parseInt((a - 1) / f, 10) * f + 1
        }

        var f = d.yearRange;
        d.step = {years: f}, d.element = b, d._refreshView = function () {
            for (var b = new Array(f), c = 0, g = e(d.activeDate.getFullYear()); f > c; c++)b[c] = angular.extend(d.createDateObject(new Date(g + c, 0, 1), d.formatYear), {uid: a.uniqueId + "-" + c});
            a.title = [b[0].label, b[f - 1].label].join(" - "), a.rows = d.split(b, 5)
        }, d.compare = function (a, b) {
            return a.getFullYear() - b.getFullYear()
        }, d.handleKeyDown = function (a) {
            var b = d.activeDate.getFullYear();
            "left" === a ? b -= 1 : "up" === a ? b -= 5 : "right" === a ? b += 1 : "down" === a ? b += 5 : "pageup" === a || "pagedown" === a ? b += ("pageup" === a ? -1 : 1) * d.step.years : "home" === a ? b = e(d.activeDate.getFullYear()) : "end" === a && (b = e(d.activeDate.getFullYear()) + f - 1), d.activeDate.setFullYear(b)
        }, d.refreshView()
    }}
}]).constant("datepickerPopupConfig", {datepickerPopup: "yyyy-MM-dd", currentText: "Today", clearText: "Clear", closeText: "Done", closeOnDateSelection: !0, appendToBody: !1, showButtonBar: !0}).directive("datepickerPopup", ["$compile", "$parse", "$document", "$position", "dateFilter", "dateParser", "datepickerPopupConfig", function (a, b, c, d, e, f, g) {
    return{restrict: "EA", require: "ngModel", scope: {isOpen: "=?", currentText: "@", clearText: "@", closeText: "@", dateDisabled: "&"}, link: function (h, i, j, k) {
        function l(a) {
            return a.replace(/([A-Z])/g, function (a) {
                return"-" + a.toLowerCase()
            })
        }

        function m(a) {
            if (a) {
                if (angular.isDate(a) && !isNaN(a))return k.$setValidity("date", !0), a;
                if (angular.isString(a)) {
                    var b = f.parse(a, n) || new Date(a);
                    return isNaN(b) ? void k.$setValidity("date", !1) : (k.$setValidity("date", !0), b)
                }
                return void k.$setValidity("date", !1)
            }
            return k.$setValidity("date", !0), null
        }

        var n, o = angular.isDefined(j.closeOnDateSelection) ? h.$parent.$eval(j.closeOnDateSelection) : g.closeOnDateSelection, p = angular.isDefined(j.datepickerAppendToBody) ? h.$parent.$eval(j.datepickerAppendToBody) : g.appendToBody;
        h.showButtonBar = angular.isDefined(j.showButtonBar) ? h.$parent.$eval(j.showButtonBar) : g.showButtonBar, h.getText = function (a) {
            return h[a + "Text"] || g[a + "Text"]
        }, j.$observe("datepickerPopup", function (a) {
            n = a || g.datepickerPopup, k.$render()
        });
        var q = angular.element("<div datepicker-popup-wrap><div datepicker></div></div>");
        q.attr({"ng-model": "date", "ng-change": "dateSelection()"});
        var r = angular.element(q.children()[0]);
        j.datepickerOptions && angular.forEach(h.$parent.$eval(j.datepickerOptions), function (a, b) {
            r.attr(l(b), a)
        }), angular.forEach(["minDate", "maxDate"], function (a) {
            j[a] && (h.$parent.$watch(b(j[a]), function (b) {
                h[a] = b
            }), r.attr(l(a), a))
        }), j.dateDisabled && r.attr("date-disabled", "dateDisabled({ date: date, mode: mode })"), k.$parsers.unshift(m), h.dateSelection = function (a) {
            angular.isDefined(a) && (h.date = a), k.$setViewValue(h.date), k.$render(), o && (h.isOpen = !1, i[0].focus())
        }, i.bind("input change keyup", function () {
            h.$apply(function () {
                h.date = k.$modelValue
            })
        }), k.$render = function () {
            var a = k.$viewValue ? e(k.$viewValue, n) : "";
            i.val(a), h.date = m(k.$modelValue)
        };
        var s = function (a) {
            h.isOpen && a.target !== i[0] && h.$apply(function () {
                h.isOpen = !1
            })
        }, t = function (a) {
            h.keydown(a)
        };
        i.bind("keydown", t), h.keydown = function (a) {
            27 === a.which ? (a.preventDefault(), a.stopPropagation(), h.close()) : 40 !== a.which || h.isOpen || (h.isOpen = !0)
        }, h.$watch("isOpen", function (a) {
            a ? (h.$broadcast("datepicker.focus"), h.position = p ? d.offset(i) : d.position(i), h.position.top = h.position.top + i.prop("offsetHeight"), c.bind("click", s)) : c.unbind("click", s)
        }), h.select = function (a) {
            if ("today" === a) {
                var b = new Date;
                angular.isDate(k.$modelValue) ? (a = new Date(k.$modelValue), a.setFullYear(b.getFullYear(), b.getMonth(), b.getDate())) : a = new Date(b.setHours(0, 0, 0, 0))
            }
            h.dateSelection(a)
        }, h.close = function () {
            h.isOpen = !1, i[0].focus()
        };
        var u = a(q)(h);
        p ? c.find("body").append(u) : i.after(u), h.$on("$destroy", function () {
            u.remove(), i.unbind("keydown", t), c.unbind("click", s)
        })
    }}
}]).directive("datepickerPopupWrap", function () {
    return{restrict: "EA", replace: !0, transclude: !0, templateUrl: "template/datepicker/popup.html", link: function (a, b) {
        b.bind("click", function (a) {
            a.preventDefault(), a.stopPropagation()
        })
    }}
}), angular.module("ui.bootstrap.dropdown", []).constant("dropdownConfig", {openClass: "open"}).service("dropdownService", ["$document", function (a) {
    var b = null;
    this.open = function (e) {
        b || (a.bind("click", c), a.bind("keydown", d)), b && b !== e && (b.isOpen = !1), b = e
    }, this.close = function (e) {
        b === e && (b = null, a.unbind("click", c), a.unbind("keydown", d))
    };
    var c = function (a) {
        a && a.isDefaultPrevented() || b.$apply(function () {
            b.isOpen = !1
        })
    }, d = function (a) {
        27 === a.which && (b.focusToggleElement(), c())
    }
}]).controller("DropdownController", ["$scope", "$attrs", "$parse", "dropdownConfig", "dropdownService", "$animate", function (a, b, c, d, e, f) {
    var g, h = this, i = a.$new(), j = d.openClass, k = angular.noop, l = b.onToggle ? c(b.onToggle) : angular.noop;
    this.init = function (d) {
        h.$element = d, b.isOpen && (g = c(b.isOpen), k = g.assign, a.$watch(g, function (a) {
            i.isOpen = !!a
        }))
    }, this.toggle = function (a) {
        return i.isOpen = arguments.length ? !!a : !i.isOpen
    }, this.isOpen = function () {
        return i.isOpen
    }, i.focusToggleElement = function () {
        h.toggleElement && h.toggleElement[0].focus()
    }, i.$watch("isOpen", function (b, c) {
        f[b ? "addClass" : "removeClass"](h.$element, j), b ? (i.focusToggleElement(), e.open(i)) : e.close(i), k(a, b), angular.isDefined(b) && b !== c && l(a, {open: !!b})
    }), a.$on("$locationChangeSuccess", function () {
        i.isOpen = !1
    }), a.$on("$destroy", function () {
        i.$destroy()
    })
}]).directive("dropdown", function () {
    return{restrict: "CA", controller: "DropdownController", link: function (a, b, c, d) {
        d.init(b)
    }}
}).directive("dropdownToggle", function () {
    return{restrict: "CA", require: "?^dropdown", link: function (a, b, c, d) {
        if (d) {
            d.toggleElement = b;
            var e = function (e) {
                e.preventDefault(), b.hasClass("disabled") || c.disabled || a.$apply(function () {
                    d.toggle()
                })
            };
            b.bind("click", e), b.attr({"aria-haspopup": !0, "aria-expanded": !1}), a.$watch(d.isOpen, function (a) {
                b.attr("aria-expanded", !!a)
            }), a.$on("$destroy", function () {
                b.unbind("click", e)
            })
        }
    }}
}), angular.module("ui.bootstrap.modal", ["ui.bootstrap.transition"]).factory("$$stackedMap", function () {
    return{createNew: function () {
        var a = [];
        return{add: function (b, c) {
            a.push({key: b, value: c})
        }, get: function (b) {
            for (var c = 0; c < a.length; c++)if (b == a[c].key)return a[c]
        }, keys: function () {
            for (var b = [], c = 0; c < a.length; c++)b.push(a[c].key);
            return b
        }, top: function () {
            return a[a.length - 1]
        }, remove: function (b) {
            for (var c = -1, d = 0; d < a.length; d++)if (b == a[d].key) {
                c = d;
                break
            }
            return a.splice(c, 1)[0]
        }, removeTop: function () {
            return a.splice(a.length - 1, 1)[0]
        }, length: function () {
            return a.length
        }}
    }}
}).directive("modalBackdrop", ["$timeout", function (a) {
    return{restrict: "EA", replace: !0, templateUrl: "template/modal/backdrop.html", link: function (b) {
        b.animate = !1, a(function () {
            b.animate = !0
        })
    }}
}]).directive("modalWindow", ["$modalStack", "$timeout", function (a, b) {
    return{restrict: "EA", scope: {index: "@", animate: "="}, replace: !0, transclude: !0, templateUrl: function (a, b) {
        return b.templateUrl || "template/modal/window.html"
    }, link: function (c, d, e) {
        d.addClass(e.windowClass || ""), c.size = e.size, b(function () {
            c.animate = !0, d[0].focus()
        }), c.close = function (b) {
            var c = a.getTop();
            c && c.value.backdrop && "static" != c.value.backdrop && b.target === b.currentTarget && (b.preventDefault(), b.stopPropagation(), a.dismiss(c.key, "backdrop click"))
        }
    }}
}]).factory("$modalStack", ["$transition", "$timeout", "$document", "$compile", "$rootScope", "$$stackedMap", function (a, b, c, d, e, f) {
    function g() {
        for (var a = -1, b = n.keys(), c = 0; c < b.length; c++)n.get(b[c]).value.backdrop && (a = c);
        return a
    }

    function h(a) {
        var b = c.find("body").eq(0), d = n.get(a).value;
        n.remove(a), j(d.modalDomEl, d.modalScope, 300, function () {
            d.modalScope.$destroy(), b.toggleClass(m, n.length() > 0), i()
        })
    }

    function i() {
        if (k && -1 == g()) {
            var a = l;
            j(k, l, 150, function () {
                a.$destroy(), a = null
            }), k = void 0, l = void 0
        }
    }

    function j(c, d, e, f) {
        function g() {
            g.done || (g.done = !0, c.remove(), f && f())
        }

        d.animate = !1;
        var h = a.transitionEndEventName;
        if (h) {
            var i = b(g, e);
            c.bind(h, function () {
                b.cancel(i), g(), d.$apply()
            })
        } else b(g, 0)
    }

    var k, l, m = "modal-open", n = f.createNew(), o = {};
    return e.$watch(g, function (a) {
        l && (l.index = a)
    }), c.bind("keydown", function (a) {
        var b;
        27 === a.which && (b = n.top(), b && b.value.keyboard && (a.preventDefault(), e.$apply(function () {
            o.dismiss(b.key, "escape key press")
        })))
    }), o.open = function (a, b) {
        n.add(a, {deferred: b.deferred, modalScope: b.scope, backdrop: b.backdrop, keyboard: b.keyboard});
        var f = c.find("body").eq(0), h = g();
        h >= 0 && !k && (l = e.$new(!0), l.index = h, k = d("<div modal-backdrop></div>")(l), f.append(k));
        var i = angular.element("<div modal-window></div>");
        i.attr({"template-url": b.windowTemplateUrl, "window-class": b.windowClass, size: b.size, index: n.length() - 1, animate: "animate"}).html(b.content);
        var j = d(i)(b.scope);
        n.top().value.modalDomEl = j, f.append(j), f.addClass(m)
    }, o.close = function (a, b) {
        var c = n.get(a).value;
        c && (c.deferred.resolve(b), h(a))
    }, o.dismiss = function (a, b) {
        var c = n.get(a).value;
        c && (c.deferred.reject(b), h(a))
    }, o.dismissAll = function (a) {
        for (var b = this.getTop(); b;)this.dismiss(b.key, a), b = this.getTop()
    }, o.getTop = function () {
        return n.top()
    }, o
}]).provider("$modal", function () {
    var a = {options: {backdrop: !0, keyboard: !0}, $get: ["$injector", "$rootScope", "$q", "$http", "$templateCache", "$controller", "$modalStack", function (b, c, d, e, f, g, h) {
        function i(a) {
            return a.template ? d.when(a.template) : e.get(a.templateUrl, {cache: f}).then(function (a) {
                return a.data
            })
        }

        function j(a) {
            var c = [];
            return angular.forEach(a, function (a) {
                (angular.isFunction(a) || angular.isArray(a)) && c.push(d.when(b.invoke(a)))
            }), c
        }

        var k = {};
        return k.open = function (b) {
            var e = d.defer(), f = d.defer(), k = {result: e.promise, opened: f.promise, close: function (a) {
                h.close(k, a)
            }, dismiss: function (a) {
                h.dismiss(k, a)
            }};
            if (b = angular.extend({}, a.options, b), b.resolve = b.resolve || {}, !b.template && !b.templateUrl)throw new Error("One of template or templateUrl options is required.");
            var l = d.all([i(b)].concat(j(b.resolve)));
            return l.then(function (a) {
                var d = (b.scope || c).$new();
                d.$close = k.close, d.$dismiss = k.dismiss;
                var f, i = {}, j = 1;
                b.controller && (i.$scope = d, i.$modalInstance = k, angular.forEach(b.resolve, function (b, c) {
                    i[c] = a[j++]
                }), f = g(b.controller, i)), h.open(k, {scope: d, deferred: e, content: a[0], backdrop: b.backdrop, keyboard: b.keyboard, windowClass: b.windowClass, windowTemplateUrl: b.windowTemplateUrl, size: b.size})
            }, function (a) {
                e.reject(a)
            }), l.then(function () {
                f.resolve(!0)
            }, function () {
                f.reject(!1)
            }), k
        }, k
    }]};
    return a
}), angular.module("ui.bootstrap.pagination", []).controller("PaginationController", ["$scope", "$attrs", "$parse", function (a, b, c) {
    var d = this, e = {$setViewValue: angular.noop}, f = b.numPages ? c(b.numPages).assign : angular.noop;
    this.init = function (f, g) {
        e = f, this.config = g, e.$render = function () {
            d.render()
        }, b.itemsPerPage ? a.$parent.$watch(c(b.itemsPerPage), function (b) {
            d.itemsPerPage = parseInt(b, 10), a.totalPages = d.calculateTotalPages()
        }) : this.itemsPerPage = g.itemsPerPage
    }, this.calculateTotalPages = function () {
        var b = this.itemsPerPage < 1 ? 1 : Math.ceil(a.totalItems / this.itemsPerPage);
        return Math.max(b || 0, 1)
    }, this.render = function () {
        a.page = parseInt(e.$viewValue, 10) || 1
    }, a.selectPage = function (b) {
        a.page !== b && b > 0 && b <= a.totalPages && (e.$setViewValue(b), e.$render())
    }, a.getText = function (b) {
        return a[b + "Text"] || d.config[b + "Text"]
    }, a.noPrevious = function () {
        return 1 === a.page
    }, a.noNext = function () {
        return a.page === a.totalPages
    }, a.$watch("totalItems", function () {
        a.totalPages = d.calculateTotalPages()
    }), a.$watch("totalPages", function (b) {
        f(a.$parent, b), a.page > b ? a.selectPage(b) : e.$render()
    })
}]).constant("paginationConfig", {itemsPerPage: 10, boundaryLinks: !1, directionLinks: !0, firstText: "First", previousText: "Previous", nextText: "Next", lastText: "Last", rotate: !0}).directive("pagination", ["$parse", "paginationConfig", function (a, b) {
    return{restrict: "EA", scope: {totalItems: "=", firstText: "@", previousText: "@", nextText: "@", lastText: "@"}, require: ["pagination", "?ngModel"], controller: "PaginationController", templateUrl: "template/pagination/pagination.html", replace: !0, link: function (c, d, e, f) {
        function g(a, b, c) {
            return{number: a, text: b, active: c}
        }

        function h(a, b) {
            var c = [], d = 1, e = b, f = angular.isDefined(k) && b > k;
            f && (l ? (d = Math.max(a - Math.floor(k / 2), 1), e = d + k - 1, e > b && (e = b, d = e - k + 1)) : (d = (Math.ceil(a / k) - 1) * k + 1, e = Math.min(d + k - 1, b)));
            for (var h = d; e >= h; h++) {
                var i = g(h, h, h === a);
                c.push(i)
            }
            if (f && !l) {
                if (d > 1) {
                    var j = g(d - 1, "...", !1);
                    c.unshift(j)
                }
                if (b > e) {
                    var m = g(e + 1, "...", !1);
                    c.push(m)
                }
            }
            return c
        }

        var i = f[0], j = f[1];
        if (j) {
            var k = angular.isDefined(e.maxSize) ? c.$parent.$eval(e.maxSize) : b.maxSize, l = angular.isDefined(e.rotate) ? c.$parent.$eval(e.rotate) : b.rotate;
            c.boundaryLinks = angular.isDefined(e.boundaryLinks) ? c.$parent.$eval(e.boundaryLinks) : b.boundaryLinks, c.directionLinks = angular.isDefined(e.directionLinks) ? c.$parent.$eval(e.directionLinks) : b.directionLinks, i.init(j, b), e.maxSize && c.$parent.$watch(a(e.maxSize), function (a) {
                k = parseInt(a, 10), i.render()
            });
            var m = i.render;
            i.render = function () {
                m(), c.page > 0 && c.page <= c.totalPages && (c.pages = h(c.page, c.totalPages))
            }
        }
    }}
}]).constant("pagerConfig", {itemsPerPage: 10, previousText: "« Previous", nextText: "Next »", align: !0}).directive("pager", ["pagerConfig", function (a) {
    return{restrict: "EA", scope: {totalItems: "=", previousText: "@", nextText: "@"}, require: ["pager", "?ngModel"], controller: "PaginationController", templateUrl: "template/pagination/pager.html", replace: !0, link: function (b, c, d, e) {
        var f = e[0], g = e[1];
        g && (b.align = angular.isDefined(d.align) ? b.$parent.$eval(d.align) : a.align, f.init(g, a))
    }}
}]), angular.module("ui.bootstrap.tooltip", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).provider("$tooltip", function () {
    function a(a) {
        var b = /[A-Z]/g, c = "-";
        return a.replace(b, function (a, b) {
            return(b ? c : "") + a.toLowerCase()
        })
    }

    var b = {placement: "top", animation: !0, popupDelay: 0}, c = {mouseenter: "mouseleave", click: "click", focus: "blur"}, d = {};
    this.options = function (a) {
        angular.extend(d, a)
    }, this.setTriggers = function (a) {
        angular.extend(c, a)
    }, this.$get = ["$window", "$compile", "$timeout", "$parse", "$document", "$position", "$interpolate", function (e, f, g, h, i, j, k) {
        return function (e, l, m) {
            function n(a) {
                var b = a || o.trigger || m, d = c[b] || b;
                return{show: b, hide: d}
            }

            var o = angular.extend({}, b, d), p = a(e), q = k.startSymbol(), r = k.endSymbol(), s = "<div " + p + '-popup title="' + q + "tt_title" + r + '" content="' + q + "tt_content" + r + '" placement="' + q + "tt_placement" + r + '" animation="tt_animation" is-open="tt_isOpen"></div>';
            return{restrict: "EA", scope: !0, compile: function () {
                var a = f(s);
                return function (b, c, d) {
                    function f() {
                        b.tt_isOpen ? m() : k()
                    }

                    function k() {
                        (!y || b.$eval(d[l + "Enable"])) && (b.tt_popupDelay ? v || (v = g(p, b.tt_popupDelay, !1), v.then(function (a) {
                            a()
                        })) : p()())
                    }

                    function m() {
                        b.$apply(function () {
                            q()
                        })
                    }

                    function p() {
                        return v = null, u && (g.cancel(u), u = null), b.tt_content ? (r(), t.css({top: 0, left: 0, display: "block"}), w ? i.find("body").append(t) : c.after(t), z(), b.tt_isOpen = !0, b.$digest(), z) : angular.noop
                    }

                    function q() {
                        b.tt_isOpen = !1, g.cancel(v), v = null, b.tt_animation ? u || (u = g(s, 500)) : s()
                    }

                    function r() {
                        t && s(), t = a(b, function () {
                        }), b.$digest()
                    }

                    function s() {
                        u = null, t && (t.remove(), t = null)
                    }

                    var t, u, v, w = angular.isDefined(o.appendToBody) ? o.appendToBody : !1, x = n(void 0), y = angular.isDefined(d[l + "Enable"]), z = function () {
                        var a = j.positionElements(c, t, b.tt_placement, w);
                        a.top += "px", a.left += "px", t.css(a)
                    };
                    b.tt_isOpen = !1, d.$observe(e, function (a) {
                        b.tt_content = a, !a && b.tt_isOpen && q()
                    }), d.$observe(l + "Title", function (a) {
                        b.tt_title = a
                    }), d.$observe(l + "Placement", function (a) {
                        b.tt_placement = angular.isDefined(a) ? a : o.placement
                    }), d.$observe(l + "PopupDelay", function (a) {
                        var c = parseInt(a, 10);
                        b.tt_popupDelay = isNaN(c) ? o.popupDelay : c
                    });
                    var A = function () {
                        c.unbind(x.show, k), c.unbind(x.hide, m)
                    };
                    d.$observe(l + "Trigger", function (a) {
                        A(), x = n(a), x.show === x.hide ? c.bind(x.show, f) : (c.bind(x.show, k), c.bind(x.hide, m))
                    });
                    var B = b.$eval(d[l + "Animation"]);
                    b.tt_animation = angular.isDefined(B) ? !!B : o.animation, d.$observe(l + "AppendToBody", function (a) {
                        w = angular.isDefined(a) ? h(a)(b) : w
                    }), w && b.$on("$locationChangeSuccess", function () {
                        b.tt_isOpen && q()
                    }), b.$on("$destroy", function () {
                        g.cancel(u), g.cancel(v), A(), s()
                    })
                }
            }}
        }
    }]
}).directive("tooltipPopup", function () {
    return{restrict: "EA", replace: !0, scope: {content: "@", placement: "@", animation: "&", isOpen: "&"}, templateUrl: "template/tooltip/tooltip-popup.html"}
}).directive("tooltip", ["$tooltip", function (a) {
    return a("tooltip", "tooltip", "mouseenter")
}]).directive("tooltipHtmlUnsafePopup", function () {
    return{restrict: "EA", replace: !0, scope: {content: "@", placement: "@", animation: "&", isOpen: "&"}, templateUrl: "template/tooltip/tooltip-html-unsafe-popup.html"}
}).directive("tooltipHtmlUnsafe", ["$tooltip", function (a) {
    return a("tooltipHtmlUnsafe", "tooltip", "mouseenter")
}]), angular.module("ui.bootstrap.popover", ["ui.bootstrap.tooltip"]).directive("popoverPopup", function () {
    return{restrict: "EA", replace: !0, scope: {title: "@", content: "@", placement: "@", animation: "&", isOpen: "&"}, templateUrl: "template/popover/popover.html"}
}).directive("popover", ["$tooltip", function (a) {
    return a("popover", "popover", "click")
}]), angular.module("ui.bootstrap.progressbar", []).constant("progressConfig", {animate: !0, max: 100}).controller("ProgressController", ["$scope", "$attrs", "progressConfig", function (a, b, c) {
    var d = this, e = angular.isDefined(b.animate) ? a.$parent.$eval(b.animate) : c.animate;
    this.bars = [], a.max = angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max, this.addBar = function (b, c) {
        e || c.css({transition: "none"}), this.bars.push(b), b.$watch("value", function (c) {
            b.percent = +(100 * c / a.max).toFixed(2)
        }), b.$on("$destroy", function () {
            c = null, d.removeBar(b)
        })
    }, this.removeBar = function (a) {
        this.bars.splice(this.bars.indexOf(a), 1)
    }
}]).directive("progress", function () {
    return{restrict: "EA", replace: !0, transclude: !0, controller: "ProgressController", require: "progress", scope: {}, templateUrl: "template/progressbar/progress.html"}
}).directive("bar", function () {
    return{restrict: "EA", replace: !0, transclude: !0, require: "^progress", scope: {value: "=", type: "@"}, templateUrl: "template/progressbar/bar.html", link: function (a, b, c, d) {
        d.addBar(a, b)
    }}
}).directive("progressbar", function () {
    return{restrict: "EA", replace: !0, transclude: !0, controller: "ProgressController", scope: {value: "=", type: "@"}, templateUrl: "template/progressbar/progressbar.html", link: function (a, b, c, d) {
        d.addBar(a, angular.element(b.children()[0]))
    }}
}), angular.module("ui.bootstrap.rating", []).constant("ratingConfig", {max: 5, stateOn: null, stateOff: null}).controller("RatingController", ["$scope", "$attrs", "ratingConfig", function (a, b, c) {
    var d = {$setViewValue: angular.noop};
    this.init = function (e) {
        d = e, d.$render = this.render, this.stateOn = angular.isDefined(b.stateOn) ? a.$parent.$eval(b.stateOn) : c.stateOn, this.stateOff = angular.isDefined(b.stateOff) ? a.$parent.$eval(b.stateOff) : c.stateOff;
        var f = angular.isDefined(b.ratingStates) ? a.$parent.$eval(b.ratingStates) : new Array(angular.isDefined(b.max) ? a.$parent.$eval(b.max) : c.max);
        a.range = this.buildTemplateObjects(f)
    }, this.buildTemplateObjects = function (a) {
        for (var b = 0, c = a.length; c > b; b++)a[b] = angular.extend({index: b}, {stateOn: this.stateOn, stateOff: this.stateOff}, a[b]);
        return a
    }, a.rate = function (b) {
        !a.readonly && b >= 0 && b <= a.range.length && (d.$setViewValue(b), d.$render())
    }, a.enter = function (b) {
        a.readonly || (a.value = b), a.onHover({value: b})
    }, a.reset = function () {
        a.value = d.$viewValue, a.onLeave()
    }, a.onKeydown = function (b) {
        /(37|38|39|40)/.test(b.which) && (b.preventDefault(), b.stopPropagation(), a.rate(a.value + (38 === b.which || 39 === b.which ? 1 : -1)))
    }, this.render = function () {
        a.value = d.$viewValue
    }
}]).directive("rating", function () {
    return{restrict: "EA", require: ["rating", "ngModel"], scope: {readonly: "=?", onHover: "&", onLeave: "&"}, controller: "RatingController", templateUrl: "template/rating/rating.html", replace: !0, link: function (a, b, c, d) {
        var e = d[0], f = d[1];
        f && e.init(f)
    }}
}), angular.module("ui.bootstrap.tabs", []).controller("TabsetController", ["$scope", function (a) {
    var b = this, c = b.tabs = a.tabs = [];
    b.select = function (a) {
        angular.forEach(c, function (b) {
            b.active && b !== a && (b.active = !1, b.onDeselect())
        }), a.active = !0, a.onSelect()
    }, b.addTab = function (a) {
        c.push(a), 1 === c.length ? a.active = !0 : a.active && b.select(a)
    }, b.removeTab = function (a) {
        var d = c.indexOf(a);
        if (a.active && c.length > 1) {
            var e = d == c.length - 1 ? d - 1 : d + 1;
            b.select(c[e])
        }
        c.splice(d, 1)
    }
}]).directive("tabset", function () {
    return{restrict: "EA", transclude: !0, replace: !0, scope: {type: "@"}, controller: "TabsetController", templateUrl: "template/tabs/tabset.html", link: function (a, b, c) {
        a.vertical = angular.isDefined(c.vertical) ? a.$parent.$eval(c.vertical) : !1, a.justified = angular.isDefined(c.justified) ? a.$parent.$eval(c.justified) : !1
    }}
}).directive("tab", ["$parse", function (a) {
    return{require: "^tabset", restrict: "EA", replace: !0, templateUrl: "template/tabs/tab.html", transclude: !0, scope: {active: "=?", heading: "@", onSelect: "&select", onDeselect: "&deselect"}, controller: function () {
    }, compile: function (b, c, d) {
        return function (b, c, e, f) {
            b.$watch("active", function (a) {
                a && f.select(b)
            }), b.disabled = !1, e.disabled && b.$parent.$watch(a(e.disabled), function (a) {
                b.disabled = !!a
            }), b.select = function () {
                b.disabled || (b.active = !0)
            }, f.addTab(b), b.$on("$destroy", function () {
                f.removeTab(b)
            }), b.$transcludeFn = d
        }
    }}
}]).directive("tabHeadingTransclude", [function () {
    return{restrict: "A", require: "^tab", link: function (a, b) {
        a.$watch("headingElement", function (a) {
            a && (b.html(""), b.append(a))
        })
    }}
}]).directive("tabContentTransclude", function () {
    function a(a) {
        return a.tagName && (a.hasAttribute("tab-heading") || a.hasAttribute("data-tab-heading") || "tab-heading" === a.tagName.toLowerCase() || "data-tab-heading" === a.tagName.toLowerCase())
    }

    return{restrict: "A", require: "^tabset", link: function (b, c, d) {
        var e = b.$eval(d.tabContentTransclude);
        e.$transcludeFn(e.$parent, function (b) {
            angular.forEach(b, function (b) {
                a(b) ? e.headingElement = b : c.append(b)
            })
        })
    }}
}), angular.module("ui.bootstrap.timepicker", []).constant("timepickerConfig", {hourStep: 1, minuteStep: 1, showMeridian: !0, meridians: null, readonlyInput: !1, mousewheel: !0}).controller("TimepickerController", ["$scope", "$attrs", "$parse", "$log", "$locale", "timepickerConfig", function (a, b, c, d, e, f) {
    function g() {
        var b = parseInt(a.hours, 10), c = a.showMeridian ? b > 0 && 13 > b : b >= 0 && 24 > b;
        return c ? (a.showMeridian && (12 === b && (b = 0), a.meridian === p[1] && (b += 12)), b) : void 0
    }

    function h() {
        var b = parseInt(a.minutes, 10);
        return b >= 0 && 60 > b ? b : void 0
    }

    function i(a) {
        return angular.isDefined(a) && a.toString().length < 2 ? "0" + a : a
    }

    function j(a) {
        k(), o.$setViewValue(new Date(n)), l(a)
    }

    function k() {
        o.$setValidity("time", !0), a.invalidHours = !1, a.invalidMinutes = !1
    }

    function l(b) {
        var c = n.getHours(), d = n.getMinutes();
        a.showMeridian && (c = 0 === c || 12 === c ? 12 : c % 12), a.hours = "h" === b ? c : i(c), a.minutes = "m" === b ? d : i(d), a.meridian = n.getHours() < 12 ? p[0] : p[1]
    }

    function m(a) {
        var b = new Date(n.getTime() + 6e4 * a);
        n.setHours(b.getHours(), b.getMinutes()), j()
    }

    var n = new Date, o = {$setViewValue: angular.noop}, p = angular.isDefined(b.meridians) ? a.$parent.$eval(b.meridians) : f.meridians || e.DATETIME_FORMATS.AMPMS;
    this.init = function (c, d) {
        o = c, o.$render = this.render;
        var e = d.eq(0), g = d.eq(1), h = angular.isDefined(b.mousewheel) ? a.$parent.$eval(b.mousewheel) : f.mousewheel;
        h && this.setupMousewheelEvents(e, g), a.readonlyInput = angular.isDefined(b.readonlyInput) ? a.$parent.$eval(b.readonlyInput) : f.readonlyInput, this.setupInputEvents(e, g)
    };
    var q = f.hourStep;
    b.hourStep && a.$parent.$watch(c(b.hourStep), function (a) {
        q = parseInt(a, 10)
    });
    var r = f.minuteStep;
    b.minuteStep && a.$parent.$watch(c(b.minuteStep), function (a) {
        r = parseInt(a, 10)
    }), a.showMeridian = f.showMeridian, b.showMeridian && a.$parent.$watch(c(b.showMeridian), function (b) {
        if (a.showMeridian = !!b, o.$error.time) {
            var c = g(), d = h();
            angular.isDefined(c) && angular.isDefined(d) && (n.setHours(c), j())
        } else l()
    }), this.setupMousewheelEvents = function (b, c) {
        var d = function (a) {
            a.originalEvent && (a = a.originalEvent);
            var b = a.wheelDelta ? a.wheelDelta : -a.deltaY;
            return a.detail || b > 0
        };
        b.bind("mousewheel wheel", function (b) {
            a.$apply(d(b) ? a.incrementHours() : a.decrementHours()), b.preventDefault()
        }), c.bind("mousewheel wheel", function (b) {
            a.$apply(d(b) ? a.incrementMinutes() : a.decrementMinutes()), b.preventDefault()
        })
    }, this.setupInputEvents = function (b, c) {
        if (a.readonlyInput)return a.updateHours = angular.noop, void(a.updateMinutes = angular.noop);
        var d = function (b, c) {
            o.$setViewValue(null), o.$setValidity("time", !1), angular.isDefined(b) && (a.invalidHours = b), angular.isDefined(c) && (a.invalidMinutes = c)
        };
        a.updateHours = function () {
            var a = g();
            angular.isDefined(a) ? (n.setHours(a), j("h")) : d(!0)
        }, b.bind("blur", function () {
            !a.invalidHours && a.hours < 10 && a.$apply(function () {
                a.hours = i(a.hours)
            })
        }), a.updateMinutes = function () {
            var a = h();
            angular.isDefined(a) ? (n.setMinutes(a), j("m")) : d(void 0, !0)
        }, c.bind("blur", function () {
            !a.invalidMinutes && a.minutes < 10 && a.$apply(function () {
                a.minutes = i(a.minutes)
            })
        })
    }, this.render = function () {
        var a = o.$modelValue ? new Date(o.$modelValue) : null;
        isNaN(a) ? (o.$setValidity("time", !1), d.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.')) : (a && (n = a), k(), l())
    }, a.incrementHours = function () {
        m(60 * q)
    }, a.decrementHours = function () {
        m(60 * -q)
    }, a.incrementMinutes = function () {
        m(r)
    }, a.decrementMinutes = function () {
        m(-r)
    }, a.toggleMeridian = function () {
        m(720 * (n.getHours() < 12 ? 1 : -1))
    }
}]).directive("timepicker", function () {
    return{restrict: "EA", require: ["timepicker", "?^ngModel"], controller: "TimepickerController", replace: !0, scope: {}, templateUrl: "template/timepicker/timepicker.html", link: function (a, b, c, d) {
        var e = d[0], f = d[1];
        f && e.init(f, b.find("input"))
    }}
}), angular.module("ui.bootstrap.typeahead", ["ui.bootstrap.position", "ui.bootstrap.bindHtml"]).factory("typeaheadParser", ["$parse", function (a) {
    var b = /^\s*(.*?)(?:\s+as\s+(.*?))?\s+for\s+(?:([\$\w][\$\w\d]*))\s+in\s+(.*)$/;
    return{parse: function (c) {
        var d = c.match(b);
        if (!d)throw new Error('Expected typeahead specification in form of "_modelValue_ (as _label_)? for _item_ in _collection_" but got "' + c + '".');
        return{itemName: d[3], source: a(d[4]), viewMapper: a(d[2] || d[1]), modelMapper: a(d[1])}
    }}
}]).directive("typeahead", ["$compile", "$parse", "$q", "$timeout", "$document", "$position", "typeaheadParser", function (a, b, c, d, e, f, g) {
    var h = [9, 13, 27, 38, 40];
    return{require: "ngModel", link: function (i, j, k, l) {
        var m, n = i.$eval(k.typeaheadMinLength) || 1, o = i.$eval(k.typeaheadWaitMs) || 0, p = i.$eval(k.typeaheadEditable) !== !1, q = b(k.typeaheadLoading).assign || angular.noop, r = b(k.typeaheadOnSelect), s = k.typeaheadInputFormatter ? b(k.typeaheadInputFormatter) : void 0, t = k.typeaheadAppendToBody ? i.$eval(k.typeaheadAppendToBody) : !1, u = b(k.ngModel).assign, v = g.parse(k.typeahead), w = i.$new();
        i.$on("$destroy", function () {
            w.$destroy()
        });
        var x = "typeahead-" + w.$id + "-" + Math.floor(1e4 * Math.random());
        j.attr({"aria-autocomplete": "list", "aria-expanded": !1, "aria-owns": x});
        var y = angular.element("<div typeahead-popup></div>");
        y.attr({id: x, matches: "matches", active: "activeIdx", select: "select(activeIdx)", query: "query", position: "position"}), angular.isDefined(k.typeaheadTemplateUrl) && y.attr("template-url", k.typeaheadTemplateUrl);
        var z = function () {
            w.matches = [], w.activeIdx = -1, j.attr("aria-expanded", !1)
        }, A = function (a) {
            return x + "-option-" + a
        };
        w.$watch("activeIdx", function (a) {
            0 > a ? j.removeAttr("aria-activedescendant") : j.attr("aria-activedescendant", A(a))
        });
        var B = function (a) {
            var b = {$viewValue: a};
            q(i, !0), c.when(v.source(i, b)).then(function (c) {
                var d = a === l.$viewValue;
                if (d && m)if (c.length > 0) {
                    w.activeIdx = 0, w.matches.length = 0;
                    for (var e = 0; e < c.length; e++)b[v.itemName] = c[e], w.matches.push({id: A(e), label: v.viewMapper(w, b), model: c[e]});
                    w.query = a, w.position = t ? f.offset(j) : f.position(j), w.position.top = w.position.top + j.prop("offsetHeight"), j.attr("aria-expanded", !0)
                } else z();
                d && q(i, !1)
            }, function () {
                z(), q(i, !1)
            })
        };
        z(), w.query = void 0;
        var C;
        l.$parsers.unshift(function (a) {
            return m = !0, a && a.length >= n ? o > 0 ? (C && d.cancel(C), C = d(function () {
                B(a)
            }, o)) : B(a) : (q(i, !1), z()), p ? a : a ? void l.$setValidity("editable", !1) : (l.$setValidity("editable", !0), a)
        }), l.$formatters.push(function (a) {
            var b, c, d = {};
            return s ? (d.$model = a, s(i, d)) : (d[v.itemName] = a, b = v.viewMapper(i, d), d[v.itemName] = void 0, c = v.viewMapper(i, d), b !== c ? b : a)
        }), w.select = function (a) {
            var b, c, e = {};
            e[v.itemName] = c = w.matches[a].model, b = v.modelMapper(i, e), u(i, b), l.$setValidity("editable", !0), r(i, {$item: c, $model: b, $label: v.viewMapper(i, e)}), z(), d(function () {
                j[0].focus()
            }, 0, !1)
        }, j.bind("keydown", function (a) {
            0 !== w.matches.length && -1 !== h.indexOf(a.which) && (a.preventDefault(), 40 === a.which ? (w.activeIdx = (w.activeIdx + 1) % w.matches.length, w.$digest()) : 38 === a.which ? (w.activeIdx = (w.activeIdx ? w.activeIdx : w.matches.length) - 1, w.$digest()) : 13 === a.which || 9 === a.which ? w.$apply(function () {
                w.select(w.activeIdx)
            }) : 27 === a.which && (a.stopPropagation(), z(), w.$digest()))
        }), j.bind("blur", function () {
            m = !1
        });
        var D = function (a) {
            j[0] !== a.target && (z(), w.$digest())
        };
        e.bind("click", D), i.$on("$destroy", function () {
            e.unbind("click", D)
        });
        var E = a(y)(w);
        t ? e.find("body").append(E) : j.after(E)
    }}
}]).directive("typeaheadPopup", function () {
    return{restrict: "EA", scope: {matches: "=", query: "=", active: "=", position: "=", select: "&"}, replace: !0, templateUrl: "template/typeahead/typeahead-popup.html", link: function (a, b, c) {
        a.templateUrl = c.templateUrl, a.isOpen = function () {
            return a.matches.length > 0
        }, a.isActive = function (b) {
            return a.active == b
        }, a.selectActive = function (b) {
            a.active = b
        }, a.selectMatch = function (b) {
            a.select({activeIdx: b})
        }
    }}
}).directive("typeaheadMatch", ["$http", "$templateCache", "$compile", "$parse", function (a, b, c, d) {
    return{restrict: "EA", scope: {index: "=", match: "=", query: "="}, link: function (e, f, g) {
        var h = d(g.templateUrl)(e.$parent) || "template/typeahead/typeahead-match.html";
        a.get(h, {cache: b}).success(function (a) {
            f.replaceWith(c(a.trim())(e))
        })
    }}
}]).filter("typeaheadHighlight", function () {
    function a(a) {
        return a.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
    }

    return function (b, c) {
        return c ? ("" + b).replace(new RegExp(a(c), "gi"), "<strong>$&</strong>") : b
    }
}), angular.module("template/accordion/accordion-group.html", []).run(["$templateCache", function (a) {
    a.put("template/accordion/accordion-group.html", '<div class="panel panel-default">\n  <div class="panel-heading">\n    <h4 class="panel-title">\n      <a class="accordion-toggle" ng-click="toggleOpen()" accordion-transclude="heading"><span ng-class="{\'text-muted\': isDisabled}">{{heading}}</span></a>\n    </h4>\n  </div>\n  <div class="panel-collapse" collapse="!isOpen">\n	  <div class="panel-body" ng-transclude></div>\n  </div>\n</div>')
}]), angular.module("template/accordion/accordion.html", []).run(["$templateCache", function (a) {
    a.put("template/accordion/accordion.html", '<div class="panel-group" ng-transclude></div>')
}]), angular.module("template/alert/alert.html", []).run(["$templateCache", function (a) {
    a.put("template/alert/alert.html", '<div class="alert" ng-class="{\'alert-{{type || \'warning\'}}\': true, \'alert-dismissable\': closeable}" role="alert">\n    <button ng-show="closeable" type="button" class="close" ng-click="close()">\n        <span aria-hidden="true">&times;</span>\n        <span class="sr-only">Close</span>\n    </button>\n    <div ng-transclude></div>\n</div>\n')
}]), angular.module("template/carousel/carousel.html", []).run(["$templateCache", function (a) {
    a.put("template/carousel/carousel.html", '<div ng-mouseenter="pause()" ng-mouseleave="play()" class="carousel" ng-swipe-right="prev()" ng-swipe-left="next()">\n    <ol class="carousel-indicators" ng-show="slides.length > 1">\n        <li ng-repeat="slide in slides track by $index" ng-class="{active: isActive(slide)}" ng-click="select(slide)"></li>\n    </ol>\n    <div class="carousel-inner" ng-transclude></div>\n    <a class="left carousel-control" ng-click="prev()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-left"></span></a>\n    <a class="right carousel-control" ng-click="next()" ng-show="slides.length > 1"><span class="glyphicon glyphicon-chevron-right"></span></a>\n</div>\n')
}]), angular.module("template/carousel/slide.html", []).run(["$templateCache", function (a) {
    a.put("template/carousel/slide.html", "<div ng-class=\"{\n    'active': leaving || (active && !entering),\n    'prev': (next || active) && direction=='prev',\n    'next': (next || active) && direction=='next',\n    'right': direction=='prev',\n    'left': direction=='next'\n  }\" class=\"item text-center\" ng-transclude></div>\n")
}]), angular.module("template/datepicker/datepicker.html", []).run(["$templateCache", function (a) {
    a.put("template/datepicker/datepicker.html", '<div ng-switch="datepickerMode" role="application" ng-keydown="keydown($event)">\n  <daypicker ng-switch-when="day" tabindex="0"></daypicker>\n  <monthpicker ng-switch-when="month" tabindex="0"></monthpicker>\n  <yearpicker ng-switch-when="year" tabindex="0"></yearpicker>\n</div>')
}]), angular.module("template/datepicker/day.html", []).run(["$templateCache", function (a) {
    a.put("template/datepicker/day.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="{{5 + showWeeks}}"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n    <tr>\n      <th ng-show="showWeeks" class="text-center"></th>\n      <th ng-repeat="label in labels track by $index" class="text-center"><small aria-label="{{label.full}}">{{label.abbr}}</small></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-show="showWeeks" class="text-center h6"><em>{{ weekNumbers[$index] }}</em></td>\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default btn-sm" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-muted\': dt.secondary, \'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/datepicker/month.html", []).run(["$templateCache", function (a) {
    a.put("template/datepicker/month.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/datepicker/popup.html", []).run(["$templateCache", function (a) {
    a.put("template/datepicker/popup.html", '<ul class="dropdown-menu" ng-style="{display: (isOpen && \'block\') || \'none\', top: position.top+\'px\', left: position.left+\'px\'}" ng-keydown="keydown($event)">\n	<li ng-transclude></li>\n	<li ng-if="showButtonBar" style="padding:10px 9px 2px">\n		<span class="btn-group">\n			<button type="button" class="btn btn-sm btn-info" ng-click="select(\'today\')">{{ getText(\'current\') }}</button>\n			<button type="button" class="btn btn-sm btn-danger" ng-click="select(null)">{{ getText(\'clear\') }}</button>\n		</span>\n		<button type="button" class="btn btn-sm btn-success pull-right" ng-click="close()">{{ getText(\'close\') }}</button>\n	</li>\n</ul>\n')
}]), angular.module("template/datepicker/year.html", []).run(["$templateCache", function (a) {
    a.put("template/datepicker/year.html", '<table role="grid" aria-labelledby="{{uniqueId}}-title" aria-activedescendant="{{activeDateId}}">\n  <thead>\n    <tr>\n      <th><button type="button" class="btn btn-default btn-sm pull-left" ng-click="move(-1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-left"></i></button></th>\n      <th colspan="3"><button id="{{uniqueId}}-title" role="heading" aria-live="assertive" aria-atomic="true" type="button" class="btn btn-default btn-sm" ng-click="toggleMode()" tabindex="-1" style="width:100%;"><strong>{{title}}</strong></button></th>\n      <th><button type="button" class="btn btn-default btn-sm pull-right" ng-click="move(1)" tabindex="-1"><i class="glyphicon glyphicon-chevron-right"></i></button></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr ng-repeat="row in rows track by $index">\n      <td ng-repeat="dt in row track by dt.date" class="text-center" role="gridcell" id="{{dt.uid}}" aria-disabled="{{!!dt.disabled}}">\n        <button type="button" style="width:100%;" class="btn btn-default" ng-class="{\'btn-info\': dt.selected, active: isActive(dt)}" ng-click="select(dt.date)" ng-disabled="dt.disabled" tabindex="-1"><span ng-class="{\'text-info\': dt.current}">{{dt.label}}</span></button>\n      </td>\n    </tr>\n  </tbody>\n</table>\n')
}]), angular.module("template/modal/backdrop.html", []).run(["$templateCache", function (a) {
    a.put("template/modal/backdrop.html", '<div class="modal-backdrop fade"\n     ng-class="{in: animate}"\n     ng-style="{\'z-index\': 1040 + (index && 1 || 0) + index*10}"\n></div>\n')
}]), angular.module("template/modal/window.html", []).run(["$templateCache", function (a) {
    a.put("template/modal/window.html", '<div tabindex="-1" role="dialog" class="modal fade" ng-class="{in: animate}" ng-style="{\'z-index\': 1050 + index*10, display: \'block\'}" ng-click="close($event)">\n    <div class="modal-dialog" ng-class="{\'modal-sm\': size == \'sm\', \'modal-lg\': size == \'lg\'}"><div class="modal-content" ng-transclude></div></div>\n</div>')
}]), angular.module("template/pagination/pager.html", []).run(["$templateCache", function (a) {
    a.put("template/pagination/pager.html", '<ul class="pager">\n  <li ng-class="{disabled: noPrevious(), previous: align}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-class="{disabled: noNext(), next: align}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n</ul>')
}]), angular.module("template/pagination/pagination.html", []).run(["$templateCache", function (a) {
    a.put("template/pagination/pagination.html", '<ul class="pagination">\n  <li ng-if="boundaryLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(1)">{{getText(\'first\')}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noPrevious()}"><a href ng-click="selectPage(page - 1)">{{getText(\'previous\')}}</a></li>\n  <li ng-repeat="page in pages track by $index" ng-class="{active: page.active}"><a href ng-click="selectPage(page.number)">{{page.text}}</a></li>\n  <li ng-if="directionLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(page + 1)">{{getText(\'next\')}}</a></li>\n  <li ng-if="boundaryLinks" ng-class="{disabled: noNext()}"><a href ng-click="selectPage(totalPages)">{{getText(\'last\')}}</a></li>\n</ul>')
}]), angular.module("template/tooltip/tooltip-html-unsafe-popup.html", []).run(["$templateCache", function (a) {
    a.put("template/tooltip/tooltip-html-unsafe-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" bind-html-unsafe="content"></div>\n</div>\n')
}]), angular.module("template/tooltip/tooltip-popup.html", []).run(["$templateCache", function (a) {
    a.put("template/tooltip/tooltip-popup.html", '<div class="tooltip {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="tooltip-arrow"></div>\n  <div class="tooltip-inner" ng-bind="content"></div>\n</div>\n')
}]), angular.module("template/popover/popover.html", []).run(["$templateCache", function (a) {
    a.put("template/popover/popover.html", '<div class="popover {{placement}}" ng-class="{ in: isOpen(), fade: animation() }">\n  <div class="arrow"></div>\n\n  <div class="popover-inner">\n      <h3 class="popover-title" ng-bind="title" ng-show="title"></h3>\n      <div class="popover-content" ng-bind="content"></div>\n  </div>\n</div>\n')
}]), angular.module("template/progressbar/bar.html", []).run(["$templateCache", function (a) {
    a.put("template/progressbar/bar.html", '<div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>')
}]), angular.module("template/progressbar/progress.html", []).run(["$templateCache", function (a) {
    a.put("template/progressbar/progress.html", '<div class="progress" ng-transclude></div>')
}]), angular.module("template/progressbar/progressbar.html", []).run(["$templateCache", function (a) {
    a.put("template/progressbar/progressbar.html", '<div class="progress">\n  <div class="progress-bar" ng-class="type && \'progress-bar-\' + type" role="progressbar" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-style="{width: percent + \'%\'}" aria-valuetext="{{percent | number:0}}%" ng-transclude></div>\n</div>')
}]), angular.module("template/rating/rating.html", []).run(["$templateCache", function (a) {
    a.put("template/rating/rating.html", '<span ng-mouseleave="reset()" ng-keydown="onKeydown($event)" tabindex="0" role="slider" aria-valuemin="0" aria-valuemax="{{range.length}}" aria-valuenow="{{value}}">\n    <i ng-repeat="r in range track by $index" ng-mouseenter="enter($index + 1)" ng-click="rate($index + 1)" class="glyphicon" ng-class="$index < value && (r.stateOn || \'glyphicon-star\') || (r.stateOff || \'glyphicon-star-empty\')">\n        <span class="sr-only">({{ $index < value ? \'*\' : \' \' }})</span>\n    </i>\n</span>')
}]), angular.module("template/tabs/tab.html", []).run(["$templateCache", function (a) {
    a.put("template/tabs/tab.html", '<li ng-class="{active: active, disabled: disabled}">\n  <a ng-click="select()" tab-heading-transclude>{{heading}}</a>\n</li>\n')
}]), angular.module("template/tabs/tabset-titles.html", []).run(["$templateCache", function (a) {
    a.put("template/tabs/tabset-titles.html", "<ul class=\"nav {{type && 'nav-' + type}}\" ng-class=\"{'nav-stacked': vertical}\">\n</ul>\n")
}]), angular.module("template/tabs/tabset.html", []).run(["$templateCache", function (a) {
    a.put("template/tabs/tabset.html", '\n<div>\n  <ul class="nav nav-{{type || \'tabs\'}}" ng-class="{\'nav-stacked\': vertical, \'nav-justified\': justified}" ng-transclude></ul>\n  <div class="tab-content">\n    <div class="tab-pane" \n         ng-repeat="tab in tabs" \n         ng-class="{active: tab.active}"\n         tab-content-transclude="tab">\n    </div>\n  </div>\n</div>\n')
}]), angular.module("template/timepicker/timepicker.html", []).run(["$templateCache", function (a) {
    a.put("template/timepicker/timepicker.html", '<table>\n	<tbody>\n		<tr class="text-center">\n			<td><a ng-click="incrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="incrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-up"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n		<tr>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidHours}">\n				<input type="text" ng-model="hours" ng-change="updateHours()" class="form-control text-center" ng-mousewheel="incrementHours()" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td>:</td>\n			<td style="width:50px;" class="form-group" ng-class="{\'has-error\': invalidMinutes}">\n				<input type="text" ng-model="minutes" ng-change="updateMinutes()" class="form-control text-center" ng-readonly="readonlyInput" maxlength="2">\n			</td>\n			<td ng-show="showMeridian"><button type="button" class="btn btn-default text-center" ng-click="toggleMeridian()">{{meridian}}</button></td>\n		</tr>\n		<tr class="text-center">\n			<td><a ng-click="decrementHours()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td>&nbsp;</td>\n			<td><a ng-click="decrementMinutes()" class="btn btn-link"><span class="glyphicon glyphicon-chevron-down"></span></a></td>\n			<td ng-show="showMeridian"></td>\n		</tr>\n	</tbody>\n</table>\n')
}]), angular.module("template/typeahead/typeahead-match.html", []).run(["$templateCache", function (a) {
    a.put("template/typeahead/typeahead-match.html", '<a tabindex="-1" bind-html-unsafe="match.label | typeaheadHighlight:query"></a>')
}]), angular.module("template/typeahead/typeahead-popup.html", []).run(["$templateCache", function (a) {
    a.put("template/typeahead/typeahead-popup.html", '<ul class="dropdown-menu" ng-if="isOpen()" ng-style="{top: position.top+\'px\', left: position.left+\'px\'}" style="display: block;" role="listbox" aria-hidden="{{!isOpen()}}">\n    <li ng-repeat="match in matches track by $index" ng-class="{active: isActive($index) }" ng-mouseenter="selectActive($index)" ng-click="selectMatch($index)" role="option" id="{{match.id}}">\n        <div typeahead-match index="$index" match="match" query="query" template-url="templateUrl"></div>\n    </li>\n</ul>')
}]);


