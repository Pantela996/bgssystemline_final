import React from "react";
import { styled } from "@mui/material";

const H1 = styled("h1")(({ theme }) => ({
  color: "black", //theme.palette.textDark,
  textAlign: "center",
  marginTop: theme.spacing(7),
  marginBottom: theme.spacing(4),
}));

export default function Title({ children }) {
  return <H1>{children}</H1>;
}
