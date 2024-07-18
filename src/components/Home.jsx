import React from 'react';
import "../sass/Home.scss";
import Header from '../components/Header';

const HomePage = () => {
  return (
    <div className="home-container">
    <div className="header-home">
      <Header />
    </div>
      <h1>Employee Management System</h1>
      <p>Welcome to the dashboard. Here you can manage your employees and view important statistics.</p>
    </div>
  );
}

export default HomePage;