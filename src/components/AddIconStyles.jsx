import Fab from "@mui/material/Fab";
import { styled } from "@mui/system";
import Box from "@mui/material/Box";

export const StyledFab = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: 10,
  right: 10,
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  // border: "2px solid",
  // borderColor: theme.palette.primary.main,
  borderRadius: "20px",
  boxShadow: 24,
  padding: theme.spacing(4),
  [theme.breakpoints.down("sm")]: {
    width: "70%",
    padding: theme.spacing(2),
  },
}));