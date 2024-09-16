import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';

const Delivery = () => {
  const { cart, clearCart } = useCart();
  const [position, setPosition] = useState([8.1833, 77.4119]);
  const [address, setAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prev) => [prev[0] + 0.001, prev[1] + 0.001]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const carIcon = new L.Icon({
    iconUrl: require('../images/car2.img.png'),
    iconSize: [40, 40],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!address || !mobile) {
      setErrorMessage('Please fill in all fields');
      return;
    }

    const orderDetails = {
      address,
      mobile,
      cart,
    };

    try {
      await axios.post('http://localhost:3001/orders', orderDetails);
      alert('Delivery on the way!');
      clearCart();
    } catch (error) {
      console.error('Error saving order:', error);
    }
  };

  return (
    <div className="delivery-page">
      <Link to="/cart" className="back-to-cart-button">Back to Cart</Link>
      <h1 className="delivery-title">Delivery in Progress</h1>
      <div className="delivery-content">
        <MapContainer center={position} zoom={13} className="delivery-map">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={carIcon} />
        </MapContainer>
        <div className="delivery-info">
          <h2>Order Details</h2>
          <form onSubmit={handleSubmit} className="delivery-form">
            {errorMessage && <p className="error-message">{errorMessage}</p>}
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                className="input-field"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobile">Mobile Number:</label>
              <input
                type="text"
                id="mobile"
                className="input-field"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="delivery-button">Submit Order</button>
          </form>
          {cart.length === 0 ? (
            <p className="empty-cart-message">Watch out on the door!</p>
          ) : (
            <div className="cart-items-container">
              {cart.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.menuimage} alt={item.imagename} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3 className="cart-item-name">{item.imagename}</h3>
                    <p className="cart-item-price">Price: ₹{item.imageprice}</p>
                    <p className="cart-item-quantity">Quantity: {item.count}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <footer className="delivery-footer">
        <p>Thank you for choosing our service!</p>
      </footer>
    </div>
  );
};

export default Delivery;
