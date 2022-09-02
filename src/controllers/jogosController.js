const jogo = require('../models/jogo');

const jogosController =  {

    trazerJogos: (req, res) =>{
        const jogos = jogo.findAll();
        res.render('telaGradeDeJogos', {jogos});
    },

    selecionarJogo: (req, res) =>{
        const {id} = req.params;
        const jogoSelecionado = jogo.findById(id);
        res.render('telaDeJogo', {jogoSelecionado});

        //console.log(jogoSelecionado());
        //console.log(jogoSelecionado)
        //console.log(req.body);
        //res.render('carrinhoDeCompras', {jogos});
    }
}

module.exports = jogosController;