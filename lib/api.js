"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWeatherData = exports.getWaveData = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _constants = require("./constants");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getWaveData = function getWaveData(spotId) {
  return new Promise(function (resolve, reject) {
    _axios["default"].get("".concat((0, _constants.apiUrlBase)(), "/wave?spotId=").concat(spotId)).then(function (response) {
      // console.log(response.data.data);
      resolve(response.data.data.wave);
    })["catch"](function (error) {
      reject(error);
    });
  });
};

exports.getWaveData = getWaveData;

var getWeatherData = function getWeatherData(spotId) {
  return new Promise(function (resolve, reject) {
    _axios["default"].get("".concat((0, _constants.apiUrlBase)(), "/weather?spotId=").concat(spotId)).then(function (response) {
      // console.log(response.data.data);
      resolve(response.data.data);
    })["catch"](function (error) {
      reject(error);
    });
  });
};

exports.getWeatherData = getWeatherData;