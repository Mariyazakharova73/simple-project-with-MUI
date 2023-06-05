import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { conversationsData } from "../utils/constants";

const Conversations = () => {
  return (
    <List>
      {conversationsData.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <ListItem alignItems="flex-start" key={item.id}>
              <ListItemAvatar>
                <Avatar alt={item.name} src={item.link} />
              </ListItemAvatar>
              <ListItemText
                primary={item.text}
                secondary={
                  <>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    ></Typography>
                    {item.message}
                  </>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </React.Fragment>
        );
      })}
    </List>
  );
};

export default Conversations;
