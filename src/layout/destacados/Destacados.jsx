import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard";

export default function Destacados() {
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h6" fontWeight={700} mb={2}>
        Categorias Destacadas
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
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <ProductCard
            key={index}
            isCompact={true}
            showPrice={false}
            showRating={false}
            showActions={false}
            highlightTitleOnHover={false}
            title="Aperitivo"
            imageUrl="/img/categorias-destacadas/category-bakery-biscuits.webp"
            onClick={() => navigate("/categoria/category-bakery-biscuits")}
          />
        ))}
      </Box>
    </Box>
  );
}
