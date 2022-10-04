const { Jogo } = require('../../models');

const jogosController = {

    trazerJogos: async (req, res) => {
        try {
            const jogos = await Jogo.findAll();
            res.render('telaGradeDeJogos', { jogos });
        } catch (error) {
            console.log(error)
        }

    }

    /*selecionarJogo: async (req, res) => {
        try {
            const { id } = await req.params;
            const jogoSelecionado = await Jogo.findById(id);
            res.render('telaDeJogo', { jogoSelecionado });
        } catch (error) {
            console.log(error)
        }
    }
}*/
}
module.exports = jogosController;