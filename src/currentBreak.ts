import inquirer from "inquirer";

import { AppState, SurfSpotData } from "../types";

import { surfSpots } from "./constants";

/**
 * Prompts user to set the current beach break.
 * @param {AppState} state Current state of application.
 * @returns {Promise}
 */
const setCurrentBreak: Function = (state: AppState): Promise<void> =>
  new Promise(async (resolve: Function, reject: Function) => {
    try {
      const { chosenBreak } = await inquirer.prompt([
        {
          type: "list",
          name: "chosenBreak",
          message: "Select a break",
          choices: surfSpots.map((surfSpot: SurfSpotData) => ({
            value: surfSpot.spotId,
            name: surfSpot.name
          }))
        }
      ]);
      state.currentBreak = surfSpots.find(
        (surfSpot: SurfSpotData) => surfSpot.spotId === chosenBreak
      );
      resolve();
    } catch (e) {
      reject(e);
    }
  });

export default setCurrentBreak;
