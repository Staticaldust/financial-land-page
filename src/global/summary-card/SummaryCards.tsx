import { FC, useState } from "react";
import "./SummaryCards.css";
import DetailsPopup from "../details-popup/DetailsPopup";
import { CardType } from "@/types/main.types";

type SummaryCardsProps = {
  card: CardType;
};

const SummaryCards: FC<SummaryCardsProps> = ({ card }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { image, title, category, alt, excerpt } = card;
  return (
    <div className="card">
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
};

export default SummaryCards;
