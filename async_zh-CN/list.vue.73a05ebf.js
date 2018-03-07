webpackJsonp([14],{

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__ = __webpack_require__(368);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_22fe59f6_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__ = __webpack_require__(454);
function injectStyle (ssrContext) {
  __webpack_require__(453)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_list_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_22fe59f6_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_list_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
      disabled: false,
      eFeedback: 'e-feedback'
    };
  },

  methods: {
    clickToDisabled: function clickToDisabled() {
      this.disabled = true;
    }
  }
});

/***/ }),

/***/ 453:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"demo-list"},[_c('h1',{staticClass:"zan-doc-demo-block__title"},[_vm._v("List - 列表")]),_c('zan-doc-demo-block',{attrs:{"title":"基本"}},[_c('v-list',[_c('div',{attrs:{"slot":"header"},slot:"header"},[_vm._v("Basic")]),_c('v-list-item',[_c('div',[_vm._v("Title")]),_c('div',{attrs:{"slot":"extra"},slot:"extra"},[_vm._v("extra")])])],1),_c('v-list',[_c('div',{attrs:{"slot":"header"},slot:"header"},[_vm._v("Subtitle")]),_c('v-list-item',{attrs:{"brief":"Subtitle","arrow":"horizontal"}},[_c('div',[_vm._v("Title")])]),_c('v-list-item',{attrs:{"brief":"Subtitle","arrow":"horizontal"}},[_c('v-icon',{attrs:{"slot":"thumb","type":"check-circle","color":"#6abf47"},slot:"thumb"}),_c('div',[_vm._v("Title")])],1)],1),_c('v-list',[_c('div',{attrs:{"slot":"header"},slot:"header"},[_vm._v("Customized Right Side（Empty Content / Text / Element）")]),_c('v-list-item',{attrs:{"arrow":"empty"}},[_c('div',[_vm._v("Title")])]),_c('v-list-item',{attrs:{"arrow":"horizontal"}},[_c('div',[_vm._v("Title")])]),_c('v-list-item',{attrs:{"arrow":"horizontal"}},[_c('div',[_vm._v("Title")]),_c('div',{attrs:{"slot":"extra"},slot:"extra"},[_vm._v("extra")])]),_c('v-list-item',{attrs:{"brief":"brief"}},[_c('v-icon',{attrs:{"slot":"thumb","type":"check-circle","color":"#6abf47"},slot:"thumb"}),_c('div',[_vm._v("Title")]),_c('v-icon',{attrs:{"slot":"extra","type":"ellipsis-circle","color":"#108ee9"},slot:"extra"})],1)],1),_c('v-list',[_c('div',{attrs:{"slot":"header"},slot:"header"},[_vm._v("Text Wrapping")]),_c('v-list-item',{attrs:{"wrap":""}},[_c('div',[_vm._v("Multiple line,long text will wrap;Long Text Long Text Long Text Long Text Long Text Long Text")])]),_c('v-list-item',{attrs:{"wrap":"","align":"top"}},[_c('div',[_vm._v("Multiple line and long text will wrap. Long Text Long Text Long Text")]),_c('div',{attrs:{"slot":"extra"},slot:"extra"},[_vm._v("Align Vertical Top")])]),_c('v-list-item',{attrs:{"wrap":""}},[_c('div',[_vm._v("In rare cases, the text of right side will wrap in the single line with long text. long text long text long text")]),_c('div',{attrs:{"slot":"extra"},slot:"extra"},[_vm._v("Align Vertical Middle")])])],1)],1),_c('zan-doc-demo-block',{attrs:{"title":"其他"}},[_c('v-list',[_c('div',{attrs:{"slot":"header"},slot:"header"},[_vm._v("header")]),_c('v-list-item',{attrs:{"arrow":"horizontal","active-class":"e-feedback-my"},on:{"click":function(){}}},[_c('div',[_vm._v("Active-class")])]),_c('v-list-item',{attrs:{"arrow":"horizontal","error":"","brief":"Brief"}},[_c('div',[_vm._v("Error")]),_c('span',{attrs:{"slot":"extra"},slot:"extra"},[_vm._v("Extra")])]),_c('v-list-item',{attrs:{"disabled":_vm.disabled,"arrow":"horizontal","active-class":_vm.eFeedback},on:{"click":_vm.clickToDisabled}},[_vm._v("\n        click to disabled\n    ")]),_c('v-list-item',[_c('select',{attrs:{"defaultvalue":"1"}},[_c('option',{attrs:{"value":"1"}},[_vm._v("Html select element")]),_c('option',{attrs:{"value":"2","disabled":""}},[_vm._v("Unable to select")]),_c('option',{attrs:{"value":"3"}},[_vm._v("option 3")])])]),_c('div',{attrs:{"slot":"footer"},slot:"footer"},[_vm._v("footer")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});