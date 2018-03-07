webpackJsonp([16],{

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_image_picker_vue__ = __webpack_require__(385);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_036637a3_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_image_picker_vue__ = __webpack_require__(486);
function injectStyle (ssrContext) {
  __webpack_require__(485)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_image_picker_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_036637a3_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_image_picker_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 385:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      files: [{
        url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg'
      }],
      multiple: true,
      radioValue: false
    };
  },

  methods: {
    onClick: function onClick(index) {
      console.log(index);
    },
    onChange: function onChange(files, type, index) {
      console.log(files, type, index);
    }
  }
});

/***/ }),

/***/ 485:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"demo-image-picker"},[_c('h1',{staticClass:"zan-doc-demo-block__title"},[_vm._v("ImagePicker - 图片选择器")]),_c('zan-doc-demo-block',{attrs:{"title":""}},[_c('div',{staticClass:"radio"},[_c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.radioValue),expression:"radioValue"}],attrs:{"type":"radio"},domProps:{"value":false,"checked":_vm._q(_vm.radioValue,false)},on:{"change":function($event){_vm.radioValue=false}}}),_vm._v("切换到单选")]),_c('label',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.radioValue),expression:"radioValue"}],attrs:{"type":"radio"},domProps:{"value":true,"checked":_vm._q(_vm.radioValue,true)},on:{"change":function($event){_vm.radioValue=true}}}),_vm._v("切换到多选")])]),_c('div',{staticClass:"demo-block"},[_c('v-image-picker',{attrs:{"files":_vm.files,"multiple":_vm.radioValue},on:{"image-click":_vm.onClick,"change":_vm.onChange}})],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});