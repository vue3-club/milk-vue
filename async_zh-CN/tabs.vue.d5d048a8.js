webpackJsonp([4],{

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue__ = __webpack_require__(374);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b4ae9b68_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tabs_vue__ = __webpack_require__(465);
function injectStyle (ssrContext) {
  __webpack_require__(464)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_tabs_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b4ae9b68_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_tabs_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 374:
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


/* harmony default export */ __webpack_exports__["a"] = ({
	data: function data() {
		return {
			paneStyle: "display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);",
			style: "background-color: pink;"
		};
	},

	methods: {
		handleTabClick: function handleTabClick(tab, event) {
			__WEBPACK_IMPORTED_MODULE_0_packages__["Toast"].info(tab);
		}
	}
});

/***/ }),

/***/ 464:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"demo-tabs"},[_c('h1',{staticClass:"zan-doc-demo-block__title"},[_vm._v("Tabs - 标签页")]),_c('zan-doc-demo-block',{attrs:{"title":"基本用法"}},[_c('v-tabs',{attrs:{"value":"first"}},[_c('v-tab-pane',{attrs:{"label":"first page","name":"first","pane-style":_vm.paneStyle}},[_vm._v("First")]),_c('v-tab-pane',{attrs:{"label":"second page","name":"second","pane-style":_vm.paneStyle}},[_vm._v("Second")]),_c('v-tab-pane',{attrs:{"label":"third page","name":"third","pane-style":_vm.paneStyle}},[_vm._v("Third")])],1)],1),_c('zan-doc-demo-block',{attrs:{"title":"无动画"}},[_c('v-tabs',{attrs:{"value":"first","animated":false}},[_c('v-tab-pane',{attrs:{"label":"first page","name":"first","pane-style":_vm.paneStyle}},[_vm._v("First")]),_c('v-tab-pane',{attrs:{"label":"second page","name":"second","pane-style":_vm.paneStyle}},[_vm._v("Second")]),_c('v-tab-pane',{attrs:{"label":"third page","name":"third","pane-style":_vm.paneStyle}},[_vm._v("Third")])],1)],1),_c('zan-doc-demo-block',{attrs:{"title":"设置样式"}},[_c('v-tabs',{attrs:{"value":"first","tab-bar-style":_vm.style},on:{"click":_vm.handleTabClick}},[_c('v-tab-pane',{attrs:{"label":"first page","name":"first","pane-style":_vm.paneStyle}},[_vm._v("First")]),_c('v-tab-pane',{attrs:{"label":"second page","name":"second","pane-style":_vm.paneStyle}},[_vm._v("Second")]),_c('v-tab-pane',{attrs:{"label":"third page","name":"third","pane-style":_vm.paneStyle}},[_vm._v("Third")])],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});