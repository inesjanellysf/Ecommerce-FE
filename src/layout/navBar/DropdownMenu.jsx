import { Button } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Children, useState } from "react";
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
    sx = {}
}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    return (
        <>
            <Button
                onClick={(e) => { isPrincipal && items.length == 0 ? navigate(url) : setAnchorEl(e.currentTarget)}}
                variant={variant}
                startIcon={startIcon}
                endIcon={items.length > 0 && <KeyboardArrowDownIcon />}
                sx={{
                    textTransform: "none",
                    fontWeight: 500,
                    background: background,
                    textColor: textColor,
                    ...sx
                }}
                disableElevation
            >
                {label}
            </Button>

            {items.length > 0 &&
                <DropdownRecursive
                    anchorEl={anchorEl}
                    items={items}
                    onClose={() => setAnchorEl(null)}
                /> 
            }
        </>
    );
}
