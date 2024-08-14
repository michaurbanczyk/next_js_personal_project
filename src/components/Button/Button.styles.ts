import { Button as MuiButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import theme from "@/theme/theme";
import { color } from "@/theme/variables";

export const StyledButton = styled(MuiButton)({
  padding: theme.spacing(0.5),
  borderRadius: theme.spacing(1),
  color: color.white,
  backgroundColor: color.info[700],
  border: `2px solid ${color.info[500]}`,
  "&:hover": {
    color: color.white,
    backgroundColor: color.info[500],
    border: `2px solid ${color.info[700]}`,
  },
  textTransform: "none",
});
