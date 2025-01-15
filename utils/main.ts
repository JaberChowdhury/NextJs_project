import type {
  HEXADECIMAL,
  HEXADECIMALMODIFIER,
  RGB,
  RGB_COLOR,
  RGBA,
  RGBA_COLOR,
  HSL,
  HSL_COLOR,
  HEXADECIMAL_COLOR,
  MAKE_VARIANT,
  GET_COLOR,
} from "./TYPES";
import makeHexadecimal from "./makeHexadecimal";
import HexadecimalModifier from "./HexadecimalModifier";
import HexadecimalValidator from "./HexadecimalValidator";
import makeHexadecimalToRGB from "./makeHexadecimalToRGB";
import makeHexaToHSL from "./makeHexaToHSL";
import makeHexadecimalToRGBA from "./makeHexadecimalToRGBA";

import makeOppositeHexadecimal from "./makeOppositeHexadecimal";
import makeOppositeRGB from "./makeOppositeRGB";
import makeOppositeHSL from "./makeOppositeHSL";
import makeOppositeRGBA from "./makeOppositeRGBA";

import makeVariant from "./makeVariant";
import generateDarkColorVariant from "./generateDarkColorVariant";
import generateLightColorVariant from "./generateLightColorVariant";
import makeHslToHexadecimal from "./makeHslToHexadecimal";

class Utils {
  private color: string;
  constructor(input_color?: string) {
    this.color =
      (input_color && this.HexadecimalValidator(input_color)) ||
      this.makeHexadecimal().main.color;
  }

  public HexadecimalModifier = (input_color: string): HEXADECIMALMODIFIER =>
    HexadecimalModifier(input_color);
  public HexadecimalValidator = (input_color: string): string =>
    HexadecimalValidator(input_color);
  // generate random hexadecimal color
  public makeHexadecimal = (): HEXADECIMAL => makeHexadecimal();
  public makeHexadecimalToRGB = (input_color: string): RGB_COLOR =>
    makeHexadecimalToRGB(input_color);
  public makeHexaToHSL = (input_color: string): HSL_COLOR =>
    makeHexaToHSL(input_color);
  public makeHexadecimalToRGBA = (input_color: string): RGBA_COLOR =>
    makeHexadecimalToRGBA(input_color);
  public makeHslToHexadecimal = (h: number, s: number, l: number): string =>
    makeHslToHexadecimal(h, s, l);

  public makeOppositeHexadecimal = (input_color: string): HEXADECIMAL_COLOR =>
    makeOppositeHexadecimal(input_color);
  public makeOppositeRGB = (input_color: string): RGB_COLOR =>
    makeOppositeRGB(input_color);
  public makeOppositeHSL = (input_color: string): HSL_COLOR =>
    makeOppositeHSL(input_color);
  public makeOppositeRGBA = (input_color: string): RGBA_COLOR =>
    makeOppositeRGBA(input_color);

  public generateHexadecimal = (): HEXADECIMAL => {
    const hexadecimal = this.HexadecimalModifier(this.color);
    const opposite_hexadecimal = this.makeOppositeHexadecimal(this.color);
    return {
      main: hexadecimal,
      opposite: opposite_hexadecimal,
    };
  };
  public generateRGB = (): RGB => {
    const rgb = this.makeHexadecimalToRGB(this.color);
    const opposite_rgb = this.makeOppositeRGB(this.color);
    return {
      main: rgb,
      opposite: opposite_rgb,
    };
  };
  public generateHSL = (): HSL => {
    const hsl = this.makeHexaToHSL(this.color);
    const opposite_hsl = this.makeOppositeHSL(this.color);
    return {
      main: hsl,
      opposite: opposite_hsl,
    };
  };
  public generateRGBA = (): RGBA => {
    const rgba = this.makeHexadecimalToRGBA(this.color);
    const opposite_rgba = this.makeOppositeRGBA(this.color);
    return {
      main: rgba,
      opposite: opposite_rgba,
    };
  };

  public makeVariant = (input_color: string): MAKE_VARIANT =>
    makeVariant(input_color);

  public generateColors = (limit: number): HEXADECIMAL[] => {
    const colors: HEXADECIMAL[] = [];
    for (let i = 0; i < limit; i++) {
      colors.push(this.makeHexadecimal());
    }
    return colors;
  };

  public generateDarkColorVariant = (limit: number): HEXADECIMAL[] =>
    generateDarkColorVariant(limit);
  public generateLightColorVariant = (limit: number): HEXADECIMAL[] =>
    generateLightColorVariant(limit);

  public getColor = (): GET_COLOR => {
    return {
      hexadecimal: this.generateHexadecimal(),
      rgb: this.generateRGB(),
      hsl: this.generateHSL(),
      rgba: this.generateRGBA(),
      variant: this.makeVariant(this.color),
    };
  };
}

export default Utils;
