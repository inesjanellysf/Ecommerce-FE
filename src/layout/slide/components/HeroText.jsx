import Box from "@mui/material/Box";

export function HeroText() {
  return (
    <>
      <Box
        sx={{
          display: "inline-block",
          backgroundColor: "#facc15",
          color: "#000",
          px: 1.5,
          py: 0.5,
          borderRadius: 1,
          fontSize: 12,
          fontWeight: 600,
          mb: 2,
        }}
      >
        Descuento por venta de apertura 50%
      </Box>

      <Box
        component="h1"
        sx={{
          fontSize: { xs: 22, md: 44 },
          fontWeight: 800,
          lineHeight: 1.2,
          mb: 1.5,
          color: "#022c22",
        }}
      >
        Tienda de alimentos frescos
      </Box>

      <Box
        sx={{
          color: "#4b5563",
          mb: 2,
          fontSize: { xs: 14, md: 16 },
        }}
      >
        Introdujimos un nuevo modelo para compras de comestibles en línea y
        entrega conveniente a domicilio.
      </Box>

      <Box
        component="button"
        sx={{
          backgroundColor: "#022c22",
          color: "#fff",
          border: "none",
          px: 3,
          py: 1.5,
          borderRadius: 2,
          fontSize: 14,
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Comprar Ahora →
      </Box>
    </>
  );
}
