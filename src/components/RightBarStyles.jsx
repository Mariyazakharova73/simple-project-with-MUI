import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export const RightBarContainer = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
}));

export const GridSm = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "5px",
    paddingRight: "5px",
    paddingTop: "80px",
  },
}));
