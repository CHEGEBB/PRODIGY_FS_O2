import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import "../sass/Employees.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Employees = () => {
    const [employees, setEmployees] = useState([]); // State to store employee details

    // Fetch employee details from the backend
    const fetchEmployees = async () => {
        try {
            const response = await axios.get('https://pulsehr-backend-01.onrender.com/api/employees');
            setEmployees(response.data); // Store the fetched data in state
        } catch (error) {
            console.error('Error fetching employee details:', error.message);
        }
    };

    // Fetch data when the component mounts
    useEffect(() => {
        fetchEmployees();
    }, []); // Empty dependency array means this useEffect runs once after the initial render

    return (
        <div className="employee-container">
            <div className="header-cont">
                <Header />
            </div>
            <div className="main-employee-content">
                <h1>Employee Directory</h1>
                <p>Total Employees: {employees.length}</p>
                <div className="table-responsive">
                    <table className="employee-table">
                        <thead>
                            <tr>
                                <th>Avatar</th>
                                <th>Name</th>
                                <th>Designation</th>
                                <th>Department</th>
                                <th>Mobile</th>
                                <th>Email</th>
                                <th>Salary</th>
                                <th>Joining Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee, index) => (
                                <tr key={index}>
                                    <td>
                                        <img src={employee.image} alt={employee.name} className="employee-image" />
                                    </td>
                                    <td>{employee.name}</td>
                                    <td>{employee.designation}</td>
                                    <td>{employee.department}</td>
                                    <td>{employee.mobile}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.salary}</td>
                                    <td>{employee.joiningDate}</td>
                                    <td className="action-buttons">
                                        <FontAwesomeIcon 
                                            icon={faEdit} 
                                            className="edit-icon" 
                                            title="Edit employee" 
                                        />
                                        <FontAwesomeIcon 
                                            icon={faTrash} 
                                            className="delete-icon" 
                                            title="Delete employee" 
                                        />
                                        <FontAwesomeIcon 
                                            icon={faInfoCircle} 
                                            className="info-icon" 
                                            title={employee.backstory} 
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Employees;
