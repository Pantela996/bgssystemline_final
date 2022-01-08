import React from "react";
import Seo from "../components/seo";
import { Container } from "@mui/material";
import t from "../components/translate";

export default function About() {
  return (
    <>
      <Seo pageTitle="About" />
      <Container>
        <h1>{t("pages.about.title")}</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
          architecto eveniet pariatur impedit ad maiores commodi, perspiciatis,
          vitae placeat dignissimos voluptate eligendi vel vero labore
          repudiandae provident et reiciendis doloremque.
        </p>
      </Container>
    </>
  );
}
