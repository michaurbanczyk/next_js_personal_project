import { alpha, styled } from "@mui/system";
import { Paper } from "@mui/material";

export const StyledCard = styled(Paper)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.light, 0.9),
  textAlign: "center",
  height: "300px",
  color: theme.palette.text.secondary,
  ":hover": {
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
  },
}));

export const StyledHeaderDiv = styled("div")(({ theme }) => ({
  textAlign: "left",
  padding: "10px",
  display: "flex",
  alignItems: "center",
  backgroundColor: alpha(theme.palette.primary.main, 0.3),
  borderRadius: "4px",
  borderBottomLeftRadius: "0px",
  borderBottomRightRadius: "0px",
}));

export const StyledHeaderTextDiv = styled("div")(({ theme }) => ({
  paddingLeft: "10px",
  display: "flex",
  textAlign: "left",
  flexDirection: "column",
}));
