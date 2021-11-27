import {
  AppBar,
  Container,
  Toolbar,
  Box,
  Typography,
  Button,
} from "@mui/material";
import React from "react";
import Search from "../components/Search";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function Nav() {
  return (
    <AppBar position="static" color="default">
      <Container>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
          style={{ padding: 0 }}
        >
          <Typography variant="h6">R-MUI</Typography>

          <Search />

          <Box sx={{ display: "flex" }}>
            <Button
              startIcon={<PersonOutlineIcon />}
              endIcon={<KeyboardArrowDownIcon />}
              variant="text"
            >
              account
            </Button>
            <Button
              startIcon={<HelpOutlineIcon />}
              endIcon={<KeyboardArrowDownIcon />}
              variant="text"
            >
              help
            </Button>
            <Button startIcon={<ShoppingCartIcon />} variant="text">
              cart
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
