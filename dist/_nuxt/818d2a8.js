(window.webpackJsonp=window.webpackJsonp||[]).push([[28,70,71,77,79],{1407:function(e,t,n){var content=n(1412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(45).default)("755b5ddc",content,!0,{sourceMap:!1})},1408:function(e,t,n){var content=n(1415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(45).default)("4e0b1f92",content,!0,{sourceMap:!1})},1410:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBjbGFzcz0idWktc3Bpbm5lciIgd2lkdGg9IjM0cHgiIGhlaWdodD0iNnB4IiB2aWV3Qm94PSIwIC0yMDAgMTAwIDcwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxQUNERCIgc3Ryb2tlLXdpZHRoPSIxMCIgcj0iMzUiCiAgICBzdHJva2UtZGFzaGFycmF5PSIxNjQuOTMzNjE0MzEzNDY0MTUgNTYuOTc3ODcxNDM3ODIxMzgiPgogICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIgogICAgICB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgPC9jaXJjbGU+Cjwvc3ZnPg=="},1411:function(e,t,n){"use strict";n(1407)},1412:function(e,t,n){var o=n(44)((function(i){return i[1]}));o.push([e.i,'.ui-image{height:100%;overflow:hidden;transition-delay:0ms;transition-duration:.1s;transition-property:opacity;transition-timing-function:cubic-bezier(.455,.03,.515,.955);width:100%;will-change:opacity}@media screen and (min-width:1080px){.ui-image.has-hover:not(:disabled).active .ui-image__container,.ui-image.has-hover:not(:disabled):focus .ui-image__container,.ui-image.has-hover:not(:disabled):hover .ui-image__container{transform:scale(.9)}.ui-image.has-hover:not(:disabled).active img,.ui-image.has-hover:not(:disabled):focus img,.ui-image.has-hover:not(:disabled):hover img{transform:scale(1.25)}}.ui-image.has-gradient .ui-image__container{position:relative}.ui-image.has-gradient .ui-image__container:after{background-image:linear-gradient(180deg,rgba(12,17,51,0),rgba(12,17,51,.75));bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:1}.ui-image img{height:100%;-o-object-fit:cover;object-fit:cover;transition:opacity .7s ease-in;width:100%}.ui-image img[lazy=error],.ui-image img[lazy=loading]{-o-object-fit:none;object-fit:none;opacity:0}.ui-image.has-datascroll .ui-image__container{height:110%;transition:none}.ui-image__container{background-color:rgba(26,157,216,.1);height:100%;overflow:hidden;position:relative;transform-origin:center;transition-delay:0ms;transition-duration:.3s;transition-property:transform;transition-timing-function:cubic-bezier(.455,.03,.515,.955);width:100%;will-change:transform}.no-background .ui-image__container{background:none}.ui-image.auto-size,.ui-image.auto-size .ui-image__container,.ui-image.auto-size img{height:auto;width:auto}',""]),o.locals={},e.exports=o},1413:function(e,t,n){"use strict";n.r(t);n(46),n(47),n(56),n(57),n(50),n(27),n(42);var o=n(8),r=(n(68),n(172),n(33)),c=n(75),l=n(321),d=n.n(l),m=n(1410),h=n.n(m);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var v={name:"UiImage",props:{src:{type:String,required:!0},alt:{type:String,required:!1,default:null},hasHover:{type:Boolean,default:!1},hasGradient:{type:Boolean,default:!1},noBackground:{type:Boolean,default:!1},autoSize:{type:Boolean,default:!1},lazy:{type:Boolean,default:!0},dataScroll:{type:[Boolean,String],default:!1},dataScrollSpeed:{type:[String,Number],default:0}},data:function(){return{loading:h.a,error:d.a}},computed:_(_({},Object(r.d)("screens",["scrollY"])),{},{vlazy:function(){return{selector:"img",error:this.error,loading:this.loading}},customClasses:function(){return["ui-image",{"has-hover":this.hasHover,"has-gradient":this.hasGradient,"no-background":this.noBackground,"auto-size":this.autoSize,"has-datascroll":this.dataScroll}]},translateYImage:function(){return this.dataScroll?((this.$el?Object(c.getPosition)(this.$el).top+Object(c.getRect)(this.$el).height/2:0)-this.scrollY)*this.dataScrollSpeed/200:0},imageHeight:function(){return 100-100*this.dataScrollSpeed/10},styleImage:function(){return this.dataScroll?"transform: translateY(".concat(this.translateYImage,"%);height:").concat(this.imageHeight,"%;"):null}})},y=(n(1411),n(22)),component=Object(y.a)(v,(function(){var e=this,t=e._self._c;return t("div",{class:e.customClasses},[e.lazy?t("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:e.vlazy,expression:"vlazy"}],staticClass:"ui-image__container",style:e.styleImage},[t("img",{attrs:{"data-src":e.src,alt:e.alt},on:{load:function(t){return e.$emit("load")}}})]):t("div",{staticClass:"ui-image__container",style:e.styleImage},[t("img",{attrs:{src:e.src,alt:e.alt}})])])}),[],!1,null,null,null);t.default=component.exports},1414:function(e,t,n){"use strict";n(1408)},1415:function(e,t,n){var o=n(44)((function(i){return i[1]}));o.push([e.i,".ui-tagline{font-weight:300;letter-spacing:.2em;line-height:1.05;text-transform:uppercase}@media screen and (max-width:1079px){.ui-tagline{font-size:9px}}@media screen and (min-width:1080px){.ui-tagline{font-size:8.25px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-tagline{font-size:calc(3.12047px + .47496vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-tagline{font-size:11px}}.ui-tagline.no-margin{margin:0}",""]),o.locals={},e.exports=o},1416:function(e,t,n){"use strict";n.r(t);var o={props:{tag:{type:String,default:"p"},text:{type:String,default:""},theme:{type:String,default:""},noMargin:{type:Boolean,default:!1}},computed:{classes:function(){return[{"no-margin":this.noMargin},this.theme&&"ui-tagline--".concat(this.theme)]}}},r=(n(1414),n(22)),component=Object(r.a)(o,(function(){var e=this,t=e._self._c;return t(e.tag,{tag:"Component",staticClass:"ui-tagline",class:e.classes},[e.text?t("span",{ref:"title",domProps:{innerHTML:e._s(e.text)}}):e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},1418:function(e,t,n){"use strict";n.r(t);var o={props:{tag:{type:String,default:"div"},once:{type:Boolean,default:!0}},data:function(){return{options:{rootMargin:"-40% -40%"},observer:null}},mounted:function(){var e=this;this.observer=new IntersectionObserver((function(t){e.handleIntersect(t[0])}),this.options),this.observer.observe(this.$el)},unmounted:function(){this.observer.disconnect()},methods:{handleIntersect:function(e){e.isIntersecting?(this.$emit("reveal"),this.once&&this.observer.disconnect()):this.$emit("out")}}},r=n(22),component=Object(r.a)(o,(function(){var e=this;return(0,e._self._c)(e.tag,{tag:"component"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},1422:function(e,t,n){"use strict";n.r(t);n(46),n(47),n(56),n(57),n(50),n(27),n(42);var o=n(8),r=n(33);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={props:{id:{type:String,default:""}},methods:l(l({},Object(r.c)("application",["setCurrentSection"])),{},{updateHash:function(){this.setUrlParamsHashtag(this.id),this.setCurrentSection(this.id)},setUrlParamsHashtag:function(e){null!==e&&window.history.pushState(null,null,"#".concat(e))}})},m=n(22),component=Object(m.a)(d,(function(){var e=this;return(0,e._self._c)("UiIntersect",{attrs:{id:e.id,once:!1},on:{reveal:e.updateHash}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiIntersect:n(1418).default})},1556:function(e,t,n){var content=n(1678);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(45).default)("34a51060",content,!0,{sourceMap:!1})},1677:function(e,t,n){"use strict";n(1556)},1678:function(e,t,n){var o=n(44)((function(i){return i[1]}));o.push([e.i,'.block-menu{padding-bottom:6rem;padding-top:6rem;position:relative}.block-menu:before{background-image:url(/img/cloud04.png);background-position:100%;background-repeat:no-repeat;background-size:contain;content:"";height:250%;position:absolute;right:0;top:0;width:100%}@media screen and (max-width:1079px){.block-menu__narrow{display:grid;grid-gap:6rem;gap:6rem}}@media screen and (min-width:1080px){.block-menu__narrow{align-items:flex-start;display:flex;gap:8rem;justify-content:flex-start}}.block-menu__texts{flex:0 1 auto;padding-top:4rem}@media screen and (max-width:1079px){.block-menu__texts{order:0;padding:0 var(--gutter);width:100%}}@media screen and (min-width:1080px){.block-menu__texts{width:calc(41.66667% - 4rem)}}.block-menu__tagline{color:var(--color-primary);margin-bottom:2rem}.block-menu__menu{background:#fff;border-bottom-left-radius:8rem;border-top-right-radius:8rem;box-shadow:0 14px 74px -11px rgba(0,12,56,.1);flex:0 1 auto;padding:4rem 2rem;position:relative}@media screen and (max-width:1079px){.block-menu__menu{margin:0 var(--gutter);width:calc(100% - var(--gutter)*2)}}@media screen and (min-width:1080px){.block-menu__menu{width:calc(58.33333% - 4rem)}}.block-menu__menu h3{font-weight:300;padding-left:3rem;padding-right:3rem;text-transform:uppercase}@media screen and (max-width:1079px){.block-menu__menu h3{font-size:20px}}@media screen and (min-width:1080px){.block-menu__menu h3{font-size:16.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.block-menu__menu h3{font-size:calc(6.24093px + .94991vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.block-menu__menu h3{font-size:22px}}.block-menu__menu h3 strong{font-weight:700}.block-menu__menu p{font-weight:300;padding-left:3rem;padding-right:3rem}@media screen and (max-width:1079px){.block-menu__menu p{font-size:16px}}@media screen and (min-width:1080px){.block-menu__menu p{font-size:12px}}@media only screen and (min-width:1080px)and (min-width:1080px){.block-menu__menu p{font-size:calc(4.53886px + .69085vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.block-menu__menu p{font-size:16px}}.block-menu__menu .ui-image.auto-size{cursor:pointer;display:block;margin-top:2rem;position:relative;width:100%}.block-menu__menu .ui-image.auto-size:before{content:"";display:block;padding-top:47.6470588235%;width:100%}.block-menu__menu .ui-image.auto-size>a,.block-menu__menu .ui-image.auto-size>div{height:100%;left:0;position:absolute;top:0;width:100%}.block-menu__menu .ui-image.auto-size__container{background:transparent}',""]),o.locals={},e.exports=o},1736:function(e,t,n){"use strict";n.r(t);n(46),n(47),n(56),n(57),n(50),n(27),n(42);var o=n(8),r=n(33),c=n(75);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m={props:{content:{type:Object,required:!0}},data:function(){return{openImage:0,dataScrollSpeed:-2}},computed:d(d({},Object(r.d)("screens",["scrollY"])),{},{translateY:function(){return((this.$refs.scrollYParallax?Object(c.getPosition)(this.$refs.scrollYParallax).top+Object(c.getRect)(this.$refs.scrollYParallax).height/2:0)-this.scrollY)*this.dataScrollSpeed/200},style:function(){return this.dataScrollSpeed?"transform: translateY(".concat(this.translateY,"%);"):null},images:function(){return[this.content.menu.image.large]}}),created:function(){},mounted:function(){},methods:{handleClose:function(){this.openImage=0,document.body.style.removeProperty("overflow")},handleGallery:function(){this.openImage=1}}},h=(n(1677),n(22)),component=Object(h.a)(m,(function(){var e=this,t=e._self._c;return t("UiSection",{attrs:{id:e.content.id}},[t("UiContainer",{attrs:{classname:"block-menu"}},[t("UiNarrow",{staticClass:"block-menu__narrow",attrs:{left:"1",right:"1"}},[t("div",{staticClass:"block-menu__texts"},[e.content.tagline?t("UiTagline",{staticClass:"block-menu__tagline",attrs:{text:e.content.tagline}}):e._e(),e._v(" "),e.content.title?t("UiTitle",{staticClass:"block-menu__title",attrs:{title:e.content.title,size:"xl"}}):e._e(),e._v(" "),e.content.text?t("UiText",{attrs:{text:e.content.text}}):e._e()],1),e._v(" "),e.content.menu?t("div",{ref:"scrollYParallax",staticClass:"block-menu__menu",style:e.style},[t("h3",{domProps:{innerHTML:e._s(e.content.menu.title)}}),e._v(" "),t("p",{domProps:{innerHTML:e._s(e.content.menu.text)}}),e._v(" "),e.content.menu.image?t("UiImage",{attrs:{src:e.content.menu.image.thumb,alt:e.content.menu.title,"auto-size":""},nativeOn:{click:function(t){return e.handleGallery.apply(null,arguments)}}}):e._e()],1):e._e()])],1),e._v(" "),t("portal",{attrs:{to:"rootmenu"}},[e.content.menu&&e.content.menu.image&&e.content.menu.image.large?t("VueGallery",{attrs:{id:"menu-gallery-".concat(e._uid),images:e.images,index:e.openImage},on:{close:e.handleClose}},[t("UiIcon",{attrs:{slot:"prev",icon:"chevron-left"},slot:"prev"}),e._v(" "),t("UiIcon",{attrs:{slot:"next",icon:"chevron-right"},slot:"next"}),e._v(" "),t("UiIcon",{attrs:{slot:"close",icon:"close"},slot:"close"})],1):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiTagline:n(1416).default,UiTitle:n(244).default,UiText:n(485).default,UiImage:n(1413).default,UiNarrow:n(484).default,UiContainer:n(320).default,UiIcon:n(243).default,UiSection:n(1422).default})}}]);