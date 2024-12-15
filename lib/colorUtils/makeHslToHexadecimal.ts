const makeHslToHexadecimal = (h: number, s: number, l: number) => {
  // Normalize hue to be in the range 0 to 360
  h = h % 360;

  // Convert percentage to decimal
  s = s / 100;
  l = l / 100;

  // Calculate the chroma
  const c = (1 - Math.abs(2 * l - 1)) * s;

  // Calculate the intermediate RGB values
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let r = 0,
    g = 0,
    b = 0;

  if (h >= 0 && h < 60) {
    r = c;
    g = x;
    b = 0;
  } else if (h >= 60 && h < 120) {
    r = x;
    g = c;
    b = 0;
  } else if (h >= 120 && h < 180) {
    r = 0;
    g = c;
    b = x;
  } else if (h >= 180 && h < 240) {
    r = 0;
    g = x;
    b = c;
  } else if (h >= 240 && h < 300) {
    r = x;
    g = 0;
    b = c;
  } else if (h >= 300 && h < 360) {
    r = c;
    g = 0;
    b = x;
  }

  // Add the m value to RGB
  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  // Convert to hexadecimal
  const hex =
    "#" +
    ((1 << 24) | (r << 16) | (g << 8) | b).toString(16).slice(1).toUpperCase();

  return hex;
};
export default makeHslToHexadecimal;
