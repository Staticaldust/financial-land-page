import { IconButton, Tooltip } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { ReactNode } from "react";

const GenericIconButton = ({
  icon,
  onClick,
  tooltip = "",
  disabled = false,
}: {
  icon: ReactNode;
  onClick: () => void;
  tooltip?: string;
  disabled?: boolean;
}) => {
  return (
    <Grid item px={1}>
      <Tooltip title={tooltip} arrow>
        <IconButton
          onClick={onClick}
          disabled={disabled}
          disableRipple
          sx={{ p: 1, bgcolor: "white" }}
        >
          {icon}
        </IconButton>
      </Tooltip>
    </Grid>
  );
};

export default GenericIconButton;
