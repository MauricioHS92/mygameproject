const express = require("express");

const UserController = require("../controllers/UserController");
const AuthController = require("../controllers/AuthController");
const jogosController = require("../controllers/jogosController");


const router = express.Router();

// ======================
// Rotas Públicas
// (Usuários não logados)
// ======================

//Rota para página inicial
router.get("/home", UserController.home)

//Rota para renderizar o formulario de inscricao
router.get("/inscricao", UserController.formularioCriacao);

// Rota para cadastrar um novo usuário
router.post("/create", UserController.create);

// Renderiza a página inicial de login
// Utiliza o middleware redirectAuthenticatedUser para redirecionar o usuário logado
router.get("/login", AuthController.formularioLogin);

// Rota para fazer o login do usuário
router.post("/login", AuthController.login);

//ROTAS PARA JOGOS


router.get("/jogos", jogosController.trazerJogos);
router.get("/jogos/:id", jogosController.escolherJogo);

router.get('/acao', jogosController.acao )
//rota que irá receber os jogos
//router.get('/:id', jogosController.selecionarJogo);

//rota que levará o usuário a lista de jogos
// router.get('/genero', jogosController.listarJogos);

//ROTA PARA FALE CONOSCO
const contatoController = require("../controllers/contatoController");

router.get("/faleconosco", contatoController.formularioFaleConosco);
router.post("/faleconosco", contatoController.create);

module.exports = router;
