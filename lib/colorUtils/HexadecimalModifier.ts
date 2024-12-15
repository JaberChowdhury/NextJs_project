import type { HEXADECIMALMODIFIER } from "./TYPES";

const HexadecimalModifier = (input_color: string): HEXADECIMALMODIFIER => {
  // remove #
  // const hexadecimal_code = input_color.replace("#", "");
  const [r1, g1, b1] = input_color.replace(/^#/, "").match(/.{2}/g) as string[];
  return {
    color: ("#" + r1 + g1 + b1).toUpperCase(),
    r: r1.toUpperCase(),
    g: g1.toUpperCase(),
    b: b1.toUpperCase(),
  };
};

export default HexadecimalModifier;
