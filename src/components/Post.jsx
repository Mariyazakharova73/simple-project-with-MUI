import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { StyledCardMedia } from "./PostStyles";
import { postData } from "../utils/constants";

const Post = () => {
  return (
    <Card sx={{ marginBottom: "20px" }}>
      <StyledCardMedia image={postData[0].imageLink} title="My post" />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {postData[0].postTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {postData[0].postText}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default Post;
