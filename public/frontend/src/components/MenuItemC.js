import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/components/MenuItemC.css';
// (1) font-size for price is not overriding(.paragraph .menu-item__price)

const MenuItemC = (props) => {
  return (
    <article
      className={`${props.classN ? props.classN + ' ' : ''}menu-item-c ${
        props.isPrimary ? 'menu-item-c--primary' : ''
      }`}
    >
      {/* Link is stretched using .menu-item__stretched-link::after and position */}
      <Link to={`/menu/${props.item.id}`} className="menu-item-c__stretched-link"></Link>  
      <h4 className="menu-item-c__heading heading">{props.item.title}</h4>
      
        <img
          src={props.item.src}
          alt={props.item.alt}
          className="menu-item-c__image"
        />
      
      <p className="menu-item-c__price paragraph">{props.item.price} ₴</p>
      <button
        className={`menu-item-c__cart ${
          props.isPrimary ? 'menu-item-c__cart--primary' : ''
        }`}
      >
        <FaShoppingCart className="menu-item-c__cart-icon" />
      </button>
    </article>
  );
};

export default MenuItemC;
