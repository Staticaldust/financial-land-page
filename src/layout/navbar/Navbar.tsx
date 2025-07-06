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
      sx={{
        backgroundColor: BLUE,
        p: { xs: 0.5, sm: 1, md: 1.5 },
        minHeight: { xs: "auto", sm: "auto", md: "auto" },
      }}
    >
      <Grid
        item
        xs={3}
        sm={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Logo />
      </Grid>

      <Grid
        item
        xs={6}
        sm={8}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{
            flexDirection: "row",
            gap: { xs: 0.3, sm: 0.5, md: 1 },
            flexWrap: "wrap",
          }}
        >
          {navbarOptions.map((option, index) => (
            <NavButton key={index} option={option} />
          ))}
        </Grid>
      </Grid>

      <Grid
        item
        xs={3}
        sm={2}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Button
          variant="contained"
          size="small"
          href="https://www.paypal.com/donate/?hosted_button_id=Z3X2K5Q9V6W7G"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            bgcolor: YELLOW,
            color: BLUE,
            fontSize: { xs: "0.6rem", sm: "0.7rem", md: "0.8rem" },
            px: { xs: 1, sm: 1.5, md: 2 },
            py: { xs: 0.3, sm: 0.5, md: 0.75 },
            whiteSpace: "nowrap",
          }}
        >
          לתרומה
        </Button>
      </Grid>
    </Grid>
  );
};

export default Navbar;
