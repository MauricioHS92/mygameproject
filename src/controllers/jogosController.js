const jogo = require('../models/jogo');

const jogosController =  {

    trazerJogos: (req, res) =>{
        const jogos = jogo.findAll();
        res.render('telaGradeDeJogos', {jogos});
    }
}

module.exports = jogosController;