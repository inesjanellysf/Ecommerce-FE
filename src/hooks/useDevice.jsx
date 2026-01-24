import { useTheme, useMediaQuery } from "@mui/material";

export function useDevice() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return { isMobile, isDesktop };
}
