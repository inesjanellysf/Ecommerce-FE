import {  useState } from 'react';
import CartContext from './CartContext';

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    let newCartItems = [...cartItems];
    const itemIndex = newCartItems.findIndex(cartItem => cartItem.id === item.id);
    if(itemIndex === -1) {
      item.quantity = 1;
      newCartItems = [...newCartItems, item];
    }else{
      newCartItems[itemIndex].quantity += 1 ;
    }
    setCartItems([...newCartItems]);
  };

  const removeQuantityToBook = (itemId) => {
    let newCartItems = [...cartItems];
    const itemIndex = newCartItems.findIndex(cartItem => cartItem.id === itemId);
    if(itemIndex > -1) {
      if(newCartItems[itemIndex].quantity > 1) {
        newCartItems[itemIndex].quantity -=  1;
      }
    }
    setCartItems([...newCartItems]);
  }
  const removeFromCart = (itemId) => setCartItems((prev) => prev.filter((item) => item.id !== itemId));
  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, removeQuantityToBook, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

