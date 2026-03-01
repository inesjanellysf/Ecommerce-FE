import PropTypes from "prop-types";

export function Image({
  img,
  height,
  width = "auto",
  style = {},
  ...props
}) {
  return (
    <img
      src={img}
      alt=""
      style={{
        height: height ? `${height}px` : "auto",
        width,
        maxWidth: "100%",
        objectFit: "contain",
        ...style,
      }}
      {...props}
    />
  );
}



Image.propTypes = {
  img: PropTypes.string,
  height: PropTypes.number,
  alt: PropTypes.string,
  width: PropTypes.string,
  style: PropTypes.object,
};
