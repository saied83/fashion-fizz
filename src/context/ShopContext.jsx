import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../assets";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const ShopContext = createContext();

export const useShopContext = () => {
  return useContext(ShopContext);
};

const ShopContextProvider = ({ children }) => {
  const currency = "$";
  const deliveryFee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || {}
  );

  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    let cartData = structuredClone(cartItems);
    if (!size) {
      toast.error("Select Product Size");
      return;
    }
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }
    setCartItems(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData));
    toast.success("Add To Cart Successfully!");
  };
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          toast.error(error.message);
        }
      }
    }
    return totalCount;
  };

  const updateQuantity = (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setCartItems(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalAmount += parseInt(itemInfo.price * cartItems[items][item]);
          }
        } catch (error) {
          toast.error(error.message);
        }
      }
    }
    return totalAmount;
  };

  const value = {
    products,
    currency,
    deliveryFee,
    search,
    showSearch,
    setSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
  };
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
};

export default ShopContextProvider;
