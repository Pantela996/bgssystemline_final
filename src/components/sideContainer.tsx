import React from "react";
import { styled } from "@mui/material";

// used only for desktop screens (medium and up)
const RightSideContainer = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "block",
    marginRight: "auto",
    padding: "0 24px",
    width: "100%",
    maxWidth: 600,
  },
}));

interface SideContainerProps {
  left?: boolean;
  children: JSX.Element | JSX.Element[] | string;
}

export default function SideContainer({
  left = false,
  children,
}: SideContainerProps) {
  return (
    <RightSideContainer
      style={{
        marginLeft: left ? "auto" : 0,
        marginRight: !left ? "auto" : 0,
      }}
    >
      {children}
    </RightSideContainer>
  );
}
