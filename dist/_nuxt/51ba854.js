(window.webpackJsonp=window.webpackJsonp||[]).push([[17,64,70,71,76,77],{1407:function(e,t,o){var content=o(1412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(45).default)("755b5ddc",content,!0,{sourceMap:!1})},1410:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBjbGFzcz0idWktc3Bpbm5lciIgd2lkdGg9IjM0cHgiIGhlaWdodD0iNnB4IiB2aWV3Qm94PSIwIC0yMDAgMTAwIDcwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgogIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzIxQUNERCIgc3Ryb2tlLXdpZHRoPSIxMCIgcj0iMzUiCiAgICBzdHJva2UtZGFzaGFycmF5PSIxNjQuOTMzNjE0MzEzNDY0MTUgNTYuOTc3ODcxNDM3ODIxMzgiPgogICAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJyb3RhdGUiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIiBkdXI9IjFzIgogICAgICB2YWx1ZXM9IjAgNTAgNTA7MzYwIDUwIDUwIiBrZXlUaW1lcz0iMDsxIj48L2FuaW1hdGVUcmFuc2Zvcm0+CiAgPC9jaXJjbGU+Cjwvc3ZnPg=="},1411:function(e,t,o){"use strict";o(1407)},1412:function(e,t,o){var n=o(44)((function(i){return i[1]}));n.push([e.i,'.ui-image{height:100%;overflow:hidden;transition-delay:0ms;transition-duration:.1s;transition-property:opacity;transition-timing-function:cubic-bezier(.455,.03,.515,.955);width:100%;will-change:opacity}@media screen and (min-width:1080px){.ui-image.has-hover:not(:disabled).active .ui-image__container,.ui-image.has-hover:not(:disabled):focus .ui-image__container,.ui-image.has-hover:not(:disabled):hover .ui-image__container{transform:scale(.9)}.ui-image.has-hover:not(:disabled).active img,.ui-image.has-hover:not(:disabled):focus img,.ui-image.has-hover:not(:disabled):hover img{transform:scale(1.25)}}.ui-image.has-gradient .ui-image__container{position:relative}.ui-image.has-gradient .ui-image__container:after{background-image:linear-gradient(180deg,rgba(12,17,51,0),rgba(12,17,51,.75));bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:1}.ui-image img{height:100%;-o-object-fit:cover;object-fit:cover;transition:opacity .7s ease-in;width:100%}.ui-image img[lazy=error],.ui-image img[lazy=loading]{-o-object-fit:none;object-fit:none;opacity:0}.ui-image.has-datascroll .ui-image__container{height:110%;transition:none}.ui-image__container{background-color:rgba(26,157,216,.1);height:100%;overflow:hidden;position:relative;transform-origin:center;transition-delay:0ms;transition-duration:.3s;transition-property:transform;transition-timing-function:cubic-bezier(.455,.03,.515,.955);width:100%;will-change:transform}.no-background .ui-image__container{background:none}.ui-image.auto-size,.ui-image.auto-size .ui-image__container,.ui-image.auto-size img{height:auto;width:auto}',""]),n.locals={},e.exports=n},1413:function(e,t,o){"use strict";o.r(t);o(46),o(47),o(56),o(57),o(50),o(27),o(42);var n=o(8),r=(o(68),o(172),o(33)),l=o(75),d=o(321),m=o.n(d),c=o(1410),h=o.n(c);function _(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function f(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?_(Object(o),!0).forEach((function(t){Object(n.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):_(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var x={name:"UiImage",props:{src:{type:String,required:!0},alt:{type:String,required:!1,default:null},hasHover:{type:Boolean,default:!1},hasGradient:{type:Boolean,default:!1},noBackground:{type:Boolean,default:!1},autoSize:{type:Boolean,default:!1},lazy:{type:Boolean,default:!0},dataScroll:{type:[Boolean,String],default:!1},dataScrollSpeed:{type:[String,Number],default:0}},data:function(){return{loading:h.a,error:m.a}},computed:f(f({},Object(r.d)("screens",["scrollY"])),{},{vlazy:function(){return{selector:"img",error:this.error,loading:this.loading}},customClasses:function(){return["ui-image",{"has-hover":this.hasHover,"has-gradient":this.hasGradient,"no-background":this.noBackground,"auto-size":this.autoSize,"has-datascroll":this.dataScroll}]},translateYImage:function(){return this.dataScroll?((this.$el?Object(l.getPosition)(this.$el).top+Object(l.getRect)(this.$el).height/2:0)-this.scrollY)*this.dataScrollSpeed/200:0},imageHeight:function(){return 100-100*this.dataScrollSpeed/10},styleImage:function(){return this.dataScroll?"transform: translateY(".concat(this.translateYImage,"%);height:").concat(this.imageHeight,"%;"):null}})},w=(o(1411),o(22)),component=Object(w.a)(x,(function(){var e=this,t=e._self._c;return t("div",{class:e.customClasses},[e.lazy?t("div",{directives:[{name:"lazy-container",rawName:"v-lazy-container",value:e.vlazy,expression:"vlazy"}],staticClass:"ui-image__container",style:e.styleImage},[t("img",{attrs:{"data-src":e.src,alt:e.alt},on:{load:function(t){return e.$emit("load")}}})]):t("div",{staticClass:"ui-image__container",style:e.styleImage},[t("img",{attrs:{src:e.src,alt:e.alt}})])])}),[],!1,null,null,null);t.default=component.exports},1418:function(e,t,o){"use strict";o.r(t);var n={props:{tag:{type:String,default:"div"},once:{type:Boolean,default:!0}},data:function(){return{options:{rootMargin:"-40% -40%"},observer:null}},mounted:function(){var e=this;this.observer=new IntersectionObserver((function(t){e.handleIntersect(t[0])}),this.options),this.observer.observe(this.$el)},unmounted:function(){this.observer.disconnect()},methods:{handleIntersect:function(e){e.isIntersecting?(this.$emit("reveal"),this.once&&this.observer.disconnect()):this.$emit("out")}}},r=o(22),component=Object(r.a)(n,(function(){var e=this;return(0,e._self._c)(e.tag,{tag:"component"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},1422:function(e,t,o){"use strict";o.r(t);o(46),o(47),o(56),o(57),o(50),o(27),o(42);var n=o(8),r=o(33);function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){Object(n.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var m={props:{id:{type:String,default:""}},methods:d(d({},Object(r.c)("application",["setCurrentSection"])),{},{updateHash:function(){this.setUrlParamsHashtag(this.id),this.setCurrentSection(this.id)},setUrlParamsHashtag:function(e){null!==e&&window.history.pushState(null,null,"#".concat(e))}})},c=o(22),component=Object(c.a)(m,(function(){var e=this;return(0,e._self._c)("UiIntersect",{attrs:{id:e.id,once:!1},on:{reveal:e.updateHash}},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiIntersect:o(1418).default})},1426:function(e,t,o){var content=o(1430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(45).default)("40fdcf12",content,!0,{sourceMap:!1})},1427:function(e,t,o){var content=o(1433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(45).default)("2e4fc237",content,!0,{sourceMap:!1})},1429:function(e,t,o){"use strict";o(1426)},1430:function(e,t,o){var n=o(44)((function(i){return i[1]}));n.push([e.i,".ui-modal{bottom:0;left:0;position:fixed;right:0;top:0;z-index:999}.ui-modal__wrapper{background-color:var(--bg);left:3rem;margin:0 auto;max-width:124rem;position:absolute;right:3rem;top:50%;transform:translateY(-50%)}@media screen and (max-width:1079px){.ui-modal__wrapper{left:1.5rem;right:1.5rem}}@media screen and (min-width:1080px){.ui-modal__wrapper{left:3rem;right:3rem}}.ui-modal__wrapper.full{max-height:90vh;overflow:auto}@media screen and (max-width:1079px){.ui-modal__inner{padding:6rem 1rem 2rem}}@media screen and (min-width:1080px){.ui-modal__inner{padding:10rem 8.3333333333%}}.ui-modal__content{max-height:calc(100vh - 26rem);overflow-y:auto}.ui-modal__overlay{background-color:var(--bg);bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0;z-index:0}.ui-modal__close{align-items:center;display:flex;font-weight:500;position:absolute;text-transform:uppercase;z-index:1}@media screen and (max-width:1079px){.ui-modal__close{font-size:13px}}@media screen and (min-width:1080px){.ui-modal__close{font-size:9.75px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-modal__close{font-size:calc(3.68782px + .56131vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-modal__close{font-size:13px}}@media screen and (max-width:1079px){.ui-modal__close{right:1rem;top:1rem}}@media screen and (min-width:1080px){.ui-modal__close{right:3rem;top:3rem}}.ui-modal__close__icon{margin-left:1.5rem;transition:transform .3s cubic-bezier(1,0,0,1)}.ui-modal__close:hover .ui-modal__close__icon{transform:rotate(180deg)}.ui-modal__title{margin-bottom:4.5rem}.ui-modal--tiny{color:var(--color-font-alt)}.ui-modal--tiny .ui-modal__close{color:transparent;right:2rem;top:2rem}.ui-modal--tiny .ui-modal__close .ui-icon{color:var(--color-font-alt)}.ui-modal--tiny .ui-modal__overlay{background:#fff;opacity:.8}.ui-modal--tiny .ui-modal__wrapper{background:none;max-width:43rem}.ui-modal--tiny .ui-modal__inner{background-color:var(--color-primary);border-radius:2rem}@media screen and (max-width:1079px){.ui-modal--tiny .ui-modal__inner{box-shadow:0 12px 48px -7px rgba(31,34,79,.2);padding:5rem 2rem 2rem}}@media screen and (min-width:1080px){.ui-modal--tiny .ui-modal__inner{box-shadow:0 42px 48px -37px rgba(31,34,79,.2);padding:4rem}}.ui-modal--nopadding .ui-modal__inner{padding:0}.ui-modal--fullsize{padding:0;width:100vw}.ui-modal--fullsize .ui-modal__overlay{background:rgba(28,31,61,.5)}.ui-modal--fullsize .ui-modal__wrapper{background:none;max-width:250rem}.ui-modal--fullsize .ui-modal__inner{background:#1c1f3d;max-width:100%;width:100%}@media screen and (max-width:1079px){.ui-modal--fullsize .ui-modal__inner{padding:3rem}}@media screen and (min-width:1080px){.ui-modal--fullsize .ui-modal__inner{padding:5rem}}.ui-modal--fullsize .ui-modal__content{align-items:stretch;background:none;border-radius:0;display:flex;justify-content:flex-start;min-height:calc(100vh - 15rem)}.ui-modal--fullsize .ui-modal__content .pdf-viewer{align-items:stretch;display:flex;flex:1 1 auto;justify-content:flex-start;width:100%}.ui-modal--fullsize .ui-modal__content .pdf-viewer embed{flex:1 1 auto;width:100%}@media screen and (max-width:1079px){.ui-modal--fullsize .ui-modal__close{right:.7rem;top:.7rem}}@media screen and (min-width:1080px){.ui-modal--fullsize .ui-modal__close{right:1.5rem;top:1.5rem}}",""]),n.locals={},e.exports=n},1431:function(e,t,o){"use strict";o.r(t);var n={props:{value:{type:Boolean,default:!1},title:{type:String,default:""},theme:{type:String,default:"default"},full:{type:Boolean,default:!1}},computed:{customClasses:function(){return["ui-modal","ui-modal--".concat(this.theme)]}}},r=(o(1429),o(22)),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("portal",{attrs:{to:"root"}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],class:e.customClasses},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"ui-modal__overlay",on:{click:function(t){return e.$emit("input",!1)}}}),e._v(" "),t("div",{staticClass:"ui-modal__wrapper",class:{full:e.full}},[t("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"ui-modal__inner"},[t("div",{staticClass:"ui-modal__content"},[e.title?t("UiHeading",{staticClass:"ui-modal__title",attrs:{theme:"main-subtitle",tag:"h4",title:e.title}}):e._e(),e._v(" "),e._t("default")],2)]),e._v(" "),t("button",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"ui-modal__close",on:{click:function(t){return e.$emit("input",!1)}}},[e._v("\n        "+e._s(e.$t("close"))+"\n        "),t("UiIcon",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"ui-modal__close__icon",attrs:{icon:"close",size:"md"}})],1)])])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiIcon:o(243).default})},1432:function(e,t,o){"use strict";o(1427)},1433:function(e,t,o){var n=o(44)((function(i){return i[1]}));n.push([e.i,'.ui-book-link{color:var(--color-font);display:inline-block;font-weight:500;transition:color .4s cubic-bezier(.455,.03,.515,.955)}@media screen and (max-width:1079px){.ui-book-link{font-size:11px}}@media screen and (min-width:1080px){.ui-book-link{font-size:9.75px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-book-link{font-size:calc(3.68782px + .56131vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-book-link{font-size:13px}}.ui-book-link:hover{--color:var(--color-primary)}.ui-book-link--underline{font-weight:400;letter-spacing:.1em;line-height:1;padding:1rem 0;position:relative;text-transform:uppercase}@media screen and (max-width:1079px){.ui-book-link--underline{font-size:18px}}@media screen and (min-width:1080px){.ui-book-link--underline{font-size:13.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-book-link--underline{font-size:calc(5.10622px + .7772vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-book-link--underline{font-size:18px}}.ui-book-link--underline:after{background-color:var(--color-font);bottom:.4rem;content:"";display:block;height:1px;left:0;position:absolute;transform:scaleX(0);transform-origin:left center;transition:transform .5s cubic-bezier(.785,.135,.15,.86);width:100%}.ui-book-link--underline.is-active:after,.ui-book-link--underline.nuxt-link-exact-active:after,.ui-book-link--underline:active:after,.ui-book-link--underline:focus:after,.ui-book-link--underline:hover:after{transform:scaleX(1)}.ui-book-link--underline:after{background:linear-gradient(90deg,currentColor 33.3%,transparent 0,transparent 66.6%,currentColor 0);background-position:100% 0;background-size:300%;transform:scaleX(1);transition:all .8s cubic-bezier(.785,.135,.15,.86)}.ui-book-link--underline .ui-icon{--icon-size:1.1rem;margin-left:4.5rem;transition:all .6s cubic-bezier(.785,.135,.15,.86)}.ui-book-link--underline:not(:disabled).active:after,.ui-book-link--underline:not(:disabled):focus:after,.ui-book-link--underline:not(:disabled):hover:after{background-position:0 0}.ui-book-link--underline:not(:disabled).active .ui-icon,.ui-book-link--underline:not(:disabled):focus .ui-icon,.ui-book-link--underline:not(:disabled):hover .ui-icon{transform:rotate(45deg)}.ui-book-link--header-subscribe{align-items:center;background:var(--fg);border:0;border-radius:0;color:var(--color-font);display:flex;display:inline-flex;font-weight:500;justify-content:flex-start;text-transform:uppercase;transition:all .3s cubic-bezier(.785,.135,.15,.86)}@media screen and (max-width:1079px){.ui-book-link--header-subscribe{font-size:16px}}@media screen and (min-width:1080px){.ui-book-link--header-subscribe{font-size:13.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-book-link--header-subscribe{font-size:calc(5.10622px + .7772vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-book-link--header-subscribe{font-size:18px}}@media screen and (max-width:1079px){.ui-book-link--header-subscribe{border-bottom-left-radius:3rem;height:5rem;padding:1.3rem 2.5rem 1.3rem 3rem}}@media screen and (min-width:1080px){.ui-book-link--header-subscribe{border-bottom-left-radius:2.8em;height:4.5em;padding:.8em 3em .8em 3.5em}}.ui-book-link--header-subscribe .ui-icon{margin-left:2rem;--icon-size:1.2rem;transition:none}.ui-book-link--header-subscribe:not(:disabled).active,.ui-book-link--header-subscribe:not(:disabled):focus,.ui-book-link--header-subscribe:not(:disabled):hover{background-color:#1a9dd8;border:0;color:var(--color-font-alt)}.ui-book-link--giantbutton{align-items:center;background:var(--fg);border:0;border-radius:0;color:var(--color-font);display:flex;display:inline-flex;flex-direction:column;font-weight:500;justify-content:flex-start;margin-top:2rem;transition:all .3s cubic-bezier(.785,.135,.15,.86)}@media screen and (max-width:1079px){.ui-book-link--giantbutton{font-size:16px}}@media screen and (min-width:1080px){.ui-book-link--giantbutton{font-size:13.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-book-link--giantbutton{font-size:calc(5.10622px + .7772vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-book-link--giantbutton{font-size:18px}}@media screen and (max-width:1079px){.ui-book-link--giantbutton{border-bottom-right-radius:2rem;border-top-left-radius:2rem;padding:1.3rem 2.5rem 1.3rem 3rem}}@media screen and (min-width:1080px){.ui-book-link--giantbutton{border-bottom-right-radius:1.8em;border-top-left-radius:1.8em;padding:.8em 1em 2.2rem;width:30em}}.ui-book-link--giantbutton .ui-icon{margin-left:2rem;--icon-size:1.2rem;transition:none}.ui-book-link--giantbutton:not(:disabled).active,.ui-book-link--giantbutton:not(:disabled):focus,.ui-book-link--giantbutton:not(:disabled):hover{background-color:#1a9dd8;border:0;color:var(--color-font-alt)}.ui-book-link--bigbutton{align-items:center;background:var(--fg);border:0;border-radius:0;color:#231f20;display:flex;display:inline-flex;font-weight:500;gap:2rem;justify-content:flex-start;line-height:1;overflow:hidden;position:relative;text-transform:uppercase;transition:all .3s cubic-bezier(.785,.135,.15,.86)}@media screen and (max-width:1079px){.ui-book-link--bigbutton{font-size:18px}}@media screen and (min-width:1080px){.ui-book-link--bigbutton{font-size:15px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-book-link--bigbutton{font-size:calc(5.67358px + .86356vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-book-link--bigbutton{font-size:20px}}@media screen and (max-width:1079px){.ui-book-link--bigbutton{border-bottom-right-radius:2rem;border-top-left-radius:2rem;padding:1.5rem 2.2rem}}@media screen and (min-width:1080px){.ui-book-link--bigbutton{border-bottom-right-radius:1.4em;border-top-left-radius:1.4em;padding:1.5rem 2.2rem}}.ui-book-link--bigbutton span{position:relative;z-index:2}.ui-book-link--bigbutton .ui-icon{margin-left:2rem;--icon-size:1.2rem;position:relative;transition:none;z-index:2}.ui-book-link--bigbutton:not(:disabled).active,.ui-book-link--bigbutton:not(:disabled):focus,.ui-book-link--bigbutton:not(:disabled):hover{background-color:#1a9dd8;border:0;color:var(--color-font-alt)}.ui-book-link--bigbutton:before{background-image:linear-gradient(83.37deg,rgba(0,12,56,.3) 5.59%,rgba(0,12,56,0) 80%);content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:0}.ui-book-link__modal__title{color:var(--color-font-alt);text-align:center;text-transform:uppercase}@media screen and (max-width:1079px){.ui-book-link__modal__title{font-size:24px}}@media screen and (min-width:1080px){.ui-book-link__modal__title{font-size:25.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-book-link__modal__title{font-size:calc(9.64508px + 1.46805vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-book-link__modal__title{font-size:34px}}.ui-book-link__modal__btns{align-items:stretch;display:flex;gap:1rem;justify-content:flex-start}@media screen and (max-width:1079px){.ui-book-link__modal__btns{margin-top:2rem}}@media screen and (min-width:1080px){.ui-book-link__modal__btns{margin-top:3rem}}.ui-book-link__modal__btns .ui-button{flex:1 1 auto}',""]),n.locals={},e.exports=n},1434:function(e,t,o){"use strict";o.r(t);o(173),o(46),o(47),o(56),o(57),o(50),o(27),o(42);var n=o(8),r=o(33);function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){Object(n.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var m={props:{link:{type:String,default:""},theme:{type:String,default:"default"},gtmData:{type:Object,default:function(){return{}}}},data:function(){return{modalOpen:!1}},computed:d(d({},Object(r.b)("common",["reservationOpen"])),{},{classes:function(){return["ui-book-link","ui-book-link--".concat(this.theme)]}}),methods:d(d({},Object(r.c)("common",["setIsCompanyFromButton"])),{},{clickCta:function(){this.$pushGtmEvent("click_cta",this.gtmData)},clickOpenModal:function(e){this.modalOpen=!0,this.$emit("click",e)},clickScroll:function(e,t){this.modalOpen=!1,this.$scrollTo(e),t&&this.setIsCompanyFromButton(!0),this.$emit("click",e)}})},c=(o(1432),o(22)),component=Object(c.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"ui-book-link"},[e.reservationOpen?t("a",{class:e.classes,attrs:{target:"_blank",rel:"noreferrer",href:e.link||e.$t("link_booking")},on:{click:function(t){return e.clickCta()}}},[e._t("default")],2):t("a",{class:e.classes,attrs:{href:e.link||e.$t("link_booking")},on:{click:function(t){t.preventDefault(),e.clickScroll(e.link||e.$t("link_booking"),!1)}}},[e._t("default")],2),e._v(" "),e.modalOpen?t("UiModal",{attrs:{theme:"tiny"},model:{value:e.modalOpen,callback:function(t){e.modalOpen=t},expression:"modalOpen"}},[t("div",{staticClass:"ui-book-link__modal"},[t("h3",{staticClass:"ui-book-link__modal__title",domProps:{textContent:e._s(e.$t("book_title"))}}),e._v(" "),t("div",{staticClass:"ui-book-link__modal__btns"},[t("UiButton",{attrs:{theme:"book"},nativeOn:{click:function(t){return e.clickScroll("#booking",!0)}}},[e._v("\n          "+e._s(e.$t("book_company"))+"\n        ")]),e._v(" "),t("UiButton",{attrs:{theme:"book",link:{url:e.link||e.$t("link_booking")}},nativeOn:{click:function(t){e.modalOpen=!1}}},[e._v("\n          "+e._s(e.$t("book_private"))+"\n        ")])],1)])]):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiButton:o(245).default,UiModal:o(1431).default})},1545:function(e,t,o){var content=o(1658);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(45).default)("04190488",content,!0,{sourceMap:!1})},1657:function(e,t,o){"use strict";o(1545)},1658:function(e,t,o){var n=o(44)((function(i){return i[1]}));n.push([e.i,'.home-hero-split{--color:var(--color-font-alt);--color-font:var(--color-font-alt)}@media screen and (min-width:1080px){.home-hero-split__section{background-image:url(/img/background/snow.png);background-position:100%;background-repeat:no-repeat;background-size:auto 100%}}.home-hero-split__inner{position:relative}@media screen and (max-width:1079px){.home-hero-split__inner{align-items:stretch;display:flex;justify-content:flex-start}}@media screen and (min-width:1080px){.home-hero-split__inner{align-items:stretch;display:flex;justify-content:flex-start;min-height:70rem}}.home-hero-split__content{color:var(--color-font)}@media screen and (min-width:1080px){.home-hero-split__content{width:100%}}.home-hero-split__fixed{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;left:0;pointer-events:none;position:absolute;text-align:center;transition:all .6s cubic-bezier(.77,0,.175,1);width:100%;z-index:1}@media screen and (max-width:1079px){.home-hero-split__fixed{top:2rem}}@media screen and (min-width:1080px){.home-hero-split__fixed{top:4rem}}.home-hero-split__fixed .ui-image.auto-size{flex:0 1 auto;margin-bottom:1rem;width:20rem}.home-hero-split__fixed.only-mobile{--color-font:#231f20}@media screen and (min-width:1080px){.home-hero-split__fixed.only-mobile{display:none}}.home-hero-split__macaron{left:calc(var(--gutter) + 8.33333% - 1rem);top:4rem;z-index:10}@media screen and (max-width:1079px){.home-hero-split__macaron{font-size:20px}}@media screen and (min-width:1080px){.home-hero-split__macaron{font-size:18.75px}}@media only screen and (min-width:1080px)and (min-width:1080px){.home-hero-split__macaron{font-size:calc(7.09197px + 1.07945vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.home-hero-split__macaron{font-size:25px}}.home-hero-split__countdown{line-height:1em;position:absolute;right:3rem;text-align:center;text-transform:uppercase;top:3rem;--color-font:#231f20;color:#231f20;color:var(--color-font);z-index:10}@media screen and (max-width:1079px){.home-hero-split__countdown{font-size:17px}}@media screen and (min-width:1080px){.home-hero-split__countdown{font-size:15.75px}}@media only screen and (min-width:1080px)and (min-width:1080px){.home-hero-split__countdown{font-size:calc(5.95725px + .90674vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.home-hero-split__countdown{font-size:21px}}.home-hero-split__countdown strong{font-size:3em;font-weight:700;line-height:.9em}.home-hero-split__countdown em{font-size:1.5em;line-height:.9em}@media screen and (min-width:1080px){.home-hero-split__tagline{margin-bottom:1rem}}.home-hero-split__logo.ui-image.auto-size{display:block;position:relative}.home-hero-split__logo.ui-image.auto-size:before{content:"";display:block;padding-top:21.130952381%;width:100%}.home-hero-split__logo.ui-image.auto-size>a,.home-hero-split__logo.ui-image.auto-size>div{height:100%;left:0;position:absolute;top:0;width:100%}@media screen and (max-width:1079px){.home-hero-split__logo.ui-image.auto-size{max-width:40rem;width:50%}}@media screen and (min-width:1080px){.home-hero-split__logo.ui-image.auto-size{max-width:45rem;width:35%}}.home-hero-split__logo.ui-image.auto-size img{-o-object-fit:contain;object-fit:contain}.home-hero-split__items{align-items:stretch;display:flex;gap:0;justify-content:flex-start;width:100%}@media screen and (max-width:1079px){.home-hero-split__items{flex-direction:column}}@media screen and (min-width:1080px){.home-hero-split__items{padding:0 5rem}.home-hero-split__items:hover .home-hero-split__item:not(:hover) .home-hero-split__fixed{opacity:0}}.home-hero-split__items__or{color:#231f20;font-weight:700;text-transform:uppercase}@media screen and (max-width:1079px){.home-hero-split__items__or{font-size:20px}}@media screen and (min-width:1080px){.home-hero-split__items__or{font-size:15px}}@media only screen and (min-width:1080px)and (min-width:1080px){.home-hero-split__items__or{font-size:calc(5.67358px + .86356vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.home-hero-split__items__or{font-size:20px}}@media screen and (max-width:1079px){.home-hero-split__items__or{margin:1rem 0 0;order:1;text-align:center}}@media screen and (min-width:1080px){.home-hero-split__items__or{bottom:17rem;left:50%;position:absolute;transform:translateX(-50%)}}.home-hero-split__item{align-items:center;display:flex;flex:0 1 auto;flex-direction:column;justify-content:flex-start;position:relative;text-align:center;transition:all 1.5s cubic-bezier(.77,0,.175,1);--color-font:#231f20}@media screen and (max-width:1079px){.home-hero-split__item{padding:5rem 3rem 3rem;width:100%}.home-hero-split__item.home-split-item-0{order:0}.home-hero-split__item.home-split-item-1{order:2}}@media screen and (min-width:1080px){.home-hero-split__item{height:100%;padding:8rem 5rem 0;width:50%}}@media screen and (max-width:1079px){.home-hero-split__item .home-hero-split__fixed{display:none}}.home-hero-split__item__bg{height:100%;left:0;position:absolute;top:0;width:100%;z-index:0}.home-hero-split__item__bg:before{background-image:linear-gradient(83.37deg,rgba(0,12,56,.59) 5.59%,rgba(0,12,56,0) 62.25%);bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:1}.home-hero-split__item__image{display:block;position:relative}@media screen and (max-width:1079px){.home-hero-split__item__image{width:100%}}.home-hero-split__item__image .home-hero-split__item__button{bottom:0;left:50%;position:absolute;transform:translateX(-50%);z-index:2;--color-font:#fff}@media screen and (max-width:1079px){.home-hero-split__item__image .home-hero-split__item__button.ui-link--main-menu{font-size:16px}}@media screen and (min-width:1080px){.home-hero-split__item__image .home-hero-split__item__button.ui-link--main-menu{font-size:12px}}@media only screen and (min-width:1080px)and (min-width:1080px){.home-hero-split__item__image .home-hero-split__item__button.ui-link--main-menu{font-size:calc(4.53886px + .69085vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.home-hero-split__item__image .home-hero-split__item__button.ui-link--main-menu{font-size:16px}}.home-hero-split__item__image .ui-image{background:none;overflow:visible;overflow:initial;z-index:0}@media screen and (min-width:1080px){.home-hero-split__item__image .ui-image{height:35vw;max-height:76rem;max-width:76rem;width:35vw}}.home-hero-split__item__image .ui-image__container{background:none;overflow:visible;overflow:initial}.home-hero-split__item__image .ui-image__container img{border-bottom-right-radius:var(--global-radius);border-top-left-radius:var(--global-radius);overflow:hidden}.home-hero-split__item__title.ui-title.lg{font-weight:400;margin-top:3rem;position:relative;text-transform:uppercase;z-index:2}.home-hero-split__item__title.ui-title.lg strong{font-weight:700}.home-hero-split__item__title.ui-title.lg .ui-title__title{display:block;line-height:.8}@media screen and (max-width:1079px){.home-hero-split__item__title.ui-title.lg .ui-title__title{font-size:32px}}@media screen and (min-width:1080px){.home-hero-split__item__title.ui-title.lg .ui-title__title{font-size:31.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.home-hero-split__item__title.ui-title.lg .ui-title__title{font-size:calc(11.91451px + 1.81347vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.home-hero-split__item__title.ui-title.lg .ui-title__title{font-size:42px}}.home-hero-split__item__title.ui-title.lg .ui-title__subtitle{margin-top:0}@media screen and (max-width:1079px){.home-hero-split__item__title.ui-title.lg .ui-title__subtitle{font-size:28px}}@media screen and (min-width:1080px){.home-hero-split__item__title.ui-title.lg .ui-title__subtitle{font-size:24px}}@media only screen and (min-width:1080px)and (min-width:1080px){.home-hero-split__item__title.ui-title.lg .ui-title__subtitle{font-size:calc(9.07772px + 1.38169vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.home-hero-split__item__title.ui-title.lg .ui-title__subtitle{font-size:32px}}.home-hero-split__item__text{margin-top:1.2rem;min-height:5.5rem;position:relative;transition:opacity .5s ease-in-out;z-index:2}.home-hero-split__item__text.ui-text{text-align:center}@media screen and (max-width:1079px){.home-hero-split__item__text.ui-text{font-size:14px}}@media screen and (min-width:1080px){.home-hero-split__item__text.ui-text{font-size:10.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.home-hero-split__item__text.ui-text{font-size:calc(3.9715px + .60449vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.home-hero-split__item__text.ui-text{font-size:14px}}.home-hero-split__item__text.ui-text br{display:none}.home-hero-split__item__cta{position:relative;text-transform:uppercase;z-index:2}.home-hero-split__contact{color:#b22222;margin-top:6rem;text-align:center}@media screen and (max-width:1079px){.home-hero-split__contact{font-size:19px}}@media screen and (min-width:1080px){.home-hero-split__contact{font-size:14.25px}}@media only screen and (min-width:1080px)and (min-width:1080px){.home-hero-split__contact{font-size:calc(5.3899px + .82038vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.home-hero-split__contact{font-size:19px}}.home-hero-split__contact a{-webkit-text-decoration:underline;text-decoration:underline}',""]),n.locals={},e.exports=n},1725:function(e,t,o){"use strict";o.r(t);o(173),o(46),o(47),o(56),o(57),o(50),o(27),o(42);var n=o(8),r=(o(53),o(79),o(33));function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function d(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){Object(n.a)(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}var m={props:{content:{type:Object,required:!0}},computed:d(d({},Object(r.b)("common",["reservationOpen","showMacaron"])),{},{title:function(){return this.content.title?this.content.title.replace("$dates_long",this.$t("dates_long")).replace("$dates",this.$t("dates")):""},subtitle:function(){return this.content.subtitle?this.content.subtitle.replace("$dates_long",this.$t("dates_long")).replace("$dates",this.$t("dates")):""},countDays:function(){var e=new Date,t=new Date(2024,4,30);return Math.round((t-e)/864e5)},countDownText:function(){return this.countDays>0?this.$t("count_down").replace("$count",this.countDays):this.countDays>-25?this.$t("countdown_inlive"):""}})},c=(o(1657),o(22)),component=Object(c.a)(m,(function(){var e=this,t=e._self._c;return t("UiSection",{staticClass:"home-hero-split__section",attrs:{id:e.content.id}},[t("UiContainer",{attrs:{classname:"home-hero-split"}},[t("div",{staticClass:"home-hero-split__items"},[e._l(e.content.items,(function(o,i){return t("div",{key:"home-split-".concat(i),staticClass:"home-hero-split__item",class:"home-split-item-".concat(i)},[t("div",{staticClass:"home-hero-split__item__image"},[t("UiImage",{attrs:{src:o.image,alt:"Dinner in the sky - France"}}),e._v(" "),t("UiLink",{staticClass:"home-hero-split__item__button",attrs:{link:{route:o.moreinfoLink},theme:"main-menu"}},[e._v("\n            "+e._s(e.$t("button_moreinfo"))+"\n          ")])],1),e._v(" "),t("UiBookLink",{attrs:{theme:"giantbutton",link:o.cta.link,"gtm-data":{action:"",position:"home"}}},[t("UiTitle",{staticClass:"home-hero-split__item__title",attrs:{tag:"h2",size:"lg",title:o.title,subtitle:o.subtitle,"no-margin":""}}),e._v(" "),t("UiText",{staticClass:"home-hero-split__item__text",attrs:{text:o.text}}),e._v(" "),t("div",{staticClass:"home-hero-split__item__cta"},[e._v("\n            "+e._s(o.cta.text)+"\n            "),t("UiIcon",{attrs:{icon:"arrow-square",size:"xs"}})],1)],1)],1)})),e._v(" "),t("div",{staticClass:"home-hero-split__items__or",domProps:{textContent:e._s(e.$t("or"))}})],2),e._v(" "),t("div",{staticClass:"home-hero-split__contact",domProps:{innerHTML:e._s(e.content.contact)}})])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiImage:o(1413).default,UiLink:o(200).default,UiTitle:o(244).default,UiText:o(485).default,UiIcon:o(243).default,UiBookLink:o(1434).default,UiContainer:o(320).default,UiSection:o(1422).default})}}]);