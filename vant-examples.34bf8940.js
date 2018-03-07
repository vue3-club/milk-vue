webpackJsonp([55],{

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ExamplesApp__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__router_config__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_lang__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_packages__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_zan_doc__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_zan_doc___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_zan_doc__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_zan_doc_dist_milk_doc_vendor_css__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_zan_doc_dist_milk_doc_vendor_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_zan_doc_dist_milk_doc_vendor_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_zan_doc_src_helper_touch_simulator__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_zan_doc_src_helper_touch_simulator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_zan_doc_src_helper_touch_simulator__);








// import 'packages/vant-css/src/index.css';


__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5_packages__["default"]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_zan_doc___default.a);
// Vue.use(Lazyload, {
//   lazyComponent: true
// });
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var routesConfig = Object(__WEBPACK_IMPORTED_MODULE_3__router_config__["a" /* default */])(true);
var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'hash',
  routes: routesConfig
});

router.afterEach(function (route) {
  var container = document.querySelector('.examples-container');
  if (container) {
    document.querySelector('.examples-container').scrollTop = 0;
  }
  Object(__WEBPACK_IMPORTED_MODULE_4__utils_lang__["b" /* setLang */])(route.meta.lang);
});

window.vueRouter = router;

if (false) {
  Vue.config.productionTip = false;
}

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({ // eslint-disable-line
  render: function render(h) {
    return h(__WEBPACK_IMPORTED_MODULE_2__ExamplesApp__["a" /* default */]);
  },
  router: router,
  el: '#app-container'
});

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e8c3b604_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ExamplesApp_vue__ = __webpack_require__(311);
function injectStyle (ssrContext) {
  __webpack_require__(309)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = null
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
  __vue_script__,
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e8c3b604_hasScoped_false_preserveWhitespace_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_ExamplesApp_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(310);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(13)("1433dd17", content, true);

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)(undefined);
// imports


// module
exports.push([module.i, "body{color:#333;line-height:1;background-color:#f8f8f8;font-family:Arial,Helvetica,STHeiti STXihei,Microsoft YaHei,Tohoma,sans-serif;-webkit-font-smoothing:antialiased;padding-bottom:20px;margin:0;outline:none}", ""]);

// exports


/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('router-view')}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 模拟移动端 touch 事件
 */

var multiTouchStartPos;
var eventTarget;

// polyfills
if (!document.createTouch) {
  document.createTouch = function (view, target, identifier, pageX, pageY, screenX, screenY) {
    // auto set
    return new Touch(target, identifier, {
      pageX: pageX,
      pageY: pageY,
      screenX: screenX,
      screenY: screenY,
      clientX: pageX - window.pageXOffset,
      clientY: pageY - window.pageYOffset
    }, 0, 0);
  };
}

if (!document.createTouchList) {
  document.createTouchList = function () {
    var touchList = TouchList();
    for (var i = 0; i < arguments.length; i++) {
      touchList[i] = arguments[i];
    }
    touchList.length = arguments.length;
    return touchList;
  };
}

/**
 * create an touch point
 * @constructor
 * @param target
 * @param identifier
 * @param pos
 * @param deltaX
 * @param deltaY
 * @returns {Object} touchPoint
 */

var Touch = function Touch(target, identifier, pos, deltaX, deltaY) {
  _classCallCheck(this, Touch);

  deltaX = deltaX || 0;
  deltaY = deltaY || 0;

  this.identifier = identifier;
  this.target = target;
  this.clientX = pos.clientX + deltaX;
  this.clientY = pos.clientY + deltaY;
  this.screenX = pos.screenX + deltaX;
  this.screenY = pos.screenY + deltaY;
  this.pageX = pos.pageX + deltaX;
  this.pageY = pos.pageY + deltaY;
};

/**
 * create empty touchlist with the methods
 * @constructor
 * @returns touchList
 */


function TouchList() {
  var touchList = [];

  touchList['item'] = function (index) {
    return this[index] || null;
  };

  // specified by Mozilla
  touchList['identifiedTouch'] = function (id) {
    return this[id + 1] || null;
  };

  return touchList;
}

/**
 * Simple trick to fake touch event support
 * this is enough for most libraries like Modernizr and Hammer
 */
function fakeTouchSupport() {
  var objs = [window, document.documentElement];
  var props = ['ontouchstart', 'ontouchmove', 'ontouchcancel', 'ontouchend'];

  for (var o = 0; o < objs.length; o++) {
    for (var p = 0; p < props.length; p++) {
      if (objs[o] && objs[o][props[p]] == undefined) {
        objs[o][props[p]] = null;
      }
    }
  }
}

/**
 * only trigger touches when the left mousebutton has been pressed
 * @param touchType
 * @returns {Function}
 */
function onMouse(touchType) {
  return function (ev) {
    // prevent mouse events

    if (ev.which !== 1) {
      return;
    }

    // The EventTarget on which the touch point started when it was first placed on the surface,
    // even if the touch point has since moved outside the interactive area of that element.
    // also, when the target doesnt exist anymore, we update it
    if (ev.type == 'mousedown' || !eventTarget || eventTarget && !eventTarget.dispatchEvent) {
      eventTarget = ev.target;
    }

    triggerTouch(touchType, ev);

    // reset
    if (ev.type == 'mouseup') {
      multiTouchStartPos = null;
      eventTarget = null;
    }
  };
}

/**
 * trigger a touch event
 * @param eventName
 * @param mouseEv
 */
function triggerTouch(eventName, mouseEv) {
  var touchEvent = document.createEvent('Event');
  touchEvent.initEvent(eventName, true, true);

  touchEvent.altKey = mouseEv.altKey;
  touchEvent.ctrlKey = mouseEv.ctrlKey;
  touchEvent.metaKey = mouseEv.metaKey;
  touchEvent.shiftKey = mouseEv.shiftKey;

  touchEvent.touches = getActiveTouches(mouseEv);
  touchEvent.targetTouches = getActiveTouches(mouseEv);
  touchEvent.changedTouches = createTouchList(mouseEv);

  eventTarget.dispatchEvent(touchEvent);
}

/**
 * create a touchList based on the mouse event
 * @param mouseEv
 * @returns {TouchList}
 */
function createTouchList(mouseEv) {
  var touchList = TouchList();
  touchList.push(new Touch(eventTarget, 1, mouseEv, 0, 0));
  return touchList;
}

/**
 * receive all active touches
 * @param mouseEv
 * @returns {TouchList}
 */
function getActiveTouches(mouseEv) {
  // empty list
  if (mouseEv.type == 'mouseup') {
    return TouchList();
  }
  return createTouchList(mouseEv);
}

/**
 * TouchEmulator initializer
 */
function TouchEmulator() {
  fakeTouchSupport();

  window.addEventListener('mousedown', onMouse('touchstart'), true);
  window.addEventListener('mousemove', onMouse('touchmove'), true);
  window.addEventListener('mouseup', onMouse('touchend'), true);
}

// start distance when entering the multitouch mode
TouchEmulator['multiTouchOffset'] = 75;

new TouchEmulator();


/***/ })

},[307]);