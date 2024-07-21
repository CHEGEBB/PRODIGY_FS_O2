const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const employeeRoutes = require('./routes/employeeRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

// Routes
app.use('/api/employees', employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Example: Create a new project
app.post('/api/projects', async (req, res) => {
  try {
      const newProject = new Project(req.body);
      await newProject.save();
      res.status(201).json(newProject);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
});

// Example: Get all projects
app.get('/api/projects', async (req, res) => {
  try {
      const projects = await Project.find();
      res.json(projects);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});