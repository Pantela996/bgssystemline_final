import * as React from "react";
import { Link } from "gatsby-plugin-react-intl";
import { StaticImage } from "gatsby-plugin-image";
import { Container } from "@mui/material";

import t from "../utils/translate";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <>
      <Seo pageTitle="Home" />
      <Container>
        <h1>{t("pages.home.title")}</h1>
        <StaticImage
          src="../assets/images/gatsby-astronaut.png"
          width={300}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
        <p>
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
        </p>
      </Container>
    </>
  );
};

export default IndexPage;
