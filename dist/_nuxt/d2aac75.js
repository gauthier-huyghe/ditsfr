(window.webpackJsonp=window.webpackJsonp||[]).push([[45,35,40],{1409:function(e,n,t){var content=t(1420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(45).default)("062299f5",content,!0,{sourceMap:!1})},1417:function(e,n,t){"use strict";t.r(n);t(172);var r={props:{lg:{type:Number,default:12},md:{type:Number,default:2}},computed:{styles:function(){return[{"--columns-lg":this.lg},{"--columns-md":this.md}]}}},l=(t(1419),t(22)),component=Object(l.a)(r,(function(){var e=this;return(0,e._self._c)("div",{staticClass:"field",style:e.styles},[e._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},1419:function(e,n,t){"use strict";t(1409)},1420:function(e,n,t){var r=t(44)((function(i){return i[1]}));r.push([e.i,".field{--columns-md:2;--columns-lg:12}@media screen and (max-width:1079px){.field{grid-column:span var(--columns-md)}}@media screen and (min-width:1080px){.field{grid-column:span var(--columns-lg)}}",""]),r.locals={},e.exports=r},1421:function(e,n,t){var content=t(1425);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(45).default)("2fc65b9d",content,!0,{sourceMap:!1})},1423:function(e,n,t){"use strict";t.r(n);var r={props:{errorsBag:{type:Array,default:function(){return[]}},theme:{type:String,default:""}},computed:{hasErrors:function(){return""!==this.errorMessage},errorMessage:function(){return this.errorsBag[0]||""}}},l=(t(1424),t(22)),component=Object(l.a)(r,(function(){var e=this,n=e._self._c;return n("UiSlideUpDown",{staticClass:"form-error",class:"form-error--".concat(e.theme),attrs:{active:e.hasErrors}},[n("span",{staticClass:"form-error__content",domProps:{innerHTML:e._s(e.errorMessage)}})])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{UiSlideUpDown:t(322).default})},1424:function(e,n,t){"use strict";t(1421)},1425:function(e,n,t){var r=t(44)((function(i){return i[1]}));r.push([e.i,".form-error{--color:var(--color-alert)}.form-error__content{color:var(--color);display:block;padding-bottom:0;padding-top:.6rem}@media screen and (max-width:1079px){.form-error__content{font-size:13px}}@media screen and (min-width:1080px){.form-error__content{font-size:10.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.form-error__content{font-size:calc(3.9715px + .60449vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.form-error__content{font-size:14px}}.form-error--overlay,.form-error--white{--color:var(--color-alt)}",""]),r.locals={},e.exports=r},1525:function(e,n,t){var content=t(1617);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,t(45).default)("711ef68a",content,!0,{sourceMap:!1})},1616:function(e,n,t){"use strict";t(1525)},1617:function(e,n,t){var r=t(44)((function(i){return i[1]}));r.push([e.i,".field-number{position:relative;transition-delay:0ms;transition-duration:.3s;transition-property:margin;transition-timing-function:cubic-bezier(.455,.03,.515,.955);width:100%;will-change:margin}.field-number ::-ms-reveal{display:none}.field-number__suffix{position:absolute;right:0;top:50%;transform:translateY(-50%)}@media screen and (max-width:1079px){.field-number__suffix{font-size:16px}}@media screen and (min-width:1080px){.field-number__suffix{font-size:12px}}@media only screen and (min-width:1080px)and (min-width:1080px){.field-number__suffix{font-size:calc(4.53886px + .69085vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.field-number__suffix{font-size:16px}}.field-number__value{bottom:0;box-sizing:border-box;color:var(--color-font);font-weight:400;line-height:1.25;opacity:1;padding:1.5rem 2px;position:absolute;text-align:left}@media screen and (max-width:1079px){.field-number__value{font-size:16px}}@media screen and (min-width:1080px){.field-number__value{font-size:13.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.field-number__value{font-size:calc(5.10622px + .7772vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.field-number__value{font-size:18px}}.field-number__label{border-bottom:1px solid var(--border);color:var(--color-font);display:block;font-weight:500;height:6.5rem;position:relative;transition-delay:0ms;transition-duration:.3s;transition-property:color,border-color;transition-timing-function:cubic-bezier(.455,.03,.515,.955);width:100%;will-change:color,border-color}.field-number__label:focus-within{outline:none}.field-number__label i{color:var(--color-alert)}.field-number__label:focus-within .field-number__value{opacity:0}.field-number__top{color:var(--color-font);display:block;font-weight:400;left:0;margin-bottom:.5rem;margin-top:0;opacity:.8;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%);transition-delay:0ms;transition-duration:.3s;transition-property:color,font-size,top,opacity;transition-timing-function:cubic-bezier(.455,.03,.515,.955);will-change:color,font-size,top,opacity;z-index:1}@media screen and (max-width:1079px){.field-number__top{font-size:14px}}@media screen and (min-width:1080px){.field-number__top{font-size:10.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.field-number__top{font-size:calc(3.9715px + .60449vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.field-number__top{font-size:14px}}.field-number:focus-within .field-number__top,.field-number__top.small{opacity:.4;top:1.5rem}@media screen and (max-width:1079px){.field-number:focus-within .field-number__top,.field-number__top.small{font-size:12px}}@media screen and (min-width:1080px){.field-number:focus-within .field-number__top,.field-number__top.small{font-size:9px}}@media only screen and (min-width:1080px)and (min-width:1080px){.field-number:focus-within .field-number__top,.field-number__top.small{font-size:calc(3.40415px + .51813vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.field-number:focus-within .field-number__top,.field-number__top.small{font-size:12px}}.field-number__field{-moz-appearance:textfield;background-color:transparent;color:var(--color-font);font-weight:400;height:100%;line-height:1.25;opacity:0;outline:none;padding-top:1.9rem;text-align:left;transition-delay:0ms;transition-duration:.3s;transition-property:color;transition-timing-function:cubic-bezier(.455,.03,.515,.955);width:100%;will-change:color}@media screen and (max-width:1079px){.field-number__field{font-size:16px}}@media screen and (min-width:1080px){.field-number__field{font-size:13.5px}}@media only screen and (min-width:1080px)and (min-width:1080px){.field-number__field{font-size:calc(5.10622px + .7772vw)}}@media only screen and (min-width:1080px)and (min-width:1659px){.field-number__field{font-size:18px}}.field-number__field::-ms-clear{display:none}.field-number__field:focus-within{opacity:1}.field-number__button{position:absolute;right:1rem;top:50%;transform:translateY(-50%)}.field-number.is-disabled .field-number__label{opacity:.5}.field-number.is-disabled .field-number__field{cursor:not-allowed}.field-number.is-readonly .field-number__field,.field-number.is-readonly .field-number__label,.field-number.is-readonly .field-number__top,.field-number.is-readonly .field-number__value{color:rgba(35,31,32,.5)}",""]),r.locals={},e.exports=r},1705:function(e,n,t){"use strict";t.r(n);t(59),t(172),t(53),t(79);var r={components:{ValidationProvider:t(64).b},props:{name:{type:String,required:!0},label:{type:String,default:""},value:{type:[String,Number],default:""},rules:{type:[String,Object],default:""},required:{type:Boolean,required:!1,default:!1},maxLength:{type:Number,default:255},disabled:{type:Boolean,default:!1},readOnly:{type:Boolean,default:!1},theme:{type:String,default:""},lg:{type:Number,default:12},md:{type:Number,default:2},suffix:{type:String,default:""}},data:function(){return{fieldValue:"",revealPassword:!1}},computed:{customClasses:function(){return["field-number",this.theme?"field-number--".concat(this.theme):"",{"is-active":this.active}]},active:function(){return""!==this.fieldValue},displayedValue:function(){return new Intl.NumberFormat("de-DE").format(this.fieldValue)}},watch:{value:function(){this.fieldValue=this.value}},created:function(){this.fieldValue=this.value},methods:{handleInput:function(e){this.fieldValue=this.sanitizeValue(e),this.$emit("input",this.fieldValue)},sanitizeValue:function(e){return e.replace(/[^\d.,]/gi,"").replace(/,/gi,".").replace(/(\d*\.\d*)\.(\d*)/i,"$1$2")}}},l=(t(1616),t(22)),component=Object(l.a)(r,(function(){var e=this,n=e._self._c;return n("Field",{attrs:{lg:e.lg,md:e.md}},[n("ValidationProvider",{attrs:{rules:e.rules,name:e.name,vid:e.name,slim:""},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.errors,l=t.invalid;return[n("div",{class:[e.customClasses,{"is-invalid":l},{"has-error":r.length},{"is-disabled":e.disabled},{"is-readonly":e.readOnly}]},[n("label",{staticClass:"field-number__label",attrs:{for:e.name}},[e.fieldValue?n("p",{staticClass:"field-number__value"},[e._v("\n          "+e._s(e.displayedValue)+"\n        ")]):e._e(),e._v(" "),n("input",{staticClass:"field-number__field",attrs:{id:e.name,type:"text",name:e.name,maxlength:e.maxLength,disabled:e.disabled,readonly:e.readOnly?"readonly":null},domProps:{value:e.fieldValue},on:{input:function(n){return e.handleInput(n.target.value)}}}),e._v(" "),n("span",{staticClass:"field-number__top",class:{small:e.active}},[e._v("\n          "+e._s(e.label)+" "),e.required?n("i",[e._v("*")]):e._e()]),e._v(" "),e.suffix?n("p",{staticClass:"field-number__suffix"},[e._v(e._s(e.suffix))]):e._e(),e._v(" "),n("div",{staticClass:"field-number__button"},[e._t("default")],2)]),e._v(" "),n("FieldError",{staticClass:"field-number__error",attrs:{theme:e.theme,"errors-bag":r}})],1)]}}],null,!0)})],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{FieldError:t(1423).default,Field:t(1417).default})}}]);