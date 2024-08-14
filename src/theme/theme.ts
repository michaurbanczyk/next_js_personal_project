"use client";
import { createTheme } from "@mui/material/styles";
import { typography, color } from "@/theme/variables";

const theme = createTheme({
  typography: {
    fontFamily: typography.fontFamily,
    fontSize: 14,
    button: {
      textDecoration: "none",
    },
  },
  palette: {
    background: {
      default: color.background, // Main background color
      paper: "#ffffff", // Background color for paper components
    },
  },
});

export default theme;
