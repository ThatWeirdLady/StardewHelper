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
      delete state.caught[action.payload];
    },
  },
});

export const useIsFishCaught = (fish: string) =>
  !!useAppSelector((s) => s.fish.caught[fish]);

export const { catchFish, releaseFish } = FishSlice.actions;
export default FishSlice.reducer;
