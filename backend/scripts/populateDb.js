const axios = require('axios');
const employees = require('./employeeData');

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
      console.error(`Error adding employee: ${employee.name}`);
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error(`Status: ${error.response.status}`);
        console.error(`Data:`, error.response.data);
      } else if (error.request) {
        // The request was made but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error:', error.message);
      }
    }
  }
}

populateDb();