import inquirer from "inquirer";

import { AppState } from "../types";

/**
 * Displays Main Menu to user.
 * @param {AppState} state State of application.
 * @returns {Promise} Resolves with menuAction value.
 */
export const displayMainMenu: Function = (state: AppState): Promise<void> =>
  new Promise(async (resolve: Function, reject: Function) => {
    try {
      const { menuAction } = await inquirer.prompt([
        {
          type: "list",
          message: "Main Menu",
          name: "menuAction",
          choices: [
            { value: 1, name: "Option 1" },
            { value: 2, name: "Option 2" },
            { value: 3, name: "Option 3" },
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
