const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
require('./src/db/mongoose');
const authenticateToken = require('./src/middleware/authenticate');
// const Cookies = require('cookies');
const cookieParser = require('cookie-parser');

const corsOptions = {
    origin: true, // Reflect the request origin
    credentials: true, // Enable sending cookies across origins
};
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes
app.use(cookieParser());
app.use(cors(corsOptions));

// Routes
const registerRoute = require('./src/routes/register');
const loginRoute = require('./src/routes/login');
const deviceDetailsRoute = require('./src/routes/deviceDetails');
const userDetailsRoute = require('./src/routes/userDetails');
const allUsersRoute = require('./src/routes/allUsers');
const updateRoute = require('./src/routes/update');
const toggleStatusRoute = require('./src/routes/toggleStatus');
const deleteRoute = require('./src/routes/delete');

app.use('/api/user-register', authenticateToken, registerRoute);
app.use('/api/login', loginRoute);
app.use('/api/device-details', authenticateToken, deviceDetailsRoute);
app.use('/api/user-details', authenticateToken, userDetailsRoute);
app.use('/api/all-users', authenticateToken, allUsersRoute);
app.use('/api/update-user', authenticateToken, updateRoute);
app.use('/api/toggle-status', authenticateToken, toggleStatusRoute);
app.use('/api/delete-user', authenticateToken, deleteRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

