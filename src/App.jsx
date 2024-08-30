import { Toaster } from "react-hot-toast";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useShopContext } from "./context/ShopContext";
import NotFoundPage from "./pages/NotFoundPage";
import { useAuthContext } from "./context/AuthContext";
import Profile from "./pages/Profile";

function App() {
  const { setShowSearch } = useShopContext();
  const { authUser } = useAuthContext();
  const location = useLocation();
  return (
    <div className="relative">
      <Navbar />
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/auth"
            element={
              authUser ? (
                <Navigate
                  to="/collection"
                  state={{ prevUrl: location.pathname }}
                />
              ) : (
                <Auth />
              )
            }
          />
          <Route
            path="/checkout"
            element={
              authUser ? (
                <Checkout />
              ) : (
                <Navigate to="/auth" state={{ prevUrl: location.pathname }} />
              )
            }
          />
          <Route
            path="/profile"
            element={
              authUser ? (
                <Profile />
              ) : (
                <Navigate to="/auth" state={{ prevUrl: location.pathname }} />
              )
            }
          />
          <Route
            path="/profile/:userId"
            element={
              authUser ? (
                <Profile />
              ) : (
                <Navigate to="/auth" state={{ prevUrl: location.pathname }} />
              )
            }
          />
          <Route
            path="/orders"
            element={
              authUser ? (
                <Orders />
              ) : (
                <Navigate to="/auth" state={{ prevUrl: location.pathname }} />
              )
            }
          />
          <Route path="*" element={<NotFoundPage />} />{" "}
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
      <Footer className="fixed bottom-0" />
    </div>
  );
}

export default App;
