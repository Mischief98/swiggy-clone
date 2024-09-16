import React, { useState, useEffect } from 'react';
import axios from 'axios';
import mainLogo from '../images/Swiggy-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Main = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [hotels, setHotels] = useState(null);
  const [chat,setChat] = useState (false)
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/foodItems')
      .then(response => setFoodItems(response.data))
      .catch(error => console.error('Error fetching foodItems:', error));

    axios.get('http://localhost:3001/Resturent')
      .then(response => {
        const restaurantsWithLikes = response.data.map(restaurant => ({
          ...restaurant,
          likeCount: 0,
          showHeart: false
        }));
        setRestaurants(restaurantsWithLikes);
      })
      .catch(error => console.error('Error fetching restaurants:', error));
  }, []);

  useEffect(() => {
    if (hotels !== null) {
      navigate('/hotel', { state: { id: hotels } });
    }
  }, [hotels, navigate]);

  const handleRestaurant = (id) => {
    setHotels(id);
  };
  const handleChineeeseRestaurant = (id) => {
    setHotels(id);
    if (id === '5') { 
      navigate('/hotel', { state: { id: '5' } });
    }
  };
  const handleSouthIndianRestaurant = (id) => {
    setHotels(id);
    if (id === '4') { 
      navigate('/hotel', { state: { id: '4' } });
    }
  };
  const handleIndianRestaurant = (id) => {
    setHotels(id);
    if (id === '3') { 
      navigate('/hotel', { state: { id: '3' } });
    }
  };
  const handleIceCreamRestaurant = (id) => {
    setHotels(id);
    if (id === '10') { 
      navigate('/hotel', { state: { id: '10' } });
    }
  };
  const handleContinentalRestaurant = (id) => {
    setHotels(id);
    console.log(id)
    if (id === '1') { 
      navigate('/hotel', { state: { id: '1' } });
    }
  };
  const handleBriyaniRestaurant = (id) => {
    setHotels(id);
    if (id === '6') { 
      navigate('/hotel', { state: { id: '6' } });
    }
  };
  const handleLassiRestaurant = (id) => {
    setHotels(id);
    if (id === '9') { 
      navigate('/hotel', { state: { id: '9' } });
    }
  };
  const handleDessertRestaurant = (id) => {
    setHotels(id);
    if (id === '2') { 
      navigate('/hotel', { state: { id: '2' } });
    }
  };
  const handleDosaRestaurant = (id) => {
    setHotels(id);
    if (id === '7') { 
      navigate('/hotel', { state: { id: '7' } });
    }
  };
  const handleLike = (restaurantId) => {
    setRestaurants(prevRestaurants => prevRestaurants.map(restaurant => {
      if (restaurant.id === restaurantId) {
        return {
          ...restaurant,
          likeCount: restaurant.likeCount +1 ,
          showHeart: true+1
        };
      }
      return restaurant;
    }));
  };
const handleChat = ()=>{
  setChat(!chat)
}
  return (
    <>
      <header className="navbar">
  <div className="logo">
    SWIGGY
    <img className='main_Logo' src={mainLogo} alt='Swiggy Logo' />
  </div>
  <nav className="menu">
    <div className="menu-item">
      <Link to="/search">
        <i className="fas fa-search"></i> 
        <span className="popup">Search for food</span>
      </Link>
    </div>
    <div className="menu-item">
      <Link to="/cart">
        <i className="fas fa-shopping-cart"></i> 
        <span className="popup">View your cart</span>
      </Link>
    </div>
    <div className="menu-item">
      <Link to="/help">
        <i className="fas fa-question-circle"></i>
        <span className="popup">Need help?</span>
      </Link>
    </div>
    <div className="menu-item">
      <Link to="/contact">
        <i className="fas fa-envelope"></i> 
        <span className="popup">Get in touch</span>
      </Link>
    </div>
    <div className="menu-item">
      <Link to="/reg">
        <i className="fas fa-sign-in-alt"></i> 
        <span className="popup">Sign in</span>
      </Link>
    </div>
  </nav>
</header>

<main>
  <div className="main_image">
    <div className="main_logo">
      <h1 className='swiggy_name'>SWIGGY</h1>
    </div>
  </div>
</main>
<div className='container-fluid food_carousel'>
  <h1 className='carousel_h1'>What's on your mind?</h1>
  <div className='food_gallery'>
    <div className='food_slider'>
      {foodItems.concat(foodItems).map((item, index) => (
        <div className='food_item' key={index}>
          <img src={item.image} alt={item.name} />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  </div>
</div>
<div className='ai_message' onClick={handleChat}>
<i class="fa-solid fa-robot message"></i>
</div>
{chat &&(
  <div className='chat_style'>
    <div className='chat_in'>
      <img className='ai_robot_img' src='https://i.pinimg.com/736x/cc/b4/3a/ccb43a7d18e71e4bb1574c6de0d9cd79.jpg' alt='ai_robot'></img>
      <h3 className='ai_h3'>Gigibot</h3>
    </div>
    <div className='chat_bottom'>
      <input className='chat_input'></input>
      <button className='chat_btn'>Send</button>
    </div>
  </div>
)}
      <div className='container'>
        <h1 className='res_h1'>Restaurants with online food delivery in Nagercoil:</h1>
        <div className='features_option'>
          <button className='feature_btn'>Offers%</button>
          <button className='feature_btn'>Fast Delivery</button>
          <button className='feature_btn'>Rating 4.0+</button>
          <button className='feature_btn'>view all</button>
          
        </div>
        
        <div className='row'>
  {restaurants.map((restaurant) => (
    <div className='col-lg-3 col-md-6 mb-4' key={restaurant.id}>
      <div className='card newgen-card'>
        <div className='card-img-container'>
          <img className='card-img' src={restaurant.images} alt={restaurant.name} />
          <div className='overlay'>
            <button className='btn btn-primary' onClick={() => handleRestaurant(restaurant.id)}>View</button>
          </div>
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{restaurant.name}</h5>
          <p className='card-text'><strong>Rating:</strong> {restaurant.rating}</p>
          <p className='card-text'><strong>Place:</strong> {restaurant.place}</p>
          <p className='card-text'><strong>Delivery Time:</strong> {restaurant.time}</p>
          <p className='card-text'><strong>Offers:</strong> {restaurant.offers ? 'Yes' : 'No'}</p>
          <p className='card-text'><strong>Type:</strong > {restaurant.type}</p>
          <div className='d-flex justify-content-between align-items-center'>
            <button
              className={`btn btn-sm btn-outline-like like-btn ${restaurant.showHeart ? 'heart-animation' : ''}`}
              onClick={() => handleLike(restaurant.id)}>
              <FontAwesomeIcon icon={faHeart} /> Like {restaurant.likeCount}
              {restaurant.showHeart && <span className="heart-icon"> ❤️ </span> }
            </button>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>

        <div className='location'>
          <h1 className='location_h1'>Best Cuisines Near Me</h1>
        </div>
        <div className='location_div'>
          <div className="buttondiv">
          <button className="locnbtn" onClick={() => handleChineeeseRestaurant('5')}>
              Chinese Restaurant Near Me
            </button>
            <button className="locnbtn" onClick={() => handleSouthIndianRestaurant('4')}>South Indian Restaurant Near Me</button>
            <button className="locnbtn" onClick={() => handleIndianRestaurant('3')}>Indian Restaurant Near Me</button>
          </div>
          <div className="buttondiv">
            <button className="locnbtn" onClick={() => handleIceCreamRestaurant('10')}>Ice Cream Restaurant Near Me</button>
            <button className="locnbtn" onClick={() => handleContinentalRestaurant('6')}>Continental Restaurant Near Me</button>
            <button className="locnbtn" onClick={() => handleBriyaniRestaurant('5')}>Best Biryani Near Me</button>
          </div>
          <div className="buttondiv">
            <button className="locnbtn" onClick={() => handleLassiRestaurant('9')}>Best lassi Near Me</button>
            <button className="locnbtn" onClick={() => handleDessertRestaurant('2')}>Best Desserts Near Me</button>
            <button className="locnbtn" onClick={() => handleDosaRestaurant('7')}>Best Dosa Near Me</button>
          </div>
        </div>
        
      </div>
      <div className='footer_social'>
        <div className='footer_social_left'>
          <p className='footer_social_h1'>For a better experience, download the Swiggy app now</p>
        </div>
        <div className='footer_social_right'>
          <a href="https://play.google.com/store/search?q=swiggy&c=apps&hl=en" target="_blank" rel="noopener noreferrer">
            <img className='googleplay_scl' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png' alt='Google Play Store' />
          </a>
          <a href="https://apps.apple.com/in/app/swiggy-food-grocery-dineout/id989540920" target="_blank" rel="noopener noreferrer">
            <img className='appstore_scl' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="App Store" />
          </a>
        </div>
      </div>
      <footer className="footer">
            <div className="footer-content">
                <div className="footer-column">
                    <img src={mainLogo} alt="Swiggy Logo" className="logo-footer" />
                    <p>© 2024 Bundl Technologies Pvt. Ltd</p>
                </div>
                <div className="footer-column">
                    <h3>Company</h3>
                    <ul>
                        <li><a to="#">About</a></li>
                        <li><a to="#">Careers</a></li>
                        <li><a to="#">Team</a></li>
                        <li><a to="#">Swiggy One</a></li>
                        <li><a to="#">Swiggy Instamart</a></li>
                        <li><a to="#">Swiggy Genie</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>Contact us</h3>
                    <ul>
                        <li><a to="#">Help & Support</a></li>
                        <li><a to="#">Partner with us</a></li>
                        <li><a to="#">Ride with us</a></li>
                    </ul>
                    <h3>Legal</h3>
                    <ul>
                        <li><a to="#">Terms & Conditions</a></li>
                        <li><a to="#">Cookie Policy</a></li>
                        <li><a to="#">Privacy Policy</a></li>
                        <li><a to="#">Investor Relations</a></li>
                    </ul>
                </div>
                <div className="footer-column">
                    <h3>We deliver to:</h3>
                    <ul>
                        <li><a to ="#">Bangalore</a></li>
                        <li><a to="#">Gurgaon</a></li>
                        <li><a to="#">Hyderabad</a></li>
                        <li><a to="#">Delhi</a></li>
                        <li><a to="#">Mumbai</a></li>
                        <li><a to="#">Pune</a></li>
                    </ul>
                    <div className="dropdown">
                        <button className="dropbtn">589 cities</button>
                    </div>
                </div>
            </div>
        </footer>
        <div className='copyright'>swiggycopyright@sarathi 2024</div>
    </>
  );
};

export default Main;
