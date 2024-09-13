import { alpha, styled } from "@mui/system";
import Box from "@mui/material/Box";

export const StyledBox = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  width: "90%",
  margin: "20px auto",
  padding: "20px",
  backgroundColor: alpha(theme.palette.primary.light, 0.9),
  borderRadius: "4px",
}));
