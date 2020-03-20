const moment = require("moment");
const random = require("lodash.random");

const createWaveObject = timestamp => ({
  timestamp: timestamp,
  surf: {
    min: random(0, 2),
    max: random(2, 5),
    optimalScore: random(0, 5)
  },
  swells: [
    {
      height: 0.89,
      period: 12,
      direction: 184.22,
      directionMin: 181.41,
      optimalScore: 0
    },
    {
      height: 0.2,
      period: 10,
      direction: 285.47,
      directionMin: 285.47,
      optimalScore: 0
    },
    {
      height: 0.69,
      period: 14,
      direction: 226.41,
      directionMin: 222.19,
      optimalScore: 0
    },
    {
      height: 0.2,
      period: 8,
      direction: 180,
      directionMin: 180,
      optimalScore: 0
    },
    {
      height: 0,
      period: 0,
      direction: 0,
      directionMin: 0,
      optimalScore: 0
    },
    {
      height: 0,
      period: 0,
      direction: 0,
      directionMin: 0,
      optimalScore: 0
    }
  ]
});

const response = () => {
  const res = {};

  res.associated = {
    units: {
      temperature: "F",
      tideHeight: "FT",
      waveHeight: "FT",
      windSpeed: "KTS"
    },
    utcOffset: -8,
    location: {
      lon: -117.385,
      lat: 33.191
    },
    forecastLocation: {
      lon: -117.386,
      lat: 33.191
    },
    offshoreLocation: {
      lon: -117.4,
      lat: 33.15
    }
  };

  const waveArray = [];

  const startTimestamp = moment()
    .hour(0)
    .minute(0)
    .second(0)
    .millisecond(0)
    .format("X");

  for (let i = 0; i < 144; i++) {
    const timestamp = moment(startTimestamp, "X")
      .add(i, "hours")
      .format("X");
    const waveObj = createWaveObject(timestamp);
    waveArray.push(waveObj);
  }

  res.data = {
    wave: waveArray
  };

  return res;
};

module.exports = {
  response: response
};
