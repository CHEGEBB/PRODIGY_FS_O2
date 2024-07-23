import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding, faGlobe, faProjectDiagram, faUsers } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import '../sass/Clients.scss';

const Clients = () => {
    const [clients, setClients] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);

    useEffect(() => {
        fetchClients();
    }, []);

    const fetchClients = async () => {
        const mockClients = [
            {
                id: 1,
                name: 'TechNova Solutions',
                industry: 'Software Development',
                logo: 'https://ld-contest-drafts.s3.amazonaws.com/original/473-6320.jpg',
                projects: [
                    { name: 'E-commerce Platform', type: 'Web Application', employees: 5 },
                    { name: 'Mobile App', type: 'iOS/Android App', employees: 3 },
                ],
                contactPerson: {
                    name: 'Sarah Johnson',
                    position: 'Project Manager',
                    image: 'https://randomuser.me/api/portraits/women/1.jpg'
                }
            },
            {
                id: 2,
                name: 'GreenEarth Enterprises',
                industry: 'Renewable Energy',
                logo: 'https://logopond.com/logos/c9cb570364bfa3b7b40eb64a7b209131.png',
                projects: [
                    { name: 'Solar Panel Monitoring System', type: 'IoT Application', employees: 4 },
                    { name: 'Energy Consumption Dashboard', type: 'Web Application', employees: 2 },
                ],
                contactPerson: {
                    name: 'Michael Chen',
                    position: 'CTO',
                    image: 'https://randomuser.me/api/portraits/men/2.jpg'
                }
            },
            {
                id: 3,
                name: 'HealthPlus Medical',
                industry: 'Healthcare',
                logo: 'https://logopond.com/logos/3a1bd409f2fd8ff2888cff747ba91e5d.png',
                projects: [
                    { name: 'Patient Management System', type: 'Web Application', employees: 6 },
                    { name: 'Telemedicine Platform', type: 'Web/Mobile App', employees: 4 },
                ],
                contactPerson: {
                    name: 'Emma Rodriguez',
                    position: 'Head of IT',
                    image: 'https://randomuser.me/api/portraits/women/3.jpg'
                }
            },
            {
                id: 4,
                name: 'FinanceWise Solutions',
                industry: 'Financial Services',
                logo: 'https://logo.clearbit.com/financewise.com',
                projects: [
                    { name: 'Investment Portfolio Tracker', type: 'Web Application', employees: 5 },
                    { name: 'Crypto Trading Bot', type: 'AI Application', employees: 3 },
                ],
                contactPerson: {
                    name: 'Alex Thompson',
                    position: 'Product Owner',
                    image: 'https://randomuser.me/api/portraits/men/4.jpg'
                }
            },
            {
                id: 5,
                name: 'EduTech Innovations',
                industry: 'Education Technology',
                logo: 'https://logo.clearbit.com/edutech.com',
                projects: [
                    { name: 'Online Learning Platform', type: 'Web/Mobile App', employees: 7 },
                    { name: 'Virtual Classroom Solution', type: 'Video Conferencing App', employees: 4 },
                ],
                contactPerson: {
                    name: 'Sophia Lee',
                    position: 'Education Technology Specialist',
                    image: 'https://randomuser.me/api/portraits/women/5.jpg'
                }
            },
        ];
        setClients(mockClients);
    };

    const openClientDetails = (client) => {
        setSelectedClient(client);
    };

    const closeClientDetails = () => {
        setSelectedClient(null);
    };

    const ClientCard = ({ client }) => (
        <motion.div 
            className="client-card"
            whileHover={{ scale: 1.05 }}
            onClick={() => openClientDetails(client)}
        >
            <img src={client.logo} alt={client.name} className="client-logo" />
            <h2>{client.name}</h2>
            <p><FontAwesomeIcon icon={faBuilding} /> {client.industry}</p>
            <p><FontAwesomeIcon icon={faProjectDiagram} /> {client.projects.length} Projects</p>
        </motion.div>
    );

    const ClientDetails = ({ client }) => (
        <motion.div 
            className="client-details-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div 
                className="client-details"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
            >
                <img src={client.logo} alt={client.name} className="client-logo" />
                <h2>{client.name}</h2>
                <p><FontAwesomeIcon icon={faBuilding} /> {client.industry}</p>
                <h3>Projects</h3>
                <ul className="project-list">
                    {client.projects.map((project, index) => (
                        <li key={index}>
                            <strong>{project.name}</strong>
                            <p>{project.type}</p>
                            <p><FontAwesomeIcon icon={faUsers} /> {project.employees} employees</p>
                        </li>
                    ))}
                </ul>
                <h3>Contact Person</h3>
                <div className="contact-person">
                    <img src={client.contactPerson.image} alt={client.contactPerson.name} />
                    <div>
                        <p><strong>{client.contactPerson.name}</strong></p>
                        <p>{client.contactPerson.position}</p>
                    </div>
                </div>
                <button onClick={closeClientDetails}>Close</button>
            </motion.div>
        </motion.div>
    );

    return (
        <div className="clients-container">
        <div className="header-top-container">
        <Header />
        </div>
            <main className="clients-main">
                <h1><FontAwesomeIcon icon={faGlobe} /> Our Clients</h1>
                <div className="clients-grid">
                    {clients.map(client => (
                        <ClientCard key={client.id} client={client} />
                    ))}
                </div>
            </main>
            {/* animations */}
            <AnimatePresence>
                {selectedClient && <ClientDetails client={selectedClient} />}
            </AnimatePresence>
        </div>
    );
};

export default Clients;