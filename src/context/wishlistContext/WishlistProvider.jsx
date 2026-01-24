import { createContext, useState, useContext } from 'react';
import WishlistContext from './WishlistContext';


export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) => setWishlistItems((prev) => [...prev, item]);
  const removeFromWishlist = (itemId) => setWishlistItems((prev) => prev.filter((item) => item.id !== itemId));
  const clearWishlist = () => setWishlistItems([]);

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

