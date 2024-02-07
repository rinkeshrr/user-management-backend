// models/employeeModel.js
const mongoose = require('../db/mongoose');

const employeeSchema = new mongoose.Schema({
  name: String,
  employeeId: { type: String, unique: true },
  laptopModel: String,
  macAddress: String,
  createDate: String,
  updateDate: String,
  status: String,
  password: String,
});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;