import {
  faBuilding,
  faCalendarDay,
  faComputer,
  faEnvelope,
  faPhone,
  faTransgender,
  faUserAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import "../sass/AddEmployee.scss";
const AddEmployee = () => {
  return (
    <div className="add-employee-container">
      <div className="header-container-add">
        <Header />
      </div>
      <div className="add-main-container">
        {/* form to add employees */}

        <form className="add-employee">
          <div className="names">
            <div className="group">
              <div className="form-group">
                <div className="user-icon">
                  <FontAwesomeIcon icon={faUserAlt} />
                </div>
                <input type="text" id="firstName" required />
                <label htmlFor="firstName">First Name*</label>
              </div>
              <div className="form-group">
                <div className="user-icon">
                  <FontAwesomeIcon icon={faUserAlt} />
                </div>
                <input type="text" id="lastName" required />
                <label htmlFor="lastName">Last Name*</label>
              </div>
            </div>
          </div>
          <div className="dep">
            <div className="group">
              <div className="form-group">
                {/* designation */}
                <div className="user-icon">
                  <FontAwesomeIcon icon={faComputer} />
                </div>
                <input type="text" id="designation" required />
                <label htmlFor="designation">Designation*</label>
              </div>
              <div className="form-group">
                {/* department */}
                <div className="user-icon">
                  <FontAwesomeIcon icon={faBuilding} />
                </div>
                <input type="text" id="department" required />
                <label htmlFor="department">Department*</label>
              </div>
            </div>
          </div>
          <div className="details">
            <div className="group">
              <div className="form-group">
                <div className="user-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <input type="email" id="email" required />
                <label htmlFor="email">Email*</label>
              </div>
              <div className="form-group">
                {/* mobile number */}
                <div className="user-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <input type="tel" id="mobile" required />
                <label htmlFor="mobile">Mobile Number*</label>
              </div>
            </div>
          </div>
          <div className="personal-info">
            <div className="group">
              <div className="form-group">
                {/* gender */}
                <div className="user-icon">
                  <FontAwesomeIcon icon={faTransgender} />
                </div>
                <select id="gender" required>
                  <option value=""></option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                <label htmlFor="gender">Gender*</label>
              </div>
              <div className="form-group">
                {/* date of birth */}
                <div className="user-icon">
                  <FontAwesomeIcon icon={faCalendarDay} />
                </div>
                <input type="date" id="dob" required />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
