const express = require('express');
const router = express.Router();

const jogosController = require('../controllers/jogosController');

router.get('/', jogosController.trazerJogos);
//rota que irá receber os jogos
router.get('/:id', jogosController.selecionarJogo);

//rota que levará o usuário a lista de jogos
router.get('/genero', jogosController.listarJogos);



module.exports = router;