import { useEffect, useState } from "react";
import { useShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import toast from "react-hot-toast";

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    getCartAmount,
    updateQuantity,
    navigate,
  } = useShopContext();
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);
  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-3">
        <Title text1="YOUR" text2="CART" />
      </div>

      <div>
        {cartData.map((item, indx) => {
          const productData = products.find(
            (product) => product._id === item._id
          );
          return (
            <div
              key={indx}
              className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
            >
              <div className="flex items-start gap-6">
                <img
                  src={productData.image[0]}
                  className="w-16 sm:w-20 rounded-sm"
                  alt=""
                />
                <div>
                  <p className="text-xz sm:text-lg font-medium">
                    {productData.name}
                  </p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>
                      {currency}
                      {productData.price}
                    </p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50 rounded-sm">
                      {item.size}
                    </p>
                  </div>
                </div>
              </div>
              <input
                className="border-2 border-slate-200 max-w-10 sm:max-w-20 px-1 sm:[x-2 py-1"
                type="number"
                defaultValue={item.quantity}
                min={1}
                onChange={(e) =>
                  e.target.value === "" || e.target.value === "0"
                    ? null
                    : updateQuantity(item._id, item.size, e.target.value)
                }
              />
              <img
                className="w-4 mr-4 sm:w-5 cursor-pointer"
                src="/bin.svg"
                alt=""
                onClick={() => updateQuantity(item._id, item.size, 0)}
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
          <div className="w-full text-end">
            <button
              className="bg-black text-white text-sm my-8 px-8 py-3 active:bg-gray-700"
              onClick={() => {
                if (getCartAmount() === 0) {
                  toast.error("No Product Selected");
                  setTimeout(() => {
                    navigate("/collection");
                    toast("Select Any Product", {
                      icon: "⚠️",
                    });
                  }, 1000);
                } else {
                  navigate("/checkout");
                }
              }}
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
