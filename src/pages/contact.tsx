import React from "react";
// @ts-ignore
import t from "@translate";
import Seo from "../components/seo";
import { MainBottomPadding } from "../layout/layout";
import { Container, styled } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import Title from "../components/title";
import Map from "../components/pages/contact/map";
import SideContainer from "../components/sideContainer";
import FullScreen from "../components/fullScreen";
import SplitScreen from "../components/splitScreen";

const MapContainer = styled("div")(({ theme }) => ({
  height: 400,
  width: "100%",
  position: "relative",
  marginBottom: `-${MainBottomPadding}`,
}));

const contactGroupClass = "contact-group";
const ContactGroup = styled("div")(({ theme }) => ({
  // borderTop: `0.25rem double black`,
  // paddingTop: "1rem",
  marginTop: theme.spacing(3),

  [`& .${contactGroupClass}`]: {
    display: "flex",
    "& ul": {
      padding: 0,
      marginLeft: theme.spacing(3),
      listStyle: "none",
    },
    "& li": {
      padding: 0,
      margin: 0,
      listStyle: "none",
    },
  },
}));

const ContactContent = ({ left = false }: { left?: boolean }) => (
  <>
    <Title left={left}>{t("pages.contact.title")}</Title>
    <p>{t("pages.contact.text")}</p>

    <ContactGroup>
      <div className={contactGroupClass}>
        <LocalPhoneIcon />
        <ul>
          <li>{t("global.contact.contactNumber")}</li>
        </ul>
      </div>

      <div className={contactGroupClass}>
        <AlternateEmailIcon />
        <ul>
          <li>{t("global.contact.contactEmail")}</li>
        </ul>
      </div>

      <div className={contactGroupClass}>
        <PersonIcon />
        <ul>
          <li>{t("global.contact.contactPerson")}</li>
        </ul>
      </div>

      <div className={contactGroupClass}>
        <HomeIcon />
        <ul>
          <li>{t("global.contact.street")}</li>
          <li>{t("global.contact.zipCity")}</li>
          <li>{t("global.contact.country")}</li>
        </ul>
      </div>
    </ContactGroup>
  </>
);
const isBrowser = typeof window !== "undefined";

export default function Contact() {
  // https://www.instagram.com/bgssystemline/
  // https://www.linkedin.com/company/bgs-system-line/
  // https://www.facebook.com/BGS-System-Line-113514583708281
  return (
    <>
      <Seo
        pageTitle={t("pages.contact.navText")}
        description={t("pages.contact.seoDescription")}
      />
      {/* mobile */}
      <FullScreen>
        <Container>
          <ContactContent />
        </Container>
        <MapContainer>{isBrowser && <Map />}</MapContainer>
      </FullScreen>

      {/* desktop */}
      <SplitScreen>
        {isBrowser && <Map />}
        <SideContainer>
          <ContactContent left />
        </SideContainer>
      </SplitScreen>
    </>
  );
}
