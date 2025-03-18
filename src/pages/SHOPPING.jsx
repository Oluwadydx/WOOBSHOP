import React from 'react'

function SHOPPING() {
  return (
    <div>
           {/* Banner */}
     <div className="banner">
        <span>COOL ANIME MERCH</span>
        <span>STREETWEAR</span>
        <span>LIFESTYLE</span>
        <span>WEEBSHOP</span>
        <span>COOL ANIME MERCH</span>
        <span>STREETWEAR</span>
        <span>LIFESTYLE</span>
        <span>WEEBSHOP</span>
     </div>
   

       {/* Shop Section */}
      <section className="shop">
        <h2>SHOP</h2>
        <div className="filter-nav">
            <a href="#" className="active">ALL</a>
            <a href="#">MY HERO ACADEMIA</a>
            <a href="#">AOT</a>
            <a href="#">NARUTO</a>
            <a href="#">DEMON SLAYER</a>
            <a href="#">HOODIES</a>
            <a href="#">T-SHIRTS</a>
            <a href="#">SHORTS</a>
        </div>
        <div className="product-grid">
            <div className="product">
                <img src="assests/Frames/naruto-tshirt.png" alt="Anime Tees"/>
                <p>Anime Tees</p>
                <p className="price">₦10,500</p>
                <button className="add-to-cart">🛒</button>
            </div>
            <div className="product">
                <img src="assests/Frames/aot-bracelets.png" alt="AOT Bracelets"/>
                <p>AOT Bracelets</p>
                <p className="price">₦3,500</p>
                <button className="add-to-cart">🛒</button>
            </div>
            <div className="product">
                <img src="assests/Frames/bleach-necklace.png" alt="Bleach Necklace"/>
                <p>Bleach Necklace</p>
                <p className="price">₦4,500</p>
                <button className="add-to-cart">🛒</button>
            </div>
            <div className="product">
                <img src="assests/Frames/katana.png" alt="Anime Cosplay Katana"/>
                <p>Anime Cosplay Katana</p>
                <p className="price">₦13,000</p>
                <button className="add-to-cart">🛒</button>
            </div>
            <div className="product">
                <img src="assests/Frames/bleach-necklace.png" alt="Bleach Necklace"/>
                <p>Bleach Necklace</p>
                <p className="price">₦4,500</p>
                <button className="add-to-cart">🛒</button>
            </div>
            <div className="product">
                <img src="assests/Frames/katana.png" alt="Anime Cosplay Katana"/>
                <p>Anime Cosplay Katana</p>
                <p className="price">₦13,000</p>
                <button className="add-to-cart">🛒</button>
            </div>
            <div className="product">
                <img src="assests/Frames/naruto-tshirt.png" alt="Anime Tees"/>
                <p>Anime Tees</p>
                <p className="price">₦10,500</p>
                <button className="add-to-cart">🛒</button>
            </div>
            <div className="product">
                <img src="assests/Frames/aot-bracelets.png" alt="AOT Bracelets"/>
                <p>AOT Bracelets</p>
                <p className="price">₦3,500</p>
                <button className="add-to-cart">🛒</button>
            </div>
        </div>
        <button className="see-all">SEE ALL</button>
      </section>
    </div>
  )
}

export default SHOPPING