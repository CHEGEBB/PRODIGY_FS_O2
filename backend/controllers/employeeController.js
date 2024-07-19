const Employee = require('../models/Employee');

exports.getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createEmployee = async (req, res) => {
  const employee = new Employee({
    image: `https://randomuser.me/api/portraits/${req.body.gender}/${req.body.imageId}.jpg`,
    name: req.body.name,
    designation: req.body.designation,
    department: req.body.department,
    mobile: req.body.mobile,
    email: req.body.email,
    salary: req.body.salary,
    joiningDate: req.body.joiningDate,
    backstory: req.body.backstory
  });

  try {
    const newEmployee = await employee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add other CRUD operations as needed