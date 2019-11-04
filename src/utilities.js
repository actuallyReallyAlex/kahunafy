import figlet from "figlet";
import boxen from "boxen";
import gradient from "gradient-string";

export const createTitle = () =>
  console.log(
    boxen(gradient.pastel(figlet.textSync("shorex")), {
      borderColor: "magenta",
      borderStyle: "round",
      float: "center"
    })
  );
