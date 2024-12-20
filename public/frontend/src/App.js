import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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

const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: 'menu', Component: Menu },
      { path: 'menu/:itemId', Component: MenuItem },
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
