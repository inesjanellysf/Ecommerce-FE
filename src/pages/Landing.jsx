import { useEffect, useState } from 'react';

import { NavBar } from "../layout/NavBar.jsx";
import { Carousel } from "../components/Carousel.jsx";
import { Footer } from "../layout/Footer.jsx";
import { Outlet, useLocation } from "react-router";
import { Input } from '../components/Input.jsx';
import  Box from '@mui/material/Box'

export function Landing() {
  const [imgCarousel, setImgCarousel] = useState([]);

  const location = useLocation();
  const hideCarosuelRoutes = ["/","/landing", "/landing/libros"];
  
  const showCarosuel = hideCarosuelRoutes.includes(location.pathname);


  useEffect(() => {
    fetch('/Data/CarouselData.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setImgCarousel(data);
      })
      .catch(error => {
        console.error('Error al cargar el JSON:', error);
      });
  }, []);

  return (
    <Box>
      <NavBar />
      {console.log(location.pathname)}
      <div className="mt-8 mb-3">
        <div className="container">
          {showCarosuel && (
            <Carousel images={imgCarousel} />
          )}

        <Outlet />
      </div>
    </div >
      <Footer />
    </Box>
  )
}
