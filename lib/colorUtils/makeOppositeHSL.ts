import type { HSL_COLOR } from "./TYPES";
import makeHexaToHSL from "./makeHexaToHSL";
import makeOppositeHexadecimal from "./makeOppositeHexadecimal";

const makeOppositeHSL = (input_color: string): HSL_COLOR => {
  const opposite_hexadecimal = makeOppositeHexadecimal(input_color);
  const opposite_hsl = makeHexaToHSL(opposite_hexadecimal.color);
  return opposite_hsl;
};

export default makeOppositeHSL;
