import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import "../sass/Projects.scss";
import axios from 'axios';
import { motion } from 'framer-motion';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/projects');
            setProjects(response.data.slice(0, 12)); 
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
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index} 
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
                                        {project.teamMembers.map((member, idx) => (
                                            <motion.li 
                                                key={idx}
                                                whileHover={{ 
                                                    scale: 1.1, 
                                                    color: '#ff6b6b',
                                                    transition: { duration: 0.2 }
                                                }}
                                            >
                                                {member}
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
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
};

export default Projects;