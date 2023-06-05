import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import SearchIcon from "@mui/icons-material/Search";
import {
  LogoLg,
  LogoSm,
  StyleDiv,
  SearchIconWrapper,
  StyledInputBase,
  StyledIconButton,
  StyledCancel,
  StyledToolbar,
} from "./NavbarStyles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MenuComponent from "./MenuComponent";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenMenuClick = () => {
    setMenuOpen(true);
  };
  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <LogoLg variant="h6">ЛОГОТИП</LogoLg>
        <LogoSm />
        <StyleDiv open={openSearch}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" />
          <StyledCancel
            onClick={() => {
              setOpenSearch(false);
            }}
          />
        </StyleDiv>

        <Box sx={{ display: openSearch ? "none" : "flex" }}>
          <StyledIconButton
            onClick={() => setOpenSearch(true)}
            size="large"
            aria-label="search"
            color="inherit"
          >
            <SearchIcon />
          </StyledIconButton>

          <IconButton size="large" color="inherit">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-haspopup="true"
            onClick={handleOpenMenuClick}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </StyledToolbar>
      <MenuComponent handleMenuClose={handleMenuClose} menuOpen={menuOpen} />
    </AppBar>
  );
};

export default Navbar;
