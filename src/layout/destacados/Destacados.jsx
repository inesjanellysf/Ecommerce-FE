import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard";

const FEATURED_CATEGORIES = [
  {
    id: "bakery-biscuits",
    title: "Aperitivo",
    imageUrl: "/img/categorias-destacadas/category-bakery-biscuits.webp",
    route: "/categoria/category-bakery-biscuits",
  },
  {
    id: "bakery-biscuits-2",
    title: "Aperitivo",
    imageUrl: "/img/categorias-destacadas/category-bakery-biscuits.webp",
    route: "/categoria/category-bakery-biscuits",
  },
  {
    id: "bakery-biscuits-3",
    title: "Aperitivo",
    imageUrl: "/img/categorias-destacadas/category-bakery-biscuits.webp",
    route: "/categoria/category-bakery-biscuits",
  },
  {
    id: "bakery-biscuits-4",
    title: "Aperitivo",
    imageUrl: "/img/categorias-destacadas/category-bakery-biscuits.webp",
    route: "/categoria/category-bakery-biscuits",
  },
  {
    id: "bakery-biscuits-5",
    title: "Aperitivo",
    imageUrl: "/img/categorias-destacadas/category-bakery-biscuits.webp",
    route: "/categoria/category-bakery-biscuits",
  },
  {
    id: "bakery-biscuits-6",
    title: "Aperitivo",
    imageUrl: "/img/categorias-destacadas/category-bakery-biscuits.webp",
    route: "/categoria/category-bakery-biscuits",
  },
];

export default function Destacados() {
  const navigate = useNavigate();

  return (
    <Box>
      <Typography variant="h6" fontWeight={700} mb={2}>
        Categorias destacadas
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
        {FEATURED_CATEGORIES.map((category) => (
          <ProductCard
            key={category.id}
            isCompact
            showPrice={false}
            showRating={false}
            showActions={false}
            highlightTitleOnHover={false}
            title={category.title}
            imageUrl={category.imageUrl}
            onClick={() => navigate(category.route)}
          />
        ))}
      </Box>
    </Box>
  );
}
