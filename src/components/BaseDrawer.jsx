import Drawer from "@mui/material/Drawer";

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
