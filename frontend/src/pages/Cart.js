import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

const Cart = () => {
  const { cart } = useCart();

  const sumPrice = cart.reduce((sum, item) => sum + item.count * item.price, 0);

  return (
    <div className="cart__container">
      <div className="cart__inner-container">
        <h1 className="cart__heading heading">Ваше замовлення</h1>
        {!cart || cart.length === 0 ? (
          <p className="cart__empty-paragraph paragraph">Кошик порожній &#128546;</p>
        ) : (
          <>
            {cart.map((_item) => (
              <>
                <CartItem key={_item.id} item={_item} classN="cart__item" />
                <hr />
              </>
            ))}

            <p className="cart__total-price">Всього: {sumPrice.toFixed(2)} ₴</p>
            <button className="cart__order-button">Оформити замовлення</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
