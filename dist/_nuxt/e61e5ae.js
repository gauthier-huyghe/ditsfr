(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{1516:function(t,e,n){var content=n(1577);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("2e5e5cec",content,!0,{sourceMap:!1})},1576:function(t,e,n){"use strict";n(1516)},1577:function(t,e,n){var o=n(44)((function(i){return i[1]}));o.push([t.i,".the-grid{bottom:0;left:0;pointer-events:none;position:fixed!important;right:0;top:0;z-index:99999}.the-grid__inner{border-left:1px solid rgba(255,0,0,.1);border-right:1px solid rgba(255,0,0,.1);height:100%}.the-grid__content{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));height:100%;grid-column-gap:2rem;-moz-column-gap:2rem;column-gap:2rem;position:relative}@media screen and (max-width:1079px){.the-grid__content{grid-template-columns:repeat(2,minmax(0,1fr));padding:0 1.5rem}}.the-grid__col{height:100%}.the-grid__col,.the-grid__mid{background-color:rgba(255,0,0,.1)}.the-grid__mid{bottom:0;left:50%;position:absolute;top:0;transform:translateX(-50%);width:1px}",""]),o.locals={},t.exports=o},1696:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{show:!1}},mounted:function(){window.addEventListener("keyup",this.myMethod)},unmounted:function(){window.removeEventListener("keyup",this.myMethod)},methods:{myMethod:function(t){76===t.keyCode&&t.ctrlKey&&(this.show=!this.show)}}},r=(n(1576),n(22)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return t.show?e("UiContainer",{attrs:{classname:"the-grid"}},[e("div",{staticClass:"the-grid__mid"}),t._v(" "),t._l(12,(function(i){return e("div",{key:i,staticClass:"the-grid__col"})}))],2):t._e()}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{UiContainer:n(320).default})}}]);