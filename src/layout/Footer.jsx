import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const footerColumns = [
  {
    title: "Categorias",
    links: [
      "Frutas y verduras",
      "Lacteos, pan y huevos",
      "Desayunos y comida instantanea",
      "Bebidas frias y jugos",
      "Panaderia y galletas",
      "Cafe, te y bebidas",
      "Arroz, granos y harinas",
      "Snacks y aperitivos",
      "Salsas y aderezos",
      "Cuidado personal",
    ],
  },
  {
    title: "Conocenos",
    links: [
      "Nuestra empresa",
      "Quienes somos",
      "Blog",
      "Centro de ayuda",
      "Nuestros valores",
    ],
  },
  {
    title: "Para clientes",
    links: [
      "Metodos de pago",
      "Envios",
      "Devoluciones",
      "Seguimiento de pedidos",
    ],
  },
  {
    title: "Vende con nosotros",
    links: [
      "Oportunidades para vendedores",
      "Convertirse en vendedor",
      "Ganancias",
      "Guias e ideas",
      "Nuevos comercios",
    ],
  },
  {
    title: "Programas",
    links: [
      "Tarjetas de regalo",
      "Promociones y cupones",
      "Publicidad",
      "Trabaja con nosotros",
    ],
  },
];

const paymentPartners = [
  { src: "/img/payment/visa.svg", alt: "Visa" },
  { src: "/img/payment/mastercard.svg", alt: "Mastercard" },
  { src: "/img/payment/american-express.svg", alt: "American Express" },
  { src: "/img/payment/paypal.svg", alt: "PayPal" },
];

const socialLinks = [
  { src: "/img/icon/facebook.svg", alt: "Facebook" },
  { src: "/img/icon/Instagram.svg", alt: "Instagram" },
  { src: "/img/icon/twitter.svg", alt: "Twitter" },
];

const linkSx = {
  color: "#5c6c75",
  fontSize: "14px",
  textDecoration: "none",
  transition: "color 0.2s ease",
  "&:hover": {
    color: "#0aad0a",
  },
};

export function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        mt: 6,
        bgcolor: "#f5f7f2",
        borderTop: "1px solid #dde4d7",
      }}
    >
      <Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
        <Grid container spacing={{ xs: 3, md: 4 }}>
          {footerColumns.map((column) => (
            <Grid key={column.title} size={{ xs: 12, sm: 6, md: 2.4 }}>
              <Stack spacing={1.4}>
                <Typography
                  sx={{
                    color: "#163300",
                    fontSize: "1.15rem",
                    fontWeight: 700,
                  }}
                >
                  {column.title}
                </Typography>
                {column.links.map((link) => (
                  <Link key={link} href="#" underline="none" sx={linkSx}>
                    {link}
                  </Link>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, borderColor: "#dde4d7" }} />

        <Stack
          direction="row"
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" spacing={1.5} alignItems="center" flexWrap="wrap">
            <Typography sx={{ color: "#163300", fontSize: "14px" }}>
              Socios de pago
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {paymentPartners.map((partner) => (
                <Box
                  key={partner.alt}
                  component="img"
                  src={partner.src}
                  alt={partner.alt}
                  sx={{ height: 40, width: "auto", display: "block" }}
                />
              ))}
            </Stack>
          </Stack>
        </Stack>

        <Divider sx={{ my: 4, borderColor: "#dde4d7" }} />

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", md: "center" }}
        >
          <Typography sx={{ color: "#5c6c75", fontSize: "14px" }}>
            Copyright {new Date().getFullYear()} MultitiendaExpress. Todos los
            derechos reservados.
          </Typography>

          <Stack direction="row" spacing={1.2} alignItems="center">
            <Typography sx={{ color: "#5c6c75", fontSize: "14px" }}>
              Siguenos en
            </Typography>
            {socialLinks.map((social) => (
              <IconButton
                key={social.alt}
                href="#"
                aria-label={social.alt}
                sx={{
                  width: 40,
                  height: 40,
                  border: "1px solid #a8b3aa",
                  borderRadius: 3,
                  bgcolor: "#fff",
                  "&:hover": {
                    bgcolor: "#fff",
                    borderColor: "#0aad0a",
                  },
                }}
              >
                <Box
                  component="img"
                  src={social.src}
                  alt={social.alt}
                  sx={{
                    width: 18,
                    height: 18,
                    transition: "filter 0.2s ease",
                    ".MuiIconButton-root:hover &": {
                      filter:
                        "brightness(0) saturate(100%) invert(48%) sepia(96%) saturate(766%) hue-rotate(74deg) brightness(95%) contrast(101%)",
                    },
                  }}
                />
              </IconButton>
            ))}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
