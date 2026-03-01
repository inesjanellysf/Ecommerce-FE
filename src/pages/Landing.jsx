import { Outlet, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { useDevice } from "../hooks/useDevice";
import AppBarComponent from "../layout/navBar/AppBar.jsx";
import SlideSection from "../layout/slide/SlideSection.jsx";
import Destacados from "../layout/destacados/Destacados.jsx";
import Populares from "../layout/populares/Populares.jsx";
import MasVendido from "../layout/masvendido/MasVendido.jsx";

export function Landing() {
  const { isMobile } = useDevice();
  const location = useLocation();
  const hideCarouselRoutes = ["/", "/landing", "/libros"];

  const showCarousel = hideCarouselRoutes.includes(location.pathname);

  return (
    <Box>
      <AppBarComponent />
      <Box component="main" sx={{ pt: !isMobile ? 3 : 11, pb: 3 }}>
        {!isMobile && <Toolbar />}
        <Container
          maxWidth="xl"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {showCarousel && (
            <>
              <SlideSection />
              <Destacados /> 
              <Populares />
              <MasVendido />
            </>
          )}
          <Outlet />
        </Container>
      </Box>
    </Box>
  );
}
