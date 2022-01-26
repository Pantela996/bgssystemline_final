import React from "react";
import { styled } from "@mui/material";

const H1 = styled("h1")(({ theme }) => ({
  color: "black", //theme.palette.textDark,
  marginTop: theme.spacing(7),
  marginBottom: theme.spacing(4),
}));

interface TitleProps {
  left?: boolean;
  children: JSX.Element | JSX.Element[] | string;
}

export default function Title({ left = false, children }: TitleProps) {
  return (
    <H1
      style={{
        textAlign: left ? "left" : "center",
      }}
    >
      {children}
    </H1>
  );
}
