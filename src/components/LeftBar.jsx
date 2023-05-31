import React from "react";
import InboxIcon from "@mui/icons-material/Inbox";
import HomeIcon from "@mui/icons-material/Home";
import ListItemButton from "@mui/material/ListItemButton";
import { IconText, LeftBarContainer, Icon } from "./LeftBarStyles";
import List from "@mui/material/List";

const LeftBar = () => {
  const listData = [
    { id: 0, icon: <HomeIcon sx={{ color: "#fff" }} />, text: "Homepage" },
    { id: 0, icon: <InboxIcon sx={{ color: "#fff" }} />, text: "Inbox" },
    { id: 0, icon: <InboxIcon sx={{ color: "#fff" }} />, text: "Inbox" },
  ];
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
