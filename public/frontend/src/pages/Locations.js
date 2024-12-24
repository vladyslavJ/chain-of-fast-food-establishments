import { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import RestaurauntInfo from '../components/RestaurantInfo';
import '../styles/Locations.css';

import restarauntInterior from '../assets/temp/restaurant-interior.jpg';
import interior from '../assets/interior.jpg';
import staff1 from '../assets/staff-1.jpg';

const locations = [
  {
    id: 1,
    adress: 'Київ, проспект Оболонський, 346',
    images: [
      { src: restarauntInterior, alt: "Фото інтер'єру" },
      { src: interior, alt: "Фото інтер'єру" },
      { src: staff1, alt: "Фото інтер'єру" },
    ],
    schedule: {
      Mon: '07:30 - 23:00',
      Tue: '07:30 - 23:00',
      Wed: '07:30 - 23:00',
      Thu: '07:30 - 23:00',
      Fri: '07:30 - 23:00',
      Sat: '07:30 - 23:00',
      Sun: '07:30 - 23:00',
    },
    contacts: ['+380 95 654 76 87', '+380 95 654 76 88'],
    coordinates: { lat: 50.5111, lng: 30.4987 },
  },
  {
    id: 2,
    adress: 'Київ, проспект Перемоги, 24',
    images: [
      { src: restarauntInterior, alt: "Фото інтер'єру" },
      { src: restarauntInterior, alt: "Фото інтер'єру" },
      { src: restarauntInterior, alt: "Фото інтер'єру" },
    ],
    schedule: {
      Mon: '08:00 - 22:00',
      Tue: '08:00 - 22:00',
      Wed: '08:00 - 22:00',
      Thu: '08:00 - 22:00',
      Fri: '08:00 - 22:00',
      Sat: '08:00 - 22:00',
      Sun: '08:00 - 22:00',
    },
    contacts: ['+380 95 654 76 87'],
    coordinates: { lat: 50.4547, lng: 30.5036 },
  },
  {
    id: 3,
    adress: 'Київ, вулиця Басейна, 1/2',
    images: [
      { src: restarauntInterior, alt: "Фото інтер'єру" },
      { src: restarauntInterior, alt: "Фото інтер'єру" },
      { src: restarauntInterior, alt: "Фото інтер'єру" },
    ],
    schedule: {
      Mon: '09:00 - 22:00',
      Tue: '09:00 - 22:00',
      Wed: '09:00 - 22:00',
      Thu: '09:00 - 22:00',
      Fri: '09:00 - 23:00',
      Sat: '09:00 - 23:00',
      Sun: '09:00 - 22:00',
    },
    contacts: ['+380 95 654 76 87', '+380 95 654 76 88', '+380 95 654 76 89'],
    coordinates: { lat: 50.4397, lng: 30.5222 },
  },
  {
    id: 4,
    adress: 'Київ, вулиця Сагайдачного, 25',
    images: [
      { src: restarauntInterior, alt: "Фото інтер'єру" },
      { src: restarauntInterior, alt: "Фото інтер'єру" },
      { src: restarauntInterior, alt: "Фото інтер'єру" },
    ],
    schedule: {
      Mon: '07:30 - 23:00',
      Tue: '07:30 - 23:00',
      Wed: '07:30 - 23:00',
      Thu: '07:30 - 23:00',
      Fri: '07:30 - 23:00',
      Sat: '07:30 - 23:00',
      Sun: '07:30 - 23:00',
    },
    contacts: ['+380 95 654 76 89'],
    coordinates: { lat: 50.4628, lng: 30.5167 },
  },
  {
    id: 5,
    adress: 'Київ, вулиця Хрещатик, 15',
    images: [
      { src: restarauntInterior, alt: "Фото інтер'єру" },
      { src: restarauntInterior, alt: "Фото інтер'єру" },
      { src: restarauntInterior, alt: "Фото інтер'єру" },
    ],
    schedule: {
      Mon: '10:00 - 22:00',
      Tue: '10:00 - 22:00',
      Wed: '10:00 - 22:00',
      Thu: '10:00 - 22:00',
      Fri: '10:00 - 23:00',
      Sat: '10:00 - 23:00',
      Sun: '10:00 - 22:00',
    },
    contacts: ['+380 95 654 76 87', '+380 95 654 76 88'],
    coordinates: { lat: 50.4482, lng: 30.5235 },
  },
];

const Locations = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false); // is need?
  const [selectedLocation, setSelectedLocation] = useState(null);

  const defaultMapUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2622435.331043109!2d27.158477299999997!3d48.379433399999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d1b1b2b2b2b2b2%3A0x2b2b2b2b2b2b2b2!2sUkraine!5e0!3m2!1suk!2sua!4v1694018234567!5m2!1suk!2sua';

  const filteredLocations = locations.filter(
    (loc) =>
      loc.id.toString().includes(searchTerm) ||
      loc.adress.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="locations__container">
      <section className="locations__inner-container">
        <div className="locations__input-block">
          <input
            type="text"
            className="locations__input"
            placeholder="Введіть заклад"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            //onBlur={() => (!searchTerm ? setIsFocused(false) : null)} // isWhiteSpace //
          />
          <span
            className="locations__clear-input"
            onClick={() => {
              setSearchTerm('');
              setSelectedLocation(null);
            }}
          >
            x
          </span>
          <button className="locations__search-button">Search</button>
          {isFocused && (
            <div className="locations__dropdown-container">
              <ul className="locations__dropdown-list">
                {filteredLocations.map((loc) => (
                  <li
                    key={loc.id}
                    className="locations__item"
                    style={{ display: 'flex' }}
                    onClick={() => {
                      setSelectedLocation(loc);
                      setSearchTerm(`${loc.adress}. Ситень №${loc.id}`);
                    }}
                  >
                    {/* style */}
                    <div className="locations__image">
                      <FaMapMarkerAlt className="locations__image-icon" />
                    </div>
                    <p className="locations__item-adress paragraph">
                      {loc.adress} <br />{' '}
                      <span className="locations__item-adress-name">
                        Ситень №{loc.id}
                      </span>
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <iframe
          src={
            selectedLocation
              ? ` https://www.google.com/maps?q=${selectedLocation.coordinates.lat},${selectedLocation.coordinates.lng}&z=15&output=embed&hl=uk`
              : defaultMapUrl
          }
          title="Google Map"
          frameborder="0"
          width="600px"
          height="400px"
          className="locations__map"
          style={{ width: '55%' }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        {selectedLocation && (
          <RestaurauntInfo
            className="locations__restaurant-info"
            location={selectedLocation}
          />
        )}
      </section>
    </div>
  );
};

export default Locations;
