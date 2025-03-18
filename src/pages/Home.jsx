import React from 'react'


function Home() {
  return (
    <div>
        {/*Header*/}
     <header>
        <div className="logo">
            <img src="assests/Frames/weebshop-logo.png" alt="WeebShop Logo"/>
            <span>WeebShop</span>
        </div>
        
        <div className="search-cart">
            <input type="text" placeholder="Search"/>
            <div className="icons">
                <img src="assests/Icons/user.png" alt="Account Icon"/>
                <img src="assests/Icons/online-shopping.png" alt="Cart Icon"/>
            </div>
        </div>
     </header>
c
       {/*Navigation*/}
      <nav className="main-nav">
        <div>
            <a href="#">MY HERO ACADEMIA</a>
            <a href="#">AOT</a>
            <a href="#">NARUTO</a>
            <a href="#">DEMON SLAYER</a>
            <a href="#">HOODIES</a>
            <a href="#">T-SHIRTS</a>
            <a href="#">SHORTS</a>
        </div>
        
        <div className="additional-links">
            <a href="#">ABOUT US</a>
            <a href="#">FAQS</a>
        </div>
      </nav>
      {/* Hero Section */}

     <section className="hero">
        <div className="hero-image">
            <img src="assests/Frames/sharingan.png" alt="Sharingan Image"/>
        </div>
        <div className="hero-content">
            <span className="greeting"><img src="assests/Icons/cloudy.png" alt="cloudy image"/>Good morning</span>
            <h1>Welcome to<br/> WeebShop</h1>
            <p>The best lifestyle/streetwear anime market in Nigeria.</p>
            <button className="start-shopping">START SHOPPING <span>↓</span></button>
        </div>
        
     </section>

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
       {/* Footer */}
     <footer>
       
        <div className="footer-container">
            <div className="footer-column">
                <div className="footer- logo">
                    <img src="assests/Frames/weebshop-logo.png" alt="WeebShop Logo"/>
                    <h3>WeebShop</h3>
                </div>
               
                
                <div className="footer-section">
                    <h4>CONTACT US</h4>
                    <p>Email: +234-(801)-2345-678</p>
                    <p>Email: info@weebshop.com</p>
                    <div class="social-icons">
                        <a href="#"><img src="assests/Icons/instagram.png"/></a>
                        <a href="#"><img src="assests/Icons/twitter.png"/></a>
                        <a href="#"><img src="assests/Icons/linkedin-logo.png"/></a>
                    </div>
                </div>
            </div>
           
            <div className="footer-column">
                <h4>home</h4>
                <a href="#">About Us</a>
                <a href="#">Blog</a>
                <a href="#">FAQ</a>
            </div>
            <div className="footer-column">
                <h4>TERMS & CONDITIONS</h4>
                <a href="#">Shipping & Return Policy</a>
                <a href="#">Privacy Policy</a>
            </div>
        </div>
        <div className="footer-bottom">
            <p className="copyright">©2024. ALL RIGHTS RESERVED.</p>
            <p className="powered-by">powered by <span>platr</span></p>


        </div>
      
      </footer>
    </div>
  )
}

export default Home