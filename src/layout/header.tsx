import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby-plugin-react-intl";
import LanguageSelector from "./language-selector";
import { styled, Typography, Container as ContainerMui } from "@mui/material";
import { navLinks } from "../utils/constants";

const HeaderRoot = styled("header")(({ theme }) => ({
  backgroundColor: "gray",
}));

const Container = styled(ContainerMui)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const navLinkActiveClass = "navlink--active";
const Nav = styled("nav")(({ theme }) => ({
  // paddingBottom: theme.spacing(1),
  "& ul": {
    listStyleType: "none",
    margin: 0,
    display: "flex",
  },
  "& li": {
    margin: 0,
  },
  "& a": {
    textDecoration: "none",
    textTransform: "uppercase",
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
interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => {
  return (
    <HeaderRoot>
      <Container>
        <Typography variant="h3" component="h3">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            LOGO
          </Link>
        </Typography>
        <Nav>
          <ul>
            {navLinks.map((navLink) => (
              <li key={`navlink-key--${navLink.route}`}>
                <Link to={navLink.route} activeClassName={navLinkActiveClass}>
                  <Typography>{navLink.text}</Typography>
                </Link>
              </li>
            ))}
          </ul>
        </Nav>

        <LanguageSelector />
      </Container>
    </HeaderRoot>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
