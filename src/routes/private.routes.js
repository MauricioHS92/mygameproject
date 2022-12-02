const express = require("express");
const UserController = require("../controllers/UserController");

const AuthController = require("../controllers/AuthController");

const comprasController = require("../controllers/comprasController");

const router = express.Router();

// ==================
// Rotas Privadas
// (Usuários logados)
// ==================

// Rota para fazer o logout do usuário
router.post("/logout", AuthController.logout);

//ROTA PARA COMPRAS
router.get("/checkout", comprasController.checkout);
router.get("/carrinho", comprasController.carrinho);
//rota que deleta um jogo na página de checkout
router.delete("/checkout/deletar", comprasController.deletarJogo);
//rota que deleta um jogo na página de carrinho
router.delete("/carrinhoDeCompras/deletar", comprasController.deletarJogo);

router.get("/telaPrincipalUsuario", AuthController.userPerfil);

module.exports = router;
