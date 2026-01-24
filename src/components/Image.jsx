import PropTypes from "prop-types";
import Box from '@mui/material/Box';

export function Logo({ img, alt, height }) {
    return (
        <Box
            component="img"
            src={img}
            alt={alt}
            sx={{ height: height }}
        />

    );
}


Logo.propTypes = {
  img: PropTypes.string,
  height: PropTypes.number,
  alt: PropTypes.string
};
