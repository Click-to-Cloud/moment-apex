var pageComponent =
webpackJsonppageComponent([11],{

/***/ 268:
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

var _indexSoy = __webpack_require__(269);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ggjLP = function (_Component) {
  _inherits(ggjLP, _Component);

  function ggjLP() {
    _classCallCheck(this, ggjLP);

    return _possibleConstructorReturn(this, (ggjLP.__proto__ || Object.getPrototypeOf(ggjLP)).apply(this, arguments));
  }

  return ggjLP;
}(_metalComponent2.default);

;

_metalSoy2.default.register(ggjLP, _indexSoy2.default);

exports.default = ggjLP;

/***/ }),

/***/ 269:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.ggjLP = undefined;

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
   * @fileoverview Templates in namespace ggjLP.
   * @public
   */

  goog.module('ggjLP.incrementaldom');

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
    var param315 = function param315() {
      ie_open('h6');
      var dyn27 = opt_data.page.description;
      if (typeof dyn27 == 'function') dyn27();else if (dyn27 != null) itext(dyn27);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Moment Constructors');
      ie_close('h2');
      ie_open('p');
      itext('Moment.apex has various constructors to build an instance in any situation.');
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
      itext('Moment()');
      ie_close('td');
      ie_open('td');
      itext('Create a Moment based on now');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Moment(Datetime)');
      ie_close('td');
      ie_open('td');
      itext('Create a Moment based on the Datetime');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Moment(Date)');
      ie_close('td');
      ie_open('td');
      itext('Create a Moment based on the Date, with time fields set to 0');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Moment(Time)');
      ie_close('td');
      ie_open('td');
      itext('Create a Moment based on the Time, with the date as today');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Moment(Long)');
      ie_close('td');
      ie_open('td');
      itext('Create a Moment based on the time in milliseconds');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Moment(String)');
      ie_close('td');
      ie_open('td');
      itext('Create a Moment by parsing the string according to the locale');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Moment(String, String)');
      ie_close('td');
      ie_open('td');
      itext('Create a Moment by parsing the string according to the pattern');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Moment(String, List<String>)');
      ie_close('td');
      ie_open('td');
      itext('Create a Moment by parsing the string according to a list of patterns');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Moment(String, Moment.Format)');
      ie_close('td');
      ie_open('td');
      itext('Create a Moment by parsing the string according to the predefined Moment.Format');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Moment(Date, Time)');
      ie_close('td');
      ie_open('td');
      itext('Create a Moment by combining the Date and Time');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Moment(Integer, Integer, Integer)');
      ie_close('td');
      ie_open('td');
      itext('Create a Moment with the year, month, and day');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Moment(Integer, Integer, Integer, Integer, Integer, Integer)');
      ie_close('td');
      ie_open('td');
      itext('Create a Moment with the year, month, day, hour, minute, and second');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Moment(Integer, Integer, Integer, Integer, Integer, Integer, Integer)');
      ie_close('td');
      ie_open('td');
      itext('Create a Moment with the year, month, day, hour, minute, second and millisecond');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Moment(Map<String, Integer>)');
      ie_close('td');
      ie_open('td');
      itext('Create a Moment with a map of the fields(year, month, day, hour, minute, second, and millisecond)');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Moment(List<Integer>)');
      ie_close('td');
      ie_open('td');
      itext('Create a Moment with a list of the fields(year, month, day, hour, minute, second, and millisecond)');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Moment(Moment)');
      ie_close('td');
      ie_open('td');
      itext('Create a Moment with an existing Moment');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Moment(Moment.DatetimeInfo)');
      ie_close('td');
      ie_open('td');
      itext('Create a Moment with the DatetimeInfo');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('p');
      itext('Date/Time parsing accepts the same patterns as Date/Time formatting. Below is the table of rules supported.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Character');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('y');
      ie_close('td');
      ie_open('td');
      itext('Year');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('Y');
      ie_close('td');
      ie_open('td');
      itext('Week year');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('M');
      ie_close('td');
      ie_open('td');
      itext('Month in year');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('d');
      ie_close('td');
      ie_open('td');
      itext('Day in month');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('a');
      ie_close('td');
      ie_open('td');
      itext('Am/pm marker');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('H');
      ie_close('td');
      ie_open('td');
      itext('Hour in day (0-23)');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('k');
      ie_close('td');
      ie_open('td');
      itext('Hour in day (1-24)');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('K');
      ie_close('td');
      ie_open('td');
      itext('Hour in am/pm (0-11)');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('h');
      ie_close('td');
      ie_open('td');
      itext('Hour in am/pm (1-12)');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('m');
      ie_close('td');
      ie_open('td');
      itext('Minute in hour');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('s');
      ie_close('td');
      ie_open('td');
      itext('Second in minute');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('S');
      ie_close('td');
      ie_open('td');
      itext('Millisecond');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('w');
      ie_close('td');
      ie_open('td');
      itext('Week in year');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('E');
      ie_close('td');
      ie_open('td');
      itext('Day name in week');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('u');
      ie_close('td');
      ie_open('td');
      itext('Day number of week (1 = Monday, ..., 7 = Sunday)');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('W');
      ie_close('td');
      ie_open('td');
      itext('Week in month');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('D');
      ie_close('td');
      ie_open('td');
      itext('Day in year');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('F');
      ie_close('td');
      ie_open('td');
      itext('Day of week in month');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Get Date/Time Out of Moment');
      ie_close('h2');
      ie_open('p');
      itext('Moment.apex has various constructors to get Date/Time out of a Moment.');
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
      itext('toDate');
      ie_close('td');
      ie_open('td');
      itext('Get Date from Moment');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toTime');
      ie_close('td');
      ie_open('td');
      itext('Get Time from Moment');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toDatetime');
      ie_close('td');
      ie_open('td');
      itext('Get Datetime from Moment');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toDatetimeInfo');
      ie_close('td');
      ie_open('td');
      itext('Get DatetimeInfo from Moment');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('getTime');
      ie_close('td');
      ie_open('td');
      itext('Get time in milliseconds from Moment');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('valueOf');
      ie_close('td');
      ie_open('td');
      itext('Get time in milliseconds from Moment');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toList');
      ie_close('td');
      ie_open('td');
      itext('Get a list of field values(year, month, day, hour, minute, second, and millisecond) from Moment');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toMap');
      ie_close('td');
      ie_open('td');
      itext('Get a map of field values(year, month, day, hour, minute, second, and millisecond) from Moment');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toString');
      ie_close('td');
      ie_open('td');
      itext('Get a string representation of Moment');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Timezone');
      ie_close('h2');
      ie_open('p');
      itext('Moment.apex works only in current timezone, and does not handle GMT Date/Time.');
      ie_close('p');
      ie_close('article');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.page.title);
      ie_close('input');
      ie_open('input', null, null, 'type', 'hidden', 'value', opt_data.site.title);
      ie_close('input');
    };
    $templateAlias1(soy.$$assignDefaults({ content: param315 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'ggjLP.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var ggjLP = function (_Component) {
  _inherits(ggjLP, _Component);

  function ggjLP() {
    _classCallCheck(this, ggjLP);

    return _possibleConstructorReturn(this, (ggjLP.__proto__ || Object.getPrototypeOf(ggjLP)).apply(this, arguments));
  }

  return ggjLP;
}(_metalComponent2.default);

_metalSoy2.default.register(ggjLP, templates);
exports.ggjLP = ggjLP;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[268]);