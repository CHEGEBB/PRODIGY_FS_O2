import React from 'react';
import "../sass/Home.scss";
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div className="home-container">
    <div className="header-home">
      <Header />
    </div>
    <div className="facts">
      <div className="total-employees"></div>
      <div className="total-expenses"></div>
      <div className="total-income"></div>
      <div className="total-clients"></div>
      
    </div>
    </div>
  );
}

export default HomePage;