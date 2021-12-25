import * as React from "react";
import { PageProps, graphql } from "gatsby";
import { Link } from "gatsby-plugin-react-intl";
import { Container } from "@mui/material";

import Seo from "../components/seo";

type DataProps = {
  site: {
    buildTime: string;
  };
};

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <>
    <Seo pageTitle="Using TypeScript" />
    <Container>
      <h1>Gatsby supports TypeScript by default!</h1>
      <p>
        You're currently on the page "{path}" which was built on{" "}
        {data.site.buildTime}.
      </p>
      <p>
        To learn more, head over to our{" "}
        <a href="https://www.gatsbyjs.com/docs/typescript/">
          documentation about TypeScript
        </a>
        .
      </p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </>
);

export default UsingTypescript;

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`;
