import { createContext, useContext } from "react";
import { products } from "../assets";

export const ShopContext = createContext();

export const useShopContext = () => {
  return useContext(ShopContext);
};

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;
  const value = {
    products,
    currency,
    deliveryFee,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
