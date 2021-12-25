import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-react-intl";
import { Button as ButtonMui, styled } from "@mui/material";

const languageName = {
  en: "English",
  sr: "Српски",
};

const RootDiv = styled("section")(({ theme }) => ({
  // paddingBottom: theme.spacing(1),
}));
const Button = styled(ButtonMui)(({ theme }) => ({
  // paddingBottom: theme.spacing(1),
  cursor: "pointer",
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
                color: currentLocale === language ? `yellow` : `white`,
              }}
            >
              {languageName[language]}
            </Button>
          ))
        }
      </IntlContextConsumer>
    </RootDiv>
  );
}
