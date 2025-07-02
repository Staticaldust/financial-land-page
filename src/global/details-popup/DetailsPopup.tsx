import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import "./DetailsPopup.css";
import { CardType } from "@/types/main.types";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

type DetailsPopupProps = {
  card: CardType;
  open: boolean;
  handleClose: () => void;
};

const DetailsPopup: FC<DetailsPopupProps> = ({ card, open, handleClose }) => {
  const { excerpt, title } = card;
  return (
    <BootstrapDialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
        {title}
      </DialogTitle>

      <DialogContent dividers>
        <Typography gutterBottom>{excerpt}</Typography>
        <Typography gutterBottom>{excerpt}</Typography>
        <Typography gutterBottom>{excerpt}</Typography>
        <Typography gutterBottom>{excerpt}</Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center" }}>
        <button className="close_explanation_button" onClick={handleClose}>
          סגור
        </button>
      </DialogActions>
    </BootstrapDialog>
  );
};
export default DetailsPopup;
