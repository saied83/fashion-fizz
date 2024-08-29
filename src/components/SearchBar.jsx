import { useLocation } from "react-router-dom";
import { useShopContext } from "../context/ShopContext";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const { search, showSearch, setSearch, setShowSearch } = useShopContext();
  const location = useLocation();
  const [visibleSearch, setVisibleSearch] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisibleSearch(true);
    } else {
      setVisibleSearch(false);
    }
  }, [location]);

  return showSearch && visibleSearch ? (
    <div className="border-t border-b border-gray-200 bg-white flex justify-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          className="flex-1 outline-none bg-inherit text-sm"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="Search"
        />
        <img src="/search.svg" className="w-6" alt="" />
      </div>
      <img
        src="/x.svg"
        alt=""
        className="inline w-6  cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  ) : null;
};

export default SearchBar;
