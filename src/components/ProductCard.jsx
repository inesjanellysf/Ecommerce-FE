import PropTypes from "prop-types";
import {
    Card,
    CardContent,
    CardMedia,
    CardActions,
    Typography,
    Box,
    IconButton,
    Button,
    Rating,
    Chip
} from "@mui/material";

import VisibilityIcon from "@mui/icons-material/Visibility";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

export function ProductCard({
    title,
    imageUrl,
    category,
    rating,
    reviews,
    currentPrice,
    oldPrice,
    badges = [],
    showPrice = true,
    showRating = true,
    showActions = true,
    addLabel = "Add to cart",
    onAdd,
    onView,
    onFavorite,
    onCompare
}) {
    return (
        <Card
            variant="outlined"
            sx={{
                height: "100%",
                position: "relative",
                transition: "0.3s",
                 "&:hover": {
                    borderColor: "#22c55e",
                    boxShadow: 6
                },
            }}
        >
            {/* Badges */}
            {badges.length > 0 && (
                <Box
                    sx={{
                        position: "absolute",
                        top: 8,
                        left: 8,
                        display: "flex",
                        flexDirection: "column",
                        gap: 0.5,
                        zIndex: 2
                    }}
                >
                    {badges.map((badge, i) => (
                        <Chip
                            key={i}
                            size="small"
                            label={badge.text}
                            color={badge.color}
                        />
                    ))}
                </Box>
            )}

            {/* Imagen */}
            <Box
                justifyItems={"center"} sx={{ position: "relative" }}>
                {/* Imagen */}
                <Box
                    sx={{
                        height: 110,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: 1,
                    }}
                >
                    <img
                        src={imageUrl}
                        alt={title}
                        style={{
                            maxHeight: 90,
                            maxWidth: "100%",
                            objectFit: "contain",
                        }}
                    />
                </Box>

                {showActions && (
                    <Box
                        sx={{
                            position: "absolute",
                            bottom: 8,
                            left: "50%",
                            transform: "translateX(-50%)",
                            display: "flex",
                            gap: 1,
                            bgcolor: "background.paper",
                            borderRadius: 2,
                            p: 0.5,
                            boxShadow: 2
                        }}
                    >
                        {onView && (
                            <IconButton size="small" onClick={onView}>
                                <VisibilityIcon fontSize="small" />
                            </IconButton>
                        )}
                        {onFavorite && (
                            <IconButton size="small" onClick={onFavorite}>
                                <FavoriteBorderIcon fontSize="small" />
                            </IconButton>
                        )}
                        {onCompare && (
                            <IconButton size="small" onClick={onCompare}>
                                <CompareArrowsIcon fontSize="small" />
                            </IconButton>
                        )}
                    </Box>
                )}
            </Box>

            {/* Contenido */}
            <CardContent>
                {category && (
                    <Typography variant="caption" color="text.secondary">
                        {category}
                    </Typography>
                )}

                <Typography textAlign={"center"} variant="subtitle1" fontWeight={600}>
                    {title}
                </Typography>

                {showRating && rating !== undefined && (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 0.5 }}>
                        <Rating size="small" value={rating} readOnly />
                        <Typography variant="caption" color="text.secondary">
                            ({reviews || 0})
                        </Typography>
                    </Box>
                )}
            </CardContent>

            {/* Precio + botón */}
            {showPrice && currentPrice && (
                <CardActions
                    sx={{
                        px: 2,
                        pb: 2,
                        display: "flex",
                        justifyContent: "space-between"
                    }}
                >
                    <Box>
                        <Typography fontWeight={600}>
                            ${currentPrice}
                        </Typography>
                        {oldPrice && (
                            <Typography
                                variant="caption"
                                color="text.secondary"
                                sx={{ textDecoration: "line-through" }}
                            >
                                ${oldPrice}
                            </Typography>
                        )}
                    </Box>

                    {onAdd && (
                        <Button
                            variant="contained"
                            size="small"
                            onClick={onAdd}
                        >
                            + Add
                        </Button>
                    )}
                </CardActions>
            )}
        </Card>
    );
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    category: PropTypes.string,
    rating: PropTypes.number,
    reviews: PropTypes.number,
    currentPrice: PropTypes.number,
    oldPrice: PropTypes.number,
    badges: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
            color: PropTypes.oneOf([
                "default",
                "primary",
                "secondary",
                "success",
                "error",
                "warning",
                "info"
            ])
        })
    ),
    showPrice: PropTypes.bool,
    showRating: PropTypes.bool,
    showActions: PropTypes.bool,
    addLabel: PropTypes.string,
    onAdd: PropTypes.func,
    onView: PropTypes.func,
    onFavorite: PropTypes.func,
    onCompare: PropTypes.func
};
