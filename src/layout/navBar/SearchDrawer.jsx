import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Input } from "../../components/Input";
import { IMAGE } from "../../constants/urlImage";

export default function SearchDrawer({ open, onClose }) {

  return (
    <Drawer
      anchor="top"
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          height: "auto",
          maxHeight: "90vh",
          p: 2
        }
      }}
    >
      <Box>
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end"
          }}
        >
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>

        {/* Buscador */}
        <Input
          src={IMAGE.SEARCH}
          placeholder="Buscar productos"
          type="search"
          sx={{
            width: "100%"
          }}
        />

        {/* Aquí puedes meter categorías, lista, etc */}
      </Box>
    </Drawer>
  );
}
