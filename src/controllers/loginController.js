require('dotenv').config()
const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// const Cookies = require('cookies');


const login = async (req, res) => {
  const saltRounds = 10;
  const { employeeId, password } = req.body;

  try {
    // Check if there is an employee with the specified Employee ID and password
    const existingUser = await User.findOne({ employeeId });

    if (!existingUser) {
      return res.status(401).json({ message: 'Invalid employeeID or password' });
    }

    const passwordMatch = await bcrypt.compare(password, existingUser.password);

    if (passwordMatch) {
      console.log('User successfully logged in');
      const accessToken = jwt.sign({ userId: existingUser._id, employeeId: existingUser.employeeId, password: existingUser.password }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
      res.cookie('username', 'john_doe', { maxAge: 900000, httpOnly: true });
      console.log(req.cookies.username);
      // res.cookie('access_token', accessToken, { httpOnly: true});
      // console.log('generated_Token', accessToken)
      // const token = req.cookies.access_token;
      // console.log('cookie_Token', token)
      res.status(200).json({ message: 'User successfully logged in', accessToken });
    } else {
      console.log('No User Found');
      return res.status(401).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.error('Error querying MongoDB:', error);
    res.status(500).send('Error querying MongoDB');
  }
};

module.exports = { login };