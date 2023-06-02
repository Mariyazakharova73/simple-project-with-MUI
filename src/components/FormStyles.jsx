import { styled } from "@mui/system";
import Box from "@mui/material/Box";

export const StyledForm = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: 20,
}));

export const StyledButtonBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 10,
}));
