import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faUserGroup, faChevronLeft, faChevronRight,faBriefcase,faCalendar,faDoorOpen,faBell,faSearch,faMessage } from '@fortawesome/free-solid-svg-icons';
import '../sass/Sidenav.scss';
import DummyAdmin from "../images/domnic-harris.png"

const Sidenav = ({ collapsed, toggleSidebar }) => {
  return (
    <div className={`sidenav ${collapsed ? 'collapsed' : ''}`}>
    <div className="top">
    <div className="brand-logo">
        <h1>Worksphere</h1>
    </div>
    <div className="admin-profile">
      <img src={DummyAdmin} alt="Admin" />
      <div className="admin-name">
        <h3>Admin</h3>
        <p>User Role</p>
      </div>
    </div>
    <div className="alerts">
      <div className="notifications">
          <div className="notification-icon">
            <FontAwesomeIcon icon={faBell} />
          </div>
      </div>
      <div className="search">
        <div className="search-icon">
          <FontAwesomeIcon icon={faSearch} />
        </div>
      </div>
      <div className="messages">
        <div className="message-icon">
          <FontAwesomeIcon icon={faMessage} />
          </div>
      </div>
    </div>
    <hr></hr>
    </div>
      <div className="nav-items">
        <div className="nav-item">
          <div className="nav-icon">
            <FontAwesomeIcon icon={faDashboard} />
          </div>
          <Link to="/dashboard">Dashboard</Link>
        </div>
        <div className="nav-item">
          <div className="nav-icon">
            <FontAwesomeIcon icon={faUserGroup} />
          </div>
          <Link to="/employees">Employees</Link>
        </div>
        <div className="nav-item">
        <div className="nav-icon">
            <FontAwesomeIcon icon={faBriefcase} />
          </div>
          <Link to="/projects">Projects</Link>
        </div>
        <div className="nav-item">
          <div className="nav-icon">
            <FontAwesomeIcon icon={faCalendar} />
          </div>
          <Link to="/attendance">Attendance</Link>
        </div>
        <div className="nav-item">
          {/* leave management fa open door*/}
          <div className="nav-icon">
            <FontAwesomeIcon icon={faDoorOpen} />
            </div>
            <Link to="/leavemanagement">Leave Management</Link>
          
        </div>
        <div className="nav-item">
          <div className="nav-icon">
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <Link to="/">Logout</Link>
        </div>
      </div>
      <div className="toggle-sidebar" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={collapsed ? faChevronRight : faChevronLeft} />
      </div>
    </div>
  );
};

export default Sidenav;