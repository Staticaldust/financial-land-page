import { Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { footerOptions, YELLOW } from "@/helpers/navbar.helpers";
import GenericIconButton from "@/global/generic-icon-button/GenericIconButton";
const Footer = () => {
  return (
    <Grid
      container
      py={{ xs: 2, sm: 2.5, md: 3 }}
      sx={{
        backgroundColor: "#05005b",
        position: "relative",
        mt: "auto",
        width: "100%",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid
        item
        px={{ xs: 1, sm: 2, md: 3 }}
        position="absolute"
        left={0}
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Typography
          variant="body1"
          color={YELLOW}
          sx={{
            fontSize: { xs: "0.8rem", sm: "0.9rem", md: "1rem" },
          }}
        >
          שחר טוב © 2025
        </Typography>
      </Grid>
      {footerOptions.map(({ icon, onclick, tooltip }, index) => (
        <GenericIconButton
          key={index}
          icon={icon}
          onClick={onclick}
          tooltip={tooltip}
        />
      ))}
    </Grid>
  );
};

export default Footer;
