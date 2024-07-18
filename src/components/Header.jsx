import "../sass/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell";
import { faMessage} from "@fortawesome/free-solid-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons/faCalendar";
import { faHome } from "@fortawesome/free-solid-svg-icons/faHome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
const Header = () => {
    return ( 
        <div className="header-container">
        <div className="dash">
            {/* the dashboard icon and the name dashboard */}
            <div className="dash-icon">
                <FontAwesomeIcon icon={faHome} />
                <p>Dashboard</p>
                 </div>
        </div>
        <div className="search-field">
        {/* will have search bar  with a fasearch icon*/}
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" className="search" placeholder="Search here.." />
        </div>
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