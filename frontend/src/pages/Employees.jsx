import React from 'react';
import Header from "../components/Header";
import "../sass/Employees.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faEdit, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Employees = () => {
    const AllEmployeesDetails = [
        {
            image: "https://randomuser.me/api/portraits/men/1.jpg",
            name: "John Doe",
            designation: "Software Engineer",
            department: "Engineering",
            mobile: '+1234567890',
            email: 'johndoe@example.com',
            salary: "$120,000",
            joiningDate: "01/01/2021",
            backstory: "John impressed us with his innovative solutions during the hackathon."
        },
        {
            image: "https://randomuser.me/api/portraits/women/1.jpg",
            name: "Jane Smith",
            designation: "Product Manager",
            department: "Product",
            mobile: '+1987654321',
            email: 'janesmith@example.com',
            salary: "$110,000",
            joiningDate: "03/15/2021",
            backstory: "Jane's market analysis skills caught our attention at a tech conference."
        },
        // Add 18 more employee objects here with varying details and images
    ];

    return (
        <div className="employee-container">
            <div className="header-cont">
                <Header />
            </div>
            <div className="main-employee-content">
                <h1>Employee Directory</h1>
                <p>Total Employees: {AllEmployeesDetails.length}</p>
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
                            {AllEmployeesDetails.map((employee, index) => (
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
}

export default Employees;