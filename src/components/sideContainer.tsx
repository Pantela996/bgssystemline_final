import React from "react";
import { styled } from "@mui/material";

// used only for desktop screens (medium and up)
const SideContainerDiv = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
    marginRight: "auto",
    padding: "0 24px",
    width: "100%",
  },
}));

interface SideContainerProps {
  vwRatio?: number;
  left?: boolean;
  children: JSX.Element | JSX.Element[] | string;
}

export default function SideContainer({
  vwRatio = 0.5,
  left = false,
  children,
}: SideContainerProps) {
  return (
    <SideContainerDiv
      style={{
        marginLeft: left ? "auto" : 0,
        marginRight: !left ? "auto" : 0,
        maxWidth: 1200 * vwRatio,
      }}
    >
      {children}
    </SideContainerDiv>
  );
}
