import { Button } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { YELLOW } from "../../../helpers/navbar.helpers";
import { FC } from "react";
import { NavbarOptionType } from "../../../types/navbar.types";

type NavButtonProps = {
  option: NavbarOptionType;
};

const NavButton: FC<NavButtonProps> = (option) => {
  const { label, onclick } = option.option;
  return (
    <Grid
      item
      sx={{ display: "inline-block", mx: { xs: 0.2, sm: 0.5, md: 1 } }}
    >
      <Button
        size="small"
        variant="text"
        sx={{
          color: YELLOW,
          fontSize: { xs: "0.8rem", sm: "1rem", md: "1.2rem" },
          p: { xs: 0.2, sm: 0.3, md: 0.5 },
          whiteSpace: "nowrap",
          minWidth: "auto",
          lineHeight: 1,
        }}
        onClick={onclick}
      >
        {label}
      </Button>
    </Grid>
  );
};
export default NavButton;
