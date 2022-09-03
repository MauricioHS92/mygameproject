const express = require('express');
const router = express.Router();

const comprasController = require('../controllers/comprasController');

router.get('/', comprasController.carrinho);
// router.get('/', comprasController.checkout);


module.exports = router;



