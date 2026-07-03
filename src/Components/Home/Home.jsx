import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CategoriesSection from "../CategoriesSection/CategoriesSection";
import "./Home.css";

const Home = ({ homeRef, categoriesRef, cart, setCart, favorites, setFavorites }) => {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    return (
        <div ref={homeRef}>
            <div className="home-page">
                <div className="home-content">
                    <h1>Welcome to Royal Grocery</h1>
                    <h3>Fresh Groceries, Everyday</h3>
                    <p>Shop fresh vegetables, fruits, dairy and more.
                        Fast delivery at your doorstep.</p>
                    <button className="shop-now-btn"><Link to="/shop">Shop Now</Link></button>
                </div>
            </div>
            <div ref={categoriesRef}>
                <CategoriesSection
                    cart={cart}
                    setCart={setCart}
                    favorites={favorites}
                    setFavorites={setFavorites}
                />
            </div>
        </div>
    );
};

export default Home;