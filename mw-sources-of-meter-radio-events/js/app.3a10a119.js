(function(e){function t(t){for(var a,r,c=t[0],s=t[1],A=t[2],u=0,l=[];u<c.length;u++)r=c[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&l.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);p&&p(t);while(l.length)l.shift()();return i.push.apply(i,A||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-7f49d775":"82d10378","chunk-bec6e0aa":"15e18d70","chunk-13b0d39e":"12617702","chunk-5286bffe":"c9d310dc","chunk-5894264f":"7d5224fd","chunk-7c52de13":"eee8448c"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-7f49d775":1,"chunk-bec6e0aa":1,"chunk-13b0d39e":1,"chunk-5286bffe":1,"chunk-5894264f":1,"chunk-7c52de13":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-7f49d775":"0e433876","chunk-bec6e0aa":"de69aa5f","chunk-13b0d39e":"be2e978a","chunk-5286bffe":"039b4140","chunk-5894264f":"32179a75","chunk-7c52de13":"d6867e95"}[e]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var A=i[c],u=A.getAttribute("data-href")||A.getAttribute("href");if("stylesheet"===A.rel&&(u===a||u===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){A=l[c],u=A.getAttribute("data-href");if(u===a||u===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],p.parentNode.removeChild(p),n(i)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var A,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var l=new Error;A=function(t){u.onerror=u.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}o[e]=void 0}};var p=setTimeout((function(){A({type:"timeout",target:u})}),12e4);u.onerror=u.onload=A,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/mw-sources-of-meter-radio-events/",s.oe=function(e){throw console.error(e),e};var A=window["webpackJsonp"]=window["webpackJsonp"]||[],u=A.push.bind(A);A.push=t,A=A.slice();for(var l=0;l<A.length;l++)t(A[l]);var p=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1468:function(e,t,n){e.exports=n.p+"img/united-kingdom.9f496bf9.png"},5370:function(e,t,n){"use strict";n("71da")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("app-header"),n("v-main",[n("router-view")],1),n("app-footer")],1)},o=[],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",[a("v-app-bar",{attrs:{app:"",absolute:"",prominent:"",src:n("ef83"),height:"180px"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"top-bar"},[a("v-app-bar-nav-icon",{staticClass:"hidden-sm-and-up mr-auto",attrs:{color:"white"},on:{click:function(t){t.stopPropagation(),e.drawer=!e.drawer}}}),a("div",{staticClass:"lang"},[a("a",{staticClass:"lang-link",attrs:{href:""}},[a("v-img",{attrs:{contain:"","max-height":"30",src:n("1468"),alt:"GB"}})],1),a("a",{staticClass:"lang-link",attrs:{href:"https://smare.iszf.irk.ru/#/"}},[a("v-img",{attrs:{contain:"","max-height":"30",src:n("86e2"),alt:"RU"}})],1)])],1),a("div",{staticClass:"title overline mt-1"},[e._v(" Studying the acceleration of electrons microwave sources of solar meter radio events ")]),a("div",{staticClass:"menu"},e._l(e.buttons,(function(t){return a("div",{key:t.name},[a("v-divider"),a("v-btn",{attrs:{text:"",to:t.link}},[e._v(e._s(t.name))]),a("v-divider")],1)})),0)])]),a("v-navigation-drawer",{attrs:{app:"",absolute:"",temporary:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[a("div",{staticClass:"lang-nav mt-2 ml-2"},[a("a",{staticClass:"lang-link"},[a("v-img",{attrs:{contain:"","max-height":"30",src:n("1468"),alt:"GB"}})],1),a("a",{staticClass:"lang-link",attrs:{href:"https://smare.iszf.irk.ru/#/"}},[a("v-img",{attrs:{contain:"","max-height":"30",src:n("86e2"),alt:"RU"}})],1)]),a("v-list",{attrs:{nav:"",dense:"",flat:""}},[a("v-list-item-group",{attrs:{"active-class":"deep-purple--text text--accent-4"},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}},e._l(e.buttons,(function(t){return a("v-list-item",{key:t.name,attrs:{link:""}},[a("v-icon",{staticClass:"mr-1"},[e._v(" "+e._s(t.icon)+" ")]),a("v-list-item",{attrs:{to:t.link}},[e._v(" "+e._s(t.name)+" ")])],1)})),1)],1)],1)],1)},c=[],s={name:"Header",data:function(){return{drawer:!1,group:null,buttons:[{name:"Home",link:"/",icon:"mdi mdi-home"},{name:"Members",link:"/members",icon:"mdi mdi-human-male-female"},{name:"Publications",link:"/publications",icon:"mdi mdi-book-open-variant"},{name:"Presentations",link:"/presentations",icon:"mdi mdi-presentation"},{name:"Highlights",link:"/highlights",icon:"mdi mdi-format-color-highlight"}]}},methods:{openPage:function(){var e="https://smare.iszf.irk.ru/#/";window.open(e,"_blank")}},watch:{group:function(){this.drawer=!1}}},A=s,u=(n("7bcc"),n("2877")),l=n("6544"),p=n.n(l),d=n("40dc"),f=n("5bc1"),g=n("8336"),m=n("ce7e"),h=n("132d"),v=n("adda"),b=n("8860"),C=n("da13"),E=n("1baa"),B=n("f774"),I=Object(u["a"])(A,i,c,!1,null,"7e6d5373",null),k=I.exports;p()(I,{VAppBar:d["a"],VAppBarNavIcon:f["a"],VBtn:g["a"],VDivider:m["a"],VIcon:h["a"],VImg:v["a"],VList:b["a"],VListItem:C["a"],VListItemGroup:E["a"],VNavigationDrawer:B["a"]});var Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{attrs:{app:"",absolute:"",height:"271"}},[a("v-container",[a("div",{staticClass:"footer"},[a("div",{staticClass:"footer-sponsor"},[a("p",{staticClass:"subtitle"},[e._v("The project is suported by:")]),a("ul",[a("li",{staticClass:"mb-1"},[a("v-img",{attrs:{alt:"Royal Society",width:"150",src:n("e25c")}})],1),a("li",[a("v-img",{attrs:{alt:"RFBR",width:"150",src:n("ebee")}})],1)]),a("ul",{staticClass:"mb-1"},[a("li",{staticClass:"mb-1 pl-3"},[a("p",{staticClass:"project"},[e._v(" Project IEC\\R2\\202175 ")])]),a("li",{staticClass:"mb-1 pl-2"},[a("p",{staticClass:"project"},[e._v(" Project No.21-52-10012 ")])])])]),a("div",{staticClass:"footer-bottom"},[a("ul",[a("li",[a("a",{on:{click:e.openPage}},[a("v-img",{attrs:{alt:"UCL",src:n("9b95"),width:"120"}})],1)]),a("li",[e._v(" "+e._s((new Date).getFullYear())),a("strong",[e._v(" UCL")])])])])])])],1)},w=[],y={name:"Footer",methods:{openPage:function(){var e="https://www.ucl.ac.uk/";window.open(e,"_blank")}}},_=y,x=(n("fc3c"),n("a523")),P=n("553a"),V=Object(u["a"])(_,Q,w,!1,null,"34f92794",null),j=V.exports;p()(V,{VContainer:x["a"],VFooter:P["a"],VImg:v["a"]});var O={name:"App",components:{"app-header":k,"app-footer":j},data:function(){return{}}},S=O,M=(n("5370"),n("7496")),T=n("f6c4"),L=Object(u["a"])(S,r,o,!1,null,"97e40eb6",null),R=L.exports;p()(L,{VApp:M["a"],VMain:T["a"]});n("d3b7"),n("3ca3"),n("ddb0"),n("99af"),n("b0c0");var N=n("8c4f");a["a"].use(N["a"]);var U=[{path:"/",name:"Home",component:function(){return Promise.all([n.e("chunk-bec6e0aa"),n.e("chunk-5894264f")]).then(n.bind(null,"77b8"))}},{name:"Members",path:"/members",component:function(){return Promise.all([n.e("chunk-bec6e0aa"),n.e("chunk-13b0d39e")]).then(n.bind(null,"e507"))}},{name:"Publications",path:"/publications",component:function(){return Promise.all([n.e("chunk-bec6e0aa"),n.e("chunk-5286bffe")]).then(n.bind(null,"6517"))}},{name:"Highlights",path:"/highlights",component:function(){return n.e("chunk-7f49d775").then(n.bind(null,"a162"))}},{name:"Presentations",path:"/presentations",component:function(){return Promise.all([n.e("chunk-bec6e0aa"),n.e("chunk-7c52de13")]).then(n.bind(null,"75fd"))}}],F=new N["a"]({mode:"hash",base:"/mw-sources-of-meter-radio-events/",routes:U});F.beforeEach((function(e,t,n){document.title="".concat("MW sources of meter radio events"," - ").concat(e.name),n()}));var H=F,D=n("f309");a["a"].use(D["a"]);var G=new D["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:H,vuetify:G,render:function(e){return e(R)}}).$mount("#app")},"71da":function(e,t,n){},"7bcc":function(e,t,n){"use strict";n("ace3")},"86e2":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIABAMAAAAGVsnJAAAAElBMVEVHcEynJli4y+IAUrTYACfw8PCyBTF0AAAAA3RSTlMA9fVeate1AAAB1ElEQVR42u3QgRQAIAwFwCmkkEIKKeSvksb2/h3CVQEAAAAAAAAAAAAAAAAAAAAAAAAAAEyyw9ULJ0CAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAhoGHDCCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIE9Au44QQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABDQNWuAIAAAAAAAAAAAAAAAAAAAAAAAAAAJjkAxdkd0deMpM8AAAAAElFTkSuQmCC"},"9b95":function(e,t,n){e.exports=n.p+"img/ucl-white.d169a4c7.png"},"9dd0":function(e,t,n){},ace3:function(e,t,n){},e25c:function(e,t,n){e.exports=n.p+"img/royal-society_1.db2470eb.png"},ebee:function(e,t,n){e.exports=n.p+"img/rfbr.98e42af4.png"},ef83:function(e,t,n){e.exports=n.p+"img/banner_1_compress.0841b556.jpg"},fc3c:function(e,t,n){"use strict";n("9dd0")}});
//# sourceMappingURL=app.3a10a119.js.map