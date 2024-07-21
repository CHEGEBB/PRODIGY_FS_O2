const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  teamMembers: {
    type: [String],
    required: true
  },
  progress: {
    type: Number,
    required: true
  }
});

const Project = mongoose.model('Project', ProjectSchema);
module.exports = Project;
