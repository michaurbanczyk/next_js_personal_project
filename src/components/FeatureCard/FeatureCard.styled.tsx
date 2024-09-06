import { styled } from "@mui/system";

export const StyledFeatureCard = styled("div")({
  borderRadius: "1rem",
  boxShadow:
    "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;",
  padding: "20px 20px",
  ":hover": {
    backgroundColor: "gray",
  },
});
