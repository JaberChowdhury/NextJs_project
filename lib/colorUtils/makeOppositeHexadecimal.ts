import type { HEXADECIMAL_COLOR } from "./TYPES";

import HexadecimalModifier from "./HexadecimalModifier";
import HexadecimalValidator from "./HexadecimalValidator";

const makeOppositeHexadecimal = (input_color: string): HEXADECIMAL_COLOR => {
  const modified_Input_color = HexadecimalModifier(
    HexadecimalValidator(input_color),
  );

  const oppositeMap: {
    [key: string]: string;
  } = {
    "0": "F",
    "1": "E",
    "2": "D",
    "3": "C",
    "4": "B",
    "5": "A",
    "6": "9",
    "7": "8",
    "8": "7",
    "9": "6",
    A: "5",
    B: "4",
    C: "3",
    D: "2",
    E: "1",
    F: "0",
  };

  let oppositeHex: string = "";
  let red: string = "";
  for (const char of modified_Input_color.r) {
    red += oppositeMap[char];
    oppositeHex += oppositeMap[char];
  }

  let green: string = "";
  for (const char of modified_Input_color.g) {
    oppositeHex += oppositeMap[char];
    green += oppositeMap[char];
  }

  let blue: string = "";
  for (const char of modified_Input_color.b) {
    oppositeHex += oppositeMap[char];
    blue += oppositeMap[char];
  }

  return {
    color: "#" + oppositeHex.toUpperCase(),
    r: red.toUpperCase(),
    g: green.toUpperCase(),
    b: blue.toUpperCase(),
  };
};

export default makeOppositeHexadecimal;
