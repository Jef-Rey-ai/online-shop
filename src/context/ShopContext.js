import { createContext } from "react";
import { useCarts } from "../hooks/useCarts";

export const ShopContext = createContext({
  cartItems:null,
  addToCart:()=>{},
  removeFromeCart:()=>{}
});

export const ShopContextProvider = (props) => {

  return (
    <ShopContext.Provider value={useCarts()}>
      {props.children}
    </ShopContext.Provider>
  );
};
