import React from "react";
import Seo from "../components/seo";
import { Container, styled } from "@mui/material";
// @ts-ignore
import t from "@translate";
import Title from "../components/title";

const TeamWrap = styled("div")(({ theme }) => ({
  display: "grid",
  gap: "1rem",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gridAutoRows: "200px",
  marginTop: theme.spacing(7),
  "& > div": {
    background: "black",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default function About() {
  const paragraphs: string[] = JSON.parse(t("pages.about.content"));
  const teamMembers: string[] = JSON.parse(t("pages.about.teamMembers"));
  return (
    <>
      <Seo pageTitle="About" />
      <Container>
        <Title>{t("pages.about.title")}</Title>
        {paragraphs.map((pText, pi) => (
          <p key={pi}>{pText}</p>
        ))}

        <TeamWrap>
          {teamMembers.map((member, mi) => (
            <div key={mi}>
              {member} {mi + 1}.
            </div>
          ))}
        </TeamWrap>
      </Container>
    </>
  );
}
