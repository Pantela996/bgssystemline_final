import { GetShopItemsQuery } from "../../graphql-types";

export type ProductData =
  GetShopItemsQuery["allShopifyProduct"]["edges"][0]["node"];

export type CartItem = {
  product: ProductData;
  quantity: number;
};
