import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import PeopleIcon from "@mui/icons-material/People";
import ListItemButton from "@mui/material/ListItemButton";
import { IconText, LeftBarContainer, Icon } from "./LeftBarStyles";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StorefrontIcon from "@mui/icons-material/Storefront";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

const listData = [
  { id: 0, icon: <HomeIcon />, text: "Homepage" },
  { id: 1, icon: <PeopleIcon />, text: "Friends" },
  { id: 3, icon: <ListIcon />, text: "Lists" },
  { id: 4, icon: <CameraAltIcon />, text: "Camera" },
  { id: 5, icon: <PlayCircleOutlineIcon />, text: "Videos" },
  { id: 6, icon: <PhoneAndroidIcon />, text: "Apps" },
  { id: 7, icon: <BookmarkIcon />, text: "Collections" },
  { id: 8, icon: <StorefrontIcon />, text: "Market Place" },
  { id: 9, icon: <SettingsIcon />, text: "Settings" },
  { id: 10, icon: <LogoutIcon />, text: "Logout" },
];

const LeftBar = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
  return (
    <LeftBarContainer>
      <List component="nav">
        {listData.map((item, index) => {
          return (
            <ListItemButton
              // sx={{
              //   "&.Mui-selected": {
              //     backgroundColor: "rgba(220, 0, 50, 0.1)",
              //   },
              // }}
              key={item.id}
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index)}
            >
              <Icon color="primary">{item.icon}</Icon>
              <IconText primary={item.text} />
            </ListItemButton>
          );
        })}
      </List>
    </LeftBarContainer>
  );
};

export default LeftBar;
