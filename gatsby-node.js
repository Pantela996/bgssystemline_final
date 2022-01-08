const path = require(`path`);
const { productRoutePrefix } = require(`./src/utils/constantsPlain`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Query for all products in Shopify
  const result = await graphql(`
    query {
      allShopifyProduct {
        edges {
          node {
            title
            handle
            variants {
              shopifyId
            }
            priceRangeV2 {
              maxVariantPrice {
                amount
              }
            }
            description
            images {
              src
            }
          }
        }
      }
    }
  `);

  // Iterate over all products and create a new page using a template
  // The product "handle" is generated automatically by Shopify
  result.data.allShopifyProduct.edges.forEach(({ node }) => {
    createPage({
      path: `${productRoutePrefix}${node.handle}`,
      component: path.resolve(`./src/templates/product.tsx`),
      context: {
        product: node,
      },
    });
  });
};
