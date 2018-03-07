webpackJsonp([13],{

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modal_vue__ = __webpack_require__(387);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cbb685c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_modal_vue__ = __webpack_require__(490);
function injectStyle (ssrContext) {
  __webpack_require__(489)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_modal_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_1cbb685c_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_modal_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 387:
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



/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      visible: false,
      prompt: '123456'
    };
  },

  methods: {
    modal: function modal() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var message = arguments[1];
      var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

      if (!type || type === 'basic') {
        Object(__WEBPACK_IMPORTED_MODULE_0_packages__["Modal"])({
          title: title,
          message: message,
          forbidClick: false
        }).then(function () {
          console.log('confirm');
        }).catch(function () {
          console.log('cancle');
        });
      } else {
        __WEBPACK_IMPORTED_MODULE_0_packages__["Modal"][type]({
          title: title,
          message: message
        }).then(function () {
          console.log('confirm');
        }).catch(function () {
          console.log('cancle');
        });
      }
    },
    modalDiy: function modalDiy() {
      __WEBPACK_IMPORTED_MODULE_0_packages__["Modal"].confirm({
        title: '关闭',
        message: '确认关闭？',
        confirmText: '关闭'
      });
    },
    modalPropmt: function modalPropmt() {
      var vm = this;
      __WEBPACK_IMPORTED_MODULE_0_packages__["Modal"].confirm({
        title: 'Title',
        message: 'Propmt message',
        promptRender: function promptRender(h) {
          return h('input', { class: 'propmt-input', on: { input: function input(e) {
                vm.prompt = e.target.value;
              } } });
        }
      }).then(function () {
        console.log(vm.prompt);
      });
    },
    modalBtns: function modalBtns() {
      __WEBPACK_IMPORTED_MODULE_0_packages__["Modal"].confirm({
        title: '提示',
        message: '多个按钮',
        btns: [{
          text: '按钮一',
          click: function click() {
            console.log('按钮一');
          }
        }, {
          text: '按钮二',
          click: function click() {
            console.log('按钮二');
          }
        }, {
          text: '按钮三',
          click: function click() {
            console.log('按钮三');
          }
        }]
      });
    },
    popup: function popup() {
      __WEBPACK_IMPORTED_MODULE_0_packages__["Modal"].popup({
        title: '详细信息',
        popupRender: function popupRender(h) {
          return h('v-list', [h('v-list-item', ['名称']), h('v-list-item', ['代码']), h('v-list-item', ['价格'])]);
        }
      }).then(function () {
        console.log('confirm');
      });
    }
  },
  components: {
    Input: __WEBPACK_IMPORTED_MODULE_0_packages__["Input"],
    VModal: __WEBPACK_IMPORTED_MODULE_0_packages__["Modal"]
  }
});

/***/ }),

/***/ 489:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"demo-modal"},[_c('h1',{staticClass:"zan-doc-demo-block__title"},[_vm._v("Modal - 对话框")]),_c('zan-doc-demo-block',{attrs:{"title":""}},[_c('div',{staticClass:"demo-block"},[_c('p',{staticClass:"m15"},[_vm._v("Alert")]),_c('v-button',{on:{"click":function($event){_vm.modal('basic Modal', '这是内容')}}},[_vm._v("Alert")]),_c('p',{staticClass:"m15"},[_vm._v("Confirm")]),_c('v-button',{on:{"click":function($event){_vm.modal('关闭', '确认关闭？', 'confirm')}}},[_vm._v("Confirm")]),_c('p',{staticClass:"m15"},[_vm._v("propmt")]),_c('v-button',{on:{"click":_vm.modalPropmt}},[_vm._v("Propmt")]),_c('p',{staticClass:"m15"},[_vm._v("Popup")]),_c('v-button',{on:{"click":_vm.popup}},[_vm._v("Popup")]),_c('p',{staticClass:"m15"},[_vm._v("自定义按钮文字")]),_c('v-button',{on:{"click":_vm.modalDiy}},[_vm._v("自定义按钮文字")]),_c('p',{staticClass:"m15"},[_vm._v("多个按钮")]),_c('v-button',{on:{"click":_vm.modalBtns}},[_vm._v("多个按钮")])],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});