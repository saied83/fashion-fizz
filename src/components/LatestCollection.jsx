import { useState, useEffect } from "react";
import { useShopContext } from "../context/ShopContext";
import Title from "./Title";
import Card from "./Card";

const LatestCollection = () => {
  const { products } = useShopContext();
  const [latestProducts, setLatestProducts] = useState([]);

  useEffect(() => {
    setLatestProducts(products.slice(0, 10));
  }, []);

  return (
    <div className="my-10 bg-[#f4fcfc]">
      <div className="text-center py-8 text-3xl">
        <Title text1={"LATEST"} text2={"COLLECTION"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab vel quae
          voluptate corporis assumenda, sit facere mollitia adipisci optio
          fugiat!
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 px-6 pb-6 ">
        {latestProducts.map(({ _id: id, image, name, price }) => (
          <Card id={id} image={image} name={name} price={price} key={id} />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
