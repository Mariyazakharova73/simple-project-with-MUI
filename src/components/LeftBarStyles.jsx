import { styled } from "@mui/system";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import Box from "@mui/material/Box";

export const StyledBox = styled(Box)(({ theme }) => ({
  height: "100vh",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: "40px",
  [theme.breakpoints.down("lg")]: {
    minWidth: "30px",
  },
}));

export const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
