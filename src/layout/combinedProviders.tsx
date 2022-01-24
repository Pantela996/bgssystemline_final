import React from "react";
import PropTypes from "prop-types";
import { TransitionProvider } from "gatsby-plugin-transitions";
import { themeDefault } from "./layoutThemes";
import { ThemeProvider } from "@mui/material/styles";
// import { StoreProvider } from "../context/storeContext";

const CombinedProviders = ({ children, location }) => {
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
          // onRest: () => {},
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
        {/* <StoreProvider> */}
        {children}
        {/* </StoreProvider> */}
      </TransitionProvider>
    </ThemeProvider>
  );
};

CombinedProviders.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};
export default CombinedProviders;
