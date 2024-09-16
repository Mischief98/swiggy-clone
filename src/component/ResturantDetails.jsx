
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import axios from 'axios';
import { useCart } from "./CartContext"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const RestaurantDetails = () => {
  const location = useLocation();
  const id = location.state?.id;
  const [resDetails, setResDetails] = useState(null);
  const [loading, setIsLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchDetails = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://localhost:3001/Resturent/${id}`);
        const dataWithCount = response.data;
        dataWithCount.menu = dataWithCount.menu.map(item => ({ ...item, count: 0 }));
        setResDetails(dataWithCount);
      } catch (error) {
        console.error('Error fetching restaurant details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchDetails();
    }
  }, [id]);

  const handleIncrement = (index) => {
    const newMenu = [...resDetails.menu];
    newMenu[index].count += 1;
    setResDetails({ ...resDetails, menu: newMenu });
  };

  const handleDecrement = (index) => {
    const newMenu = [...resDetails.menu];
    if (newMenu[index].count > 0) {
      newMenu[index].count -= 1;
    }
    setResDetails({ ...resDetails, menu: newMenu });
  };

  const handleAddToCart = (item) => {
    addToCart({ ...item, count: item.count });
    const newMenu = [...resDetails.menu];
    newMenu[item.index].count = 0; 
    setResDetails({ ...resDetails, menu: newMenu });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!resDetails || !resDetails.menu) {
    return <div>No details or menu found...</div>;
  }

  return (
    <div className="restaurant-details">
      <Link to="/main" className="home-button">Home</Link>
      <Link to="/cart" className="cart-button">
        <FontAwesomeIcon icon={faShoppingCart} />
      </Link>
      <div className="main-image" style={{ backgroundImage: `url(${resDetails.menu[0]?.mainimage})` }}>
        <h1 className="main-title">{resDetails.menu[0]?.maintitle}</h1>
      </div>
      <h2>Menu</h2>
      <ul className="menu-list">
        {resDetails.menu.map((item, index) => (
          <li key={index} className="menu-items">
            <div className="menu-details">
              <h3>{item.imagename}</h3>
              <details>
                <summary>view incredients</summary>
                <p>{item.imagecontent}</p>
                </details>
              <p><strong>Price:</strong> ₹{item.imageprice}</p>
              <p><strong>Rating:</strong> {item.imagerating}</p>
              <div className="rating" style={{ '--rating-width': `${(item.imagerating / 20) * 100}%` }}></div>
            </div>
            <div className="menu-image-container">
              <img src={item.menuimage} alt={item.imagename} className="menu-image" />
              <div className="menu-controls">
  <button className="menu-btn1" onClick={() => handleDecrement(index)}>-</button>
  <span className="menu-count">{item.count}</span>
  <button className="menu-btn2" onClick={() => handleIncrement(index)}>+</button>
  <button className="add-to-cart-btn" onClick={() => handleAddToCart({ ...item, index })}>
    <FontAwesomeIcon icon={faShoppingCart} /> 
  </button>
</div>

            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantDetails;
