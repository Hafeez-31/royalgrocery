import React, { useEffect, useState } from "react";
import "./Orders.css";

const Orders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const savedOrders = JSON.parse(localStorage.getItem("orders")) || [];
        setOrders(savedOrders);
    }, []);

    const deleteOrder = (index) => {
        const updatedOrders = orders.filter((_, i) => i !== index);
        setOrders(updatedOrders);
        localStorage.setItem("orders", JSON.stringify(updatedOrders));
    };

    if (orders.length === 0) {
        return (
            <div className="orders-empty">
                <h2>No Orders Yet</h2>
                <p>Your placed orders will appear here.</p>
            </div>
        );
    }

    return (
        <div className="orders-container">
            <h2>Your Orders</h2>

            {orders.map((order, index) => (

                <div className="order-card" key={index}>

                    <div className="order-header">
                        <span>Order ID: {order.orderId}</span>
                        <div className="order-check">
                            <span className="order-status">Confirmed</span>

                            <button
                                className="delete-order"
                                onClick={() => deleteOrder(index)}
                            >
                                Delete
                            </button>
                        </div>
                    </div>

                    <p className="order-date">Placed on: {order.date}</p>

                    {/* Customer Details */}
                    <div className="customer-details">
                        <h3>Customer Details</h3>
                        <p><strong>Name:</strong> {order.customerName}</p>
                        <p><strong>Phone:</strong> {order.phone}</p>
                        <p><strong>Address:</strong> {order.address}</p>
                    </div>

                    {/* Order Items */}
                    <div className="order-items">
                        {order.items.map((item, i) => (
                            <div className="order-item" key={i}>
                                <span>{item.name}</span>
                                <span>Qty: {item.quantity}</span>
                                <span>₹{item.price}</span>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <div className="order-footer">
                        <p>Payment: {order.paymentMethod.toUpperCase()}</p>
                        <p>Subtotal: ₹{order.subtotal}</p>
                        <p>Delivery Fee: ₹{order.deliveryFee}</p>
                        <h3>Total: ₹{order.totalAmount}</h3>
                    </div>

                </div>

            ))}

        </div>
    );
};

export default Orders;