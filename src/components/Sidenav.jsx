import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faUserGroup, faChevronLeft, faChevronRight,faBriefcase,faCalendar,faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import '../sass/Sidenav.scss';

const Sidenav = ({ collapsed, toggleSidebar }) => {
  return (
    <div className={`sidenav ${collapsed ? 'collapsed' : ''}`}>
    <div className="top">
    <div className="brand-logo">
        <h1>Worksphere</h1>
    </div>
    <div className="admin-profile">
      <img src="https://via.placeholder.com/150" alt="Admin" />
      <div className="admin-name">
        <h3>Admin</h3>
        <p>User Role</p>
      </div>
    </div>
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