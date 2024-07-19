const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  image: String,
  name: String,
  designation: String,
  department: String,
  mobile: String,
  email: String,
  salary: String,
  joiningDate: String,
  backstory: String
});

module.exports = mongoose.model('Employee', employeeSchema);