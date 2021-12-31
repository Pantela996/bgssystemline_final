import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Container, Typography } from "@mui/material";
import t from "../../utils/translate";
import { Link } from "gatsby-plugin-react-intl";
import { navLinks } from "../../utils/constants";
import {
  ContentWrap,
  footerAreas,
  FooterOfFooter,
  FooterRoot,
  LogoWrap,
  Nav,
  navLinkActiveClass,
  Section,
  SectionTitleClass,
} from "./footerStyles";

interface FooterProps {
  siteTitle: string;
}
const Footer = ({ siteTitle }: FooterProps) => {
  return (
    <FooterRoot>
      <Container>
        <ContentWrap>
          <Section sx={(theme) => ({ gridArea: footerAreas.address })}>
            <Typography
              component="h4"
              variant="h5"
              className={SectionTitleClass}
            >
              {siteTitle}
            </Typography>
            <Nav>
              <ul>
                <li>+381 64 196 39 86</li>
                <li>Beograd, Srbija</li>
                <li>Matavuljeva 5</li>
                <li>bgsystemline@gmail.com</li>
              </ul>
            </Nav>
          </Section>
          <Section sx={(theme) => ({ gridArea: footerAreas.links })}>
            <Typography
              component="h4"
              variant="h5"
              className={SectionTitleClass}
            >
              Quick Links
            </Typography>
            <Nav>
              <ul>
                {navLinks.map((navLink) => (
                  <li key={`navlink-key--${navLink.route}`}>
                    <Link
                      to={navLink.route}
                      activeClassName={navLinkActiveClass}
                    >
                      <Typography>{t(navLink.text)}</Typography>
                    </Link>
                  </li>
                ))}
              </ul>
            </Nav>
          </Section>
          <Section sx={(theme) => ({ gridArea: footerAreas.hours })}>
            <Typography
              component="h4"
              variant="h5"
              className={SectionTitleClass}
            >
              Business Hours
            </Typography>
            <Typography>ScheduleIcon: 00-24h</Typography>
          </Section>
          <Section sx={(theme) => ({ gridArea: footerAreas.logo })}>
            <LogoWrap>
              <StaticImage
                src="../../assets/images/logo-compact.png"
                formats={["auto", "webp", "avif"]}
                alt="Digitarch logo"
                layout="fullWidth"
                placeholder="blurred"
                height={350}
              />
            </LogoWrap>
          </Section>
        </ContentWrap>
      </Container>
      <Container>
        <FooterOfFooter>
          &copy; {new Date().getFullYear()} {siteTitle} |{" "}
          {t("global.footer.allRightsReserved")}
        </FooterOfFooter>
      </Container>
    </FooterRoot>
  );
};
export default Footer;
