/*! For license information please see commons.js.LICENSE.txt */
(self.webpackChunkweb_intro_presentation=self.webpackChunkweb_intro_presentation||[]).push([[351],{749:function(){!function(t,e){"use strict";var r,n,o,i=(r=t.createElement("dummy").style,n="Webkit Moz O ms Khtml".split(" "),o={},function(t){if(void 0===o[t]){var e=t.charAt(0).toUpperCase()+t.substr(1),i=(t+" "+n.join(e+" ")+e).split(" ");for(var a in o[t]=null,i)if(void 0!==r[i[a]]){o[t]=i[a];break}}return o[t]}),a=function(t){return[].slice.call(t)},c=function(t,e){var r,n;for(r in e)e.hasOwnProperty(r)&&null!==(n=i(r))&&(t.style[n]=e[r]);return t},s=function(t,e){return isNaN(t)?e||0:Number(t)},u=function(e){return t.getElementById(e)},l=function(e,r,n){var o=t.createEvent("CustomEvent");o.initCustomEvent(r,!0,!0,n),e.dispatchEvent(o)},f=function(t){return" translate3d("+t.x+"px,"+t.y+"px,"+t.z+"px) "},h=function(t,e){var r=" rotateX("+t.x+"deg) ",n=" rotateY("+t.y+"deg) ",o=" rotateZ("+t.z+"deg) ";return e?o+n+r:r+n+o},p=function(t){return" scale("+t+") "},d=function(t){return" perspective("+t+"px) "},v=function(){return u(e.location.hash.replace(/^#\/?/,""))},m=function(t){var r=e.innerHeight/t.height,n=e.innerWidth/t.width,o=r>n?n:r;return t.maxScale&&o>t.maxScale&&(o=t.maxScale),t.minScale&&o<t.minScale&&(o=t.minScale),o},y=t.body,g=navigator.userAgent.toLowerCase(),w=null!==i("perspective")&&y.classList&&y.dataset&&-1===g.search(/(iphone)|(ipod)|(android)/);w?(y.classList.remove("impress-not-supported"),y.classList.add("impress-supported")):y.className+=" impress-not-supported ";var b={},L=function(){return!1};(e.impress=function(r){if(!w)return{init:L,goto:L,prev:L,next:L};if(b["impress-root-"+(r=r||"impress")])return b["impress-root-"+r];var n={},o=null,i=null,g=null,x=null,E=null,k=u(r),S=t.createElement("div"),j=!1,O=null,_=function(t,e){var r=t.dataset,o={translate:{x:s(r.x),y:s(r.y),z:s(r.z)},rotate:{x:s(r.rotateX),y:s(r.rotateY),z:s(r.rotateZ||r.rotate)},scale:s(r.scale,1),el:t};t.id||(t.id="step-"+(e+1)),n["impress-"+t.id]=o,c(t,{position:"absolute",transform:"translate(-50%,-50%)"+f(o.translate)+h(o.rotate)+p(o.scale),transformStyle:"preserve-3d"})},A=null,N=function(t,r){if(!j||!(t=function(t){return"number"==typeof t?t=t<0?g[g.length+t]:g[t]:"string"==typeof t&&(t=u(t)),t&&t.id&&n["impress-"+t.id]?t:null}(t)))return!1;e.scrollTo(0,0);var a=n["impress-"+t.id];o&&(o.classList.remove("active"),y.classList.remove("impress-on-"+o.id)),t.classList.add("active"),y.classList.add("impress-on-"+t.id);var v={rotate:{x:-a.rotate.x,y:-a.rotate.y,z:-a.rotate.z},translate:{x:-a.translate.x,y:-a.translate.y,z:-a.translate.z},scale:1/a.scale},w=v.scale>=i.scale,b=(r=s(r,x.transitionDuration))/2;t===o&&(E=m(x));var L=v.scale*E;return o&&o!==t&&function(t){O===t&&(l(t,"impress:stepleave"),O=null)}(o),c(k,{transform:d(x.perspective/L)+p(L),transitionDuration:r+"ms",transitionDelay:(w?b:0)+"ms"}),c(S,{transform:h(v.rotate,!0)+f(v.translate),transitionDuration:r+"ms",transitionDelay:(w?0:b)+"ms"}),(i.scale===v.scale||i.rotate.x===v.rotate.x&&i.rotate.y===v.rotate.y&&i.rotate.z===v.rotate.z&&i.translate.x===v.translate.x&&i.translate.y===v.translate.y&&i.translate.z===v.translate.z)&&(b=0),i=v,o=t,e.clearTimeout(A),A=e.setTimeout((function(){!function(t){O!==t&&(l(t,"impress:stepenter"),O=t)}(o)}),r+b),t};return k.addEventListener("impress:init",(function(){g.forEach((function(t){t.classList.add("future")})),k.addEventListener("impress:stepenter",(function(t){t.target.classList.remove("past"),t.target.classList.remove("future"),t.target.classList.add("present")}),!1),k.addEventListener("impress:stepleave",(function(t){t.target.classList.remove("present"),t.target.classList.add("past")}),!1)}),!1),k.addEventListener("impress:init",(function(){var t="";k.addEventListener("impress:stepenter",(function(r){e.location.hash=t="#/"+r.target.id}),!1),e.addEventListener("hashchange",(function(){e.location.hash!==t&&N(v())}),!1),N(v()||g[0],0)}),!1),y.classList.add("impress-disabled"),b["impress-root-"+r]={init:function(){if(!j){var e,n=("meta[name='viewport']",(e=e||t).querySelector("meta[name='viewport']")||t.createElement("meta"));n.content="width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no",n.parentNode!==t.head&&(n.name="viewport",t.head.appendChild(n));var o=k.dataset;x={width:s(o.width,1024),height:s(o.height,768),maxScale:s(o.maxScale,1),minScale:s(o.minScale,0),perspective:s(o.perspective,1e3),transitionDuration:s(o.transitionDuration,1e3)},E=m(x),a(k.childNodes).forEach((function(t){S.appendChild(t)})),k.appendChild(S),t.documentElement.style.height="100%",c(y,{height:"100%",overflow:"hidden"});var u={position:"absolute",transformOrigin:"top left",transition:"all 0s ease-in-out",transformStyle:"preserve-3d"};c(k,u),c(k,{top:"50%",left:"50%",transform:d(x.perspective/E)+p(E)}),c(S,u),y.classList.remove("impress-disabled"),y.classList.add("impress-enabled"),g=function(e,r){return a((r=r||t).querySelectorAll(".step"))}(0,k),g.forEach(_),i={translate:{x:0,y:0,z:0},rotate:{x:0,y:0,z:0},scale:1},j=!0,l(k,"impress:init",{api:b["impress-root-"+r]})}},goto:N,next:function(){var t=g.indexOf(o)+1;return t=t<g.length?g[t]:g[0],N(t)},prev:function(){var t=g.indexOf(o)-1;return t=t>=0?g[t]:g[g.length-1],N(t)}}}).supported=w}(document,window),function(t,e){"use strict";t.addEventListener("impress:init",(function(r){var n,o,i=r.detail.api;t.addEventListener("keydown",(function(t){(9===t.keyCode||t.keyCode>=32&&t.keyCode<=34||t.keyCode>=37&&t.keyCode<=40)&&t.preventDefault()}),!1),t.addEventListener("keyup",(function(t){if(9===t.keyCode||t.keyCode>=32&&t.keyCode<=34||t.keyCode>=37&&t.keyCode<=40){switch(t.keyCode){case 33:case 37:case 38:i.prev();break;case 9:case 32:case 34:case 39:case 40:i.next()}t.preventDefault()}}),!1),t.addEventListener("click",(function(e){for(var r=e.target;"A"!==r.tagName&&r!==t.documentElement;)r=r.parentNode;if("A"===r.tagName){var n=r.getAttribute("href");n&&"#"===n[0]&&(r=t.getElementById(n.slice(1)))}i.goto(r)&&(e.stopImmediatePropagation(),e.preventDefault())}),!1),t.addEventListener("click",(function(e){for(var r=e.target;(!r.classList.contains("step")||r.classList.contains("active"))&&r!==t.documentElement;)r=r.parentNode;i.goto(r)&&e.preventDefault()}),!1),t.addEventListener("touchstart",(function(t){if(1===t.touches.length){var r=t.touches[0].clientX,n=.3*e.innerWidth,o=null;r<n?o=i.prev():r>e.innerWidth-n&&(o=i.next()),o&&t.preventDefault()}}),!1),e.addEventListener("resize",(n=function(){i.goto(t.querySelector(".active"),500)},250,o=null,function(){var t=this,e=arguments;clearTimeout(o),o=setTimeout((function(){n.apply(t,e)}),250)}),!1)}),!1)}(document,window)},472:function(t,e,r){"use strict";function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(){o=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",s=a.asyncIterator||"@@asyncIterator",u=a.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function f(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,a=Object.create(o.prototype),c=new O(n||[]);return i(a,"_invoke",{value:E(t,r,c)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=f;var p={};function d(){}function v(){}function m(){}var y={};l(y,c,(function(){return this}));var g=Object.getPrototypeOf,w=g&&g(g(_([])));w&&w!==e&&r.call(w,c)&&(y=w);var b=m.prototype=d.prototype=Object.create(y);function L(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function o(i,a,c,s){var u=h(t[i],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==n(f)&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,c,s)}),(function(t){o("throw",t,c,s)})):e.resolve(f).then((function(t){l.value=t,c(l)}),(function(t){return o("throw",t,c,s)}))}s(u.arg)}var a;i(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return a=a?a.then(n,n):n()}})}function E(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=k(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=h(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===p)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}function k(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,k(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),p;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,p;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,p):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,p)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function _(t){if(t){var e=t[c];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return v.prototype=m,i(b,"constructor",{value:m,configurable:!0}),i(m,"constructor",{value:v,configurable:!0}),v.displayName=l(m,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,l(t,u,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},L(x.prototype),l(x.prototype,s,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(f(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},L(b),l(b,u,"Generator"),l(b,c,(function(){return this})),l(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},t}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function a(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void r(t)}c.done?e(s):Promise.resolve(s).then(n,o)}function c(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,s,"next",t)}function s(t){a(i,n,o,c,s,"throw",t)}c(void 0)}))}}r.d(e,{B:function(){return S}}),r(666),r(749);var s="impress-anim",u="impress-page",l={animations:{title:"Animations Slides",icon:"fa fa-object-group"},slideUp:{title:"Slide Up/Down",icon:"fa fa-film"},slideLeft:{title:"Slide Right/Left",icon:"fa fa-film fa-rotate-90"},fade:{title:"Fade",icon:"fa fa-gg"},clock:{title:"Clock",icon:"fa fa-clock-o"}};function f(t){return document.querySelector(t)}function h(t){return document.querySelectorAll(t)}function p(t,e){return localStorage.getItem("".concat(e,"-").concat(t))}function d(t,e,r){r?localStorage.setItem("".concat(e,"-").concat(t),r):localStorage.removeItem("".concat(e,"-").concat(t))}function v(t,e){for(var r=[],n=t.length,o=0;o<n;o+=e){var i=t.slice(o,o+e);r.push(i)}return r}var m={js:"ace/mode/javascript",ts:"ace/mode/typescript",jsx:"ace/mode/jsx",html:"ace/mode/html",css:"ace/mode/css",shell:"ace/mode/sh"};function y(t){return g.apply(this,arguments)}function g(){return g=c(o().mark((function t(e){var r,n;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=Array.from(h(".step pre")),!(e||r.length<=20)){t.next=5;break}return n=v(r,e?30:10),t.next=5,n.reduce(function(){var t=c(o().mark((function t(e,r){return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e;case 2:return t.next=4,w(r);case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),0);case 5:case"end":return t.stop()}}),t)}))),g.apply(this,arguments)}function w(t){return new Promise((function(e){t.forEach((function(t){var e=t.dataset.type||"html",r=t.dataset.highlight||"",n="true"===t.dataset.disableBeautify,o=ace.edit(t),i=ace.require("ace/ext/beautify"),a=o.getSession();o.setReadOnly(!0),a.setTabSize(2),a.setMode(m[e]),r&&r.split(/\s*,\s*/i).forEach((function(t){return a.highlightLines(t-1)})),"jsx"===e||n||i.beautify(a),o.setOptions({maxLines:1/0})})),setTimeout(e,5)}))}function b(t){var e=t.querySelector("h1");return e||(console.warn("h1 not present. fallback to h2",t),e=t.querySelector("h2")),e.innerHTML}function L(t){var e=Array.from(h("div.step.toc-el")),r=function(t){return t.reduce((function(t,e,r){return t[e.id]=r+1,t}),{})}(t),n=e.map((function(t){return{id:t.id,text:b(t),pageNr:r[t.id]}}));f("#toc ol").innerHTML=n.map((function(t){return'<li><a href="#'.concat(t.id,'" data-page="').concat(t.pageNr,'">').concat(t.text,"</a></li>")})).join("")}function x(t){return t.map((function(e,r){e.setAttribute("data-current-page",r+1),e.setAttribute("data-total-pages",t.length);var n=e.classList.contains("no-toc")?"no-toc":"";return'<a id="toc-'.concat(e.id,'" class="').concat(n,'" href="#').concat(e.id,'" title="').concat(e.id,'">').concat(r+1,"</a>")})).join("")}function E(t,e){"fade"===e&&document.body.classList.add("anim-fade");var r=Math.max(2e3,500+140*t.length);return t.forEach((function(n,o){var i=0,a=0,c=1;if("slideUp"===e)a=792*o;else if("slideLeft"===e)i=1e3*o;else if("clock"===e)if(o){var s=360/(t.length-1)*(o-1)*Math.PI/180;i=Math.sin(s)*r,a=-Math.cos(s)*r}else c=(t.length+15)/10;n.setAttribute("data-x",i),n.setAttribute("data-y",a),n.setAttribute("data-scale",c),n.setAttribute("data-rotate","0"),n.setAttribute("data-z","0"),n.setAttribute("data-rotate-x","0"),n.setAttribute("data-rotate-y","0")})),"clock"===e&&(function(t){var e=document.createElement("div");e.id="start-overview",e.classList.add("step","hide-page");var r=4.5;t>15&&(r=7),t>25&&(r=10),t>50&&(r=20.5),e.setAttribute("data-scale",r),document.getElementById("impress").prepend(e)}(t.length),t=Array.from(h(".step"))),t}function k(t){return Object.entries(l).map((function(e){var r,n,o=(n=2,function(t){if(Array.isArray(t))return t}(r=e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],s=!0,u=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);s=!0);}catch(t){u=!0,o=t}finally{try{if(!s&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(u)throw o}}return c}}(r,n)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(r,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],c=o[1];return'<a href="?anim='.concat(a,'" data-anim="').concat(a,'" title="').concat(c.title,'" class="btn ').concat(a===t?" present":"",'">\n        <i class="fa ').concat(c.icon,'" aria-hidden="true"></i>\n      </a>')})).join("")}function S(t){return j.apply(this,arguments)}function j(){return(j=c(o().mark((function t(e){var r,n,i,a,c,v,m,g;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"ontouchstart"in document.documentElement&&(f(".hint").innerHTML="<p>Tap on the left or right to navigate</p>"),f("body").classList.remove("body-loading"),"anim",(r=window.location.search.substring(1).split("&").reduce((function(t,e,r,n){var o=e.split("=");return t[decodeURIComponent(o[0])]=o[1]?decodeURIComponent(o[1]):"",t}),{}).anim||p(e,s))&&l[r]||(r=Object.keys(l)[0]),n=Array.from(h(".step")),i=!(-1!==navigator.userAgent.toLowerCase().search(/(ipad; cpu os 9_3_5)/)),(a=window.location.hash.substring(2))||(c=p(e,u))&&(window.location.hash="/"+c),i&&(r&&"animations"!==r?(n=E(n,r),d(e,s,r)):d(e,s,null),O(e,a),impress().init()),(v=document.createElement("div")).className="enable-events navigation-actions",i&&impress.supported&&((m=document.createElement("div")).className="views",m.innerHTML=k(r)+"<hr />",v.appendChild(m)),(g=document.createElement("div")).className="toc",g.innerHTML=x(n),v.appendChild(g),document.body.appendChild(v),L(n),t.next=20,y(i);case 20:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function O(t,e){var r=e;document.addEventListener("impress:stepenter",(function(e){var n=e.target;if(r){var o=f("#toc-"+r);o&&o.classList.remove("present")}f("#toc-"+n.id).classList.add("present"),d(t,u,n.id)}),!1),document.addEventListener("impress:stepleave",(function(t){var e=t.target;r=e.id}),!1),document.addEventListener("keyup",(function(t){(9===t.keyCode||t.metaKey)&&(t.stopPropagation(),t.preventDefault())}),!0)}},501:function(t,e,r){"use strict";(0,r(472).B)("react")},666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var i=e&&e.prototype instanceof y?e:y,a=Object.create(i.prototype),c=new N(n||[]);return o(a,"_invoke",{value:j(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var h="suspendedStart",p="suspendedYield",d="executing",v="completed",m={};function y(){}function g(){}function w(){}var b={};u(b,a,(function(){return this}));var L=Object.getPrototypeOf,x=L&&L(L(C([])));x&&x!==r&&n.call(x,a)&&(b=x);var E=w.prototype=y.prototype=Object.create(b);function k(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,a,c){var s=f(t[o],t,i);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(l).then((function(t){u.value=t,a(u)}),(function(t){return r("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function j(t,e,r){var n=h;return function(o,i){if(n===d)throw new Error("Generator is already running");if(n===v){if("throw"===o)throw i;return T()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=O(a,r);if(c){if(c===m)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===h)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=d;var s=f(t,e,r);if("normal"===s.type){if(n=r.done?v:p,s.arg===m)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=v,r.method="throw",r.arg=s.arg)}}}function O(t,r){var n=r.method,o=t.iterator[n];if(o===e)return r.delegate=null,"throw"===n&&t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=f(o,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,m;var a=i.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function C(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:T}}function T(){return{value:e,done:!0}}return g.prototype=w,o(E,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=u(w,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,u(t,s,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},k(S.prototype),u(S.prototype,c,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new S(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(E),u(E,s,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=C,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=n.call(a,"catchLoc"),u=n.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}}]);