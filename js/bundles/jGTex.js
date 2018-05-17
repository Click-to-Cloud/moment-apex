var pageComponent =
webpackJsonppageComponent([9],{

/***/ 272:
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

var _indexSoy = __webpack_require__(273);

var _indexSoy2 = _interopRequireDefault(_indexSoy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var jGTex = function (_Component) {
  _inherits(jGTex, _Component);

  function jGTex() {
    _classCallCheck(this, jGTex);

    return _possibleConstructorReturn(this, (jGTex.__proto__ || Object.getPrototypeOf(jGTex)).apply(this, arguments));
  }

  return jGTex;
}(_metalComponent2.default);

;

_metalSoy2.default.register(jGTex, _indexSoy2.default);

exports.default = jGTex;

/***/ }),

/***/ 273:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.templates = exports.jGTex = undefined;

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
   * @fileoverview Templates in namespace jGTex.
   * @public
   */

  goog.module('jGTex.incrementaldom');

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

  var $templateAlias2 = _metalSoy2.default.getTemplate('ElectricCode.incrementaldom', 'render');

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
    var param337 = function param337() {
      ie_open('h6');
      var dyn29 = opt_data.page.description;
      if (typeof dyn29 == 'function') dyn29();else if (dyn29 != null) itext(dyn29);
      ie_close('h6');
      ie_open('article', null, null, 'id', '1');
      ie_open('h2');
      itext('Getter/Setter');
      ie_close('h2');
      ie_open('p');
      itext('Moment.apex has getters/setters for Date/Time fields like:');
      ie_close('p');
      $templateAlias2({ code: 'Moment m = new Moment();\nm.hour(12); // set the hour\nm.hours(12); // set the hour\nm.hour(); // get the hour\nm.hours(); // get the hour', mode: 'javascript' }, null, opt_ijData);
      ie_open('p');
      itext('Below is the table of the fields supporting these getters/setters.');
      ie_close('p');
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Field');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('millisecond(s)');
      ie_close('td');
      ie_open('td');
      itext('Get/set the millisecond');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('second(s)');
      ie_close('td');
      ie_open('td');
      itext('Get/set the second');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('minute(s)');
      ie_close('td');
      ie_open('td');
      itext('Get/set the minute');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('hour(s)');
      ie_close('td');
      ie_open('td');
      itext('Get/set the hour');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('day(s)');
      ie_close('td');
      ie_open('td');
      itext('Get/set the day');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('month(s)');
      ie_close('td');
      ie_open('td');
      itext('Get/set the day');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('year(s)');
      ie_close('td');
      ie_open('td');
      itext('Get/set the year');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('dayOfWeek');
      ie_close('td');
      ie_open('td');
      itext('Get/set the day of week');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('dayOfYear');
      ie_close('td');
      ie_open('td');
      itext('Get/set the day of year');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('week(s)');
      ie_close('td');
      ie_open('td');
      itext('Get/set the week of year');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('quarter(s)');
      ie_close('td');
      ie_open('td');
      itext('Get/set the quarter of year');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_open('p');
      itext('Besides, we have generic methods to access Date/Time fields.');
      ie_close('p');
      $templateAlias2({ code: 'Moment m = new Moment();\nm.field(\'year\'); // get the year\nm.field(\'year\', 2018); // set the year', mode: 'javascript' }, null, opt_ijData);
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
      itext('field');
      ie_close('td');
      ie_open('td');
      itext('Get/set the field');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '2');
      ie_open('h2');
      itext('Query');
      ie_close('h2');
      ie_open('p');
      itext('Moment.apex has utility methods for querying.');
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
      itext('weeksInYear()');
      ie_close('td');
      ie_open('td');
      itext('Get the number of weeks in year');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('startOf(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the start moment of the Date/Time field');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('endOf(String)');
      ie_close('td');
      ie_open('td');
      itext('Get the end moment of the Date/Time field');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('debug()');
      ie_close('td');
      ie_open('td');
      itext('Print the debug information');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('diff(Moment)');
      ie_close('td');
      ie_open('td');
      itext('Create a duration between two moments');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('daysInMonth()');
      ie_close('td');
      ie_open('td');
      itext('Get the days in the current month');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('isBefore(Moment)');
      ie_close('td');
      ie_open('td');
      itext('Check if it is before the other moment');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('isSame(Moment)');
      ie_close('td');
      ie_open('td');
      itext('Check if it is the same as the other moment');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('isAfter(Moment)');
      ie_close('td');
      ie_open('td');
      itext('Chekc if it is after the other moment');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('isSameOrBefore(Moment)');
      ie_close('td');
      ie_open('td');
      itext('Check if it is the same or before the other moment');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('isSameOrAfter(Moment)');
      ie_close('td');
      ie_open('td');
      itext('Check if it is the same or after the other moment');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('isBetween(Moment, Moment)');
      ie_close('td');
      ie_open('td');
      itext('Check if it is between these two moments');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('isLeapYear()');
      ie_close('td');
      ie_open('td');
      itext('Check if it is the leap year');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '3');
      ie_open('h2');
      itext('Operation');
      ie_close('h2');
      ie_open('p');
      itext('Moment.apex also enables operations like adding/subtracting on fields of Moment.');
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
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '4');
      ie_open('h2');
      itext('Display');
      ie_close('h2');
      ie_open('p');
      itext('Moment.apex includes APIs to display Date/Time.');
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
      itext('format(String)');
      ie_close('td');
      ie_open('td');
      itext('Format the Moment using the format');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('fromMoment(Moment)');
      ie_close('td');
      ie_open('td');
      itext('Show the duration from the moment with prefix');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('fromMoment(Moment, Boolean)');
      ie_close('td');
      ie_open('td');
      itext('Show the duration from the moment with or without prefix');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('fromNow(Boolean)');
      ie_close('td');
      ie_open('td');
      itext('Show the duration from now with or without prefix');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('fromNow()');
      ie_close('td');
      ie_open('td');
      itext('Show the duration from now with prefix');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toMoment(Moment)');
      ie_close('td');
      ie_open('td');
      itext('Show the duration to the moment with prefix');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toMoment(Moment, Boolean)');
      ie_close('td');
      ie_open('td');
      itext('Show the duration to the moment with or without prefix');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toNow()');
      ie_close('td');
      ie_open('td');
      itext('Show the duration to now with prefix');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('toNow(Boolean)');
      ie_close('td');
      ie_open('td');
      itext('Show the duration to now with or without prefix');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '5');
      ie_open('h2');
      itext('Units');
      ie_close('h2');
      ie_open('p');
      itext('Moment.apex supports the below units, and any shortened strings(case-insensitive) that can uniquely pick a field out.');
      ie_close('p');
      $templateAlias2({ code: 'Moment m = new Moment();\nm.field(\'year\'); // standard\nm.field(\'years\'); // also work\nm.field(\'yea\'); // fine\nm.field(\'y\'); // works\nm.field(\'Y\'); // cool', mode: 'javascript' }, null, opt_ijData);
      ie_open('table');
      ie_open('thead');
      ie_open('tr');
      ie_open('th');
      itext('Unit');
      ie_close('th');
      ie_open('th');
      itext('Description');
      ie_close('th');
      ie_close('tr');
      ie_close('thead');
      ie_open('tbody');
      ie_open('tr');
      ie_open('td');
      itext('year');
      ie_close('td');
      ie_open('td');
      itext('year');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('month');
      ie_close('td');
      ie_open('td');
      itext('month');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('day');
      ie_close('td');
      ie_open('td');
      itext('day');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('hour');
      ie_close('td');
      ie_open('td');
      itext('hour');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('minute');
      ie_close('td');
      ie_open('td');
      itext('minute');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('second');
      ie_close('td');
      ie_open('td');
      itext('second');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('millisecond');
      ie_close('td');
      ie_open('td');
      itext('millisecond');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('week');
      ie_close('td');
      ie_open('td');
      itext('week');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('quarter');
      ie_close('td');
      ie_open('td');
      itext('quarter');
      ie_close('td');
      ie_close('tr');
      ie_close('tbody');
      ie_close('table');
      ie_close('article');
      ie_open('article', null, null, 'id', '6');
      ie_open('h2');
      itext('Static Methods');
      ie_close('h2');
      ie_open('p');
      itext('Moment.apex has a few static methods/fields.');
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
      itext('YEAR');
      ie_close('td');
      ie_open('td');
      itext('year');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('MONTH');
      ie_close('td');
      ie_open('td');
      itext('month');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DAY');
      ie_close('td');
      ie_open('td');
      itext('day');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('HOUR');
      ie_close('td');
      ie_open('td');
      itext('hour');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('MINUTE');
      ie_close('td');
      ie_open('td');
      itext('minute');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('SECOND');
      ie_close('td');
      ie_open('td');
      itext('second');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('MILLISECOND');
      ie_close('td');
      ie_open('td');
      itext('millisecond');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('WEEK');
      ie_close('td');
      ie_open('td');
      itext('week');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('QUARTER');
      ie_close('td');
      ie_open('td');
      itext('quarter');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('UNITS');
      ie_close('td');
      ie_open('td');
      itext('a list of units');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DURATION_YEAR');
      ie_close('td');
      ie_open('td');
      itext('the milliseconds of year');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DURATION_MONTH');
      ie_close('td');
      ie_open('td');
      itext('the milliseconds of month');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DURATION_DAY');
      ie_close('td');
      ie_open('td');
      itext('the milliseconds of day');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DURATION_HOUR');
      ie_close('td');
      ie_open('td');
      itext('the milliseconds of hour');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DURATION_MINUTE');
      ie_close('td');
      ie_open('td');
      itext('the milliseconds of minute');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DURATION_SECOND');
      ie_close('td');
      ie_open('td');
      itext('the milliseconds of second');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DURATION_MILLISECOND');
      ie_close('td');
      ie_open('td');
      itext('the milliseconds of millisecond');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DURATION_WEEK');
      ie_close('td');
      ie_open('td');
      itext('the milliseconds of week');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('DURATION_QUARTER');
      ie_close('td');
      ie_open('td');
      itext('the milliseconds of quarter');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('FORMAT_DATE');
      ie_close('td');
      ie_open('td');
      itext('\'dd/MM/yyyy\'');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('FORMAT_TIME');
      ie_close('td');
      ie_open('td');
      itext('\'HH:mm:ss\'');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('FORMAT_DATETIME');
      ie_close('td');
      ie_open('td');
      itext('\'dd/MM/yyyy HH:mm:ss\'');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('duration(Long)');
      ie_close('td');
      ie_open('td');
      itext('Create a Duration from time in milliseconds');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('duration(Integer, String)');
      ie_close('td');
      ie_open('td');
      itext('Create a Duration from some units of time');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('duration(Map<String, Integer>)');
      ie_close('td');
      ie_open('td');
      itext('Create a Duration from different units of time');
      ie_close('td');
      ie_close('tr');
      ie_open('tr');
      ie_open('td');
      itext('normalize(String)');
      ie_close('td');
      ie_open('td');
      itext('Normalize a string of unit');
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
    $templateAlias1(soy.$$assignDefaults({ content: param337 }, opt_data), null, opt_ijData);
  }
  exports.render = $render;
  if (goog.DEBUG) {
    $render.soyTemplateName = 'jGTex.render';
  }

  exports.render.params = ["page", "site"];
  exports.render.types = { "page": "?", "site": "?" };
  exports.templates = templates = exports;
  return exports;
});

var jGTex = function (_Component) {
  _inherits(jGTex, _Component);

  function jGTex() {
    _classCallCheck(this, jGTex);

    return _possibleConstructorReturn(this, (jGTex.__proto__ || Object.getPrototypeOf(jGTex)).apply(this, arguments));
  }

  return jGTex;
}(_metalComponent2.default);

_metalSoy2.default.register(jGTex, templates);
exports.jGTex = jGTex;
exports.templates = templates;
exports.default = templates;
/* jshint ignore:end */

/***/ })

},[272]);