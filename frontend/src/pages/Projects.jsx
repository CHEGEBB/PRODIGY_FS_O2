import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import "../sass/Projects.scss";
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/projects');
            const projectsWithAvatars = response.data.slice(0, 12).map(project => ({
                ...project,
                teamMembers: project.teamMembers.map(member => ({
                    name: member,
                    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(member)}&background=random`
                }))
            }));
            setProjects(projectsWithAvatars);
        } catch (error) {
            console.error('Error fetching projects:', error.message);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        }
    };

    const openModal = (project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const Modal = ({ project }) => (
        <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
        >
            <motion.div 
                className="modal-content"
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
            >
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <h3>Team Members:</h3>
                <div className="team-members-grid">
                    {project.teamMembers.map((member, idx) => (
                        <div key={member.name} className="team-member">
                            <img src={member.avatar} alt={member.name} />
                            <p>{member.name}</p>
                        </div>
                    ))}
                </div>
                <button onClick={closeModal}>Close</button>
            </motion.div>
        </motion.div>
    );

    return (
        <div className="projects-container">
            <div className="header-cont">
                <Header />
            </div>
            <motion.div 
                className="main-content"
                initial="hidden"
                animate="visible"
                variants={containerVariants}
            >
                <motion.h1
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    Our Tech Projects
                </motion.h1>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <motion.div 
                            key={project.id}  // Use a unique identifier for the key
                            className="project-card"
                            variants={cardVariants}
                        >
                            <div className="project-image">
                                <img src={project.image} alt={project.name} />
                            </div>
                            <div className="project-details">
                                <h2>{project.name}</h2>
                                <p>{project.description}</p>
                                <div className="team-members">
                                    <h3>Team Members:</h3>
                                    <ul>
                                        {project.teamMembers.map((member) => (
                                            <motion.li 
                                                key={member.name}  // Use a unique identifier for the key
                                                whileHover={{ 
                                                    scale: 1.1, 
                                                    color: '#ff6b6b',
                                                    transition: { duration: 0.2 }
                                                }}
                                            >
                                                <img src={member.avatar} alt={member.name} />
                                                {member.name}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="progress-bar-container">
                                    <motion.div 
                                        className="progress-bar"
                                        initial={{ width: 0 }}
                                        animate={{ width: `${project.progress}%` }}
                                        transition={{ duration: 1, ease: "easeInOut" }}
                                    >
                                        <span className="progress-text">{project.progress}%</span>
                                    </motion.div>
                                </div>
                                <div className="project-actions">
                                    <button onClick={() => openModal(project)}>
                                        <FontAwesomeIcon icon={faEye} /> View
                                    </button>
                                    <button onClick={() => openModal(project)}>
                                        <FontAwesomeIcon icon={faEdit} /> Edit
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <AnimatePresence>
                {modalOpen && selectedProject && (
                    <Modal project={selectedProject} />
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
