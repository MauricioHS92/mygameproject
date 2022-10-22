const { Jogo } = require("../../models");

const jogosController = {
  trazerJogos: async (req, res) => {
    try {
      const jogos = await Jogo.findAll();
      const jogosComJson = jogos.map(jogo => {
        jogo.id_jogo, jogo.nome, jogo.imagem, jogo.preco;
      });
      res.render("telaGradeDeJogos", { jogos });
      console.log(jogos);
    } catch (error) {
      console.log(error);
    }
  },

  //Criando método de selecionar jogo
  escolherJogo: async (req, res) => {
    try {
      const { id } = req.params;
      const jogo = await Jogo.findByPk(id);
      res.render("telaDeJogo", { jogo });
    } catch (error) {
      console.log(error);
    }
  },
};
module.exports = jogosController;
