import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./PaymentPage.css";

const PaymentPage = ({ setCart }) => {

    const location = useLocation();
    const navigate = useNavigate();

    const { cartItems, subtotal, deliveryFee, total } = location.state || {};

    const [customerName, setCustomerName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const [paymentMethod, setPaymentMethod] = useState("");

    const [cardName, setCardName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvv, setCvv] = useState("");

    const [upiId, setUpiId] = useState("");

    const generateOrderId = () => {
        return "ORD" + Math.floor(Math.random() * 1000000);
    };

    const validateCustomer = () => {
        return (
            customerName.trim().length > 2 &&
            phone.length === 10 &&
            address.trim().length > 5
        );
    };

    const validateCard = () => {
        return (
            cardName.trim().length > 2 &&
            cardNumber.replace(/\s/g, "").length === 16 &&
            expiry.length === 5 &&
            cvv.length === 3
        );
    };

    // Validate UPI
    const validateUPI = () => {
        const upiRegex = /^[a-zA-Z0-9.\-_]{2,}@[a-zA-Z]{2,}$/;
        return upiRegex.test(upiId);
    };

    // Order Validation
    const isOrderValid = () => {

        if (!validateCustomer()) return false;

        if (paymentMethod === "cod") return true;

        if (paymentMethod === "card") return validateCard();

        if (paymentMethod === "upi") return validateUPI();

        return false;
    };

    const handlePlaceOrder = () => {

        if (!isOrderValid()) {
            alert("Please fill all details correctly");
            return;
        }

        const orderId = generateOrderId();

        const orderDetails = {
            orderId,
            items: cartItems,
            subtotal,
            deliveryFee,
            totalAmount: total,
            paymentMethod,
            customerName,
            phone,
            address,
            date: new Date().toLocaleString(),
        };

        const existingOrders =
            JSON.parse(localStorage.getItem("orders")) || [];

        existingOrders.push(orderDetails);

        localStorage.setItem("orders", JSON.stringify(existingOrders));

        setCart({});

        alert("🎉 Order Placed Successfully!");

        navigate("/orders");

    };

    return (

        <div className="payment-container">

            <h2>Checkout</h2>

            <div className="customer-form">

                <input
                    type="text"
                    placeholder="Full Name"
                    value={customerName}
                    onChange={(e) =>
                        setCustomerName(e.target.value.replace(/[^a-zA-Z\s]/g, ""))
                    }
                />

                <input
                    type="text"
                    placeholder="Phone Number"
                    maxLength="10"
                    value={phone}
                    onChange={(e) =>
                        setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
                    }
                />

                <textarea
                    placeholder="Delivery Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

            </div>

            <h3>Select Payment Method</h3>

            <div className="payment-options">

                <label>
                    <input
                        type="radio"
                        name="payment"
                        value="cod"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Cash on Delivery
                </label>

                <label>
                    <input
                        type="radio"
                        name="payment"
                        value="card"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    Credit / Debit Card
                </label>

                {paymentMethod === "card" && (

                    <div className="card-details">

                        <input
                            type="text"
                            placeholder="Card Holder Name"
                            value={cardName}
                            onChange={(e) => setCardName(e.target.value)}
                        />

                        <input
                            type="text"
                            placeholder="Card Number"
                            maxLength="19"
                            value={cardNumber}
                            onChange={(e) => {

                                let value = e.target.value.replace(/\D/g, "");
                                value = value.substring(0, 16);
                                value = value.replace(/(.{4})/g, "$1 ").trim();

                                setCardNumber(value);

                            }}
                        />

                        <div className="card-row">

                            <input
                                type="text"
                                placeholder="MM/YY"
                                maxLength="5"
                                value={expiry}
                                onChange={(e) => setExpiry(e.target.value)}
                            />

                            <input
                                type="password"
                                placeholder="CVV"
                                maxLength="3"
                                value={cvv}
                                onChange={(e) =>
                                    setCvv(e.target.value.replace(/\D/g, "").slice(0, 3))
                                }
                            />

                        </div>

                    </div>

                )}

                <label>
                    <input
                        type="radio"
                        name="payment"
                        value="upi"
                        onChange={(e) => setPaymentMethod(e.target.value)}
                    />
                    UPI
                </label>

                {paymentMethod === "upi" && (

                    <div className="upi-details">

                        <input
                            type="text"
                            placeholder="Enter UPI ID"
                            value={upiId}
                            onChange={(e) =>
                                setUpiId(e.target.value.replace(/\s/g, "").toLowerCase())
                            }
                        />

                    </div>

                )}

            </div>

            <div className="price-summary">
                <p>Subtotal: ₹{subtotal}</p>
                <p>Delivery Fee: ₹{deliveryFee}</p>
                <h3>Total Payable: ₹{total}</h3>
            </div>
            <button
                className="place-order-btn"
                onClick={handlePlaceOrder}
                disabled={!isOrderValid()}
            >
                Place Order ₹{total}
            </button>

        </div>

    );

};

export default PaymentPage;