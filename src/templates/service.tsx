import React from "react";
import Seo from "../components/seo";
import { Container } from "@mui/material";
// @ts-ignore
import t from "@translate";
import Title from "../components/title";

export default function Service({ pageContext }) {
  const { slugIndex } = pageContext;
  return (
    <>
      <Seo
        pageTitle={t(`global.services.service${slugIndex}.title`)}
        description={t(`global.services.service${slugIndex}.cardContent`)}
        // imageSrc=""  //TODO
      />
      <Container>
        <Title>{t(`global.services.service${slugIndex}.title`)}</Title>
        <h6>{t(`global.services.service${slugIndex}.quote`)}</h6>
        <h3>{t(`global.services.service${slugIndex}.subtitle`)}</h3>
        <p>{t(`global.services.service${slugIndex}.pageContent`)}</p>
      </Container>
    </>
  );
}
