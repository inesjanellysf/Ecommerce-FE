import { useEffect, useMemo, useState } from "react";
import { Link as RouterLink, useParams } from "react-router-dom";
import Box from "@mui/material/Box";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Checkbox from "@mui/material/Checkbox";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import OutlinedInput from "@mui/material/OutlinedInput";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import ViewModuleOutlinedIcon from "@mui/icons-material/ViewModuleOutlined";
import WindowOutlinedIcon from "@mui/icons-material/WindowOutlined";
import { ProductCard } from "../components/ProductCard";
import { fetchJson, unwrapApiData } from "../services/api.js";

const categoryAliases = {
  "cafe-bebidas": ["bebidas"],
  "arroz-granos": ["granos"],
};

function slugifyCategory(value) {
  return (value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/&/g, "y")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function formatCategoryLabel(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export function Categoria() {
  const { categorySlug } = useParams();
  const [homeData, setHomeData] = useState(null);
  const [sortBy, setSortBy] = useState("popularidad");
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showAllCategories, setShowAllCategories] = useState(false);
  const [priceRange, setPriceRange] = useState({
    min: "0",
    max: "",
  });
  const [availabilityFilters, setAvailabilityFilters] = useState({
    inStock: false,
    outOfStock: false,
  });
  const [openSections, setOpenSections] = useState({
    availability: true,
    price: true,
    category: true,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  useEffect(() => {
    fetchJson("/MockApi/layout/home.sections.json")
      .then((response) => setHomeData(unwrapApiData(response)))
      .catch((error) => console.error("Category page data error:", error));
  }, []);

  const categoryLabel = useMemo(
    () => formatCategoryLabel(categorySlug || ""),
    [categorySlug],
  );

  useEffect(() => {
    if (!homeData) return;

    const allProducts = homeData.popularProducts ?? [];
    const acceptedSlugs = [categorySlug, ...(categoryAliases[categorySlug] ?? [])];
    const defaultCategories = [
      ...new Set(
        allProducts
          .filter((product) => acceptedSlugs.includes(slugifyCategory(product.category)))
          .map((product) => product.category),
      ),
    ];

    setSelectedCategories(defaultCategories);
  }, [categorySlug, homeData]);

  const allProducts = homeData?.popularProducts ?? [];
  const baseCategoryProducts = useMemo(() => {
    const acceptedSlugs = [categorySlug, ...(categoryAliases[categorySlug] ?? [])];
    return allProducts.filter((product) =>
      acceptedSlugs.includes(slugifyCategory(product.category)),
    );
  }, [allProducts, categorySlug]);

  const maxAvailablePrice = useMemo(
    () =>
      baseCategoryProducts.reduce(
        (max, product) => Math.max(max, product.currentPrice || 0),
        0,
      ),
    [baseCategoryProducts],
  );

  useEffect(() => {
    if (!homeData) return;

    setPriceRange({
      min: "0",
      max: maxAvailablePrice ? maxAvailablePrice.toFixed(2) : "",
    });
  }, [homeData, maxAvailablePrice, categorySlug]);

  const products = useMemo(() => {
    let filteredProducts = [...allProducts];

    if (selectedCategories.length > 0) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedCategories.includes(product.category),
      );
    }

    if (availabilityFilters.outOfStock && !availabilityFilters.inStock) {
      filteredProducts = [];
    }

    const minPrice = Number(priceRange.min || 0);
    const maxPrice = Number(
      priceRange.max || (maxAvailablePrice ? maxAvailablePrice.toFixed(2) : 0),
    );

    filteredProducts = filteredProducts.filter((product) => {
      const price = Number(product.currentPrice || 0);
      return price >= minPrice && price <= maxPrice;
    });

    const sortedProducts = [...filteredProducts];

    if (sortBy === "precio_asc") {
      sortedProducts.sort((a, b) => a.currentPrice - b.currentPrice);
    } else if (sortBy === "precio_desc") {
      sortedProducts.sort((a, b) => b.currentPrice - a.currentPrice);
    } else if (sortBy === "rating") {
      sortedProducts.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }

    return sortedProducts;
  }, [allProducts, availabilityFilters, maxAvailablePrice, priceRange, selectedCategories, sortBy]);

  const categoryCounts = useMemo(() => {
    return allProducts.reduce((acc, product) => {
      const label = product.category;
      acc[label] = (acc[label] || 0) + 1;
      return acc;
    }, {});
  }, [allProducts]);

  const categoryEntries = useMemo(
    () => Object.entries(categoryCounts),
    [categoryCounts],
  );

  const visibleCategoryEntries = useMemo(() => {
    if (showAllCategories) return categoryEntries;
    return categoryEntries.slice(0, 10);
  }, [categoryEntries, showAllCategories]);

  const inStockCount = allProducts.length;
  const outOfStockCount = 0;
  const selectedFilterCount =
    selectedCategories.length +
    (availabilityFilters.inStock ? 1 : 0) +
    (availabilityFilters.outOfStock ? 1 : 0) +
    (priceRange.min !== "0" ? 1 : 0) +
    (priceRange.max !== (maxAvailablePrice ? maxAvailablePrice.toFixed(2) : "") ? 1 : 0);

  const toggleCategoryFilter = (label) => {
    setSelectedCategories((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    );
  };

  const toggleAvailabilityFilter = (filterKey) => {
    setAvailabilityFilters((prev) => ({
      ...prev,
      [filterKey]: !prev[filterKey],
    }));
  };

  const clearAllFilters = () => {
    setSelectedCategories([]);
    setAvailabilityFilters({
      inStock: false,
      outOfStock: false,
    });
    setPriceRange({
      min: "0",
      max: maxAvailablePrice ? maxAvailablePrice.toFixed(2) : "",
    });
  };

  const handlePriceChange = (field) => (event) => {
    const nextValue = event.target.value;

    if (nextValue === "" || /^\d*\.?\d{0,2}$/.test(nextValue)) {
      setPriceRange((prev) => ({
        ...prev,
        [field]: nextValue,
      }));
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: { xs: 3, md: 5 } }}>
      <Stack spacing={4}>
        <Breadcrumbs separator="/" aria-label="breadcrumb">
          <Link
            component={RouterLink}
            underline="hover"
            to="/"
            sx={{ color: "#0aad0a", fontSize: "14px" }}
          >
            Home
          </Link>
          <Typography sx={{ color: "#5c6c75", fontSize: "14px" }}>
            {categoryLabel}
          </Typography>
        </Breadcrumbs>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Stack spacing={3}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="flex-start"
                spacing={2}
              >
                <Typography sx={{ color: "#001e2b", fontSize: "2rem", fontWeight: 700 }}>
                  Filtro:
                </Typography>
                {selectedFilterCount > 0 && (
                  <Typography
                    role="button"
                    onClick={clearAllFilters}
                    sx={{
                      color: "#5c6c75",
                      fontSize: "14px",
                      cursor: "pointer",
                      "&:hover": {
                        color: "#0aad0a",
                      },
                    }}
                  >
                    Remove all
                  </Typography>
                )}
              </Stack>

              {selectedFilterCount > 0 && (
                <Stack spacing={2}>
                  {availabilityFilters.inStock && (
                    <Chip
                      label="Availability: In stock"
                      onDelete={() => toggleAvailabilityFilter("inStock")}
                      sx={{
                        alignSelf: "flex-start",
                        height: 46,
                        borderRadius: 999,
                        bgcolor: "#dff3df",
                        border: "1px solid #0aad0a",
                        color: "#001e2b",
                        fontSize: "14px",
                      }}
                    />
                  )}
                  {availabilityFilters.outOfStock && (
                    <Chip
                      label="Availability: Out of stock"
                      onDelete={() => toggleAvailabilityFilter("outOfStock")}
                      sx={{
                        alignSelf: "flex-start",
                        height: 46,
                        borderRadius: 999,
                        bgcolor: "#dff3df",
                        border: "1px solid #0aad0a",
                        color: "#001e2b",
                        fontSize: "14px",
                      }}
                    />
                  )}
                  {(priceRange.min !== "0" ||
                    priceRange.max !== (maxAvailablePrice ? maxAvailablePrice.toFixed(2) : "")) && (
                    <Chip
                      label={`Precio: $${priceRange.min || "0"} - $${priceRange.max || "0"}`}
                      onDelete={() =>
                        setPriceRange({
                          min: "0",
                          max: maxAvailablePrice ? maxAvailablePrice.toFixed(2) : "",
                        })
                      }
                      sx={{
                        alignSelf: "flex-start",
                        height: 46,
                        borderRadius: 999,
                        bgcolor: "#dff3df",
                        border: "1px solid #0aad0a",
                        color: "#001e2b",
                        fontSize: "14px",
                      }}
                    />
                  )}
                  {selectedCategories.map((label) => (
                    <Chip
                      key={label}
                      label={`Category: ${label}`}
                      onDelete={() => toggleCategoryFilter(label)}
                      sx={{
                        alignSelf: "flex-start",
                        height: 46,
                        borderRadius: 999,
                        bgcolor: "#dff3df",
                        border: "1px solid #0aad0a",
                        color: "#001e2b",
                        fontSize: "14px",
                      }}
                    />
                  ))}
                </Stack>
              )}

              <Divider />

              <Stack spacing={2.5}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography sx={{ color: "#001e2b", fontSize: "1.1rem", fontWeight: 700 }}>
                    Disponibilidad
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() => toggleSection("availability")}
                    sx={{
                      color: "#001e2b",
                      transform: openSections.availability ? "rotate(0deg)" : "rotate(-90deg)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <ExpandMoreOutlinedIcon />
                  </IconButton>
                </Stack>
                <Collapse in={openSections.availability}>
                  <Stack spacing={1}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Checkbox
                        size="small"
                        checked={availabilityFilters.inStock}
                        onChange={() => toggleAvailabilityFilter("inStock")}
                        sx={{
                          color: "#b0b9c1",
                          "&.Mui-checked": {
                            color: "#0aad0a",
                          },
                        }}
                      />
                      <Typography sx={{ color: "#5c6c75", fontSize: "14px" }}>
                        En stock ({inStockCount})
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Checkbox
                        size="small"
                        checked={availabilityFilters.outOfStock}
                        onChange={() => toggleAvailabilityFilter("outOfStock")}
                        disabled={outOfStockCount === 0}
                        sx={{
                          color: "#b0b9c1",
                          "&.Mui-checked": {
                            color: "#0aad0a",
                          },
                        }}
                      />
                      <Typography sx={{ color: "#5c6c75", fontSize: "14px" }}>
                        Agotado ({outOfStockCount})
                      </Typography>
                    </Box>
                  </Stack>
                </Collapse>
              </Stack>

              <Divider />

              <Stack spacing={2.5}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography sx={{ color: "#001e2b", fontSize: "1.1rem", fontWeight: 700 }}>
                    Precio
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() => toggleSection("price")}
                    sx={{
                      color: "#001e2b",
                      transform: openSections.price ? "rotate(0deg)" : "rotate(-90deg)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <ExpandMoreOutlinedIcon />
                  </IconButton>
                </Stack>
                <Collapse in={openSections.price}>
                  <Stack spacing={2.5}>
                    <Typography sx={{ color: "#001e2b", fontSize: "14px" }}>
                      El precio mas alto es ${maxAvailablePrice.toFixed(2)}
                    </Typography>
                    <Stack direction="row" spacing={2}>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ mb: 1, color: "#001e2b", fontSize: "14px" }}>
                          Desde
                        </Typography>
                        <OutlinedInput
                          value={priceRange.min}
                          onChange={handlePriceChange("min")}
                          inputProps={{ inputMode: "decimal" }}
                          sx={{
                            width: "100%",
                            borderRadius: 2,
                            fontSize: "14px",
                            bgcolor: "#fff",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#dfe2e1",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#37b24d",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#0aad0a",
                              borderWidth: 2,
                            },
                            "& input": {
                              px: 1.75,
                              py: 1.5,
                            },
                          }}
                        />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ mb: 1, color: "#001e2b", fontSize: "14px" }}>
                          Hasta
                        </Typography>
                        <OutlinedInput
                          value={priceRange.max}
                          onChange={handlePriceChange("max")}
                          inputProps={{ inputMode: "decimal" }}
                          sx={{
                            width: "100%",
                            borderRadius: 2,
                            fontSize: "14px",
                            bgcolor: "#fff",
                            "& .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#dfe2e1",
                            },
                            "&:hover .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#37b24d",
                            },
                            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                              borderColor: "#0aad0a",
                              borderWidth: 2,
                            },
                            "& input": {
                              px: 1.75,
                              py: 1.5,
                            },
                          }}
                        />
                      </Box>
                    </Stack>
                  </Stack>
                </Collapse>
              </Stack>

              <Divider />

              <Stack spacing={2.5}>
                <Stack direction="row" justifyContent="space-between" alignItems="center">
                  <Typography sx={{ color: "#001e2b", fontSize: "1.1rem", fontWeight: 700 }}>
                    Categoria ({selectedCategories.length})
                  </Typography>
                  <IconButton
                    size="small"
                    onClick={() => toggleSection("category")}
                    sx={{
                      color: "#001e2b",
                      transform: openSections.category ? "rotate(0deg)" : "rotate(-90deg)",
                      transition: "transform 0.2s ease",
                    }}
                  >
                    <ExpandMoreOutlinedIcon />
                  </IconButton>
                </Stack>
                <Collapse in={openSections.category}>
                  <Stack spacing={1}>
                    {visibleCategoryEntries.map(([label, count]) => (
                      <Box key={label} sx={{ display: "flex", alignItems: "center" }}>
                        <Checkbox
                          size="small"
                          checked={selectedCategories.includes(label)}
                          onChange={() => toggleCategoryFilter(label)}
                          sx={{
                            color: "#b0b9c1",
                            "&.Mui-checked": {
                              color: "#0aad0a",
                            },
                          }}
                        />
                        <Typography sx={{ color: "#5c6c75", fontSize: "14px" }}>
                          {label} ({count})
                        </Typography>
                      </Box>
                    ))}
                    {categoryEntries.length > 10 && (
                      <Typography
                        role="button"
                        onClick={() => setShowAllCategories((prev) => !prev)}
                        sx={{
                          mt: 1,
                          color: "#001e2b",
                          fontSize: "14px",
                          fontWeight: 500,
                          cursor: "pointer",
                          userSelect: "none",
                          "&:hover": {
                            color: "#0aad0a",
                          },
                        }}
                      >
                        {showAllCategories ? "- Ver menos" : "+ Ver mas"}
                      </Typography>
                    )}
                  </Stack>
                </Collapse>
              </Stack>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 9 }}>
            <Stack spacing={3}>
              <Box
                sx={{
                  minHeight: 165,
                  borderRadius: 3,
                  bgcolor: "#eef2ee",
                  px: { xs: 3, md: 6 },
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ color: "#5b7487", fontSize: { xs: "2rem", md: "3rem" }, fontWeight: 700 }}>
                  {categoryLabel}
                </Typography>
              </Box>

              <Stack
                direction={{ xs: "column", md: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", md: "center" }}
                spacing={2}
              >
                <Stack direction="row" spacing={1.5} alignItems="center">
                  <Box sx={{ width: 32, height: 32, borderRadius: 1.2, bgcolor: "#0aad0a", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconButton
                      size="small"
                      onClick={() => setViewMode("compact")}
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: 1.2,
                        bgcolor: viewMode === "compact" ? "#0aad0a" : "#fff",
                        color: viewMode === "compact" ? "#fff" : "#5c6c75",
                        border: viewMode === "compact" ? "1px solid #0aad0a" : "1px solid #dfe2e1",
                        "&:hover": {
                          bgcolor: viewMode === "compact" ? "#099309" : "#f8fafb",
                        },
                      }}
                    >
                      <ViewModuleOutlinedIcon sx={{ fontSize: 20 }} />
                    </IconButton>
                  </Box>
                  <Box>
                    <IconButton
                      size="small"
                      onClick={() => setViewMode("grid")}
                      sx={{
                        width: 32,
                        height: 32,
                        borderRadius: 1.2,
                        bgcolor: viewMode === "grid" ? "#0aad0a" : "#fff",
                        color: viewMode === "grid" ? "#fff" : "#5c6c75",
                        border: viewMode === "grid" ? "1px solid #0aad0a" : "1px solid #dfe2e1",
                        "&:hover": {
                          bgcolor: viewMode === "grid" ? "#099309" : "#f8fafb",
                        },
                      }}
                    >
                      <WindowOutlinedIcon sx={{ fontSize: 20 }} />
                    </IconButton>
                  </Box>
                  <Typography sx={{ color: "#5c6c75", fontSize: "14px" }}>
                    {products.length} productos
                  </Typography>
                </Stack>

                <Stack direction="row" spacing={2} alignItems="center">
                  <Typography sx={{ color: "#001e2b", fontSize: "14px" }}>
                    Ordenar por:
                  </Typography>
                  <FormControl
                    size="small"
                    sx={{
                      minWidth: 240,
                      "& .MuiOutlinedInput-root": {
                        borderRadius: 2.5,
                        bgcolor: "#fff",
                        "& fieldset": {
                          borderColor: isSortOpen ? "#72d572" : "#dfe2e1",
                          borderWidth: isSortOpen ? 2 : 1,
                        },
                        "&:hover fieldset": {
                          borderColor: "#37b24d",
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#0aad0a",
                        },
                      },
                      "& .MuiSelect-select": {
                        py: 1.2,
                        px: 1.75,
                        fontSize: "14px",
                        color: "#001e2b",
                      },
                    }}
                  >
                    <Select
                      value={sortBy}
                      onChange={(event) => setSortBy(event.target.value)}
                      onOpen={() => setIsSortOpen(true)}
                      onClose={() => setIsSortOpen(false)}
                      IconComponent={ExpandMoreOutlinedIcon}
                    >
                      <MenuItem value="popularidad">Mas vendido</MenuItem>
                      <MenuItem value="precio_asc">Precio: menor a mayor</MenuItem>
                      <MenuItem value="precio_desc">Precio: mayor a menor</MenuItem>
                      <MenuItem value="rating">Mejor valorados</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </Stack>

              <Grid container spacing={2.5}>
                {products.map((product) => (
                  <Grid
                    key={product.id}
                    size={
                      viewMode === "grid"
                        ? { xs: 12, sm: 6, xl: 4 }
                        : { xs: 12, sm: 6, lg: 4, xl: 3 }
                    }
                  >
                    <ProductCard
                      title={product.title}
                      imageUrl={product.imageUrl}
                      category={product.category}
                      rating={product.rating}
                      reviews={product.reviews}
                      currentPrice={product.currentPrice}
                      oldPrice={product.oldPrice}
                      badges={product.badges}
                      isCompact={viewMode === "compact"}
                      onAdd={() => console.log("Agregar al carrito", product.title)}
                    />
                  </Grid>
                ))}
                {products.length === 0 && (
                  <Grid size={12}>
                    <Box
                      sx={{
                        border: "1px solid #dfe2e1",
                        borderRadius: 3,
                        px: 3,
                        py: 5,
                        textAlign: "center",
                      }}
                    >
                      <Typography sx={{ color: "#001e2b", fontSize: "1.1rem", fontWeight: 700, mb: 1 }}>
                        Aun no hay productos en esta categoria
                      </Typography>
                      <Typography sx={{ color: "#5c6c75", fontSize: "14px" }}>
                        Puedes probar con otra categoria desde el menu superior.
                      </Typography>
                    </Box>
                  </Grid>
                )}
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
