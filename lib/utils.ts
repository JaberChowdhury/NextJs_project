class Colorutils {
  inputColor?: string;
  hexadecimalCode: { main: string[]; opposite: string[] };
  constructor(inputColor?: string) {
    this.hexadecimalCode = {
      main: "0123456789abcdef".split(""),
      opposite: "0123456789abcdef".split("").reverse(),
    };
    this.inputColor = inputColor;
  }

  setInputColor() {
    if (!this.inputColor) {
      let color = "#";
      for (let i = 0; i < 6; i++) {
        const randomNumber = Math.floor(Math.random() * 16);
        color += this.hexadecimalCode.main[randomNumber];
      }
      this.inputColor = color;
    }
  }

  getRgbToHsl(red: string, green: string, blue: string) {
    let r = parseFloat(red);
    let g = parseFloat(green);
    let b = parseFloat(blue);

    r /= 255;
    g /= 255;
    b /= 255;

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);

    const lightness = (max + min) / 2;

    let hue = 0;
    let saturation = 0;

    if (max === min) {
      hue = 0;
      saturation = 0;
    } else {
      const d = max - min;
      saturation = lightness > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          hue = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          hue = (b - r) / d + 2;
          break;
        case b:
          hue = (r - g) / d + 4;
          break;
      }
      hue *= 60;
    }
    return {
      h: Math.round(hue).toString(),
      s: Math.round(saturation * 100).toString(),
      l: Math.round(lightness * 100).toString(),
    };
  }

  getRgbValidation(input: string) {
    switch (input.length) {
      case 2:
        return `0${input}`;
      case 1:
        return `00${input}`;
      default:
        return input;
    }
  }

  getHexadecimalColor() {
    const dataObject = {
      main: { r: "", g: "", b: "", string: "" },
      opposite: { r: "", g: "", b: "", string: "" },
    };
    const inputColorLength = this.inputColor ? this.inputColor.length : 0;
    switch (inputColorLength) {
      case 6:
      case 7:
        if (
          this.inputColor &&
          this.inputColor.startsWith("#") &&
          this.inputColor.length === 6
        ) {
          return dataObject;
        }
        let color = this.inputColor ? this.inputColor : "";
        if (this.inputColor && this.inputColor.startsWith("#")) {
          color = this.inputColor.slice(1);
        }

        const colorArray = color.split("");
        dataObject.main.r = colorArray[0] + colorArray[1];
        dataObject.main.g = colorArray[2] + colorArray[3];
        dataObject.main.b = colorArray[4] + colorArray[5];

        const pos_r1 = this.hexadecimalCode.main.indexOf(colorArray[0]);
        const pos_r2 = this.hexadecimalCode.main.indexOf(colorArray[1]);
        const pos_g1 = this.hexadecimalCode.main.indexOf(colorArray[2]);
        const pos_g2 = this.hexadecimalCode.main.indexOf(colorArray[3]);
        const pos_b1 = this.hexadecimalCode.main.indexOf(colorArray[4]);
        const pos_b2 = this.hexadecimalCode.main.indexOf(colorArray[5]);

        dataObject.opposite.r =
          this.hexadecimalCode.opposite[pos_r1] +
          this.hexadecimalCode.opposite[pos_r2];
        dataObject.opposite.g =
          this.hexadecimalCode.opposite[pos_g1] +
          this.hexadecimalCode.opposite[pos_g2];
        dataObject.opposite.b =
          this.hexadecimalCode.opposite[pos_b1] +
          this.hexadecimalCode.opposite[pos_b2];

        dataObject.main.string =
          "#" + dataObject.main.r + dataObject.main.g + dataObject.main.b;
        dataObject.opposite.string =
          "#" +
          dataObject.opposite.r +
          dataObject.opposite.g +
          dataObject.opposite.b;

        return dataObject;

      case 0:
        const rn1 = Math.floor(Math.random() * 16);
        const rn2 = Math.floor(Math.random() * 16);
        const gn1 = Math.floor(Math.random() * 16);
        const gn2 = Math.floor(Math.random() * 16);
        const bn1 = Math.floor(Math.random() * 16);
        const bn2 = Math.floor(Math.random() * 16);

        dataObject.main.r =
          this.hexadecimalCode.main[rn1] + this.hexadecimalCode.main[rn2];
        dataObject.main.g =
          this.hexadecimalCode.main[gn1] + this.hexadecimalCode.main[gn2];
        dataObject.main.b =
          this.hexadecimalCode.main[bn1] + this.hexadecimalCode.main[bn2];

        dataObject.opposite.r =
          this.hexadecimalCode.opposite[rn1] +
          this.hexadecimalCode.opposite[rn2];
        dataObject.opposite.g =
          this.hexadecimalCode.opposite[gn1] +
          this.hexadecimalCode.opposite[gn2];
        dataObject.opposite.b =
          this.hexadecimalCode.opposite[bn1] +
          this.hexadecimalCode.opposite[bn2];

        dataObject.main.string =
          "#" + dataObject.main.r + dataObject.main.g + dataObject.main.b;
        dataObject.opposite.string =
          "#" +
          dataObject.opposite.r +
          dataObject.opposite.g +
          dataObject.opposite.b;
        return dataObject;
      default:
        return dataObject;
    }
  }

  getRgbColor() {
    const dataObject = {
      main: { r: "", g: "", b: "", string: "" },
      opposite: { r: "", g: "", b: "", string: "" },
    };

    const inputColorLength = this.inputColor ? this.inputColor.length : 0;
    switch (inputColorLength) {
      case 6:
      case 7:
        if (
          this.inputColor &&
          this.inputColor.startsWith("#") &&
          this.inputColor.length === 6
        ) {
          return dataObject;
        }
        let color = this.inputColor ? this.inputColor : "";
        if (this.inputColor && this.inputColor.startsWith("#")) {
          color = this.inputColor.slice(1);
        }
        const colorArray = color.split("");
        const r = parseInt(colorArray[0] + colorArray[1], 16);
        const g = parseInt(colorArray[2] + colorArray[3], 16);
        const b = parseInt(colorArray[4] + colorArray[5], 16);
        dataObject.main.r = this.getRgbValidation(r.toString());
        dataObject.main.g = this.getRgbValidation(g.toString());
        dataObject.main.b = this.getRgbValidation(b.toString());
        dataObject.opposite.r = this.getRgbValidation((255 - r).toString());
        dataObject.opposite.g = this.getRgbValidation((255 - g).toString());
        dataObject.opposite.b = this.getRgbValidation((255 - b).toString());
        dataObject.main.string = `rgb(${dataObject.main.r},${dataObject.main.g},${dataObject.main.b})`;
        dataObject.opposite.string = `rgb(${dataObject.opposite.r},${dataObject.opposite.g},${dataObject.opposite.b})`;
        return dataObject;

      case 0:
        const r1 = Math.floor(Math.random() * 255);
        const g1 = Math.floor(Math.random() * 255);
        const b1 = Math.floor(Math.random() * 255);

        const or = this.getRgbValidation((255 - r1).toString());
        const og = this.getRgbValidation((255 - g1).toString());
        const ob = this.getRgbValidation((255 - b1).toString());

        dataObject.main.r = this.getRgbValidation(r1.toString());
        dataObject.main.g = this.getRgbValidation(g1.toString());
        dataObject.main.b = this.getRgbValidation(b1.toString());

        dataObject.opposite.r = or;
        dataObject.opposite.g = og;
        dataObject.opposite.b = ob;

        dataObject.main.string = `rgb(${dataObject.main.r},${dataObject.main.g},${dataObject.main.b})`;
        dataObject.opposite.string = `rgb(${dataObject.opposite.r},${dataObject.opposite.g},${dataObject.opposite.b})`;

        return dataObject;

      default:
        return dataObject;
    }
  }

  getHslColor() {
    const dataObject = {
      main: { hue: "", saturation: "", lighting: "", string: "" },
      opposite: { hue: "", saturation: "", lighting: "", string: "" },
    };
    const inputColorLength = this.inputColor ? this.inputColor.length : 0;
    switch (inputColorLength) {
      case 6:
      case 7:
        if (
          this.inputColor &&
          this.inputColor.startsWith("#") &&
          this.inputColor.length === 6
        ) {
          return dataObject;
        }
        let color = this.inputColor ? this.inputColor : "";
        if (this.inputColor && this.inputColor.startsWith("#")) {
          color = this.inputColor.slice(1);
        }
        const colorArray = color.split("");
        const r = parseInt(colorArray[0] + colorArray[1], 16);
        const g = parseInt(colorArray[2] + colorArray[3], 16);
        const b = parseInt(colorArray[4] + colorArray[5], 16);

        const or = (255 - r).toString();
        const og = (255 - g).toString();
        const ob = (255 - b).toString();

        const mainHsl = this.getRgbToHsl(
          r.toString(),
          g.toString(),
          b.toString(),
        );
        const oppositeHsl = this.getRgbToHsl(or, og, ob);

        dataObject.main.hue = mainHsl.h;
        dataObject.main.saturation = mainHsl.s;
        dataObject.main.lighting = mainHsl.l;

        dataObject.opposite.hue = oppositeHsl.h;
        dataObject.opposite.saturation = oppositeHsl.s;
        dataObject.opposite.lighting = oppositeHsl.l;

        dataObject.main.string = `hsl(${dataObject.main.hue},${dataObject.main.saturation}%,${dataObject.main.lighting}%)`;
        dataObject.opposite.string = `hsl(${dataObject.opposite.hue},${dataObject.opposite.saturation}%,${dataObject.opposite.lighting}%)`;

        return dataObject;
      case 0:
        // continue
        const rn = Math.floor(Math.random() * 16);
        const gn = Math.floor(Math.random() * 16);
        const bn = Math.floor(Math.random() * 16);
        const hsl1 = this.getRgbToHsl(
          rn.toString(),
          gn.toString(),
          bn.toString(),
        );
        const hsl2 = this.getRgbToHsl(
          (255 - rn).toString(),
          (255 - gn).toString(),
          (255 - bn).toString(),
        );

        dataObject.main.hue = hsl1.h;
        dataObject.main.saturation = hsl1.s;
        dataObject.main.lighting = hsl1.l;

        dataObject.opposite.hue = hsl2.h;
        dataObject.opposite.saturation = hsl2.s;
        dataObject.opposite.lighting = hsl2.l;

        dataObject.main.string = `hsl(${dataObject.main.hue},${dataObject.main.saturation}%,${dataObject.main.lighting}%)`;
        dataObject.opposite.string = `hsl(${dataObject.opposite.hue},${dataObject.opposite.saturation}%,${dataObject.opposite.lighting}%)`;

        return dataObject;
      default:
        return dataObject;
    }
  }

  getVariant() {
    const color = this.inputColor || this.setInputColor();
    const replaceDigitAtPosition = (
      originalString: string,
      position: number,
      replacementDigit: string,
    ) => {
      if (position >= 0 && position < originalString.length) {
        const modifiedString =
          originalString.substring(0, position) +
          replacementDigit +
          originalString.substring(position + 1);
        return modifiedString;
      } else {
        console.log("Invalid position.");
        return originalString;
      }
    };

    const Eachvariant = (c: string, position: number) => {
      const code = c.replace("#", "");
      const hexacode = "0123456789abcdef".split("");
      const variant = [];
      for (let i = 0; i < hexacode.length; i++) {
        const slice = replaceDigitAtPosition(code, position, hexacode[i]);
        variant.push("#" + slice);
      }
      return variant;
    };
    const fullVariant = (color: string) => {
      const final = [];
      for (let i = 0; i < 6; i++) {
        final.push(Eachvariant(color, i));
      }
      return final;
    };

    const refine_data = this.getHexadecimalColor();

    const colors = [
      refine_data.main.string.replace("#", ""),
      refine_data.opposite.string.replace("#", ""),
    ];
    const variant = colors.map((d) => {
      return fullVariant(d);
    });
    return {
      main: variant[0],
      opposite: variant[1],
    };
  }

  getColor() {
    this.setInputColor();
    return {
      id: crypto.randomUUID(),
      hexa: this.getHexadecimalColor(),
      rgb: this.getRgbColor(),
      hsl: this.getHslColor(),
    };
  }
}

export default Colorutils;
