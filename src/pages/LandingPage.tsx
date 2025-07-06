import BgImageSection from "@/global/image-section/ImageSection";
import SummaryCards from "@/global/summary-card/SummaryCards";
import { summaryCardsData } from "@/helpers/summary-card.data";
import Grid from "@mui/material/GridLegacy";
import "../global/summary-card/SummaryCards.css";

const LandingPage = () => {
  return (
    <Grid overflow="auto" container flex={1} direction="column">
      <Grid item>
        <BgImageSection />
      </Grid>

      <Grid item>
        <Grid
          container
          justifyContent="center"
          style={{
            background: "linear-gradient(0deg,#1b4861,#2b769f,#1b4861)",
            direction: "rtl",
          }}
          p={5}
          gap={3}
        >
          {summaryCardsData.map((card, index) => (
            <SummaryCards key={index} card={card} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
