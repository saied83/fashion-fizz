import { useState, useEffect } from "react";
import { useShopContext } from "../context/ShopContext";
import Title from "./Title";
import Card from "./Card";

const BestSeller = () => {
  const { products } = useShopContext();
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    setBestProducts(products.filter((product) => product.bestseller === true));
  }, []);

  return (
    <div className="my-10 bg-[#f3f4f4]">
      <div className="text-center py-8 text-3xl">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. A magni
          facere voluptates.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 px-6 pb-6 ">
        {bestProducts.map(({ _id: id, image, name, price }) => (
          <Card id={id} image={image} name={name} price={price} key={id} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
