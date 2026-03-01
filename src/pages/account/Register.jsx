import { Box, Paper, Stack, Typography } from "@mui/material";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Register() {
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
            Registro
          </Typography>

          <Stack spacing={1}>
            <Typography variant="body2" fontWeight={500}>
              Nombre
            </Typography>
            <Input type="text" />
          </Stack>

          <Stack spacing={1}>
            <Typography variant="body2" fontWeight={500}>
              Apellido
            </Typography>
            <Input type="text" />
          </Stack>

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
          </Stack>
          <Stack spacing={1} alignItems="flex-start">
            <Button type="submit" fullWidth>
              Registro
            </Button>
          </Stack>
          <Stack spacing={1} alignItems="flex-end">
            <Typography variant="body2" style={{ color: "rgb(10, 173, 10)" }}>
              <Link
                to="/account/login"
                style={{
                  fontWeight: "bold",
                  color: "rgb(10, 173, 10)",
                  textDecoration: "none",
                }}
              >
                Iniciar sesion
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Paper>
  );
}
