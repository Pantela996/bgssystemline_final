import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-react-intl";
import { Button as ButtonMui, styled } from "@mui/material";

const languageNames = {
  en: "en",
  sr: "срб",
} as const;

const RootDiv = styled("section")(({ theme }) => ({
  // paddingBottom: theme.spacing(1),
}));
const Button = styled(ButtonMui)(({ theme }) => ({
  // paddingBottom: theme.spacing(1),
  color: "white", //theme.palette.textDark,
  cursor: "pointer",
  textTransform: "none",
  fontWeight: "bold",
  minWidth: 40,
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
              {languageNames[language]}
            </Button>
          ))
        }
      </IntlContextConsumer>
    </RootDiv>
  );
}
