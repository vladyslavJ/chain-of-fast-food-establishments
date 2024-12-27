import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaTelegram } from 'react-icons/fa';
import logo from '../assets/logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <section className="footer__section">
          <div className="footer__logo logo">
            <img src={logo} alt="Логотип" className="logo__image" />
          </div>
          <p className="footer__description paragraph">
            Ситень — це місце, де швидкість зустрічається зі смаком. Пропонуємо
            свіжі та смачні страви для тих, хто цінує свій час та не хоче
            поступатися якістю.
          </p>
        </section>

        <section className="footer__section">
          <h4 className="footer__heading heading">Інформація</h4>
          <nav className="footer__menu">
            <ul className="footer__menu-list">
              <li className="footer__menu-item">
                <Link to="/cart" className="footer__menu-link">
                  Оплата і доставка
                </Link>
              </li>
              <li className="footer__menu-item">
                <Link to="/" className="footer__menu-link">
                  Рекламна продукція
                </Link>
              </li>
              <li className="footer__menu-item">
                <Link to="/locations" className="footer__menu-link">
                  Контакти
                </Link>
              </li>
              <li className="footer__menu-item">
                <Link to="/authorization" className="footer__menu-link">
                  Вхід/Реєстрація
                </Link>
              </li>
            </ul>
          </nav>
        </section>

        <section className="footer__section">
          <h4 className="footer__heading heading">Контакти</h4>
          <ul className="footer__contacts-list">
            <li className="footer__contacts-item">
              <a href="tel:+380956547687" className="footer__contacts-link">
                <div className="footer__contacts-image">
                  <FaPhone
                    className="footer__contacts-icon"
                    aria-label="Телефон"
                  />
                </div>
                +380 95 654 76 87
              </a>
            </li>
            <li className="footer__contacts-item">
              <a href="tel:+380956547687" className="footer__contacts-link">
                <div className="footer__contacts-image">
                  <FaPhone
                    className="footer__contacts-icon"
                    aria-label="Телефон"
                  />
                </div>
                +380 95 654 76 87
              </a>
            </li>
            <li className="footer__contacts-item">
              <a
                href="mailto:syten@gmail.com"
                className="footer__contacts-link"
              >
                <div className="footer__contacts-image">
                  <FaEnvelope
                    className="footer__contacts-icon"
                    aria-label="Пошта"
                  />
                </div>
                syten@gmail.com
              </a>
            </li>
            <li className="footer__contacts-item">
              <a href="https://t.me/syten_ua" className="footer__contacts-link">
                <div className="footer__contacts-image">
                  <FaTelegram
                    className="footer__contacts-icon"
                    aria-label="Телеграм"
                  />
                </div>
                @syten_ua
              </a>
            </li>
          </ul>
        </section>

        <div className="footer__copyright">
          <p className="footer__copyright-text paragraph">
            &copy;2024. Всі права захищені.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
