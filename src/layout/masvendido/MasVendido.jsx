import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { CategoryCard } from "../../components/CategoryCard";
import { useNavigate } from "react-router-dom";

const DEFAULT_ITEMS = Array.from({ length: 6 }, (_, index) => ({
  id: `best-${index + 1}`,
  title: "Aperitivo",
  imageUrl: "/img/categorias-destacadas/category-bakery-biscuits.webp",
  route: "/categoria/category-bakery-biscuits",
}));

export default function MasVendido({ items = DEFAULT_ITEMS }) {
  const navigate = useNavigate();
  const safeItems = Array.isArray(items) ? items : DEFAULT_ITEMS;

  return (
    <Box pt={3}>
      <Typography variant="h6" fontWeight={700} mb={2}>
        Los mas vendidos del dia
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
        {safeItems.map((item) => (
          <CategoryCard
            key={item.id}
            title={item.title}
            imageUrl={item.imageUrl}
            active={false}
            onClick={() => navigate(item.route)}
          />
        ))}
      </Box>
    </Box>
  );
}

MasVendido.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
      route: PropTypes.string.isRequired,
    }),
  ),
};
