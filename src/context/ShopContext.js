import { createContext, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

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
      cartItems.map((cartItem) => {
        if (cartItem.id === itemId)
          return {
            ...cartItem,
            count: cartItem.count === 0 ? 0 : cartItem.count - 1,
          };
        else return cartItem;
      })
    );
  };

  const contextValue = { cartItems, addToCart, removeFromCart };
  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
