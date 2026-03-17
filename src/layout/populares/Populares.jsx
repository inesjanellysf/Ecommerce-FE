import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { ProductCard } from "../../components/ProductCard";

const FEATURED_PRODUCTS = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  title: "Queso Mozzarella",
  imageUrl: "/img/categorias-destacadas/category-bakery-biscuits.webp",
  category: "Lacteos",
  rating: 4.5,
  reviews: 120,
  currentPrice: 3.99,
  oldPrice: 4.5,
  badges: [
    { text: "Nuevo", color: "success" },
    { text: "-15%", color: "error" },
  ],
}));

export default function Populares({ products = FEATURED_PRODUCTS }) {
  const safeProducts = Array.isArray(products) ? products : FEATURED_PRODUCTS;

  return (
    <Box pt={3}>
      <Typography variant="h6" fontWeight={700} mb={2}>
        Productos populares
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(3, 1fr)",
            md: "repeat(5, 1fr)",
          },
          gap: 2,
        }}
      >
        {safeProducts.map((item) => (
          <ProductCard
            key={`popular-${item.id}`}
            title={item.title}
            imageUrl={item.imageUrl}
            category={item.category}
            rating={item.rating}
            reviews={item.reviews}
            currentPrice={item.currentPrice}
            oldPrice={item.oldPrice}
            badges={item.badges}
            onAdd={() => console.log("Agregar al carrito")}
            onView={() => console.log("Ver producto")}
            onFavorite={() => console.log("Favorito")}
            onCompare={() => console.log("Comparar")}
          />
        ))}
      </Box>
    </Box>
  );
}

Populares.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      category: PropTypes.string,
      rating: PropTypes.number,
      reviews: PropTypes.number,
      currentPrice: PropTypes.number,
      oldPrice: PropTypes.number,
      badges: PropTypes.array,
    }),
  ),
};
