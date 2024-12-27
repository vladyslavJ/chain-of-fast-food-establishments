import { useLoaderData } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import pizza from '../assets/temp/pizza-image.png'; // remove
import '../styles/MenuItem.css';

// remove
const dataForTests = {
  title: 'lorem ipsum',
  price: 1120,
  src: pizza,
  alt: 'lorem ipsum',
  categoryId: [1, 2],
  description:
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas harum repellat distinctio inventore minima repellendus?',
  weight: '500 г',
  calories: 1400,
  proteins: 125,
  fats: 210,
  carbohydrates: 340,
  ingredients: ['курка', 'огірок', 'помідор', 'салат', 'лаваш', 'соус'],
};

const MenuItem = () => {
  // const { itemId } = useParams();
  const item = useLoaderData() || dataForTests;
  const itemForCart = {
    id: item.id,
    title: item.title,
    price: item.price,
    src: item.src,
    alt: item.alt,
    categoryId: item.categoryId,
  };

  const { addToCart } = useCart();

  return (
    <div className="menu-item__container">
      <article className="menu-item__inner-container">
        <div className="menu-item__main-info">
          <div className="menu-item__main-info-content">
            <h1 className="menu-item__heading heading">{item.title}</h1>
            <p className="menu-item__nutritional-value paragraph">
              {item.weight} / {item.calories} ккал
            </p>
            <p className="menu-item__description paragraph">
              {item.description}
            </p>
            <p className="menu-item__price paragraph">{item.price} ₴</p>
            <button
              className="menu-item__button"
              onClick={() => addToCart(itemForCart)}
            >
              Додати до корзини
            </button>
          </div>
          <img src={item.src} alt={item.alt} className="menu-item__image" />
        </div>
        <hr />
        <div className="menu-item__details">
          <p className="menu-item__details-nutritional-value paragraph">
            <strong>Поживна цінність:</strong> Білки: {item.proteins} г | Жири:{' '}
            {item.fats} г | Вуглеводи: {item.carbohydrates} г.
          </p>
          <p className="menu-item__ingredients paragraph">
            <strong>Склад:</strong> {item.ingredients.join(', ')}.
          </p>
        </div>
      </article>
    </div>
  );
};

export default MenuItem;
