import PropTypes from "prop-types";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";

export function Input({
  value,
  handleChange,
  placeholder,
  type = "text",
  src,
  alt
}) {
  return (
    <TextField
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      type={type}
      fullWidth
      variant="outlined"
      InputProps={{
        endAdornment: src ? (
          <InputAdornment position="end">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%"
              }}
            >
              {/* LÍNEA DIVISORIA */}
              <Box
                sx={{
                  width: "1px",
                  height: "30px",
                  backgroundColor: "#ced4da",
                }}
              />

              {/* ICONO */}
              <IconButton tabIndex={-1}>
                <img src={src} alt={alt} width={16} height={16} />
              </IconButton>
            </Box>
          </InputAdornment>
        ) : null
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "0.5rem",
          fontSize: "14px",
          paddingRight: 0,

          "& fieldset": {
            borderColor: "#ced4da"
          },
          "&:hover fieldset": {
            borderColor: "#ced4da"
          },
          "&.Mui-focused fieldset": {
            borderColor: "rgb(10, 173, 10)",
            boxShadow: "0 0 0 0.25rem rgba(10, 173, 10, 0.25)"
          }
        },
        "& input": {
          padding: "10px 14px"
        }
      }}
    />
  );
}

Input.propTypes = {
  src: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  alt: PropTypes.string,
  handleChange: PropTypes.func,
  value: PropTypes.string
};
