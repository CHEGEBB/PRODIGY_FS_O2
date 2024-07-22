import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../sass/Logout.scss';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <button className="logout-button" onClick={handleLogout}>
      <span role="img" aria-label="wave">👋</span>
    </button>
  );
};

export default Logout;