import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../images/Swiggy-logo.png';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="search-page-container">
      <header className="search-navbar">
        <div className="search-logo">
          <Link to="/">
            <img className='search-main-logo' src={mainLogo} alt='Swiggy Logo' />
          </Link>
        </div>
        <nav className="search-menu">
          <div className="search-menu-item">
            <Link to="/search">
              <i className="fas fa-search"></i> Search
              <span className="search-popup"></span>
            </Link>
          </div>
          <div className="search-menu-item">
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i> Cart
              <span className="search-popup"></span>
            </Link>
          </div>
          <div className="search-menu-item">
            <Link to="/help">
              <i className="fas fa-question-circle"></i> Help
              <span className="search-popup"></span>
            </Link>
          </div>
          <div className="search-menu-item">
            <Link to="/contact">
              <i className="fas fa-envelope"></i> Contact
              <span className="search-popup"></span>
            </Link>
          </div>
          <div className="search-menu-item">
            <Link to="/reg">
              <i className="fas fa-sign-in-alt"></i> Sign In
              <span className="search-popup"></span>
            </Link>
          </div>
        </nav>
      </header>

      <main className="search-main-content">
        <h1 className="search-title">Find Your Favorite Food</h1>
        <form className="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            className="search-input"
            placeholder="What are you craving?"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            required
          />
          <button type="submit" className="search-button">Search</button>
        </form>

        <section className="search-results-section">
          <h2 className="search-results-title">Popular Restaurants</h2>
          <div className="search-results-container">
            <div className="restaurant-card">
              <img src="https://media.istockphoto.com/id/936205772/photo/chocolate-ice-cream-in-a-glass-cup.jpg?s=612x612&w=0&k=20&c=xBDPxGzIgWcE8tFZ4azKm1P_OoxP8H22XkyHguZlVhw=" alt="Restaurant 1" className="restaurant-image" />
              <h3 className="restaurant-name">Gourmet Icecreams Dive into Your Dream</h3>
              <p className="restaurant-description">Delicious food delivered to your door.</p>
              <Link to="/main" className="restaurant-view-button">View Menu</Link>
            </div>
            <div className="restaurant-card">
              <img src="https://img.freepik.com/free-photo/rustic-waffle-stack-with-sweet-homemade-berry-sauce-generated-by-ai_188544-27350.jpg" alt="Restaurant 2" className="restaurant-image" />
              <h3 className="restaurant-name">The Belgium Waffle Taste the Waffle</h3>
              <p className="restaurant-description">Delicious food delivered to your door.</p>
              <Link to="/main" className="restaurant-view-button">View Menu</Link>
            </div>
            <div className="restaurant-card">
              <img src="https://content.jdmagicbox.com/comp/def_content_category/pizza-outlets-pizza-hut/pizza-outlets-pizza-hut-489-v31kt.jpg" alt="Restaurant 3" className="restaurant-image" />
              <h3 className="restaurant-name">Pizza Hut Delivery to your door step</h3>
              <p className="restaurant-description">Delicious food delivered to your door.</p>
              <Link to="/main" className="restaurant-view-button">View Menu</Link>
            </div>
          </div>
        </section>
      </main>
      <footer className='contact-footer'>
        <div className='contact-footer-left'>
          <p className='contact-footer-title'>For a better experience, download the Swiggy app now</p>
        </div>
        <div className='contact-footer-right'>
          <a href="https://play.google.com/store/search?q=swiggy&c=apps&hl=en" target="_blank" rel="noopener noreferrer">
            <img className='contact-footer-googleplay' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png' alt='Google Play Store' />
          </a>
          <a href="https://apps.apple.com/in/app/swiggy-food-grocery-dineout/id989540920" target="_blank" rel="noopener noreferrer">
            <img className='contact-footer-appstore' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png" alt="App Store" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Search;
