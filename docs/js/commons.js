(self.webpackChunkweb_intro_presentation=self.webpackChunkweb_intro_presentation||[]).push([[351],{749:function(){!function(t,e){"use strict";var r,n,a,i=(r=t.createElement("dummy").style,n="Webkit Moz O ms Khtml".split(" "),a={},function(t){if(void 0===a[t]){var e=t.charAt(0).toUpperCase()+t.substr(1),i=(t+" "+n.join(e+" ")+e).split(" ");for(var o in a[t]=null,i)if(void 0!==r[i[o]]){a[t]=i[o];break}}return a[t]}),o=function(t){return[].slice.call(t)},s=function(t,e){var r,n;for(r in e)e.hasOwnProperty(r)&&null!==(n=i(r))&&(t.style[n]=e[r]);return t},c=function(t,e){return isNaN(t)?e||0:Number(t)},u=function(e){return t.getElementById(e)},l=function(e,r,n){var a=t.createEvent("CustomEvent");a.initCustomEvent(r,!0,!0,n),e.dispatchEvent(a)},f=function(t){return" translate3d("+t.x+"px,"+t.y+"px,"+t.z+"px) "},d=function(t,e){var r=" rotateX("+t.x+"deg) ",n=" rotateY("+t.y+"deg) ",a=" rotateZ("+t.z+"deg) ";return e?a+n+r:r+n+a},p=function(t){return" scale("+t+") "},h=function(t){return" perspective("+t+"px) "},m=function(){return u(e.location.hash.replace(/^#\/?/,""))},v=function(t){var r=e.innerHeight/t.height,n=e.innerWidth/t.width,a=r>n?n:r;return t.maxScale&&a>t.maxScale&&(a=t.maxScale),t.minScale&&a<t.minScale&&(a=t.minScale),a},y=t.body,g=navigator.userAgent.toLowerCase(),w=null!==i("perspective")&&y.classList&&y.dataset&&-1===g.search(/(iphone)|(ipod)|(android)/);w?(y.classList.remove("impress-not-supported"),y.classList.add("impress-supported")):y.className+=" impress-not-supported ";var L={},x=function(){return!1};(e.impress=function(r){if(!w)return{init:x,goto:x,prev:x,next:x};if(L["impress-root-"+(r=r||"impress")])return L["impress-root-"+r];var n={},a=null,i=null,g=null,b=null,E=null,k=u(r),S=t.createElement("div"),C=!1,A=null,N=function(t,e){var r=t.dataset,a={translate:{x:c(r.x),y:c(r.y),z:c(r.z)},rotate:{x:c(r.rotateX),y:c(r.rotateY),z:c(r.rotateZ||r.rotate)},scale:c(r.scale,1),el:t};t.id||(t.id="step-"+(e+1)),n["impress-"+t.id]=a,s(t,{position:"absolute",transform:"translate(-50%,-50%)"+f(a.translate)+d(a.rotate)+p(a.scale),transformStyle:"preserve-3d"})},j=null,_=function(t,r){if(!C||!(t=function(t){return"number"==typeof t?t=t<0?g[g.length+t]:g[t]:"string"==typeof t&&(t=u(t)),t&&t.id&&n["impress-"+t.id]?t:null}(t)))return!1;e.scrollTo(0,0);var o=n["impress-"+t.id];a&&(a.classList.remove("active"),y.classList.remove("impress-on-"+a.id)),t.classList.add("active"),y.classList.add("impress-on-"+t.id);var m={rotate:{x:-o.rotate.x,y:-o.rotate.y,z:-o.rotate.z},translate:{x:-o.translate.x,y:-o.translate.y,z:-o.translate.z},scale:1/o.scale},w=m.scale>=i.scale,L=(r=c(r,b.transitionDuration))/2;t===a&&(E=v(b));var x=m.scale*E;return a&&a!==t&&function(t){A===t&&(l(t,"impress:stepleave"),A=null)}(a),s(k,{transform:h(b.perspective/x)+p(x),transitionDuration:r+"ms",transitionDelay:(w?L:0)+"ms"}),s(S,{transform:d(m.rotate,!0)+f(m.translate),transitionDuration:r+"ms",transitionDelay:(w?0:L)+"ms"}),(i.scale===m.scale||i.rotate.x===m.rotate.x&&i.rotate.y===m.rotate.y&&i.rotate.z===m.rotate.z&&i.translate.x===m.translate.x&&i.translate.y===m.translate.y&&i.translate.z===m.translate.z)&&(L=0),i=m,a=t,e.clearTimeout(j),j=e.setTimeout((function(){!function(t){A!==t&&(l(t,"impress:stepenter"),A=t)}(a)}),r+L),t};return k.addEventListener("impress:init",(function(){g.forEach((function(t){t.classList.add("future")})),k.addEventListener("impress:stepenter",(function(t){t.target.classList.remove("past"),t.target.classList.remove("future"),t.target.classList.add("present")}),!1),k.addEventListener("impress:stepleave",(function(t){t.target.classList.remove("present"),t.target.classList.add("past")}),!1)}),!1),k.addEventListener("impress:init",(function(){var t="";k.addEventListener("impress:stepenter",(function(r){e.location.hash=t="#/"+r.target.id}),!1),e.addEventListener("hashchange",(function(){e.location.hash!==t&&_(m())}),!1),_(m()||g[0],0)}),!1),y.classList.add("impress-disabled"),L["impress-root-"+r]={init:function(){if(!C){var e,n=("meta[name='viewport']",(e=e||t).querySelector("meta[name='viewport']")||t.createElement("meta"));n.content="width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no",n.parentNode!==t.head&&(n.name="viewport",t.head.appendChild(n));var a=k.dataset;b={width:c(a.width,1024),height:c(a.height,768),maxScale:c(a.maxScale,1),minScale:c(a.minScale,0),perspective:c(a.perspective,1e3),transitionDuration:c(a.transitionDuration,1e3)},E=v(b),o(k.childNodes).forEach((function(t){S.appendChild(t)})),k.appendChild(S),t.documentElement.style.height="100%",s(y,{height:"100%",overflow:"hidden"});var u={position:"absolute",transformOrigin:"top left",transition:"all 0s ease-in-out",transformStyle:"preserve-3d"};s(k,u),s(k,{top:"50%",left:"50%",transform:h(b.perspective/E)+p(E)}),s(S,u),y.classList.remove("impress-disabled"),y.classList.add("impress-enabled"),g=function(e,r){return o((r=r||t).querySelectorAll(".step"))}(0,k),g.forEach(N),i={translate:{x:0,y:0,z:0},rotate:{x:0,y:0,z:0},scale:1},C=!0,l(k,"impress:init",{api:L["impress-root-"+r]})}},goto:_,next:function(){var t=g.indexOf(a)+1;return t=t<g.length?g[t]:g[0],_(t)},prev:function(){var t=g.indexOf(a)-1;return t=t>=0?g[t]:g[g.length-1],_(t)}}}).supported=w}(document,window),function(t,e){"use strict";t.addEventListener("impress:init",(function(r){var n,a,i=r.detail.api;t.addEventListener("keydown",(function(t){(9===t.keyCode||t.keyCode>=32&&t.keyCode<=34||t.keyCode>=37&&t.keyCode<=40)&&t.preventDefault()}),!1),t.addEventListener("keyup",(function(t){if(9===t.keyCode||t.keyCode>=32&&t.keyCode<=34||t.keyCode>=37&&t.keyCode<=40){switch(t.keyCode){case 33:case 37:case 38:i.prev();break;case 9:case 32:case 34:case 39:case 40:i.next()}t.preventDefault()}}),!1),t.addEventListener("click",(function(e){for(var r=e.target;"A"!==r.tagName&&r!==t.documentElement;)r=r.parentNode;if("A"===r.tagName){var n=r.getAttribute("href");n&&"#"===n[0]&&(r=t.getElementById(n.slice(1)))}i.goto(r)&&(e.stopImmediatePropagation(),e.preventDefault())}),!1),t.addEventListener("click",(function(e){for(var r=e.target;(!r.classList.contains("step")||r.classList.contains("active"))&&r!==t.documentElement;)r=r.parentNode;i.goto(r)&&e.preventDefault()}),!1),t.addEventListener("touchstart",(function(t){if(1===t.touches.length){var r=t.touches[0].clientX,n=.3*e.innerWidth,a=null;r<n?a=i.prev():r>e.innerWidth-n&&(a=i.next()),a&&t.preventDefault()}}),!1),e.addEventListener("resize",(n=function(){i.goto(t.querySelector(".active"),500)},250,a=null,function(){var t=this,e=arguments;clearTimeout(a),a=setTimeout((function(){n.apply(t,e)}),250)}),!1)}),!1)}(document,window)},472:function(t,e,r){"use strict";r.d(e,{B:function(){return x}});var n=r(666),a=r.n(n);function i(t,e,r,n,a,i,o){try{var s=t[i](o),c=s.value}catch(t){return void r(t)}s.done?e(c):Promise.resolve(c).then(n,a)}function o(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var o=t.apply(e,r);function s(t){i(o,n,a,s,c,"next",t)}function c(t){i(o,n,a,s,c,"throw",t)}s(void 0)}))}}function s(t){return document.querySelector(t)}function c(t){return document.querySelectorAll(t)}function u(t){return window.location.search.substring(1).split("&").reduce((function(t,e,r,n){var a=e.split("=");return t[decodeURIComponent(a[0])]=a[1]?decodeURIComponent(a[1]):"",t}),{})[t]}function l(t,e){for(var r=[],n=t.length,a=0;a<n;a+=e){var i=t.slice(a,a+e);r.push(i)}return r}r(749);var f={js:"ace/mode/javascript",ts:"ace/mode/typescript",jsx:"ace/mode/jsx",html:"ace/mode/html",css:"ace/mode/css",shell:"ace/mode/sh"};function d(){return p.apply(this,arguments)}function p(){return p=o(a().mark((function t(){var e,r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=Array.from(c(".step pre")),r=l(e,10),t.next=4,r.reduce(function(){var t=o(a().mark((function t(e,r){return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e;case 2:return t.next=4,h(r);case 4:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),0);case 4:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}function h(t){return new Promise((function(e){t.forEach((function(t){var e=t.getAttribute("data-type")||"html",r=t.getAttribute("data-highlight")||"",n=ace.edit(t),a=ace.require("ace/ext/beautify"),i=n.getSession();n.setReadOnly(!0),i.setTabSize(2),i.setMode(f[e]),r&&r.split(/\s*,\s*/i).forEach((function(t){return i.highlightLines(t-1)})),"jsx"===e||a.beautify(i),n.setOptions({maxLines:1/0})})),setTimeout(e,5)}))}function m(t){var e=t.querySelector("h1");return e||(console.warn("h1 not present. fallback to h2",t),e=t.querySelector("h2")),e.innerHTML}function v(t){var e=Array.from(c("div.step.toc-el")),r=function(t){return t.reduce((function(t,e,r){return t[e.id]=r+1,t}),{})}(t),n=e.map((function(t){return{id:t.id,text:m(t),pageNr:r[t.id]}}));s("#toc ol").innerHTML=n.map((function(t){return'<li><a href="#'.concat(t.id,'" data-page="').concat(t.pageNr,'">').concat(t.text,"</a></li>")})).join("")}function y(t){return t.map((function(e,r){return e.setAttribute("data-current-page",r+1),e.setAttribute("data-total-pages",t.length),'<a id="toc-'.concat(e.id,'" href="#').concat(e.id,'" title="').concat(e.id,'">').concat(r+1,"</a>")})).join("")}function g(t,e){"fade"===e&&document.body.classList.add("anim-fade"),t.forEach((function(t,r){var n=0,a=0;"slide-up"===e?a=792*r:"slide-left"===e&&(n=1e3*r),t.setAttribute("data-x",n),t.setAttribute("data-y",a),t.setAttribute("data-scale","1"),t.setAttribute("data-rotate","0"),t.setAttribute("data-z","0"),t.setAttribute("data-rotate-x","0"),t.setAttribute("data-rotate-y","0")}))}function w(t){return['<a href="?" title="Animations Slides" class="btn'+(t||" present")+'">','<i class="fa fa-object-group" aria-hidden="true"></i>',"</a>",'<a href="?anim=slide-up" title="Slide Up/Down" class="btn'+("slide-up"===t?" present":"")+'">','<i class="fa fa-film" aria-hidden="true"></i>',"</a>",'<a href="?anim=slide-left" title="Slide Right/Left" class="btn'+("slide-left"===t?" present":"")+'">','<i class="fa fa-film fa-rotate-90" aria-hidden="true"></i>',"</a>",'<a href="?anim=fade" title="Fade" class="btn'+("fade"===t?" present":"")+'">','<i class="fa fa-gg" aria-hidden="true"></i>',"</a>","<hr>"].join("")}function L(t){return!(-1!==navigator.userAgent.toLowerCase().search(/(ipad; cpu os 9_3_5)/))}function x(){return b.apply(this,arguments)}function b(){return(b=o(a().mark((function t(){var e,r,n,i,o,l,f;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("ontouchstart"in document.documentElement&&(s(".hint").innerHTML="<p>Tap on the left or right to navigate</p>"),s("body").classList.remove("body-loading"),e=u("anim"),r=Array.from(c(".step")),e&&g(r,e),(n=L())&&(E(),impress().init()),(i=document.createElement("div")).className="enable-events navigation-actions",n&&impress.supported&&((o=document.createElement("div")).className="views",o.innerHTML=w(e),i.appendChild(o)),(l=document.createElement("div")).className="toc",l.innerHTML=y(r),i.appendChild(l),document.body.appendChild(i),v(r),!n){t.next=21;break}return t.next=19,d();case 19:t.next=24;break;case 21:(f=document.body).classList.remove("impress-supported"),f.classList.add("impress-not-supported");case 24:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function E(){document.addEventListener("impress:stepenter",(function(t){var e=t.target;s("#toc-"+e.id).classList.add("present"),Array.from(c(".navigation-actions .views a")).forEach((function(t){t.href=t.href.split("#")[0]+"#/"+e.id}))}),!1),document.addEventListener("impress:stepleave",(function(t){s("#toc-"+t.target.id).classList.remove("present")}),!1),document.addEventListener("keyup",(function(t){(9===t.keyCode||t.metaKey)&&(t.stopPropagation(),t.preventDefault())}),!0)}},666:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",o=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var a=e&&e.prototype instanceof v?e:v,i=Object.create(a.prototype),o=new N(n||[]);return i._invoke=function(t,e,r){var n=f;return function(a,i){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===a)throw i;return _()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var s=S(o,r);if(s){if(s===m)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var c=l(t,e,r);if("normal"===c.type){if(n=r.done?h:d,c.arg===m)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=h,r.method="throw",r.arg=c.arg)}}}(t,r,o),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",m={};function v(){}function y(){}function g(){}var w={};c(w,i,(function(){return this}));var L=Object.getPrototypeOf,x=L&&L(L(j([])));x&&x!==r&&n.call(x,i)&&(w=x);var b=g.prototype=v.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function r(a,i,o,s){var c=l(t[a],t,i);if("throw"!==c.type){var u=c.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,o,s)}),(function(t){r("throw",t,o,s)})):e.resolve(f).then((function(t){u.value=t,o(u)}),(function(t){return r("throw",t,o,s)}))}s(c.arg)}var a;this._invoke=function(t,n){function i(){return new e((function(e,a){r(t,n,e,a)}))}return a=a?a.then(i,i):i()}}function S(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,S(t,r),"throw"===r.method))return m;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var a=l(n,t.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,m;var i=a.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,m):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,m)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function N(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function j(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var a=-1,o=function r(){for(;++a<t.length;)if(n.call(t,a))return r.value=t[a],r.done=!1,r;return r.value=e,r.done=!0,r};return o.next=o}}return{next:_}}function _(){return{value:e,done:!0}}return y.prototype=g,c(b,"constructor",g),c(g,"constructor",y),y.displayName=c(g,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,s,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},E(k.prototype),c(k.prototype,o,(function(){return this})),t.AsyncIterator=k,t.async=function(e,r,n,a,i){void 0===i&&(i=Promise);var o=new k(u(e,r,n,a),i);return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},E(b),c(b,s,"Generator"),c(b,i,(function(){return this})),c(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,N.prototype={constructor:N,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(A),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function a(n,a){return s.type="throw",s.arg=t,r.next=n,a&&(r.method="next",r.arg=e),!!a}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],s=o.completion;if("root"===o.tryLoc)return a("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),u=n.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return a(o.catchLoc,!0);if(this.prev<o.finallyLoc)return a(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return a(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return a(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=t,o.arg=e,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),m},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),m}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var a=n.arg;A(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),m}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}}]);