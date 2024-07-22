import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMessage, faCalendar, faHome, faSearch } from "@fortawesome/free-solid-svg-icons";
import Admin from "../images/domnic-harris.png";
import '../sass/Header.scss';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
    const { headerColor, theme } = useContext(ThemeContext);
    

    return (
        <div className={`header-container ${theme}`} style={{ backgroundColor: headerColor }}>
            <div className="dash">
                <div className="dash-icon">
                    <FontAwesomeIcon icon={faHome} />
                    <p>Dashboard</p>
                </div>
            </div>
            <div className="rectangle"></div>
            <div className="search-field">
                <FontAwesomeIcon icon={faSearch} />
                <input type="text" className="search" placeholder="Search here.." />
            </div>
            <div className="rectangle"></div>
            <div className="inform">
                <div className="schedule">
                    <div className="schedule-icon">
                        <FontAwesomeIcon icon={faCalendar} />
                        <div className="ripple-dot"></div>
                    </div>
                    <div className="schedule-text">
                        <p>Schedule</p>
                    </div>
                </div>
                <div className="notify">
                    <div className="notify-icon">
                        <FontAwesomeIcon icon={faBell} />
                        <div className="ripple-dot"></div>
                    </div>
                    <div className="notify-text">
                        <p>Notifications</p>
                    </div>
                </div>
                <div className="message">
                    <div className="message-icon">
                        <FontAwesomeIcon icon={faMessage} />
                        <div className="ripple-dot"></div>
                    </div>
                    <div className="message-text">
                        <p>Messages</p>
                    </div>
                </div>
            </div>
            <div className="rectangle"></div>
            <div className="profile">
                <div className="profile-icon">
                    <img src={Admin} alt="Admin" />
                </div>
                <div className="profile-name">
                    <p>Admin</p>
                </div>
            </div>
        </div>
    );
}

export default Header;
