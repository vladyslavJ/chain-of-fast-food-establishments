import {
  createBrowserRouter,
  RouterProvider,
  // redirect,
} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import MenuItem from './pages/MenuItem';
import Locations from './pages/Locations';
import About from './pages/About';
import Hygiene from './pages/Hygiene';
import Authorization from './pages/Authorization';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

// Test data
import burger from './assets/temp/burger.png';
import chickenRoll from './assets/temp/chicken-roll.png';
import nuggets from './assets/temp/nuggets.png';

const menuData = [
  {
    id: 1,
    title: 'Шаурма',
    price: 120,
    src: chickenRoll,
    alt: 'Шаурма',
    categoryId: [1, 2],
    description: 'Соковита шаурма з куркою та овочами.',
    weight: '250 г',
    calories: 400,
    proteins: 25,
    fats: 10,
    carbohydrates: 40,
    ingredients: ['курка', 'огірок', 'помідор', 'салат', 'лаваш', 'соус'],
  },
  {
    id: 2,
    title: 'Бургер',
    price: 70,
    src: burger,
    alt: 'Бургер',
    categoryId: [1, 2],
    description: 'Апетитний бургер із соковитою котлетою та овочами.',
    weight: '200 г',
    calories: 350,
    proteins: 20,
    fats: 15,
    carbohydrates: 30,
    ingredients: ['яловичина', 'салат', 'помідор', 'огірок', 'булочка', 'соус'],
  },
  {
    id: 3,
    title: 'Нагетси',
    price: 90,
    src: nuggets,
    alt: 'Нагетси',
    categoryId: [1, 3],
    description: 'Хрусткі курячі нагетси.',
    weight: '150 г',
    calories: 300,
    proteins: 15,
    fats: 18,
    carbohydrates: 20,
    ingredients: ['куряче філе', 'панірування', 'олія', 'сіль', 'спеції'],
  },
];

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'menu', Component: Menu },
      {
        path: 'menu/:itemId',
        Component: MenuItem,
        loader: async ({ params }) => {
          const { itemId } = params;
          const data = menuData.find((item) => item.id === Number(itemId));

          // if (!data) {
          //   throw redirect('/not-found');
          // }

          return data;
        },
      },
      { path: 'locations', Component: Locations },
      { path: 'about', Component: About },
      { path: 'hygiene', Component: Hygiene },
      { path: 'authorization', Component: Authorization },
      { path: 'cart', Component: Cart },
      { path: '*', Component: NotFound },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
