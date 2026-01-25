import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { useState } from "react";
import { DropdownRecursive } from "./DropdownRecursive";
import { useNavigate } from "react-router-dom";

export function DropdownMenu({
  label,
  url,
  isPrincipal,
  items = [],
  variant = "text",
  startIcon,
  background = "transparent",
  textColor = "#000",
  sx = {},
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    if (items.length > 0) {
      setAnchorEl(event.currentTarget);
      return;
    }

    if (url) {
      navigate(url);
    }
  };

  return (
    <>
      {console.log(url)}
      <Button
        onClick={handleClick}
        variant={variant}
        startIcon={startIcon}
        endIcon={items.length > 0 && <KeyboardArrowDownIcon />}
        sx={{
          textTransform: "none",
          fontWeight: 500,
          background: background,
          color: textColor,
          ...sx,
        }}
        disableElevation
      >
        {label}
      </Button>

      {items.length > 0 && (
        <DropdownRecursive
          anchorEl={anchorEl}
          items={items}
          onClose={() => setAnchorEl(null)}
        />
      )}
    </>
  );
}
