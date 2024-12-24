import type { HSL_COLOR } from "./TYPES";
import HexadecimalValidator from "./HexadecimalValidator";

const makeHexaToHSL = (input_color: string): HSL_COLOR => {
  const hex = HexadecimalValidator(input_color).replace(/^#/, "");

  // Parse hex color
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  // Normalize RGB values to range [0, 1]
  const normalizedR = r / 255;
  const normalizedG = g / 255;
  const normalizedB = b / 255;

  // Find the max and min RGB values
  const max = Math.max(normalizedR, normalizedG, normalizedB);
  const min = Math.min(normalizedR, normalizedG, normalizedB);
  let lightness = (max + min) / 2; // Calculate lightness

  // Initialize hue and saturation
  let hue = 0;
  let saturation = 0;

  // Special case: when max and min are equal (gray, white, or black)
  if (max === min) {
    hue = 0; // Hue doesn't matter for gray
    saturation = 0; // Saturation is 0 for gray
  } else {
    // Calculate saturation
    const delta = max - min;
    saturation =
      lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    // Calculate hue
    switch (max) {
      case normalizedR:
        hue =
          ((normalizedG - normalizedB) / delta +
            (normalizedG < normalizedB ? 6 : 0)) *
          60;
        break;
      case normalizedG:
        hue = ((normalizedB - normalizedR) / delta + 2) * 60;
        break;
      case normalizedB:
        hue = ((normalizedR - normalizedG) / delta + 4) * 60;
        break;
    }
  }

  // Normalize hue to be between 0 and 360
  hue = parseFloat(((hue + 360) % 360).toFixed(3));

  // Convert lightness to percentage
  lightness = parseFloat((lightness * 100).toFixed(3));

  // Convert saturation to percentage
  saturation = parseFloat((saturation * 100).toFixed(3));

  // Special handling for extreme lightness values (black and white)
  if (max === 0) {
    lightness = 0; // Black (darkest color)
  } else if (max === 1) {
    lightness = 100; // White (brightest color)
  }

  // Return HSL result
  return {
    color: `hsl(${hue},${saturation}%,${lightness}%)`,
    h: hue,
    s: saturation,
    l: lightness,
    // l: lightness / 100,  // Lightness in normalized form (0 to 1)
  };
};

export default makeHexaToHSL;
