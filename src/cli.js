import "core-js/stable";
import "regenerator-runtime/runtime";
import moment from "moment";

import { createTitle } from "./utilities";
import { getWaveData, getWeatherData } from "./api";

const cli = async () => {
  createTitle();

  const waveData = await getWaveData("584204204e65fad6a7709435");
  const weatherData = await getWeatherData("584204204e65fad6a7709435");

  const surfWindow = {
    min: moment().format("X"),
    max: weatherData.sunlightTimes[0].sunset
  };

  const filteredWaveData = waveData.filter(
    waveHour =>
      Number(waveHour.timestamp) >= Number(surfWindow.min) &&
      Number(waveHour.timestamp) <= Number(surfWindow.max)
  );

  const times = filteredWaveData.map(waveData =>
    moment(waveData.timestamp, "X").format("MMMM Do YYYY, h:mm:ss a")
  );

  const sunrise = moment(weatherData.sunlightTimes[0].sunrise, "X").format(
    "h:mm:ss A"
  );

  const sunset = moment(weatherData.sunlightTimes[0].sunset, "X").format(
    "h:mm:ss A"
  );

  console.log(`🌅  Sunrise: ${sunrise}`);
  console.log(`🌆  Sunset:  ${sunset}`);
};

export default cli;
