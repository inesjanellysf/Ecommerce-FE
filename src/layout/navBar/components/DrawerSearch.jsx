import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Grid } from "@mui/material";
import { Input } from "../../../components/Input";
import { IMAGE } from "../../../constants/urlImage";
import { BaseDrawer } from "../../../components/BaseDrawer";
import { useSearch } from '../../../hooks/useSearch';

export default function DrawerSearch({ open, onClose }) {
    const { searchQuery, setSearchQuery } = useSearch();
  
    const handleSearchChange = (e) => setSearchQuery(e.target.value);

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
        <Grid container>
          <Grid size={11}>
            <Input
              src={IMAGE.SEARCH}
              placeholder="Buscar productos"
              type="search"
              sx={{ width: "100%" }}
              value={searchQuery}
              handleChange={handleSearchChange}
            />
          </Grid>
          <Grid size={1}>
            <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
              <IconButton onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </BaseDrawer>
  );
}
