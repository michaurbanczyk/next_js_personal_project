"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    common: {
      black: "#000000",
      white: "#FFFFFF",
    },
    primary: {
      dark: "#405a72",
      main: "#5c80a3",
      light: "#dee6ed",
    },
    secondary: {
      dark: "#44312e",
      main: "#72524d",
      light: "#b9a9a6",
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    button: {
      textTransform: "none",
      fontWeight: "600",
    },
  },
});

export default theme;
