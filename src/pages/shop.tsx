import React from "react";
import { graphql } from "gatsby";
import { GetShopItemsQuery } from "../../graphql-types";
import ProductCard from "../components/products/productCard";

interface ShopProps {
  data: GetShopItemsQuery;
}

export default function Shop({ data }: ShopProps) {
  return (
    <div>
      {data.allShopifyProduct.nodes.map((node) => (
        <ProductCard cardData={node} key={node.shopifyId} />
      ))}
    </div>
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
