// require("dotenv").config();
const path = require(`path`);
const { serviceSlugs } = require(`./src/utils/constantsPlain`);

exports.createPages = async ({ actions: { createPage } }) => {
  serviceSlugs.forEach((slug, slugIndex) => {
    createPage({
      path: `/services/${slug}`,
      component: path.resolve(`./src/templates/service.tsx`),
      context: {
        slugIndex,
      },
    });
  });
};
