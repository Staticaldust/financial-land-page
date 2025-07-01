import { FC, useState } from "react";
import "./SummaryCard.css";
import DialogDoc from "../details-popup/DetailsPopup";
import { CardType } from "@/types/main.types";

type SummaryCardProps = {
  card: CardType;
};

const SummaryCard: FC<SummaryCardProps> = ({ card }) => {
  const { alt, category, excerpt, image, title } = card;

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <DialogDoc open={open} handleClose={handleClose} card={card} />
    </div>
  );
};

export default SummaryCard;
