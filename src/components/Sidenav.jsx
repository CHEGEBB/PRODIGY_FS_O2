import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faUserGroup, faChevronLeft, faChevronRight, faBriefcase, faCalendar, faDoorOpen, faBell, faSearch, faMessage } from '@fortawesome/free-solid-svg-icons';
import '../sass/Sidenav.scss';
import DummyAdmin from "../images/domnic-harris.png"
import animationData from "../images/logo.json"
import Lottie from 'lottie-react';

const Sidenav = ({ collapsed, toggleSidebar }) => {
  return (
    <div className={`sidenav ${collapsed ? 'collapsed' : ''}`}>
      <div className="top">
        <div className="brand-logo">
          <div className="logo-container">
            <Lottie 
              animationData={animationData} 
              className="lottie-logo"
              loop={true}
              autoplay={true}
            />
          </div>
          <h1 className="brand-name">PulseHR</h1>
        </div>
        <div className="admin-profile">
          <img src={DummyAdmin} alt="Admin" />
          <div className="admin-info">
            <h3>Admin</h3>
            <p>User Role</p>
          </div>
        </div>
        <div className="alerts">
          <div className="alert-icon">
            <FontAwesomeIcon icon={faBell} />
          </div>
          <div className="alert-icon">
            <FontAwesomeIcon icon={faSearch} />
          </div>
          <div className="alert-icon">
            <FontAwesomeIcon icon={faMessage} />
          </div>
        </div>
        <hr />
      </div>
      <nav className="nav-items">
        <Link to="/dashboard" className="nav-item">
          <FontAwesomeIcon icon={faDashboard} className="nav-icon" />
          <span className="nav-label">Dashboard</span>
        </Link>
        <Link to="/employees" className="nav-item">
          <FontAwesomeIcon icon={faUserGroup} className="nav-icon" />
          <span className="nav-label">Employees</span>
        </Link>
        <Link to="/projects" className="nav-item">
          <FontAwesomeIcon icon={faBriefcase} className="nav-icon" />
          <span className="nav-label">Projects</span>
        </Link>
        <Link to="/attendance" className="nav-item">
          <FontAwesomeIcon icon={faCalendar} className="nav-icon" />
          <span className="nav-label">Attendance</span>
        </Link>
        <Link to="/leavemanagement" className="nav-item">
          <FontAwesomeIcon icon={faDoorOpen} className="nav-icon" />
          <span className="nav-label">Leave Management</span>
        </Link>
        <Link to="/" className="nav-item">
          <FontAwesomeIcon icon={faChevronLeft} className="nav-icon" />
          <span className="nav-label">Logout</span>
        </Link>
      </nav>
      <div className="toggle-sidebar" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={collapsed ? faChevronRight : faChevronLeft} />
      </div>
    </div>
  );
};

export default Sidenav;