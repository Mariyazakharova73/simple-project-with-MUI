import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";

export const LeftBarContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  color: "white",
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "5px",
    paddingRight: "5px",
    paddingTop: "80px",
  },
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const Icon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: "40px",
  [theme.breakpoints.down("lg")]: {
    minWidth: "30px",
  },
}));

export const IconText = styled(ListItemText)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));