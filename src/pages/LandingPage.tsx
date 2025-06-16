import SubscribeForm from "@/global/forms/subscribe-form/SubscribeForm";
import HeroSection from "@/global/hero-section/HeroSection";
import MainText from "@/global/main-text/MainText";
import Grid from "@mui/material/GridLegacy";

const LandingPage = () => {
  return (
    <Grid
      overflow="auto"
      container
      flex={1}
      direction="column"
      // spacing={2}
      // sx={{ p: 2 }}
    >
      <HeroSection />
      <div
        style={{
          height: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
          position: "relative",
        }}
      >
        <div className="hero-content">
          <MainText />
        </div>
      </div>
    </Grid>
  );
};

export default LandingPage;
