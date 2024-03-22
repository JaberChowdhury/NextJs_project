import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";
import utils from "@/lib/utils";

const colorUtils = new utils();
export type colorsType = ReturnType<typeof colorUtils.getColor>;
const makeColors = (limit: number = 100): colorsType[] => {
  let colors = [];
  for (let i = 1; i < limit + 1; i++) {
    const Utility = new utils();
    colors.push(Utility.getColor());
  }
  return colors;
};

const initialState = {
  colors: makeColors(60),
};

const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    updateColors: (state) => {
      state.colors = makeColors(60);
    },
  },
});

export default colorsSlice.reducer;
export const colorsSelector = (state: RootState) => state.colors;
export const { updateColors } = colorsSlice.actions;
