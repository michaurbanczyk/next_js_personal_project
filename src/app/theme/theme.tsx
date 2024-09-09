"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      dark: "#f1f1f1",
      main: "#6f7173",
      light: "#d4d4d5",
    },
    secondary: {
      main: "#b2b5b8",
    },
    common: {
      black: "black",
      white: "#dee2e6",
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    button: {
      textTransform: "none",
      fontWeight: "800",
    },
  },
});

export default theme;
