import { Box, Grid, Container } from "@mui/material";
import { Outlet } from "react-router-dom";

export function Account() {
  return (
    <Box mt={3}>
      <Container fixed>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 6 }}
          alignItems="center"
        >
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box
                component="img"
                src="/img/signin/signin.webp"
                alt="signin"
                sx={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
