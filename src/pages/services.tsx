import React from "react";
import Seo from "../components/seo";
import { Container } from "@mui/material";
// @ts-ignore
import t from "@translate";

export default function Services() {
  return (
    <>
      <Seo pageTitle="Services" />
      <Container>
        <h1>{t("pages.services.title")}</h1>
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
