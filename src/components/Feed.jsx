import React from "react";
import Post from "./Post";
import { StyledContainer } from "./RightBarStyles";

const Feed = () => {
  return (
    <StyledContainer>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </StyledContainer>
  );
};

export default Feed;
