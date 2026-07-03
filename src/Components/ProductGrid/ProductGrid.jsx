import React, { useState } from "react";
import {
    FaRegHeart,
    FaHeart,
} from "react-icons/fa";
import "./ProductGrid.css";

const ProductGrid = ({
    products,
    cart,
    setCart,
    favorites = [],
    setFavorites = () => { },
}) => {
    const [visibleCount, setVisibleCount] =
        useState(16);

    const [addedItemId, setAddedItemId] =
        useState(null);

    const addToCart = (id) => {
        setCart((prevCart) => ({
            ...prevCart,
            [id]:
                (prevCart[id] || 0) + 1,
        }));

        setAddedItemId(id);

        setTimeout(() => {
            setAddedItemId(null);
        }, 2000);
    };

    const increaseQty = (id) =>
        addToCart(id);

    const decreaseQty = (id) => {
        setCart((prevCart) => {
            const currentQty =
                prevCart[id] || 0;

            if (currentQty <= 1) {
                const updatedCart = {
                    ...prevCart,
                };

                delete updatedCart[id];

                return updatedCart;
            }

            return {
                ...prevCart,
                [id]: currentQty - 1,
            };
        });
    };

    const toggleFavorite = (
        product
    ) => {
        const exists =
            favorites.some(
                (fav) =>
                    fav.id === product.id
            );

        if (exists) {
            setFavorites(
                favorites.filter(
                    (fav) =>
                        fav.id !== product.id
                )
            );
        } else {
            setFavorites([
                ...favorites,
                product,
            ]);
        }
    };

    return (
        <div>
            <div className="product-grid">
                {products.length === 0 ? (
                    <p>
                        No Products Found
                    </p>
                ) : (
                    products
                        .slice(
                            0,
                            visibleCount
                        )
                        .map((product) => (
                            <div
                                className="product-col"
                                key={
                                    product.id
                                }
                            >
                                <div className="product-image-box">
                                    <img
                                        src={
                                            product.image
                                        }
                                        alt={
                                            product.name
                                        }
                                    />
                                </div>

                                <div className="product-content">
                                    <div className="product-text">
                                        <h3>
                                            {
                                                product.name
                                            }
                                        </h3>

                                        <p>
                                            <b>
                                                ₹
                                                {
                                                    product.price
                                                }
                                            </b>
                                        </p>

                                        <p>
                                            {
                                                product.rating
                                            }
                                        </p>
                                    </div>

                                    <div
                                        className="heart-box"
                                        onClick={() =>
                                            toggleFavorite(
                                                product
                                            )
                                        }
                                    >
                                        {favorites.some(
                                            (
                                                fav
                                            ) =>
                                                fav.id ===
                                                product.id
                                        ) ? (
                                            <FaHeart
                                                style={{
                                                    color:
                                                        "red",
                                                }}
                                            />
                                        ) : (
                                            <FaRegHeart />
                                        )}
                                    </div>
                                </div>

                                <div className="cart-section">
                                    {!cart?.[
                                        product.id
                                    ] ? (
                                        <button
                                            className="add-btn"
                                            onClick={() =>
                                                addToCart(
                                                    product.id
                                                )
                                            }
                                        >
                                            Add
                                            to
                                            Cart
                                        </button>
                                    ) : (
                                        <div className="quantity-btn">
                                            <button
                                                onClick={() =>
                                                    decreaseQty(
                                                        product.id
                                                    )
                                                }
                                            >
                                                -
                                            </button>

                                            <span>
                                                {
                                                    cart[
                                                    product
                                                        .id
                                                    ]
                                                }
                                            </span>

                                            <button
                                                onClick={() =>
                                                    increaseQty(
                                                        product.id
                                                    )
                                                }
                                            >
                                                +
                                            </button>
                                        </div>
                                    )}

                                    {addedItemId ===
                                        product.id && (
                                            <span className="added-msg">
                                                Item
                                                added
                                                to
                                                cart!
                                            </span>
                                        )}
                                </div>
                            </div>
                        ))
                )}
            </div>

            {products.length >
                16 && (
                    <div className="view-toggle">
                        {visibleCount <
                            products.length ? (
                            <button
                                onClick={() =>
                                    setVisibleCount(
                                        products.length
                                    )
                                }
                            >
                                View More
                            </button>
                        ) : (
                            <button
                                onClick={() =>
                                    setVisibleCount(
                                        16
                                    )
                                }
                            >
                                View Less
                            </button>
                        )}
                    </div>
                )}
        </div>
    );
};

export default ProductGrid;