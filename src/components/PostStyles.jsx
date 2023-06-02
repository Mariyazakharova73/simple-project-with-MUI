import { styled } from "@mui/system";
import CardMedia from "@mui/material/CardMedia";

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  minWidth: "40px",
  height: 250,
  [theme.breakpoints.down("md")]: {
     height: 200
  },
  [theme.breakpoints.down("sm")]: {
    height: 150
  },
}));