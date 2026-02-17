export type HEXADECIMAL_COLOR = {
  color: string;
  r: string;
  g: string;
  b: string;
};

export type RGB_COLOR = {
  color: string;
  r: number;
  g: number;
  b: number;
};

export type RGBA_COLOR = {
  color: string;
  r: number;
  g: number;
  b: number;
  a: number;
};

export type HSL_COLOR = {
  color: string;
  h: number;
  s: number;
  l: number;
};

export type HEXADECIMAL = {
  main: HEXADECIMAL_COLOR;
  opposite: HEXADECIMAL_COLOR;
};

export type RGB = {
  main: RGB_COLOR;
  opposite: RGB_COLOR;
};
export type HSL = {
  main: HSL_COLOR;
  opposite: HSL_COLOR;
};

export type RGBA = {
  main: RGBA_COLOR;
  opposite: RGBA_COLOR;
};

export type VARIANT = {
  main: HEXADECIMAL_COLOR;
  opposite: HEXADECIMAL_COLOR;
};

export type MAKE_VARIANT = VARIANT[];

export type GET_COLOR = {
  hexadecimal: HEXADECIMAL;
  rgb: RGB;
  hsl: HSL;
  rgba: RGBA;
  variant: MAKE_VARIANT;
};

export type HEXADECIMALMODIFIER = HEXADECIMAL_COLOR;
