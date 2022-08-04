var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/inscricao',(req, res) => {
  res.render('inscricao');
});

router.get('/perfilDoUsuarioHistoricoDePedidos',(req, res) => {
  res.render('perfilDoUsuarioHistoricoDePedidos');
});

router.get('/faleConosco',(req, res) => {
  res.render('faleConosco');
});


module.exports = router;
