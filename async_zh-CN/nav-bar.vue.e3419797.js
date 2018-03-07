webpackJsonp([52],{

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_nav_bar_vue__ = __webpack_require__(369);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f8c06ac4_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_nav_bar_vue__ = __webpack_require__(455);
var normalizeComponent = __webpack_require__(0)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_nav_bar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f8c06ac4_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_nav_bar_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 369:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    clickToast: function clickToast(info) {
      __WEBPACK_IMPORTED_MODULE_0_packages__["Toast"].info(info);
    }
  }
});

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"demo-nav-bar"},[_c('h1',{staticClass:"zan-doc-demo-block__title"},[_vm._v("NavBar - 导航栏")]),_c('zan-doc-demo-block',{attrs:{"title":"基本"}},[_c('v-nav-bar',{attrs:{"icon":"left","title":"NavBar"},on:{"icon-click":function($event){_vm.clickToast('left')}}},[_c('v-icon',{attrs:{"slot":"right","type":"ellipsis"},on:{"click":function($event){_vm.clickToast('right')}},slot:"right"})],1),_c('v-nav-bar',{attrs:{"icon":"left","mode":"light"},on:{"icon-click":function($event){_vm.clickToast('left')}}},[_c('span',{attrs:{"slot":"left"},on:{"click":function($event){_vm.clickToast('back')}},slot:"left"},[_vm._v("back")]),_vm._v("\n    NavBar\n    "),_c('div',{attrs:{"slot":"right"},slot:"right"},[_c('v-icon',{staticStyle:{"margin-right":"10px"},attrs:{"type":"search"},on:{"click":function($event){_vm.clickToast('search')}}}),_c('v-icon',{attrs:{"type":"ellipsis"},on:{"click":function($event){_vm.clickToast('ellipsis')}}})],1)])],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});