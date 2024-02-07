// toggleStatusController.js
const Employee = require('../models/employeeModel');
// const exceljs = require('exceljs');
// const path = require('path');


const toggleStatus = async (req, res) => {
  const id = req.params.id;
  const { status } = req.body;

  try {
    // Find the employee in MongoDB
    const employee = await Employee.findOne({ employeeId: id });

    if (employee) {
      // Toggle the status and save the changes
      employee.status = status;
      await employee.save();

      console.log(`User status toggled to ${status} in MongoDB`);
      res.status(200).send(`User status toggled to ${status} successfully`);
    } else {
      res.status(404).send('User not found');
    }
  } catch (error) {
    console.error('Error toggling user status in MongoDB:', error);
    res.status(500).send('Error toggling user status');
  }
};

module.exports = { toggleStatus };