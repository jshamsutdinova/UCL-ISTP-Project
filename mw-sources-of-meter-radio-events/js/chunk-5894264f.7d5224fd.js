(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5894264f"],{"0fd9":function(e,t,n){"use strict";var r=n("ade3"),a=n("5530"),o=(n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),i=n("d9f7"),c=n("80d2"),s=["sm","md","lg","xl"],l=["start","end","center"];function u(e,t){return s.reduce((function(n,r){return n[e+Object(c["r"])(r)]=t(),n}),{})}var d=function(e){return[].concat(l,["baseline","stretch"]).includes(e)},f=u("align",(function(){return{type:String,default:null,validator:d}})),p=function(e){return[].concat(l,["space-between","space-around"]).includes(e)},v=u("justify",(function(){return{type:String,default:null,validator:p}})),h=function(e){return[].concat(l,["space-between","space-around","stretch"]).includes(e)},g=u("alignContent",(function(){return{type:String,default:null,validator:h}})),b={align:Object.keys(f),justify:Object.keys(v),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function w(e,t,n){var r=y[e];if(null!=n){if(t){var a=t.replace(e,"");r+="-".concat(a)}return r+="-".concat(n),r.toLowerCase()}}var m=new Map;t["a"]=o["a"].extend({name:"v-row",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:d}},f),{},{justify:{type:String,default:null,validator:p}},v),{},{alignContent:{type:String,default:null,validator:h}},g),render:function(e,t){var n=t.props,a=t.data,o=t.children,c="";for(var s in n)c+=String(n[s]);var l=m.get(c);return l||function(){var e,t;for(t in l=[],b)b[t].forEach((function(e){var r=n[e],a=w(t,e,r);a&&l.push(a)}));l.push((e={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r["a"])(e,"align-".concat(n.align),n.align),Object(r["a"])(e,"justify-".concat(n.justify),n.justify),Object(r["a"])(e,"align-content-".concat(n.alignContent),n.alignContent),e)),m.set(c,l)}(),e(n.tag,Object(i["a"])(a,{staticClass:"row",class:l}),o)}})},"2dfb":function(e,t,n){"use strict";n("c1f9")},"4ec9":function(e,t,n){"use strict";var r=n("6d61"),a=n("6566");e.exports=r("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),a)},"62ad":function(e,t,n){"use strict";var r=n("ade3"),a=n("5530"),o=(n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),i=n("d9f7"),c=n("80d2"),s=["sm","md","lg","xl"],l=function(){return s.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),u=function(){return s.reduce((function(e,t){return e["offset"+Object(c["r"])(t)]={type:[String,Number],default:null},e}),{})}(),d=function(){return s.reduce((function(e,t){return e["order"+Object(c["r"])(t)]={type:[String,Number],default:null},e}),{})}(),f={col:Object.keys(l),offset:Object.keys(u),order:Object.keys(d)};function p(e,t,n){var r=e;if(null!=n&&!1!==n){if(t){var a=t.replace(e,"");r+="-".concat(a)}return"col"!==e||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var v=new Map;t["a"]=o["a"].extend({name:"v-col",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},u),{},{order:{type:[String,Number],default:null}},d),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,a=t.data,o=t.children,c=(t.parent,"");for(var s in n)c+=String(n[s]);var l=v.get(c);return l||function(){var e,t;for(t in l=[],f)f[t].forEach((function(e){var r=n[e],a=p(t,e,r);a&&l.push(a)}));var a=l.some((function(e){return e.startsWith("col-")}));l.push((e={col:!a||!n.cols},Object(r["a"])(e,"col-".concat(n.cols),n.cols),Object(r["a"])(e,"offset-".concat(n.offset),n.offset),Object(r["a"])(e,"order-".concat(n.order),n.order),Object(r["a"])(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),v.set(c,l)}(),e(n.tag,Object(i["a"])(a,{class:l}),o)}})},6566:function(e,t,n){"use strict";var r=n("9bf2").f,a=n("7c73"),o=n("e2cc"),i=n("0366"),c=n("19aa"),s=n("2266"),l=n("7dd0"),u=n("2626"),d=n("83ab"),f=n("f183").fastKey,p=n("69f3"),v=p.set,h=p.getterFor;e.exports={getConstructor:function(e,t,n,l){var u=e((function(e,r){c(e,u,t),v(e,{type:t,index:a(null),first:void 0,last:void 0,size:0}),d||(e.size=0),void 0!=r&&s(r,e[l],{that:e,AS_ENTRIES:n})})),p=h(t),g=function(e,t,n){var r,a,o=p(e),i=b(e,t);return i?i.value=n:(o.last=i={index:a=f(t,!0),key:t,value:n,previous:r=o.last,next:void 0,removed:!1},o.first||(o.first=i),r&&(r.next=i),d?o.size++:e.size++,"F"!==a&&(o.index[a]=i)),e},b=function(e,t){var n,r=p(e),a=f(t);if("F"!==a)return r.index[a];for(n=r.first;n;n=n.next)if(n.key==t)return n};return o(u.prototype,{clear:function(){var e=this,t=p(e),n=t.index,r=t.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;t.first=t.last=void 0,d?t.size=0:e.size=0},delete:function(e){var t=this,n=p(t),r=b(t,e);if(r){var a=r.next,o=r.previous;delete n.index[r.index],r.removed=!0,o&&(o.next=a),a&&(a.previous=o),n.first==r&&(n.first=a),n.last==r&&(n.last=o),d?n.size--:t.size--}return!!r},forEach:function(e){var t,n=p(this),r=i(e,arguments.length>1?arguments[1]:void 0,3);while(t=t?t.next:n.first){r(t.value,t.key,this);while(t&&t.removed)t=t.previous}},has:function(e){return!!b(this,e)}}),o(u.prototype,n?{get:function(e){var t=b(this,e);return t&&t.value},set:function(e,t){return g(this,0===e?0:e,t)}}:{add:function(e){return g(this,e=0===e?0:e,e)}}),d&&r(u.prototype,"size",{get:function(){return p(this).size}}),u},setStrong:function(e,t,n){var r=t+" Iterator",a=h(t),o=h(r);l(e,t,(function(e,t){v(this,{type:r,target:e,state:a(e),kind:t,last:void 0})}),(function(){var e=o(this),t=e.kind,n=e.last;while(n&&n.removed)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?"keys"==t?{value:n.key,done:!1}:"values"==t?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(e.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),u(t)}}},"6d61":function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),o=n("94ca"),i=n("6eeb"),c=n("f183"),s=n("2266"),l=n("19aa"),u=n("861d"),d=n("d039"),f=n("1c7e"),p=n("d44e"),v=n("7156");e.exports=function(e,t,n){var h=-1!==e.indexOf("Map"),g=-1!==e.indexOf("Weak"),b=h?"set":"add",y=a[e],w=y&&y.prototype,m=y,j={},x=function(e){var t=w[e];i(w,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(g&&!u(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return g&&!u(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(g&&!u(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})},O=o(e,"function"!=typeof y||!(g||w.forEach&&!d((function(){(new y).entries().next()}))));if(O)m=n.getConstructor(t,e,h,b),c.enable();else if(o(e,!0)){var S=new m,k=S[b](g?{}:-0,1)!=S,C=d((function(){S.has(1)})),_=f((function(e){new y(e)})),z=!g&&d((function(){var e=new y,t=5;while(t--)e[b](t,t);return!e.has(-0)}));_||(m=t((function(t,n){l(t,m,e);var r=v(new y,t,m);return void 0!=n&&s(n,r[b],{that:r,AS_ENTRIES:h}),r})),m.prototype=w,w.constructor=m),(C||z)&&(x("delete"),x("has"),h&&x("get")),(z||k)&&x(b),g&&w.clear&&delete w.clear}return j[e]=m,r({global:!0,forced:m!=y},j),p(m,e),g||n.setStrong(m,e,h),m}},7126:function(e,t,n){e.exports=n.p+"img/SRHvsLOFAR1.74939c8a.png"},"77b8":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"8",lg:"8"}},[r("abstract-text")],1),r("v-col",{attrs:{cols:"12",md:"4",lg:"4"}},[r("img",{attrs:{src:n("7126"),alt:"SRH vs LOFAR"}})])],1)],1)},a=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",{staticClass:"title"},[n("strong",[e._v(" Research Aims ")])]),n("v-divider",{staticClass:"mx-3"}),n("v-card-text",[n("div",{staticClass:"text"},[n("p",[e._v("The aim of the project is to study the processes of particle acceleration and their propagation from the energy release sites of solar flares, the sources of electron fluxes to the outer corona. Type III radio bursts are tracers of accelerated electron propagation in the solar atmosphere and out through interplanetary space, and they are noteworthy indicators of solar flare geoefficiency. The project innovation is combining new-age radio telescopes and their enhanced resolution in different wavelength ranges. We plan to join the instrumental capabilities, as well as the knowledge and experience of two research teams from Russia and the UK - the Radio Astrophysical Department, the Institute of Solar-Terrestrial Physics SB RAS, and the Solar Physics Group, the Mullard Space Science Laboratory, University College London.")]),n("p",[e._v("The cornerstone of the planned study will be the original observations obtained simultaneously by two new generation heliographs (the Siberian radio heliograph 4-8 GHz (SRH) and Low-Frequency Array (LOFAR) operating within 10-250 MHz). During the project, we plan to conduct a comparative analysis of the spatial-temporal structure of type III radio bursts and their sources observed in the microwaves. ")]),n("p",[e._v("Observations of microwave sources will make possible determining the dynamics of electron acceleration and localizing acceleration regions. The combination with type III radio bursts will allow tracking of accelerated electrons moving through the outer corona, and to verify existing models of temperature and density distributions up to heights of the order of one solar radius.")]),n("p",[e._v("The high sensitivity of the new tools will allow us to study weak flares. At first, this approach will provide us with collecting a sufficient number of events for study. At second, it will reduce the effect of secondary processes masking the processes of primary energy release. New knowledge obtained during the project will be used to develop an empirical model of energy transfer and the propagation of accelerated electrons into the upper layers of the solar atmosphere and interplanetary space. The project results will be published in international peer-reviewed journals and will be presented at international conferences. The scientific exchange planned in the project will provide new opportunities for the development of both groups participating in the project.")])])])],1)},i=[],c={name:"Abstract"},s=c,l=(n("9409"),n("2877")),u=n("6544"),d=n.n(u),f=n("b0af"),p=n("99d9"),v=n("ce7e"),h=Object(l["a"])(s,o,i,!1,null,"4ec2c528",null),g=h.exports;d()(h,{VCard:f["a"],VCardText:p["c"],VCardTitle:p["d"],VDivider:v["a"]});var b={name:"Home",components:{"abstract-text":g}},y=b,w=(n("2dfb"),n("62ad")),m=n("a523"),j=n("0fd9"),x=Object(l["a"])(y,r,a,!1,null,"2247f055",null);t["default"]=x.exports;d()(x,{VCol:w["a"],VContainer:m["a"],VRow:j["a"]})},9409:function(e,t,n){"use strict";n("d04a")},"99d9":function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return c})),n.d(t,"d",(function(){return s}));var r=n("b0af"),a=n("80d2"),o=Object(a["g"])("v-card__actions"),i=Object(a["g"])("v-card__subtitle"),c=Object(a["g"])("v-card__text"),s=Object(a["g"])("v-card__title");r["a"]},c1f9:function(e,t,n){},d04a:function(e,t,n){}}]);
//# sourceMappingURL=chunk-5894264f.7d5224fd.js.map