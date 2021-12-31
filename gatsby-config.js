module.exports = {
  siteMetadata: {
    title: `DIGITARCH`,
    description: `DIGITARCH Description`, //TODO
    author: `@gatsbyjs`, //TODO
    siteUrl: `https://www.bgssystemline.com/`, //TODO
  },
  plugins: [
    `gatsby-plugin-material-ui`, // https://github.com/hupe1980/gatsby-theme-material-ui/tree/master/packages/gatsby-material-ui-components
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout/index.ts`),
      },
    },
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
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `sr`],
        // language file path
        defaultLanguage: `en`,
        // option to redirect to `/ko` when connecting `/`
        redirect: true,
        // option for use / as defaultLangauge root path. if your defaultLanguage is `ko`, when `redirectDefaultLanguageToRoot` is true, then it will not generate `/ko/xxx` pages, instead of `/xxx`
        redirectDefaultLanguageToRoot: true,
        // paths that you don't want to genereate locale pages, example: ["/dashboard/","/test/**"], string format is from micromatch https://github.com/micromatch/micromatch
        ignoredPaths: [],
        // option to fallback to the defined language instead of the `defaultLanguage` if the user langauge is not in the list
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
        icon: `src/assets/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
  ],
};
