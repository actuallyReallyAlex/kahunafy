import moment from "moment";

import { getWeatherData } from "./api";

import { WeatherDataGroup } from "../types";

export const getSunrise: Function = (spotId: string): Promise<string> =>
  new Promise(async (resolve: Function, reject: Function) => {
    try {
      const spotData: WeatherDataGroup = await getWeatherData(spotId);
      const sunrise = moment(spotData.sunlightTimes[0].sunrise, "X").format(
        "h:mm:ss A"
      );
      resolve(sunrise);
    } catch (e) {
      reject(e);
    }
  });
