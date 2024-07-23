import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUserClock, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import '../sass/LeaveManagement.scss';

const LeaveManagement = () => {
    const [leaveRequests, setLeaveRequests] = useState([
        { id: 1, startDate: '2024-07-25', endDate: '2024-07-30', leaveType: 'Annual Leave', reason: 'Family vacation', status: 'Approved' },
        { id: 2, startDate: '2024-08-05', endDate: '2024-08-06', leaveType: 'Sick Leave', reason: 'Doctor appointment', status: 'Pending' },
        { id: 3, startDate: '2024-08-15', endDate: '2024-08-16', leaveType: 'Personal Leave', reason: 'Personal matters', status: 'Rejected' },
        { id: 4, startDate: '2024-09-01', endDate: '2024-09-03', leaveType: 'Annual Leave', reason: 'Long weekend trip', status: 'Pending' },
    ]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        startDate: '',
        endDate: '',
        leaveType: '',
        reason: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newLeaveRequest = {
            id: Date.now(),
            ...formData,
            status: 'Pending'
        };
        setLeaveRequests([...leaveRequests, newLeaveRequest]);
        setFormData({ startDate: '', endDate: '', leaveType: '', reason: '' });
        setShowForm(false);
    };

    const handleStatusChange = (id, newStatus) => {
        setLeaveRequests(leaveRequests.map(request => 
            request.id === id ? { ...request, status: newStatus } : request
        ));
    };
    

    const LeaveRequestCard = ({ request }) => (
        <motion.div 
            className={`leave-request-card ${request.status.toLowerCase()}`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
        >
            <h3>{request.leaveType}</h3>
            <p><FontAwesomeIcon icon={faCalendarAlt} /> {request.startDate} to {request.endDate}</p>
            <p><strong>Reason:</strong> {request.reason}</p>
            <p><strong>Status:</strong> {request.status}</p>
            {request.status === 'Pending' && (
                <div className="action-buttons">
                    <button onClick={() => handleStatusChange(request.id, 'Approved')} className="approve">Approve</button>
                    <button onClick={() => handleStatusChange(request.id, 'Rejected')} className="reject">Reject</button>
                </div>
            )}
        </motion.div>
    );
    // leave management div

    return (
        <div className="leave-management-container">
            <Header />
            <main className="leave-management-main">
                <div className="leave-management-header">
                    <h1><FontAwesomeIcon icon={faUserClock} /> Leave Management</h1>
                    <button className="new-request-btn" onClick={() => setShowForm(true)}>
                        <FontAwesomeIcon icon={faPaperPlane} /> New Leave Request
                    </button>
                </div>
                <AnimatePresence>
                    {showForm && (
                        <motion.div 
                            className="form-overlay"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.form 
                                className="leave-request-form"
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: 50, opacity: 0 }}
                                onSubmit={handleSubmit}
                            >
                                <h2>New Leave Request</h2>
                                <div className="form-group">
                                    <label htmlFor="startDate">Start Date</label>
                                    <input 
                                        type="date" 
                                        id="startDate" 
                                        name="startDate"
                                        value={formData.startDate}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="endDate">End Date</label>
                                    <input 
                                        type="date" 
                                        id="endDate" 
                                        name="endDate"
                                        value={formData.endDate}
                                        onChange={handleInputChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="leaveType">Leave Type</label>
                                    <select 
                                        id="leaveType" 
                                        name="leaveType"
                                        value={formData.leaveType}
                                        onChange={handleInputChange}
                                        required
                                    >
                                        <option value="">Select Leave Type</option>
                                        <option value="Annual Leave">Annual Leave</option>
                                        <option value="Sick Leave">Sick Leave</option>
                                        <option value="Personal Leave">Personal Leave</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="reason">Reason</label>
                                    <textarea 
                                        id="reason" 
                                        name="reason"
                                        value={formData.reason}
                                        onChange={handleInputChange}
                                        required
                                    ></textarea>
                                </div>
                                <div className="form-actions">
                                    <button type="submit">Submit Request</button>
                                    <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
                                </div>
                            </motion.form>
                        </motion.div>
                    )}
                </AnimatePresence>
                <div className="leave-requests-grid">
                    <AnimatePresence>
                        {leaveRequests.map(request => (
                            <LeaveRequestCard key={request.id} request={request} />
                        ))}
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
};

export default LeaveManagement;