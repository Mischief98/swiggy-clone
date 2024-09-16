import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../images/Swiggy-logo.png';

const Contact = () => {
  return (
    <div className="contact-page-container">
      <header className="contact-navbar">
        <div className="contact-logo">
          <Link to="/main">
            <img className='contact-main-logo' src={mainLogo} alt='Swiggy Logo' />
          </Link>
        </div>
        <nav className="contact-menu">
          <div className="contact-menu-item">
            <Link to="/search">
              <i className="fas fa-search"></i> Search
              <span className="contact-popup">Search for food</span>
            </Link>
          </div>
          <div className="contact-menu-item">
            <Link to="/cart">
              <i className="fas fa-shopping-cart"></i> Cart
              <span className="contact-popup">View your cart</span>
            </Link>
          </div>
          <div className="contact-menu-item">
            <Link to="/help">
              <i className="fas fa-question-circle"></i> Help
              <span className="contact-popup">Need help?</span>
            </Link>
          </div>
          <div className="contact-menu-item">
            <Link to="/contact">
              <i className="fas fa-envelope"></i> Contact
              <span className="contact-popup">Get in touch</span>
            </Link>
          </div>
          <div className="contact-menu-item">
            <Link to="/reg">
              <i className="fas fa-sign-in-alt"></i> Sign In
              <span className="contact-popup">Sign in</span>
            </Link>
          </div>
        </nav>
      </header>
      
      <main className="contact-main-content">
        <h1 className="contact-title">Contact Us</h1>
        
        <section className="contact-info">
          <h2 className="contact-section-title">Get in Touch</h2>
          <p>If you have any questions, feel free to reach out to us through any of the following methods:</p>
          <ul className="contact-info-list">
            <li>Email: psarathi959@gmail.com</li>
            <li>Phone: +1 123 456 7890</li>
            <li>Address: 123 Swiggy Street, Food City, FL 12345</li>
          </ul>
        </section>

        <section className="contact-form-section">
          <h2 className="contact-section-title">Contact Form</h2>
          <form className="contact-form">
            <div className="contact-form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="contact-form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="contact-form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="contact-form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="contact-submit-button">Submit</button>
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

export default Contact;
