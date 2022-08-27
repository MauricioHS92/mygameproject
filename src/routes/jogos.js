const express = require('express');
const router = express.Router();

const jogosController = require('../controllers/jogosController');

router.get('/', jogosController.trazerJogos);

module.exports = router;