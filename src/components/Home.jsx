import React from 'react';
import "../sass/Home.scss";
import Header from '../components/Header';
import Countup from 'react-countup';
import Assets from "../images/assets-w.png";
import Employees from "../images/staff-w.png";
import Expenses from "../images/expense-w.png";
import Income from "../images/income-w.png";
import Clients from "../images/user-1.jpg";

const FactCard = ({ title, end, prefix, image }) => (
  <div className={`total-${title.toLowerCase()}`}>
    <h2>{title}</h2>
    <div className="count">
      <Countup end={end} duration={2.5} prefix={prefix} 
        onStart={() => ({ animation: 'countUp 0.5s ease forwards' })}
      />
    </div>
    <img src={image} alt={title} />
  </div>
);

const HomePage = () => {
  const facts = [
    { title: 'Employees', end: 1000, image: Employees },
    { title: 'Expenses', end: 500000, prefix: '$', image: Expenses },
    { title: 'Income', end: 700000, prefix: '$', image: Income },
    { title: 'Clients', end: 2000, image: Clients },
    { title: 'Assets', end: 1000000, prefix: '$', image: Assets },
  ];

  return (
    <div className="home-container">
      <div className="header-home">
        <Header />
      </div>
      <div className="facts">
        {facts.map((fact, index) => (
          <FactCard key={index} {...fact} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;