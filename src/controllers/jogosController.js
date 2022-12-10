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

  acao: async (req, res) => {
    try { 
      const jogosAcao = await Jogo.findAll({ where: { genero : 'Ação' }})
      res.render('jogosAcao', { jogosAcao })
    } catch (error) {
      console.log(error)
    }
  }, 

  esportes: async (req, res) => {
    try { 
      const jogosEsportes = await Jogo.findAll({ where: { genero : 'Esportes' }})
      res.render('jogosEsportes', { jogosEsportes })
    } catch (error) {
      console.log(error)
    }
  },

  aventura: async (req, res) => {
    try { 
      const jogosAventura = await Jogo.findAll({ where: { genero : 'Aventura' }})
      res.render('jogosAventura', { jogosAventura })
    } catch (error) {
      console.log(error)
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
