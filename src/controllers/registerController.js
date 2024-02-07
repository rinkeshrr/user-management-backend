// registerController.js
const Employee = require('../models/employeeModel');
const User = require('../models/userModel');
// const exceljs = require('exceljs');
// const path = require('path');


const register = async (req, res) => {
  console.log(req.body);
  const { first_name, last_name, employeeId, email, contact_no, roleId } = req.body;
  const currentDate = new Date().toLocaleString().replace(/,/g, '');
  // const status = 'active';

  try {
    const existingUser = await User.findOne({ employeeId });

    if (existingUser) {
      console.log('Already registered');
      res.status(200).send('Already Registered With This Employee ID');
    } else {
      // Add a new entry to MongoDB using the Employee model
      const newUser = new User({
        first_name,
        last_name,
        employeeId,
        email,
        contact_no,
        password:'0123',
        roleId ,
        is_active: 'Y',
        is_delete: 'N',
        createdDate: currentDate,
        updatedDate: currentDate,
      });

      await newUser.save();

      console.log('New registration added to MongoDB');
      res.status(200).send('New employee registration added successfully');
    }
  } catch (error) {
    console.error('Error updating MongoDB:', error);
    res.status(500).send('Error updating MongoDB');
  }
};

module.exports = { register };