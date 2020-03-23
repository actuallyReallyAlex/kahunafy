import { Options as boxenOptions } from "boxen";

import { SurfSpotGroup } from "../types";

export const apiUrlBase = (): string =>
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000"
    : "https://services.surfline.com/kbyg/spots/forecasts";

/**
 * Blank style applied to Boxen.
 */
export const blankBoxenStyle: boxenOptions = {
  borderStyle: {
    topLeft: " ",
    topRight: " ",
    bottomLeft: " ",
    bottomRight: " ",
    horizontal: " ",
    vertical: " "
  },
  float: "center",
  padding: { top: 0, bottom: 0, right: 1, left: 1 }
};

/**
 * Blank Left style applied to Boxen.
 */
export const blankLeftBoxenStyle: boxenOptions = {
  ...blankBoxenStyle,
  float: "left"
};

/**
 * Blank Right style applied to Boxen.
 */
export const blankRightBoxenStyle: boxenOptions = {
  ...blankBoxenStyle,
  float: "right"
};

export const surfSpots: SurfSpotGroup = [
  {
    continent: "North America",
    country: "United States",
    region: "California",
    name: "Oceanside Pier, Southside",
    spotId: "584204204e65fad6a7709435"
  },
  {
    continent: "North America",
    country: "United States",
    region: "California",
    name: "Oceanside Pier, Northside",
    spotId: "5842041f4e65fad6a7708835"
  },
  {
    continent: "North America",
    country: "United States",
    region: "California",
    name: "Tamarack",
    spotId: "5842041f4e65fad6a7708837"
  }
];
