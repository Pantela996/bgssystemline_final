import * as React from "react";
import { Container } from "@mui/material";
// @ts-ignore
import t from "@translate";
import Seo from "../components/seo";
import Title from "../components/title";

const NotFoundPage = () => (
  <>
    <Seo
      pageTitle={t("pages.404.title")}
      description={t("pages.404.seoDescription")}
    />
    <Container>
      <Title>404: {t("pages.404.title")}</Title>
      <p>{t("pages.404.message")}</p>
    </Container>
  </>
);

export default NotFoundPage;
