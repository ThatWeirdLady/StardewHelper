import React from "react";
import { FishImage } from "../images";
import { Fish } from "../fishes";
import { useAppDispatch } from "../app/hooks";
import { toggleFish, useIsFishCaught } from "../features/caught/caught-slice";
interface FishIconProps {
  fish: Fish;
}
export const FishIcon = (prop: FishIconProps) => {
  const fish = prop.fish;
  const dispatch = useAppDispatch();
  const isCaught = useIsFishCaught(fish.name);

  function onClick() {
    dispatch(toggleFish(fish.name));
  }

  let filter = "";
  if (!isCaught) {
    filter = "brightness(40%) grayscale(100%)";
  }

  return (
    <>
      <img
        onClick={onClick}
        style={{ filter: filter }}
        src={FishImage[fish.name]}
      ></img>
    </>
  );
};
