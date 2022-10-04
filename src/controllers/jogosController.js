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

    //Criando método de selecionar jogo
    escolherJogo: async (req, res) => {
        try{
            const {id} = req.params;
            const jogo = await Jogo.findById(id);
            res.render('telaDeJogo', {jogo});
        } catch ( error ) {
            console.log( error )
        }
    }
}
module.exports = jogosController;