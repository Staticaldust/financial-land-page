import { useState } from "react";
import { Dialog, Grid, Grow } from "@mui/material";
import SubForm from "../forms/subscribe-form/SubForm";

const SubButtonForm = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <button className="cta-button" onClick={handleOpen}>
        להרשמה לכנס
      </button>

      <Dialog
        open={open}
        onClose={handleClose}
        slots={{
          transition: Grow,
        }}
        // fullWidth
        maxWidth="md"
        PaperComponent={Grid}
        sx={{ direction: "rtl" }}
      >
        <SubForm />
      </Dialog>
    </>
  );
};

export default SubButtonForm;
