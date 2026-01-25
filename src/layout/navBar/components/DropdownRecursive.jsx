import { Menu, MenuItem, ListItemText } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function DropdownRecursive({
  anchorEl,
  items,
  onClose,
  isSubMenu = false
}) {
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const [childAnchor, setChildAnchor] = useState(null);
  const [childItems, setChildItems] = useState([]);

  const handleOpenChild = (event, children) => {
    setChildAnchor(event.currentTarget);
    setChildItems(children);
  };

  const handleNavigate = (url) => {
    onClose?.();
    setChildAnchor(null);

    if (url) {
      navigate(url); // 👈 AQUÍ SE USA LA URL
    }
  };

  return (
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={onClose}
      anchorOrigin={
        isSubMenu
          ? { vertical: "top", horizontal: "right" }
          : { vertical: "bottom", horizontal: "left" }
      }
      transformOrigin={
        isSubMenu
          ? { vertical: "top", horizontal: "left" }
          : { vertical: "top", horizontal: "left" }
      }
      sx={{
        zIndex: (theme) => theme.zIndex.modal + 10,
        mt: isSubMenu ? -1 : 0
      }}
    >
      {items.map((item) => {
        const hasChildren = item.children?.length > 0;

        return item.isInCategory ? (
          <MenuItem
            key={item.label}
            onMouseEnter={(e) => {
              if (hasChildren) {
                handleOpenChild(e, item.children);
              }
            }}
            onClick={() => {
              if (!hasChildren) {
                handleNavigate(item.url); // 👈 URL AQUÍ
              }
            }}
            sx={{
              minWidth: 220,
              fontSize: 14,
              py: 1,
              display: "flex",
              justifyContent: "space-between",
              "&:hover": {
                backgroundColor: "#f5f5f5"
              }
            }}
          >
            <ListItemText>{item.label}</ListItemText>
            {hasChildren && <ChevronRightIcon fontSize="small" />}
          </MenuItem>
        ) : null;
      })}

      {/* SUBMENÚ */}
      {childAnchor && (
        <DropdownRecursive
          anchorEl={childAnchor}
          items={childItems}
          onClose={() => setChildAnchor(null)}
          isSubMenu
        />
      )}
    </Menu>
  );
}
