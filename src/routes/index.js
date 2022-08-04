var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/perfilDoUsuarioMeuEndereco',(req, res) => {
  res.render('perfilDoUsuarioMeuEndereco');
});

module.exports = router;
