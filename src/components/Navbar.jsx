import { useState, useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useShopContext } from "../context/ShopContext";
import SearchBar from "../components/SearchBar";
import Profile from "../pages/Profile";
import Orders from "../pages/Orders";
import useLogout from "../hooks/useLogout";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { getCartCount, setShowSearch } = useShopContext();
  const navigate = useNavigate();
  const logout = useLogout();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`flex sticky z-10 top-0  mb-6 left-0 right-0 items-center justify-between py-5 font-medium px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] ${
        !scrolled
          ? "bg-[#f4f4f4] "
          : " bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30"
      } `}
    >
      <Link to="/">
        <img src="/logo.svg" className="w-36 cursor-pointer" alt="" />
      </Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink to="/" className={"flex flex-col items-center gap-1"}>
          <p>HOME</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/collection"
          className={"flex flex-col items-center gap-1"}
        >
          <p>COLLECTION</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/about" className={"flex flex-col items-center gap-1"}>
          <p>ABOUT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to="/contact" className={"flex flex-col items-center gap-1"}>
          <p>CONTACT</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
      </ul>
      <div className="flex items-center gap-6">
        <img
          src="/search.svg"
          alt=""
          className="cursor-pointer"
          onClick={() => {
            setShowSearch(true);
            navigate("/collection");
          }}
        />
        <div className="group relative">
          <img src="/profile-icon.svg" alt="" className="cursor-pointer" />
          <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-[#fcf4f4] text-gray-500 rounded">
              <p
                onClick={() => {
                  navigate("/profile");
                }}
                className="cursor-pointer hover:text-black"
              >
                My Profile
              </p>
              <p
                onClick={() => {
                  navigate("/orders");
                }}
                className="cursor-pointer hover:text-black"
              >
                Orders
              </p>
              <p
                onClick={() => {
                  logout();
                  navigate("/collection");
                }}
                className="cursor-pointer hover:text-black"
              >
                Logout
              </p>
            </div>
          </div>
        </div>

        <Link to="/cart" className="relative">
          <img src="/cart-icon.svg" alt="" className="w-5 min-w-5" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[10px] ">
            {getCartCount()}
          </p>
        </Link>
        <img
          src="/menu.svg"
          className="w-5 min-w-5 block sm:hidden  cursor-pointer"
          alt=""
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {/* Mobile navbar view  */}
      <div
        className={`absolute h-[100vh] top-0 right-0 bottom-0 overflow-hidden bg-[#f4f4f4] transition-all  ${
          toggle ? "w-full" : "w-0"
        }`}
      >
        <div className="flex overflow-hidden flex-col text-gray-600">
          <div
            onClick={() => setToggle(!toggle)}
            className="flex items-center cursor-pointer  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 p-6"
          >
            <img src="/close.svg" alt="close icon" className="rotate-90" />
            <p className="font-semibold">Back</p>
          </div>
          <NavLink
            onClick={() => setToggle(!toggle)}
            className={"py-2 pl-6 border"}
            to="/"
          >
            HOME
          </NavLink>
          <NavLink
            onClick={() => setToggle(!toggle)}
            className={"py-2 pl-6 border"}
            to="/collection"
          >
            COLLECTION
          </NavLink>
          <NavLink
            onClick={() => setToggle(!toggle)}
            className={"py-2 pl-6 border"}
            to="/about"
          >
            ABOUT
          </NavLink>
          <NavLink
            onClick={() => setToggle(!toggle)}
            className={"py-2 pl-6 border"}
            to="/contact"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
      <div className="absolute top-full z-12 left-0 right-0 ">
        <SearchBar />
      </div>
    </div>
  );
};

export default Navbar;
