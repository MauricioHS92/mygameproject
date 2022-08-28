const express = require('express');
const router = express.Router();

const loginController = require('../controllers/loginController');
const usuarioController = require('../controllers/usuarioController');

router.get('/', loginController.formularioLogin);

router.post('/enter', loginController.enter);

module.exports = router;
