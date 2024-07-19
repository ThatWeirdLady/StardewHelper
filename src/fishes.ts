import fishes from "./fishes.json";

export interface Fish {
  name: string;
  location: string[];
  time: string;
  season: string[];
  weather: string;
}

export const AllFishes: Fish[] = fishes;
