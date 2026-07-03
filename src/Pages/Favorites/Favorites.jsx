import React from "react";
import "./Favorites.css";

const Favorites = ({
    favorites,
    setFavorites,
}) => {
    const removeFavorite = (id) => {
        setFavorites(
            favorites.filter(
                (item) => item.id !== id
            )
        );
    };

    return (
        <div className="favorites-page">
            <h1 className="favorites-title">
                My Favorites
            </h1>

            {favorites.length === 0 ? (
                <h3 className="empty-favorites">
                    No favorite products found
                </h3>
            ) : (
                <div className="favorites-grid">
                    {favorites.map((item) => (
                        <div
                            key={item.id}
                            className="favorite-card"
                        >
                            <img
                                src={item.image}
                                alt={item.name}
                                className="favorite-image"
                            />

                            <div className="favorite-content">
                                <h3 className="favorite-name">
                                    {item.name}
                                </h3>

                                <p className="favorite-price">
                                    ₹{item.price}
                                </p>

                                <button
                                    className="remove-favorite"
                                    onClick={() =>
                                        removeFavorite(
                                            item.id
                                        )
                                    }
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;