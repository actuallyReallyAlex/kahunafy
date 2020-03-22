import "core-js/stable";
import "regenerator-runtime/runtime";

import Configstore from "configstore";
import { titleScreen } from "pickitt";

import EventEmitter from "events";

import setCurrentBreak from "./currentBreak";
import { displayMainMenu, interpretMenuAction } from "./menu";

import { AppState } from "../types";
import getReport from "./report";

const shorex = async (): Promise<void> => {
  const menuActionEmitter = new EventEmitter.EventEmitter();
  menuActionEmitter.on("actionCompleted", async state => {
    await titleScreen("Shorex");
    await displayMainMenu(state);
    await interpretMenuAction(state);
  });

  const config = new Configstore("shorex");

  const state: AppState = {
    config,
    currentBreak: config.get("currentBreak") || {
      continent: null,
      country: null,
      name: null,
      region: null,
      spotId: null
    },
    currentReport: null,
    menuAction: null,
    menuActionEmitter
  };

  await titleScreen("Shorex");

  if (state.currentBreak.name === null) {
    // * Prompt user to set current break first
    await setCurrentBreak(state);
  }

  state.currentReport = await getReport(state.currentBreak.spotId);

  await displayMainMenu(state);

  await interpretMenuAction(state);
};

export default shorex;
