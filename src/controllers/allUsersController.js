// allUsersController.js
const User = require('../models/userModel');


const getUsers = async (req, res) => {
    try {
      // Retrieve all employees from MongoDB
      const users = await User.find();
  
      if (users.length > 0) {
        const detailsList = users.map(user => ({
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
        }));
  
        res.status(200).send(detailsList);
      } else {
        res.status(404).send('Details not found');
      }
    } catch (error) {
      console.error('Error fetching details from MongoDB:', error);
      res.status(500).send('Error fetching details');
    }
};
  
module.exports = { getUsers };