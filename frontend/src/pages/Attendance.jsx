import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck, faUserTimes, faClock, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../sass/AttendancePage.scss';

const AttendancePage = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/?results=20');
      const data = await response.json();
      const formattedEmployees = data.results.map(user => ({
        id: user.login.uuid,
        name: `${user.name.first} ${user.name.last}`,
        email: user.email,
        picture: user.picture.medium,
        present: Math.random() > 0.3, // 70% chance of being present
        signInTime: user.present ? generateRandomTime() : null
      }));
      setEmployees(formattedEmployees);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const generateRandomTime = () => {
    const hour = Math.floor(Math.random() * 3) + 8; // 8 AM to 10 AM
    const minute = Math.floor(Math.random() * 60);
    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const presentCount = filteredEmployees.filter(emp => emp.present).length;
  const absentCount = filteredEmployees.length - presentCount;

  return (
    <div className="attendance-page">
      <h1>Employee Attendance</h1>
      <div className="attendance-summary">
        <div className="summary-card present">
          <FontAwesomeIcon icon={faUserCheck} />
          <h2>Present</h2>
          <p>{presentCount}</p>
        </div>
        <div className="summary-card absent">
          <FontAwesomeIcon icon={faUserTimes} />
          <h2>Absent</h2>
          <p>{absentCount}</p>
        </div>
      </div>
      <div className="search-bar">
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          placeholder="Search employees..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="employee-list">
        <AnimatePresence>
          {filteredEmployees.map(employee => (
            <motion.div
              key={employee.id}
              className={`employee-card ${employee.present ? 'present' : 'absent'}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <img src={employee.picture} alt={employee.name} className="employee-image" />
              <div className="employee-info">
                <h3>{employee.name}</h3>
                <p>{employee.email}</p>
                {employee.present ? (
                  <p className="sign-in-time">
                    <FontAwesomeIcon icon={faClock} /> Signed in at {employee.signInTime}
                  </p>
                ) : (
                  <p className="absent-text">Absent</p>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AttendancePage;