import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Grid } from "@mui/material";
import { Input } from "../../../components/Input";
import { IMAGE } from "../../../constants/urlImage";
import { BaseDrawer } from "../../../components/BaseDrawer";

export default function DrawerSearch({ open, onClose }) {
  return (
    <BaseDrawer
      open={open}
      onClose={onClose}
      anchor="top"
      zIndex={(theme) => theme.zIndex.modal + 1}
      paperSx={{
        height: "auto",
        maxHeight: "90vh",
        p: 2,
      }}
    >
      <Box>
        {" "}
        {/* Header */}{" "}
        <Grid container>
          {" "}
          <Grid size={11}>
            {" "}
            <Input
              src={IMAGE.SEARCH}
              placeholder="Buscar productos"
              type="search"
              sx={{ width: "100%" }}
            />{" "}
          </Grid>{" "}
          <Grid size={1}>
            {" "}
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              {" "}
              <IconButton onClick={onClose}>
                {" "}
                <CloseIcon />{" "}
              </IconButton>{" "}
            </Box>{" "}
          </Grid>{" "}
        </Grid>{" "}
        {/* Aquí puedes meter categorías, lista, etc */}{" "}
      </Box>
    </BaseDrawer>
  );
}
