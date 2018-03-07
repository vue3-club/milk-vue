webpackJsonp([10],{

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pulltorefresh_vue__ = __webpack_require__(389);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58e90fe4_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pulltorefresh_vue__ = __webpack_require__(494);
function injectStyle (ssrContext) {
  __webpack_require__(493)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_pulltorefresh_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_58e90fe4_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_pulltorefresh_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 389:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      height: document.documentElement.clientHeight,
      refreshing: false,
      down: true
    };
  },

  methods: {
    toggle: function toggle() {
      this.down = !this.down;
    }
  }
});

/***/ }),

/***/ 493:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 494:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"demo-pull-to-refresh"},[_c('h1',{staticClass:"zan-doc-demo-block__title"},[_vm._v("PullToRefresh - 拉动刷新")]),_c('zan-doc-demo-block',{attrs:{"title":""}},[_c('v-button',{on:{"click":_vm.toggle}},[_vm._v(_vm._s(_vm.down ? 'down' : 'up'))]),_c('v-pull-to-refresh',{style:({ height: _vm.height, overflow: 'auto' }),attrs:{"refreshing":_vm.refreshing,"direction":_vm.down ? 'down' : 'up',"indicator":_vm.down ? {} : { deactivate: '上拉可以刷新' }}},_vm._l((_vm.list),function(item,index){return _c('div',{key:item,style:({ textAlign: 'center', padding: '20px' })},[_vm._v("\n    "+_vm._s(_vm.down ? 'pull down' : 'pull up')+" "+_vm._s(index)+"\n  ")])}))],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});