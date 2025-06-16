import HeroSection from "@/global/hero-section/HeroSection";
import Grid from "@mui/material/GridLegacy";

const LandingPage = () => {
  return (
    <Grid
      overflow="auto"
      container
      flex={1}
      direction="column"
      style={{ backgroundColor: "#b6a53d" }}
      // spacing={2}
      // sx={{ p: 2 }}
    >
      <HeroSection />
    </Grid>
  );
};

export default LandingPage;
