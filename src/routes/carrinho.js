const express = require('express');
const router = express.Router();

const comprasController = require('../controllers/comprasController');

router.get('/', comprasController.carrinho);


module.exports = router;