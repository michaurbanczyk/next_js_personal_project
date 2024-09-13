import { alpha, styled } from "@mui/system";
import AppBar from "@mui/material/AppBar";

export const StyledAppbar = styled(AppBar)(({ theme }) => ({
  backgroundColor: alpha(theme.palette.primary.main, 0.3),
}));
