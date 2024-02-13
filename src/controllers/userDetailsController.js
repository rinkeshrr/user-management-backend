// detailsController.js
const User = require('../models/userModel');
// const exceljs = require('exceljs');
// const path = require('path');


const getDetails = async (req, res) => {
  const id = req.params.id;
  const token = req.cookies.access_token;
  // console.log('cookie_Token', token);

  try {
    // Retrieve employee details from MongoDB
    const user = await User.findOne({ employeeId: id });

    if (user) {
      const details = {
        first_name: user.first_name,
        last_name: user.last_name,
        employeeId: user.employeeId,
        email: user.email,
        contact_no: user.contact_no,
        role_id: user.roleId,
        is_active: user.is_active,
        is_delete: user.is_delete,
        registrationDate: user.createdDate,
        lastUpdatedDate: user.updatedDate,
        password: user.password
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