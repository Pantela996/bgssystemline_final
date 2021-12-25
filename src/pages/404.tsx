import * as React from "react";
import { Container } from "@mui/material";
import t from "../utils/translate";
import Seo from "../components/seo";

const NotFoundPage = () => (
  <>
    <Seo pageTitle="404: Not found" />
    <Container>
      <h1>404: {t("pages.404.title")}</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </>
);

export default NotFoundPage;
