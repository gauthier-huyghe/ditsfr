(window.webpackJsonp=window.webpackJsonp||[]).push([[64,76],{1426:function(e,n,o){var content=o(1430);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(45).default)("40fdcf12",content,!0,{sourceMap:!1})},1427:function(e,n,o){var content=o(1433);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(45).default)("2e4fc237",content,!0,{sourceMap:!1})},1429:function(e,n,o){"use strict";o(1426)},1430:function(e,n,o){var t=o(44)((function(i){return i[1]}));t.push([e.i,".ui-modal{bottom:0;left:0;position:fixed;right:0;top:0;z-index:999}.ui-modal__wrapper{background-color:var(--bg);left:3rem;margin:0 auto;max-width:124rem;position:absolute;right:3rem;top:50%;transform:translateY(-50%)}@media screen and (max-width:1079px){.ui-modal__wrapper{left:1.5rem;right:1.5rem}}@media screen and (min-width:1080px){.ui-modal__wrapper{left:3rem;right:3rem}}.ui-modal__wrapper.full{max-height:90vh;overflow:auto}@media screen and (max-width:1079px){.ui-modal__inner{padding:6rem 1rem 2rem}}@media screen and (min-width:1080px){.ui-modal__inner{padding:10rem 8.3333333333%}}.ui-modal__content{max-height:calc(100vh - 26rem);overflow-y:auto}.ui-modal__overlay{background-color:var(--bg);bottom:0;cursor:pointer;left:0;position:absolute;right:0;top:0;z-index:0}.ui-modal__close{align-items:center;display:flex;font-weight:500;position:absolute;text-transform:uppercase;z-index:1}@media screen and (max-width:1079px){.ui-modal__close{font-size:13px}}@media screen and (min-width:1080px){.ui-modal__close{font-size:9.75px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-modal__close{font-size:calc(3.68782px + .56131vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-modal__close{font-size:13px}}@media screen and (max-width:1079px){.ui-modal__close{right:1rem;top:1rem}}@media screen and (min-width:1080px){.ui-modal__close{right:3rem;top:3rem}}.ui-modal__close__icon{margin-left:1.5rem;transition:transform .3s cubic-bezier(1,0,0,1)}.ui-modal__close:hover .ui-modal__close__icon{transform:rotate(180deg)}.ui-modal__title{margin-bottom:4.5rem}.ui-modal--tiny{color:var(--color-font-alt)}.ui-modal--tiny .ui-modal__close{color:transparent;right:2rem;top:2rem}.ui-modal--tiny .ui-modal__close .ui-icon{color:var(--color-font-alt)}.ui-modal--tiny .ui-modal__overlay{background:#fff;opacity:.8}.ui-modal--tiny .ui-modal__wrapper{background:none;max-width:43rem}.ui-modal--tiny .ui-modal__inner{background-color:var(--color-primary);border-radius:2rem}@media screen and (max-width:1079px){.ui-modal--tiny .ui-modal__inner{box-shadow:0 12px 48px -7px rgba(31,34,79,.2);padding:5rem 2rem 2rem}}@media screen and (min-width:1080px){.ui-modal--tiny .ui-modal__inner{box-shadow:0 42px 48px -37px rgba(31,34,79,.2);padding:4rem}}.ui-modal--nopadding .ui-modal__inner{padding:0}.ui-modal--fullsize{padding:0;width:100vw}.ui-modal--fullsize .ui-modal__overlay{background:rgba(28,31,61,.5)}.ui-modal--fullsize .ui-modal__wrapper{background:none;max-width:250rem}.ui-modal--fullsize .ui-modal__inner{background:#1c1f3d;max-width:100%;width:100%}@media screen and (max-width:1079px){.ui-modal--fullsize .ui-modal__inner{padding:3rem}}@media screen and (min-width:1080px){.ui-modal--fullsize .ui-modal__inner{padding:5rem}}.ui-modal--fullsize .ui-modal__content{align-items:stretch;background:none;border-radius:0;display:flex;justify-content:flex-start;min-height:calc(100vh - 15rem)}.ui-modal--fullsize .ui-modal__content .pdf-viewer{align-items:stretch;display:flex;flex:1 1 auto;justify-content:flex-start;width:100%}.ui-modal--fullsize .ui-modal__content .pdf-viewer embed{flex:1 1 auto;width:100%}@media screen and (max-width:1079px){.ui-modal--fullsize .ui-modal__close{right:.7rem;top:.7rem}}@media screen and (min-width:1080px){.ui-modal--fullsize .ui-modal__close{right:1.5rem;top:1.5rem}}",""]),t.locals={},e.exports=t},1431:function(e,n,o){"use strict";o.r(n);var t={props:{value:{type:Boolean,default:!1},title:{type:String,default:""},theme:{type:String,default:"default"},full:{type:Boolean,default:!1}},computed:{customClasses:function(){return["ui-modal","ui-modal--".concat(this.theme)]}}},r=(o(1429),o(22)),component=Object(r.a)(t,(function(){var e=this,n=e._self._c;return n("portal",{attrs:{to:"root"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],class:e.customClasses},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"ui-modal__overlay",on:{click:function(n){return e.$emit("input",!1)}}}),e._v(" "),n("div",{staticClass:"ui-modal__wrapper",class:{full:e.full}},[n("div",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"ui-modal__inner"},[n("div",{staticClass:"ui-modal__content"},[e.title?n("UiHeading",{staticClass:"ui-modal__title",attrs:{theme:"main-subtitle",tag:"h4",title:e.title}}):e._e(),e._v(" "),e._t("default")],2)]),e._v(" "),n("button",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"ui-modal__close",on:{click:function(n){return e.$emit("input",!1)}}},[e._v("\n        "+e._s(e.$t("close"))+"\n        "),n("UiIcon",{directives:[{name:"show",rawName:"v-show",value:e.value,expression:"value"}],staticClass:"ui-modal__close__icon",attrs:{icon:"close",size:"md"}})],1)])])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{UiIcon:o(243).default})},1432:function(e,n,o){"use strict";o(1427)},1433:function(e,n,o){var t=o(44)((function(i){return i[1]}));t.push([e.i,'.ui-book-link{color:var(--color-font);display:inline-block;font-weight:500;transition:color .4s cubic-bezier(.455,.03,.515,.955)}@media screen and (max-width:1079px){.ui-book-link{font-size:11px}}@media screen and (min-width:1080px){.ui-book-link{font-size:9.75px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-book-link{font-size:calc(3.68782px + .56131vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-book-link{font-size:13px}}.ui-book-link:hover{--color:var(--color-primary)}.ui-book-link--underline{font-weight:400;letter-spacing:.1em;line-height:1;padding:1rem 0;position:relative;text-transform:uppercase}@media screen and (max-width:1079px){.ui-book-link--underline{font-size:18px}}@media screen and (min-width:1080px){.ui-book-link--underline{font-size:13.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-book-link--underline{font-size:calc(5.10622px + .7772vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-book-link--underline{font-size:18px}}.ui-book-link--underline:after{background-color:var(--color-font);bottom:.4rem;content:"";display:block;height:1px;left:0;position:absolute;transform:scaleX(0);transform-origin:left center;transition:transform .5s cubic-bezier(.785,.135,.15,.86);width:100%}.ui-book-link--underline.is-active:after,.ui-book-link--underline.nuxt-link-exact-active:after,.ui-book-link--underline:active:after,.ui-book-link--underline:focus:after,.ui-book-link--underline:hover:after{transform:scaleX(1)}.ui-book-link--underline:after{background:linear-gradient(90deg,currentColor 33.3%,transparent 0,transparent 66.6%,currentColor 0);background-position:100% 0;background-size:300%;transform:scaleX(1);transition:all .8s cubic-bezier(.785,.135,.15,.86)}.ui-book-link--underline .ui-icon{--icon-size:1.1rem;margin-left:4.5rem;transition:all .6s cubic-bezier(.785,.135,.15,.86)}.ui-book-link--underline:not(:disabled).active:after,.ui-book-link--underline:not(:disabled):focus:after,.ui-book-link--underline:not(:disabled):hover:after{background-position:0 0}.ui-book-link--underline:not(:disabled).active .ui-icon,.ui-book-link--underline:not(:disabled):focus .ui-icon,.ui-book-link--underline:not(:disabled):hover .ui-icon{transform:rotate(45deg)}.ui-book-link--header-subscribe{align-items:center;background:var(--fg);border:0;border-radius:0;color:var(--color-font);display:flex;display:inline-flex;font-weight:500;justify-content:flex-start;text-transform:uppercase;transition:all .3s cubic-bezier(.785,.135,.15,.86)}@media screen and (max-width:1079px){.ui-book-link--header-subscribe{font-size:16px}}@media screen and (min-width:1080px){.ui-book-link--header-subscribe{font-size:13.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-book-link--header-subscribe{font-size:calc(5.10622px + .7772vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-book-link--header-subscribe{font-size:18px}}@media screen and (max-width:1079px){.ui-book-link--header-subscribe{border-bottom-left-radius:3rem;height:5rem;padding:1.3rem 2.5rem 1.3rem 3rem}}@media screen and (min-width:1080px){.ui-book-link--header-subscribe{border-bottom-left-radius:2.8em;height:4.5em;padding:.8em 3em .8em 3.5em}}.ui-book-link--header-subscribe .ui-icon{margin-left:2rem;--icon-size:1.2rem;transition:none}.ui-book-link--header-subscribe:not(:disabled).active,.ui-book-link--header-subscribe:not(:disabled):focus,.ui-book-link--header-subscribe:not(:disabled):hover{background-color:#1a9dd8;border:0;color:var(--color-font-alt)}.ui-book-link--giantbutton{align-items:center;background:var(--fg);border:0;border-radius:0;color:var(--color-font);display:flex;display:inline-flex;flex-direction:column;font-weight:500;justify-content:flex-start;margin-top:2rem;transition:all .3s cubic-bezier(.785,.135,.15,.86)}@media screen and (max-width:1079px){.ui-book-link--giantbutton{font-size:16px}}@media screen and (min-width:1080px){.ui-book-link--giantbutton{font-size:13.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-book-link--giantbutton{font-size:calc(5.10622px + .7772vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-book-link--giantbutton{font-size:18px}}@media screen and (max-width:1079px){.ui-book-link--giantbutton{border-bottom-right-radius:2rem;border-top-left-radius:2rem;padding:1.3rem 2.5rem 1.3rem 3rem}}@media screen and (min-width:1080px){.ui-book-link--giantbutton{border-bottom-right-radius:1.8em;border-top-left-radius:1.8em;padding:.8em 1em 2.2rem;width:30em}}.ui-book-link--giantbutton .ui-icon{margin-left:2rem;--icon-size:1.2rem;transition:none}.ui-book-link--giantbutton:not(:disabled).active,.ui-book-link--giantbutton:not(:disabled):focus,.ui-book-link--giantbutton:not(:disabled):hover{background-color:#1a9dd8;border:0;color:var(--color-font-alt)}.ui-book-link--bigbutton{align-items:center;background:var(--fg);border:0;border-radius:0;color:#231f20;display:flex;display:inline-flex;font-weight:500;gap:2rem;justify-content:flex-start;line-height:1;overflow:hidden;position:relative;text-transform:uppercase;transition:all .3s cubic-bezier(.785,.135,.15,.86)}@media screen and (max-width:1079px){.ui-book-link--bigbutton{font-size:18px}}@media screen and (min-width:1080px){.ui-book-link--bigbutton{font-size:15px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-book-link--bigbutton{font-size:calc(5.67358px + .86356vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-book-link--bigbutton{font-size:20px}}@media screen and (max-width:1079px){.ui-book-link--bigbutton{border-bottom-right-radius:2rem;border-top-left-radius:2rem;padding:1.5rem 2.2rem}}@media screen and (min-width:1080px){.ui-book-link--bigbutton{border-bottom-right-radius:1.4em;border-top-left-radius:1.4em;padding:1.5rem 2.2rem}}.ui-book-link--bigbutton span{position:relative;z-index:2}.ui-book-link--bigbutton .ui-icon{margin-left:2rem;--icon-size:1.2rem;position:relative;transition:none;z-index:2}.ui-book-link--bigbutton:not(:disabled).active,.ui-book-link--bigbutton:not(:disabled):focus,.ui-book-link--bigbutton:not(:disabled):hover{background-color:#1a9dd8;border:0;color:var(--color-font-alt)}.ui-book-link--bigbutton:before{background-image:linear-gradient(83.37deg,rgba(0,12,56,.3) 5.59%,rgba(0,12,56,0) 80%);content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:0}.ui-book-link__modal__title{color:var(--color-font-alt);text-align:center;text-transform:uppercase}@media screen and (max-width:1079px){.ui-book-link__modal__title{font-size:24px}}@media screen and (min-width:1080px){.ui-book-link__modal__title{font-size:25.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.ui-book-link__modal__title{font-size:calc(9.64508px + 1.46805vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.ui-book-link__modal__title{font-size:34px}}.ui-book-link__modal__btns{align-items:stretch;display:flex;gap:1rem;justify-content:flex-start}@media screen and (max-width:1079px){.ui-book-link__modal__btns{margin-top:2rem}}@media screen and (min-width:1080px){.ui-book-link__modal__btns{margin-top:3rem}}.ui-book-link__modal__btns .ui-button{flex:1 1 auto}',""]),t.locals={},e.exports=t},1434:function(e,n,o){"use strict";o.r(n);o(173),o(46),o(47),o(56),o(57),o(50),o(27),o(42);var t=o(8),r=o(33);function l(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function d(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?l(Object(o),!0).forEach((function(n){Object(t.a)(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}var c={props:{link:{type:String,default:""},theme:{type:String,default:"default"},gtmData:{type:Object,default:function(){return{}}}},data:function(){return{modalOpen:!1}},computed:d(d({},Object(r.b)("common",["reservationOpen"])),{},{classes:function(){return["ui-book-link","ui-book-link--".concat(this.theme)]}}),methods:d(d({},Object(r.c)("common",["setIsCompanyFromButton"])),{},{clickCta:function(){this.$pushGtmEvent("click_cta",this.gtmData)},clickOpenModal:function(e){this.modalOpen=!0,this.$emit("click",e)},clickScroll:function(e,n){this.modalOpen=!1,this.$scrollTo(e),n&&this.setIsCompanyFromButton(!0),this.$emit("click",e)}})},m=(o(1432),o(22)),component=Object(m.a)(c,(function(){var e=this,n=e._self._c;return n("div",{staticClass:"ui-book-link"},[e.reservationOpen?n("a",{class:e.classes,attrs:{target:"_blank",rel:"noreferrer",href:e.link||e.$t("link_booking")},on:{click:function(n){return e.clickCta()}}},[e._t("default")],2):n("a",{class:e.classes,attrs:{href:e.link||e.$t("link_booking")},on:{click:function(n){n.preventDefault(),e.clickScroll(e.link||e.$t("link_booking"),!1)}}},[e._t("default")],2),e._v(" "),e.modalOpen?n("UiModal",{attrs:{theme:"tiny"},model:{value:e.modalOpen,callback:function(n){e.modalOpen=n},expression:"modalOpen"}},[n("div",{staticClass:"ui-book-link__modal"},[n("h3",{staticClass:"ui-book-link__modal__title",domProps:{textContent:e._s(e.$t("book_title"))}}),e._v(" "),n("div",{staticClass:"ui-book-link__modal__btns"},[n("UiButton",{attrs:{theme:"book"},nativeOn:{click:function(n){return e.clickScroll("#booking",!0)}}},[e._v("\n          "+e._s(e.$t("book_company"))+"\n        ")]),e._v(" "),n("UiButton",{attrs:{theme:"book",link:{url:e.link||e.$t("link_booking")}},nativeOn:{click:function(n){e.modalOpen=!1}}},[e._v("\n          "+e._s(e.$t("book_private"))+"\n        ")])],1)])]):e._e()],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{UiButton:o(245).default,UiModal:o(1431).default})}}]);