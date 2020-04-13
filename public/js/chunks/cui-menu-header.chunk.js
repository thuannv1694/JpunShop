(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/chunks/cui-menu-header.chunk"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ant_design_vue_es_avatar_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ant-design-vue/es/avatar/style */ "./node_modules/ant-design-vue/es/avatar/style/index.js");
/* harmony import */ var ant_design_vue_es_avatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ant-design-vue/es/avatar */ "./node_modules/ant-design-vue/es/avatar/index.js");
/* harmony import */ var ant_design_vue_es_dropdown_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ant-design-vue/es/dropdown/style */ "./node_modules/ant-design-vue/es/dropdown/style/index.js");
/* harmony import */ var ant_design_vue_es_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ant-design-vue/es/dropdown */ "./node_modules/ant-design-vue/es/dropdown/index.js");




window.Vue.use(ant_design_vue_es_dropdown__WEBPACK_IMPORTED_MODULE_3__["default"]);
window.Vue.use(ant_design_vue_es_avatar__WEBPACK_IMPORTED_MODULE_1__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    user: Object
  },
  data: function data() {
    return {};
  },
  methods: {
    logout: function logout() {
      this.$auth.logout();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es7.array.includes */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.string.includes */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ant_design_vue_es_icon_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ant-design-vue/es/icon/style */ "./node_modules/ant-design-vue/es/icon/style/index.js");
/* harmony import */ var ant_design_vue_es_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ant-design-vue/es/icon */ "./node_modules/ant-design-vue/es/icon/index.js");
/* harmony import */ var ant_design_vue_es_menu_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ant-design-vue/es/menu/style */ "./node_modules/ant-design-vue/es/menu/style/index.js");
/* harmony import */ var ant_design_vue_es_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ant-design-vue/es/menu */ "./node_modules/ant-design-vue/es/menu/index.js");
/* harmony import */ var _ProfileMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProfileMenu */ "./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue");







window.Vue.use(ant_design_vue_es_menu__WEBPACK_IMPORTED_MODULE_5__["default"]);
window.Vue.use(ant_design_vue_es_icon__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'menu-header',
  components: {
    CuiProfileMenu: _ProfileMenu__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  props: {
    user: Object,
    collapsed: false
  },
  data: function data() {
    return {
      selectedKeys: [],
      current: ['home'],
      currentLocation: location.pathname
    };
  },
  methods: {
    handleClick: function handleClick(e) {},
    getCurrentActiveMenu: function getCurrentActiveMenu() {
      if (this.currentLocation == '/admin') {
        this.current = ['home'];
      }

      if (this.currentLocation.includes('category')) {
        this.current = ['category'];
      }

      if (this.currentLocation.includes('product')) {
        this.current = ['product'];
      }
    }
  },
  created: function created() {
    this.getCurrentActiveMenu();
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/_fails-is-regexp.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_fails-is-regexp.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-regexp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-regexp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var MATCH = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-context.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_string-context.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(/*! ./_is-regexp */ "./node_modules/core-js/modules/_is-regexp.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.includes.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.includes.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var context = __webpack_require__(/*! ./_string-context */ "./node_modules/core-js/modules/_string-context.js");
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(/*! ./_fails-is-regexp */ "./node_modules/core-js/modules/_fails-is-regexp.js")(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.array.includes.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.array.includes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $includes = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js")('includes');


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n#components-layout-demo-custom-trigger .trigger {\n  font-size: 18px;\n  line-height: 64px;\n  padding: 0 24px;\n  cursor: pointer;\n  transition: color 0.3s;\n}\n#components-layout-demo-custom-trigger .trigger:hover {\n  color: #1890ff;\n}\n#components-layout-demo-custom-trigger .logo {\n  height: 32px;\n  background: #fff;\n  margin: 16px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=style&index=0&lang=scss&module=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=style&index=0&lang=scss&module=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".dropdown_2P_Ou {\n  position: absolute;\n  top: 0px;\n  right: 25px;\n}\n.dropdown_2P_Ou::after {\n    color: #d2d9e5;\n    position: absolute;\n    top: 50%;\n    right: -15px;\n    margin-top: -2px;\n    display: inline-block;\n    width: 0;\n    height: 0;\n    margin-left: 0.255em;\n    vertical-align: 0.255em;\n    content: '';\n    border-top: 0.3em solid;\n    border-right: 0.3em solid transparent;\n    border-bottom: 0;\n    border-left: 0.3em solid transparent;\n    transition: all 0.2s ease-in-out;\n}\n.dropdown_2P_Ou:hover {\n    color: #08f;\n}\n.dropdown_2P_Ou:hover::after {\n      color: #b8beca;\n}\n.avatar_1qmRM {\n  background-color: #e4e9f0;\n}\n.menuIcon_Iym1S {\n  margin-right: 0.38rem;\n}\n", ""]);

// Exports
exports.locals = {
	"dropdown": "dropdown_2P_Ou",
	"avatar": "avatar_1qmRM",
	"menuIcon": "menuIcon_Iym1S"
};

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--5-oneOf-1-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=template&id=7e10df8c&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=template&id=7e10df8c& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a-dropdown",
    { attrs: { trigger: ["click"], placement: "bottomLeft" } },
    [
      _c(
        "div",
        { class: _vm.$style.dropdown },
        [
          _c("a-avatar", {
            class: _vm.$style.avatar,
            attrs: { shape: "square", icon: "user", size: "default" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "a-menu",
        { attrs: { slot: "overlay" }, slot: "overlay" },
        [
          _c("a-menu-item", [
            _c("div", [
              _c("strong", [_vm._v("Hello : " + _vm._s(_vm.user.full_name))])
            ]),
            _vm._v(" "),
            _c("div", [
              _c("strong", { staticClass: "mr-1" }, [_vm._v("Role:")]),
              _vm._v(" " + _vm._s(_vm.user.roles[0].name) + "\n      ")
            ])
          ]),
          _vm._v(" "),
          _c("a-menu-divider"),
          _vm._v(" "),
          _c("a-menu-item", [
            _c("div", [
              _c("strong", { staticClass: "mr-1" }, [_vm._v("Email:")]),
              _vm._v(" " + _vm._s(_vm.user.email) + "\n      ")
            ])
          ]),
          _vm._v(" "),
          _c("a-menu-divider"),
          _vm._v(" "),
          _c("a-menu-item", [
            _c("a", { attrs: { href: "/account" } }, [
              _c("i", { staticClass: "icmn-user", class: _vm.$style.menuIcon }),
              _vm._v(" Edit Profile\n      ")
            ])
          ]),
          _vm._v(" "),
          _c("a-menu-item", [
            _c("a", { attrs: { href: "/logout" }, on: { click: _vm.logout } }, [
              _c("i", { staticClass: "icmn-exit", class: _vm.$style.menuIcon }),
              _vm._v(" Logout\n      ")
            ])
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=template&id=52658181&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=template&id=52658181& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a-layout",
    { attrs: { id: "components-layout-demo-custom-trigger" } },
    [
      _c(
        "a-layout-sider",
        {
          attrs: { trigger: null, collapsible: "" },
          model: {
            value: _vm.collapsed,
            callback: function($$v) {
              _vm.collapsed = $$v
            },
            expression: "collapsed"
          }
        },
        [
          _c("div", { staticClass: "logo" }, [
            _c("img", {
              staticStyle: { height: "32px", padding: "2px 0px 2px 33px" },
              attrs: { src: "/img/backend/brand/logo.svg" }
            })
          ]),
          _vm._v(" "),
          _c(
            "a-menu",
            {
              attrs: {
                theme: "dark",
                mode: "inline",
                selectedKeys: _vm.selectedKeys
              },
              on: { click: _vm.handleClick },
              model: {
                value: _vm.current,
                callback: function($$v) {
                  _vm.current = $$v
                },
                expression: "current"
              }
            },
            [
              _c("a-menu-item", { key: "category" }, [
                _c(
                  "a",
                  { attrs: { href: "/admin/category" } },
                  [
                    _c("a-icon", { attrs: { type: "setting" } }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Category")])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("a-menu-item", { key: "product" }, [
                _c(
                  "a",
                  { attrs: { href: "/admin/product" } },
                  [
                    _c("a-icon", { attrs: { type: "setting" } }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Products")])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "a-menu-item",
                { key: "3" },
                [
                  _c("a-icon", { attrs: { type: "upload" } }),
                  _vm._v(" "),
                  _c("span", [_vm._v("nav 3")])
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "a-layout",
        [
          _c(
            "a-layout-header",
            { staticStyle: { background: "#fff", padding: "0" } },
            [_c("cui-profile-menu", { attrs: { user: _vm.user } })],
            1
          ),
          _vm._v(" "),
          _c("a-layout-content", [_vm._t("default")], 2)
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=style&index=0&lang=scss&module=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=style&index=0&lang=scss&module=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss&module=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=style&index=0&lang=scss&module=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("41731ad4", content, false, {});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue":
/*!********************************************************************************************!*\
  !*** ./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _index_vue_vue_type_template_id_7e10df8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=7e10df8c& */ "./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=template&id=7e10df8c&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss&module=true& */ "./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=style&index=0&lang=scss&module=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





var cssModules = {}
var disposed = false

function injectStyles (context) {
  if (disposed) return
  
        cssModules["$style"] = (_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_2__["default"].locals || _index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_2__["default"])
        Object.defineProperty(this, "$style", {
          configurable: true,
          get: function () {
            return cssModules["$style"]
          }
        })
      
}


  module.hot && false



        module.hot && false

/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_7e10df8c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_7e10df8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=style&index=0&lang=scss&module=true&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=style&index=0&lang=scss&module=true& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-style-loader!../../../../../../../../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-0-1!../../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/sass-loader/dist/cjs.js!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss&module=true& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=style&index=0&lang=scss&module=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_0_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_dist_cjs_js_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss_module_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=template&id=7e10df8c&":
/*!***************************************************************************************************************************!*\
  !*** ./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=template&id=7e10df8c& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7e10df8c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=7e10df8c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/LayoutComponents/Menu/Header/ProfileMenu/index.vue?vue&type=template&id=7e10df8c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7e10df8c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_7e10df8c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue":
/*!********************************************************************************!*\
  !*** ./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_52658181___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=52658181& */ "./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=template&id=52658181&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=css& */ "./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_52658181___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_52658181___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/backend/components/LayoutComponents/Menu/Header/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--5-oneOf-1-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=template&id=52658181&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=template&id=52658181& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_52658181___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=52658181& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/backend/components/LayoutComponents/Menu/Header/index.vue?vue&type=template&id=52658181&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_52658181___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_52658181___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9MYXlvdXRDb21wb25lbnRzL01lbnUvSGVhZGVyL1Byb2ZpbGVNZW51L2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9MYXlvdXRDb21wb25lbnRzL01lbnUvSGVhZGVyL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19mYWlscy1pcy1yZWdleHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXMtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1jb250ZXh0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNy5hcnJheS5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL0xheW91dENvbXBvbmVudHMvTWVudS9IZWFkZXIvaW5kZXgudnVlP2YxMDgiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9MYXlvdXRDb21wb25lbnRzL01lbnUvSGVhZGVyL1Byb2ZpbGVNZW51L2luZGV4LnZ1ZT9mZTljIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvTGF5b3V0Q29tcG9uZW50cy9NZW51L0hlYWRlci9pbmRleC52dWU/ZWQ2YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL0xheW91dENvbXBvbmVudHMvTWVudS9IZWFkZXIvUHJvZmlsZU1lbnUvaW5kZXgudnVlP2NkYTEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9MYXlvdXRDb21wb25lbnRzL01lbnUvSGVhZGVyL2luZGV4LnZ1ZT81NGM1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvTGF5b3V0Q29tcG9uZW50cy9NZW51L0hlYWRlci9Qcm9maWxlTWVudS9pbmRleC52dWU/Nzk2OSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL0xheW91dENvbXBvbmVudHMvTWVudS9IZWFkZXIvUHJvZmlsZU1lbnUvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvTGF5b3V0Q29tcG9uZW50cy9NZW51L0hlYWRlci9Qcm9maWxlTWVudS9pbmRleC52dWU/ZWI4ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL0xheW91dENvbXBvbmVudHMvTWVudS9IZWFkZXIvUHJvZmlsZU1lbnUvaW5kZXgudnVlPzE2ODMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9MYXlvdXRDb21wb25lbnRzL01lbnUvSGVhZGVyL1Byb2ZpbGVNZW51L2luZGV4LnZ1ZT84MmM2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvTGF5b3V0Q29tcG9uZW50cy9NZW51L0hlYWRlci9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2pzL2JhY2tlbmQvY29tcG9uZW50cy9MYXlvdXRDb21wb25lbnRzL01lbnUvSGVhZGVyL2luZGV4LnZ1ZT80OGMwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvTGF5b3V0Q29tcG9uZW50cy9NZW51L0hlYWRlci9pbmRleC52dWU/Y2ZkYiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL0xheW91dENvbXBvbmVudHMvTWVudS9IZWFkZXIvaW5kZXgudnVlPzZmM2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREEsR0FEQTtBQUlBO0FBQ0E7QUFFQSxHQVBBO0FBUUE7QUFDQSxVQURBLG9CQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUkEsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EscUJBREE7QUFFQTtBQUFBO0FBQUEsR0FGQTtBQUdBO0FBQ0EsZ0JBREE7QUFFQTtBQUZBLEdBSEE7QUFPQSxNQVBBLGtCQU9BO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLHVCQUZBO0FBR0E7QUFIQTtBQUtBLEdBYkE7QUFjQTtBQUNBLGVBREEsdUJBQ0EsQ0FEQSxFQUNBLENBQ0EsQ0FGQTtBQUdBLHdCQUhBLGtDQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBLEdBZEE7QUE2QkEsU0E3QkEscUJBNkJBO0FBQ0E7QUFDQTtBQS9CQSxHOzs7Ozs7Ozs7OztBQ3pDQSxZQUFZLG1CQUFPLENBQUMsc0RBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsS0FBSyxZQUFZO0FBQ2pCLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDWEE7QUFDQSxlQUFlLG1CQUFPLENBQUMsa0VBQWM7QUFDckMsVUFBVSxtQkFBTyxDQUFDLHNEQUFRO0FBQzFCLFlBQVksbUJBQU8sQ0FBQyxzREFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUEEsc0JBQXNCO0FBQ3RCLGVBQWUsbUJBQU8sQ0FBQyxrRUFBYztBQUNyQyxjQUFjLG1CQUFPLENBQUMsOERBQVk7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFDYTtB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Wjs7OztBQUlKLHNCQUFzQixLQVNaOztBQUVWO0FBQzRHO0FBQzVHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7Ozs7QUN4RWY7QUFBQTtBQUFBLHdDQUFtTixDQUFnQixpUEFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F2TztBQUFBO0FBQUE7QUFBQTtBQUF3YixDQUFnQiw2WUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E1YztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW9GO0FBQzNCO0FBQ0w7QUFDYTs7O0FBR2pFO0FBQ3lHO0FBQ3pHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSxnRkFBTTtBQUNSLEVBQUUseUZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTZNLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWpPO0FBQUE7QUFBQTtBQUFBO0FBQThhLENBQWdCLGdaQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWxjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvY3VpLW1lbnUtaGVhZGVyLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8YS1kcm9wZG93biA6dHJpZ2dlcj1cIlsnY2xpY2snXVwiIHBsYWNlbWVudD1cImJvdHRvbUxlZnRcIj5cbiAgICA8ZGl2IDpjbGFzcz1cIiRzdHlsZS5kcm9wZG93blwiPlxuICAgICAgPGEtYXZhdGFyIHNoYXBlPVwic3F1YXJlXCIgaWNvbj1cInVzZXJcIiBzaXplPVwiZGVmYXVsdFwiIDpjbGFzcz1cIiRzdHlsZS5hdmF0YXJcIi8+XG4gICAgPC9kaXY+XG4gICAgPGEtbWVudSBzbG90PVwib3ZlcmxheVwiPlxuICAgICAgPGEtbWVudS1pdGVtPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdHJvbmc+SGVsbG8gOiB7eyB1c2VyLmZ1bGxfbmFtZSB9fTwvc3Ryb25nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8c3Ryb25nIGNsYXNzPVwibXItMVwiPlJvbGU6PC9zdHJvbmc+IHt7IHVzZXIucm9sZXNbMF0ubmFtZSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvYS1tZW51LWl0ZW0+XG4gICAgICA8YS1tZW51LWRpdmlkZXIvPlxuICAgICAgPGEtbWVudS1pdGVtPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxzdHJvbmcgY2xhc3M9XCJtci0xXCI+RW1haWw6PC9zdHJvbmc+IHt7IHVzZXIuZW1haWwgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2EtbWVudS1pdGVtPlxuICAgICAgPGEtbWVudS1kaXZpZGVyLz5cbiAgICAgIDxhLW1lbnUtaXRlbT5cbiAgICAgICAgPGEgaHJlZj1cIi9hY2NvdW50XCI+XG4gICAgICAgICAgPGkgOmNsYXNzPVwiJHN0eWxlLm1lbnVJY29uXCIgY2xhc3M9XCJpY21uLXVzZXJcIj48L2k+IEVkaXQgUHJvZmlsZVxuICAgICAgICA8L2E+XG4gICAgICA8L2EtbWVudS1pdGVtPlxuICAgICAgPGEtbWVudS1pdGVtPlxuICAgICAgICA8YSBocmVmPVwiL2xvZ291dFwiIEBjbGljaz1cImxvZ291dFwiPlxuICAgICAgICAgIDxpIDpjbGFzcz1cIiRzdHlsZS5tZW51SWNvblwiIGNsYXNzPVwiaWNtbi1leGl0XCI+PC9pPiBMb2dvdXRcbiAgICAgICAgPC9hPlxuICAgICAgPC9hLW1lbnUtaXRlbT5cbiAgICA8L2EtbWVudT5cbiAgPC9hLWRyb3Bkb3duPlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7IERyb3Bkb3duLCBBdmF0YXIgfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSdcbndpbmRvdy5WdWUudXNlKERyb3Bkb3duKVxud2luZG93LlZ1ZS51c2UoQXZhdGFyKVxuZXhwb3J0IGRlZmF1bHQge1xuICBwcm9wczoge1xuICAgIHVzZXI6IE9iamVjdFxuICB9LFxuICBkYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHtcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBsb2dvdXQoKSB7XG4gICAgICB0aGlzLiRhdXRoLmxvZ291dCgpXG4gICAgfSxcbiAgfSxcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBtb2R1bGU+XG5AaW1wb3J0IFwiLi9zdHlsZS5tb2R1bGUuc2Nzc1wiO1xuPC9zdHlsZT5cbiIsIjx0ZW1wbGF0ZT5cbiAgPGEtbGF5b3V0IGlkPVwiY29tcG9uZW50cy1sYXlvdXQtZGVtby1jdXN0b20tdHJpZ2dlclwiPlxuICAgIDxhLWxheW91dC1zaWRlciA6dHJpZ2dlcj1cIm51bGxcIiBjb2xsYXBzaWJsZSB2LW1vZGVsPVwiY29sbGFwc2VkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwibG9nb1wiPlxuICAgICAgICA8aW1nIHNyYz1cIi9pbWcvYmFja2VuZC9icmFuZC9sb2dvLnN2Z1wiIHN0eWxlPVwiaGVpZ2h0OiAzMnB4OyBwYWRkaW5nOiAycHggMHB4IDJweCAzM3B4XCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxhLW1lbnUgdGhlbWU9XCJkYXJrXCIgbW9kZT1cImlubGluZVwiIEBjbGljaz1cImhhbmRsZUNsaWNrXCIgOnNlbGVjdGVkS2V5cz1cInNlbGVjdGVkS2V5c1wiIHYtbW9kZWw9XCJjdXJyZW50XCI+XG4gICAgICAgIDxhLW1lbnUtaXRlbSA6a2V5PVwiJ2NhdGVnb3J5J1wiPlxuICAgICAgICAgICA8YSBocmVmPVwiL2FkbWluL2NhdGVnb3J5XCI+XG4gICAgICAgICAgICA8YS1pY29uIHR5cGU9XCJzZXR0aW5nXCIgLz5cbiAgICAgICAgICAgICAgPHNwYW4+Q2F0ZWdvcnk8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2EtbWVudS1pdGVtPlxuICAgICAgICA8YS1tZW51LWl0ZW0gOmtleT1cIidwcm9kdWN0J1wiPlxuICAgICAgICAgIDxhIGhyZWY9XCIvYWRtaW4vcHJvZHVjdFwiPlxuICAgICAgICAgICAgPGEtaWNvbiB0eXBlPVwic2V0dGluZ1wiIC8+XG4gICAgICAgICAgICAgIDxzcGFuPlByb2R1Y3RzPC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9hLW1lbnUtaXRlbT5cbiAgICAgICAgPGEtbWVudS1pdGVtIGtleT1cIjNcIj5cbiAgICAgICAgICA8YS1pY29uIHR5cGU9XCJ1cGxvYWRcIiAvPlxuICAgICAgICAgIDxzcGFuPm5hdiAzPC9zcGFuPlxuICAgICAgICA8L2EtbWVudS1pdGVtPlxuICAgICAgPC9hLW1lbnU+XG4gICAgPC9hLWxheW91dC1zaWRlcj5cbiAgICA8YS1sYXlvdXQ+XG4gICAgICA8YS1sYXlvdXQtaGVhZGVyIHN0eWxlPVwiYmFja2dyb3VuZDogI2ZmZjsgcGFkZGluZzogMFwiPlxuICAgICAgICA8Y3VpLXByb2ZpbGUtbWVudSA6dXNlcj1cInVzZXJcIi8+ICBcbiAgICAgIDwvYS1sYXlvdXQtaGVhZGVyPlxuICAgICAgPGEtbGF5b3V0LWNvbnRlbnQ+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvYS1sYXlvdXQtY29udGVudD5cbiAgICA8L2EtbGF5b3V0PlxuICA8L2EtbGF5b3V0PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG4gIGltcG9ydCB7IE1lbnUsIEljb24gfSBmcm9tICdhbnQtZGVzaWduLXZ1ZSdcbiAgaW1wb3J0IEN1aVByb2ZpbGVNZW51IGZyb20gJy4vUHJvZmlsZU1lbnUnXG4gIHdpbmRvdy5WdWUudXNlKE1lbnUpXG4gIHdpbmRvdy5WdWUudXNlKEljb24pXG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdtZW51LWhlYWRlcicsXG4gICAgY29tcG9uZW50czoge0N1aVByb2ZpbGVNZW51fSxcbiAgICBwcm9wczoge1xuICAgICAgICB1c2VyOiBPYmplY3QsXG4gICAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2VsZWN0ZWRLZXlzOiBbXSxcbiAgICAgICAgY3VycmVudDogWydob21lJ10sXG4gICAgICAgIGN1cnJlbnRMb2NhdGlvbjogbG9jYXRpb24ucGF0aG5hbWVcbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGhhbmRsZUNsaWNrKGUpIHtcbiAgICAgIH0sXG4gICAgICBnZXRDdXJyZW50QWN0aXZlTWVudSgpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvY2F0aW9uID09ICcvYWRtaW4nKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50ID0gWydob21lJ107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY3VycmVudExvY2F0aW9uLmluY2x1ZGVzKCdjYXRlZ29yeScpKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50ID0gWydjYXRlZ29yeSddO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRMb2NhdGlvbi5pbmNsdWRlcygncHJvZHVjdCcpKSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50ID0gWydwcm9kdWN0J107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICB0aGlzLmdldEN1cnJlbnRBY3RpdmVNZW51KCk7XG4gICAgfSxcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgI2NvbXBvbmVudHMtbGF5b3V0LWRlbW8tY3VzdG9tLXRyaWdnZXIgLnRyaWdnZXIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICBwYWRkaW5nOiAwIDI0cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XG4gIH1cblxuICAjY29tcG9uZW50cy1sYXlvdXQtZGVtby1jdXN0b20tdHJpZ2dlciAudHJpZ2dlcjpob3ZlciB7XG4gICAgY29sb3I6ICMxODkwZmY7XG4gIH1cblxuICAjY29tcG9uZW50cy1sYXlvdXQtZGVtby1jdXN0b20tdHJpZ2dlciAubG9nbyB7XG4gICAgaGVpZ2h0OiAzMnB4O1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgbWFyZ2luOiAxNnB4O1xuICB9XG48L3N0eWxlPlxuIiwidmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIHJlID0gLy4vO1xuICB0cnkge1xuICAgICcvLi8nW0tFWV0ocmUpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJlW01BVENIXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuICEnLy4vJ1tLRVldKHJlKTtcbiAgICB9IGNhdGNoIChmKSB7IC8qIGVtcHR5ICovIH1cbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG4iLCIvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIE1BVENIID0gcmVxdWlyZSgnLi9fd2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG4iLCIvLyBoZWxwZXIgZm9yIFN0cmluZyN7c3RhcnRzV2l0aCwgZW5kc1dpdGgsIGluY2x1ZGVzfVxudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi9faXMtcmVnZXhwJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGhhdCwgc2VhcmNoU3RyaW5nLCBOQU1FKSB7XG4gIGlmIChpc1JlZ0V4cChzZWFyY2hTdHJpbmcpKSB0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZyMnICsgTkFNRSArIFwiIGRvZXNuJ3QgYWNjZXB0IHJlZ2V4IVwiKTtcbiAgcmV0dXJuIFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbn07XG4iLCIvLyAyMS4xLjMuNyBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzKHNlYXJjaFN0cmluZywgcG9zaXRpb24gPSAwKVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb250ZXh0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWNvbnRleHQnKTtcbnZhciBJTkNMVURFUyA9ICdpbmNsdWRlcyc7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi9fZmFpbHMtaXMtcmVnZXhwJykoSU5DTFVERVMpLCAnU3RyaW5nJywge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoU3RyaW5nIC8qICwgcG9zaXRpb24gPSAwICovKSB7XG4gICAgcmV0dXJuICEhfmNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBJTkNMVURFUylcbiAgICAgIC5pbmRleE9mKHNlYXJjaFN0cmluZywgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L0FycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciAkaW5jbHVkZXMgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxucmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJykoJ2luY2x1ZGVzJyk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbiNjb21wb25lbnRzLWxheW91dC1kZW1vLWN1c3RvbS10cmlnZ2VyIC50cmlnZ2VyIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xcbiAgcGFkZGluZzogMCAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcXG59XFxuI2NvbXBvbmVudHMtbGF5b3V0LWRlbW8tY3VzdG9tLXRyaWdnZXIgLnRyaWdnZXI6aG92ZXIge1xcbiAgY29sb3I6ICMxODkwZmY7XFxufVxcbiNjb21wb25lbnRzLWxheW91dC1kZW1vLWN1c3RvbS10cmlnZ2VyIC5sb2dvIHtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBtYXJnaW46IDE2cHg7XFxufVxcblwiLCBcIlwiXSk7XG5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmRyb3Bkb3duXzJQX091IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgcmlnaHQ6IDI1cHg7XFxufVxcbi5kcm9wZG93bl8yUF9PdTo6YWZ0ZXIge1xcbiAgICBjb2xvcjogI2QyZDllNTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgcmlnaHQ6IC0xNXB4O1xcbiAgICBtYXJnaW4tdG9wOiAtMnB4O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAwO1xcbiAgICBoZWlnaHQ6IDA7XFxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1NWVtO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogMC4yNTVlbTtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGJvcmRlci10b3A6IDAuM2VtIHNvbGlkO1xcbiAgICBib3JkZXItcmlnaHQ6IDAuM2VtIHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItYm90dG9tOiAwO1xcbiAgICBib3JkZXItbGVmdDogMC4zZW0gc29saWQgdHJhbnNwYXJlbnQ7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xcbn1cXG4uZHJvcGRvd25fMlBfT3U6aG92ZXIge1xcbiAgICBjb2xvcjogIzA4ZjtcXG59XFxuLmRyb3Bkb3duXzJQX091OmhvdmVyOjphZnRlciB7XFxuICAgICAgY29sb3I6ICNiOGJlY2E7XFxufVxcbi5hdmF0YXJfMXFtUk0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTlmMDtcXG59XFxuLm1lbnVJY29uX0l5bTFTIHtcXG4gIG1hcmdpbi1yaWdodDogMC4zOHJlbTtcXG59XFxuXCIsIFwiXCJdKTtcblxuLy8gRXhwb3J0c1xuZXhwb3J0cy5sb2NhbHMgPSB7XG5cdFwiZHJvcGRvd25cIjogXCJkcm9wZG93bl8yUF9PdVwiLFxuXHRcImF2YXRhclwiOiBcImF2YXRhcl8xcW1STVwiLFxuXHRcIm1lbnVJY29uXCI6IFwibWVudUljb25fSXltMVNcIlxufTsiLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiYS1kcm9wZG93blwiLFxuICAgIHsgYXR0cnM6IHsgdHJpZ2dlcjogW1wiY2xpY2tcIl0sIHBsYWNlbWVudDogXCJib3R0b21MZWZ0XCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IGNsYXNzOiBfdm0uJHN0eWxlLmRyb3Bkb3duIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImEtYXZhdGFyXCIsIHtcbiAgICAgICAgICAgIGNsYXNzOiBfdm0uJHN0eWxlLmF2YXRhcixcbiAgICAgICAgICAgIGF0dHJzOiB7IHNoYXBlOiBcInNxdWFyZVwiLCBpY29uOiBcInVzZXJcIiwgc2l6ZTogXCJkZWZhdWx0XCIgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYS1tZW51XCIsXG4gICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJvdmVybGF5XCIgfSwgc2xvdDogXCJvdmVybGF5XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiYS1tZW51LWl0ZW1cIiwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICBfYyhcInN0cm9uZ1wiLCBbX3ZtLl92KFwiSGVsbG8gOiBcIiArIF92bS5fcyhfdm0udXNlci5mdWxsX25hbWUpKV0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgIF9jKFwic3Ryb25nXCIsIHsgc3RhdGljQ2xhc3M6IFwibXItMVwiIH0sIFtfdm0uX3YoXCJSb2xlOlwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnVzZXIucm9sZXNbMF0ubmFtZSkgKyBcIlxcbiAgICAgIFwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYS1tZW51LWRpdmlkZXJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImEtbWVudS1pdGVtXCIsIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJzdHJvbmdcIiwgeyBzdGF0aWNDbGFzczogXCJtci0xXCIgfSwgW192bS5fdihcIkVtYWlsOlwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnVzZXIuZW1haWwpICsgXCJcXG4gICAgICBcIilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImEtbWVudS1kaXZpZGVyXCIpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJhLW1lbnUtaXRlbVwiLCBbXG4gICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIi9hY2NvdW50XCIgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImljbW4tdXNlclwiLCBjbGFzczogX3ZtLiRzdHlsZS5tZW51SWNvbiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIEVkaXQgUHJvZmlsZVxcbiAgICAgIFwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYS1tZW51LWl0ZW1cIiwgW1xuICAgICAgICAgICAgX2MoXCJhXCIsIHsgYXR0cnM6IHsgaHJlZjogXCIvbG9nb3V0XCIgfSwgb246IHsgY2xpY2s6IF92bS5sb2dvdXQgfSB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImljbW4tZXhpdFwiLCBjbGFzczogX3ZtLiRzdHlsZS5tZW51SWNvbiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIExvZ291dFxcbiAgICAgIFwiKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiYS1sYXlvdXRcIixcbiAgICB7IGF0dHJzOiB7IGlkOiBcImNvbXBvbmVudHMtbGF5b3V0LWRlbW8tY3VzdG9tLXRyaWdnZXJcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYS1sYXlvdXQtc2lkZXJcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IHRyaWdnZXI6IG51bGwsIGNvbGxhcHNpYmxlOiBcIlwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uY29sbGFwc2VkLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICBfdm0uY29sbGFwc2VkID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb2xsYXBzZWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nb1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjMycHhcIiwgcGFkZGluZzogXCIycHggMHB4IDJweCAzM3B4XCIgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiBcIi9pbWcvYmFja2VuZC9icmFuZC9sb2dvLnN2Z1wiIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYS1tZW51XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgdGhlbWU6IFwiZGFya1wiLFxuICAgICAgICAgICAgICAgIG1vZGU6IFwiaW5saW5lXCIsXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRLZXlzOiBfdm0uc2VsZWN0ZWRLZXlzXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uaGFuZGxlQ2xpY2sgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmN1cnJlbnQsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnQgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY3VycmVudFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiYS1tZW51LWl0ZW1cIiwgeyBrZXk6IFwiY2F0ZWdvcnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaHJlZjogXCIvYWRtaW4vY2F0ZWdvcnlcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYS1pY29uXCIsIHsgYXR0cnM6IHsgdHlwZTogXCJzZXR0aW5nXCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJDYXRlZ29yeVwiKV0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiYS1tZW51LWl0ZW1cIiwgeyBrZXk6IFwicHJvZHVjdFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBcIi9hZG1pbi9wcm9kdWN0XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImEtaWNvblwiLCB7IGF0dHJzOiB7IHR5cGU6IFwic2V0dGluZ1wiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwiUHJvZHVjdHNcIildKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImEtbWVudS1pdGVtXCIsXG4gICAgICAgICAgICAgICAgeyBrZXk6IFwiM1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJhLWljb25cIiwgeyBhdHRyczogeyB0eXBlOiBcInVwbG9hZFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJuYXYgM1wiKV0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImEtbGF5b3V0XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYS1sYXlvdXQtaGVhZGVyXCIsXG4gICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwiI2ZmZlwiLCBwYWRkaW5nOiBcIjBcIiB9IH0sXG4gICAgICAgICAgICBbX2MoXCJjdWktcHJvZmlsZS1tZW51XCIsIHsgYXR0cnM6IHsgdXNlcjogX3ZtLnVzZXIgfSB9KV0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYS1sYXlvdXQtY29udGVudFwiLCBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sIDIpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1vZHVsZT10cnVlJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0MTczMWFkNFwiLCBjb250ZW50LCBmYWxzZSwge30pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZtb2R1bGU9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNi1vbmVPZi0wLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZtb2R1bGU9dHJ1ZSZcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdlMTBkZjhjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZtb2R1bGU9dHJ1ZSZcIlxuXG52YXIgY3NzTW9kdWxlcyA9IHt9XG52YXIgZGlzcG9zZWQgPSBmYWxzZVxuXG5mdW5jdGlvbiBpbmplY3RTdHlsZXMgKGNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgXG4gICAgICAgIGNzc01vZHVsZXNbXCIkc3R5bGVcIl0gPSAoc3R5bGUwLmxvY2FscyB8fCBzdHlsZTApXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCBcIiRzdHlsZVwiLCB7XG4gICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGNzc01vZHVsZXNbXCIkc3R5bGVcIl1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICBcbn1cblxuXG4gIG1vZHVsZS5ob3QgJiYgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG5cblxuXG4gICAgICAgIG1vZHVsZS5ob3QgJiYgbW9kdWxlLmhvdC5hY2NlcHQoW1wiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmbW9kdWxlPXRydWUmXCJdLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdmFyIG9sZExvY2FscyA9IGNzc01vZHVsZXNbXCIkc3R5bGVcIl1cbiAgICAgICAgICBpZiAob2xkTG9jYWxzKSB7XG4gICAgICAgICAgICB2YXIgbmV3TG9jYWxzID0gcmVxdWlyZShcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1vZHVsZT10cnVlJlwiKVxuICAgICAgICAgICAgaWYgKEpTT04uc3RyaW5naWZ5KG5ld0xvY2FscykgIT09IEpTT04uc3RyaW5naWZ5KG9sZExvY2FscykpIHtcbiAgICAgICAgICAgICAgY3NzTW9kdWxlc1tcIiRzdHlsZVwiXSA9IG5ld0xvY2Fsc1xuICAgICAgICAgICAgICByZXF1aXJlKFwiL3ByaXZhdGUvdmFyL3d3dy9qcHVuLXNob3Avbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpLnJlcmVuZGVyKFwiN2UxMGRmOGNcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIGluamVjdFN0eWxlcyxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvcHJpdmF0ZS92YXIvd3d3L2pwdW4tc2hvcC9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3ZTEwZGY4YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3ZTEwZGY4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3ZTEwZGY4YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdlMTBkZjhjJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzdlMTBkZjhjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvanMvYmFja2VuZC9jb21wb25lbnRzL0xheW91dENvbXBvbmVudHMvTWVudS9IZWFkZXIvUHJvZmlsZU1lbnUvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LW9uZU9mLTAtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJm1vZHVsZT10cnVlJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTYtb25lT2YtMC0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmbW9kdWxlPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTdlMTBkZjhjJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTI2NTgxODEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9wcml2YXRlL3Zhci93d3cvanB1bi1zaG9wL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzUyNjU4MTgxJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUyNjU4MTgxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUyNjU4MTgxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTI2NTgxODEmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTI2NTgxODEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9iYWNrZW5kL2NvbXBvbmVudHMvTGF5b3V0Q29tcG9uZW50cy9NZW51L0hlYWRlci9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUyNjU4MTgxJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==