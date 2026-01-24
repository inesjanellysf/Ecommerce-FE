import { useContext } from 'react';
import WishlistContext from '../context/wishlistContext/WishlistContext';

export function useWishlist() {
    return useContext(WishlistContext);
}