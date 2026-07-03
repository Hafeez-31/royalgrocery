import React, { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import productsData from "../../Data/Products";
import FilterSidebar from "../../Components/FilterSidebar/FilterSidebar";
import ProductGrid from "../../Components/ProductGrid/ProductGrid";
import "./Shop.css";

const Shop = ({
  cart,
  setCart,
  favorites,
  setFavorites,
}) => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const categoryFromURL = query.get("category");

  const allProducts = Object.entries(productsData).flatMap(
    ([category, items]) =>
      items.map((item) => ({
        ...item,
        category,
      }))
  );

  const highestPrice = useMemo(() => {
    return Math.max(
      ...allProducts.map((p) => p.price)
    );
  }, [allProducts]);

  const [selectedCategory, setSelectedCategory] =
    useState(categoryFromURL || "All");

  const [maxPrice, setMaxPrice] =
    useState(highestPrice);

  const [minRating, setMinRating] =
    useState(0);

  const filteredProducts =
    allProducts.filter(
      (product) =>
        (selectedCategory === "All" ||
          product.category ===
          selectedCategory) &&
        product.price <= maxPrice &&
        product.rating >= minRating
    );

  const clearFilters = () => {
    setSelectedCategory("All");
    setMaxPrice(highestPrice);
    setMinRating(0);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="shop-header">
      <h1>Shop Our Products</h1>

      <span className="line"></span>

      <div className="shop-container">
        <FilterSidebar
          selectedCategory={
            selectedCategory
          }
          setSelectedCategory={
            setSelectedCategory
          }
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          minRating={minRating}
          setMinRating={setMinRating}
          clearFilters={clearFilters}
          highestPrice={
            highestPrice
          }
        />

        <ProductGrid
          products={
            filteredProducts
          }
          cart={cart}
          setCart={setCart}
          favorites={favorites}
          setFavorites={
            setFavorites
          }
        />
      </div>
    </div>
  );
};

export default Shop;