import { styled } from "@mui/material";

const FullScreen = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "block",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

export default FullScreen;
