import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faUserGroup, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../sass/Sidenav.scss';

const Sidenav = ({ collapsed, toggleSidebar }) => {
  return (
    <div className={`sidenav ${collapsed ? 'collapsed' : ''}`}>
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
      </div>
      <div className="toggle-sidebar" onClick={toggleSidebar}>
        <FontAwesomeIcon icon={collapsed ? faChevronRight : faChevronLeft} />
      </div>
    </div>
  );
};

export default Sidenav;