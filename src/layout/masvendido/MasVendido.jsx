import { Box, Typography } from "@mui/material";
import { CategoryCard } from "../../components/CategoryCard";
import { useNavigate } from "react-router-dom";

export default function MasVendido() {
  const navigate = useNavigate();

  return (
    <Box pt={3}>
      <Typography variant="h6" fontWeight={700} mb={2}>
        Los más vendidos del día
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
          <CategoryCard
            key={index}
            title="Aperitivo"
            imageUrl="/img/categorias-destacadas/category-bakery-biscuits.webp"
            active={false}   // ✅ boolean real
            onClick={() =>
              navigate("/categoria/category-bakery-biscuits")
            }
          />
        ))}
      </Box>
    </Box>
  );
}
