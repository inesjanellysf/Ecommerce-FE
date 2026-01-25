import { BaseDrawer } from "../../../components/BaseDrawer";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Box,
} from "@mui/material";
import { Home, Mail } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function DrawerMenu({ open, isMobile, onClose, categoriasMenu }) {
  const navigate = useNavigate();

  function handleNavigate(url) {
    onClose?.();
    navigate(url);
  }

  return (
    <BaseDrawer
      open={open && isMobile}
      onClose={onClose}
      anchor="left"
      paperSx={{ width: "100%" }}
    >
      <Toolbar />
      <Box mt={2}>
        <List>
          {categoriasMenu.map(
            (item, index) =>
              item.isPrincipal && (
                <ListItem key={item.label} disablePadding>
                  <ListItemButton onClick={() => handleNavigate(item.url)}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <Home /> : <Mail />}
                    </ListItemIcon>
                    <ListItemText primary={item.label} />
                  </ListItemButton>
                </ListItem>
              )
          )}
        </List>
      </Box>
    </BaseDrawer>
  );
}

export default DrawerMenu;
