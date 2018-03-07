webpackJsonp([5],{

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_swipeaction_vue__ = __webpack_require__(388);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b89c850_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_swipeaction_vue__ = __webpack_require__(492);
function injectStyle (ssrContext) {
  __webpack_require__(491)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_swipeaction_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1b89c850_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_swipeaction_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 388:
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
    cancelBtn: function cancelBtn() {
      console.log('cancel');
    },
    replyBtn: function replyBtn() {
      console.log('reply');
    },
    deleteBtn: function deleteBtn() {
      console.log('delete');
    },
    openCb: function openCb() {
      console.log('open');
    },
    closeCb: function closeCb() {
      console.log('close');
    }
  }
});

/***/ }),

/***/ 491:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"demo-swipe-action"},[_c('h1',{staticClass:"zan-doc-demo-block__title"},[_vm._v("SwipeAction - 滑动操作")]),_c('zan-doc-demo-block',{attrs:{"title":"基本"}},[_c('v-list',[_c('v-swipe-action',{style:({ backgroundColor: 'gray' }),attrs:{"auto-close":"","left":[
      {
        text: 'Reply',
        onPress: _vm.replyBtn,
        style: { backgroundColor: '#108ee9', color: 'white' }
      },
      {
        text: 'Cancel',
        onPress: _vm.cancelBtn,
        style: { backgroundColor: '#ddd', color: 'white' }
      }
    ],"right":[
      {
        text: 'Cancel',
        onPress: _vm.cancelBtn,
        style: { backgroundColor: '#ddd', color: 'white' }
      },
      {
        text: 'Delete',
        onPress: _vm.deleteBtn,
        style: { backgroundColor: '#F4333C', color: 'white' }
      }
    ],"on-open":_vm.openCb,"on-close":_vm.closeCb}},[_c('v-list-item',{attrs:{"arrow":"horizontal"}},[_c('div',[_vm._v("Have left and right buttons")]),_c('div',{attrs:{"slot":"extra"},slot:"extra"},[_vm._v("More")])])],1),_c('v-swipe-action',{style:({ backgroundColor: 'gray' }),attrs:{"auto-close":false,"left":[
      {
        text: 'Reply',
        onPress: _vm.replyBtn,
        style: { backgroundColor: '#108ee9', color: 'white' }
      },
      {
        text: 'Cancel',
        onPress: _vm.cancelBtn,
        style: { backgroundColor: '#ddd', color: 'white' }
      }
    ],"right":[
      {
        text: 'Cancel',
        onPress: _vm.cancelBtn,
        style: { backgroundColor: '#ddd', color: 'white' }
      },
      {
        text: 'Delete',
        onPress: _vm.deleteBtn,
        style: { backgroundColor: '#F4333C', color: 'white' }
      }
    ],"on-open":_vm.openCb,"on-close":_vm.closeCb}},[_c('v-list-item',{attrs:{"arrow":"horizontal"}},[_c('div',[_vm._v("Disable auto close")]),_c('div',{attrs:{"slot":"extra"},slot:"extra"},[_vm._v("More")])])],1),_c('v-swipe-action',{style:({ backgroundColor: 'gray' }),attrs:{"auto-close":"","left":[
      {
        text: 'Reply',
        onPress: _vm.replyBtn,
        style: { backgroundColor: '#108ee9', color: 'white' }
      },
      {
        text: 'Cancel',
        onPress: _vm.cancelBtn,
        style: { backgroundColor: '#ddd', color: 'white' }
      }
    ],"on-open":_vm.openCb,"on-close":_vm.closeCb}},[_c('v-list-item',{attrs:{"arrow":"horizontal"}},[_c('div',[_vm._v("Only left buttons")]),_c('div',{attrs:{"slot":"extra"},slot:"extra"},[_vm._v("More")])])],1),_c('v-swipe-action',{style:({ backgroundColor: 'gray' }),attrs:{"auto-close":"","right":[
      {
        text: 'Cancel',
        onPress: _vm.cancelBtn,
        style: { backgroundColor: '#ddd', color: 'white' }
      },
      {
        text: 'Delete',
        onPress: _vm.deleteBtn,
        style: { backgroundColor: '#F4333C', color: 'white' }
      }
    ],"on-open":_vm.openCb,"on-close":_vm.closeCb}},[_c('v-list-item',{attrs:{"arrow":"horizontal"}},[_c('div',[_vm._v("Only right buttons")]),_c('div',{attrs:{"slot":"extra"},slot:"extra"},[_vm._v("More")])])],1)],1)],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});