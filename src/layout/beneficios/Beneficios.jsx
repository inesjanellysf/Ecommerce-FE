import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CardGiftcardOutlinedIcon from "@mui/icons-material/CardGiftcardOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import AutorenewOutlinedIcon from "@mui/icons-material/AutorenewOutlined";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const benefits = [
  {
    title: "Compras en 10 minutos ahora",
    description:
      "Reciba su pedido en la puerta de su casa lo antes posible en las tiendas MultitiendaExpress más cercanas.",
    icon: AccessTimeOutlinedIcon,
  },
  {
    title: "Mejores precios y ofertas",
    description:
      "Precios más bajos que en tu supermercado habitual, y además, fantásticas ofertas de reembolso. Consigue los mejores precios y ofertas.",
    icon: CardGiftcardOutlinedIcon,
  },
  {
    title: "Gran variedad de productos",
    description:
      "Elige entre más de 5000 productos de las categorías de alimentación, cuidado personal, hogar, panadería, verduras, carnes y otras.",
    icon: Inventory2OutlinedIcon,
  },
  {
    title: "Devoluciones sencillas",
    description:
      "¿No estás satisfecho con el producto? Devuélvelo en tu domicilio y recibe tu reembolso en cuestión de horas. Sin  preguntas.",
    icon: AutorenewOutlinedIcon,
  },
];

export function Beneficios() {
  return (
    <Box sx={{ py: { xs: 4, md: 6.5 } }}>
      <Grid container spacing={{ xs: 4, md: 6 }}>
        {benefits.map((benefit) => {
          const Icon = benefit.icon;

          return (
            <Grid key={benefit.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Stack spacing={2.2} sx={{ alignItems: "flex-start" }}>
                <Box
                  sx={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#0aad0a",
                    minHeight: 40,
                  }}
                >
                  <Icon
                    sx={{
                      fontSize: 50,
                      strokeWidth: 1.4,
                    }}
                  />
                </Box>

                <Typography
                  sx={{
                    color: "#001e2b",
                    fontSize: { xs: "1.5rem", md: "1.1rem" },
                    fontWeight: 700,
                    lineHeight: 1.2,
                  }}
                >
                  {benefit.title}
                </Typography>

                <Typography
                  sx={{
                    color: "#5c6c75",
                    fontSize: "14px",
                    lineHeight: 1.7,
                    maxWidth: 280,
                  }}
                >
                  {benefit.description}
                </Typography>
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}
