import Typography from "@mui/material/Typography";
import { styled, alpha } from "@mui/system";
import { InputBase } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { Cancel } from "@mui/icons-material";

export const LogoLg = styled(Typography)(({ theme }) => ({
  display: "none",
  // больше 600px показывать этот заголовок
  [theme.breakpoints.up("sm")]: {
    display: "block",
  },
}));

export const LogoSm = styled(Typography)(({ theme }) => ({
  display: "block",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const StyleDiv = styled("div", {
  openProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "50%",
  [theme.breakpoints.down("sm")]: {
    display: open ? "flex" : "none",
    width: "80%",
  },
  // [theme.breakpoints.up("sm")]: {
  //   marginLeft: theme.spacing(3),
  //   width: "auto",
  // },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  display: "block",
  // больше 600px показывать этот заголовок
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

export const StyledCancel = styled(Cancel)(({ theme }) => ({
  height: "100%",
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  top: 0,
  right: "8px",
  zIndex: "1120",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
