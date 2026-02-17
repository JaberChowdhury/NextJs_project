import type { MAKE_VARIANT } from "./TYPES";
import makeHexaToHSL from "./makeHexaToHSL";
import makeHslToHexadecimal from "./makeHslToHexadecimal";
import HexadecimalModifier from "./HexadecimalModifier";
import makeOppositeHexadecimal from "./makeOppositeHexadecimal";

function rearrangeList(arr: MAKE_VARIANT) {
  const oddIndexed = [];
  const evenIndexed = [];

  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      oddIndexed.push(arr[i]);
    } else {
      evenIndexed.push(arr[i]);
    }
  }
  return [...oddIndexed.reverse(), ...evenIndexed];
}

const makeVariant = (input_color: string): MAKE_VARIANT => {
  const hsl = makeHexaToHSL(input_color);

  const hsl_variant = [];
  for (let i = 1; i < 100; i++) {
    const new_hsl = { ...hsl, color: `hsl(${hsl.h},${hsl.s},${i})`, l: i };
    const hexadecimal = HexadecimalModifier(
      makeHslToHexadecimal(new_hsl.h, new_hsl.s, new_hsl.l)
    );
    const opposite_hexadecimal = makeOppositeHexadecimal(hexadecimal.color);

    hsl_variant.push({
      main: hexadecimal,
      opposite: opposite_hexadecimal,
    });
  }

  return rearrangeList(hsl_variant);
};

export default makeVariant;
