import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppSelector } from "../../app/hooks";
import { Fish } from "../../fishes";
import { RootState } from "../../app/store";

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

export function useIsFishCaught(fish: string) {
  function selectIsCaught(s: RootState) {
    return s.fish.caught[fish];
  }

  const isCaught = useAppSelector(selectIsCaught);
  //!! makes every value into boolean
  return !!isCaught;
}

export function useFishesCaught(fish: Fish[]) {
  function fishIncluded(entry: [string, boolean]) {
    return fish.some((f) => f.name === entry[0]);
  }

  function selector(s: RootState) {
    const entries = Object.entries(s.fish.caught);
    const caughtList = entries.filter(fishIncluded);
    return caughtList.length === fish.length;
  }

  return useAppSelector(selector);
}

export const { catchFish, releaseFish, toggleFish } = FishSlice.actions;
export default FishSlice.reducer;
