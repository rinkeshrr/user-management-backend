// loginController.js
// const Employee = require('../models/employeeModel');
const User = require('../models/userModel');
// const exceljs = require('exceljs');
// const path = require('path');


const login = async (req, res) => {
  const { employeeId, password } = req.body;

  try {
    // Check if there is an employee with the specified Employee ID and password
    const existingUser = await User.findOne({ employeeId, password });

    if (existingUser) {
      console.log('User successfully logged in');
      res.status(200).send('User logged in successfully');
    } else {
      console.log('No User Found');
      res.status(401).send('Invalid credentials');
    }
  } catch (error) {
    console.error('Error querying MongoDB:', error);
    res.status(500).send('Error querying MongoDB');
  }
};

module.exports = { login };