import React from "react";
import { Link } from "gatsby-plugin-react-intl";
import { productRoutePrefix } from "../../utils/constantsPlain";
import { ProductData } from "../../utils/types";
import { styled, Button as ButtonMui } from "@mui/material";
import useStore from "../../context/storeContext";

interface ProductCardProps {
  product: ProductData;
}

const Button = styled(ButtonMui)(({ theme }) => ({
  position: "absolute",
  top: 0,
  right: 0,
}));

export default function ProductCard({ product }: ProductCardProps) {
  const { addVariantToCart, loading } = useStore();

  return (
    <div style={{ border: "1px solid gray", position: "relative" }}>
      <Button
        size="large"
        variant="contained"
        disabled={loading}
        onClick={() => addVariantToCart(product, "1")}
      >
        {loading ? "..." : "+"}
      </Button>
      <img src={product.images[0].src} alt="" width="200px" />

      <Link to={productRoutePrefix + product.handle}>
        <h5>{product.title}</h5>
      </Link>
      <p>{product.description}</p>
    </div>
  );
}
