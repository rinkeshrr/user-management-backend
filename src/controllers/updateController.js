// updateController.js
const User = require('../models/userModel');
// const exceljs = require('exceljs');
// const path = require('path');


const updateDetails = async (req, res) => {
  // console.log(req.body)
  const id = req.params.id;
  const updatedDetails = req.body;

  try {
    // Find the employee in MongoDB
    const employee = await User.findOne({ employeeId: id });

    if (employee) {
      // Update the employee details
      employee.first_name = updatedDetails.first_name;
      employee.last_name = updatedDetails.last_name;
      employee.employeeId = updatedDetails.employeeId;
      employee.email = updatedDetails.email;
      employee.contact_no = updatedDetails.contact_no;
      employee.roleId = updatedDetails.role_id;
      employee.updatedDate = new Date().toLocaleString().replace(/,/g, '');

      // Save the changes
      await employee.save();

      console.log('Employee details updated in MongoDB');
      res.status(200).send('Employee details updated successfully');
    } else {
      res.status(404).send('Employee not found');
    }
  } catch (error) {
    console.error('Error updating employee details in MongoDB:', error);
    res.status(500).send('Error updating employee details');
  }
};


module.exports = { updateDetails };