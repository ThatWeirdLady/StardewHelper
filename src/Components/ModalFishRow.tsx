import { Box } from "@mui/material";
import React from "react";
import { FishIcon } from "./FishIcon";
import { Fish } from "../fishes";

const rows: Fish[][] = [];
interface ModalFishRowProps {
  fishes: Fish[];
}

export const ModalFishRow = (prop: ModalFishRowProps) => {
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap" }}>
      {prop.fishes.map((f) => (
        <FishIcon key={f.name} fish={f} />
      ))}
    </Box>
  );
};
