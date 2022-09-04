const express = require('express');
const router = express.Router();

const usuarioController = require('../controllers/usuarioController')

router.get('/', usuarioController.formularioCriacao);
router.post('/create', usuarioController.create);

router.get('/meusDados/:id', usuarioController.meusDados);

router.get('/meuEndereco/:id', usuarioController.meuEndereco);

module.exports = router;