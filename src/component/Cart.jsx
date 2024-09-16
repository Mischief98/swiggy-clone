import React from 'react';
import { useCart } from './CartContext'; 
import { Link } from 'react-router-dom';
import cartImage from "../images/emptycartimage.jpg"
const Cart = () => {
  const { cart, clearCart, removeFromCart } = useCart();

  return (
    <div className="cart-page">
      <h1 className="cart-title">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="empty-cart-container">
          <div className='cart_empty'>
            <div className='cart_empty_top'>
              <img src={cartImage} alt="cart" className="cart_empty_img" />
            </div>
            <div className='cart_empty_bottom'>
              <div className='emptycart_p'>
                <h3 className='emptycart-h1'>Your cart is empty</h3>
              </div>
              <div>
                <Link to ="/main"><button className='return_toshopping'>Continue Shopping</button></Link>
              </div>
            </div>
          </div>
        </div>
        
        
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
              <button 
                className="delete-item-btn" 
                onClick={() => removeFromCart(item.imagename)}
              >
                &times;
              </button>
            </div>
          ))}
          <div className="cart-actions">
            <button className="clear-cart-btn" onClick={clearCart}>Clear Cart</button>
            <Link to="/delivery" className="delivery-button">Proceed to Delivery</Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
