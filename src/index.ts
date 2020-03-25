import "core-js/stable";
import "regenerator-runtime/runtime";

import chalk from "chalk";
import clear from "clear";
import Configstore from "configstore";
import { titleScreen } from "pickitt";

import EventEmitter from "events";

import setCurrentBreak from "./currentBreak";
import { displayMainMenu, interpretMenuAction } from "./menu";

import { AppState } from "../types";
import getReport from "./report";

const kahunafy = async (): Promise<void> => {
  const menuActionEmitter = new EventEmitter.EventEmitter();
  menuActionEmitter.on("actionCompleted", async state => {
    await titleScreen("Kahunafy");
    await displayMainMenu(state);
    await interpretMenuAction(state);
  });

  const config = new Configstore("kahunafy");

  const state: AppState = {
    config,
    currentBreak: config.get("currentBreak") || {
      _id: null,
      liesIn: null,
      location: null,
      name: null,
      spot: null,
      type: null
    },
    currentReport: null,
    menuAction: null,
    menuActionEmitter
  };

  try {
    if (state.currentBreak.name === null) {
      // * Prompt user to set current break first
      clear();
      console.log(
        `Welcome to ${chalk.yellow(
          "Kahunafy"
        )}! Please select your home break. You can edit this later.`
      );
      await setCurrentBreak(state);
    }

    await titleScreen("Kahunafy");

    state.currentReport = await getReport(state.currentBreak.spot);

    await displayMainMenu(state);

    await interpretMenuAction(state);
  } catch (e) {
    console.error("ERROR");
    console.log(state);
    console.error(e);
  }
};

export default kahunafy;
