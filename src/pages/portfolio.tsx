import React from "react";
import Seo from "../components/seo";
import { Container } from "@mui/material";
// @ts-ignore
import t from "@translate";
import Title from "../components/title";

export default function Portfolio() {
  return (
    <div>
      <Seo pageTitle="Portfolio" />
      <Container>
        <Title>{t("pages.portfolio.title")}</Title>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi
          architecto eveniet pariatur impedit ad maiores commodi, perspiciatis,
          vitae placeat dignissimos voluptate eligendi vel vero labore
          repudiandae provident et reiciendis doloremque.
        </p>
        {/* Sto se samog portfolia tice, ja ne bih apostrofirao, kako je to bilo prethodno uradjeno, da je nesto dnevna soba ili kuhinja, vec bih pokusao ovako da imanujem projekte tipa kako je sad, ali zbog klijenata treba da sakrijem licna imena, prezimena itd. Neki od ovih rendera ce se u finalnoj fazi jos izbaciti, ali nece biti dodataka */}
      </Container>
    </div>
  );
}
