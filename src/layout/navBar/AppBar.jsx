import * as React from "react";
import "../../../public/css/layout/AppBarComponent.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import GridViewIcon from "@mui/icons-material/GridView";
import DrawerMenu from "./components/DrawerMenu.jsx";
import { DropdownMenu } from "./components/DropdownMenu.jsx";
import { Input } from "../../components/Input";
import { Image } from "../../components/Image.jsx";
import { IMAGE } from "../../constants/urlImage.js";
import { useDevice } from "../../hooks/useDevice";
import { TopIconsContainer } from "./components/TopIconsContainer.jsx";
import { useSearch } from "../../hooks/useSearch.jsx";
import { fetchJson, unwrapApiData } from "../../services/api.js";

const categoriasMenu = [
  { label: "Home", url: "/", isPrincipal: true, isInCategory: false },
  {
    label: "Frutas y verduras",
    url: "/categoria/frutas-y-verduras",
    isPrincipal: false,
    isInCategory: true,
  },
  {
    label: "Carnes y pescado",
    url: "/categoria/carnes-y-pescado",
    isInCategory: true,
  },
  {
    label: "Aperitivos",
    url: "/categoria/aperitivos",
    isPrincipal: true,
    isInCategory: true,
  },
  { label: "Hogar", url: "/categoria/hogar", isInCategory: true },
  {
    label: "Lacteos",
    url: "/categoria/lacteos",
    isPrincipal: true,
    isInCategory: true,
  },
  {
    label: "Cocina",
    url: "/categoria/cocina",
    isPrincipal: true,
    isInCategory: true,
  },
  {
    label: "Panaderia",
    url: "/categoria/panaderia",
    isPrincipal: true,
    isInCategory: true,
  },
  {
    label: "Comida instantanea",
    url: "/categoria/comida-instantanea",
    isPrincipal: false,
    isInCategory: true,
  },
  {
    label: "Bebidas",
    url: "/categoria/bebidas",
    isPrincipal: true,
    isInCategory: true,
  },
];

const iconMobile = [
  { url: "", icon: "search" },
  { url: "account/login", icon: "user" },
];

const iconDesktop = [
  { url: "/heart", icon: "heart" },
  { url: "account/login", icon: "user" },
];

function AppBarComponent() {
  const { isMobile } = useDevice();
  const [open, setOpen] = React.useState(false);
  const [navbarData, setNavbarData] = React.useState(null);
  const { searchQuery, setSearchQuery } = useSearch();

  const handleSearchChange = (e) => setSearchQuery(e.target.value);
  const handleDrawerToggle = () => {
    setOpen((prev) => !prev);
  };

  React.useEffect(() => {
    fetchJson("/MockApi/layout/navbar.success.json")
      .then((response) => setNavbarData(unwrapApiData(response)))
      .catch((err) => console.error("Navbar error:", err));
  }, []);

  React.useEffect(() => {
    if (!isMobile && open) {
      setOpen(false);
    }
  }, [isMobile, open]);

  if (!navbarData) return null;

  return (
    <Box pb={isMobile ? 0 : 8} sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        className="appbar-root"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters className="appbar-toolbar">
            <Box className="appbar-grid">
              <Box className="appbar-left">
                {isMobile ? (
                  <IconButton onClick={handleDrawerToggle}>
                    {open ? <CloseIcon /> : <MenuIcon />}
                  </IconButton>
                ) : (
                  <Image img={IMAGE.LOGO_PRINCIPAL} height={50} />
                )}
              </Box>
              <Box className="appbar-center">
                {isMobile ? (
                  <Image img={IMAGE.LOGO_PRINCIPAL} height={36} />
                ) : (
                  <Input
                    value={searchQuery}
                    handleChange={handleSearchChange}
                    src={IMAGE.SEARCH}
                    placeholder="Buscar productos"
                    type="search"
                    sx={{
                      width: "100%",
                      flex: 1,
                    }}
                  />
                )}
              </Box>
              <Box className="appbar-right">
                <TopIconsContainer icons={isMobile ? iconMobile : iconDesktop} />
              </Box>
            </Box>
          </Toolbar>
          {!isMobile && (
            <Box className="subheader">
              <Container maxWidth="xl">
                <Box className="subheader-container">
                  <DropdownMenu
                    label="Mas categorias"
                    items={categoriasMenu}
                    variant="contained"
                    startIcon={<GridViewIcon />}
                    sx={{ backgroundColor: "#0aad0a", color: "#fff" }}
                  />

                  {categoriasMenu.map(
                    (item) =>
                      item.isPrincipal && (
                        <DropdownMenu
                          key={item.label}
                          label={item.label}
                          url={item.url}
                          items={item.children}
                          sx={{ color: "#21313C" }}
                        />
                      ),
                  )}
                </Box>
              </Container>
            </Box>
          )}
        </Container>
      </AppBar>

      <DrawerMenu
        open={open}
        isMobile={isMobile}
        onClose={() => setOpen(false)}
        categoriasMenu={categoriasMenu}
      />
    </Box>
  );
}

export default AppBarComponent;
