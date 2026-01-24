import PropTypes from "prop-types";
import { Button as MuiButton } from "@mui/material";
import "../../public/css/components/Button.css";



export function Button({
  children,
  type = "button",
  size = "md",        // sm | md | lg
  fullWidth = false, // SOLO si lo necesitas
  disabled = false
}) {
  return (
    <MuiButton
      type={type}
      variant="contained"
      className={`btn-login btn-${size}`}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      {children}
    </MuiButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool
};
