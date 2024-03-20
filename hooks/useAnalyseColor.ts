import utils from "@/lib/utils";

const useAnalyseColor = (color: string) => {
  const utility = new utils(color);

  const data = utility.getColor();

  const mainRgb = [
    {
      id: crypto.randomUUID(),
      title: "Red",
      value: data.rgb.main.r,
    },
    {
      id: crypto.randomUUID(),
      title: "Green",
      value: data.rgb.main.g,
    },
    {
      id: crypto.randomUUID(),
      title: "Blue",
      value: data.rgb.main.b,
    },
  ];
  const oppositeRgb = [
    {
      id: crypto.randomUUID(),
      title: "Red",
      value: data.rgb.opposite.r,
    },
    {
      id: crypto.randomUUID(),
      title: "Green",
      value: data.rgb.opposite.g,
    },
    {
      id: crypto.randomUUID(),
      title: "Blue",
      value: data.rgb.opposite.b,
    },
  ];

  const mainHsl = [
    {
      title: "Hue",
      id: crypto.randomUUID(),
      value: data.hsl.main.hue,
    },
    {
      title: "Saturation",
      id: crypto.randomUUID(),
      value: data.hsl.main.saturation,
    },
    {
      title: "Lighting",
      id: crypto.randomUUID(),
      value: data.hsl.main.lighting,
    },
  ];
  const oppositeHsl = [
    {
      title: "Hue",
      id: crypto.randomUUID(),
      value: data.hsl.opposite.hue,
    },
    {
      title: "Saturation",
      id: crypto.randomUUID(),
      value: data.hsl.opposite.saturation,
    },
    {
      title: "Lighting",
      id: crypto.randomUUID(),
      value: data.hsl.opposite.lighting,
    },
  ];

  return {
    data,
    mainHsl,
    mainRgb,
    oppositeHsl,
    oppositeRgb,
  };
};

export default useAnalyseColor;
