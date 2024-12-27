import { Outlet } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import ScrollToTop from '../components/ScrollToTop';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/index.css';
import '../styles/Layout.css';

const Layout = () => {
  return (
    <CartProvider>
      <ScrollToTop />
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </CartProvider>
  );
};

export default Layout;
