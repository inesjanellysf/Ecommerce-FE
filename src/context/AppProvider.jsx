import { CartProvider } from './cartContext/CartProvider';  // Importa de manera nombrada
import { WishlistProvider } from './wishlistContext/WishlistProvider';
import { SearchProvider } from './searchContext/SearchProvider';

export function AppProvider({ children }) {
    return (
        <CartProvider>
            <WishlistProvider>
                <SearchProvider>
                    {children}
                </SearchProvider>
            </WishlistProvider>
        </CartProvider>
    );
}