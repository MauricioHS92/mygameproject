const jogo = require('../models/jogo');
const jogos = require('../database/db.json');

const jogosController =  {

    trazerJogos: (req, res) =>{
        const jogos = jogo.findAll();
        res.render('telaGradeDeJogos', {jogos});
    },
    selecionarJogo: (req, res) =>{
        const jogoSelecionado = jogo.findById();

        console.log(req.body);
        // res.render('carrinhoDeCompras', {jogos});
    }
}

module.exports = jogosController;