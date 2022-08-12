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

router.get('/perfilDoUsuarioMeuEndereco',(req, res) => {
  res.render('perfilDoUsuarioMeuEndereco');
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

router.get('/carrinhoDeCompras',(req, res) => {
  res.render('carrinhoDeCompras');
});

router.get('/telaLogin',(req, res) => {
  res.render('telaLogin');
});

router.get('/telaDeJogo',(req, res) => {
  res.render('telaDeJogo');
});


module.exports = router;
