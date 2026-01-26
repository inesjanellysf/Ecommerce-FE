import { useEffect, useState } from "react";

import { Carousel } from "../components/Carousel.jsx";
import { Footer } from "../layout/Footer.jsx";
import { Outlet, useLocation } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { useDevice } from "../hooks/useDevice";
import AppBarComponent from "../layout/navBar/AppBar.jsx";
import { IMAGE } from "../constants/urlImage.js";
import { Image } from "../components/Image.jsx";
import SlideSection from "../layout/slide/SlideSection.jsx";
import Destacados from "../layout/destacados/Destacados.jsx";

export function Landing() {
  const [imgCarousel, setImgCarousel] = useState([]);
  const { isMobile } = useDevice();
  const location = useLocation();
  const hideCarosuelRoutes = ["/", "/landing", "/libros"];

  const showCarosuel = hideCarosuelRoutes.includes(location.pathname);

  useEffect(() => {
    fetch("/Data/CarouselData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setImgCarousel(data);
      })
      .catch((error) => {
        console.error("Error al cargar el JSON:", error);
      });
  }, []);

  return (
    <Box>
      {console.log(location.pathname)}
      <AppBarComponent />
      <Box component="main" sx={{ pt: 3, pb: 3 }}>
        {!isMobile && <Toolbar />}
        <Container
          maxWidth="xl"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {showCarosuel && (
            <>
              <SlideSection />
              <Destacados />
            </>
          )}
          {/*showCarosuel && <Image img={IMAGE.SLIDE_MUJER_COMPRANDO} style={{ borderRadius: 8}} />*/}
          <Outlet />
        </Container>

        {/*showCarosuel && <Carousel images={imgCarousel} />*/}
      </Box>
      {/*<Footer />*/}
    </Box>
  );
}
