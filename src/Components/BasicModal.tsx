import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { StardewBox } from "./StardewBox";
import { AllFishes, Fish } from "../fishes";
import { ModalFishRow } from "./ModalFishRow";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const rows: Fish[][] = [];
  for (let i = 0; i < AllFishes.length; i += 10) {
    const row: Fish[] = [];
    for (let j = i; j < Math.min(AllFishes.length, i + 10); j++) {
      row.push(AllFishes[j]);
    }
    rows.push(row);
  }

  return (
    <div>
      <Button onClick={handleOpen} sx={{ color: "white" }}>
        Collection
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <StardewBox>
            <Box sx={{ p: 1 }}>
              {rows.slice(0, 7).map((r, i) => (
                <ModalFishRow key={i} fishes={r} />
              ))}
            </Box>
          </StardewBox>
          <StardewBox>
            <Box sx={{ p: 1 }}>
              {rows.slice(7, 8).map((r, i) => (
                <ModalFishRow key={i} fishes={r} />
              ))}
            </Box>
          </StardewBox>
        </Box>
      </Modal>
    </div>
  );
}
