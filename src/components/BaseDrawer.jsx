import Drawer from "@mui/material/Drawer";
import PropTypes from "prop-types";

export function BaseDrawer({
  open,
  onClose,
  anchor = "left",
  zIndex,
  paperSx = {},
  children,
}) {
  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onClose}
      sx={{
        zIndex,
      }}
      PaperProps={{
        sx: {
          ...paperSx,
        },
      }}
    >
      {children}
    </Drawer>
  );
}

BaseDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  anchor: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  zIndex: PropTypes.oneOfType([PropTypes.number, PropTypes.func]),
  paperSx: PropTypes.object,
  children: PropTypes.node,
};
