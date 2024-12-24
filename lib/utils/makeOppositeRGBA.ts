import type { RGBA_COLOR } from "./TYPES";

import makeHexadecimalToRGBA from "./makeHexadecimalToRGBA";
import makeOppositeHexadecimal from "./makeOppositeHexadecimal";

const makeOppositeRGBA = (input_color: string): RGBA_COLOR => {
  const opposite_hexadecimal = makeOppositeHexadecimal(input_color);
  const opposite_rgba = makeHexadecimalToRGBA(opposite_hexadecimal.color);
  return opposite_rgba;
};

export default makeOppositeRGBA;
