import { styled } from "@mui/system";
import Typography from "@mui/material/Typography";
import AvatarGroup from "@mui/material/AvatarGroup";
import Box from "@mui/material/Box";

export const StyledBoxWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const StyledWrapper = styled(`div`)(({ theme }) => ({
  position: "fixed",
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
