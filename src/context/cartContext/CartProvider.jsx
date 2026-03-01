import {  useState } from 'react';
import CartContext from './CartContext';
import PropTypes from "prop-types";

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex === -1) {
        return [...prevItems, { ...item, quantity: 1 }];
      }

      return prevItems.map((cartItem, index) =>
        index === itemIndex
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    });
  };

  const removeQuantityToBook = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: Math.max(1, cartItem.quantity - 1) }
          : cartItem
      )
    );
  }
  const removeFromCart = (itemId) => setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, removeQuantityToBook, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired
};

