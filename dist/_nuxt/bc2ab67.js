(window.webpackJsonp=window.webpackJsonp||[]).push([[50,35],{1409:function(e,t,n){var content=n(1420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(45).default)("062299f5",content,!0,{sourceMap:!1})},1417:function(e,t,n){"use strict";n.r(t);n(172);var l={props:{lg:{type:Number,default:12},md:{type:Number,default:2}},computed:{styles:function(){return[{"--columns-lg":this.lg},{"--columns-md":this.md}]}}},d=(n(1419),n(22)),component=Object(d.a)(l,(function(){var e=this;return(0,e._self._c)("div",{staticClass:"field",style:e.styles},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},1419:function(e,t,n){"use strict";n(1409)},1420:function(e,t,n){var l=n(44)((function(i){return i[1]}));l.push([e.i,".field{--columns-md:2;--columns-lg:12}@media screen and (max-width:1079px){.field{grid-column:span var(--columns-md)}}@media screen and (min-width:1080px){.field{grid-column:span var(--columns-lg)}}",""]),l.locals={},e.exports=l},1528:function(e,t,n){var content=n(1623);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(45).default)("d8ec340c",content,!0,{sourceMap:!1})},1622:function(e,t,n){"use strict";n(1528)},1623:function(e,t,n){var l=n(44)((function(i){return i[1]}));l.push([e.i,".field-separator{border-bottom:1px solid #231f20;font-weight:400;opacity:.6;padding-bottom:.4rem;padding-top:.4rem}@media screen and (max-width:1079px){.field-separator{font-size:12px}}@media screen and (min-width:1080px){.field-separator{font-size:9px}}@media only screen and (min-width:1080px)and (min-width:1080px){.field-separator{font-size:calc(3.40415px + .51813vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.field-separator{font-size:12px}}",""]),l.locals={},e.exports=l},1708:function(e,t,n){"use strict";n.r(t);n(172);var l={props:{text:{type:String,default:""},theme:{type:String,default:"default"},lg:{type:Number,default:12},md:{type:Number,default:2}},computed:{classes:function(){return["field-separator",this.theme?"field-separator--".concat(this.theme):""]}}},d=(n(1622),n(22)),component=Object(d.a)(l,(function(){var e=this,t=e._self._c;return t("Field",{attrs:{lg:e.lg,md:e.md}},[t("p",{class:e.classes},[e.text?t("span",{domProps:{innerHTML:e._s(e.text)}}):e._t("default")],2)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Field:n(1417).default})}}]);