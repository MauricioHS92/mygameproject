const express = require('express');
const router = express.Router();

const jogosController = require('../controllers/jogosController');

router.get('/', jogosController.trazerJogos);
router.post('/salvar', jogosController.selecionarJogo);

module.exports = router;