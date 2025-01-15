import type { RGBA_COLOR } from "./TYPES";
import makeHexadecimalToRGB from "./makeHexadecimalToRGB";

const makeHexadecimalToRGBA = (input_color: string): RGBA_COLOR => {
  const { r, g, b } = makeHexadecimalToRGB(input_color);

  return {
    color: `rgba(${r},${g},${b},1)`,
    r: r,
    g: g,
    b: b,
    a: 1,
  };
};

export default makeHexadecimalToRGBA;
