import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import "../sass/EditEmployees.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const EditEmployees = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [editedEmployee, setEditedEmployee] = useState({});
    const [modalMode, setModalMode] = useState('view');
    const [successMessage, setSuccessMessage] = useState('');

    const fetchEmployees = async () => {
        try {
            const response = await axios.get('https://pulsehr-backend-01.onrender.com/api/employees');
            setEmployees(response.data);
        } catch (error) {
            console.error('Error fetching employee details:', error.message);
        }
    };

    useEffect(() => {
        fetchEmployees();
    }, []);

    const handleView = (employee) => {
        setSelectedEmployee(employee);
        setModalMode('view');
        setShowModal(true);
    };

    const handleEdit = (employee) => {
        setSelectedEmployee(employee);
        setEditedEmployee({ ...employee });
        setModalMode('edit');
        setShowModal(true);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedEmployee({ ...editedEmployee, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`https://pulsehr-backend-01.onrender.com/api/employees/${editedEmployee._id}`, editedEmployee);
            setEmployees(employees.map(emp => emp._id === editedEmployee._id ? response.data : emp));
            setShowModal(false);
            setSuccessMessage('Employee details updated successfully!');
            setTimeout(() => setSuccessMessage(''), 3000);
            fetchEmployees(); 
        } catch (error) {
            console.error('Error updating employee:', error.message);
            setSuccessMessage('Error updating employee details.');
            setTimeout(() => setSuccessMessage(''), 3000);
        }
    };

    return (
        <div className="edit-employees-container">
            <div className="header-cont">
                <Header />
            </div>
            <div className="main-content">
                <h1>Employee Directory</h1>
                {successMessage && (
                    <div className="success-message">
                        {successMessage}
                    </div>
                )}
                <div className="employee-grid">
                    {employees.map((employee) => (
                        <div key={employee._id} className="employee-card">
                            <div className="card-header">
                                <img src={employee.image} alt={employee.name} className="employee-image" />
                            </div>
                            <div className="card-body">
                                <h3>{employee.name}</h3>
                                <div className="action-buttons">
                                    <button className="view-btn" onClick={() => handleView(employee)}>
                                        <FontAwesomeIcon icon={faEye} /> View
                                    </button>
                                    <button className="edit-btn" onClick={() => handleEdit(employee)}>
                                        <FontAwesomeIcon icon={faEdit} /> Edit
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal">
                        <button className="close-btn" onClick={() => setShowModal(false)}>
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                        <h2>{modalMode === 'view' ? 'Employee Details' : 'Edit Employee'}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={modalMode === 'view' ? selectedEmployee.name : editedEmployee.name}
                                    onChange={handleInputChange}
                                    readOnly={modalMode === 'view'}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="designation">Designation:</label>
                                <input
                                    type="text"
                                    id="designation"
                                    name="designation"
                                    value={modalMode === 'view' ? selectedEmployee.designation : editedEmployee.designation}
                                    onChange={handleInputChange}
                                    readOnly={modalMode === 'view'}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="department">Department:</label>
                                <input
                                    type="text"
                                    id="department"
                                    name="department"
                                    value={modalMode === 'view' ? selectedEmployee.department : editedEmployee.department}
                                    onChange={handleInputChange}
                                    readOnly={modalMode === 'view'}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mobile">Mobile:</label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    value={modalMode === 'view' ? selectedEmployee.mobile : editedEmployee.mobile}
                                    onChange={handleInputChange}
                                    readOnly={modalMode === 'view'}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={modalMode === 'view' ? selectedEmployee.email : editedEmployee.email}
                                    onChange={handleInputChange}
                                    readOnly={modalMode === 'view'}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="salary">Salary:</label>
                                <input
                                    type="number"
                                    id="salary"
                                    name="salary"
                                    value={modalMode === 'view' ? selectedEmployee.salary : editedEmployee.salary}
                                    onChange={handleInputChange}
                                    readOnly={modalMode === 'view'}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="joiningDate">Joining Date:</label>
                                <input
                                    type="date"
                                    id="joiningDate"
                                    name="joiningDate"
                                    value={modalMode === 'view' ? selectedEmployee.joiningDate : editedEmployee.joiningDate}
                                    onChange={handleInputChange}
                                    readOnly={modalMode === 'view'}
                                    required
                                />
                            </div>
                            {modalMode === 'edit' && (
                                <button type="submit" className="submit-btn">Update Employee</button>
                            )}
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default EditEmployees;