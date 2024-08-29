import React from "react";
import { useShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const Card = ({ id, image, name, price }) => {
  const { currency } = useShopContext();
  return (
    <Link className="text-gray-700 cursor-pointer" to={`/product/${id}`}>
      <div className="overflow-hidden ">
        <img
          className="hover:scale-110 transition  ease-in-out "
          src={image[0]}
          alt=""
        />
      </div>
      <p className="pt-3 pb-1 text-sm ">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default Card;
