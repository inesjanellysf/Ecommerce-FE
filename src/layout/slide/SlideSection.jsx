import Box from "@mui/material/Box";
import { IMAGE } from "../../constants/urlImage.js";
import { Image } from "../../components/Image.jsx";
import { HeroText } from "./components/HeroText";
import PropTypes from "prop-types";

function SlideSection({ hero }) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mb: 4,
      }}
    >
      {/* HERO */}
      <Box
        sx={{
          position: "relative",
          width: "100%",
          backgroundColor: "#dff1e5",
          borderRadius: 4,
          overflow: "hidden",
          minHeight: { xs: "auto", md: "auto" },
        }}
      >
        <Image
          img={hero?.imageUrl || IMAGE.SLIDE_MUJER_COMPRANDO}
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />
        <Box
          sx={{
            display: { xs: "none", md: "block" },
            position: "absolute",
            top: "50%",
            left: 35,
            transform: "translateY(-50%)",
            maxWidth: 480,
          }}
        >
          <HeroText hero={hero} />
        </Box>
        <Box
          sx={{
            display: { xs: "block", md: "none" },
            p: 2,
          }}
        >
          <HeroText hero={hero} />
        </Box>
      </Box>
    </Box>
  );
}

SlideSection.propTypes = {
  hero: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
};

export default SlideSection;
