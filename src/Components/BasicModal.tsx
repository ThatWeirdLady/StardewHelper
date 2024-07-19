import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { StardewBox } from "./StardewBox";
import { FishIcon } from "./FishIcon";
import { AllFishes, Fish } from "../fishes";

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

  return (
    <div>
      <Button onClick={handleOpen} sx={{ color: "white" }}>
        Collection
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <StardewBox>
            <Box sx={{ p: 4, display: "flex", flexWrap: "wrap" }}>
              {AllFishes.map((f) => (
                <FishIcon key={f.name} fish={f} />
              ))}
            </Box>
          </StardewBox>
        </Box>
      </Modal>
    </div>
  );
}
