import utils from "@/lib/utils/main";
import { HEXADECIMAL } from "@/lib/utils/TYPES";

const colorUtils = new utils();
const limit = 500;
const colors = colorUtils.generateColors(limit);

const darkColors = colorUtils.generateDarkColorVariant(limit);
const lightColors = colorUtils.generateLightColorVariant(limit);

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

export const lightColorsData: HEXADECIMAL[] = lightColors.map((data) => {
  return {
    ...data,
    id: crypto.randomUUID(),
  };
});

export const getColors = (): Promise<HEXADECIMAL[]> =>
  Promise.resolve([...colorsData]);

export const getDarkColors = (): Promise<HEXADECIMAL[]> =>
  Promise.resolve([...darkColorsData]);

export const getLightColors = (): Promise<HEXADECIMAL[]> =>
  Promise.resolve([...lightColorsData]);
