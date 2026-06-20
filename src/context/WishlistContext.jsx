import {
  createContext,
  useEffect,
  useState,
} from "react";

export const WishlistContext =
  createContext();

export function WishlistProvider({
  children,
}) {

  const [wishlistItems,
    setWishlistItems] =
    useState(() => {

      const savedWishlist =
        localStorage.getItem(
          "zephyr-wishlist"
        );

      return savedWishlist
        ? JSON.parse(savedWishlist)
        : [];
    });

  useEffect(() => {

    localStorage.setItem(
      "zephyr-wishlist",
      JSON.stringify(
        wishlistItems
      )
    );

  }, [wishlistItems]);



  const toggleWishlist = (
    product
  ) => {

    const exists =
      wishlistItems.find(
        (item) =>
          item.id === product.id
      );

    if (exists) {

      setWishlistItems(
        wishlistItems.filter(
          (item) =>
            item.id !== product.id
        )
      );

    } else {

      setWishlistItems([
        ...wishlistItems,
        product,
      ]);
    }
  };



  const isWishlisted = (
    id
  ) => {

    return wishlistItems.some(
      (item) =>
        item.id === id
    );
  };



  return (

    <WishlistContext.Provider
      value={{
        wishlistItems,
        toggleWishlist,
        isWishlisted,
      }}
    >

      {children}

    </WishlistContext.Provider>

  );
}