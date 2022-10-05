const express = require('express');
const UserController = require('../controllers/AuthController');

const AuthController = require('../controllers/AuthController');

const comprasController = require('../controllers/comprasController');

const router = express.Router();

// ==================
// Rotas Privadas
// (Usuários logados)
// ==================

// Renderiza a página restrita
router.get('/restrito', AuthController.renderAreaRestrita);

// Rota para fazer o logout do usuário
router.post('/logout', AuthController.logout);

//ROTA PARA COMPRAS

router.get('/checkout', comprasController.checkout);
router.get('/carrinho', comprasController.carrinho);
//rota que deleta um jogo na página de checkout
router.delete('/checkout/deletar', comprasController.deletarJogo);
//rota que deleta um jogo na página de carrinho
router.delete('/carrinhoDeCompras/deletar', comprasController.deletarJogo);


//router.get('/login', AuthController.login)


module.exports = router;