import React, { useRef, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Cart from "./Pages/Cart/Cart";
import PaymentPage from "./Pages/PaymentPage/PaymentPage";
import Orders from "./Pages/Orders/Orders";
import Contact from "./Pages/Contact/Contact";
import Favorites from "./Pages/Favorites/Favorites";
import Footer from "./Components/Footer/footer";
import productsData from "./Data/Products";
import "./App.css";

const App = () => {

  const homeRef = useRef(null);
  const categoriesRef = useRef(null);
  const [cart, setCart] = useState({});

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);


  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar cart={cart} favorites={favorites} scrollTo={scrollTo} refs={{ homeRef, categoriesRef }} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              homeRef={homeRef}
              categoriesRef={categoriesRef}
              cart={cart}
              setCart={setCart}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
        <Route path="/shop" element={<Shop
          cart={cart}
          setCart={setCart}
          favorites={favorites}
          setFavorites={setFavorites} />} />
        <Route
          path="/cart"
          element={<Cart cartData={cart} setCart={setCart} productsData={productsData} />}
        />
        <Route
          path="/payment"
          element={<PaymentPage setCart={setCart} />}
        />
        <Route path="/orders" element={<Orders />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;