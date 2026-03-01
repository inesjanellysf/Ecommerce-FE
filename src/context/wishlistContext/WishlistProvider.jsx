import { useState } from 'react';
import WishlistContext from './WishlistContext';
import PropTypes from "prop-types";


export function WishlistProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([]);

  const addToWishlist = (item) =>
    setWishlistItems((prev) =>
      prev.some((wishlistItem) => wishlistItem.id === item.id)
        ? prev
        : [...prev, item]
    );
  const removeFromWishlist = (itemId) => setWishlistItems((prev) => prev.filter((item) => item.id !== itemId));
  const clearWishlist = () => setWishlistItems([]);

  return (
    <WishlistContext.Provider value={{ wishlistItems, addToWishlist, removeFromWishlist, clearWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}

WishlistProvider.propTypes = {
  children: PropTypes.node.isRequired
};

