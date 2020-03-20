import "core-js/stable";
import "regenerator-runtime/runtime";

import orderBy from "lodash.orderby";
import moment from "moment";
import { titleScreen } from "pickitt";

import { getWaveData, getWeatherData } from "./api";

import { SurfWindow, WaveData, WaveDataGroup, WeatherDataGroup } from "./types";

const cli = async (): Promise<void> => {
  await titleScreen("Shorex");

  const waveData: WaveDataGroup = await getWaveData("584204204e65fad6a7709435");

  const weatherData: WeatherDataGroup = await getWeatherData(
    "584204204e65fad6a7709435"
  );

  const surfWindow: SurfWindow = {
    max: weatherData.sunlightTimes[0].sunset,
    min: moment().format("X")
  };

  const filteredWaveData = waveData.filter(
    (waveHour: WaveData) =>
      Number(waveHour.timestamp) >= Number(surfWindow.min) &&
      Number(waveHour.timestamp) <= Number(surfWindow.max)
  );

  // const times: TimesData = filteredWaveData.map(waveData =>
  //   moment(waveData.timestamp, "X").format("MMMM Do YYYY, h:mm:ss a")
  // );

  const sortedWaveData: WaveDataGroup = orderBy(
    filteredWaveData,
    ["surf.optimalScore", "surf.max"],
    ["desc", "desc"]
  );

  const sunrise: string = moment(
    weatherData.sunlightTimes[0].sunrise,
    "X"
  ).format("h:mm:ss A");

  const sunset: string = moment(
    weatherData.sunlightTimes[0].sunset,
    "X"
  ).format("h:mm:ss A");

  const optimalTime: string =
    sortedWaveData.length > 0
      ? moment(sortedWaveData[0].timestamp, "X").format("h:mm:ss A")
      : "Tomorrow";

  console.log(`🌅  Sunrise: ${sunrise}`);
  console.log(`🏄‍  Optimal: ${optimalTime}`);
  console.log(`🌆  Sunset:  ${sunset}`);
};

export default cli;
