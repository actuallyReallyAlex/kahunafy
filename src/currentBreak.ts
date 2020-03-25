import inquirer from "inquirer";

import { AppState, Spot, Subregion } from "../types";

import { californiaSubRegions } from "./constants";
import getReport from "./report";

/**
 * Prompts user to set the current beach break.
 * @param {AppState} state Current state of application.
 * @returns {Promise}
 */
const setCurrentBreak = (state: AppState): Promise<void> =>
  new Promise(async (resolve: Function, reject: Function) => {
    try {
      const subregionChoices = californiaSubRegions
        .sort((a: Subregion, b: Subregion) => a.name.localeCompare(b.name))
        .map((subregion: Subregion) => ({
          name: subregion.name,
          value: subregion._id
        }));

      const { subregion } = await inquirer.prompt([
        {
          type: "list",
          name: "subregion",
          message: "Select a subregion:",
          choices: subregionChoices
        }
      ]);

      const chosenSubRegion = californiaSubRegions.find(
        ({ _id }) => _id === subregion
      );

      const spotChoices = chosenSubRegion.spots
        .sort((a: Spot, b: Spot) => a.name.localeCompare(b.name))
        .map(spot => ({ name: spot.name, value: spot._id }));

      const { chosenBreak } = await inquirer.prompt([
        {
          type: "list",
          name: "chosenBreak",
          message: "Select a break",
          choices: spotChoices
        }
      ]);

      const finalBreak = chosenSubRegion.spots.find(
        (spot: Spot) => spot._id === chosenBreak
      );

      state.currentBreak = finalBreak;
      state.config.set("currentBreak", finalBreak);

      state.currentReport = await getReport(finalBreak.spot);

      resolve();
    } catch (e) {
      reject(e);
    }
  });

export default setCurrentBreak;
