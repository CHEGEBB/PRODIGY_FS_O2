import "../sass/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
const Header = () => {
    return ( 
        <div className="header-container">
           <div className="inform">
            {/* will have calendar or schedules,messages and notifications */}
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
        </div>

     );
}
 
export default Header;