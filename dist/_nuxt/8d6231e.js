(window.webpackJsonp=window.webpackJsonp||[]).push([[10,58,59,60,64,69,70,71,76,77,79],{1407:function(t,e,n){var content=n(1412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("755b5ddc",content,!0,{sourceMap:!1})},1408:function(t,e,n){var content=n(1415);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("4e0b1f92",content,!0,{sourceMap:!1})},1410:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBjbGFzcz0idWktc3Bpbm5lciIgd2lkdGg9IjM0cHgiIGhlaWdodD0iNnB4IiB2aWV3Qm94PSIwIC0yMDAgMTAwIDcwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxQUNERCIgc3Ryb2tlLXdpZHRoPSIxMCIgcj0iMzUiCiAgICBzdHJva2UtZGFzaGFycmF5PSIxNjQuOTMzNjE0MzEzNDY0MTUgNTYuOTc3ODcxNDM3ODIxMzgiPgogICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIgogICAgICB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgPC9jaXJjbGU+Cjwvc3ZnPg=="},1411:function(t,e,n){"use strict";n(1407)},1412:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,'.ui-image{height:100%;overflow:hidden;transition-delay:0ms;transition-duration:.1s;transition-property:opacity;transition-timing-function:cubic-bezier(.455,.03,.515,.955);width:100%;will-change:opacity}@media screen and (min-width:1080px){.ui-image.has-hover:not(:disabled).active .ui-image__container,.ui-image.has-hover:not(:disabled):focus .ui-image__container,.ui-image.has-hover:not(:disabled):hover .ui-image__container{transform:scale(.9)}.ui-image.has-hover:not(:disabled).active img,.ui-image.has-hover:not(:disabled):focus img,.ui-image.has-hover:not(:disabled):hover img{transform:scale(1.25)}}.ui-image.has-gradient .ui-image__container{position:relative}.ui-image.has-gradient .ui-image__container:after{background-image:linear-gradient(180deg,rgba(12,17,51,0),rgba(12,17,51,.75));bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:1}.ui-image img{height:100%;-o-object-fit:cover;object-fit:cover;transition:opacity .7s ease-in;width:100%}.ui-image img[lazy=error],.ui-image img[lazy=loading]{-o-object-fit:none;object-fit:none;opacity:0}.ui-image.has-datascroll .ui-image__container{height:110%;transition:none}.ui-image__container{background-color:rgba(26,157,216,.1);height:100%;overflow:hidden;position:relative;transform-origin:center;transition-delay:0ms;transition-duration:.3s;transition-property:transform;transition-timing-function:cubic-bezier(.455,.03,.515,.955);width:100%;will-change:transform}.no-background .ui-image__container{background:none}.ui-image.auto-size,.ui-image.auto-size .ui-image__container,.ui-image.auto-size img{height:auto;width:auto}',""]),o.locals={},t.exports=o},1413:function(t,e,n){"use strict";n.r(e);n(46),n(47),n(56),n(57),n(50),n(27),n(42);var o=n(8),r=(n(68),n(172),n(33)),l=n(75),c=n(321),d=n.n(c),m=n(1410),f=n.n(m);function _(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?_(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var k={name:"UiImage",props:{src:{type:String,required:!0},alt:{type:String,required:!1,default:null},hasHover:{type:Boolean,default:!1},hasGradient:{type:Boolean,default:!1},noBackground:{type:Boolean,default:!1},autoSize:{type:Boolean,default:!1},lazy:{type:Boolean,default:!0},dataScroll:{type:[Boolean,String],default:!1},dataScrollSpeed:{type:[String,Number],default:0}},data:function(){return{loading:f.a,error:d.a}},computed:h(h({},Object(r.d)("screens",["scrollY"])),{},{vlazy:function(){return{selector:"img",error:this.error,loading:this.loading}},customClasses:function(){return["ui-image",{"has-hover":this.hasHover,"has-gradient":this.hasGradient,"no-background":this.noBackground,"auto-size":this.autoSize,"has-datascroll":this.dataScroll}]},translateYImage:function(){return this.dataScroll?((this.$el?Object(l.getPosition)(this.$el).top+Object(l.getRect)(this.$el).height/2:0)-this.scrollY)*this.dataScrollSpeed/200:0},imageHeight:function(){return 100-100*this.dataScrollSpeed/10},styleImage:function(){return this.dataScroll?"transform: translateY(".concat(this.translateYImage,"%);height:").concat(this.imageHeight,"%;"):null}})},x=(n(1411),n(22)),component=Object(x.a)(k,(function(){var t=this,e=t._self._c;return e("div",{class:t.customClasses},[t.lazy?e("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:t.vlazy,expression:"vlazy"}],staticClass:"ui-image__container",style:t.styleImage},[e("img",{attrs:{"data-src":t.src,alt:t.alt},on:{load:function(e){return t.$emit("load")}}})]):e("div",{staticClass:"ui-image__container",style:t.styleImage},[e("img",{attrs:{src:t.src,alt:t.alt}})])])}),[],!1,null,null,null);e.default=component.exports},1414:function(t,e,n){"use strict";n(1408)},1415:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,".ui-tagline{font-weight:300;letter-spacing:.2em;line-height:1.05;text-transform:uppercase}@media screen and (max-width:1079px){.ui-tagline{font-size:9px}}@media screen and (min-width:1080px){.ui-tagline{font-size:8.25px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-tagline{font-size:calc(3.12047px + .47496vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-tagline{font-size:11px}}.ui-tagline.no-margin{margin:0}",""]),o.locals={},t.exports=o},1416:function(t,e,n){"use strict";n.r(e);var o={props:{tag:{type:String,default:"p"},text:{type:String,default:""},theme:{type:String,default:""},noMargin:{type:Boolean,default:!1}},computed:{classes:function(){return[{"no-margin":this.noMargin},this.theme&&"ui-tagline--".concat(this.theme)]}}},r=(n(1414),n(22)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e(t.tag,{tag:"Component",staticClass:"ui-tagline",class:t.classes},[t.text?e("span",{ref:"title",domProps:{innerHTML:t._s(t.text)}}):t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},1418:function(t,e,n){"use strict";n.r(e);var o={props:{tag:{type:String,default:"div"},once:{type:Boolean,default:!0}},data:function(){return{options:{rootMargin:"-40% -40%"},observer:null}},mounted:function(){var t=this;this.observer=new IntersectionObserver((function(e){t.handleIntersect(e[0])}),this.options),this.observer.observe(this.$el)},unmounted:function(){this.observer.disconnect()},methods:{handleIntersect:function(t){t.isIntersecting?(this.$emit("reveal"),this.once&&this.observer.disconnect()):this.$emit("out")}}},r=n(22),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)(t.tag,{tag:"component"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},1422:function(t,e,n){"use strict";n.r(e);n(46),n(47),n(56),n(57),n(50),n(27),n(42);var o=n(8),r=n(33);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={props:{id:{type:String,default:""}},methods:c(c({},Object(r.c)("application",["setCurrentSection"])),{},{updateHash:function(){this.setUrlParamsHashtag(this.id),this.setCurrentSection(this.id)},setUrlParamsHashtag:function(t){null!==t&&window.history.pushState(null,null,"#".concat(t))}})},m=n(22),component=Object(m.a)(d,(function(){var t=this;return(0,t._self._c)("UiIntersect",{attrs:{id:t.id,once:!1},on:{reveal:t.updateHash}},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiIntersect:n(1418).default})},1426:function(t,e,n){var content=n(1430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("40fdcf12",content,!0,{sourceMap:!1})},1427:function(t,e,n){var content=n(1433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("2e4fc237",content,!0,{sourceMap:!1})},1428:function(t,e,n){var content=n(1437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("1d62e40d",content,!0,{sourceMap:!1})},1429:function(t,e,n){"use strict";n(1426)},1430:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,".ui-modal{bottom:0;left:0;position:fixed;right:0;top:0;z-index:999}.ui-modal__wrapper{background-color:var(--bg);left:3rem;margin:0 auto;max-width:124rem;position:absolute;right:3rem;top:50%;transform:translateY(-50%)}@media screen and (max-width:1079px){.ui-modal__wrapper{left:1.5rem;right:1.5rem}}@media screen and (min-width:1080px){.ui-modal__wrapper{left:3rem;right:3rem}}.ui-modal__wrapper.full{max-height:90vh;overflow:auto}@media screen and (max-width:1079px){.ui-modal__inner{padding:6rem 1rem 2rem}}@media screen and (min-width:1080px){.ui-modal__inner{padding:10rem 8.3333333333%}}.ui-modal__content{max-height:calc(100vh - 26rem);overflow-y:auto}.ui-modal__overlay{background-color:var(--bg);bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0;z-index:0}.ui-modal__close{align-items:center;display:flex;font-weight:500;position:absolute;text-transform:uppercase;z-index:1}@media screen and (max-width:1079px){.ui-modal__close{font-size:13px}}@media screen and (min-width:1080px){.ui-modal__close{font-size:9.75px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-modal__close{font-size:calc(3.68782px + .56131vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-modal__close{font-size:13px}}@media screen and (max-width:1079px){.ui-modal__close{right:1rem;top:1rem}}@media screen and (min-width:1080px){.ui-modal__close{right:3rem;top:3rem}}.ui-modal__close__icon{margin-left:1.5rem;transition:transform .3s cubic-bezier(1,0,0,1)}.ui-modal__close:hover .ui-modal__close__icon{transform:rotate(180deg)}.ui-modal__title{margin-bottom:4.5rem}.ui-modal--tiny{color:var(--color-font-alt)}.ui-modal--tiny .ui-modal__close{color:transparent;right:2rem;top:2rem}.ui-modal--tiny .ui-modal__close .ui-icon{color:var(--color-font-alt)}.ui-modal--tiny .ui-modal__overlay{background:#fff;opacity:.8}.ui-modal--tiny .ui-modal__wrapper{background:none;max-width:43rem}.ui-modal--tiny .ui-modal__inner{background-color:var(--color-primary);border-radius:2rem}@media screen and (max-width:1079px){.ui-modal--tiny .ui-modal__inner{box-shadow:0 12px 48px -7px rgba(31,34,79,.2);padding:5rem 2rem 2rem}}@media screen and (min-width:1080px){.ui-modal--tiny .ui-modal__inner{box-shadow:0 42px 48px -37px rgba(31,34,79,.2);padding:4rem}}.ui-modal--nopadding .ui-modal__inner{padding:0}.ui-modal--fullsize{padding:0;width:100vw}.ui-modal--fullsize .ui-modal__overlay{background:rgba(28,31,61,.5)}.ui-modal--fullsize .ui-modal__wrapper{background:none;max-width:250rem}.ui-modal--fullsize .ui-modal__inner{background:#1c1f3d;max-width:100%;width:100%}@media screen and (max-width:1079px){.ui-modal--fullsize .ui-modal__inner{padding:3rem}}@media screen and (min-width:1080px){.ui-modal--fullsize .ui-modal__inner{padding:5rem}}.ui-modal--fullsize .ui-modal__content{align-items:stretch;background:none;border-radius:0;display:flex;justify-content:flex-start;min-height:calc(100vh - 15rem)}.ui-modal--fullsize .ui-modal__content .pdf-viewer{align-items:stretch;display:flex;flex:1 1 auto;justify-content:flex-start;width:100%}.ui-modal--fullsize .ui-modal__content .pdf-viewer embed{flex:1 1 auto;width:100%}@media screen and (max-width:1079px){.ui-modal--fullsize .ui-modal__close{right:.7rem;top:.7rem}}@media screen and (min-width:1080px){.ui-modal--fullsize .ui-modal__close{right:1.5rem;top:1.5rem}}",""]),o.locals={},t.exports=o},1431:function(t,e,n){"use strict";n.r(e);var o={props:{value:{type:Boolean,default:!1},title:{type:String,default:""},theme:{type:String,default:"default"},full:{type:Boolean,default:!1}},computed:{customClasses:function(){return["ui-modal","ui-modal--".concat(this.theme)]}}},r=(n(1429),n(22)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("portal",{attrs:{to:"root"}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],class:t.customClasses},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"ui-modal__overlay",on:{click:function(e){return t.$emit("input",!1)}}}),t._v(" "),e("div",{staticClass:"ui-modal__wrapper",class:{full:t.full}},[e("div",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"ui-modal__inner"},[e("div",{staticClass:"ui-modal__content"},[t.title?e("UiHeading",{staticClass:"ui-modal__title",attrs:{theme:"main-subtitle",tag:"h4",title:t.title}}):t._e(),t._v(" "),t._t("default")],2)]),t._v(" "),e("button",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"ui-modal__close",on:{click:function(e){return t.$emit("input",!1)}}},[t._v("\n        "+t._s(t.$t("close"))+"\n        "),e("UiIcon",{directives:[{name:"show",rawName:"v-show",value:t.value,expression:"value"}],staticClass:"ui-modal__close__icon",attrs:{icon:"close",size:"md"}})],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiIcon:n(243).default})},1432:function(t,e,n){"use strict";n(1427)},1433:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,'.ui-book-link{color:var(--color-font);display:inline-block;font-weight:500;transition:color .4s cubic-bezier(.455,.03,.515,.955)}@media screen and (max-width:1079px){.ui-book-link{font-size:11px}}@media screen and (min-width:1080px){.ui-book-link{font-size:9.75px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-book-link{font-size:calc(3.68782px + .56131vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-book-link{font-size:13px}}.ui-book-link:hover{--color:var(--color-primary)}.ui-book-link--underline{font-weight:400;letter-spacing:.1em;line-height:1;padding:1rem 0;position:relative;text-transform:uppercase}@media screen and (max-width:1079px){.ui-book-link--underline{font-size:18px}}@media screen and (min-width:1080px){.ui-book-link--underline{font-size:13.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-book-link--underline{font-size:calc(5.10622px + .7772vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-book-link--underline{font-size:18px}}.ui-book-link--underline:after{background-color:var(--color-font);bottom:.4rem;content:"";display:block;height:1px;left:0;position:absolute;transform:scaleX(0);transform-origin:left center;transition:transform .5s cubic-bezier(.785,.135,.15,.86);width:100%}.ui-book-link--underline.is-active:after,.ui-book-link--underline.nuxt-link-exact-active:after,.ui-book-link--underline:active:after,.ui-book-link--underline:focus:after,.ui-book-link--underline:hover:after{transform:scaleX(1)}.ui-book-link--underline:after{background:linear-gradient(90deg,currentColor 33.3%,transparent 0,transparent 66.6%,currentColor 0);background-position:100% 0;background-size:300%;transform:scaleX(1);transition:all .8s cubic-bezier(.785,.135,.15,.86)}.ui-book-link--underline .ui-icon{--icon-size:1.1rem;margin-left:4.5rem;transition:all .6s cubic-bezier(.785,.135,.15,.86)}.ui-book-link--underline:not(:disabled).active:after,.ui-book-link--underline:not(:disabled):focus:after,.ui-book-link--underline:not(:disabled):hover:after{background-position:0 0}.ui-book-link--underline:not(:disabled).active .ui-icon,.ui-book-link--underline:not(:disabled):focus .ui-icon,.ui-book-link--underline:not(:disabled):hover .ui-icon{transform:rotate(45deg)}.ui-book-link--header-subscribe{align-items:center;background:var(--fg);border:0;border-radius:0;color:var(--color-font);display:flex;display:inline-flex;font-weight:500;justify-content:flex-start;text-transform:uppercase;transition:all .3s cubic-bezier(.785,.135,.15,.86)}@media screen and (max-width:1079px){.ui-book-link--header-subscribe{font-size:16px}}@media screen and (min-width:1080px){.ui-book-link--header-subscribe{font-size:13.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-book-link--header-subscribe{font-size:calc(5.10622px + .7772vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-book-link--header-subscribe{font-size:18px}}@media screen and (max-width:1079px){.ui-book-link--header-subscribe{border-bottom-left-radius:3rem;height:5rem;padding:1.3rem 2.5rem 1.3rem 3rem}}@media screen and (min-width:1080px){.ui-book-link--header-subscribe{border-bottom-left-radius:2.8em;height:4.5em;padding:.8em 3em .8em 3.5em}}.ui-book-link--header-subscribe .ui-icon{margin-left:2rem;--icon-size:1.2rem;transition:none}.ui-book-link--header-subscribe:not(:disabled).active,.ui-book-link--header-subscribe:not(:disabled):focus,.ui-book-link--header-subscribe:not(:disabled):hover{background-color:#1a9dd8;border:0;color:var(--color-font-alt)}.ui-book-link--giantbutton{align-items:center;background:var(--fg);border:0;border-radius:0;color:var(--color-font);display:flex;display:inline-flex;flex-direction:column;font-weight:500;justify-content:flex-start;margin-top:2rem;transition:all .3s cubic-bezier(.785,.135,.15,.86)}@media screen and (max-width:1079px){.ui-book-link--giantbutton{font-size:16px}}@media screen and (min-width:1080px){.ui-book-link--giantbutton{font-size:13.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-book-link--giantbutton{font-size:calc(5.10622px + .7772vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-book-link--giantbutton{font-size:18px}}@media screen and (max-width:1079px){.ui-book-link--giantbutton{border-bottom-right-radius:2rem;border-top-left-radius:2rem;padding:1.3rem 2.5rem 1.3rem 3rem}}@media screen and (min-width:1080px){.ui-book-link--giantbutton{border-bottom-right-radius:1.8em;border-top-left-radius:1.8em;padding:.8em 1em 2.2rem;width:30em}}.ui-book-link--giantbutton .ui-icon{margin-left:2rem;--icon-size:1.2rem;transition:none}.ui-book-link--giantbutton:not(:disabled).active,.ui-book-link--giantbutton:not(:disabled):focus,.ui-book-link--giantbutton:not(:disabled):hover{background-color:#1a9dd8;border:0;color:var(--color-font-alt)}.ui-book-link--bigbutton{align-items:center;background:var(--fg);border:0;border-radius:0;color:#231f20;display:flex;display:inline-flex;font-weight:500;gap:2rem;justify-content:flex-start;line-height:1;overflow:hidden;position:relative;text-transform:uppercase;transition:all .3s cubic-bezier(.785,.135,.15,.86)}@media screen and (max-width:1079px){.ui-book-link--bigbutton{font-size:18px}}@media screen and (min-width:1080px){.ui-book-link--bigbutton{font-size:15px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-book-link--bigbutton{font-size:calc(5.67358px + .86356vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-book-link--bigbutton{font-size:20px}}@media screen and (max-width:1079px){.ui-book-link--bigbutton{border-bottom-right-radius:2rem;border-top-left-radius:2rem;padding:1.5rem 2.2rem}}@media screen and (min-width:1080px){.ui-book-link--bigbutton{border-bottom-right-radius:1.4em;border-top-left-radius:1.4em;padding:1.5rem 2.2rem}}.ui-book-link--bigbutton span{position:relative;z-index:2}.ui-book-link--bigbutton .ui-icon{margin-left:2rem;--icon-size:1.2rem;position:relative;transition:none;z-index:2}.ui-book-link--bigbutton:not(:disabled).active,.ui-book-link--bigbutton:not(:disabled):focus,.ui-book-link--bigbutton:not(:disabled):hover{background-color:#1a9dd8;border:0;color:var(--color-font-alt)}.ui-book-link--bigbutton:before{background-image:linear-gradient(83.37deg,rgba(0,12,56,.3) 5.59%,rgba(0,12,56,0) 80%);content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:0}.ui-book-link__modal__title{color:var(--color-font-alt);text-align:center;text-transform:uppercase}@media screen and (max-width:1079px){.ui-book-link__modal__title{font-size:24px}}@media screen and (min-width:1080px){.ui-book-link__modal__title{font-size:25.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-book-link__modal__title{font-size:calc(9.64508px + 1.46805vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-book-link__modal__title{font-size:34px}}.ui-book-link__modal__btns{align-items:stretch;display:flex;gap:1rem;justify-content:flex-start}@media screen and (max-width:1079px){.ui-book-link__modal__btns{margin-top:2rem}}@media screen and (min-width:1080px){.ui-book-link__modal__btns{margin-top:3rem}}.ui-book-link__modal__btns .ui-button{flex:1 1 auto}',""]),o.locals={},t.exports=o},1434:function(t,e,n){"use strict";n.r(e);n(173),n(46),n(47),n(56),n(57),n(50),n(27),n(42);var o=n(8),r=n(33);function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(o.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var d={props:{link:{type:String,default:""},theme:{type:String,default:"default"},gtmData:{type:Object,default:function(){return{}}}},data:function(){return{modalOpen:!1}},computed:c(c({},Object(r.b)("common",["reservationOpen"])),{},{classes:function(){return["ui-book-link","ui-book-link--".concat(this.theme)]}}),methods:c(c({},Object(r.c)("common",["setIsCompanyFromButton"])),{},{clickCta:function(){this.$pushGtmEvent("click_cta",this.gtmData)},clickOpenModal:function(t){this.modalOpen=!0,this.$emit("click",t)},clickScroll:function(t,e){this.modalOpen=!1,this.$scrollTo(t),e&&this.setIsCompanyFromButton(!0),this.$emit("click",t)}})},m=(n(1432),n(22)),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"ui-book-link"},[t.reservationOpen?e("a",{class:t.classes,attrs:{target:"_blank",rel:"noreferrer",href:t.link||t.$t("link_booking")},on:{click:function(e){return t.clickCta()}}},[t._t("default")],2):e("a",{class:t.classes,attrs:{href:t.link||t.$t("link_booking")},on:{click:function(e){e.preventDefault(),t.clickScroll(t.link||t.$t("link_booking"),!1)}}},[t._t("default")],2),t._v(" "),t.modalOpen?e("UiModal",{attrs:{theme:"tiny"},model:{value:t.modalOpen,callback:function(e){t.modalOpen=e},expression:"modalOpen"}},[e("div",{staticClass:"ui-book-link__modal"},[e("h3",{staticClass:"ui-book-link__modal__title",domProps:{textContent:t._s(t.$t("book_title"))}}),t._v(" "),e("div",{staticClass:"ui-book-link__modal__btns"},[e("UiButton",{attrs:{theme:"book"},nativeOn:{click:function(e){return t.clickScroll("#booking",!0)}}},[t._v("\n          "+t._s(t.$t("book_company"))+"\n        ")]),t._v(" "),e("UiButton",{attrs:{theme:"book",link:{url:t.link||t.$t("link_booking")}},nativeOn:{click:function(e){t.modalOpen=!1}}},[t._v("\n          "+t._s(t.$t("book_private"))+"\n        ")])],1)])]):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiButton:n(245).default,UiModal:n(1431).default})},1436:function(t,e,n){"use strict";n(1428)},1437:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,".ui-icon-button{align-items:center;border:1.5px solid;border-radius:3.2rem;display:inline-flex;flex:0 0 3.2rem;height:3.2rem;justify-content:center;padding:0;transition-delay:0ms;transition-duration:.3s;transition-property:color,opacity,background-color;transition-timing-function:cubic-bezier(.455,.03,.515,.955);width:3.2rem;will-change:color,opacity,background-color}.ui-icon-button:disabled{cursor:not-allowed;opacity:.6}.ui-icon-button.no-border{border:none}.ui-icon-button:not(:disabled).active,.ui-icon-button:not(:disabled):focus,.ui-icon-button:not(:disabled):hover{color:var(--color-primary)}",""]),o.locals={},t.exports=o},1438:function(t,e,n){"use strict";n.r(e);var o={inheritAttrs:!1,props:{to:{type:[Object,String],default:""},external:{type:Boolean,default:!1},icon:{type:String,required:!0},label:{type:String,default:""},type:{type:String,default:"button"},size:{type:String,default:"xs"},disabled:{type:Boolean,default:!1},noBorder:{type:Boolean,default:!1}}},r=(n(1436),n(22)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return""===t.to?e("button",{staticClass:"ui-icon-button",class:{"no-border":t.noBorder},attrs:{type:t.type,disabled:t.disabled},on:{click:function(e){return t.$emit("click")}}},[e("UiIcon",{staticClass:"ui-icon-button__icon",attrs:{icon:t.icon,size:t.size}}),t._v(" "),e("span",{staticClass:"hidden"},[t._v(t._s(t.label))])],1):t.external?e("a",{staticClass:"ui-icon-button",class:{"no-border":t.noBorder},attrs:{href:t.to,target:"_blank",disabled:t.disabled},on:{click:function(e){return t.$emit("click")}}},[e("UiIcon",{staticClass:"ui-icon-button__icon",attrs:{icon:t.icon,size:t.size}}),t._v(" "),e("span",{staticClass:"hidden"},[t._v(t._s(t.label))])],1):e("NuxtLink",{staticClass:"ui-icon-button",class:{"no-border":t.noBorder},attrs:{disabled:t.disabled,to:t.to},nativeOn:{click:function(e){return t.$emit("click")}}},[e("UiIcon",{staticClass:"ui-icon-button__icon",attrs:{icon:t.icon,size:t.size}}),t._v(" "),e("span",{staticClass:"hidden"},[t._v(t._s(t.label))])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiIcon:n(243).default})},1439:function(t,e,n){var content=n(1452);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("1554958b",content,!0,{sourceMap:!1})},1440:function(t,e,n){var content=n(1454);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("19753e94",content,!0,{sourceMap:!1})},1451:function(t,e,n){"use strict";n(1439)},1452:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,'.swiper-nav{align-items:center;display:flex;gap:.5rem;justify-content:flex-start}.swiper-nav__button.ui-icon-button{align-items:center;border:1px solid var(--color-font);border-radius:4rem;display:flex;justify-content:center;padding:1rem;position:absolute}@media screen and (max-width:1079px){.swiper-nav__button.ui-icon-button{height:4rem;width:4rem}}@media screen and (min-width:1080px){.swiper-nav__button.ui-icon-button{height:4vw;width:4vw}}@media screen and (min-width:1799px){.swiper-nav__button.ui-icon-button{height:8rem;width:8rem}}.swiper-nav__button.ui-icon-button .ui-icon{flex:0 1 auto;--icon-size:2rem}.swiper-nav__button.ui-icon-button:hover{border-color:#1c1f3d;color:var(--color-font)}.swiper-nav__prev{left:0;top:40%}.swiper-nav__next{right:0;top:55%}.swiper-nav__scrollbar{background:rgba(35,31,32,.1);height:1px;left:50%;position:absolute;top:48%;transform:translate(-50%);width:calc(100% - 16rem)}@media screen and (min-width:1799px){.swiper-nav__scrollbar{width:calc(100% - 22rem)}}.swiper-nav__scrollbar .swiper-scrollbar-drag{background:none;cursor:pointer;height:2.1rem;top:-1rem}.swiper-nav__scrollbar .swiper-scrollbar-drag:before{background:var(--color-font);content:"";height:1px;left:0;position:absolute;top:50%;transform:translateY(-50%);width:100%}.swiper-nav--chefs{bottom:4rem;left:50%;position:absolute;transform:translate(-50%)}@media screen and (max-width:767px){.swiper-nav--chefs{width:80%}}@media screen and (min-width:768px){.swiper-nav--chefs{width:50%}}.swiper-nav--chefs .swiper-nav__next,.swiper-nav--chefs .swiper-nav__prev{top:50%;transform:translateY(-50%)}',""]),o.locals={},t.exports=o},1453:function(t,e,n){"use strict";n(1440)},1454:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,".swiper-slide{width:auto}",""]),o.locals={},t.exports=o},1477:function(t,e,n){"use strict";n.r(e);n(68),n(70),n(27),n(53),n(79);var o=n(1484),r=n.n(o),l=(n(1485),["beforeDestroy","slideChange","slideChangeTransitionStart","slideChangeTransitionEnd","slideNextTransitionStart","slideNextTransitionEnd","slidePrevTransitionStart","slidePrevTransitionEnd","transitionStart","transitionEnd","touchStart","touchMove","touchMoveOpposite","sliderMove","touchEnd","click","tap","doubleTap","imagesReady","progress","reachBeginning","reachEnd","fromEdge","setTranslate","setTransition","resize","observerUpdate","beforeLoopFix","loopFix"]),c={name:"Swiper",props:{options:{type:Object,default:function(){return{}}}},data:function(){return{swiper:null,swiperOptions:{},defaultOptions:{init:!1,threshold:30,observer:!1,keyboard:{enabled:!0,onlyInViewport:!1}}}},mounted:function(){var t=this;window.addEventListener("resize",(function(){t.swiper&&t.update()})),this.mountInstance()},updated:function(){this.update()},beforeDestroy:function(){},methods:{bindEvents:function(){var t=this,e=this;l.forEach((function(n){t.swiper.on(n,(function(){e.$emit.apply(e,[n].concat(Array.prototype.slice.call(arguments))),e.$emit.apply(e,[n.replace(/([A-Z])/g,"-$1").toLowerCase()].concat(Array.prototype.slice.call(arguments)))}))}))},mountInstance:function(){var t=this;this.swiperOptions=Object.assign({},this.defaultOptions,this.options),this.swiper=new r.a(this.$el,this.swiperOptions),this.bindEvents(),this.swiper.on("init",(function(){t.$emit("ready",t.swiper)})),this.swiper.init()},reset:function(){var t=this;this.swiper&&this.swiper.destroy(!1,!0),this.$nextTick((function(){t.mountInstance()}))},update:function(){var t=this;this.$nextTick((function(){t.swiper&&(t.swiper.update(),t.swiper.navigation.update(),t.swiper.pagination.render(),t.swiper.pagination.update())}))}}},d=c,m=n(22),component=Object(m.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"swiper swiper-container"},[e("div",{staticClass:"swiper-wrapper"},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("buttonPrev"),t._v(" "),t._t("buttonNext"),t._v(" "),t._t("scrollbar")],2)}),[],!1,null,null,null);e.default=component.exports},1478:function(t,e,n){"use strict";n.r(e);var o={props:{classname:{type:String,required:!0},showScrollbar:{type:Boolean,default:!1},theme:{type:String,default:""}},computed:{}},r=(n(1451),n(22)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"swiper-nav",class:[t.classname,""+t.theme?"swiper-nav--".concat(t.theme):""]},[e("UiIconButton",{staticClass:"swiper-nav__button swiper-nav__prev",class:"".concat(t.classname,"__prev"),attrs:{icon:"chevron-left",size:"button",label:"précédent"}}),t._v(" "),t.showScrollbar?e("div",{staticClass:"swiper-scrollbar swiper-nav__scrollbar",class:"".concat(t.classname,"__scrollbar"),attrs:{slot:"scrollbar"},slot:"scrollbar"}):t._e(),t._v(" "),e("UiIconButton",{staticClass:"swiper-nav__button swiper-nav__next",class:"".concat(t.classname,"__next"),attrs:{icon:"chevron-right",size:"button",label:"suivant"}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiIconButton:n(1438).default})},1479:function(t,e,n){"use strict";n.r(e);var o={name:"SwiperSlide",data:function(){return{slideClass:"swiper-slide"}},created:function(){this.update()},mounted:function(){this.update(),this.$parent&&this.$parent.options&&this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.update()}}},r=(n(1453),n(22)),component=Object(r.a)(o,(function(){var t=this;return(0,t._self._c)("div",{staticClass:"swiper-slide",class:t.slideClass},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},1538:function(t,e,n){var content=n(1644);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("4c217d40",content,!0,{sourceMap:!1})},1643:function(t,e,n){"use strict";n(1538)},1644:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,'.block-cocktails{position:relative}@media screen and (min-width:1080px){.block-cocktails{margin-top:-5rem}}.block-cocktails:before{background-image:url(/img/cloud02.png);background-position:0;background-repeat:no-repeat;background-size:contain;bottom:0;content:"";left:0;position:absolute;right:0;top:0}@media screen and (max-width:1079px){.block-cocktails__narrow{align-items:stretch;display:flex;flex-direction:column;gap:4rem;justify-content:flex-start;padding:5rem var(--gutter)}}@media screen and (min-width:1080px){.block-cocktails__narrow{align-items:center;display:flex;gap:12rem;justify-content:center;padding-bottom:5rem;padding-top:0}}.block-cocktails__tagline{color:var(--color-primary);margin-bottom:2rem}.block-cocktails__controls{align-items:center;display:flex;gap:2.5rem;justify-content:flex-start;padding-top:4rem}@media screen and (max-width:767px){.block-cocktails__controls{align-items:flex-start;display:flex;flex-direction:column;justify-content:flex-start}}@media screen and (max-width:1079px){.block-cocktails__texts{order:0;width:100%}}@media screen and (min-width:1080px){.block-cocktails__texts{width:47.9166666667%}}.block-cocktails__images{position:relative}@media screen and (max-width:1079px){.block-cocktails__images{padding:0 4rem;width:100%}}@media screen and (min-width:1080px){.block-cocktails__images{margin-bottom:15rem;margin-top:5rem;padding:0 8rem;width:52.0833333333%}}.block-cocktails__images .swiper-wrapper{transition-timing-function:cubic-bezier(.785,.135,.15,.86)}@media screen and (min-width:1080px){.block-cocktails.image-left .block-cocktails__texts{order:1}}.block-cocktails__item,.block-cocktails__item__image{align-items:center;display:flex;justify-content:center}.block-cocktails__item__image{flex:1 1 auto;max-width:25rem;width:40%}.block-cocktails__item__image .ui-image__container{background:none;margin:0 -3rem;transform:rotate(-5deg);transition:transform .5s cubic-bezier(.785,.135,.15,.86);width:calc(100% + 6rem)}.swiper-slide-active .block-cocktails__item__image .ui-image__container{transform:rotate(5deg)}.block-cocktails__item__text{flex:0 1 auto}.block-cocktails__item__index{margin-bottom:1rem}@media screen and (max-width:1079px){.block-cocktails__item__index{font-size:11px}}@media screen and (min-width:1080px){.block-cocktails__item__index{font-size:8.25px}}@media only screen and (min-width:1080px)and (min-width:1080px){.block-cocktails__item__index{font-size:calc(3.12047px + .47496vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.block-cocktails__item__index{font-size:11px}}.block-cocktails__item__name{flex:1 1 auto;font-weight:300;line-height:1.1}@media screen and (max-width:1079px){.block-cocktails__item__name{font-size:18px}}@media screen and (min-width:1080px){.block-cocktails__item__name{font-size:13.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.block-cocktails__item__name{font-size:calc(5.10622px + .7772vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.block-cocktails__item__name{font-size:18px}}.block-cocktails__item__name strong{display:inline-block;font-weight:500;letter-spacing:-.05em;line-height:.9;margin-bottom:.3rem;text-transform:uppercase}@media screen and (max-width:1079px){.block-cocktails__item__name strong{font-size:30px}}@media screen and (min-width:1080px){.block-cocktails__item__name strong{font-size:37.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.block-cocktails__item__name strong{font-size:calc(14.18394px + 2.15889vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.block-cocktails__item__name strong{font-size:50px}}',""]),o.locals={},t.exports=o},1718:function(t,e,n){"use strict";n.r(e);n(59);var o={props:{content:{type:Object,required:!0}},data:function(){return{index:null,options:{spaceBetween:20,slidesPerView:1,autoplay:!0,speed:800,watchOverflow:!0,navigation:{nextEl:".block-cocktails-".concat(this._uid,"__next"),prevEl:".block-cocktails-".concat(this._uid,"__prev")}}}},computed:{hasLink:function(){return this.content.book&&this.content.book.text}}},r=(n(1643),n(22)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("UiSection",{attrs:{id:t.content.id}},[e("UiContainer",{class:{"image-left":t.content.image_left},attrs:{classname:"block-cocktails"}},[e("UiNarrow",{staticClass:"block-cocktails__narrow",attrs:{left:"1",right:"1"}},[e("div",{staticClass:"block-cocktails__texts"},[t.content.tagline?e("UiTagline",{staticClass:"block-cocktails__tagline",attrs:{text:t.content.tagline}}):t._e(),t._v(" "),t.content.title?e("UiTitle",{staticClass:"block-cocktails__title",attrs:{title:t.content.title,size:"xl"}}):t._e(),t._v(" "),t.content.text?e("UiText",{attrs:{text:t.content.text}}):t._e(),t._v(" "),t.hasLink?e("div",{staticClass:"block-cocktails__controls"},[e("UiBookLink",{attrs:{theme:"underline",link:t.$t("link_booking")+t.content.book.url,"gtm-data":{action:"",position:"cocktail"}}},[t._v("\n            "+t._s(t.content.book.text)+"\n            "),e("UiIcon",{attrs:{icon:"arrow-square",size:"xs"}})],1)],1):t._e()],1),t._v(" "),e("div",{staticClass:"block-cocktails__images"},[e("Swiper",{staticClass:"block-cocktails__swiper",attrs:{options:t.options}},t._l(t.content.list,(function(n,o){return e("SwiperSlide",{key:o,staticClass:"block-cocktails__slide"},[e("div",{staticClass:"block-cocktails__item"},[e("div",{staticClass:"block-cocktails__item__image"},[e("UiImage",{attrs:{src:n.image,alt:n.alt,"auto-size":""}})],1),t._v(" "),e("div",{staticClass:"block-cocktails__item__text"},[e("div",{staticClass:"block-cocktails__item__index",domProps:{innerHTML:t._s("0".concat(o+1))}}),t._v(" "),e("div",{staticClass:"block-cocktails__item__name",domProps:{innerHTML:t._s(n.name)}})])])])})),1),t._v(" "),e("SwiperNavigation",{attrs:{classname:"block-cocktails-".concat(t._uid)}})],1)])],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiTagline:n(1416).default,UiTitle:n(244).default,UiText:n(485).default,UiIcon:n(243).default,UiBookLink:n(1434).default,UiImage:n(1413).default,SwiperSlide:n(1479).default,Swiper:n(1477).default,SwiperNavigation:n(1478).default,UiNarrow:n(484).default,UiContainer:n(320).default,UiSection:n(1422).default})}}]);