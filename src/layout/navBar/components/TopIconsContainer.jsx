import { useNavigate } from "react-router-dom";
import { useCart } from "../../../hooks/useCart.jsx";
import { useWishlist } from "../../../hooks/useWishlist.jsx";
import { ShopCart } from "../../../pages/CarritoCompras/ShopCart.jsx";
import { useState } from "react";
import OffCanvas from "../../../components/OffCanvas.jsx";
import  DrawerSearch  from './DrawerSearch.jsx';
import { TopIcons } from "../../../components/TopIcons.jsx";

export function TopIconsContainer({ icons }) {
  const navigate = useNavigate();
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  const [isOpen, setIsOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  function handleIconClick(icon) {
    if (!icon.url) {
      setOpenSearch(true);
    } else {
      navigate(icon.url);
    }
  }

  return (
    <>
      <TopIcons
        icons={icons}
        badges={{
          wishlist: wishlistItems.length
        }}
        onIconClick={handleIconClick}
        onCartClick={() => setIsOpen(true)}
      />

      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen}>
        <ShopCart />
      </OffCanvas>

      <DrawerSearch
        open={openSearch}
        onClose={() => setOpenSearch(false)}
      />
    </>
  );
}



/*import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart.jsx";
import { useWishlist } from "../../hooks/useWishlist.jsx";
import { ShopCart } from "../../pages/CarritoCompras/ShopCart.jsx";
import { useState } from "react";
import OffCanvas from "../../components/OffCanvas.jsx";
import  SearchDrawer  from './SearchDrawer.jsx';
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export function TopIcons({ icons = [] }) {
  const navigate = useNavigate()
  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();
  const [isOpen, setIsOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  function handleClickLink(url){
    console.log(url,"top")
    if(url == ""){
      setOpenSearch(true)
    }else{
      navigate(url)
    }
  }
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
            onClick={()=> handleClickLink(icon.url)}
            size="small"
            sx={{
              color: "text.secondary",
              position: "relative"
            }}
          >
             {console.log(icon.url)}
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

        {/* CART 
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
      <SearchDrawer
        open={openSearch}
        onClose={() => setOpenSearch(false)}
      />
    </>
  );
}*/
