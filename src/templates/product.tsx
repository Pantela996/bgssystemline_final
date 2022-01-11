import React from "react";
import { Container } from "@mui/material";
import Seo from "../components/seo";
import { ProductData } from "../utils/types";

interface ProductCardProps {
  pageContext: { product: ProductData };
}

export default function ProductPage({
  pageContext: { product },
}: ProductCardProps) {
  return (
    <>
      <Seo pageTitle="Shop" />
      <Container>
        {/* <img src={product.images[0].src} alt="" width="500px" /> */}
        <h5>
          {product.title}
          {/* <br /> {product.priceRangeV2.maxVariantPrice.amount}
          {product.priceRangeV2.maxVariantPrice.currencyCode} */}
        </h5>
        {/* <p>{product.description}</p> */}
      </Container>
    </>
  );
}
