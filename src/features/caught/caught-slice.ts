//DUCKS pattern?

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../../app/hooks";

interface FishState {
  caught: Record<string, boolean>;
}

const initialState: FishState = {
  caught: {},
};

const FishSlice = createSlice({
  name: "Fish",
  initialState: initialState,
  reducers: {
    catchFish(state, action: PayloadAction<string>) {
      // State holds caught object(See initialState). Use [action.payload] that evaluates to "fishName" as key.
      const fishName = action.payload;
      state.caught[fishName] = true;
    },
    releaseFish(state, action: PayloadAction<string>) {
      const fishName = action.payload;
      delete state.caught[fishName];
    },
    toggleFish(state, action: PayloadAction<string>) {
      const fishName = action.payload;
      if (state.caught[fishName]) {
        delete state.caught[fishName];
      } else {
        state.caught[fishName] = true;
      }
    },
  },
});

export const useIsFishCaught = (fish: string) =>
  !!useAppSelector((s) => s.fish.caught[fish]);
//!! makes every value into boolean

export const { catchFish, releaseFish, toggleFish } = FishSlice.actions;
export default FishSlice.reducer;
