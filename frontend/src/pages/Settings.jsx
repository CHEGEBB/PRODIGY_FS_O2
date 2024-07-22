import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faCog, faUser, faMoon, faSun, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { SketchPicker } from 'react-color';
import { ThemeContext } from '../context/ThemeContext'; // Adjust the path as needed
import '../sass/SettingsPage.scss';

const SettingsPage = () => {
  const { theme, headerColor, sidebarColor, toggleTheme, setHeaderColor, setSidebarColor } = useContext(ThemeContext);
  const [showHeaderPicker, setShowHeaderPicker] = useState(false);
  const [showSidebarPicker, setShowSidebarPicker] = useState(false);
  const [adminProfile, setAdminProfile] = useState(null);

  React.useEffect(() => {
    fetchAdminProfile();
  }, []);

  const fetchAdminProfile = () => {
    setTimeout(() => {
      setAdminProfile({
        name: 'Brian Smith',
        email: 'smithb@pulsehr.com',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
        role: 'Super Admin'
      });
    }, 1000);
  };

  const handleHeaderColorChange = (color) => {
    setHeaderColor(color.hex);
  };

  const handleSidebarColorChange = (color) => {
    setSidebarColor(color.hex);
  };

  return (
    <div className="settings-page">
      <h1>Settings</h1>
      
      <section className="setting-section">
        <h2><FontAwesomeIcon icon={faUser} /> Admin Profile</h2>
        {adminProfile ? (
          <div className="admin-profile">
            <img src={adminProfile.avatar} alt="Admin Avatar" />
            <div className="admin-info">
              <h3>{adminProfile.name}</h3>
              <p>{adminProfile.email}</p>
              <span className="admin-role">{adminProfile.role}</span>
            </div>
          </div>
        ) : (
          <p>Loading admin profile...</p>
        )}
      </section>

      <section className="setting-section">
        <h2><FontAwesomeIcon icon={faPalette} /> Appearance</h2>
        <div className="setting-item">
          <span>Theme</span>
          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </div>
        <div className="setting-item">
          <span>Header Color</span>
          <div className="color-preview" style={{ backgroundColor: headerColor }} onClick={() => setShowHeaderPicker(!showHeaderPicker)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          {showHeaderPicker && (
            <div className="color-picker-popover">
              <SketchPicker color={headerColor} onChange={handleHeaderColorChange} />
            </div>
          )}
        </div>
        <div className="setting-item">
          <span>Sidebar Color</span>
          <div className="color-preview" style={{ backgroundColor: sidebarColor }} onClick={() => setShowSidebarPicker(!showSidebarPicker)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
          {showSidebarPicker && (
            <div className="color-picker-popover">
              <SketchPicker color={sidebarColor} onChange={handleSidebarColorChange} />
            </div>
          )}
        </div>
      </section>

      <section className="setting-section">
        <h2><FontAwesomeIcon icon={faCog} /> General Settings</h2>
        <div className="setting-item">
          <span>Notifications</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="setting-item">
          <span>Two-Factor Authentication</span>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
      </section>
    </div>
  );
};

export default SettingsPage;
