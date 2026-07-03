import React, { useState } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import productsData from "../../Data/Products";
import "./CategoriesSection.css";
import Fruits from "../../assets/images/categories/mixfruits.jpg";
import Dairy from "../../assets/images/categories/dairy.jpg";
import Bakery from "../../assets/images/categories/bakery.jpg";
import wholeGrain from "../../assets/images/categories/wholegrains.jpg";
import Dals from "../../assets/images/categories/dals.jpg";
import Oils from "../../assets/images/categories/oils.png";
import dryFruits from "../../assets/images/categories/dryfruits.jpg";
import Chocolates from "../../assets/images/categories/chocolates.jpg";

const CategoriesSection = ({
    cart,
    setCart,
    favorites = [],
    setFavorites = () => {},
}) => {
    const [activeSection, setActiveSection] = useState("All");
    const [addedItemId, setAddedItemId] = useState(null);

    const categoryImages = [
        { name: "All", image: Fruits },
        { name: "Fruits & Vegetables", image: Fruits },
        { name: "Dairy & Eggs", image: Dairy },
        { name: "Bakery & Breads", image: Bakery },
        { name: "Rice, Atta & Grains", image: wholeGrain },
        { name: "Dals & Pulses", image: Dals },
        { name: "Oil & Ghee", image: Oils },
        { name: "Dry Fruits & Nuts", image: dryFruits },
        { name: "Sweets & Chocolates", image: Chocolates },
    ];

    const allProducts = Object.values(productsData).flat();

    const currentItems =
        activeSection === "All"
            ? allProducts.slice(0, 12)
            : (productsData[activeSection] || []).slice(0, 12);

    const totalItems =
        activeSection === "All"
            ? allProducts.length
            : (productsData[activeSection] || []).length;

    const addToCart = (id) => {
        setCart((prevCart) => ({
            ...prevCart,
            [id]: (prevCart[id] || 0) + 1,
        }));

        setAddedItemId(id);

        setTimeout(() => {
            setAddedItemId(null);
        }, 2000);
    };

    const increaseQty = (id) => {
        addToCart(id);
    };

    const decreaseQty = (id) => {
        setCart((prevCart) => {
            const currentQty = prevCart[id] || 0;

            if (currentQty <= 1) {
                const updatedCart = { ...prevCart };
                delete updatedCart[id];
                return updatedCart;
            }

            return {
                ...prevCart,
                [id]: currentQty - 1,
            };
        });
    };

    const toggleFavorite = (item) => {
        const exists = favorites.some(
            (fav) => fav.id === item.id
        );

        if (exists) {
            setFavorites(
                favorites.filter(
                    (fav) => fav.id !== item.id
                )
            );
        } else {
            setFavorites([
                ...favorites,
                item,
            ]);
        }
    };

    return (
        <section className="categories-section">
            <h2>Shop by Categories</h2>

            <div className="top-category-images">
                {categoryImages.map((cat, index) => (
                    <div
                        key={index}
                        className={`image-card ${
                            activeSection === cat.name
                                ? "active"
                                : ""
                        }`}
                        onClick={() =>
                            setActiveSection(cat.name)
                        }
                    >
                        <img
                            src={cat.image}
                            alt={cat.name}
                        />
                        <p className="category-title">
                            {cat.name}
                        </p>
                    </div>
                ))}
            </div>

            <div className="items-grid">
                {currentItems.map((item) => (
                    <div
                        key={item.id}
                        className="product-card"
                    >
                        <div className="product-image-box">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="product-image"
                            />
                        </div>

                        <div className="product-header">
                            <div className="product-text">
                                <h2>{item.name}</h2>
                                <p className="price">
                                    ₹ {item.price}
                                </p>
                                <div className="rating">
                                    {item.rating}
                                </div>
                            </div>

                            <div
                                className="heart-box"
                                onClick={() =>
                                    toggleFavorite(item)
                                }
                            >
                                {(favorites || []).some(
                                    (fav) =>
                                        fav.id === item.id
                                ) ? (
                                    <FaHeart
                                        style={{
                                            color: "red",
                                        }}
                                    />
                                ) : (
                                    <FaRegHeart />
                                )}
                            </div>
                        </div>

                        <div className="cart-section">
                            {!cart?.[item.id] ? (
                                <button
                                    className="add-btn"
                                    onClick={() =>
                                        addToCart(item.id)
                                    }
                                >
                                    Add to Cart
                                </button>
                            ) : (
                                <div className="quantity-control">
                                    <button
                                        onClick={() =>
                                            decreaseQty(
                                                item.id
                                            )
                                        }
                                    >
                                        -
                                    </button>

                                    <span>
                                        {cart[item.id] || 0}
                                    </span>

                                    <button
                                        onClick={() =>
                                            increaseQty(
                                                item.id
                                            )
                                        }
                                    >
                                        +
                                    </button>
                                </div>
                            )}

                            {addedItemId === item.id && (
                                <span className="added-msg">
                                    Item added to cart!
                                </span>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {totalItems > 12 && (
                <div className="center">
                    <Link
                        to={`/shop?category=${encodeURIComponent(
                            activeSection
                        )}`}
                    >
                        <button className="view-more">
                            VIEW MORE
                        </button>
                    </Link>
                </div>
            )}
        </section>
    );
};

export default CategoriesSection;