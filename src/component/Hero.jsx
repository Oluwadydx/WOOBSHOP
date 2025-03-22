import React from "react";
import "../Styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="greeting">
          <img src="assests/Icons/cloudy.png" alt="cloudy image" />
          Good morning
        </span>
        <div className="hero-main">
          <div className="hero-image">
            <img
              src="/assests/Frames/sharingan.png"
              alt="sharingan"
              className="sharingan"
            />
          </div>

          <div className="hero-text">
            <h1>
              Welcome to <br />
              WeebShop
            </h1>
            <p>
              The best lifestyle/streetwear anime market in{" "}
              <br className="mobile-break" />
              Nigeria.
            </p>
            <button className="start-shopping">START SHOPPING ↓</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
