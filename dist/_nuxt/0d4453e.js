(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1444:function(t,e,n){var content=n(1578);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(30).default)("de9f0be8",content,!0,{sourceMap:!1})},1577:function(t,e,n){"use strict";n(1444)},1578:function(t,e,n){var l=n(29)(!1);l.push([t.i,"@media screen and (min-width:1080px){.linklist__icon{display:none}}",""]),t.exports=l},1631:function(t,e,n){"use strict";n.r(e);var l={props:{links:{type:Array,default:function(){return[]}},theme:{type:String,default:"default"}},computed:{classes:function(){return["linklist","linklist--".concat(this.theme)]}}},c=(n(1577),n(14)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{class:t.classes},[n("ul",{staticClass:"linklist__list"},t._l(t.links,(function(link){return n("li",{key:link,staticClass:"linklist__item"},[n("UiLink",{attrs:{link:link,theme:t.theme},on:{click:function(e){return t.$emit("click",e)}}},[t._v("\n        "+t._s(link.text)+"\n        "),"header-bottom"===t.theme?n("UiIcon",{staticClass:"linklist__icon",class:{opened:t.opened},attrs:{icon:"chevron-right",size:"xs"}}):t._e(),t._v(" "),"header-bottom"===t.theme?n("UiIcon",{staticClass:"linklist__arrow",attrs:{icon:"triangle",size:"xs"}}):t._e()],1)],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiIcon:n(215).default,UiLink:n(164).default})}}]);