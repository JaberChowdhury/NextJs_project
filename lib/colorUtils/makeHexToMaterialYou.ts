import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
  Scheme,
  TonalPalette,
} from "@material/material-color-utilities";

/**
 * Converts a hex to a Material 3 Theme.
 * Includes 'sourceColor' (the adjusted Material-compliant version of your input).
 */
export default function hexToMaterialYou(hex: string) {
  if (!/^#[0-9A-Fa-f]{6}$/.test(hex)) {
    throw new Error("Invalid hex color. Expected format: #RRGGBB");
  }

  const sourceArgb = argbFromHex(hex);
  const theme = themeFromSourceColor(sourceArgb);

  // Helper to convert ARGB numbers to Hex strings for a whole object
  const formatScheme = (scheme: Scheme) => {
    const json = scheme.toJSON();
    const result: Record<string, string> = {};
    for (const [key, value] of Object.entries(json)) {
      result[key] = hexFromArgb(value as number);
    }
    return result;
  };

  // Helper to generate 0-100 tones for a palette
  const tones = [
    0, 10, 20, 25, 30, 35, 40, 50, 60, 70, 80, 90, 95, 98, 99, 100,
  ];
  const formatPalette = (palette: TonalPalette) => {
    return tones.reduce<Record<number, string>>((acc, tone) => {
      acc[tone] = hexFromArgb(palette.tone(tone));
      return acc;
    }, {});
  };

  return {
    // The raw input you provided
    inputColor: hex,

    // The "Materialized" version of your input (Tone 40 is the standard reference)
    sourceColor: hexFromArgb(theme.palettes.primary.tone(40)),

    schemes: {
      light: formatScheme(theme.schemes.light),
      dark: formatScheme(theme.schemes.dark),
    },

    palettes: {
      primary: formatPalette(theme.palettes.primary),
      secondary: formatPalette(theme.palettes.secondary),
      tertiary: formatPalette(theme.palettes.tertiary),
      neutral: formatPalette(theme.palettes.neutral),
      neutralVariant: formatPalette(theme.palettes.neutralVariant),
      error: formatPalette(theme.palettes.error),
    },
  };
}
