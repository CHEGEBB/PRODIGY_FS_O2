import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import '../sass/Sidenav.scss'; // Import your SASS file for styles

const Sidenav = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`container-sidebar ${collapsed ? 'collapsed' : ''}`}>
      <div className="nav-item">
        <div className="nav-icon">
          <FontAwesomeIcon icon={faDashboard} size="2x" />
        </div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <div className="nav-item">
        <div className="nav-icon">
          <FontAwesomeIcon icon={faUserGroup} size="2x" />
        </div>
        <Link to="/employees">Employees</Link>
      </div>
      {/* Add more sidebar items here */}
      <div className="toggle-sidebar" onClick={toggleSidebar}>
        {collapsed ? '>' : '<'}
      </div>
    </div>
  );
};

export default Sidenav;
