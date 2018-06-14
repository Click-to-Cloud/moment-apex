var pageComponent =
webpackJsonppageComponent([10],{

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

var _indexSoy = __webpack_require__(271);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TSvDr = function (_Component) {
  _inherits(TSvDr, _Component);

  function TSvDr() {
    _classCallCheck(this, TSvDr);

    return _possibleConstructorReturn(this, (TSvDr.__proto__ || Object.getPrototypeOf(TSvDr)).apply(this, arguments));
  }

  return TSvDr;
}(_metalComponent2.default);

;

_metalSoy2.default.register(TSvDr, _indexSoy2.default);

exports.default = TSvDr;

/***/ }),

/***/ 271:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.TSvDr = undefined;

var _metalComponent = __webpack_require__(1);

var _metalComponent2 = _interopRequireDefault(_metalComponent);

var _metalSoy = __webpack_require__(2);

var _metalSoy2 = _interopRequireDefault(_metalSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* jshint ignore:start */


var templates;
goog.loadModule(function (exports) {

  // This file was automatically generated from index.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace TSvDr.
   * @public
   */

  goog.module('TSvDr.incrementaldom');

  /** @suppress {extraRequire} */
  var soy = goog.require('soy');
  /** @suppress {extraRequire} */
  var soydata = goog.require('soydata');
  /** @suppress {extraRequire} */
  goog.require('goog.asserts');
  /** @suppress {extraRequire} */
  goog.require('soy.asserts');
  /** @suppress {extraRequire} */
  goog.require('goog.i18n.bidi');
  /** @suppress {extraRequire} */
  goog.require('goog.string');
  var IncrementalDom = goog.require('incrementaldom');
  var ie_open = IncrementalDom.elementOpen;
  var ie_close = IncrementalDom.elementClose;
  var ie_void = IncrementalDom.elementVoid;
  var ie_open_start = IncrementalDom.elementOpenStart;
  var ie_open_end = IncrementalDom.elementOpenEnd;
  var itext = IncrementalDom.text;
  var iattr = IncrementalDom.attr;

  var $templateAlias1 = _metalSoy2.default.getTemplate('guide.incrementaldom', 'render');

  /**
   * @param {{
   *    page: (?),
   *    site: (?)
   * }} opt_data
   * @param {(null|undefined)=} opt_ignored
   * @param {Object<string, *>=} opt_ijData
   * @return {void}
   * @suppress {checkTypes}
   */
  function $render(opt_data, opt_ignored, opt_ijData) {
    var param326 = function param326() {
      ie_open('h6');
      var dyn28 = opt_data.page.description;
      if (typeof dyn28 == 'function') dyn28();else if (dyn28 != null) itext(dyn28);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Duration Constructors');
      ie_close('h2');
      ie_open('p');
      itext('Here are the Duration constructors.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Constructor');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('Duration(Long, Map<String, Integer>)');
      ie_close('td');
      ie_open('td');
      itext('Create a Duration from time in milliseconds and different units of time');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Duration(Map<String, Integer>)');
      ie_close('td');
      ie_open('td');
      itext('Create a Duration from different units of time');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Duration(Integer, String)');
      ie_close('td');
      ie_open('td');
      itext('Create a Duration from some units of time');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Duration(Long)');
      ie_close('td');
      ie_open('td');
      itext('Create a Duration from time in milliseconds');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Get Time Out of Duration');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('getTime()');
      ie_close('td');
      ie_open('td');
      itext('Get time in millis from Duration');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getFields()');
      ie_close('td');
      ie_open('td');
      itext('Get units of time from Duration');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Display Duration');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('humanize()');
      ie_close('td');
      ie_open('td');
      itext('Show the humanized string without suffix');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('humanize(Boolean)');
      ie_close('td');
      ie_open('td');
      itext('Show the humanized string with or without suffix');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Getters');
      ie_close('h2');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('years()');
      ie_close('td');
      ie_open('td');
      itext('Get years');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('asYears()');
      ie_close('td');
      ie_open('td');
      itext('Get years');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('months()');
      ie_close('td');
      ie_open('td');
      itext('Get months');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('asMonths()');
      ie_close('td');
      ie_open('td');
      itext('Get months');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('days()');
      ie_close('td');
      ie_open('td');
      itext('Get days');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('asDays()');
      ie_close('td');
      ie_open('td');
      itext('Get days');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('hours()');
      ie_close('td');
      ie_open('td');
      itext('Get hours');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('asHours()');
      ie_close('td');
      ie_open('td');
      itext('Get hours');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('minutes()');
      ie_close('td');
      ie_open('td');
      itext('Get minutes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('asMinutes()');
      ie_close('td');
      ie_open('td');
      itext('Get minutes');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('seconds()');
      ie_close('td');
      ie_open('td');
      itext('Get seconds');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('asSeconds()');
      ie_close('td');
      ie_open('td');
      itext('Get seconds');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('milliseconds()');
      ie_close('td');
      ie_open('td');
      itext('Get milliseconds');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('asMilliseconds()');
      ie_close('td');
      ie_open('td');
      itext('Get milliseconds');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('weeks()');
      ie_close('td');
      ie_open('td');
      itext('Get weeks');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('asWeeks()');
      ie_close('td');
      ie_open('td');
      itext('Get weeks');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('p');
      itext('Generic getters:');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('field(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the field');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('asField(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the field');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('get(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the field');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Operation');
      ie_close('h2');
      ie_open('p');
      itext('Moment.apex also enables operations like adding/subtracting on fields of Duration.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Method');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('add(Moment.Duration)');
      ie_close('td');
      ie_open('td');
      itext('Add a duration');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('add(Long)');
      ie_close('td');
      ie_open('td');
      itext('Add time in milliseconds');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('add(Integer, String)');
      ie_close('td');
      ie_open('td');
      itext('Add some units of time');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('add(Map<String, Integer>)');
      ie_close('td');
      ie_open('td');
      itext('Add different units of time');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('subtract(Moment.Duration)');
      ie_close('td');
      ie_open('td');
      itext('Subtract a duration');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('subtract(Long)');
      ie_close('td');
      ie_open('td');
      itext('Subtract time in milliseconds');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('subtract(Integer, String)');
      ie_close('td');
      ie_open('td');
      itext('Subtract some units of time');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('subtract(Map<String, Integer>)');
      ie_close('td');
      ie_open('td');
      itext('Subtract different units of time');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('negate()');
      ie_close('td');
      ie_open('td');
      itext('Negate the duration');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param326 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'TSvDr.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var TSvDr = function (_Component) {
  _inherits(TSvDr, _Component);

  function TSvDr() {
    _classCallCheck(this, TSvDr);

    return _possibleConstructorReturn(this, (TSvDr.__proto__ || Object.getPrototypeOf(TSvDr)).apply(this, arguments));
  }

  return TSvDr;
}(_metalComponent2.default);

_metalSoy2.default.register(TSvDr, templates);
exports.TSvDr = TSvDr;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[270]);