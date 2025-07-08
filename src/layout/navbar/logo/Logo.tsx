import logo from "@/assets/logo.png";
import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box
      component="img"
      src={logo}
      alt="לוגו"
      sx={{
        height: { xs: "65px", sm: "85px", md: "95" },
        width: { xs: "65px", sm: "85px", md: "95" },
        objectFit: "contain",
        transform: "scale(1.5)", // פי 2פי 2
        transformOrigin: "center",
      }}
    />
  );
};

export default Logo;
