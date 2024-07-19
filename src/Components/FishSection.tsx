import { Box, Typography } from "@mui/material";
import React from "react";
import FishCard from "./FishCard";
import { Fish } from "../fishes";

interface FishSectionProps {
  title: string;
  fishes: Fish[];
}

export const FishSection = (props: FishSectionProps) => {
  return (
    <>
      <Box sx={{ backgroundColor: "#853605", borderRadius: 2 }}>
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
