// src/components/Banner.js
import React from "react";
import "../Styles/Banner.css";

function Banner() {
  const bannerItems = [
    "COOL ANIME MERCH",
    "STREETWEAR",
    "LIFESTYLE",
    "WEEBSHOP",
  ];

  // Duplicate the items to create a seamless scrolling effect
  const repeatedItems = [...bannerItems, ...bannerItems];

  return (
    <div className="banner">
      <div className="banner-content">
        {repeatedItems.map((item, index) => (
          <span key={index} className="banner-item">
            {item}
            {index < repeatedItems.length - 1 && (
              <span className="banner-dot">•</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Banner;