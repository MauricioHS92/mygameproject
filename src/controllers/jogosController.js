const jogo = require('../models/jogo');
const jogos = require('../database/db.json');

const jogosController =  {

    trazerJogos: (req, res) =>{
        const jogos = jogo.findAll();
        res.render('telaGradeDeJogos', {jogos});
    },
    salvarJogo: (req, res) =>{
        const jogoAdicionado = jogo.finByName(); 
        console.log({jogoAdicionado});

        // console.log(req.body);
        // res.render('carrinhoDeCompras', {jogos});
    }
}

module.exports = jogosController;