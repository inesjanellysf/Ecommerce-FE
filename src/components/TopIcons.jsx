import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";
import { useWishlist } from "../hooks/useWishlist";
import { ShopCart } from "../pages/CarritoCompras/ShopCart.jsx";
import { useState } from "react";
import OffCanvas from "./OffCanvas";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export function TopIcons({ icons = [] }) {
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          //gap: 1.5   // separación horizontal como FreshCart
        }}
      >
        {icons.map((icon, index) => (
          <IconButton
            key={index}
            component={Link}
            to={icon.url}
            size="small"
            sx={{
              color: "text.secondary",
              position: "relative"
            }}
          >
            <Badge
              badgeContent={icon.icon === "heart" ? wishlistItems.length : 0}
              color="success"
              invisible={icon.icon  !== "heart"}
              overlap="circular"
            >
              <img
                src={`/img/icon/${icon.icon }.svg`}
                alt={icon.icon }
                width={20}
                height={20}
              />
            </Badge>
          </IconButton>
        ))}

        {/* CART */}
        <IconButton
          size="small"
          onClick={() => setIsOpen(true)}
          sx={{ color: "text.secondary" }}
        >
          <Badge
            badgeContent={cartItems.length}
            color="success"
            overlap="circular"
          >
            <img
              src="/img/icon/bag.svg"
              alt="Bag"
              width={20}
              height={20}
            />
          </Badge>
        </IconButton>
      </Box>

      <OffCanvas
        offcanvasTitle="Carrito de Compras"
        offcanvasDescription="Location in 382480"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
        <ShopCart />
      </OffCanvas>
    </>
  );
}
