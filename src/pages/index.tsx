import * as React from "react";
import { Link } from "gatsby-plugin-react-intl";
import { StaticImage } from "gatsby-plugin-image";
import t from "../utils/translate";
import Layout from "../components/layout/layout";
import Seo from "../components/seo";

const IndexPage = () => {
  return (
    <Layout>
      <Seo pageTitle="Home" />
      <h1>{t("home_title")}</h1>
      <h1>{t("opa")}</h1>
      <p>{t("ups.opala")}</p>
      <p>{t("ups.opalac")}</p>
      <p>Now go build something great.</p>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
      <p>
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
      </p>
    </Layout>
  );
};

export default IndexPage;
