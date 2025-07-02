import { useState } from "react";
import "./SummaryCards.css";
import DetailsPopup from "../details-popup/DetailsPopup";
import Grid from "@mui/material/GridLegacy";
import { summaryCardsData } from "@/helpers/summary-card.data";

const SummaryCards = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
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
      {summaryCardsData.map((card, index) => {
        const { alt, category, excerpt, image, title } = card;

        return (
          <div key={index} className="card">
            <div className="card__corner" />

            <div className="card__img">
              {image && <img src={image} alt={alt} />}
              {category && <span className="card__span">{category}</span>}
            </div>

            <div className="card-int">
              <p className="card-int__title">{title}</p>
              {excerpt && <p className="excerpt">{excerpt}</p>}

              <button className="card-int__button" onClick={handleOpen}>
                קרא עוד...
              </button>
            </div>
            <DetailsPopup open={open} handleClose={handleClose} card={card} />
          </div>
        );
      })}
    </Grid>
  );
};

export default SummaryCards;
