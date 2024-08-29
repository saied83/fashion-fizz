import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { useState } from "react";
import { useShopContext } from "../context/ShopContext";
import toast from "react-hot-toast";
const Checkout = () => {
  const [method, setMethod] = useState("cod");
  const { navigate } = useShopContext();
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* --------------- left side ----------------  */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex ga-3">
          <input
            type="text"
            placeholder="First name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="Last name"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="email"
          placeholder="Email Address"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <input
          type="text"
          placeholder="Street"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
        <div className="flex ga-3">
          <input
            type="text"
            placeholder="City"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="text"
            placeholder="State"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <div className="flex ga-3">
          <input
            type="number"
            placeholder="Zipcode"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
          <input
            type="email"
            placeholder="Country"
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          />
        </div>
        <input
          type="number"
          placeholder="Phone"
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
        />
      </div>
      {/* ----------------- right side -----------------  */}
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2="METHOD" />
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() =>
                toast("Stripe is disabled in demo, use COD", {
                  icon: "⚠️",
                })
              }
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full `}></p>
              <img src="/stripe_logo.png" className="h-5 mx-4" alt="" />
            </div>
            <div
              onClick={() =>
                toast("RazorPay  is disabled in demo, use COD", {
                  icon: "⚠️",
                })
              }
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p className={`min-w-3.5 h-3.5 border rounded-full `}></p>
              <img src="/razorpay_logo.png" className="h-5 mx-4" alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              onClick={() => {
                toast.success("Order Place Successfully");
                setTimeout(() => navigate("/orders"), 500);
              }}
              className="bg-black text-white text-sm  px-8 py-3 active:bg-gray-700"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
