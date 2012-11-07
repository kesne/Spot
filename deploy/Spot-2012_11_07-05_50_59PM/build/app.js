
// minifier: path aliases

enyo.path.addPaths({layout: "/Users/jordangens/Documents/workspace/Spot/enyo/tools/../../lib/layout/", onyx: "/Users/jordangens/Documents/workspace/Spot/enyo/tools/../../lib/onyx/", onyx: "/Users/jordangens/Documents/workspace/Spot/enyo/tools/../../lib/onyx/source/"});

// jquery.js

(function(e, t) {
function n(e) {
var t = dt[e] = {};
return Y.each(e.split(tt), function(e, n) {
t[n] = !0;
}), t;
}
function r(e, n, r) {
if (r === t && e.nodeType === 1) {
var i = "data-" + n.replace(mt, "-$1").toLowerCase();
r = e.getAttribute(i);
if (typeof r == "string") {
try {
r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : vt.test(r) ? Y.parseJSON(r) : r;
} catch (s) {}
Y.data(e, n, r);
} else r = t;
}
return r;
}
function i(e) {
var t;
for (t in e) {
if (t === "data" && Y.isEmptyObject(e[t])) continue;
if (t !== "toJSON") return !1;
}
return !0;
}
function s() {
return !1;
}
function o() {
return !0;
}
function u(e) {
return !e || !e.parentNode || e.parentNode.nodeType === 11;
}
function a(e, t) {
do e = e[t]; while (e && e.nodeType !== 1);
return e;
}
function f(e, t, n) {
t = t || 0;
if (Y.isFunction(t)) return Y.grep(e, function(e, r) {
var i = !!t.call(e, r, e);
return i === n;
});
if (t.nodeType) return Y.grep(e, function(e, r) {
return e === t === n;
});
if (typeof t == "string") {
var r = Y.grep(e, function(e) {
return e.nodeType === 1;
});
if (Bt.test(t)) return Y.filter(t, r, !n);
t = Y.filter(t, r);
}
return Y.grep(e, function(e, r) {
return Y.inArray(e, t) >= 0 === n;
});
}
function l(e) {
var t = It.split("|"), n = e.createDocumentFragment();
if (n.createElement) while (t.length) n.createElement(t.pop());
return n;
}
function c(e, t) {
return e.getElementsByTagName(t)[0] || e.appendChild(e.ownerDocument.createElement(t));
}
function h(e, t) {
if (t.nodeType !== 1 || !Y.hasData(e)) return;
var n, r, i, s = Y._data(e), o = Y._data(t, s), u = s.events;
if (u) {
delete o.handle, o.events = {};
for (n in u) for (r = 0, i = u[n].length; r < i; r++) Y.event.add(t, n, u[n][r]);
}
o.data && (o.data = Y.extend({}, o.data));
}
function p(e, t) {
var n;
if (t.nodeType !== 1) return;
t.clearAttributes && t.clearAttributes(), t.mergeAttributes && t.mergeAttributes(e), n = t.nodeName.toLowerCase(), n === "object" ? (t.parentNode && (t.outerHTML = e.outerHTML), Y.support.html5Clone && e.innerHTML && !Y.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : n === "input" && Kt.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : n === "option" ? t.selected = e.defaultSelected : n === "input" || n === "textarea" ? t.defaultValue = e.defaultValue : n === "script" && t.text !== e.text && (t.text = e.text), t.removeAttribute(Y.expando);
}
function d(e) {
return typeof e.getElementsByTagName != "undefined" ? e.getElementsByTagName("*") : typeof e.querySelectorAll != "undefined" ? e.querySelectorAll("*") : [];
}
function v(e) {
Kt.test(e.type) && (e.defaultChecked = e.checked);
}
function m(e, t) {
if (t in e) return t;
var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = yn.length;
while (i--) {
t = yn[i] + n;
if (t in e) return t;
}
return r;
}
function g(e, t) {
return e = t || e, Y.css(e, "display") === "none" || !Y.contains(e.ownerDocument, e);
}
function y(e, t) {
var n, r, i = [], s = 0, o = e.length;
for (; s < o; s++) {
n = e[s];
if (!n.style) continue;
i[s] = Y._data(n, "olddisplay"), t ? (!i[s] && n.style.display === "none" && (n.style.display = ""), n.style.display === "" && g(n) && (i[s] = Y._data(n, "olddisplay", S(n.nodeName)))) : (r = nn(n, "display"), !i[s] && r !== "none" && Y._data(n, "olddisplay", r));
}
for (s = 0; s < o; s++) {
n = e[s];
if (!n.style) continue;
if (!t || n.style.display === "none" || n.style.display === "") n.style.display = t ? i[s] || "" : "none";
}
return e;
}
function b(e, t, n) {
var r = cn.exec(t);
return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
}
function w(e, t, n, r) {
var i = n === (r ? "border" : "content") ? 4 : t === "width" ? 1 : 0, s = 0;
for (; i < 4; i += 2) n === "margin" && (s += Y.css(e, n + gn[i], !0)), r ? (n === "content" && (s -= parseFloat(nn(e, "padding" + gn[i])) || 0), n !== "margin" && (s -= parseFloat(nn(e, "border" + gn[i] + "Width")) || 0)) : (s += parseFloat(nn(e, "padding" + gn[i])) || 0, n !== "padding" && (s += parseFloat(nn(e, "border" + gn[i] + "Width")) || 0));
return s;
}
function E(e, t, n) {
var r = t === "width" ? e.offsetWidth : e.offsetHeight, i = !0, s = Y.support.boxSizing && Y.css(e, "boxSizing") === "border-box";
if (r <= 0 || r == null) {
r = nn(e, t);
if (r < 0 || r == null) r = e.style[t];
if (hn.test(r)) return r;
i = s && (Y.support.boxSizingReliable || r === e.style[t]), r = parseFloat(r) || 0;
}
return r + w(e, t, n || (s ? "border" : "content"), i) + "px";
}
function S(e) {
if (dn[e]) return dn[e];
var t = Y("<" + e + ">").appendTo(R.body), n = t.css("display");
t.remove();
if (n === "none" || n === "") {
rn = R.body.appendChild(rn || Y.extend(R.createElement("iframe"), {
frameBorder: 0,
width: 0,
height: 0
}));
if (!sn || !rn.createElement) sn = (rn.contentWindow || rn.contentDocument).document, sn.write("<!doctype html><html><body>"), sn.close();
t = sn.body.appendChild(sn.createElement(e)), n = nn(t, "display"), R.body.removeChild(rn);
}
return dn[e] = n, n;
}
function x(e, t, n, r) {
var i;
if (Y.isArray(t)) Y.each(t, function(t, i) {
n || En.test(e) ? r(e, i) : x(e + "[" + (typeof i == "object" ? t : "") + "]", i, n, r);
}); else if (!n && Y.type(t) === "object") for (i in t) x(e + "[" + i + "]", t[i], n, r); else r(e, t);
}
function T(e) {
return function(t, n) {
typeof t != "string" && (n = t, t = "*");
var r, i, s, o = t.toLowerCase().split(tt), u = 0, a = o.length;
if (Y.isFunction(n)) for (; u < a; u++) r = o[u], s = /^\+/.test(r), s && (r = r.substr(1) || "*"), i = e[r] = e[r] || [], i[s ? "unshift" : "push"](n);
};
}
function N(e, n, r, i, s, o) {
s = s || n.dataTypes[0], o = o || {}, o[s] = !0;
var u, a = e[s], f = 0, l = a ? a.length : 0, c = e === jn;
for (; f < l && (c || !u); f++) u = a[f](n, r, i), typeof u == "string" && (!c || o[u] ? u = t : (n.dataTypes.unshift(u), u = N(e, n, r, i, u, o)));
return (c || !u) && !o["*"] && (u = N(e, n, r, i, "*", o)), u;
}
function C(e, n) {
var r, i, s = Y.ajaxSettings.flatOptions || {};
for (r in n) n[r] !== t && ((s[r] ? e : i || (i = {}))[r] = n[r]);
i && Y.extend(!0, e, i);
}
function k(e, n, r) {
var i, s, o, u, a = e.contents, f = e.dataTypes, l = e.responseFields;
for (s in l) s in r && (n[l[s]] = r[s]);
while (f[0] === "*") f.shift(), i === t && (i = e.mimeType || n.getResponseHeader("content-type"));
if (i) for (s in a) if (a[s] && a[s].test(i)) {
f.unshift(s);
break;
}
if (f[0] in r) o = f[0]; else {
for (s in r) {
if (!f[0] || e.converters[s + " " + f[0]]) {
o = s;
break;
}
u || (u = s);
}
o = o || u;
}
if (o) return o !== f[0] && f.unshift(o), r[o];
}
function L(e, t) {
var n, r, i, s, o = e.dataTypes.slice(), u = o[0], a = {}, f = 0;
e.dataFilter && (t = e.dataFilter(t, e.dataType));
if (o[1]) for (n in e.converters) a[n.toLowerCase()] = e.converters[n];
for (; i = o[++f]; ) if (i !== "*") {
if (u !== "*" && u !== i) {
n = a[u + " " + i] || a["* " + i];
if (!n) for (r in a) {
s = r.split(" ");
if (s[1] === i) {
n = a[u + " " + s[0]] || a["* " + s[0]];
if (n) {
n === !0 ? n = a[r] : a[r] !== !0 && (i = s[0], o.splice(f--, 0, i));
break;
}
}
}
if (n !== !0) if (n && e["throws"]) t = n(t); else try {
t = n(t);
} catch (l) {
return {
state: "parsererror",
error: n ? l : "No conversion from " + u + " to " + i
};
}
}
u = i;
}
return {
state: "success",
data: t
};
}
function A() {
try {
return new e.XMLHttpRequest;
} catch (t) {}
}
function O() {
try {
return new e.ActiveXObject("Microsoft.XMLHTTP");
} catch (t) {}
}
function M() {
return setTimeout(function() {
Jn = t;
}, 0), Jn = Y.now();
}
function _(e, t) {
Y.each(t, function(t, n) {
var r = (er[t] || []).concat(er["*"]), i = 0, s = r.length;
for (; i < s; i++) if (r[i].call(e, t, n)) return;
});
}
function D(e, t, n) {
var r, i = 0, s = 0, o = Zn.length, u = Y.Deferred().always(function() {
delete a.elem;
}), a = function() {
var t = Jn || M(), n = Math.max(0, f.startTime + f.duration - t), r = 1 - (n / f.duration || 0), i = 0, s = f.tweens.length;
for (; i < s; i++) f.tweens[i].run(r);
return u.notifyWith(e, [ f, r, n ]), r < 1 && s ? n : (u.resolveWith(e, [ f ]), !1);
}, f = u.promise({
elem: e,
props: Y.extend({}, t),
opts: Y.extend(!0, {
specialEasing: {}
}, n),
originalProperties: t,
originalOptions: n,
startTime: Jn || M(),
duration: n.duration,
tweens: [],
createTween: function(t, n, r) {
var i = Y.Tween(e, f.opts, t, n, f.opts.specialEasing[t] || f.opts.easing);
return f.tweens.push(i), i;
},
stop: function(t) {
var n = 0, r = t ? f.tweens.length : 0;
for (; n < r; n++) f.tweens[n].run(1);
return t ? u.resolveWith(e, [ f, t ]) : u.rejectWith(e, [ f, t ]), this;
}
}), l = f.props;
P(l, f.opts.specialEasing);
for (; i < o; i++) {
r = Zn[i].call(f, e, l, f.opts);
if (r) return r;
}
return _(f, l), Y.isFunction(f.opts.start) && f.opts.start.call(e, f), Y.fx.timer(Y.extend(a, {
anim: f,
queue: f.opts.queue,
elem: e
})), f.progress(f.opts.progress).done(f.opts.done, f.opts.complete).fail(f.opts.fail).always(f.opts.always);
}
function P(e, t) {
var n, r, i, s, o;
for (n in e) {
r = Y.camelCase(n), i = t[r], s = e[n], Y.isArray(s) && (i = s[1], s = e[n] = s[0]), n !== r && (e[r] = s, delete e[n]), o = Y.cssHooks[r];
if (o && "expand" in o) {
s = o.expand(s), delete e[r];
for (n in s) n in e || (e[n] = s[n], t[n] = i);
} else t[r] = i;
}
}
function H(e, t, n) {
var r, i, s, o, u, a, f, l, c = this, h = e.style, p = {}, d = [], v = e.nodeType && g(e);
n.queue || (f = Y._queueHooks(e, "fx"), f.unqueued == null && (f.unqueued = 0, l = f.empty.fire, f.empty.fire = function() {
f.unqueued || l();
}), f.unqueued++, c.always(function() {
c.always(function() {
f.unqueued--, Y.queue(e, "fx").length || f.empty.fire();
});
})), e.nodeType === 1 && ("height" in t || "width" in t) && (n.overflow = [ h.overflow, h.overflowX, h.overflowY ], Y.css(e, "display") === "inline" && Y.css(e, "float") === "none" && (!Y.support.inlineBlockNeedsLayout || S(e.nodeName) === "inline" ? h.display = "inline-block" : h.zoom = 1)), n.overflow && (h.overflow = "hidden", Y.support.shrinkWrapBlocks || c.done(function() {
h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2];
}));
for (r in t) {
s = t[r];
if (Qn.exec(s)) {
delete t[r];
if (s === (v ? "hide" : "show")) continue;
d.push(r);
}
}
o = d.length;
if (o) {
u = Y._data(e, "fxshow") || Y._data(e, "fxshow", {}), v ? Y(e).show() : c.done(function() {
Y(e).hide();
}), c.done(function() {
var t;
Y.removeData(e, "fxshow", !0);
for (t in p) Y.style(e, t, p[t]);
});
for (r = 0; r < o; r++) i = d[r], a = c.createTween(i, v ? u[i] : 0), p[i] = u[i] || Y.style(e, i), i in u || (u[i] = a.start, v && (a.end = a.start, a.start = i === "width" || i === "height" ? 1 : 0));
}
}
function B(e, t, n, r, i) {
return new B.prototype.init(e, t, n, r, i);
}
function j(e, t) {
var n, r = {
height: e
}, i = 0;
t = t ? 1 : 0;
for (; i < 4; i += 2 - t) n = gn[i], r["margin" + n] = r["padding" + n] = e;
return t && (r.opacity = r.width = e), r;
}
function F(e) {
return Y.isWindow(e) ? e : e.nodeType === 9 ? e.defaultView || e.parentWindow : !1;
}
var I, q, R = e.document, U = e.location, z = e.navigator, W = e.jQuery, X = e.$, V = Array.prototype.push, $ = Array.prototype.slice, J = Array.prototype.indexOf, K = Object.prototype.toString, Q = Object.prototype.hasOwnProperty, G = String.prototype.trim, Y = function(e, t) {
return new Y.fn.init(e, t, I);
}, Z = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source, et = /\S/, tt = /\s+/, nt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, rt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, it = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, st = /^[\],:{}\s]*$/, ot = /(?:^|:|,)(?:\s*\[)+/g, ut = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g, at = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g, ft = /^-ms-/, lt = /-([\da-z])/gi, ct = function(e, t) {
return (t + "").toUpperCase();
}, ht = function() {
R.addEventListener ? (R.removeEventListener("DOMContentLoaded", ht, !1), Y.ready()) : R.readyState === "complete" && (R.detachEvent("onreadystatechange", ht), Y.ready());
}, pt = {};
Y.fn = Y.prototype = {
constructor: Y,
init: function(e, n, r) {
var i, s, o, u;
if (!e) return this;
if (e.nodeType) return this.context = this[0] = e, this.length = 1, this;
if (typeof e == "string") {
e.charAt(0) === "<" && e.charAt(e.length - 1) === ">" && e.length >= 3 ? i = [ null, e, null ] : i = rt.exec(e);
if (i && (i[1] || !n)) {
if (i[1]) return n = n instanceof Y ? n[0] : n, u = n && n.nodeType ? n.ownerDocument || n : R, e = Y.parseHTML(i[1], u, !0), it.test(i[1]) && Y.isPlainObject(n) && this.attr.call(e, n, !0), Y.merge(this, e);
s = R.getElementById(i[2]);
if (s && s.parentNode) {
if (s.id !== i[2]) return r.find(e);
this.length = 1, this[0] = s;
}
return this.context = R, this.selector = e, this;
}
return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);
}
return Y.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), Y.makeArray(e, this));
},
selector: "",
jquery: "1.8.2",
length: 0,
size: function() {
return this.length;
},
toArray: function() {
return $.call(this);
},
get: function(e) {
return e == null ? this.toArray() : e < 0 ? this[this.length + e] : this[e];
},
pushStack: function(e, t, n) {
var r = Y.merge(this.constructor(), e);
return r.prevObject = this, r.context = this.context, t === "find" ? r.selector = this.selector + (this.selector ? " " : "") + n : t && (r.selector = this.selector + "." + t + "(" + n + ")"), r;
},
each: function(e, t) {
return Y.each(this, e, t);
},
ready: function(e) {
return Y.ready.promise().done(e), this;
},
eq: function(e) {
return e = +e, e === -1 ? this.slice(e) : this.slice(e, e + 1);
},
first: function() {
return this.eq(0);
},
last: function() {
return this.eq(-1);
},
slice: function() {
return this.pushStack($.apply(this, arguments), "slice", $.call(arguments).join(","));
},
map: function(e) {
return this.pushStack(Y.map(this, function(t, n) {
return e.call(t, n, t);
}));
},
end: function() {
return this.prevObject || this.constructor(null);
},
push: V,
sort: [].sort,
splice: [].splice
}, Y.fn.init.prototype = Y.fn, Y.extend = Y.fn.extend = function() {
var e, n, r, i, s, o, u = arguments[0] || {}, a = 1, f = arguments.length, l = !1;
typeof u == "boolean" && (l = u, u = arguments[1] || {}, a = 2), typeof u != "object" && !Y.isFunction(u) && (u = {}), f === a && (u = this, --a);
for (; a < f; a++) if ((e = arguments[a]) != null) for (n in e) {
r = u[n], i = e[n];
if (u === i) continue;
l && i && (Y.isPlainObject(i) || (s = Y.isArray(i))) ? (s ? (s = !1, o = r && Y.isArray(r) ? r : []) : o = r && Y.isPlainObject(r) ? r : {}, u[n] = Y.extend(l, o, i)) : i !== t && (u[n] = i);
}
return u;
}, Y.extend({
noConflict: function(t) {
return e.$ === Y && (e.$ = X), t && e.jQuery === Y && (e.jQuery = W), Y;
},
isReady: !1,
readyWait: 1,
holdReady: function(e) {
e ? Y.readyWait++ : Y.ready(!0);
},
ready: function(e) {
if (e === !0 ? --Y.readyWait : Y.isReady) return;
if (!R.body) return setTimeout(Y.ready, 1);
Y.isReady = !0;
if (e !== !0 && --Y.readyWait > 0) return;
q.resolveWith(R, [ Y ]), Y.fn.trigger && Y(R).trigger("ready").off("ready");
},
isFunction: function(e) {
return Y.type(e) === "function";
},
isArray: Array.isArray || function(e) {
return Y.type(e) === "array";
},
isWindow: function(e) {
return e != null && e == e.window;
},
isNumeric: function(e) {
return !isNaN(parseFloat(e)) && isFinite(e);
},
type: function(e) {
return e == null ? String(e) : pt[K.call(e)] || "object";
},
isPlainObject: function(e) {
if (!e || Y.type(e) !== "object" || e.nodeType || Y.isWindow(e)) return !1;
try {
if (e.constructor && !Q.call(e, "constructor") && !Q.call(e.constructor.prototype, "isPrototypeOf")) return !1;
} catch (n) {
return !1;
}
var r;
for (r in e) ;
return r === t || Q.call(e, r);
},
isEmptyObject: function(e) {
var t;
for (t in e) return !1;
return !0;
},
error: function(e) {
throw new Error(e);
},
parseHTML: function(e, t, n) {
var r;
return !e || typeof e != "string" ? null : (typeof t == "boolean" && (n = t, t = 0), t = t || R, (r = it.exec(e)) ? [ t.createElement(r[1]) ] : (r = Y.buildFragment([ e ], t, n ? null : []), Y.merge([], (r.cacheable ? Y.clone(r.fragment) : r.fragment).childNodes)));
},
parseJSON: function(t) {
if (!t || typeof t != "string") return null;
t = Y.trim(t);
if (e.JSON && e.JSON.parse) return e.JSON.parse(t);
if (st.test(t.replace(ut, "@").replace(at, "]").replace(ot, ""))) return (new Function("return " + t))();
Y.error("Invalid JSON: " + t);
},
parseXML: function(n) {
var r, i;
if (!n || typeof n != "string") return null;
try {
e.DOMParser ? (i = new DOMParser, r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n));
} catch (s) {
r = t;
}
return (!r || !r.documentElement || r.getElementsByTagName("parsererror").length) && Y.error("Invalid XML: " + n), r;
},
noop: function() {},
globalEval: function(t) {
t && et.test(t) && (e.execScript || function(t) {
e.eval.call(e, t);
})(t);
},
camelCase: function(e) {
return e.replace(ft, "ms-").replace(lt, ct);
},
nodeName: function(e, t) {
return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
},
each: function(e, n, r) {
var i, s = 0, o = e.length, u = o === t || Y.isFunction(e);
if (r) {
if (u) {
for (i in e) if (n.apply(e[i], r) === !1) break;
} else for (; s < o; ) if (n.apply(e[s++], r) === !1) break;
} else if (u) {
for (i in e) if (n.call(e[i], i, e[i]) === !1) break;
} else for (; s < o; ) if (n.call(e[s], s, e[s++]) === !1) break;
return e;
},
trim: G && !G.call("\ufeff ") ? function(e) {
return e == null ? "" : G.call(e);
} : function(e) {
return e == null ? "" : (e + "").replace(nt, "");
},
makeArray: function(e, t) {
var n, r = t || [];
return e != null && (n = Y.type(e), e.length == null || n === "string" || n === "function" || n === "regexp" || Y.isWindow(e) ? V.call(r, e) : Y.merge(r, e)), r;
},
inArray: function(e, t, n) {
var r;
if (t) {
if (J) return J.call(t, e, n);
r = t.length, n = n ? n < 0 ? Math.max(0, r + n) : n : 0;
for (; n < r; n++) if (n in t && t[n] === e) return n;
}
return -1;
},
merge: function(e, n) {
var r = n.length, i = e.length, s = 0;
if (typeof r == "number") for (; s < r; s++) e[i++] = n[s]; else while (n[s] !== t) e[i++] = n[s++];
return e.length = i, e;
},
grep: function(e, t, n) {
var r, i = [], s = 0, o = e.length;
n = !!n;
for (; s < o; s++) r = !!t(e[s], s), n !== r && i.push(e[s]);
return i;
},
map: function(e, n, r) {
var i, s, o = [], u = 0, a = e.length, f = e instanceof Y || a !== t && typeof a == "number" && (a > 0 && e[0] && e[a - 1] || a === 0 || Y.isArray(e));
if (f) for (; u < a; u++) i = n(e[u], u, r), i != null && (o[o.length] = i); else for (s in e) i = n(e[s], s, r), i != null && (o[o.length] = i);
return o.concat.apply([], o);
},
guid: 1,
proxy: function(e, n) {
var r, i, s;
return typeof n == "string" && (r = e[n], n = e, e = r), Y.isFunction(e) ? (i = $.call(arguments, 2), s = function() {
return e.apply(n, i.concat($.call(arguments)));
}, s.guid = e.guid = e.guid || Y.guid++, s) : t;
},
access: function(e, n, r, i, s, o, u) {
var a, f = r == null, l = 0, c = e.length;
if (r && typeof r == "object") {
for (l in r) Y.access(e, n, l, r[l], 1, o, i);
s = 1;
} else if (i !== t) {
a = u === t && Y.isFunction(i), f && (a ? (a = n, n = function(e, t, n) {
return a.call(Y(e), n);
}) : (n.call(e, i), n = null));
if (n) for (; l < c; l++) n(e[l], r, a ? i.call(e[l], l, n(e[l], r)) : i, u);
s = 1;
}
return s ? e : f ? n.call(e) : c ? n(e[0], r) : o;
},
now: function() {
return (new Date).getTime();
}
}), Y.ready.promise = function(t) {
if (!q) {
q = Y.Deferred();
if (R.readyState === "complete") setTimeout(Y.ready, 1); else if (R.addEventListener) R.addEventListener("DOMContentLoaded", ht, !1), e.addEventListener("load", Y.ready, !1); else {
R.attachEvent("onreadystatechange", ht), e.attachEvent("onload", Y.ready);
var n = !1;
try {
n = e.frameElement == null && R.documentElement;
} catch (r) {}
n && n.doScroll && function i() {
if (!Y.isReady) {
try {
n.doScroll("left");
} catch (e) {
return setTimeout(i, 50);
}
Y.ready();
}
}();
}
}
return q.promise(t);
}, Y.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(e, t) {
pt["[object " + t + "]"] = t.toLowerCase();
}), I = Y(R);
var dt = {};
Y.Callbacks = function(e) {
e = typeof e == "string" ? dt[e] || n(e) : Y.extend({}, e);
var r, i, s, o, u, a, f = [], l = !e.once && [], c = function(t) {
r = e.memory && t, i = !0, a = o || 0, o = 0, u = f.length, s = !0;
for (; f && a < u; a++) if (f[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
r = !1;
break;
}
s = !1, f && (l ? l.length && c(l.shift()) : r ? f = [] : h.disable());
}, h = {
add: function() {
if (f) {
var t = f.length;
(function n(t) {
Y.each(t, function(t, r) {
var i = Y.type(r);
i === "function" && (!e.unique || !h.has(r)) ? f.push(r) : r && r.length && i !== "string" && n(r);
});
})(arguments), s ? u = f.length : r && (o = t, c(r));
}
return this;
},
remove: function() {
return f && Y.each(arguments, function(e, t) {
var n;
while ((n = Y.inArray(t, f, n)) > -1) f.splice(n, 1), s && (n <= u && u--, n <= a && a--);
}), this;
},
has: function(e) {
return Y.inArray(e, f) > -1;
},
empty: function() {
return f = [], this;
},
disable: function() {
return f = l = r = t, this;
},
disabled: function() {
return !f;
},
lock: function() {
return l = t, r || h.disable(), this;
},
locked: function() {
return !l;
},
fireWith: function(e, t) {
return t = t || [], t = [ e, t.slice ? t.slice() : t ], f && (!i || l) && (s ? l.push(t) : c(t)), this;
},
fire: function() {
return h.fireWith(this, arguments), this;
},
fired: function() {
return !!i;
}
};
return h;
}, Y.extend({
Deferred: function(e) {
var t = [ [ "resolve", "done", Y.Callbacks("once memory"), "resolved" ], [ "reject", "fail", Y.Callbacks("once memory"), "rejected" ], [ "notify", "progress", Y.Callbacks("memory") ] ], n = "pending", r = {
state: function() {
return n;
},
always: function() {
return i.done(arguments).fail(arguments), this;
},
then: function() {
var e = arguments;
return Y.Deferred(function(n) {
Y.each(t, function(t, r) {
var s = r[0], o = e[t];
i[r[1]](Y.isFunction(o) ? function() {
var e = o.apply(this, arguments);
e && Y.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n : this, [ e ]);
} : n[s]);
}), e = null;
}).promise();
},
promise: function(e) {
return e != null ? Y.extend(e, r) : r;
}
}, i = {};
return r.pipe = r.then, Y.each(t, function(e, s) {
var o = s[2], u = s[3];
r[s[1]] = o.add, u && o.add(function() {
n = u;
}, t[e ^ 1][2].disable, t[2][2].lock), i[s[0]] = o.fire, i[s[0] + "With"] = o.fireWith;
}), r.promise(i), e && e.call(i, i), i;
},
when: function(e) {
var t = 0, n = $.call(arguments), r = n.length, i = r !== 1 || e && Y.isFunction(e.promise) ? r : 0, s = i === 1 ? e : Y.Deferred(), o = function(e, t, n) {
return function(r) {
t[e] = this, n[e] = arguments.length > 1 ? $.call(arguments) : r, n === u ? s.notifyWith(t, n) : --i || s.resolveWith(t, n);
};
}, u, a, f;
if (r > 1) {
u = new Array(r), a = new Array(r), f = new Array(r);
for (; t < r; t++) n[t] && Y.isFunction(n[t].promise) ? n[t].promise().done(o(t, f, n)).fail(s.reject).progress(o(t, a, u)) : --i;
}
return i || s.resolveWith(f, n), s.promise();
}
}), Y.support = function() {
var t, n, r, i, s, o, u, a, f, l, c, h = R.createElement("div");
h.setAttribute("className", "t"), h.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = h.getElementsByTagName("*"), r = h.getElementsByTagName("a")[0], r.style.cssText = "top:1px;float:left;opacity:.5";
if (!n || !n.length) return {};
i = R.createElement("select"), s = i.appendChild(R.createElement("option")), o = h.getElementsByTagName("input")[0], t = {
leadingWhitespace: h.firstChild.nodeType === 3,
tbody: !h.getElementsByTagName("tbody").length,
htmlSerialize: !!h.getElementsByTagName("link").length,
style: /top/.test(r.getAttribute("style")),
hrefNormalized: r.getAttribute("href") === "/a",
opacity: /^0.5/.test(r.style.opacity),
cssFloat: !!r.style.cssFloat,
checkOn: o.value === "on",
optSelected: s.selected,
getSetAttribute: h.className !== "t",
enctype: !!R.createElement("form").enctype,
html5Clone: R.createElement("nav").cloneNode(!0).outerHTML !== "<:nav></:nav>",
boxModel: R.compatMode === "CSS1Compat",
submitBubbles: !0,
changeBubbles: !0,
focusinBubbles: !1,
deleteExpando: !0,
noCloneEvent: !0,
inlineBlockNeedsLayout: !1,
shrinkWrapBlocks: !1,
reliableMarginRight: !0,
boxSizingReliable: !0,
pixelPosition: !1
}, o.checked = !0, t.noCloneChecked = o.cloneNode(!0).checked, i.disabled = !0, t.optDisabled = !s.disabled;
try {
delete h.test;
} catch (p) {
t.deleteExpando = !1;
}
!h.addEventListener && h.attachEvent && h.fireEvent && (h.attachEvent("onclick", c = function() {
t.noCloneEvent = !1;
}), h.cloneNode(!0).fireEvent("onclick"), h.detachEvent("onclick", c)), o = R.createElement("input"), o.value = "t", o.setAttribute("type", "radio"), t.radioValue = o.value === "t", o.setAttribute("checked", "checked"), o.setAttribute("name", "t"), h.appendChild(o), u = R.createDocumentFragment(), u.appendChild(h.lastChild), t.checkClone = u.cloneNode(!0).cloneNode(!0).lastChild.checked, t.appendChecked = o.checked, u.removeChild(o), u.appendChild(h);
if (h.attachEvent) for (f in {
submit: !0,
change: !0,
focusin: !0
}) a = "on" + f, l = a in h, l || (h.setAttribute(a, "return;"), l = typeof h[a] == "function"), t[f + "Bubbles"] = l;
return Y(function() {
var n, r, i, s, o = "padding:0;margin:0;border:0;display:block;overflow:hidden;", u = R.getElementsByTagName("body")[0];
if (!u) return;
n = R.createElement("div"), n.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", u.insertBefore(n, u.firstChild), r = R.createElement("div"), n.appendChild(r), r.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = r.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", l = i[0].offsetHeight === 0, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = l && i[0].offsetHeight === 0, r.innerHTML = "", r.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", t.boxSizing = r.offsetWidth === 4, t.doesNotIncludeMarginInBodyOffset = u.offsetTop !== 1, e.getComputedStyle && (t.pixelPosition = (e.getComputedStyle(r, null) || {}).top !== "1%", t.boxSizingReliable = (e.getComputedStyle(r, null) || {
width: "4px"
}).width === "4px", s = R.createElement("div"), s.style.cssText = r.style.cssText = o, s.style.marginRight = s.style.width = "0", r.style.width = "1px", r.appendChild(s), t.reliableMarginRight = !parseFloat((e.getComputedStyle(s, null) || {}).marginRight)), typeof r.style.zoom != "undefined" && (r.innerHTML = "", r.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = r.offsetWidth === 3, r.style.display = "block", r.style.overflow = "visible", r.innerHTML = "<div></div>", r.firstChild.style.width = "5px", t.shrinkWrapBlocks = r.offsetWidth !== 3, n.style.zoom = 1), u.removeChild(n), n = r = i = s = null;
}), u.removeChild(h), n = r = i = s = o = u = h = null, t;
}();
var vt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/, mt = /([A-Z])/g;
Y.extend({
cache: {},
deletedIds: [],
uuid: 0,
expando: "jQuery" + (Y.fn.jquery + Math.random()).replace(/\D/g, ""),
noData: {
embed: !0,
object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
applet: !0
},
hasData: function(e) {
return e = e.nodeType ? Y.cache[e[Y.expando]] : e[Y.expando], !!e && !i(e);
},
data: function(e, n, r, i) {
if (!Y.acceptData(e)) return;
var s, o, u = Y.expando, a = typeof n == "string", f = e.nodeType, l = f ? Y.cache : e, c = f ? e[u] : e[u] && u;
if ((!c || !l[c] || !i && !l[c].data) && a && r === t) return;
c || (f ? e[u] = c = Y.deletedIds.pop() || Y.guid++ : c = u), l[c] || (l[c] = {}, f || (l[c].toJSON = Y.noop));
if (typeof n == "object" || typeof n == "function") i ? l[c] = Y.extend(l[c], n) : l[c].data = Y.extend(l[c].data, n);
return s = l[c], i || (s.data || (s.data = {}), s = s.data), r !== t && (s[Y.camelCase(n)] = r), a ? (o = s[n], o == null && (o = s[Y.camelCase(n)])) : o = s, o;
},
removeData: function(e, t, n) {
if (!Y.acceptData(e)) return;
var r, s, o, u = e.nodeType, a = u ? Y.cache : e, f = u ? e[Y.expando] : Y.expando;
if (!a[f]) return;
if (t) {
r = n ? a[f] : a[f].data;
if (r) {
Y.isArray(t) || (t in r ? t = [ t ] : (t = Y.camelCase(t), t in r ? t = [ t ] : t = t.split(" ")));
for (s = 0, o = t.length; s < o; s++) delete r[t[s]];
if (!(n ? i : Y.isEmptyObject)(r)) return;
}
}
if (!n) {
delete a[f].data;
if (!i(a[f])) return;
}
u ? Y.cleanData([ e ], !0) : Y.support.deleteExpando || a != a.window ? delete a[f] : a[f] = null;
},
_data: function(e, t, n) {
return Y.data(e, t, n, !0);
},
acceptData: function(e) {
var t = e.nodeName && Y.noData[e.nodeName.toLowerCase()];
return !t || t !== !0 && e.getAttribute("classid") === t;
}
}), Y.fn.extend({
data: function(e, n) {
var i, s, o, u, a, f = this[0], l = 0, c = null;
if (e === t) {
if (this.length) {
c = Y.data(f);
if (f.nodeType === 1 && !Y._data(f, "parsedAttrs")) {
o = f.attributes;
for (a = o.length; l < a; l++) u = o[l].name, u.indexOf("data-") || (u = Y.camelCase(u.substring(5)), r(f, u, c[u]));
Y._data(f, "parsedAttrs", !0);
}
}
return c;
}
return typeof e == "object" ? this.each(function() {
Y.data(this, e);
}) : (i = e.split(".", 2), i[1] = i[1] ? "." + i[1] : "", s = i[1] + "!", Y.access(this, function(n) {
if (n === t) return c = this.triggerHandler("getData" + s, [ i[0] ]), c === t && f && (c = Y.data(f, e), c = r(f, e, c)), c === t && i[1] ? this.data(i[0]) : c;
i[1] = n, this.each(function() {
var t = Y(this);
t.triggerHandler("setData" + s, i), Y.data(this, e, n), t.triggerHandler("changeData" + s, i);
});
}, null, n, arguments.length > 1, null, !1));
},
removeData: function(e) {
return this.each(function() {
Y.removeData(this, e);
});
}
}), Y.extend({
queue: function(e, t, n) {
var r;
if (e) return t = (t || "fx") + "queue", r = Y._data(e, t), n && (!r || Y.isArray(n) ? r = Y._data(e, t, Y.makeArray(n)) : r.push(n)), r || [];
},
dequeue: function(e, t) {
t = t || "fx";
var n = Y.queue(e, t), r = n.length, i = n.shift(), s = Y._queueHooks(e, t), o = function() {
Y.dequeue(e, t);
};
i === "inprogress" && (i = n.shift(), r--), i && (t === "fx" && n.unshift("inprogress"), delete s.stop, i.call(e, o, s)), !r && s && s.empty.fire();
},
_queueHooks: function(e, t) {
var n = t + "queueHooks";
return Y._data(e, n) || Y._data(e, n, {
empty: Y.Callbacks("once memory").add(function() {
Y.removeData(e, t + "queue", !0), Y.removeData(e, n, !0);
})
});
}
}), Y.fn.extend({
queue: function(e, n) {
var r = 2;
return typeof e != "string" && (n = e, e = "fx", r--), arguments.length < r ? Y.queue(this[0], e) : n === t ? this : this.each(function() {
var t = Y.queue(this, e, n);
Y._queueHooks(this, e), e === "fx" && t[0] !== "inprogress" && Y.dequeue(this, e);
});
},
dequeue: function(e) {
return this.each(function() {
Y.dequeue(this, e);
});
},
delay: function(e, t) {
return e = Y.fx ? Y.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function(t, n) {
var r = setTimeout(t, e);
n.stop = function() {
clearTimeout(r);
};
});
},
clearQueue: function(e) {
return this.queue(e || "fx", []);
},
promise: function(e, n) {
var r, i = 1, s = Y.Deferred(), o = this, u = this.length, a = function() {
--i || s.resolveWith(o, [ o ]);
};
typeof e != "string" && (n = e, e = t), e = e || "fx";
while (u--) r = Y._data(o[u], e + "queueHooks"), r && r.empty && (i++, r.empty.add(a));
return a(), s.promise(n);
}
});
var gt, yt, bt, wt = /[\t\r\n]/g, Et = /\r/g, St = /^(?:button|input)$/i, xt = /^(?:button|input|object|select|textarea)$/i, Tt = /^a(?:rea|)$/i, Nt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, Ct = Y.support.getSetAttribute;
Y.fn.extend({
attr: function(e, t) {
return Y.access(this, Y.attr, e, t, arguments.length > 1);
},
removeAttr: function(e) {
return this.each(function() {
Y.removeAttr(this, e);
});
},
prop: function(e, t) {
return Y.access(this, Y.prop, e, t, arguments.length > 1);
},
removeProp: function(e) {
return e = Y.propFix[e] || e, this.each(function() {
try {
this[e] = t, delete this[e];
} catch (n) {}
});
},
addClass: function(e) {
var t, n, r, i, s, o, u;
if (Y.isFunction(e)) return this.each(function(t) {
Y(this).addClass(e.call(this, t, this.className));
});
if (e && typeof e == "string") {
t = e.split(tt);
for (n = 0, r = this.length; n < r; n++) {
i = this[n];
if (i.nodeType === 1) if (!i.className && t.length === 1) i.className = e; else {
s = " " + i.className + " ";
for (o = 0, u = t.length; o < u; o++) s.indexOf(" " + t[o] + " ") < 0 && (s += t[o] + " ");
i.className = Y.trim(s);
}
}
}
return this;
},
removeClass: function(e) {
var n, r, i, s, o, u, a;
if (Y.isFunction(e)) return this.each(function(t) {
Y(this).removeClass(e.call(this, t, this.className));
});
if (e && typeof e == "string" || e === t) {
n = (e || "").split(tt);
for (u = 0, a = this.length; u < a; u++) {
i = this[u];
if (i.nodeType === 1 && i.className) {
r = (" " + i.className + " ").replace(wt, " ");
for (s = 0, o = n.length; s < o; s++) while (r.indexOf(" " + n[s] + " ") >= 0) r = r.replace(" " + n[s] + " ", " ");
i.className = e ? Y.trim(r) : "";
}
}
}
return this;
},
toggleClass: function(e, t) {
var n = typeof e, r = typeof t == "boolean";
return Y.isFunction(e) ? this.each(function(n) {
Y(this).toggleClass(e.call(this, n, this.className, t), t);
}) : this.each(function() {
if (n === "string") {
var i, s = 0, o = Y(this), u = t, a = e.split(tt);
while (i = a[s++]) u = r ? u : !o.hasClass(i), o[u ? "addClass" : "removeClass"](i);
} else if (n === "undefined" || n === "boolean") this.className && Y._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "" : Y._data(this, "__className__") || "";
});
},
hasClass: function(e) {
var t = " " + e + " ", n = 0, r = this.length;
for (; n < r; n++) if (this[n].nodeType === 1 && (" " + this[n].className + " ").replace(wt, " ").indexOf(t) >= 0) return !0;
return !1;
},
val: function(e) {
var n, r, i, s = this[0];
if (!arguments.length) {
if (s) return n = Y.valHooks[s.type] || Y.valHooks[s.nodeName.toLowerCase()], n && "get" in n && (r = n.get(s, "value")) !== t ? r : (r = s.value, typeof r == "string" ? r.replace(Et, "") : r == null ? "" : r);
return;
}
return i = Y.isFunction(e), this.each(function(r) {
var s, o = Y(this);
if (this.nodeType !== 1) return;
i ? s = e.call(this, r, o.val()) : s = e, s == null ? s = "" : typeof s == "number" ? s += "" : Y.isArray(s) && (s = Y.map(s, function(e) {
return e == null ? "" : e + "";
})), n = Y.valHooks[this.type] || Y.valHooks[this.nodeName.toLowerCase()];
if (!n || !("set" in n) || n.set(this, s, "value") === t) this.value = s;
});
}
}), Y.extend({
valHooks: {
option: {
get: function(e) {
var t = e.attributes.value;
return !t || t.specified ? e.value : e.text;
}
},
select: {
get: function(e) {
var t, n, r, i, s = e.selectedIndex, o = [], u = e.options, a = e.type === "select-one";
if (s < 0) return null;
n = a ? s : 0, r = a ? s + 1 : u.length;
for (; n < r; n++) {
i = u[n];
if (i.selected && (Y.support.optDisabled ? !i.disabled : i.getAttribute("disabled") === null) && (!i.parentNode.disabled || !Y.nodeName(i.parentNode, "optgroup"))) {
t = Y(i).val();
if (a) return t;
o.push(t);
}
}
return a && !o.length && u.length ? Y(u[s]).val() : o;
},
set: function(e, t) {
var n = Y.makeArray(t);
return Y(e).find("option").each(function() {
this.selected = Y.inArray(Y(this).val(), n) >= 0;
}), n.length || (e.selectedIndex = -1), n;
}
}
},
attrFn: {},
attr: function(e, n, r, i) {
var s, o, u, a = e.nodeType;
if (!e || a === 3 || a === 8 || a === 2) return;
if (i && Y.isFunction(Y.fn[n])) return Y(e)[n](r);
if (typeof e.getAttribute == "undefined") return Y.prop(e, n, r);
u = a !== 1 || !Y.isXMLDoc(e), u && (n = n.toLowerCase(), o = Y.attrHooks[n] || (Nt.test(n) ? yt : gt));
if (r !== t) {
if (r === null) {
Y.removeAttr(e, n);
return;
}
return o && "set" in o && u && (s = o.set(e, r, n)) !== t ? s : (e.setAttribute(n, r + ""), r);
}
return o && "get" in o && u && (s = o.get(e, n)) !== null ? s : (s = e.getAttribute(n), s === null ? t : s);
},
removeAttr: function(e, t) {
var n, r, i, s, o = 0;
if (t && e.nodeType === 1) {
r = t.split(tt);
for (; o < r.length; o++) i = r[o], i && (n = Y.propFix[i] || i, s = Nt.test(i), s || Y.attr(e, i, ""), e.removeAttribute(Ct ? i : n), s && n in e && (e[n] = !1));
}
},
attrHooks: {
type: {
set: function(e, t) {
if (St.test(e.nodeName) && e.parentNode) Y.error("type property can't be changed"); else if (!Y.support.radioValue && t === "radio" && Y.nodeName(e, "input")) {
var n = e.value;
return e.setAttribute("type", t), n && (e.value = n), t;
}
}
},
value: {
get: function(e, t) {
return gt && Y.nodeName(e, "button") ? gt.get(e, t) : t in e ? e.value : null;
},
set: function(e, t, n) {
if (gt && Y.nodeName(e, "button")) return gt.set(e, t, n);
e.value = t;
}
}
},
propFix: {
tabindex: "tabIndex",
readonly: "readOnly",
"for": "htmlFor",
"class": "className",
maxlength: "maxLength",
cellspacing: "cellSpacing",
cellpadding: "cellPadding",
rowspan: "rowSpan",
colspan: "colSpan",
usemap: "useMap",
frameborder: "frameBorder",
contenteditable: "contentEditable"
},
prop: function(e, n, r) {
var i, s, o, u = e.nodeType;
if (!e || u === 3 || u === 8 || u === 2) return;
return o = u !== 1 || !Y.isXMLDoc(e), o && (n = Y.propFix[n] || n, s = Y.propHooks[n]), r !== t ? s && "set" in s && (i = s.set(e, r, n)) !== t ? i : e[n] = r : s && "get" in s && (i = s.get(e, n)) !== null ? i : e[n];
},
propHooks: {
tabIndex: {
get: function(e) {
var n = e.getAttributeNode("tabindex");
return n && n.specified ? parseInt(n.value, 10) : xt.test(e.nodeName) || Tt.test(e.nodeName) && e.href ? 0 : t;
}
}
}
}), yt = {
get: function(e, n) {
var r, i = Y.prop(e, n);
return i === !0 || typeof i != "boolean" && (r = e.getAttributeNode(n)) && r.nodeValue !== !1 ? n.toLowerCase() : t;
},
set: function(e, t, n) {
var r;
return t === !1 ? Y.removeAttr(e, n) : (r = Y.propFix[n] || n, r in e && (e[r] = !0), e.setAttribute(n, n.toLowerCase())), n;
}
}, Ct || (bt = {
name: !0,
id: !0,
coords: !0
}, gt = Y.valHooks.button = {
get: function(e, n) {
var r;
return r = e.getAttributeNode(n), r && (bt[n] ? r.value !== "" : r.specified) ? r.value : t;
},
set: function(e, t, n) {
var r = e.getAttributeNode(n);
return r || (r = R.createAttribute(n), e.setAttributeNode(r)), r.value = t + "";
}
}, Y.each([ "width", "height" ], function(e, t) {
Y.attrHooks[t] = Y.extend(Y.attrHooks[t], {
set: function(e, n) {
if (n === "") return e.setAttribute(t, "auto"), n;
}
});
}), Y.attrHooks.contenteditable = {
get: gt.get,
set: function(e, t, n) {
t === "" && (t = "false"), gt.set(e, t, n);
}
}), Y.support.hrefNormalized || Y.each([ "href", "src", "width", "height" ], function(e, n) {
Y.attrHooks[n] = Y.extend(Y.attrHooks[n], {
get: function(e) {
var r = e.getAttribute(n, 2);
return r === null ? t : r;
}
});
}), Y.support.style || (Y.attrHooks.style = {
get: function(e) {
return e.style.cssText.toLowerCase() || t;
},
set: function(e, t) {
return e.style.cssText = t + "";
}
}), Y.support.optSelected || (Y.propHooks.selected = Y.extend(Y.propHooks.selected, {
get: function(e) {
var t = e.parentNode;
return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
}
})), Y.support.enctype || (Y.propFix.enctype = "encoding"), Y.support.checkOn || Y.each([ "radio", "checkbox" ], function() {
Y.valHooks[this] = {
get: function(e) {
return e.getAttribute("value") === null ? "on" : e.value;
}
};
}), Y.each([ "radio", "checkbox" ], function() {
Y.valHooks[this] = Y.extend(Y.valHooks[this], {
set: function(e, t) {
if (Y.isArray(t)) return e.checked = Y.inArray(Y(e).val(), t) >= 0;
}
});
});
var kt = /^(?:textarea|input|select)$/i, Lt = /^([^\.]*|)(?:\.(.+)|)$/, At = /(?:^|\s)hover(\.\S+|)\b/, Ot = /^key/, Mt = /^(?:mouse|contextmenu)|click/, _t = /^(?:focusinfocus|focusoutblur)$/, Dt = function(e) {
return Y.event.special.hover ? e : e.replace(At, "mouseenter$1 mouseleave$1");
};
Y.event = {
add: function(e, n, r, i, s) {
var o, u, a, f, l, c, h, p, d, v, m;
if (e.nodeType === 3 || e.nodeType === 8 || !n || !r || !(o = Y._data(e))) return;
r.handler && (d = r, r = d.handler, s = d.selector), r.guid || (r.guid = Y.guid++), a = o.events, a || (o.events = a = {}), u = o.handle, u || (o.handle = u = function(e) {
return typeof Y == "undefined" || !!e && Y.event.triggered === e.type ? t : Y.event.dispatch.apply(u.elem, arguments);
}, u.elem = e), n = Y.trim(Dt(n)).split(" ");
for (f = 0; f < n.length; f++) {
l = Lt.exec(n[f]) || [], c = l[1], h = (l[2] || "").split(".").sort(), m = Y.event.special[c] || {}, c = (s ? m.delegateType : m.bindType) || c, m = Y.event.special[c] || {}, p = Y.extend({
type: c,
origType: l[1],
data: i,
handler: r,
guid: r.guid,
selector: s,
needsContext: s && Y.expr.match.needsContext.test(s),
namespace: h.join(".")
}, d), v = a[c];
if (!v) {
v = a[c] = [], v.delegateCount = 0;
if (!m.setup || m.setup.call(e, i, h, u) === !1) e.addEventListener ? e.addEventListener(c, u, !1) : e.attachEvent && e.attachEvent("on" + c, u);
}
m.add && (m.add.call(e, p), p.handler.guid || (p.handler.guid = r.guid)), s ? v.splice(v.delegateCount++, 0, p) : v.push(p), Y.event.global[c] = !0;
}
e = null;
},
global: {},
remove: function(e, t, n, r, i) {
var s, o, u, a, f, l, c, h, p, d, v, m = Y.hasData(e) && Y._data(e);
if (!m || !(h = m.events)) return;
t = Y.trim(Dt(t || "")).split(" ");
for (s = 0; s < t.length; s++) {
o = Lt.exec(t[s]) || [], u = a = o[1], f = o[2];
if (!u) {
for (u in h) Y.event.remove(e, u + t[s], n, r, !0);
continue;
}
p = Y.event.special[u] || {}, u = (r ? p.delegateType : p.bindType) || u, d = h[u] || [], l = d.length, f = f ? new RegExp("(^|\\.)" + f.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
for (c = 0; c < d.length; c++) v = d[c], (i || a === v.origType) && (!n || n.guid === v.guid) && (!f || f.test(v.namespace)) && (!r || r === v.selector || r === "**" && v.selector) && (d.splice(c--, 1), v.selector && d.delegateCount--, p.remove && p.remove.call(e, v));
d.length === 0 && l !== d.length && ((!p.teardown || p.teardown.call(e, f, m.handle) === !1) && Y.removeEvent(e, u, m.handle), delete h[u]);
}
Y.isEmptyObject(h) && (delete m.handle, Y.removeData(e, "events", !0));
},
customEvent: {
getData: !0,
setData: !0,
changeData: !0
},
trigger: function(n, r, i, s) {
if (!i || i.nodeType !== 3 && i.nodeType !== 8) {
var o, u, a, f, l, c, h, p, d, v, m = n.type || n, g = [];
if (_t.test(m + Y.event.triggered)) return;
m.indexOf("!") >= 0 && (m = m.slice(0, -1), u = !0), m.indexOf(".") >= 0 && (g = m.split("."), m = g.shift(), g.sort());
if ((!i || Y.event.customEvent[m]) && !Y.event.global[m]) return;
n = typeof n == "object" ? n[Y.expando] ? n : new Y.Event(m, n) : new Y.Event(m), n.type = m, n.isTrigger = !0, n.exclusive = u, n.namespace = g.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, c = m.indexOf(":") < 0 ? "on" + m : "";
if (!i) {
o = Y.cache;
for (a in o) o[a].events && o[a].events[m] && Y.event.trigger(n, r, o[a].handle.elem, !0);
return;
}
n.result = t, n.target || (n.target = i), r = r != null ? Y.makeArray(r) : [], r.unshift(n), h = Y.event.special[m] || {};
if (h.trigger && h.trigger.apply(i, r) === !1) return;
d = [ [ i, h.bindType || m ] ];
if (!s && !h.noBubble && !Y.isWindow(i)) {
v = h.delegateType || m, f = _t.test(v + m) ? i : i.parentNode;
for (l = i; f; f = f.parentNode) d.push([ f, v ]), l = f;
l === (i.ownerDocument || R) && d.push([ l.defaultView || l.parentWindow || e, v ]);
}
for (a = 0; a < d.length && !n.isPropagationStopped(); a++) f = d[a][0], n.type = d[a][1], p = (Y._data(f, "events") || {})[n.type] && Y._data(f, "handle"), p && p.apply(f, r), p = c && f[c], p && Y.acceptData(f) && p.apply && p.apply(f, r) === !1 && n.preventDefault();
return n.type = m, !s && !n.isDefaultPrevented() && (!h._default || h._default.apply(i.ownerDocument, r) === !1) && (m !== "click" || !Y.nodeName(i, "a")) && Y.acceptData(i) && c && i[m] && (m !== "focus" && m !== "blur" || n.target.offsetWidth !== 0) && !Y.isWindow(i) && (l = i[c], l && (i[c] = null), Y.event.triggered = m, i[m](), Y.event.triggered = t, l && (i[c] = l)), n.result;
}
return;
},
dispatch: function(n) {
n = Y.event.fix(n || e.event);
var r, i, s, o, u, a, f, l, c, h, p = (Y._data(this, "events") || {})[n.type] || [], d = p.delegateCount, v = $.call(arguments), m = !n.exclusive && !n.namespace, g = Y.event.special[n.type] || {}, y = [];
v[0] = n, n.delegateTarget = this;
if (g.preDispatch && g.preDispatch.call(this, n) === !1) return;
if (d && (!n.button || n.type !== "click")) for (s = n.target; s != this; s = s.parentNode || this) if (s.disabled !== !0 || n.type !== "click") {
u = {}, f = [];
for (r = 0; r < d; r++) l = p[r], c = l.selector, u[c] === t && (u[c] = l.needsContext ? Y(c, this).index(s) >= 0 : Y.find(c, this, null, [ s ]).length), u[c] && f.push(l);
f.length && y.push({
elem: s,
matches: f
});
}
p.length > d && y.push({
elem: this,
matches: p.slice(d)
});
for (r = 0; r < y.length && !n.isPropagationStopped(); r++) {
a = y[r], n.currentTarget = a.elem;
for (i = 0; i < a.matches.length && !n.isImmediatePropagationStopped(); i++) {
l = a.matches[i];
if (m || !n.namespace && !l.namespace || n.namespace_re && n.namespace_re.test(l.namespace)) n.data = l.data, n.handleObj = l, o = ((Y.event.special[l.origType] || {}).handle || l.handler).apply(a.elem, v), o !== t && (n.result = o, o === !1 && (n.preventDefault(), n.stopPropagation()));
}
}
return g.postDispatch && g.postDispatch.call(this, n), n.result;
},
props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
fixHooks: {},
keyHooks: {
props: "char charCode key keyCode".split(" "),
filter: function(e, t) {
return e.which == null && (e.which = t.charCode != null ? t.charCode : t.keyCode), e;
}
},
mouseHooks: {
props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
filter: function(e, n) {
var r, i, s, o = n.button, u = n.fromElement;
return e.pageX == null && n.clientX != null && (r = e.target.ownerDocument || R, i = r.documentElement, s = r.body, e.pageX = n.clientX + (i && i.scrollLeft || s && s.scrollLeft || 0) - (i && i.clientLeft || s && s.clientLeft || 0), e.pageY = n.clientY + (i && i.scrollTop || s && s.scrollTop || 0) - (i && i.clientTop || s && s.clientTop || 0)), !e.relatedTarget && u && (e.relatedTarget = u === e.target ? n.toElement : u), !e.which && o !== t && (e.which = o & 1 ? 1 : o & 2 ? 3 : o & 4 ? 2 : 0), e;
}
},
fix: function(e) {
if (e[Y.expando]) return e;
var t, n, r = e, i = Y.event.fixHooks[e.type] || {}, s = i.props ? this.props.concat(i.props) : this.props;
e = Y.Event(r);
for (t = s.length; t; ) n = s[--t], e[n] = r[n];
return e.target || (e.target = r.srcElement || R), e.target.nodeType === 3 && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, i.filter ? i.filter(e, r) : e;
},
special: {
load: {
noBubble: !0
},
focus: {
delegateType: "focusin"
},
blur: {
delegateType: "focusout"
},
beforeunload: {
setup: function(e, t, n) {
Y.isWindow(this) && (this.onbeforeunload = n);
},
teardown: function(e, t) {
this.onbeforeunload === t && (this.onbeforeunload = null);
}
}
},
simulate: function(e, t, n, r) {
var i = Y.extend(new Y.Event, n, {
type: e,
isSimulated: !0,
originalEvent: {}
});
r ? Y.event.trigger(i, null, t) : Y.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
}
}, Y.event.handle = Y.event.dispatch, Y.removeEvent = R.removeEventListener ? function(e, t, n) {
e.removeEventListener && e.removeEventListener(t, n, !1);
} : function(e, t, n) {
var r = "on" + t;
e.detachEvent && (typeof e[r] == "undefined" && (e[r] = null), e.detachEvent(r, n));
}, Y.Event = function(e, t) {
if (!(this instanceof Y.Event)) return new Y.Event(e, t);
e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? o : s) : this.type = e, t && Y.extend(this, t), this.timeStamp = e && e.timeStamp || Y.now(), this[Y.expando] = !0;
}, Y.Event.prototype = {
preventDefault: function() {
this.isDefaultPrevented = o;
var e = this.originalEvent;
if (!e) return;
e.preventDefault ? e.preventDefault() : e.returnValue = !1;
},
stopPropagation: function() {
this.isPropagationStopped = o;
var e = this.originalEvent;
if (!e) return;
e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0;
},
stopImmediatePropagation: function() {
this.isImmediatePropagationStopped = o, this.stopPropagation();
},
isDefaultPrevented: s,
isPropagationStopped: s,
isImmediatePropagationStopped: s
}, Y.each({
mouseenter: "mouseover",
mouseleave: "mouseout"
}, function(e, t) {
Y.event.special[e] = {
delegateType: t,
bindType: t,
handle: function(e) {
var n, r = this, i = e.relatedTarget, s = e.handleObj, o = s.selector;
if (!i || i !== r && !Y.contains(r, i)) e.type = s.origType, n = s.handler.apply(this, arguments), e.type = t;
return n;
}
};
}), Y.support.submitBubbles || (Y.event.special.submit = {
setup: function() {
if (Y.nodeName(this, "form")) return !1;
Y.event.add(this, "click._submit keypress._submit", function(e) {
var n = e.target, r = Y.nodeName(n, "input") || Y.nodeName(n, "button") ? n.form : t;
r && !Y._data(r, "_submit_attached") && (Y.event.add(r, "submit._submit", function(e) {
e._submit_bubble = !0;
}), Y._data(r, "_submit_attached", !0));
});
},
postDispatch: function(e) {
e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && Y.event.simulate("submit", this.parentNode, e, !0));
},
teardown: function() {
if (Y.nodeName(this, "form")) return !1;
Y.event.remove(this, "._submit");
}
}), Y.support.changeBubbles || (Y.event.special.change = {
setup: function() {
if (kt.test(this.nodeName)) {
if (this.type === "checkbox" || this.type === "radio") Y.event.add(this, "propertychange._change", function(e) {
e.originalEvent.propertyName === "checked" && (this._just_changed = !0);
}), Y.event.add(this, "click._change", function(e) {
this._just_changed && !e.isTrigger && (this._just_changed = !1), Y.event.simulate("change", this, e, !0);
});
return !1;
}
Y.event.add(this, "beforeactivate._change", function(e) {
var t = e.target;
kt.test(t.nodeName) && !Y._data(t, "_change_attached") && (Y.event.add(t, "change._change", function(e) {
this.parentNode && !e.isSimulated && !e.isTrigger && Y.event.simulate("change", this.parentNode, e, !0);
}), Y._data(t, "_change_attached", !0));
});
},
handle: function(e) {
var t = e.target;
if (this !== t || e.isSimulated || e.isTrigger || t.type !== "radio" && t.type !== "checkbox") return e.handleObj.handler.apply(this, arguments);
},
teardown: function() {
return Y.event.remove(this, "._change"), !kt.test(this.nodeName);
}
}), Y.support.focusinBubbles || Y.each({
focus: "focusin",
blur: "focusout"
}, function(e, t) {
var n = 0, r = function(e) {
Y.event.simulate(t, e.target, Y.event.fix(e), !0);
};
Y.event.special[t] = {
setup: function() {
n++ === 0 && R.addEventListener(e, r, !0);
},
teardown: function() {
--n === 0 && R.removeEventListener(e, r, !0);
}
};
}), Y.fn.extend({
on: function(e, n, r, i, o) {
var u, a;
if (typeof e == "object") {
typeof n != "string" && (r = r || n, n = t);
for (a in e) this.on(a, n, r, e[a], o);
return this;
}
r == null && i == null ? (i = n, r = n = t) : i == null && (typeof n == "string" ? (i = r, r = t) : (i = r, r = n, n = t));
if (i === !1) i = s; else if (!i) return this;
return o === 1 && (u = i, i = function(e) {
return Y().off(e), u.apply(this, arguments);
}, i.guid = u.guid || (u.guid = Y.guid++)), this.each(function() {
Y.event.add(this, e, i, r, n);
});
},
one: function(e, t, n, r) {
return this.on(e, t, n, r, 1);
},
off: function(e, n, r) {
var i, o;
if (e && e.preventDefault && e.handleObj) return i = e.handleObj, Y(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
if (typeof e == "object") {
for (o in e) this.off(o, n, e[o]);
return this;
}
if (n === !1 || typeof n == "function") r = n, n = t;
return r === !1 && (r = s), this.each(function() {
Y.event.remove(this, e, r, n);
});
},
bind: function(e, t, n) {
return this.on(e, null, t, n);
},
unbind: function(e, t) {
return this.off(e, null, t);
},
live: function(e, t, n) {
return Y(this.context).on(e, this.selector, t, n), this;
},
die: function(e, t) {
return Y(this.context).off(e, this.selector || "**", t), this;
},
delegate: function(e, t, n, r) {
return this.on(t, e, n, r);
},
undelegate: function(e, t, n) {
return arguments.length === 1 ? this.off(e, "**") : this.off(t, e || "**", n);
},
trigger: function(e, t) {
return this.each(function() {
Y.event.trigger(e, t, this);
});
},
triggerHandler: function(e, t) {
if (this[0]) return Y.event.trigger(e, t, this[0], !0);
},
toggle: function(e) {
var t = arguments, n = e.guid || Y.guid++, r = 0, i = function(n) {
var i = (Y._data(this, "lastToggle" + e.guid) || 0) % r;
return Y._data(this, "lastToggle" + e.guid, i + 1), n.preventDefault(), t[i].apply(this, arguments) || !1;
};
i.guid = n;
while (r < t.length) t[r++].guid = n;
return this.click(i);
},
hover: function(e, t) {
return this.mouseenter(e).mouseleave(t || e);
}
}), Y.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
Y.fn[t] = function(e, n) {
return n == null && (n = e, e = null), arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
}, Ot.test(t) && (Y.event.fixHooks[t] = Y.event.keyHooks), Mt.test(t) && (Y.event.fixHooks[t] = Y.event.mouseHooks);
}), function(e, t) {
function n(e, t, n, r) {
n = n || [], t = t || M;
var i, s, o, u, a = t.nodeType;
if (!e || typeof e != "string") return n;
if (a !== 1 && a !== 9) return [];
o = E(t);
if (!o && !r) if (i = nt.exec(e)) if (u = i[1]) {
if (a === 9) {
s = t.getElementById(u);
if (!s || !s.parentNode) return n;
if (s.id === u) return n.push(s), n;
} else if (t.ownerDocument && (s = t.ownerDocument.getElementById(u)) && S(t, s) && s.id === u) return n.push(s), n;
} else {
if (i[2]) return B.apply(n, j.call(t.getElementsByTagName(e), 0)), n;
if ((u = i[3]) && dt && t.getElementsByClassName) return B.apply(n, j.call(t.getElementsByClassName(u), 0)), n;
}
return v(e.replace(G, "$1"), t, n, r, o);
}
function r(e) {
return function(t) {
var n = t.nodeName.toLowerCase();
return n === "input" && t.type === e;
};
}
function i(e) {
return function(t) {
var n = t.nodeName.toLowerCase();
return (n === "input" || n === "button") && t.type === e;
};
}
function s(e) {
return I(function(t) {
return t = +t, I(function(n, r) {
var i, s = e([], n.length, t), o = s.length;
while (o--) n[i = s[o]] && (n[i] = !(r[i] = n[i]));
});
});
}
function o(e, t, n) {
if (e === t) return n;
var r = e.nextSibling;
while (r) {
if (r === t) return -1;
r = r.nextSibling;
}
return 1;
}
function u(e, t) {
var r, i, s, o, u, a, f, l = U[A][e];
if (l) return t ? 0 : l.slice(0);
u = e, a = [], f = b.preFilter;
while (u) {
if (!r || (i = Z.exec(u))) i && (u = u.slice(i[0].length)), a.push(s = []);
r = !1;
if (i = et.exec(u)) s.push(r = new O(i.shift())), u = u.slice(r.length), r.type = i[0].replace(G, " ");
for (o in b.filter) (i = ft[o].exec(u)) && (!f[o] || (i = f[o](i, M, !0))) && (s.push(r = new O(i.shift())), u = u.slice(r.length), r.type = o, r.matches = i);
if (!r) break;
}
return t ? u.length : u ? n.error(e) : U(e, a).slice(0);
}
function a(e, t, n) {
var r = t.dir, i = n && t.dir === "parentNode", s = P++;
return t.first ? function(t, n, s) {
while (t = t[r]) if (i || t.nodeType === 1) return e(t, n, s);
} : function(t, n, o) {
if (!o) {
var u, a = D + " " + s + " ", f = a + g;
while (t = t[r]) if (i || t.nodeType === 1) {
if ((u = t[A]) === f) return t.sizset;
if (typeof u == "string" && u.indexOf(a) === 0) {
if (t.sizset) return t;
} else {
t[A] = f;
if (e(t, n, o)) return t.sizset = !0, t;
t.sizset = !1;
}
}
} else while (t = t[r]) if (i || t.nodeType === 1) if (e(t, n, o)) return t;
};
}
function f(e) {
return e.length > 1 ? function(t, n, r) {
var i = e.length;
while (i--) if (!e[i](t, n, r)) return !1;
return !0;
} : e[0];
}
function l(e, t, n, r, i) {
var s, o = [], u = 0, a = e.length, f = t != null;
for (; u < a; u++) if (s = e[u]) if (!n || n(s, r, i)) o.push(s), f && t.push(u);
return o;
}
function c(e, t, n, r, i, s) {
return r && !r[A] && (r = c(r)), i && !i[A] && (i = c(i, s)), I(function(s, o, u, a) {
if (s && i) return;
var f, c, h, p = [], v = [], m = o.length, g = s || d(t || "*", u.nodeType ? [ u ] : u, [], s), y = e && (s || !t) ? l(g, p, e, u, a) : g, b = n ? i || (s ? e : m || r) ? [] : o : y;
n && n(y, b, u, a);
if (r) {
h = l(b, v), r(h, [], u, a), f = h.length;
while (f--) if (c = h[f]) b[v[f]] = !(y[v[f]] = c);
}
if (s) {
f = e && b.length;
while (f--) if (c = b[f]) s[p[f]] = !(o[p[f]] = c);
} else b = l(b === o ? b.splice(m, b.length) : b), i ? i(null, o, b, a) : B.apply(o, b);
});
}
function h(e) {
var t, n, r, i = e.length, s = b.relative[e[0].type], o = s || b.relative[" "], u = s ? 1 : 0, l = a(function(e) {
return e === t;
}, o, !0), p = a(function(e) {
return F.call(t, e) > -1;
}, o, !0), d = [ function(e, n, r) {
return !s && (r || n !== C) || ((t = n).nodeType ? l(e, n, r) : p(e, n, r));
} ];
for (; u < i; u++) if (n = b.relative[e[u].type]) d = [ a(f(d), n) ]; else {
n = b.filter[e[u].type].apply(null, e[u].matches);
if (n[A]) {
r = ++u;
for (; r < i; r++) if (b.relative[e[r].type]) break;
return c(u > 1 && f(d), u > 1 && e.slice(0, u - 1).join("").replace(G, "$1"), n, u < r && h(e.slice(u, r)), r < i && h(e = e.slice(r)), r < i && e.join(""));
}
d.push(n);
}
return f(d);
}
function p(e, t) {
var r = t.length > 0, i = e.length > 0, s = function(o, u, a, f, c) {
var h, p, d, v = [], m = 0, y = "0", w = o && [], E = c != null, S = C, x = o || i && b.find.TAG("*", c && u.parentNode || u), T = D += S == null ? 1 : Math.E;
E && (C = u !== M && u, g = s.el);
for (; (h = x[y]) != null; y++) {
if (i && h) {
for (p = 0; d = e[p]; p++) if (d(h, u, a)) {
f.push(h);
break;
}
E && (D = T, g = ++s.el);
}
r && ((h = !d && h) && m--, o && w.push(h));
}
m += y;
if (r && y !== m) {
for (p = 0; d = t[p]; p++) d(w, v, u, a);
if (o) {
if (m > 0) while (y--) !w[y] && !v[y] && (v[y] = H.call(f));
v = l(v);
}
B.apply(f, v), E && !o && v.length > 0 && m + t.length > 1 && n.uniqueSort(f);
}
return E && (D = T, C = S), w;
};
return s.el = 0, r ? I(s) : s;
}
function d(e, t, r, i) {
var s = 0, o = t.length;
for (; s < o; s++) n(e, t[s], r, i);
return r;
}
function v(e, t, n, r, i) {
var s, o, a, f, l, c = u(e), h = c.length;
if (!r && c.length === 1) {
o = c[0] = c[0].slice(0);
if (o.length > 2 && (a = o[0]).type === "ID" && t.nodeType === 9 && !i && b.relative[o[1].type]) {
t = b.find.ID(a.matches[0].replace(at, ""), t, i)[0];
if (!t) return n;
e = e.slice(o.shift().length);
}
for (s = ft.POS.test(e) ? -1 : o.length - 1; s >= 0; s--) {
a = o[s];
if (b.relative[f = a.type]) break;
if (l = b.find[f]) if (r = l(a.matches[0].replace(at, ""), it.test(o[0].type) && t.parentNode || t, i)) {
o.splice(s, 1), e = r.length && o.join("");
if (!e) return B.apply(n, j.call(r, 0)), n;
break;
}
}
}
return x(e, c)(r, t, i, n, it.test(e)), n;
}
function m() {}
var g, y, b, w, E, S, x, T, N, C, k = !0, L = "undefined", A = ("sizcache" + Math.random()).replace(".", ""), O = String, M = e.document, _ = M.documentElement, D = 0, P = 0, H = [].pop, B = [].push, j = [].slice, F = [].indexOf || function(e) {
var t = 0, n = this.length;
for (; t < n; t++) if (this[t] === e) return t;
return -1;
}, I = function(e, t) {
return e[A] = t == null || t, e;
}, q = function() {
var e = {}, t = [];
return I(function(n, r) {
return t.push(n) > b.cacheLength && delete e[t.shift()], e[n] = r;
}, e);
}, R = q(), U = q(), z = q(), W = "[\\x20\\t\\r\\n\\f]", X = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+", V = X.replace("w", "w#"), $ = "([*^$|!~]?=)", J = "\\[" + W + "*(" + X + ")" + W + "*(?:" + $ + W + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + V + ")|)|)" + W + "*\\]", K = ":(" + X + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + J + ")|[^:]|\\\\.)*|.*))\\)|)", Q = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + W + "*((?:-\\d)?\\d*)" + W + "*\\)|)(?=[^-]|$)", G = new RegExp("^" + W + "+|((?:^|[^\\\\])(?:\\\\.)*)" + W + "+$", "g"), Z = new RegExp("^" + W + "*," + W + "*"), et = new RegExp("^" + W + "*([\\x20\\t\\r\\n\\f>+~])" + W + "*"), tt = new RegExp(K), nt = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/, rt = /^:not/, it = /[\x20\t\r\n\f]*[+~]/, st = /:not\($/, ot = /h\d/i, ut = /input|select|textarea|button/i, at = /\\(?!\\)/g, ft = {
ID: new RegExp("^#(" + X + ")"),
CLASS: new RegExp("^\\.(" + X + ")"),
NAME: new RegExp("^\\[name=['\"]?(" + X + ")['\"]?\\]"),
TAG: new RegExp("^(" + X.replace("w", "w*") + ")"),
ATTR: new RegExp("^" + J),
PSEUDO: new RegExp("^" + K),
POS: new RegExp(Q, "i"),
CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + W + "*(even|odd|(([+-]|)(\\d*)n|)" + W + "*(?:([+-]|)" + W + "*(\\d+)|))" + W + "*\\)|)", "i"),
needsContext: new RegExp("^" + W + "*[>+~]|" + Q, "i")
}, lt = function(e) {
var t = M.createElement("div");
try {
return e(t);
} catch (n) {
return !1;
} finally {
t = null;
}
}, ct = lt(function(e) {
return e.appendChild(M.createComment("")), !e.getElementsByTagName("*").length;
}), ht = lt(function(e) {
return e.innerHTML = "<a href='#'></a>", e.firstChild && typeof e.firstChild.getAttribute !== L && e.firstChild.getAttribute("href") === "#";
}), pt = lt(function(e) {
e.innerHTML = "<select></select>";
var t = typeof e.lastChild.getAttribute("multiple");
return t !== "boolean" && t !== "string";
}), dt = lt(function(e) {
return e.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !e.getElementsByClassName || !e.getElementsByClassName("e").length ? !1 : (e.lastChild.className = "e", e.getElementsByClassName("e").length === 2);
}), vt = lt(function(e) {
e.id = A + 0, e.innerHTML = "<a name='" + A + "'></a><div name='" + A + "'></div>", _.insertBefore(e, _.firstChild);
var t = M.getElementsByName && M.getElementsByName(A).length === 2 + M.getElementsByName(A + 0).length;
return y = !M.getElementById(A), _.removeChild(e), t;
});
try {
j.call(_.childNodes, 0)[0].nodeType;
} catch (mt) {
j = function(e) {
var t, n = [];
for (; t = this[e]; e++) n.push(t);
return n;
};
}
n.matches = function(e, t) {
return n(e, null, null, t);
}, n.matchesSelector = function(e, t) {
return n(t, null, null, [ e ]).length > 0;
}, w = n.getText = function(e) {
var t, n = "", r = 0, i = e.nodeType;
if (i) {
if (i === 1 || i === 9 || i === 11) {
if (typeof e.textContent == "string") return e.textContent;
for (e = e.firstChild; e; e = e.nextSibling) n += w(e);
} else if (i === 3 || i === 4) return e.nodeValue;
} else for (; t = e[r]; r++) n += w(t);
return n;
}, E = n.isXML = function(e) {
var t = e && (e.ownerDocument || e).documentElement;
return t ? t.nodeName !== "HTML" : !1;
}, S = n.contains = _.contains ? function(e, t) {
var n = e.nodeType === 9 ? e.documentElement : e, r = t && t.parentNode;
return e === r || !!(r && r.nodeType === 1 && n.contains && n.contains(r));
} : _.compareDocumentPosition ? function(e, t) {
return t && !!(e.compareDocumentPosition(t) & 16);
} : function(e, t) {
while (t = t.parentNode) if (t === e) return !0;
return !1;
}, n.attr = function(e, t) {
var n, r = E(e);
return r || (t = t.toLowerCase()), (n = b.attrHandle[t]) ? n(e) : r || pt ? e.getAttribute(t) : (n = e.getAttributeNode(t), n ? typeof e[t] == "boolean" ? e[t] ? t : null : n.specified ? n.value : null : null);
}, b = n.selectors = {
cacheLength: 50,
createPseudo: I,
match: ft,
attrHandle: ht ? {} : {
href: function(e) {
return e.getAttribute("href", 2);
},
type: function(e) {
return e.getAttribute("type");
}
},
find: {
ID: y ? function(e, t, n) {
if (typeof t.getElementById !== L && !n) {
var r = t.getElementById(e);
return r && r.parentNode ? [ r ] : [];
}
} : function(e, n, r) {
if (typeof n.getElementById !== L && !r) {
var i = n.getElementById(e);
return i ? i.id === e || typeof i.getAttributeNode !== L && i.getAttributeNode("id").value === e ? [ i ] : t : [];
}
},
TAG: ct ? function(e, t) {
if (typeof t.getElementsByTagName !== L) return t.getElementsByTagName(e);
} : function(e, t) {
var n = t.getElementsByTagName(e);
if (e === "*") {
var r, i = [], s = 0;
for (; r = n[s]; s++) r.nodeType === 1 && i.push(r);
return i;
}
return n;
},
NAME: vt && function(e, t) {
if (typeof t.getElementsByName !== L) return t.getElementsByName(name);
},
CLASS: dt && function(e, t, n) {
if (typeof t.getElementsByClassName !== L && !n) return t.getElementsByClassName(e);
}
},
relative: {
">": {
dir: "parentNode",
first: !0
},
" ": {
dir: "parentNode"
},
"+": {
dir: "previousSibling",
first: !0
},
"~": {
dir: "previousSibling"
}
},
preFilter: {
ATTR: function(e) {
return e[1] = e[1].replace(at, ""), e[3] = (e[4] || e[5] || "").replace(at, ""), e[2] === "~=" && (e[3] = " " + e[3] + " "), e.slice(0, 4);
},
CHILD: function(e) {
return e[1] = e[1].toLowerCase(), e[1] === "nth" ? (e[2] || n.error(e[0]), e[3] = +(e[3] ? e[4] + (e[5] || 1) : 2 * (e[2] === "even" || e[2] === "odd")), e[4] = +(e[6] + e[7] || e[2] === "odd")) : e[2] && n.error(e[0]), e;
},
PSEUDO: function(e) {
var t, n;
if (ft.CHILD.test(e[0])) return null;
if (e[3]) e[2] = e[3]; else if (t = e[4]) tt.test(t) && (n = u(t, !0)) && (n = t.indexOf(")", t.length - n) - t.length) && (t = t.slice(0, n), e[0] = e[0].slice(0, n)), e[2] = t;
return e.slice(0, 3);
}
},
filter: {
ID: y ? function(e) {
return e = e.replace(at, ""), function(t) {
return t.getAttribute("id") === e;
};
} : function(e) {
return e = e.replace(at, ""), function(t) {
var n = typeof t.getAttributeNode !== L && t.getAttributeNode("id");
return n && n.value === e;
};
},
TAG: function(e) {
return e === "*" ? function() {
return !0;
} : (e = e.replace(at, "").toLowerCase(), function(t) {
return t.nodeName && t.nodeName.toLowerCase() === e;
});
},
CLASS: function(e) {
var t = R[A][e];
return t || (t = R(e, new RegExp("(^|" + W + ")" + e + "(" + W + "|$)"))), function(e) {
return t.test(e.className || typeof e.getAttribute !== L && e.getAttribute("class") || "");
};
},
ATTR: function(e, t, r) {
return function(i, s) {
var o = n.attr(i, e);
return o == null ? t === "!=" : t ? (o += "", t === "=" ? o === r : t === "!=" ? o !== r : t === "^=" ? r && o.indexOf(r) === 0 : t === "*=" ? r && o.indexOf(r) > -1 : t === "$=" ? r && o.substr(o.length - r.length) === r : t === "~=" ? (" " + o + " ").indexOf(r) > -1 : t === "|=" ? o === r || o.substr(0, r.length + 1) === r + "-" : !1) : !0;
};
},
CHILD: function(e, t, n, r) {
return e === "nth" ? function(e) {
var t, i, s = e.parentNode;
if (n === 1 && r === 0) return !0;
if (s) {
i = 0;
for (t = s.firstChild; t; t = t.nextSibling) if (t.nodeType === 1) {
i++;
if (e === t) break;
}
}
return i -= r, i === n || i % n === 0 && i / n >= 0;
} : function(t) {
var n = t;
switch (e) {
case "only":
case "first":
while (n = n.previousSibling) if (n.nodeType === 1) return !1;
if (e === "first") return !0;
n = t;
case "last":
while (n = n.nextSibling) if (n.nodeType === 1) return !1;
return !0;
}
};
},
PSEUDO: function(e, t) {
var r, i = b.pseudos[e] || b.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
return i[A] ? i(t) : i.length > 1 ? (r = [ e, e, "", t ], b.setFilters.hasOwnProperty(e.toLowerCase()) ? I(function(e, n) {
var r, s = i(e, t), o = s.length;
while (o--) r = F.call(e, s[o]), e[r] = !(n[r] = s[o]);
}) : function(e) {
return i(e, 0, r);
}) : i;
}
},
pseudos: {
not: I(function(e) {
var t = [], n = [], r = x(e.replace(G, "$1"));
return r[A] ? I(function(e, t, n, i) {
var s, o = r(e, null, i, []), u = e.length;
while (u--) if (s = o[u]) e[u] = !(t[u] = s);
}) : function(e, i, s) {
return t[0] = e, r(t, null, s, n), !n.pop();
};
}),
has: I(function(e) {
return function(t) {
return n(e, t).length > 0;
};
}),
contains: I(function(e) {
return function(t) {
return (t.textContent || t.innerText || w(t)).indexOf(e) > -1;
};
}),
enabled: function(e) {
return e.disabled === !1;
},
disabled: function(e) {
return e.disabled === !0;
},
checked: function(e) {
var t = e.nodeName.toLowerCase();
return t === "input" && !!e.checked || t === "option" && !!e.selected;
},
selected: function(e) {
return e.parentNode && e.parentNode.selectedIndex, e.selected === !0;
},
parent: function(e) {
return !b.pseudos.empty(e);
},
empty: function(e) {
var t;
e = e.firstChild;
while (e) {
if (e.nodeName > "@" || (t = e.nodeType) === 3 || t === 4) return !1;
e = e.nextSibling;
}
return !0;
},
header: function(e) {
return ot.test(e.nodeName);
},
text: function(e) {
var t, n;
return e.nodeName.toLowerCase() === "input" && (t = e.type) === "text" && ((n = e.getAttribute("type")) == null || n.toLowerCase() === t);
},
radio: r("radio"),
checkbox: r("checkbox"),
file: r("file"),
password: r("password"),
image: r("image"),
submit: i("submit"),
reset: i("reset"),
button: function(e) {
var t = e.nodeName.toLowerCase();
return t === "input" && e.type === "button" || t === "button";
},
input: function(e) {
return ut.test(e.nodeName);
},
focus: function(e) {
var t = e.ownerDocument;
return e === t.activeElement && (!t.hasFocus || t.hasFocus()) && (!!e.type || !!e.href);
},
active: function(e) {
return e === e.ownerDocument.activeElement;
},
first: s(function(e, t, n) {
return [ 0 ];
}),
last: s(function(e, t, n) {
return [ t - 1 ];
}),
eq: s(function(e, t, n) {
return [ n < 0 ? n + t : n ];
}),
even: s(function(e, t, n) {
for (var r = 0; r < t; r += 2) e.push(r);
return e;
}),
odd: s(function(e, t, n) {
for (var r = 1; r < t; r += 2) e.push(r);
return e;
}),
lt: s(function(e, t, n) {
for (var r = n < 0 ? n + t : n; --r >= 0; ) e.push(r);
return e;
}),
gt: s(function(e, t, n) {
for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
return e;
})
}
}, T = _.compareDocumentPosition ? function(e, t) {
return e === t ? (N = !0, 0) : (!e.compareDocumentPosition || !t.compareDocumentPosition ? e.compareDocumentPosition : e.compareDocumentPosition(t) & 4) ? -1 : 1;
} : function(e, t) {
if (e === t) return N = !0, 0;
if (e.sourceIndex && t.sourceIndex) return e.sourceIndex - t.sourceIndex;
var n, r, i = [], s = [], u = e.parentNode, a = t.parentNode, f = u;
if (u === a) return o(e, t);
if (!u) return -1;
if (!a) return 1;
while (f) i.unshift(f), f = f.parentNode;
f = a;
while (f) s.unshift(f), f = f.parentNode;
n = i.length, r = s.length;
for (var l = 0; l < n && l < r; l++) if (i[l] !== s[l]) return o(i[l], s[l]);
return l === n ? o(e, s[l], -1) : o(i[l], t, 1);
}, [ 0, 0 ].sort(T), k = !N, n.uniqueSort = function(e) {
var t, n = 1;
N = k, e.sort(T);
if (N) for (; t = e[n]; n++) t === e[n - 1] && e.splice(n--, 1);
return e;
}, n.error = function(e) {
throw new Error("Syntax error, unrecognized expression: " + e);
}, x = n.compile = function(e, t) {
var n, r = [], i = [], s = z[A][e];
if (!s) {
t || (t = u(e)), n = t.length;
while (n--) s = h(t[n]), s[A] ? r.push(s) : i.push(s);
s = z(e, p(i, r));
}
return s;
}, M.querySelectorAll && function() {
var e, t = v, r = /'|\\/g, i = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g, s = [ ":focus" ], o = [ ":active", ":focus" ], a = _.matchesSelector || _.mozMatchesSelector || _.webkitMatchesSelector || _.oMatchesSelector || _.msMatchesSelector;
lt(function(e) {
e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || s.push("\\[" + W + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), e.querySelectorAll(":checked").length || s.push(":checked");
}), lt(function(e) {
e.innerHTML = "<p test=''></p>", e.querySelectorAll("[test^='']").length && s.push("[*^$]=" + W + "*(?:\"\"|'')"), e.innerHTML = "<input type='hidden'/>", e.querySelectorAll(":enabled").length || s.push(":enabled", ":disabled");
}), s = new RegExp(s.join("|")), v = function(e, n, i, o, a) {
if (!o && !a && (!s || !s.test(e))) {
var f, l, c = !0, h = A, p = n, d = n.nodeType === 9 && e;
if (n.nodeType === 1 && n.nodeName.toLowerCase() !== "object") {
f = u(e), (c = n.getAttribute("id")) ? h = c.replace(r, "\\$&") : n.setAttribute("id", h), h = "[id='" + h + "'] ", l = f.length;
while (l--) f[l] = h + f[l].join("");
p = it.test(e) && n.parentNode || n, d = f.join(",");
}
if (d) try {
return B.apply(i, j.call(p.querySelectorAll(d), 0)), i;
} catch (v) {} finally {
c || n.removeAttribute("id");
}
}
return t(e, n, i, o, a);
}, a && (lt(function(t) {
e = a.call(t, "div");
try {
a.call(t, "[test!='']:sizzle"), o.push("!=", K);
} catch (n) {}
}), o = new RegExp(o.join("|")), n.matchesSelector = function(t, r) {
r = r.replace(i, "='$1']");
if (!E(t) && !o.test(r) && (!s || !s.test(r))) try {
var u = a.call(t, r);
if (u || e || t.document && t.document.nodeType !== 11) return u;
} catch (f) {}
return n(r, null, null, [ t ]).length > 0;
});
}(), b.pseudos.nth = b.pseudos.eq, b.filters = m.prototype = b.pseudos, b.setFilters = new m, n.attr = Y.attr, Y.find = n, Y.expr = n.selectors, Y.expr[":"] = Y.expr.pseudos, Y.unique = n.uniqueSort, Y.text = n.getText, Y.isXMLDoc = n.isXML, Y.contains = n.contains;
}(e);
var Pt = /Until$/, Ht = /^(?:parents|prev(?:Until|All))/, Bt = /^.[^:#\[\.,]*$/, jt = Y.expr.match.needsContext, Ft = {
children: !0,
contents: !0,
next: !0,
prev: !0
};
Y.fn.extend({
find: function(e) {
var t, n, r, i, s, o, u = this;
if (typeof e != "string") return Y(e).filter(function() {
for (t = 0, n = u.length; t < n; t++) if (Y.contains(u[t], this)) return !0;
});
o = this.pushStack("", "find", e);
for (t = 0, n = this.length; t < n; t++) {
r = o.length, Y.find(e, this[t], o);
if (t > 0) for (i = r; i < o.length; i++) for (s = 0; s < r; s++) if (o[s] === o[i]) {
o.splice(i--, 1);
break;
}
}
return o;
},
has: function(e) {
var t, n = Y(e, this), r = n.length;
return this.filter(function() {
for (t = 0; t < r; t++) if (Y.contains(this, n[t])) return !0;
});
},
not: function(e) {
return this.pushStack(f(this, e, !1), "not", e);
},
filter: function(e) {
return this.pushStack(f(this, e, !0), "filter", e);
},
is: function(e) {
return !!e && (typeof e == "string" ? jt.test(e) ? Y(e, this.context).index(this[0]) >= 0 : Y.filter(e, this).length > 0 : this.filter(e).length > 0);
},
closest: function(e, t) {
var n, r = 0, i = this.length, s = [], o = jt.test(e) || typeof e != "string" ? Y(e, t || this.context) : 0;
for (; r < i; r++) {
n = this[r];
while (n && n.ownerDocument && n !== t && n.nodeType !== 11) {
if (o ? o.index(n) > -1 : Y.find.matchesSelector(n, e)) {
s.push(n);
break;
}
n = n.parentNode;
}
}
return s = s.length > 1 ? Y.unique(s) : s, this.pushStack(s, "closest", e);
},
index: function(e) {
return e ? typeof e == "string" ? Y.inArray(this[0], Y(e)) : Y.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1;
},
add: function(e, t) {
var n = typeof e == "string" ? Y(e, t) : Y.makeArray(e && e.nodeType ? [ e ] : e), r = Y.merge(this.get(), n);
return this.pushStack(u(n[0]) || u(r[0]) ? r : Y.unique(r));
},
addBack: function(e) {
return this.add(e == null ? this.prevObject : this.prevObject.filter(e));
}
}), Y.fn.andSelf = Y.fn.addBack, Y.each({
parent: function(e) {
var t = e.parentNode;
return t && t.nodeType !== 11 ? t : null;
},
parents: function(e) {
return Y.dir(e, "parentNode");
},
parentsUntil: function(e, t, n) {
return Y.dir(e, "parentNode", n);
},
next: function(e) {
return a(e, "nextSibling");
},
prev: function(e) {
return a(e, "previousSibling");
},
nextAll: function(e) {
return Y.dir(e, "nextSibling");
},
prevAll: function(e) {
return Y.dir(e, "previousSibling");
},
nextUntil: function(e, t, n) {
return Y.dir(e, "nextSibling", n);
},
prevUntil: function(e, t, n) {
return Y.dir(e, "previousSibling", n);
},
siblings: function(e) {
return Y.sibling((e.parentNode || {}).firstChild, e);
},
children: function(e) {
return Y.sibling(e.firstChild);
},
contents: function(e) {
return Y.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : Y.merge([], e.childNodes);
}
}, function(e, t) {
Y.fn[e] = function(n, r) {
var i = Y.map(this, t, n);
return Pt.test(e) || (r = n), r && typeof r == "string" && (i = Y.filter(r, i)), i = this.length > 1 && !Ft[e] ? Y.unique(i) : i, this.length > 1 && Ht.test(e) && (i = i.reverse()), this.pushStack(i, e, $.call(arguments).join(","));
};
}), Y.extend({
filter: function(e, t, n) {
return n && (e = ":not(" + e + ")"), t.length === 1 ? Y.find.matchesSelector(t[0], e) ? [ t[0] ] : [] : Y.find.matches(e, t);
},
dir: function(e, n, r) {
var i = [], s = e[n];
while (s && s.nodeType !== 9 && (r === t || s.nodeType !== 1 || !Y(s).is(r))) s.nodeType === 1 && i.push(s), s = s[n];
return i;
},
sibling: function(e, t) {
var n = [];
for (; e; e = e.nextSibling) e.nodeType === 1 && e !== t && n.push(e);
return n;
}
});
var It = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", qt = / jQuery\d+="(?:null|\d+)"/g, Rt = /^\s+/, Ut = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, zt = /<([\w:]+)/, Wt = /<tbody/i, Xt = /<|&#?\w+;/, Vt = /<(?:script|style|link)/i, $t = /<(?:script|object|embed|option|style)/i, Jt = new RegExp("<(?:" + It + ")[\\s/>]", "i"), Kt = /^(?:checkbox|radio)$/, Qt = /checked\s*(?:[^=]|=\s*.checked.)/i, Gt = /\/(java|ecma)script/i, Yt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g, Zt = {
option: [ 1, "<select multiple='multiple'>", "</select>" ],
legend: [ 1, "<fieldset>", "</fieldset>" ],
thead: [ 1, "<table>", "</table>" ],
tr: [ 2, "<table><tbody>", "</tbody></table>" ],
td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
area: [ 1, "<map>", "</map>" ],
_default: [ 0, "", "" ]
}, en = l(R), tn = en.appendChild(R.createElement("div"));
Zt.optgroup = Zt.option, Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead, Zt.th = Zt.td, Y.support.htmlSerialize || (Zt._default = [ 1, "X<div>", "</div>" ]), Y.fn.extend({
text: function(e) {
return Y.access(this, function(e) {
return e === t ? Y.text(this) : this.empty().append((this[0] && this[0].ownerDocument || R).createTextNode(e));
}, null, e, arguments.length);
},
wrapAll: function(e) {
if (Y.isFunction(e)) return this.each(function(t) {
Y(this).wrapAll(e.call(this, t));
});
if (this[0]) {
var t = Y(e, this[0].ownerDocument).eq(0).clone(!0);
this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
var e = this;
while (e.firstChild && e.firstChild.nodeType === 1) e = e.firstChild;
return e;
}).append(this);
}
return this;
},
wrapInner: function(e) {
return Y.isFunction(e) ? this.each(function(t) {
Y(this).wrapInner(e.call(this, t));
}) : this.each(function() {
var t = Y(this), n = t.contents();
n.length ? n.wrapAll(e) : t.append(e);
});
},
wrap: function(e) {
var t = Y.isFunction(e);
return this.each(function(n) {
Y(this).wrapAll(t ? e.call(this, n) : e);
});
},
unwrap: function() {
return this.parent().each(function() {
Y.nodeName(this, "body") || Y(this).replaceWith(this.childNodes);
}).end();
},
append: function() {
return this.domManip(arguments, !0, function(e) {
(this.nodeType === 1 || this.nodeType === 11) && this.appendChild(e);
});
},
prepend: function() {
return this.domManip(arguments, !0, function(e) {
(this.nodeType === 1 || this.nodeType === 11) && this.insertBefore(e, this.firstChild);
});
},
before: function() {
if (!u(this[0])) return this.domManip(arguments, !1, function(e) {
this.parentNode.insertBefore(e, this);
});
if (arguments.length) {
var e = Y.clean(arguments);
return this.pushStack(Y.merge(e, this), "before", this.selector);
}
},
after: function() {
if (!u(this[0])) return this.domManip(arguments, !1, function(e) {
this.parentNode.insertBefore(e, this.nextSibling);
});
if (arguments.length) {
var e = Y.clean(arguments);
return this.pushStack(Y.merge(this, e), "after", this.selector);
}
},
remove: function(e, t) {
var n, r = 0;
for (; (n = this[r]) != null; r++) if (!e || Y.filter(e, [ n ]).length) !t && n.nodeType === 1 && (Y.cleanData(n.getElementsByTagName("*")), Y.cleanData([ n ])), n.parentNode && n.parentNode.removeChild(n);
return this;
},
empty: function() {
var e, t = 0;
for (; (e = this[t]) != null; t++) {
e.nodeType === 1 && Y.cleanData(e.getElementsByTagName("*"));
while (e.firstChild) e.removeChild(e.firstChild);
}
return this;
},
clone: function(e, t) {
return e = e == null ? !1 : e, t = t == null ? e : t, this.map(function() {
return Y.clone(this, e, t);
});
},
html: function(e) {
return Y.access(this, function(e) {
var n = this[0] || {}, r = 0, i = this.length;
if (e === t) return n.nodeType === 1 ? n.innerHTML.replace(qt, "") : t;
if (typeof e == "string" && !Vt.test(e) && (Y.support.htmlSerialize || !Jt.test(e)) && (Y.support.leadingWhitespace || !Rt.test(e)) && !Zt[(zt.exec(e) || [ "", "" ])[1].toLowerCase()]) {
e = e.replace(Ut, "<$1></$2>");
try {
for (; r < i; r++) n = this[r] || {}, n.nodeType === 1 && (Y.cleanData(n.getElementsByTagName("*")), n.innerHTML = e);
n = 0;
} catch (s) {}
}
n && this.empty().append(e);
}, null, e, arguments.length);
},
replaceWith: function(e) {
return u(this[0]) ? this.length ? this.pushStack(Y(Y.isFunction(e) ? e() : e), "replaceWith", e) : this : Y.isFunction(e) ? this.each(function(t) {
var n = Y(this), r = n.html();
n.replaceWith(e.call(this, t, r));
}) : (typeof e != "string" && (e = Y(e).detach()), this.each(function() {
var t = this.nextSibling, n = this.parentNode;
Y(this).remove(), t ? Y(t).before(e) : Y(n).append(e);
}));
},
detach: function(e) {
return this.remove(e, !0);
},
domManip: function(e, n, r) {
e = [].concat.apply([], e);
var i, s, o, u, a = 0, f = e[0], l = [], h = this.length;
if (!Y.support.checkClone && h > 1 && typeof f == "string" && Qt.test(f)) return this.each(function() {
Y(this).domManip(e, n, r);
});
if (Y.isFunction(f)) return this.each(function(i) {
var s = Y(this);
e[0] = f.call(this, i, n ? s.html() : t), s.domManip(e, n, r);
});
if (this[0]) {
i = Y.buildFragment(e, this, l), o = i.fragment, s = o.firstChild, o.childNodes.length === 1 && (o = s);
if (s) {
n = n && Y.nodeName(s, "tr");
for (u = i.cacheable || h - 1; a < h; a++) r.call(n && Y.nodeName(this[a], "table") ? c(this[a], "tbody") : this[a], a === u ? o : Y.clone(o, !0, !0));
}
o = s = null, l.length && Y.each(l, function(e, t) {
t.src ? Y.ajax ? Y.ajax({
url: t.src,
type: "GET",
dataType: "script",
async: !1,
global: !1,
"throws": !0
}) : Y.error("no ajax") : Y.globalEval((t.text || t.textContent || t.innerHTML || "").replace(Yt, "")), t.parentNode && t.parentNode.removeChild(t);
});
}
return this;
}
}), Y.buildFragment = function(e, n, r) {
var i, s, o, u = e[0];
return n = n || R, n = !n.nodeType && n[0] || n, n = n.ownerDocument || n, e.length === 1 && typeof u == "string" && u.length < 512 && n === R && u.charAt(0) === "<" && !$t.test(u) && (Y.support.checkClone || !Qt.test(u)) && (Y.support.html5Clone || !Jt.test(u)) && (s = !0, i = Y.fragments[u], o = i !== t), i || (i = n.createDocumentFragment(), Y.clean(e, n, i, r), s && (Y.fragments[u] = o && i)), {
fragment: i,
cacheable: s
};
}, Y.fragments = {}, Y.each({
appendTo: "append",
prependTo: "prepend",
insertBefore: "before",
insertAfter: "after",
replaceAll: "replaceWith"
}, function(e, t) {
Y.fn[e] = function(n) {
var r, i = 0, s = [], o = Y(n), u = o.length, a = this.length === 1 && this[0].parentNode;
if ((a == null || a && a.nodeType === 11 && a.childNodes.length === 1) && u === 1) return o[t](this[0]), this;
for (; i < u; i++) r = (i > 0 ? this.clone(!0) : this).get(), Y(o[i])[t](r), s = s.concat(r);
return this.pushStack(s, e, o.selector);
};
}), Y.extend({
clone: function(e, t, n) {
var r, i, s, o;
Y.support.html5Clone || Y.isXMLDoc(e) || !Jt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (tn.innerHTML = e.outerHTML, tn.removeChild(o = tn.firstChild));
if ((!Y.support.noCloneEvent || !Y.support.noCloneChecked) && (e.nodeType === 1 || e.nodeType === 11) && !Y.isXMLDoc(e)) {
p(e, o), r = d(e), i = d(o);
for (s = 0; r[s]; ++s) i[s] && p(r[s], i[s]);
}
if (t) {
h(e, o);
if (n) {
r = d(e), i = d(o);
for (s = 0; r[s]; ++s) h(r[s], i[s]);
}
}
return r = i = null, o;
},
clean: function(e, t, n, r) {
var i, s, o, u, a, f, c, h, p, d, m, g, y = t === R && en, b = [];
if (!t || typeof t.createDocumentFragment == "undefined") t = R;
for (i = 0; (o = e[i]) != null; i++) {
typeof o == "number" && (o += "");
if (!o) continue;
if (typeof o == "string") if (!Xt.test(o)) o = t.createTextNode(o); else {
y = y || l(t), c = t.createElement("div"), y.appendChild(c), o = o.replace(Ut, "<$1></$2>"), u = (zt.exec(o) || [ "", "" ])[1].toLowerCase(), a = Zt[u] || Zt._default, f = a[0], c.innerHTML = a[1] + o + a[2];
while (f--) c = c.lastChild;
if (!Y.support.tbody) {
h = Wt.test(o), p = u === "table" && !h ? c.firstChild && c.firstChild.childNodes : a[1] === "<table>" && !h ? c.childNodes : [];
for (s = p.length - 1; s >= 0; --s) Y.nodeName(p[s], "tbody") && !p[s].childNodes.length && p[s].parentNode.removeChild(p[s]);
}
!Y.support.leadingWhitespace && Rt.test(o) && c.insertBefore(t.createTextNode(Rt.exec(o)[0]), c.firstChild), o = c.childNodes, c.parentNode.removeChild(c);
}
o.nodeType ? b.push(o) : Y.merge(b, o);
}
c && (o = c = y = null);
if (!Y.support.appendChecked) for (i = 0; (o = b[i]) != null; i++) Y.nodeName(o, "input") ? v(o) : typeof o.getElementsByTagName != "undefined" && Y.grep(o.getElementsByTagName("input"), v);
if (n) {
m = function(e) {
if (!e.type || Gt.test(e.type)) return r ? r.push(e.parentNode ? e.parentNode.removeChild(e) : e) : n.appendChild(e);
};
for (i = 0; (o = b[i]) != null; i++) if (!Y.nodeName(o, "script") || !m(o)) n.appendChild(o), typeof o.getElementsByTagName != "undefined" && (g = Y.grep(Y.merge([], o.getElementsByTagName("script")), m), b.splice.apply(b, [ i + 1, 0 ].concat(g)), i += g.length);
}
return b;
},
cleanData: function(e, t) {
var n, r, i, s, o = 0, u = Y.expando, a = Y.cache, f = Y.support.deleteExpando, l = Y.event.special;
for (; (i = e[o]) != null; o++) if (t || Y.acceptData(i)) {
r = i[u], n = r && a[r];
if (n) {
if (n.events) for (s in n.events) l[s] ? Y.event.remove(i, s) : Y.removeEvent(i, s, n.handle);
a[r] && (delete a[r], f ? delete i[u] : i.removeAttribute ? i.removeAttribute(u) : i[u] = null, Y.deletedIds.push(r));
}
}
}
}), function() {
var e, t;
Y.uaMatch = function(e) {
e = e.toLowerCase();
var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || e.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || [];
return {
browser: t[1] || "",
version: t[2] || "0"
};
}, e = Y.uaMatch(z.userAgent), t = {}, e.browser && (t[e.browser] = !0, t.version = e.version), t.chrome ? t.webkit = !0 : t.webkit && (t.safari = !0), Y.browser = t, Y.sub = function() {
function e(t, n) {
return new e.fn.init(t, n);
}
Y.extend(!0, e, this), e.superclass = this, e.fn = e.prototype = this(), e.fn.constructor = e, e.sub = this.sub, e.fn.init = function n(n, r) {
return r && r instanceof Y && !(r instanceof e) && (r = e(r)), Y.fn.init.call(this, n, r, t);
}, e.fn.init.prototype = e.fn;
var t = e(R);
return e;
};
}();
var nn, rn, sn, on = /alpha\([^)]*\)/i, un = /opacity=([^)]*)/, an = /^(top|right|bottom|left)$/, fn = /^(none|table(?!-c[ea]).+)/, ln = /^margin/, cn = new RegExp("^(" + Z + ")(.*)$", "i"), hn = new RegExp("^(" + Z + ")(?!px)[a-z%]+$", "i"), pn = new RegExp("^([-+])=(" + Z + ")", "i"), dn = {}, vn = {
position: "absolute",
visibility: "hidden",
display: "block"
}, mn = {
letterSpacing: 0,
fontWeight: 400
}, gn = [ "Top", "Right", "Bottom", "Left" ], yn = [ "Webkit", "O", "Moz", "ms" ], bn = Y.fn.toggle;
Y.fn.extend({
css: function(e, n) {
return Y.access(this, function(e, n, r) {
return r !== t ? Y.style(e, n, r) : Y.css(e, n);
}, e, n, arguments.length > 1);
},
show: function() {
return y(this, !0);
},
hide: function() {
return y(this);
},
toggle: function(e, t) {
var n = typeof e == "boolean";
return Y.isFunction(e) && Y.isFunction(t) ? bn.apply(this, arguments) : this.each(function() {
(n ? e : g(this)) ? Y(this).show() : Y(this).hide();
});
}
}), Y.extend({
cssHooks: {
opacity: {
get: function(e, t) {
if (t) {
var n = nn(e, "opacity");
return n === "" ? "1" : n;
}
}
}
},
cssNumber: {
fillOpacity: !0,
fontWeight: !0,
lineHeight: !0,
opacity: !0,
orphans: !0,
widows: !0,
zIndex: !0,
zoom: !0
},
cssProps: {
"float": Y.support.cssFloat ? "cssFloat" : "styleFloat"
},
style: function(e, n, r, i) {
if (!e || e.nodeType === 3 || e.nodeType === 8 || !e.style) return;
var s, o, u, a = Y.camelCase(n), f = e.style;
n = Y.cssProps[a] || (Y.cssProps[a] = m(f, a)), u = Y.cssHooks[n] || Y.cssHooks[a];
if (r === t) return u && "get" in u && (s = u.get(e, !1, i)) !== t ? s : f[n];
o = typeof r, o === "string" && (s = pn.exec(r)) && (r = (s[1] + 1) * s[2] + parseFloat(Y.css(e, n)), o = "number");
if (r == null || o === "number" && isNaN(r)) return;
o === "number" && !Y.cssNumber[a] && (r += "px");
if (!u || !("set" in u) || (r = u.set(e, r, i)) !== t) try {
f[n] = r;
} catch (l) {}
},
css: function(e, n, r, i) {
var s, o, u, a = Y.camelCase(n);
return n = Y.cssProps[a] || (Y.cssProps[a] = m(e.style, a)), u = Y.cssHooks[n] || Y.cssHooks[a], u && "get" in u && (s = u.get(e, !0, i)), s === t && (s = nn(e, n)), s === "normal" && n in mn && (s = mn[n]), r || i !== t ? (o = parseFloat(s), r || Y.isNumeric(o) ? o || 0 : s) : s;
},
swap: function(e, t, n) {
var r, i, s = {};
for (i in t) s[i] = e.style[i], e.style[i] = t[i];
r = n.call(e);
for (i in t) e.style[i] = s[i];
return r;
}
}), e.getComputedStyle ? nn = function(t, n) {
var r, i, s, o, u = e.getComputedStyle(t, null), a = t.style;
return u && (r = u[n], r === "" && !Y.contains(t.ownerDocument, t) && (r = Y.style(t, n)), hn.test(r) && ln.test(n) && (i = a.width, s = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = u.width, a.width = i, a.minWidth = s, a.maxWidth = o)), r;
} : R.documentElement.currentStyle && (nn = function(e, t) {
var n, r, i = e.currentStyle && e.currentStyle[t], s = e.style;
return i == null && s && s[t] && (i = s[t]), hn.test(i) && !an.test(t) && (n = s.left, r = e.runtimeStyle && e.runtimeStyle.left, r && (e.runtimeStyle.left = e.currentStyle.left), s.left = t === "fontSize" ? "1em" : i, i = s.pixelLeft + "px", s.left = n, r && (e.runtimeStyle.left = r)), i === "" ? "auto" : i;
}), Y.each([ "height", "width" ], function(e, t) {
Y.cssHooks[t] = {
get: function(e, n, r) {
if (n) return e.offsetWidth === 0 && fn.test(nn(e, "display")) ? Y.swap(e, vn, function() {
return E(e, t, r);
}) : E(e, t, r);
},
set: function(e, n, r) {
return b(e, n, r ? w(e, t, r, Y.support.boxSizing && Y.css(e, "boxSizing") === "border-box") : 0);
}
};
}), Y.support.opacity || (Y.cssHooks.opacity = {
get: function(e, t) {
return un.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
},
set: function(e, t) {
var n = e.style, r = e.currentStyle, i = Y.isNumeric(t) ? "alpha(opacity=" + t * 100 + ")" : "", s = r && r.filter || n.filter || "";
n.zoom = 1;
if (t >= 1 && Y.trim(s.replace(on, "")) === "" && n.removeAttribute) {
n.removeAttribute("filter");
if (r && !r.filter) return;
}
n.filter = on.test(s) ? s.replace(on, i) : s + " " + i;
}
}), Y(function() {
Y.support.reliableMarginRight || (Y.cssHooks.marginRight = {
get: function(e, t) {
return Y.swap(e, {
display: "inline-block"
}, function() {
if (t) return nn(e, "marginRight");
});
}
}), !Y.support.pixelPosition && Y.fn.position && Y.each([ "top", "left" ], function(e, t) {
Y.cssHooks[t] = {
get: function(e, n) {
if (n) {
var r = nn(e, t);
return hn.test(r) ? Y(e).position()[t] + "px" : r;
}
}
};
});
}), Y.expr && Y.expr.filters && (Y.expr.filters.hidden = function(e) {
return e.offsetWidth === 0 && e.offsetHeight === 0 || !Y.support.reliableHiddenOffsets && (e.style && e.style.display || nn(e, "display")) === "none";
}, Y.expr.filters.visible = function(e) {
return !Y.expr.filters.hidden(e);
}), Y.each({
margin: "",
padding: "",
border: "Width"
}, function(e, t) {
Y.cssHooks[e + t] = {
expand: function(n) {
var r, i = typeof n == "string" ? n.split(" ") : [ n ], s = {};
for (r = 0; r < 4; r++) s[e + gn[r] + t] = i[r] || i[r - 2] || i[0];
return s;
}
}, ln.test(e) || (Y.cssHooks[e + t].set = b);
});
var wn = /%20/g, En = /\[\]$/, Sn = /\r?\n/g, xn = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, Tn = /^(?:select|textarea)/i;
Y.fn.extend({
serialize: function() {
return Y.param(this.serializeArray());
},
serializeArray: function() {
return this.map(function() {
return this.elements ? Y.makeArray(this.elements) : this;
}).filter(function() {
return this.name && !this.disabled && (this.checked || Tn.test(this.nodeName) || xn.test(this.type));
}).map(function(e, t) {
var n = Y(this).val();
return n == null ? null : Y.isArray(n) ? Y.map(n, function(e, n) {
return {
name: t.name,
value: e.replace(Sn, "\r\n")
};
}) : {
name: t.name,
value: n.replace(Sn, "\r\n")
};
}).get();
}
}), Y.param = function(e, n) {
var r, i = [], s = function(e, t) {
t = Y.isFunction(t) ? t() : t == null ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
};
n === t && (n = Y.ajaxSettings && Y.ajaxSettings.traditional);
if (Y.isArray(e) || e.jquery && !Y.isPlainObject(e)) Y.each(e, function() {
s(this.name, this.value);
}); else for (r in e) x(r, e[r], n, s);
return i.join("&").replace(wn, "+");
};
var Nn, Cn, kn = /#.*$/, Ln = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, An = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/, On = /^(?:GET|HEAD)$/, Mn = /^\/\//, _n = /\?/, Dn = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, Pn = /([?&])_=[^&]*/, Hn = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/, Bn = Y.fn.load, jn = {}, Fn = {}, In = [ "*/" ] + [ "*" ];
try {
Cn = U.href;
} catch (qn) {
Cn = R.createElement("a"), Cn.href = "", Cn = Cn.href;
}
Nn = Hn.exec(Cn.toLowerCase()) || [], Y.fn.load = function(e, n, r) {
if (typeof e != "string" && Bn) return Bn.apply(this, arguments);
if (!this.length) return this;
var i, s, o, u = this, a = e.indexOf(" ");
return a >= 0 && (i = e.slice(a, e.length), e = e.slice(0, a)), Y.isFunction(n) ? (r = n, n = t) : n && typeof n == "object" && (s = "POST"), Y.ajax({
url: e,
type: s,
dataType: "html",
data: n,
complete: function(e, t) {
r && u.each(r, o || [ e.responseText, t, e ]);
}
}).done(function(e) {
o = arguments, u.html(i ? Y("<div>").append(e.replace(Dn, "")).find(i) : e);
}), this;
}, Y.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(e, t) {
Y.fn[t] = function(e) {
return this.on(t, e);
};
}), Y.each([ "get", "post" ], function(e, n) {
Y[n] = function(e, r, i, s) {
return Y.isFunction(r) && (s = s || i, i = r, r = t), Y.ajax({
type: n,
url: e,
data: r,
success: i,
dataType: s
});
};
}), Y.extend({
getScript: function(e, n) {
return Y.get(e, t, n, "script");
},
getJSON: function(e, t, n) {
return Y.get(e, t, n, "json");
},
ajaxSetup: function(e, t) {
return t ? C(e, Y.ajaxSettings) : (t = e, e = Y.ajaxSettings), C(e, t), e;
},
ajaxSettings: {
url: Cn,
isLocal: An.test(Nn[1]),
global: !0,
type: "GET",
contentType: "application/x-www-form-urlencoded; charset=UTF-8",
processData: !0,
async: !0,
accepts: {
xml: "application/xml, text/xml",
html: "text/html",
text: "text/plain",
json: "application/json, text/javascript",
"*": In
},
contents: {
xml: /xml/,
html: /html/,
json: /json/
},
responseFields: {
xml: "responseXML",
text: "responseText"
},
converters: {
"* text": e.String,
"text html": !0,
"text json": Y.parseJSON,
"text xml": Y.parseXML
},
flatOptions: {
context: !0,
url: !0
}
},
ajaxPrefilter: T(jn),
ajaxTransport: T(Fn),
ajax: function(e, n) {
function r(e, n, r, o) {
var f, c, y, b, E, x = n;
if (w === 2) return;
w = 2, a && clearTimeout(a), u = t, s = o || "", S.readyState = e > 0 ? 4 : 0, r && (b = k(h, S, r));
if (e >= 200 && e < 300 || e === 304) h.ifModified && (E = S.getResponseHeader("Last-Modified"), E && (Y.lastModified[i] = E), E = S.getResponseHeader("Etag"), E && (Y.etag[i] = E)), e === 304 ? (x = "notmodified", f = !0) : (f = L(h, b), x = f.state, c = f.data, y = f.error, f = !y); else {
y = x;
if (!x || e) x = "error", e < 0 && (e = 0);
}
S.status = e, S.statusText = (n || x) + "", f ? v.resolveWith(p, [ c, x, S ]) : v.rejectWith(p, [ S, x, y ]), S.statusCode(g), g = t, l && d.trigger("ajax" + (f ? "Success" : "Error"), [ S, h, f ? c : y ]), m.fireWith(p, [ S, x ]), l && (d.trigger("ajaxComplete", [ S, h ]), --Y.active || Y.event.trigger("ajaxStop"));
}
typeof e == "object" && (n = e, e = t), n = n || {};
var i, s, o, u, a, f, l, c, h = Y.ajaxSetup({}, n), p = h.context || h, d = p !== h && (p.nodeType || p instanceof Y) ? Y(p) : Y.event, v = Y.Deferred(), m = Y.Callbacks("once memory"), g = h.statusCode || {}, y = {}, b = {}, w = 0, E = "canceled", S = {
readyState: 0,
setRequestHeader: function(e, t) {
if (!w) {
var n = e.toLowerCase();
e = b[n] = b[n] || e, y[e] = t;
}
return this;
},
getAllResponseHeaders: function() {
return w === 2 ? s : null;
},
getResponseHeader: function(e) {
var n;
if (w === 2) {
if (!o) {
o = {};
while (n = Ln.exec(s)) o[n[1].toLowerCase()] = n[2];
}
n = o[e.toLowerCase()];
}
return n === t ? null : n;
},
overrideMimeType: function(e) {
return w || (h.mimeType = e), this;
},
abort: function(e) {
return e = e || E, u && u.abort(e), r(0, e), this;
}
};
v.promise(S), S.success = S.done, S.error = S.fail, S.complete = m.add, S.statusCode = function(e) {
if (e) {
var t;
if (w < 2) for (t in e) g[t] = [ g[t], e[t] ]; else t = e[S.status], S.always(t);
}
return this;
}, h.url = ((e || h.url) + "").replace(kn, "").replace(Mn, Nn[1] + "//"), h.dataTypes = Y.trim(h.dataType || "*").toLowerCase().split(tt), h.crossDomain == null && (f = Hn.exec(h.url.toLowerCase()) || !1, h.crossDomain = f && f.join(":") + (f[3] ? "" : f[1] === "http:" ? 80 : 443) !== Nn.join(":") + (Nn[3] ? "" : Nn[1] === "http:" ? 80 : 443)), h.data && h.processData && typeof h.data != "string" && (h.data = Y.param(h.data, h.traditional)), N(jn, h, n, S);
if (w === 2) return S;
l = h.global, h.type = h.type.toUpperCase(), h.hasContent = !On.test(h.type), l && Y.active++ === 0 && Y.event.trigger("ajaxStart");
if (!h.hasContent) {
h.data && (h.url += (_n.test(h.url) ? "&" : "?") + h.data, delete h.data), i = h.url;
if (h.cache === !1) {
var x = Y.now(), T = h.url.replace(Pn, "$1_=" + x);
h.url = T + (T === h.url ? (_n.test(h.url) ? "&" : "?") + "_=" + x : "");
}
}
(h.data && h.hasContent && h.contentType !== !1 || n.contentType) && S.setRequestHeader("Content-Type", h.contentType), h.ifModified && (i = i || h.url, Y.lastModified[i] && S.setRequestHeader("If-Modified-Since", Y.lastModified[i]), Y.etag[i] && S.setRequestHeader("If-None-Match", Y.etag[i])), S.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + (h.dataTypes[0] !== "*" ? ", " + In + "; q=0.01" : "") : h.accepts["*"]);
for (c in h.headers) S.setRequestHeader(c, h.headers[c]);
if (!h.beforeSend || h.beforeSend.call(p, S, h) !== !1 && w !== 2) {
E = "abort";
for (c in {
success: 1,
error: 1,
complete: 1
}) S[c](h[c]);
u = N(Fn, h, n, S);
if (!u) r(-1, "No Transport"); else {
S.readyState = 1, l && d.trigger("ajaxSend", [ S, h ]), h.async && h.timeout > 0 && (a = setTimeout(function() {
S.abort("timeout");
}, h.timeout));
try {
w = 1, u.send(y, r);
} catch (C) {
if (!(w < 2)) throw C;
r(-1, C);
}
}
return S;
}
return S.abort();
},
active: 0,
lastModified: {},
etag: {}
});
var Rn = [], Un = /\?/, zn = /(=)\?(?=&|$)|\?\?/, Wn = Y.now();
Y.ajaxSetup({
jsonp: "callback",
jsonpCallback: function() {
var e = Rn.pop() || Y.expando + "_" + Wn++;
return this[e] = !0, e;
}
}), Y.ajaxPrefilter("json jsonp", function(n, r, i) {
var s, o, u, a = n.data, f = n.url, l = n.jsonp !== !1, c = l && zn.test(f), h = l && !c && typeof a == "string" && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && zn.test(a);
if (n.dataTypes[0] === "jsonp" || c || h) return s = n.jsonpCallback = Y.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, o = e[s], c ? n.url = f.replace(zn, "$1" + s) : h ? n.data = a.replace(zn, "$1" + s) : l && (n.url += (Un.test(f) ? "&" : "?") + n.jsonp + "=" + s), n.converters["script json"] = function() {
return u || Y.error(s + " was not called"), u[0];
}, n.dataTypes[0] = "json", e[s] = function() {
u = arguments;
}, i.always(function() {
e[s] = o, n[s] && (n.jsonpCallback = r.jsonpCallback, Rn.push(s)), u && Y.isFunction(o) && o(u[0]), u = o = t;
}), "script";
}), Y.ajaxSetup({
accepts: {
script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
},
contents: {
script: /javascript|ecmascript/
},
converters: {
"text script": function(e) {
return Y.globalEval(e), e;
}
}
}), Y.ajaxPrefilter("script", function(e) {
e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
}), Y.ajaxTransport("script", function(e) {
if (e.crossDomain) {
var n, r = R.head || R.getElementsByTagName("head")[0] || R.documentElement;
return {
send: function(i, s) {
n = R.createElement("script"), n.async = "async", e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function(e, i) {
if (i || !n.readyState || /loaded|complete/.test(n.readyState)) n.onload = n.onreadystatechange = null, r && n.parentNode && r.removeChild(n), n = t, i || s(200, "success");
}, r.insertBefore(n, r.firstChild);
},
abort: function() {
n && n.onload(0, 1);
}
};
}
});
var Xn, Vn = e.ActiveXObject ? function() {
for (var e in Xn) Xn[e](0, 1);
} : !1, $n = 0;
Y.ajaxSettings.xhr = e.ActiveXObject ? function() {
return !this.isLocal && A() || O();
} : A, function(e) {
Y.extend(Y.support, {
ajax: !!e,
cors: !!e && "withCredentials" in e
});
}(Y.ajaxSettings.xhr()), Y.support.ajax && Y.ajaxTransport(function(n) {
if (!n.crossDomain || Y.support.cors) {
var r;
return {
send: function(i, s) {
var o, u, a = n.xhr();
n.username ? a.open(n.type, n.url, n.async, n.username, n.password) : a.open(n.type, n.url, n.async);
if (n.xhrFields) for (u in n.xhrFields) a[u] = n.xhrFields[u];
n.mimeType && a.overrideMimeType && a.overrideMimeType(n.mimeType), !n.crossDomain && !i["X-Requested-With"] && (i["X-Requested-With"] = "XMLHttpRequest");
try {
for (u in i) a.setRequestHeader(u, i[u]);
} catch (f) {}
a.send(n.hasContent && n.data || null), r = function(e, i) {
var u, f, l, c, h;
try {
if (r && (i || a.readyState === 4)) {
r = t, o && (a.onreadystatechange = Y.noop, Vn && delete Xn[o]);
if (i) a.readyState !== 4 && a.abort(); else {
u = a.status, l = a.getAllResponseHeaders(), c = {}, h = a.responseXML, h && h.documentElement && (c.xml = h);
try {
c.text = a.responseText;
} catch (e) {}
try {
f = a.statusText;
} catch (p) {
f = "";
}
!u && n.isLocal && !n.crossDomain ? u = c.text ? 200 : 404 : u === 1223 && (u = 204);
}
}
} catch (d) {
i || s(-1, d);
}
c && s(u, f, c, l);
}, n.async ? a.readyState === 4 ? setTimeout(r, 0) : (o = ++$n, Vn && (Xn || (Xn = {}, Y(e).unload(Vn)), Xn[o] = r), a.onreadystatechange = r) : r();
},
abort: function() {
r && r(0, 1);
}
};
}
});
var Jn, Kn, Qn = /^(?:toggle|show|hide)$/, Gn = new RegExp("^(?:([-+])=|)(" + Z + ")([a-z%]*)$", "i"), Yn = /queueHooks$/, Zn = [ H ], er = {
"*": [ function(e, t) {
var n, r, i = this.createTween(e, t), s = Gn.exec(t), o = i.cur(), u = +o || 0, a = 1, f = 20;
if (s) {
n = +s[2], r = s[3] || (Y.cssNumber[e] ? "" : "px");
if (r !== "px" && u) {
u = Y.css(i.elem, e, !0) || n || 1;
do a = a || ".5", u /= a, Y.style(i.elem, e, u + r); while (a !== (a = i.cur() / o) && a !== 1 && --f);
}
i.unit = r, i.start = u, i.end = s[1] ? u + (s[1] + 1) * n : n;
}
return i;
} ]
};
Y.Animation = Y.extend(D, {
tweener: function(e, t) {
Y.isFunction(e) ? (t = e, e = [ "*" ]) : e = e.split(" ");
var n, r = 0, i = e.length;
for (; r < i; r++) n = e[r], er[n] = er[n] || [], er[n].unshift(t);
},
prefilter: function(e, t) {
t ? Zn.unshift(e) : Zn.push(e);
}
}), Y.Tween = B, B.prototype = {
constructor: B,
init: function(e, t, n, r, i, s) {
this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = s || (Y.cssNumber[n] ? "" : "px");
},
cur: function() {
var e = B.propHooks[this.prop];
return e && e.get ? e.get(this) : B.propHooks._default.get(this);
},
run: function(e) {
var t, n = B.propHooks[this.prop];
return this.options.duration ? this.pos = t = Y.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : B.propHooks._default.set(this), this;
}
}, B.prototype.init.prototype = B.prototype, B.propHooks = {
_default: {
get: function(e) {
var t;
return e.elem[e.prop] == null || !!e.elem.style && e.elem.style[e.prop] != null ? (t = Y.css(e.elem, e.prop, !1, ""), !t || t === "auto" ? 0 : t) : e.elem[e.prop];
},
set: function(e) {
Y.fx.step[e.prop] ? Y.fx.step[e.prop](e) : e.elem.style && (e.elem.style[Y.cssProps[e.prop]] != null || Y.cssHooks[e.prop]) ? Y.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
}
}
}, B.propHooks.scrollTop = B.propHooks.scrollLeft = {
set: function(e) {
e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
}
}, Y.each([ "toggle", "show", "hide" ], function(e, t) {
var n = Y.fn[t];
Y.fn[t] = function(r, i, s) {
return r == null || typeof r == "boolean" || !e && Y.isFunction(r) && Y.isFunction(i) ? n.apply(this, arguments) : this.animate(j(t, !0), r, i, s);
};
}), Y.fn.extend({
fadeTo: function(e, t, n, r) {
return this.filter(g).css("opacity", 0).show().end().animate({
opacity: t
}, e, n, r);
},
animate: function(e, t, n, r) {
var i = Y.isEmptyObject(e), s = Y.speed(t, n, r), o = function() {
var t = D(this, Y.extend({}, e), s);
i && t.stop(!0);
};
return i || s.queue === !1 ? this.each(o) : this.queue(s.queue, o);
},
stop: function(e, n, r) {
var i = function(e) {
var t = e.stop;
delete e.stop, t(r);
};
return typeof e != "string" && (r = n, n = e, e = t), n && e !== !1 && this.queue(e || "fx", []), this.each(function() {
var t = !0, n = e != null && e + "queueHooks", s = Y.timers, o = Y._data(this);
if (n) o[n] && o[n].stop && i(o[n]); else for (n in o) o[n] && o[n].stop && Yn.test(n) && i(o[n]);
for (n = s.length; n--; ) s[n].elem === this && (e == null || s[n].queue === e) && (s[n].anim.stop(r), t = !1, s.splice(n, 1));
(t || !r) && Y.dequeue(this, e);
});
}
}), Y.each({
slideDown: j("show"),
slideUp: j("hide"),
slideToggle: j("toggle"),
fadeIn: {
opacity: "show"
},
fadeOut: {
opacity: "hide"
},
fadeToggle: {
opacity: "toggle"
}
}, function(e, t) {
Y.fn[e] = function(e, n, r) {
return this.animate(t, e, n, r);
};
}), Y.speed = function(e, t, n) {
var r = e && typeof e == "object" ? Y.extend({}, e) : {
complete: n || !n && t || Y.isFunction(e) && e,
duration: e,
easing: n && t || t && !Y.isFunction(t) && t
};
r.duration = Y.fx.off ? 0 : typeof r.duration == "number" ? r.duration : r.duration in Y.fx.speeds ? Y.fx.speeds[r.duration] : Y.fx.speeds._default;
if (r.queue == null || r.queue === !0) r.queue = "fx";
return r.old = r.complete, r.complete = function() {
Y.isFunction(r.old) && r.old.call(this), r.queue && Y.dequeue(this, r.queue);
}, r;
}, Y.easing = {
linear: function(e) {
return e;
},
swing: function(e) {
return .5 - Math.cos(e * Math.PI) / 2;
}
}, Y.timers = [], Y.fx = B.prototype.init, Y.fx.tick = function() {
var e, t = Y.timers, n = 0;
for (; n < t.length; n++) e = t[n], !e() && t[n] === e && t.splice(n--, 1);
t.length || Y.fx.stop();
}, Y.fx.timer = function(e) {
e() && Y.timers.push(e) && !Kn && (Kn = setInterval(Y.fx.tick, Y.fx.interval));
}, Y.fx.interval = 13, Y.fx.stop = function() {
clearInterval(Kn), Kn = null;
}, Y.fx.speeds = {
slow: 600,
fast: 200,
_default: 400
}, Y.fx.step = {}, Y.expr && Y.expr.filters && (Y.expr.filters.animated = function(e) {
return Y.grep(Y.timers, function(t) {
return e === t.elem;
}).length;
});
var tr = /^(?:body|html)$/i;
Y.fn.offset = function(e) {
if (arguments.length) return e === t ? this : this.each(function(t) {
Y.offset.setOffset(this, e, t);
});
var n, r, i, s, o, u, a, f = {
top: 0,
left: 0
}, l = this[0], c = l && l.ownerDocument;
if (!c) return;
return (r = c.body) === l ? Y.offset.bodyOffset(l) : (n = c.documentElement, Y.contains(n, l) ? (typeof l.getBoundingClientRect != "undefined" && (f = l.getBoundingClientRect()), i = F(c), s = n.clientTop || r.clientTop || 0, o = n.clientLeft || r.clientLeft || 0, u = i.pageYOffset || n.scrollTop, a = i.pageXOffset || n.scrollLeft, {
top: f.top + u - s,
left: f.left + a - o
}) : f);
}, Y.offset = {
bodyOffset: function(e) {
var t = e.offsetTop, n = e.offsetLeft;
return Y.support.doesNotIncludeMarginInBodyOffset && (t += parseFloat(Y.css(e, "marginTop")) || 0, n += parseFloat(Y.css(e, "marginLeft")) || 0), {
top: t,
left: n
};
},
setOffset: function(e, t, n) {
var r = Y.css(e, "position");
r === "static" && (e.style.position = "relative");
var i = Y(e), s = i.offset(), o = Y.css(e, "top"), u = Y.css(e, "left"), a = (r === "absolute" || r === "fixed") && Y.inArray("auto", [ o, u ]) > -1, f = {}, l = {}, c, h;
a ? (l = i.position(), c = l.top, h = l.left) : (c = parseFloat(o) || 0, h = parseFloat(u) || 0), Y.isFunction(t) && (t = t.call(e, n, s)), t.top != null && (f.top = t.top - s.top + c), t.left != null && (f.left = t.left - s.left + h), "using" in t ? t.using.call(e, f) : i.css(f);
}
}, Y.fn.extend({
position: function() {
if (!this[0]) return;
var e = this[0], t = this.offsetParent(), n = this.offset(), r = tr.test(t[0].nodeName) ? {
top: 0,
left: 0
} : t.offset();
return n.top -= parseFloat(Y.css(e, "marginTop")) || 0, n.left -= parseFloat(Y.css(e, "marginLeft")) || 0, r.top += parseFloat(Y.css(t[0], "borderTopWidth")) || 0, r.left += parseFloat(Y.css(t[0], "borderLeftWidth")) || 0, {
top: n.top - r.top,
left: n.left - r.left
};
},
offsetParent: function() {
return this.map(function() {
var e = this.offsetParent || R.body;
while (e && !tr.test(e.nodeName) && Y.css(e, "position") === "static") e = e.offsetParent;
return e || R.body;
});
}
}), Y.each({
scrollLeft: "pageXOffset",
scrollTop: "pageYOffset"
}, function(e, n) {
var r = /Y/.test(n);
Y.fn[e] = function(i) {
return Y.access(this, function(e, i, s) {
var o = F(e);
if (s === t) return o ? n in o ? o[n] : o.document.documentElement[i] : e[i];
o ? o.scrollTo(r ? Y(o).scrollLeft() : s, r ? s : Y(o).scrollTop()) : e[i] = s;
}, e, i, arguments.length, null);
};
}), Y.each({
Height: "height",
Width: "width"
}, function(e, n) {
Y.each({
padding: "inner" + e,
content: n,
"": "outer" + e
}, function(r, i) {
Y.fn[i] = function(i, s) {
var o = arguments.length && (r || typeof i != "boolean"), u = r || (i === !0 || s === !0 ? "margin" : "border");
return Y.access(this, function(n, r, i) {
var s;
return Y.isWindow(n) ? n.document.documentElement["client" + e] : n.nodeType === 9 ? (s = n.documentElement, Math.max(n.body["scroll" + e], s["scroll" + e], n.body["offset" + e], s["offset" + e], s["client" + e])) : i === t ? Y.css(n, r, i, u) : Y.style(n, r, i, u);
}, n, o ? i : t, o, null);
};
});
}), e.jQuery = e.$ = Y, typeof define == "function" && define.amd && define.amd.jQuery && define("jquery", [], function() {
return Y;
});
})(window);

// easing.js

jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
def: "easeOutQuad",
swing: function(e, t, n, r, i) {
return jQuery.easing[jQuery.easing.def](e, t, n, r, i);
},
easeInQuad: function(e, t, n, r, i) {
return r * (t /= i) * t + n;
},
easeOutQuad: function(e, t, n, r, i) {
return -r * (t /= i) * (t - 2) + n;
},
easeInOutQuad: function(e, t, n, r, i) {
return (t /= i / 2) < 1 ? r / 2 * t * t + n : -r / 2 * (--t * (t - 2) - 1) + n;
},
easeInCubic: function(e, t, n, r, i) {
return r * (t /= i) * t * t + n;
},
easeOutCubic: function(e, t, n, r, i) {
return r * ((t = t / i - 1) * t * t + 1) + n;
},
easeInOutCubic: function(e, t, n, r, i) {
return (t /= i / 2) < 1 ? r / 2 * t * t * t + n : r / 2 * ((t -= 2) * t * t + 2) + n;
},
easeInQuart: function(e, t, n, r, i) {
return r * (t /= i) * t * t * t + n;
},
easeOutQuart: function(e, t, n, r, i) {
return -r * ((t = t / i - 1) * t * t * t - 1) + n;
},
easeInOutQuart: function(e, t, n, r, i) {
return (t /= i / 2) < 1 ? r / 2 * t * t * t * t + n : -r / 2 * ((t -= 2) * t * t * t - 2) + n;
},
easeInQuint: function(e, t, n, r, i) {
return r * (t /= i) * t * t * t * t + n;
},
easeOutQuint: function(e, t, n, r, i) {
return r * ((t = t / i - 1) * t * t * t * t + 1) + n;
},
easeInOutQuint: function(e, t, n, r, i) {
return (t /= i / 2) < 1 ? r / 2 * t * t * t * t * t + n : r / 2 * ((t -= 2) * t * t * t * t + 2) + n;
},
easeInSine: function(e, t, n, r, i) {
return -r * Math.cos(t / i * (Math.PI / 2)) + r + n;
},
easeOutSine: function(e, t, n, r, i) {
return r * Math.sin(t / i * (Math.PI / 2)) + n;
},
easeInOutSine: function(e, t, n, r, i) {
return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n;
},
easeInExpo: function(e, t, n, r, i) {
return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n;
},
easeOutExpo: function(e, t, n, r, i) {
return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n;
},
easeInOutExpo: function(e, t, n, r, i) {
return t == 0 ? n : t == i ? n + r : (t /= i / 2) < 1 ? r / 2 * Math.pow(2, 10 * (t - 1)) + n : r / 2 * (-Math.pow(2, -10 * --t) + 2) + n;
},
easeInCirc: function(e, t, n, r, i) {
return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n;
},
easeOutCirc: function(e, t, n, r, i) {
return r * Math.sqrt(1 - (t = t / i - 1) * t) + n;
},
easeInOutCirc: function(e, t, n, r, i) {
return (t /= i / 2) < 1 ? -r / 2 * (Math.sqrt(1 - t * t) - 1) + n : r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n;
},
easeInElastic: function(e, t, n, r, i) {
var s = 1.70158, o = 0, u = r;
if (t == 0) return n;
if ((t /= i) == 1) return n + r;
o || (o = i * .3);
if (u < Math.abs(r)) {
u = r;
var s = o / 4;
} else var s = o / (2 * Math.PI) * Math.asin(r / u);
return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n;
},
easeOutElastic: function(e, t, n, r, i) {
var s = 1.70158, o = 0, u = r;
if (t == 0) return n;
if ((t /= i) == 1) return n + r;
o || (o = i * .3);
if (u < Math.abs(r)) {
u = r;
var s = o / 4;
} else var s = o / (2 * Math.PI) * Math.asin(r / u);
return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n;
},
easeInOutElastic: function(e, t, n, r, i) {
var s = 1.70158, o = 0, u = r;
if (t == 0) return n;
if ((t /= i / 2) == 2) return n + r;
o || (o = i * .3 * 1.5);
if (u < Math.abs(r)) {
u = r;
var s = o / 4;
} else var s = o / (2 * Math.PI) * Math.asin(r / u);
return t < 1 ? -0.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n : u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n;
},
easeInBack: function(e, t, n, r, i, s) {
return s == undefined && (s = 1.70158), r * (t /= i) * t * ((s + 1) * t - s) + n;
},
easeOutBack: function(e, t, n, r, i, s) {
return s == undefined && (s = 1.70158), r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n;
},
easeInOutBack: function(e, t, n, r, i, s) {
return s == undefined && (s = 1.70158), (t /= i / 2) < 1 ? r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n : r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n;
},
easeInBounce: function(e, t, n, r, i) {
return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n;
},
easeOutBounce: function(e, t, n, r, i) {
return (t /= i) < 1 / 2.75 ? r * 7.5625 * t * t + n : t < 2 / 2.75 ? r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n : t < 2.5 / 2.75 ? r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n : r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n;
},
easeInOutBounce: function(e, t, n, r, i) {
return t < i / 2 ? jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n : jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n;
}
});

// xcolor.js

(function(e, t) {
function h(e, t, n) {
var r = u[t.type] || {};
return e == null ? n || !t.def ? null : t.def : (e = r.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : r.mod ? (e + r.mod) % r.mod : 0 > e ? 0 : r.max < e ? r.max : e);
}
function p(t) {
var n = s(), r = n._rgba = [];
return t = t.toLowerCase(), c(i, function(e, i) {
var s, u = i.re.exec(t), a = u && i.parse(u), f = i.space || "rgba";
if (a) return s = n[f](a), n[o[f].cache] = s[o[f].cache], r = n._rgba = s._rgba, !1;
}), r.length ? (r.join() === "0,0,0,0" && e.extend(r, l.transparent), n) : l[t];
}
function d(e, t, n) {
return n = (n + 1) % 1, n * 6 < 1 ? e + (t - e) * n * 6 : n * 2 < 1 ? t : n * 3 < 2 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
var n = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor", r = /^([\-+])=\s*(\d+\.?\d*)/, i = [ {
re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
parse: function(e) {
return [ e[1], e[2], e[3], e[4] ];
}
}, {
re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
parse: function(e) {
return [ e[1] * 2.55, e[2] * 2.55, e[3] * 2.55, e[4] ];
}
}, {
re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
parse: function(e) {
return [ parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16) ];
}
}, {
re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
parse: function(e) {
return [ parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16) ];
}
}, {
re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
space: "hsla",
parse: function(e) {
return [ e[1], e[2] / 100, e[3] / 100, e[4] ];
}
} ], s = e.Color = function(t, n, r, i) {
return new e.Color.fn.parse(t, n, r, i);
}, o = {
rgba: {
props: {
red: {
idx: 0,
type: "byte"
},
green: {
idx: 1,
type: "byte"
},
blue: {
idx: 2,
type: "byte"
}
}
},
hsla: {
props: {
hue: {
idx: 0,
type: "degrees"
},
saturation: {
idx: 1,
type: "percent"
},
lightness: {
idx: 2,
type: "percent"
}
}
}
}, u = {
"byte": {
floor: !0,
max: 255
},
percent: {
max: 1
},
degrees: {
mod: 360,
floor: !0
}
}, a = s.support = {}, f = e("<p>")[0], l, c = e.each;
f.style.cssText = "background-color:rgba(1,1,1,.5)", a.rgba = f.style.backgroundColor.indexOf("rgba") > -1, c(o, function(e, t) {
t.cache = "_" + e, t.props.alpha = {
idx: 3,
type: "percent",
def: 1
};
}), s.fn = e.extend(s.prototype, {
parse: function(n, r, i, u) {
if (n === t) return this._rgba = [ null, null, null, null ], this;
if (n.jquery || n.nodeType) n = e(n).css(r), r = t;
var a = this, f = e.type(n), d = this._rgba = [];
r !== t && (n = [ n, r, i, u ], f = "array");
if (f === "string") return this.parse(p(n) || l._default);
if (f === "array") return c(o.rgba.props, function(e, t) {
d[t.idx] = h(n[t.idx], t);
}), this;
if (f === "object") return n instanceof s ? c(o, function(e, t) {
n[t.cache] && (a[t.cache] = n[t.cache].slice());
}) : c(o, function(t, r) {
var i = r.cache;
c(r.props, function(e, t) {
if (!a[i] && r.to) {
if (e === "alpha" || n[e] == null) return;
a[i] = r.to(a._rgba);
}
a[i][t.idx] = h(n[e], t, !0);
}), a[i] && e.inArray(null, a[i].slice(0, 3)) < 0 && (a[i][3] = 1, r.from && (a._rgba = r.from(a[i])));
}), this;
},
is: function(e) {
var t = s(e), n = !0, r = this;
return c(o, function(e, i) {
var s, o = t[i.cache];
return o && (s = r[i.cache] || i.to && i.to(r._rgba) || [], c(i.props, function(e, t) {
if (o[t.idx] != null) return n = o[t.idx] === s[t.idx], n;
})), n;
}), n;
},
_space: function() {
var e = [], t = this;
return c(o, function(n, r) {
t[r.cache] && e.push(n);
}), e.pop();
},
transition: function(e, t) {
var n = s(e), r = n._space(), i = o[r], a = this.alpha() === 0 ? s("transparent") : this, f = a[i.cache] || i.to(a._rgba), l = f.slice();
return n = n[i.cache], c(i.props, function(e, r) {
var i = r.idx, s = f[i], o = n[i], a = u[r.type] || {};
if (o === null) return;
s === null ? l[i] = o : (a.mod && (o - s > a.mod / 2 ? s += a.mod : s - o > a.mod / 2 && (s -= a.mod)), l[i] = h((o - s) * t + s, r));
}), this[r](l);
},
blend: function(t) {
if (this._rgba[3] === 1) return this;
var n = this._rgba.slice(), r = n.pop(), i = s(t)._rgba;
return s(e.map(n, function(e, t) {
return (1 - r) * i[t] + r * e;
}));
},
toRgbaString: function() {
var t = "rgba(", n = e.map(this._rgba, function(e, t) {
return e == null ? t > 2 ? 1 : 0 : e;
});
return n[3] === 1 && (n.pop(), t = "rgb("), t + n.join() + ")";
},
toHslaString: function() {
var t = "hsla(", n = e.map(this.hsla(), function(e, t) {
return e == null && (e = t > 2 ? 1 : 0), t && t < 3 && (e = Math.round(e * 100) + "%"), e;
});
return n[3] === 1 && (n.pop(), t = "hsl("), t + n.join() + ")";
},
toHexString: function(t) {
var n = this._rgba.slice(), r = n.pop();
return t && n.push(~~(r * 255)), "#" + e.map(n, function(e) {
return e = (e || 0).toString(16), e.length === 1 ? "0" + e : e;
}).join("");
},
toString: function() {
return this._rgba[3] === 0 ? "transparent" : this.toRgbaString();
}
}), s.fn.parse.prototype = s.fn, o.hsla.to = function(e) {
if (e[0] == null || e[1] == null || e[2] == null) return [ null, null, null, e[3] ];
var t = e[0] / 255, n = e[1] / 255, r = e[2] / 255, i = e[3], s = Math.max(t, n, r), o = Math.min(t, n, r), u = s - o, a = s + o, f = a * .5, l, c;
return o === s ? l = 0 : t === s ? l = 60 * (n - r) / u + 360 : n === s ? l = 60 * (r - t) / u + 120 : l = 60 * (t - n) / u + 240, u === 0 ? c = 0 : f <= .5 ? c = u / a : c = u / (2 - a), [ Math.round(l) % 360, c, f, i == null ? 1 : i ];
}, o.hsla.from = function(e) {
if (e[0] == null || e[1] == null || e[2] == null) return [ null, null, null, e[3] ];
var t = e[0] / 360, n = e[1], r = e[2], i = e[3], s = r <= .5 ? r * (1 + n) : r + n - r * n, o = 2 * r - s;
return [ Math.round(d(o, s, t + 1 / 3) * 255), Math.round(d(o, s, t) * 255), Math.round(d(o, s, t - 1 / 3) * 255), i ];
}, c(o, function(n, i) {
var o = i.props, u = i.cache, a = i.to, f = i.from;
s.fn[n] = function(n) {
a && !this[u] && (this[u] = a(this._rgba));
if (n === t) return this[u].slice();
var r, i = e.type(n), l = i === "array" || i === "object" ? n : arguments, p = this[u].slice();
return c(o, function(e, t) {
var n = l[i === "object" ? e : t.idx];
n == null && (n = p[t.idx]), p[t.idx] = h(n, t);
}), f ? (r = s(f(p)), r[u] = p, r) : s(p);
}, c(o, function(t, i) {
if (s.fn[t]) return;
s.fn[t] = function(s) {
var o = e.type(s), u = t === "alpha" ? this._hsla ? "hsla" : "rgba" : n, a = this[u](), f = a[i.idx], l;
return o === "undefined" ? f : (o === "function" && (s = s.call(this, f), o = e.type(s)), s == null && i.empty ? this : (o === "string" && (l = r.exec(s), l && (s = f + parseFloat(l[2]) * (l[1] === "+" ? 1 : -1))), a[i.idx] = s, this[u](a)));
};
});
}), s.hook = function(t) {
var n = t.split(" ");
c(n, function(t, n) {
e.cssHooks[n] = {
set: function(t, r) {
var i, o, u = "";
if (e.type(r) !== "string" || (i = p(r))) {
r = s(i || r);
if (!a.rgba && r._rgba[3] !== 1) {
o = n === "backgroundColor" ? t.parentNode : t;
while ((u === "" || u === "transparent") && o && o.style) try {
u = e.css(o, "backgroundColor"), o = o.parentNode;
} catch (f) {}
r = r.blend(u && u !== "transparent" ? u : "_default");
}
r = r.toRgbaString();
}
try {
t.style[n] = r;
} catch (f) {}
}
}, e.fx.step[n] = function(t) {
t.colorInit || (t.start = s(t.elem, n), t.end = s(t.end), t.colorInit = !0), e.cssHooks[n].set(t.elem, t.start.transition(t.end, t.pos));
};
});
}, s.hook(n), e.cssHooks.borderColor = {
expand: function(e) {
var t = {};
return c([ "Top", "Right", "Bottom", "Left" ], function(n, r) {
t["border" + r + "Color"] = e;
}), t;
}
}, l = e.Color.names = {
aqua: "#00ffff",
black: "#000000",
blue: "#0000ff",
fuchsia: "#ff00ff",
gray: "#808080",
green: "#008000",
lime: "#00ff00",
maroon: "#800000",
navy: "#000080",
olive: "#808000",
purple: "#800080",
red: "#ff0000",
silver: "#c0c0c0",
teal: "#008080",
white: "#ffffff",
yellow: "#ffff00",
transparent: [ null, null, null, 0 ],
_default: "#ffffff"
};
})(jQuery);

// transit.js

(function(e) {
var t, n = document.getElementsByTagName("head")[0].style, r = "transformProperty WebkitTransform OTransform msTransform MozTransform".split(" ");
for (var i = 0; i < r.length; i++) n[r[i]] !== undefined && (t = r[i]);
var s = !1;
jQuery.fn.extend({
rotate: function(t) {
if (this.length === 0 || typeof t == "undefined") return;
typeof t == "number" && (t = {
angle: t
});
var n = [];
for (var r = 0, i = this.length; r < i; r++) {
var s = this.get(r);
if (!s.Wilq32 || !s.Wilq32.PhotoEffect) {
var o = e.extend(!0, {}, t), u = (new Wilq32.PhotoEffect(s, o))._rootObj;
n.push(e(u));
} else s.Wilq32.PhotoEffect._handleRotation(t);
}
return n;
},
getRotateAngle: function() {
var e = [];
for (var t = 0, n = this.length; t < n; t++) {
var r = this.get(t);
r.Wilq32 && r.Wilq32.PhotoEffect && (e[t] = r.Wilq32.PhotoEffect._angle);
}
return e;
},
stopRotate: function() {
for (var e = 0, t = this.length; e < t; e++) {
var n = this.get(e);
n.Wilq32 && n.Wilq32.PhotoEffect && clearTimeout(n.Wilq32.PhotoEffect._timer);
}
}
}), Wilq32 = window.Wilq32 || {}, Wilq32.PhotoEffect = function() {
return t ? function(e, t) {
e.Wilq32 = {
PhotoEffect: this
}, this._img = this._rootObj = this._eventObj = e, this._handleRotation(t);
} : function(e, t) {
this._img = e, this._rootObj = document.createElement("span"), this._rootObj.style.display = "inline-block", this._rootObj.Wilq32 = {
PhotoEffect: this
}, e.parentNode.insertBefore(this._rootObj, e);
if (e.complete) this._Loader(t); else {
var n = this;
jQuery(this._img).bind("load", function() {
n._Loader(t);
});
}
};
}(), Wilq32.PhotoEffect.prototype = {
_setupParameters: function(e) {
this._parameters = this._parameters || {}, typeof this._angle != "number" && (this._angle = 0), typeof e.angle == "number" && (this._angle = e.angle), this._parameters.animateTo = typeof e.animateTo == "number" ? e.animateTo : this._angle, this._parameters.step = e.step || this._parameters.step || null, this._parameters.easing = e.easing || this._parameters.easing || function(e, t, n, r, i) {
return -r * ((t = t / i - 1) * t * t * t - 1) + n;
}, this._parameters.duration = e.duration || this._parameters.duration || 1e3, this._parameters.callback = e.callback || this._parameters.callback || function() {}, e.bind && e.bind != this._parameters.bind && this._BindEvents(e.bind);
},
_handleRotation: function(e) {
this._setupParameters(e), this._angle == this._parameters.animateTo ? this._rotate(this._angle) : this._animateStart();
},
_BindEvents: function(e) {
if (e && this._eventObj) {
if (this._parameters.bind) {
var t = this._parameters.bind;
for (var n in t) t.hasOwnProperty(n) && jQuery(this._eventObj).unbind(n, t[n]);
}
this._parameters.bind = e;
for (var n in e) e.hasOwnProperty(n) && jQuery(this._eventObj).bind(n, e[n]);
}
},
_Loader: function() {
return s ? function(e) {
var t = this._img.width, n = this._img.height;
this._img.parentNode.removeChild(this._img), this._vimage = this.createVMLNode("image"), this._vimage.src = this._img.src, this._vimage.style.height = n + "px", this._vimage.style.width = t + "px", this._vimage.style.position = "absolute", this._vimage.style.top = "0px", this._vimage.style.left = "0px", this._container = this.createVMLNode("group"), this._container.style.width = t, this._container.style.height = n, this._container.style.position = "absolute", this._container.setAttribute("coordsize", t - 1 + "," + (n - 1)), this._container.appendChild(this._vimage), this._rootObj.appendChild(this._container), this._rootObj.style.position = "relative", this._rootObj.style.width = t + "px", this._rootObj.style.height = n + "px", this._rootObj.setAttribute("id", this._img.getAttribute("id")), this._rootObj.className = this._img.className, this._eventObj = this._rootObj, this._handleRotation(e);
} : function(e) {
this._rootObj.setAttribute("id", this._img.getAttribute("id")), this._rootObj.className = this._img.className, this._width = this._img.width, this._height = this._img.height, this._widthHalf = this._width / 2, this._heightHalf = this._height / 2;
var t = Math.sqrt(this._height * this._height + this._width * this._width);
this._widthAdd = t - this._width, this._heightAdd = t - this._height, this._widthAddHalf = this._widthAdd / 2, this._heightAddHalf = this._heightAdd / 2, this._img.parentNode.removeChild(this._img), this._aspectW = (parseInt(this._img.style.width, 10) || this._width) / this._img.width, this._aspectH = (parseInt(this._img.style.height, 10) || this._height) / this._img.height, this._canvas = document.createElement("canvas"), this._canvas.setAttribute("width", this._width), this._canvas.style.position = "relative", this._canvas.style.left = -this._widthAddHalf + "px", this._canvas.style.top = -this._heightAddHalf + "px", this._canvas.Wilq32 = this._rootObj.Wilq32, this._rootObj.appendChild(this._canvas), this._rootObj.style.width = this._width + "px", this._rootObj.style.height = this._height + "px", this._eventObj = this._canvas, this._cnv = this._canvas.getContext("2d"), this._handleRotation(e);
};
}(),
_animateStart: function() {
this._timer && clearTimeout(this._timer), this._animateStartTime = +(new Date), this._animateStartAngle = this._angle, this._animate();
},
_animate: function() {
var e = +(new Date), t = e - this._animateStartTime > this._parameters.duration;
if (t && !this._parameters.animatedGif) clearTimeout(this._timer); else {
if (this._canvas || this._vimage || this._img) {
var n = this._parameters.easing(0, e - this._animateStartTime, this._animateStartAngle, this._parameters.animateTo - this._animateStartAngle, this._parameters.duration);
this._rotate(~~(n * 10) / 10);
}
this._parameters.step && this._parameters.step(this._angle);
var r = this;
this._timer = setTimeout(function() {
r._animate.call(r);
}, 10);
}
this._parameters.callback && t && (this._angle = this._parameters.animateTo, this._rotate(this._angle), this._parameters.callback.call(this._rootObj));
},
_rotate: function() {
var e = Math.PI / 180;
return s ? function(e) {
this._angle = e, this._container.style.rotation = e % 360 + "deg";
} : t ? function(e) {
this._angle = e, this._img.style[t] = "rotate(" + e % 360 + "deg)";
} : function(t) {
this._angle = t, t = t % 360 * e, this._canvas.width = this._width + this._widthAdd, this._canvas.height = this._height + this._heightAdd, this._cnv.translate(this._widthAddHalf, this._heightAddHalf), this._cnv.translate(this._widthHalf, this._heightHalf), this._cnv.rotate(t), this._cnv.translate(-this._widthHalf, -this._heightHalf), this._cnv.scale(this._aspectW, this._aspectH), this._cnv.drawImage(this._img, 0, 0);
};
}()
}, s && (Wilq32.PhotoEffect.prototype.createVMLNode = function() {
document.createStyleSheet().addRule(".rvml", "behavior:url(#default#VML)");
try {
return !document.namespaces.rvml && document.namespaces.add("rvml", "urn:schemas-microsoft-com:vml"), function(e) {
return document.createElement("<rvml:" + e + ' class="rvml">');
};
} catch (e) {
return function(e) {
return document.createElement("<" + e + ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">');
};
}
}());
})(jQuery);

// prefix.js

enyo.vendor = "", function() {
var e = "", t = [ "transform", "WebkitTransform", "MozTransform", "OTransform", "msTransform" ], n = document.createElement("div");
for (i = 0; i < t.length; i++) {
if (typeof n.style[t[i]] != "undefined") {
e = t[i];
break;
}
e = null;
}
switch (e) {
case "transform":
e = "";
break;
case "WebkitTransform":
e = "-webkit-";
break;
case "MozTransform":
e = "-moz-";
break;
case "OTransform":
e = "-o-";
break;
case "msTransform":
e = "-ms-";
}
enyo.vendor = e;
}();

// assorted.js

enyo.jq = function(e) {
return typeof e == "string" ? $("#" + e) : $("#" + e.getId());
}, enyo.hex = function(e, t, n) {
var r = function(e) {
var t = e.toString(16);
return t.length == 1 ? "0" + t : t;
};
return "#" + r(e) + r(t) + r(n);
}, enyo.rgb = function(e) {
var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
return t ? {
r: parseInt(t[1], 16),
g: parseInt(t[2], 16),
b: parseInt(t[3], 16)
} : null;
}, String.prototype.trim || (String.prototype.trim = function() {
return this.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}), enyo.prefetch = function(e) {
var t = document.createElement("link");
t.rel = "prerender", t.href = e, document.getElementsByTagName("head")[0].appendChild(t);
var n = document.createElement("link");
n.rel = "prefetch", n.href = e, document.getElementsByTagName("head")[0].appendChild(n);
};

// FittableLayout.js

enyo.kind({
name: "enyo.FittableLayout",
kind: "Layout",
calcFitIndex: function() {
for (var e = 0, t = this.container.children, n; n = t[e]; e++) if (n.fit && n.showing) return e;
},
getFitControl: function() {
var e = this.container.children, t = e[this.fitIndex];
return t && t.fit && t.showing || (this.fitIndex = this.calcFitIndex(), t = e[this.fitIndex]), t;
},
getLastControl: function() {
var e = this.container.children, t = e.length - 1, n = e[t];
while ((n = e[t]) && !n.showing) t--;
return n;
},
_reflow: function(e, t, n, r) {
this.container.addRemoveClass("enyo-stretch", !this.container.noStretch);
var i = this.getFitControl();
if (!i) return;
var s = 0, o = 0, u = 0, a, f = this.container.hasNode();
f && (a = enyo.dom.calcPaddingExtents(f), s = f[t] - (a[n] + a[r]));
var l = i.getBounds();
o = l[n] - (a && a[n] || 0);
var c = this.getLastControl();
if (c) {
var h = enyo.dom.getComputedBoxValue(c.hasNode(), "margin", r) || 0;
if (c != i) {
var p = c.getBounds(), d = l[n] + l[e], v = p[n] + p[e] + h;
u = v - d;
} else u = h;
}
var m = s - (o + u);
i.applyStyle(e, m + "px");
},
reflow: function() {
this.orient == "h" ? this._reflow("width", "clientWidth", "left", "right") : this._reflow("height", "clientHeight", "top", "bottom");
}
}), enyo.kind({
name: "enyo.FittableColumnsLayout",
kind: "FittableLayout",
orient: "h",
layoutClass: "enyo-fittable-columns-layout"
}), enyo.kind({
name: "enyo.FittableRowsLayout",
kind: "FittableLayout",
layoutClass: "enyo-fittable-rows-layout",
orient: "v"
});

// FittableRows.js

enyo.kind({
name: "enyo.FittableRows",
layoutKind: "FittableRowsLayout",
noStretch: !1
});

// FittableColumns.js

enyo.kind({
name: "enyo.FittableColumns",
layoutKind: "FittableColumnsLayout",
noStretch: !1
});

// FlyweightRepeater.js

enyo.kind({
name: "enyo.FlyweightRepeater",
published: {
count: 0,
noSelect: !1,
multiSelect: !1,
toggleSelected: !1,
clientClasses: "",
clientStyle: ""
},
events: {
onSetupItem: ""
},
bottomUp: !1,
components: [ {
kind: "Selection",
onSelect: "selectDeselect",
onDeselect: "selectDeselect"
}, {
name: "client"
} ],
rowOffset: 0,
create: function() {
this.inherited(arguments), this.noSelectChanged(), this.multiSelectChanged(), this.clientClassesChanged(), this.clientStyleChanged();
},
noSelectChanged: function() {
this.noSelect && this.$.selection.clear();
},
multiSelectChanged: function() {
this.$.selection.setMulti(this.multiSelect);
},
clientClassesChanged: function() {
this.$.client.setClasses(this.clientClasses);
},
clientStyleChanged: function() {
this.$.client.setStyle(this.clientStyle);
},
setupItem: function(e) {
this.doSetupItem({
index: e,
selected: this.isSelected(e)
});
},
generateChildHtml: function() {
var e = "";
this.index = null;
for (var t = 0, n = 0; t < this.count; t++) n = this.rowOffset + (this.bottomUp ? this.count - t - 1 : t), this.setupItem(n), this.$.client.setAttribute("data-enyo-index", n), e += this.inherited(arguments), this.$.client.teardownRender();
return e;
},
previewDomEvent: function(e) {
var t = this.index = this.rowForEvent(e);
e.rowIndex = e.index = t, e.flyweight = this;
},
decorateEvent: function(e, t, n) {
var r = t && t.index != null ? t.index : this.index;
t && r != null && (t.index = r, t.flyweight = this), this.inherited(arguments);
},
tap: function(e, t) {
if (this.noSelect) return;
this.toggleSelected ? this.$.selection.toggle(t.index) : this.$.selection.select(t.index);
},
selectDeselect: function(e, t) {
this.renderRow(t.key);
},
getSelection: function() {
return this.$.selection;
},
isSelected: function(e) {
return this.getSelection().isSelected(e);
},
renderRow: function(e) {
var t = this.fetchRowNode(e);
t && (this.setupItem(e), t.innerHTML = this.$.client.generateChildHtml(), this.$.client.teardownChildren());
},
fetchRowNode: function(e) {
if (this.hasNode()) {
var t = this.node.querySelectorAll('[data-enyo-index="' + e + '"]');
return t && t[0];
}
},
rowForEvent: function(e) {
var t = e.target, n = this.hasNode().id;
while (t && t.parentNode && t.id != n) {
var r = t.getAttribute && t.getAttribute("data-enyo-index");
if (r !== null) return Number(r);
t = t.parentNode;
}
return -1;
},
prepareRow: function(e) {
var t = this.fetchRowNode(e);
enyo.FlyweightRepeater.claimNode(this.$.client, t);
},
lockRow: function() {
this.$.client.teardownChildren();
},
performOnRow: function(e, t, n) {
t && (this.prepareRow(e), enyo.call(n || null, t), this.lockRow());
},
statics: {
claimNode: function(e, t) {
var n = t && t.querySelectorAll("#" + e.id);
n = n && n[0], e.generated = Boolean(n || !e.tag), e.node = n, e.node && e.rendered();
for (var r = 0, i = e.children, s; s = i[r]; r++) this.claimNode(s, t);
}
}
});

// List.js

enyo.kind({
name: "enyo.List",
kind: "Scroller",
classes: "enyo-list",
published: {
count: 0,
rowsPerPage: 50,
bottomUp: !1,
noSelect: !1,
multiSelect: !1,
toggleSelected: !1,
fixedHeight: !1
},
events: {
onSetupItem: ""
},
handlers: {
onAnimateFinish: "animateFinish"
},
rowHeight: 0,
listTools: [ {
name: "port",
classes: "enyo-list-port enyo-border-box",
components: [ {
name: "generator",
kind: "FlyweightRepeater",
canGenerate: !1,
components: [ {
tag: null,
name: "client"
} ]
}, {
name: "page0",
allowHtml: !0,
classes: "enyo-list-page"
}, {
name: "page1",
allowHtml: !0,
classes: "enyo-list-page"
} ]
} ],
create: function() {
this.pageHeights = [], this.inherited(arguments), this.getStrategy().translateOptimized = !0, this.bottomUpChanged(), this.noSelectChanged(), this.multiSelectChanged(), this.toggleSelectedChanged();
},
createStrategy: function() {
this.controlParentName = "strategy", this.inherited(arguments), this.createChrome(this.listTools), this.controlParentName = "client", this.discoverControlParent();
},
rendered: function() {
this.inherited(arguments), this.$.generator.node = this.$.port.hasNode(), this.$.generator.generated = !0, this.reset();
},
resizeHandler: function() {
this.inherited(arguments), this.refresh();
},
bottomUpChanged: function() {
this.$.generator.bottomUp = this.bottomUp, this.$.page0.applyStyle(this.pageBound, null), this.$.page1.applyStyle(this.pageBound, null), this.pageBound = this.bottomUp ? "bottom" : "top", this.hasNode() && this.reset();
},
noSelectChanged: function() {
this.$.generator.setNoSelect(this.noSelect);
},
multiSelectChanged: function() {
this.$.generator.setMultiSelect(this.multiSelect);
},
toggleSelectedChanged: function() {
this.$.generator.setToggleSelected(this.toggleSelected);
},
countChanged: function() {
this.hasNode() && this.updateMetrics();
},
updateMetrics: function() {
this.defaultPageHeight = this.rowsPerPage * (this.rowHeight || 100), this.pageCount = Math.ceil(this.count / this.rowsPerPage), this.portSize = 0;
for (var e = 0; e < this.pageCount; e++) this.portSize += this.getPageHeight(e);
this.adjustPortSize();
},
generatePage: function(e, t) {
this.page = e;
var n = this.$.generator.rowOffset = this.rowsPerPage * this.page, r = this.$.generator.count = Math.min(this.count - n, this.rowsPerPage), i = this.$.generator.generateChildHtml();
t.setContent(i);
var s = t.getBounds().height;
!this.rowHeight && s > 0 && (this.rowHeight = Math.floor(s / r), this.updateMetrics());
if (!this.fixedHeight) {
var o = this.getPageHeight(e);
o != s && s > 0 && (this.pageHeights[e] = s, this.portSize += s - o);
}
},
update: function(e) {
var t = !1, n = this.positionToPageInfo(e), r = n.pos + this.scrollerHeight / 2, i = Math.floor(r / Math.max(n.height, this.scrollerHeight) + .5) + n.no, s = i % 2 === 0 ? i : i - 1;
this.p0 != s && this.isPageInRange(s) && (this.generatePage(s, this.$.page0), this.positionPage(s, this.$.page0), this.p0 = s, t = !0), s = i % 2 === 0 ? Math.max(1, i - 1) : i, this.p1 != s && this.isPageInRange(s) && (this.generatePage(s, this.$.page1), this.positionPage(s, this.$.page1), this.p1 = s, t = !0), t && !this.fixedHeight && (this.adjustBottomPage(), this.adjustPortSize());
},
updateForPosition: function(e) {
this.update(this.calcPos(e));
},
calcPos: function(e) {
return this.bottomUp ? this.portSize - this.scrollerHeight - e : e;
},
adjustBottomPage: function() {
var e = this.p0 >= this.p1 ? this.$.page0 : this.$.page1;
this.positionPage(e.pageNo, e);
},
adjustPortSize: function() {
this.scrollerHeight = this.getBounds().height;
var e = Math.max(this.scrollerHeight, this.portSize);
this.$.port.applyStyle("height", e + "px");
},
positionPage: function(e, t) {
t.pageNo = e;
var n = this.pageToPosition(e);
t.applyStyle(this.pageBound, n + "px");
},
pageToPosition: function(e) {
var t = 0, n = e;
while (n > 0) n--, t += this.getPageHeight(n);
return t;
},
positionToPageInfo: function(e) {
var t = -1, n = this.calcPos(e), r = this.defaultPageHeight;
while (n >= 0) t++, r = this.getPageHeight(t), n -= r;
return {
no: t,
height: r,
pos: n + r
};
},
isPageInRange: function(e) {
return e == Math.max(0, Math.min(this.pageCount - 1, e));
},
getPageHeight: function(e) {
return this.pageHeights[e] || this.defaultPageHeight;
},
invalidatePages: function() {
this.p0 = this.p1 = null, this.$.page0.setContent(""), this.$.page1.setContent("");
},
invalidateMetrics: function() {
this.pageHeights = [], this.rowHeight = 0, this.updateMetrics();
},
scroll: function(e, t) {
var n = this.inherited(arguments);
return this.update(this.getScrollTop()), n;
},
scrollToBottom: function() {
this.update(this.getScrollBounds().maxTop), this.inherited(arguments);
},
setScrollTop: function(e) {
this.update(e), this.inherited(arguments), this.twiddle();
},
getScrollPosition: function() {
return this.calcPos(this.getScrollTop());
},
setScrollPosition: function(e) {
this.setScrollTop(this.calcPos(e));
},
scrollToRow: function(e) {
var t = Math.floor(e / this.rowsPerPage), n = e % this.rowsPerPage, r = this.pageToPosition(t);
this.updateForPosition(r), r = this.pageToPosition(t), this.setScrollPosition(r);
if (t == this.p0 || t == this.p1) {
var i = this.$.generator.fetchRowNode(e);
if (i) {
var s = i.offsetTop;
this.bottomUp && (s = this.getPageHeight(t) - i.offsetHeight - s);
var o = this.getScrollPosition() + s;
this.setScrollPosition(o);
}
}
},
scrollToStart: function() {
this[this.bottomUp ? "scrollToBottom" : "scrollToTop"]();
},
scrollToEnd: function() {
this[this.bottomUp ? "scrollToTop" : "scrollToBottom"]();
},
refresh: function() {
this.invalidatePages(), this.update(this.getScrollTop()), this.stabilize(), enyo.platform.android === 4 && this.twiddle();
},
reset: function() {
this.getSelection().clear(), this.invalidateMetrics(), this.invalidatePages(), this.stabilize(), this.scrollToStart();
},
getSelection: function() {
return this.$.generator.getSelection();
},
select: function(e, t) {
return this.getSelection().select(e, t);
},
deselect: function(e) {
return this.getSelection().deselect(e);
},
isSelected: function(e) {
return this.$.generator.isSelected(e);
},
renderRow: function(e) {
this.$.generator.renderRow(e);
},
prepareRow: function(e) {
this.$.generator.prepareRow(e);
},
lockRow: function() {
this.$.generator.lockRow();
},
performOnRow: function(e, t, n) {
this.$.generator.performOnRow(e, t, n);
},
animateFinish: function(e) {
return this.twiddle(), !0;
},
twiddle: function() {
var e = this.getStrategy();
enyo.call(e, "twiddle");
}
});

// PulldownList.js

enyo.kind({
name: "enyo.PulldownList",
kind: "List",
touch: !0,
pully: null,
pulldownTools: [ {
name: "pulldown",
classes: "enyo-list-pulldown",
components: [ {
name: "puller",
kind: "Puller"
} ]
} ],
events: {
onPullStart: "",
onPullCancel: "",
onPull: "",
onPullRelease: "",
onPullComplete: ""
},
handlers: {
onScrollStart: "scrollStartHandler",
onScrollStop: "scrollStopHandler",
ondragfinish: "dragfinish"
},
pullingMessage: "Pull down to refresh...",
pulledMessage: "Release to refresh...",
loadingMessage: "Loading...",
pullingIconClass: "enyo-puller-arrow enyo-puller-arrow-down",
pulledIconClass: "enyo-puller-arrow enyo-puller-arrow-up",
loadingIconClass: "",
create: function() {
var e = {
kind: "Puller",
showing: !1,
text: this.loadingMessage,
iconClass: this.loadingIconClass,
onCreate: "setPully"
};
this.listTools.splice(0, 0, e), this.inherited(arguments), this.setPulling();
},
initComponents: function() {
this.createChrome(this.pulldownTools), this.accel = enyo.dom.canAccelerate(), this.translation = this.accel ? "translate3d" : "translate", this.inherited(arguments);
},
setPully: function(e, t) {
this.pully = t.originator;
},
scrollStartHandler: function() {
this.firedPullStart = !1, this.firedPull = !1, this.firedPullCancel = !1;
},
scroll: function(e, t) {
var n = this.inherited(arguments);
this.completingPull && this.pully.setShowing(!1);
var r = this.getStrategy().$.scrollMath, i = r.y;
return r.isInOverScroll() && i > 0 && (enyo.dom.transformValue(this.$.pulldown, this.translation, "0," + i + "px" + (this.accel ? ",0" : "")), this.firedPullStart || (this.firedPullStart = !0, this.pullStart(), this.pullHeight = this.$.pulldown.getBounds().height), i > this.pullHeight && !this.firedPull && (this.firedPull = !0, this.firedPullCancel = !1, this.pull()), this.firedPull && !this.firedPullCancel && i < this.pullHeight && (this.firedPullCancel = !0, this.firedPull = !1, this.pullCancel())), n;
},
scrollStopHandler: function() {
this.completingPull && (this.completingPull = !1, this.doPullComplete());
},
dragfinish: function() {
if (this.firedPull) {
var e = this.getStrategy().$.scrollMath;
e.setScrollY(e.y - this.pullHeight), this.pullRelease();
}
},
completePull: function() {
this.completingPull = !0, this.$.strategy.$.scrollMath.setScrollY(this.pullHeight), this.$.strategy.$.scrollMath.start();
},
pullStart: function() {
this.setPulling(), this.pully.setShowing(!1), this.$.puller.setShowing(!0), this.doPullStart();
},
pull: function() {
this.setPulled(), this.doPull();
},
pullCancel: function() {
this.setPulling(), this.doPullCancel();
},
pullRelease: function() {
this.$.puller.setShowing(!1), this.pully.setShowing(!0), this.doPullRelease();
},
setPulling: function() {
this.$.puller.setText(this.pullingMessage), this.$.puller.setIconClass(this.pullingIconClass);
},
setPulled: function() {
this.$.puller.setText(this.pulledMessage), this.$.puller.setIconClass(this.pulledIconClass);
}
}), enyo.kind({
name: "enyo.Puller",
classes: "enyo-puller",
published: {
text: "",
iconClass: ""
},
events: {
onCreate: ""
},
components: [ {
name: "icon"
}, {
name: "text",
tag: "span",
classes: "enyo-puller-text"
} ],
create: function() {
this.inherited(arguments), this.doCreate(), this.textChanged(), this.iconClassChanged();
},
textChanged: function() {
this.$.text.setContent(this.text);
},
iconClassChanged: function() {
this.$.icon.setClasses(this.iconClass);
}
});

// AroundList.js

enyo.kind({
name: "enyo.AroundList",
kind: "enyo.List",
listTools: [ {
name: "port",
classes: "enyo-list-port enyo-border-box",
components: [ {
name: "aboveClient"
}, {
name: "generator",
kind: "enyo.FlyweightRepeater",
canGenerate: !1,
components: [ {
tag: null,
name: "client"
} ]
}, {
name: "page0",
allowHtml: !0,
classes: "enyo-list-page"
}, {
name: "page1",
allowHtml: !0,
classes: "enyo-list-page"
}, {
name: "belowClient"
} ]
} ],
aboveComponents: null,
initComponents: function() {
this.inherited(arguments), this.aboveComponents && this.$.aboveClient.createComponents(this.aboveComponents, {
owner: this.owner
}), this.belowComponents && this.$.belowClient.createComponents(this.belowComponents, {
owner: this.owner
});
},
updateMetrics: function() {
this.defaultPageHeight = this.rowsPerPage * (this.rowHeight || 100), this.pageCount = Math.ceil(this.count / this.rowsPerPage), this.aboveHeight = this.$.aboveClient.getBounds().height, this.belowHeight = this.$.belowClient.getBounds().height, this.portSize = this.aboveHeight + this.belowHeight;
for (var e = 0; e < this.pageCount; e++) this.portSize += this.getPageHeight(e);
this.adjustPortSize();
},
positionPage: function(e, t) {
t.pageNo = e;
var n = this.pageToPosition(e), r = this.bottomUp ? this.belowHeight : this.aboveHeight;
n += r, t.applyStyle(this.pageBound, n + "px");
},
scrollToContentStart: function() {
var e = this.bottomUp ? this.belowHeight : this.aboveHeight;
this.setScrollPosition(e);
}
});

// Slideable.js

enyo.kind({
name: "enyo.Slideable",
kind: "Control",
published: {
axis: "h",
value: 0,
unit: "px",
min: 0,
max: 0,
accelerated: "auto",
overMoving: !0,
draggable: !0
},
events: {
onAnimateFinish: "",
onChange: ""
},
preventDragPropagation: !1,
tools: [ {
kind: "Animator",
onStep: "animatorStep",
onEnd: "animatorComplete"
} ],
handlers: {
ondragstart: "dragstart",
ondrag: "drag",
ondragfinish: "dragfinish"
},
kDragScalar: 1,
dragEventProp: "dx",
unitModifier: !1,
canTransform: !1,
create: function() {
this.inherited(arguments), this.acceleratedChanged(), this.transformChanged(), this.axisChanged(), this.valueChanged(), this.addClass("enyo-slideable");
},
initComponents: function() {
this.createComponents(this.tools), this.inherited(arguments);
},
rendered: function() {
this.inherited(arguments), this.canModifyUnit(), this.updateDragScalar();
},
resizeHandler: function() {
this.inherited(arguments), this.updateDragScalar();
},
canModifyUnit: function() {
if (!this.canTransform) {
var e = this.getInitialStyleValue(this.hasNode(), this.boundary);
e.match(/px/i) && this.unit === "%" && (this.unitModifier = this.getBounds()[this.dimension]);
}
},
getInitialStyleValue: function(e, t) {
var n = enyo.dom.getComputedStyle(e);
return n ? n.getPropertyValue(t) : e && e.currentStyle ? e.currentStyle[t] : "0";
},
updateBounds: function(e, t) {
var n = {};
n[this.boundary] = e, this.setBounds(n, this.unit), this.setInlineStyles(e, t);
},
updateDragScalar: function() {
if (this.unit == "%") {
var e = this.getBounds()[this.dimension];
this.kDragScalar = e ? 100 / e : 1, this.canTransform || this.updateBounds(this.value, 100);
}
},
transformChanged: function() {
this.canTransform = enyo.dom.canTransform();
},
acceleratedChanged: function() {
enyo.platform.android > 2 || enyo.dom.accelerate(this, this.accelerated);
},
axisChanged: function() {
var e = this.axis == "h";
this.dragMoveProp = e ? "dx" : "dy", this.shouldDragProp = e ? "horizontal" : "vertical", this.transform = e ? "translateX" : "translateY", this.dimension = e ? "width" : "height", this.boundary = e ? "left" : "top";
},
setInlineStyles: function(e, t) {
var n = {};
this.unitModifier ? (n[this.boundary] = this.percentToPixels(e, this.unitModifier), n[this.dimension] = this.unitModifier, this.setBounds(n)) : (t ? n[this.dimension] = t : n[this.boundary] = e, this.setBounds(n, this.unit));
},
valueChanged: function(e) {
var t = this.value;
this.isOob(t) && !this.isAnimating() && (this.value = this.overMoving ? this.dampValue(t) : this.clampValue(t)), enyo.platform.android > 2 && (this.value ? (e === 0 || e === undefined) && enyo.dom.accelerate(this, this.accelerated) : enyo.dom.accelerate(this, !1)), this.canTransform ? enyo.dom.transformValue(this, this.transform, this.value + this.unit) : this.setInlineStyles(this.value, !1), this.doChange();
},
getAnimator: function() {
return this.$.animator;
},
isAtMin: function() {
return this.value <= this.calcMin();
},
isAtMax: function() {
return this.value >= this.calcMax();
},
calcMin: function() {
return this.min;
},
calcMax: function() {
return this.max;
},
clampValue: function(e) {
var t = this.calcMin(), n = this.calcMax();
return Math.max(t, Math.min(e, n));
},
dampValue: function(e) {
return this.dampBound(this.dampBound(e, this.min, 1), this.max, -1);
},
dampBound: function(e, t, n) {
var r = e;
return r * n < t * n && (r = t + (r - t) / 4), r;
},
percentToPixels: function(e, t) {
return Math.floor(t / 100 * e);
},
pixelsToPercent: function(e) {
var t = this.unitModifier ? this.getBounds()[this.dimension] : this.container.getBounds()[this.dimension];
return e / t * 100;
},
shouldDrag: function(e) {
return this.draggable && e[this.shouldDragProp];
},
isOob: function(e) {
return e > this.calcMax() || e < this.calcMin();
},
dragstart: function(e, t) {
if (this.shouldDrag(t)) return t.preventDefault(), this.$.animator.stop(), t.dragInfo = {}, this.dragging = !0, this.drag0 = this.value, this.dragd0 = 0, this.preventDragPropagation;
},
drag: function(e, t) {
if (this.dragging) {
t.preventDefault();
var n = this.canTransform ? t[this.dragMoveProp] * this.kDragScalar : this.pixelsToPercent(t[this.dragMoveProp]), r = this.drag0 + n, i = n - this.dragd0;
return this.dragd0 = n, i && (t.dragInfo.minimizing = i < 0), this.setValue(r), this.preventDragPropagation;
}
},
dragfinish: function(e, t) {
if (this.dragging) return this.dragging = !1, this.completeDrag(t), t.preventTap(), this.preventDragPropagation;
},
completeDrag: function(e) {
this.value !== this.calcMax() && this.value != this.calcMin() && this.animateToMinMax(e.dragInfo.minimizing);
},
isAnimating: function() {
return this.$.animator.isAnimating();
},
play: function(e, t) {
this.$.animator.play({
startValue: e,
endValue: t,
node: this.hasNode()
});
},
animateTo: function(e) {
this.play(this.value, e);
},
animateToMin: function() {
this.animateTo(this.calcMin());
},
animateToMax: function() {
this.animateTo(this.calcMax());
},
animateToMinMax: function(e) {
e ? this.animateToMin() : this.animateToMax();
},
animatorStep: function(e) {
return this.setValue(e.value), !0;
},
animatorComplete: function(e) {
return this.doAnimateFinish(e), !0;
},
toggleMinMax: function() {
this.animateToMinMax(!this.isAtMin());
}
});

// Arranger.js

enyo.kind({
name: "enyo.Arranger",
kind: "Layout",
layoutClass: "enyo-arranger",
accelerated: "auto",
dragProp: "ddx",
dragDirectionProp: "xDirection",
canDragProp: "horizontal",
incrementalPoints: !1,
destroy: function() {
var e = this.container.getPanels();
for (var t = 0, n; n = e[t]; t++) n._arranger = null;
this.inherited(arguments);
},
arrange: function(e, t) {},
size: function() {},
start: function() {
var e = this.container.fromIndex, t = this.container.toIndex, n = this.container.transitionPoints = [ e ];
if (this.incrementalPoints) {
var r = Math.abs(t - e) - 2, i = e;
while (r >= 0) i += t < e ? -1 : 1, n.push(i), r--;
}
n.push(this.container.toIndex);
},
finish: function() {},
calcArrangementDifference: function(e, t, n, r) {},
canDragEvent: function(e) {
return e[this.canDragProp];
},
calcDragDirection: function(e) {
return e[this.dragDirectionProp];
},
calcDrag: function(e) {
return e[this.dragProp];
},
drag: function(e, t, n, r, i) {
var s = this.measureArrangementDelta(-e, t, n, r, i);
return s;
},
measureArrangementDelta: function(e, t, n, r, i) {
var s = this.calcArrangementDifference(t, n, r, i), o = s ? e / Math.abs(s) : 0;
return o *= this.container.fromIndex > this.container.toIndex ? -1 : 1, o;
},
_arrange: function(e) {
this.containerBounds || this.reflow();
var t = this.getOrderedControls(e);
this.arrange(t, e);
},
arrangeControl: function(e, t) {
e._arranger = enyo.mixin(e._arranger || {}, t);
},
flow: function() {
this.c$ = [].concat(this.container.getPanels()), this.controlsIndex = 0;
for (var e = 0, t = this.container.getPanels(), n; n = t[e]; e++) {
enyo.dom.accelerate(n, this.accelerated);
if (enyo.platform.safari) {
var r = n.children;
for (var i = 0, s; s = r[i]; i++) enyo.dom.accelerate(s, this.accelerated);
}
}
},
reflow: function() {
var e = this.container.hasNode();
this.containerBounds = e ? {
width: e.clientWidth,
height: e.clientHeight
} : {}, this.size();
},
flowArrangement: function() {
var e = this.container.arrangement;
if (e) for (var t = 0, n = this.container.getPanels(), r; r = n[t]; t++) this.flowControl(r, e[t]);
},
flowControl: function(e, t) {
enyo.Arranger.positionControl(e, t);
var n = t.opacity;
n != null && enyo.Arranger.opacifyControl(e, n);
},
getOrderedControls: function(e) {
var t = Math.floor(e), n = t - this.controlsIndex, r = n > 0, i = this.c$ || [];
for (var s = 0; s < Math.abs(n); s++) r ? i.push(i.shift()) : i.unshift(i.pop());
return this.controlsIndex = t, i;
},
statics: {
positionControl: function(e, t, n) {
var r = n || "px";
if (!this.updating) if (enyo.dom.canTransform() && !enyo.platform.android) {
var i = t.left, s = t.top;
i = enyo.isString(i) ? i : i && i + r, s = enyo.isString(s) ? s : s && s + r, enyo.dom.transform(e, {
translateX: i || null,
translateY: s || null
});
} else e.setBounds(t, n);
},
opacifyControl: function(e, t) {
var n = t;
n = n > .99 ? 1 : n < .01 ? 0 : n, enyo.platform.ie < 9 ? e.applyStyle("filter", "progid:DXImageTransform.Microsoft.Alpha(Opacity=" + n * 100 + ")") : e.applyStyle("opacity", n);
}
}
});

// CardArranger.js

enyo.kind({
name: "enyo.CardArranger",
kind: "Arranger",
layoutClass: "enyo-arranger enyo-arranger-fit",
calcArrangementDifference: function(e, t, n, r) {
return this.containerBounds.width;
},
arrange: function(e, t) {
for (var n = 0, r, i, s; r = e[n]; n++) s = n === 0 ? 1 : 0, this.arrangeControl(r, {
opacity: s
});
},
start: function() {
this.inherited(arguments);
var e = this.container.getPanels();
for (var t = 0, n; n = e[t]; t++) {
var r = n.showing;
n.setShowing(t == this.container.fromIndex || t == this.container.toIndex), n.showing && !r && n.resized();
}
},
finish: function() {
this.inherited(arguments);
var e = this.container.getPanels();
for (var t = 0, n; n = e[t]; t++) n.setShowing(t == this.container.toIndex);
},
destroy: function() {
var e = this.container.getPanels();
for (var t = 0, n; n = e[t]; t++) enyo.Arranger.opacifyControl(n, 1), n.showing || n.setShowing(!0);
this.inherited(arguments);
}
});

// CardSlideInArranger.js

enyo.kind({
name: "enyo.CardSlideInArranger",
kind: "CardArranger",
start: function() {
var e = this.container.getPanels();
for (var t = 0, n; n = e[t]; t++) {
var r = n.showing;
n.setShowing(t == this.container.fromIndex || t == this.container.toIndex), n.showing && !r && n.resized();
}
var i = this.container.fromIndex;
t = this.container.toIndex, this.container.transitionPoints = [ t + "." + i + ".s", t + "." + i + ".f" ];
},
finish: function() {
this.inherited(arguments);
var e = this.container.getPanels();
for (var t = 0, n; n = e[t]; t++) n.setShowing(t == this.container.toIndex);
},
arrange: function(e, t) {
var n = t.split("."), r = n[0], i = n[1], s = n[2] == "s", o = this.containerBounds.width;
for (var u = 0, a = this.container.getPanels(), f, l; f = a[u]; u++) l = o, i == u && (l = s ? 0 : -o), r == u && (l = s ? o : 0), i == u && i == r && (l = 0), this.arrangeControl(f, {
left: l
});
},
destroy: function() {
var e = this.container.getPanels();
for (var t = 0, n; n = e[t]; t++) enyo.Arranger.positionControl(n, {
left: null
});
this.inherited(arguments);
}
});

// CarouselArranger.js

enyo.kind({
name: "enyo.CarouselArranger",
kind: "Arranger",
size: function() {
var e = this.container.getPanels(), t = this.containerPadding = this.container.hasNode() ? enyo.dom.calcPaddingExtents(this.container.node) : {}, n = this.containerBounds, r, i, s, o, u;
n.height -= t.top + t.bottom, n.width -= t.left + t.right;
var a;
for (r = 0, s = 0; u = e[r]; r++) o = enyo.dom.calcMarginExtents(u.hasNode()), u.width = u.getBounds().width, u.marginWidth = o.right + o.left, s += (u.fit ? 0 : u.width) + u.marginWidth, u.fit && (a = u);
if (a) {
var f = n.width - s;
a.width = f >= 0 ? f : a.width;
}
for (r = 0, i = t.left; u = e[r]; r++) u.setBounds({
top: t.top,
bottom: t.bottom,
width: u.fit ? u.width : null
});
},
arrange: function(e, t) {
this.container.wrap ? this.arrangeWrap(e, t) : this.arrangeNoWrap(e, t);
},
arrangeNoWrap: function(e, t) {
var n, r, i, s, o = this.container.getPanels(), u = this.container.clamp(t), a = this.containerBounds.width;
for (n = u, i = 0; s = o[n]; n++) {
i += s.width + s.marginWidth;
if (i > a) break;
}
var f = a - i, l = 0;
if (f > 0) {
var c = u;
for (n = u - 1, r = 0; s = o[n]; n--) {
r += s.width + s.marginWidth;
if (f - r <= 0) {
l = f - r, u = n;
break;
}
}
}
var h, p;
for (n = 0, p = this.containerPadding.left + l; s = o[n]; n++) h = s.width + s.marginWidth, n < u ? this.arrangeControl(s, {
left: -h
}) : (this.arrangeControl(s, {
left: Math.floor(p)
}), p += h);
},
arrangeWrap: function(e, t) {
for (var n = 0, r = this.containerPadding.left, i, s; s = e[n]; n++) this.arrangeControl(s, {
left: r
}), r += s.width + s.marginWidth;
},
calcArrangementDifference: function(e, t, n, r) {
var i = Math.abs(e % this.c$.length);
return t[i].left - r[i].left;
},
destroy: function() {
var e = this.container.getPanels();
for (var t = 0, n; n = e[t]; t++) enyo.Arranger.positionControl(n, {
left: null,
top: null
}), n.applyStyle("top", null), n.applyStyle("bottom", null), n.applyStyle("left", null), n.applyStyle("width", null);
this.inherited(arguments);
}
});

// CollapsingArranger.js

enyo.kind({
name: "enyo.CollapsingArranger",
kind: "CarouselArranger",
size: function() {
this.clearLastSize(), this.inherited(arguments);
},
clearLastSize: function() {
for (var e = 0, t = this.container.getPanels(), n; n = t[e]; e++) n._fit && e != t.length - 1 && (n.applyStyle("width", null), n._fit = null);
},
arrange: function(e, t) {
var n = this.container.getPanels();
for (var r = 0, i = this.containerPadding.left, s, o; o = n[r]; r++) this.arrangeControl(o, {
left: i
}), r >= t && (i += o.width + o.marginWidth), r == n.length - 1 && t < 0 && this.arrangeControl(o, {
left: i - t
});
},
calcArrangementDifference: function(e, t, n, r) {
var i = this.container.getPanels().length - 1;
return Math.abs(r[i].left - t[i].left);
},
flowControl: function(e, t) {
this.inherited(arguments);
if (this.container.realtimeFit) {
var n = this.container.getPanels(), r = n.length - 1, i = n[r];
e == i && this.fitControl(e, t.left);
}
},
finish: function() {
this.inherited(arguments);
if (!this.container.realtimeFit && this.containerBounds) {
var e = this.container.getPanels(), t = this.container.arrangement, n = e.length - 1, r = e[n];
this.fitControl(r, t[n].left);
}
},
fitControl: function(e, t) {
e._fit = !0, e.applyStyle("width", this.containerBounds.width - t + "px"), e.resized();
}
});

// OtherArrangers.js

enyo.kind({
name: "enyo.LeftRightArranger",
kind: "Arranger",
margin: 40,
axisSize: "width",
offAxisSize: "height",
axisPosition: "left",
constructor: function() {
this.inherited(arguments), this.margin = this.container.margin != null ? this.container.margin : this.margin;
},
size: function() {
var e = this.container.getPanels(), t = this.containerBounds[this.axisSize], n = t - this.margin - this.margin;
for (var r = 0, i, s; s = e[r]; r++) i = {}, i[this.axisSize] = n, i[this.offAxisSize] = "100%", s.setBounds(i);
},
start: function() {
this.inherited(arguments);
var e = this.container.fromIndex, t = this.container.toIndex, n = this.getOrderedControls(t), r = Math.floor(n.length / 2);
for (var i = 0, s; s = n[i]; i++) e > t ? i == n.length - r ? s.applyStyle("z-index", 0) : s.applyStyle("z-index", 1) : i == n.length - 1 - r ? s.applyStyle("z-index", 0) : s.applyStyle("z-index", 1);
},
arrange: function(e, t) {
var n, r, i, s;
if (this.container.getPanels().length == 1) {
s = {}, s[this.axisPosition] = this.margin, this.arrangeControl(this.container.getPanels()[0], s);
return;
}
var o = Math.floor(this.container.getPanels().length / 2), u = this.getOrderedControls(Math.floor(t) - o), a = this.containerBounds[this.axisSize] - this.margin - this.margin, f = this.margin - a * o;
for (n = 0; r = u[n]; n++) s = {}, s[this.axisPosition] = f, this.arrangeControl(r, s), f += a;
},
calcArrangementDifference: function(e, t, n, r) {
if (this.container.getPanels().length == 1) return 0;
var i = Math.abs(e % this.c$.length);
return t[i][this.axisPosition] - r[i][this.axisPosition];
},
destroy: function() {
var e = this.container.getPanels();
for (var t = 0, n; n = e[t]; t++) enyo.Arranger.positionControl(n, {
left: null,
top: null
}), enyo.Arranger.opacifyControl(n, 1), n.applyStyle("left", null), n.applyStyle("top", null), n.applyStyle("height", null), n.applyStyle("width", null);
this.inherited(arguments);
}
}), enyo.kind({
name: "enyo.TopBottomArranger",
kind: "LeftRightArranger",
dragProp: "ddy",
dragDirectionProp: "yDirection",
canDragProp: "vertical",
axisSize: "height",
offAxisSize: "width",
axisPosition: "top"
}), enyo.kind({
name: "enyo.SpiralArranger",
kind: "Arranger",
incrementalPoints: !0,
inc: 20,
size: function() {
var e = this.container.getPanels(), t = this.containerBounds, n = this.controlWidth = t.width / 3, r = this.controlHeight = t.height / 3;
for (var i = 0, s; s = e[i]; i++) s.setBounds({
width: n,
height: r
});
},
arrange: function(e, t) {
var n = this.inc;
for (var r = 0, i = e.length, s; s = e[r]; r++) {
var o = Math.cos(r / i * 2 * Math.PI) * r * n + this.controlWidth, u = Math.sin(r / i * 2 * Math.PI) * r * n + this.controlHeight;
this.arrangeControl(s, {
left: o,
top: u
});
}
},
start: function() {
this.inherited(arguments);
var e = this.getOrderedControls(this.container.toIndex);
for (var t = 0, n; n = e[t]; t++) n.applyStyle("z-index", e.length - t);
},
calcArrangementDifference: function(e, t, n, r) {
return this.controlWidth;
},
destroy: function() {
var e = this.container.getPanels();
for (var t = 0, n; n = e[t]; t++) n.applyStyle("z-index", null), enyo.Arranger.positionControl(n, {
left: null,
top: null
}), n.applyStyle("left", null), n.applyStyle("top", null), n.applyStyle("height", null), n.applyStyle("width", null);
this.inherited(arguments);
}
}), enyo.kind({
name: "enyo.GridArranger",
kind: "Arranger",
incrementalPoints: !0,
colWidth: 100,
colHeight: 100,
size: function() {
var e = this.container.getPanels(), t = this.colWidth, n = this.colHeight;
for (var r = 0, i; i = e[r]; r++) i.setBounds({
width: t,
height: n
});
},
arrange: function(e, t) {
var n = this.colWidth, r = this.colHeight, i = Math.max(1, Math.floor(this.containerBounds.width / n)), s;
for (var o = 0, u = 0; u < e.length; o++) for (var a = 0; a < i && (s = e[u]); a++, u++) this.arrangeControl(s, {
left: n * a,
top: r * o
});
},
flowControl: function(e, t) {
this.inherited(arguments), enyo.Arranger.opacifyControl(e, t.top % this.colHeight !== 0 ? .25 : 1);
},
calcArrangementDifference: function(e, t, n, r) {
return this.colWidth;
},
destroy: function() {
var e = this.container.getPanels();
for (var t = 0, n; n = e[t]; t++) enyo.Arranger.positionControl(n, {
left: null,
top: null
}), n.applyStyle("left", null), n.applyStyle("top", null), n.applyStyle("height", null), n.applyStyle("width", null);
this.inherited(arguments);
}
});

// Panels.js

enyo.kind({
name: "enyo.Panels",
classes: "enyo-panels",
published: {
index: 0,
draggable: !0,
animate: !0,
wrap: !1,
arrangerKind: "CardArranger",
narrowFit: !0
},
events: {
onTransitionStart: "",
onTransitionFinish: ""
},
handlers: {
ondragstart: "dragstart",
ondrag: "drag",
ondragfinish: "dragfinish",
onscroll: "domScroll"
},
tools: [ {
kind: "Animator",
onStep: "step",
onEnd: "completed"
} ],
fraction: 0,
create: function() {
this.transitionPoints = [], this.inherited(arguments), this.arrangerKindChanged(), this.narrowFitChanged(), this.indexChanged(), this.setAttribute("onscroll", enyo.bubbler);
},
domScroll: function(e, t) {
this.hasNode() && this.node.scrollLeft > 0 && (this.node.scrollLeft = 0);
},
initComponents: function() {
this.createChrome(this.tools), this.inherited(arguments);
},
arrangerKindChanged: function() {
this.setLayoutKind(this.arrangerKind);
},
narrowFitChanged: function() {
this.addRemoveClass("enyo-panels-fit-narrow", this.narrowFit);
},
removeControl: function(e) {
this.inherited(arguments), this.controls.length > 0 && this.isPanel(e) && (this.setIndex(Math.max(this.index - 1, 0)), this.flow(), this.reflow());
},
isPanel: function() {
return !0;
},
flow: function() {
this.arrangements = [], this.inherited(arguments);
},
reflow: function() {
this.arrangements = [], this.inherited(arguments), this.refresh();
},
getPanels: function() {
var e = this.controlParent || this;
return e.children;
},
getActive: function() {
var e = this.getPanels(), t = this.index % e.length;
return t < 0 ? t += e.length : enyo.nop, e[t];
},
getAnimator: function() {
return this.$.animator;
},
setIndex: function(e) {
this.setPropertyValue("index", e, "indexChanged");
},
setIndexDirect: function(e) {
this.setIndex(e), this.completed();
},
previous: function() {
this.setIndex(this.index - 1);
},
next: function() {
this.setIndex(this.index + 1);
},
clamp: function(e) {
var t = this.getPanels().length - 1;
return this.wrap ? e : Math.max(0, Math.min(e, t));
},
indexChanged: function(e) {
this.lastIndex = e, this.index = this.clamp(this.index), !this.dragging && this.$.animator && (this.$.animator.isAnimating() && this.completed(), this.$.animator.stop(), this.hasNode() && (this.animate ? (this.startTransition(), this.$.animator.play({
startValue: this.fraction
})) : this.refresh()));
},
step: function(e) {
this.fraction = e.value, this.stepTransition();
},
completed: function() {
this.$.animator.isAnimating() && this.$.animator.stop(), this.fraction = 1, this.stepTransition(), this.finishTransition();
},
dragstart: function(e, t) {
if (this.draggable && this.layout && this.layout.canDragEvent(t)) return t.preventDefault(), this.dragstartTransition(t), this.dragging = !0, this.$.animator.stop(), !0;
},
drag: function(e, t) {
this.dragging && (t.preventDefault(), this.dragTransition(t));
},
dragfinish: function(e, t) {
this.dragging && (this.dragging = !1, t.preventTap(), this.dragfinishTransition(t));
},
dragstartTransition: function(e) {
if (!this.$.animator.isAnimating()) {
var t = this.fromIndex = this.index;
this.toIndex = t - (this.layout ? this.layout.calcDragDirection(e) : 0);
} else this.verifyDragTransition(e);
this.fromIndex = this.clamp(this.fromIndex), this.toIndex = this.clamp(this.toIndex), this.fireTransitionStart(), this.layout && this.layout.start();
},
dragTransition: function(e) {
var t = this.layout ? this.layout.calcDrag(e) : 0, n = this.transitionPoints, r = n[0], i = n[n.length - 1], s = this.fetchArrangement(r), o = this.fetchArrangement(i), u = this.layout ? this.layout.drag(t, r, s, i, o) : 0, a = t && !u;
a, this.fraction += u;
var f = this.fraction;
if (f > 1 || f < 0 || a) (f > 0 || a) && this.dragfinishTransition(e), this.dragstartTransition(e), this.fraction = 0;
this.stepTransition();
},
dragfinishTransition: function(e) {
this.verifyDragTransition(e), this.setIndex(this.toIndex), this.dragging && this.fireTransitionFinish();
},
verifyDragTransition: function(e) {
var t = this.layout ? this.layout.calcDragDirection(e) : 0, n = Math.min(this.fromIndex, this.toIndex), r = Math.max(this.fromIndex, this.toIndex);
if (t > 0) {
var i = n;
n = r, r = i;
}
n != this.fromIndex && (this.fraction = 1 - this.fraction), this.fromIndex = n, this.toIndex = r;
},
refresh: function() {
this.$.animator && this.$.animator.isAnimating() && this.$.animator.stop(), this.startTransition(), this.fraction = 1, this.stepTransition(), this.finishTransition();
},
startTransition: function() {
this.fromIndex = this.fromIndex != null ? this.fromIndex : this.lastIndex || 0, this.toIndex = this.toIndex != null ? this.toIndex : this.index, this.layout && this.layout.start(), this.fireTransitionStart();
},
finishTransition: function() {
this.layout && this.layout.finish(), this.transitionPoints = [], this.fraction = 0, this.fromIndex = this.toIndex = null, this.fireTransitionFinish();
},
fireTransitionStart: function() {
var e = this.startTransitionInfo;
this.hasNode() && (!e || e.fromIndex != this.fromIndex || e.toIndex != this.toIndex) && (this.startTransitionInfo = {
fromIndex: this.fromIndex,
toIndex: this.toIndex
}, this.doTransitionStart(enyo.clone(this.startTransitionInfo)));
},
fireTransitionFinish: function() {
var e = this.finishTransitionInfo;
this.hasNode() && (!e || e.fromIndex != this.lastIndex || e.toIndex != this.index) && (this.finishTransitionInfo = {
fromIndex: this.lastIndex,
toIndex: this.index
}, this.doTransitionFinish(enyo.clone(this.finishTransitionInfo))), this.lastIndex = this.index;
},
stepTransition: function() {
if (this.hasNode()) {
var e = this.transitionPoints, t = (this.fraction || 0) * (e.length - 1), n = Math.floor(t);
t -= n;
var r = e[n], i = e[n + 1], s = this.fetchArrangement(r), o = this.fetchArrangement(i);
this.arrangement = s && o ? enyo.Panels.lerp(s, o, t) : s || o, this.arrangement && this.layout && this.layout.flowArrangement();
}
},
fetchArrangement: function(e) {
return e != null && !this.arrangements[e] && this.layout && (this.layout._arrange(e), this.arrangements[e] = this.readArrangement(this.getPanels())), this.arrangements[e];
},
readArrangement: function(e) {
var t = [];
for (var n = 0, r = e, i; i = r[n]; n++) t.push(enyo.clone(i._arranger));
return t;
},
statics: {
isScreenNarrow: function() {
return enyo.dom.getWindowWidth() <= 800;
},
lerp: function(e, t, n) {
var r = [];
for (var i = 0, s = enyo.keys(e), o; o = s[i]; i++) r.push(this.lerpObject(e[o], t[o], n));
return r;
},
lerpObject: function(e, t, n) {
var r = enyo.clone(e), i, s;
if (t) for (var o in e) i = e[o], s = t[o], i != s && (r[o] = i - (i - s) * n);
return r;
}
}
});

// Node.js

enyo.kind({
name: "enyo.Node",
published: {
expandable: !1,
expanded: !1,
icon: "",
onlyIconExpands: !1,
selected: !1
},
style: "padding: 0 0 0 16px;",
content: "Node",
defaultKind: "Node",
classes: "enyo-node",
components: [ {
name: "icon",
kind: "Image",
showing: !1
}, {
kind: "Control",
name: "caption",
Xtag: "span",
style: "display: inline-block; padding: 4px;",
allowHtml: !0
}, {
kind: "Control",
name: "extra",
tag: "span",
allowHtml: !0
} ],
childClient: [ {
kind: "Control",
name: "box",
classes: "enyo-node-box",
Xstyle: "border: 1px solid orange;",
components: [ {
kind: "Control",
name: "client",
classes: "enyo-node-client",
Xstyle: "border: 1px solid lightblue;"
} ]
} ],
handlers: {
ondblclick: "dblclick"
},
events: {
onNodeTap: "nodeTap",
onNodeDblClick: "nodeDblClick",
onExpand: "nodeExpand",
onDestroyed: "nodeDestroyed"
},
create: function() {
this.inherited(arguments), this.selectedChanged(), this.iconChanged();
},
destroy: function() {
this.doDestroyed(), this.inherited(arguments);
},
initComponents: function() {
this.expandable && (this.kindComponents = this.kindComponents.concat(this.childClient)), this.inherited(arguments);
},
contentChanged: function() {
this.$.caption.setContent(this.content);
},
iconChanged: function() {
this.$.icon.setSrc(this.icon), this.$.icon.setShowing(Boolean(this.icon));
},
selectedChanged: function() {
this.addRemoveClass("enyo-selected", this.selected);
},
rendered: function() {
this.inherited(arguments), this.expandable && !this.expanded && this.quickCollapse();
},
addNodes: function(e) {
this.destroyClientControls();
for (var t = 0, n; n = e[t]; t++) this.createComponent(n);
this.$.client.render();
},
addTextNodes: function(e) {
this.destroyClientControls();
for (var t = 0, n; n = e[t]; t++) this.createComponent({
content: n
});
this.$.client.render();
},
tap: function(e, t) {
return this.onlyIconExpands ? t.target == this.$.icon.hasNode() ? this.toggleExpanded() : this.doNodeTap() : (this.toggleExpanded(), this.doNodeTap()), !0;
},
dblclick: function(e, t) {
return this.doNodeDblClick(), !0;
},
toggleExpanded: function() {
this.setExpanded(!this.expanded);
},
quickCollapse: function() {
this.removeClass("enyo-animate"), this.$.box.applyStyle("height", "0");
var e = this.$.client.getBounds().height;
this.$.client.setBounds({
top: -e
});
},
_expand: function() {
this.addClass("enyo-animate");
var e = this.$.client.getBounds().height;
this.$.box.setBounds({
height: e
}), this.$.client.setBounds({
top: 0
}), setTimeout(enyo.bind(this, function() {
this.expanded && (this.removeClass("enyo-animate"), this.$.box.applyStyle("height", "auto"));
}), 225);
},
_collapse: function() {
this.removeClass("enyo-animate");
var e = this.$.client.getBounds().height;
this.$.box.setBounds({
height: e
}), setTimeout(enyo.bind(this, function() {
this.addClass("enyo-animate"), this.$.box.applyStyle("height", "0"), this.$.client.setBounds({
top: -e
});
}), 25);
},
expandedChanged: function(e) {
if (!this.expandable) this.expanded = !1; else {
var t = {
expanded: this.expanded
};
this.doExpand(t), t.wait || this.effectExpanded();
}
},
effectExpanded: function() {
this.$.client && (this.expanded ? this._expand() : this._collapse());
}
});

// ImageView.js

enyo.kind({
name: "enyo.ImageView",
kind: enyo.Scroller,
touchOverscroll: !1,
thumb: !1,
animate: !0,
verticalDragPropagation: !0,
horizontalDragPropagation: !0,
published: {
scale: "auto",
disableZoom: !1,
src: undefined
},
events: {
onZoom: ""
},
touch: !0,
preventDragPropagation: !1,
handlers: {
ondragstart: "dragPropagation"
},
components: [ {
name: "animator",
kind: "Animator",
onStep: "zoomAnimationStep",
onEnd: "zoomAnimationEnd"
}, {
name: "viewport",
style: "overflow:hidden;min-height:100%;min-width:100%;",
classes: "enyo-fit",
ongesturechange: "gestureTransform",
ongestureend: "saveState",
ontap: "singleTap",
ondblclick: "doubleClick",
onmousewheel: "mousewheel",
components: [ {
kind: "Image",
ondown: "down"
} ]
} ],
create: function() {
this.inherited(arguments), this.canTransform = enyo.dom.canTransform(), this.canTransform || this.$.image.applyStyle("position", "relative"), this.canAccelerate = enyo.dom.canAccelerate(), this.bufferImage = new Image, this.bufferImage.onload = enyo.bind(this, "imageLoaded"), this.bufferImage.onerror = enyo.bind(this, "imageError"), this.srcChanged(), this.getStrategy().setDragDuringGesture(!1);
},
down: function(e, t) {
t.preventDefault();
},
dragPropagation: function(e, t) {
var n = this.getStrategy().getScrollBounds(), r = n.top === 0 && t.dy > 0 || n.top >= n.maxTop - 2 && t.dy < 0, i = n.left === 0 && t.dx > 0 || n.left >= n.maxLeft - 2 && t.dx < 0;
return !(r && this.verticalDragPropagation || i && this.horizontalDragPropagation);
},
mousewheel: function(e, t) {
t.pageX |= t.clientX + t.target.scrollLeft, t.pageY |= t.clientY + t.target.scrollTop;
var n = (this.maxScale - this.minScale) / 10, r = this.scale;
if (t.wheelDelta > 0 || t.detail < 0) this.scale = this.limitScale(this.scale + n); else if (t.wheelDelta < 0 || t.detail > 0) this.scale = this.limitScale(this.scale - n);
return this.eventPt = this.calcEventLocation(t), this.transformImage(this.scale), r != this.scale && this.doZoom({
scale: this.scale
}), this.ratioX = this.ratioY = null, t.preventDefault(), !0;
},
srcChanged: function() {
this.src && this.src.length > 0 && this.bufferImage && this.src != this.bufferImage.src && (this.bufferImage.src = this.src);
},
imageLoaded: function(e) {
this.originalWidth = this.bufferImage.width, this.originalHeight = this.bufferImage.height, this.scaleChanged(), this.$.image.setSrc(this.bufferImage.src), enyo.dom.transformValue(this.getStrategy().$.client, "translate3d", "0px, 0px, 0");
},
resizeHandler: function() {
this.inherited(arguments), this.$.image.src && this.scaleChanged();
},
scaleChanged: function() {
var e = this.hasNode();
if (e) {
this.containerWidth = e.clientWidth, this.containerHeight = e.clientHeight;
var t = this.containerWidth / this.originalWidth, n = this.containerHeight / this.originalHeight;
this.minScale = Math.min(t, n), this.maxScale = this.minScale * 3 < 1 ? 1 : this.minScale * 3, this.scale == "auto" ? this.scale = this.minScale : this.scale == "width" ? this.scale = t : this.scale == "height" ? this.scale = n : (this.maxScale = Math.max(this.maxScale, this.scale), this.scale = this.limitScale(this.scale));
}
this.eventPt = this.calcEventLocation(), this.transformImage(this.scale);
},
imageError: function(e) {
enyo.error("Error loading image: " + this.src), this.bubble("onerror", e);
},
gestureTransform: function(e, t) {
this.eventPt = this.calcEventLocation(t), this.transformImage(this.limitScale(this.scale * t.scale));
},
calcEventLocation: function(e) {
var t = {
x: 0,
y: 0
};
if (e && this.hasNode()) {
var n = this.node.getBoundingClientRect();
t.x = Math.round(e.pageX - n.left - this.imageBounds.x), t.x = Math.max(0, Math.min(this.imageBounds.width, t.x)), t.y = Math.round(e.pageY - n.top - this.imageBounds.y), t.y = Math.max(0, Math.min(this.imageBounds.height, t.y));
}
return t;
},
transformImage: function(e) {
this.tapped = !1;
var t = this.imageBounds || this.innerImageBounds(e);
this.imageBounds = this.innerImageBounds(e), this.scale > this.minScale ? this.$.viewport.applyStyle("cursor", "move") : this.$.viewport.applyStyle("cursor", null), this.$.viewport.setBounds({
width: this.imageBounds.width + "px",
height: this.imageBounds.height + "px"
}), this.ratioX = this.ratioX || (this.eventPt.x + this.getScrollLeft()) / t.width, this.ratioY = this.ratioY || (this.eventPt.y + this.getScrollTop()) / t.height;
var n, r;
this.$.animator.ratioLock ? (n = this.$.animator.ratioLock.x * this.imageBounds.width - this.containerWidth / 2, r = this.$.animator.ratioLock.y * this.imageBounds.height - this.containerHeight / 2) : (n = this.ratioX * this.imageBounds.width - this.eventPt.x, r = this.ratioY * this.imageBounds.height - this.eventPt.y), n = Math.max(0, Math.min(this.imageBounds.width - this.containerWidth, n)), r = Math.max(0, Math.min(this.imageBounds.height - this.containerHeight, r));
if (this.canTransform) {
var i = {
scale: e
};
this.canAccelerate ? i = enyo.mixin({
translate3d: Math.round(this.imageBounds.left) + "px, " + Math.round(this.imageBounds.top) + "px, 0px"
}, i) : i = enyo.mixin({
translate: this.imageBounds.left + "px, " + this.imageBounds.top + "px"
}, i), enyo.dom.transform(this.$.image, i);
} else this.$.image.setBounds({
width: this.imageBounds.width + "px",
height: this.imageBounds.height + "px",
left: this.imageBounds.left + "px",
top: this.imageBounds.top + "px"
});
this.setScrollLeft(n), this.setScrollTop(r);
},
limitScale: function(e) {
return this.disableZoom ? e = this.scale : e > this.maxScale ? e = this.maxScale : e < this.minScale && (e = this.minScale), e;
},
innerImageBounds: function(e) {
var t = this.originalWidth * e, n = this.originalHeight * e, r = {
x: 0,
y: 0,
transX: 0,
transY: 0
};
return t < this.containerWidth && (r.x += (this.containerWidth - t) / 2), n < this.containerHeight && (r.y += (this.containerHeight - n) / 2), this.canTransform && (r.transX -= (this.originalWidth - t) / 2, r.transY -= (this.originalHeight - n) / 2), {
left: r.x + r.transX,
top: r.y + r.transY,
width: t,
height: n,
x: r.x,
y: r.y
};
},
saveState: function(e, t) {
var n = this.scale;
this.scale *= t.scale, this.scale = this.limitScale(this.scale), n != this.scale && this.doZoom({
scale: this.scale
}), this.ratioX = this.ratioY = null;
},
doubleClick: function(e, t) {
enyo.platform.ie == 8 && (this.tapped = !0, t.pageX = t.clientX + t.target.scrollLeft, t.pageY = t.clientY + t.target.scrollTop, this.singleTap(e, t), t.preventDefault());
},
singleTap: function(e, t) {
setTimeout(enyo.bind(this, function() {
this.tapped = !1;
}), 300), this.tapped ? (this.tapped = !1, this.smartZoom(e, t)) : this.tapped = !0;
},
smartZoom: function(e, t) {
var n = this.hasNode(), r = this.$.image.hasNode();
if (n && r && this.hasNode() && !this.disableZoom) {
var i = this.scale;
this.scale != this.minScale ? this.scale = this.minScale : this.scale = this.maxScale, this.eventPt = this.calcEventLocation(t);
if (this.animate) {
var s = {
x: (this.eventPt.x + this.getScrollLeft()) / this.imageBounds.width,
y: (this.eventPt.y + this.getScrollTop()) / this.imageBounds.height
};
this.$.animator.play({
duration: 350,
ratioLock: s,
baseScale: i,
deltaScale: this.scale - i
});
} else this.transformImage(this.scale), this.doZoom({
scale: this.scale
});
}
},
zoomAnimationStep: function(e, t) {
var n = this.$.animator.baseScale + this.$.animator.deltaScale * this.$.animator.value;
this.transformImage(n);
},
zoomAnimationEnd: function(e, t) {
this.doZoom({
scale: this.scale
}), this.$.animator.ratioLock = undefined;
}
});

// ImageCarousel.js

enyo.kind({
name: "enyo.ImageCarousel",
kind: enyo.Panels,
arrangerKind: "enyo.CarouselArranger",
defaultScale: "auto",
disableZoom: !1,
lowMemory: !1,
published: {
images: []
},
handlers: {
onTransitionStart: "transitionStart",
onTransitionFinish: "transitionFinish"
},
create: function() {
this.inherited(arguments), this.imageCount = this.images.length, this.images.length > 0 && (this.initContainers(), this.loadNearby());
},
initContainers: function() {
for (var e = 0; e < this.images.length; e++) this.$["container" + e] || (this.createComponent({
name: "container" + e,
style: "height:100%; width:100%;"
}), this.$["container" + e].render());
for (e = this.images.length; e < this.imageCount; e++) this.$["image" + e] && this.$["image" + e].destroy(), this.$["container" + e].destroy();
this.imageCount = this.images.length;
},
loadNearby: function() {
this.images.length > 0 && (this.loadImageView(this.index - 1), this.loadImageView(this.index), this.loadImageView(this.index + 1));
},
loadImageView: function(e) {
return this.wrap && (e = (e % this.images.length + this.images.length) % this.images.length), e >= 0 && e <= this.images.length - 1 && (this.$["image" + e] ? (this.$["image" + e].src != this.images[e] && this.$["image" + e].setSrc(this.images[e]), this.$["image" + e].setScale(this.defaultScale), this.$["image" + e].setDisableZoom(this.disableZoom)) : (this.$["container" + e].createComponent({
name: "image" + e,
kind: "ImageView",
scale: this.defaultScale,
disableZoom: this.disableZoom,
src: this.images[e],
verticalDragPropagation: !1,
style: "height:100%; width:100%;"
}, {
owner: this
}), this.$["image" + e].render())), this.$["image" + e];
},
setImages: function(e) {
this.setPropertyValue("images", e, "imagesChanged");
},
imagesChanged: function() {
this.initContainers(), this.loadNearby();
},
indexChanged: function() {
this.loadNearby(), this.lowMemory && this.cleanupMemory(), this.inherited(arguments);
},
transitionStart: function(e, t) {
if (t.fromIndex == t.toIndex) return !0;
},
transitionFinish: function(e, t) {
this.loadImageView(this.index - 1), this.loadImageView(this.index + 1), this.lowMemory && this.cleanupMemory();
},
getActiveImage: function() {
return this.getImageByIndex(this.index);
},
getImageByIndex: function(e) {
return this.$["image" + e] || this.loadImageView(e);
},
cleanupMemory: function() {
for (var e = 0; e < this.images.length; e++) (e < this.index - 1 || e > this.index + 1) && this.$["image" + e] && this.$["image" + e].destroy();
}
});

// Icon.js

enyo.kind({
name: "onyx.Icon",
published: {
src: "",
disabled: !1
},
classes: "onyx-icon",
create: function() {
this.inherited(arguments), this.src && this.srcChanged(), this.disabledChanged();
},
disabledChanged: function() {
this.addRemoveClass("disabled", this.disabled);
},
srcChanged: function() {
this.applyStyle("background-image", "url(" + enyo.path.rewrite(this.src) + ")");
}
});

// Button.js

enyo.kind({
name: "onyx.Button",
kind: "enyo.Button",
classes: "onyx-button enyo-unselectable"
});

// IconButton.js

enyo.kind({
name: "onyx.IconButton",
kind: "onyx.Icon",
published: {
active: !1
},
classes: "onyx-icon-button",
rendered: function() {
this.inherited(arguments), this.activeChanged();
},
tap: function() {
if (this.disabled) return !0;
this.setActive(!0);
},
activeChanged: function() {
this.bubble("onActivate");
}
});

// Checkbox.js

enyo.kind({
name: "onyx.Checkbox",
classes: "onyx-checkbox",
kind: enyo.Checkbox,
tag: "div",
handlers: {
ondown: "downHandler",
onclick: ""
},
downHandler: function(e, t) {
return this.disabled || (this.setChecked(!this.getChecked()), this.bubble("onchange")), !0;
},
tap: function(e, t) {
return !this.disabled;
}
});

// Drawer.js

enyo.kind({
name: "onyx.Drawer",
published: {
open: !0,
orient: "v",
animated: !0
},
style: "overflow: hidden; position: relative;",
tools: [ {
kind: "Animator",
onStep: "animatorStep",
onEnd: "animatorEnd"
}, {
name: "client",
style: "position: relative;",
classes: "enyo-border-box"
} ],
create: function() {
this.inherited(arguments), this.animatedChanged(), this.openChanged();
},
initComponents: function() {
this.createChrome(this.tools), this.inherited(arguments);
},
animatedChanged: function() {
!this.animated && this.hasNode() && this.$.animator.isAnimating() && (this.$.animator.stop(), this.animatorEnd());
},
openChanged: function() {
this.$.client.show();
if (this.hasNode()) if (this.$.animator.isAnimating()) this.$.animator.reverse(); else {
var e = this.orient == "v", t = e ? "height" : "width", n = e ? "top" : "left";
this.applyStyle(t, null);
var r = this.hasNode()[e ? "scrollHeight" : "scrollWidth"];
this.animated ? this.$.animator.play({
startValue: this.open ? 0 : r,
endValue: this.open ? r : 0,
dimension: t,
position: n
}) : this.animatorEnd();
} else this.$.client.setShowing(this.open);
},
animatorStep: function(e) {
if (this.hasNode()) {
var t = e.dimension;
this.node.style[t] = this.domStyles[t] = e.value + "px";
}
var n = this.$.client.hasNode();
if (n) {
var r = e.position, i = this.open ? e.endValue : e.startValue;
n.style[r] = this.$.client.domStyles[r] = e.value - i + "px";
}
this.container && this.container.resized();
},
animatorEnd: function() {
if (!this.open) this.$.client.hide(); else {
var e = this.orient == "v", t = e ? "height" : "width", n = e ? "top" : "left", r = this.$.client.hasNode();
r && (r.style[n] = this.$.client.domStyles[n] = null), this.node && (this.node.style[t] = this.domStyles[t] = null);
}
this.container && this.container.resized();
}
});

// Grabber.js

enyo.kind({
name: "onyx.Grabber",
classes: "onyx-grabber"
});

// Groupbox.js

enyo.kind({
name: "onyx.Groupbox",
classes: "onyx-groupbox"
}), enyo.kind({
name: "onyx.GroupboxHeader",
classes: "onyx-groupbox-header"
});

// Input.js

enyo.kind({
name: "onyx.Input",
kind: "enyo.Input",
classes: "onyx-input"
});

// Popup.js

enyo.kind({
name: "onyx.Popup",
kind: "Popup",
classes: "onyx-popup",
published: {
scrimWhenModal: !0,
scrim: !1,
scrimClassName: ""
},
statics: {
count: 0
},
defaultZ: 120,
showingChanged: function() {
this.showing ? (onyx.Popup.count++, this.applyZIndex()) : onyx.Popup.count > 0 && onyx.Popup.count--, this.showHideScrim(this.showing), this.inherited(arguments);
},
showHideScrim: function(e) {
if (this.floating && (this.scrim || this.modal && this.scrimWhenModal)) {
var t = this.getScrim();
if (e) {
var n = this.getScrimZIndex();
this._scrimZ = n, t.showAtZIndex(n);
} else t.hideAtZIndex(this._scrimZ);
enyo.call(t, "addRemoveClass", [ this.scrimClassName, t.showing ]);
}
},
getScrimZIndex: function() {
return this.findZIndex() - 1;
},
getScrim: function() {
return this.modal && this.scrimWhenModal && !this.scrim ? onyx.scrimTransparent.make() : onyx.scrim.make();
},
applyZIndex: function() {
this._zIndex = onyx.Popup.count * 2 + this.findZIndex() + 1, this.applyStyle("z-index", this._zIndex);
},
findZIndex: function() {
var e = this.defaultZ;
return this._zIndex ? e = this._zIndex : this.hasNode() && (e = Number(enyo.dom.getComputedStyleValue(this.node, "z-index")) || e), this._zIndex = e;
}
});

// TextArea.js

enyo.kind({
name: "onyx.TextArea",
kind: "enyo.TextArea",
classes: "onyx-textarea"
});

// RichText.js

enyo.kind({
name: "onyx.RichText",
kind: "enyo.RichText",
classes: "onyx-richtext"
});

// InputDecorator.js

enyo.kind({
name: "onyx.InputDecorator",
kind: "enyo.ToolDecorator",
tag: "label",
classes: "onyx-input-decorator",
published: {
alwaysLooksFocused: !1
},
handlers: {
onDisabledChange: "disabledChange",
onfocus: "receiveFocus",
onblur: "receiveBlur"
},
create: function() {
this.inherited(arguments), this.updateFocus(!1);
},
alwaysLooksFocusedChanged: function(e) {
this.updateFocus(this.focus);
},
updateFocus: function(e) {
this.focused = e, this.addRemoveClass("onyx-focused", this.alwaysLooksFocused || this.focused);
},
receiveFocus: function() {
this.updateFocus(!0);
},
receiveBlur: function() {
this.updateFocus(!1);
},
disabledChange: function(e, t) {
this.addRemoveClass("onyx-disabled", t.originator.disabled);
}
});

// Tooltip.js

enyo.kind({
name: "onyx.Tooltip",
kind: "onyx.Popup",
classes: "onyx-tooltip below left-arrow",
autoDismiss: !1,
showDelay: 500,
defaultLeft: -6,
handlers: {
onRequestShowTooltip: "requestShow",
onRequestHideTooltip: "requestHide"
},
requestShow: function() {
return this.showJob = setTimeout(enyo.bind(this, "show"), this.showDelay), !0;
},
cancelShow: function() {
clearTimeout(this.showJob);
},
requestHide: function() {
return this.cancelShow(), this.inherited(arguments);
},
showingChanged: function() {
this.cancelShow(), this.adjustPosition(!0), this.inherited(arguments);
},
applyPosition: function(e) {
var t = "";
for (var n in e) t += n + ":" + e[n] + (isNaN(e[n]) ? "; " : "px; ");
this.addStyles(t);
},
adjustPosition: function(e) {
if (this.showing && this.hasNode()) {
var t = this.node.getBoundingClientRect();
t.top + t.height > window.innerHeight ? (this.addRemoveClass("below", !1), this.addRemoveClass("above", !0)) : (this.addRemoveClass("above", !1), this.addRemoveClass("below", !0)), t.left + t.width > window.innerWidth && (this.applyPosition({
"margin-left": -t.width,
bottom: "auto"
}), this.addRemoveClass("left-arrow", !1), this.addRemoveClass("right-arrow", !0));
}
},
resizeHandler: function() {
this.applyPosition({
"margin-left": this.defaultLeft,
bottom: "auto"
}), this.addRemoveClass("left-arrow", !0), this.addRemoveClass("right-arrow", !1), this.adjustPosition(!0), this.inherited(arguments);
}
});

// TooltipDecorator.js

enyo.kind({
name: "onyx.TooltipDecorator",
defaultKind: "onyx.Button",
classes: "onyx-popup-decorator",
handlers: {
onenter: "enter",
onleave: "leave"
},
enter: function() {
this.requestShowTooltip();
},
leave: function() {
this.requestHideTooltip();
},
tap: function() {
this.requestHideTooltip();
},
requestShowTooltip: function() {
this.waterfallDown("onRequestShowTooltip");
},
requestHideTooltip: function() {
this.waterfallDown("onRequestHideTooltip");
}
});

// MenuDecorator.js

enyo.kind({
name: "onyx.MenuDecorator",
kind: "onyx.TooltipDecorator",
defaultKind: "onyx.Button",
classes: "onyx-popup-decorator enyo-unselectable",
handlers: {
onActivate: "activated",
onHide: "menuHidden"
},
activated: function(e, t) {
this.requestHideTooltip(), t.originator.active && (this.menuActive = !0, this.activator = t.originator, this.activator.addClass("active"), this.requestShowMenu());
},
requestShowMenu: function() {
this.waterfallDown("onRequestShowMenu", {
activator: this.activator
});
},
requestHideMenu: function() {
this.waterfallDown("onRequestHideMenu");
},
menuHidden: function() {
this.menuActive = !1, this.activator && (this.activator.setActive(!1), this.activator.removeClass("active"));
},
enter: function(e) {
this.menuActive || this.inherited(arguments);
},
leave: function(e, t) {
this.menuActive || this.inherited(arguments);
}
});

// Menu.js

enyo.kind({
name: "onyx.Menu",
kind: "onyx.Popup",
modal: !0,
defaultKind: "onyx.MenuItem",
classes: "onyx-menu",
published: {
maxHeight: 200,
scrolling: !0
},
handlers: {
onActivate: "itemActivated",
onRequestShowMenu: "requestMenuShow",
onRequestHideMenu: "requestHide"
},
childComponents: [ {
name: "client",
kind: "enyo.Scroller",
strategyKind: "TouchScrollStrategy"
} ],
showOnTop: !1,
scrollerName: "client",
create: function() {
this.inherited(arguments), this.maxHeightChanged();
},
initComponents: function() {
this.scrolling ? this.createComponents(this.childComponents, {
isChrome: !0
}) : enyo.nop, this.inherited(arguments);
},
getScroller: function() {
return this.$[this.scrollerName];
},
maxHeightChanged: function() {
this.scrolling ? this.getScroller().setMaxHeight(this.maxHeight + "px") : enyo.nop;
},
itemActivated: function(e, t) {
return t.originator.setActive(!1), !0;
},
showingChanged: function() {
this.inherited(arguments), this.scrolling ? this.getScroller().setShowing(this.showing) : enyo.nop, this.adjustPosition(!0);
},
requestMenuShow: function(e, t) {
if (this.floating) {
var n = t.activator.hasNode();
if (n) {
var r = this.activatorOffset = this.getPageOffset(n);
this.applyPosition({
top: r.top + (this.showOnTop ? 0 : r.height),
left: r.left,
width: r.width
});
}
}
return this.show(), !0;
},
applyPosition: function(e) {
var t = "";
for (n in e) t += n + ":" + e[n] + (isNaN(e[n]) ? "; " : "px; ");
this.addStyles(t);
},
getPageOffset: function(e) {
var t = e.getBoundingClientRect(), n = window.pageYOffset === undefined ? document.documentElement.scrollTop : window.pageYOffset, r = window.pageXOffset === undefined ? document.documentElement.scrollLeft : window.pageXOffset, i = t.height === undefined ? t.bottom - t.top : t.height, s = t.width === undefined ? t.right - t.left : t.width;
return {
top: t.top + n,
left: t.left + r,
height: i,
width: s
};
},
adjustPosition: function() {
if (this.showing && this.hasNode()) {
this.scrolling && !this.showOnTop ? this.getScroller().setMaxHeight(this.maxHeight + "px") : enyo.nop, this.removeClass("onyx-menu-up"), this.floating ? enyo.noop : this.applyPosition({
left: "auto"
});
var e = this.node.getBoundingClientRect(), t = e.height === undefined ? e.bottom - e.top : e.height, n = window.innerHeight === undefined ? document.documentElement.clientHeight : window.innerHeight, r = window.innerWidth === undefined ? document.documentElement.clientWidth : window.innerWidth;
this.menuUp = e.top + t > n && n - e.bottom < e.top - t, this.addRemoveClass("onyx-menu-up", this.menuUp);
if (this.floating) {
var i = this.activatorOffset;
this.menuUp ? this.applyPosition({
top: i.top - t + (this.showOnTop ? i.height : 0),
bottom: "auto"
}) : e.top < i.top && i.top + (this.showOnTop ? 0 : i.height) + t < n && this.applyPosition({
top: i.top + (this.showOnTop ? 0 : i.height),
bottom: "auto"
});
}
e.right > r && (this.floating ? this.applyPosition({
left: r - e.width
}) : this.applyPosition({
left: -(e.right - r)
})), e.left < 0 && (this.floating ? this.applyPosition({
left: 0,
right: "auto"
}) : this.getComputedStyleValue("right") == "auto" ? this.applyPosition({
left: -e.left
}) : this.applyPosition({
right: e.left
}));
if (this.scrolling && !this.showOnTop) {
e = this.node.getBoundingClientRect();
var s;
this.menuUp ? s = this.maxHeight < e.bottom ? this.maxHeight : e.bottom : s = e.top + this.maxHeight < n ? this.maxHeight : n - e.top, this.getScroller().setMaxHeight(s + "px");
}
}
},
resizeHandler: function() {
this.inherited(arguments), this.adjustPosition();
},
requestHide: function() {
this.setShowing(!1);
}
});

// MenuItem.js

enyo.kind({
name: "onyx.MenuItem",
kind: "enyo.Button",
events: {
onSelect: ""
},
classes: "onyx-menu-item",
tag: "div",
tap: function(e) {
this.inherited(arguments), this.bubble("onRequestHideMenu"), this.doSelect({
selected: this,
content: this.content
});
}
});

// PickerDecorator.js

enyo.kind({
name: "onyx.PickerDecorator",
kind: "onyx.MenuDecorator",
classes: "onyx-picker-decorator",
defaultKind: "onyx.PickerButton",
handlers: {
onChange: "change"
},
change: function(e, t) {
this.waterfallDown("onChange", t);
}
});

// PickerButton.js

enyo.kind({
name: "onyx.PickerButton",
kind: "onyx.Button",
handlers: {
onChange: "change"
},
change: function(e, t) {
this.setContent(t.content);
}
});

// Picker.js

enyo.kind({
name: "onyx.Picker",
kind: "onyx.Menu",
classes: "onyx-picker enyo-unselectable",
published: {
selected: null
},
events: {
onChange: ""
},
floating: !0,
showOnTop: !0,
initComponents: function() {
this.setScrolling(!0), this.inherited(arguments);
},
showingChanged: function() {
this.getScroller().setShowing(this.showing), this.inherited(arguments), this.showing && this.selected && this.scrollToSelected();
},
scrollToSelected: function() {
this.getScroller().scrollToControl(this.selected, !this.menuUp);
},
itemActivated: function(e, t) {
return this.processActivatedItem(t.originator), this.inherited(arguments);
},
processActivatedItem: function(e) {
e.active && this.setSelected(e);
},
selectedChanged: function(e) {
e && e.removeClass("selected"), this.selected && (this.selected.addClass("selected"), this.doChange({
selected: this.selected,
content: this.selected.content
}));
},
resizeHandler: function() {
this.inherited(arguments), this.adjustPosition();
}
});

// FlyweightPicker.js

enyo.kind({
name: "onyx.FlyweightPicker",
kind: "onyx.Picker",
classes: "onyx-flyweight-picker",
published: {
count: 0
},
events: {
onSetupItem: "",
onSelect: ""
},
handlers: {
onSelect: "itemSelect"
},
components: [ {
name: "scroller",
kind: "enyo.Scroller",
strategyKind: "TouchScrollStrategy",
components: [ {
name: "flyweight",
kind: "FlyweightRepeater",
ontap: "itemTap"
} ]
} ],
scrollerName: "scroller",
initComponents: function() {
this.controlParentName = "flyweight", this.inherited(arguments);
},
create: function() {
this.inherited(arguments), this.countChanged();
},
rendered: function() {
this.inherited(arguments), this.selectedChanged();
},
scrollToSelected: function() {
var e = this.$.flyweight.fetchRowNode(this.selected);
this.getScroller().scrollToNode(e, !this.menuUp);
},
countChanged: function() {
this.$.flyweight.count = this.count;
},
processActivatedItem: function(e) {
this.item = e;
},
selectedChanged: function(e) {
if (!this.item) return;
e !== undefined && (this.item.removeClass("selected"), this.$.flyweight.renderRow(e)), this.item.addClass("selected"), this.$.flyweight.renderRow(this.selected), this.item.removeClass("selected");
var t = this.$.flyweight.fetchRowNode(this.selected);
this.doChange({
selected: this.selected,
content: t && t.textContent || this.item.content
});
},
itemTap: function(e, t) {
this.setSelected(t.rowIndex), this.doSelect({
selected: this.item,
content: this.item.content
});
},
itemSelect: function(e, t) {
if (t.originator != this) return !0;
}
});

// DatePicker.js

enyo.kind({
name: "onyx.DatePicker",
classes: "onyx-toolbar-inline",
published: {
disabled: !1,
locale: null,
dayHidden: !1,
monthHidden: !1,
yearHidden: !1,
minYear: 1900,
maxYear: 2099,
value: null
},
events: {
onSelect: ""
},
create: function() {
this.inherited(arguments);
if (!this.locale) try {
this.locale = enyo.g11n.currentLocale().getLocale();
} catch (e) {
this.locale = "en_us";
}
this.initDefaults();
},
initDefaults: function() {
var e;
try {
this._tf = new enyo.g11n.Fmts({
locale: this.locale
}), e = this._tf.getMonthFields();
} catch (t) {
e = [ "Jan", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC" ];
}
this.setupPickers(this._tf ? this._tf.getDateFieldOrder() : "mdy"), this.dayHiddenChanged(), this.monthHiddenChanged(), this.yearHiddenChanged();
var n = this.value = this.value || new Date;
for (var r = 0, i; i = e[r]; r++) this.$.monthPicker.createComponent({
content: i,
value: r,
active: r == n.getMonth()
});
var s = n.getFullYear();
this.$.yearPicker.setSelected(s - this.minYear), this.$.year.setContent(s);
for (r = 1; r <= this.monthLength(n.getYear(), n.getMonth()); r++) this.$.dayPicker.createComponent({
content: r,
value: r,
active: r == n.getDate()
});
},
monthLength: function(e, t) {
return 32 - (new Date(e, t, 32)).getDate();
},
setupYear: function(e, t) {
this.$.year.setContent(this.minYear + t.index);
},
setupPickers: function(e) {
var t = e.split(""), n, r, i;
for (r = 0, i = t.length; r < i; r++) {
n = t[r];
switch (n) {
case "d":
this.createDay();
break;
case "m":
this.createMonth();
break;
case "y":
this.createYear();
break;
default:
}
}
},
createYear: function() {
var e = this.maxYear - this.minYear;
this.createComponent({
kind: "onyx.PickerDecorator",
onSelect: "updateYear",
components: [ {
classes: "onyx-datepicker-year",
name: "yearPickerButton",
disabled: this.disabled
}, {
name: "yearPicker",
kind: "onyx.FlyweightPicker",
count: ++e,
onSetupItem: "setupYear",
components: [ {
name: "year"
} ]
} ]
});
},
createMonth: function() {
this.createComponent({
kind: "onyx.PickerDecorator",
onSelect: "updateMonth",
components: [ {
classes: "onyx-datepicker-month",
name: "monthPickerButton",
disabled: this.disabled
}, {
name: "monthPicker",
kind: "onyx.Picker"
} ]
});
},
createDay: function() {
this.createComponent({
kind: "onyx.PickerDecorator",
onSelect: "updateDay",
components: [ {
classes: "onyx-datepicker-day",
name: "dayPickerButton",
disabled: this.disabled
}, {
name: "dayPicker",
kind: "onyx.Picker"
} ]
});
},
localeChanged: function() {
this.refresh();
},
dayHiddenChanged: function() {
this.$.dayPicker.getParent().setShowing(this.dayHidden ? !1 : !0);
},
monthHiddenChanged: function() {
this.$.monthPicker.getParent().setShowing(this.monthHidden ? !1 : !0);
},
yearHiddenChanged: function() {
this.$.yearPicker.getParent().setShowing(this.yearHidden ? !1 : !0);
},
minYearChanged: function() {
this.refresh();
},
maxYearChanged: function() {
this.refresh();
},
valueChanged: function() {
this.refresh();
},
disabledChanged: function() {
this.yearPickerButton.setDisabled(this.disabled), this.monthPickerButton.setDisabled(this.disabled), this.dayPickerButton.setDisabled(this.disabled);
},
updateDay: function(e, t) {
var n = this.calcDate(this.value.getFullYear(), this.value.getMonth(), t.selected.value);
return this.doSelect({
name: this.name,
value: n
}), this.setValue(n), !0;
},
updateMonth: function(e, t) {
var n = this.calcDate(this.value.getFullYear(), t.selected.value, this.value.getDate());
return this.doSelect({
name: this.name,
value: n
}), this.setValue(n), !0;
},
updateYear: function(e, t) {
if (t.originator.selected != -1) {
var n = this.calcDate(this.minYear + t.originator.selected, this.value.getMonth(), this.value.getDate());
this.doSelect({
name: this.name,
value: n
}), this.setValue(n);
}
return !0;
},
calcDate: function(e, t, n) {
return new Date(e, t, n, this.value.getHours(), this.value.getMinutes(), this.value.getSeconds(), this.value.getMilliseconds());
},
refresh: function() {
this.destroyClientControls(), this.initDefaults(), this.render();
}
});

// TimePicker.js

enyo.kind({
name: "onyx.TimePicker",
classes: "onyx-toolbar-inline",
published: {
disabled: !1,
locale: null,
is24HrMode: null,
value: null
},
events: {
onSelect: ""
},
create: function() {
this.inherited(arguments);
if (!this.locale) try {
this.locale = enyo.g11n.currentLocale().getLocale();
} catch (e) {
this.locale = "en_us";
}
this.initDefaults();
},
initDefaults: function() {
var e, t;
try {
this._tf = new enyo.g11n.Fmts({
locale: this.locale
}), e = this._tf.getAmCaption(), t = this._tf.getPmCaption(), this.is24HrMode == null && (this.is24HrMode = !this._tf.isAmPm());
} catch (n) {
e = "AM", t = "PM", this.is24HrMode = !1;
}
this.setupPickers(this._tf ? this._tf.getTimeFieldOrder() : "hma");
var r = this.value = this.value || new Date, i;
if (!this.is24HrMode) {
var s = r.getHours();
s = s === 0 ? 12 : s;
for (i = 1; i <= 12; i++) this.$.hourPicker.createComponent({
content: i,
value: i,
active: i == (s > 12 ? s % 12 : s)
});
} else for (i = 0; i < 24; i++) this.$.hourPicker.createComponent({
content: i,
value: i,
active: i == r.getHours()
});
for (i = 0; i <= 59; i++) this.$.minutePicker.createComponent({
content: i < 10 ? "0" + i : i,
value: i,
active: i == r.getMinutes()
});
r.getHours() >= 12 ? this.$.ampmPicker.createComponents([ {
content: e
}, {
content: t,
active: !0
} ]) : this.$.ampmPicker.createComponents([ {
content: e,
active: !0
}, {
content: t
} ]), this.$.ampmPicker.getParent().setShowing(!this.is24HrMode);
},
setupPickers: function(e) {
var t = e.split(""), n, r, i;
for (r = 0, i = t.length; r < i; r++) {
n = t[r];
switch (n) {
case "h":
this.createHour();
break;
case "m":
this.createMinute();
break;
case "a":
this.createAmPm();
break;
default:
}
}
},
createHour: function() {
this.createComponent({
kind: "onyx.PickerDecorator",
onSelect: "updateHour",
components: [ {
classes: "onyx-timepicker-hour",
name: "hourPickerButton",
disabled: this.disabled
}, {
name: "hourPicker",
kind: "onyx.Picker"
} ]
});
},
createMinute: function() {
this.createComponent({
kind: "onyx.PickerDecorator",
onSelect: "updateMinute",
components: [ {
classes: "onyx-timepicker-minute",
name: "minutePickerButton",
disabled: this.disabled
}, {
name: "minutePicker",
kind: "onyx.Picker"
} ]
});
},
createAmPm: function() {
this.createComponent({
kind: "onyx.PickerDecorator",
onSelect: "updateAmPm",
components: [ {
classes: "onyx-timepicker-ampm",
name: "ampmPickerButton",
disabled: this.disabled
}, {
name: "ampmPicker",
kind: "onyx.Picker"
} ]
});
},
disabledChanged: function() {
this.$.hourPickerButton.setDisabled(this.disabled), this.$.minutePickerButton.setDisabled(this.disabled), this.$.ampmPickerButton.setDisabled(this.disabled);
},
localeChanged: function() {
this.is24HrMode = null, this.refresh();
},
is24HrModeChanged: function() {
this.refresh();
},
valueChanged: function() {
this.refresh();
},
updateHour: function(e, t) {
var n = t.selected.value;
if (!this.is24HrMode) {
var r = this.$.ampmPicker.getParent().controlAtIndex(0).content;
n = n + (n == 12 ? -12 : 0) + (this.isAm(r) ? 0 : 12);
}
return this.value = this.calcTime(n, this.value.getMinutes()), this.doSelect({
name: this.name,
value: this.value
}), !0;
},
updateMinute: function(e, t) {
return this.value = this.calcTime(this.value.getHours(), t.selected.value), this.doSelect({
name: this.name,
value: this.value
}), !0;
},
updateAmPm: function(e, t) {
var n = this.value.getHours();
return this.is24HrMode || (n += n > 11 ? this.isAm(t.content) ? -12 : 0 : this.isAm(t.content) ? 0 : 12), this.value = this.calcTime(n, this.value.getMinutes()), this.doSelect({
name: this.name,
value: this.value
}), !0;
},
calcTime: function(e, t) {
return new Date(this.value.getFullYear(), this.value.getMonth(), this.value.getDate(), e, t, this.value.getSeconds(), this.value.getMilliseconds());
},
isAm: function(e) {
var t, n, r;
try {
t = this._tf.getAmCaption(), n = this._tf.getPmCaption();
} catch (i) {
t = "AM", n = "PM";
}
return e == t ? !0 : !1;
},
refresh: function() {
this.destroyClientControls(), this.initDefaults(), this.render();
}
});

// RadioButton.js

enyo.kind({
name: "onyx.RadioButton",
kind: "Button",
classes: "onyx-radiobutton"
});

// RadioGroup.js

enyo.kind({
name: "onyx.RadioGroup",
kind: "Group",
defaultKind: "onyx.RadioButton",
highlander: !0
});

// ToggleButton.js

enyo.kind({
name: "onyx.ToggleButton",
classes: "onyx-toggle-button",
published: {
active: !1,
value: !1,
onContent: "On",
offContent: "Off",
disabled: !1
},
events: {
onChange: ""
},
handlers: {
ondragstart: "dragstart",
ondrag: "drag",
ondragfinish: "dragfinish"
},
components: [ {
name: "contentOn",
classes: "onyx-toggle-content on"
}, {
name: "contentOff",
classes: "onyx-toggle-content off"
}, {
classes: "onyx-toggle-button-knob"
} ],
create: function() {
this.inherited(arguments), this.value = Boolean(this.value || this.active), this.onContentChanged(), this.offContentChanged(), this.disabledChanged();
},
rendered: function() {
this.inherited(arguments), this.updateVisualState();
},
updateVisualState: function() {
this.addRemoveClass("off", !this.value), this.$.contentOn.setShowing(this.value), this.$.contentOff.setShowing(!this.value), this.setActive(this.value);
},
valueChanged: function() {
this.updateVisualState(), this.doChange({
value: this.value
});
},
activeChanged: function() {
this.setValue(this.active), this.bubble("onActivate");
},
onContentChanged: function() {
this.$.contentOn.setContent(this.onContent || ""), this.$.contentOn.addRemoveClass("empty", !this.onContent);
},
offContentChanged: function() {
this.$.contentOff.setContent(this.offContent || ""), this.$.contentOff.addRemoveClass("empty", !this.onContent);
},
disabledChanged: function() {
this.addRemoveClass("disabled", this.disabled);
},
updateValue: function(e) {
this.disabled || this.setValue(e);
},
tap: function() {
this.updateValue(!this.value);
},
dragstart: function(e, t) {
if (t.horizontal) return t.preventDefault(), this.dragging = !0, this.dragged = !1, !0;
},
drag: function(e, t) {
if (this.dragging) {
var n = t.dx;
return Math.abs(n) > 10 && (this.updateValue(n > 0), this.dragged = !0), !0;
}
},
dragfinish: function(e, t) {
this.dragging = !1, this.dragged && t.preventTap();
}
});

// ToggleIconButton.js

enyo.kind({
name: "onyx.ToggleIconButton",
kind: "onyx.Icon",
published: {
active: !1,
value: !1
},
events: {
onChange: ""
},
classes: "onyx-icon-button onyx-icon-toggle",
activeChanged: function() {
this.addRemoveClass("active", this.value), this.bubble("onActivate");
},
updateValue: function(e) {
this.disabled || (this.setValue(e), this.doChange({
value: this.value
}));
},
tap: function() {
this.updateValue(!this.value);
},
valueChanged: function() {
this.setActive(this.value);
},
create: function() {
this.inherited(arguments), this.value = Boolean(this.value || this.active);
},
rendered: function() {
this.inherited(arguments), this.valueChanged(), this.removeClass("onyx-icon");
}
});

// Toolbar.js

enyo.kind({
name: "onyx.Toolbar",
classes: "onyx onyx-toolbar onyx-toolbar-inline",
create: function() {
this.inherited(arguments), this.hasClass("onyx-menu-toolbar") && enyo.platform.android >= 4 && this.applyStyle("position", "static");
}
});

// Tooltip.js

enyo.kind({
name: "onyx.Tooltip",
kind: "onyx.Popup",
classes: "onyx-tooltip below left-arrow",
autoDismiss: !1,
showDelay: 500,
defaultLeft: -6,
handlers: {
onRequestShowTooltip: "requestShow",
onRequestHideTooltip: "requestHide"
},
requestShow: function() {
return this.showJob = setTimeout(enyo.bind(this, "show"), this.showDelay), !0;
},
cancelShow: function() {
clearTimeout(this.showJob);
},
requestHide: function() {
return this.cancelShow(), this.inherited(arguments);
},
showingChanged: function() {
this.cancelShow(), this.adjustPosition(!0), this.inherited(arguments);
},
applyPosition: function(e) {
var t = "";
for (var n in e) t += n + ":" + e[n] + (isNaN(e[n]) ? "; " : "px; ");
this.addStyles(t);
},
adjustPosition: function(e) {
if (this.showing && this.hasNode()) {
var t = this.node.getBoundingClientRect();
t.top + t.height > window.innerHeight ? (this.addRemoveClass("below", !1), this.addRemoveClass("above", !0)) : (this.addRemoveClass("above", !1), this.addRemoveClass("below", !0)), t.left + t.width > window.innerWidth && (this.applyPosition({
"margin-left": -t.width,
bottom: "auto"
}), this.addRemoveClass("left-arrow", !1), this.addRemoveClass("right-arrow", !0));
}
},
resizeHandler: function() {
this.applyPosition({
"margin-left": this.defaultLeft,
bottom: "auto"
}), this.addRemoveClass("left-arrow", !0), this.addRemoveClass("right-arrow", !1), this.adjustPosition(!0), this.inherited(arguments);
}
});

// TooltipDecorator.js

enyo.kind({
name: "onyx.TooltipDecorator",
defaultKind: "onyx.Button",
classes: "onyx-popup-decorator",
handlers: {
onenter: "enter",
onleave: "leave"
},
enter: function() {
this.requestShowTooltip();
},
leave: function() {
this.requestHideTooltip();
},
tap: function() {
this.requestHideTooltip();
},
requestShowTooltip: function() {
this.waterfallDown("onRequestShowTooltip");
},
requestHideTooltip: function() {
this.waterfallDown("onRequestHideTooltip");
}
});

// ProgressBar.js

enyo.kind({
name: "onyx.ProgressBar",
classes: "onyx-progress-bar",
published: {
progress: 0,
min: 0,
max: 100,
barClasses: "",
showStripes: !0,
animateStripes: !0
},
events: {
onAnimateProgressFinish: ""
},
components: [ {
name: "progressAnimator",
kind: "Animator",
onStep: "progressAnimatorStep",
onEnd: "progressAnimatorComplete"
}, {
name: "bar",
classes: "onyx-progress-bar-bar"
} ],
create: function() {
this.inherited(arguments), this.progressChanged(), this.barClassesChanged(), this.showStripesChanged(), this.animateStripesChanged();
},
barClassesChanged: function(e) {
this.$.bar.removeClass(e), this.$.bar.addClass(this.barClasses);
},
showStripesChanged: function() {
this.$.bar.addRemoveClass("striped", this.showStripes);
},
animateStripesChanged: function() {
this.$.bar.addRemoveClass("animated", this.animateStripes);
},
progressChanged: function() {
this.progress = this.clampValue(this.min, this.max, this.progress);
var e = this.calcPercent(this.progress);
this.updateBarPosition(e);
},
clampValue: function(e, t, n) {
return Math.max(e, Math.min(n, t));
},
calcRatio: function(e) {
return (e - this.min) / (this.max - this.min);
},
calcPercent: function(e) {
return this.calcRatio(e) * 100;
},
updateBarPosition: function(e) {
this.$.bar.applyStyle("width", e + "%");
},
animateProgressTo: function(e) {
this.$.progressAnimator.play({
startValue: this.progress,
endValue: e,
node: this.hasNode()
});
},
progressAnimatorStep: function(e) {
return this.setProgress(e.value), !0;
},
progressAnimatorComplete: function(e) {
return this.doAnimateProgressFinish(e), !0;
}
});

// ProgressButton.js

enyo.kind({
name: "onyx.ProgressButton",
kind: "onyx.ProgressBar",
classes: "onyx-progress-button",
events: {
onCancel: ""
},
components: [ {
name: "progressAnimator",
kind: "Animator",
onStep: "progressAnimatorStep",
onEnd: "progressAnimatorComplete"
}, {
name: "bar",
classes: "onyx-progress-bar-bar onyx-progress-button-bar"
}, {
name: "client",
classes: "onyx-progress-button-client"
}, {
kind: "onyx.Icon",
src: "$lib/onyx/images/progress-button-cancel.png",
classes: "onyx-progress-button-icon",
ontap: "cancelTap"
} ],
cancelTap: function() {
this.doCancel();
}
});

// Scrim.js

enyo.kind({
name: "onyx.Scrim",
showing: !1,
classes: "onyx-scrim enyo-fit",
floating: !1,
create: function() {
this.inherited(arguments), this.zStack = [], this.floating && this.setParent(enyo.floatingLayer);
},
showingChanged: function() {
this.floating && this.showing && !this.hasNode() && this.render(), this.inherited(arguments);
},
addZIndex: function(e) {
enyo.indexOf(e, this.zStack) < 0 && this.zStack.push(e);
},
removeZIndex: function(e) {
enyo.remove(e, this.zStack);
},
showAtZIndex: function(e) {
this.addZIndex(e), e !== undefined && this.setZIndex(e), this.show();
},
hideAtZIndex: function(e) {
this.removeZIndex(e);
if (!this.zStack.length) this.hide(); else {
var t = this.zStack[this.zStack.length - 1];
this.setZIndex(t);
}
},
setZIndex: function(e) {
this.zIndex = e, this.applyStyle("z-index", e);
},
make: function() {
return this;
}
}), enyo.kind({
name: "onyx.scrimSingleton",
kind: null,
constructor: function(e, t) {
this.instanceName = e, enyo.setObject(this.instanceName, this), this.props = t || {};
},
make: function() {
var e = new onyx.Scrim(this.props);
return enyo.setObject(this.instanceName, e), e;
},
showAtZIndex: function(e) {
var t = this.make();
t.showAtZIndex(e);
},
hideAtZIndex: enyo.nop,
show: function() {
var e = this.make();
e.show();
}
}), new onyx.scrimSingleton("onyx.scrim", {
floating: !0,
classes: "onyx-scrim-translucent"
}), new onyx.scrimSingleton("onyx.scrimTransparent", {
floating: !0,
classes: "onyx-scrim-transparent"
});

// Slider.js

enyo.kind({
name: "onyx.Slider",
kind: "onyx.ProgressBar",
classes: "onyx-slider",
published: {
value: 0,
lockBar: !0,
tappable: !0
},
events: {
onChange: "",
onChanging: "",
onAnimateFinish: ""
},
showStripes: !1,
handlers: {
ondragstart: "dragstart",
ondrag: "drag",
ondragfinish: "dragfinish"
},
moreComponents: [ {
kind: "Animator",
onStep: "animatorStep",
onEnd: "animatorComplete"
}, {
classes: "onyx-slider-taparea"
}, {
name: "knob",
classes: "onyx-slider-knob"
} ],
create: function() {
this.inherited(arguments), this.createComponents(this.moreComponents), this.valueChanged();
},
valueChanged: function() {
this.value = this.clampValue(this.min, this.max, this.value);
var e = this.calcPercent(this.value);
this.updateKnobPosition(e), this.lockBar && this.setProgress(this.value);
},
updateKnobPosition: function(e) {
this.$.knob.applyStyle("left", e + "%");
},
calcKnobPosition: function(e) {
var t = e.clientX - this.hasNode().getBoundingClientRect().left;
return t / this.getBounds().width * (this.max - this.min) + this.min;
},
dragstart: function(e, t) {
if (t.horizontal) return t.preventDefault(), this.dragging = !0, !0;
},
drag: function(e, t) {
if (this.dragging) {
var n = this.calcKnobPosition(t);
return this.setValue(n), this.doChanging({
value: this.value
}), !0;
}
},
dragfinish: function(e, t) {
return this.dragging = !1, t.preventTap(), this.doChange({
value: this.value
}), !0;
},
tap: function(e, t) {
if (this.tappable) {
var n = this.calcKnobPosition(t);
return this.tapped = !0, this.animateTo(n), !0;
}
},
animateTo: function(e) {
this.$.animator.play({
startValue: this.value,
endValue: e,
node: this.hasNode()
});
},
animatorStep: function(e) {
return this.setValue(e.value), !0;
},
animatorComplete: function(e) {
return this.tapped && (this.tapped = !1, this.doChange({
value: this.value
})), this.doAnimateFinish(e), !0;
}
});

// RangeSlider.js

enyo.kind({
name: "onyx.RangeSlider",
kind: "onyx.ProgressBar",
classes: "onyx-slider",
published: {
rangeMin: 0,
rangeMax: 100,
rangeStart: 0,
rangeEnd: 100,
increment: 0,
beginValue: 0,
endValue: 0
},
events: {
onChange: "",
onChanging: ""
},
showStripes: !1,
showLabels: !1,
handlers: {
ondragstart: "dragstart",
ondrag: "drag",
ondragfinish: "dragfinish",
ondown: "down"
},
moreComponents: [ {
name: "startKnob",
classes: "onyx-slider-knob"
}, {
name: "endKnob",
classes: "onyx-slider-knob onyx-range-slider-knob"
} ],
create: function() {
this.inherited(arguments), this.createComponents(this.moreComponents), this.initControls();
},
rendered: function() {
this.inherited(arguments);
var e = this.calcPercent(this.beginValue);
this.updateBarPosition(e);
},
initControls: function() {
this.$.bar.applyStyle("position", "relative"), this.refreshRangeSlider(), this.showLabels && (this.$.startKnob.createComponent({
name: "startLabel",
kind: "onyx.RangeSliderKnobLabel"
}), this.$.endKnob.createComponent({
name: "endLabel",
kind: "onyx.RangeSliderKnobLabel"
}));
},
refreshRangeSlider: function() {
this.beginValue = this.calcKnobPercent(this.rangeStart), this.endValue = this.calcKnobPercent(this.rangeEnd), this.beginValueChanged(), this.endValueChanged();
},
calcKnobRatio: function(e) {
return (e - this.rangeMin) / (this.rangeMax - this.rangeMin);
},
calcKnobPercent: function(e) {
return this.calcKnobRatio(e) * 100;
},
beginValueChanged: function(e) {
if (e === undefined) {
var t = this.calcPercent(this.beginValue);
this.updateKnobPosition(t, this.$.startKnob);
}
},
endValueChanged: function(e) {
if (e === undefined) {
var t = this.calcPercent(this.endValue);
this.updateKnobPosition(t, this.$.endKnob);
}
},
calcKnobPosition: function(e) {
var t = e.clientX - this.hasNode().getBoundingClientRect().left;
return t / this.getBounds().width * (this.max - this.min) + this.min;
},
updateKnobPosition: function(e, t) {
t.applyStyle("left", e + "%"), this.updateBarPosition();
},
updateBarPosition: function() {
if (this.$.startKnob !== undefined && this.$.endKnob !== undefined) {
var e = this.calcKnobPercent(this.rangeStart), t = this.calcKnobPercent(this.rangeEnd) - e;
this.$.bar.applyStyle("left", e + "%"), this.$.bar.applyStyle("width", t + "%");
}
},
calcIncrement: function(e) {
return Math.ceil(e / this.increment) * this.increment;
},
calcRangeRatio: function(e) {
return e / 100 * (this.rangeMax - this.rangeMin) + this.rangeMin - this.increment / 2;
},
swapZIndex: function(e) {
e === "startKnob" ? (this.$.startKnob.applyStyle("z-index", 1), this.$.endKnob.applyStyle("z-index", 0)) : e === "endKnob" && (this.$.startKnob.applyStyle("z-index", 0), this.$.endKnob.applyStyle("z-index", 1));
},
down: function(e, t) {
this.swapZIndex(e.name);
},
dragstart: function(e, t) {
if (t.horizontal) return t.preventDefault(), this.dragging = !0, !0;
},
drag: function(e, t) {
if (this.dragging) {
var n = this.calcKnobPosition(t);
if (e.name === "startKnob" && n >= 0) {
if (n <= this.endValue && t.xDirection === -1 || n <= this.endValue) {
this.setBeginValue(n);
var r = this.calcRangeRatio(this.beginValue), i = this.increment ? this.calcIncrement(r) : r, s = this.calcKnobPercent(i);
this.updateKnobPosition(s, this.$.startKnob), this.setRangeStart(i), this.doChanging({
value: i
});
}
} else if (e.name === "endKnob" && n <= 100) if (n >= this.beginValue && t.xDirection === 1 || n >= this.beginValue) {
this.setEndValue(n);
var r = this.calcRangeRatio(this.endValue), i = this.increment ? this.calcIncrement(r) : r, s = this.calcKnobPercent(i);
this.updateKnobPosition(s, this.$.endKnob), this.setRangeEnd(i), this.doChanging({
value: i
});
}
return !0;
}
},
dragfinish: function(e, t) {
this.dragging = !1, t.preventTap();
if (e.name === "startKnob") {
var n = this.calcRangeRatio(this.beginValue);
this.doChange({
value: n,
startChanged: !0
});
} else if (e.name === "endKnob") {
var n = this.calcRangeRatio(this.endValue);
this.doChange({
value: n,
startChanged: !1
});
}
return !0;
},
rangeMinChanged: function() {
this.refreshRangeSlider();
},
rangeMaxChanged: function() {
this.refreshRangeSlider();
},
rangeStartChanged: function() {
this.refreshRangeSlider();
},
rangeEndChanged: function() {
this.refreshRangeSlider();
},
setStartLabel: function(e) {
this.$.startKnob.waterfallDown("onSetLabel", e);
},
setEndLabel: function(e) {
this.$.endKnob.waterfallDown("onSetLabel", e);
}
}), enyo.kind({
name: "onyx.RangeSliderKnobLabel",
classes: "onyx-range-slider-label",
handlers: {
onSetLabel: "setLabel"
},
setLabel: function(e, t) {
this.setContent(t);
}
});

// Item.js

enyo.kind({
name: "onyx.Item",
classes: "onyx-item",
tapHighlight: !0,
handlers: {
onhold: "hold",
onrelease: "release"
},
hold: function(e, t) {
this.tapHighlight && onyx.Item.addFlyweightClass(this.controlParent || this, "onyx-highlight", t);
},
release: function(e, t) {
this.tapHighlight && onyx.Item.removeFlyweightClass(this.controlParent || this, "onyx-highlight", t);
},
statics: {
addFlyweightClass: function(e, t, n, r) {
var i = n.flyweight;
if (i) {
var s = r !== undefined ? r : n.index;
i.performOnRow(s, function() {
e.hasClass(t) ? e.setClassAttribute(e.getClassAttribute()) : e.addClass(t);
}), e.removeClass(t);
}
},
removeFlyweightClass: function(e, t, n, r) {
var i = n.flyweight;
if (i) {
var s = r !== undefined ? r : n.index;
i.performOnRow(s, function() {
e.hasClass(t) ? e.removeClass(t) : e.setClassAttribute(e.getClassAttribute());
});
}
}
}
});

// Spinner.js

enyo.kind({
name: "onyx.Spinner",
classes: "onyx-spinner",
stop: function() {
this.setShowing(!1);
},
start: function() {
this.setShowing(!0);
},
toggle: function() {
this.setShowing(!this.getShowing());
}
});

// MoreToolbar.js

enyo.kind({
name: "onyx.MoreToolbar",
classes: "onyx-toolbar onyx-more-toolbar",
menuClass: "",
movedClass: "",
layoutKind: "FittableColumnsLayout",
noStretch: !0,
handlers: {
onHide: "reflow"
},
published: {
clientLayoutKind: "FittableColumnsLayout"
},
tools: [ {
name: "client",
noStretch: !0,
fit: !0,
classes: "onyx-toolbar-inline"
}, {
name: "nard",
kind: "onyx.MenuDecorator",
showing: !1,
onActivate: "activated",
components: [ {
kind: "onyx.IconButton",
classes: "onyx-more-button"
}, {
name: "menu",
kind: "onyx.Menu",
scrolling: !1,
classes: "onyx-more-menu"
} ]
} ],
initComponents: function() {
this.menuClass && this.menuClass.length > 0 && !this.$.menu.hasClass(this.menuClass) && this.$.menu.addClass(this.menuClass), this.createChrome(this.tools), this.inherited(arguments), this.$.client.setLayoutKind(this.clientLayoutKind);
},
clientLayoutKindChanged: function() {
this.$.client.setLayoutKind(this.clientLayoutKind);
},
reflow: function() {
this.inherited(arguments), this.isContentOverflowing() ? (this.$.nard.show(), this.popItem() && this.reflow()) : this.tryPushItem() ? this.reflow() : this.$.menu.children.length || (this.$.nard.hide(), this.$.menu.hide());
},
activated: function(e, t) {
this.addRemoveClass("active", t.originator.active);
},
popItem: function() {
var e = this.findCollapsibleItem();
if (e) {
this.movedClass && this.movedClass.length > 0 && !e.hasClass(this.movedClass) && e.addClass(this.movedClass), this.$.menu.addChild(e, null);
var t = this.$.menu.hasNode();
return t && e.hasNode() && e.insertNodeInParent(t), !0;
}
},
pushItem: function() {
var e = this.$.menu.children, t = e[0];
if (t) {
this.movedClass && this.movedClass.length > 0 && t.hasClass(this.movedClass) && t.removeClass(this.movedClass), this.$.client.addChild(t);
var n = this.$.client.hasNode();
if (n && t.hasNode()) {
var r, i;
for (var s = 0; s < this.$.client.children.length; s++) {
var o = this.$.client.children[s];
if (o.toolbarIndex !== undefined && o.toolbarIndex != s) {
r = o, i = s;
break;
}
}
if (r && r.hasNode()) {
t.insertNodeInParent(n, r.node);
var u = this.$.client.children.pop();
this.$.client.children.splice(i, 0, u);
} else t.appendNodeToParent(n);
}
return !0;
}
},
tryPushItem: function() {
if (this.pushItem()) {
if (!this.isContentOverflowing()) return !0;
this.popItem();
}
},
isContentOverflowing: function() {
if (this.$.client.hasNode()) {
var e = this.$.client.children, t = e[e.length - 1].hasNode();
if (t) return this.$.client.reflow(), t.offsetLeft + t.offsetWidth > this.$.client.node.clientWidth;
}
},
findCollapsibleItem: function() {
var e = this.$.client.children;
for (var t = e.length - 1; c = e[t]; t--) {
if (!c.unmoveable) return c;
c.toolbarIndex === undefined && (c.toolbarIndex = t);
}
}
});

// App.js

enyo.kind({
name: "App",
fit: !0,
classes: "onyx",
hasDrawn: !1,
handlers: {
onSettings: "drawIcons"
},
components: [ {
content: "`",
classes: "icon",
style: "font-size: 2em; position: absolute; right: 5px; top: 0px; margin: 0px; padding: 0px; color: white; opacity: 0.5;",
onclick: "settingsClick",
onmouseover: "settingsSpin",
onmouseout: "settingsOff"
}, {
name: "search",
classes: "search",
components: [ {
name: "inpd",
kind: "onyx.InputDecorator",
classes: "searchInput",
alwaysLooksFocused: !0,
components: [ {
name: "searchText",
kind: "onyx.Input",
onfocus: "fsearch",
onblur: "bsearch",
defaultFocus: !1,
selectOnFocus: !0,
placeholder: "Just type...",
onkeyup: "inputChanged",
alwaysLooksFocused: !0
} ]
} ]
}, {
name: "spot",
tag: "div",
classes: "spot",
onmouseover: "spotIn",
onmouseout: "shrinkBack"
}, {
name: "slices",
showing: !1,
components: [ {
kind: "Slice",
position: 0,
onmouseover: "sliceIn",
onmouseout: "sliceOut",
onclick: "fastClick"
}, {
kind: "Slice",
position: 1,
onmouseover: "sliceIn",
onmouseout: "sliceOut",
onclick: "fastClick"
}, {
kind: "Slice",
position: 2,
onmouseover: "sliceIn",
onmouseout: "sliceOut",
onclick: "fastClick"
}, {
kind: "Slice",
position: 3,
onmouseover: "sliceIn",
onmouseout: "sliceOut",
onclick: "fastClick"
}, {
kind: "Slice",
position: 4,
onmouseover: "sliceIn",
onmouseout: "sliceOut",
onclick: "fastClick"
} ]
}, {
kind: "Time"
}, {
kind: "Settings",
name: "settings"
} ],
itemSelected: function(e, t) {
Settings.settings.selected = t.content, this.bubble("onSettings"), this.waterfall("onSettings");
},
profiles: function(e) {
this.$.profileMenu.setShowing(!0), this.$.L.applyStyle("opacity", 1);
},
profilesOut: function(e) {
this.$.profileMenu.setShowing(!1), this.$.L.applyStyle("opacity", .5);
},
settingsClick: function(e) {
this.settingsOff(e), this.$.settings.show();
},
settingsSpin: function(e) {
enyo.jq(e).stop(!0, !1).animate({
opacity: 1
}).rotate({
animateTo: 360,
callback: enyo.bind(this, function() {
enyo.jq(e).rotate(0);
})
});
},
settingsOff: function(e) {
enyo.jq(e).stop(!0, !1).animate({
opacity: .5
});
},
create: function() {
this.inherited(arguments), $(document).keyup(enyo.bind(this, function(e) {
e.keyCode == 27 ? this.spotOut() : this.fsearch();
}));
},
drawIcons: function(e) {
var t = Settings.settings.favorites[Settings.settings.selected], n = this.$.slices.getClientControls();
for (var r in n) n.hasOwnProperty(r) && (n[r].url = t[r].url, n[r].icon = t[r].icon, n[r].hover = t[r].hover);
this.$.slices.render(), this.firstload ? this.spotOut() : this.firstload = !0;
},
fastClick: function(e) {
window.location = e.url;
},
sliceIn: function(e) {
if (!this.selectedFinal && !this.shrinking) {
this.moving = !0, this.expanded = !0;
if (this.position !== e.position) {
this.position = e.position;
var t = enyo.rgb(e.hover);
enyo.jq(this.$.spot).stop(!0, !1).animate({
backgroundColor: t ? "rgba(" + t.r + "," + t.g + "," + t.b + ",0.5)" : "transparent",
top: e.positions[e.position].top,
left: e.positions[e.position].left,
width: "200px",
height: "200px",
marginLeft: "-100px",
marginTop: "-100px"
}, 1e3, "easeOutElastic", enyo.bind(this, function() {
this.moving = !1, this.startExpanding(e);
}));
}
}
},
sliceOut: function() {
this.selectedFinal || (this.position = null, this.shrinkBack(!0));
},
fsearch: function() {
this.hasDrawn ? enyo.jq(this.$.inpd.getId()).stop(!0, !1).animate({
opacity: 1
}) : this.hasDrawn = !0;
},
bsearch: function() {
enyo.jq(this.$.inpd.getId()).stop(!0, !1).animate({
opacity: .3
});
},
inputChanged: function(e, t) {
this.selectedFinal || t.keyCode === 13 && this.$.searchText.getValue().trim() !== "" && (window.location = "https://www.google.com/search?q=" + this.$.searchText.getValue());
},
spotIn: function() {
if (!this.selectedFinal && !this.shrinking && !this.expanded) {
enyo.jq(this.$.search.getId()).fadeOut("fast"), enyo.jq(this.$.slices).fadeIn("slow");
if (!enyo.platform.firefox) {
var e = this.$.slices.getClientControls();
for (var t in e) e.hasOwnProperty(t) && enyo.jq(e[t]).animate({
top: e[t].positions[e[t].position].top,
left: e[t].positions[e[t].position].left
}, "slow", "easeOutExpo");
}
enyo.jq(this.$.spot.getId()).stop(!0, !1).animate({
width: "200px",
height: "200px",
marginLeft: "-100px",
marginTop: "-100px"
}, 1e3, "easeOutElastic", enyo.bind(this, function() {
this.expanded = !0, enyo.jq(this.$.spot).is(":hover");
}));
}
},
shrinkBack: function(e) {
this.selectedFinal || this.expanded && (!this.moving || e) && enyo.jq(this.$.spot.getId()).stop(!0, !1).animate({
top: "50%",
left: "50%",
width: "200px",
height: "200px",
marginLeft: "-100px",
marginTop: "-100px",
backgroundColor: "transparent"
}, 1e3, "swing", enyo.bind(this, function() {
this.moving = !1, enyo.jq(this.$.spot).is(":hover");
}));
},
spotOut: function(e) {
if (!this.selectedFinal) {
this.expanded = !1, this.shrinking = !0, this.stopExpanding(), enyo.jq(this.$.slices).fadeOut("slow");
if (!enyo.platform.firefox) {
var t = this.$.slices.getClientControls();
for (var n in t) t.hasOwnProperty(n) && enyo.jq(t[n]).animate({
top: "50%",
left: "50%"
}, "slow", "easeOutQuad");
}
enyo.jq(this.$.spot.getId()).stop(!0, !1).animate({
width: "100px",
height: "100px",
marginLeft: "-50px",
marginTop: "-50px",
top: "50%",
left: "50%",
backgroundColor: "transparent"
}, 1e3, "swing", enyo.bind(this, function() {
this.shrinking = !1, this.moving = !1;
}));
}
},
startExpanding: function(e) {
this.selectedFinal || this.moving || enyo.jq(this.$.spot.getId()).stop(!0, !1).animate({
width: "100px",
height: "100px",
marginLeft: "-50px",
marginTop: "-50px"
}, 1e3, "easeInCubic", enyo.bind(this, function() {
window.location = e.url || "#", this.selectedFinal = !0, enyo.jq(this.$.slices).fadeOut("fast"), enyo.jq(this.$.spot.getId()).animate({
width: "0%",
height: "0%",
marginLeft: "0",
marginTop: "0"
}, 300, enyo.bind(this, function() {
window.setTimeout(enyo.bind(this, function() {
enyo.jq(this.$.slices).fadeIn("fast"), enyo.jq(this.$.spot.getId()).stop(!0, !1).animate({
width: "200px",
height: "200px",
marginLeft: "-100px",
marginTop: "-100px"
}, enyo.bind(this, function() {
this.selectedFinal = !1, this.sliceOut(), this.shrinkBack();
}));
}), 1e3);
}));
}));
},
stopExpanding: function() {
enyo.jq(this.$.search.getId()).fadeIn("slow");
}
});

// Slice.js

enyo.kind({
name: "Slice",
classes: "slice",
published: {
color: "#007bff",
position: 0,
icon: "",
hover: "#ffffff"
},
components: [ {
name: "icon",
kind: "Image",
style: "max-height: 100px; max-width: 100px; display: table-cell; vertical-align: middle;"
} ],
positions: [ {
top: "20%",
left: "50%"
}, {
top: "37%",
left: "70%"
}, {
top: "37%",
left: "30%"
}, {
top: "67%",
left: "72.5%"
}, {
top: "67%",
left: "27.5%"
} ],
rendered: function() {
this.inherited(arguments);
var e = this.positions[this.position];
enyo.platform.firefox ? (this.applyStyle("top", e.top), this.applyStyle("left", e.left)) : (this.applyStyle("top", "50%"), this.applyStyle("left", "50%")), this.$.icon.setSrc(this.icon);
}
});

// ColorGenerator.js

enyo.kind({
name: "ColorGenerator",
canvas: [ {
tag: "canvas",
name: "canvas",
attributes: {
width: 500,
height: 500
}
} ],
generate: function(e, t) {
var n = {}, r = enyo.clone(this.canvas);
r.name = "canvas" + Math.round(Math.random() * 100), el = this.createComponent(r, {
tag: "canvas",
style: "visibility: hidden; position: absolute; top: -1000; left: -1000;"
}), this.render(), canvas = document.getElementById(el.getId()), context = canvas.getContext("2d");
var i = new Image;
i.crossOrigin = "", i.onload = function() {
context.drawImage(i, 0, 0);
var e = context.getImageData(0, 0, canvas.width, canvas.height), r = e.data;
for (var s = 0, o = r.length; s < o; s += 4) {
var u = r[s], a = r[s + 1], f = r[s + 2], l = enyo.hex(u, a, f);
l !== "#000000" && l !== "#ffffff" && (n[l] ? n[l]++ : n[l] = 1);
}
var c = [];
for (var h in n) n.hasOwnProperty(h) && c.push([ h, n[h] ]);
c.sort(function(e, t) {
return e[1] - t[1];
}), t(c[c.length - 1][0]);
}, i.src = e;
}
});

// Settings.js

enyo.kind({
name: "Settings",
kind: "onyx.Popup",
style: "background: #eee; color: black; width: 320px;",
statics: {
settings: {}
},
centered: !0,
modal: !0,
floating: !0,
scrim: !0,
handlers: {
onShow: "popupShown",
onHide: "popupHidden",
onEditFav: "editFav",
onSettingsUpdated: "setupdated"
},
rendered: function() {
this.inherited(arguments);
if (!this.hasRendered) {
this.hasRendered = !0, Settings.settings = JSON.parse(localStorage.getItem("settings")) || {
selected: "Favorites",
favorites: {
Favorites: [ {
icon: "assets/facebook.png",
url: "http://facebook.com",
hover: "#3d5b96"
}, {
icon: "assets/google.png",
url: "http://google.com",
hover: "#0f7f12"
}, {
icon: "assets/youtube.png",
url: "http://youtube.com",
hover: "#AF2B26"
}, {
icon: "assets/verge.png",
url: "http://theverge.com",
hover: "#d4dae0"
}, {
icon: "assets/reddit.png",
url: "http://reddit.com",
hover: "#ffffff"
} ]
}
};
var e = Settings.settings.favorites[Settings.settings.selected];
for (var t in e) e.hasOwnProperty(t) && enyo.prefetch(e[t].url);
this.bubble("onSettings"), this.waterfall("onSettings");
}
},
setupdated: function() {
this.bubble("onSettings"), this.waterfall("onSettings");
},
components: [ {
content: "Settings",
style: "font-size: 1.5em; margin-bottom: 10px;"
}, {
style: "height: 250px;",
components: [ {
kind: "MiniMap",
name: "minimap"
} ]
}, {
kind: "onyx.Button",
content: "Close",
onclick: "closeSettings",
style: "width: 100%;",
ontap: "closeModalPopup"
}, {
kind: "onyx.Popup",
style: "background: #eee; color: black; width: 320px;",
name: "editor",
modal: !0,
scrim: !0,
centered: !0,
floating: !0,
components: [ {
content: "Editing Favorite",
style: "font-size: 1.5em;"
}, {
style: "margin-top: 10px;",
components: [ {
content: "URL",
style: "font-weight: bold; font-size: 0.8em;"
}, {
kind: "onyx.InputDecorator",
components: [ {
kind: "onyx.Input",
value: "",
style: "width: 300px;",
name: "urlInput"
} ]
} ]
}, {
style: "margin-top: 10px;",
components: [ {
content: "Icon",
style: "font-weight: bold; font-size: 0.8em;"
}, {
kind: "onyx.InputDecorator",
components: [ {
kind: "onyx.Input",
value: "",
style: "width: 300px;",
name: "iconInput",
onkeyup: "goGenerate"
} ]
} ]
}, {
style: "margin-top: 10px;",
components: [ {
content: "Hover Color",
style: "font-weight: bold; font-size: 0.8em;"
}, {
kind: "onyx.InputDecorator",
components: [ {
kind: "onyx.Input",
name: "hoverInput",
style: "width: 300px;",
type: "color"
} ]
} ]
}, {
kind: "onyx.Button",
content: "Save",
onclick: "saveUpdate",
style: "width: 100%; margin-top: 20px;"
} ]
}, {
kind: "ColorGenerator",
name: "CG"
} ],
goGenerate: function(e) {
enyo.job("updateThumb", enyo.bind(this, function() {
this.$.CG.generate(e.getValue(), enyo.bind(this, function(e) {
console.log(e), this.$.hoverInput.setValue(e);
}));
}), 500);
},
saveUpdate: function() {
var e = Settings.settings.favorites[Settings.settings.selected], t = e[this.positionEdit];
t.url = this.$.urlInput.getValue(), t.icon = this.$.iconInput.getValue(), t.hover = this.$.hoverInput.getValue(), e[this.positionEdit] = t, Settings.settings.favorites[Settings.settings.selected] = e, this.$.editor.hide(), this.waterfallDown("onSettings"), localStorage.setItem("settings", JSON.stringify(Settings.settings));
},
closeSettings: function() {
this.hide(), this.bubble("onSettingsUpdated");
},
editFav: function(e, t) {
t.mouseOut();
var n = Settings.settings.favorites[Settings.settings.selected];
this.$.editor.show(), this.positionEdit = t.position, this.$.urlInput.setValue(n[t.position].url), this.$.iconInput.setValue(n[t.position].icon), this.$.hoverInput.setValue(n[t.position].hover);
}
}), enyo.kind({
name: "MiniMap",
style: "height: 200px; width: 320px;",
components: [ {
kind: "MiniSlice",
position: 0,
onclick: "editFav"
}, {
kind: "MiniSlice",
position: 1,
onclick: "editFav"
}, {
kind: "MiniSlice",
position: 2,
onclick: "editFav"
}, {
kind: "MiniSlice",
position: 3,
onclick: "editFav"
}, {
kind: "MiniSlice",
position: 4,
onclick: "editFav"
}, {
style: "width: 32px; height: 32px; margin-left: -16px; margin-top: -16px; position: relative; left: 50%; top: 50%; border: 2px solid black; border-radius: 100px;"
} ],
editFav: function(e) {
this.bubble("onEditFav", e);
}
}), enyo.kind({
name: "MiniSlice",
style: "width: 44px; height: 44px; margin-left: -22px; margin-top: -22px; position: absolute; border-radius: 100px; text-align: center;",
published: {
position: 0,
hover: "transparent"
},
handlers: {
onmouseover: "mouseOver",
onmouseout: "mouseOut",
onSettings: "updateView"
},
components: [ {
name: "icon",
kind: "Image",
style: "width: 32px; height: 32px; margin: 6px auto;"
} ],
positions: [ {
top: "25%",
left: "50%"
}, {
top: "37%",
left: "70%"
}, {
top: "37%",
left: "30%"
}, {
top: "59%",
left: "72%"
}, {
top: "59%",
left: "28%"
} ],
mouseOver: function() {
enyo.jq(this).stop(!0, !1).animate({
backgroundColor: this.hover
});
},
mouseOut: function() {
enyo.jq(this).stop(!0, !1).animate({
backgroundColor: "transparent"
});
},
create: function() {
this.inherited(arguments);
var e = this.positions[this.position];
this.applyStyle("top", e.top), this.applyStyle("left", e.left);
},
updateView: function() {
var e = Settings.settings.favorites[Settings.settings.selected];
this.$.icon.setSrc(e[this.position].icon), this.setHover(e[this.position].hover);
}
});

// Time.js

enyo.kind({
name: "Time",
classes: "footer",
components: [ {
name: "time",
classes: "time"
}, {
name: "date",
classes: "date"
} ],
months: [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
create: function() {
this.inherited(arguments), this.updateTime(), window.setInterval(enyo.bind(this, "updateTime"), 250);
},
updateTime: function() {
var e = new Date, t = e.getHours();
t = t > 12 ? t - 12 : t, t = t == 0 ? 12 : t, this.$.time.setContent(t + ":" + ("0" + e.getMinutes()).slice(-2)), this.$.date.setContent(this.months[e.getMonth()] + " " + e.getDate() + ", " + e.getFullYear());
}
});
