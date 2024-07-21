import React, { useContext } from 'react';
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
import GraphicMember3 from "../images/member8.jpeg";
import GraphicMember4 from "../images/member14.png";
import GraphicMember5 from "../images/member13.jpg";
import GraphicMember6 from "../images/member7.jpeg";
import { ThemeContext } from '../context/ThemeContext'; // Adjust the path as needed

const FactCard = ({ title, end, prefix, image }) => (
  <div className={`total-${title.toLowerCase()}`}>
    <h2>{title}</h2>
    <div className="count">
      <Countup end={end} duration={6} prefix={prefix} 
        onStart={() => ({ animation: 'countUp 0.5s ease forwards' })}
      />
    </div>
    <img src={image} alt={title} />
  </div>
);

const HomePage = () => {
  const { theme } = useContext(ThemeContext); // Get the theme from context

  const facts = [
    { title: 'Employees', end: 1000, image: Employees },
    { title: 'Expenses', end: 500000, prefix: '$', image: Expenses },
    { title: 'Income', end: 700000, prefix: '$', image: Income },
    { title: 'Clients', end: 2000, image: Clients },
    { title: 'Assets', end: 1000000, prefix: '$', image: Assets },
  ];

  const TopPerformers = [
    { image: GraphicMember1, name: 'John Smith', designation: 'Frontend Developer', performance: 'excellent' },
    { image: GraphicMember2, name: 'Irene Johnson', designation: 'Backend Developer', performance: 'good' },
    { image: GraphicMember3, name: 'Christina Piper', designation: 'UX Designer', performance: 'average' },
    { image: GraphicMember4, name: 'Mike Brown', designation: 'QA Engineer', performance: 'good' },
    { image: GraphicMember5, name: 'Keanu Reeves', designation: 'Project Manager', performance: 'excellent' },
    { image: GraphicMember6, name: 'Emma Thompson', designation: 'Marketing Manager', performance: 'average' }
  ];

  const activities = [
    { 
      title: 'Employee Onboarding', 
      description: 'Complete the onboarding process for the new hires, including orientation and introduction to company policies.' 
    },
    { 
      title: 'Quarterly Performance Reviews', 
      description: 'Conduct performance reviews for all employees, providing feedback and setting goals for the next quarter.' 
    },
    { 
      title: 'Staff Training Session', 
      description: 'Organize a training session on new software tools and techniques to enhance team skills and productivity.' 
    }
  ];

  const todoList = [
    { id: 'task1', task: 'Hire a new designer' },
    { id: 'task2', task: 'Update job descriptions' },
    { id: 'task3', task: 'Conduct new hire orientation' },
    { id: 'task4', task: 'Process employee leave requests' },
    { id: 'task5', task: 'Track employee certifications' },
    { id: 'task6', task: 'Prepare performance review forms' }
  ];

  return (
    <div className={`home-container ${theme}`}>
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
          <HireChart />
        </div>
        <div className="development-stats">
          <div className="training-stats">
            <TrainingDevelopmentChart />
          </div>
          <div className="employee-performance">
            <EmployeeChart />
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
      <div className="now">
        <div className="today-activities">
          <h2>Today's Activities</h2>
          <div className="timeline">
            {activities.map((activity, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <h3>{activity.title}</h3>
                  <p>{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="todo-list">
          <h2>To-Do List</h2>
          <ul>
            {todoList.map((item) => (
              <li key={item.id}>
                <input type="checkbox" id={item.id} />
                <label htmlFor={item.id}>{item.task}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
