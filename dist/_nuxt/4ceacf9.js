(window.webpackJsonp=window.webpackJsonp||[]).push([[83,61],{1435:function(e,t,n){var content=n(1446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(45).default)("0cfa0179",content,!0,{sourceMap:!1})},1445:function(e,t,n){"use strict";n(1435)},1446:function(e,t,n){var o=n(44)((function(i){return i[1]}));o.push([e.i,".blocks{display:grid;grid-template-columns:minmax(0,1fr);grid-gap:var(--blocks-gap);gap:var(--blocks-gap);margin-bottom:var(--blocks-gap)}.blocks>div{z-index:1}",""]),o.locals={},e.exports=o},1449:function(e,t,n){"use strict";n.r(t);n(68);var o=n(75),r={props:{blocks:{type:Array,required:!0}},methods:{resolveBlockName:function(e){return"Block".concat(Object(o.snakeToPascal)(e))}}},c=(n(1445),n(22)),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"blocks"},e._l(e.blocks,(function(n,o){return t(e.resolveBlockName(n.type),{key:"block_".concat(n.type,"_").concat(o),tag:"component",attrs:{content:n.content}})})),1)}),[],!1,null,null,null);t.default=component.exports},1450:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(46),n(97);var o=function(e,t){var n=e.title,title=void 0===n?"":n,o=e.description,r=void 0===o?"":o,c=e.image,image=void 0===c?"":c;return{title:title,meta:[{hid:"facebook-domain-verification",name:"facebook-domain-verification",content:"3kha0gyw1icp565r5m3slr25xgz9ie"},{hid:"title",name:"title",content:title},{hid:"description",name:"description",content:r},{hid:"image",name:"image",content:image},{itemprop:"name",content:title},{itemprop:"description",content:r},{itemprop:"image",content:image},{hid:"twitter:card",name:"twitter:card",content:"summary"},{hid:"twitter:title",name:"twitter:title",content:title},{hid:"twitter:description",name:"twitter:description",content:r},{hid:"og:title",name:"og:title",property:"og:title",content:title},{hid:"og:description",name:"og:description",property:"og:description",content:r},{hid:"og:image",name:"og:image",property:"og:image",content:image},{hid:"og:url",name:"og:url",property:"og:url",content:t},{hid:"og:site_name",name:"og:site_name",property:"og:site_name",content:"Dinner in the sky France"},{hid:"og:type",name:"og:type",property:"og:type",content:"website"}],link:[{rel:"shortcut icon",type:"image/x-icon",sizes:"16x16 32x32",href:"/favicon.ico"},{rel:"icon",type:"image/png",sizes:"16x16",href:"/favicon-16x16.png"},{rel:"icon",type:"image/png",sizes:"32x32",href:"/favicon-32x32.png"},{rel:"apple-touch-icon",type:"image/png",sizes:"180x180",href:"/apple-touch-icon.png"},{rel:"mask-icon",color:"#5bbad5",href:"/safari-pinned-tab.svg"}]}}},1695:function(e,t,n){"use strict";n.r(t);var o=n(28),r=(n(92),n(46),n(97),n(53),n(79),n(75)),c=n(1450),l={name:"HomePage",asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,c,l,d,m,f,desc;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=e.$api,l=e.i18n,t.next=3,c.getPage(l.locale,"home");case 3:return d=t.sent,m=d.metas,f=d.blocks,desc=null!=l&&null!==(n=l._vm)&&void 0!==n&&null!==(n=n.messages[l.locale])&&void 0!==n&&n.dates?null==l||null===(o=l._vm)||void 0===o||null===(o=o.messages[l.locale])||void 0===o?void 0:o.dates.replace(/<\/?[^>]+(>|$)/g,""):"",m.description=m.description.replace("$dates",Object(r.capitalize)(desc)||""),t.abrupt("return",{dataLoaded:!0,metas:m,blocks:f});case 9:case"end":return t.stop()}}),t)})))()},data:function(){return{dataLoaded:!1,meta:null,blocks:[]}},head:function(){return Object(c.a)(this.metas,this.$route.fullPath)}},d=n(22),component=Object(d.a)(l,(function(){var e=this._self._c;return e("div",{staticClass:"home"},[e("TheBlockGenerator",{attrs:{blocks:this.blocks}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TheBlockGenerator:n(1449).default})}}]);