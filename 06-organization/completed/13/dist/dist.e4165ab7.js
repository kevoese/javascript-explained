parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"CQsF":[function(require,module,exports) {
var define;
var e;function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}parcelRequire=function(o,n,r,u){var i,f="function"==typeof parcelRequire&&parcelRequire,c="function"==typeof require&&require;function l(e,t){if(!n[e]){if(!o[e]){var r="function"==typeof parcelRequire&&parcelRequire;if(!t&&r)return r(e,!0);if(f)return f(e,!0);if(c&&"string"==typeof e)return c(e);var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}a.resolve=function(t){return o[e][1][t]||t},a.cache={};var i=n[e]=new l.Module(e);o[e][0].call(i.exports,a,i,i.exports,this)}return n[e].exports;function a(e){return l(a.resolve(e))}}l.isParcelRequire=!0,l.Module=function(e){this.id=e,this.bundle=l,this.exports={}},l.modules=o,l.cache=n,l.parent=f,l.register=function(e,t){o[e]=[function(e,o){o.exports=t},{}]};for(var a=0;a<r.length;a++)try{l(r[a])}catch(o){i||(i=o)}if(r.length){var d=l(r[r.length-1]);"object"==("undefined"==typeof exports?"undefined":t(exports))&&"undefined"!=typeof module?module.exports=d:"function"==typeof e&&e.amd&&e(function(){return d})}if(parcelRequire=l,i)throw i;return l}({itQ5:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n={name:"Test Site"};o.default=n},{}],g6BC:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=function(e){return e&&e.__esModule?e:{default:e}}(e("../../config"));var r=function(){return"<h1>".concat(n.default.name,"</h1>")};o.default=r},{"../../config":"itQ5"}],wKfT:[function(e,t,o){"use strict";Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var n=[{title:"Hello JavaScript"},{title:"Hello Code Organization"},{title:"Hello Tooling!"}];var r=function(){var e="<ul>";return n.forEach(function(t){return e+="<li>".concat(t.title,"</li>")}),e+="</ul>"};o.default=r},{}],Focm:[function(e,t,o){"use strict";var n=u(e("./components/header")),r=u(e("./components/posts"));function u(e){return e&&e.__esModule?e:{default:e}}var i=document.querySelector("#app"),f=(0,n.default)();f+=(0,r.default)(),i.insertAdjacentHTML("beforeend",f)},{"./components/header":"g6BC","./components/posts":"wKfT"}]},{},["Focm"]);
},{}]},{},["CQsF"], null)
//# sourceMappingURL=dist.e4165ab7.js.map