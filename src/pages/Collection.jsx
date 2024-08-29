import { useEffect, useState } from "react";
import { useShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import Card from "../components/Card";

const Collection = () => {
  const { products } = useShopContext();
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  useEffect(() => {
    setFilterProducts(products);
  }, []);
  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* filter option  */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            src="/close.svg"
            className={`h-3 sm:hidden ${showFilter ? "" : "-rotate-90"}`}
          />
        </p>

        {/* Category Filter  */}

        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          {/* Category Filter  */}
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" id="men" value={"Men"} />
              <label htmlFor="men" className="cursor-pointer">
                {" "}
                Men
              </label>
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                id="women"
                value={"Women"}
              />
              <label htmlFor="women" className="cursor-pointer">
                {" "}
                Women
              </label>
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" id="kids" value={"Kids"} />
              <label htmlFor="kids" className="cursor-pointer">
                {" "}
                Kids
              </label>
            </p>
          </div>
        </div>
        {/* SubCategory Filter  */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                id="top"
                value={"Topwear"}
              />
              <label htmlFor="top" className="cursor-pointer">
                {" "}
                Topwear
              </label>
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                id="bottom"
                value={"Bottomwear"}
              />
              <label htmlFor="bottom" className="cursor-pointer">
                {" "}
                Bottomwear
              </label>
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                id="winter"
                value={"Winterwear"}
              />
              <label htmlFor="winter" className="cursor-pointer">
                {" "}
                Winterwear
              </label>
            </p>
          </div>
        </div>
      </div>
      {/* Right Side  */}

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-3xl mb-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          <select className="border-2 border-gray-300 text-sm px-2">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="low-high">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map Products  */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((product, indx) => (
            <Card
              key={indx}
              name={product.name}
              id={product._id}
              price={product.price}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
