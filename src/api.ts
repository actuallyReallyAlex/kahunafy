import axios from "axios";
import { apiUrlBase } from "./constants";

import { WaveDataGroup, WeatherDataGroup } from "../types";

export const getWaveData = (spotId: string): Promise<WaveDataGroup> =>
  new Promise((resolve: Function, reject: Function) => {
    axios
      .get(`${apiUrlBase()}/wave?spotId=${spotId}`)
      .then(response => resolve(response.data.data.wave))
      .catch(e => reject(e));
  });

export const getWeatherData = (spotId: string): Promise<WeatherDataGroup> =>
  new Promise((resolve: Function, reject: Function) => {
    axios
      .get(`${apiUrlBase()}/weather?spotId=${spotId}`)
      .then(response => resolve(response.data.data))
      .catch(error => reject(error));
  });
