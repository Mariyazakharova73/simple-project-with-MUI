import React from "react";
import {
  StyledContainerRightBar,
  StyledWrapper,
  StyledTypography,
  StyledAvatarGroup,
  StyledLink,
  StyledBox,
  StyledBoxWrapper,
} from "./RightBarStyles";
import Avatar from "@mui/material/Avatar";
import { avatarsData, linkData } from "./../utils/constants";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { itemData } from "./../utils/constants";
import Conversations from "./Conversations/Conversations";

const RightBar = () => {
  return (
    <StyledBoxWrapper flex={2} p={2}>
      <StyledWrapper>
        <StyledTypography>Online friends</StyledTypography>
        <StyledAvatarGroup max={5}>
          {avatarsData.map((item) => {
            return <Avatar key={item.name} src={item.link} />;
          })}
        </StyledAvatarGroup>
        <StyledTypography>Latest Photos</StyledTypography>
        <ImageList rowHeight={100} cols={3} sx={{ margin: 0, marginBottom: "20px" }}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <StyledTypography>Latest Conversations</StyledTypography>
        <Conversations />
      </StyledWrapper>
    </StyledBoxWrapper>
  );
};

export default RightBar;
