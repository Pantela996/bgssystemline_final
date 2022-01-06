import React from "react";
import PropTypes from "prop-types";
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions";
import "./layout.css";
import { themeDefault } from "./layoutThemes";
import { ThemeProvider } from "@mui/material/styles";
import { styled } from "@mui/material/styles";

import Box from "@mui/material/Box";
import Header from "./header";
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
}));

const Main = styled("main")(({ theme }) => ({
  minHeight: "100%",
  paddingBottom: theme.spacing(7),
}));

const Layout = ({ children, location }) => {
  return (
    <ThemeProvider theme={themeDefault}>
      <TransitionProvider
        location={location}
        mode="successive"
        enter={{
          opacity: 0,
          transform: "translate3d(0,20vh,0) scale3d(1, 1, 1)",
          config: {
            mass: 1,
            tension: 210,
            friction: 20,
            clamp: true,
          },
          onRest: () => {
            // console.log("Hello, World!");
          },
        }}
        usual={{
          opacity: 1,
          transform: "translate3d(0vh,0vh,0) scale3d(1, 1, 1)",
        }}
        leave={{
          opacity: 0,
          transform: "translate3d(0vh,0vh,0) scale3d(0.8, 0.8, 1)",
          config: {
            duration: 300,
          },
        }}
      >
        <RootDiv>
          <Header />
          <WrapperMain>
            <Main>
              <TransitionViews>{children}</TransitionViews>
            </Main>
            <Footer />
          </WrapperMain>
        </RootDiv>
      </TransitionProvider>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
