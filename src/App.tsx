import React, { useState } from "react";
import "./App.css";
import { NavBar } from "./Components/NavBar";
import { Fish, AllFishes } from "./fishes";
import { useSeason } from "./features/season/season-slice";
import { FishSection } from "./Components/FishSection";

export function split(
  fishes: Fish[],
  condition: (fish: Fish) => boolean
): [Fish[], Fish[]] {
  const validFishes = fishes.filter(condition);
  const inValidFishes = fishes.filter((f: Fish) => !condition(f));
  return [validFishes, inValidFishes];
}

export function exclusiveTo(season: string) {
  function match(f: Fish) {
    return f.season.length === 1 && f.season.includes(season);
  }

  return match;
}

export function seasonalTo(season: string) {
  function match(f: Fish) {
    return f.season.includes(season);
  }

  return match;
}

export function inCrabpot(fish: Fish) {
  return fish.location.includes("Crabpot");
}

function App() {
  const season = useSeason();

  let remaining = AllFishes;

  let crabpot: Fish[] = [];
  [crabpot, remaining] = split(remaining, inCrabpot);
  let exclusive: Fish[] = [];
  [exclusive, remaining] = split(remaining, exclusiveTo(season));

  let seasonal: Fish[] = [];
  [seasonal, remaining] = split(remaining, seasonalTo(season));

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
        <FishSection title="Crabpot" fishes={crabpot} />
        <FishSection title="Unavailable" fishes={remaining} />
      </div>
    </div>
  );
}

export default App;
