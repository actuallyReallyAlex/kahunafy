import orderBy from "lodash.orderby";
import moment from "moment";

import {
  SurfWindow,
  WaveData,
  WaveDataGroup,
  WeatherDataGroup,
  AppState
} from "../types";

import { getWaveData, getWeatherData } from "./api";

/**
 * Determines the optimal time to go surfing based on the break, sunrise and sunset.
 */
const optimalTime: Function = (state: AppState): Promise<object> =>
  new Promise(async (resolve: Function, reject: Function) => {
    try {
      const waveData: WaveDataGroup = await getWaveData(
        state.currentBreak.spotId
      );
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
      const optimal: string =
        sortedWaveData.length > 0
          ? moment(sortedWaveData[0].timestamp, "X").format("h:mm:ss A")
          : "Tomorrow";

      resolve({ sunrise, optimal, sunset });
    } catch (e) {
      reject(e);
    }
  });

export default optimalTime;
