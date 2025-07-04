import Grid from "@mui/material/GridLegacy";
import { BLUE, navbarOptions, YELLOW } from "../../helpers/navbar.helpers";
import Logo from "./logo/Logo";
import { Button } from "@mui/material";
import NavButton from "./nav-button/NavButton";

const Navbar = () => {
  return (
    <Grid
      container
      position="sticky"
      top={0}
      zIndex={2}
      sx={{ backgroundColor: BLUE }}
      p={3}
    >
      <Grid item position="absolute" top={30} left={30}>
        <Button
          variant="contained"
          size="large"
          href="https://www.paypal.com/donate/?hosted_button_id=Z3X2K5Q9V6W7G"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ bgcolor: YELLOW, p: 0, color: BLUE }}
        >
          לתרומה
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Grid container justifyContent="center" alignItems="center">
          {navbarOptions.map((option, index) => (
            <NavButton key={index} option={option} />
          ))}
        </Grid>
      </Grid>

      <Grid item position="absolute" top={-5} right={30}>
        <Logo />
      </Grid>
    </Grid>
  );
};

export default Navbar;
