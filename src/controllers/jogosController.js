const jogo = require('../models/jogo');
const jogos = require('../database/db.json');

const jogosController =  {

    trazerJogos: (req, res) =>{
        const jogos = jogo.findAll();
        res.render('telaGradeDeJogos', {jogos});
    },

    selecionarJogo: (req, res) =>{
        const jogoSelecionado = jogo.findById();
        res.redirect('telaGame', {jogoSelecionado});
        //console.log(jogoSelecionado());
        //console.log(jogoSelecionado)
        //console.log(req.body);
        //res.render('carrinhoDeCompras', {jogos});
    }
}

module.exports = jogosController;