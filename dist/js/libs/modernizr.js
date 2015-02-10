window.Modernizr=function(e,t,n){function r(e){m.cssText=e}function o(e,t){return typeof e===t}var a,i,c,l="2.8.3",s={},u=!0,d=t.documentElement,f="modernizr",p=t.createElement(f),m=p.style,h=({}.toString,{svg:"http://www.w3.org/2000/svg"}),v={},y=[],g=y.slice,E=function(e,n,r,o){var a,i,c,l,s=t.createElement("div"),u=t.body,p=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:f+(r+1),s.appendChild(c);return a=["&#173;",'<style id="s',f,'">',e,"</style>"].join(""),s.id=f,(u?s:p).innerHTML+=a,p.appendChild(s),u||(p.style.background="",p.style.overflow="hidden",l=d.style.overflow,d.style.overflow="hidden",d.appendChild(p)),i=n(s,e),u?s.parentNode.removeChild(s):(p.parentNode.removeChild(p),d.style.overflow=l),!!i},b=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t)&&n(t).matches||!1;var r;return E("@media "+t+" { #"+f+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},S={}.hasOwnProperty;c=o(S,"undefined")||o(S.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return S.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=g.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var a=new o,i=t.apply(a,n.concat(g.call(arguments)));return Object(i)===i?i:a}return t.apply(e,n.concat(g.call(arguments)))};return r}),v.svg=function(){return!!t.createElementNS&&!!t.createElementNS(h.svg,"svg").createSVGRect},v.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==h.svg};for(var C in v)c(v,C)&&(i=C.toLowerCase(),s[i]=v[C](),y.push((s[i]?"":"no-")+i));return s.addTest=function(e,t){if("object"==typeof e)for(var r in e)c(e,r)&&s.addTest(r,e[r]);else{if(e=e.toLowerCase(),s[e]!==n)return s;t="function"==typeof t?t():t,"undefined"!=typeof u&&u&&(d.className+=" "+(t?"":"no-")+e),s[e]=t}return s},r(""),p=a=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=g.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=y[e[h]];return t||(t={},v++,e[h]=v,y[v]=t),t}function a(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var a;return a=r.cache[e]?r.cache[e].cloneNode():m.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!a.canHaveChildren||p.test(e)||a.tagUrn?a:r.frag.appendChild(a)}function i(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var a=n.frag.cloneNode(),i=0,c=r(),l=c.length;l>i;i++)a.createElement(c[i]);return a}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return g.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(g,t.frag)}function l(e){e||(e=t);var r=o(e);return!g.shivCSS||s||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),u||c(e,r),e}var s,u,d="3.7.0",f=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,m=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",v=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",s="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){s=!0,u=!0}}();var g={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:d,shivCSS:f.shivCSS!==!1,supportsUnknownElements:u,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:i};e.html5=g,l(t)}(this,t),s._version=l,s.mq=b,s.testStyles=E,d.className=d.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(u?" js "+y.join(" "):""),s}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==v.call(e)}function o(e){return"string"==typeof e}function a(){}function i(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=y.shift();g=1,e?e.t?m(function(){("c"==e.t?f.injectCss:f.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):g=0}function l(e,n,r,o,a,l,s){function u(t){if(!p&&i(d.readyState)&&(E.r=p=1,!g&&c(),d.onload=d.onreadystatechange=null,t)){"img"!=e&&m(function(){S.removeChild(d)},50);for(var r in M[n])M[n].hasOwnProperty(r)&&M[n][r].onload()}}var s=s||f.errorTimeout,d=t.createElement(e),p=0,v=0,E={t:r,s:n,e:a,a:l,x:s};1===M[n]&&(v=1,M[n]=[]),"object"==e?d.data=n:(d.src=n,d.type=e),d.width=d.height="0",d.onerror=d.onload=d.onreadystatechange=function(){u.call(this,v)},y.splice(o,0,E),"img"!=e&&(v||2===M[n]?(S.insertBefore(d,b?null:h),m(u,s)):M[n].push(d))}function s(e,t,n,r,a){return g=0,t=t||"j",o(e)?l("c"==t?w:C,e,t,this.i++,n,r,a):(y.splice(this.i++,0,e),1==y.length&&c()),this}function u(){var e=f;return e.loader={load:s,i:0},e}var d,f,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],v={}.toString,y=[],g=0,E="MozAppearance"in p.style,b=E&&!!t.createRange().compareNode,S=b?p:h.parentNode,p=e.opera&&"[object Opera]"==v.call(e.opera),p=!!t.attachEvent&&!p,C=E?"object":p?"script":"img",w=p?"script":C,j=Array.isArray||function(e){return"[object Array]"==v.call(e)},N=[],M={},F={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};f=function(e){function t(e){var t,n,r,e=e.split("!"),o=N.length,a=e.pop(),i=e.length,a={url:a,origUrl:a,prefixes:e};for(n=0;i>n;n++)r=e[n].split("="),(t=F[r.shift()])&&(a=t(a,r));for(n=0;o>n;n++)a=N[n](a);return a}function i(e,o,a,i,c){var l=t(e),s=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=r(o)?o:o[e]||o[i]||o[e.split("/").pop().split("?")[0]]),l.instead?l.instead(e,o,a,i,c):(M[l.url]?l.noexec=!0:M[l.url]=1,a.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(r(o)||r(s))&&a.load(function(){u(),o&&o(l.origUrl,c,i),s&&s(l.origUrl,c,i),M[l.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}),i(e,d,t,0,s);else if(Object(e)===e)for(l in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(l)&&(!n&&!--c&&(r(d)?d=function(){var e=[].slice.call(arguments);f.apply(this,e),p()}:d[l]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(f[l])),i(e[l],d,t,l,s))}else!n&&p()}var c,l,s=!!e.test,u=e.load||e.both,d=e.callback||a,f=d,p=e.complete||a;n(s?e.yep:e.nope,!!u),u&&n(u)}var l,s,d=this.yepnope.loader;if(o(e))i(e,0,d,0);else if(j(e))for(l=0;l<e.length;l++)s=e[l],o(s)?i(s,0,d,0):j(s)?f(s):Object(s)===s&&c(s,d);else Object(e)===e&&c(e,d)},f.addPrefix=function(e,t){F[e]=t},f.addFilter=function(e){N.push(e)},f.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",d=function(){t.removeEventListener("DOMContentLoaded",d,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,l,s){var u,d,p=t.createElement("script"),o=o||f.errorTimeout;p.src=e;for(d in r)p.setAttribute(d,r[d]);n=s?c:n||a,p.onreadystatechange=p.onload=function(){!u&&i(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},m(function(){u||(u=1,n(1))},o),l?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,o,i,l){var s,o=t.createElement("link"),n=l?c:n||a;o.href=e,o.rel="stylesheet",o.type="text/css";for(s in r)o.setAttribute(s,r[s]);i||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};