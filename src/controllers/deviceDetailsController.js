// detailsController.js
const Employee = require('../models/employeeModel');
// const exceljs = require('exceljs');
// const path = require('path');


const getDetails = async (req, res) => {
  const id = req.params.id;

  try {
    // Retrieve employee details from MongoDB
    const employee = await Employee.findOne({ employeeId: id });

    if (employee) {
      const details = {
        name: employee.name,
        employeeId: employee.employeeId,
        laptopModel: employee.laptopModel,
        macAddress: employee.macAddress,
        registrationDate: employee.createDate,
        lastUpdatedDate: employee.updateDate,
        status: employee.status,
        password: employee.password
      };
      
      res.status(200).send(details);
    } else {
      res.status(404).send('Details not found');
    }
  } catch (error) {
    console.error('Error fetching details from MongoDB:', error);
    res.status(500).send('Error fetching details');
  }
};

module.exports = { getDetails };