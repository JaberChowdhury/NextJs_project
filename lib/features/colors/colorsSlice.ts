import { createSlice } from "@reduxjs/toolkit";
import useColors from "@/hooks/useColors";
import type { colorsType } from "@/hooks/useColors";
import { RootState } from "@/lib/store";

type INITIALSTATE = {
  colors: colorsType[];
};

const colorsArray = useColors(400);

const initialState: INITIALSTATE = {
  colors: colorsArray,
};

const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {},
});

export default colorsSlice.reducer;
export const colorsSelector = (state: RootState) => state.colors;
