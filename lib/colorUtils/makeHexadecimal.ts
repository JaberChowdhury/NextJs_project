import type { HEXADECIMAL } from "./TYPES";

function makeHexadecimal(): HEXADECIMAL {
  const hexadecimal = "0123456789abcdef".split("");
  const position1 = Math.floor(Math.random() * hexadecimal.length);
  const position2 = Math.floor(Math.random() * hexadecimal.length);
  const position3 = Math.floor(Math.random() * hexadecimal.length);
  const position4 = Math.floor(Math.random() * hexadecimal.length);
  const position5 = Math.floor(Math.random() * hexadecimal.length);
  const position6 = Math.floor(Math.random() * hexadecimal.length);
  let r1 = hexadecimal[position1] + hexadecimal[position4];
  let g1 = hexadecimal[position2] + hexadecimal[position5];
  let b1 = hexadecimal[position3] + hexadecimal[position6];
  let r2 =
    hexadecimal.slice().reverse()[position1] +
    hexadecimal.slice().reverse()[position4];
  let g2 =
    hexadecimal.slice().reverse()[position2] +
    hexadecimal.slice().reverse()[position5];
  let b2 =
    hexadecimal.slice().reverse()[position3] +
    hexadecimal.slice().reverse()[position6];
  return {
    main: {
      color: ("#" + r1 + g1 + b1).toUpperCase(),
      r: r1.toUpperCase(),
      g: g1.toUpperCase(),
      b: b1.toUpperCase(),
    },
    opposite: {
      color: ("#" + r2 + g2 + b2).toUpperCase(),
      r: r2.toUpperCase(),
      g: g2.toUpperCase(),
      b: b2.toUpperCase(),
    },
  };
}

export default makeHexadecimal;
