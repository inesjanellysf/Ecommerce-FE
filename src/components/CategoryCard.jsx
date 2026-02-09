import PropTypes from "prop-types";
import { Card, Box, Typography } from "@mui/material";

export function CategoryCard({ title, imageUrl, active = false, onClick }) {
    return (
        <Card
            onClick={onClick}
            variant="outlined"
            sx={{
                height: "100%",
                cursor: "pointer",
                borderColor: active ? "#22c55e" : "#e0e0e0",
                transition: "all 0.25s ease",
                "&:hover": {
                    borderColor: "#22c55e",
                    boxShadow: 6
                },
            }}
        >
            <Box
                sx={{
                    height: 200,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    px: 2,
                    textAlign: "center",
                }}
            >
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

                {/* Título */}
                <Typography
                    variant="subtitle2"
                    fontWeight={600}
                    sx={{
                        height: 40, // 🔥 CLAVE para que todos midan igual
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                    }}
                >
                    {title}
                </Typography>
            </Box>
        </Card>
    );
}

CategoryCard.propTypes = {
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    active: PropTypes.bool,
    onClick: PropTypes.func,
};
