import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import colorstoreReducer from "./features/colorstore/colorstoreSlice";
import colorsReducer from "./features/colors/colorsSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      colorstore: colorstoreReducer,
      colors: colorsReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
