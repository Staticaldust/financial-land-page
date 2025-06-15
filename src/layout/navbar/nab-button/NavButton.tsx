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
    <Grid item sx={{ display: "inline-block", mx: 1 }}>
      <Button
        size="large"
        variant="text"
        sx={{ color: YELLOW, fontSize: "1.3rem", p: 0 }}
        onClick={onclick}
      >
        {label}
      </Button>
    </Grid>
  );
};
export default NavButton;
