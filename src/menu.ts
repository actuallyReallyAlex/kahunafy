import boxen from "boxen";
import chalk from "chalk";
import d2d from "degrees-to-direction";
import inquirer from "inquirer";
import moment from "moment";
import { titleScreen } from "pickitt";

import { AppState } from "../types";
import { version } from "../package.json";

import { blankBoxenStyle } from "./constants";
import setCurrentBreak from "./currentBreak";
import { getOptimalTime, getSunlightTimes } from "./weather";

const displayReportData: Function = async (state: AppState): Promise<void> => {
  const sunlightTimes = await getSunlightTimes(state.currentBreak.spot);
  const { sunrise, sunset } = sunlightTimes;

  const optimal = await getOptimalTime(state.currentBreak.spot);
  const optimalFormatted =
    optimal[0] === "T" ? optimal : moment(optimal, "X").format("h:mm:ss A");

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const ui = require("cliui")();

  // * Current Break
  console.log(
    boxen(
      chalk.yellow(`Current Break: `) + state.currentBreak.name,
      blankBoxenStyle
    )
  );

  ui.div(
    { text: chalk.yellow("Wave Information"), align: "center" },
    { text: chalk.yellow("Weather Information"), align: "center" }
  );
  ui.div(
    {
      text: `${chalk.yellow("Condition:")} ${
        state.currentReport.forecast.conditions.value
      }`,
      padding: [0, 12, 0, 12]
    },
    {
      text: `${chalk.yellow("Sunrise:")} ${moment(sunrise, "X").format(
        "h:mm:ss A"
      )}`,
      padding: [0, 12, 0, 12]
    }
  );
  ui.div(
    {
      text: `${chalk.yellow("Wave Height:")} ${
        state.currentReport.forecast.waveHeight.humanRelation
      }`,
      padding: [0, 12, 0, 12]
    },
    {
      text: `${chalk.yellow("Sunset:")} ${moment(sunset, "X").format(
        "h:mm:ss A"
      )}`,
      padding: [0, 12, 0, 12]
    }
  );
  ui.div(
    {
      text: `${chalk.yellow("Max:")} ${state.currentReport.forecast.waveHeight
        .max + state.currentReport.associated.units.waveHeight}  ${chalk.yellow(
        "Min:"
      )} ${state.currentReport.forecast.waveHeight.min}${
        state.currentReport.associated.units.waveHeight
      }`,
      padding: [0, 12, 0, 15]
    },
    {
      text: `${chalk.yellow("Air Temp:")} ${
        state.currentReport.forecast.weather.temperature
      }°${state.currentReport.associated.units.temperature}`,
      padding: [0, 12, 0, 12]
    }
  );
  ui.div(
    {
      text: `${chalk.yellow("Optimal Time:")} ${optimalFormatted}`,
      padding: [0, 12, 0, 12]
    },
    {
      text: `${chalk.yellow("Wind Speed:")} ${
        state.currentReport.forecast.wind.speed
      }${state.currentReport.associated.units.windSpeed}`,
      padding: [0, 12, 0, 12]
    }
  );
  ui.div(
    {
      text: `\t${chalk.yellow("Previous Tide:")} ${
        state.currentReport.forecast.tide.previous.type
      }  ${state.currentReport.forecast.tide.previous.height}${
        state.currentReport.associated.units.tideHeight
      }  ${moment(
        state.currentReport.forecast.tide.previous.timestamp,
        "X"
      ).format("h:mm:ss A")}`,
      padding: [0, 12, 0, 12]
    },
    {
      text: `${chalk.yellow("Wind Direction:")} ${d2d(
        state.currentReport.forecast.wind.direction
      )}`,
      padding: [0, 12, 0, 12]
    }
  );
  ui.div(
    {
      text: `\t${chalk.yellow("Current Tide:")} ${
        state.currentReport.forecast.tide.current.type
      }  ${state.currentReport.forecast.tide.current.height}${
        state.currentReport.associated.units.tideHeight
      }  ${moment(
        state.currentReport.forecast.tide.current.timestamp,
        "X"
      ).format("h:mm:ss A")}`,
      padding: [0, 12, 0, 12]
    },
    { text: `${chalk.yellow("Water Temp:")}`, padding: [0, 12, 0, 12] }
  );
  ui.div(
    {
      text: `\t${chalk.yellow("Next Tide:")} ${
        state.currentReport.forecast.tide.next.type
      }  ${state.currentReport.forecast.tide.next.height}${
        state.currentReport.associated.units.tideHeight
      }  ${moment(state.currentReport.forecast.tide.next.timestamp, "X").format(
        "h:mm:ss A"
      )}`,
      padding: [0, 12, 0, 12]
    },
    {
      text: `${chalk.yellow("Max:")} ${
        state.currentReport.forecast.waterTemp.max
      }°${state.currentReport.associated.units.temperature}  ${chalk.yellow(
        "Min:"
      )} ${state.currentReport.forecast.waterTemp.min}°${
        state.currentReport.associated.units.temperature
      }`,
      padding: [0, 12, 0, 15]
    }
  );

  console.log(ui.toString());

  console.log("\n");
};

/**
 * Displays Main Menu to user.
 * @param {AppState} state State of application.
 * @returns {Promise} Resolves with menuAction value.
 */
export const displayMainMenu: Function = (state: AppState): Promise<void> =>
  new Promise(async (resolve: Function, reject: Function) => {
    try {
      await displayReportData(state);

      const { menuAction } = await inquirer.prompt([
        {
          type: "list",
          message: "Main Menu",
          name: "menuAction",
          choices: [
            { value: "setCurrentBreak", name: "Set Current Break" },
            new inquirer.Separator(),
            { value: "about", name: "About" },
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
 * Pauses the process execution and waits for the user to hit a key.
 * @returns {Promise} Resolves when user has entered a keystroke.
 * @async
 */
const keypress = async (): Promise<void> => {
  try {
    process.stdin.setRawMode(true);
    return new Promise((resolve, reject) => {
      try {
        process.stdin.resume();
        process.stdin.once("data", () => {
          process.stdin.setRawMode(false);
          resolve();
        });
      } catch (e) {
        return reject(e);
      }
    });
  } catch (e) {
    throw new Error(e);
  }
};

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
      about: async (): Promise<void> => {
        await titleScreen("Shorex");
        console.log(boxen(chalk.yellow(`v${version}`), blankBoxenStyle));
        console.log(
          boxen(chalk.yellow(`Author: `) + "Alex Lee", blankBoxenStyle)
        );

        console.log("Press any key to return to Main Menu ...");
        await keypress();
        state.menuActionEmitter.emit("actionCompleted", state);
      },
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
