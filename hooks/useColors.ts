"use server";

import utils from "@/lib/utils";

const colorUtils = new utils();
export type colorsType = ReturnType<typeof colorUtils.getColor>;
const useColors = (limit: number = 100): colorsType[] => {
  let colors = [];
  for (let i = 1; i < limit + 1; i++) {
    const Utility = new utils();
    colors.push(Utility.getColor());
  }
  return colors;
};

export default useColors;
