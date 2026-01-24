import { Box, Paper, Grid, Container, Stack, Typography } from "@mui/material";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export function Account() {
    return (
        <Box mt={6}>
            <Container fixed>
                <Grid
                    container
                    rowSpacing={1}
                    columnSpacing={{ xs: 1, sm: 2, md: 6 }}
                    alignItems="stretch"
                >
                    {/* IMAGEN */}
                     <Grid size={{ xs: 12, sm: 12, md: 6, lg:6, xl:6}}>
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                            //height="100%"
                        >
                            <Box
                                component="img"
                                src="/img/signin/signin.webp"
                                alt="signin"
                                sx={{
                                    width: "100%",
                                    //maxWidth: 420,   // opcional, evita que se vea gigante
                                    height: "auto",
                                    objectFit: "contain"
                                }}
                            />
                        </Box>
                    </Grid>
                    <Outlet />
                </Grid>
            </Container>
        </Box>
    );
}
