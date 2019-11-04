"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/stable");

require("regenerator-runtime/runtime");

var _moment = _interopRequireDefault(require("moment"));

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
    var waveData, weatherData, surfWindow, filteredWaveData, times;
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
              // min: moment().format("MMMM Do YYYY, h:mm:ss: a"),
              // max: moment(weatherData.sunlightTimes[0].sunset, "X").format(
              //   "MMMM Do YYYY, h:mm:ss a"
              // )
              min: (0, _moment["default"])().format("X"),
              max: weatherData.sunlightTimes[0].sunset
            }; // console.log(JSON.stringify(waveData, null, 2));
            // console.log(waveData.length);

            filteredWaveData = waveData.filter(function (waveHour) {
              return Number(waveHour.timestamp) >= Number(surfWindow.min) && Number(waveHour.timestamp) <= Number(surfWindow.max);
            });
            times = filteredWaveData.map(function (waveData) {
              return (0, _moment["default"])(waveData.timestamp, "X").format("MMMM Do YYYY, h:mm:ss a");
            });
            console.log({
              times: times
            });

          case 11:
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