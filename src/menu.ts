import chalk from "chalk";
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

      console.log(chalk.yellow(`Current Break: ${state.currentBreak.name}`));
      console.log(
        chalk.yellow(`Sunrise: ${moment(sunrise, "X").format("h:mm:ss A")}`)
      );
      console.log(
        chalk.yellow(`Sunset: ${moment(sunset, "X").format("h:mm:ss A")}`)
      );
      console.log(
        chalk.yellow(
          `Optimal Time: ${moment(optimal, "X").format("h:mm:ss A")}`
        )
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
