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
    // min: moment().format("MMMM Do YYYY, h:mm:ss: a"),
    // max: moment(weatherData.sunlightTimes[0].sunset, "X").format(
    //   "MMMM Do YYYY, h:mm:ss a"
    // )
    min: moment().format("X"),
    max: weatherData.sunlightTimes[0].sunset
  };

  // console.log(JSON.stringify(waveData, null, 2));
  // console.log(waveData.length);

  const filteredWaveData = waveData.filter(
    waveHour =>
      Number(waveHour.timestamp) >= Number(surfWindow.min) &&
      Number(waveHour.timestamp) <= Number(surfWindow.max)
  );

  const times = filteredWaveData.map(waveData =>
    moment(waveData.timestamp, "X").format("MMMM Do YYYY, h:mm:ss a")
  );

  console.log({ times });
};

export default cli;
