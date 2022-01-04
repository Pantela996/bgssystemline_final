import React from "react";
import { GetShopItemsQuery } from "../../../graphql-types";

type ProductCardData = GetShopItemsQuery["allShopifyProduct"]["nodes"][0];

interface ProductCardProps {
  cardData: ProductCardData;
}

export default function ProductCard({ cardData }: ProductCardProps) {
  return (
    <div>
      <p>{cardData.title}</p>
      <img src={cardData.images[0].src} alt="" width="200px" />
    </div>
  );
}
