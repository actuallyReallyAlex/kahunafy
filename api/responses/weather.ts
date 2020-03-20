import moment from "moment";
import { WeatherData, WeatherResponse } from "../../types";

const createWeatherObj = (timestamp: string): WeatherData => ({
  timestamp: timestamp,
  temperature: 65.1,
  condition: "CLEAR_NO_RAIN"
});

export const weatherResponse = (): WeatherResponse => {
  const res: WeatherResponse = {
    associated: {
      units: {
        temperature: "F",
        tideHeight: "FT",
        waveHeight: "FT",
        windSpeed: "KTS"
      },
      utcOffset: -8,
      weatherIconPath: "https://wa.cdn-surfline.com/quiver/0.6.2/weathericons"
    }
  };

  const sunlightTimesArray = [];
  const weatherArray = [];

  const startTimestamp = moment()
    .hour(0)
    .minute(0)
    .second(0)
    .millisecond(0)
    .format("X");

  for (let i = 0; i < 6; i++) {
    const today = moment(startTimestamp, "X")
      .add(i, "days")
      .format("X");
    const sunlightObject = {
      midnight: today,
      dawn: moment(today, "X")
        .add(6, "hours")
        .format("X"),
      sunrise: moment(today, "X")
        .add(7, "hours")
        .format("X"),
      sunset: moment(today, "X")
        .add(17, "hours")
        .format("X"),
      dusk: moment(today, "X")
        .add(18, "hours")
        .format("X")
    };
    sunlightTimesArray.push(sunlightObject);
  }

  for (let i = 0; i < 144; i++) {
    const timestamp = moment(startTimestamp, "X")
      .add(i, "hours")
      .format("X");
    const weatherObj = createWeatherObj(timestamp);
    weatherArray.push(weatherObj);
  }

  res.data = {
    sunlightTimes: sunlightTimesArray,
    weather: weatherArray
  };

  return res;
};
