import { styled } from "@mui/system";
import { Button, Grid, Paper } from "@mui/material";
import Box from "@mui/material/Box";

export const StyledButton = styled(Button)(({ theme }) => ({
  color: theme.palette.common.white,
  borderColor: theme.palette.primary.main,
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.black,
    borderColor: theme.palette.primary.main,
  },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: "80px 15%",
}));

export const StyledGridItem = styled(Grid)(({ theme }) => ({
  border: "1px solid black",
}));

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.light,
  textAlign: "center",
  height: "300px",
  color: theme.palette.text.secondary,
  ":hover": {
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
}));
