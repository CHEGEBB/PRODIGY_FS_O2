import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faBell, faMessage, faCalendar, faHome, faSearch, 
  faCheckCircle, faExclamationCircle, faInfoCircle
} from "@fortawesome/free-solid-svg-icons";
import Admin from "../images/1.jpg";
import '../sass/Header.scss';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
    const { headerColor, theme } = useContext(ThemeContext);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    const [showSchedule, setShowSchedule] = useState(false);

    const notifications = [
        { id: 1, type: 'success', message: 'Augmented Reality Workspace completed successfully', icon: faCheckCircle },
        { id: 2, type: 'warning', message: 'Upcoming deadline for Project ABC', icon: faExclamationCircle },
        { id: 3, type: 'info', message: 'New team member joined', icon: faInfoCircle },
    ];

    const messages = [
        { id: 1, sender: 'John Doe', message: 'Hey, can we discuss the project?', time: '10:30 AM' },
        { id: 2, sender: 'Jane Smith', message: 'The client meeting is rescheduled', time: '11:45 AM' },
        { id: 3, sender: 'Mike Johnson', message: 'I have sent you the updated files', time: '2:15 PM' },
    ];

    const scheduleEvents = [
        { id: 1, title: 'Team Meeting', time: '9:00 AM - 10:00 AM' },
        { id: 2, title: 'Client Presentation', time: '2:00 PM - 3:30 PM' },
        { id: 3, title: 'Project Deadline', time: '5:00 PM' },
    ];

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
                    <div className="schedule-icon" onClick={() => setShowSchedule(!showSchedule)}>
                        <FontAwesomeIcon icon={faCalendar} />
                        <div className="ripple-dot"></div>
                    </div>
                    <div className="schedule-text">
                        <p>Schedule</p>
                    </div>
                    {showSchedule && (
                        <div className="dropdown schedule-dropdown">
                            <h3>Today's Schedule</h3>
                            {scheduleEvents.map(event => (
                                <div key={event.id} className="schedule-item">
                                    <p className="event-title">{event.title}</p>
                                    <p className="event-time">{event.time}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="notify">
                    <div className="notify-icon" onClick={() => setShowNotifications(!showNotifications)}>
                        <FontAwesomeIcon icon={faBell} />
                        <div className="ripple-dot"></div>
                    </div>
                    <div className="notify-text">
                        <p>Notifications</p>
                    </div>
                    {showNotifications && (
                        <div className="dropdown notifications-dropdown">
                            <h3>Notifications</h3>
                            {notifications.map(notification => (
                                <div key={notification.id} className={`notification-item ${notification.type}`}>
                                    <FontAwesomeIcon icon={notification.icon} />
                                    <p>{notification.message}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="message">
                    <div className="message-icon" onClick={() => setShowMessages(!showMessages)}>
                        <FontAwesomeIcon icon={faMessage} />
                        <div className="ripple-dot"></div>
                    </div>
                    <div className="message-text">
                        <p>Messages</p>
                    </div>
                    {showMessages && (
                        <div className="dropdown messages-dropdown">
                            <h3>Messages</h3>
                            {messages.map(message => (
                                <div key={message.id} className="message-item">
                                    <p className="sender">{message.sender}</p>
                                    <p className="message-content">{message.message}</p>
                                    <p className="message-time">{message.time}</p>
                                </div>
                            ))}
                        </div>
                    )}
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