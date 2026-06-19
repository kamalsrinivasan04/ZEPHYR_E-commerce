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

    setCartItems((prevItems) => {

      const existingItem =
        prevItems.find(
          (item) =>
            item.id === product.id
        );

      if (existingItem) {

        return prevItems.map(
          (item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity:
                    item.quantity + 1,
                }
              : item
        );
      }

      return [
        ...prevItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const increaseQuantity = (
    id
  ) => {

    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };

  const decreaseQuantity = (
    id
  ) => {

    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) =>
            item.quantity > 0
        )
    );
  };

  const removeFromCart = (id) => {

  setCartItems((prevItems) =>
    prevItems
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity - 1,
            }
          : item
      )
      .filter(
        (item) =>
          item.quantity > 0
      )
  );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}