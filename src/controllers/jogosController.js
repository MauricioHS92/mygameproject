const jogo = require('../models/jogo');
const jogos = require('../database/db.json');

const jogosController =  {

    trazerJogos: (req, res) =>{
        const jogos = jogo.findAll();
        res.render('telaGradeDeJogos', {jogos});
    },
<<<<<<< HEAD
    salvarJogo: (req, res) =>{
        const jogoAdicionado = jogo.finByName(); 
        console.log({jogoAdicionado});

        // console.log(req.body);
        // res.render('carrinhoDeCompras', {jogos});
=======
    selecionarJogo: (req, res) =>{
        const {id} = req.params;
        const jogoSelecionado = jogo.findById(id);
        res.render('jogos', {jogoSelecionado});
        //console.log(jogoSelecionado());
        //console.log(jogoSelecionado)
        //console.log(req.body);
        //res.render('carrinhoDeCompras', {jogos});
>>>>>>> f9c2f5d8d1c3661c7ff2bf7d906fd28b557ea318
    }
}

module.exports = jogosController;