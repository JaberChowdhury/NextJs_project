import type { RGB_COLOR } from "./TYPES";
import HexadecimalValidator from "./HexadecimalValidator";

const makeHexadecimalToRGB = (input_color: string): RGB_COLOR => {
  const valaidated_input_color = HexadecimalValidator(input_color);
  const [r1, g1, b1] = valaidated_input_color
    .replace("#", "")
    .match(/.{2}/g) as string[];

  const r = parseInt(r1, 16);
  const g = parseInt(g1, 16);
  const b = parseInt(b1, 16);

  return {
    color: `rgb(${r},${g},${b})`,
    r,
    g,
    b,
  };
};

export default makeHexadecimalToRGB;
