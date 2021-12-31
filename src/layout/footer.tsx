import React from "react";
import { styled, Container, Grid, Typography } from "@mui/material";
import t from "../utils/translate";
import { Link } from "gatsby-plugin-react-intl";
import { navLinks } from "../utils/constants";

const FooterRoot = styled("footer")(({ theme }) => ({
  backgroundColor: "gray",
  paddingTop: theme.spacing(2),
}));
const Section = styled("section")(({ theme }) => ({
  display: "flex",
}));

const navLinkActiveClass = "navlink--active";
const Nav = styled("nav")(({ theme }) => ({
  // paddingBottom: theme.spacing(1),
  "& ul": {
    listStyleType: "none",
    margin: 0,
  },
  "& li": {
    margin: 0,
  },
  "& a": {
    textDecoration: "none",
    textTransform: "",
    [`&.${navLinkActiveClass}`]: {
      textDecoration: "underline",
    },
    "& > p": {
      padding: theme.spacing(1),
      margin: 0,
      marginLeft: theme.spacing(0.5),
      "&:first-element": {
        marginLeft: 0,
      },
    },
  },
}));
interface FooterProps {
  siteTitle: string;
}
const Footer = ({ siteTitle }: FooterProps) => {
  return (
    <FooterRoot>
      <Container>
        <Grid flexDirection="column">
          <Section>logo</Section>
          <Section>
            <Typography>{siteTitle}</Typography>
            <div>
              <ul>
                <li>+381 64 196 39 86</li>
                <li>Beograd, Srbija</li>
                <li>Matavuljeva 5</li>
                <li>bgsystemline@gmail.com</li>
              </ul>
            </div>
          </Section>
          <Section>
            <Typography>Quick Links</Typography>
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
          <Section>
            <Typography>Business Hours</Typography>
            <div>ScheduleIcon: 00-24h</div>
          </Section>
        </Grid>
      </Container>
      <Container>
        &copy; {new Date().getFullYear()} {siteTitle} |{" "}
        {t("global.footer.allRightsReserved")}
      </Container>
    </FooterRoot>
  );
};
export default Footer;
