import { useEffect, useState } from "react";

export const useCarts = () => {
  const [cartItems, setCartItems] = useState();

  useEffect(() => {
    const data = localStorage.getItem("shop-cart-items");
    setCartItems(!!JSON.parse(data) ? JSON.parse(data) : []);
  }, []);

  useEffect(() => {
    cartItems !== undefined &&
      localStorage.setItem("shop-cart-items", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (itemId) => {
    if (!cartItems?.find((cartItem) => cartItem.id === itemId))
      setCartItems([...cartItems, { id: itemId, count: 1 }]);
    else
      setCartItems(
        cartItems.map((cartItem) => {
          if (cartItem.id === itemId)
            return { ...cartItem, count: cartItem.count + 1 };
          else return cartItem;
        })
      );
  };
  const removeFromCart = (itemId) => {
    setCartItems(
      cartItems?.map((cartItem) => {
        if (cartItem.id === itemId)
          return {
            ...cartItem,
            count: cartItem.count === 0 ? 0 : cartItem.count - 1,
          };
        else return cartItem;
      })
    );
  };
  const resetCart = () => {
    setCartItems([]);
    localStorage.removeItem("shop-cart-items");
  };

  return { cartItems, addToCart, removeFromCart, resetCart };
};
