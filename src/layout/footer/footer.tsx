import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Container, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PosterrizamSvg from "./posterrizamSvg";
// @ts-ignore
import t from "@translate";
import { Link } from "gatsby-plugin-react-intl";
import { navLinks } from "../../utils/constants";
import {
  ContentWrap,
  footerAreas,
  ExternalLinksWrap,
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
                <li>{t("global.contact.contactNumber")}</li>
                <li>{t("global.contact.street")}</li>
                <li>{t("global.contact.zipCity")}</li>
                <li>{t("global.contact.country")}</li>
                <li>{t("global.contact.contactEmail")}</li>
              </ul>
            </Nav>
          </Section>
          <Section style={{ gridArea: footerAreas.links }}>
            <Typography
              component="h4"
              variant="h5"
              className={SectionTitleClass}
            >
              {t("global.footer.quickLinks")}
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
              {t("global.footer.businessHours")}
            </Typography>
            <Typography>09-17{t("global.footer.hourShort")}</Typography>
          </Section>
          <Section style={{ gridArea: footerAreas.logo }}>
            <LogoWrap>
              <img src="/bgs-logo.svg" alt="BGS logo" />
            </LogoWrap>
          </Section>
        </ContentWrap>
      </Container>
      <Container>
        {/* // 
  // 
  // 
  // 
  // F, in, Insta ikonice u footeru stranice, ispod Bogdanovog email. Posterizam moze odmah pored toga. On nam je partner, saradnik tako da sta znam, ne bi bilo lose ako moze da se vidi njegov logo kao link. */}
        <ExternalLinksWrap>
          <li>
            <a
              href="https://www.linkedin.com/company/bgs-system-line/"
              rel="noreferrer"
              target="_blank"
            >
              <LinkedInIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/BGS-System-Line-113514583708281"
              rel="noreferrer"
              target="_blank"
            >
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/bgssystemline/"
              rel="noreferrer"
              target="_blank"
            >
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a
              href="https://www.posterrizam.com/"
              rel="noreferrer"
              target="_blank"
            >
              <PosterrizamSvg />
            </a>
          </li>
        </ExternalLinksWrap>
        <FooterOfFooter>
          &copy; {new Date().getFullYear()} {siteTitle} |{" "}
          {t("global.footer.allRightsReserved")}
        </FooterOfFooter>
      </Container>
    </FooterRoot>
  );
};
export default Footer;
