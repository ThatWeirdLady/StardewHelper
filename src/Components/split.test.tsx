import { exclusiveTo, inCrabpot, seasonalTo, split } from "../App";
import { AllFishes, Fish } from "../fishes";

test("split returns an array of two arrays of fish", () => {
  let AllFish: Fish[] = AllFishes;

  let crabpot: Fish[] = [];
  [crabpot, AllFish] = split(AllFish, inCrabpot);

  expect(crabpot.length).toBe(15);

  let exclusive: Fish[] = [];
  [exclusive, AllFish] = split(AllFish, exclusiveTo("Winter"));

  expect(exclusive.length).toBe(7);

  let seasonal: Fish[] = [];
  [seasonal, AllFish] = split(AllFish, seasonalTo("Winter"));

  expect(seasonal.length).toBe(34);
  expect(AllFish.length).toBe(16);
});
