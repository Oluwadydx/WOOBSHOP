import React from "react";
import "../Styles/Shop.css";

function Shop() {
  const products = [
    {
      id: 1,
      name: "Anime Tees",
      price: "₦10,500",
      image: "/assests/Frames/naruto-tshirt.png",
    },
    {
      id: 2,
      name: "AOT Bracelets",
      price: "₦3,500",
      image: "/assests/Frames/aot-bracelets.png",
    },
    {
      id: 3,
      name: "Bleach Necklace",
      price: "₦4,500",
      image: "/assests/Frames/bleach-necklace.png",
    },
    {
      id: 4,
      name: "Anime Cosplay Katana",
      price: "₦13,000",
      image: "/assests/Frames/katana.png",
    },
    {
      id: 5,
      name: "Bleach Necklace",
      price: "₦4,500",
      image: "/assests/Frames/bleach-necklace.png",
    },
    {
      id: 6,
      name: "Anime Tees",
      price: "₦10,500",
      image: "/assests/Frames/naruto-tshirt.png",
    },
    {
      id: 7,
      name: "Anime Cosplay Katana",
      price: "₦13,000",
      image: "/assests/Frames/katana.png",
    },
    {
      id: 8,
      name: "AOT Bracelets",
      price: "₦3,500",
      image: "/assests/Frames/aot-bracelets.png",
    },
  ];

  return (
    <section className="shop">
      <h2>SHOP</h2>
      <div className="filter-nav">
        <a href="#" className="active">
          ALL
        </a>
        <a href="#">MY HERO ACADEMIA</a>
        <a href="#">AOT</a>
        <a href="#">NARUTO</a>
        <a href="#">DEMON SLAYER</a>
        <a href="#">HOODIES</a>
        <a href="#">T-SHIRTS</a>
        <a href="#">SHORTS</a>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product" key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p className="price">{product.price}</p>
            <button className="add-to-cart">🛒</button>
          </div>
        ))}
      </div>
      <button className="see-all">SEE ALL</button>
    </section>
  );
}

export default Shop;
