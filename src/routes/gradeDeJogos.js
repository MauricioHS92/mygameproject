const express = require('express');
const router = express.Router();

const gradeDeJogosController = require('../controllers/gradeDeJogosController');

router.get('/', gradeDeJogosController.viewPage);

module.exports = router;