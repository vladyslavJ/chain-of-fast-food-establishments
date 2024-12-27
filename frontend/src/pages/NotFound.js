import { Link } from 'react-router-dom';
import '../styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found__container">
      <h1 className="not-found__heading heading">404</h1>
      <p className="not-found__paragraph paragraph">
        <span className="not-found__paragraph-main-info">
          Ой, сторінку не знайдено.
        </span>
        <br /> Посилання може бути пошкодженим,
        <br /> або такої сторінки не існує.
      </p>
      <Link to="/" className="not-found__link">
        На Головну
      </Link>
    </div>
  );
};

export default NotFound;
