"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var constants_1 = require("./constants");
exports.getWaveData = function (spotId) {
    return new Promise(function (resolve, reject) {
        axios_1.default
            .get(constants_1.apiUrlBase() + "/wave?spotId=" + spotId)
            .then(function (response) { return resolve(response.data.data.wave); })
            .catch(function (e) { return reject(e); });
    });
};
exports.getWeatherData = function (spotId) {
    return new Promise(function (resolve, reject) {
        axios_1.default
            .get(constants_1.apiUrlBase() + "/weather?spotId=" + spotId)
            .then(function (response) { return resolve(response.data.data); })
            .catch(function (error) { return reject(error); });
    });
};
