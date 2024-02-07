// models/userModel.js
const mongoose = require('../db/mongoose');

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  employeeId: { type: String, unique: true },
  email: String,
  contact_no: String,
  password: String,
  roleId: String,
  is_active: String,
  is_delete: String,
  createdDate: String,
  updatedDate: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;