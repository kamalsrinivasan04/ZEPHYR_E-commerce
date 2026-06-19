import {
  createContext,
  useState,
  useEffect,
} from "react";

export const CartContext =
  createContext();

export function CartProvider({
  children,
}) {

  const [cartItems, setCartItems] =
    useState(() => {

      const savedCart =
        localStorage.getItem(
          "zephyr-cart"
        );

      return savedCart
        ? JSON.parse(savedCart)
        : [];
    });

  useEffect(() => {

    localStorage.setItem(
      "zephyr-cart",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

  const addToCart = (
    product
  ) => {

    setCartItems(
      (prevItems) => [
        ...prevItems,
        product,
      ]
    );
  };

  const removeFromCart = (
    index
  ) => {

    setCartItems(
      (prevItems) =>
        prevItems.filter(
          (_, i) =>
            i !== index
        )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}