import chalk from "chalk";
import inquirer from "inquirer";

import { AppState } from "../types";
import optimalTime from "./optimalTime";
import setCurrentBreak from "./currentBreak";

/**
 * Displays Main Menu to user.
 * @param {AppState} state State of application.
 * @returns {Promise} Resolves with menuAction value.
 */
export const displayMainMenu: Function = (state: AppState): Promise<void> =>
  new Promise(async (resolve: Function, reject: Function) => {
    try {
      console.log(chalk.yellow(`Current Break: ${state.currentBreak.name}`));
      console.log("\n");
      const { menuAction } = await inquirer.prompt([
        {
          type: "list",
          message: "Main Menu",
          name: "menuAction",
          choices: [
            { value: "optimalTime", name: "Optimal Time" },
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
      optimalTime: async (): Promise<void> => {
        const { sunrise, optimal, sunset } = await optimalTime(state);
        console.log(`🌅  Sunrise: ${sunrise}`);
        console.log(`🏄‍  Optimal: ${optimal}`);
        console.log(`🌆  Sunset:  ${sunset}`);
        await inquirer.prompt([
          { type: "confirm", message: "Continue?", name: "continue" }
        ]);
        state.menuActionEmitter.emit("actionCompleted", state);
      },
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
