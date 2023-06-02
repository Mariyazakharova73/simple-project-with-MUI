import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";

export const GridLg = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    paddingLeft: "5px",
    paddingRight: "5px",
  },
}));
