webpackJsonp([54],{

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__doc_config__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__doc_config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__doc_config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_lang__ = __webpack_require__(22);
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
    if (window.location.host === 'www.youzanyun.com') {
      var group = __WEBPACK_IMPORTED_MODULE_0__doc_config___default.a['zh-CN'].nav[0].groups[0];
      group.list = group.list.filter(function (item) {
        return item.title !== '业务组件';
      });
    }

    var hash = window.location.hash;
    var origin = window.location.origin;
    return {
      simulator: (origin.indexOf('github') > -1 ? 'https://vueclub.github.io/milk-vue' : '') + '/examples.html' + hash,
      lang: Object(__WEBPACK_IMPORTED_MODULE_1__utils_lang__["a" /* getLang */])()
    };
  },
  mounted: function mounted() {
    document.querySelector('.zan-doc-header__logo').innerHTML = '';
  },

  computed: {
    base: function base() {
      return '/' + this.lang + '/component';
    },
    config: function config() {
      return __WEBPACK_IMPORTED_MODULE_0__doc_config___default.a[this.lang];
    }
  },

  watch: {
    '$route': function $route(to) {
      this.lang = to.meta.lang;
    }
  }
});

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ExamplesDocsApp__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_config__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_zan_doc__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_zan_doc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_zan_doc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_is_mobile__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_zan_doc_dist_milk_doc_vendor_css__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_zan_doc_dist_milk_doc_vendor_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_zan_doc_dist_milk_doc_vendor_css__);








__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_zan_doc___default.a);

var routesConfig = Object(__WEBPACK_IMPORTED_MODULE_3__router_config__["a" /* default */])();

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'hash',
  base: '/zanui/vue/',
  routes: routesConfig
});

router.beforeEach(function (route, redirect, next) {
  if (__WEBPACK_IMPORTED_MODULE_5__utils_is_mobile__["a" /* default */]) {
    window.location.replace(window.location.pathname + 'examples.html');
  }
  document.title = route.meta.title || document.title;
  next();
});

router.afterEach(function () {
  window.scrollTo(0, 0);
  __WEBPACK_IMPORTED_MODULE_0_vue__["default"].nextTick(function () {
    return window.syncPath();
  });
});

window.vueRouter = router;

if (false) {
  Vue.config.productionTip = false;
}

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({ // eslint-disable-line
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_2__ExamplesDocsApp__["a" /* default */]);
  },
  router: router,
  el: '#app-container'
});

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ExamplesDocsApp_vue__ = __webpack_require__(115);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_02235246_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ExamplesDocsApp_vue__ = __webpack_require__(292);
function injectStyle (ssrContext) {
  __webpack_require__(290)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_ExamplesDocsApp_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_02235246_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ExamplesDocsApp_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 290:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(291);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("26c09259", content, true);

/***/ }),

/***/ 291:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(undefined);
// imports


// module
exports.push([module.i, ".zan-doc{background-image:-webkit-linear-gradient(bottom,#061a2a,#fff);background-image:linear-gradient(0deg,#061a2a,#fff)}.zan-doc .zan-doc-header__logo{background-image:url(http://ooaa8syjw.bkt.clouddn.com/FgNkalCgxgLkf5-9M8hqW0AXg9SA)}.zan-doc .zan-doc-content--quickstart h3:not(:first-of-type){margin-top:35px}.zan-doc code{word-break:normal}", ""]);

// exports


/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"app"},[_c('zan-doc',{attrs:{"simulator":_vm.simulator,"config":_vm.config,"base":_vm.base}},[_c('router-view')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ })

},[288]);