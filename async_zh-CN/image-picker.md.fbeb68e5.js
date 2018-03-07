webpackJsonp([40],{

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(435);

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_771a67b4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_image_picker_md__ = __webpack_require__(436);
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
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_771a67b4_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_image_picker_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h2',[_vm._v("ImagePicker 图片选择器")]),_vm._v(" "),_c('p',[_vm._v("注意：只是图片选择器，一般用于上传图片前的文件选择操作，但不包括图片上传的功能")]),_vm._v(" "),_c('h3',[_vm._v("使用指南")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-javascript"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { ImagePicker } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'milk-vue'")]),_vm._v(";\nVue.component(ImagePicker.name, ImagePicker);\n")])]),_vm._v(" "),_c('h3',[_vm._v("代码演示")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-javascript"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("export")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("default")]),_vm._v(" {\n  data(){\n    "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("return")]),_vm._v(" {\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("files")]),_vm._v(": [\n        {\n           "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("url")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg'")]),_vm._v("\n        }\n      ],\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("multiple")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("true")]),_vm._v(",\n      "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("radioValue")]),_vm._v(": "),_c('span',{attrs:{"class":"hljs-literal"}},[_vm._v("false")]),_vm._v("\n    }\n  },\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("methods")]),_vm._v(":{\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("onClick")]),_vm._v(":"),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("function")]),_vm._v("("),_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("index")]),_vm._v(")")]),_vm._v("{\n      "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("console")]),_vm._v(".log(index);\n    },\n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("onChange")]),_vm._v(":"),_c('span',{attrs:{"class":"hljs-function"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("function")]),_vm._v("("),_c('span',{attrs:{"class":"hljs-params"}},[_vm._v("files, type, index")]),_vm._v(")")]),_vm._v("{\n      "),_c('span',{attrs:{"class":"hljs-built_in"}},[_vm._v("console")]),_vm._v(".log(files, type, index);\n    }\n  }\n}\n")])]),_vm._v(" "),_c('h3',[_vm._v("图片选择")]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"radio\"")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("label")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"radio\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"false\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"radioValue\"")]),_vm._v(">")]),_vm._v("切换到单选"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("label")]),_vm._v(">")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("label")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("input")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("type")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"radio\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":value")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"true\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-model")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"radioValue\"")]),_vm._v(">")]),_vm._v("切换到多选"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("label")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("class")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"demo-block\"")]),_vm._v(">")]),_vm._v("\n    "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-image-picker")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":files")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"files\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@image-click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onClick\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@change")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"onChange\"")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":multiple")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"radioValue\"")]),_vm._v(">")]),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-image-picker")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('h3',[_vm._v("Attributes")]),_vm._v(" "),_c('table',{staticClass:"zan-doc-table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("参数")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("类型")]),_vm._v(" "),_c('th',[_vm._v("默认值")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("files")]),_vm._v(" "),_c('td',[_vm._v("图片文件数组，元素为对象")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Array")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("[]")])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("selectable")]),_vm._v(" "),_c('td',[_vm._v("是否显示选择按钮")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("true")])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("removeable")]),_vm._v(" "),_c('td',[_vm._v("是否显示移除按钮")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("true")])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("multiple")]),_vm._v(" "),_c('td',[_vm._v("是否支持多选")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Boolean")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("false")])])])])]),_vm._v(" "),_c('h3',[_vm._v("Events")]),_vm._v(" "),_c('table',{staticClass:"zan-doc-table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("参数")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("类型")]),_vm._v(" "),_c('th',[_vm._v("默认值")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("change")]),_vm._v(" "),_c('td',[_vm._v("files 值发生变化触发的回调函数, type 操作类型有添加，移除，如果是移除操作，则第三个参数代表的是移除图片的索引")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("(files: Object, operationType: string, index: number): void")])]),_vm._v(" "),_c('td')]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("image-click")]),_vm._v(" "),_c('td',[_vm._v("图片被点击时的回调，")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("(index: number): void")])]),_vm._v(" "),_c('td')]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("fail")]),_vm._v(" "),_c('td',[_vm._v("选择图片错误时的回调")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("(error: object): void")])]),_vm._v(" "),_c('td')])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});