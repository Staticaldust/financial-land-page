import { Button } from "@mui/material";
import { FC } from "react";

type SubmitButtonProps = {
  text: string;
  minWidth?: string;
  p?: number;
  disabled?: boolean;
};

const SubmitButton: FC<SubmitButtonProps> = ({
  text,
  minWidth = "100%",
  p = 1,
  disabled = false,
}) => {
  return (
    <Button
      variant="outlined"
      type="submit"
      disabled={disabled}
      sx={{
        minWidth,
        color: "success.dark",
        fontSize: "large",
        borderColor: "success.dark",
        p,
        ":disabled": {
          color: "info.darker",
          borderColor: "info.darker",
        },
        "& :hover": {
          backgroundColor: "success.dark",
          color: "info.dark",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default SubmitButton;
