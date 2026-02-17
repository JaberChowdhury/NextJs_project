import makeHslToHexadecimal from "./makeHslToHexadecimal";
import makeOppositeHexadecimal from "./makeOppositeHexadecimal";
import { HEXADECIMAL } from "./TYPES";

const generateDarkColorVariant = (limit: number) => {
  const hexadecimal_olors: HEXADECIMAL[] = [];
  for (let i = 0; i < limit; i++) {
    const hsl_color = makeHslToHexadecimal(
      Math.random() * 360,
      Math.random() * 100,
      Math.random() * 50
    );
    const opposite_hexadecimal = makeOppositeHexadecimal(hsl_color);
    const hexadecimal = makeOppositeHexadecimal(opposite_hexadecimal.color);
    hexadecimal_olors.push({
      main: hexadecimal,
      opposite: opposite_hexadecimal,
    });
  }

  return hexadecimal_olors;
};

export default generateDarkColorVariant;
