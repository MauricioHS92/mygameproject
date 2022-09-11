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
    },

    listarJogos: (req, res) =>{
        const {nomeDoJogo} = req.params;
        if({nomeDoJogo} == "esportes"){
            let listaDeJogos = jogo.esportes()
            // res.render('telaGradeDeJogos', {listaDeJogos})
        }
        console.log('Olá' + listaDeJogos)
        // if({name} == "esportes"){
        //     let listaDeJogos = jogo.esportes()
        //     res.render('telaGradeDeJogos', {listaDeJogos})
        // }
        // if({name} == "fps"){
        //     let listaDeJogos = jogo.fps()
        //     res.render('telaGradeDeJogos', {listaDeJogos})
        // }
        // if({name} == "outros"){
        //     let listaDeJogos = jogo.outros()
        //     res.render('telaGradeDeJogos', {listaDeJogos})
        // }
    }
}

module.exports = jogosController;