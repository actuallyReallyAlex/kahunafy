"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTitle = void 0;

var _figlet = _interopRequireDefault(require("figlet"));

var _boxen = _interopRequireDefault(require("boxen"));

var _gradientString = _interopRequireDefault(require("gradient-string"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var createTitle = function createTitle() {
  return console.log((0, _boxen["default"])(_gradientString["default"].pastel(_figlet["default"].textSync("shorex")), {
    borderColor: "magenta",
    borderStyle: "round",
    "float": "center"
  }));
};

exports.createTitle = createTitle;