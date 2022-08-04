var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/home',(req, res) => {
  res.render('home');
});

router.get('/inscricao',(req, res) => {
  res.render('inscricao');
});

router.get('/perfilDoUsuarioHistoricoDePedidos',(req, res) => {
  res.render('perfilDoUsuarioHistoricoDePedidos');
});

router.get('/perfilDoUsuarioMeuEndereço',(req, res) => {
  res.render('perfilDoUsuarioMeuEndereço');
});

router.get('/perfilDoUsuarioMeusDados',(req, res) => {
  res.render('perfilDoUsuarioMeusDados');
});

router.get('/faleConosco',(req, res) => {
  res.render('faleConosco');
});

router.get('/telaGradeDeJogos',(req, res) => {
  res.render('telaGradeDeJogos');
});

router.get('/telaCheckout',(req, res) => {
  res.render('telaCheckout');
});

router.get('/telaPrincipalUsuario',(req, res) => {
  res.render('telaPrincipalUsuario');
});
module.exports = router;
