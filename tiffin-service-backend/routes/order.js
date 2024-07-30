const express = require('express');
const orderController = require('../controllers/orderController');
const router = express.Router();

router.use('/', orderController);

module.exports = router;
