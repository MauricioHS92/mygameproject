const express = require('express');
const router = express.Router();

const comprasController = require('../controllers/comprasController');


router.get('/checkout', comprasController.checkout);
router.get('/carrinho', comprasController.carrinho);
//rota que deleta um jogo na página de checkout
router.delete('/checkout/deletar', comprasController.deletarJogo);
//rota que deleta um jogo na página de carrinho
router.delete('/carrinhoDeCompras/deletar', comprasController.deletarJogo);

module.exports = router;



