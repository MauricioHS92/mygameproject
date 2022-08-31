const express = require('express');
const router = express.Router();

const jogosController = require('../controllers/jogosController');

router.get('/', jogosController.trazerJogos);
//rota que irá receber os jogos
router.get('/telaDeJogo/:id', jogosController.selecionarJogo);

module.exports = router;