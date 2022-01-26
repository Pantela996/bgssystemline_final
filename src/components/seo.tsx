/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { useIntl } from "gatsby-plugin-react-intl";

// type ImageType = {
//   src: string;
//   height: number;
//   width: number;
// };

type SeoProps = {
  pageTitle: string;
  description?: string;
  meta?: { property: string; content: any; name?: undefined }[];
  imageSrc?: string;
};

function Seo({
  pageTitle,
  description = "",
  imageSrc = "",
  meta = [],
}: SeoProps) {
  const intl = useIntl();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteImage
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const ogImage = imageSrc || site.siteMetadata.siteImage;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <Helmet
      htmlAttributes={{
        lang: intl.locale,
      }}
      title={pageTitle}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          name: `image`,
          content: ogImage,
        },
        {
          property: `og:title`,
          content: pageTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          name: `og:image`,
          content: ogImage,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: pageTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
      link={[
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
      ]}
    />
  );
}

export default Seo;
