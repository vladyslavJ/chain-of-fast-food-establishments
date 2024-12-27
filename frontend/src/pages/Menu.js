import { useRef, useState } from 'react';
import burger from '../assets/temp/burger.png';
import chickenRoll from '../assets/temp/chicken-roll.png';
import nuggets from '../assets/temp/nuggets.png';
import potato from '../assets/temp/potato.png';
import burgerCategory from '../assets/temp/burger-category.png';
import potatoCategory from '../assets/temp/potato-category.png';

import MenuItemC from '../components/MenuItemC';
import CategoryItem from '../components/CategoryItem';
import '../styles/Menu.css';

const Menu = () => {
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
    {
      id: 5,
      title: 'Шаурма',
      price: 120,
      src: chickenRoll,
      alt: 'Шаурма',
      categoryId: [1, 2],
    },
    {
      id: 6,
      title: 'Бургер',
      price: 70,
      src: burger,
      alt: 'Бургер',
      categoryId: [1, 2],
    },
    {
      id: 7,
      title: 'Нагетси',
      price: 90,
      src: nuggets,
      alt: 'Нагетси',
      categoryId: [1, 3],
    },
    {
      id: 8,
      title: 'Картопля',
      price: 60,
      src: potato,
      alt: 'Картопля',
      categoryId: [1, 4],
    },
    {
      id: 9,
      title: 'Шаурма',
      price: 120,
      src: chickenRoll,
      alt: 'Шаурма',
      categoryId: [1, 2],
    },
    {
      id: 10,
      title: 'Бургер',
      price: 70,
      src: burger,
      alt: 'Бургер',
      categoryId: [1, 2],
    },
    {
      id: 11,
      title: 'Нагетси',
      price: 90,
      src: nuggets,
      alt: 'Нагетси',
      categoryId: [1, 3],
    },
    {
      id: 12,
      title: 'Картопля',
      price: 60,
      src: potato,
      alt: 'Картопля',
      categoryId: [1, 4],
    },
  ]);
  const [menuByCategories, setMenuByCategories] = useState(menuItems);
  //, setCategory
  const [categories] = useState([
    {
      id: 1,
      title: 'Все',
      src: burgerCategory,
    },
    {
      id: 2,
      title: 'Бургери та шаурма',
      src: burgerCategory,
    },
    {
      id: 3,
      title: 'Курка',
      src: nuggets,
    },
    {
      id: 4,
      title: 'Картопля та салати',
      src: potatoCategory,
    },
    {
      id: 5,
      title: 'Напої',
      src: burgerCategory,
    },
    {
      id: 6,
      title: 'Соуси',
      src: potatoCategory,
    },
  ]);

  const selectedCategoryId = useRef(1);

  const generateMenu = (categoryId) => {
    selectedCategoryId.current = categoryId;
    setMenuByCategories(
      menuItems.filter((menuItem) => menuItem.categoryId.includes(categoryId))
    );
  };

  return (
    <div className="menu__container">
      <h1 className="menu__heading">Наше повне меню - всі смаки тут</h1>

      <section className="menu__categories">
        {categories.map((_category) => (
          <CategoryItem
            key={_category.id}
            classN={`${
              _category.id === selectedCategoryId.current
                ? 'category-item--active '
                : ''
            }menu__category`}
            category={_category}
            onClick={generateMenu}
          />
        ))}
      </section>

      <section className="menu__menu-items">
        {menuByCategories.map((menuItem) => (
          <MenuItemC
            key={menuItem.id}
            className="menu__menu-item"
            item={menuItem}
            isPrimary={false}
          />
        ))}
      </section>
    </div>
  );
};

export default Menu;
