// src/components/Sidenav.js
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faDashboard, 
  faUserGroup, 
  faChevronLeft, 
  faChevronRight, 
  faBriefcase, 
  faCalendar, 
  faDoorOpen, 
  faBell, 
  faSearch, 
  faMessage,
  faUsers,
  faUserPlus,
  faUserEdit,
  faProjectDiagram,
  faCog,
  faUserCircle
} from '@fortawesome/free-solid-svg-icons';
import '../sass/Sidenav.scss';
import DummyAdmin from "../images/1.jpg";
import animationData from "../images/logo.json";
import Lottie from 'lottie-react';
import { ThemeContext } from '../context/ThemeContext'; 

const Sidenav = ({ collapsed, toggleSidebar }) => {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const { sidebarColor } = useContext(ThemeContext);

  const toggleSubmenu = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  return (
    <div className={`sidenav ${collapsed ? 'collapsed' : ''}`} style={{ backgroundColor: sidebarColor }}>
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
            <p>H.R Manager</p>
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
        <div className={`nav-item has-submenu ${activeSubmenu === 'employees' ? 'active' : ''}`} onClick={() => toggleSubmenu('employees')}>
          <FontAwesomeIcon icon={faUserGroup} className="nav-icon" />
          <span className="nav-label">Employees</span>
          <FontAwesomeIcon icon={activeSubmenu === 'employees' ? faChevronLeft : faChevronRight} className="submenu-icon" />
        </div>
        {activeSubmenu === 'employees' && (
          <div className="submenu">
            <Link to="/employees" className="submenu-item">
              <FontAwesomeIcon icon={faUsers} className="submenu-icon" />
              <span>All Employees</span>
            </Link>
            <Link to="/employees/add" className="submenu-item">
              <FontAwesomeIcon icon={faUserPlus} className="submenu-icon" />
              <span>Add Employee</span>
            </Link>
            <Link to="/employees/edit" className="submenu-item">
              <FontAwesomeIcon icon={faUserEdit} className="submenu-icon" />
              <span>Edit Employee</span>
            </Link>
          </div>
        )}
        <div className={`nav-item has-submenu ${activeSubmenu === 'projects' ? 'active' : ''}`} onClick={() => toggleSubmenu('projects')}>
          <FontAwesomeIcon icon={faBriefcase} className="nav-icon" />
          <span className="nav-label">Projects</span>
          <FontAwesomeIcon icon={activeSubmenu === 'projects' ? faChevronLeft : faChevronRight} className="submenu-icon" />
        </div>
        {activeSubmenu === 'projects' && (
          <div className="submenu">
            <Link to="/projects" className="submenu-item">
              <FontAwesomeIcon icon={faProjectDiagram} className="submenu-icon" />
              <span>All Projects</span>
            </Link>
          </div>
        )}
        <Link to="/clients" className="nav-item">
          <FontAwesomeIcon icon={faUserCircle} className="nav-icon" />
          <span className="nav-label">Clients</span>
        </Link>
        <Link to="/attendance" className="nav-item">
          <FontAwesomeIcon icon={faCalendar} className="nav-icon" />
          <span className="nav-label">Attendance</span>
        </Link>
        <Link to="/leavemanagement" className="nav-item">
          <FontAwesomeIcon icon={faDoorOpen} className="nav-icon" />
          <span className="nav-label">Leave Management</span>
        </Link>
        <Link to="/settings" className="nav-item">
          <FontAwesomeIcon icon={faCog} className="nav-icon" />
          <span className="nav-label">Settings</span>
        </Link>
        <Link to="/" className="nav-item" onClick={() => window.location.reload()}>
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
