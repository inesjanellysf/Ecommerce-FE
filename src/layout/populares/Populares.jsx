import { Box, Typography } from "@mui/material";
import { CategoryCard } from "../../components/CategoryCard";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard";

export default function Populares() {
  const navigate = useNavigate();

  return (
    <Box pt={3}>
      <Typography variant="h6" fontWeight={700} mb={2}>
        Productos populares
      </Typography>

      {/* GRID REAL QUE RELLENA TODO */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",   // móvil
            sm: "repeat(3, 1fr)",   // tablet
            md: "repeat(6, 1fr)",   // desktop
          },
          gap: 2,
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <ProductCard
            title="Queso Mozzarella"
            imageUrl="/img/categorias-destacadas/category-bakery-biscuits.webp"
            category="Lácteos"
            rating={4.5}
            reviews={120}
            currentPrice={3.99}
            oldPrice={4.50}
            badges={[
              { text: "Nuevo", color: "success" },  
              { text: "-15%", color: "error" }
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
