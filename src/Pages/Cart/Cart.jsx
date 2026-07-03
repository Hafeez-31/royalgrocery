import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

const DELIVERY_PER_ITEM = 30; // Delivery fee per item

const Cart = ({ cartData, setCart, productsData }) => {

  const navigate = useNavigate();

  const allProducts = Object.values(productsData).flat();

  const cartArray = Object.keys(cartData).map((id) => {
    const product = allProducts.find((p) => p.id === Number(id));
    return {
      ...product,
      quantity: cartData[id],
    };
  });

  const totalQuantity = cartArray.reduce((acc, item) => acc + item.quantity, 0);

  const deliveryFee = totalQuantity * DELIVERY_PER_ITEM;

  const subtotal = cartArray.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const total = subtotal + deliveryFee;

  const handleRemove = (id) => {
    const updatedCart = { ...cartData };
    delete updatedCart[id];
    setCart(updatedCart);
  };

  const handleQuantityChange = (id, value) => {
    const qty = Number(value);
    if (qty < 1) return; // prevent negative
    setCart((prevCart) => ({
      ...prevCart,
      [id]: qty,
    }));
  };

  const handleCheckout = () => {
    if (total === 0) {
      alert("Cart is empty!");
      return;
    }

    navigate("/payment", {
      state: {
        cartItems: cartArray,
        subtotal,
        deliveryFee,
        total,
      },
    });
  };


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);


  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartArray.length === 0 ? (
        <p className="empty-cart">Your cart is empty.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Delete Item</th>
              </tr>
            </thead>
            <tbody>
              {cartArray.map((item) => (
                <tr key={item.id}>
                  <td className="product-info">
                    <img src={item.image} alt={item.name} />
                    <span>{item.name}</span>
                  </td>
                  <td>₹{item.price}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    />
                  </td>
                  <td>₹{item.price * item.quantity}</td>
                  <td>
                    <button className="remove-btn" onClick={() => handleRemove(item.id)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <div className="fees">
              <p>Subtotal: ₹{subtotal}</p>
              {cartArray.length > 0 && <p>Delivery Fee: ₹{deliveryFee}</p>}
              <h3>Total: ₹{total}</h3>
            </div>
            <button className="checkout-btn" onClick={handleCheckout}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;