import React from "react";
import Post from "./Post";
import { StyledContainer } from "./RightBarStyles";
import Box from "@mui/material/Box";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
