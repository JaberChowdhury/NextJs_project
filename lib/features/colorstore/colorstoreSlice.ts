import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";

type INITIALSTATE = {
  colors: {
    id: string;
    color: string;
  }[];
};

const initialState: INITIALSTATE = {
  colors: [],
};

const colorstoreSlice = createSlice({
  name: "colorstore",
  initialState,
  reducers: {
    addColor: (state, action) => {
      state.colors.push(action.payload.color);
    },
    deleteColor: (state, action) => {
      const filtered_colors = state.colors.filter((color) => {
        return color.id !== action.payload.id;
      });
      state.colors = filtered_colors;
    },
  },
});

export default colorstoreSlice.reducer;
export const { addColor, deleteColor } = colorstoreSlice.actions;
export const colorstoreSelector = (state: RootState) => state.colorstore;
