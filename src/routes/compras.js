const express = require('express');
const router = express.Router();

const comprasController = require('../controllers/comprasController');


router.get('/checkout', comprasController.checkout);
router.get('/carrinho', comprasController.carrinho);


module.exports = router;



