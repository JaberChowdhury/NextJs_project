import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";

type InitialState = {
  count: number;
};

const initialState: InitialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const counterSelector = (state: RootState) => state.counter;
export default counterSlice.reducer;
