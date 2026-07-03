import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting Royal Grocery!");
    setFormData({ name: "", email: "", message: "" });
  };

  useEffect(() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);

  return (
    <div className="contact-container">
      <h2>Contact Royal Grocery</h2>

      <div className="contact-wrapper">

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* Store Info */}
        <div className="contact-info">
          <h3>Our Store</h3>
          <p>📍 Chennai, Tamil Nadu</p>
          <p>📞 +91 98765 43210</p>
          <p>📧 royalgrocery@gmail.com</p>
          <p>🕒 Mon - Sun : 8:00 AM - 10:00 PM</p>

          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>

      </div>

      {/* Map Section */}
      {/* <div className="map-section">
        <iframe
          title="store-location"
          src="https://www.google.com/maps/embed?"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div> */}
    </div>
  );
};

export default Contact;