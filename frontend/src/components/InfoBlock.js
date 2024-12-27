import '../styles/components/InfoBlock.css';

const InfoBlock = (props) => {
  return (
    <article
      className={`${
        props.className ? props.className + ' ' : ''
      }info-block__container`}
    >
      <div className="info-block__images">
        {Array.isArray(props.block.images) &&
          props.block.images.length <= 3 &&
          props.block.images.map((item) => (
            <img
              src={item.src}
              alt={item.alt}
              className={`info-block__image info-block__image--${props.block.images.length}`}
            />
          ))}
      </div>
      <div className="info-block__content">
        <h2 className="info-block__heading heading">{props.block.title}</h2>
        {Array.isArray(props.block.description) &&
          props.block.description.map((paragrahp) => (
            <p className="info-block__paragraph paragraph">{paragrahp}</p>
          ))}
      </div>
    </article>
  );
};

export default InfoBlock;
