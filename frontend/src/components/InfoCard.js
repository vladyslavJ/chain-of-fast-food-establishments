import { Link } from 'react-router-dom';

const InfoCard = (props) => {
  return (
    <article
      className={`info-card info-card--${props.size} ${
        props.isReversed ? `info-card--${props.size}-reversed` : ''
      }`}
    >
      <div
        className={`info-card__inner-container info-card__inner-container--${props.size}`}
      >
        <h2 className="info-card__heading heading">{props.card.title}</h2>
        <p className="info-card__description paragraph">{props.card.description}</p>
        <Link to={props.card.path} className="info-card__link link">
          Детальніше
        </Link>
      </div>
      <img
        src={props.card.src}
        alt={props.card.alt}
        className={`info-card__image info-card__image--${props.size}`}
      />
    </article>
  );
};

export default InfoCard;
