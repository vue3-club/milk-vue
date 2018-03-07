webpackJsonp([0],{

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__ = __webpack_require__(371);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c41c6c0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_vue__ = __webpack_require__(461);
function injectStyle (ssrContext) {
  __webpack_require__(459)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_menu_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3c41c6c0_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_menu_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 371:
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
//


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      itemList: [{
        label: 'menu1',
        value: 'm1',
        children: [{
          label: 'child1',
          value: 'c1'
        }, {
          label: 'child2',
          value: 'c2'
        }, {
          label: 'child3',
          value: 'c3'
        }, {
          label: 'child4',
          value: 'c4'
        }, {
          label: 'child5',
          value: 'c5'
        }, {
          label: 'child6',
          value: 'c6'
        }, {
          label: 'child7',
          value: 'c7'
        }, {
          label: 'child8',
          value: 'c8'
        }, {
          label: 'child9',
          value: 'c9'
        }]
      }, {
        label: 'menu2',
        value: 'm2',
        children: [{
          label: 'child21',
          value: 'c21'
        }, {
          label: 'child22',
          value: 'c22',
          disabled: true
        }, {
          label: 'child23',
          value: 'c23'
        }]
      }, {
        label: 'menu3',
        value: 'm3'
      }],
      selectItem: [1],
      oneShow: false,
      twoShow: false,
      threeShow: false
    };
  },

  methods: {
    toastInfo: function toastInfo(info) {
      console.log(info);
    },
    changeMenu: function changeMenu(menu) {
      this[menu] = !this[menu];
    }
  }
});

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(460);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("5a55cc16", content, true);

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(undefined);
// imports


// module
exports.push([module.i, ".demo-menu .menu-active .vm-menu,.demo-menu .menu-active .vm-nav-bar{position:relative;z-index:100!important}.demo-menu .menu-active .menu-mask{display:block;z-index:99}.demo-menu .menu-mask{display:none;position:fixed;top:0;width:100%;height:100%;background-color:#000;opacity:.4}", ""]);

// exports


/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"demo-menu"},[_c('h1',{staticClass:"zan-doc-demo-block__title"},[_vm._v("Menu - 菜单")]),_c('zan-doc-demo-block',{attrs:{"title":"基本"}},[_c('div',{class:_vm.oneShow?'menu-active':''},[_c('div',{staticClass:"menu-mask"}),_c('v-nav-bar',{attrs:{"icon":_vm.oneShow?'left':'right',"title":"Normal menu"},on:{"icon-click":function($event){_vm.changeMenu('oneShow')}}}),_c('v-menu',{directives:[{name:"show",rawName:"v-show",value:(_vm.oneShow),expression:"oneShow"}],attrs:{"menu-data":_vm.itemList},on:{"change":_vm.toastInfo}}),_c('div')],1)]),_c('zan-doc-demo-block',{attrs:{"title":"单极菜单"}},[_c('div',{class:_vm.twoShow?'menu-active':''},[_c('div',{staticClass:"menu-mask"}),_c('v-nav-bar',{attrs:{"icon":_vm.twoShow?'left':'right',"title":"Single menu"},on:{"icon-click":function($event){_vm.changeMenu('twoShow')}}}),_c('v-menu',{directives:[{name:"show",rawName:"v-show",value:(_vm.twoShow),expression:"twoShow"}],attrs:{"menu-data":_vm.itemList,"level":1},on:{"change":_vm.toastInfo}}),_c('div')],1)]),_c('zan-doc-demo-block',{attrs:{"title":"多选菜单"}},[_c('div',{class:_vm.threeShow?'menu-active':''},[_c('div',{staticClass:"menu-mask"}),_c('v-nav-bar',{attrs:{"icon":_vm.threeShow?'left':'right',"title":"Multi-select menu"},on:{"icon-click":function($event){_vm.changeMenu('threeShow')}}}),_c('v-menu',{directives:[{name:"show",rawName:"v-show",value:(_vm.threeShow),expression:"threeShow"}],attrs:{"menu-data":_vm.itemList,"multi-select":""},on:{"change":_vm.toastInfo,"ensure":_vm.toastInfo,"cancel":function($event){_vm.changeMenu('threeShow')}}}),_c('div')],1)])],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

});