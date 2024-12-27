import ImageSlider from './ImageSlider';
import { FaClock, FaPhone } from 'react-icons/fa';
import '../styles/components/RestaurantInfo.css';

const RestaurauntInfo = (props) => {
  const schedule = [
    { name: 'Пн', value: props.location.schedule.Mon },
    { name: 'Вт', value: props.location.schedule.Tue },
    { name: 'Ср', value: props.location.schedule.Wed },
    { name: 'Чт', value: props.location.schedule.Thu },
    { name: 'Пт', value: props.location.schedule.Fri },
    { name: 'Сб', value: props.location.schedule.Sat },
    { name: 'Нд', value: props.location.schedule.Sun },
  ];

  return (
    <article
      className={`${props.className ? props.className : ''} restaurant-info`}
    >
      <ImageSlider
        className="restaurant-info__slider"
        images={props.location.images}
      />
      <h3 className="restaurant-info__heading heading">
        {props.location.adress}. <br />
        <span className="restaurant-info__heading-number">
          {' '}
          Ситень №{props.location.id}
        </span>
      </h3>
      <section
        className="restaurant-info__content"
        aria-label="Основна інформація"
      >
        <section className="restaurant-info__schedule">
          <h4 className="restaurant-info__schedule-heading heading">
            <div className="restaurant-info__schedule-heading-icon">
              <FaClock className="restaurant-info__schedule-heading-icon-content" />
            </div>
            Робочі години:
          </h4>
          <ul className="restaurant-info__schedule-list">
            {schedule.map((day, index) => (
              <li key={index} className="restaurant-info__schedule-item">
                <strong>{day.name}: </strong>
                {day.value}
              </li>
            ))}
          </ul>
        </section>
        <section className="restaurant-info__contacts">
          <h4 className="restaurant-info__contacts-heading heading">
            Контакти:{' '}
          </h4>
          <ul className="restaurant-info__contacts-list">
            {props.location.contacts.map((contact, index) => (
              <li key={index} className="restaurant-info__contacts-item">
                <a
                  href={`tel:${contact.replaceAll(' ', '')}`}
                  className="restaurant-info__contacts-link"
                >
                  <div className="restaurant-info__contacts-heading-icon">
                    <FaPhone className="restaurant-info__contacts-heading-icon-content" />
                  </div>
                  {contact}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </article>
  );
};

export default RestaurauntInfo;
