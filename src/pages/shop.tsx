import React from "react";
import { graphql } from "gatsby";
import { GetShopItemsQuery } from "../../graphql-types";
import ProductCard from "../components/products/productCard";
import { Container } from "@mui/material";
import Seo from "../components/seo";
import t from "../components/translate";

interface ShopProps {
  data: GetShopItemsQuery;
}

export default function Shop({ data }: ShopProps) {
  return (
    <>
      <Seo pageTitle="Shop" />
      <Container>
        <h1>{t("pages.shop.title")}</h1>
        {data.allShopifyProduct.nodes.map((node) => (
          <ProductCard cardData={node} key={node.shopifyId} />
        ))}
      </Container>
    </>
  );
}

export const query = graphql`
  query getShopItems {
    allShopifyProduct {
      nodes {
        title
        handle
        shopifyId
        priceRangeV2 {
          maxVariantPrice {
            amount
            currencyCode
          }
        }
        variants {
          shopifyId
        }
        description
        images {
          src
        }
      }
    }
  }
`;
