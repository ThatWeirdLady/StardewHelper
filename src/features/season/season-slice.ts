import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

interface seasonState {
  current: string;
}

const initialState = {
  current: "Spring",
};

const seasonSlice = createSlice({
  name: "season",
  initialState,
  reducers: {
    setSeason(state, action: PayloadAction<string>) {
      const newSeason = action.payload;
      state.current = newSeason;
    },
  },
});

export const useSeason = () => useAppSelector((s) => s.season.current);

export const { setSeason } = seasonSlice.actions;
export default seasonSlice.reducer;
