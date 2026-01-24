import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Container from '@mui/material/Container';
import DrawerComponent from './Drawer';
import { useDevice } from "../../hooks/useDevice";
import { Input } from "../../components/Input";
import { TopIcons } from "../../components/TopIcons.jsx";
import { Logo } from "../../components/Image.jsx";
import { IMAGE } from '../../constants/urlImage.js';
import { DropdownMenu } from './DropdownMenu.jsx';
import  SearchDrawer  from './SearchDrawer.jsx';
import GridViewIcon from '@mui/icons-material/GridView';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const categoriasMenu = [
    {
        label: "Home",
        url: "/",
        isPrincipal: true,
        isInCategory: false,

    },
    {
        label: "Frutas y verduras",
        url: "/frutas-verduras",
        isPrincipal: false,
        isInCategory: true,
        children: [
            { label: "Leche", url: "/bebidas/leche", isInCategory: true },
            { label: "Cola", url: "/bebidas/cola", isInCategory: true }
        ],
    },
    {
        label: "Carnes y pescado",
        url: "/carnes-pescados",
        isPrincipal: false,
        isInCategory: true
    },
    {
        label: "Aperitivos",
        url: "/aperitivos",
        isPrincipal: true,
        isInCategory: true
    },
    {
        label: "Cuidado de mascotas",
        url: "/cuidado-mascotas",
        isPrincipal: false,
        isInCategory: true
    },
    {
        label: "Hogar",
        url: "/hogar",
        isPrincipal: false,
        isInCategory: true
    },
    {
        label: "Lácteos",
        url: "/lacteos",
        isPrincipal: true,
        isInCategory: true
    },
    {
        label: "Cocina",
        url: "/cocina",
        isPrincipal: true,
        isInCategory: true
    },
    {
        label: "Desayuno",
        url: "/desayuno",
        isPrincipal: false,
        isInCategory: true
    },
    {
        label: "Bebida",
        url: "/bebida",
        isPrincipal: true,
        isInCategory: true
    },
    {
        label: "Salud y Belleza",
        url: "/salud-belleza",
        isPrincipal: false,
        isInCategory: true
    }
];

const iconMobile = [
    {
        url:"",
        icon:"search"
    },
    {
        url:"account/login",
        icon:"user"
    },
]

const icon = [
    {
        url:"/heart",
        icon:"heart"
    },
    {
        url:"account/login",
        icon:"user"
    },
]

function AppBarComponent() {
    const { isMobile } = useDevice();
    const [open, setOpen] = React.useState(false);
    const [openSearch, setOpenSearch] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(!open);
    };


    React.useEffect(() => {
        if (!isMobile && open) {
            setOpen(false);
        }
    }, [isMobile, open]);

    return (
        <Box pb={8} sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    backgroundColor: "#fff",
                    boxShadow: "0 1px 4px rgba(0,0,0,0.08)"
                }}
            >
                <Container fixed>
                    <Toolbar disableGutters sx={{ minHeight: 72 }}>
                        <Box
                            sx={{
                                display: 'grid',
                                gridTemplateColumns: {
                                    xs: '48px 1fr auto',
                                    md: 'auto 1fr auto'
                                },
                                alignItems: 'center',
                                width: '100%',
                                gap: { xs: 1, sm: 1, md: 6 }
                            }}
                        >
                            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                {isMobile ? (
                                    <IconButton onClick={handleDrawerOpen} sx={{ color: '#000' }}>
                                        {!open ? <MenuIcon /> : <CloseIcon />}
                                    </IconButton>
                                ) : (
                                    <Logo img={IMAGE.LOGO_PRINCIPAL} height={50} />
                                )}
                            </Box>

                            <Box
                                sx={{
                                    display: 'flex',
                                    width: '100%',
                                }}
                            >
                                {isMobile ? (
                                    <Logo img={IMAGE.LOGO_PRINCIPAL} height={36} />
                                ) : (
                                    <Input
                                        src={IMAGE.SEARCH}
                                        placeholder="Buscar productos"
                                        type="search"
                                        sx={{
                                            width: '100%',
                                            flex: 1
                                        }}
                                    />
                                )}
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <TopIcons
                                    icons={isMobile ? iconMobile : icon}
                                />
                            </Box>
                        </Box>
                    </Toolbar>
                    {!isMobile && <Box py={2} sx={{ color: '#21313c' }}>
                        {/* SUB HEADER */}
                        <Box
                            sx={{
                                borderTop: "1px solid #eee",
                                borderBottom: "1px solid #eee",
                                background: "#fff",
                                display: { xs: 'none', md: 'flex' }, mr: 1
                            }}
                        >
                            <Container maxWidth="xl">
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 3,
                                        height: 56
                                    }}
                                >

                                    <DropdownMenu
                                        label="Más Categorias"
                                        items={categoriasMenu}
                                        background='#0aad0a'
                                        color='#ffffff'
                                        variant='contained'
                                        startIcon={<GridViewIcon />}
                                    />
                                    {categoriasMenu.map((item) =>
                                        item.isPrincipal ? (
                                            <DropdownMenu
                                                key={item.label}
                                                label={item.label}
                                                url={item.url}
                                                isPrincipal={item.isPrincipal}
                                                items={item.children}
                                            />
                                        ) : null
                                    )}
                                </Box>
                            </Container>
                        </Box>
                    </Box>}
                </Container>
            </AppBar>
            <DrawerComponent
                open={open}
                isMobile={isMobile}
                onClose={() => setOpen(false)}
            />
            <SearchDrawer
                open={openSearch}
                onClose={() => setOpenSearch(false)}
            />
        </Box>
    );
}

export default AppBarComponent;
