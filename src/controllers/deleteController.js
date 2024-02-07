// deleteController.js
const User = require('../models/userModel');
// const exceljs = require('exceljs');
// const path = require('path');



const deleteEntry = async (req, res) => {
  const id = req.params.id;

  try {
    // Find the employee in MongoDB
    const employee = await User.findOne({ employeeId: id });

    if (employee) {
      // Delete the employee
      await employee.deleteOne();
      console.log('Employee entry deleted from MongoDB');
      res.status(200).send('Employee entry deleted successfully');
    } else {
      res.status(404).send('Employee entry not found');
    }
  } catch (error) {
    console.error('Error deleting employee entry from MongoDB:', error);
    res.status(500).send('Error deleting employee entry from MongoDB');
  }
};

module.exports = { deleteEntry };
