import BgImageSection from "@/global/hero-section/BgImageSection";
import MainText from "@/global/main-text/MainText";
import SummaryCard from "@/global/summary-card/SummaryCard";
import { summaryCardsData } from "@/helpers/summary-card.data";
import Grid from "@mui/material/GridLegacy";

const LandingPage = () => {
  return (
    <Grid overflow="auto" container rowGap={10} flex={1} direction="column">
      <Grid item>
        <BgImageSection />
      </Grid>

      <Grid item>
        <Grid
          container
          justifyContent="center"
          style={{
            background: "linear-gradient(0deg,#05005b,#0600bd,#05005b)",
            direction: "rtl",
          }}
          p={5}
          gap={3}
        >
          {summaryCardsData.map((card, index) => (
            <SummaryCard key={index} card={card} />
          ))}
        </Grid>
      </Grid>
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
