import React, { useState, useEffect } from 'react';
import Header from "../components/Header";
import "../sass/Projects.scss";
import axios from 'axios';

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

    return (
        <div className="projects-container">
            <div className="header-cont">
                <Header />
            </div>
            <div className="main-content">
                <h1>Our Tech Projects</h1>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
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
                                            <li key={idx}>{member}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="progress-bar-container">
                                    <div 
                                        className="progress-bar" 
                                        style={{ width: `${project.progress}%` }}
                                    >
                                        {project.progress}%
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;