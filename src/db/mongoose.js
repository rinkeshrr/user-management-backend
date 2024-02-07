// db/mongoose.js
const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/user_management'; // replace with your MongoDB connection string
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error connecting to MongoDB:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = mongoose;