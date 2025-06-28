import Button from "@mui/material/Button";
import MuiSnackbar, { SnackbarCloseReason } from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { SyntheticEvent, useState } from "react";

const Snackbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    _event: SyntheticEvent | Event,
    reason?: SnackbarCloseReason
  ) => reason !== "clickaway" && setOpen(false);

  return (
    <div>
      <Button onClick={handleClick}>Open Snackbar</Button>
      <MuiSnackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          This is a success Alert inside a Snackbar!
        </Alert>
      </MuiSnackbar>
    </div>
  );
};

export default Snackbar;
