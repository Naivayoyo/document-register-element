/*! (C) Andrea Giammarchi - @WebReflection - ISC Style License */
!function(e,t){"use strict";function n(){var e=w.splice(0,w.length);for($e=0;e.length;)e.shift().call(null,e.shift())}function r(e,t){for(var n=0,r=e.length;n<r;n++)h(e[n],t)}function o(e){for(var t,n=0,r=e.length;n<r;n++)t=e[n],S(t,oe[a(t)])}function l(e){return function(t){Re(t)&&(h(t,e),le.length&&r(t.querySelectorAll(le),e))}}function a(e){var t=xe.call(e,"is"),n=e.nodeName.toUpperCase(),r=ie.call(re,t?ee+t.toUpperCase():J+n);return t&&-1<r&&!i(n,t)?-1:r}function i(e,t){return-1<le.indexOf(e+'[is="'+t+'"]')}function u(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,o=e.target,l=e[X]||2,a=e[$]||3;!tt||o&&o!==t||!t[B]||"style"===r||e.prevValue===e.newValue&&(""!==e.newValue||n!==l&&n!==a)||t[B](r,n===l?null:e.prevValue,n===a?null:e.newValue)}function c(e){var t=l(e);return function(e){w.push(t,e.target),$e&&clearTimeout($e),$e=setTimeout(n,1)}}function s(e){et&&(et=!1,e.currentTarget.removeEventListener(W,s)),le.length&&r((e.target||b).querySelectorAll(le),e.detail===q?q:k),Ve&&p()}function m(e,t){var n=this;je.call(n,e,t),A.call(n,{target:n})}function f(e,t){Ie(e,t),D?D.observe(e,Ke):(Je&&(e.setAttribute=m,e[R]=N(e),e[U](Y,A)),e[U](Q,u)),e[z]&&tt&&(e.created=!0,e[z](),e.created=!1)}function p(){for(var e,t=0,n=Ue.length;t<n;t++)e=Ue[t],ae.contains(e)||(n--,Ue.splice(t--,1),h(e,q))}function d(e){throw new Error("A "+e+" type is already registered")}function h(e,t){var n,r,o=a(e);-1<o&&(F(e,oe[o]),o=0,t!==k||e[k]?t!==q||e[q]||(e[k]=!1,e[q]=!0,r="disconnected",o=1):(e[q]=!1,e[k]=!0,r="connected",o=1,Ve&&ie.call(Ue,e)<0&&Ue.push(e)),o&&(n=e[t+_]||e[r+_])&&n.call(e))}function T(){}function L(e,t,n){var r=n&&n[x]||"",o=t.prototype,l=De(o),a=t.observedAttributes||fe,i={prototype:l};Pe(l,z,{value:function(){if(Ce)Ce=!1;else if(!this[Ee]){this[Ee]=!0,new t(this),o[z]&&o[z].call(this);var e=we[Oe.get(t)];(!He||e.create.length>1)&&v(this)}}}),Pe(l,B,{value:function(e){-1<ie.call(a,e)&&o[B]&&o[B].apply(this,arguments)}}),o[j]&&Pe(l,Z,{value:o[j]}),o[G]&&Pe(l,K,{value:o[G]}),r&&(i[x]=r),e=e.toUpperCase(),we[e]={constructor:t,create:r?[r,Ne(e)]:[e]},Oe.set(t,e),b[P](e.toLowerCase(),i),H(e),Ae[e].r()}function M(e){var t=we[e.toUpperCase()];return t&&t.constructor}function E(e){return"string"==typeof e?e:e&&e.is||""}function v(e){for(var t,n=e[B],r=n?e.attributes:fe,o=r.length;o--;)t=r[o],n.call(e,t.name||t.nodeName,null,t.value||t.nodeValue)}function H(e){return e=e.toUpperCase(),e in Ae||(Ae[e]={},Ae[e].p=new ye(function(t){Ae[e].r=t})),Ae[e].p}function g(){ve&&delete e.customElements,me(e,"customElements",{configurable:!0,value:new T}),me(e,"CustomElementRegistry",{configurable:!0,value:T});for(var t=C.get(/^HTML[A-Z]*[a-z]/),n=t.length;n--;function(t){var n=e[t];if(n){e[t]=function(e){var t,r;return e||(e=this),e[Ee]||(Ce=!0,t=we[Oe.get(e.constructor)],r=He&&1===t.create.length,e=r?Reflect.construct(n,fe,t.constructor):b.createElement.apply(b,t.create),e[Ee]=!0,Ce=!1,r||v(e)),e},e[t].prototype=n.prototype;try{n.prototype.constructor=e[t]}catch(r){Me=!0,me(n,Ee,{value:e[t]})}}}(t[n]));b.createElement=function(e,t){var n=E(t);return n?ze.call(this,e,Ne(n)):ze.call(this,e)},Qe||(Ye=!0,b[P](""))}var b=e.document,y=e.Object,C=function(e){var t,n,r,o,l=/^[A-Z]+[a-z]/,a=function(e){var t,n=[];for(t in u)e.test(t)&&n.push(t);return n},i=function(e,t){(t=t.toLowerCase())in u||(u[e]=(u[e]||[]).concat(t),u[t]=u[t.toUpperCase()]=e)},u=(y.create||y)(null),c={};for(n in e)for(o in e[n])for(r=e[n][o],u[o]=r,t=0;t<r.length;t++)u[r[t].toLowerCase()]=u[r[t].toUpperCase()]=o;return c.get=function(e){return"string"==typeof e?u[e]||(l.test(e)?[]:""):a(e)},c.set=function(e,t){return l.test(e)?i(e,t):i(t,e),c},c}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});"object"!=typeof t&&(t={type:t||"auto"});var w,A,O,N,D,I,F,S,V,P="registerElement",R="__"+P+(1e5*e.Math.random()>>0),U="addEventListener",k="attached",_="Callback",q="detached",x="extends",B="attributeChanged"+_,Z=k+_,j="connected"+_,G="disconnected"+_,z="created"+_,K=q+_,X="ADDITION",$="REMOVAL",Q="DOMAttrModified",W="DOMContentLoaded",Y="DOMSubtreeModified",J="<",ee="=",te=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,ne=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],re=[],oe=[],le="",ae=b.documentElement,ie=re.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},ue=y.prototype,ce=ue.hasOwnProperty,se=ue.isPrototypeOf,me=y.defineProperty,fe=[],pe=y.getOwnPropertyDescriptor,de=y.getOwnPropertyNames,he=y.getPrototypeOf,Te=y.setPrototypeOf,Le=!!y.__proto__,Me=!1,Ee="__dreCEv1",ve=e.customElements,He=!/^force/.test(t.type)&&!!(ve&&ve.define&&ve.get&&ve.whenDefined),ge=y.create||y,be=e.Map||function(){var e,t=[],n=[];return{get:function(e){return n[ie.call(t,e)]},set:function(r,o){e=ie.call(t,r),e<0?n[t.push(r)-1]=o:n[e]=o}}},ye=e.Promise||function(e){function t(e){for(r=!0;n.length;)n.shift()(e)}var n=[],r=!1,o={catch:function(){return o},then:function(e){return n.push(e),r&&setTimeout(t,1),o}};return e(t),o},Ce=!1,we=ge(null),Ae=ge(null),Oe=new be,Ne=function(e){return e.toLowerCase()},De=y.create||function e(t){return t?(e.prototype=t,new e):this},Ie=Te||(Le?function(e,t){return e.__proto__=t,e}:de&&pe?function(){function e(e,t){for(var n,r=de(t),o=0,l=r.length;o<l;o++)n=r[o],ce.call(e,n)||me(e,n,pe(t,n))}return function(t,n){do{e(t,n)}while((n=he(n))&&!se.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),Fe=e.MutationObserver||e.WebKitMutationObserver,Se=(e.HTMLElement||e.Element||e.Node).prototype,Ve=!se.call(Se,ae),Pe=Ve?function(e,t,n){return e[t]=n.value,e}:me,Re=Ve?function(e){return 1===e.nodeType}:function(e){return se.call(Se,e)},Ue=Ve&&[],ke=Se.attachShadow,_e=Se.cloneNode,qe=Se.dispatchEvent,xe=Se.getAttribute,Be=Se.hasAttribute,Ze=Se.removeAttribute,je=Se.setAttribute,Ge=b.createElement,ze=Ge,Ke=Fe&&{attributes:!0,characterData:!0,attributeOldValue:!0},Xe=Fe||function(e){Je=!1,ae.removeEventListener(Q,Xe)},$e=0,Qe=P in b&&!/^force-all/.test(t.type),We=!0,Ye=!1,Je=!0,et=!0,tt=!0;if(Fe&&(V=b.createElement("div"),V.innerHTML="<div><div></div></div>",new Fe(function(e,t){if(e[0]&&"childList"==e[0].type&&!e[0].removedNodes[0].childNodes.length){V=pe(Se,"innerHTML");var n=V&&V.set;n&&me(Se,"innerHTML",{set:function(e){for(;this.lastChild;)this.removeChild(this.lastChild);n.call(this,e)}})}t.disconnect(),V=null}).observe(V,{childList:!0,subtree:!0}),V.innerHTML=""),Qe||(Te||Le?(F=function(e,t){se.call(t,e)||f(e,t)},S=f):(F=function(e,t){e[R]||(e[R]=y(!0),f(e,t))},S=F),Ve?(Je=!1,function(){var e=pe(Se,U),t=e.value,n=function(e){var t=new CustomEvent(Q,{bubbles:!0});t.attrName=e,t.prevValue=xe.call(this,e),t.newValue=null,t[$]=t.attrChange=2,Ze.call(this,e),qe.call(this,t)},r=function(e,t){var n=Be.call(this,e),r=n&&xe.call(this,e),o=new CustomEvent(Q,{bubbles:!0});je.call(this,e,t),o.attrName=e,o.prevValue=n?r:null,o.newValue=t,n?o.MODIFICATION=o.attrChange=1:o[X]=o.attrChange=0,qe.call(this,o)},o=function(e){var t,n=e.currentTarget,r=n[R],o=e.propertyName;r.hasOwnProperty(o)&&(r=r[o],t=new CustomEvent(Q,{bubbles:!0}),t.attrName=r.name,t.prevValue=r.value||null,t.newValue=r.value=n[o]||null,null==t.prevValue?t[X]=t.attrChange=0:t.MODIFICATION=t.attrChange=1,qe.call(n,t))};e.value=function(e,l,a){e===Q&&this[B]&&this.setAttribute!==r&&(this[R]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",o)),t.call(this,e,l,a)},me(Se,U,e)}()):Fe||(ae[U](Q,Xe),ae.setAttribute(R,1),ae.removeAttribute(R),Je&&(A=function(e){var t,n,r,o=this;if(o===e.target){t=o[R],o[R]=n=N(o);for(r in n){if(!(r in t))return O(0,o,r,t[r],n[r],X);if(n[r]!==t[r])return O(1,o,r,t[r],n[r],"MODIFICATION")}for(r in t)if(!(r in n))return O(2,o,r,t[r],n[r],$)}},O=function(e,t,n,r,o,l){var a={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:o};a[l]=e,u(a)},N=function(e){for(var t,n,r={},o=e.attributes,l=0,a=o.length;l<a;l++)t=o[l],"setAttribute"!==(n=t.name)&&(r[n]=t.value);return r})),b[P]=function(e,t){if(n=e.toUpperCase(),We&&(We=!1,Fe?(D=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new Fe(function(r){for(var o,l,a,i=0,u=r.length;i<u;i++)o=r[i],"childList"===o.type?(n(o.addedNodes,e),n(o.removedNodes,t)):(l=o.target,tt&&l[B]&&"style"!==o.attributeName&&(a=xe.call(l,o.attributeName))!==o.oldValue&&l[B](o.attributeName,o.oldValue,a))})}(l(k),l(q)),I=function(e){return D.observe(e,{childList:!0,subtree:!0}),e},I(b),ke&&(Se.attachShadow=function(){return I(ke.apply(this,arguments))})):(w=[],b[U]("DOMNodeInserted",c(k)),b[U]("DOMNodeRemoved",c(q))),b[U](W,s),b[U]("readystatechange",s),Se.cloneNode=function(e){var t=_e.call(this,!!e),n=a(t);return-1<n&&S(t,oe[n]),e&&le.length&&o(t.querySelectorAll(le)),t}),Ye)return Ye=!1;if(-2<ie.call(re,ee+n)+ie.call(re,J+n)&&d(e),!te.test(n)||-1<ie.call(ne,n))throw new Error("The type "+e+" is invalid");var n,i,u=function(){return f?b.createElement(p,n):b.createElement(p)},m=t||ue,f=ce.call(m,x),p=f?t[x].toUpperCase():n;return f&&-1<ie.call(re,J+p)&&d(p),i=re.push((f?ee:J)+n)-1,le=le.concat(le.length?",":"",f?p+'[is="'+e.toLowerCase()+'"]':p),u.prototype=oe[i]=ce.call(m,"prototype")?m.prototype:De(Se),le.length&&r(b.querySelectorAll(le),k),u},b.createElement=ze=function(e,t){var n=E(t),r=n?Ge.call(b,e,Ne(n)):Ge.call(b,e),o=""+e,l=ie.call(re,(n?ee:J)+(n||o).toUpperCase()),a=-1<l;return n&&(r.setAttribute("is",n=n.toLowerCase()),a&&(a=i(o.toUpperCase(),n))),tt=!b.createElement.innerHTMLHelper,a&&S(r,oe[l]),r}),T.prototype={constructor:T,define:He?function(e,t,n){if(n)L(e,t,n);else{var r=e.toUpperCase();we[r]={constructor:t,create:[r]},Oe.set(t,r),ve.define(e,t)}}:L,get:He?function(e){return ve.get(e)||M(e)}:M,whenDefined:He?function(e){return ye.race([ve.whenDefined(e),H(e)])}:H},!ve||/^force/.test(t.type))g();else if(!t.noBuiltIn)try{!function(t,n,r){var o=new RegExp("^<a\\s+is=('|\")"+r+"\\1></a>$");if(n[x]="a",t.prototype=De(HTMLAnchorElement.prototype),t.prototype.constructor=t,e.customElements.define(r,t,n),!o.test(b.createElement("a",{is:r}).outerHTML)||!o.test((new t).outerHTML))throw n}(function e(){return Reflect.construct(HTMLAnchorElement,[],e)},{},"document-register-element-a")}catch(e){g()}if(!t.noBuiltIn)try{Ge.call(b,"a","a")}catch(e){Ne=function(e){return{is:e.toLowerCase()}}}}(window);
