import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../images/Swiggy-logo.png';

const Help = () => {
  return (
    <div className="help-page-container">
      <header className="help-navbar">
        <div className="help-logo">
          <Link to="/">
            <img className='help-main-logo' src={mainLogo} alt='Swiggy Logo' />
          </Link>
        </div>
        <nav className="help-menu">
          <div className="help-menu-item">
            <Link to="/search">
              <i className="fas fa-search"></i> Search
              <span className="help-popup">Search for food</span>
            </Link>
          </div>
          <div className="help-menu-item">
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i> Cart
              <span className="help-popup">View your cart</span>
            </Link>
          </div>
          <div className="help-menu-item">
            <Link to="/help">
              <i className="fas fa-question-circle"></i> Help
              <span className="help-popup">Need help?</span>
            </Link>
          </div>
          <div className="help-menu-item">
            <Link to="/contact">
              <i className="fas fa-envelope"></i> Contact
              <span className="help-popup">Get in touch</span>
            </Link>
          </div>
          <div className="help-menu-item">
            <Link to="/reg">
              <i className="fas fa-sign-in-alt"></i> Sign In
              <span className="help-popup">Sign in</span>
            </Link>
          </div>
        </nav>
      </header>
      
      <main className="help-main-content">
        <h1 className="help-title">Help & Support</h1>

        <section className="help-faq-section">
          <h2 className="help-section-title">Frequently Asked Questions (FAQs)</h2>
          <div className="help-faq-item">
            <h3 className="help-faq-question">How do I place an order?</h3>
            <p className="help-faq-answer">To place an order, browse through our menu, add items to your cart, and proceed to checkout.</p>
          </div>
          <div className="help-faq-item">
            <h3 className="help-faq-question">What are the delivery charges?</h3>
            <p className="help-faq-answer">Delivery charges vary based on your location and the restaurant. You can see the charges before you confirm your order.</p>
          </div>
          <div className="help-faq-item">
            <h3 className="help-faq-question">How can I track my order?</h3>
            <p className="help-faq-answer">You can track your order status in the 'My Orders' section in your account.</p>
          </div>
        </section>

        <section className="help-contact-section">
          <h2 className="help-section-title">Contact Us</h2>
          <p>If you need further assistance, feel free to contact us:</p>
          <ul className="help-contact-list">
            <li>Email: psarathi959@gmail.com</li>
            <li>Phone: +1 123 456 7890</li>
          </ul>
        </section>

        <section className="help-support-form-section">
          <h2 className="help-section-title">Support Form</h2>
          <form className="help-support-form">
            <div className="help-form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="help-form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="help-form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="help-submit-button">Submit</button>
          </form>
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

export default Help;
