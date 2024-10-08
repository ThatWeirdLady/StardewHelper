import styled from "@emotion/styled";
import {
  AppBar,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { BasicModal } from "./BasicModal";
import { setSeason, useSeason } from "../features/season/season-slice";
import { useAppDispatch } from "../app/hooks";
import { InstructionModal } from "./InstructionModal";

const MyAppBar = styled(AppBar)({
  backgroundColor: "#9b6f41",
  border: "solid",
  borderWidth: "2px",
  borderColor: "#52352a",
});

export const NavBar = () => {
  const dispatch = useAppDispatch();
  const season = useSeason();

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSeason(event.target.value));
  };

  return (
    <>
      <MyAppBar position="static">
        <Toolbar variant="dense">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              m: 1,
            }}
          >
            <Typography variant="h6" color="inherit" component="div">
              Stardew Fish Tracker
            </Typography>
            <FormControl sx={{ width: 200 }}>
              <InputLabel sx={{ color: "white" }} id="season-label">
                Season
              </InputLabel>
              <Select
                sx={{ color: "white" }}
                labelId="season-label"
                value={season}
                label="Season"
                onChange={handleChange}
              >
                <MenuItem value={"Spring"}>Spring</MenuItem>
                <MenuItem value={"Summer"}>Summer</MenuItem>
                <MenuItem value={"Fall"}>Fall</MenuItem>
                <MenuItem value={"Winter"}>Winter</MenuItem>
              </Select>
            </FormControl>
            <BasicModal />
            <InstructionModal />
          </Box>
        </Toolbar>
      </MyAppBar>
    </>
  );
};
