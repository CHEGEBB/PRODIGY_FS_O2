// projectController.js
const Project = require('../models/Project'); // Assuming you've defined your model in a separate file

// Get all projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a single project by ID
exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: 'Project not found' });
        res.json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new project
exports.createProject = async (req, res) => {
    const project = new Project({
        id: req.body.id,
        name: req.body.name,
        description: req.body.description,
        image: req.body.image,
        teamMembers: req.body.teamMembers,
        progress: req.body.progress
    });

    try {
        const newProject = await project.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a project
exports.updateProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: 'Project not found' });

        if (req.body.id) project.id = req.body.id;
        if (req.body.name) project.name = req.body.name;
        if (req.body.description) project.description = req.body.description;
        if (req.body.image) project.image = req.body.image;
        if (req.body.teamMembers) project.teamMembers = req.body.teamMembers;
        if (req.body.progress) project.progress = req.body.progress;

        const updatedProject = await project.save();
        res.json(updatedProject);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a project
exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: 'Project not found' });

        await project.remove();
        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};