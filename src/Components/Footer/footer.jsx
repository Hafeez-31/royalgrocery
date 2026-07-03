import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Logo from "../../assets/images/navbar/logo.png"
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Column 1 */}
                <div className="footer-col">
                    <Link to="/"><img src={Logo} alt="Logo"/></Link>
                    <p>
                        Fresh groceries delivered to your doorstep.
                        Quality products at affordable prices.
                    </p>
                </div>

                {/* Column 2 */}
                <div className="footer-col">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">Shop</Link></li>
                        <li><Link to="/cart">Cart</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div className="footer-col">
                    <h3>Categories</h3>
                    <ul>
                        <li>Fruits & Vegetables</li>
                        <li>Dairy & Eggs</li>
                        <li>Bakery</li>
                        <li>Dry Fruits</li>
                    </ul>
                </div>

                {/* Column 4 */}
                <div className="footer-col">
                    <h3>Contact</h3>
                    <div className="contact-item">
                        <FaMapMarkerAlt />
                        <span>Chennai, Tamil Nadu</span>
                    </div>

                    <div className="contact-item">
                        <FaPhoneAlt />
                        <span>+91 98765 43210</span>
                    </div>

                    <div className="contact-item">
                        <FaEnvelope />
                        <span>support@royalgrocery.com</span>
                    </div>

                    <div className="social-icons">
                        <FaFacebookF />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                &#169; {new Date().getFullYear()} Royal Grocery. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;