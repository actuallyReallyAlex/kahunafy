import moment from "moment";
import orderBy from "lodash.orderby";

import { getWeatherData, getWaveData } from "./api";

import {
  SunlightTime,
  SurfWindow,
  WaveData,
  WaveDataGroup,
  WeatherDataGroup
} from "../types";

/**
 * Gets sunlight times for today specific to the current break.
 * @param {string} spotId spotId of current break.
 * @returns {Promise<SunlightTime>}
 */
export const getSunlightTimes: Function = (
  spotId: string
): Promise<SunlightTime> =>
  new Promise(async (resolve: Function, reject: Function) => {
    try {
      const spotData: WeatherDataGroup = await getWeatherData(spotId);
      resolve(spotData.sunlightTimes[0]);
    } catch (e) {
      reject(e);
    }
  });

/**
 * Gets the optimal time to go surfing for the current break.
 * @param {string} spotId spotId of current break.
 * @returns {Promise<string>}
 */
export const getOptimalTime: Function = (spotId: string): Promise<string> =>
  new Promise(async (resolve: Function, reject: Function) => {
    try {
      const waveData: WaveDataGroup = await getWaveData(spotId);
      const sunlightTimes: SunlightTime = await getSunlightTimes(spotId);

      const surfWindow: SurfWindow = {
        max: sunlightTimes.sunset,
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

      resolve(
        sortedWaveData.length > 0 ? sortedWaveData[0].timestamp : "Tomorrow"
      );
    } catch (e) {
      reject(e);
    }
  });
