import React from "react";
import PropTypes from "prop-types";
import { TransitionViews } from "gatsby-plugin-transitions";
import "./layout.css";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Header from "./header";
import Footer from "./footer";
import CombinedProviders from "./CombinedProviders";

const RootDiv = styled(Box)(({ theme }) => ({
  ...theme.typography.body1,
  minHeight: "100%",
  minWidth: "100%",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
}));

const WrapperMain = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  flexGrow: 1,
}));

const Main = styled("main")(({ theme }) => ({
  minHeight: "100%",
  paddingBottom: theme.spacing(7),
}));

const Layout = ({ children, location }) => {
  return (
    <CombinedProviders location={location}>
      <RootDiv>
        <Header />
        <WrapperMain>
          <Main>
            <TransitionViews>{children}</TransitionViews>
          </Main>
          <Footer />
        </WrapperMain>
      </RootDiv>
    </CombinedProviders>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
