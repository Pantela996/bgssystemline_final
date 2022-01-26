import React from "react";
import { styled } from "@mui/material";
import { MainBottomPadding } from "../layout/layout";

const SplitScreenDiv = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "grid",
    gridAutoRows: "100%",
    height: "100%",
    minHeight: "70vh",
    marginBottom: `-${MainBottomPadding}`,
  },
}));

interface SplitScreenProps {
  gridTemplateColumns?: string;
  children: JSX.Element | JSX.Element[] | string;
}

export default function SplitScreen({
  gridTemplateColumns = "repeat(2, 1fr)",
  children,
}: SplitScreenProps) {
  return (
    <SplitScreenDiv
      style={{
        gridTemplateColumns,
      }}
    >
      {children}
    </SplitScreenDiv>
  );
}
