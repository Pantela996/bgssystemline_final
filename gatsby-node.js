require("dotenv").config();
const path = require(`path`);
const { productRoutePrefix } = require(`./src/utils/constantsPlain`);
// const _graphqlRequest = require("graphql-request");

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const requestQuery = `
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
`;
  const result = await graphql(requestQuery);
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

  // const amount = 10;
  // const requestQuery2 = `query {
  // products(first: ${amount}, sortKey: CREATED_AT, reverse: true) {
  //   edges {
  //     node {
  //       id
  //       title
  //       description
  //       handle
  //       images(first: 1) {
  //         edges {
  //           node {
  //             altText
  //             transformedSrc
  //           }
  //         }
  //       }
  //       priceRange {
  //         minVariantPrice {
  //           amount
  //           currencyCode
  //         }
  //         maxVariantPrice {
  //           amount
  //           currencyCode
  //         }
  //       }
  //       variants(first: 10) {
  //         edges {
  //           node {
  //             id
  //             priceV2 {
  //               amount
  //               currencyCode
  //             }
  //             image {
  //               altText
  //               transformedSrc
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  // }`;
  // try {
  //   // const clientEN = createClient("en");

  //   const createClient = (language = "") => {
  //     const apiVersion = "2022-01";
  //     const shopName = process.env.GATSBY_SHOPIFY_STORE_NAME;
  //     const url = `https://${shopName}.myshopify.com/api/${apiVersion}/graphql.json`;

  //     return new _graphqlRequest.GraphQLClient(url, {
  //       headers: {
  //         "X-Shopify-Storefront-Access-Token":
  //           process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
  //         "Accept-Language": language,
  //       },
  //     });
  //   };
  //   const clientSR = createClient("sr");
  //   // const resultEN = await clientEN.request(requestQuery2);
  //   const resultSR = await clientSR.request(requestQuery);

  //   const createProductPages = (result, language = "") => {
  //     result.products.edges.forEach(({ node }) => {
  //       // console.log(node);
  //       createPage({
  //         path: `${language ? `/${language}` : ""}${productRoutePrefix}${
  //           node.handle
  //         }`,
  //         component: path.resolve(`./src/templates/product.tsx`),
  //         context: {
  //           product: node,
  //         },
  //       });
  //     });
  //   };
  //   // createProductPages(resultEN);
  //   createProductPages(resultSR, "sr");
  // } catch (error) {
  //   console.error(error);
  // }

  //////// *****************************************************
  //////// *****************************************************
  //////// *****************************************************

  // const createClient = (shopName, accessToken, apiVersion) => {
  //   const url = `https://${shopName}.myshopify.com/api/${apiVersion}/graphql.json`;

  //   return new _graphqlRequest.GraphQLClient(url, {
  //     headers: {
  //       "X-Shopify-Storefront-Access-Token": accessToken,
  //       "Accept-Language": "sr",
  //     },
  //   });
  // };

  // let client = createClient(
  //   "bgssystemline",
  //   "dce4e0cfd059da12f9158e20158b38d5",
  //   "2022-01"
  // );

  // // Query for all products in Shopify
  // // requestQuery
  // const resultSR = await client.request(`
  // {
  //   products(first: ${amount}, sortKey: CREATED_AT, reverse: true) {
  //     edges {
  //       node {
  //         id
  //         title
  //         description
  //         handle
  //         images(first: 1) {
  //           edges {
  //             node {
  //               altText
  //               transformedSrc
  //             }
  //           }
  //         }
  //         priceRange {
  //           minVariantPrice {
  //             amount
  //             currencyCode
  //           }
  //           maxVariantPrice {
  //             amount
  //             currencyCode
  //           }
  //         }
  //         variants(first: 10) {
  //           edges {
  //             node {
  //               id
  //               priceV2 {
  //                 amount
  //                 currencyCode
  //               }
  //               image {
  //                 altText
  //                 transformedSrc
  //               }
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // }
  // `);

  // // Iterate over all products and create a new page using a template
  // // The product "handle" is generated automatically by Shopify
  // resultSR.products.edges.forEach(({ node }) => {
  //   console.log(node);
  //   createPage({
  //     path: `/sr${productRoutePrefix}${node.handle}`,
  //     component: path.resolve(`./src/templates/product.tsx`),
  //     context: {
  //       product: node,
  //     },
  //   });
  // });
};
