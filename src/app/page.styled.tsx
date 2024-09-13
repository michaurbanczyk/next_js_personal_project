import { styled } from "@mui/system";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";

export const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
}));

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow:
    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  display: "flex",
  flexDirection: "column",
  padding: "40px",
  width: "50%",
}));
