import { FC } from "react";
import "./SummaryCard.css";

type SummaryCardProps = {
  title?: string;
  category?: string;
  excerpt?: string;
  image: string;
  alt?: string;
};

const SummaryCard: FC<SummaryCardProps> = ({
  category,
  excerpt,
  title,
  image,
  alt,
}) => {
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

        <button className="card-int__button">קרא עוד...</button>
      </div>
    </div>
  );
};

export default SummaryCard;
