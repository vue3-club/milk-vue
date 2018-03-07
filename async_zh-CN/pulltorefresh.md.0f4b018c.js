webpackJsonp([30],{

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(443);

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ac548bc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_pulltorefresh_md__ = __webpack_require__(444);
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
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_0ac548bc_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_node_modules_vue_markdown_loader_lib_markdown_compiler_js_raw_pulltorefresh_md__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('h2',[_vm._v("PullToRefresh 拉动刷新")]),_vm._v(" "),_c('h3',[_vm._v("使用指南")]),_vm._v(" "),_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-javascript"}},[_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("import")]),_vm._v(" { Pulltorefresh } "),_c('span',{attrs:{"class":"hljs-keyword"}},[_vm._v("from")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("'milk-vue'")]),_vm._v(";\nVue.component(Pulltorefresh.name, Pulltorefresh);\n")])]),_vm._v(" "),_c('h3',[_vm._v("代码演示")]),_vm._v(" "),_c('div',{staticClass:"demo"},[_c('pre',{pre:true},[_c('code',{attrs:{"v-pre":"","class":"language-html"}},[_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(" "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("@click")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"toggle\"")]),_vm._v(">")]),_vm._v("{{ down ? 'down' : 'up' }}"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-button")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-pull-to-refresh")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{ height: height, overflow: 'auto' }\"")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":refreshing")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"refreshing\"")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":direction")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"down ? 'down' : 'up'\"")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":indicator")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"down ? {} : { deactivate: '上拉可以刷新' }\"")]),_vm._v("\n>")]),_vm._v("\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("<"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(" \n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v("v-for")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"(item, index) in list\"")]),_vm._v(" \n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":style")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"{ textAlign: 'center', padding: '20px' }\"")]),_vm._v(" \n    "),_c('span',{attrs:{"class":"hljs-attr"}},[_vm._v(":key")]),_vm._v("="),_c('span',{attrs:{"class":"hljs-string"}},[_vm._v("\"item\"")]),_vm._v("\n  >")]),_vm._v("\n    {{ down ? 'pull down' : 'pull up' }} {{index}}\n  "),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("div")]),_vm._v(">")]),_vm._v("\n"),_c('span',{attrs:{"class":"hljs-tag"}},[_vm._v("</"),_c('span',{attrs:{"class":"hljs-name"}},[_vm._v("v-pull-to-refresh")]),_vm._v(">")]),_vm._v("\n")])])]),_vm._v(" "),_c('h3',[_vm._v("API")]),_vm._v(" "),_c('table',{staticClass:"zan-doc-table"},[_c('thead',[_c('tr',[_c('th',[_vm._v("属性")]),_vm._v(" "),_c('th',[_vm._v("说明")]),_vm._v(" "),_c('th',[_vm._v("类型")]),_vm._v(" "),_c('th',[_vm._v("默认值")])])]),_vm._v(" "),_c('tbody',[_c('tr',[_c('td',[_vm._v("direction")]),_vm._v(" "),_c('td',[_vm._v("拉动方向可以是"),_c('code',{pre:true},[_vm._v("up")]),_vm._v("或"),_c('code',{pre:true},[_vm._v("down")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("String")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("down")])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("distanceToRefresh")]),_vm._v(" "),_c('td',[_vm._v("刷新距离")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("number")])]),_vm._v(" "),_c('td',[_vm._v("25")])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("refreshing")]),_vm._v(" "),_c('td',[_vm._v("是否显示刷新状态")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("bool")])]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("false")])])]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("onRefresh")]),_vm._v(" "),_c('td',[_vm._v("刷新回调函数")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("(): void")])]),_vm._v(" "),_c('td')]),_vm._v(" "),_c('tr',[_c('td',[_vm._v("indicator")]),_vm._v(" "),_c('td',[_vm._v("指示器配置")]),_vm._v(" "),_c('td',[_c('code',{pre:true},[_vm._v("Object")])]),_vm._v(" "),_c('td')])])])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});