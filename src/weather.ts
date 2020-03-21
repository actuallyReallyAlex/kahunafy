import { getWeatherData } from "./api";

import { SunlightTime, WeatherDataGroup } from "../types";

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
