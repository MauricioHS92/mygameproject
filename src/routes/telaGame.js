const express = require('express');
const router = express.Router();

const telaDeJogoController = require('../controllers/telaDeJogoController');

//Criando rota da Tela de Jogo//

router.get('/', telaDeJogoController.pageJogo);

module.exports = router;