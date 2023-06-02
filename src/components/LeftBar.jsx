import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import { StyledListItemText, StyledContainer, StyledListItemIcon } from "./LeftBarStyles";
import List from "@mui/material/List";
import { leftBarData } from "../utils/constants.js";

const LeftBar = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (index) => {
    setSelectedIndex(index);
  };
  return (
    <StyledContainer>
      <List component="nav">
        {leftBarData.map((item, index) => {
          return (
            <ListItemButton
              key={item.id}
              selected={selectedIndex === index}
              onClick={() => handleListItemClick(index)}
            >
              <StyledListItemIcon color="primary">{item.icon}</StyledListItemIcon>
              <StyledListItemText primary={item.text} />
            </ListItemButton>
          );
        })}
      </List>
    </StyledContainer>
  );
};

export default LeftBar;
