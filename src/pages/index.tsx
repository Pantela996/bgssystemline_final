import * as React from "react";
// import { Link } from "gatsby-plugin-react-intl";
import { Container, styled } from "@mui/material";

// @ts-ignore
import t from "@translate";
import Seo from "../components/seo";
import Slider from "../components/pages/home/slider";
import Title from "../components/title";

const stats = [30, 1270, 18, 168, 235];

const numberClass = "list-number";
const Ul = styled("ul")(({ theme }) => ({
  marginTop: theme.spacing(7),
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
  padding: 0,
  margin: 0,

  "& li": {
    margin: 0,
    display: "flex",
    flexDirection: "column",
    "& div": {
      textAlign: "center",
    },
  },
  [`& .${numberClass}`]: {
    fontSize: "2rem",
    fontWeight: "bold",
  },
}));

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
        <Ul>
          {stats.map((stat, i) => (
            <li>
              <div className={numberClass}>
                {stat}
                {i === 0 && "%"}{" "}
              </div>
              <div>{t(`pages.home.stats.stat${i}`)}</div>
            </li>
          ))}
        </Ul>
      </Container>
    </>
  );
};

export default IndexPage;
