const express = require('express');
const router = express.Router();

const checkoutController = require('../controllers/telaCheckoutController');

router.get('/telaCheckout', checkoutController.checkout);

module.exports = router;



