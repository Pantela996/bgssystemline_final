import * as React from "react";
// import { Link } from "gatsby-plugin-react-intl";
import { Container } from "@mui/material";

// @ts-ignore
import t from "@translate";
import Seo from "../components/seo";
import Slider from "../components/pages/home/slider";

const IndexPage = () => {
  return (
    <>
      <Seo pageTitle="Home" />
      <Slider />
      <Container>
        <h1>{t("pages.home.title")}</h1>
      </Container>
    </>
  );
};

export default IndexPage;
