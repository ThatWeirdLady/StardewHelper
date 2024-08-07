import { Box, Typography } from "@mui/material";
import React from "react";
import { FishImage } from "../images";
import { Fish } from "../fishes";
import { StardewBox } from "./StardewBox";
import Iridum_Rod from "../images/Iridium_Rod.png";
import { useAppDispatch } from "../app/hooks";
import { catchFish, useIsFishCaught } from "../features/caught/caught-slice";

interface FishCardProps {
  fish: Fish;
}

const FishCard = (Props: FishCardProps) => {
  const fish = Props.fish;
  const dispatch = useAppDispatch();
  const isCaught = useIsFishCaught(fish.name);

  function onCatch() {
    dispatch(catchFish(fish.name));
  }

  if (isCaught) return <></>;

  return (
    <Box sx={{ m: 4 }}>
      <StardewBox>
        <Box id={`${fish.name}-box`} sx={{ p: 2 }}>
          <Box
            id={`${fish.name}-header`}
            sx={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <img
              onClick={onCatch}
              style={{ height: 32, width: 32 }}
              src={Iridum_Rod}
              alt={`catch ${fish.name}`}
            />
            <Box id={`${fish.name}-icon`}>
              <Typography>{fish.name}</Typography>
              <img src={FishImage[fish.name]} />
            </Box>
          </Box>
          <Typography>Location: {fish.location.join(" - ")}</Typography>
          <Typography>Time: {fish.time}</Typography>
          <Typography>Season: {fish.season.join(" - ")}</Typography>
          <Typography>Weather: {fish.weather}</Typography>
        </Box>
      </StardewBox>
    </Box>
  );
};

export default FishCard;
