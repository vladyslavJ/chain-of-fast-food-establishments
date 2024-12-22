import { useCart } from '../context/CartContext';
import { FaTrash } from 'react-icons/fa';
import '../styles/components/CartItem.css';

const CartItem = (props) => {
  const { removeFromCart, incrementCount, decrementCount } = useCart();

  return (
    <article
      className={`${
        props.classN ? props.classN + ' ' : ''
      }cart-item__container`}
    >
      <img
        src={props.item.src}
        alt={props.item.alt}
        className="cart-item__image"
      />
      <div className="cart-item__content">
        <h3 className="cart-item__heading heading">{props.item.title}</h3>
        <p className="cart-item__price">
          {(props.item.price * props.item.count).toFixed(2)} ₴
        </p>
        <div className="cart-item__interactive">
          <div className="cart-item__counter">
            <button
              className="cart-item__counter-button cart-item__counter-button-decrement"
              onClick={() => decrementCount(props.item.id)}
            >
              -
            </button>
            <p className="cart-item__counter-number">{props.item.count}</p>
            <button
              className="cart-item__counter-button cart-item__counter-button-increment"
              onClick={() => incrementCount(props.item.id)}
            >
              +
            </button>
          </div>
          <button
            className="cart-item__remove-button"
            onClick={() => removeFromCart(props.item.id)}
          >
            <FaTrash className="cart-item__remove-button-icon" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default CartItem;
