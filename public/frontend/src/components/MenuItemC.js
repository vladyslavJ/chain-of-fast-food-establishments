import { FaShoppingCart } from 'react-icons/fa';
import '../styles/components/MenuItemC.css';
// (1) font-size for price is not overriding(.paragraph .menu-item__price)

const MenuItemC = (props) => {
  return (
    <article
      className={`${props.classN ? props.classN + ' ' : ''}menu-item ${
        props.isPrimary ? 'menu-item--primary' : ''
      }`}
    >
      <h4 className="menu-item__heading heading">{props.item.title}</h4>
      <img
        src={props.item.src}
        alt={props.item.alt}
        className="menu-item__image"
      />
      <p className="menu-item__price paragraph">{props.item.price} ₴</p>
      <button
        className={`menu-item__cart ${
          props.isPrimary ? 'menu-item__cart--primary' : ''
        }`}
      >
        <FaShoppingCart className="menu-item__cart-icon" />
      </button>
    </article>
  );
};

export default MenuItemC;
