import React, { useState, useEffect } from "react";
import {
  faAddressBook,
  faBuilding,
  faCalendarDay,
  faComputer,
  faEnvelope,
  faMoneyBill,
  faPhone,
  faTransgender,
  faUserAlt
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Header from "../components/Header";
import "../sass/AddEmployee.scss";
import axios from "axios";

axios.defaults.baseURL = 'https://pulsehr-backend-01.onrender.com';

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    department: "",
    mobile: "",
    email: "",
    salary: "",
    joiningDate: "",
    backstory: "",
    gender: "",
    image: ""
  });

  const [showNotification, setShowNotification] = useState(false);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));

    if (id === "gender") {
      generateImageUrl(value);
    }
  };

  const generateImageUrl = (gender) => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let imageUrl = "";
    
    if (gender === "male") {
      imageUrl = `https://randomuser.me/api/portraits/men/${randomNumber}.jpg`;
    } else if (gender === "female") {
      imageUrl = `https://randomuser.me/api/portraits/women/${randomNumber}.jpg`;
    } else {
      // For 'other' gender, you might want to use a default image or leave it blank
      imageUrl = "";
    }
    
    setFormData(prev => ({
      ...prev,
      gender: gender,
      image: imageUrl
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/employees', formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log("Employee added successfully:", response.data);
      setShowNotification(true);
      // Reset form
      setFormData({
        name: "",
        designation: "",
        department: "",
        mobile: "",
        email: "",
        salary: "",
        joiningDate: "",
        backstory: "",
        gender: "",
        image: ""
      });
    } catch (error) {
      console.error("Error adding employee:", error.response ? error.response.data : error.message);
    }
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <div className="add-employee-container">
      <div className="header-container-add">
        <Header />
      </div>
      <div className="add-main-container">
        {showNotification && (
          <div className="notification">
            Employee added successfully!
          </div>
        )}
        <form className="add-employee" onSubmit={handleSubmit}>
          <h2>Add Employee</h2>
          <div className="group">
            <div className="form-group">
              <div className="user-icon">
                <FontAwesomeIcon icon={faUserAlt} />
              </div>
              <input 
                type="text" 
                id="name" 
                required 
                value={formData.name}
                onChange={handleInputChange}
              />
              <label htmlFor="name">Full Name*</label>
            </div>
            <div className="form-group">
              <div className="user-icon">
                <FontAwesomeIcon icon={faComputer} />
              </div>
              <input 
                type="text" 
                id="designation" 
                required 
                value={formData.designation}
                onChange={handleInputChange}
              />
              <label htmlFor="designation">Designation*</label>
            </div>
          </div>
          <div className="group">
            <div className="form-group">
              <div className="user-icon">
                <FontAwesomeIcon icon={faBuilding} />
              </div>
              <input 
                type="text" 
                id="department" 
                required 
                value={formData.department}
                onChange={handleInputChange}
              />
              <label htmlFor="department">Department*</label>
            </div>
            <div className="form-group">
              <div className="user-icon">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <input 
                type="tel" 
                id="mobile" 
                required 
                value={formData.mobile}
                onChange={handleInputChange}
              />
              <label htmlFor="mobile">Mobile Number*</label>
            </div>
          </div>
          <div className="group">
            <div className="form-group">
              <div className="user-icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <input 
                type="email" 
                id="email" 
                required 
                value={formData.email}
                onChange={handleInputChange}
              />
              <label htmlFor="email">Email*</label>
            </div>
            <div className="form-group">
              <div className="user-icon">
                <FontAwesomeIcon icon={faMoneyBill} />
              </div>
              <input 
                type="text" 
                id="salary" 
                required 
                value={formData.salary}
                onChange={handleInputChange}
              />
              <label htmlFor="salary">Salary*</label>
            </div>
          </div>
          <div className="group">
            <div className="form-group">
              <div className="user-icon">
                <FontAwesomeIcon icon={faCalendarDay} />
              </div>
              <input 
                type="date" 
                id="joiningDate" 
                required 
                value={formData.joiningDate}
                onChange={handleInputChange}
              />
              <label htmlFor="joiningDate">Joining Date*</label>
            </div>
            <div className="form-group">
              <div className="user-icon">
                <FontAwesomeIcon icon={faTransgender} />
              </div>
              <select 
                id="gender" 
                required 
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <label htmlFor="gender">Gender*</label>
            </div>
          </div>
          <div className="group">
            <div className="form-group">
              <div className="user-icon">
                <FontAwesomeIcon icon={faAddressBook} />
              </div>
              <textarea 
                id="backstory"  
                required
                value={formData.backstory}
                onChange={handleInputChange}
              ></textarea>
              <label htmlFor="backstory">Backstory</label>
            </div>
          </div>
          {formData.image && (
            <div className="group">
              <img src={formData.image} alt="Employee" className="employee-image" />
            </div>
          )}
          <div className="group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;