(window.webpackJsonp=window.webpackJsonp||[]).push([[30,70,75],{1407:function(t,e,n){var content=n(1412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("755b5ddc",content,!0,{sourceMap:!1})},1410:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBjbGFzcz0idWktc3Bpbm5lciIgd2lkdGg9IjM0cHgiIGhlaWdodD0iNnB4IiB2aWV3Qm94PSIwIC0yMDAgMTAwIDcwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxQUNERCIgc3Ryb2tlLXdpZHRoPSIxMCIgcj0iMzUiCiAgICBzdHJva2UtZGFzaGFycmF5PSIxNjQuOTMzNjE0MzEzNDY0MTUgNTYuOTc3ODcxNDM3ODIxMzgiPgogICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIgogICAgICB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgPC9jaXJjbGU+Cjwvc3ZnPg=="},1411:function(t,e,n){"use strict";n(1407)},1412:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,'.ui-image{height:100%;overflow:hidden;transition-delay:0ms;transition-duration:.1s;transition-property:opacity;transition-timing-function:cubic-bezier(.455,.03,.515,.955);width:100%;will-change:opacity}@media screen and (min-width:1080px){.ui-image.has-hover:not(:disabled).active .ui-image__container,.ui-image.has-hover:not(:disabled):focus .ui-image__container,.ui-image.has-hover:not(:disabled):hover .ui-image__container{transform:scale(.9)}.ui-image.has-hover:not(:disabled).active img,.ui-image.has-hover:not(:disabled):focus img,.ui-image.has-hover:not(:disabled):hover img{transform:scale(1.25)}}.ui-image.has-gradient .ui-image__container{position:relative}.ui-image.has-gradient .ui-image__container:after{background-image:linear-gradient(180deg,rgba(12,17,51,0),rgba(12,17,51,.75));bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:1}.ui-image img{height:100%;-o-object-fit:cover;object-fit:cover;transition:opacity .7s ease-in;width:100%}.ui-image img[lazy=error],.ui-image img[lazy=loading]{-o-object-fit:none;object-fit:none;opacity:0}.ui-image.has-datascroll .ui-image__container{height:110%;transition:none}.ui-image__container{background-color:rgba(26,157,216,.1);height:100%;overflow:hidden;position:relative;transform-origin:center;transition-delay:0ms;transition-duration:.3s;transition-property:transform;transition-timing-function:cubic-bezier(.455,.03,.515,.955);width:100%;will-change:transform}.no-background .ui-image__container{background:none}.ui-image.auto-size,.ui-image.auto-size .ui-image__container,.ui-image.auto-size img{height:auto;width:auto}',""]),o.locals={},t.exports=o},1413:function(t,e,n){"use strict";n.r(e);n(46),n(47),n(56),n(57),n(50),n(27),n(42);var o=n(8),r=(n(68),n(172),n(33)),l=n(75),c=n(321),d=n.n(c),m=n(1410),h=n.n(m);function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function f(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var x={name:"UiImage",props:{src:{type:String,required:!0},alt:{type:String,required:!1,default:null},hasHover:{type:Boolean,default:!1},hasGradient:{type:Boolean,default:!1},noBackground:{type:Boolean,default:!1},autoSize:{type:Boolean,default:!1},lazy:{type:Boolean,default:!0},dataScroll:{type:[Boolean,String],default:!1},dataScrollSpeed:{type:[String,Number],default:0}},data:function(){return{loading:h.a,error:d.a}},computed:f(f({},Object(r.d)("screens",["scrollY"])),{},{vlazy:function(){return{selector:"img",error:this.error,loading:this.loading}},customClasses:function(){return["ui-image",{"has-hover":this.hasHover,"has-gradient":this.hasGradient,"no-background":this.noBackground,"auto-size":this.autoSize,"has-datascroll":this.dataScroll}]},translateYImage:function(){return this.dataScroll?((this.$el?Object(l.getPosition)(this.$el).top+Object(l.getRect)(this.$el).height/2:0)-this.scrollY)*this.dataScrollSpeed/200:0},imageHeight:function(){return 100-100*this.dataScrollSpeed/10},styleImage:function(){return this.dataScroll?"transform: translateY(".concat(this.translateYImage,"%);height:").concat(this.imageHeight,"%;"):null}})},v=(n(1411),n(22)),component=Object(v.a)(x,(function(){var t=this,e=t._self._c;return e("div",{class:t.customClasses},[t.lazy?e("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:t.vlazy,expression:"vlazy"}],staticClass:"ui-image__container",style:t.styleImage},[e("img",{attrs:{"data-src":t.src,alt:t.alt},on:{load:function(e){return t.$emit("load")}}})]):e("div",{staticClass:"ui-image__container",style:t.styleImage},[e("img",{attrs:{src:t.src,alt:t.alt}})])])}),[],!1,null,null,null);e.default=component.exports},1476:function(t,e,n){var content=n(1514);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("6fc661a1",content,!0,{sourceMap:!1})},1513:function(t,e,n){"use strict";n(1476)},1514:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,".ui-metadata{align-items:center;color:var(--color-font);display:inline-flex;gap:1rem;margin-right:2rem}.ui-metadata__image{align-items:center;background-color:hsla(0,0%,100%,.1);border-radius:1.1rem;display:flex;height:3.6rem;justify-content:center;overflow:hidden;position:relative;width:3.6rem}.ui-metadata__image.large{height:5rem;width:5rem}.ui-metadata__title{font-weight:500}@media screen and (max-width:1079px){.ui-metadata__title{font-size:15px}}@media screen and (min-width:1080px){.ui-metadata__title{font-size:11.25px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-metadata__title{font-size:calc(4.25518px + .64767vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-metadata__title{font-size:15px}}.ui-metadata__subtitle{opacity:.5}@media screen and (max-width:1079px){.ui-metadata__subtitle{font-size:13px}}@media screen and (min-width:1080px){.ui-metadata__subtitle{font-size:9.75px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-metadata__subtitle{font-size:calc(3.68782px + .56131vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-metadata__subtitle{font-size:13px}}",""]),o.locals={},t.exports=o},1558:function(t,e,n){var content=n(1682);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("a0b3bee8",content,!0,{sourceMap:!1})},1575:function(t,e,n){"use strict";n.r(e);var o={props:{title:{type:String,default:""},subtitle:{type:String,default:""},image:{type:String,default:""},icon:{type:String,default:""},largeImage:{type:Boolean,default:!1}}},r=(n(1513),n(22)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ui-metadata"},[e("div",{staticClass:"ui-metadata__image",class:{large:t.largeImage}},[t.image?e("UiImage",{attrs:{size:"fit",src:t.image}}):t._e(),t._v(" "),t.icon?e("UiIcon",{attrs:{icon:t.icon,size:"sm"}}):t._e()],1),t._v(" "),e("div",[t.title?e("p",{staticClass:"ui-metadata__title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.subtitle?e("p",{staticClass:"ui-metadata__subtitle"},[t._v(t._s(t.subtitle))]):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiImage:n(1413).default,UiIcon:n(243).default})},1681:function(t,e,n){"use strict";n(1558)},1682:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,"@media screen and (min-width:1080px){.block-quote{display:grid;grid-template-columns:17.5rem minmax(0,1fr);grid-gap:5rem;gap:5rem}}@media screen and (max-width:1079px){.block-quote{padding:0 2rem}.block-quote__image{display:none}}.block-quote__text{color:var(--color-purple);line-height:1.3}@media screen and (max-width:1079px){.block-quote__text{font-size:23px}}@media screen and (min-width:1080px){.block-quote__text{font-size:17.25px}}@media only screen and (min-width:1080px)and (min-width:1080px){.block-quote__text{font-size:calc(6.52461px + .99309vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.block-quote__text{font-size:23px}}.block-quote__author-name{color:var(--color-font);font-weight:500}@media screen and (max-width:1079px){.block-quote__author-name{font-size:15px}}@media screen and (min-width:1080px){.block-quote__author-name{font-size:11.25px}}@media only screen and (min-width:1080px)and (min-width:1080px){.block-quote__author-name{font-size:calc(4.25518px + .64767vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.block-quote__author-name{font-size:15px}}.block-quote__author-role{color:var(--color-font);opacity:.5}@media screen and (max-width:1079px){.block-quote__author-role{font-size:12px}}@media screen and (min-width:1080px){.block-quote__author-role{font-size:9px}}@media only screen and (min-width:1080px)and (min-width:1080px){.block-quote__author-role{font-size:calc(3.40415px + .51813vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.block-quote__author-role{font-size:12px}}.block-quote__infos{margin-top:1rem}@media screen and (max-width:1079px){.block-quote__infos{display:none}}.block-quote__meta{margin-top:2rem}@media screen and (min-width:1080px){.block-quote__meta{display:none}}",""]),o.locals={},t.exports=o},1738:function(t,e,n){"use strict";n.r(e);var o={props:{content:{type:Object,required:!0}}},r=(n(1681),n(22)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("UiContainer",[e("UiNarrow",{staticClass:"block-quote",attrs:{left:"3",right:"3"}},[e("div",{staticClass:"block-quote__image"},[t.content.author_image?e("UiImage",{attrs:{rounded:"",size:"quote",src:t.content.author_image}}):t._e()],1),t._v(" "),e("blockquote",{staticClass:"block-quote__text"},[t._v("\n      "+t._s(t.content.quote)+"\n      "),t.content.author_name?e("footer",{staticClass:"block-quote__infos"},[t.content.author_name?e("cite",{staticClass:"block-quote__author-name"},[t._v(t._s(t.content.author_name))]):t._e(),t._v(" "),t.content.author_role?e("p",{staticClass:"block-quote__author-role"},[t._v("\n          "+t._s(t.content.author_role)+"\n        ")]):t._e()]):t._e(),t._v(" "),e("div",{staticClass:"block-quote__meta"},[e("UiMetadata",{attrs:{title:t.content.author_name,subtitle:t.content.author_role,image:t.content.author_image,"large-image":""}})],1)])])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiImage:n(1413).default,UiMetadata:n(1575).default,UiNarrow:n(484).default,UiContainer:n(320).default})}}]);