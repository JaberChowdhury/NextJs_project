import utils from "@/lib/colorUtils/main";
import { HEXADECIMAL } from "./../lib/colorUtils/TYPES";

const colorUtils = new utils();
const limit = 50;
const colors = colorUtils.generateColors(limit);

const darkColors = colorUtils.generateDarkColorVariant(limit);

export const colorsData: HEXADECIMAL[] = colors.map((data) => {
  return {
    ...data,
    id: crypto.randomUUID(),
  };
});
export const darkColorsData: HEXADECIMAL[] = darkColors.map((data) => {
  return {
    ...data,
    id: crypto.randomUUID(),
  };
});

export const getColors = (): Promise<HEXADECIMAL[]> =>
  Promise.resolve([...colorsData]);

export const getDarkColors = (): Promise<HEXADECIMAL[]> =>
  Promise.resolve([...darkColorsData]);
