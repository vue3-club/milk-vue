webpackJsonp([15],{

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue__ = __webpack_require__(380);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_11e73164_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_vue__ = __webpack_require__(476);
function injectStyle (ssrContext) {
  __webpack_require__(475)
}
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_input_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_11e73164_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_input_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_packages__ = __webpack_require__(53);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      modelValue: "",
      phoneError: false
    };
  },

  methods: {
    setFocus: function setFocus() {
      this.$refs.clickfocus.$refs.input.focus();
    },
    checkValue: function checkValue(value) {
      this.phoneError = !!value;
    },
    errorClick: function errorClick(value) {
      __WEBPACK_IMPORTED_MODULE_0_packages__["Toast"].fail("Error:" + value);
    },
    handleChange: function handleChange(val) {
      console.log('change:' + val);
    }
  }
});

/***/ }),

/***/ 475:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"demo-input"},[_c('h1',{staticClass:"zan-doc-demo-block__title"},[_vm._v("Input - 输入框")]),_c('zan-doc-demo-block',{attrs:{"title":"基本"}},[_c('v-list',[_c('v-input',{ref:"number",attrs:{"type":"number","placeholder":"number","value":"123"},on:{"change":_vm.handleChange}},[_vm._v("number")]),_c('v-input',{attrs:{"type":"password","name":"password","placeholder":"password","clear":""}},[_vm._v("password")]),_c('v-input',{ref:"phone",attrs:{"type":"phone","placeholder":"phone"}},[_vm._v("phone")]),_c('v-input',{ref:"bankCard",attrs:{"type":"bankCard","placeholder":"bankCard"}},[_vm._v("bankCard")]),_c('v-input',{attrs:{"type":"text","name":"autofocus","autofocus":"","placeholder":"auto focus"}},[_vm._v("autofocus")]),_c('v-input',{ref:"clickfocus",attrs:{"type":"text","name":"clickfocus","placeholder":"click to focus"}},[_vm._v("click to focus")]),_c('v-button',{staticStyle:{"border-radius":"0"},on:{"click":_vm.setFocus}},[_vm._v("click button to focus")])],1)],1),_c('zan-doc-demo-block',{attrs:{"title":"Custom title"}},[_c('v-list',[_c('v-input',{attrs:{"placeholder":"label empty","label-align":"left"}}),_c('v-input',{attrs:{"placeholder":"label icon","label-align":"left"}},[_c('div',{staticStyle:{"display":"inline-flex","vertical-align":"middle"}},[_c('v-icon',{attrs:{"type":"search","color":"#108ee9"}})],1)]),_c('v-input',{attrs:{"placeholder":"label align left","label-align":"left"}},[_vm._v("left")]),_c('v-input',{attrs:{"placeholder":"label align center","label-align":"center"}},[_vm._v("center")]),_c('v-input',{attrs:{"placeholder":"label align right","label-align":"right"}},[_vm._v("right")]),_c('v-input',{attrs:{"placeholder":"label number 3","label-number":"3"}},[_vm._v("labelNumber 3")]),_c('v-input',{attrs:{"click-to-focus":"","placeholder":"click label to focus","label-number":"7"}},[_vm._v("click to focus")])],1)],1),_c('zan-doc-demo-block',{attrs:{"title":"v-model"}},[_c('v-list',[_c('v-input',{attrs:{"placeholder":"input model"},model:{value:(_vm.modelValue),callback:function ($$v) {_vm.modelValue=$$v},expression:"modelValue"}},[_vm._v("v-model")]),_c('v-input',{attrs:{"readonly":"","placeholder":"value readonly","value":_vm.modelValue}},[_vm._v("readonly")]),_c('v-input',{attrs:{"disabled":"","placeholder":"value disabled","value":_vm.modelValue}},[_vm._v("disabled")])],1)],1),_c('zan-doc-demo-block',{attrs:{"title":"error & clear"}},[_c('v-list',[_c('v-input',{attrs:{"placeholder":"enter show error","error":_vm.phoneError},on:{"change":_vm.checkValue,"error-click":_vm.errorClick}},[_vm._v("error")]),_c('v-input',{attrs:{"placeholder":"enter show clear","clear":""}},[_vm._v("clear")])],1)],1),_c('zan-doc-demo-block',{attrs:{"title":"extra"}},[_c('v-list',[_c('v-input',{attrs:{"type":"number","placeholder":"input extra"}},[_vm._v("\n    extra\n    "),_c('span',{attrs:{"slot":"extra"},slot:"extra"},[_vm._v("￥")])])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});