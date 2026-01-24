import { useEffect, useState } from 'react';
import { CardBook } from "../components/CardBook.jsx";
import fetchData from "../services/api.js";
import { useSearch } from '../hooks/useSearch.jsx';
import { useCart } from '../hooks/useCart.jsx';
import { useWishlist } from '../hooks/useWishlist.jsx';
import { Input } from "../components/Input.jsx";

export function Libros() {
    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const { addToCart } = useCart();
    const { addToWishlist } = useWishlist();
    const { searchQuery, setSearchQuery } = useSearch();

    useEffect(() => {
        const filterBooks = () => {
            const filtered = books.filter((book) =>
                book.title.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredBooks(filtered);
        };

        filterBooks();
    }, [books, searchQuery]);

    useEffect(() => {
        fetchData(
            '/Data/LibrosData.json',
            (data) => setBooks(data),
            (error) => console.error("Error al cargar los datos:", error)
        );
    }, []);

    // Handlers
    const handleAddToCart = (book) => addToCart(book);
    const handleAddToWishlist = (book) => addToWishlist(book);
    const handleSearchChange = (e) => setSearchQuery(e.target.value);

    return (
        <>
            <div className="container text-center mt-5 mb-5">
                <div className="row justify-content-md-center">
                    <div className="col-12 col-lg-9">
                        <form className="w-100">
                            <Input
                                value={searchQuery}
                                handleChange={handleSearchChange}
                                src='/img/icon/search.svg'
                                placeholder="Buscar productos"
                                type="search"
                                alt="Relatos de Papel"
                            />
                        </form>
                    </div>
                </div>
            </div>
            <div className="g-4 row row-cols-lg-5 row-cols-md-3 row-cols-2">
                {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                        <div className="col" key={book.id}>
                            <CardBook
                                {...book}
                                onAdd={() => handleAddToCart(book)}
                                onView={() => console.log(`Vista previa: ${book.title}`)}
                                onFavorite={() => handleAddToWishlist(book)}
                                onCompare={() => console.log(`Añadido a comparar: ${book.title}`)}
                            />
                        </div>
                    ))
                ) : (
                    <p>No se encontraron libros que coincidan con la búsqueda.</p>
                )}
            </div>
        </>
    );
}
