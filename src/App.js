import React from 'react';
import Header from './component/Header';
import Hero from './component/Hero';
import Banner from './component/Banner';
import Shop from './component/Shop';
import Footer from './component/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
     <Header /> 
      <Hero />  
      <Banner />
      <Shop />
      <Footer />

    </div>
  );
}

export default App;