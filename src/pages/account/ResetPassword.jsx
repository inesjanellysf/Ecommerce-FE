import { Box, Paper, Grid, Container, Stack, Typography } from "@mui/material";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";


export function ResetPassword() {
    return (
         <Grid size={{ xs: 12, sm: 12, md: 6, lg:6, xl:6}}>
            <Paper
                variant="outlined"
                sx={{
                    border: "1px solid rgb(10, 173, 10)",
                    borderRadius: 2,
                    //height: "90%"
                }}
            >
                <Box m={4}>
                    <Stack spacing={4}>
                        <Typography variant="h5" fontWeight={600}>
                            Restablecer su contraseña
                        </Typography>

                        <Stack spacing={2} textAlign={"justify"}>
                            <Typography variant="body2" fontWeight={500}>
                                Le enviaremos un correo electrónico para restablecer su contraseña.
                            </Typography>
                        </Stack>
                        <Stack spacing={2}>
                            <Typography variant="body2" fontWeight={500}>
                                Dirección de correo electrónico
                            </Typography>
                            <Input type="email" />
                        </Stack>
                        <Stack spacing={1} alignItems="flex-start">
                            <Button type="submit" fullWidth>
                               Enviar
                            </Button>
                        </Stack>
                        <Stack spacing={1} alignItems="flex-end">
                            <Typography variant="body2" style={{ color: "rgb(10, 173, 10)" }}>
                                <Link
                                    to="/account/login"
                                    style={{ fontWeight: "bold", color: "rgb(10, 173, 10)", textDecoration: "none" }}
                                >
                                    Cancelar
                                </Link>
                            </Typography>
                        </Stack>
                    </Stack>
                </Box>
            </Paper>
        </Grid>
    );
}
