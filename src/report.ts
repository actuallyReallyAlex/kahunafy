import axios from "axios";

import { SurflineReport } from "../types";

/**
 * Gets a surf report for the break.
 * @param {string} spotId spotId for current break.
 * @returns {Proomise<SurflineReport>}
 */
const getReport: Function = (spotId: string): Promise<SurflineReport> =>
  new Promise((resolve: Function, reject: Function) => {
    try {
      axios
        .get(
          `https://services.surfline.com/kbyg/spots/reports?spotId=${spotId}`
        )
        .then(response => resolve(response.data))
        .catch(e => reject(e));
    } catch (e) {
      reject(e);
    }
  });

export default getReport;
