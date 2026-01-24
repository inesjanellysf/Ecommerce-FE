import { useContext } from 'react';
import SearchContext from '../context/searchContext/SearchContext';


export function useSearch() {
  return useContext(SearchContext);
}