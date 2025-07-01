import { Typography } from "@mui/material";
import Grid from "@mui/material/GridLegacy";
import { footerOptions, YELLOW } from "@/helpers/navbar.helpers";
import GenericIconButton from "@/global/generic-icon-button/GenericIconButton";
const Footer = () => {
  return (
    <Grid
      container
      py={3}
      sx={{
        backgroundColor: "#05005b",
        position: "relative",
        mt: "auto",
        width: "100%",
      }}
      alignItems="center"
      justifyContent="center"
    >
      <Grid item px={3} position="absolute" left={0}>
        <Typography variant="body1" color={YELLOW}>
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
