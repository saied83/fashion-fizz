import { useEffect, useState } from "react";
import { useShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import Card from "../components/Card";

const Collection = () => {
  const { products, showSearch, search } = useShopContext();
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState("relevant");

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };
  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let allProducts = products.slice();

    if (showSearch & (search.length > 0)) {
      allProducts = allProducts.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      allProducts = allProducts.filter((item) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      allProducts = allProducts.filter((item) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(allProducts);
  };

  const sortProduct = () => {
    let filterProductsCopy = filterProducts.slice();

    switch (sortType) {
      case "low-high":
        setFilterProducts(filterProductsCopy.sort((a, b) => a.price - b.price));
        break;
      case "high-low":
        setFilterProducts(filterProductsCopy.sort((b, a) => a.price - b.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div
      className={`flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10  border-t ${
        showSearch ? "mt-24" : ""
      }
      `}
    >
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
              <input
                type="checkbox"
                className="w-3"
                id="men"
                value={"Men"}
                onChange={toggleCategory}
              />
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
                onChange={toggleCategory}
              />
              <label htmlFor="women" className="cursor-pointer">
                {" "}
                Women
              </label>
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                id="kids"
                value={"Kid"}
                onChange={toggleCategory}
              />
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
                onChange={toggleSubCategory}
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
                onChange={toggleSubCategory}
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
                onChange={toggleSubCategory}
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
          <select
            onChange={(e) => setSortType(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
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
