import { Link } from 'react-router-dom';
import { FaShoppingBasket } from 'react-icons/fa';
import logo from '../assets/logo.svg'

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Link to="/" className="header__logo logo">
          <img src={logo} alt="Логотип" className="logo__image" />
        </Link>

        <nav className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <Link to="/menu" className="header__menu-link">
                Меню
              </Link>
            </li>

            <li className="header__menu-item">
              <Link to="/locations" className="header__menu-link">
                Локації
              </Link>
            </li>

            <li className="header__menu-item">
              <Link to="/about" className="header__menu-link">
                Про нас
              </Link>
            </li>

            <li className="header__menu-item">
              <Link to="/hygiene" className="header__menu-link">
                Якість та гігієна
              </Link>
            </li>

            <li className="header__menu-item">
              <Link to="/authorization" className="header__menu-link">
                Вхід
              </Link>
            </li>
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
