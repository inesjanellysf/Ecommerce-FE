import { Box, Paper, Stack, Typography } from "@mui/material";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Login() {
  return (
    <Paper
      variant="outlined"
      sx={{
        border: "1px solid rgb(10, 173, 10)",
        borderRadius: 2,
      }}
    >
      <Box m={4}>
        <Stack spacing={4}>
          <Typography variant="h5" fontWeight={600}>
            Login
          </Typography>

          <Stack spacing={1}>
            <Typography variant="body2" fontWeight={500}>
              Correo electronico
            </Typography>
            <Input type="email" />
          </Stack>

          <Stack spacing={1}>
            <Typography variant="body2" fontWeight={500}>
              Contrasena
            </Typography>
            <Input type="password" />
            <Typography variant="body2">
              <Link
                to="/account/reset-password"
                style={{
                  fontWeight: "bold",
                  color: "rgb(10, 173, 10)",
                  textDecoration: "none",
                }}
              >
                Olvidaste tu contrasena?
              </Link>
            </Typography>
          </Stack>
          <Stack spacing={1} alignItems="flex-start">
            <Button type="submit" fullWidth>
              Iniciar sesion
            </Button>
          </Stack>
          <Stack spacing={1} alignItems="flex-end">
            <Typography variant="body2" style={{ color: "rgb(10, 173, 10)" }}>
              {"No tienes una cuenta? "}
              <Link
                to="/account/register"
                style={{
                  fontWeight: "bold",
                  color: "rgb(10, 173, 10)",
                  textDecoration: "none",
                }}
              >
                Registrate
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Paper>
  );
}
