webpackJsonp([12],{

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pagination_vue__ = __webpack_require__(376);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3b4ebaa7_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pagination_vue__ = __webpack_require__(469);
function injectStyle (ssrContext) {
  __webpack_require__(468)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pagination_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3b4ebaa7_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pagination_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 376:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      modelValue: 1
    };
  },

  methods: {
    consolePage: function consolePage(info) {
      console.log(info);
    }
  }
});

/***/ }),

/***/ 468:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 469:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"demo-pagination"},[_c('h1',{staticClass:"zan-doc-demo-block__title"},[_vm._v("Pagination - 分页器")]),_c('zan-doc-demo-block',{attrs:{"title":"基本"}},[_c('v-pagination',{attrs:{"total":10},on:{"change":_vm.consolePage}})],1),_c('zan-doc-demo-block',{attrs:{"title":"button"}},[_c('v-pagination',{attrs:{"mode":"button","total":10,"prev-text":"Prev","next-text":"Next"},on:{"change":_vm.consolePage},model:{value:(_vm.modelValue),callback:function ($$v) {_vm.modelValue=$$v},expression:"modelValue"}},[_vm._v("Page: "+_vm._s(_vm.modelValue))])],1),_c('zan-doc-demo-block',{attrs:{"title":"number"}},[_c('v-pagination',{attrs:{"mode":"number","total":10},model:{value:(_vm.modelValue),callback:function ($$v) {_vm.modelValue=$$v},expression:"modelValue"}})],1),_c('zan-doc-demo-block',{attrs:{"title":"pointer"}},[_c('v-pagination',{attrs:{"mode":"pointer","total":10},model:{value:(_vm.modelValue),callback:function ($$v) {_vm.modelValue=$$v},expression:"modelValue"}})],1),_c('zan-doc-demo-block',{attrs:{"title":"custom"}},[_c('v-pagination',{attrs:{"mode":"number","total":10},model:{value:(_vm.modelValue),callback:function ($$v) {_vm.modelValue=$$v},expression:"modelValue"}},[_c('v-icon',{attrs:{"slot":"prev","type":"left","disabled":_vm.modelValue<=1},on:{"click":function (){_vm.modelValue-=1}},slot:"prev"}),_c('v-icon',{attrs:{"slot":"next","type":"right","disabled":_vm.modelValue>=10},on:{"click":function (){_vm.modelValue+=1}},slot:"next"})],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});