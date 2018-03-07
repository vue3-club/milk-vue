webpackJsonp([25],{

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(433);

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_384840bb_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_stepper_md__ = __webpack_require__(434);
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
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
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_384840bb_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_stepper_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h2',[_vm._v("Stepper 步进器")]),_vm._v(" "),_c('h3',[_vm._v("使用指南")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-javascript"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Stepper } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'milk-vue'")]),_vm._v(";\nVue.component(Stepper.name, Stepper);\n")])]),_vm._v(" "),_c('h3',[_vm._v("代码演示")]),_vm._v(" "),_c('h4',[_vm._v("步进范围")]),_vm._v(" "),_c('p',[_vm._v("默认为"),_c('code',{pre:true},[_vm._v("-Infinity")]),_vm._v("到"),_c('code',{pre:true},[_vm._v("Infinity")])]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"demo-block\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-stepper")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":min")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"1\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":max")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"10\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":step")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"2\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"value\"")]),_vm._v(" />")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('h4',[_vm._v("禁用状态")]),_vm._v(" "),_c('p',[_vm._v("通过"),_c('code',{pre:true},[_vm._v("disabled")]),_vm._v("属性来禁用步进器")]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"demo-block\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-stepper")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":disabled")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"true\"")]),_vm._v(" />")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('h4',[_vm._v("输入框只读")]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"demo-block\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-stepper")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":readonly")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"true\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":step")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"3\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":on-change")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toastInfo\"")]),_vm._v(" />")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('h3',[_vm._v("API")]),_vm._v(" "),_c('table',{staticClass:"zan-doc-table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("参数")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("类型")]),_vm._v(" "),_c('th',[_vm._v("默认值")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("min")]),_vm._v(" "),_c('td',[_vm._v("最小值")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Number")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("-Infinity")])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("max")]),_vm._v(" "),_c('td',[_vm._v("最大值")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Number")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Infinity")])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("value")]),_vm._v(" "),_c('td',[_vm._v("当前值")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Number")])]),_vm._v(" "),_c('td',[_vm._v("无")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("step")]),_vm._v(" "),_c('td',[_vm._v("每次改变的步数")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Number")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("1")])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("defaultValue")]),_vm._v(" "),_c('td',[_vm._v("默认初始值")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Number")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("1")])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("onChange")]),_vm._v(" "),_c('td',[_vm._v("变化时回调函数")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Function")])]),_vm._v(" "),_c('td',[_vm._v("无")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("disabled")]),_vm._v(" "),_c('td',[_vm._v("禁用")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("false")])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("readonly")]),_vm._v(" "),_c('td',[_vm._v("input只读")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("false")])])])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});