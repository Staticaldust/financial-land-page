import BgImageSection from "@/global/image-section/ImageSection";
import MainText from "@/global/image-section/main-text/MainText";
import LinkSection from "@/global/links-section/LinksSection";
import SummaryCards from "@/global/summary-card/SummaryCards";
import Grid from "@mui/material/GridLegacy";

const LandingPage = () => {
  return (
    <Grid overflow="auto" container flex={1} direction="column">
      <Grid item>
        <BgImageSection />
      </Grid>

      <Grid item>
        <LinkSection />
      </Grid>

      <Grid item>
        <SummaryCards />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
