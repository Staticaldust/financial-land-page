import logo from "@/assets/logo.png";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box
      component="img"
      src={logo}
      alt="לוגו"
      sx={{
        height: { xs: "50px", sm: "70px", md: "90px" },
        width: { xs: "50px", sm: "70px", md: "90px" },
        objectFit: "contain",
      }}
    />
  );
};

export default Logo;
