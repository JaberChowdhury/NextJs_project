import { createSlice } from "@reduxjs/toolkit";

interface INITIALSTATE {
  rgb: {
    r: number;
    g: number;
    b: number;
  };
}

const initialState: INITIALSTATE = {
  rgb: {
    r: Math.floor(Math.random() * 255),
    g: Math.floor(Math.random() * 255),
    b: Math.floor(Math.random() * 255),
  },
};

const rgbSlice = createSlice({
  name: "rgb",
  initialState,
  reducers: {
    updateRgb: (state, action) => {
      state.rgb = action.payload;
    },
  },
});

export default rgbSlice.reducer;
export const { updateRgb } = rgbSlice.actions;
