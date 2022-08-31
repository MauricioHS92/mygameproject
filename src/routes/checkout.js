const express = require('express');
const router = express.Router();

const compraController = require('../controllers/compraController');

router.get('/', compraController.checkout);

module.exports = router;



