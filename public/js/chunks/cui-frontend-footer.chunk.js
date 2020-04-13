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
exports.push([module.i, "\n.footer[data-v-5ad258c6] {\n    background: #2f2f2f;\n    padding: 20px;\n}\n.footer[data-v-5ad258c6] .footer-click {\n    color:#FFF;\n    margin-top: 30px;\n}\n.footer .footer-infor p[data-v-5ad258c6] {\n    margin-bottom: 10px;\n}\n.footer .footer-infor .logo-footer img[data-v-5ad258c6] {\n    margin-bottom: 20px;\n}\n.footer h5[data-v-5ad258c6] {\n    color: #FFF;\n    position: relative;\n    margin: 0 0 30px;\n    padding-bottom: 10px;\n    font-size: 14px;\n}\n.footer h5[data-v-5ad258c6]:after {\n    position: absolute;\n    left: 0;\n    bottom: 0;\n    content: '';\n    width: 50px;\n    background: #ffc000;\n    height: 2px;\n}\n.footer .footer-click .list-menu li[data-v-5ad258c6] {\n    padding: 5px 0;\n}\n.footer a[data-v-5ad258c6] {\n    color: #FFF;\n}\n.footer .footer-click .info-footer[data-v-5ad258c6] {\n    padding-top: 8px;\n}\n.footer .footer-click .info-footer p[data-v-5ad258c6] {\n    position: relative;\n    padding-left: 30px;\n}\n.footer .footer-click .info-footer p i[data-v-5ad258c6] {\n    position: absolute;\n    left: 0;\n    top: 0;\n    color: #ffc000;\n    font-size: 20px;\n    width: 21px;\n    text-align: center;\n}\n.footer .fot_copyright[data-v-5ad258c6] {\n    padding-bottom: 20px;\n    color: #FFF;\n}\n.footer .fot_copyright .banquyen[data-v-5ad258c6], footer .fot_copyright a[data-v-5ad258c6] {\n    font-weight: bold;\n    color: #ffc000;\n}\n.footer .fot_copyright .block-xs[data-v-5ad258c6] {\n    margin: 0 5px;\n}\n", ""]);



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
          _c("div", {}, [
            _vm._v(
              "\n                            Bản quyền thuộc về\n                            "
            ),
            _c("span", { staticClass: "banquyen" }, [_vm._v("CM! Team")])
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50LWRlc2lnbi12dWUvZXMvY2FyZC9DYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnQtZGVzaWduLXZ1ZS9lcy9jYXJkL0dyaWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudC1kZXNpZ24tdnVlL2VzL2NhcmQvTWV0YS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50LWRlc2lnbi12dWUvZXMvY2FyZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50LWRlc2lnbi12dWUvZXMvY2FyZC9zdHlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50LWRlc2lnbi12dWUvZXMvY2FyZC9zdHlsZS9pbmRleC5sZXNzPzA0NmIiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dENvbXBvbmVudHMvRnJvbnRlbmQvRm9vdGVyL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50LWRlc2lnbi12dWUvZXMvY2FyZC9zdHlsZS9pbmRleC5sZXNzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dENvbXBvbmVudHMvRnJvbnRlbmQvRm9vdGVyL2luZGV4LnZ1ZT82ODI5Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dENvbXBvbmVudHMvRnJvbnRlbmQvRm9vdGVyL2luZGV4LnZ1ZT85MTczIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dENvbXBvbmVudHMvRnJvbnRlbmQvRm9vdGVyL2luZGV4LnZ1ZT85NGJjIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9qcy9mcm9udGVuZC9jb21wb25lbnRzL0xheW91dENvbXBvbmVudHMvRnJvbnRlbmQvRm9vdGVyL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9MYXlvdXRDb21wb25lbnRzL0Zyb250ZW5kL0Zvb3Rlci9pbmRleC52dWU/MGI5YiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9MYXlvdXRDb21wb25lbnRzL0Zyb250ZW5kL0Zvb3Rlci9pbmRleC52dWU/N2I2OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvanMvZnJvbnRlbmQvY29tcG9uZW50cy9MYXlvdXRDb21wb25lbnRzL0Zyb250ZW5kL0Zvb3Rlci9pbmRleC52dWU/NmFmOCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEQ7QUFDSztBQUN4QztBQUNBO0FBQ0Y7QUFDQTtBQUNrQjtBQUMyRDtBQUMzRDtBQUNjOztBQUV6RCxjQUFjLDZDQUFJOztBQUVIO0FBQ2Y7QUFDQSxXQUFXLHVEQUFTO0FBQ3BCO0FBQ0EsZUFBZSx1REFBUztBQUN4QixXQUFXLHVEQUFTO0FBQ3BCLFdBQVcsdURBQVM7QUFDcEIsY0FBYyx1REFBUztBQUN2QixlQUFlLHVEQUFTO0FBQ3hCLGVBQWUsdURBQVM7QUFDeEIsYUFBYSx1REFBUztBQUN0QixlQUFlLHVEQUFTO0FBQ3hCLFVBQVUsdURBQVM7QUFDbkIsVUFBVSx1REFBUztBQUNuQixhQUFhLHVEQUFTO0FBQ3RCLGFBQWEsdURBQVM7QUFDdEIsd0JBQXdCLHVEQUFTO0FBQ2pDLGtCQUFrQix1REFBUztBQUMzQix5QkFBeUIsdURBQVM7QUFDbEMsR0FBRztBQUNIO0FBQ0EscUJBQXFCO0FBQ3JCLGVBQWUsb0VBQW1CO0FBQ2xDLE9BQU87QUFDUCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFD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QTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBNk0sQ0FBZ0IsaVBBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBak87QUFBQTtBQUFBO0FBQUE7QUFBc2MsQ0FBZ0Isd2FBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBMWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzL2NodW5rcy9jdWktZnJvbnRlbmQtZm9vdGVyLmNodW5rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9tZXJnZUpTWFByb3BzIGZyb20gJ2JhYmVsLWhlbHBlci12dWUtanN4LW1lcmdlLXByb3BzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBvbWl0IGZyb20gJ29taXQuanMnO1xuaW1wb3J0IFRhYnMgZnJvbSAnLi4vdGFicyc7XG5pbXBvcnQgUm93IGZyb20gJy4uL3Jvdyc7XG5pbXBvcnQgQ29sIGZyb20gJy4uL2NvbCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJy4uL191dGlsL3Z1ZS10eXBlcyc7XG5pbXBvcnQgeyBnZXRDb21wb25lbnRGcm9tUHJvcCwgZ2V0U2xvdE9wdGlvbnMsIGZpbHRlckVtcHR5LCBnZXRMaXN0ZW5lcnMgfSBmcm9tICcuLi9fdXRpbC9wcm9wcy11dGlsJztcbmltcG9ydCBCYXNlTWl4aW4gZnJvbSAnLi4vX3V0aWwvQmFzZU1peGluJztcbmltcG9ydCB7IENvbmZpZ0NvbnN1bWVyUHJvcHMgfSBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuXG52YXIgVGFiUGFuZSA9IFRhYnMuVGFiUGFuZTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiAnQUNhcmQnLFxuICBtaXhpbnM6IFtCYXNlTWl4aW5dLFxuICBwcm9wczoge1xuICAgIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZTogUHJvcFR5cGVzLmFueSxcbiAgICBleHRyYTogUHJvcFR5cGVzLmFueSxcbiAgICBib3JkZXJlZDogUHJvcFR5cGVzLmJvb2wuZGVmKHRydWUpLFxuICAgIGJvZHlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgICBoZWFkU3R5bGU6IFByb3BUeXBlcy5vYmplY3QsXG4gICAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wuZGVmKGZhbHNlKSxcbiAgICBob3ZlcmFibGU6IFByb3BUeXBlcy5ib29sLmRlZihmYWxzZSksXG4gICAgdHlwZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzaXplOiBQcm9wVHlwZXMub25lT2YoWydkZWZhdWx0JywgJ3NtYWxsJ10pLFxuICAgIGFjdGlvbnM6IFByb3BUeXBlcy5hbnksXG4gICAgdGFiTGlzdDogUHJvcFR5cGVzLmFycmF5LFxuICAgIHRhYkJhckV4dHJhQ29udGVudDogUHJvcFR5cGVzLmFueSxcbiAgICBhY3RpdmVUYWJLZXk6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZGVmYXVsdEFjdGl2ZVRhYktleTogUHJvcFR5cGVzLnN0cmluZ1xuICB9LFxuICBpbmplY3Q6IHtcbiAgICBjb25maWdQcm92aWRlcjogeyAnZGVmYXVsdCc6IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gQ29uZmlnQ29uc3VtZXJQcm9wcztcbiAgICAgIH0gfVxuICB9LFxuICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICB3aWRlclBhZGRpbmc6IGZhbHNlXG4gICAgfTtcbiAgfSxcblxuICBtZXRob2RzOiB7XG4gICAgZ2V0QWN0aW9uOiBmdW5jdGlvbiBnZXRBY3Rpb24oYWN0aW9ucykge1xuICAgICAgdmFyIGggPSB0aGlzLiRjcmVhdGVFbGVtZW50O1xuXG4gICAgICB2YXIgYWN0aW9uTGlzdCA9IGFjdGlvbnMubWFwKGZ1bmN0aW9uIChhY3Rpb24sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBoKFxuICAgICAgICAgICdsaScsXG4gICAgICAgICAgeyBzdHlsZTogeyB3aWR0aDogMTAwIC8gYWN0aW9ucy5sZW5ndGggKyAnJScgfSwga2V5OiAnYWN0aW9uLScgKyBpbmRleCB9LFxuICAgICAgICAgIFtoKCdzcGFuJywgW2FjdGlvbl0pXVxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gYWN0aW9uTGlzdDtcbiAgICB9LFxuICAgIG9uVGFiQ2hhbmdlOiBmdW5jdGlvbiBvblRhYkNoYW5nZShrZXkpIHtcbiAgICAgIHRoaXMuJGVtaXQoJ3RhYkNoYW5nZScsIGtleSk7XG4gICAgfSxcbiAgICBpc0NvbnRhaW5HcmlkOiBmdW5jdGlvbiBpc0NvbnRhaW5HcmlkKCkge1xuICAgICAgdmFyIG9iaiA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG5cbiAgICAgIHZhciBjb250YWluR3JpZCA9IHZvaWQgMDtcbiAgICAgIG9iai5mb3JFYWNoKGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIGlmIChlbGVtZW50ICYmIGdldFNsb3RPcHRpb25zKGVsZW1lbnQpLl9fQU5UX0NBUkRfR1JJRCkge1xuICAgICAgICAgIGNvbnRhaW5HcmlkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gY29udGFpbkdyaWQ7XG4gICAgfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX2NsYXNzU3RyaW5nLCBfcHJvcHM7XG5cbiAgICB2YXIgaCA9IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgXyRwcm9wcyA9IHRoaXMuJHByb3BzLFxuICAgICAgICBjdXN0b21pemVQcmVmaXhDbHMgPSBfJHByb3BzLnByZWZpeENscyxcbiAgICAgICAgXyRwcm9wcyRoZWFkU3R5bGUgPSBfJHByb3BzLmhlYWRTdHlsZSxcbiAgICAgICAgaGVhZFN0eWxlID0gXyRwcm9wcyRoZWFkU3R5bGUgPT09IHVuZGVmaW5lZCA/IHt9IDogXyRwcm9wcyRoZWFkU3R5bGUsXG4gICAgICAgIF8kcHJvcHMkYm9keVN0eWxlID0gXyRwcm9wcy5ib2R5U3R5bGUsXG4gICAgICAgIGJvZHlTdHlsZSA9IF8kcHJvcHMkYm9keVN0eWxlID09PSB1bmRlZmluZWQgPyB7fSA6IF8kcHJvcHMkYm9keVN0eWxlLFxuICAgICAgICBsb2FkaW5nID0gXyRwcm9wcy5sb2FkaW5nLFxuICAgICAgICBfJHByb3BzJGJvcmRlcmVkID0gXyRwcm9wcy5ib3JkZXJlZCxcbiAgICAgICAgYm9yZGVyZWQgPSBfJHByb3BzJGJvcmRlcmVkID09PSB1bmRlZmluZWQgPyB0cnVlIDogXyRwcm9wcyRib3JkZXJlZCxcbiAgICAgICAgXyRwcm9wcyRzaXplID0gXyRwcm9wcy5zaXplLFxuICAgICAgICBzaXplID0gXyRwcm9wcyRzaXplID09PSB1bmRlZmluZWQgPyAnZGVmYXVsdCcgOiBfJHByb3BzJHNpemUsXG4gICAgICAgIHR5cGUgPSBfJHByb3BzLnR5cGUsXG4gICAgICAgIHRhYkxpc3QgPSBfJHByb3BzLnRhYkxpc3QsXG4gICAgICAgIGhvdmVyYWJsZSA9IF8kcHJvcHMuaG92ZXJhYmxlLFxuICAgICAgICBhY3RpdmVUYWJLZXkgPSBfJHByb3BzLmFjdGl2ZVRhYktleSxcbiAgICAgICAgZGVmYXVsdEFjdGl2ZVRhYktleSA9IF8kcHJvcHMuZGVmYXVsdEFjdGl2ZVRhYktleTtcblxuXG4gICAgdmFyIGdldFByZWZpeENscyA9IHRoaXMuY29uZmlnUHJvdmlkZXIuZ2V0UHJlZml4Q2xzO1xuICAgIHZhciBwcmVmaXhDbHMgPSBnZXRQcmVmaXhDbHMoJ2NhcmQnLCBjdXN0b21pemVQcmVmaXhDbHMpO1xuXG4gICAgdmFyICRzbG90cyA9IHRoaXMuJHNsb3RzLFxuICAgICAgICAkc2NvcGVkU2xvdHMgPSB0aGlzLiRzY29wZWRTbG90cztcblxuICAgIHZhciB0YWJCYXJFeHRyYUNvbnRlbnQgPSBnZXRDb21wb25lbnRGcm9tUHJvcCh0aGlzLCAndGFiQmFyRXh0cmFDb250ZW50Jyk7XG4gICAgdmFyIGNsYXNzU3RyaW5nID0gKF9jbGFzc1N0cmluZyA9IHt9LCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzU3RyaW5nLCAnJyArIHByZWZpeENscywgdHJ1ZSksIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NTdHJpbmcsIHByZWZpeENscyArICctbG9hZGluZycsIGxvYWRpbmcpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzU3RyaW5nLCBwcmVmaXhDbHMgKyAnLWJvcmRlcmVkJywgYm9yZGVyZWQpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzU3RyaW5nLCBwcmVmaXhDbHMgKyAnLWhvdmVyYWJsZScsICEhaG92ZXJhYmxlKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc1N0cmluZywgcHJlZml4Q2xzICsgJy1jb250YWluLWdyaWQnLCB0aGlzLmlzQ29udGFpbkdyaWQoJHNsb3RzWydkZWZhdWx0J10pKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc1N0cmluZywgcHJlZml4Q2xzICsgJy1jb250YWluLXRhYnMnLCB0YWJMaXN0ICYmIHRhYkxpc3QubGVuZ3RoKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc1N0cmluZywgcHJlZml4Q2xzICsgJy0nICsgc2l6ZSwgc2l6ZSAhPT0gJ2RlZmF1bHQnKSwgX2RlZmluZVByb3BlcnR5KF9jbGFzc1N0cmluZywgcHJlZml4Q2xzICsgJy10eXBlLScgKyB0eXBlLCAhIXR5cGUpLCBfY2xhc3NTdHJpbmcpO1xuXG4gICAgdmFyIGxvYWRpbmdCbG9ja1N0eWxlID0gYm9keVN0eWxlLnBhZGRpbmcgPT09IDAgfHwgYm9keVN0eWxlLnBhZGRpbmcgPT09ICcwcHgnID8geyBwYWRkaW5nOiAyNCB9IDogdW5kZWZpbmVkO1xuXG4gICAgdmFyIGxvYWRpbmdCbG9jayA9IGgoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgJ2NsYXNzJzogcHJlZml4Q2xzICsgJy1sb2FkaW5nLWNvbnRlbnQnLCBzdHlsZTogbG9hZGluZ0Jsb2NrU3R5bGUgfSxcbiAgICAgIFtoKFxuICAgICAgICBSb3csXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBndXR0ZXI6IDggfVxuICAgICAgICB9LFxuICAgICAgICBbaChcbiAgICAgICAgICBDb2wsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHsgc3BhbjogMjIgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2goJ2RpdicsIHsgJ2NsYXNzJzogcHJlZml4Q2xzICsgJy1sb2FkaW5nLWJsb2NrJyB9KV1cbiAgICAgICAgKV1cbiAgICAgICksIGgoXG4gICAgICAgIFJvdyxcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IGd1dHRlcjogOCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtoKFxuICAgICAgICAgIENvbCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczogeyBzcGFuOiA4IH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtoKCdkaXYnLCB7ICdjbGFzcyc6IHByZWZpeENscyArICctbG9hZGluZy1ibG9jaycgfSldXG4gICAgICAgICksIGgoXG4gICAgICAgICAgQ29sLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNwYW46IDE1IH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtoKCdkaXYnLCB7ICdjbGFzcyc6IHByZWZpeENscyArICctbG9hZGluZy1ibG9jaycgfSldXG4gICAgICAgICldXG4gICAgICApLCBoKFxuICAgICAgICBSb3csXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBndXR0ZXI6IDggfVxuICAgICAgICB9LFxuICAgICAgICBbaChcbiAgICAgICAgICBDb2wsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHsgc3BhbjogNiB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbaCgnZGl2JywgeyAnY2xhc3MnOiBwcmVmaXhDbHMgKyAnLWxvYWRpbmctYmxvY2snIH0pXVxuICAgICAgICApLCBoKFxuICAgICAgICAgIENvbCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczogeyBzcGFuOiAxOCB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbaCgnZGl2JywgeyAnY2xhc3MnOiBwcmVmaXhDbHMgKyAnLWxvYWRpbmctYmxvY2snIH0pXVxuICAgICAgICApXVxuICAgICAgKSwgaChcbiAgICAgICAgUm93LFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgZ3V0dGVyOiA4IH1cbiAgICAgICAgfSxcbiAgICAgICAgW2goXG4gICAgICAgICAgQ29sLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNwYW46IDEzIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtoKCdkaXYnLCB7ICdjbGFzcyc6IHByZWZpeENscyArICctbG9hZGluZy1ibG9jaycgfSldXG4gICAgICAgICksIGgoXG4gICAgICAgICAgQ29sLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNwYW46IDkgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2goJ2RpdicsIHsgJ2NsYXNzJzogcHJlZml4Q2xzICsgJy1sb2FkaW5nLWJsb2NrJyB9KV1cbiAgICAgICAgKV1cbiAgICAgICksIGgoXG4gICAgICAgIFJvdyxcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IGd1dHRlcjogOCB9XG4gICAgICAgIH0sXG4gICAgICAgIFtoKFxuICAgICAgICAgIENvbCxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhdHRyczogeyBzcGFuOiA0IH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtoKCdkaXYnLCB7ICdjbGFzcyc6IHByZWZpeENscyArICctbG9hZGluZy1ibG9jaycgfSldXG4gICAgICAgICksIGgoXG4gICAgICAgICAgQ29sLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNwYW46IDMgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2goJ2RpdicsIHsgJ2NsYXNzJzogcHJlZml4Q2xzICsgJy1sb2FkaW5nLWJsb2NrJyB9KV1cbiAgICAgICAgKSwgaChcbiAgICAgICAgICBDb2wsXG4gICAgICAgICAge1xuICAgICAgICAgICAgYXR0cnM6IHsgc3BhbjogMTYgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW2goJ2RpdicsIHsgJ2NsYXNzJzogcHJlZml4Q2xzICsgJy1sb2FkaW5nLWJsb2NrJyB9KV1cbiAgICAgICAgKV1cbiAgICAgICldXG4gICAgKTtcblxuICAgIHZhciBoYXNBY3RpdmVUYWJLZXkgPSBhY3RpdmVUYWJLZXkgIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgdGFic1Byb3BzID0ge1xuICAgICAgcHJvcHM6IChfcHJvcHMgPSB7XG4gICAgICAgIHNpemU6ICdsYXJnZSdcbiAgICAgIH0sIF9kZWZpbmVQcm9wZXJ0eShfcHJvcHMsIGhhc0FjdGl2ZVRhYktleSA/ICdhY3RpdmVLZXknIDogJ2RlZmF1bHRBY3RpdmVLZXknLCBoYXNBY3RpdmVUYWJLZXkgPyBhY3RpdmVUYWJLZXkgOiBkZWZhdWx0QWN0aXZlVGFiS2V5KSwgX2RlZmluZVByb3BlcnR5KF9wcm9wcywgJ3RhYkJhckV4dHJhQ29udGVudCcsIHRhYkJhckV4dHJhQ29udGVudCksIF9wcm9wcyksXG4gICAgICBvbjoge1xuICAgICAgICBjaGFuZ2U6IHRoaXMub25UYWJDaGFuZ2VcbiAgICAgIH0sXG4gICAgICAnY2xhc3MnOiBwcmVmaXhDbHMgKyAnLWhlYWQtdGFicydcbiAgICB9O1xuXG4gICAgdmFyIGhlYWQgPSB2b2lkIDA7XG4gICAgdmFyIHRhYnMgPSB0YWJMaXN0ICYmIHRhYkxpc3QubGVuZ3RoID8gaChcbiAgICAgIFRhYnMsXG4gICAgICB0YWJzUHJvcHMsXG4gICAgICBbdGFiTGlzdC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgdmFyIHRlbXAgPSBpdGVtLnRhYixcbiAgICAgICAgICAgIF9pdGVtJHNjb3BlZFNsb3RzID0gaXRlbS5zY29wZWRTbG90cyxcbiAgICAgICAgICAgIHNjb3BlZFNsb3RzID0gX2l0ZW0kc2NvcGVkU2xvdHMgPT09IHVuZGVmaW5lZCA/IHt9IDogX2l0ZW0kc2NvcGVkU2xvdHM7XG5cbiAgICAgICAgdmFyIG5hbWUgPSBzY29wZWRTbG90cy50YWI7XG4gICAgICAgIHZhciB0YWIgPSB0ZW1wICE9PSB1bmRlZmluZWQgPyB0ZW1wIDogJHNjb3BlZFNsb3RzW25hbWVdID8gJHNjb3BlZFNsb3RzW25hbWVdKGl0ZW0pIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIGgoVGFiUGFuZSwge1xuICAgICAgICAgIGF0dHJzOiB7IHRhYjogdGFiLCBkaXNhYmxlZDogaXRlbS5kaXNhYmxlZCB9LFxuICAgICAgICAgIGtleTogaXRlbS5rZXkgfSk7XG4gICAgICB9KV1cbiAgICApIDogbnVsbDtcbiAgICB2YXIgdGl0bGVEb20gPSBnZXRDb21wb25lbnRGcm9tUHJvcCh0aGlzLCAndGl0bGUnKTtcbiAgICB2YXIgZXh0cmFEb20gPSBnZXRDb21wb25lbnRGcm9tUHJvcCh0aGlzLCAnZXh0cmEnKTtcbiAgICBpZiAodGl0bGVEb20gfHwgZXh0cmFEb20gfHwgdGFicykge1xuICAgICAgaGVhZCA9IGgoXG4gICAgICAgICdkaXYnLFxuICAgICAgICB7ICdjbGFzcyc6IHByZWZpeENscyArICctaGVhZCcsIHN0eWxlOiBoZWFkU3R5bGUgfSxcbiAgICAgICAgW2goXG4gICAgICAgICAgJ2RpdicsXG4gICAgICAgICAgeyAnY2xhc3MnOiBwcmVmaXhDbHMgKyAnLWhlYWQtd3JhcHBlcicgfSxcbiAgICAgICAgICBbdGl0bGVEb20gJiYgaChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyAnY2xhc3MnOiBwcmVmaXhDbHMgKyAnLWhlYWQtdGl0bGUnIH0sXG4gICAgICAgICAgICBbdGl0bGVEb21dXG4gICAgICAgICAgKSwgZXh0cmFEb20gJiYgaChcbiAgICAgICAgICAgICdkaXYnLFxuICAgICAgICAgICAgeyAnY2xhc3MnOiBwcmVmaXhDbHMgKyAnLWV4dHJhJyB9LFxuICAgICAgICAgICAgW2V4dHJhRG9tXVxuICAgICAgICAgICldXG4gICAgICAgICksIHRhYnNdXG4gICAgICApO1xuICAgIH1cblxuICAgIHZhciBjaGlsZHJlbiA9ICRzbG90c1snZGVmYXVsdCddO1xuICAgIHZhciBjb3ZlciA9IGdldENvbXBvbmVudEZyb21Qcm9wKHRoaXMsICdjb3ZlcicpO1xuICAgIHZhciBjb3ZlckRvbSA9IGNvdmVyID8gaChcbiAgICAgICdkaXYnLFxuICAgICAgeyAnY2xhc3MnOiBwcmVmaXhDbHMgKyAnLWNvdmVyJyB9LFxuICAgICAgW2NvdmVyXVxuICAgICkgOiBudWxsO1xuICAgIHZhciBib2R5ID0gaChcbiAgICAgICdkaXYnLFxuICAgICAgeyAnY2xhc3MnOiBwcmVmaXhDbHMgKyAnLWJvZHknLCBzdHlsZTogYm9keVN0eWxlIH0sXG4gICAgICBbbG9hZGluZyA/IGxvYWRpbmdCbG9jayA6IGNoaWxkcmVuXVxuICAgICk7XG4gICAgdmFyIGFjdGlvbnMgPSBmaWx0ZXJFbXB0eSh0aGlzLiRzbG90cy5hY3Rpb25zKTtcbiAgICB2YXIgYWN0aW9uRG9tID0gYWN0aW9ucyAmJiBhY3Rpb25zLmxlbmd0aCA/IGgoXG4gICAgICAndWwnLFxuICAgICAgeyAnY2xhc3MnOiBwcmVmaXhDbHMgKyAnLWFjdGlvbnMnIH0sXG4gICAgICBbdGhpcy5nZXRBY3Rpb24oYWN0aW9ucyldXG4gICAgKSA6IG51bGw7XG5cbiAgICByZXR1cm4gaChcbiAgICAgICdkaXYnLFxuICAgICAgX21lcmdlSlNYUHJvcHMoW3tcbiAgICAgICAgJ2NsYXNzJzogY2xhc3NTdHJpbmcsXG4gICAgICAgIHJlZjogJ2NhcmRDb250YWluZXJSZWYnXG4gICAgICB9LCB7IG9uOiBvbWl0KGdldExpc3RlbmVycyh0aGlzKSwgWyd0YWJDaGFuZ2UnLCAndGFiLWNoYW5nZSddKSB9XSksXG4gICAgICBbaGVhZCwgY292ZXJEb20sIGNoaWxkcmVuID8gYm9keSA6IG51bGwsIGFjdGlvbkRvbV1cbiAgICApO1xuICB9XG59OyIsImltcG9ydCBfbWVyZ2VKU1hQcm9wcyBmcm9tICdiYWJlbC1oZWxwZXItdnVlLWpzeC1tZXJnZS1wcm9wcyc7XG5pbXBvcnQgX2RlZmluZVByb3BlcnR5IGZyb20gJ2JhYmVsLXJ1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJy4uL191dGlsL3Z1ZS10eXBlcyc7XG5pbXBvcnQgeyBDb25maWdDb25zdW1lclByb3BzIH0gZnJvbSAnLi4vY29uZmlnLXByb3ZpZGVyJztcbmltcG9ydCB7IGdldExpc3RlbmVycyB9IGZyb20gJy4uL191dGlsL3Byb3BzLXV0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdBQ2FyZEdyaWQnLFxuICBfX0FOVF9DQVJEX0dSSUQ6IHRydWUsXG4gIHByb3BzOiB7XG4gICAgcHJlZml4Q2xzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGhvdmVyYWJsZTogUHJvcFR5cGVzLmJvb2xcbiAgfSxcbiAgaW5qZWN0OiB7XG4gICAgY29uZmlnUHJvdmlkZXI6IHsgJ2RlZmF1bHQnOiBmdW5jdGlvbiBfZGVmYXVsdCgpIHtcbiAgICAgICAgcmV0dXJuIENvbmZpZ0NvbnN1bWVyUHJvcHM7XG4gICAgICB9IH1cbiAgfSxcbiAgcmVuZGVyOiBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgdmFyIF9jbGFzc1N0cmluZztcblxuICAgIHZhciBoID0gYXJndW1lbnRzWzBdO1xuICAgIHZhciBfJHByb3BzID0gdGhpcy4kcHJvcHMsXG4gICAgICAgIGN1c3RvbWl6ZVByZWZpeENscyA9IF8kcHJvcHMucHJlZml4Q2xzLFxuICAgICAgICBfJHByb3BzJGhvdmVyYWJsZSA9IF8kcHJvcHMuaG92ZXJhYmxlLFxuICAgICAgICBob3ZlcmFibGUgPSBfJHByb3BzJGhvdmVyYWJsZSA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IF8kcHJvcHMkaG92ZXJhYmxlO1xuXG5cbiAgICB2YXIgZ2V0UHJlZml4Q2xzID0gdGhpcy5jb25maWdQcm92aWRlci5nZXRQcmVmaXhDbHM7XG4gICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnY2FyZCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG5cbiAgICB2YXIgY2xhc3NTdHJpbmcgPSAoX2NsYXNzU3RyaW5nID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfY2xhc3NTdHJpbmcsIHByZWZpeENscyArICctZ3JpZCcsIHRydWUpLCBfZGVmaW5lUHJvcGVydHkoX2NsYXNzU3RyaW5nLCBwcmVmaXhDbHMgKyAnLWdyaWQtaG92ZXJhYmxlJywgaG92ZXJhYmxlKSwgX2NsYXNzU3RyaW5nKTtcbiAgICByZXR1cm4gaChcbiAgICAgICdkaXYnLFxuICAgICAgX21lcmdlSlNYUHJvcHMoW3sgb246IGdldExpc3RlbmVycyh0aGlzKSB9LCB7ICdjbGFzcyc6IGNsYXNzU3RyaW5nIH1dKSxcbiAgICAgIFt0aGlzLiRzbG90c1snZGVmYXVsdCddXVxuICAgICk7XG4gIH1cbn07IiwiaW1wb3J0IF9tZXJnZUpTWFByb3BzIGZyb20gJ2JhYmVsLWhlbHBlci12dWUtanN4LW1lcmdlLXByb3BzJztcbmltcG9ydCBfZGVmaW5lUHJvcGVydHkgZnJvbSAnYmFiZWwtcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAnLi4vX3V0aWwvdnVlLXR5cGVzJztcbmltcG9ydCB7IGdldENvbXBvbmVudEZyb21Qcm9wLCBnZXRMaXN0ZW5lcnMgfSBmcm9tICcuLi9fdXRpbC9wcm9wcy11dGlsJztcbmltcG9ydCB7IENvbmZpZ0NvbnN1bWVyUHJvcHMgfSBmcm9tICcuLi9jb25maWctcHJvdmlkZXInO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6ICdBQ2FyZE1ldGEnLFxuICBwcm9wczoge1xuICAgIHByZWZpeENsczogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0aXRsZTogUHJvcFR5cGVzLmFueSxcbiAgICBkZXNjcmlwdGlvbjogUHJvcFR5cGVzLmFueVxuICB9LFxuICBpbmplY3Q6IHtcbiAgICBjb25maWdQcm92aWRlcjogeyAnZGVmYXVsdCc6IGZ1bmN0aW9uIF9kZWZhdWx0KCkge1xuICAgICAgICByZXR1cm4gQ29uZmlnQ29uc3VtZXJQcm9wcztcbiAgICAgIH0gfVxuICB9LFxuICByZW5kZXI6IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgaCA9IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgY3VzdG9taXplUHJlZml4Q2xzID0gdGhpcy4kcHJvcHMucHJlZml4Q2xzO1xuXG5cbiAgICB2YXIgZ2V0UHJlZml4Q2xzID0gdGhpcy5jb25maWdQcm92aWRlci5nZXRQcmVmaXhDbHM7XG4gICAgdmFyIHByZWZpeENscyA9IGdldFByZWZpeENscygnY2FyZCcsIGN1c3RvbWl6ZVByZWZpeENscyk7XG5cbiAgICB2YXIgY2xhc3NTdHJpbmcgPSBfZGVmaW5lUHJvcGVydHkoe30sIHByZWZpeENscyArICctbWV0YScsIHRydWUpO1xuXG4gICAgdmFyIGF2YXRhciA9IGdldENvbXBvbmVudEZyb21Qcm9wKHRoaXMsICdhdmF0YXInKTtcbiAgICB2YXIgdGl0bGUgPSBnZXRDb21wb25lbnRGcm9tUHJvcCh0aGlzLCAndGl0bGUnKTtcbiAgICB2YXIgZGVzY3JpcHRpb24gPSBnZXRDb21wb25lbnRGcm9tUHJvcCh0aGlzLCAnZGVzY3JpcHRpb24nKTtcblxuICAgIHZhciBhdmF0YXJEb20gPSBhdmF0YXIgPyBoKFxuICAgICAgJ2RpdicsXG4gICAgICB7ICdjbGFzcyc6IHByZWZpeENscyArICctbWV0YS1hdmF0YXInIH0sXG4gICAgICBbYXZhdGFyXVxuICAgICkgOiBudWxsO1xuICAgIHZhciB0aXRsZURvbSA9IHRpdGxlID8gaChcbiAgICAgICdkaXYnLFxuICAgICAgeyAnY2xhc3MnOiBwcmVmaXhDbHMgKyAnLW1ldGEtdGl0bGUnIH0sXG4gICAgICBbdGl0bGVdXG4gICAgKSA6IG51bGw7XG4gICAgdmFyIGRlc2NyaXB0aW9uRG9tID0gZGVzY3JpcHRpb24gPyBoKFxuICAgICAgJ2RpdicsXG4gICAgICB7ICdjbGFzcyc6IHByZWZpeENscyArICctbWV0YS1kZXNjcmlwdGlvbicgfSxcbiAgICAgIFtkZXNjcmlwdGlvbl1cbiAgICApIDogbnVsbDtcbiAgICB2YXIgTWV0YURldGFpbCA9IHRpdGxlRG9tIHx8IGRlc2NyaXB0aW9uRG9tID8gaChcbiAgICAgICdkaXYnLFxuICAgICAgeyAnY2xhc3MnOiBwcmVmaXhDbHMgKyAnLW1ldGEtZGV0YWlsJyB9LFxuICAgICAgW3RpdGxlRG9tLCBkZXNjcmlwdGlvbkRvbV1cbiAgICApIDogbnVsbDtcbiAgICByZXR1cm4gaChcbiAgICAgICdkaXYnLFxuICAgICAgX21lcmdlSlNYUHJvcHMoW3sgb246IGdldExpc3RlbmVycyh0aGlzKSB9LCB7ICdjbGFzcyc6IGNsYXNzU3RyaW5nIH1dKSxcbiAgICAgIFthdmF0YXJEb20sIE1ldGFEZXRhaWxdXG4gICAgKTtcbiAgfVxufTsiLCJpbXBvcnQgQ2FyZCBmcm9tICcuL0NhcmQnO1xuaW1wb3J0IE1ldGEgZnJvbSAnLi9NZXRhJztcbmltcG9ydCBHcmlkIGZyb20gJy4vR3JpZCc7XG5pbXBvcnQgQmFzZSBmcm9tICcuLi9iYXNlJztcbkNhcmQuTWV0YSA9IE1ldGE7XG5DYXJkLkdyaWQgPSBHcmlkO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuQ2FyZC5pbnN0YWxsID0gZnVuY3Rpb24gKFZ1ZSkge1xuICBWdWUudXNlKEJhc2UpO1xuICBWdWUuY29tcG9uZW50KENhcmQubmFtZSwgQ2FyZCk7XG4gIFZ1ZS5jb21wb25lbnQoTWV0YS5uYW1lLCBNZXRhKTtcbiAgVnVlLmNvbXBvbmVudChHcmlkLm5hbWUsIEdyaWQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDsiLCJpbXBvcnQgJy4uLy4uL3N0eWxlL2luZGV4Lmxlc3MnO1xuaW1wb3J0ICcuL2luZGV4Lmxlc3MnO1xuXG4vLyBzdHlsZSBkZXBlbmRlbmNpZXNcbmltcG9ydCAnLi4vLi4vdGFicy9zdHlsZSc7XG5pbXBvcnQgJy4uLy4uL3Jvdy9zdHlsZSc7XG5pbXBvcnQgJy4uLy4uL2NvbC9zdHlsZSc7IiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMCEuL2luZGV4Lmxlc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOC0yIS4uLy4uLy4uLy4uL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEwIS4vaW5kZXgubGVzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vLi4vcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTgtMiEuLi8uLi8uLi8uLi9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMCEuL2luZGV4Lmxlc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCI8dGVtcGxhdGU+XG4gICAgPGRpdj5cbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00IGZvb3Rlci1jbGlja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbjwhLS0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltZy9iYWNrZW5kL2JyYW5kL2xvZ28uc3ZnXCIgc3R5bGU9XCJcIj4tLT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+S8OqbmggdGjDtG5nIHRpbiBj4bunYSBjaMO6bmcgdMO0aTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YS1pY29uIHR5cGU9XCJ5b3V0dWJlXCIgc3R5bGU9XCJmb250LXNpemU6IDMwcHhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEtaWNvbiB0eXBlPVwic2t5cGVcIiBzdHlsZT1cImZvbnQtc2l6ZTogMzBweFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YS1pY29uIHR5cGU9XCJ0d2l0dGVyXCIgc3R5bGU9XCJmb250LXNpemU6IDMwcHhcIi8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEtaWNvbiB0eXBlPVwiZmFjZWJvb2tcIiBzdHlsZT1cImZvbnQtc2l6ZTogMzBweFwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy0yIGNvbC1tZC0yIGNvbC1zbS0zIGNvbC14cy0xMiBmb290ZXItY2xpY2tcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJjbGlrZWRcIj5USMOUTkcgVElOPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJ0b2dnbGUtbW4gbGlzdC1tZW51XCIgc3R5bGU9XCJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJlZlwiIGhyZWY9XCIvXCIgdGl0bGU9XCJUcmFuZyBjaOG7p1wiPlRyYW5nIGNo4bunPC9hPjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwiZWZcIiBocmVmPVwiL2dpb2ktdGhpZXVcIiB0aXRsZT1cIkdp4bubaSB0aGnhu4d1XCI+R2nhu5tpIHRoaeG7h3U8L2E+PC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJlZlwiIGhyZWY9XCIvY29sbGVjdGlvbnMvYWxsXCIgdGl0bGU9XCJT4bqjbiBwaOG6qW1cIj5T4bqjbiBwaOG6qW08L2E+PC9saT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3M9XCJlZlwiIGhyZWY9XCIvdGluLXR1Y1wiIHRpdGxlPVwiVGluIHThu6ljXCI+VGluIHThu6ljPC9hPjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwiZWZcIiBocmVmPVwiL2xpZW4taGVcIiB0aXRsZT1cIkxpw6puIGjhu4dcIj5MacOqbiBo4buHPC9hPjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTIgY29sLW1kLTIgY29sLXNtLTMgY29sLXhzLTEyIGZvb3Rlci1jbGlja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNsaWtlZFwiPkNIw41OSCBTw4FDSDwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidG9nZ2xlLW1uIGxpc3QtbWVudVwiIHN0eWxlPVwiXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwiZWZcIiBocmVmPVwiL1wiIHRpdGxlPVwiVHJhbmcgY2jhu6dcIj5UcmFuZyBjaOG7pzwvYT48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cImVmXCIgaHJlZj1cIi9naW9pLXRoaWV1XCIgdGl0bGU9XCJHaeG7m2kgdGhp4buHdVwiPkdp4bubaSB0aGnhu4d1PC9hPjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwiZWZcIiBocmVmPVwiL2NvbGxlY3Rpb25zL2FsbFwiIHRpdGxlPVwiU+G6o24gcGjhuqltXCI+U+G6o24gcGjhuqltPC9hPjwvbGk+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzPVwiZWZcIiBocmVmPVwiL3Rpbi10dWNcIiB0aXRsZT1cIlRpbiB04bupY1wiPlRpbiB04bupYzwvYT48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBjbGFzcz1cImVmXCIgaHJlZj1cIi9saWVuLWhlXCIgdGl0bGU9XCJMacOqbiBo4buHXCI+TGnDqm4gaOG7hzwvYT48L2xpPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy00IGNvbC1tZC00IGNvbC1zbS0xMiBjb2wteHMtMTIgZm9vdGVyLWNsaWNrIGZvb3Rlci1jb2wtbGFzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cImNsaWtlZFwiPlRIw5RORyBUSU4gTEnDik4gSOG7hjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsYXNzaWMtdGV4dC13aWRnZXQgaW5mby1mb290ZXJcIj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48aSBjbGFzcz1cImZhIGZhLW1hcC1tYXJrZXJcIj48L2k+VOG6p25nIDQgLCB0w7JhIG5ow6AgYml0ZXh0Y28gTmFtTG9uZy4gVFAuSENNPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD48aSBjbGFzcz1cImZhIGZhLXBob25lXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cInRlbDowOTczNDU4OTU5XCIgdGl0bGU9XCIwOTczNDU4OTU5XCI+IDA5MDg4NTU0ODM8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+PGkgY2xhc3M9XCJmYSBmYS1lbnZlbG9wZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJtYWlsdG86bGVoaWV1LnN1cGVyQGdtYWlsLmNvbVwiIHRpdGxlPVwibGVoaWV1LnN1cGVyQGdtYWlsLmNvbVwiPnRodWFubnZAZmltcGx1cy52bjwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b20tZm9vdGVyIGZvdF9jb3B5cmlnaHQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIELhuqNuIHF1eeG7gW4gdGh14buZYyB24buBXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYW5xdXllblwiPkNNISBUZWFtPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC9kaXY+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cbiAgICBpbXBvcnQgeyBNZW51LCBJY29uLCBMaXN0LCBJbnB1dCwgQ2FyZCB9IGZyb20gJ2FudC1kZXNpZ24tdnVlJ1xuICAgIHdpbmRvdy5WdWUudXNlKE1lbnUpO1xuICAgIHdpbmRvdy5WdWUudXNlKEljb24pO1xuICAgIHdpbmRvdy5WdWUudXNlKExpc3QpO1xuICAgIHdpbmRvdy5WdWUudXNlKElucHV0KTtcbiAgICB3aW5kb3cuVnVlLnVzZShDYXJkKTtcbiAgICBjb25zdCBJY29uRm9udCA9IEljb24uY3JlYXRlRnJvbUljb25mb250Q04oe1xuICAgICAgICBzY3JpcHRVcmw6ICcvL2F0LmFsaWNkbi5jb20vdC9mb250XzhkNWw4ZnprNWI4N2l1ZGkuanMnLFxuICAgIH0pO1xuICAgIGV4cG9ydCBkZWZhdWx0IHtcbiAgICAgICAgY29tcG9uZW50czoge1xuICAgICAgICAgICAgSWNvbkZvbnQsXG4gICAgICAgIH0sXG4gICAgfVxuPC9zY3JpcHQ+XG48c3R5bGUgc2NvcGVkPlxuICAgIC5mb290ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMmYyZjJmO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICAuZm9vdGVyID4+PiAuZm9vdGVyLWNsaWNrIHtcbiAgICAgICAgY29sb3I6I0ZGRjtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICB9XG4gICAgLmZvb3RlciAuZm9vdGVyLWluZm9yIHAge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cbiAgICAuZm9vdGVyIC5mb290ZXItaW5mb3IgLmxvZ28tZm9vdGVyIGltZyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuICAgIC5mb290ZXIgaDUge1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW46IDAgMCAzMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cbiAgICAuZm9vdGVyIGg1OmFmdGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmYzAwMDtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgfVxuICAgIC5mb290ZXIgLmZvb3Rlci1jbGljayAubGlzdC1tZW51IGxpIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDA7XG4gICAgfVxuICAgIC5mb290ZXIgYSB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgIH1cbiAgICAuZm9vdGVyIC5mb290ZXItY2xpY2sgLmluZm8tZm9vdGVyIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICB9XG4gICAgLmZvb3RlciAuZm9vdGVyLWNsaWNrIC5pbmZvLWZvb3RlciBwIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgfVxuICAgIC5mb290ZXIgLmZvb3Rlci1jbGljayAuaW5mby1mb290ZXIgcCBpIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGNvbG9yOiAjZmZjMDAwO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIHdpZHRoOiAyMXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC5mb290ZXIgLmZvdF9jb3B5cmlnaHQge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgfVxuICAgIC5mb290ZXIgLmZvdF9jb3B5cmlnaHQgLmJhbnF1eWVuLCBmb290ZXIgLmZvdF9jb3B5cmlnaHQgYSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogI2ZmYzAwMDtcbiAgICB9XG4gICAgLmZvb3RlciAuZm90X2NvcHlyaWdodCAuYmxvY2steHMge1xuICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgIH1cbjwvc3R5bGU+XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogc3R5bGVsaW50LWRpc2FibGUgYXQtcnVsZS1lbXB0eS1saW5lLWJlZm9yZSxhdC1ydWxlLW5hbWUtc3BhY2UtYWZ0ZXIsYXQtcnVsZS1uby11bmtub3duICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgbm8tZHVwbGljYXRlLXNlbGVjdG9ycyAqL1xcbi8qIHN0eWxlbGludC1kaXNhYmxlICovXFxuLyogc3R5bGVsaW50LWRpc2FibGUgZGVjbGFyYXRpb24tYmFuZy1zcGFjZS1iZWZvcmUsbm8tZHVwbGljYXRlLXNlbGVjdG9ycyxzdHJpbmctbm8tbmV3bGluZSAqL1xcbi5hbnQtY2FyZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC12YXJpYW50OiB0YWJ1bGFyLW51bXM7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ3RudW0nO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xcbn1cXG4uYW50LWNhcmQtaG92ZXJhYmxlIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmFudC1jYXJkLWhvdmVyYWJsZTpob3ZlciB7XFxuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wOSk7XFxuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA5KTtcXG59XFxuLmFudC1jYXJkLWJvcmRlcmVkIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOGU4ZTg7XFxufVxcbi5hbnQtY2FyZC1oZWFkIHtcXG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMXB4O1xcbiAgcGFkZGluZzogMCAyNHB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U4ZThlODtcXG4gIGJvcmRlci1yYWRpdXM6IDJweCAycHggMCAwO1xcbiAgem9vbTogMTtcXG59XFxuLmFudC1jYXJkLWhlYWQ6OmJlZm9yZSxcXG4uYW50LWNhcmQtaGVhZDo6YWZ0ZXIge1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBjb250ZW50OiAnJztcXG59XFxuLmFudC1jYXJkLWhlYWQ6OmFmdGVyIHtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG4uYW50LWNhcmQtaGVhZC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uYW50LWNhcmQtaGVhZC10aXRsZSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMTZweCAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmFudC1jYXJkLWhlYWQgLmFudC10YWJzIHtcXG4gIGNsZWFyOiBib3RoO1xcbiAgbWFyZ2luLWJvdHRvbTogLTE3cHg7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5hbnQtY2FyZC1oZWFkIC5hbnQtdGFicy1iYXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOGU4ZTg7XFxufVxcbi5hbnQtY2FyZC1leHRyYSB7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIHBhZGRpbmc6IDE2cHggMDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmFudC1jYXJkLWJvZHkge1xcbiAgcGFkZGluZzogMjRweDtcXG4gIHpvb206IDE7XFxufVxcbi5hbnQtY2FyZC1ib2R5OjpiZWZvcmUsXFxuLmFudC1jYXJkLWJvZHk6OmFmdGVyIHtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgY29udGVudDogJyc7XFxufVxcbi5hbnQtY2FyZC1ib2R5OjphZnRlciB7XFxuICBjbGVhcjogYm90aDtcXG59XFxuLmFudC1jYXJkLWNvbnRhaW4tZ3JpZDpub3QoLmFudC1jYXJkLWxvYWRpbmcpIC5hbnQtY2FyZC1ib2R5IHtcXG4gIG1hcmdpbjogLTFweCAwIDAgLTFweDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5hbnQtY2FyZC1ncmlkIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IDMzLjMzJTtcXG4gIHBhZGRpbmc6IDI0cHg7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgYm94LXNoYWRvdzogMXB4IDAgMCAwICNlOGU4ZTgsIDAgMXB4IDAgMCAjZThlOGU4LCAxcHggMXB4IDAgMCAjZThlOGU4LCAxcHggMCAwIDAgI2U4ZThlOCBpbnNldCwgMCAxcHggMCAwICNlOGU4ZTggaW5zZXQ7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcXG59XFxuLmFudC1jYXJkLWdyaWQtaG92ZXJhYmxlOmhvdmVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxuICBib3gtc2hhZG93OiAwIDEwcHggMzVweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XFxufVxcbi5hbnQtY2FyZC1jb250YWluLXRhYnMgPiAuYW50LWNhcmQtaGVhZCAuYW50LWNhcmQtaGVhZC10aXRsZSB7XFxuICBtaW4taGVpZ2h0OiAzMnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxufVxcbi5hbnQtY2FyZC1jb250YWluLXRhYnMgPiAuYW50LWNhcmQtaGVhZCAuYW50LWNhcmQtZXh0cmEge1xcbiAgcGFkZGluZy1ib3R0b206IDA7XFxufVxcbi5hbnQtY2FyZC1jb3ZlciA+ICoge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmFudC1jYXJkLWNvdmVyIGltZyB7XFxuICBib3JkZXItcmFkaXVzOiAycHggMnB4IDAgMDtcXG59XFxuLmFudC1jYXJkLWFjdGlvbnMge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiAjZjJmNGY4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGU4ZTg7XFxuICB6b29tOiAxO1xcbn1cXG4uYW50LWNhcmQtYWN0aW9uczo6YmVmb3JlLFxcbi5hbnQtY2FyZC1hY3Rpb25zOjphZnRlciB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNvbnRlbnQ6ICcnO1xcbn1cXG4uYW50LWNhcmQtYWN0aW9uczo6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcbi5hbnQtY2FyZC1hY3Rpb25zID4gbGkge1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW46IDEycHggMDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYW50LWNhcmQtYWN0aW9ucyA+IGxpID4gc3BhbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1pbi13aWR0aDogMzJweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uYW50LWNhcmQtYWN0aW9ucyA+IGxpID4gc3Bhbjpob3ZlciB7XFxuICBjb2xvcjogIzAxOTBmZTtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XFxufVxcbi5hbnQtY2FyZC1hY3Rpb25zID4gbGkgPiBzcGFuIGE6bm90KC5hbnQtYnRuKSxcXG4uYW50LWNhcmQtYWN0aW9ucyA+IGxpID4gc3BhbiA+IC5hbnRpY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40NSk7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIHRyYW5zaXRpb246IGNvbG9yIDAuM3M7XFxufVxcbi5hbnQtY2FyZC1hY3Rpb25zID4gbGkgPiBzcGFuIGE6bm90KC5hbnQtYnRuKTpob3ZlcixcXG4uYW50LWNhcmQtYWN0aW9ucyA+IGxpID4gc3BhbiA+IC5hbnRpY29uOmhvdmVyIHtcXG4gIGNvbG9yOiAjMDE5MGZlO1xcbn1cXG4uYW50LWNhcmQtYWN0aW9ucyA+IGxpID4gc3BhbiA+IC5hbnRpY29uIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbn1cXG4uYW50LWNhcmQtYWN0aW9ucyA+IGxpOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2U4ZThlODtcXG59XFxuLmFudC1jYXJkLXR5cGUtaW5uZXIgLmFudC1jYXJkLWhlYWQge1xcbiAgcGFkZGluZzogMCAyNHB4O1xcbiAgYmFja2dyb3VuZDogI2YyZjRmODtcXG59XFxuLmFudC1jYXJkLXR5cGUtaW5uZXIgLmFudC1jYXJkLWhlYWQtdGl0bGUge1xcbiAgcGFkZGluZzogMTJweCAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uYW50LWNhcmQtdHlwZS1pbm5lciAuYW50LWNhcmQtYm9keSB7XFxuICBwYWRkaW5nOiAxNnB4IDI0cHg7XFxufVxcbi5hbnQtY2FyZC10eXBlLWlubmVyIC5hbnQtY2FyZC1leHRyYSB7XFxuICBwYWRkaW5nOiAxMy41cHggMDtcXG59XFxuLmFudC1jYXJkLW1ldGEge1xcbiAgbWFyZ2luOiAtNHB4IDA7XFxuICB6b29tOiAxO1xcbn1cXG4uYW50LWNhcmQtbWV0YTo6YmVmb3JlLFxcbi5hbnQtY2FyZC1tZXRhOjphZnRlciB7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNvbnRlbnQ6ICcnO1xcbn1cXG4uYW50LWNhcmQtbWV0YTo6YWZ0ZXIge1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcbi5hbnQtY2FyZC1tZXRhLWF2YXRhciB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XFxufVxcbi5hbnQtY2FyZC1tZXRhLWRldGFpbCB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uYW50LWNhcmQtbWV0YS1kZXRhaWwgPiBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcbi5hbnQtY2FyZC1tZXRhLXRpdGxlIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxufVxcbi5hbnQtY2FyZC1tZXRhLWRlc2NyaXB0aW9uIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNDUpO1xcbn1cXG4uYW50LWNhcmQtbG9hZGluZyB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uYW50LWNhcmQtbG9hZGluZyAuYW50LWNhcmQtYm9keSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmFudC1jYXJkLWxvYWRpbmctY29udGVudCBwIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuLmFudC1jYXJkLWxvYWRpbmctYmxvY2sge1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgbWFyZ2luOiA0cHggMDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyMDcsIDIxNiwgMjIwLCAwLjIpLCByZ2JhKDIwNywgMjE2LCAyMjAsIDAuNCksIHJnYmEoMjA3LCAyMTYsIDIyMCwgMC4yKSk7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDYwMCUgNjAwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gIGFuaW1hdGlvbjogY2FyZC1sb2FkaW5nIDEuNHMgZWFzZSBpbmZpbml0ZTtcXG59XFxuQGtleWZyYW1lcyBjYXJkLWxvYWRpbmcge1xcbiAgMCUsXFxuICAxMDAlIHtcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCA1MCU7XFxuICB9XFxuICA1MCUge1xcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDUwJTtcXG4gIH1cXG59XFxuLmFudC1jYXJkLXNtYWxsID4gLmFudC1jYXJkLWhlYWQge1xcbiAgbWluLWhlaWdodDogMzZweDtcXG4gIHBhZGRpbmc6IDAgMTJweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmFudC1jYXJkLXNtYWxsID4gLmFudC1jYXJkLWhlYWQgPiAuYW50LWNhcmQtaGVhZC13cmFwcGVyID4gLmFudC1jYXJkLWhlYWQtdGl0bGUge1xcbiAgcGFkZGluZzogOHB4IDA7XFxufVxcbi5hbnQtY2FyZC1zbWFsbCA+IC5hbnQtY2FyZC1oZWFkID4gLmFudC1jYXJkLWhlYWQtd3JhcHBlciA+IC5hbnQtY2FyZC1leHRyYSB7XFxuICBwYWRkaW5nOiA4cHggMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmFudC1jYXJkLXNtYWxsID4gLmFudC1jYXJkLWJvZHkge1xcbiAgcGFkZGluZzogMTJweDtcXG59XFxuXCIsIFwiXCJdKTtcblxuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZm9vdGVyW2RhdGEtdi01YWQyNThjNl0ge1xcbiAgICBiYWNrZ3JvdW5kOiAjMmYyZjJmO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbn1cXG4uZm9vdGVyW2RhdGEtdi01YWQyNThjNl0gLmZvb3Rlci1jbGljayB7XFxuICAgIGNvbG9yOiNGRkY7XFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxufVxcbi5mb290ZXIgLmZvb3Rlci1pbmZvciBwW2RhdGEtdi01YWQyNThjNl0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cXG4uZm9vdGVyIC5mb290ZXItaW5mb3IgLmxvZ28tZm9vdGVyIGltZ1tkYXRhLXYtNWFkMjU4YzZdIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuLmZvb3RlciBoNVtkYXRhLXYtNWFkMjU4YzZdIHtcXG4gICAgY29sb3I6ICNGRkY7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luOiAwIDAgMzBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmZvb3RlciBoNVtkYXRhLXYtNWFkMjU4YzZdOmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgYmFja2dyb3VuZDogI2ZmYzAwMDtcXG4gICAgaGVpZ2h0OiAycHg7XFxufVxcbi5mb290ZXIgLmZvb3Rlci1jbGljayAubGlzdC1tZW51IGxpW2RhdGEtdi01YWQyNThjNl0ge1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG59XFxuLmZvb3RlciBhW2RhdGEtdi01YWQyNThjNl0ge1xcbiAgICBjb2xvcjogI0ZGRjtcXG59XFxuLmZvb3RlciAuZm9vdGVyLWNsaWNrIC5pbmZvLWZvb3RlcltkYXRhLXYtNWFkMjU4YzZdIHtcXG4gICAgcGFkZGluZy10b3A6IDhweDtcXG59XFxuLmZvb3RlciAuZm9vdGVyLWNsaWNrIC5pbmZvLWZvb3RlciBwW2RhdGEtdi01YWQyNThjNl0ge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG59XFxuLmZvb3RlciAuZm9vdGVyLWNsaWNrIC5pbmZvLWZvb3RlciBwIGlbZGF0YS12LTVhZDI1OGM2XSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICBjb2xvcjogI2ZmYzAwMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB3aWR0aDogMjFweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZm9vdGVyIC5mb3RfY29weXJpZ2h0W2RhdGEtdi01YWQyNThjNl0ge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgY29sb3I6ICNGRkY7XFxufVxcbi5mb290ZXIgLmZvdF9jb3B5cmlnaHQgLmJhbnF1eWVuW2RhdGEtdi01YWQyNThjNl0sIGZvb3RlciAuZm90X2NvcHlyaWdodCBhW2RhdGEtdi01YWQyNThjNl0ge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgY29sb3I6ICNmZmMwMDA7XFxufVxcbi5mb290ZXIgLmZvdF9jb3B5cmlnaHQgLmJsb2NrLXhzW2RhdGEtdi01YWQyNThjNl0ge1xcbiAgICBtYXJnaW46IDAgNXB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YWQyNThjNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWFkMjU4YzYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YWQyNThjNiZzY29wZWQ9dHJ1ZSZsYW5nPWNzcyZcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZvb3RlclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTQgZm9vdGVyLWNsaWNrXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImFcIiwgeyBhdHRyczogeyBocmVmOiBcIlwiIH0gfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCJLw6puaCB0aMO0bmcgdGluIGPhu6dhIGNow7puZyB0w7RpXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJhLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjMwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInlvdXR1YmVcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMzBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic2t5cGVcIiB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcImEtaWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMzBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidHdpdHRlclwiIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYS1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIzMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJmYWNlYm9va1wiIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX20oMilcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX20oMylcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbGctMiBjb2wtbWQtMiBjb2wtc20tMyBjb2wteHMtMTIgZm9vdGVyLWNsaWNrXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcImNsaWtlZFwiIH0sIFtfdm0uX3YoXCJUSMOUTkcgVElOXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJ0b2dnbGUtbW4gbGlzdC1tZW51XCIgfSwgW1xuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVmXCIsIGF0dHJzOiB7IGhyZWY6IFwiL1wiLCB0aXRsZTogXCJUcmFuZyBjaOG7p1wiIH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlRyYW5nIGNo4bunXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlZlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL2dpb2ktdGhpZXVcIiwgdGl0bGU6IFwiR2nhu5tpIHRoaeG7h3VcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJHaeG7m2kgdGhp4buHdVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZWZcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIi9jb2xsZWN0aW9ucy9hbGxcIiwgdGl0bGU6IFwiU+G6o24gcGjhuqltXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiU+G6o24gcGjhuqltXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlZlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL3Rpbi10dWNcIiwgdGl0bGU6IFwiVGluIHThu6ljXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiVGluIHThu6ljXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlZlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL2xpZW4taGVcIiwgdGl0bGU6IFwiTGnDqm4gaOG7h1wiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkxpw6puIGjhu4dcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLWxnLTIgY29sLW1kLTIgY29sLXNtLTMgY29sLXhzLTEyIGZvb3Rlci1jbGlja1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJjbGlrZWRcIiB9LCBbX3ZtLl92KFwiQ0jDjU5IIFPDgUNIXCIpXSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF9jKFwidWxcIiwgeyBzdGF0aWNDbGFzczogXCJ0b2dnbGUtbW4gbGlzdC1tZW51XCIgfSwgW1xuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImVmXCIsIGF0dHJzOiB7IGhyZWY6IFwiL1wiLCB0aXRsZTogXCJUcmFuZyBjaOG7p1wiIH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlRyYW5nIGNo4bunXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlZlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL2dpb2ktdGhpZXVcIiwgdGl0bGU6IFwiR2nhu5tpIHRoaeG7h3VcIiB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJHaeG7m2kgdGhp4buHdVwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZWZcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcIi9jb2xsZWN0aW9ucy9hbGxcIiwgdGl0bGU6IFwiU+G6o24gcGjhuqltXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiU+G6o24gcGjhuqltXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlZlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL3Rpbi10dWNcIiwgdGl0bGU6IFwiVGluIHThu6ljXCIgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiVGluIHThu6ljXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlZlwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiL2xpZW4taGVcIiwgdGl0bGU6IFwiTGnDqm4gaOG7h1wiIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIkxpw6puIGjhu4dcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgXCJjb2wtbGctNCBjb2wtbWQtNCBjb2wtc20tMTIgY29sLXhzLTEyIGZvb3Rlci1jbGljayBmb290ZXItY29sLWxhc3RcIlxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcImNsaWtlZFwiIH0sIFtfdm0uX3YoXCJUSMOUTkcgVElOIExJw4pOIEjhu4ZcIildKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbGFzc2ljLXRleHQtd2lkZ2V0IGluZm8tZm9vdGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1tYXAtbWFya2VyXCIgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCJU4bqnbmcgNCAsIHTDsmEgbmjDoCBiaXRleHRjbyBOYW1Mb25nLiBUUC5IQ01cIilcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1waG9uZVwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgeyBhdHRyczogeyBocmVmOiBcInRlbDowOTczNDU4OTU5XCIsIHRpdGxlOiBcIjA5NzM0NTg5NTlcIiB9IH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCIgMDkwODg1NTQ4M1wiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1lbnZlbG9wZVwiIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBocmVmOiBcIm1haWx0bzpsZWhpZXUuc3VwZXJAZ21haWwuY29tXCIsXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCJsZWhpZXUuc3VwZXJAZ21haWwuY29tXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJ0aHVhbm52QGZpbXBsdXMudm5cIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tLWZvb3RlciBmb3RfY29weXJpZ2h0IHRleHQtY2VudGVyXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwge30sIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQuG6o24gcXV54buBbiB0aHXhu5ljIHbhu4FcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJiYW5xdXllblwiIH0sIFtfdm0uX3YoXCJDTSEgVGVhbVwiKV0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF1cbiAgICApXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWFkMjU4YzYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWFkMjU4YzYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjVhZDI1OGM2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL3ByaXZhdGUvdmFyL3d3dy9qcHVuLXNob3Avbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWFkMjU4YzYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWFkMjU4YzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWFkMjU4YzYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YWQyNThjNiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1YWQyNThjNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2pzL2Zyb250ZW5kL2NvbXBvbmVudHMvTGF5b3V0Q29tcG9uZW50cy9Gcm9udGVuZC9Gb290ZXIvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/cmVmLS00LTAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNC0wIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTUtb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTUtb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWFkMjU4YzYmc2NvcGVkPXRydWUmbGFuZz1jc3MmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS01LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS01LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVhZDI1OGM2JnNjb3BlZD10cnVlJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YWQyNThjNiZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=