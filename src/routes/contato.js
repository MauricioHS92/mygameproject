const express = require('express');
const router = express.Router();

const contatoController = require('../controllers/contatoController');


router.get('/faleConosco', contatoController.formularioFaleConosco);
router.post('/enviar', contatoController.enviar);

module.exports = router;