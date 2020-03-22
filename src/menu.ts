import chalk from "chalk";
import d2d from "degrees-to-direction";
import inquirer from "inquirer";
import moment from "moment";

import { AppState } from "../types";
import setCurrentBreak from "./currentBreak";
import { titleScreen } from "pickitt";
import { getOptimalTime, getSunlightTimes } from "./weather";

/**
 * Displays Main Menu to user.
 * @param {AppState} state State of application.
 * @returns {Promise} Resolves with menuAction value.
 */
export const displayMainMenu: Function = (state: AppState): Promise<void> =>
  new Promise(async (resolve: Function, reject: Function) => {
    try {
      if (state.currentBreak.name === null) {
        // * Prompt user to set current break 1st
        await setCurrentBreak(state);

        await titleScreen("Shorex");
      }

      const sunlightTimes = await getSunlightTimes(state.currentBreak.spotId);
      const { sunrise, sunset } = sunlightTimes;

      const optimal = await getOptimalTime(state.currentBreak.spotId);
      const optimalFormatted =
        optimal[0] === "T" ? optimal : moment(optimal, "X").format("h:mm:ss A");

      console.log(chalk.yellow(`Current Break: `) + state.currentBreak.name);
      console.log(
        chalk.yellow(`Sunrise: `) + moment(sunrise, "X").format("h:mm:ss A")
      );
      console.log(
        chalk.yellow(`Sunset: `) + moment(sunset, "X").format("h:mm:ss A")
      );
      console.log(chalk.yellow(`Optimal Time: `) + optimalFormatted);
      console.log(
        chalk.yellow(`Condition: `) +
          state.currentReport.forecast.conditions.value
      );
      console.log(
        chalk.yellow(`Wave Height: `) +
          state.currentReport.forecast.waveHeight.humanRelation +
          chalk.yellow(` \n  Max: `) +
          state.currentReport.forecast.waveHeight.max +
          state.currentReport.associated.units.waveHeight +
          chalk.yellow(`  Min: `) +
          state.currentReport.forecast.waveHeight.min +
          state.currentReport.associated.units.waveHeight
      );
      console.log(
        chalk.yellow(`Air Temp: `) +
          state.currentReport.forecast.weather.temperature +
          "°" +
          state.currentReport.associated.units.temperature
      );
      console.log(
        chalk.yellow(`Water Temp: \n  Max: `) +
          state.currentReport.forecast.waterTemp.max +
          "°" +
          state.currentReport.associated.units.temperature +
          chalk.yellow(`   Min: `) +
          state.currentReport.forecast.waterTemp.min +
          "°" +
          state.currentReport.associated.units.temperature
      );
      console.log(
        chalk.yellow(`Wind Speed: `) +
          state.currentReport.forecast.wind.speed +
          state.currentReport.associated.units.windSpeed
      );
      console.log(
        chalk.yellow(`Wind Direction: `) +
          d2d(state.currentReport.forecast.wind.direction)
      );

      console.log("\n");

      const { menuAction } = await inquirer.prompt([
        {
          type: "list",
          message: "Main Menu",
          name: "menuAction",
          choices: [
            { value: "setCurrentBreak", name: "Set Current Break" },
            new inquirer.Separator(),
            { value: "exit", name: "Exit" }
          ]
        }
      ]);
      state.menuAction = menuAction;
      resolve(menuAction);
    } catch (e) {
      reject(e);
    }
  });

/**
 * Interprets user selected menu action.
 * @param {AppState} state State of application.
 * @returns {Promise}
 */
export const interpretMenuAction: Function = async (
  state: AppState
): Promise<void> => {
  try {
    const actions = {
      exit: (): void => process.exit(),
      setCurrentBreak: async (): Promise<void> => {
        await setCurrentBreak(state);
        state.menuActionEmitter.emit("actionCompleted", state);
      }
    };

    await actions[state.menuAction](state);
  } catch (e) {
    throw new Error(e);
  }
};
