import { useContext } from 'react';
import CartContext from '../context/cartContext/CartContext';

export function useCart() {
    return useContext(CartContext);
}