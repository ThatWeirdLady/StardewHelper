import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented, amountAdded } from "./features/counter/counter-slice";
import logo from "./logo.svg";
import "./App.css";
import tigertrout from "./images/Tiger_Trout.png";
import caughtSlice, {
  catchFish,
  releaseFish,
  useIsFishCaught,
} from "./features/caught/caught-slice";
import { Box, Card, Typography } from "@mui/material";
import NavBar from "./Components/NavBar";
import { AllFishes, Fish } from "./fishes";
import { FishImage } from "./images";
import FishCard from "./Components/FishCard";
import { useSeason } from "./features/season/season-slice";
import { FishSection } from "./Components/FishSection";

function split(
  fishes: Fish[],
  condition: (fish: Fish) => boolean
): [Fish[], Fish[]] {
  const validFishes = fishes.filter(condition);
  const inValidFishes = fishes.filter((f: Fish) => !condition(f));
  return [validFishes, inValidFishes];
}
function App() {
  const season = useSeason();

  let remaining = AllFishes;
  let exclusive: Fish[] = [];

  [exclusive, remaining] = split(remaining, (f: Fish) => {
    return f.season.length === 1 && f.season.includes(season);
  });

  let seasonal: Fish[] = [];
  [seasonal, remaining] = split(remaining, (f: Fish) => {
    return f.season.includes(season);
  });

  console.log(exclusive);
  console.log(seasonal);
  console.log(remaining);

  return (
    <div className="App">
      <NavBar />
      <div
        style={{
          backgroundColor: "#ffcb7b",
          padding: 8,
        }}
      >
        <FishSection title="Exclusive" fishes={exclusive} />
        <FishSection title="Multi-Season" fishes={seasonal} />
        <FishSection title="Remaining" fishes={remaining} />
      </div>
    </div>
  );
}

export default App;
