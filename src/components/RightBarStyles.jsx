import { styled } from "@mui/system";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AvatarGroup from "@mui/material/AvatarGroup";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

export const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const StyledContainerRightBar = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  position: "sticky",
  paddingLeft: "0px!important",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const StyledWrapper = styled(`div`)(({ theme }) => ({
  position: 'fixed', 
  display: "flex",
  flexDirection: "column",
  maxWidth: 300,
  width: "100%",
  [theme.breakpoints.down("lg")]: {
    display: "flex",
    justifyContent: "center",
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 500,
  color: theme.palette.primary.main,
}));

export const StyledAvatarGroup = styled(AvatarGroup)(({ theme }) => ({
  alignItems: "flex-start",
  justifyContent: "flex-end",
  marginBottom: 20,
}));

export const StyledLink = styled(Link)(({ theme }) => ({
  marginBottom: 5,
  fontSize: 16,
  color: theme.palette.primary.main,
  cursor: "pointer",
  textDecoration: "none",
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  maxWidth: 160,
  flexWrap: "wrap",
  rowGap: "0",
  columnGap: "10px",
}));
