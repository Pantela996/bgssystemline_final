import React from "react";
import PropTypes from "prop-types";
import { TransitionViews } from "gatsby-plugin-transitions";
import CombinedProviders from "./combinedProviders";

import "./layout.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Header from "./header";
// import { headerHeight } from "./header/headerStyles";
import Footer from "./footer";

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
  // marginTop: headerHeight,
}));

export const MainBottomPadding = "70px";
const Main = styled("main")(({ theme }) => ({
  minHeight: "100%",
  paddingBottom: MainBottomPadding,
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
