import { Box, Typography } from "@mui/material";
import { ProductCard } from "../../components/ProductCard";

const FEATURED_PRODUCTS = [1, 2, 3, 4, 5, 6];

export default function Populares() {
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
            md: "repeat(6, 1fr)",
          },
          gap: 2,
        }}
      >
        {FEATURED_PRODUCTS.map((item) => (
          <ProductCard
            key={`popular-${item}`}
            title="Queso Mozzarella"
            imageUrl="/img/categorias-destacadas/category-bakery-biscuits.webp"
            category="Lacteos"
            rating={4.5}
            reviews={120}
            currentPrice={3.99}
            oldPrice={4.5}
            badges={[
              { text: "Nuevo", color: "success" },
              { text: "-15%", color: "error" },
            ]}
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
