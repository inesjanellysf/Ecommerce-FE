import { useNavigate } from "react-router-dom";
import { useCart } from "../../../hooks/useCart.jsx";
import { useWishlist } from "../../../hooks/useWishlist.jsx";
import { ShopCart } from "../../../pages/CarritoCompras/ShopCart.jsx";
import { useState } from "react";
import OffCanvas from "../../../components/OffCanvas.jsx";
import DrawerSearch from "./DrawerSearch.jsx";
import { TopIcons } from "../../../components/TopIcons.jsx";
import PropTypes from "prop-types";

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
          wishlist: wishlistItems.length,
          cart: cartItems.length,
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

TopIconsContainer.propTypes = {
  icons: PropTypes.array.isRequired,
};
