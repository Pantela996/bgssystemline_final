import React from "react";
// @ts-ignore
import t from "@translate";
import Seo from "../components/seo";
import { MainBottomPadding } from "../layout/layout";
import { Container, styled } from "@mui/material";
import Title from "../components/title";
import Map from "../components/pages/contact/map";
import SideContainer from "../components/sideContainer";

const FullScreen = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "block",
  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const SplitScreen = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("md")]: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridAutoRows: "100%",
    height: "100%",
    minHeight: "70vh",
    marginBottom: `-${MainBottomPadding}`,
  },
}));

const MapContainer = styled("div")(({ theme }) => ({
  height: 400,
  width: "100%",
  position: "relative",
  marginBottom: `-${MainBottomPadding}`,
}));

const ContactContent = () => (
  <>
    <Title>{t("pages.contact.title")}</Title>
    <p>{t("pages.contact.text")}</p>
    <ul>
      <li>{t("global.contact.contactNumber")}</li>
      <li>{t("global.contact.street")}</li>
      <li>{t("global.contact.zipCity")}</li>
      <li>{t("global.contact.country")}</li>
      <li>{t("global.contact.contactPerson")}</li>
      <li>{t("global.contact.contactEmail")}</li>
    </ul>
  </>
);

export default function Contact() {
  return (
    <>
      <Seo pageTitle="Contact" />
      {/* mobile */}
      <FullScreen>
        <Container>
          <ContactContent />
        </Container>
        <MapContainer>
          <Map />
        </MapContainer>
      </FullScreen>

      {/* desktop */}
      <SplitScreen>
        <Map />
        <SideContainer>
          <ContactContent />
        </SideContainer>
      </SplitScreen>
    </>
  );
}
