import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    if (cart.findIndex((_item) => _item.id === item.id) !== -1) {
      setCart((prevCart) =>
        prevCart.map((_item) =>
          _item.id === item.id ? { ..._item, count: _item.count + 1 } : _item
        )
      );
      cart.forEach((item) => console.log('1' + item));
    } else {
      setCart((prevCart) => [...prevCart, { ...item, count: 1 }]);
    }
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const incrementCount = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const decrementCount = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId
          ? {
              ...item,
              count: item.count > 1 ? item.count - 1 : removeFromCart(itemId),
            }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        incrementCount,
        decrementCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => {
  return useContext(CartContext);
};

export { CartProvider, useCart };
