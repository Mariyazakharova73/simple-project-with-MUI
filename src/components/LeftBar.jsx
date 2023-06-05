import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import { StyledListItemText, StyledListItemIcon, StyledBox } from "./LeftBarStyles";
import List from "@mui/material/List";
import { leftBarData } from "../utils/constants.js";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { Switch } from "@mui/material";
import Box from "@mui/material/Box";

const LeftBar = ({ changeMode }) => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
  return (
    <StyledBox flex={1} p={2}>
      <Box position="fixed">
        <List component="nav">
          {leftBarData.map((item, index) => {
            return (
              <ListItemButton
                component="a"
                key={item.id}
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(index)}
              >
                <StyledListItemIcon color="primary">{item.icon}</StyledListItemIcon>
                <StyledListItemText primary={item.text} />
              </ListItemButton>
            );
          })}
          <ListItemButton
            component="a"
            selected={selectedIndex === 11}
            onClick={() => handleListItemClick(11)}
          >
            <StyledListItemIcon color="primary">
              <ModeNightIcon />
            </StyledListItemIcon>
            <Switch color="secondary" onChange={changeMode} />
          </ListItemButton>
        </List>
      </Box>
    </StyledBox>
  );
};

export default LeftBar;
