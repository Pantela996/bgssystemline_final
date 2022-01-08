import React from "react";
import Seo from "../components/seo";
import { Container } from "@mui/material";
import t from "../components/translate";
import useStore from "../context/storeContext";

export default function Cart() {
  const { cart } = useStore();
  return (
    <>
      <Seo pageTitle="Cart" />
      <Container>
        <h1>{t("pages.cart.title")}</h1>
        {cart.length > 0 ? (
          <ol>
            {cart.map((item) => (
              <li key={item.product.id}>
                {item.product.title} - {item.quantity}
              </li>
            ))}
          </ol>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </Container>
    </>
  );
}
