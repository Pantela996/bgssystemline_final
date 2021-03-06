import React, { useState, useEffect } from "react";
import { Link } from "gatsby-plugin-react-intl";
import LanguageSelector from "./language-selector";
import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { navLinks } from "../../utils/constants";
// @ts-ignore
import t from "@translate";
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

const Header = () => {
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
        <Link to="/" onClick={() => setMenuOpen(false)}>
          <img src="/bgs-logo.svg" alt="BGS logo" />
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
        <MobileMenuBtn onClick={() => setMenuOpen((prevState) => !prevState)}>
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

export default Header;
