import React from 'react';
import '../Styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column footer-contact">
          <div className="footer-logo">
            <img src="/assests/Frames/weebshop-logo.png" alt="WeebShop Logo" />
            <span>Weebshop</span>
          </div>
          <div className="contact-details">
            <h3>Contact us</h3>
            <p>+234-(0)-801-2345-678</p>
            <p>weebshop@gmail.com</p>
            <div className="social-icons">
              <a href="#"><img src="/assests/Icons/twitter.png" alt="Twitter Icon" /></a>
              <a href="#"><img src="/assests/Icons/instagram.png" alt="Instagram Icon" /></a>
              <a href="#"><img src="/assests/Icons/linkedin-logo.png" alt="LinkedIn Icon" /></a>
            </div>
          </div>
        </div>

        {/* Combined section for mobile */}
        <div className="footer-column footer-links-policies">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <a href="#">FAQ</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Shipping & Return Policy</a>
          <a href="#">Privacy Policy</a>
        </div>

        {/* Separate sections for larger screens */}
        <div className="footer-column footer-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <a href="#">FAQ</a>
        </div>

        <div className="footer-column footer-policies">
          <a href="#">Terms & Conditions</a>
          <a href="#">Shipping & Return Policy</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="copyright">©2024 ALL RIGHTS RESERVED.</p>
        <p className="powered-by">
          Powered by <span className="platr">Platr</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;