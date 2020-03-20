"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/stable");

require("regenerator-runtime/runtime");

var _moment = _interopRequireDefault(require("moment"));

var _util = _interopRequireDefault(require("util"));

var _lodash = _interopRequireDefault(require("lodash.orderby"));

var _utilities = require("./utilities");

var _api = require("./api");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var cli =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var waveData, weatherData, surfWindow, filteredWaveData, times, sortedWaveData, sunrise, sunset, optimalTime;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _utilities.createTitle)();
            _context.next = 3;
            return (0, _api.getWaveData)("584204204e65fad6a7709435");

          case 3:
            waveData = _context.sent;
            _context.next = 6;
            return (0, _api.getWeatherData)("584204204e65fad6a7709435");

          case 6:
            weatherData = _context.sent;
            surfWindow = {
              min: (0, _moment["default"])().format("X"),
              max: weatherData.sunlightTimes[0].sunset
            };
            filteredWaveData = waveData.filter(function (waveHour) {
              return Number(waveHour.timestamp) >= Number(surfWindow.min) && Number(waveHour.timestamp) <= Number(surfWindow.max);
            });
            times = filteredWaveData.map(function (waveData) {
              return (0, _moment["default"])(waveData.timestamp, "X").format("MMMM Do YYYY, h:mm:ss a");
            });
            sortedWaveData = (0, _lodash["default"])(filteredWaveData, ["surf.optimalScore", "surf.max"], ["desc", "desc"]);
            sunrise = (0, _moment["default"])(weatherData.sunlightTimes[0].sunrise, "X").format("h:mm:ss A");
            sunset = (0, _moment["default"])(weatherData.sunlightTimes[0].sunset, "X").format("h:mm:ss A");
            optimalTime = sortedWaveData.length > 0 ? (0, _moment["default"])(sortedWaveData[0].timestamp, "X").format("h:mm:ss A") : "Tomorrow";
            console.log("\uD83C\uDF05  Sunrise: ".concat(sunrise));
            console.log("\uD83C\uDFC4\u200D  Optimal: ".concat(optimalTime));
            console.log("\uD83C\uDF06  Sunset:  ".concat(sunset));

          case 17:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function cli() {
    return _ref.apply(this, arguments);
  };
}();

var _default = cli;
exports["default"] = _default;