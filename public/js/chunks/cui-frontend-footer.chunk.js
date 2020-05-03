(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["js/chunks/cui-frontend-footer.chunk"],{

/***/ "./node_modules/ant-design-vue/es/card/Card.js":
/*!*****************************************************!*\
  !*** ./node_modules/ant-design-vue/es/card/Card.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-helper-vue-jsx-merge-props */ "./node_modules/babel-helper-vue-jsx-merge-props/index.js");
/* harmony import */ var babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var omit_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! omit.js */ "./node_modules/omit.js/es/index.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tabs */ "./node_modules/ant-design-vue/es/tabs/index.js");
/* harmony import */ var _row__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../row */ "./node_modules/ant-design-vue/es/row/index.js");
/* harmony import */ var _col__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../col */ "./node_modules/ant-design-vue/es/col/index.js");
/* harmony import */ var _util_vue_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_util/vue-types */ "./node_modules/ant-design-vue/es/_util/vue-types/index.js");
/* harmony import */ var _util_props_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_util/props-util */ "./node_modules/ant-design-vue/es/_util/props-util.js");
/* harmony import */ var _util_BaseMixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_util/BaseMixin */ "./node_modules/ant-design-vue/es/_util/BaseMixin.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config-provider */ "./node_modules/ant-design-vue/es/config-provider/index.js");











var TabPane = _tabs__WEBPACK_IMPORTED_MODULE_3__["default"].TabPane;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ACard',
  mixins: [_util_BaseMixin__WEBPACK_IMPORTED_MODULE_8__["default"]],
  props: {
    prefixCls: _util_vue_types__WEBPACK_IMPORTED_MODULE_6__["default"].string,
    title: _util_vue_types__WEBPACK_IMPORTED_MODULE_6__["default"].any,
    extra: _util_vue_types__WEBPACK_IMPORTED_MODULE_6__["default"].any,
    bordered: _util_vue_types__WEBPACK_IMPORTED_MODULE_6__["default"].bool.def(true),
    bodyStyle: _util_vue_types__WEBPACK_IMPORTED_MODULE_6__["default"].object,
    headStyle: _util_vue_types__WEBPACK_IMPORTED_MODULE_6__["default"].object,
    loading: _util_vue_types__WEBPACK_IMPORTED_MODULE_6__["default"].bool.def(false),
    hoverable: _util_vue_types__WEBPACK_IMPORTED_MODULE_6__["default"].bool.def(false),
    type: _util_vue_types__WEBPACK_IMPORTED_MODULE_6__["default"].string,
    size: _util_vue_types__WEBPACK_IMPORTED_MODULE_6__["default"].oneOf(['default', 'small']),
    actions: _util_vue_types__WEBPACK_IMPORTED_MODULE_6__["default"].any,
    tabList: _util_vue_types__WEBPACK_IMPORTED_MODULE_6__["default"].array,
    tabBarExtraContent: _util_vue_types__WEBPACK_IMPORTED_MODULE_6__["default"].any,
    activeTabKey: _util_vue_types__WEBPACK_IMPORTED_MODULE_6__["default"].string,
    defaultActiveTabKey: _util_vue_types__WEBPACK_IMPORTED_MODULE_6__["default"].string
  },
  inject: {
    configProvider: { 'default': function _default() {
        return _config_provider__WEBPACK_IMPORTED_MODULE_9__["ConfigConsumerProps"];
      } }
  },
  data: function data() {
    return {
      widerPadding: false
    };
  },

  methods: {
    getAction: function getAction(actions) {
      var h = this.$createElement;

      var actionList = actions.map(function (action, index) {
        return h(
          'li',
          { style: { width: 100 / actions.length + '%' }, key: 'action-' + index },
          [h('span', [action])]
        );
      });
      return actionList;
    },
    onTabChange: function onTabChange(key) {
      this.$emit('tabChange', key);
    },
    isContainGrid: function isContainGrid() {
      var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      var containGrid = void 0;
      obj.forEach(function (element) {
        if (element && Object(_util_props_util__WEBPACK_IMPORTED_MODULE_7__["getSlotOptions"])(element).__ANT_CARD_GRID) {
          containGrid = true;
        }
      });
      return containGrid;
    }
  },
  render: function render() {
    var _classString, _props;

    var h = arguments[0];
    var _$props = this.$props,
        customizePrefixCls = _$props.prefixCls,
        _$props$headStyle = _$props.headStyle,
        headStyle = _$props$headStyle === undefined ? {} : _$props$headStyle,
        _$props$bodyStyle = _$props.bodyStyle,
        bodyStyle = _$props$bodyStyle === undefined ? {} : _$props$bodyStyle,
        loading = _$props.loading,
        _$props$bordered = _$props.bordered,
        bordered = _$props$bordered === undefined ? true : _$props$bordered,
        _$props$size = _$props.size,
        size = _$props$size === undefined ? 'default' : _$props$size,
        type = _$props.type,
        tabList = _$props.tabList,
        hoverable = _$props.hoverable,
        activeTabKey = _$props.activeTabKey,
        defaultActiveTabKey = _$props.defaultActiveTabKey;


    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('card', customizePrefixCls);

    var $slots = this.$slots,
        $scopedSlots = this.$scopedSlots;

    var tabBarExtraContent = Object(_util_props_util__WEBPACK_IMPORTED_MODULE_7__["getComponentFromProp"])(this, 'tabBarExtraContent');
    var classString = (_classString = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classString, '' + prefixCls, true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classString, prefixCls + '-loading', loading), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classString, prefixCls + '-bordered', bordered), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classString, prefixCls + '-hoverable', !!hoverable), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classString, prefixCls + '-contain-grid', this.isContainGrid($slots['default'])), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classString, prefixCls + '-contain-tabs', tabList && tabList.length), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classString, prefixCls + '-' + size, size !== 'default'), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classString, prefixCls + '-type-' + type, !!type), _classString);

    var loadingBlockStyle = bodyStyle.padding === 0 || bodyStyle.padding === '0px' ? { padding: 24 } : undefined;

    var loadingBlock = h(
      'div',
      { 'class': prefixCls + '-loading-content', style: loadingBlockStyle },
      [h(
        _row__WEBPACK_IMPORTED_MODULE_4__["default"],
        {
          attrs: { gutter: 8 }
        },
        [h(
          _col__WEBPACK_IMPORTED_MODULE_5__["default"],
          {
            attrs: { span: 22 }
          },
          [h('div', { 'class': prefixCls + '-loading-block' })]
        )]
      ), h(
        _row__WEBPACK_IMPORTED_MODULE_4__["default"],
        {
          attrs: { gutter: 8 }
        },
        [h(
          _col__WEBPACK_IMPORTED_MODULE_5__["default"],
          {
            attrs: { span: 8 }
          },
          [h('div', { 'class': prefixCls + '-loading-block' })]
        ), h(
          _col__WEBPACK_IMPORTED_MODULE_5__["default"],
          {
            attrs: { span: 15 }
          },
          [h('div', { 'class': prefixCls + '-loading-block' })]
        )]
      ), h(
        _row__WEBPACK_IMPORTED_MODULE_4__["default"],
        {
          attrs: { gutter: 8 }
        },
        [h(
          _col__WEBPACK_IMPORTED_MODULE_5__["default"],
          {
            attrs: { span: 6 }
          },
          [h('div', { 'class': prefixCls + '-loading-block' })]
        ), h(
          _col__WEBPACK_IMPORTED_MODULE_5__["default"],
          {
            attrs: { span: 18 }
          },
          [h('div', { 'class': prefixCls + '-loading-block' })]
        )]
      ), h(
        _row__WEBPACK_IMPORTED_MODULE_4__["default"],
        {
          attrs: { gutter: 8 }
        },
        [h(
          _col__WEBPACK_IMPORTED_MODULE_5__["default"],
          {
            attrs: { span: 13 }
          },
          [h('div', { 'class': prefixCls + '-loading-block' })]
        ), h(
          _col__WEBPACK_IMPORTED_MODULE_5__["default"],
          {
            attrs: { span: 9 }
          },
          [h('div', { 'class': prefixCls + '-loading-block' })]
        )]
      ), h(
        _row__WEBPACK_IMPORTED_MODULE_4__["default"],
        {
          attrs: { gutter: 8 }
        },
        [h(
          _col__WEBPACK_IMPORTED_MODULE_5__["default"],
          {
            attrs: { span: 4 }
          },
          [h('div', { 'class': prefixCls + '-loading-block' })]
        ), h(
          _col__WEBPACK_IMPORTED_MODULE_5__["default"],
          {
            attrs: { span: 3 }
          },
          [h('div', { 'class': prefixCls + '-loading-block' })]
        ), h(
          _col__WEBPACK_IMPORTED_MODULE_5__["default"],
          {
            attrs: { span: 16 }
          },
          [h('div', { 'class': prefixCls + '-loading-block' })]
        )]
      )]
    );

    var hasActiveTabKey = activeTabKey !== undefined;
    var tabsProps = {
      props: (_props = {
        size: 'large'
      }, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_props, hasActiveTabKey ? 'activeKey' : 'defaultActiveKey', hasActiveTabKey ? activeTabKey : defaultActiveTabKey), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_props, 'tabBarExtraContent', tabBarExtraContent), _props),
      on: {
        change: this.onTabChange
      },
      'class': prefixCls + '-head-tabs'
    };

    var head = void 0;
    var tabs = tabList && tabList.length ? h(
      _tabs__WEBPACK_IMPORTED_MODULE_3__["default"],
      tabsProps,
      [tabList.map(function (item) {
        var temp = item.tab,
            _item$scopedSlots = item.scopedSlots,
            scopedSlots = _item$scopedSlots === undefined ? {} : _item$scopedSlots;

        var name = scopedSlots.tab;
        var tab = temp !== undefined ? temp : $scopedSlots[name] ? $scopedSlots[name](item) : null;
        return h(TabPane, {
          attrs: { tab: tab, disabled: item.disabled },
          key: item.key });
      })]
    ) : null;
    var titleDom = Object(_util_props_util__WEBPACK_IMPORTED_MODULE_7__["getComponentFromProp"])(this, 'title');
    var extraDom = Object(_util_props_util__WEBPACK_IMPORTED_MODULE_7__["getComponentFromProp"])(this, 'extra');
    if (titleDom || extraDom || tabs) {
      head = h(
        'div',
        { 'class': prefixCls + '-head', style: headStyle },
        [h(
          'div',
          { 'class': prefixCls + '-head-wrapper' },
          [titleDom && h(
            'div',
            { 'class': prefixCls + '-head-title' },
            [titleDom]
          ), extraDom && h(
            'div',
            { 'class': prefixCls + '-extra' },
            [extraDom]
          )]
        ), tabs]
      );
    }

    var children = $slots['default'];
    var cover = Object(_util_props_util__WEBPACK_IMPORTED_MODULE_7__["getComponentFromProp"])(this, 'cover');
    var coverDom = cover ? h(
      'div',
      { 'class': prefixCls + '-cover' },
      [cover]
    ) : null;
    var body = h(
      'div',
      { 'class': prefixCls + '-body', style: bodyStyle },
      [loading ? loadingBlock : children]
    );
    var actions = Object(_util_props_util__WEBPACK_IMPORTED_MODULE_7__["filterEmpty"])(this.$slots.actions);
    var actionDom = actions && actions.length ? h(
      'ul',
      { 'class': prefixCls + '-actions' },
      [this.getAction(actions)]
    ) : null;

    return h(
      'div',
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
        'class': classString,
        ref: 'cardContainerRef'
      }, { on: Object(omit_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(_util_props_util__WEBPACK_IMPORTED_MODULE_7__["getListeners"])(this), ['tabChange', 'tab-change']) }]),
      [head, coverDom, children ? body : null, actionDom]
    );
  }
});

/***/ }),

/***/ "./node_modules/ant-design-vue/es/card/Grid.js":
/*!*****************************************************!*\
  !*** ./node_modules/ant-design-vue/es/card/Grid.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-helper-vue-jsx-merge-props */ "./node_modules/babel-helper-vue-jsx-merge-props/index.js");
/* harmony import */ var babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_vue_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_util/vue-types */ "./node_modules/ant-design-vue/es/_util/vue-types/index.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config-provider */ "./node_modules/ant-design-vue/es/config-provider/index.js");
/* harmony import */ var _util_props_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_util/props-util */ "./node_modules/ant-design-vue/es/_util/props-util.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ACardGrid',
  __ANT_CARD_GRID: true,
  props: {
    prefixCls: _util_vue_types__WEBPACK_IMPORTED_MODULE_2__["default"].string,
    hoverable: _util_vue_types__WEBPACK_IMPORTED_MODULE_2__["default"].bool
  },
  inject: {
    configProvider: { 'default': function _default() {
        return _config_provider__WEBPACK_IMPORTED_MODULE_3__["ConfigConsumerProps"];
      } }
  },
  render: function render() {
    var _classString;

    var h = arguments[0];
    var _$props = this.$props,
        customizePrefixCls = _$props.prefixCls,
        _$props$hoverable = _$props.hoverable,
        hoverable = _$props$hoverable === undefined ? true : _$props$hoverable;


    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('card', customizePrefixCls);

    var classString = (_classString = {}, babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classString, prefixCls + '-grid', true), babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(_classString, prefixCls + '-grid-hoverable', hoverable), _classString);
    return h(
      'div',
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{ on: Object(_util_props_util__WEBPACK_IMPORTED_MODULE_4__["getListeners"])(this) }, { 'class': classString }]),
      [this.$slots['default']]
    );
  }
});

/***/ }),

/***/ "./node_modules/ant-design-vue/es/card/Meta.js":
/*!*****************************************************!*\
  !*** ./node_modules/ant-design-vue/es/card/Meta.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-helper-vue-jsx-merge-props */ "./node_modules/babel-helper-vue-jsx-merge-props/index.js");
/* harmony import */ var babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! babel-runtime/helpers/defineProperty */ "./node_modules/babel-runtime/helpers/defineProperty.js");
/* harmony import */ var babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_vue_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_util/vue-types */ "./node_modules/ant-design-vue/es/_util/vue-types/index.js");
/* harmony import */ var _util_props_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_util/props-util */ "./node_modules/ant-design-vue/es/_util/props-util.js");
/* harmony import */ var _config_provider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config-provider */ "./node_modules/ant-design-vue/es/config-provider/index.js");






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ACardMeta',
  props: {
    prefixCls: _util_vue_types__WEBPACK_IMPORTED_MODULE_2__["default"].string,
    title: _util_vue_types__WEBPACK_IMPORTED_MODULE_2__["default"].any,
    description: _util_vue_types__WEBPACK_IMPORTED_MODULE_2__["default"].any
  },
  inject: {
    configProvider: { 'default': function _default() {
        return _config_provider__WEBPACK_IMPORTED_MODULE_4__["ConfigConsumerProps"];
      } }
  },
  render: function render() {
    var h = arguments[0];
    var customizePrefixCls = this.$props.prefixCls;


    var getPrefixCls = this.configProvider.getPrefixCls;
    var prefixCls = getPrefixCls('card', customizePrefixCls);

    var classString = babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, prefixCls + '-meta', true);

    var avatar = Object(_util_props_util__WEBPACK_IMPORTED_MODULE_3__["getComponentFromProp"])(this, 'avatar');
    var title = Object(_util_props_util__WEBPACK_IMPORTED_MODULE_3__["getComponentFromProp"])(this, 'title');
    var description = Object(_util_props_util__WEBPACK_IMPORTED_MODULE_3__["getComponentFromProp"])(this, 'description');

    var avatarDom = avatar ? h(
      'div',
      { 'class': prefixCls + '-meta-avatar' },
      [avatar]
    ) : null;
    var titleDom = title ? h(
      'div',
      { 'class': prefixCls + '-meta-title' },
      [title]
    ) : null;
    var descriptionDom = description ? h(
      'div',
      { 'class': prefixCls + '-meta-description' },
      [description]
    ) : null;
    var MetaDetail = titleDom || descriptionDom ? h(
      'div',
      { 'class': prefixCls + '-meta-detail' },
      [titleDom, descriptionDom]
    ) : null;
    return h(
      'div',
      babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{ on: Object(_util_props_util__WEBPACK_IMPORTED_MODULE_3__["getListeners"])(this) }, { 'class': classString }]),
      [avatarDom, MetaDetail]
    );
  }
});

/***/ }),

/***/ "./node_modules/ant-design-vue/es/card/index.js":
/*!******************************************************!*\
  !*** ./node_modules/ant-design-vue/es/card/index.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./node_modules/ant-design-vue/es/card/Card.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Meta */ "./node_modules/ant-design-vue/es/card/Meta.js");
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Grid */ "./node_modules/ant-design-vue/es/card/Grid.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base */ "./node_modules/ant-design-vue/es/base/index.js");




_Card__WEBPACK_IMPORTED_MODULE_0__["default"].Meta = _Meta__WEBPACK_IMPORTED_MODULE_1__["default"];
_Card__WEBPACK_IMPORTED_MODULE_0__["default"].Grid = _Grid__WEBPACK_IMPORTED_MODULE_2__["default"];

/* istanbul ignore next */
_Card__WEBPACK_IMPORTED_MODULE_0__["default"].install = function (Vue) {
  Vue.use(_base__WEBPACK_IMPORTED_MODULE_3__["default"]);
  Vue.component(_Card__WEBPACK_IMPORTED_MODULE_0__["default"].name, _Card__WEBPACK_IMPORTED_MODULE_0__["default"]);
  Vue.component(_Meta__WEBPACK_IMPORTED_MODULE_1__["default"].name, _Meta__WEBPACK_IMPORTED_MODULE_1__["default"]);
  Vue.component(_Grid__WEBPACK_IMPORTED_MODULE_2__["default"].name, _Grid__WEBPACK_IMPORTED_MODULE_2__["default"]);
};

/* harmony default export */ __webpack_exports__["default"] = (_Card__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/ant-design-vue/es/card/style/index.js":
/*!************************************************************!*\
  !*** ./node_modules/ant-design-vue/es/card/style/index.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../style/index.less */ "./node_modules/ant-design-vue/es/style/index.less");
/* harmony import */ var _style_index_less__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_index_less__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.less */ "./node_modules/ant-design-vue/es/card/style/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tabs_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tabs/style */ "./node_modules/ant-design-vue/es/tabs/style/index.js");
/* harmony import */ var _row_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../row/style */ "./node_modules/ant-design-vue/es/row/style/index.js");
/* harmony import */ var _col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../col/style */ "./node_modules/ant-design-vue/es/col/style/index.js");



// style dependencies




/***/ }),

/***/ "./node_modules/ant-design-vue/es/card/style/index.less":
/*!**************************************************************!*\
  !*** ./node_modules/ant-design-vue/es/card/style/index.less ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader/dist/cjs.js!../../../../postcss-loader/src??ref--8-2!../../../../less-loader/dist/cjs.js!../../../../less-loader/dist/cjs.js??ref--10!./index.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/ant-design-vue/es/card/style/index.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var ant_design_vue_es_card_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ant-design-vue/es/card/style */ "./node_modules/ant-design-vue/es/card/style/index.js");
/* harmony import */ var ant_design_vue_es_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ant-design-vue/es/card */ "./node_modules/ant-design-vue/es/card/index.js");
/* harmony import */ var ant_design_vue_es_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ant-design-vue/es/input/style */ "./node_modules/ant-design-vue/es/input/style/index.js");
/* harmony import */ var ant_design_vue_es_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ant-design-vue/es/input */ "./node_modules/ant-design-vue/es/input/index.js");
/* harmony import */ var ant_design_vue_es_list_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ant-design-vue/es/list/style */ "./node_modules/ant-design-vue/es/list/style/index.js");
/* harmony import */ var ant_design_vue_es_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ant-design-vue/es/list */ "./node_modules/ant-design-vue/es/list/index.js");
/* harmony import */ var ant_design_vue_es_icon_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ant-design-vue/es/icon/style */ "./node_modules/ant-design-vue/es/icon/style/index.js");
/* harmony import */ var ant_design_vue_es_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ant-design-vue/es/icon */ "./node_modules/ant-design-vue/es/icon/index.js");
/* harmony import */ var ant_design_vue_es_menu_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ant-design-vue/es/menu/style */ "./node_modules/ant-design-vue/es/menu/style/index.js");
/* harmony import */ var ant_design_vue_es_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ant-design-vue/es/menu */ "./node_modules/ant-design-vue/es/menu/index.js");










window.Vue.use(ant_design_vue_es_menu__WEBPACK_IMPORTED_MODULE_9__["default"]);
window.Vue.use(ant_design_vue_es_icon__WEBPACK_IMPORTED_MODULE_7__["default"]);
window.Vue.use(ant_design_vue_es_list__WEBPACK_IMPORTED_MODULE_5__["default"]);
window.Vue.use(ant_design_vue_es_input__WEBPACK_IMPORTED_MODULE_3__["default"]);
window.Vue.use(ant_design_vue_es_card__WEBPACK_IMPORTED_MODULE_1__["default"]);

var IconFont = ant_design_vue_es_icon__WEBPACK_IMPORTED_MODULE_7__["default"].createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
});

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    IconFont: IconFont
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js?!./node_modules/ant-design-vue/es/card/style/index.less":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/less-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js??ref--10!./node_modules/ant-design-vue/es/card/style/index.less ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "/* stylelint-disable at-rule-empty-line-before,at-rule-name-space-after,at-rule-no-unknown */\n/* stylelint-disable no-duplicate-selectors */\n/* stylelint-disable */\n/* stylelint-disable declaration-bang-space-before,no-duplicate-selectors,string-no-newline */\n.ant-card {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-size: 14px;\n  font-variant: tabular-nums;\n  line-height: 1.5;\n  list-style: none;\n  font-feature-settings: 'tnum';\n  position: relative;\n  background: #fff;\n  border-radius: 2px;\n  transition: all 0.3s;\n}\n.ant-card-hoverable {\n  cursor: pointer;\n}\n.ant-card-hoverable:hover {\n  border-color: rgba(0, 0, 0, 0.09);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);\n}\n.ant-card-bordered {\n  border: 1px solid #e8e8e8;\n}\n.ant-card-head {\n  min-height: 48px;\n  margin-bottom: -1px;\n  padding: 0 24px;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 15px;\n  background: transparent;\n  border-bottom: 1px solid #e8e8e8;\n  border-radius: 2px 2px 0 0;\n  zoom: 1;\n}\n.ant-card-head::before,\n.ant-card-head::after {\n  display: table;\n  content: '';\n}\n.ant-card-head::after {\n  clear: both;\n}\n.ant-card-head-wrapper {\n  display: flex;\n  align-items: center;\n}\n.ant-card-head-title {\n  display: inline-block;\n  flex: 1;\n  padding: 16px 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.ant-card-head .ant-tabs {\n  clear: both;\n  margin-bottom: -17px;\n  color: rgba(0, 0, 0, 0.65);\n  font-weight: normal;\n  font-size: 14px;\n}\n.ant-card-head .ant-tabs-bar {\n  border-bottom: 1px solid #e8e8e8;\n}\n.ant-card-extra {\n  float: right;\n  margin-left: auto;\n  padding: 16px 0;\n  color: rgba(0, 0, 0, 0.65);\n  font-weight: normal;\n  font-size: 14px;\n}\n.ant-card-body {\n  padding: 24px;\n  zoom: 1;\n}\n.ant-card-body::before,\n.ant-card-body::after {\n  display: table;\n  content: '';\n}\n.ant-card-body::after {\n  clear: both;\n}\n.ant-card-contain-grid:not(.ant-card-loading) .ant-card-body {\n  margin: -1px 0 0 -1px;\n  padding: 0;\n}\n.ant-card-grid {\n  float: left;\n  width: 33.33%;\n  padding: 24px;\n  border: 0;\n  border-radius: 0;\n  box-shadow: 1px 0 0 0 #e8e8e8, 0 1px 0 0 #e8e8e8, 1px 1px 0 0 #e8e8e8, 1px 0 0 0 #e8e8e8 inset, 0 1px 0 0 #e8e8e8 inset;\n  transition: all 0.3s;\n}\n.ant-card-grid-hoverable:hover {\n  position: relative;\n  z-index: 1;\n  box-shadow: 0 10px 35px -5px rgba(0, 0, 0, 0.15);\n}\n.ant-card-contain-tabs > .ant-card-head .ant-card-head-title {\n  min-height: 32px;\n  padding-bottom: 0;\n}\n.ant-card-contain-tabs > .ant-card-head .ant-card-extra {\n  padding-bottom: 0;\n}\n.ant-card-cover > * {\n  display: block;\n  width: 100%;\n}\n.ant-card-cover img {\n  border-radius: 2px 2px 0 0;\n}\n.ant-card-actions {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  background: #f2f4f8;\n  border-top: 1px solid #e8e8e8;\n  zoom: 1;\n}\n.ant-card-actions::before,\n.ant-card-actions::after {\n  display: table;\n  content: '';\n}\n.ant-card-actions::after {\n  clear: both;\n}\n.ant-card-actions > li {\n  float: left;\n  margin: 12px 0;\n  color: rgba(0, 0, 0, 0.45);\n  text-align: center;\n}\n.ant-card-actions > li > span {\n  position: relative;\n  display: block;\n  min-width: 32px;\n  font-size: 14px;\n  line-height: 22px;\n  cursor: pointer;\n}\n.ant-card-actions > li > span:hover {\n  color: #0190fe;\n  transition: color 0.3s;\n}\n.ant-card-actions > li > span a:not(.ant-btn),\n.ant-card-actions > li > span > .anticon {\n  display: inline-block;\n  width: 100%;\n  color: rgba(0, 0, 0, 0.45);\n  line-height: 22px;\n  transition: color 0.3s;\n}\n.ant-card-actions > li > span a:not(.ant-btn):hover,\n.ant-card-actions > li > span > .anticon:hover {\n  color: #0190fe;\n}\n.ant-card-actions > li > span > .anticon {\n  font-size: 16px;\n  line-height: 22px;\n}\n.ant-card-actions > li:not(:last-child) {\n  border-right: 1px solid #e8e8e8;\n}\n.ant-card-type-inner .ant-card-head {\n  padding: 0 24px;\n  background: #f2f4f8;\n}\n.ant-card-type-inner .ant-card-head-title {\n  padding: 12px 0;\n  font-size: 14px;\n}\n.ant-card-type-inner .ant-card-body {\n  padding: 16px 24px;\n}\n.ant-card-type-inner .ant-card-extra {\n  padding: 13.5px 0;\n}\n.ant-card-meta {\n  margin: -4px 0;\n  zoom: 1;\n}\n.ant-card-meta::before,\n.ant-card-meta::after {\n  display: table;\n  content: '';\n}\n.ant-card-meta::after {\n  clear: both;\n}\n.ant-card-meta-avatar {\n  float: left;\n  padding-right: 16px;\n}\n.ant-card-meta-detail {\n  overflow: hidden;\n}\n.ant-card-meta-detail > div:not(:last-child) {\n  margin-bottom: 8px;\n}\n.ant-card-meta-title {\n  overflow: hidden;\n  color: rgba(0, 0, 0, 0.85);\n  font-weight: 500;\n  font-size: 15px;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.ant-card-meta-description {\n  color: rgba(0, 0, 0, 0.45);\n}\n.ant-card-loading {\n  overflow: hidden;\n}\n.ant-card-loading .ant-card-body {\n  user-select: none;\n}\n.ant-card-loading-content p {\n  margin: 0;\n}\n.ant-card-loading-block {\n  height: 14px;\n  margin: 4px 0;\n  background: linear-gradient(90deg, rgba(207, 216, 220, 0.2), rgba(207, 216, 220, 0.4), rgba(207, 216, 220, 0.2));\n  background-size: 600% 600%;\n  border-radius: 2px;\n  animation: card-loading 1.4s ease infinite;\n}\n@keyframes card-loading {\n  0%,\n  100% {\n    background-position: 0 50%;\n  }\n  50% {\n    background-position: 100% 50%;\n  }\n}\n.ant-card-small > .ant-card-head {\n  min-height: 36px;\n  padding: 0 12px;\n  font-size: 14px;\n}\n.ant-card-small > .ant-card-head > .ant-card-head-wrapper > .ant-card-head-title {\n  padding: 8px 0;\n}\n.ant-card-small > .ant-card-head > .ant-card-head-wrapper > .ant-card-extra {\n  padding: 8px 0;\n  font-size: 14px;\n}\n.ant-card-small > .ant-card-body {\n  padding: 12px;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=style&index=0&id=5ad258c6&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=style&index=0&id=5ad258c6&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "\n.footer[data-v-5ad258c6] {\n    background: #2f2f2f;\n    padding: 20px;\n}\n.footer[data-v-5ad258c6] .footer-click {\n    color:#FFF;\n    margin-top: 30px;\n}\n.footer .footer-infor p[data-v-5ad258c6] {\n    margin-bottom: 10px;\n}\n.footer .footer-infor .logo-footer img[data-v-5ad258c6] {\n    margin-bottom: 20px;\n}\n.footer h5[data-v-5ad258c6] {\n    color: #FFF;\n    position: relative;\n    margin: 0 0 30px;\n    padding-bottom: 10px;\n    font-size: 14px;\n}\n.footer h5[data-v-5ad258c6]:after {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    content: '';\n    width: 50px;\n    background: #ffc000;\n    height: 2px;\n}\n.footer .footer-click .list-menu li[data-v-5ad258c6] {\n    padding: 5px 0;\n}\n.footer a[data-v-5ad258c6] {\n    color: #FFF;\n}\n.footer .footer-click .info-footer[data-v-5ad258c6] {\n    padding-top: 8px;\n}\n.footer .footer-click .info-footer p[data-v-5ad258c6] {\n    position: relative;\n    padding-left: 30px;\n}\n.footer .footer-click .info-footer p i[data-v-5ad258c6] {\n    position: absolute;\n    left: 0;\n    top: 0;\n    color: #ffc000;\n    font-size: 20px;\n    width: 21px;\n    text-align: center;\n}\n.footer .fot_copyright[data-v-5ad258c6] {\n    padding-top: 1rem;\n    color: #FFF;\n}\n.footer .fot_copyright .license[data-v-5ad258c6], footer .fot_copyright a[data-v-5ad258c6] {\n    font-weight: bold;\n    color: #ffc000;\n}\n.footer .fot_copyright .block-xs[data-v-5ad258c6] {\n    margin: 0 5px;\n}\n.list-menu[data-v-5ad258c6] {\n    padding: 0;\n    margin: 0;\n    list-style: none;\n}\n.footer-click ul>li[data-v-5ad258c6]::after {\n    content: '';\n    display: block;\n    width: 0;\n    height: 2px;\n    background: #ffc000;\n    transition: width .3s;\n}\n.footer-click ul>li[data-v-5ad258c6]:hover::after {\n    width: 50%;\n    border-bottom: 2px solid #ffc000;\n}\n", ""]);



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=style&index=0&id=5ad258c6&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-oneOf-1-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=style&index=0&id=5ad258c6&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--5-oneOf-1-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=5ad258c6&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=style&index=0&id=5ad258c6&scoped=true&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=template&id=5ad258c6&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=template&id=5ad258c6&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************/
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
    "div",
    [
      [
        _c("div", { staticClass: "footer" }, [
          _c("div", { staticClass: "container" }, [
            _c("div", { staticClass: "row" }, [
              _c(
                "div",
                { staticClass: "col-lg-4 footer-click" },
                [
                  _c("a", { attrs: { href: "" } }),
                  _vm._v(" "),
                  _c("p", [_vm._v("Kênh thông tin của chúng tôi")]),
                  _vm._v(" "),
                  _c("a-icon", {
                    staticStyle: { "font-size": "30px" },
                    attrs: { type: "youtube" }
                  }),
                  _vm._v(" "),
                  _c("a-icon", {
                    staticStyle: { "font-size": "30px" },
                    attrs: { type: "skype" }
                  }),
                  _vm._v(" "),
                  _c("a-icon", {
                    staticStyle: { "font-size": "30px" },
                    attrs: { type: "twitter" }
                  }),
                  _vm._v(" "),
                  _c("a-icon", {
                    staticStyle: { "font-size": "30px" },
                    attrs: { type: "facebook" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _vm._m(1),
              _vm._v(" "),
              _vm._m(2)
            ])
          ]),
          _vm._v(" "),
          _vm._m(3)
        ])
      ]
    ],
    2
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-2 col-md-2 col-sm-3 col-xs-12 footer-click" },
      [
        _c("h5", { staticClass: "cliked" }, [_vm._v("THÔNG TIN")]),
        _vm._v(" "),
        _c("ul", { staticClass: "toggle-mn list-menu" }, [
          _c("li", [
            _c(
              "a",
              { staticClass: "ef", attrs: { href: "/", title: "Trang chủ" } },
              [_vm._v("Trang chủ")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "ef",
                attrs: { href: "/gioi-thieu", title: "Giới thiệu" }
              },
              [_vm._v("Giới thiệu")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "ef",
                attrs: { href: "/collections/all", title: "Sản phẩm" }
              },
              [_vm._v("Sản phẩm")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "ef",
                attrs: { href: "/tin-tuc", title: "Tin tức" }
              },
              [_vm._v("Tin tức")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "ef",
                attrs: { href: "/lien-he", title: "Liên hệ" }
              },
              [_vm._v("Liên hệ")]
            )
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col-lg-2 col-md-2 col-sm-3 col-xs-12 footer-click" },
      [
        _c("h5", { staticClass: "cliked" }, [_vm._v("CHÍNH SÁCH")]),
        _vm._v(" "),
        _c("ul", { staticClass: "toggle-mn list-menu" }, [
          _c("li", [
            _c(
              "a",
              { staticClass: "ef", attrs: { href: "/", title: "Trang chủ" } },
              [_vm._v("Trang chủ")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "ef",
                attrs: { href: "/gioi-thieu", title: "Giới thiệu" }
              },
              [_vm._v("Giới thiệu")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "ef",
                attrs: { href: "/collections/all", title: "Sản phẩm" }
              },
              [_vm._v("Sản phẩm")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "ef",
                attrs: { href: "/tin-tuc", title: "Tin tức" }
              },
              [_vm._v("Tin tức")]
            )
          ]),
          _vm._v(" "),
          _c("li", [
            _c(
              "a",
              {
                staticClass: "ef",
                attrs: { href: "/lien-he", title: "Liên hệ" }
              },
              [_vm._v("Liên hệ")]
            )
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "col-lg-4 col-md-4 col-sm-12 col-xs-12 footer-click footer-col-last"
      },
      [
        _c("h5", { staticClass: "cliked" }, [_vm._v("THÔNG TIN LIÊN HỆ")]),
        _vm._v(" "),
        _c("div", { staticClass: "classic-text-widget info-footer" }, [
          _c("p", [
            _c("i", { staticClass: "fa fa-map-marker" }),
            _vm._v("Tầng 4 , tòa nhà bitextco NamLong. TP.HCM")
          ]),
          _vm._v(" "),
          _c("p", [
            _c("i", { staticClass: "fa fa-phone" }),
            _vm._v(" "),
            _c(
              "a",
              { attrs: { href: "tel:0973458959", title: "0973458959" } },
              [_vm._v(" 0908855483")]
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _c("i", { staticClass: "fa fa-envelope" }),
            _vm._v(" "),
            _c(
              "a",
              {
                attrs: {
                  href: "mailto:lehieu.super@gmail.com",
                  title: "lehieu.super@gmail.com"
                }
              },
              [_vm._v("thuannv@fimplus.vn")]
            )
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "bottom-footer fot_copyright text-center" },
      [
        _c("div", { staticClass: "container" }, [
          _c("div", [
            _vm._v(
              "\n                            Bản quyền thuộc về\n                            "
            ),
            _c("span", { staticClass: "license" }, [_vm._v("Admin Pun")])
          ])
        ])
      ]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue":
/*!*************************************************************************************!*\
  !*** ./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5ad258c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5ad258c6&scoped=true& */ "./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=template&id=5ad258c6&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_5ad258c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=5ad258c6&scoped=true&lang=css& */ "./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=style&index=0&id=5ad258c6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5ad258c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5ad258c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5ad258c6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=style&index=0&id=5ad258c6&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=style&index=0&id=5ad258c6&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5ad258c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/style-loader!../../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-1-1!../../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../node_modules/postcss-loader/src??ref--5-oneOf-1-2!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=5ad258c6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=style&index=0&id=5ad258c6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5ad258c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5ad258c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5ad258c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5ad258c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5ad258c6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=template&id=5ad258c6&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=template&id=5ad258c6&scoped=true& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5ad258c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5ad258c6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/frontend/components/LayoutComponents/Frontend/Footer/index.vue?vue&type=template&id=5ad258c6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5ad258c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5ad258c6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50LWRlc2lnbi12dWUvZXMvY2FyZC9DYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnQtZGVzaWduLXZ1ZS9lcy9jYXJkL0dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudC1kZXNpZ24tdnVlL2VzL2NhcmQvTWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50LWRlc2lnbi12dWUvZXMvY2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50LWRlc2lnbi12dWUvZXMvY2FyZC9zdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50LWRlc2lnbi12dWUvZXMvY2FyZC9zdHlsZS9pbmRleC5sZXNzPzA0NmIiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dENvbXBvbmVudHMvRnJvbnRlbmQvRm9vdGVyL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50LWRlc2lnbi12dWUvZXMvY2FyZC9zdHlsZS9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dENvbXBvbmVudHMvRnJvbnRlbmQvRm9vdGVyL2luZGV4LnZ1ZT82ODI5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dENvbXBvbmVudHMvRnJvbnRlbmQvRm9vdGVyL2luZGV4LnZ1ZT85MTczIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dENvbXBvbmVudHMvRnJvbnRlbmQvRm9vdGVyL2luZGV4LnZ1ZT85NGJjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dENvbXBvbmVudHMvRnJvbnRlbmQvRm9vdGVyL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9MYXlvdXRDb21wb25lbnRzL0Zyb250ZW5kL0Zvb3Rlci9pbmRleC52dWU/MGI5YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9MYXlvdXRDb21wb25lbnRzL0Zyb250ZW5kL0Zvb3Rlci9pbmRleC52dWU/N2I2OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9MYXlvdXRDb21wb25lbnRzL0Zyb250ZW5kL0Zvb3Rlci9pbmRleC52dWU/NmFmOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEQ7QUFDSztBQUN4QztBQUNBO0FBQ0Y7QUFDQTtBQUNrQjtBQUMyRDtBQUMzRDtBQUNjOztBQUV6RCxjQUFjLDZDQUFJOztBQUVIO0FBQ2Y7QUFDQSxXQUFXLHVEQUFTO0FBQ3BCO0FBQ0EsZUFBZSx1REFBUztBQUN4QixXQUFXLHVEQUFTO0FBQ3BCLFdBQVcsdURBQVM7QUFDcEIsY0FBYyx1REFBUztBQUN2QixlQUFlLHVEQUFTO0FBQ3hCLGVBQWUsdURBQVM7QUFDeEIsYUFBYSx1REFBUztBQUN0QixlQUFlLHVEQUFTO0FBQ3hCLFVBQVUsdURBQVM7QUFDbkIsVUFBVSx1REFBUztBQUNuQixhQUFhLHVEQUFTO0FBQ3RCLGFBQWEsdURBQVM7QUFDdEIsd0JBQXdCLHVEQUFTO0FBQ2pDLGtCQUFrQix1REFBUztBQUMzQix5QkFBeUIsdURBQVM7QUFDbEMsR0FBRztBQUNIO0FBQ0EscUJBQXFCO0FBQ3JCLGVBQWUsb0VBQW1CO0FBQ2xDLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFD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R3pGO0FBQ3lHO0FBQ3pHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQTZNLENBQWdCLGlQQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWpPO0FBQUE7QUFBQTtBQUFBO0FBQXNjLENBQWdCLHdhQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy9jaHVua3MvY3VpLWZyb250ZW5kLWZvb3Rlci5jaHVuay5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBfbWVyZ2VKU1hQcm9wcyBmcm9tICdiYWJlbC1oZWxwZXItdnVlLWpzeC1tZXJnZS1wcm9wcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgb21pdCBmcm9tICdvbWl0LmpzJztcbmltcG9ydCBUYWJzIGZyb20gJy4uL3RhYnMnO1xuaW1wb3J0IFJvdyBmcm9tICcuLi9yb3cnO1xuaW1wb3J0IENvbCBmcm9tICcuLi9jb2wnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICcuLi9fdXRpbC92dWUtdHlwZXMnO1xuaW1wb3J0IHsgZ2V0Q29tcG9uZW50RnJvbVByb3AsIGdldFNsb3RPcHRpb25zLCBmaWx0ZXJFbXB0eSwgZ2V0TGlzdGVuZXJzIH0gZnJvbSAnLi4vX3V0aWwvcHJvcHMtdXRpbCc7XG5pbXBvcnQgQmFzZU1peGluIGZyb20gJy4uL191dGlsL0Jhc2VNaXhpbic7XG5pbXBvcnQgeyBDb25maWdDb25zdW1lclByb3BzIH0gZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyJztcblxudmFyIFRhYlBhbmUgPSBUYWJzLlRhYlBhbmU7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0FDYXJkJyxcbiAgbWl4aW5zOiBbQmFzZU1peGluXSxcbiAgcHJvcHM6IHtcbiAgICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5hbnksXG4gICAgZXh0cmE6IFByb3BUeXBlcy5hbnksXG4gICAgYm9yZGVyZWQ6IFByb3BUeXBlcy5ib29sLmRlZih0cnVlKSxcbiAgICBib2R5U3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgaGVhZFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICAgIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmRlZihmYWxzZSksXG4gICAgaG92ZXJhYmxlOiBQcm9wVHlwZXMuYm9vbC5kZWYoZmFsc2UpLFxuICAgIHR5cGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFsnZGVmYXVsdCcsICdzbWFsbCddKSxcbiAgICBhY3Rpb25zOiBQcm9wVHlwZXMuYW55LFxuICAgIHRhYkxpc3Q6IFByb3BUeXBlcy5hcnJheSxcbiAgICB0YWJCYXJFeHRyYUNvbnRlbnQ6IFByb3BUeXBlcy5hbnksXG4gICAgYWN0aXZlVGFiS2V5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGRlZmF1bHRBY3RpdmVUYWJLZXk6IFByb3BUeXBlcy5zdHJpbmdcbiAgfSxcbiAgaW5qZWN0OiB7XG4gICAgY29uZmlnUHJvdmlkZXI6IHsgJ2RlZmF1bHQnOiBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIENvbmZpZ0NvbnN1bWVyUHJvcHM7XG4gICAgICB9IH1cbiAgfSxcbiAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgd2lkZXJQYWRkaW5nOiBmYWxzZVxuICAgIH07XG4gIH0sXG5cbiAgbWV0aG9kczoge1xuICAgIGdldEFjdGlvbjogZnVuY3Rpb24gZ2V0QWN0aW9uKGFjdGlvbnMpIHtcbiAgICAgIHZhciBoID0gdGhpcy4kY3JlYXRlRWxlbWVudDtcblxuICAgICAgdmFyIGFjdGlvbkxpc3QgPSBhY3Rpb25zLm1hcChmdW5jdGlvbiAoYWN0aW9uLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gaChcbiAgICAgICAgICAnbGknLFxuICAgICAgICAgIHsgc3R5bGU6IHsgd2lkdGg6IDEwMCAvIGFjdGlvbnMubGVuZ3RoICsgJyUnIH0sIGtleTogJ2FjdGlvbi0nICsgaW5kZXggfSxcbiAgICAgICAgICBbaCgnc3BhbicsIFthY3Rpb25dKV1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGFjdGlvbkxpc3Q7XG4gICAgfSxcbiAgICBvblRhYkNoYW5nZTogZnVuY3Rpb24gb25UYWJDaGFuZ2Uoa2V5KSB7XG4gICAgICB0aGlzLiRlbWl0KCd0YWJDaGFuZ2UnLCBrZXkpO1xuICAgIH0sXG4gICAgaXNDb250YWluR3JpZDogZnVuY3Rpb24gaXNDb250YWluR3JpZCgpIHtcbiAgICAgIHZhciBvYmogPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuXG4gICAgICB2YXIgY29udGFpbkdyaWQgPSB2b2lkIDA7XG4gICAgICBvYmouZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICBpZiAoZWxlbWVudCAmJiBnZXRTbG90T3B0aW9ucyhlbGVtZW50KS5fX0FOVF9DQVJEX0dSSUQpIHtcbiAgICAgICAgICBjb250YWluR3JpZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIGNvbnRhaW5HcmlkO1xuICAgIH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9jbGFzc1N0cmluZywgX3Byb3BzO1xuXG4gICAgdmFyIGggPSBhcmd1bWVudHNbMF07XG4gICAgdmFyIF8kcHJvcHMgPSB0aGlzLiRwcm9wcyxcbiAgICAgICAgY3VzdG9taXplUHJlZml4Q2xzID0gXyRwcm9wcy5wcmVmaXhDbHMsXG4gICAgICAgIF8kcHJvcHMkaGVhZFN0eWxlID0gXyRwcm9wcy5oZWFkU3R5bGUsXG4gICAgICAgIGhlYWRTdHlsZSA9IF8kcHJvcHMkaGVhZFN0eWxlID09PSB1bmRlZmluZWQgPyB7fSA6IF8kcHJvcHMkaGVhZFN0eWxlLFxuICAgICAgICBfJHByb3BzJGJvZHlTdHlsZSA9IF8kcHJvcHMuYm9keVN0eWxlLFxuICAgICAgICBib2R5U3R5bGUgPSBfJHByb3BzJGJvZHlTdHlsZSA9PT0gdW5kZWZpbmVkID8ge30gOiBfJHByb3BzJGJvZHlTdHlsZSxcbiAgICAgICAgbG9hZGluZyA9IF8kcHJvcHMubG9hZGluZyxcbiAgICAgICAgXyRwcm9wcyRib3JkZXJlZCA9IF8kcHJvcHMuYm9yZGVyZWQsXG4gICAgICAgIGJvcmRlcmVkID0gXyRwcm9wcyRib3JkZXJlZCA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF8kcHJvcHMkYm9yZGVyZWQsXG4gICAgICAgIF8kcHJvcHMkc2l6ZSA9IF8kcHJvcHMuc2l6ZSxcbiAgICAgICAgc2l6ZSA9IF8kcHJvcHMkc2l6ZSA9PT0gdW5kZWZpbmVkID8gJ2RlZmF1bHQnIDogXyRwcm9wcyRzaXplLFxuICAgICAgICB0eXBlID0gXyRwcm9wcy50eXBlLFxuICAgICAgICB0YWJMaXN0ID0gXyRwcm9wcy50YWJMaXN0LFxuICAgICAgICBob3ZlcmFibGUgPSBfJHByb3BzLmhvdmVyYWJsZSxcbiAgICAgICAgYWN0aXZlVGFiS2V5ID0gXyRwcm9wcy5hY3RpdmVUYWJLZXksXG4gICAgICAgIGRlZmF1bHRBY3RpdmVUYWJLZXkgPSBfJHByb3BzLmRlZmF1bHRBY3RpdmVUYWJLZXk7XG5cblxuICAgIHZhciBnZXRQcmVmaXhDbHMgPSB0aGlzLmNvbmZpZ1Byb3ZpZGVyLmdldFByZWZpeENscztcbiAgICB2YXIgcHJlZml4Q2xzID0gZ2V0UHJlZml4Q2xzKCdjYXJkJywgY3VzdG9taXplUHJlZml4Q2xzKTtcblxuICAgIHZhciAkc2xvdHMgPSB0aGlzLiRzbG90cyxcbiAgICAgICAgJHNjb3BlZFNsb3RzID0gdGhpcy4kc2NvcGVkU2xvdHM7XG5cbiAgICB2YXIgdGFiQmFyRXh0cmFDb250ZW50ID0gZ2V0Q29tcG9uZW50RnJvbVByb3AodGhpcywgJ3RhYkJhckV4dHJhQ29udGVudCcpO1xuICAgIHZhciBjbGFzc1N0cmluZyA9IChfY2xhc3NTdHJpbmcgPSB7fSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc1N0cmluZywgJycgKyBwcmVmaXhDbHMsIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzU3RyaW5nLCBwcmVmaXhDbHMgKyAnLWxvYWRpbmcnLCBsb2FkaW5nKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc1N0cmluZywgcHJlZml4Q2xzICsgJy1ib3JkZXJlZCcsIGJvcmRlcmVkKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc1N0cmluZywgcHJlZml4Q2xzICsgJy1ob3ZlcmFibGUnLCAhIWhvdmVyYWJsZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NTdHJpbmcsIHByZWZpeENscyArICctY29udGFpbi1ncmlkJywgdGhpcy5pc0NvbnRhaW5HcmlkKCRzbG90c1snZGVmYXVsdCddKSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NTdHJpbmcsIHByZWZpeENscyArICctY29udGFpbi10YWJzJywgdGFiTGlzdCAmJiB0YWJMaXN0Lmxlbmd0aCksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NTdHJpbmcsIHByZWZpeENscyArICctJyArIHNpemUsIHNpemUgIT09ICdkZWZhdWx0JyksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NTdHJpbmcsIHByZWZpeENscyArICctdHlwZS0nICsgdHlwZSwgISF0eXBlKSwgX2NsYXNzU3RyaW5nKTtcblxuICAgIHZhciBsb2FkaW5nQmxvY2tTdHlsZSA9IGJvZHlTdHlsZS5wYWRkaW5nID09PSAwIHx8IGJvZHlTdHlsZS5wYWRkaW5nID09PSAnMHB4JyA/IHsgcGFkZGluZzogMjQgfSA6IHVuZGVmaW5lZDtcblxuICAgIHZhciBsb2FkaW5nQmxvY2sgPSBoKFxuICAgICAgJ2RpdicsXG4gICAgICB7ICdjbGFzcyc6IHByZWZpeENscyArICctbG9hZGluZy1jb250ZW50Jywgc3R5bGU6IGxvYWRpbmdCbG9ja1N0eWxlIH0sXG4gICAgICBbaChcbiAgICAgICAgUm93LFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgZ3V0dGVyOiA4IH1cbiAgICAgICAgfSxcbiAgICAgICAgW2goXG4gICAgICAgICAgQ29sLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNwYW46IDIyIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtoKCdkaXYnLCB7ICdjbGFzcyc6IHByZWZpeENscyArICctbG9hZGluZy1ibG9jaycgfSldXG4gICAgICAgICldXG4gICAgICApLCBoKFxuICAgICAgICBSb3csXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBndXR0ZXI6IDggfVxuICAgICAgICB9LFxuICAgICAgICBbaChcbiAgICAgICAgICBDb2wsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHsgc3BhbjogOCB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbaCgnZGl2JywgeyAnY2xhc3MnOiBwcmVmaXhDbHMgKyAnLWxvYWRpbmctYmxvY2snIH0pXVxuICAgICAgICApLCBoKFxuICAgICAgICAgIENvbCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczogeyBzcGFuOiAxNSB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbaCgnZGl2JywgeyAnY2xhc3MnOiBwcmVmaXhDbHMgKyAnLWxvYWRpbmctYmxvY2snIH0pXVxuICAgICAgICApXVxuICAgICAgKSwgaChcbiAgICAgICAgUm93LFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgZ3V0dGVyOiA4IH1cbiAgICAgICAgfSxcbiAgICAgICAgW2goXG4gICAgICAgICAgQ29sLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNwYW46IDYgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2goJ2RpdicsIHsgJ2NsYXNzJzogcHJlZml4Q2xzICsgJy1sb2FkaW5nLWJsb2NrJyB9KV1cbiAgICAgICAgKSwgaChcbiAgICAgICAgICBDb2wsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHsgc3BhbjogMTggfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2goJ2RpdicsIHsgJ2NsYXNzJzogcHJlZml4Q2xzICsgJy1sb2FkaW5nLWJsb2NrJyB9KV1cbiAgICAgICAgKV1cbiAgICAgICksIGgoXG4gICAgICAgIFJvdyxcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IGd1dHRlcjogOCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtoKFxuICAgICAgICAgIENvbCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczogeyBzcGFuOiAxMyB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbaCgnZGl2JywgeyAnY2xhc3MnOiBwcmVmaXhDbHMgKyAnLWxvYWRpbmctYmxvY2snIH0pXVxuICAgICAgICApLCBoKFxuICAgICAgICAgIENvbCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczogeyBzcGFuOiA5IH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtoKCdkaXYnLCB7ICdjbGFzcyc6IHByZWZpeENscyArICctbG9hZGluZy1ibG9jaycgfSldXG4gICAgICAgICldXG4gICAgICApLCBoKFxuICAgICAgICBSb3csXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBndXR0ZXI6IDggfVxuICAgICAgICB9LFxuICAgICAgICBbaChcbiAgICAgICAgICBDb2wsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHsgc3BhbjogNCB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbaCgnZGl2JywgeyAnY2xhc3MnOiBwcmVmaXhDbHMgKyAnLWxvYWRpbmctYmxvY2snIH0pXVxuICAgICAgICApLCBoKFxuICAgICAgICAgIENvbCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczogeyBzcGFuOiAzIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtoKCdkaXYnLCB7ICdjbGFzcyc6IHByZWZpeENscyArICctbG9hZGluZy1ibG9jaycgfSldXG4gICAgICAgICksIGgoXG4gICAgICAgICAgQ29sLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNwYW46IDE2IH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtoKCdkaXYnLCB7ICdjbGFzcyc6IHByZWZpeENscyArICctbG9hZGluZy1ibG9jaycgfSldXG4gICAgICAgICldXG4gICAgICApXVxuICAgICk7XG5cbiAgICB2YXIgaGFzQWN0aXZlVGFiS2V5ID0gYWN0aXZlVGFiS2V5ICE9PSB1bmRlZmluZWQ7XG4gICAgdmFyIHRhYnNQcm9wcyA9IHtcbiAgICAgIHByb3BzOiAoX3Byb3BzID0ge1xuICAgICAgICBzaXplOiAnbGFyZ2UnXG4gICAgICB9LCBfZGVmaW5lUHJvcGVydHkoX3Byb3BzLCBoYXNBY3RpdmVUYWJLZXkgPyAnYWN0aXZlS2V5JyA6ICdkZWZhdWx0QWN0aXZlS2V5JywgaGFzQWN0aXZlVGFiS2V5ID8gYWN0aXZlVGFiS2V5IDogZGVmYXVsdEFjdGl2ZVRhYktleSksIF9kZWZpbmVQcm9wZXJ0eShfcHJvcHMsICd0YWJCYXJFeHRyYUNvbnRlbnQnLCB0YWJCYXJFeHRyYUNvbnRlbnQpLCBfcHJvcHMpLFxuICAgICAgb246IHtcbiAgICAgICAgY2hhbmdlOiB0aGlzLm9uVGFiQ2hhbmdlXG4gICAgICB9LFxuICAgICAgJ2NsYXNzJzogcHJlZml4Q2xzICsgJy1oZWFkLXRhYnMnXG4gICAgfTtcblxuICAgIHZhciBoZWFkID0gdm9pZCAwO1xuICAgIHZhciB0YWJzID0gdGFiTGlzdCAmJiB0YWJMaXN0Lmxlbmd0aCA/IGgoXG4gICAgICBUYWJzLFxuICAgICAgdGFic1Byb3BzLFxuICAgICAgW3RhYkxpc3QubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHZhciB0ZW1wID0gaXRlbS50YWIsXG4gICAgICAgICAgICBfaXRlbSRzY29wZWRTbG90cyA9IGl0ZW0uc2NvcGVkU2xvdHMsXG4gICAgICAgICAgICBzY29wZWRTbG90cyA9IF9pdGVtJHNjb3BlZFNsb3RzID09PSB1bmRlZmluZWQgPyB7fSA6IF9pdGVtJHNjb3BlZFNsb3RzO1xuXG4gICAgICAgIHZhciBuYW1lID0gc2NvcGVkU2xvdHMudGFiO1xuICAgICAgICB2YXIgdGFiID0gdGVtcCAhPT0gdW5kZWZpbmVkID8gdGVtcCA6ICRzY29wZWRTbG90c1tuYW1lXSA/ICRzY29wZWRTbG90c1tuYW1lXShpdGVtKSA6IG51bGw7XG4gICAgICAgIHJldHVybiBoKFRhYlBhbmUsIHtcbiAgICAgICAgICBhdHRyczogeyB0YWI6IHRhYiwgZGlzYWJsZWQ6IGl0ZW0uZGlzYWJsZWQgfSxcbiAgICAgICAgICBrZXk6IGl0ZW0ua2V5IH0pO1xuICAgICAgfSldXG4gICAgKSA6IG51bGw7XG4gICAgdmFyIHRpdGxlRG9tID0gZ2V0Q29tcG9uZW50RnJvbVByb3AodGhpcywgJ3RpdGxlJyk7XG4gICAgdmFyIGV4dHJhRG9tID0gZ2V0Q29tcG9uZW50RnJvbVByb3AodGhpcywgJ2V4dHJhJyk7XG4gICAgaWYgKHRpdGxlRG9tIHx8IGV4dHJhRG9tIHx8IHRhYnMpIHtcbiAgICAgIGhlYWQgPSBoKFxuICAgICAgICAnZGl2JyxcbiAgICAgICAgeyAnY2xhc3MnOiBwcmVmaXhDbHMgKyAnLWhlYWQnLCBzdHlsZTogaGVhZFN0eWxlIH0sXG4gICAgICAgIFtoKFxuICAgICAgICAgICdkaXYnLFxuICAgICAgICAgIHsgJ2NsYXNzJzogcHJlZml4Q2xzICsgJy1oZWFkLXdyYXBwZXInIH0sXG4gICAgICAgICAgW3RpdGxlRG9tICYmIGgoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgJ2NsYXNzJzogcHJlZml4Q2xzICsgJy1oZWFkLXRpdGxlJyB9LFxuICAgICAgICAgICAgW3RpdGxlRG9tXVxuICAgICAgICAgICksIGV4dHJhRG9tICYmIGgoXG4gICAgICAgICAgICAnZGl2JyxcbiAgICAgICAgICAgIHsgJ2NsYXNzJzogcHJlZml4Q2xzICsgJy1leHRyYScgfSxcbiAgICAgICAgICAgIFtleHRyYURvbV1cbiAgICAgICAgICApXVxuICAgICAgICApLCB0YWJzXVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB2YXIgY2hpbGRyZW4gPSAkc2xvdHNbJ2RlZmF1bHQnXTtcbiAgICB2YXIgY292ZXIgPSBnZXRDb21wb25lbnRGcm9tUHJvcCh0aGlzLCAnY292ZXInKTtcbiAgICB2YXIgY292ZXJEb20gPSBjb3ZlciA/IGgoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgJ2NsYXNzJzogcHJlZml4Q2xzICsgJy1jb3ZlcicgfSxcbiAgICAgIFtjb3Zlcl1cbiAgICApIDogbnVsbDtcbiAgICB2YXIgYm9keSA9IGgoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgJ2NsYXNzJzogcHJlZml4Q2xzICsgJy1ib2R5Jywgc3R5bGU6IGJvZHlTdHlsZSB9LFxuICAgICAgW2xvYWRpbmcgPyBsb2FkaW5nQmxvY2sgOiBjaGlsZHJlbl1cbiAgICApO1xuICAgIHZhciBhY3Rpb25zID0gZmlsdGVyRW1wdHkodGhpcy4kc2xvdHMuYWN0aW9ucyk7XG4gICAgdmFyIGFjdGlvbkRvbSA9IGFjdGlvbnMgJiYgYWN0aW9ucy5sZW5ndGggPyBoKFxuICAgICAgJ3VsJyxcbiAgICAgIHsgJ2NsYXNzJzogcHJlZml4Q2xzICsgJy1hY3Rpb25zJyB9LFxuICAgICAgW3RoaXMuZ2V0QWN0aW9uKGFjdGlvbnMpXVxuICAgICkgOiBudWxsO1xuXG4gICAgcmV0dXJuIGgoXG4gICAgICAnZGl2JyxcbiAgICAgIF9tZXJnZUpTWFByb3BzKFt7XG4gICAgICAgICdjbGFzcyc6IGNsYXNzU3RyaW5nLFxuICAgICAgICByZWY6ICdjYXJkQ29udGFpbmVyUmVmJ1xuICAgICAgfSwgeyBvbjogb21pdChnZXRMaXN0ZW5lcnModGhpcyksIFsndGFiQ2hhbmdlJywgJ3RhYi1jaGFuZ2UnXSkgfV0pLFxuICAgICAgW2hlYWQsIGNvdmVyRG9tLCBjaGlsZHJlbiA/IGJvZHkgOiBudWxsLCBhY3Rpb25Eb21dXG4gICAgKTtcbiAgfVxufTsiLCJpbXBvcnQgX21lcmdlSlNYUHJvcHMgZnJvbSAnYmFiZWwtaGVscGVyLXZ1ZS1qc3gtbWVyZ2UtcHJvcHMnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdiYWJlbC1ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICcuLi9fdXRpbC92dWUtdHlwZXMnO1xuaW1wb3J0IHsgQ29uZmlnQ29uc3VtZXJQcm9wcyB9IGZyb20gJy4uL2NvbmZpZy1wcm92aWRlcic7XG5pbXBvcnQgeyBnZXRMaXN0ZW5lcnMgfSBmcm9tICcuLi9fdXRpbC9wcm9wcy11dGlsJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQUNhcmRHcmlkJyxcbiAgX19BTlRfQ0FSRF9HUklEOiB0cnVlLFxuICBwcm9wczoge1xuICAgIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBob3ZlcmFibGU6IFByb3BUeXBlcy5ib29sXG4gIH0sXG4gIGluamVjdDoge1xuICAgIGNvbmZpZ1Byb3ZpZGVyOiB7ICdkZWZhdWx0JzogZnVuY3Rpb24gX2RlZmF1bHQoKSB7XG4gICAgICAgIHJldHVybiBDb25maWdDb25zdW1lclByb3BzO1xuICAgICAgfSB9XG4gIH0sXG4gIHJlbmRlcjogZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfY2xhc3NTdHJpbmc7XG5cbiAgICB2YXIgaCA9IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgXyRwcm9wcyA9IHRoaXMuJHByb3BzLFxuICAgICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfJHByb3BzLnByZWZpeENscyxcbiAgICAgICAgXyRwcm9wcyRob3ZlcmFibGUgPSBfJHByb3BzLmhvdmVyYWJsZSxcbiAgICAgICAgaG92ZXJhYmxlID0gXyRwcm9wcyRob3ZlcmFibGUgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfJHByb3BzJGhvdmVyYWJsZTtcblxuXG4gICAgdmFyIGdldFByZWZpeENscyA9IHRoaXMuY29uZmlnUHJvdmlkZXIuZ2V0UHJlZml4Q2xzO1xuICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2NhcmQnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuXG4gICAgdmFyIGNsYXNzU3RyaW5nID0gKF9jbGFzc1N0cmluZyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzU3RyaW5nLCBwcmVmaXhDbHMgKyAnLWdyaWQnLCB0cnVlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc1N0cmluZywgcHJlZml4Q2xzICsgJy1ncmlkLWhvdmVyYWJsZScsIGhvdmVyYWJsZSksIF9jbGFzc1N0cmluZyk7XG4gICAgcmV0dXJuIGgoXG4gICAgICAnZGl2JyxcbiAgICAgIF9tZXJnZUpTWFByb3BzKFt7IG9uOiBnZXRMaXN0ZW5lcnModGhpcykgfSwgeyAnY2xhc3MnOiBjbGFzc1N0cmluZyB9XSksXG4gICAgICBbdGhpcy4kc2xvdHNbJ2RlZmF1bHQnXV1cbiAgICApO1xuICB9XG59OyIsImltcG9ydCBfbWVyZ2VKU1hQcm9wcyBmcm9tICdiYWJlbC1oZWxwZXItdnVlLWpzeC1tZXJnZS1wcm9wcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJy4uL191dGlsL3Z1ZS10eXBlcyc7XG5pbXBvcnQgeyBnZXRDb21wb25lbnRGcm9tUHJvcCwgZ2V0TGlzdGVuZXJzIH0gZnJvbSAnLi4vX3V0aWwvcHJvcHMtdXRpbCc7XG5pbXBvcnQgeyBDb25maWdDb25zdW1lclByb3BzIH0gZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQUNhcmRNZXRhJyxcbiAgcHJvcHM6IHtcbiAgICBwcmVmaXhDbHM6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5hbnksXG4gICAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5hbnlcbiAgfSxcbiAgaW5qZWN0OiB7XG4gICAgY29uZmlnUHJvdmlkZXI6IHsgJ2RlZmF1bHQnOiBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIENvbmZpZ0NvbnN1bWVyUHJvcHM7XG4gICAgICB9IH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIGggPSBhcmd1bWVudHNbMF07XG4gICAgdmFyIGN1c3RvbWl6ZVByZWZpeENscyA9IHRoaXMuJHByb3BzLnByZWZpeENscztcblxuXG4gICAgdmFyIGdldFByZWZpeENscyA9IHRoaXMuY29uZmlnUHJvdmlkZXIuZ2V0UHJlZml4Q2xzO1xuICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2NhcmQnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuXG4gICAgdmFyIGNsYXNzU3RyaW5nID0gX2RlZmluZVByb3BlcnR5KHt9LCBwcmVmaXhDbHMgKyAnLW1ldGEnLCB0cnVlKTtcblxuICAgIHZhciBhdmF0YXIgPSBnZXRDb21wb25lbnRGcm9tUHJvcCh0aGlzLCAnYXZhdGFyJyk7XG4gICAgdmFyIHRpdGxlID0gZ2V0Q29tcG9uZW50RnJvbVByb3AodGhpcywgJ3RpdGxlJyk7XG4gICAgdmFyIGRlc2NyaXB0aW9uID0gZ2V0Q29tcG9uZW50RnJvbVByb3AodGhpcywgJ2Rlc2NyaXB0aW9uJyk7XG5cbiAgICB2YXIgYXZhdGFyRG9tID0gYXZhdGFyID8gaChcbiAgICAgICdkaXYnLFxuICAgICAgeyAnY2xhc3MnOiBwcmVmaXhDbHMgKyAnLW1ldGEtYXZhdGFyJyB9LFxuICAgICAgW2F2YXRhcl1cbiAgICApIDogbnVsbDtcbiAgICB2YXIgdGl0bGVEb20gPSB0aXRsZSA/IGgoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgJ2NsYXNzJzogcHJlZml4Q2xzICsgJy1tZXRhLXRpdGxlJyB9LFxuICAgICAgW3RpdGxlXVxuICAgICkgOiBudWxsO1xuICAgIHZhciBkZXNjcmlwdGlvbkRvbSA9IGRlc2NyaXB0aW9uID8gaChcbiAgICAgICdkaXYnLFxuICAgICAgeyAnY2xhc3MnOiBwcmVmaXhDbHMgKyAnLW1ldGEtZGVzY3JpcHRpb24nIH0sXG4gICAgICBbZGVzY3JpcHRpb25dXG4gICAgKSA6IG51bGw7XG4gICAgdmFyIE1ldGFEZXRhaWwgPSB0aXRsZURvbSB8fCBkZXNjcmlwdGlvbkRvbSA/IGgoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgJ2NsYXNzJzogcHJlZml4Q2xzICsgJy1tZXRhLWRldGFpbCcgfSxcbiAgICAgIFt0aXRsZURvbSwgZGVzY3JpcHRpb25Eb21dXG4gICAgKSA6IG51bGw7XG4gICAgcmV0dXJuIGgoXG4gICAgICAnZGl2JyxcbiAgICAgIF9tZXJnZUpTWFByb3BzKFt7IG9uOiBnZXRMaXN0ZW5lcnModGhpcykgfSwgeyAnY2xhc3MnOiBjbGFzc1N0cmluZyB9XSksXG4gICAgICBbYXZhdGFyRG9tLCBNZXRhRGV0YWlsXVxuICAgICk7XG4gIH1cbn07IiwiaW1wb3J0IENhcmQgZnJvbSAnLi9DYXJkJztcbmltcG9ydCBNZXRhIGZyb20gJy4vTWV0YSc7XG5pbXBvcnQgR3JpZCBmcm9tICcuL0dyaWQnO1xuaW1wb3J0IEJhc2UgZnJvbSAnLi4vYmFzZSc7XG5DYXJkLk1ldGEgPSBNZXRhO1xuQ2FyZC5HcmlkID0gR3JpZDtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbkNhcmQuaW5zdGFsbCA9IGZ1bmN0aW9uIChWdWUpIHtcbiAgVnVlLnVzZShCYXNlKTtcbiAgVnVlLmNvbXBvbmVudChDYXJkLm5hbWUsIENhcmQpO1xuICBWdWUuY29tcG9uZW50KE1ldGEubmFtZSwgTWV0YSk7XG4gIFZ1ZS5jb21wb25lbnQoR3JpZC5uYW1lLCBHcmlkKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmQ7IiwiaW1wb3J0ICcuLi8uLi9zdHlsZS9pbmRleC5sZXNzJztcbmltcG9ydCAnLi9pbmRleC5sZXNzJztcblxuLy8gc3R5bGUgZGVwZW5kZW5jaWVzXG5pbXBvcnQgJy4uLy4uL3RhYnMvc3R5bGUnO1xuaW1wb3J0ICcuLi8uLi9yb3cvc3R5bGUnO1xuaW1wb3J0ICcuLi8uLi9jb2wvc3R5bGUnOyIsIlxudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAhLi9pbmRleC5sZXNzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMCEuL2luZGV4Lmxlc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS04LTIhLi4vLi4vLi4vLi4vbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vbGVzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTAhLi9pbmRleC5sZXNzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNCBmb290ZXItY2xpY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWcvYmFja2VuZC9icmFuZC9sb2dvLnN2Z1wiIHN0eWxlPVwiXCI+LS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkvDqm5oIHRow7RuZyB0aW4gY+G7p2EgY2jDum5nIHTDtGk8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEtaWNvbiB0eXBlPVwieW91dHViZVwiIHN0eWxlPVwiZm9udC1zaXplOiAzMHB4XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhLWljb24gdHlwZT1cInNreXBlXCIgc3R5bGU9XCJmb250LXNpemU6IDMwcHhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEtaWNvbiB0eXBlPVwidHdpdHRlclwiIHN0eWxlPVwiZm9udC1zaXplOiAzMHB4XCIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhLWljb24gdHlwZT1cImZhY2Vib29rXCIgc3R5bGU9XCJmb250LXNpemU6IDMwcHhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtc20tMyBjb2wteHMtMTIgZm9vdGVyLWNsaWNrXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2xpa2VkXCI+VEjDlE5HIFRJTjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidG9nZ2xlLW1uIGxpc3QtbWVudVwiIHN0eWxlPVwiXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwiZWZcIiBocmVmPVwiL1wiIHRpdGxlPVwiVHJhbmcgY2jhu6dcIj5UcmFuZyBjaOG7pzwvYT48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cImVmXCIgaHJlZj1cIi9naW9pLXRoaWV1XCIgdGl0bGU9XCJHaeG7m2kgdGhp4buHdVwiPkdp4bubaSB0aGnhu4d1PC9hPjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwiZWZcIiBocmVmPVwiL2NvbGxlY3Rpb25zL2FsbFwiIHRpdGxlPVwiU+G6o24gcGjhuqltXCI+U+G6o24gcGjhuqltPC9hPjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwiZWZcIiBocmVmPVwiL3Rpbi10dWNcIiB0aXRsZT1cIlRpbiB04bupY1wiPlRpbiB04bupYzwvYT48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cImVmXCIgaHJlZj1cIi9saWVuLWhlXCIgdGl0bGU9XCJMacOqbiBo4buHXCI+TGnDqm4gaOG7hzwvYT48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0yIGNvbC1tZC0yIGNvbC1zbS0zIGNvbC14cy0xMiBmb290ZXItY2xpY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjbGlrZWRcIj5DSMONTkggU8OBQ0g8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInRvZ2dsZS1tbiBsaXN0LW1lbnVcIiBzdHlsZT1cIlwiPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cImVmXCIgaHJlZj1cIi9cIiB0aXRsZT1cIlRyYW5nIGNo4bunXCI+VHJhbmcgY2jhu6c8L2E+PC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJlZlwiIGhyZWY9XCIvZ2lvaS10aGlldVwiIHRpdGxlPVwiR2nhu5tpIHRoaeG7h3VcIj5HaeG7m2kgdGhp4buHdTwvYT48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cImVmXCIgaHJlZj1cIi9jb2xsZWN0aW9ucy9hbGxcIiB0aXRsZT1cIlPhuqNuIHBo4bqpbVwiPlPhuqNuIHBo4bqpbTwvYT48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cImVmXCIgaHJlZj1cIi90aW4tdHVjXCIgdGl0bGU9XCJUaW4gdOG7qWNcIj5UaW4gdOG7qWM8L2E+PC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJlZlwiIGhyZWY9XCIvbGllbi1oZVwiIHRpdGxlPVwiTGnDqm4gaOG7h1wiPkxpw6puIGjhu4c8L2E+PC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNCBjb2wtbWQtNCBjb2wtc20tMTIgY29sLXhzLTEyIGZvb3Rlci1jbGljayBmb290ZXItY29sLWxhc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjbGlrZWRcIj5USMOUTkcgVElOIExJw4pOIEjhu4Y8L2g1PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbGFzc2ljLXRleHQtd2lkZ2V0IGluZm8tZm9vdGVyXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGkgY2xhc3M9XCJmYSBmYS1tYXAtbWFya2VyXCI+PC9pPlThuqduZyA0ICwgdMOyYSBuaMOgIGJpdGV4dGNvIE5hbUxvbmcuIFRQLkhDTTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGkgY2xhc3M9XCJmYSBmYS1waG9uZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJ0ZWw6MDk3MzQ1ODk1OVwiIHRpdGxlPVwiMDk3MzQ1ODk1OVwiPiAwOTA4ODU1NDgzPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxpIGNsYXNzPVwiZmEgZmEtZW52ZWxvcGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwibWFpbHRvOmxlaGlldS5zdXBlckBnbWFpbC5jb21cIiB0aXRsZT1cImxlaGlldS5zdXBlckBnbWFpbC5jb21cIj50aHVhbm52QGZpbXBsdXMudm48L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tLWZvb3RlciBmb3RfY29weXJpZ2h0IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQuG6o24gcXV54buBbiB0aHXhu5ljIHbhu4FcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpY2Vuc2VcIj5BZG1pbiBQdW48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICAgIGltcG9ydCB7IE1lbnUsIEljb24sIExpc3QsIElucHV0LCBDYXJkIH0gZnJvbSAnYW50LWRlc2lnbi12dWUnXG4gICAgd2luZG93LlZ1ZS51c2UoTWVudSk7XG4gICAgd2luZG93LlZ1ZS51c2UoSWNvbik7XG4gICAgd2luZG93LlZ1ZS51c2UoTGlzdCk7XG4gICAgd2luZG93LlZ1ZS51c2UoSW5wdXQpO1xuICAgIHdpbmRvdy5WdWUudXNlKENhcmQpO1xuICAgIGNvbnN0IEljb25Gb250ID0gSWNvbi5jcmVhdGVGcm9tSWNvbmZvbnRDTih7XG4gICAgICAgIHNjcmlwdFVybDogJy8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfOGQ1bDhmems1Yjg3aXVkaS5qcycsXG4gICAgfSk7XG4gICAgZXhwb3J0IGRlZmF1bHQge1xuICAgICAgICBjb21wb25lbnRzOiB7XG4gICAgICAgICAgICBJY29uRm9udCxcbiAgICAgICAgfSxcbiAgICB9XG48L3NjcmlwdD5cbjxzdHlsZSBzY29wZWQ+XG4gICAgLmZvb3RlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyZjJmMmY7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgIC5mb290ZXIgPj4+IC5mb290ZXItY2xpY2sge1xuICAgICAgICBjb2xvcjojRkZGO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIH1cbiAgICAuZm9vdGVyIC5mb290ZXItaW5mb3IgcCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5mb290ZXIgLmZvb3Rlci1pbmZvciAubG9nby1mb290ZXIgaW1nIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gICAgLmZvb3RlciBoNSB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogMCAwIDMwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5mb290ZXIgaDU6YWZ0ZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZjMDAwO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICB9XG4gICAgLmZvb3RlciAuZm9vdGVyLWNsaWNrIC5saXN0LW1lbnUgbGkge1xuICAgICAgICBwYWRkaW5nOiA1cHggMDtcbiAgICB9XG4gICAgLmZvb3RlciBhIHtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgfVxuICAgIC5mb290ZXIgLmZvb3Rlci1jbGljayAuaW5mby1mb290ZXIge1xuICAgICAgICBwYWRkaW5nLXRvcDogOHB4O1xuICAgIH1cbiAgICAuZm9vdGVyIC5mb290ZXItY2xpY2sgLmluZm8tZm9vdGVyIHAge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICB9XG4gICAgLmZvb3RlciAuZm9vdGVyLWNsaWNrIC5pbmZvLWZvb3RlciBwIGkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgY29sb3I6ICNmZmMwMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgd2lkdGg6IDIxcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmZvb3RlciAuZm90X2NvcHlyaWdodCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICB9XG4gICAgLmZvb3RlciAuZm90X2NvcHlyaWdodCAubGljZW5zZSwgZm9vdGVyIC5mb3RfY29weXJpZ2h0IGEge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6ICNmZmMwMDA7XG4gICAgfVxuICAgIC5mb290ZXIgLmZvdF9jb3B5cmlnaHQgLmJsb2NrLXhzIHtcbiAgICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICB9XG4gICAgLmxpc3QtbWVudSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG4gICAgLmZvb3Rlci1jbGljayB1bD5saTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmYzAwMDtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggLjNzO1xuICAgIH1cblxuICAgIC5mb290ZXItY2xpY2sgdWw+bGk6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmMwMDA7XG4gICAgfVxuPC9zdHlsZT5cbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBzdHlsZWxpbnQtZGlzYWJsZSBhdC1ydWxlLWVtcHR5LWxpbmUtYmVmb3JlLGF0LXJ1bGUtbmFtZS1zcGFjZS1hZnRlcixhdC1ydWxlLW5vLXVua25vd24gKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBuby1kdXBsaWNhdGUtc2VsZWN0b3JzICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgKi9cXG4vKiBzdHlsZWxpbnQtZGlzYWJsZSBkZWNsYXJhdGlvbi1iYW5nLXNwYWNlLWJlZm9yZSxuby1kdXBsaWNhdGUtc2VsZWN0b3JzLHN0cmluZy1uby1uZXdsaW5lICovXFxuLmFudC1jYXJkIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXZhcmlhbnQ6IHRhYnVsYXItbnVtcztcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAndG51bSc7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XFxufVxcbi5hbnQtY2FyZC1ob3ZlcmFibGUge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYW50LWNhcmQtaG92ZXJhYmxlOmhvdmVyIHtcXG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA5KTtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xcbn1cXG4uYW50LWNhcmQtYm9yZGVyZWQge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U4ZThlODtcXG59XFxuLmFudC1jYXJkLWhlYWQge1xcbiAgbWluLWhlaWdodDogNDhweDtcXG4gIG1hcmdpbi1ib3R0b206IC0xcHg7XFxuICBwYWRkaW5nOiAwIDI0cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZThlOGU4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4IDJweCAwIDA7XFxuICB6b29tOiAxO1xcbn1cXG4uYW50LWNhcmQtaGVhZDo6YmVmb3JlLFxcbi5hbnQtY2FyZC1oZWFkOjphZnRlciB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNvbnRlbnQ6ICcnO1xcbn1cXG4uYW50LWNhcmQtaGVhZDo6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcbi5hbnQtY2FyZC1oZWFkLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hbnQtY2FyZC1oZWFkLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nOiAxNnB4IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uYW50LWNhcmQtaGVhZCAuYW50LXRhYnMge1xcbiAgY2xlYXI6IGJvdGg7XFxuICBtYXJnaW4tYm90dG9tOiAtMTdweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmFudC1jYXJkLWhlYWQgLmFudC10YWJzLWJhciB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcXG59XFxuLmFudC1jYXJkLWV4dHJhIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgcGFkZGluZzogMTZweCAwO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uYW50LWNhcmQtYm9keSB7XFxuICBwYWRkaW5nOiAyNHB4O1xcbiAgem9vbTogMTtcXG59XFxuLmFudC1jYXJkLWJvZHk6OmJlZm9yZSxcXG4uYW50LWNhcmQtYm9keTo6YWZ0ZXIge1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBjb250ZW50OiAnJztcXG59XFxuLmFudC1jYXJkLWJvZHk6OmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG4uYW50LWNhcmQtY29udGFpbi1ncmlkOm5vdCguYW50LWNhcmQtbG9hZGluZykgLmFudC1jYXJkLWJvZHkge1xcbiAgbWFyZ2luOiAtMXB4IDAgMCAtMXB4O1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmFudC1jYXJkLWdyaWQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICB3aWR0aDogMzMuMzMlO1xcbiAgcGFkZGluZzogMjRweDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICBib3gtc2hhZG93OiAxcHggMCAwIDAgI2U4ZThlOCwgMCAxcHggMCAwICNlOGU4ZTgsIDFweCAxcHggMCAwICNlOGU4ZTgsIDFweCAwIDAgMCAjZThlOGU4IGluc2V0LCAwIDFweCAwIDAgI2U4ZThlOCBpbnNldDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG4uYW50LWNhcmQtZ3JpZC1ob3ZlcmFibGU6aG92ZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG4gIGJveC1zaGFkb3c6IDAgMTBweCAzNXB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcXG59XFxuLmFudC1jYXJkLWNvbnRhaW4tdGFicyA+IC5hbnQtY2FyZC1oZWFkIC5hbnQtY2FyZC1oZWFkLXRpdGxlIHtcXG4gIG1pbi1oZWlnaHQ6IDMycHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLmFudC1jYXJkLWNvbnRhaW4tdGFicyA+IC5hbnQtY2FyZC1oZWFkIC5hbnQtY2FyZC1leHRyYSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMDtcXG59XFxuLmFudC1jYXJkLWNvdmVyID4gKiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uYW50LWNhcmQtY292ZXIgaW1nIHtcXG4gIGJvcmRlci1yYWRpdXM6IDJweCAycHggMCAwO1xcbn1cXG4uYW50LWNhcmQtYWN0aW9ucyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGJhY2tncm91bmQ6ICNmMmY0Zjg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U4ZThlODtcXG4gIHpvb206IDE7XFxufVxcbi5hbnQtY2FyZC1hY3Rpb25zOjpiZWZvcmUsXFxuLmFudC1jYXJkLWFjdGlvbnM6OmFmdGVyIHtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgY29udGVudDogJyc7XFxufVxcbi5hbnQtY2FyZC1hY3Rpb25zOjphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG59XFxuLmFudC1jYXJkLWFjdGlvbnMgPiBsaSB7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbjogMTJweCAwO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5hbnQtY2FyZC1hY3Rpb25zID4gbGkgPiBzcGFuIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWluLXdpZHRoOiAzMnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5hbnQtY2FyZC1hY3Rpb25zID4gbGkgPiBzcGFuOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDE5MGZlO1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcXG59XFxuLmFudC1jYXJkLWFjdGlvbnMgPiBsaSA+IHNwYW4gYTpub3QoLmFudC1idG4pLFxcbi5hbnQtY2FyZC1hY3Rpb25zID4gbGkgPiBzcGFuID4gLmFudGljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ1KTtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgdHJhbnNpdGlvbjogY29sb3IgMC4zcztcXG59XFxuLmFudC1jYXJkLWFjdGlvbnMgPiBsaSA+IHNwYW4gYTpub3QoLmFudC1idG4pOmhvdmVyLFxcbi5hbnQtY2FyZC1hY3Rpb25zID4gbGkgPiBzcGFuID4gLmFudGljb246aG92ZXIge1xcbiAgY29sb3I6ICMwMTkwZmU7XFxufVxcbi5hbnQtY2FyZC1hY3Rpb25zID4gbGkgPiBzcGFuID4gLmFudGljb24ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxufVxcbi5hbnQtY2FyZC1hY3Rpb25zID4gbGk6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZThlOGU4O1xcbn1cXG4uYW50LWNhcmQtdHlwZS1pbm5lciAuYW50LWNhcmQtaGVhZCB7XFxuICBwYWRkaW5nOiAwIDI0cHg7XFxuICBiYWNrZ3JvdW5kOiAjZjJmNGY4O1xcbn1cXG4uYW50LWNhcmQtdHlwZS1pbm5lciAuYW50LWNhcmQtaGVhZC10aXRsZSB7XFxuICBwYWRkaW5nOiAxMnB4IDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5hbnQtY2FyZC10eXBlLWlubmVyIC5hbnQtY2FyZC1ib2R5IHtcXG4gIHBhZGRpbmc6IDE2cHggMjRweDtcXG59XFxuLmFudC1jYXJkLXR5cGUtaW5uZXIgLmFudC1jYXJkLWV4dHJhIHtcXG4gIHBhZGRpbmc6IDEzLjVweCAwO1xcbn1cXG4uYW50LWNhcmQtbWV0YSB7XFxuICBtYXJnaW46IC00cHggMDtcXG4gIHpvb206IDE7XFxufVxcbi5hbnQtY2FyZC1tZXRhOjpiZWZvcmUsXFxuLmFudC1jYXJkLW1ldGE6OmFmdGVyIHtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgY29udGVudDogJyc7XFxufVxcbi5hbnQtY2FyZC1tZXRhOjphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG59XFxuLmFudC1jYXJkLW1ldGEtYXZhdGFyIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgcGFkZGluZy1yaWdodDogMTZweDtcXG59XFxuLmFudC1jYXJkLW1ldGEtZGV0YWlsIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5hbnQtY2FyZC1tZXRhLWRldGFpbCA+IGRpdjpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuLmFudC1jYXJkLW1ldGEtdGl0bGUge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmFudC1jYXJkLW1ldGEtZGVzY3JpcHRpb24ge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxufVxcbi5hbnQtY2FyZC1sb2FkaW5nIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5hbnQtY2FyZC1sb2FkaW5nIC5hbnQtY2FyZC1ib2R5IHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uYW50LWNhcmQtbG9hZGluZy1jb250ZW50IHAge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uYW50LWNhcmQtbG9hZGluZy1ibG9jayB7XFxuICBoZWlnaHQ6IDE0cHg7XFxuICBtYXJnaW46IDRweCAwO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDIwNywgMjE2LCAyMjAsIDAuMiksIHJnYmEoMjA3LCAyMTYsIDIyMCwgMC40KSwgcmdiYSgyMDcsIDIxNiwgMjIwLCAwLjIpKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogNjAwJSA2MDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYW5pbWF0aW9uOiBjYXJkLWxvYWRpbmcgMS40cyBlYXNlIGluZmluaXRlO1xcbn1cXG5Aa2V5ZnJhbWVzIGNhcmQtbG9hZGluZyB7XFxuICAwJSxcXG4gIDEwMCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDUwJTtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgNTAlO1xcbiAgfVxcbn1cXG4uYW50LWNhcmQtc21hbGwgPiAuYW50LWNhcmQtaGVhZCB7XFxuICBtaW4taGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogMCAxMnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uYW50LWNhcmQtc21hbGwgPiAuYW50LWNhcmQtaGVhZCA+IC5hbnQtY2FyZC1oZWFkLXdyYXBwZXIgPiAuYW50LWNhcmQtaGVhZC10aXRsZSB7XFxuICBwYWRkaW5nOiA4cHggMDtcXG59XFxuLmFudC1jYXJkLXNtYWxsID4gLmFudC1jYXJkLWhlYWQgPiAuYW50LWNhcmQtaGVhZC13cmFwcGVyID4gLmFudC1jYXJkLWV4dHJhIHtcXG4gIHBhZGRpbmc6IDhweCAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uYW50LWNhcmQtc21hbGwgPiAuYW50LWNhcmQtYm9keSB7XFxuICBwYWRkaW5nOiAxMnB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5mb290ZXJbZGF0YS12LTVhZDI1OGM2XSB7XFxuICAgIGJhY2tncm91bmQ6ICMyZjJmMmY7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxufVxcbi5mb290ZXJbZGF0YS12LTVhZDI1OGM2XSAuZm9vdGVyLWNsaWNrIHtcXG4gICAgY29sb3I6I0ZGRjtcXG4gICAgbWFyZ2luLXRvcDogMzBweDtcXG59XFxuLmZvb3RlciAuZm9vdGVyLWluZm9yIHBbZGF0YS12LTVhZDI1OGM2XSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5mb290ZXIgLmZvb3Rlci1pbmZvciAubG9nby1mb290ZXIgaW1nW2RhdGEtdi01YWQyNThjNl0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG4uZm9vdGVyIGg1W2RhdGEtdi01YWQyNThjNl0ge1xcbiAgICBjb2xvcjogI0ZGRjtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXJnaW46IDAgMCAzMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uZm9vdGVyIGg1W2RhdGEtdi01YWQyNThjNl06YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgY29udGVudDogJyc7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZmZjMDAwO1xcbiAgICBoZWlnaHQ6IDJweDtcXG59XFxuLmZvb3RlciAuZm9vdGVyLWNsaWNrIC5saXN0LW1lbnUgbGlbZGF0YS12LTVhZDI1OGM2XSB7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcbn1cXG4uZm9vdGVyIGFbZGF0YS12LTVhZDI1OGM2XSB7XFxuICAgIGNvbG9yOiAjRkZGO1xcbn1cXG4uZm9vdGVyIC5mb290ZXItY2xpY2sgLmluZm8tZm9vdGVyW2RhdGEtdi01YWQyNThjNl0ge1xcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xcbn1cXG4uZm9vdGVyIC5mb290ZXItY2xpY2sgLmluZm8tZm9vdGVyIHBbZGF0YS12LTVhZDI1OGM2XSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbn1cXG4uZm9vdGVyIC5mb290ZXItY2xpY2sgLmluZm8tZm9vdGVyIHAgaVtkYXRhLXYtNWFkMjU4YzZdIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIGNvbG9yOiAjZmZjMDAwO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIHdpZHRoOiAyMXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mb290ZXIgLmZvdF9jb3B5cmlnaHRbZGF0YS12LTVhZDI1OGM2XSB7XFxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xcbiAgICBjb2xvcjogI0ZGRjtcXG59XFxuLmZvb3RlciAuZm90X2NvcHlyaWdodCAubGljZW5zZVtkYXRhLXYtNWFkMjU4YzZdLCBmb290ZXIgLmZvdF9jb3B5cmlnaHQgYVtkYXRhLXYtNWFkMjU4YzZdIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGNvbG9yOiAjZmZjMDAwO1xcbn1cXG4uZm9vdGVyIC5mb3RfY29weXJpZ2h0IC5ibG9jay14c1tkYXRhLXYtNWFkMjU4YzZdIHtcXG4gICAgbWFyZ2luOiAwIDVweDtcXG59XFxuLmxpc3QtbWVudVtkYXRhLXYtNWFkMjU4YzZdIHtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG4uZm9vdGVyLWNsaWNrIHVsPmxpW2RhdGEtdi01YWQyNThjNl06OmFmdGVyIHtcXG4gICAgY29udGVudDogJyc7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogMDtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQ6ICNmZmMwMDA7XFxuICAgIHRyYW5zaXRpb246IHdpZHRoIC4zcztcXG59XFxuLmZvb3Rlci1jbGljayB1bD5saVtkYXRhLXYtNWFkMjU4YzZdOmhvdmVyOjphZnRlciB7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZjMDAwO1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YWQyNThjNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWFkMjU4YzYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YWQyNThjNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvb3RlclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTQgZm9vdGVyLWNsaWNrXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIlwiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJLw6puaCB0aMO0bmcgdGluIGPhu6dhIGNow7puZyB0w7RpXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjMwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInlvdXR1YmVcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMzBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic2t5cGVcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMzBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidHdpdHRlclwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIzMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJmYWNlYm9va1wiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oMilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX20oMylcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtc20tMyBjb2wteHMtMTIgZm9vdGVyLWNsaWNrXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcImNsaWtlZFwiIH0sIFtfdm0uX3YoXCJUSMOUTkcgVElOXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJ0b2dnbGUtbW4gbGlzdC1tZW51XCIgfSwgW1xuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVmXCIsIGF0dHJzOiB7IGhyZWY6IFwiL1wiLCB0aXRsZTogXCJUcmFuZyBjaOG7p1wiIH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlRyYW5nIGNo4bunXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlZlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL2dpb2ktdGhpZXVcIiwgdGl0bGU6IFwiR2nhu5tpIHRoaeG7h3VcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJHaeG7m2kgdGhp4buHdVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZWZcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIi9jb2xsZWN0aW9ucy9hbGxcIiwgdGl0bGU6IFwiU+G6o24gcGjhuqltXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiU+G6o24gcGjhuqltXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlZlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL3Rpbi10dWNcIiwgdGl0bGU6IFwiVGluIHThu6ljXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiVGluIHThu6ljXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlZlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL2xpZW4taGVcIiwgdGl0bGU6IFwiTGnDqm4gaOG7h1wiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkxpw6puIGjhu4dcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTIgY29sLW1kLTIgY29sLXNtLTMgY29sLXhzLTEyIGZvb3Rlci1jbGlja1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJjbGlrZWRcIiB9LCBbX3ZtLl92KFwiQ0jDjU5IIFPDgUNIXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJ0b2dnbGUtbW4gbGlzdC1tZW51XCIgfSwgW1xuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVmXCIsIGF0dHJzOiB7IGhyZWY6IFwiL1wiLCB0aXRsZTogXCJUcmFuZyBjaOG7p1wiIH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlRyYW5nIGNo4bunXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlZlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL2dpb2ktdGhpZXVcIiwgdGl0bGU6IFwiR2nhu5tpIHRoaeG7h3VcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJHaeG7m2kgdGhp4buHdVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZWZcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIi9jb2xsZWN0aW9ucy9hbGxcIiwgdGl0bGU6IFwiU+G6o24gcGjhuqltXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiU+G6o24gcGjhuqltXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlZlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL3Rpbi10dWNcIiwgdGl0bGU6IFwiVGluIHThu6ljXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiVGluIHThu6ljXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlZlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL2xpZW4taGVcIiwgdGl0bGU6IFwiTGnDqm4gaOG7h1wiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkxpw6puIGjhu4dcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJjb2wtbGctNCBjb2wtbWQtNCBjb2wtc20tMTIgY29sLXhzLTEyIGZvb3Rlci1jbGljayBmb290ZXItY29sLWxhc3RcIlxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcImNsaWtlZFwiIH0sIFtfdm0uX3YoXCJUSMOUTkcgVElOIExJw4pOIEjhu4ZcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbGFzc2ljLXRleHQtd2lkZ2V0IGluZm8tZm9vdGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1tYXAtbWFya2VyXCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCJU4bqnbmcgNCAsIHTDsmEgbmjDoCBiaXRleHRjbyBOYW1Mb25nLiBUUC5IQ01cIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1waG9uZVwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBcInRlbDowOTczNDU4OTU5XCIsIHRpdGxlOiBcIjA5NzM0NTg5NTlcIiB9IH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCIgMDkwODg1NTQ4M1wiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1lbnZlbG9wZVwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBocmVmOiBcIm1haWx0bzpsZWhpZXUuc3VwZXJAZ21haWwuY29tXCIsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJsZWhpZXUuc3VwZXJAZ21haWwuY29tXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJ0aHVhbm52QGZpbXBsdXMudm5cIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tLWZvb3RlciBmb3RfY29weXJpZ2h0IHRleHQtY2VudGVyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBC4bqjbiBxdXnhu4FuIHRodeG7mWMgduG7gVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxpY2Vuc2VcIiB9LCBbX3ZtLl92KFwiQWRtaW4gUHVuXCIpXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXVxuICAgIClcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YWQyNThjNiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YWQyNThjNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNWFkMjU4YzZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvcHJpdmF0ZS92YXIvd3d3L0pwdW5TaG9wL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzVhZDI1OGM2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVhZDI1OGM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVhZDI1OGM2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWFkMjU4YzYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNWFkMjU4YzYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dENvbXBvbmVudHMvRnJvbnRlbmQvRm9vdGVyL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTQtMCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVhZDI1OGM2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YWQyNThjNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWFkMjU4YzYmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9