import { useState } from "react";
import { Dialog, Grid, Grow } from "@mui/material";
import SubForm from "../forms/sub-form/SubForm";
import "./SubButtonForm.css";

const SubButtonForm = () => {
  const [open, setOpen] = useState(false);
  const [openWorkshopDialog, setOpenWorkshopDialog] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOpenWorkshopDialog = () => setOpenWorkshopDialog(true);
  const handleCloseWorkshopDialog = () => setOpenWorkshopDialog(false);

  return (
    <>
      <div className="buttons-container">
        <button className="cta-button" onClick={handleOpenWorkshopDialog}>
          להרשמה לסדנה
        </button>
        <button className="cta-button" onClick={handleOpen}>
          להרשמה לכנס
        </button>
      </div>

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

      {/* Workshop Dialog */}
      <Dialog
        open={openWorkshopDialog}
        onClose={handleCloseWorkshopDialog}
        slots={{
          transition: Grow,
        }}
        maxWidth="sm"
        PaperComponent={Grid}
        sx={{ direction: "rtl" }}
      >
        <div className="workshop-dialog-content">
          <h2>הרשמה לסדנה</h2>
          <p>
            אי"ה יתקיימו סדנאות לקבוצות קטנות, שבהם יינתן מידע פרקטי ומעשי
            להתנהלות כלכלית נכונה ע"י מיטב מרצי מסילה במחיר סימלי 80 ₪ בחלוקה
            לשלושה מפגשים
          </p>
          <p>
            <b>שים לב: ניתן להירשם לסדנאות בימי שני או בימי שלישי</b>
          </p>
          <div className="workshop-links">
            <a
              href="https://www.matara.pro/nedarimplus/online/?mosad=7009215"
              target="_blank"
              rel="noopener noreferrer"
              className="workshop-link-button"
            >
              להרשמה לסדנה{" "}
            </a>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default SubButtonForm;
