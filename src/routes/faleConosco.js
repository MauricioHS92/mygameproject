const express = require('express');
const router = express.Router();

const faleConoscoController = require('../controllers/faleConoscoController');

router.get('/faleConosco', faleConoscoController.formularioFaleConosco);

router.post('/', faleConoscoController.enviar);

module.exports = router;