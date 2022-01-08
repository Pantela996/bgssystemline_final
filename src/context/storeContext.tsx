import React, { createContext, useState, useEffect, useContext } from "react";
// import fetch from "isomorphic-fetch"; // delete??
import Client from "shopify-buy";
import { CartItem, ProductData } from "../utils/types";

const client = Client.buildClient(
  {
    domain: process.env.GATSBY_SHOPIFY_STORE_URL,
    storefrontAccessToken: process.env.GATSBY_STOREFRONT_ACCESS_TOKEN,
  }
  // fetch
);

interface StoreContextProps {
  cart: CartItem[];
  loading: boolean;
  addVariantToCart: (
    product: ProductData,
    quantity: string
  ) => Promise<void> | undefined;
  removeLineItem: (variantId: any) => Promise<void> | undefined;
  client: Client.Client;
  checkout: {
    id: string | number;
    lineItems: any[];
  };
}
const defaultValues: StoreContextProps = {
  cart: [],
  loading: false,
  addVariantToCart: undefined,
  removeLineItem: undefined,
  client,
  checkout: {
    id: "",
    lineItems: [],
  },
};

const StoreContext = createContext<StoreContextProps>(defaultValues);

const isBrowser = typeof window !== `undefined`;
const localStorageKey = `shopify_checkout_id`;

export const StoreProvider = ({ children }) => {
  const [cart, setCart] = useState(defaultValues.cart);
  const [checkout, setCheckout] = useState(defaultValues.checkout);
  const [loading, setLoading] = useState(false);

  const setCheckoutItem = (checkout) => {
    if (isBrowser) {
      localStorage.setItem(localStorageKey, checkout.id);
    }

    setCheckout(checkout);
  };

  useEffect(() => {
    const initializeCheckout = async () => {
      const existingCheckoutID = isBrowser
        ? localStorage.getItem(localStorageKey)
        : null;

      if (existingCheckoutID && existingCheckoutID !== `null`) {
        try {
          const existingCheckout = await client.checkout.fetch(
            existingCheckoutID
          );
          if (!existingCheckout.completedAt) {
            setCheckoutItem(existingCheckout);
            return;
          }
        } catch (e) {
          localStorage.setItem(localStorageKey, null);
        }
      }

      const newCheckout = await client.checkout.create();
      setCheckoutItem(newCheckout);
    };

    initializeCheckout();
  }, []);

  const addVariantToCart = async (product: ProductData, quantity: string) => {
    setLoading(true);

    if (checkout.id === "") {
      console.error("No checkout ID assigned.");
      return;
    }

    const checkoutID = checkout.id;
    const variantId = product.variants[0]?.shopifyId;
    const parsedQuantity = parseInt(quantity, 10);

    const lineItemsToUpdate = [
      {
        variantId,
        quantity: parsedQuantity,
      },
    ];

    try {
      const res = await client.checkout.addLineItems(
        checkoutID,
        lineItemsToUpdate
      );
      setCheckout(res);

      let updatedCart = [];
      if (cart.length > 0) {
        console.log("variantId", variantId);
        const itemIsInCart = cart.find((item) => {
          console.log(
            "item.product.variants[0]?.shopifyId",
            item.product.variants[0]?.shopifyId
          );
          return item.product.variants[0]?.shopifyId === variantId;
        });

        if (itemIsInCart) {
          const newProduct: CartItem = {
            product: { ...itemIsInCart.product },
            quantity: itemIsInCart.quantity + parsedQuantity,
          };
          const otherItems = cart.filter(
            (item) => item.product.variants[0]?.shopifyId !== variantId
          );
          updatedCart = [...otherItems, newProduct];
        } else {
          updatedCart = cart.concat([
            { product, quantity: parsedQuantity } as CartItem,
          ]);
        }
      } else {
        updatedCart = [{ product, quantity: parsedQuantity } as CartItem];
      }
      setCart(updatedCart);
    } catch (error) {
      console.error(`Error in addVariantToCart: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  const removeLineItem = async (variantId) => {
    setLoading(true);
    try {
      if (checkout.lineItems.length < 1) throw new Error("Cart is empty");

      let lineItemID = "";
      checkout.lineItems?.forEach((item) => {
        if (item.variableValues.lineItems[0]?.variantId === variantId) {
          lineItemID = item.id;
        }
      });

      if (!lineItemID) {
        console.log("Product not in cart");
        return;
      }

      const res = await client.checkout.removeLineItems(checkout.id, [
        lineItemID,
      ]);
      setCheckout(res);

      const updatedCart = cart.filter(
        (item) => item.product.variants[0]?.shopifyId !== variantId
      );
      setCart(updatedCart);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(`Error in removeLineItem: ${error}`);
    }
  };

  return (
    <StoreContext.Provider
      value={{
        ...defaultValues,
        addVariantToCart,
        removeLineItem,
        cart,
        checkout,
        loading,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

const useStore = () => {
  const context = useContext(StoreContext);

  if (context === undefined) {
    throw new Error("useStore must be used within StoreContext");
  }

  return context;
};

export default useStore;
