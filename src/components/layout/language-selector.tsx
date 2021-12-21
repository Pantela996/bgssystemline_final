import React from "react";
import { IntlContextConsumer, changeLocale } from "gatsby-plugin-react-intl";

const languageName = {
  en: "English",
  sr: "Српски",
};

export default function LanguageSelector() {
  return (
    <div className={""} data-label="language-selector">
      <ul>
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) =>
            languages.map((language) => (
              <li key={language}>
                <a
                  onClick={() => changeLocale(language)}
                  style={{
                    color: currentLocale === language ? `yellow` : `white`,
                    margin: 10,
                    textDecoration: `underline`,
                    cursor: `pointer`,
                  }}
                >
                  {languageName[language]}
                </a>
              </li>
            ))
          }
        </IntlContextConsumer>
      </ul>
    </div>
  );
}
