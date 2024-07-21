// seedProjects.js
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mongoose = require('mongoose');
const projects = require('./populateProjectData');

// MongoDB connection string
const dbURI = process.env.MONGODB_URI;

if (!dbURI) {
  console.error('MONGODB_URI is not defined in the environment variables');
  process.exit(1);
}

// Project schema
const projectSchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  image: String,
  teamMembers: [String],
  progress: Number,
});

const Project = mongoose.model('Project', projectSchema);

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    return seedDatabase();
  })
  .then(() => {
    console.log('Database seeded successfully');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error:', error);
    mongoose.connection.close();
  });

async function seedDatabase() {
  try {
    // Clear existing projects
    await Project.deleteMany({});

    // Insert new projects
    await Project.insertMany(projects);

    console.log('Sample projects have been added to the database');
  } catch (error) {
    console.error('Error seeding projects:', error);
    throw error;
  }
}