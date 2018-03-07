webpackJsonp([50],{

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_switch_vue__ = __webpack_require__(372);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a448caa_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_switch_vue__ = __webpack_require__(462);
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_switch_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4a448caa_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_switch_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 372:
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


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      modelValue: true
    };
  },

  methods: {
    toastInfo: function toastInfo(info) {
      __WEBPACK_IMPORTED_MODULE_0_packages__["Toast"].info(info.toString());
    }
  }
});

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"demo-switch"},[_c('h1',{staticClass:"zan-doc-demo-block__title"},[_vm._v("Switch - 滑动开关")]),_c('zan-doc-demo-block',{attrs:{"title":"基本"}},[_c('v-list',[_c('v-list-item',[_vm._v("\n        Default off\n        "),_c('v-switch',{ref:"switchOn",attrs:{"slot":"extra"},on:{"change":_vm.toastInfo},slot:"extra"})],1),_c('v-list-item',[_vm._v("\n        Default on\n        "),_c('v-switch',{ref:"switchOff",attrs:{"slot":"extra","checked":""},on:{"change":_vm.toastInfo},slot:"extra"})],1),_c('v-list-item',[_vm._v("\n        Disabled\n        "),_c('v-switch',{attrs:{"slot":"extra","checked":"","disabled":""},slot:"extra"})],1)],1)],1),_c('zan-doc-demo-block',{attrs:{"title":"自定义样式"}},[_c('v-list',[_c('v-list-item',[_vm._v("\n        Android\n        "),_c('v-switch',{ref:"switchOn",attrs:{"slot":"extra","platform":"android","checked":""},on:{"change":_vm.toastInfo},slot:"extra"})],1),_c('v-list-item',[_vm._v("\n        Android disabled\n        "),_c('v-switch',{ref:"switchOn",attrs:{"slot":"extra","platform":"android","checked":"","disabled":""},on:{"change":_vm.toastInfo},slot:"extra"})],1),_c('v-list-item',[_vm._v("\n        Red background\n        "),_c('v-switch',{ref:"switchOff",attrs:{"slot":"extra","color":"red","platform":"android","checked":""},on:{"change":_vm.toastInfo},slot:"extra"})],1),_c('v-list-item',[_vm._v("\n        Red background disabled\n        "),_c('v-switch',{ref:"switchOff",attrs:{"slot":"extra","color":"red","platform":"android","checked":"","disabled":""},on:{"change":_vm.toastInfo},slot:"extra"})],1)],1)],1),_c('zan-doc-demo-block',{attrs:{"title":"绑定数据"}},[_c('v-list',[_c('v-list-item',[_vm._v("\n        Model "+_vm._s(_vm.modelValue)+"\n        "),_c('v-switch',{attrs:{"slot":"extra","checked":""},slot:"extra",model:{value:(_vm.modelValue),callback:function ($$v) {_vm.modelValue=$$v},expression:"modelValue"}})],1),_c('v-list-item',[_vm._v("\n        Model disabled "+_vm._s(_vm.modelValue)+"\n        "),_c('v-switch',{attrs:{"slot":"extra","disabled":""},slot:"extra",model:{value:(_vm.modelValue),callback:function ($$v) {_vm.modelValue=$$v},expression:"modelValue"}})],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});