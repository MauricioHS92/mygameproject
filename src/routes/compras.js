const express = require('express');
const router = express.Router();

const comprasController = require('../controllers/comprasController');
const jogosController = require('../controllers/jogosController');


router.get('/checkout', comprasController.checkout);
router.get('/carrinho', comprasController.carrinho);
//rota que deleta um jogo na página de checkout
router.delete('/checkout/deletar', comprasController.deletarJogo);
//rota que deleta um jogo na página de carrinho
router.delete('/carrinhoDeCompras/deletar', comprasController.deletarJogo);

//rota para mostrar os jogos na grade de jogos
router.get('/jogos', jogosController.trazerJogos);
//rota para renderizar em uma tela individual o jogo escolhido
router.get('/jogos/:id', jogosController.selecionarJogo);

module.exports = router;



