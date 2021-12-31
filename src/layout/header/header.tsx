import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby-plugin-react-intl";
import LanguageSelector from "../language-selector";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { navLinks } from "../../utils/constants";
import t from "../../utils/translate";
import {
  Container,
  hamburgerClass,
  hamburgerOpenClass,
  HeaderRoot,
  MobileMenuBtn,
  Nav,
  navLinkActiveClass,
  navOpenClass,
  rootLockedClass,
} from "./headerStyles";

interface HeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const theme = useTheme();

  const isBigScreen = useMediaQuery(theme.breakpoints.up("md"));
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add(rootLockedClass);
    } else {
      document.body.classList.remove(rootLockedClass);
    }
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen && isBigScreen) {
      setMenuOpen(false);
    }
  }, [isBigScreen]);

  return (
    <HeaderRoot>
      <Container>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
          onClick={() => setMenuOpen(false)}
        >
          <StaticImage
            src="../../assets/images/logo-title.png"
            formats={["auto", "webp", "avif"]}
            alt="Digitarch logo"
            layout="fixed"
            placeholder="blurred"
            // height={53}
            width={200}
          />
        </Link>
        <Nav className={menuOpen && navOpenClass}>
          <ul>
            {navLinks.map((navLink) => (
              <li key={`navlink-key--${navLink.route}`}>
                <Link
                  to={navLink.route}
                  activeClassName={navLinkActiveClass}
                  onClick={() => setMenuOpen(false)}
                >
                  <Typography>{t(navLink.text)}</Typography>
                </Link>
              </li>
            ))}
          </ul>
        </Nav>

        <LanguageSelector />
        <MobileMenuBtn onClick={() => setMenuOpen(!menuOpen)}>
          <div
            className={`${hamburgerClass} ${
              menuOpen ? hamburgerOpenClass : ""
            }`}
          />
        </MobileMenuBtn>
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