import { Fragment, useState } from "react";
import { Dialog, Grow } from "@mui/material";
import SubscribeForm from "../forms/subscribe-form/SubscribeForm";

const DialogButton = () => {
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
        PaperComponent={Fragment}
        sx={{ direction: "rtl" }}
      >
        <SubscribeForm />
        {/* <DialogTitle>כותרת הפופאפ</DialogTitle>
        <DialogContent>
          <p>כאן תוכן הפופאפ, שיכול להיות גדול.</p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>סגור</Button>
        </DialogActions> */}
      </Dialog>
    </>
  );
};

export default DialogButton;
