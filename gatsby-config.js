require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `BGS System Line`,
    description: `BGS Description`, //TODO
    author: `milos & milos`, //TODO
    siteUrl: `https://www.bgssystemline.com/`, //TODO
  },
  plugins: [
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: "./src", // <- will be used as a root dir
        aliases: {
          "@components": "./components", // <- will become ./src/components
          "@translate": "./components/translate",
          // static: {
          //   root: "./public", // <- will used as this alias' root dir
          //   alias: "./static", // <- will become ./public/static
          // },
        },
      },
    },
    `gatsby-plugin-material-ui`, // https://github.com/hupe1980/gatsby-theme-material-ui/tree/master/packages/gatsby-material-ui-components
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout/index.ts`),
      },
    },
    `gatsby-plugin-graphql-codegen`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-react-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`en`, `sr`],
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
        redirectDefaultLanguageToRoot: true,
        // paths that you don't want to genereate locale pages, example: ["/dashboard/","/test/**"], string format is from micromatch https://github.com/micromatch/micromatch
        // ignoredPaths: [],
        fallbackLanguage: `en`,
      },
    },
    // allows users to add your site to their home screen
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS //TODO`,
        short_name: `GJS //TODO`,
        start_url: `/`,
        background_color: `#663399`, //TODO
        theme_color: `#a2466c`, //TODO
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/logo/bgs-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
};
