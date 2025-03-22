import React from "react";
import "../Styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer- logo">
            <img src="assests/Frames/weebshop-logo.png" alt="WeebShop Logo" />
            <h3>WeebShop</h3>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <p>email: +234(0)-801-2345-678</p>
            <div className="social-icons">
              <a href="#">
                <img src="assests/Icons/instagram.png" />
              </a>
              <a href="#">
                <img src="assests/Icons/twitter.png" />
              </a>
              <a href="#">
                <img src="assests/Icons/linkedin-logo.png" />
              </a>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h4>Home</h4>
          <a href="#">About Us</a>
          <a href="#">Blog</a>
          <a href="#">FAQ</a>
        </div>

        <div className="footer-column">
          <h4>Terms & Conditions</h4>
          <a href="#">Shipping & Return Policy</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">©2024. All rights reserved.</p>
        <p className="powered-by">
          Powered by <span>Platr</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
