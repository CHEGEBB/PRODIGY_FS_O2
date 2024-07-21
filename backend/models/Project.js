const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
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
        default: []
    },
    progress: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;