import { createContext, useState, useContext } from 'react';
import SearchContext from './SearchContext';

// Proveedor del contexto de búsqueda
export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

