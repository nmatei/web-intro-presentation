(self.webpackChunkweb_intro_presentation=self.webpackChunkweb_intro_presentation||[]).push([[351],{749:()=>{!function(e,t){"use strict";var a,n,r,i=(a=e.createElement("dummy").style,n="Webkit Moz O ms Khtml".split(" "),r={},function(e){if(void 0===r[e]){var t=e.charAt(0).toUpperCase()+e.substr(1),i=(e+" "+n.join(t+" ")+t).split(" ");for(var s in r[e]=null,i)if(void 0!==a[i[s]]){r[e]=i[s];break}}return r[e]}),s=function(e){return[].slice.call(e)},o=function(e,t){var a,n;for(a in t)t.hasOwnProperty(a)&&null!==(n=i(a))&&(e.style[n]=t[a]);return e},l=function(e,t){return isNaN(e)?t||0:Number(e)},c=function(t){return e.getElementById(t)},d=function(t,a,n){var r=e.createEvent("CustomEvent");r.initCustomEvent(a,!0,!0,n),t.dispatchEvent(r)},u=function(e){return" translate3d("+e.x+"px,"+e.y+"px,"+e.z+"px) "},p=function(e,t){var a=" rotateX("+e.x+"deg) ",n=" rotateY("+e.y+"deg) ",r=" rotateZ("+e.z+"deg) ";return t?r+n+a:a+n+r},m=function(e){return" scale("+e+") "},f=function(e){return" perspective("+e+"px) "},v=function(){return c(t.location.hash.replace(/^#\/?/,""))},h=function(e){var a=t.innerHeight/e.height,n=t.innerWidth/e.width,r=a>n?n:a;return e.maxScale&&r>e.maxScale&&(r=e.maxScale),e.minScale&&r<e.minScale&&(r=e.minScale),r},y=e.body,g=navigator.userAgent.toLowerCase(),b=null!==i("perspective")&&y.classList&&y.dataset&&-1===g.search(/(iphone)|(ipod)|(android)/);b?(y.classList.remove("impress-not-supported"),y.classList.add("impress-supported")):y.className+=" impress-not-supported ";var L={},E=function(){return!1};(t.impress=function(a){if(!b)return{init:E,goto:E,prev:E,next:E};if(L["impress-root-"+(a=a||"impress")])return L["impress-root-"+a];var n={},r=null,i=null,g=null,x=null,w=null,C=c(a),S=e.createElement("div"),k=!1,A=null,N=function(e,t){var a=e.dataset,r={translate:{x:l(a.x),y:l(a.y),z:l(a.z)},rotate:{x:l(a.rotateX),y:l(a.rotateY),z:l(a.rotateZ||a.rotate)},scale:l(a.scale,1),el:e};e.id||(e.id="step-"+(t+1)),n["impress-"+e.id]=r,o(e,{position:"absolute",transform:"translate(-50%,-50%)"+u(r.translate)+p(r.rotate)+m(r.scale),transformStyle:"preserve-3d"})},z=null,D=function(e,a){if(!k||!(e=function(e){return"number"==typeof e?e=e<0?g[g.length+e]:g[e]:"string"==typeof e&&(e=c(e)),e&&e.id&&n["impress-"+e.id]?e:null}(e)))return!1;t.scrollTo(0,0);var s=n["impress-"+e.id];r&&(r.classList.remove("active"),y.classList.remove("impress-on-"+r.id)),e.classList.add("active"),y.classList.add("impress-on-"+e.id);var v={rotate:{x:-s.rotate.x,y:-s.rotate.y,z:-s.rotate.z},translate:{x:-s.translate.x,y:-s.translate.y,z:-s.translate.z},scale:1/s.scale},b=v.scale>=i.scale,L=(a=l(a,x.transitionDuration))/2;e===r&&(w=h(x));var E=v.scale*w;return r&&r!==e&&function(e){A===e&&(d(e,"impress:stepleave"),A=null)}(r),o(C,{transform:f(x.perspective/E)+m(E),transitionDuration:a+"ms",transitionDelay:(b?L:0)+"ms"}),o(S,{transform:p(v.rotate,!0)+u(v.translate),transitionDuration:a+"ms",transitionDelay:(b?0:L)+"ms"}),(i.scale===v.scale||i.rotate.x===v.rotate.x&&i.rotate.y===v.rotate.y&&i.rotate.z===v.rotate.z&&i.translate.x===v.translate.x&&i.translate.y===v.translate.y&&i.translate.z===v.translate.z)&&(L=0),i=v,r=e,t.clearTimeout(z),z=t.setTimeout((function(){!function(e){A!==e&&(d(e,"impress:stepenter"),A=e)}(r)}),a+L),e};return C.addEventListener("impress:init",(function(){g.forEach((function(e){e.classList.add("future")})),C.addEventListener("impress:stepenter",(function(e){e.target.classList.remove("past"),e.target.classList.remove("future"),e.target.classList.add("present")}),!1),C.addEventListener("impress:stepleave",(function(e){e.target.classList.remove("present"),e.target.classList.add("past")}),!1)}),!1),C.addEventListener("impress:init",(function(){var e="";C.addEventListener("impress:stepenter",(function(a){t.location.hash=e="#/"+a.target.id}),!1),t.addEventListener("hashchange",(function(){t.location.hash!==e&&D(v())}),!1),D(v()||g[0],0)}),!1),y.classList.add("impress-disabled"),L["impress-root-"+a]={init:function(){if(!k){var t,n=("meta[name='viewport']",(t=t||e).querySelector("meta[name='viewport']")||e.createElement("meta"));n.content="width=device-width, minimum-scale=1, maximum-scale=1, user-scalable=no",n.parentNode!==e.head&&(n.name="viewport",e.head.appendChild(n));var r=C.dataset;x={width:l(r.width,1024),height:l(r.height,768),maxScale:l(r.maxScale,1),minScale:l(r.minScale,0),perspective:l(r.perspective,1e3),transitionDuration:l(r.transitionDuration,1e3)},w=h(x),s(C.childNodes).forEach((function(e){S.appendChild(e)})),C.appendChild(S),e.documentElement.style.height="100%",o(y,{height:"100%",overflow:"hidden"});var c={position:"absolute",transformOrigin:"top left",transition:"all 0s ease-in-out",transformStyle:"preserve-3d"};o(C,c),o(C,{top:"50%",left:"50%",transform:f(x.perspective/w)+m(w)}),o(S,c),y.classList.remove("impress-disabled"),y.classList.add("impress-enabled"),g=function(t,a){return s((a=a||e).querySelectorAll(".step"))}(0,C),g.forEach(N),i={translate:{x:0,y:0,z:0},rotate:{x:0,y:0,z:0},scale:1},k=!0,d(C,"impress:init",{api:L["impress-root-"+a]})}},goto:D,next:function(){var e=g.indexOf(r)+1;return e=e<g.length?g[e]:g[0],D(e)},prev:function(){var e=g.indexOf(r)-1;return e=e>=0?g[e]:g[g.length-1],D(e)}}}).supported=b}(document,window),function(e,t){"use strict";e.addEventListener("impress:init",(function(a){var n,r,i=a.detail.api;e.addEventListener("keydown",(function(e){(9===e.keyCode||e.keyCode>=32&&e.keyCode<=34||e.keyCode>=37&&e.keyCode<=40)&&e.preventDefault()}),!1),e.addEventListener("keyup",(function(e){if(9===e.keyCode||e.keyCode>=32&&e.keyCode<=34||e.keyCode>=37&&e.keyCode<=40){switch(e.keyCode){case 33:case 37:case 38:i.prev();break;case 9:case 32:case 34:case 39:case 40:i.next()}e.preventDefault()}}),!1),e.addEventListener("click",(function(t){for(var a=t.target;"A"!==a.tagName&&a!==e.documentElement;)a=a.parentNode;if("A"===a.tagName){var n=a.getAttribute("href");n&&"#"===n[0]&&(a=e.getElementById(n.slice(1)))}i.goto(a)&&(t.stopImmediatePropagation(),t.preventDefault())}),!1),e.addEventListener("click",(function(t){for(var a=t.target;(!a.classList.contains("step")||a.classList.contains("active"))&&a!==e.documentElement;)a=a.parentNode;i.goto(a)&&t.preventDefault()}),!1),e.addEventListener("touchstart",(function(e){if(1===e.touches.length){var a=e.touches[0].clientX,n=.3*t.innerWidth,r=null;a<n?r=i.prev():a>t.innerWidth-n&&(r=i.next()),r&&e.preventDefault()}}),!1),t.addEventListener("resize",(n=function(){i.goto(e.querySelector(".active"),500)},250,r=null,function(){var e=this,t=arguments;clearTimeout(r),r=setTimeout((function(){n.apply(e,t)}),250)}),!1)}),!1)}(document,window)},472:(e,t,a)=>{"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}a.d(t,{B:()=>i}),a(749);var r=function(){var e;e={js:"ace/mode/javascript",ts:"ace/mode/typescript",jsx:"ace/mode/jsx",html:"ace/mode/html",css:"ace/mode/css",shell:"ace/mode/sh"},Array.from(document.querySelectorAll(".step pre")).forEach((function(t){var a=t.getAttribute("data-type")||"html",n=t.getAttribute("data-highlight")||"",r=ace.edit(t),i=ace.require("ace/ext/beautify"),s=r.getSession();r.setReadOnly(!0),s.setTabSize(2),s.setMode(e[a]),n&&n.split(/\s*,\s*/i).forEach((function(e){return s.highlightLines(e-1)})),"jsx"===a||i.beautify(s),r.setOptions({maxLines:1/0})})),"ontouchstart"in document.documentElement&&(document.querySelector(".hint").innerHTML="<p>Tap on the left or right to navigate</p>");var t=window.location.search.substring(1).split("&").reduce((function(e,t,a,n){var r=t.split("=");return e[decodeURIComponent(r[0])]=r[1]?decodeURIComponent(r[1]):"",e}),{});return{getParam:function(e){return t[e]}}}();function i(){var e=void 0!==r.getParam("print"),t=r.getParam("anim"),a=document.getElementsByClassName("step"),i=a.length;if(t)for(var s=0;s<i;s++){var o=a[s],l=0,c=0;"slide-up"===t?c=792*s:"slide-left"===t?l=1e3*s:document.body.classList.add("anim-fade"),o.setAttribute("data-x",l),o.setAttribute("data-y",c),o.setAttribute("data-scale","1"),o.setAttribute("data-rotate","0"),o.setAttribute("data-z","0"),o.setAttribute("data-rotate-x","0"),o.setAttribute("data-rotate-y","0")}impress().init();var d=document.createElement("div"),u=document.createElement("div"),p=document.createElement("div"),m=[];d.className="enable-events navigation-actions",p.className="views";var f=document.body.classList.contains("pdf-available");if(f){var v=window.location.pathname.split("/");v=(v=v[v.length-1]).replace(".html",".pdf"),m.push('<a href="pdf/',v,'" target="_blank" class="btn" title="PDF Version">','<i class="fa fa-file-pdf-o" aria-hidden="true"></i>',"</a>")}m.push(f?"<hr>":"",'<a href="?" title="Animations Slides" class="btn'+(t||" present")+'">','<i class="fa fa-object-group" aria-hidden="true"></i>',"</a>",'<a href="?anim=slide-up" title="Slide Up/Down" class="btn'+("slide-up"===t?" present":"")+'">','<i class="fa fa-film" aria-hidden="true"></i>',"</a>",'<a href="?anim=slide-left" title="Slide Right/Left" class="btn'+("slide-left"===t?" present":"")+'">','<i class="fa fa-film fa-rotate-90" aria-hidden="true"></i>',"</a>",'<a href="?anim=fade" title="Fade" class="btn'+("fade"===t?" present":"")+'">','<i class="fa fa-gg" aria-hidden="true"></i>',"</a>","<hr>"),p.innerHTML=m.join(""),d.appendChild(p);var h=[],y={};for(s=0;s<i;s++)(o=a[s]).setAttribute("data-current-page",s+1),o.setAttribute("data-total-pages",i),y[o.id]=s+1,h.push('<a id="toc-'+o.id+'" href="#'+(e?"":"/")+o.id+'" title="'+o.id+'">'+(s+1)+"</a>");function g(e){var t=e.querySelector("h1");return t||(console.warn("h1 not present. fallback to h2",e),t=e.querySelector("h2")),t.innerHTML}u.className="toc",u.innerHTML=h.join(""),d.appendChild(u);var b,L=(b=document.querySelectorAll("div.step.toc-el"),function(e){if(Array.isArray(e))return n(e)}(b)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(b)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?n(e,t):void 0}}(b)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).map((function(e){return{id:e.id,text:g(e),pageNr:y[e.id]}}));document.querySelector("#toc ol").innerHTML=L.map((function(e){return'<li><a href="#'.concat(e.id,'" data-page="').concat(e.pageNr,'">').concat(e.text,"</a></li>")})).join(""),document.body.appendChild(d),document.addEventListener("impress:stepenter",(function(e){var t=e.target;document.getElementById("toc-"+t.id).classList.add("present");for(var a=document.getElementsByClassName("navigation-actions")[0].getElementsByClassName("views")[0].getElementsByTagName("a"),n=0;n<a.length;n++){var r=a[n];r.href=r.href.split("#")[0]+"#/"+t.id}}),!1),document.addEventListener("impress:stepleave",(function(e){var t=e.target;document.getElementById("toc-"+t.id).classList.remove("present")}),!1),document.addEventListener("keyup",(function(e){9===e.keyCode&&(e.stopPropagation(),e.preventDefault())}),!0)}!function(){for(var e=document.getElementsByClassName("disabled-link"),t=0;t<e.length;t++)e[t].onclick=function(e){return!1}}()}}]);