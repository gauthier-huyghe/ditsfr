(window.webpackJsonp=window.webpackJsonp||[]).push([[38,35,40],{1409:function(e,t,o){var content=o(1420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(45).default)("062299f5",content,!0,{sourceMap:!1})},1417:function(e,t,o){"use strict";o.r(t);o(172);var r={props:{lg:{type:Number,default:12},md:{type:Number,default:2}},computed:{styles:function(){return[{"--columns-lg":this.lg},{"--columns-md":this.md}]}}},n=(o(1419),o(22)),component=Object(n.a)(r,(function(){var e=this;return(0,e._self._c)("div",{staticClass:"field",style:e.styles},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},1419:function(e,t,o){"use strict";o(1409)},1420:function(e,t,o){var r=o(44)((function(i){return i[1]}));r.push([e.i,".field{--columns-md:2;--columns-lg:12}@media screen and (max-width:1079px){.field{grid-column:span var(--columns-md)}}@media screen and (min-width:1080px){.field{grid-column:span var(--columns-lg)}}",""]),r.locals={},e.exports=r},1421:function(e,t,o){var content=o(1425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(45).default)("2fc65b9d",content,!0,{sourceMap:!1})},1423:function(e,t,o){"use strict";o.r(t);var r={props:{errorsBag:{type:Array,default:function(){return[]}},theme:{type:String,default:""}},computed:{hasErrors:function(){return""!==this.errorMessage},errorMessage:function(){return this.errorsBag[0]||""}}},n=(o(1424),o(22)),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("UiSlideUpDown",{staticClass:"form-error",class:"form-error--".concat(e.theme),attrs:{active:e.hasErrors}},[t("span",{staticClass:"form-error__content",domProps:{innerHTML:e._s(e.errorMessage)}})])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{UiSlideUpDown:o(322).default})},1424:function(e,t,o){"use strict";o(1421)},1425:function(e,t,o){var r=o(44)((function(i){return i[1]}));r.push([e.i,".form-error{--color:var(--color-alert)}.form-error__content{color:var(--color);display:block;padding-bottom:0;padding-top:.6rem}@media screen and (max-width:1079px){.form-error__content{font-size:13px}}@media screen and (min-width:1080px){.form-error__content{font-size:10.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.form-error__content{font-size:calc(3.9715px + .60449vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.form-error__content{font-size:14px}}.form-error--overlay,.form-error--white{--color:var(--color-alt)}",""]),r.locals={},e.exports=r},1460:function(e,t,o){var content=o(1493);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(45).default)("12266c6a",content,!0,{sourceMap:!1})},1492:function(e,t,o){"use strict";o(1460)},1493:function(e,t,o){var r=o(44)((function(i){return i[1]}));r.push([e.i,".field-checkbox{--opacity:0;--offset:3rem;--size:1.4rem;color:var(--color-font);transition-delay:0ms;transition-duration:.3s;transition-property:color;transition-timing-function:cubic-bezier(.455,.03,.515,.955);will-change:color}.field-checkbox__wrapper{margin-top:1rem}@media screen and (max-width:1079px){.field-checkbox__wrapper{padding:1.5rem 0}}@media screen and (min-width:1080px){.field-checkbox__wrapper{padding:.75rem 0}}.field-checkbox__wrapper+.field-checkbox__wrapper{margin-top:-.7rem}.field-checkbox__label{cursor:pointer;display:flex;font-weight:400;gap:1.2rem;position:relative}@media screen and (max-width:1079px){.field-checkbox__label{font-size:14px}}@media screen and (min-width:1080px){.field-checkbox__label{font-size:12px}}@media only screen and (min-width:1080px)and (min-width:1080px){.field-checkbox__label{font-size:calc(4.53886px + .69085vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.field-checkbox__label{font-size:16px}}.field-checkbox:focus-within .field-checkbox__box{outline:none}.field-checkbox__txt{display:block;font-weight:500}@media screen and (max-width:1079px){.field-checkbox__txt{font-size:14px}}@media screen and (min-width:1080px){.field-checkbox__txt{font-size:12px}}@media only screen and (min-width:1080px)and (min-width:1080px){.field-checkbox__txt{font-size:calc(4.53886px + .69085vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.field-checkbox__txt{font-size:16px}}.field-checkbox__txt a{-webkit-text-decoration:underline;text-decoration:underline}.field-checkbox__txt a,.field-checkbox__txt a:not(:disabled).active,.field-checkbox__txt a:not(:disabled):focus,.field-checkbox__txt a:not(:disabled):hover{color:var(--color-font)}.field-checkbox__box{align-items:center;border:1px solid var(--border);display:flex;flex:0 0 var(--size);height:var(--size);justify-content:center;margin-top:.3em;transition-delay:0ms;transition-duration:.3s;transition-property:border-color;transition-timing-function:cubic-bezier(.455,.03,.515,.955);width:var(--size);will-change:border-color;z-index:1}@media screen and (max-width:1079px){.field-checkbox__box{font-size:16px}}@media screen and (min-width:1080px){.field-checkbox__box{font-size:12px}}@media only screen and (min-width:1080px)and (min-width:1080px){.field-checkbox__box{font-size:calc(4.53886px + .69085vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.field-checkbox__box{font-size:16px}}.field-checkbox__tick{background-color:var(--color-font);height:calc(var(--size) - 6px);opacity:var(--opacity);transition-delay:0ms;transition-duration:.3s;transition-property:color,opacity;transition-timing-function:cubic-bezier(.455,.03,.515,.955);width:calc(var(--size) - 6px);will-change:color,opacity}.field-checkbox__field{border:0;clip:rect(1px,1px,1px,1px);-webkit-clip-path:inset(100%);clip-path:inset(100%);height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.field-checkbox__error{padding-left:var(--offset)}.field-checkbox.is-selected{--opacity:1}.field-checkbox.is-disabled .field-checkbox__label{cursor:not-allowed;opacity:.5}",""]),r.locals={},e.exports=r},1566:function(e,t,o){"use strict";o.r(t);o(68),o(70),o(59),o(86),o(172),o(96);var r={components:{ValidationProvider:o(64).b},props:{name:{type:String,required:!0},formSlug:{type:String,default:""},value:{type:[Boolean,Array],default:!1},disabled:{type:Boolean,default:!1},rules:{type:[String,Object],required:!1,default:""},theme:{type:String,default:""},lg:{type:Number,default:12},md:{type:Number,default:2}},data:function(){return{fieldValue:""}},computed:{customClasses:function(){var e;return["field-checkbox",null!==(e=this.theme)&&void 0!==e?e:"field-checkbox--".concat(this.theme),{"is-selected":Array.isArray(this.fieldValue)?this.fieldValue.includes(this.name):this.fieldValue}]}},watch:{value:function(){this.setFieldValue()},fieldValue:function(e){this.$emit("input",e)}},created:function(){this.setFieldValue()},methods:{setFieldValue:function(){Array.isArray(this.value),this.fieldValue=this.value}}},n=(o(1492),o(22)),component=Object(n.a)(r,(function(){var e=this,t=e._self._c;return t("Field",{staticClass:"field-checkbox__wrapper",attrs:{lg:e.lg,md:e.md}},[t("ValidationProvider",{attrs:{rules:e.rules,name:e.name,slim:""},scopedSlots:e._u([{key:"default",fn:function(o){var r=o.errors,n=o.invalid;return[t("div",{class:[e.customClasses,{"is-disabled":e.disabled},{"is-invalid":n},{"has-error":r.length}]},[t("label",{staticClass:"field-checkbox__label",attrs:{for:"".concat(e.formSlug,"-").concat(e.name)}},[t("div",{staticClass:"field-checkbox__box"},[t("div",{staticClass:"field-checkbox__tick"})]),e._v(" "),t("span",{staticClass:"field-checkbox__txt"},[e._t("default")],2),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.fieldValue,expression:"fieldValue"}],staticClass:"field-checkbox__field",attrs:{id:"".concat(e.formSlug,"-").concat(e.name),type:"checkbox",disabled:e.disabled,name:e.name},domProps:{value:e.name,checked:Array.isArray(e.fieldValue)?e._i(e.fieldValue,e.name)>-1:e.fieldValue},on:{change:function(t){var o=e.fieldValue,r=t.target,n=!!r.checked;if(Array.isArray(o)){var l=e.name,c=e._i(o,l);r.checked?c<0&&(e.fieldValue=o.concat([l])):c>-1&&(e.fieldValue=o.slice(0,c).concat(o.slice(c+1)))}else e.fieldValue=n}}})]),e._v(" "),t("FieldError",{staticClass:"field-checkbox__error",attrs:{theme:e.theme,"errors-bag":r}})],1)]}}],null,!0)})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FieldError:o(1423).default,Field:o(1417).default})}}]);