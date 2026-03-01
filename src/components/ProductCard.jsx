import PropTypes from "prop-types";
import {
    Card,
    CardContent,
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
    isCompact = false,
    highlightTitleOnHover = true,
    addLabel = "Add to cart",
    onClick,
    onAdd,
    onView,
    onFavorite,
    onCompare
}) {
    const hasQuickActions = Boolean(onView || onFavorite || onCompare);
    const isCompactCard = isCompact || (!showPrice && !showRating);
    const isClickable = Boolean(onClick);

    const handleCardKeyDown = (event) => {
        if (!isClickable) return;
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            onClick(event);
        }
    };

    const handleActionClick = (callback) => (event) => {
        event.stopPropagation();
        callback?.(event);
    };

    return (
        <Card
            variant="outlined"
            onClick={onClick}
            onKeyDown={handleCardKeyDown}
            role={isClickable ? "button" : undefined}
            tabIndex={isClickable ? 0 : undefined}
            sx={{
                height: "100%",
                position: "relative",
                borderRadius: 2,
                borderColor: "#d6dbe1",
                backgroundColor: "#ffffff",
                overflow: "hidden",
                transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                cursor: onClick ? "pointer" : "default",
                "&:hover": {
                    borderColor: "#22c55e",
                    boxShadow: "0 14px 28px rgba(15, 23, 42, 0.12)",
                    transform: "translateY(-4px) scale(1.01)"
                },
                "&:hover .product-card-image": {
                    transform: "scale(1.08)"
                },
                "&:hover .product-card-actions": {
                    opacity: 1,
                    transform: "translate(-50%, 0)",
                    pointerEvents: "auto"
                },
                ...(highlightTitleOnHover && {
                    "&:hover .product-card-title": {
                        color: "#16a34a"
                    }
                }),
                "&:focus-within .product-card-actions": {
                    opacity: 1,
                    transform: "translate(-50%, 0)",
                    pointerEvents: "auto"
                }
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
                            key={`${badge.text}-${i}`}
                            size="small"
                            label={badge.text}
                            color={badge.color}
                        />
                    ))}
                </Box>
            )}

            {/* Imagen */}
            <Box
                justifyItems={"center"}
                sx={{ position: "relative", pt: isCompactCard ? 3 : 4 }}
            >
                {/* Imagen */}
                <Box
                    sx={{
                        height: isCompactCard ? 140 : 210,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mb: isCompactCard ? 1.25 : 2
                    }}
                >
                    <img
                        className="product-card-image"
                        src={imageUrl}
                        alt={title}
                        loading="lazy"
                        decoding="async"
                        style={{
                            maxHeight: isCompactCard ? 90 : 150,
                            maxWidth: "100%",
                            objectFit: "contain",
                            transition: "transform 0.3s ease"
                        }}
                    />
                </Box>

                {showActions && hasQuickActions && (
                    <Box
                        className="product-card-actions"
                        sx={{
                            position: "absolute",
                            bottom: 8,
                            left: "50%",
                            transform: "translate(-50%, 8px)",
                            display: "flex",
                            gap: 1,
                            bgcolor: "background.paper",
                            borderRadius: 2,
                            p: 0.5,
                            boxShadow: 2,
                            opacity: 0,
                            pointerEvents: "none",
                            transition: "opacity 0.2s ease, transform 0.2s ease"
                        }}
                    >
                        {onView && (
                            <IconButton size="small" onClick={handleActionClick(onView)} aria-label="Quick view">
                                <VisibilityIcon fontSize="small" />
                            </IconButton>
                        )}
                        {onFavorite && (
                            <IconButton size="small" onClick={handleActionClick(onFavorite)} aria-label="Add to favorites">
                                <FavoriteBorderIcon fontSize="small" />
                            </IconButton>
                        )}
                        {onCompare && (
                            <IconButton size="small" onClick={handleActionClick(onCompare)} aria-label="Compare product">
                                <CompareArrowsIcon fontSize="small" />
                            </IconButton>
                        )}
                    </Box>
                )}
            </Box>

            {/* Contenido */}
            <CardContent sx={{ px: 2.25, pb: isCompactCard ? 2 : 1, pt: isCompactCard ? 0.75 : 2 }}>
                {category && (
                    <Typography variant="caption" color="#64748b" sx={{ letterSpacing: 0.2 }}>
                        {category}
                    </Typography>
                )}

                <Typography
                    className="product-card-title"
                    textAlign={isCompactCard ? "center" : "left"}
                    variant="subtitle1"
                    fontWeight={700}
                    sx={{
                        color: "#0f2a4a",
                        transition: "color 0.2s ease",
                        fontSize: isCompactCard ? "0.82rem" : "1rem"
                    }}
                >
                    {title}
                </Typography>

                {showRating && rating !== undefined && (
                    <Box sx={{ display: "flex", alignItems: "center", gap: 0.8, mt: 0.5 }}>
                        <Rating size="small" value={rating} readOnly sx={{ color: "#fbbf24" }} />
                        <Typography variant="caption" sx={{ color: "#0f2a4a", fontWeight: 600 }}>
                            ({reviews || 0})
                        </Typography>
                    </Box>
                )}
            </CardContent>

            {/* Precio + botón */}
            {showPrice && currentPrice !== undefined && (
                <CardActions
                    sx={{
                        px: 2.25,
                        pb: 3,
                        pt: 0
                    }}
                >
                    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 0.6 }}>
                        <Typography fontWeight={600} sx={{ color: "#0f2a4a", fontSize: 16, lineHeight: 1.1, m: 0 }}>
                            ${currentPrice}
                        </Typography>
                        {oldPrice && (
                            <Typography
                                variant="caption"
                                sx={{ color: "#94a3b8", textDecoration: "line-through", m: 0 }}
                            >
                                ${oldPrice}
                            </Typography>
                        )}

                        {onAdd && (
                            <Button
                                variant="contained"
                                size="small"
                                onClick={handleActionClick(onAdd)}
                                sx={{
                                    mt: 0,
                                    ml: 0,
                                    alignSelf: "flex-start",
                                    borderRadius: 2.5,
                                    px: 2,
                                    py: 0.7,
                                    textTransform: "none",
                                    fontWeight: 700,
                                    fontSize: "0.9rem",
                                    backgroundColor: "#16a34a",
                                    boxShadow: "none",
                                    "&:hover": {
                                        backgroundColor: "#15803d",
                                        boxShadow: "none"
                                    }
                                }}
                            >
                                {addLabel}
                            </Button>
                        )}
                    </Box>
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
            text: PropTypes.string.isRequired,
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
    isCompact: PropTypes.bool,
    highlightTitleOnHover: PropTypes.bool,
    addLabel: PropTypes.string,
    onClick: PropTypes.func,
    onAdd: PropTypes.func,
    onView: PropTypes.func,
    onFavorite: PropTypes.func,
    onCompare: PropTypes.func
};
