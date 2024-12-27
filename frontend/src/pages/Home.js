import { useState } from 'react';
import about from '../assets/about.jpg';
import login from '../assets/login.jpg';
import hungry from '../assets/hungry.jpg';
import locations from '../assets/locations.jpg';

import InfoCard from '../components/InfoCard';
import Carousel from '../components/Carousel';
import MenuItemC from '../components/MenuItemC';
import '../styles/Home.css';

import burger from '../assets/temp/burger.png';
import chickenRoll from '../assets/temp/chicken-roll.png';
import nuggets from '../assets/temp/nuggets.png';
import potato from '../assets/temp/potato.png';

const cards = [
  {
    title: 'Хто ми такі?',
    description:
      'Ситень — амбітний новачок у фастфуді, що поєднує швидкість та якість. Ми прагнемо зробити перекуси не тільки зручними, але й смачними. Кожен наш бургер, сендвіч чи салат — це баланс смаку для швидкого життя.',
    src: about,
    alt: 'Чоловік їсть',
    path: '/about',
  },
  {
    title: 'Стань своїм',
    description:
      'Зареєструйтесь і отримуйте знижки, персональні пропозиції та бали за кожне замовлення. Зберігайте дані для швидкого оформлення і користуйтесь ексклюзивними акціями тільки для авторизованих відвідувачів!',
    src: login,
    alt: 'Ілюстрація логін-форми',
    path: '/authorization',
  },
  {
    title: 'Голодний?',
    description:
      'Зазирни в наше меню та обери те, що задовольнить твій апетит. Від класики до новинок – тут завжди знайдеться щось смачне для тебе! Натискай і твоє замовлення почне готуватися  прямо зараз.',
    src: hungry,
    alt: 'Ілюстрація столових приладів',
    path: '/menu',
  },
  {
    title: 'Ми поруч',
    description:
      'Шукаєш швидку страву поблизу? Дізнайся, де знаходиться наш найближчий заклад і заходь на перекус! Натискай, щоб знайти нас на карті.',
    src: locations,
    alt: 'Ілюстрація карти',
    path: '/locations',
  },
];

const Home = () => {
  // , setMenuItems
  const [menuItems] = useState([
    {
      id: 1,
      title: 'Шаурма',
      price: 120,
      src: chickenRoll,
      alt: 'Шаурма',
      categoryId: [1, 2],
    },
    {
      id: 2,
      title: 'Бургер',
      price: 70,
      src: burger,
      alt: 'Бургер',
      categoryId: [1, 2],
    },
    {
      id: 3,
      title: 'Нагетси',
      price: 90,
      src: nuggets,
      alt: 'Нагетси',
      categoryId: [1, 3],
    },
    {
      id: 4,
      title: 'Картопля',
      price: 60,
      src: potato,
      alt: 'Картопля',
      categoryId: [1, 4],
    },
  ]);

  return (
    <div className="home__container">
      <InfoCard card={cards[0]} size="big" isReversed={false} />
      <InfoCard card={cards[1]} size="small" isReversed={false} />
      <InfoCard card={cards[2]} size="small" isReversed={false} />

      <section className="home__popular">
        <h2 className="home__popular-heading heading">
          <span className="home_popular-heading-entity">&#9825;</span> В топі
          серед клієнтів за минулий тиждень
        </h2>

        <Carousel className="home__popular-carousel">
          {menuItems.map((_item) => (
            <MenuItemC
              key={_item.id}
              className="home__popular-item"
              item={_item}
              isPrimary={true}
            />
          ))}
        </Carousel>
      </section>

      <InfoCard card={cards[3]} size="big" isReversed={true} />
    </div>
  );
};

export default Home;
