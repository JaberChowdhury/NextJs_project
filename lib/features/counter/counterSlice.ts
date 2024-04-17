import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";

interface Counter {
  id: string;
  value: number;
}

interface InitialState {
  counters: Counter[];
}

const initialState: InitialState = {
  counters: [
    { id: "f595d9e6-47c4-436e-a005-025ee53c7dcf", value: 0 },
    { id: "ef88c6f6-3ae5-4865-bcac-11bc1720e72b", value: 7 },
    { id: "a9d324ee-cc08-48c8-b779-ff6fecf914bc", value: 0 },
  ],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<{ id: string }>) => {
      const counter = state.counters.find(
        (counter) => counter.id === action.payload.id,
      );
      if (counter) {
        counter.value += 1;
      }
    },
  },
});

export const counterSelector = (state: RootState) => state.counter;
export default counterSlice.reducer;
export const { increment } = counterSlice.actions;
