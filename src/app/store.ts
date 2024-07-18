import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counter-slice";
import fishReducer from "../features/caught/caught-slice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fish: fishReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
