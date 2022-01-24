// require("dotenv").config();
// const path = require(`path`);
// const { productRoutePrefix } = require(`./src/utils/constantsPlain`);
// // const _graphqlRequest = require("graphql-request");

// exports.createPages = async ({ graphql, actions: { createPage } }) => {
//   const requestQuery = `
//   query {
//     allShopifyProduct {
//       edges {
//         node {
//           title
//           handle
//           variants {
//             shopifyId
//           }
//           priceRangeV2 {
//             maxVariantPrice {
//               amount
//             }
//           }
//           description
//           images {
//             src
//           }
//         }
//       }
//     }
//   }
// `;
//   const result = await graphql(requestQuery);
//   // Iterate over all products and create a new page using a template
//   // The product "handle" is generated automatically by Shopify
//   result.data.allShopifyProduct.edges.forEach(({ node }) => {
//     createPage({
//       path: `${productRoutePrefix}${node.handle}`,
//       component: path.resolve(`./src/templates/product.tsx`),
//       context: {
//         product: node,
//       },
//     });
//   });
// };
