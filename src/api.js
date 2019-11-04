import axios from "axios";
import { apiUrlBase } from "./constants";

export const getWaveData = spotId => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrlBase()}/wave?spotId=${spotId}`)
      .then(response => {
        // console.log(response.data.data);
        resolve(response.data.data.wave);
      })
      .catch(error => {
        reject(error);
      });
  });
};

export const getWeatherData = spotId => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${apiUrlBase()}/weather?spotId=${spotId}`)
      .then(response => {
        // console.log(response.data.data);
        resolve(response.data.data);
      })
      .catch(error => {
        reject(error);
      });
  });
};
