const express = require('express');

const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/AuthController');

const router = express.Router();

// ======================
// Rotas Públicas
// (Usuários não logados)
// ======================

//Rota para renderizar o formulario de inscricao
router.get('/inscricao', UserController.formularioCriacao);

// Renderiza a página inicial de login
// Utiliza o middleware redirectAuthenticatedUser para redirecionar o usuário logado
router.get('/login', AuthController.formularioLogin);

// Renderiza a página de cadastro de usuário
// Utiliza o middleware redirectAuthenticatedUser para redirecionar o usuário logado
router.get('/sign-up', UserController.renderFormCadastro);

// Rota para fazer o login do usuário
router.post('/login', AuthController.login);

// Rota para cadastrar um novo usuário
router.post('/cadastro', UserController.create);


//ROTAS PARA JOGOS
const jogosController = require('../controllers/jogosController');

router.get('/', jogosController.trazerJogos);
//rota que irá receber os jogos
router.get('/:id', jogosController.selecionarJogo);

//rota que levará o usuário a lista de jogos
// router.get('/genero', jogosController.listarJogos);



//ROTA PARA FALE CONOSCO
const contatoController = require('../controllers/contatoController');


router.get('/', contatoController.formularioFaleConosco);
router.post('/enviar', contatoController.enviar);











module.exports = router;