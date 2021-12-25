import React from "react";
import { styled, Container } from "@mui/material";

const FooterRoot = styled("footer")(({ theme }) => ({
  backgroundColor: "gray",
  paddingTop: theme.spacing(2),
}));

const Footer = () => {
  return (
    <FooterRoot>
      <Container>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </Container>
    </FooterRoot>
  );
};
export default Footer;
