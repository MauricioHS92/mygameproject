const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController')

router.get('/inscricao', usuarioController.formularioCriacao);
router.post('/create', usuarioController.create);

router.get('/meusDados/:id', usuarioController.meusDados);

module.exports = router;