import "../sass/Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons/faBell";
const Header = () => {
    return ( 
        <div className="header-container">
            <div className="header-left">
                <h1>Employee Management System</h1>
            </div>
            <div className="header-right">
                <div className="header-notification">
                    <FontAwesomeIcon icon={faBell} />
                </div>
            </div>
        </div>

     );
}
 
export default Header;