import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const menuLinks = [
  {
    to: '/menu',
    text: 'Меню',
  },
  {
    to: '/locations',
    text: 'Локації',
  },
  {
    to: '/about',
    text: 'Про нас',
  },
  {
    to: '/hygiene',
    text: 'Якість та гігієна',
  },
  {
    to: '/authorization',
    text: 'Вхід',
  },
];

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo logo">
          <img src={logo} alt="Логотип" className="logo__image" />
        </Link>

        <nav className="header__menu">
          <ul className="header__menu-list">
            {menuLinks.map((link, index) => (
              <li key={index} className="header__menu-item">
                <Link to={link.to} className="header__menu-link">
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/cart" className="header__bascket">
            <FaShoppingBasket
              className="header__bascket-icon"
              aria-label="Корзина"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
