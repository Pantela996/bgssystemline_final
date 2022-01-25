import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-react-intl";
import { Button as ButtonMui, styled } from "@mui/material";

const RootDiv = styled("section")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "80%",
}));

const flagWidth = "33px";
const flagSidePadding = "5px";
const Button = styled(ButtonMui)(({ theme }) => ({
  color: "white", //theme.palette.textDark,
  cursor: "pointer",
  textTransform: "none",
  fontWeight: "bold",
  height: "100%",
  width: `calc(${flagWidth} + ${flagSidePadding} * 2)`,
  maxWidth: `calc(${flagWidth} + ${flagSidePadding} * 2)`,
  minWidth: `calc(${flagWidth} + ${flagSidePadding} * 2)`,
  padding: `0 ${flagSidePadding}`,
  transition: "opacity 200ms",
  display: "flex",
  "& img": {
    alignSelf: "center",
    margin: 0,
  },
}));

export default function LanguageSelector() {
  return (
    <RootDiv data-label="language-selector">
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map((language) => (
            <Button
              key={language}
              onClick={() => changeLocale(language)}
              variant="text"
              size="small"
              style={{
                opacity: currentLocale === language ? 1 : 0.6,
              }}
            >
              <img
                width={flagWidth}
                src={`/flags/${language}.png`}
                alt={`${language} language flag`}
              />
            </Button>
          ))
        }
      </IntlContextConsumer>
    </RootDiv>
  );
}
