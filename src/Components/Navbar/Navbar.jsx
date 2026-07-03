import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaRegHeart, FaHeart } from "react-icons/fa";
import Logo from "../../assets/images/navbar/logo.png"
import "./Navbar.css";

const Navbar = ({ scrollTo, refs, cart, favorites }) => {

    const location = useLocation();
    const navigate = useNavigate();

    const handleScroll = (ref) => {
        if (location.pathname !== "/") {
            navigate("/");
            setTimeout(() => scrollTo(ref), 100);
        } else {
            scrollTo(ref);
        }
    };

    const cartCount = Object.values(cart || {}).reduce((a, b) => a + b, 0);

    const favoriteCount =
        favorites?.length || 0;

    return (
        <nav className="navbar">
            <Link to="/"><img src={Logo} className="navbar-logo" /></Link>
            <ul className="navbar-menu">
                <li className="nav-links" onClick={() => handleScroll(refs.homeRef)}>Home</li>
                <li className="nav-links" onClick={() => handleScroll(refs.categoriesRef)}>Categories</li>
                <li className="nav-links"><Link to="/shop">Shop</Link></li>
                <li className="nav-links"><Link to="/orders">Orders</Link></li>
                <li className="nav-links"><Link to="/contact">Contact</Link></li>
            </ul>
            <div className="nav-actions">
                <Link to="/cart" className="cart-link">
                    <FaShoppingCart className="cart-icon" />
                    {cartCount > 0 && (
                        <span className="cart-badge">{cartCount}</span>
                    )}
                </Link>
                <Link
                    to="/favorites"
                    className="favorite-link"
                >
                    <FaHeart className="favorite-icon" />

                    {favoriteCount > 0 && (
                        <span className="favorite-badge">
                            {favoriteCount}
                        </span>
                    )}
                </Link>
                <button className="nav-btn">Login</button>
            </div>
        </nav>
    );
};

export default Navbar;