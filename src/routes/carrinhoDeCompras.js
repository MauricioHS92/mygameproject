const express = require('express');
const router = express.Router();

const carrinhoDeComprasController = require('../controllers/carrinhoDeComprasController');

//rota para carrinho de compras usando o controller
router.get('/carrinhoDeCompras', carrinhoDeComprasController.index);

module.exports = router;

