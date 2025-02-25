import utils from "@/lib/utils/main";
import { HEXADECIMAL } from "@/lib/utils/TYPES";
import uuid from "@/lib/uuid";

const colorUtils = new utils();
const limit = 500;
const colors = colorUtils.generateColors(limit);

const darkColors = colorUtils.generateDarkColorVariant(limit);
const lightColors = colorUtils.generateLightColorVariant(limit);

export const colorsData: HEXADECIMAL[] = colors.map((data) => {
  return {
    ...data,
    id: uuid(),
  };
});
export const darkColorsData: HEXADECIMAL[] = darkColors.map((data) => {
  return {
    ...data,
    id: uuid(),
  };
});

export const lightColorsData: HEXADECIMAL[] = lightColors.map((data) => {
  return {
    ...data,
    id: uuid(),
  };
});

export const getColors = async (): Promise<HEXADECIMAL[]> => {
  return [...colorsData];
};

export const getDarkColors = async (): Promise<HEXADECIMAL[]> => {
  return [...darkColorsData];
};

export const getLightColors = async (): Promise<HEXADECIMAL[]> => {
  return [...lightColorsData];
};
