import { useEffect, useState } from "react";

import { Input } from "../components/Input.jsx";
import { TopBanner } from "../components/TopBanner.jsx";
import { Logo } from "../components/Image.jsx";
import { TopIcons } from "../components/TopIcons.jsx";
import  AppBarComponent  from "./navBar/AppBar.jsx"
import "../../public/css/layout/navbar.css";
import { Box } from "@mui/material";

export function NavBar() {
  const [navbarData, setNavbarData] = useState(null);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  useEffect(() => {
    fetch("/Data/NavBarData.json")
      .then((res) => res.json())
      .then((data) => setNavbarData(data))
      .catch((err) => console.error("Navbar error:", err));
  }, []);

  if (!navbarData) return null;

  return (
    <Box>


      <AppBarComponent navbarData/>
      {/*<header className="border-bottom">


      <div className="navbar-main py-2">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-6 col-md-3 d-flex align-items-center gap-2">
              <button
                className="btn p-0 d-lg-none"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileMenu"
                aria-label="Open menu"
              >
                ☰
              </button>

              <Logo {...navbarData.logo} />
            </div>
            <div className="col-md-6 d-none d-lg-block">
              <Input
                src="/img/icon/search.svg"
                placeholder="Buscar productos"
                type="search"
              />
            </div>

            <div className="col-6 col-md-3 text-end">
              <TopIcons
                icons = {showMobileSearch ? ["search","heart", "user"] : ["heart", "user"] }
                onSearchClick={() => setShowMobileSearch(true)}
              />
            </div>

          </div>
        </div>
      </div>

      {showMobileSearch && (
        <div className="mobile-search">
          <div className="container">
            <div className="d-flex align-items-center gap-2 py-2">

              <div className="flex-grow-1">
                <Input
                  src="/img/icon/search.svg"
                  placeholder="Buscar productos"
                  type="search"
                  autoFocus
                />
              </div>

              <button
                className="btn p-0"
                onClick={() => setShowMobileSearch(false)}
                aria-label="Close search"
              >
                ✕
              </button>

            </div>
          </div>
        </div>
      )}

      <nav className="navbar navbar-expand-lg navbar-light d-none d-lg-block pb-3">
        <div className="container">
          <div className="navbar-nav align-items-center">
            <Menu />
          </div>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="mobileMenu"
      >
        <div className="offcanvas-header">
          <Logo {...navbarData.logo} />
          <button
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>

        <div className="offcanvas-body">
          <Menu />
        </div>
      </div>

    </header>*/}
    </Box>
  );
}
