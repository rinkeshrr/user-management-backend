// deviceDetailsRoutes.js
const express = require('express');
const deviceDetailsController = require('../controllers/deviceDetailsController');

const router = express.Router();

router.get('/:id', deviceDetailsController.getDetails);

module.exports = router;
