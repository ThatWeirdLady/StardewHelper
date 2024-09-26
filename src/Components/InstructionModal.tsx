import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { StardewBox } from "./StardewBox";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

export function InstructionModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen} sx={{ color: "white" }}>
        Instructions
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StardewBox>
            <Box sx={{ display: "flex", flexDirection: "column", p: 1 }}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Instructions
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Click the fishing rod icon to catch a fish or use the collection
                to replicate your current in-game collection
              </Typography>
            </Box>
          </StardewBox>
        </Box>
      </Modal>
    </div>
  );
}
