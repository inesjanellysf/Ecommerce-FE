import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { useDevice } from "../hooks/useDevice";
import AppBarComponent from "../layout/navBar/AppBar.jsx";
import SlideSection from "../layout/slide/SlideSection.jsx";
import Destacados from "../layout/destacados/Destacados.jsx";
import Populares from "../layout/populares/Populares.jsx";
import MasVendido from "../layout/masvendido/MasVendido.jsx";
import { Beneficios } from "../layout/beneficios/Beneficios.jsx";
import { Footer } from "../layout/Footer.jsx";
import { fetchJson, unwrapApiData } from "../services/api.js";

export function Landing() {
  const { isMobile } = useDevice();
  const location = useLocation();
  const [homeData, setHomeData] = useState(null);
  const hideCarouselRoutes = ["/", "/landing", "/libros"];

  const showCarousel = hideCarouselRoutes.includes(location.pathname);

  useEffect(() => {
    fetchJson("/MockApi/layout/home.sections.json")
      .then((response) => setHomeData(unwrapApiData(response)))
      .catch((error) => console.error("Home sections error:", error));
  }, []);

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
              <SlideSection hero={homeData?.hero} />
              <Destacados categories={homeData?.featuredCategories} />
              <Populares products={homeData?.popularProducts} />
              <MasVendido items={homeData?.bestSellers} />
              <Beneficios />
            </>
          )}
          <Outlet />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
