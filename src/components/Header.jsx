import "../sass/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMessage, faCalendar, faHome, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (
        <div className="header-container">
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
                    </div>
                    <div className="schedule-text">
                        <p>Schedule</p>
                    </div>
                </div>
                <div className="notify">
                    <div className="notify-icon">
                        <FontAwesomeIcon icon={faBell} />
                    </div>
                    <div className="notify-text">
                        <p>Notifications</p>
                    </div>
                </div>
                <div className="message">
                    <div className="message-icon">
                        <FontAwesomeIcon icon={faMessage} />
                    </div>
                    <div className="message-text">
                        <p>Messages</p>
                    </div>
                </div>
            </div>
            <div className="rectangle"></div>
            <div className="profile">
                <div className="profile-icon">
                    <FontAwesomeIcon icon={faUser} />
                </div>
                <div className="profile-name">
                    <p>Admin</p>
                </div>
            </div>
        </div>
    );
}

export default Header;