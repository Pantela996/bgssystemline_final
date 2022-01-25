import React from "react";
import Seo from "../components/seo";
import { Container } from "@mui/material";
// @ts-ignore
import t from "@translate";
import Title from "../components/title";

export default function Services() {
  return (
    <>
      <Seo pageTitle="Services" />
      <Container>
        <Title>{t("pages.services.title")}</Title>
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
