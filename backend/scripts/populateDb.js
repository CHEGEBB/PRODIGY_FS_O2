const axios = require('axios');
const employees = require('./employeeData'); // Create this file with your employee data

async function populateDb() {
  for (let employee of employees) {
    try {
      const response = await axios.post('http://localhost:5000/api/employees', {
        ...employee,
        gender: Math.random() > 0.5 ? 'men' : 'women',
        imageId: Math.floor(Math.random() * 99) + 1
      });
      console.log(`Added employee: ${response.data.name}`);
    } catch (error) {
      console.error(`Error adding employee: ${employee.name}`, error.message);
    }
  }
}

populateDb();