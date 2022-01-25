import * as React from "react";
// import { Link } from "gatsby-plugin-react-intl";
import { Container } from "@mui/material";

// @ts-ignore
import t from "@translate";
import Seo from "../components/seo";
import Slider from "../components/pages/home/slider";
import Title from "../components/title";

const IndexPage = () => {
  return (
    <>
      <Seo pageTitle="Home" />
      <Slider />
      <Container>
        <Title>{t("pages.home.title")}</Title>
      </Container>
    </>
  );
};

export default IndexPage;
