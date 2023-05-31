import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import SearchIcon from "@mui/icons-material/Search";
import {
  LogoLg,
  LogoSm,
  Search,
  SearchIconWrapper,
  StyledInputBase,
  SerchButton,
  CancelIcon,
} from "./NavbarStyles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Navbar = () => {
  const [openSearch, setOpenSearch] = useState(false);

  return (
    <AppBar position="fixed">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <LogoLg variant="h6">ЛОГОТИП</LogoLg>
        <LogoSm variant="h6">ЛОГО</LogoSm>
        <Search open={openSearch}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search…" inputProps={{ "aria-label": "search" }} />
          <CancelIcon
            onClick={() => {
              setOpenSearch(false);
            }}
          />
        </Search>

        <Box sx={{ display: openSearch ? "none" : "flex" }}>
          <SerchButton
            onClick={() => setOpenSearch(true)}
            size="large"
            aria-label="search"
            color="inherit"
          >
            <SearchIcon />
          </SerchButton>

          <IconButton size="large" aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="error">
              <MailIcon />
            </Badge>
          </IconButton>
          <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
            <Badge badgeContent={17} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            // aria-controls={menuId}
            aria-haspopup="true"
            // onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
