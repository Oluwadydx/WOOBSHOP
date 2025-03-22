import React from "react";
import "../Styles/Header.css";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="logo">
        <img src="assests/Frames/weebshop-logo.png" alt="WeebShop" />
        <span>WeebShop</span>
      </div>

      <nav className={`main-nav ${isMenuOpen ? "active" : ""}`}>
        <a href="#">MY HERO ACADEMIA</a>
        <a href="#">AOT</a>
        <a href="#">NARUTO</a>
        <a href="#">DEMON SLAYER</a>
        <a href="#">HOODIES</a>
        <a href="#">T-SHIRTS</a>
        <a href="#">SHORTS</a>
      </nav>
      <div className="search-cart">
        <input type="text" placeholder="Search" />

        <div className="icons">
          <img src="assests/Icons/user.png" alt="User Icon" />
          <img src="assests/Icons/online-shopping.png" alt="Cart Icon" />
        </div>
      </div>
    </header>
  );
}

export default Header;
