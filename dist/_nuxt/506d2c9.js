(window.webpackJsonp=window.webpackJsonp||[]).push([[84,61],{1435:function(t,e,n){var content=n(1446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("0cfa0179",content,!0,{sourceMap:!1})},1445:function(t,e,n){"use strict";n(1435)},1446:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,".blocks{display:grid;grid-template-columns:minmax(0,1fr);grid-gap:var(--blocks-gap);gap:var(--blocks-gap);margin-bottom:var(--blocks-gap)}.blocks>div{z-index:1}",""]),o.locals={},t.exports=o},1449:function(t,e,n){"use strict";n.r(e);n(68);var o=n(75),r={props:{blocks:{type:Array,required:!0}},methods:{resolveBlockName:function(t){return"Block".concat(Object(o.snakeToPascal)(t))}}},c=(n(1445),n(22)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"blocks"},t._l(t.blocks,(function(n,o){return e(t.resolveBlockName(n.type),{key:"block_".concat(n.type,"_").concat(o),tag:"component",attrs:{content:n.content}})})),1)}),[],!1,null,null,null);e.default=component.exports},1450:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));n(46),n(97);var o=function(t,e){var n=t.title,title=void 0===n?"":n,o=t.description,r=void 0===o?"":o,c=t.image,image=void 0===c?"":c;return{title:title,meta:[{hid:"facebook-domain-verification",name:"facebook-domain-verification",content:"3kha0gyw1icp565r5m3slr25xgz9ie"},{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:r},{hid:"image",name:"image",content:image},{itemprop:"name",content:title},{itemprop:"description",content:r},{itemprop:"image",content:image},{hid:"twitter:card",name:"twitter:card",content:"summary"},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:r},{hid:"og:title",name:"og:title",property:"og:title",content:title},{hid:"og:description",name:"og:description",property:"og:description",content:r},{hid:"og:image",name:"og:image",property:"og:image",content:image},{hid:"og:url",name:"og:url",property:"og:url",content:e},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:"Dinner in the sky France"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"}],link:[{rel:"shortcut icon",type:"image/x-icon",sizes:"16x16 32x32",href:"/favicon.ico"},{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"},{rel:"apple-touch-icon",type:"image/png",sizes:"180x180",href:"/apple-touch-icon.png"},{rel:"mask-icon",color:"#5bbad5",href:"/safari-pinned-tab.svg"}]}}},1693:function(t,e,n){"use strict";n.r(e);var o=n(28),r=(n(92),n(1450)),c={name:"PrivacyPage",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$api,o=t.i18n,e.next=3,n.getPage(o.locale,"privacy");case 3:return r=e.sent,c=r.metas,l=r.blocks,e.abrupt("return",{metas:c,blocks:l});case 7:case"end":return e.stop()}}),e)})))()},data:function(){return{meta:null,blocks:[]}},head:function(){return Object(r.a)(this.metas,this.$route.fullPath)}},l=n(22),component=Object(l.a)(c,(function(){var t=this._self._c;return t("div",{staticClass:"home"},[t("TheBlockGenerator",{attrs:{blocks:this.blocks}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TheBlockGenerator:n(1449).default})}}]);