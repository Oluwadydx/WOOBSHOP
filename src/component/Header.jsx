import React, { useState } from 'react';
import '../Styles/Header.css';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    console.log('Searching for:', e.target.value); // Replace with actual search logic
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-wrapper">
      <div className="top-header">
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logo">
          <img src="/assests/Frames/weebshop-logo.png" alt="WeebShop Logo" />
          <span>WeebShop</span>
        </div>
        <div className="search-cart">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearch}
            />
            <img src="/assests/Icons/search.png" alt="Search" className="search-icon" />
          </div>
          <a href="#" className="user">
            <img src="/assests/Icons/user.png" alt="User" className="user-icon" />
          </a>
          <a href="#" className="cart">
            <img src="/assests/Icons/cart.png" alt="Cart" className="cart-icon" />
          </a>
        </div>
      </div>
      <nav className={`bottom-header ${isMenuOpen ? 'active' : ''}`}>
        <div className="nav-links-center">
          <a href="#">MY HERO ACADEMIA</a>
          <a href="#">AOT</a>
          <a href="#">NARUTO</a>
          <a href="#">DEMON SLAYER</a>
          <a href="#">HOODIES</a>
          <a href="#">T-SHIRTS</a>
          <a href="#">SHORTS</a>
        </div>
        <div className="nav-links-right">
          <a href="#">About Us</a>
          <a href="#">FAQs</a>
        </div>
      </nav>
    </div>
  );
}

export default Header;