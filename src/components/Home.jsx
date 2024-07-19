import React from 'react';
import "../sass/Home.scss";
import Header from '../components/Header';
import Countup from 'react-countup';
import Assets from "../images/assets-w.png";
import Employees from "../images/staff-w.png";
import Expenses from "../images/expense-w.png";
import Income from "../images/income-w.png";
import Clients from "../images/user-1.jpg";
import EmployeeChart from "../charts/Performancechart";
import HireChart from "../charts/HireChart";
import TrainingDevelopmentChart from '../charts/TrainingChart';
import GraphicMember1 from "../images/member1.png";
import GraphicMember2 from "../images/memeber2.png";
import GraphicMember3 from "../images/member3.jpg";
import GraphicMember4 from "../images/member4.jpg";
import GraphicMember5 from "../images/member5.jpg";
import GraphicMember6 from "../images/member6.jpg";

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

  const TopPerformers=[
    {image:GraphicMember1,name:'John Smith',designation:'Frontend Developer',performance:'excellent'},
    {image:GraphicMember2,name:'Irene Johnson',designation:'Backend Developer',performance:'good'},
    {image:GraphicMember3,name:'Christina Piper',designation:'UX Designer',performance:'average'},
    {image:GraphicMember4,name:'Mike Brown',designation:'QA Engineer',performance:'good'},
    {image:GraphicMember5,name:'Keanu Reeves',designation:'Project Manager',performance:'excellent'},
    {image:GraphicMember6,name:'Emma Thompson',designation:'Marketing Manager',performance:'average'}
  ]
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
      <div className="statistics-graphs">
      <div className="hire-stats">
        <HireChart/>
      </div>
      <div className="development-stats">
      <div className="training-stats">
        <TrainingDevelopmentChart/>
      </div>
        <div className="employee-performance">
          <EmployeeChart/>
        </div>
        </div>
      </div>
      <div className="top-performers">
  <h2>Top Performers</h2>
  <div className="top-performers-list">
    {TopPerformers.map((performer, index) => (
      <div key={index} className="top-performer">
        <div className="performer-image">
          <img src={performer.image} alt={performer.name} />
        </div>
        <div className="performer-details">
          <h3>{performer.name}</h3>
          <p>{performer.designation}</p>
          <div className={`performance performance-${performer.performance}`}>
            {performer.performance}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default HomePage;