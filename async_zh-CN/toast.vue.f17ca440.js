webpackJsonp([2],{

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_toast_vue__ = __webpack_require__(386);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_24e57666_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_toast_vue__ = __webpack_require__(488);
function injectStyle (ssrContext) {
  __webpack_require__(487)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_toast_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_24e57666_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_toast_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 386:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  methods: {
    toast: function toast(type, info) {
      type === "default" ? Object(__WEBPACK_IMPORTED_MODULE_0_packages__["Toast"])(info) : __WEBPACK_IMPORTED_MODULE_0_packages__["Toast"][type](info);
    },
    toastDiy: function toastDiy() {
      var second = 3; //倒计时3秒
      var toast = __WEBPACK_IMPORTED_MODULE_0_packages__["Toast"].loading({
        mask: true, //背景蒙层
        duration: 0, // 持续展示 toast
        forbidClick: true, // 禁用背景点击
        message: '倒计时 3 秒'
      });
      var timer = setInterval(function () {
        second--;
        if (second) {
          toast.message = '\u5012\u8BA1\u65F6 ' + second + ' \u79D2';
        } else {
          clearInterval(timer);
          __WEBPACK_IMPORTED_MODULE_0_packages__["Toast"].clear();
        }
      }, 1000);
    }
  }
});

/***/ }),

/***/ 487:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"demo-toast"},[_c('h1',{staticClass:"zan-doc-demo-block__title"},[_vm._v("Toast - 轻提示")]),_c('zan-doc-demo-block',{attrs:{"title":"基本"}},[_c('div',{staticClass:"demo-block"},[_c('v-button',{attrs:{"type":"default"},on:{"click":function($event){_vm.toast('info','提示文案，建议不超过15个字~')}}},[_vm._v("default")]),_c('v-button',{attrs:{"type":"default"},on:{"click":function($event){_vm.toast('loading','加载中提示')}}},[_vm._v("loading")]),_c('v-button',{attrs:{"type":"default"},on:{"click":function($event){_vm.toast('success','成功文案')}}},[_vm._v("success")]),_c('v-button',{attrs:{"type":"default"},on:{"click":function($event){_vm.toast('fail','失败文案')}}},[_vm._v("fail")])],1)]),_c('zan-doc-demo-block',{attrs:{"title":"自定义"}},[_c('div',{staticClass:"demo-block"},[_c('v-button',{on:{"click":_vm.toastDiy}},[_vm._v("toast diy")])],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});