import { useState } from 'react';
import SearchContext from './SearchContext';
import PropTypes from "prop-types";

// Proveedor del contexto de búsqueda
export function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
}

SearchProvider.propTypes = {
  children: PropTypes.node.isRequired
};

