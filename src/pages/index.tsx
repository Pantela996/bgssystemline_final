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
      <Seo
        pageTitle={t("pages.home.navText")}
        description={t("pages.home.seoDescription")}
      />
      <Slider />
      <Container>
        <Title>{t("pages.home.title")}</Title>

        {/* Sto se samog portfolia tice, ja ne bih apostrofirao, kako je to bilo prethodno uradjeno, da je nesto dnevna soba ili kuhinja, vec bih pokusao ovako da imanujem projekte tipa kako je sad, ali zbog klijenata treba da sakrijem licna imena, prezimena itd. Neki od ovih rendera ce se u finalnoj fazi jos izbaciti, ali nece biti dodataka */}
        <ul>
          <li>
            <span>30%</span>
            <span>Saving from our Value Engineering</span>
          </li>
          <li>
            <span>1270</span>
            <span>Hotel Rooms Executed</span>
          </li>
          <li>
            <span>18</span>
            <span>Nationalities</span>
          </li>
          <li>
            <span>168</span>
            <span>Cumulative Years of Design Experience</span>
          </li>
          <li>
            <span>235</span>
            <span>Manufacturers in our Sourcing Database</span>
          </li>
        </ul>
      </Container>
    </>
  );
};

export default IndexPage;
