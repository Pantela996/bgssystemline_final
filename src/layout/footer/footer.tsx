import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Typography } from "@mui/material";
// @ts-ignore
import t from "@translate";
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

const Footer = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const siteTitle = data.site.siteMetadata?.title || "";
  return (
    <FooterRoot>
      <Container>
        <ContentWrap>
          <Section style={{ gridArea: footerAreas.address }}>
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
          <Section style={{ gridArea: footerAreas.links }}>
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
          <Section style={{ gridArea: footerAreas.hours }}>
            <Typography
              component="h4"
              variant="h5"
              className={SectionTitleClass}
            >
              Business Hours
            </Typography>
            <Typography>09-17h</Typography>
          </Section>
          <Section style={{ gridArea: footerAreas.logo }}>
            <LogoWrap>
              <StaticImage
                src="../../assets/images/logo/bgs-logo.svg"
                formats={["auto", "webp", "avif"]}
                alt="BGS logo"
                layout="fullWidth"
                placeholder="blurred"
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
