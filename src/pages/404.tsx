import * as React from "react";
import { Container } from "@mui/material";
// @ts-ignore
import t from "@translate";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <>
    <Seo pageTitle="404: Not found" />
    <Container>
      <h1>404: {t("pages.404.title")}</h1>
      <p>{t("pages.404.message")}</p>
    </Container>
  </>
);

export default NotFoundPage;
