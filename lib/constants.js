"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiUrlBase = function () {
    return process.env.NODE_ENV === "development"
        ? "http://localhost:5000"
        : "https://services.surfline.com/kbyg/spots/forecasts";
};
exports.surfSpots = [
    {
        continent: "North America",
        country: "United States",
        region: "California",
        name: "Oceanside Pier, Southside",
        spotId: "584204204e65fad6a7709435"
    },
    {
        continent: "North America",
        country: "United States",
        region: "California",
        name: "Oceanside Pier, Northside",
        spotId: "5842041f4e65fad6a7708835"
    },
    {
        continent: "North America",
        country: "United States",
        region: "California",
        name: "Tamarack",
        spotId: "5842041f4e65fad6a7708837"
    }
];
