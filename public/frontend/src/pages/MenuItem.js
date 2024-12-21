import { useLoaderData } from 'react-router-dom';
import '../styles/MenuItem.css';

const MenuItem = () => {
  // const { itemId } = useParams();
  const item = useLoaderData();
  console.log(item);
  return (
    <div className="menu-item__container">
      <article className="menu-item__inner-container">
        <div className="menu-item__main-info">
          <div className="menu-item__main-info-content">
            <h1 className="menu-item__heading heading">{item.title}</h1>
            <p className="menu-item__nutritional-value paragraph">
              {item.weight} / {item.calories}
            </p>
            <p className="menu-item__description paragraph">
              {item.description}
            </p>
          </div>
          <img src={item.src} alt={item.alt} className="menu-item__image" />
        </div>
        <hr />
        <div className="menu-item__details">
          <p className="menu-item__details-nutritional-value paragraph">
            <strong>Поживна цінність:</strong> Білки: {item.proteins} | Жири:{' '}
            {item.fats} | Вуглеводи: {item.carbohydrates}
          </p>
          <p className="menu-item__ingredients">
            <strong>Склад:</strong> {item.ingredients.join(', ')}
          </p>
        </div>
      </article>
    </div>
  );
};

export default MenuItem;
