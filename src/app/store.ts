import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import fishReducer from "../features/caught/caught-slice";
import seasonReducer from "../features/season/season-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
      fish: fishReducer,
      season: seasonReducer,
    },
  });
};

export const store = makeStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
