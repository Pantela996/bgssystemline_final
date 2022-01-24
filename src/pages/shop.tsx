// // TODO remove this file if not needed
// import React from "react";
// import { graphql } from "gatsby";
// import { Link } from "gatsby-plugin-react-intl";
// import { GetShopItemsQuery } from "../../graphql-types";
// import ProductCard from "../components/products/productCard";
// import { Container } from "@mui/material";
// import Seo from "../components/seo";
// import t from "../components/translate";
// // import useStore from "../context/storeContext";

// import { styled } from "@mui/material";

// // TODO use this responsive grid template:

// const CardGrid = styled("div")(({ theme }) => ({
//   display: "grid",
//   gap: theme.spacing(2),
//   gridTemplateColumns: "repeat(1, 1fr)",
//   [theme.breakpoints.up("sm")]: {
//     gridTemplateColumns: "repeat(2, 1fr)",
//   },
//   [theme.breakpoints.up("md")]: {
//     gridTemplateColumns: "repeat(3, 1fr)",
//   },
//   [theme.breakpoints.up("lg")]: {
//     gridTemplateColumns: "repeat(4, 1fr)",
//   },
// }));

// interface ShopProps {
//   data: GetShopItemsQuery;
// }

// export default function Shop({ data }: ShopProps) {
//   const { cart } = useStore();
//   return (
//     <>
//       <Seo pageTitle="Shop" />
//       <Container>
//         <h1>{t("pages.shop.title")}</h1>
//         <h4>Number of products: {data.allShopifyProduct.totalCount}</h4>
//         <p>
//           <Link to="/cart/">Go to "CART"</Link> <br />
//           items in cart:{" "}
//           {cart.reduce((total, item) => item.quantity + total, 0)}
//         </p>
//         <CardGrid>
//           {data.allShopifyProduct.edges.map(({ node }) => (
//             <ProductCard product={node} key={node.shopifyId} />
//           ))}
//         </CardGrid>
//       </Container>
//     </>
//   );
// }
// // query getShopItems($locale: String) {
// // allShopifyProduct(filter: { locale: { eq: $locale } }) {

// export const query = graphql`
//   query getShopItems {
//     allShopifyProduct(filter: {}) {
//       totalCount
//       edges {
//         node {
//           id
//           title
//           description
//           handle
//           priceRangeV2 {
//             maxVariantPrice {
//               amount
//               currencyCode
//             }
//           }
//           images {
//             src
//           }
//           variants {
//             shopifyId
//           }
//           shopifyId
//         }
//       }
//     }
//   }
// `;
