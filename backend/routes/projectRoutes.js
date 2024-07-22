const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// GET /api/projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
