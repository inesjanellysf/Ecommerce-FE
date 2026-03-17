import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { ProductCard } from "../../components/ProductCard";

const DEFAULT_CATEGORIES = [];

export default function Destacados({ categories = DEFAULT_CATEGORIES }) {
  const navigate = useNavigate();
  const safeCategories = Array.isArray(categories) ? categories : DEFAULT_CATEGORIES;

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
        {safeCategories.map((category) => (
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

Destacados.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }),
  ),
};
