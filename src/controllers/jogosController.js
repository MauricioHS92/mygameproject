const { Jogo } = require('../../models');

const jogosController = {

    trazerJogos: async (req, res) => {
        try {
            const jogos = await Jogo.findAll();
            res.render('telaGradeDeJogos', { jogos });
        } catch (error) {
            console.log(error)
        }

    },

    selecionarJogo: async (req, res) => {
        try {
            const { id } = await req.params;
            const jogoSelecionado = await Jogo.findById(id);
            res.render('telaDeJogo', { jogoSelecionado });
        } catch (error) {
            console.log(error)
        }
    }
}

listarJogos: (req, res) => {
    // const {nomeDoJogo} = req.params;
    // if({nomeDoJogo} == "esportes"){
    //     let listaDeJogos = Jogo.esportes()
    //     // res.render('telaGradeDeJogos', {listaDeJogos})
    // }
    // console.log('Olá' + listaDeJogos)
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
}


module.exports = jogosController;