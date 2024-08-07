import { Box, Typography } from "@mui/material";
import React from "react";
import FishCard from "./FishCard";
import { Fish } from "../fishes";
import { useFishesCaught } from "../features/caught/caught-slice";

interface FishSectionProps {
  title: string;
  fishes: Fish[];
}

export const FishSection = (props: FishSectionProps) => {
  const allCaught = useFishesCaught(props.fishes);

  if (allCaught) return null;
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#9b6f41",
          borderRadius: 2,
          border: "solid",
          borderWidth: "2px",
          borderColor: "#52352a",
        }}
      >
        <Typography sx={{ color: "white" }} variant="h2">
          {props.title}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          backgroundColor: "#ffcb7b",
        }}
      >
        {props.fishes.map((f) => (
          <FishCard key={f.name} fish={f} />
        ))}
      </Box>
    </>
  );
};
