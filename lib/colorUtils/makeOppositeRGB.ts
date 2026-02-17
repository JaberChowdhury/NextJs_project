import type { RGB_COLOR } from "./TYPES";
import makeHexadecimalToRGB from "./makeHexadecimalToRGB";
import makeOppositeHexadecimal from "./makeOppositeHexadecimal";

const makeOppositeRGB = (input_color: string): RGB_COLOR => {
  const opposite_hexadecimal = makeOppositeHexadecimal(input_color);
  const opposite_rgb = makeHexadecimalToRGB(opposite_hexadecimal.color);
  return opposite_rgb;
};

export default makeOppositeRGB;
