import useColor from "@/lib/useColor";

const generateColors = async (limit: number) => {
  "use server";

  let colors = [];

  for (let i = 0; i < limit; i++) {
    const utils = new useColor();
    colors.push(utils.getColor());
  }
  return colors;
};

export default generateColors;
